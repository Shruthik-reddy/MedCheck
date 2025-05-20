"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/forgot-password/route";
exports.ids = ["app/api/auth/forgot-password/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fforgot-password%2Froute&page=%2Fapi%2Fauth%2Fforgot-password%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fforgot-password%2Froute.js&appDir=C%3A%5CUsers%5CKruthik%20Reddy%20V%5CDesktop%5Cdrug-interaction-checker%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CKruthik%20Reddy%20V%5CDesktop%5Cdrug-interaction-checker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fforgot-password%2Froute&page=%2Fapi%2Fauth%2Fforgot-password%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fforgot-password%2Froute.js&appDir=C%3A%5CUsers%5CKruthik%20Reddy%20V%5CDesktop%5Cdrug-interaction-checker%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CKruthik%20Reddy%20V%5CDesktop%5Cdrug-interaction-checker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Kruthik_Reddy_V_Desktop_drug_interaction_checker_src_app_api_auth_forgot_password_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/forgot-password/route.js */ \"(rsc)/./src/app/api/auth/forgot-password/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/forgot-password/route\",\n        pathname: \"/api/auth/forgot-password\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/forgot-password/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Kruthik Reddy V\\\\Desktop\\\\drug-interaction-checker\\\\src\\\\app\\\\api\\\\auth\\\\forgot-password\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Kruthik_Reddy_V_Desktop_drug_interaction_checker_src_app_api_auth_forgot_password_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/forgot-password/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGZm9yZ290LXBhc3N3b3JkJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhdXRoJTJGZm9yZ290LXBhc3N3b3JkJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYXV0aCUyRmZvcmdvdC1wYXNzd29yZCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNLcnV0aGlrJTIwUmVkZHklMjBWJTVDRGVza3RvcCU1Q2RydWctaW50ZXJhY3Rpb24tY2hlY2tlciU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDS3J1dGhpayUyMFJlZGR5JTIwViU1Q0Rlc2t0b3AlNUNkcnVnLWludGVyYWN0aW9uLWNoZWNrZXImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDNkQ7QUFDMUk7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcnVnLWludGVyYWN0aW9uLWNoZWNrZXIvP2RlMGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcS3J1dGhpayBSZWRkeSBWXFxcXERlc2t0b3BcXFxcZHJ1Zy1pbnRlcmFjdGlvbi1jaGVja2VyXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcZm9yZ290LXBhc3N3b3JkXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL2ZvcmdvdC1wYXNzd29yZC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvZm9yZ290LXBhc3N3b3JkXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL2ZvcmdvdC1wYXNzd29yZC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXEtydXRoaWsgUmVkZHkgVlxcXFxEZXNrdG9wXFxcXGRydWctaW50ZXJhY3Rpb24tY2hlY2tlclxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXGZvcmdvdC1wYXNzd29yZFxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL2ZvcmdvdC1wYXNzd29yZC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fforgot-password%2Froute&page=%2Fapi%2Fauth%2Fforgot-password%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fforgot-password%2Froute.js&appDir=C%3A%5CUsers%5CKruthik%20Reddy%20V%5CDesktop%5Cdrug-interaction-checker%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CKruthik%20Reddy%20V%5CDesktop%5Cdrug-interaction-checker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/forgot-password/route.js":
/*!***************************************************!*\
  !*** ./src/app/api/auth/forgot-password/route.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _lib_db_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db/mongodb */ \"(rsc)/./src/lib/db/mongodb.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./src/models/User.js\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/email */ \"(rsc)/./src/lib/email.js\");\n\n\n\n\n\nasync function POST(request) {\n    try {\n        await (0,_lib_db_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        const { email } = await request.json();\n        if (!email) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Email is required\"\n            }, {\n                status: 400\n            });\n        }\n        // Find user by email\n        const user = await _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n            email\n        });\n        if (!user) {\n            // Don't reveal that the user doesn't exist\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                success: true,\n                message: \"If an account exists with this email, you will receive a password reset link.\"\n            });\n        }\n        // Generate reset token\n        const resetToken = crypto__WEBPACK_IMPORTED_MODULE_3___default().randomBytes(32).toString(\"hex\");\n        const resetTokenExpiry = Date.now() + 3600000; // 1 hour from now\n        // Save reset token to user\n        user.resetToken = resetToken;\n        user.resetTokenExpiry = resetTokenExpiry;\n        await user.save();\n        // Create reset URL\n        const resetUrl = `${\"http://localhost:3000\"}/auth/reset-password?token=${resetToken}`;\n        // Send reset email\n        try {\n            await (0,_lib_email__WEBPACK_IMPORTED_MODULE_4__.sendResetEmail)(email, resetUrl);\n            console.log(\"Reset email sent to:\", email);\n        } catch (emailError) {\n            console.error(\"Failed to send reset email:\", emailError);\n        // Don't reveal email sending failure to user\n        }\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            success: true,\n            message: \"If an account exists with this email, you will receive a password reset link.\"\n        });\n    } catch (error) {\n        console.error(\"Forgot password error:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"An error occurred while processing your request\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL2ZvcmdvdC1wYXNzd29yZC9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTJDO0FBQ0Y7QUFDUjtBQUNMO0FBQ2lCO0FBRXRDLGVBQWVLLEtBQUtDLE9BQU87SUFDaEMsSUFBSTtRQUNGLE1BQU1MLDJEQUFTQTtRQUVmLE1BQU0sRUFBRU0sS0FBSyxFQUFFLEdBQUcsTUFBTUQsUUFBUUUsSUFBSTtRQUVwQyxJQUFJLENBQUNELE9BQU87WUFDVixPQUFPUCxrRkFBWUEsQ0FBQ1EsSUFBSSxDQUN0QjtnQkFBRUMsT0FBTztZQUFvQixHQUM3QjtnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEscUJBQXFCO1FBQ3JCLE1BQU1DLE9BQU8sTUFBTVQsb0RBQUlBLENBQUNVLE9BQU8sQ0FBQztZQUFFTDtRQUFNO1FBQ3hDLElBQUksQ0FBQ0ksTUFBTTtZQUNULDJDQUEyQztZQUMzQyxPQUFPWCxrRkFBWUEsQ0FBQ1EsSUFBSSxDQUFDO2dCQUN2QkssU0FBUztnQkFDVEMsU0FBUztZQUNYO1FBQ0Y7UUFFQSx1QkFBdUI7UUFDdkIsTUFBTUMsYUFBYVoseURBQWtCLENBQUMsSUFBSWMsUUFBUSxDQUFDO1FBQ25ELE1BQU1DLG1CQUFtQkMsS0FBS0MsR0FBRyxLQUFLLFNBQVMsa0JBQWtCO1FBRWpFLDJCQUEyQjtRQUMzQlQsS0FBS0ksVUFBVSxHQUFHQTtRQUNsQkosS0FBS08sZ0JBQWdCLEdBQUdBO1FBQ3hCLE1BQU1QLEtBQUtVLElBQUk7UUFFZixtQkFBbUI7UUFDbkIsTUFBTUMsV0FBVyxDQUFDLEVBQUVDLHVCQUErQixDQUFDLDJCQUEyQixFQUFFUixXQUFXLENBQUM7UUFFN0YsbUJBQW1CO1FBQ25CLElBQUk7WUFDRixNQUFNWCwwREFBY0EsQ0FBQ0csT0FBT2U7WUFDNUJJLFFBQVFDLEdBQUcsQ0FBQyx3QkFBd0JwQjtRQUN0QyxFQUFFLE9BQU9xQixZQUFZO1lBQ25CRixRQUFRakIsS0FBSyxDQUFDLCtCQUErQm1CO1FBQzdDLDZDQUE2QztRQUMvQztRQUVBLE9BQU81QixrRkFBWUEsQ0FBQ1EsSUFBSSxDQUFDO1lBQ3ZCSyxTQUFTO1lBQ1RDLFNBQVM7UUFDWDtJQUNGLEVBQUUsT0FBT0wsT0FBTztRQUNkaUIsUUFBUWpCLEtBQUssQ0FBQywwQkFBMEJBO1FBQ3hDLE9BQU9ULGtGQUFZQSxDQUFDUSxJQUFJLENBQ3RCO1lBQUVDLE9BQU87UUFBa0QsR0FDM0Q7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kcnVnLWludGVyYWN0aW9uLWNoZWNrZXIvLi9zcmMvYXBwL2FwaS9hdXRoL2ZvcmdvdC1wYXNzd29yZC9yb3V0ZS5qcz84YTY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuaW1wb3J0IGRiQ29ubmVjdCBmcm9tICdAL2xpYi9kYi9tb25nb2RiJztcclxuaW1wb3J0IFVzZXIgZnJvbSAnQC9tb2RlbHMvVXNlcic7XHJcbmltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJztcclxuaW1wb3J0IHsgc2VuZFJlc2V0RW1haWwgfSBmcm9tICdAL2xpYi9lbWFpbCc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xyXG4gICAgXHJcbiAgICBjb25zdCB7IGVtYWlsIH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuXHJcbiAgICBpZiAoIWVtYWlsKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IGVycm9yOiAnRW1haWwgaXMgcmVxdWlyZWQnIH0sXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwMCB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmluZCB1c2VyIGJ5IGVtYWlsXHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWwgfSk7XHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgLy8gRG9uJ3QgcmV2ZWFsIHRoYXQgdGhlIHVzZXIgZG9lc24ndCBleGlzdFxyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgbWVzc2FnZTogJ0lmIGFuIGFjY291bnQgZXhpc3RzIHdpdGggdGhpcyBlbWFpbCwgeW91IHdpbGwgcmVjZWl2ZSBhIHBhc3N3b3JkIHJlc2V0IGxpbmsuJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZW5lcmF0ZSByZXNldCB0b2tlblxyXG4gICAgY29uc3QgcmVzZXRUb2tlbiA9IGNyeXB0by5yYW5kb21CeXRlcygzMikudG9TdHJpbmcoJ2hleCcpO1xyXG4gICAgY29uc3QgcmVzZXRUb2tlbkV4cGlyeSA9IERhdGUubm93KCkgKyAzNjAwMDAwOyAvLyAxIGhvdXIgZnJvbSBub3dcclxuXHJcbiAgICAvLyBTYXZlIHJlc2V0IHRva2VuIHRvIHVzZXJcclxuICAgIHVzZXIucmVzZXRUb2tlbiA9IHJlc2V0VG9rZW47XHJcbiAgICB1c2VyLnJlc2V0VG9rZW5FeHBpcnkgPSByZXNldFRva2VuRXhwaXJ5O1xyXG4gICAgYXdhaXQgdXNlci5zYXZlKCk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIHJlc2V0IFVSTFxyXG4gICAgY29uc3QgcmVzZXRVcmwgPSBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUFBfVVJMfS9hdXRoL3Jlc2V0LXBhc3N3b3JkP3Rva2VuPSR7cmVzZXRUb2tlbn1gO1xyXG5cclxuICAgIC8vIFNlbmQgcmVzZXQgZW1haWxcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IHNlbmRSZXNldEVtYWlsKGVtYWlsLCByZXNldFVybCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdSZXNldCBlbWFpbCBzZW50IHRvOicsIGVtYWlsKTtcclxuICAgIH0gY2F0Y2ggKGVtYWlsRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHNlbmQgcmVzZXQgZW1haWw6JywgZW1haWxFcnJvcik7XHJcbiAgICAgIC8vIERvbid0IHJldmVhbCBlbWFpbCBzZW5kaW5nIGZhaWx1cmUgdG8gdXNlclxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIG1lc3NhZ2U6ICdJZiBhbiBhY2NvdW50IGV4aXN0cyB3aXRoIHRoaXMgZW1haWwsIHlvdSB3aWxsIHJlY2VpdmUgYSBwYXNzd29yZCByZXNldCBsaW5rLidcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdGb3Jnb3QgcGFzc3dvcmQgZXJyb3I6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICB7IGVycm9yOiAnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QnIH0sXHJcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgKTtcclxuICB9XHJcbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZGJDb25uZWN0IiwiVXNlciIsImNyeXB0byIsInNlbmRSZXNldEVtYWlsIiwiUE9TVCIsInJlcXVlc3QiLCJlbWFpbCIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsInVzZXIiLCJmaW5kT25lIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJyZXNldFRva2VuIiwicmFuZG9tQnl0ZXMiLCJ0b1N0cmluZyIsInJlc2V0VG9rZW5FeHBpcnkiLCJEYXRlIiwibm93Iiwic2F2ZSIsInJlc2V0VXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQUF9VUkwiLCJjb25zb2xlIiwibG9nIiwiZW1haWxFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/forgot-password/route.js\n");

/***/ }),

