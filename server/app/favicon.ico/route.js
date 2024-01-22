"use strict";
(() => {
var exports = {};
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 7783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 8530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 4426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 2196:
/***/ ((module) => {

module.exports = require("next/dist/compiled/ua-parser-js");

/***/ }),

/***/ 4021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 5244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "headerHooks": () => (/* binding */ headerHooks),
  "originalPathname": () => (/* binding */ originalPathname),
  "requestAsyncStorage": () => (/* binding */ requestAsyncStorage),
  "routeModule": () => (/* binding */ routeModule),
  "serverHooks": () => (/* binding */ serverHooks),
  "staticGenerationAsyncStorage": () => (/* binding */ staticGenerationAsyncStorage),
  "staticGenerationBailout": () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./src/app/favicon.ico?__next_metadata
var favicon_next_metadata_namespaceObject = {};
__webpack_require__.r(favicon_next_metadata_namespaceObject);
__webpack_require__.d(favicon_next_metadata_namespaceObject, {
  "GET": () => (GET),
  "dynamic": () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(6145);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9532);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(8529);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./src/app/favicon.ico?__next_metadata


const contentType = "image/x-icon"
const buffer = Buffer.from("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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASgAAANEAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAH0AAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAIkAAAD6AAAA/wAAAN4AAABKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEYAAACPAAAAEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAADUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///////4AD//8AA//+AAP/+AAD//AAA//AAAP/gAAD/gAAA/wAAAPwAAAD8AAAA/AAIAPwAAAB8AAAAPACAAAwBAAAABgAAAAEAAAAggAAMACAAPQAAAHwAAAH8AAAD/wAAD/+AAB//4AA///AA///8Af///gf///+P////n//8=", 'base64'
  )

function GET() {
  return new server.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ffavicon.ico%2Froute&name=app%2Ffavicon.ico%2Froute&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=%2FUsers%2Fhannah%2FWebstormProjects%2Fnew-eco-landing%2Fsrc%2Fapp&appPaths=%2Ffavicon.ico&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=!

    

    

    

    const routeModule = new (module_default())({
    userland: favicon_next_metadata_namespaceObject,
    pathname: "/favicon.ico",
    resolvedPagePath: "next-metadata-route-loader?page=%2Ffavicon.ico%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!/Users/hannah/WebstormProjects/new-eco-landing/src/app/favicon.ico?__next_metadata",
    nextConfigOutput: undefined,
  })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/favicon.ico/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [859,109], () => (__webpack_exec__(5244)));
module.exports = __webpack_exports__;

})();