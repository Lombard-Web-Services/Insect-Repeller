const version = '1.00',
    preCache = 'PRECACHE-1.00',
    cacheList = ['/','index.html','js/'];
self.addEventListener('install', function(e) {
    self.skipWaiting(), caches.open(preCache).then(e => {
        e.addAll(cacheList)
    })
}), self.addEventListener('activate', function(e) {
    e.waitUntil(caches.keys().then(e => {
        e.forEach(e => {
            e.indexOf('1.00') < 0 && caches.delete(e)
        })
    }))
}), self.addEventListener('fetch', function(e) {
    e.respondWith(caches.match(e.request).then(function(t) {
        return t || fetch(e.request)
    }))
});
