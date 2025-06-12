const CACHE_NAME = 'cache-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './stylesheets/global.css',
    './stylesheets/index.css',
    './javascripts/index.js',
    './javascripts/darkmode.js',
    './assets/logo.png',
    './assets/dark.png',
    './assets/light.png',
    './site.webmanifest'
];

// Install
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(async cache => {
            for (const asset of ASSETS_TO_CACHE) {
                try {
                    await cache.add(asset);
                } catch (err) {
                    console.error(`❌ Failed to cache: ${asset}`, err);
                }
            }
        })
    );
});

// Activate & Caching
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.map(key => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            )
        )
    );
    self.clients.claim();
});

// Fetching
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request)
            .catch(() => caches.match(event.request))
    );
});