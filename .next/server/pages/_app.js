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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp),\n/* harmony export */   useLanguage: () => (/* binding */ useLanguage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst LanguageContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(undefined);\nfunction useLanguage() {\n    const ctx = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(LanguageContext);\n    if (!ctx) throw new Error(\"useLanguage must be used within LanguageProvider\");\n    return ctx;\n}\nfunction LanguageProvider({ children }) {\n    const [language, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"cs\");\n    const [isHydrated, setIsHydrated] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Only run on client\n        const stored = localStorage.getItem(\"lang\");\n        if (stored && stored !== language) {\n            setLanguage(stored);\n        }\n        setIsHydrated(true);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (isHydrated) {\n            localStorage.setItem(\"lang\", language);\n        }\n    }, [\n        language,\n        isHydrated\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LanguageContext.Provider, {\n        value: {\n            language,\n            setLanguage,\n            isHydrated\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/jakubjenik/Developer/kuba/jakubjenik_cz/pages/_app.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LanguageProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/jakubjenik/Developer/kuba/jakubjenik_cz/pages/_app.tsx\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jakubjenik/Developer/kuba/jakubjenik_cz/pages/_app.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBK0I7QUFRaEI7QUFTZixNQUFNSSxnQ0FBa0JKLG9EQUFhQSxDQUNuQ0s7QUFFSyxTQUFTQztJQUNkLE1BQU1DLE1BQU1OLGlEQUFVQSxDQUFDRztJQUN2QixJQUFJLENBQUNHLEtBQUssTUFBTSxJQUFJQyxNQUFNO0lBQzFCLE9BQU9EO0FBQ1Q7QUFDQSxTQUFTRSxpQkFBaUIsRUFBRUMsUUFBUSxFQUEyQjtJQUM3RCxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1YsK0NBQVFBLENBQVc7SUFDbkQsTUFBTSxDQUFDVyxZQUFZQyxjQUFjLEdBQUdaLCtDQUFRQSxDQUFDO0lBRTdDQyxnREFBU0EsQ0FBQztRQUNSLHFCQUFxQjtRQUNyQixNQUFNWSxTQUFTQyxhQUFhQyxPQUFPLENBQUM7UUFDcEMsSUFBSUYsVUFBVUEsV0FBV0osVUFBVTtZQUNqQ0MsWUFBWUc7UUFDZDtRQUNBRCxjQUFjO0lBQ2hCLEdBQUcsRUFBRTtJQUVMWCxnREFBU0EsQ0FBQztRQUNSLElBQUlVLFlBQVk7WUFDZEcsYUFBYUUsT0FBTyxDQUFDLFFBQVFQO1FBQy9CO0lBQ0YsR0FBRztRQUFDQTtRQUFVRTtLQUFXO0lBRXpCLHFCQUNFLDhEQUFDVCxnQkFBZ0JlLFFBQVE7UUFBQ0MsT0FBTztZQUFFVDtZQUFVQztZQUFhQztRQUFXO2tCQUNsRUg7Ozs7OztBQUdQO0FBRWUsU0FBU1csTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUM5RCxxQkFDRSw4REFBQ2Q7a0JBQ0MsNEVBQUNhO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xYS1leHBlcnQtd2Vic2l0ZS1maW5hbC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQge1xuICBjcmVhdGVDb250ZXh0LFxuICB1c2VDb250ZXh0LFxuICB1c2VTdGF0ZSxcbiAgUmVhY3ROb2RlLFxuICB1c2VFZmZlY3QsXG59IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBMYW5ndWFnZSBjb250ZXh0IHNldHVwXG5leHBvcnQgdHlwZSBMYW5ndWFnZSA9IFwiY3NcIiB8IFwiZW5cIjtcbmludGVyZmFjZSBMYW5ndWFnZUNvbnRleHRUeXBlIHtcbiAgbGFuZ3VhZ2U6IExhbmd1YWdlO1xuICBzZXRMYW5ndWFnZTogKGxhbmc6IExhbmd1YWdlKSA9PiB2b2lkO1xuICBpc0h5ZHJhdGVkOiBib29sZWFuO1xufVxuY29uc3QgTGFuZ3VhZ2VDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxMYW5ndWFnZUNvbnRleHRUeXBlIHwgdW5kZWZpbmVkPihcbiAgdW5kZWZpbmVkXG4pO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxhbmd1YWdlKCkge1xuICBjb25zdCBjdHggPSB1c2VDb250ZXh0KExhbmd1YWdlQ29udGV4dCk7XG4gIGlmICghY3R4KSB0aHJvdyBuZXcgRXJyb3IoXCJ1c2VMYW5ndWFnZSBtdXN0IGJlIHVzZWQgd2l0aGluIExhbmd1YWdlUHJvdmlkZXJcIik7XG4gIHJldHVybiBjdHg7XG59XG5mdW5jdGlvbiBMYW5ndWFnZVByb3ZpZGVyKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3ROb2RlIH0pIHtcbiAgY29uc3QgW2xhbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSB1c2VTdGF0ZTxMYW5ndWFnZT4oXCJjc1wiKTtcbiAgY29uc3QgW2lzSHlkcmF0ZWQsIHNldElzSHlkcmF0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gT25seSBydW4gb24gY2xpZW50XG4gICAgY29uc3Qgc3RvcmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYW5nXCIpIGFzIExhbmd1YWdlO1xuICAgIGlmIChzdG9yZWQgJiYgc3RvcmVkICE9PSBsYW5ndWFnZSkge1xuICAgICAgc2V0TGFuZ3VhZ2Uoc3RvcmVkKTtcbiAgICB9XG4gICAgc2V0SXNIeWRyYXRlZCh0cnVlKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzSHlkcmF0ZWQpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGFuZ1wiLCBsYW5ndWFnZSk7XG4gICAgfVxuICB9LCBbbGFuZ3VhZ2UsIGlzSHlkcmF0ZWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYW5ndWFnZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbGFuZ3VhZ2UsIHNldExhbmd1YWdlLCBpc0h5ZHJhdGVkIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTGFuZ3VhZ2VDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPExhbmd1YWdlUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9MYW5ndWFnZVByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMYW5ndWFnZUNvbnRleHQiLCJ1bmRlZmluZWQiLCJ1c2VMYW5ndWFnZSIsImN0eCIsIkVycm9yIiwiTGFuZ3VhZ2VQcm92aWRlciIsImNoaWxkcmVuIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsImlzSHlkcmF0ZWQiLCJzZXRJc0h5ZHJhdGVkIiwic3RvcmVkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJQcm92aWRlciIsInZhbHVlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();