const fs = require("fs");

class MyPlugin {
	constructor(options) {
		this.options = options;
		let _files = [];

		if (options.files && Array.isArray(options.files)) {
			_files = options.files;
		}

		this.defaultFile = ["index.html", "main.js", ..._files];
		this.commonFile = [];
	}

	isCommonFile(value) {
		// const _reg = new RegExp(/^common(.(\d+))?.(js|css)$/)
		let _reg = new RegExp(/^common(.(\w+))?.(js|css)$/);
		return _reg.test(value);
	}

	isImageFile(value) {
		// const _reg = new RegExp(/^common(.(\d+))?.(js|css)$/)
		return value.startsWith("images/");
	}

	apply(compiler) {
		const isDEV = compiler.options.mode === "development";

		compiler.hooks.afterEmit.tapAsync("afterEmit", (compilation, callback) => {
			// 生成资源到 output 目录之后。
			this.commonFile = Object.keys(compilation.assets).reduce((pre, v) => {
				if (this.isCommonFile(v) || this.isImageFile(v)) {
					pre.push(v);
				}

				return pre;
			}, []);

			const cacheFilesStr = `const cacheFiles = ${JSON.stringify([
				...this.defaultFile,
				...this.commonFile,
			])}`;
			const cacheStorageStr = `const cacheStorageKey = 'cache-${Date.now()}'`;

			const serviceWorkerStr = `
      self.addEventListener("install", event => {
        self.skipWaiting();
        event.waitUntil(
          caches.open(cacheStorageKey).then((cache) => {
            console.log("open cache");
            return cache.addAll(cacheFiles);
          })
        );
      });
      
      self.addEventListener("activate", event => {
        // active事件中通常做一些过期资源释放的工作
        event.waitUntil(
          caches.keys().then(function(cacheNames) {
            return Promise.all(
              cacheNames.map(function(cacheName) {
                if (cacheName !== cacheStorageKey) {
                  return caches.delete(cacheName);
                }
              })
            );
          })
        );

        event.waitUntil(self.clients.claim());
      });
      `;

			const _writeStr = `
      ${cacheFilesStr}
      ${cacheStorageStr}
      ${serviceWorkerStr}
      `;
			fs.writeFile(
				`.${isDEV ? "" : "/dist/"}/service-worker.js`,
				_writeStr,
				function (err) {
					// fs.writeFile(`/service-worker.js`, _writeStr, function (err) {
					if (err) {
						console.error(err);
					} else {
						console.log("写入service-worker成功");
					}
				}
			);

			const _serviceWorkerAppStr = `
      if (navigator.serviceWorker) {
        navigator.serviceWorker.register('/service-worker.js')
            .then((req) => {
                console.log(req)
            })
            .catch(e => {
                console.log(e)
            })
      } else {
        alert('not support serviceWorker')
      }
      `;

			fs.writeFile(
				`.${isDEV ? "" : "/dist/"}/service-worker-app.js`,
				_serviceWorkerAppStr,
				function (err) {
					// fs.writeFile(`/service-worker-app.js`, _serviceWorkerAppStr, function (err) {
					if (err) {
						console.error(err);
					} else {
						console.log("写入service-worker-app成功");
					}
				}
			);

			callback();
		});
	}
}

module.exports = MyPlugin;