/***/ "(rsc)/./src/lib/db/mongodb.js":
/*!*******************************!*\
  !*** ./src/lib/db/mongodb.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false,\n            serverSelectionTimeoutMS: 5000,\n            socketTimeoutMS: 45000,\n            family: 4,\n            maxPoolSize: 10,\n            minPoolSize: 5,\n            connectTimeoutMS: 10000\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            console.log(\"MongoDB connected successfully\");\n            return mongoose;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        console.error(\"MongoDB connection error:\", e);\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiL21vbmdvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGNBQWNDLFFBQVFDLEdBQUcsQ0FBQ0YsV0FBVztBQUUzQyxJQUFJLENBQUNBLGFBQWE7SUFDaEIsTUFBTSxJQUFJRyxNQUFNO0FBQ2xCO0FBRUEsSUFBSUMsU0FBU0MsT0FBT04sUUFBUTtBQUU1QixJQUFJLENBQUNLLFFBQVE7SUFDWEEsU0FBU0MsT0FBT04sUUFBUSxHQUFHO1FBQUVPLE1BQU07UUFBTUMsU0FBUztJQUFLO0FBQ3pEO0FBRUEsZUFBZUM7SUFDYixJQUFJSixPQUFPRSxJQUFJLEVBQUU7UUFDZixPQUFPRixPQUFPRSxJQUFJO0lBQ3BCO0lBRUEsSUFBSSxDQUFDRixPQUFPRyxPQUFPLEVBQUU7UUFDbkIsTUFBTUUsT0FBTztZQUNYQyxnQkFBZ0I7WUFDaEJDLDBCQUEwQjtZQUMxQkMsaUJBQWlCO1lBQ2pCQyxRQUFRO1lBQ1JDLGFBQWE7WUFDYkMsYUFBYTtZQUNiQyxrQkFBa0I7UUFDcEI7UUFFQVosT0FBT0csT0FBTyxHQUFHUix1REFBZ0IsQ0FBQ0MsYUFBYVMsTUFBTVMsSUFBSSxDQUFDLENBQUNuQjtZQUN6RG9CLFFBQVFDLEdBQUcsQ0FBQztZQUNaLE9BQU9yQjtRQUNUO0lBQ0Y7SUFFQSxJQUFJO1FBQ0ZLLE9BQU9FLElBQUksR0FBRyxNQUFNRixPQUFPRyxPQUFPO0lBQ3BDLEVBQUUsT0FBT2MsR0FBRztRQUNWakIsT0FBT0csT0FBTyxHQUFHO1FBQ2pCWSxRQUFRRyxLQUFLLENBQUMsNkJBQTZCRDtRQUMzQyxNQUFNQTtJQUNSO0lBRUEsT0FBT2pCLE9BQU9FLElBQUk7QUFDcEI7QUFFQSxpRUFBZUUsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RydWctaW50ZXJhY3Rpb24tY2hlY2tlci8uL3NyYy9saWIvZGIvbW9uZ29kYi5qcz9hMTVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xyXG5cclxuaWYgKCFNT05HT0RCX1VSSSkge1xyXG4gIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWwnKTtcclxufVxyXG5cclxubGV0IGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZTtcclxuXHJcbmlmICghY2FjaGVkKSB7XHJcbiAgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH07XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcclxuICBpZiAoY2FjaGVkLmNvbm4pIHtcclxuICAgIHJldHVybiBjYWNoZWQuY29ubjtcclxuICB9XHJcblxyXG4gIGlmICghY2FjaGVkLnByb21pc2UpIHtcclxuICAgIGNvbnN0IG9wdHMgPSB7XHJcbiAgICAgIGJ1ZmZlckNvbW1hbmRzOiBmYWxzZSxcclxuICAgICAgc2VydmVyU2VsZWN0aW9uVGltZW91dE1TOiA1MDAwLFxyXG4gICAgICBzb2NrZXRUaW1lb3V0TVM6IDQ1MDAwLFxyXG4gICAgICBmYW1pbHk6IDQsIC8vIFVzZSBJUHY0LCBza2lwIHRyeWluZyBJUHY2XHJcbiAgICAgIG1heFBvb2xTaXplOiAxMCxcclxuICAgICAgbWluUG9vbFNpemU6IDUsXHJcbiAgICAgIGNvbm5lY3RUaW1lb3V0TVM6IDEwMDAwLFxyXG4gICAgfTtcclxuXHJcbiAgICBjYWNoZWQucHJvbWlzZSA9IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkksIG9wdHMpLnRoZW4oKG1vbmdvb3NlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdNb25nb0RCIGNvbm5lY3RlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgcmV0dXJuIG1vbmdvb3NlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjYWNoZWQucHJvbWlzZSA9IG51bGw7XHJcbiAgICBjb25zb2xlLmVycm9yKCdNb25nb0RCIGNvbm5lY3Rpb24gZXJyb3I6JywgZSk7XHJcbiAgICB0aHJvdyBlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNhY2hlZC5jb25uO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImRiQ29ubmVjdCIsIm9wdHMiLCJidWZmZXJDb21tYW5kcyIsInNlcnZlclNlbGVjdGlvblRpbWVvdXRNUyIsInNvY2tldFRpbWVvdXRNUyIsImZhbWlseSIsIm1heFBvb2xTaXplIiwibWluUG9vbFNpemUiLCJjb25uZWN0VGltZW91dE1TIiwiY29ubmVjdCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db/mongodb.js\n");

/***/ }),

