const APP_PREFIX = "Bark-Side-of-the-Moon";
const VERSION = "Version_01";

const CACHE_NAME = APP_PREFIX + VERSION;

const FILES_TO_CACHE = [
  "/",
  "/manifest.json",
  "/index.js",
  "/client/src/index.css",
  "/public/petfavicon-31x27.png",
  "/src/assets/images/dogs1.png",
  "/src/assets/images/dogs2.png",
  "/src/assets/images/dogs3.png",
  "/src/assets/images/dogs4.png",
  "/src/assets/images/dogs5.png",
  "/src/assets/images/dogs6.png",
  "/src/assets/images/donate.jpg",
  "/src/assets/images/thankyou.jpg",
  "/src/assets/images/paws.jpg",
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Your Files have been cached");
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      let cacheKeeplist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX);
      });
      cacheKeeplist.push(CACHE_NAME);

      return Promise.all(
        keyList.map(function (key, i) {
          if (cacheKeeplist.indexOf(key) === -1) {
            return caches.delete(keyList[i]);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", function (e) {
  console.log(e.response.url);
  e.respondWith(
    caches.match(e.response).then(function (response) {
      if (response) {
        return response;
      } else {
        return fetch(e.request);
      }
    })
  );
});

// export function register(config) {
//   if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
//     const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
//     if (publicUrl.origin !== window.location.origin) {
//       return;
//     }

//     window.addEventListener("load", () => {
//       const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

//       if (isLocalhost) {
//         checkValidServiceWorker(swUrl, config);

//         navigator.serviceWorker.ready.then(() => {
//           console.log(
//             "This web app is being served cache-first by a service " +
//               "worker. To learn more, visit https://bit.ly/CRA-PWA"
//           );
//         });
//       } else {
//         registerValidSW(swUrl, config);
//       }
//     });
//   }
// }

// function registerValidSW(swUrl, config) {
//   navigator.serviceWorker
//     .register(swUrl)
//     .then((registration) => {
//       registration.onupdatefound = () => {
//         const installingWorker = registration.installing;
//         if (installingWorker == null) {
//           return;
//         }
//         installingWorker.onstatechange = () => {
//           if (installingWorker.state === "installed") {
//             if (navigator.serviceWorker.controller) {
//               console.log(
//                 "New content is available and will be used when all " +
//                   "tabs for this page are closed. See https://bit.ly/CRA-PWA."
//               );

//               if (config && config.onUpdate) {
//                 config.onUpdate(registration);
//               }
//             } else {
//               console.log("Content is cached for offline use.");

//               if (config && config.onSuccess) {
//                 config.onSuccess(registration);
//               }
//             }
//           }
//         };
//       };
//     })
//     .catch((error) => {
//       console.error("Error during service worker registration:", error);
//     });
// }

// function checkValidServiceWorker(swUrl, config) {
//   fetch(swUrl, {
//     headers: { "Service-Worker": "script" },
//   })
//     .then((response) => {
//       const contentType = response.headers.get("content-type");
//       if (
//         response.status === 404 ||
//         (contentType != null && contentType.indexOf("javascript") === -1)
//       ) {
//         navigator.serviceWorker.ready.then((registration) => {
//           registration.unregister().then(() => {
//             window.location.reload();
//           });
//         });
//       } else {
//         registerValidSW(swUrl, config);
//       }
//     })
//     .catch(() => {
//       console.log(
//         "No internet connection found. App is running in offline mode."
//       );
//     });
// }

// export function unregister() {
//   if ("serviceWorker" in navigator) {
//     navigator.serviceWorker.ready
//       .then((registration) => {
//         registration.unregister();
//       })
//       .catch((error) => {
//         console.error(error.message);
//       });
//   }
// }
