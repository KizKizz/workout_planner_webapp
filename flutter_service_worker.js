'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d9e8c5b1b14234a0aa66f1f67210b42e",
".git/config": "63bd0a937754d50065638461d5591f7c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f11cfdcb11ac700aa3177690864e2a8a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a261c858e7b4a65d1d65e4699f532e7d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "56afb6d6d21d1a5fbc4d82e09dacd8b6",
".git/logs/refs/heads/main": "56afb6d6d21d1a5fbc4d82e09dacd8b6",
".git/logs/refs/remotes/origin/HEAD": "7598cf19cb4e202105e226c6666d0d5e",
".git/logs/refs/remotes/origin/main": "49cbfda0caff8b91163f1189738fee54",
".git/objects/02/7a4e103a1045353d9df5f55aac8ce6c4bb921b": "d21cf4b1a71fa04bc245a346e5f6ec22",
".git/objects/02/d50288b739e2775ca8beba8ab3e2ec9ba48e50": "dd8c768df436d1fae73ef490fc39e54a",
".git/objects/05/7a788e820a54f7791f8a5914b4892320011d33": "9433db7b210f2221eb2b9a664f766899",
".git/objects/1c/e82c620f8576aebe05e1302ff8b0b4aabc22ab": "c2645204c9e2366e5b926f4ca9409874",
".git/objects/28/70b832779f629b458cdca0c70bcbf9c0edf06e": "cfb864c2de80d8f7a557ffcda58a411d",
".git/objects/2d/6b695fbcd6f26181cc02f487b1313c1618a4d6": "fc2f762b00276d6b72c8081127164b12",
".git/objects/35/41412f1302b7a6403c7d12f1ac33d7006ef906": "516611542cfcdaa87fde49f157908944",
".git/objects/36/2e01f58685b273ed47ad2fc3f52d399e640fcc": "db73618e52a97422248bf9f7be776618",
".git/objects/3c/0d36e23a8f371fe30df01ee03bc2fd92b178e2": "af02a092f0c1f94b1b8d0404fdb812e4",
".git/objects/3f/5a46c702a9021564f8773147d3748a8682f616": "50f10cadd5e7651f941111788bdc0bd9",
".git/objects/4a/74f5a96a131488b2dc3edf96cc44b5d45e8db1": "b552982aff0d220db36c2c77c7d090d0",
".git/objects/50/d9b8963ba0ac5bfd26abae8754e5547af4aea4": "4b4ebad2563778657b72b078501fc4d1",
".git/objects/5b/71128e13033b9e6c30c21735793c258809b93b": "d82a056c5df1b545529162450ad69c85",
".git/objects/68/000eeda1362d7c60556c1945b5f8431809ff29": "339f266f482c34178d91462269fa652a",
".git/objects/6e/268d3ed1c08194869f39706fcd10bf4268127d": "bc2119031136da9f3cb19b9a05db52c0",
".git/objects/77/2bc23a87811394e3993968899cb691112024e0": "1a56ff723dafefb28bc7a5db88bdcdd5",
".git/objects/83/72c588e999af16244a13834ab021b1dec55236": "1fb15fb7dbd4fea37cf7c384f8fc253e",
".git/objects/84/67b2a021ec3e445e436a9714d252a8d4cfd50a": "f73f8927b12801ccbce3ad4261b40272",
".git/objects/8c/fd76f6c5a855987634da879545b59ad0c3a1b2": "9578fee5ee4ebda0b3bbcd7baefae515",
".git/objects/9b/5f95b8591846e1b096813de5c1311e15a1b27d": "e14d45b459d6c244b713bc9a31a7dc39",
".git/objects/9f/c2a622c29a3e77c7e4e48f621ea4796b158b12": "efe7712751ea10e0d4211fd20f9f7c65",
".git/objects/a1/64b721138dde6e4496f7c3fcf130ae3a8c8741": "c7247c5983bbe19f766229afe878da6d",
".git/objects/a8/9fed6b4ccd740b85cf694ece67b5d81d778c03": "14b5e226ea4449492d7e925d3a0122b1",
".git/objects/a8/ba9cda778ff62dd6cb52743844a177d74d5c98": "770f65aab085af6924829db2ceaf5409",
".git/objects/ad/cedd953342188ef97383da4b32282bd4afd0c9": "95b0734b26040e9c5eb779d62329d6cd",
".git/objects/b0/b8262cda4603c4d44b4e681d8d31d42655b856": "eec535bdf010260e4f72a97b7a806dc0",
".git/objects/b5/8b0d16285c9c01dcb3ec460b9b9b57414ea531": "fa078fb9900f67be1f8fbb2e906a888e",
".git/objects/d4/6964c848661ca6e0e06e560945b82bce641708": "4bd97a56bfaeddf7212556b154c90712",
".git/objects/d5/e1c81fa42c928bd8682307fe2c9476d45f6c9c": "f592cea7f78fbff12ec10b151cc9fbaf",
".git/objects/dd/0883d806b7c88983a324529094c25dfb52bcbc": "b18737b6e93f995739ff1a63051babe6",
".git/objects/de/52cc87231451aa363c42ca45c95f83f57bb733": "8d76408abc1ccd1c37164f03ee759746",
".git/objects/de/c2761258e9ffdab12d7919af13844e2edb3603": "3c03985f19d31133a3deba8dc6f00ceb",
".git/objects/df/3bed4593d5aa532de9d7a8e9a9df175681f46c": "962e6a267e69472733206be273efca08",
".git/objects/e5/863a0b457399edfe383dc364eb366b9c145cdc": "b277fbaf71c8247e9d9b4b9737a60c0e",
".git/objects/ea/4b14760a107d6acc1eada605785ae26661b2e9": "dde098c81b0d1872b6e98e0b1bfbf14b",
".git/objects/ed/040552bfe946840a79bc2c68c568d180aad54a": "981f0e3a73add8e66db8d2942ec2f96b",
".git/objects/f0/d8dee440df6805d4de7e6f8f548aad1dd6bc6e": "10ac68730828551e4fc11ac945d349ec",
".git/objects/pack/pack-7abad4cf3bc63faabfbb651eec050b2d654e00f5.idx": "6b7c923b30425f21faa56d7bfabfbbd0",
".git/objects/pack/pack-7abad4cf3bc63faabfbb651eec050b2d654e00f5.pack": "ab4cc2e11fc63e87aa7c15fe3bebfeb5",
".git/packed-refs": "7172c103c4f3691f7da87a580657c424",
".git/refs/heads/main": "dbc1db8cae1c36e9732d47b560d3de43",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "dbc1db8cae1c36e9732d47b560d3de43",
"assets/AssetManifest.json": "d66c60abb7e6ad54a7fedbd547d8c3cc",
"assets/assets/images/abs.png": "17fd13f0bd9434a831eee9a1c6aa87ee",
"assets/assets/images/applogo.png": "dda4e5dc36d25cf5e911544f9c91aab2",
"assets/assets/images/arms.png": "27d36c362b72b5448dd49a4ec622dba5",
"assets/assets/images/back.png": "a0bc6773daa5bac4b5f06d15462e5b87",
"assets/assets/images/chest.png": "586bac3e715fd7f47a785a6541571e62",
"assets/assets/images/fullbody.png": "2d96c207cf40f901eb29e008522ac1ba",
"assets/assets/images/legs.png": "0529b1d1b2f8ace0b3f2df5e6ae6f542",
"assets/assets/workout_instructions/abs_bm_ne.txt": "df4b52c3fec6bf89f93ae19700e7998d",
"assets/assets/workout_instructions/abs_bm_we.txt": "10179173374af5051525b9c48fcbce20",
"assets/assets/workout_instructions/abs_lw_ne.txt": "5136afc72956f598e65a92d093e9c863",
"assets/assets/workout_instructions/abs_lw_we.txt": "1dc3e6699b6f98c7885f1f94892de50a",
"assets/assets/workout_instructions/arm_bm_ne.txt": "2f647f5182e1808c222f274cfadaa957",
"assets/assets/workout_instructions/arm_bm_we.txt": "f7d09243dcd9b187da85d88c82388603",
"assets/assets/workout_instructions/arm_lw_ne.txt": "ef48b8d4085c6b5e846de4588dc500b4",
"assets/assets/workout_instructions/arm_lw_we.txt": "ff2486264221d0e763bb3ea6fec684ec",
"assets/assets/workout_instructions/back_bm_ne.txt": "6e3bd56b99edfb7bdddb2c259156a49a",
"assets/assets/workout_instructions/back_bm_we.txt": "6e548cbca42d4535d10395ff2e4fc297",
"assets/assets/workout_instructions/back_lw_ne.txt": "3e2f7d88f08b5fb7893bff137be1b1b3",
"assets/assets/workout_instructions/back_lw_we.txt": "165ecd7b1f821ef0d7515531d4fda1a0",
"assets/assets/workout_instructions/chest_bm_ne.txt": "5a3f30f6eb6f97889f54fe6036c2f0e3",
"assets/assets/workout_instructions/chest_bm_we.txt": "d962e963afb12bb48453caaa7aad652e",
"assets/assets/workout_instructions/chest_lw_ne.txt": "5749877fc1a1880cfd2a10551ce526c1",
"assets/assets/workout_instructions/chest_lw_we.txt": "98ba4ebf7a725721636b87e9a43ff990",
"assets/assets/workout_instructions/fullbody_bm_ne.txt": "f1a961cd8088a7abe1ef2c30153e6878",
"assets/assets/workout_instructions/fullbody_bm_we.txt": "e6229d647655b58fd291987b9b1e3cd8",
"assets/assets/workout_instructions/fullbody_lw_ne.txt": "5749877fc1a1880cfd2a10551ce526c1",
"assets/assets/workout_instructions/fullbody_lw_we.txt": "6fa379df452c5c4e7812f5524863162a",
"assets/assets/workout_instructions/leg_bm_ne.txt": "de15b0982a30556861976e09829597c9",
"assets/assets/workout_instructions/leg_bm_we.txt": "57cd454b77ceab1d2a3ebca32bd4e710",
"assets/assets/workout_instructions/leg_lw_ne.txt": "4052eeab6ec590242055e6ae4ff044b3",
"assets/assets/workout_instructions/leg_lw_we.txt": "d614682f181a869ee37933ea2e501d52",
"assets/FontManifest.json": "87e04ddd47dc3c85e29dd1916b289700",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "5090393473bac29eb59ddd36e56109fd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutterfire_ui/assets/countries.json": "8c937aac9f3b69162be779fbcd6199d2",
"assets/packages/flutterfire_ui/assets/fonts/SocialIcons.ttf": "a1207fae1578da27a062cb73d424aed9",
"assets/packages/flutterfire_ui/assets/icons/apple_dark.svg": "1b587ffd7d75c462847f8137a93f3161",
"assets/packages/flutterfire_ui/assets/icons/apple_light.svg": "2508cc7c5d302fd37edff1b87fedb594",
"assets/packages/flutterfire_ui/assets/icons/facebook.svg": "5fad3daafe7c7c5163fca56662d2738a",
"assets/packages/flutterfire_ui/assets/icons/google.svg": "3b5ceaea5e2391782d39df225a375d5d",
"assets/packages/flutterfire_ui/assets/icons/twitter.svg": "6086e2aad26effea1344c8e118520e32",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "dda4e5dc36d25cf5e911544f9c91aab2",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "dda4e5dc36d25cf5e911544f9c91aab2",
"icons/Icon-512.png": "dda4e5dc36d25cf5e911544f9c91aab2",
"icons/Icon-maskable-192.png": "dda4e5dc36d25cf5e911544f9c91aab2",
"icons/Icon-maskable-512.png": "dda4e5dc36d25cf5e911544f9c91aab2",
"index.html": "4475b9d23b902f4648abe2fa61d5ccca",
"/": "4475b9d23b902f4648abe2fa61d5ccca",
"main.dart.js": "8ea4e43347cad71a43b29773f9df0576",
"manifest.json": "fa9065f22383c7fa8dc820b3568553b4",
"version.json": "ae021c5ba489b85fe1aa5784c5e430ce"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