/***/ "(rsc)/./src/lib/email.js":
/*!**************************!*\
  !*** ./src/lib/email.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sendResetEmail: () => (/* binding */ sendResetEmail)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n\nasync function sendResetEmail(email, resetUrl) {\n    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {\n        console.error(\"Email configuration missing. Please set EMAIL_USER and EMAIL_PASSWORD environment variables.\");\n        throw new Error(\"Email service not configured\");\n    }\n    // Configure nodemailer with your email service\n    const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0__.createTransport({\n        // Use your email service configuration\n        // For example, with Gmail:\n        service: \"gmail\",\n        auth: {\n            user: process.env.EMAIL_USER,\n            pass: process.env.EMAIL_PASSWORD\n        }\n    });\n    const mailOptions = {\n        from: process.env.EMAIL_USER,\n        to: email,\n        subject: \"Password Reset Request\",\n        html: `\r\n      <div style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;\">\r\n        <h1 style=\"color: #2563eb;\">Password Reset</h1>\r\n        <p>You requested a password reset. Click the button below to reset your password:</p>\r\n        <div style=\"text-align: center; margin: 30px 0;\">\r\n          <a href=\"${resetUrl}\" \r\n             style=\"background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;\">\r\n            Reset Password\r\n          </a>\r\n        </div>\r\n        <p>If you didn't request this, please ignore this email.</p>\r\n        <p style=\"color: #666; font-size: 0.9em;\">This link will expire in 1 hour.</p>\r\n        <hr style=\"border: 1px solid #eee; margin: 20px 0;\">\r\n        <p style=\"color: #666; font-size: 0.8em;\">\r\n          If the button above doesn't work, copy and paste this link into your browser:<br>\r\n          <span style=\"color: #2563eb;\">${resetUrl}</span>\r\n        </p>\r\n      </div>\r\n    `\n    };\n    try {\n        await transporter.sendMail(mailOptions);\n        console.log(\"Reset email sent successfully to:\", email);\n    } catch (error) {\n        console.error(\"Failed to send reset email:\", error);\n        throw new Error(\"Failed to send reset email\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2VtYWlsLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW9DO0FBRTdCLGVBQWVDLGVBQWVDLEtBQUssRUFBRUMsUUFBUTtJQUNsRCxJQUFJLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVSxJQUFJLENBQUNGLFFBQVFDLEdBQUcsQ0FBQ0UsY0FBYyxFQUFFO1FBQzFEQyxRQUFRQyxLQUFLLENBQUM7UUFDZCxNQUFNLElBQUlDLE1BQU07SUFDbEI7SUFFQSwrQ0FBK0M7SUFDL0MsTUFBTUMsY0FBY1gsdURBQTBCLENBQUM7UUFDN0MsdUNBQXVDO1FBQ3ZDLDJCQUEyQjtRQUMzQmEsU0FBUztRQUNUQyxNQUFNO1lBQ0pDLE1BQU1YLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtZQUM1QlUsTUFBTVosUUFBUUMsR0FBRyxDQUFDRSxjQUFjO1FBQ2xDO0lBQ0Y7SUFFQSxNQUFNVSxjQUFjO1FBQ2xCQyxNQUFNZCxRQUFRQyxHQUFHLENBQUNDLFVBQVU7UUFDNUJhLElBQUlqQjtRQUNKa0IsU0FBUztRQUNUQyxNQUFNLENBQUM7Ozs7O21CQUtRLEVBQUVsQixTQUFTOzs7Ozs7Ozs7O3dDQVVVLEVBQUVBLFNBQVM7OztJQUcvQyxDQUFDO0lBQ0g7SUFFQSxJQUFJO1FBQ0YsTUFBTVEsWUFBWVcsUUFBUSxDQUFDTDtRQUMzQlQsUUFBUWUsR0FBRyxDQUFDLHFDQUFxQ3JCO0lBQ25ELEVBQUUsT0FBT08sT0FBTztRQUNkRCxRQUFRQyxLQUFLLENBQUMsK0JBQStCQTtRQUM3QyxNQUFNLElBQUlDLE1BQU07SUFDbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2RydWctaW50ZXJhY3Rpb24tY2hlY2tlci8uL3NyYy9saWIvZW1haWwuanM/Njk5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9kZW1haWxlciBmcm9tICdub2RlbWFpbGVyJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kUmVzZXRFbWFpbChlbWFpbCwgcmVzZXRVcmwpIHtcclxuICBpZiAoIXByb2Nlc3MuZW52LkVNQUlMX1VTRVIgfHwgIXByb2Nlc3MuZW52LkVNQUlMX1BBU1NXT1JEKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFbWFpbCBjb25maWd1cmF0aW9uIG1pc3NpbmcuIFBsZWFzZSBzZXQgRU1BSUxfVVNFUiBhbmQgRU1BSUxfUEFTU1dPUkQgZW52aXJvbm1lbnQgdmFyaWFibGVzLicpO1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdFbWFpbCBzZXJ2aWNlIG5vdCBjb25maWd1cmVkJyk7XHJcbiAgfVxyXG5cclxuICAvLyBDb25maWd1cmUgbm9kZW1haWxlciB3aXRoIHlvdXIgZW1haWwgc2VydmljZVxyXG4gIGNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xyXG4gICAgLy8gVXNlIHlvdXIgZW1haWwgc2VydmljZSBjb25maWd1cmF0aW9uXHJcbiAgICAvLyBGb3IgZXhhbXBsZSwgd2l0aCBHbWFpbDpcclxuICAgIHNlcnZpY2U6ICdnbWFpbCcsXHJcbiAgICBhdXRoOiB7XHJcbiAgICAgIHVzZXI6IHByb2Nlc3MuZW52LkVNQUlMX1VTRVIsXHJcbiAgICAgIHBhc3M6IHByb2Nlc3MuZW52LkVNQUlMX1BBU1NXT1JELFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbWFpbE9wdGlvbnMgPSB7XHJcbiAgICBmcm9tOiBwcm9jZXNzLmVudi5FTUFJTF9VU0VSLFxyXG4gICAgdG86IGVtYWlsLFxyXG4gICAgc3ViamVjdDogJ1Bhc3N3b3JkIFJlc2V0IFJlcXVlc3QnLFxyXG4gICAgaHRtbDogYFxyXG4gICAgICA8ZGl2IHN0eWxlPVwiZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmOyBtYXgtd2lkdGg6IDYwMHB4OyBtYXJnaW46IDAgYXV0bztcIj5cclxuICAgICAgICA8aDEgc3R5bGU9XCJjb2xvcjogIzI1NjNlYjtcIj5QYXNzd29yZCBSZXNldDwvaDE+XHJcbiAgICAgICAgPHA+WW91IHJlcXVlc3RlZCBhIHBhc3N3b3JkIHJlc2V0LiBDbGljayB0aGUgYnV0dG9uIGJlbG93IHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQ6PC9wPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbjogMzBweCAwO1wiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiR7cmVzZXRVcmx9XCIgXHJcbiAgICAgICAgICAgICBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICMyNTYzZWI7IGNvbG9yOiB3aGl0ZTsgcGFkZGluZzogMTJweCAyNHB4OyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IGJvcmRlci1yYWRpdXM6IDVweDsgZGlzcGxheTogaW5saW5lLWJsb2NrO1wiPlxyXG4gICAgICAgICAgICBSZXNldCBQYXNzd29yZFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwPklmIHlvdSBkaWRuJ3QgcmVxdWVzdCB0aGlzLCBwbGVhc2UgaWdub3JlIHRoaXMgZW1haWwuPC9wPlxyXG4gICAgICAgIDxwIHN0eWxlPVwiY29sb3I6ICM2NjY7IGZvbnQtc2l6ZTogMC45ZW07XCI+VGhpcyBsaW5rIHdpbGwgZXhwaXJlIGluIDEgaG91ci48L3A+XHJcbiAgICAgICAgPGhyIHN0eWxlPVwiYm9yZGVyOiAxcHggc29saWQgI2VlZTsgbWFyZ2luOiAyMHB4IDA7XCI+XHJcbiAgICAgICAgPHAgc3R5bGU9XCJjb2xvcjogIzY2NjsgZm9udC1zaXplOiAwLjhlbTtcIj5cclxuICAgICAgICAgIElmIHRoZSBidXR0b24gYWJvdmUgZG9lc24ndCB3b3JrLCBjb3B5IGFuZCBwYXN0ZSB0aGlzIGxpbmsgaW50byB5b3VyIGJyb3dzZXI6PGJyPlxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjogIzI1NjNlYjtcIj4ke3Jlc2V0VXJsfTwvc3Bhbj5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICB9O1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbE9wdGlvbnMpO1xyXG4gICAgY29uc29sZS5sb2coJ1Jlc2V0IGVtYWlsIHNlbnQgc3VjY2Vzc2Z1bGx5IHRvOicsIGVtYWlsKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHNlbmQgcmVzZXQgZW1haWw6JywgZXJyb3IpO1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gc2VuZCByZXNldCBlbWFpbCcpO1xyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJub2RlbWFpbGVyIiwic2VuZFJlc2V0RW1haWwiLCJlbWFpbCIsInJlc2V0VXJsIiwicHJvY2VzcyIsImVudiIsIkVNQUlMX1VTRVIiLCJFTUFJTF9QQVNTV09SRCIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJzZXJ2aWNlIiwiYXV0aCIsInVzZXIiLCJwYXNzIiwibWFpbE9wdGlvbnMiLCJmcm9tIiwidG8iLCJzdWJqZWN0IiwiaHRtbCIsInNlbmRNYWlsIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/email.js\n");

/***/ }),

