const CACHE_NAME = 'little-investor-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// 安装时缓存文件
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// 离线拦截请求，优先从缓存读取
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});