self.addEventListener('install', (e) => {
  console.log('Mikap PWA Yüklendi!');
});

self.addEventListener('fetch', (e) => {
  // Uygulamanın çevrimdışı da çalışabilmesi için ileride burayı doldurabiliriz.
});