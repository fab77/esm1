(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("esm1", [], factory);
	else if(typeof exports === 'object')
		exports["esm1"] = factory();
	else
		root["esm1"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/index-browser.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);

// export { BoxObject } from "./BoxObject.js";
// export { Hammer } from "./Hammer.js";
// export { Plant } from "./Plant.js";
// export {Box} from "./Box-browser.js";

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=esm1.js.map