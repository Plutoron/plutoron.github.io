
      const cacheFiles = ["index.html","main.js","images/webhook-setting.jpg?3dff130d5bae83e8a8a3649650259cec","images/webhook-config.jpeg?14a9fc8c5f84688f548f339d3d3e0f22","images/HTTP-simulated-interaction-diagram.png?3edcfede7fc5f342d2584c1e8e0f0712","images/HTTP-Request.png?f88ce3073d2e3b2355863675eff509fe","images/HTTP-Response.png?e201f2e2c0821a48b0d7e64f96342a10","images/event-loop.png?144645b50fccbfa42ef607a1f02315e9","images/macrotask&microtask.png?854e9333d3ed4335941f350752774b53","images/webpack-hot-update.jpeg?2dd1c0bff436166ce9bbedccd950d757","images/wechat-mini-app-frame.png?a6f99a100699873ae5768c262e3b3a6a","images/wechat-mini-app-data-change.png?c6c1aa1cb6e7c8ecee687b0b9b86810e","images/wechat-mini-app-v-dom-diff.png?d039718d9210941d6530a2d4716b3291","images/wechat-mini-app-action.png?c2b9c249aa8143f1a69a60db405ff286","images/vue-data-catch.png?e681c24702efc742404ac94f5f57a1a5","images/mobx-object-wrap.jpg?12a029728db3202a6ba12b0a75635400","images/event-loop-中文.png?144645b50fccbfa42ef607a1f02315e9","images/icons-catalog.png?9fd5ae2d75b9989ae3cf1c4e1da9e07f","images/react-update-before-16.png?a1629022b3356aa04ee96c99bbd92da4","images/life-of-a-frame.png?7fc1ad54efe0618d9ab668386273d7c9","images/react-idle-period-task.png?ff0977cabd4a1f1517fd4d70c2b480a9","images/react-fiber-progress.png?6fb177216494d2727e8ace8ccc85951f","common.4d7c1b4b297bd1682680.css","common.bc25b5230009a252b451.js"]
      const cacheStorageKey = 'cache-1590398422697'
      
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
      
      