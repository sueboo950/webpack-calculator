/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/calculator.js":
/*!***************************!*\
  !*** ./src/calculator.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   add: () => (/* binding */ add),\n/* harmony export */   divide: () => (/* binding */ divide),\n/* harmony export */   multiply: () => (/* binding */ multiply),\n/* harmony export */   subtract: () => (/* binding */ subtract)\n/* harmony export */ });\nfunction add(a, b) {\r\n    return a + b;\r\n}\r\nfunction subtract(a, b) {\r\n    return a - b;\r\n}\r\nfunction multiply(a, b) {\r\n    return a * b;\r\n}\r\nfunction divide(a, b) {\r\n    if (b === 0) {\r\n        return \"Cannot divide by zero\";\r\n    }\r\n    return a / b;\r\n}\r\n\n\n//# sourceURL=webpack://webpack-calculator/./src/calculator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _calculator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculator.js */ \"./src/calculator.js\");\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n    const num1Input = document.getElementById(\"num1\");\r\n    const num2Input = document.getElementById(\"num2\");\r\n    const operationSelect = document.getElementById(\"operation\");\r\n    const calculateButton = document.getElementById(\"calculate\");\r\n    const resultDisplay = document.getElementById(\"result\");\r\n    calculateButton.addEventListener(\"click\", function () {\r\n        const num1 = parseFloat(num1Input.value);\r\n        const num2 = parseFloat(num2Input.value);\r\n        const operation = operationSelect.value;\r\n        let result;\r\n        if (isNaN(num1) || isNaN(num2)) {\r\n            resultDisplay.innerText = \"Please enter valid numbers!\";\r\n            return;\r\n        }\r\n        switch (operation) {\r\n            case \"add\":\r\n                result = (0,_calculator_js__WEBPACK_IMPORTED_MODULE_0__.add)(num1, num2);\r\n                break;\r\n            case \"subtract\":\r\n                result = (0,_calculator_js__WEBPACK_IMPORTED_MODULE_0__.subtract)(num1, num2);\r\n                break;\r\n            case \"multiply\":\r\n                result = (0,_calculator_js__WEBPACK_IMPORTED_MODULE_0__.multiply)(num1, num2);\r\n                break;\r\n            case \"divide\":\r\n                result = (0,_calculator_js__WEBPACK_IMPORTED_MODULE_0__.divide)(num1, num2);\r\n                break;\r\n            default:\r\n                result = \"Invalid operation\";\r\n        }\r\n        resultDisplay.innerText = `Result: ${result}`;\r\n    });\r\n});\n\n//# sourceURL=webpack://webpack-calculator/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;