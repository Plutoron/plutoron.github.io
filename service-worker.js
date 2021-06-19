
      const cacheFiles = ["index.html","main.js","images/webhook-setting.jpg?baa3085bdd76e99095ec48a3fbd94ad0","images/webhook-config.jpeg?dddaaf25a643550eea46893565faa392","images/HTTP-simulated-interaction-diagram.png?25448cb50f9be31ebe93502397d58efe","images/HTTP-Request.png?2ebbea521fd2ca70f214209e471e4fd4","images/HTTP-Response.png?d94726044b55ae6048edafa9c0c2b5dd","images/event-loop.png?4118d4c68c99261a62da7dc7348d0fce","images/macrotask&microtask.png?0cdc3655c0c204c2f2f27e1f1947747f","images/webpack-hot-update.jpeg?8f080e546137615695957216d80e765c","images/wechat-mini-app-frame.png?8055616d05e364c2225592af848865dc","images/wechat-mini-app-data-change.png?f508d4c5b044430d79556d1ef22b1d47","images/wechat-mini-app-v-dom-diff.png?1e11794df1ca4660460bddfbdca2ad3a","images/wechat-mini-app-action.png?e39f8bec67ac3586b60b19bacc7402bd","images/vue-data-catch.png?607338b18c1e9c118bfae2ad7f0c553d","images/mobx-object-wrap.jpg?ea28ae696fdf3a5612ffc2ff0e9f49ad","images/event-loop-中文.png?4118d4c68c99261a62da7dc7348d0fce","images/icons-catalog.png?ae25da8808f1cbddcf9a0e1785a36949","images/react-update-before-16.png?4b324c10e85b6818d6e8480c9b4d8f43","images/life-of-a-frame.png?4028af638048e722c95e4d1293b101c8","images/react-idle-period-task.png?2ed7a260c747f1536cdb1c7bd6ab6702","images/react-fiber-progress.png?5e0ace0896de943f39542132297cdbb2","images/question_11.jpg?9756eeab7f860311b8e964d27a8cf353","images/新生代垃圾回收.png?a2d21b0e4050f2ad17d041183cabf555","images/实例对象和构造函数.png?b665a6db129ecefd35dd03110ffc51d4","images/螺旋矩阵.jpg?19654b0505b4f5ff66edf44ae1b70cd1","common.735c39c62761353d8e19.css","common.491a2d3a8889cd9e1059.js"]
      const cacheStorageKey = 'cache-1624082842681'
      
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
      
      