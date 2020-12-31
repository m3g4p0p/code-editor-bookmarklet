/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _monaco__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monaco */ \"./monaco.js\");\n\n\nconst language = document.getElementById('language')\nconst insertBtn = document.getElementById('insert')\nconst closeBtn = document.getElementById('close')\nconst text = new URLSearchParams(window.location.search).get('text')\n\nfunction showBookmarklet () {\n  fetch('./dist/bookmarklet.js')\n    .then(res => res.text())\n    .then(text => {\n      const code = document.createElement('code')\n      code.textContent = `javascript:${encodeURIComponent(text)}`\n      document.body.appendChild(code)\n    })\n    .catch(console.error)\n}\n\ncloseBtn.addEventListener('click', () => {\n  window.parent.postMessage({ type: 'editor.close' })\n})\n\n;(0,_monaco__WEBPACK_IMPORTED_MODULE_0__.initMonaco)().then(monaco => {\n  const editor = monaco.editor.create(document.getElementById('editor'), {\n    value: text,\n    language: language.value\n  })\n\n  language.disabled = false\n  insertBtn.disabled = false\n\n  language.addEventListener('change', () => {\n    monaco.editor.setModelLanguage(editor.getModel(), language.value)\n  })\n\n  insertBtn.addEventListener('click', () => {\n    window.parent.postMessage({\n      type: 'editor.insert',\n      value: editor.getValue(),\n      syntax: language.value\n    })\n  })\n\n  window._editor = editor\n})\n\nif (window.parent === window) {\n  showBookmarklet()\n}\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./monaco.js":
/*!*******************!*\
  !*** ./monaco.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initMonaco\": () => /* binding */ initMonaco\n/* harmony export */ });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./util.js\");\n\n\nconst CDN_BASE = 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.21.2/min'\n\nasync function initMonaco () {\n  await (0,_util__WEBPACK_IMPORTED_MODULE_0__.loadScript)(`${CDN_BASE}/vs/loader.min.js`)\n  require.config({ paths: { vs: `${CDN_BASE}/vs` } })\n\n  window.MonacoEnvironment = {\n    getWorkerUrl: function (workerId, label) {\n      return `data:text/javascript;charset=utf-8,${encodeURIComponent(`\n        self.MonacoEnvironment = {\n          baseUrl: '${CDN_BASE}'\n        };\n        importScripts('${CDN_BASE}/vs/base/worker/workerMain.js');`\n      )}`\n    }\n  }\n\n  await (0,_util__WEBPACK_IMPORTED_MODULE_0__.asyncRequire)(['vs/editor/editor.main'])\n  return window.monaco\n}\n\n\n//# sourceURL=webpack:///./monaco.js?");

/***/ }),

/***/ "./util.js":
/*!*****************!*\
  !*** ./util.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadScript\": () => /* binding */ loadScript,\n/* harmony export */   \"asyncRequire\": () => /* binding */ asyncRequire\n/* harmony export */ });\nfunction loadScript (src) {\n  return new Promise((resolve, reject) => {\n    const script = document.createElement('script')\n\n    script.src = src\n    script.onload = resolve\n    script.onerror = reject\n    document.body.appendChild(script)\n  })\n}\n\nfunction asyncRequire (deps) {\n  return new Promise(resolve => require(deps, resolve))\n}\n\n\n//# sourceURL=webpack:///./util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;