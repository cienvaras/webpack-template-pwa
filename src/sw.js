/* eslint-env worker, serviceworker */
/* eslint no-underscore-dangle: 0 */
/* eslint no-restricted-globals: 0 */
/* global workbox */

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
