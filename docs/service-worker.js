/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  "/ovicounter-ai/precache-manifest.00e21e6d39fcb107feeceed28e9de593.js"
);

workbox.core.setCacheNameDetails({prefix: "ovicounter-ai"});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/, workbox.strategies.cacheFirst({ "cacheName":"google-fonts", plugins: [new workbox.expiration.Plugin({"maxEntries":30,"purgeOnQuotaError":false}), new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
