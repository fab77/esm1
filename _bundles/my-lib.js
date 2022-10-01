(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("MyEsm1", [], factory);
	else if(typeof exports === 'object')
		exports["MyEsm1"] = factory();
	else
		root["MyEsm1"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Box-browser.ts":
/*!****************************!*\
  !*** ./src/Box-browser.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Box": () => (/* binding */ Box)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Box {
    constructor(name) {
        this._name = name;
        this._objs = [];
        console.log("created browser box for " + name);
    }
    addObject(obj) {
        this._objs.push(obj);
    }
    getFile(uri) {
        return __awaiter(this, void 0, void 0, function* () {
            // const response = await fetch(uri);
            const response = yield window.fetch(uri);
            if (!response.ok) {
                return new ArrayBuffer(0);
            }
            else {
                return response.arrayBuffer();
            }
        });
    }
}


/***/ }),

/***/ "./src/BoxObject.ts":
/*!**************************!*\
  !*** ./src/BoxObject.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoxObject": () => (/* binding */ BoxObject)
/* harmony export */ });
class BoxObject {
    constructor(color) {
        this._color = color;
    }
}


/***/ }),

/***/ "./src/Hammer.ts":
/*!***********************!*\
  !*** ./src/Hammer.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hammer": () => (/* binding */ Hammer)
/* harmony export */ });
/* harmony import */ var _BoxObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoxObject.js */ "./src/BoxObject.ts");

class Hammer extends _BoxObject_js__WEBPACK_IMPORTED_MODULE_0__.BoxObject {
    constructor(color) {
        super(color);
        console.log("added " + this._color + " hammer");
    }
}


/***/ }),

/***/ "./src/Plant.ts":
/*!**********************!*\
  !*** ./src/Plant.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Plant": () => (/* binding */ Plant)
/* harmony export */ });
/* harmony import */ var _BoxObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoxObject.js */ "./src/BoxObject.ts");

class Plant extends _BoxObject_js__WEBPACK_IMPORTED_MODULE_0__.BoxObject {
    constructor(color) {
        super(color);
        console.log("added " + this._color + " plant");
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/index-browser.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Box": () => (/* reexport safe */ _Box_browser_js__WEBPACK_IMPORTED_MODULE_3__.Box),
/* harmony export */   "BoxObject": () => (/* reexport safe */ _BoxObject_js__WEBPACK_IMPORTED_MODULE_0__.BoxObject),
/* harmony export */   "Hammer": () => (/* reexport safe */ _Hammer_js__WEBPACK_IMPORTED_MODULE_1__.Hammer),
/* harmony export */   "Plant": () => (/* reexport safe */ _Plant_js__WEBPACK_IMPORTED_MODULE_2__.Plant)
/* harmony export */ });
/* harmony import */ var _BoxObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoxObject.js */ "./src/BoxObject.ts");
/* harmony import */ var _Hammer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hammer.js */ "./src/Hammer.ts");
/* harmony import */ var _Plant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Plant.js */ "./src/Plant.ts");
/* harmony import */ var _Box_browser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Box-browser.js */ "./src/Box-browser.ts");





})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=my-lib.js.map