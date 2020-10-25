const CACHE_NAME = 'go-do-good'
const urlsToCache = [
  '/',
]

self.addEventListener('install', (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache)
      }),
  )
})
