self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
  
});

self.addEventListener('install',()=>self.skipWaiting())

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.open('servicebay').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/css/main.css',
        '/css/style.css',
        '/js/main.js',
        '/img/ico1.png',
        '/img/ico2.png',
        '/img/ico3.png',
        '/img/ico4.png',
        '/img/ico5.png',
        '/img/intro-img.svg',
        '/img/intro-bg.jpg',
        '/img/land-img.png',
        '/img/rev1.jpg',
        '/img/rev2.jpg',
        '/img/rev3.jpg',
        '/img/rev4.jpg',
        '/img/taxi-driver.svg',
        '/img/whatwedo.png',
        '/img/woman-footer.svg',
        '/img/baker.png',
        '/img/avatar3.png',
        '/img/avatar2.png',
        '/img/portfolio/p1.jpg',
        '/img/portfolio/p2.jpg',
        '/img/portfolio/p3.jpg',
        '/img/portfolio/p4.jpg',
        '/img/portfolio/p5.jpg',
        '/img/portfolio/p6.jpg',
        '/img/portfolio/p7.jpg',
        '/img/portfolio/p8.jpg',
        '/img/portfolio/p9.jpg',
        '/img/clients/p1.png',
        '/img/clients/p2.png',
        '/img/clients/p3.png',
        '/img/clients/p4.png',
        '/img/clients/p5.png',
        '/img/clients/p6.png',
        '/img/mainicon.png'

      ]).then(()=>self.skipWaiting())
      .catch(console.error);
    })
  );
 });
 
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open('servicebay')
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});