/***/ "(rsc)/./src/models/User.js":
/*!****************************!*\
  !*** ./src/models/User.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Please provide an email\"\n        ],\n        unique: true\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a password\"\n        ]\n    },\n    resetToken: String,\n    resetTokenExpiry: Date,\n    createdAt: {\n        type: Date,\n        default: Date.now\n    },\n    name: String,\n    history: [\n        {\n            type: {\n                type: String,\n                enum: [\n                    \"interaction\",\n                    \"suitability\"\n                ],\n                required: true\n            },\n            date: {\n                type: Date,\n                default: Date.now\n            },\n            details: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.Mixed\n        }\n    ]\n});\n// Hash password before saving ONLY if it's not already hashed\nuserSchema.pre(\"save\", async function(next) {\n    // Only hash the password if it has been modified and is not already hashed\n    if (!this.isModified(\"password\") || this.password.startsWith(\"$2b$\")) {\n        return next();\n    }\n    try {\n        const salt = await bcryptjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].genSalt(10);\n        this.password = await bcryptjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].hash(this.password, salt);\n        next();\n    } catch (error) {\n        next(error);\n    }\n});\n// Method to compare password for login\nuserSchema.methods.comparePassword = async function(candidatePassword) {\n    try {\n        return await bcryptjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].compare(candidatePassword, this.password);\n    } catch (error) {\n        throw error;\n    }\n};\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1VzZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFnQztBQUNGO0FBRTlCLE1BQU1FLGFBQWEsSUFBSUYsd0RBQWUsQ0FBQztJQUNyQ0ksT0FBTztRQUNMQyxNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUEwQjtRQUMzQ0MsUUFBUTtJQUNWO0lBQ0FDLFVBQVU7UUFDUkosTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBNEI7SUFDL0M7SUFDQUcsWUFBWUo7SUFDWkssa0JBQWtCQztJQUNsQkMsV0FBVztRQUNUUixNQUFNTztRQUNORSxTQUFTRixLQUFLRyxHQUFHO0lBQ25CO0lBQ0FDLE1BQU1WO0lBQ05XLFNBQVM7UUFBQztZQUNSWixNQUFNO2dCQUNKQSxNQUFNQztnQkFDTlksTUFBTTtvQkFBQztvQkFBZTtpQkFBYztnQkFDcENYLFVBQVU7WUFDWjtZQUNBWSxNQUFNO2dCQUNKZCxNQUFNTztnQkFDTkUsU0FBU0YsS0FBS0csR0FBRztZQUNuQjtZQUNBSyxTQUFTcEIsd0RBQWUsQ0FBQ3FCLEtBQUssQ0FBQ0MsS0FBSztRQUN0QztLQUFFO0FBQ0o7QUFFQSw4REFBOEQ7QUFDOURwQixXQUFXcUIsR0FBRyxDQUFDLFFBQVEsZUFBZUMsSUFBSTtJQUN4QywyRUFBMkU7SUFDM0UsSUFBSSxDQUFDLElBQUksQ0FBQ0MsVUFBVSxDQUFDLGVBQWUsSUFBSSxDQUFDaEIsUUFBUSxDQUFDaUIsVUFBVSxDQUFDLFNBQVM7UUFDcEUsT0FBT0Y7SUFDVDtJQUVBLElBQUk7UUFDRixNQUFNRyxPQUFPLE1BQU0xQix3REFBYyxDQUFDO1FBQ2xDLElBQUksQ0FBQ1EsUUFBUSxHQUFHLE1BQU1SLHFEQUFXLENBQUMsSUFBSSxDQUFDUSxRQUFRLEVBQUVrQjtRQUNqREg7SUFDRixFQUFFLE9BQU9NLE9BQU87UUFDZE4sS0FBS007SUFDUDtBQUNGO0FBRUEsdUNBQXVDO0FBQ3ZDNUIsV0FBVzZCLE9BQU8sQ0FBQ0MsZUFBZSxHQUFHLGVBQWVDLGlCQUFpQjtJQUNuRSxJQUFJO1FBQ0YsT0FBTyxNQUFNaEMsd0RBQWMsQ0FBQ2dDLG1CQUFtQixJQUFJLENBQUN4QixRQUFRO0lBQzlELEVBQUUsT0FBT3FCLE9BQU87UUFDZCxNQUFNQTtJQUNSO0FBQ0Y7QUFFQSxNQUFNSyxPQUFPbkMsd0RBQWUsQ0FBQ21DLElBQUksSUFBSW5DLHFEQUFjLENBQUMsUUFBUUU7QUFFNUQsaUVBQWVpQyxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHJ1Zy1pbnRlcmFjdGlvbi1jaGVja2VyLy4vc3JjL21vZGVscy9Vc2VyLmpzPzdkMGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcyc7XHJcblxyXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgZW1haWw6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ1BsZWFzZSBwcm92aWRlIGFuIGVtYWlsJ10sXHJcbiAgICB1bmlxdWU6IHRydWUsXHJcbiAgfSxcclxuICBwYXNzd29yZDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnUGxlYXNlIHByb3ZpZGUgYSBwYXNzd29yZCddLFxyXG4gIH0sXHJcbiAgcmVzZXRUb2tlbjogU3RyaW5nLFxyXG4gIHJlc2V0VG9rZW5FeHBpcnk6IERhdGUsXHJcbiAgY3JlYXRlZEF0OiB7XHJcbiAgICB0eXBlOiBEYXRlLFxyXG4gICAgZGVmYXVsdDogRGF0ZS5ub3csXHJcbiAgfSxcclxuICBuYW1lOiBTdHJpbmcsXHJcbiAgaGlzdG9yeTogW3tcclxuICAgIHR5cGU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBlbnVtOiBbJ2ludGVyYWN0aW9uJywgJ3N1aXRhYmlsaXR5J10sXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZGF0ZToge1xyXG4gICAgICB0eXBlOiBEYXRlLFxyXG4gICAgICBkZWZhdWx0OiBEYXRlLm5vd1xyXG4gICAgfSxcclxuICAgIGRldGFpbHM6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5NaXhlZFxyXG4gIH1dXHJcbn0pO1xyXG5cclxuLy8gSGFzaCBwYXNzd29yZCBiZWZvcmUgc2F2aW5nIE9OTFkgaWYgaXQncyBub3QgYWxyZWFkeSBoYXNoZWRcclxudXNlclNjaGVtYS5wcmUoJ3NhdmUnLCBhc3luYyBmdW5jdGlvbihuZXh0KSB7XHJcbiAgLy8gT25seSBoYXNoIHRoZSBwYXNzd29yZCBpZiBpdCBoYXMgYmVlbiBtb2RpZmllZCBhbmQgaXMgbm90IGFscmVhZHkgaGFzaGVkXHJcbiAgaWYgKCF0aGlzLmlzTW9kaWZpZWQoJ3Bhc3N3b3JkJykgfHwgdGhpcy5wYXNzd29yZC5zdGFydHNXaXRoKCckMmIkJykpIHtcclxuICAgIHJldHVybiBuZXh0KCk7XHJcbiAgfVxyXG4gIFxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzYWx0ID0gYXdhaXQgYmNyeXB0LmdlblNhbHQoMTApO1xyXG4gICAgdGhpcy5wYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHRoaXMucGFzc3dvcmQsIHNhbHQpO1xyXG4gICAgbmV4dCgpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBuZXh0KGVycm9yKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gTWV0aG9kIHRvIGNvbXBhcmUgcGFzc3dvcmQgZm9yIGxvZ2luXHJcbnVzZXJTY2hlbWEubWV0aG9kcy5jb21wYXJlUGFzc3dvcmQgPSBhc3luYyBmdW5jdGlvbihjYW5kaWRhdGVQYXNzd29yZCkge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gYXdhaXQgYmNyeXB0LmNvbXBhcmUoY2FuZGlkYXRlUGFzc3dvcmQsIHRoaXMucGFzc3dvcmQpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB0aHJvdyBlcnJvcjtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ1VzZXInLCB1c2VyU2NoZW1hKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiYmNyeXB0IiwidXNlclNjaGVtYSIsIlNjaGVtYSIsImVtYWlsIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidW5pcXVlIiwicGFzc3dvcmQiLCJyZXNldFRva2VuIiwicmVzZXRUb2tlbkV4cGlyeSIsIkRhdGUiLCJjcmVhdGVkQXQiLCJkZWZhdWx0Iiwibm93IiwibmFtZSIsImhpc3RvcnkiLCJlbnVtIiwiZGF0ZSIsImRldGFpbHMiLCJUeXBlcyIsIk1peGVkIiwicHJlIiwibmV4dCIsImlzTW9kaWZpZWQiLCJzdGFydHNXaXRoIiwic2FsdCIsImdlblNhbHQiLCJoYXNoIiwiZXJyb3IiLCJtZXRob2RzIiwiY29tcGFyZVBhc3N3b3JkIiwiY2FuZGlkYXRlUGFzc3dvcmQiLCJjb21wYXJlIiwiVXNlciIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/User.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/bcryptjs","vendor-chunks/nodemailer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Fforgot-password%2Froute&page=%2Fapi%2Fauth%2Fforgot-password%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fforgot-password%2Froute.js&appDir=C%3A%5CUsers%5CKruthik%20Reddy%20V%5CDesktop%5Cdrug-interaction-checker%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CKruthik%20Reddy%20V%5CDesktop%5Cdrug-interaction-checker&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();