/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Mukta);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --dark-green: hsl(121, 31%, 44%);\r\n  --green: hsl(108, 35%, 60%);\r\n  --light-green: hsl(68, 59%, 85%);\r\n}\r\n\r\nhtml {\r\n  box-sizing: border-box;\r\n  font-family: 'Mukta', sans-serif;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 1rem;\r\n}\r\n\r\na,\r\na:hover,\r\na:focus,\r\na:active {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\nul,\r\nli {\r\n  list-style: none;\r\n  padding: 0%;\r\n  margin: 0%;\r\n}\r\n\r\n.navbar {\r\n  height: 50px;\r\n  padding: 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n  align-items: center;\r\n  background-color: var(--dark-green);\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n}\r\n\r\n.navbar__logo i {\r\n  font-size: 3rem;\r\n}\r\n\r\n.navbar__recipes {\r\n  display: none;\r\n  font-size: 2rem;\r\n}\r\n\r\n.navbar__hamburger :nth-child(2) {\r\n  display: none;\r\n}\r\n\r\n.recipes {\r\n  margin: 80px auto;\r\n  width: 90%;\r\n}\r\n\r\n.recipes__list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  list-style: none;\r\n}\r\n\r\n.recipes__card {\r\n  display: flex;\r\n  margin: 1.5%;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n}\r\n\r\n.recipes__image {\r\n  width: 100%;\r\n}\r\n\r\n.recipes__content {\r\n  width: 100%;\r\n  padding-inline: 20px;\r\n}\r\n\r\n.recipes__header {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.recipes__title {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.recipes__likes {\r\n  display: block;\r\n  margin-top: -10px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.recipes__comments,\r\n.recipes__reservations {\r\n  display: block;\r\n  width: 70%;\r\n  margin: 10px auto;\r\n  padding: 5px 10px;\r\n}\r\n\r\n.recipes__popup {\r\n  display: block;\r\n  width: 85%;\r\n  height: 75%;\r\n  padding: 4%;\r\n  position: fixed;\r\n  background-color: white;\r\n  backdrop-filter: blur(2px);\r\n  top: 12.5%;\r\n  left: 7.5%;\r\n  overflow-y: auto;\r\n}\r\n\r\n.recipes__popup_image {\r\n  height: 60%;\r\n  width: auto;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  position: fixed;\r\n  top: calc(100% - 30px);\r\n  width: 100%;\r\n  padding: 8px;\r\n  height: 30px;\r\n  background-color: var(--dark-green);\r\n}\r\n\r\n.license-rights {\r\n  font-size: 10px;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .navbar {\r\n    height: 70px;\r\n    justify-content: space-evenly;\r\n  }\r\n\r\n  .navbar__recipes {\r\n    display: block;\r\n  }\r\n\r\n  .navbar__hamburger {\r\n    display: none;\r\n  }\r\n\r\n  .license-rights {\r\n    font-size: 14px;\r\n  }\r\n\r\n  .recipes {\r\n    margin-top: 100px;\r\n    justify-content: flex-start;\r\n    margin-bottom: 100px;\r\n  }\r\n\r\n  .recipes__list {\r\n    justify-content: flex-start;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .recipes__card {\r\n    width: 30%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n  }\r\n\r\n  .recipes__image {\r\n    width: 100%;\r\n  }\r\n\r\n  .recipes__content {\r\n    width: 100%;\r\n    padding-inline: 20px;\r\n  }\r\n\r\n  .recipes__header {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n\r\n  .recipes__title {\r\n    font-size: 1.3rem;\r\n  }\r\n\r\n  .recipes__likes {\r\n    display: block;\r\n    margin-top: -10px;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .recipes__comments,\r\n  .recipes__reservations {\r\n    display: block;\r\n    width: 70%;\r\n    margin: 10px auto;\r\n    padding: 5px 10px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAEA;EACE,gCAAgC;EAChC,2BAA2B;EAC3B,gCAAgC;AAClC;;AAEA;EACE,sBAAsB;EACtB,gCAAgC;AAClC;;AAEA;;;EAGE,mBAAmB;EACnB,UAAU;EACV,SAAS;EACT,eAAe;AACjB;;AAEA;;;;EAIE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;;EAEE,gBAAgB;EAChB,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,8BAA8B;EAC9B,SAAS;EACT,mBAAmB;EACnB,mCAAmC;EACnC,eAAe;EACf,MAAM;EACN,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,4EAA4E;AAC9E;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;EACX,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;;EAEE,cAAc;EACd,UAAU;EACV,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,UAAU;EACV,WAAW;EACX,WAAW;EACX,eAAe;EACf,uBAAuB;EACvB,0BAA0B;EAC1B,UAAU;EACV,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,WAAW;AACb;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,eAAe;EACf,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,mCAAmC;AACrC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE;IACE,YAAY;IACZ,6BAA6B;EAC/B;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,iBAAiB;IACjB,2BAA2B;IAC3B,oBAAoB;EACtB;;EAEA;IACE,2BAA2B;IAC3B,cAAc;EAChB;;EAEA;IACE,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,4EAA4E;EAC9E;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,WAAW;IACX,oBAAoB;EACtB;;EAEA;IACE,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;EACrB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,cAAc;IACd,iBAAiB;IACjB,mBAAmB;EACrB;;EAEA;;IAEE,cAAc;IACd,UAAU;IACV,iBAAiB;IACjB,iBAAiB;EACnB;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Mukta');\r\n\r\n:root {\r\n  --dark-green: hsl(121, 31%, 44%);\r\n  --green: hsl(108, 35%, 60%);\r\n  --light-green: hsl(68, 59%, 85%);\r\n}\r\n\r\nhtml {\r\n  box-sizing: border-box;\r\n  font-family: 'Mukta', sans-serif;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 1rem;\r\n}\r\n\r\na,\r\na:hover,\r\na:focus,\r\na:active {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\nul,\r\nli {\r\n  list-style: none;\r\n  padding: 0%;\r\n  margin: 0%;\r\n}\r\n\r\n.navbar {\r\n  height: 50px;\r\n  padding: 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n  align-items: center;\r\n  background-color: var(--dark-green);\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n}\r\n\r\n.navbar__logo i {\r\n  font-size: 3rem;\r\n}\r\n\r\n.navbar__recipes {\r\n  display: none;\r\n  font-size: 2rem;\r\n}\r\n\r\n.navbar__hamburger :nth-child(2) {\r\n  display: none;\r\n}\r\n\r\n.recipes {\r\n  margin: 80px auto;\r\n  width: 90%;\r\n}\r\n\r\n.recipes__list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  list-style: none;\r\n}\r\n\r\n.recipes__card {\r\n  display: flex;\r\n  margin: 1.5%;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n}\r\n\r\n.recipes__image {\r\n  width: 100%;\r\n}\r\n\r\n.recipes__content {\r\n  width: 100%;\r\n  padding-inline: 20px;\r\n}\r\n\r\n.recipes__header {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.recipes__title {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.recipes__likes {\r\n  display: block;\r\n  margin-top: -10px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.recipes__comments,\r\n.recipes__reservations {\r\n  display: block;\r\n  width: 70%;\r\n  margin: 10px auto;\r\n  padding: 5px 10px;\r\n}\r\n\r\n.recipes__popup {\r\n  display: block;\r\n  width: 85%;\r\n  height: 75%;\r\n  padding: 4%;\r\n  position: fixed;\r\n  background-color: white;\r\n  backdrop-filter: blur(2px);\r\n  top: 12.5%;\r\n  left: 7.5%;\r\n  overflow-y: auto;\r\n}\r\n\r\n.recipes__popup_image {\r\n  height: 60%;\r\n  width: auto;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  position: fixed;\r\n  top: calc(100% - 30px);\r\n  width: 100%;\r\n  padding: 8px;\r\n  height: 30px;\r\n  background-color: var(--dark-green);\r\n}\r\n\r\n.license-rights {\r\n  font-size: 10px;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .navbar {\r\n    height: 70px;\r\n    justify-content: space-evenly;\r\n  }\r\n\r\n  .navbar__recipes {\r\n    display: block;\r\n  }\r\n\r\n  .navbar__hamburger {\r\n    display: none;\r\n  }\r\n\r\n  .license-rights {\r\n    font-size: 14px;\r\n  }\r\n\r\n  .recipes {\r\n    margin-top: 100px;\r\n    justify-content: flex-start;\r\n    margin-bottom: 100px;\r\n  }\r\n\r\n  .recipes__list {\r\n    justify-content: flex-start;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .recipes__card {\r\n    width: 30%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n  }\r\n\r\n  .recipes__image {\r\n    width: 100%;\r\n  }\r\n\r\n  .recipes__content {\r\n    width: 100%;\r\n    padding-inline: 20px;\r\n  }\r\n\r\n  .recipes__header {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n\r\n  .recipes__title {\r\n    font-size: 1.3rem;\r\n  }\r\n\r\n  .recipes__likes {\r\n    display: block;\r\n    margin-top: -10px;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .recipes__comments,\r\n  .recipes__reservations {\r\n    display: block;\r\n    width: 70%;\r\n    margin: 10px auto;\r\n    padding: 5px 10px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/currentCategory.js":
/*!****************************************!*\
  !*** ./src/modules/currentCategory.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CurrentCategory)
/* harmony export */ });
class CurrentCategory {
  meals;

  constructor(categoryMeals = []) {
    this.meals = categoryMeals;
  }
}


/***/ }),

/***/ "./src/modules/currentMeal.js":
/*!************************************!*\
  !*** ./src/modules/currentMeal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CurrentMeal)
/* harmony export */ });
class CurrentMeal {
  idMeal;

  strMeal;

  strMealThumb;

  strInstructions;

  comments;

  constructor(currentMeal, comments = []) {
    this.idMeal = currentMeal.idMeal;
    this.strMeal = currentMeal.strMeal;
    this.strMealThumb = currentMeal.strMealThumb;
    this.strInstructions = currentMeal.strInstructions;
    this.comments = comments;
  }
}


/***/ }),

/***/ "./src/modules/fetchRequest.js":
/*!*************************************!*\
  !*** ./src/modules/fetchRequest.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FetchRequest)
/* harmony export */ });
class FetchRequest {
  method;

  body;

  headers;

  url;

  constructor({
    method = 'GET',
    body,
    url = '',
    headers = {
      'Content-type': 'application/json; charset=UTF-8',
    },
  } = {}) {
    this.method = method;
    this.body = body;
    this.headers = headers;
    this.url = url;
  }

  async call() {
    try {
      const options = {
        method: this.method,
        body: JSON.stringify(this.body),
        headers: this.method === 'POST' ? this.headers : undefined,
      };

      const response = await fetch(this.url, options);
      if (response.status === 201) return null;
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}


/***/ }),

/***/ "./src/modules/involvementAPI.js":
/*!***************************************!*\
  !*** ./src/modules/involvementAPI.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InvolvementAPI)
/* harmony export */ });
/* harmony import */ var _fetchRequest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchRequest.js */ "./src/modules/fetchRequest.js");
// n4Krnxa1GxXHbZ349UMm clean
// jtXFPXNizRtU5pfZ26sT
// test: MBxSJyVQ8zQzuxBkwa5m



const appId = 'jtXFPXNizRtU5pfZ26sT';
const urlMAP = {
  main: 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
  likes: `${appId}/likes/`,
  comments: `${appId}/comments`,
  byComment: `${appId}/comments?item_id=`,
};

class InvolvementAPI {
  static async addLike(meal) {
    try {
      const fetchRequest = new _fetchRequest_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
        method: 'POST',
        body: { item_id: meal },
        url: `${urlMAP.main}${urlMAP.likes}`,
      });
      await fetchRequest.call();
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getAllLikes() {
    try {
      const fetchRequest = new _fetchRequest_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
        url: `${urlMAP.main}${urlMAP.likes}`,
      });
      const allLikes = await fetchRequest.call();
      return allLikes;
    } catch (error) {
      throw new Error(error);
    }
  }

  static getMealLikes(likesArr, ItemId) {
    const mealLikes = likesArr.filter(
      (meal) => meal.item_id === ItemId,
    )[0];
    if (!mealLikes) return 0;
    return mealLikes.likes;
  }

  static async addComment({ username, comment }, meal) {
    try {
      const fetchRequest = new _fetchRequest_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
        method: 'POST',
        body: {
          item_id: meal,
          username,
          comment,
        },
        url: `${urlMAP.main}${urlMAP.comments}`,
      });
      await fetchRequest.call();
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getComments(meal) {
    try {
      const fetchRequest = new _fetchRequest_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
        url: `${urlMAP.main}${urlMAP.byComment}${meal}`,
      });
      const comments = await fetchRequest.call();
      return comments;
    } catch (error) {
      throw new Error(error);
    }
  }
}


/***/ }),

/***/ "./src/modules/mealAPI.js":
/*!********************************!*\
  !*** ./src/modules/mealAPI.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MealAPI)
/* harmony export */ });
/* harmony import */ var _fetchRequest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchRequest.js */ "./src/modules/fetchRequest.js");


const urlMap = {
  random: 'https://www.themealdb.com/api/json/v1/1/random.php',
  categories:
    'https://www.themealdb.com/api/json/v1/1/categories.php',
  byCategory: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=',
  byMealId: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=',
};

class MealAPI {
  static async getRecipe(id) {
    try {
      const fetchRequest = new _fetchRequest_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
        url: `${urlMap.byMealId}${id}`,
      });
      const data = await fetchRequest.call();
      return data.meals[0];
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getCategories() {
    try {
      const fetchRequest = new _fetchRequest_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
        url: urlMap.categories,
      });
      const categories = await fetchRequest.call();
      return categories.categories;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getByCategory(category) {
    try {
      const fetchRequest = new _fetchRequest_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
        url: `${urlMap.byCategory}${category}`,
      });
      const recipes = await fetchRequest.call();
      return recipes.meals;
    } catch (error) {
      throw new Error(error);
    }
  }
}


/***/ }),

/***/ "./src/modules/popUp.js":
/*!******************************!*\
  !*** ./src/modules/popUp.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopUp)
/* harmony export */ });
/* harmony import */ var _involvementAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvementAPI.js */ "./src/modules/involvementAPI.js");


class PopUp {
  static pop(data) {
    this.data = data;
    this.commentCount = 0;
    this.template(this.data.type);
  }

  static template() {
    const container = document.createElement('div');
    container.setAttribute('id', this.data.idMeal);
    container.setAttribute('class', 'recipes__popup');

    const commentSection = PopUp.commentsTemplate(this.data.type);
    const reservationSection = PopUp.reservationsTemplate(this.data.type);

    container.innerHTML = `
      <img class="recipes__popup_image" src="${this.data.strMealThumb}" alt="Delicious ${this.data.strMeal}">
      <i class="fa-solid fa-xmark"></i>
      <h2>${this.data.strMeal}</h2>
      
      ${commentSection}
      ${reservationSection}
    `;

    container.querySelector('i').addEventListener('click', () => {
      container.remove();
    });

    if (this.data.type === 'Recipe') {
      const [user, comment] = container.querySelectorAll('input');
      const submit = container.querySelector('button');
      const ulContainer = container.querySelector('ul');

      submit.addEventListener('click', async () => {
        if (user.value === '' || comment.value === '') return;
        const inputComment = { username: user.value, comment: comment.value };
        PopUp.createCommentOnDOM(user, comment, ulContainer, inputComment);
        await _involvementAPI_js__WEBPACK_IMPORTED_MODULE_0__["default"].addComment(inputComment, this.data.idMeal);
        PopUp.commentCountAdd(container);
        [user.value, comment.value] = ['', ''];
      });
    }

    document.body.appendChild(container);
  }

  static displayComment(data) {
    const [year, month, day] = data.creation_date.split('-');
    return `
        <li class="recipes__popup_comment">
          <span class="recipes__popup_comment-date">
            ${day}-${month}-${year}
          </span>
          <span class="recipes__popup_comment-user">
            ${data.username}:
          </span>
          <span class="recipes__popup_comment-content">
            ${data.comment}
          </span>
        </li>
      `;
  }

  static commentsTemplate(type) {
    if (type !== 'Recipe') return '';
    let comments = '';
    this.data.comments.forEach((comment) => {
      comments += PopUp.displayComment(comment);
    });
    return `
      <div class="recipes__popup_comments">
        <span class="recipes__popup_comment-count">Comments (${this.data.comments.length})</span>
        <ul class="recipes__popup_comments">${comments}</ul>
        <input class="recipes__popup_input-user" placeholder="User" tabindex=0></input>
        <input  class="recipes__popup_input-comment" placeholder="Comment" tabindex=0></input>
        <button class="recipes__popup_input-submit" type="button" tabindex=0>Comment</button>
      </div>
    `;
  }

  static reservationsTemplate(type) {
    if (type !== 'Reservation') return '';
    return '';
  }

  static createCommentOnDOM(user, comment, container, inputComment) {
    const [day, month, year] = new Date().toLocaleDateString().split('/');
    const li = PopUp.displayComment(
      {
        ...inputComment,
        creation_date:
          `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`,
      },
    );
    container.innerHTML += li;
  }

  static commentCountAdd(container) {
    this.commentCount += 1;
    const commentsNum = this.data.comments.length + this.commentCount;
    container.querySelector('.recipes__popup_comment-count').innerHTML = `Comments (${commentsNum})`;
    return commentsNum;
  }
}

/***/ }),

/***/ "./src/modules/userInterface.js":
/*!**************************************!*\
  !*** ./src/modules/userInterface.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserInterface)
/* harmony export */ });
/* harmony import */ var _involvementAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvementAPI.js */ "./src/modules/involvementAPI.js");


const recipeList = document.querySelector('.recipes__list');

class UserInterface {
  static displayRecipes(mealsArr, likes = []) {
    mealsArr.forEach((recipe) => {
      const mealLikes = _involvementAPI_js__WEBPACK_IMPORTED_MODULE_0__["default"].getMealLikes(
        likes,
        recipe.idMeal,
      );
      this.createCard(recipe, mealLikes);
    });
  }

  static displayCategories(categoriesArr) {
    categoriesArr.forEach((category) => {
      this.createCategoryCard(category);
    });
  }

  static createCategoryCard({
    idCategory,
    strCategory,
    strCategoryThumb,
  }) {
    const LI = document.createElement('li');
    LI.classList.add('recipes__card');
    LI.setAttribute('id', idCategory);
    LI.innerHTML = `
      <img class="recipes__image" src="${strCategoryThumb}" alt="Delicious ${strCategory}">
      <div class="recipes__content">
          <div class="recipes__header">
              <h2 class="recipes__title">${strCategory}</h2>
          </div>
          <button class="button categories__button">View recipes!</button>
      </div>
    `;
    recipeList.appendChild(LI);
  }

  static createCard(
    { strMeal = '', strMealThumb = '', idMeal },
    likes = 0,
  ) {
    const LI = document.createElement('li');
    LI.classList.add('recipes__card');
    LI.setAttribute('id', idMeal);
    LI.innerHTML = `
      <img class="recipes__image" src="${strMealThumb}" alt="Delicious ${strMeal}">
      <div class="recipes__content">
          <div class="recipes__header">
              <h2 class="recipes__title">${strMeal}</h2>
              <i class="fa-regular fa-heart"></i>
          </div>
          <span class="recipes__likes"><span>${likes}</span> like${
  likes === 1 ? '' : 's'
}</span>
          <button class="recipes__comments">Comments</button>
          <button class="recipes__reservations">Reservations</button>
      </div>
    `;
    recipeList.appendChild(LI);
  }

  static addToLikesCounterDOM(element) {
    const nLikes = element.querySelector('.recipes__likes');
    const oldLikes = +nLikes.children[0].innerText;
    const newLikes = oldLikes + 1;

    nLikes.innerHTML = `<span>${newLikes}</span> like${
      newLikes === 1 ? '' : 's'
    }`;
  }

  static itemCount() {
    const itemList = document.querySelector('.recipes__list');
    return itemList.children.length;
  }

  static counterText(type) {
    const text = document.querySelector('.navbar__recipes');
    text.innerHTML = `${type} (${this.itemCount()})`;
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _modules_userInterface_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/userInterface.js */ "./src/modules/userInterface.js");
/* harmony import */ var _modules_mealAPI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/mealAPI.js */ "./src/modules/mealAPI.js");
/* harmony import */ var _modules_currentCategory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/currentCategory.js */ "./src/modules/currentCategory.js");
/* harmony import */ var _modules_currentMeal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/currentMeal.js */ "./src/modules/currentMeal.js");
/* harmony import */ var _modules_involvementAPI_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/involvementAPI.js */ "./src/modules/involvementAPI.js");
/* harmony import */ var _modules_popUp_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/popUp.js */ "./src/modules/popUp.js");








const asyncEnv = async () => {
  const categories = await _modules_mealAPI_js__WEBPACK_IMPORTED_MODULE_2__["default"].getCategories();
  _modules_userInterface_js__WEBPACK_IMPORTED_MODULE_1__["default"].displayCategories(categories);
  _modules_userInterface_js__WEBPACK_IMPORTED_MODULE_1__["default"].counterText('Categories');
};

asyncEnv();

const LIST = document.querySelector('.recipes__list');

LIST.addEventListener('click', async (e) => {
  const clickedElement = e.target;

  if (clickedElement.classList.contains('categories__button')) {
    const categoryName = clickedElement.parentNode.children[0].innerText;
    LIST.innerHTML = '';
    const pasta = await _modules_mealAPI_js__WEBPACK_IMPORTED_MODULE_2__["default"].getByCategory(categoryName);
    const allLikes = await _modules_involvementAPI_js__WEBPACK_IMPORTED_MODULE_5__["default"].getAllLikes();
    const currentCategory = new _modules_currentCategory_js__WEBPACK_IMPORTED_MODULE_3__["default"](pasta);
    _modules_userInterface_js__WEBPACK_IMPORTED_MODULE_1__["default"].displayRecipes(currentCategory.meals, allLikes);

    _modules_userInterface_js__WEBPACK_IMPORTED_MODULE_1__["default"].counterText('Recipes');
  }

  if (clickedElement.classList.contains('fa-heart')) {
    const card = clickedElement.parentNode.parentNode.parentNode;
    const mealId = card.getAttribute('id');
    await _modules_involvementAPI_js__WEBPACK_IMPORTED_MODULE_5__["default"].addLike(mealId);
    _modules_userInterface_js__WEBPACK_IMPORTED_MODULE_1__["default"].addToLikesCounterDOM(card);
  }

  if (clickedElement.classList.contains('recipes__comments')) {
    const card = clickedElement.parentNode.parentNode;
    const mealId = card.getAttribute('id');
    const meal = await _modules_mealAPI_js__WEBPACK_IMPORTED_MODULE_2__["default"].getRecipe(mealId);

    await _modules_involvementAPI_js__WEBPACK_IMPORTED_MODULE_5__["default"].addComment(
      { username: '', comment: '' },
      mealId,
    );

    let comments = await _modules_involvementAPI_js__WEBPACK_IMPORTED_MODULE_5__["default"].getComments(mealId);

    comments = comments.filter((comment) => comment.username !== '');

    const currentMeal = new _modules_currentMeal_js__WEBPACK_IMPORTED_MODULE_4__["default"](meal, comments);

    _modules_popUp_js__WEBPACK_IMPORTED_MODULE_6__["default"].pop({
      ...currentMeal,
      comments,
      type: 'Recipe',
    });
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RkFBK0I7QUFDakMsRUFBRSw2RUFBeUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlFQUFxQjtBQUM3QywyQkFBMkIsOEVBQTBCO0FBQ3JELGdDQUFnQyxtRUFBZTtBQUMvQyxJQUFJLGdGQUE0QjtBQUNoQztBQUNBLElBQUksNkVBQXlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDBFQUFzQjtBQUNoQyxJQUFJLHNGQUFrQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHFFQUFpQjtBQUN4QztBQUNBLFVBQVUsNkVBQXlCO0FBQ25DLFFBQVEsMkJBQTJCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw4RUFBMEI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLCtEQUFXO0FBQ3ZDO0FBQ0EsSUFBSSw2REFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vc3JjL21vZHVsZXMvY3VycmVudENhdGVnb3J5LmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL3NyYy9tb2R1bGVzL2N1cnJlbnRNZWFsLmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL3NyYy9tb2R1bGVzL2ZldGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9zcmMvbW9kdWxlcy9pbnZvbHZlbWVudEFQSS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9zcmMvbW9kdWxlcy9tZWFsQVBJLmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL3NyYy9tb2R1bGVzL3BvcFVwLmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL3NyYy9tb2R1bGVzL3VzZXJJbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NhcHN0b25lLXR3by93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NhcHN0b25lLXR3by93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NhcHN0b25lLXR3by93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NhcHN0b25lLXR3by93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TXVrdGEpO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLWRhcmstZ3JlZW46IGhzbCgxMjEsIDMxJSwgNDQlKTtcXHJcXG4gIC0tZ3JlZW46IGhzbCgxMDgsIDM1JSwgNjAlKTtcXHJcXG4gIC0tbGlnaHQtZ3JlZW46IGhzbCg2OCwgNTklLCA4NSUpO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ011a3RhJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmEsXFxyXFxuYTpob3ZlcixcXHJcXG5hOmZvY3VzLFxcclxcbmE6YWN0aXZlIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG51bCxcXHJcXG5saSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZzogMCU7XFxyXFxuICBtYXJnaW46IDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JlZW4pO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJfX2xvZ28gaSB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJfX3JlY2lwZXMge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhcl9faGFtYnVyZ2VyIDpudGgtY2hpbGQoMikge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXMge1xcclxcbiAgbWFyZ2luOiA4MHB4IGF1dG87XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlc19fbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX2NhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbjogMS41JTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlc19faW1hZ2Uge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19jb250ZW50IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19oZWFkZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX3RpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlc19fbGlrZXMge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW4tdG9wOiAtMTBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19jb21tZW50cyxcXHJcXG4ucmVjaXBlc19fcmVzZXJ2YXRpb25zIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19wb3B1cCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiA4NSU7XFxyXFxuICBoZWlnaHQ6IDc1JTtcXHJcXG4gIHBhZGRpbmc6IDQlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXHJcXG4gIHRvcDogMTIuNSU7XFxyXFxuICBsZWZ0OiA3LjUlO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX3BvcHVwX2ltYWdlIHtcXHJcXG4gIGhlaWdodDogNjAlO1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogY2FsYygxMDAlIC0gMzBweCk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JlZW4pO1xcclxcbn1cXHJcXG5cXHJcXG4ubGljZW5zZS1yaWdodHMge1xcclxcbiAgZm9udC1zaXplOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm5hdmJhciB7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2YmFyX19yZWNpcGVzIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2YmFyX19oYW1idXJnZXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxpY2Vuc2UtcmlnaHRzIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJlY2lwZXMge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzX19saXN0IHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzX19jYXJkIHtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVjaXBlc19faW1hZ2Uge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzX19jb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmctaW5saW5lOiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJlY2lwZXNfX2hlYWRlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVjaXBlc19fdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzX19saWtlcyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzX19jb21tZW50cyxcXHJcXG4gIC5yZWNpcGVzX19yZXNlcnZhdGlvbnMge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDJCQUEyQjtFQUMzQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZ0NBQWdDO0FBQ2xDOztBQUVBOzs7RUFHRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBOzs7O0VBSUUscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztFQUNULG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDbkMsZUFBZTtFQUNmLE1BQU07RUFDTixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsNEVBQTRFO0FBQzlFOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQixVQUFVO0VBQ1YsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWiw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0Isb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsMkJBQTJCO0lBQzNCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDRFQUE0RTtFQUM5RTs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjs7RUFFQTs7SUFFRSxjQUFjO0lBQ2QsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NdWt0YScpO1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tZGFyay1ncmVlbjogaHNsKDEyMSwgMzElLCA0NCUpO1xcclxcbiAgLS1ncmVlbjogaHNsKDEwOCwgMzUlLCA2MCUpO1xcclxcbiAgLS1saWdodC1ncmVlbjogaHNsKDY4LCA1OSUsIDg1JSk7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTXVrdGEnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYSxcXHJcXG5hOmhvdmVyLFxcclxcbmE6Zm9jdXMsXFxyXFxuYTphY3RpdmUge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbnVsLFxcclxcbmxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwJTtcXHJcXG4gIG1hcmdpbjogMCU7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmVlbik7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhcl9fbG9nbyBpIHtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhcl9fcmVjaXBlcyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyX19oYW1idXJnZXIgOm50aC1jaGlsZCgyKSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlcyB7XFxyXFxuICBtYXJnaW46IDgwcHggYXV0bztcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlc19fY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luOiAxLjUlO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19pbWFnZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX2NvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nLWlubGluZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX2hlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlc19fdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19saWtlcyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX2NvbW1lbnRzLFxcclxcbi5yZWNpcGVzX19yZXNlcnZhdGlvbnMge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX3BvcHVwIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDg1JTtcXHJcXG4gIGhlaWdodDogNzUlO1xcclxcbiAgcGFkZGluZzogNCU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcclxcbiAgdG9wOiAxMi41JTtcXHJcXG4gIGxlZnQ6IDcuNSU7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlc19fcG9wdXBfaW1hZ2Uge1xcclxcbiAgaGVpZ2h0OiA2MCU7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiBjYWxjKDEwMCUgLSAzMHB4KTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmVlbik7XFxyXFxufVxcclxcblxcclxcbi5saWNlbnNlLXJpZ2h0cyB7XFxyXFxuICBmb250LXNpemU6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubmF2YmFyIHtcXHJcXG4gICAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXZiYXJfX3JlY2lwZXMge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXZiYXJfX2hhbWJ1cmdlciB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGljZW5zZS1yaWdodHMge1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVjaXBlcyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJlY2lwZXNfX2xpc3Qge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJlY2lwZXNfX2NhcmQge1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzX19pbWFnZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJlY2lwZXNfX2NvbnRlbnQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVjaXBlc19faGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzX190aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJlY2lwZXNfX2xpa2VzIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJlY2lwZXNfX2NvbW1lbnRzLFxcclxcbiAgLnJlY2lwZXNfX3Jlc2VydmF0aW9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbiAgICBtYXJnaW46IDEwcHggYXV0bztcXHJcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VycmVudENhdGVnb3J5IHtcbiAgbWVhbHM7XG5cbiAgY29uc3RydWN0b3IoY2F0ZWdvcnlNZWFscyA9IFtdKSB7XG4gICAgdGhpcy5tZWFscyA9IGNhdGVnb3J5TWVhbHM7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnJlbnRNZWFsIHtcclxuICBpZE1lYWw7XHJcblxyXG4gIHN0ck1lYWw7XHJcblxyXG4gIHN0ck1lYWxUaHVtYjtcclxuXHJcbiAgc3RySW5zdHJ1Y3Rpb25zO1xyXG5cclxuICBjb21tZW50cztcclxuXHJcbiAgY29uc3RydWN0b3IoY3VycmVudE1lYWwsIGNvbW1lbnRzID0gW10pIHtcclxuICAgIHRoaXMuaWRNZWFsID0gY3VycmVudE1lYWwuaWRNZWFsO1xyXG4gICAgdGhpcy5zdHJNZWFsID0gY3VycmVudE1lYWwuc3RyTWVhbDtcclxuICAgIHRoaXMuc3RyTWVhbFRodW1iID0gY3VycmVudE1lYWwuc3RyTWVhbFRodW1iO1xyXG4gICAgdGhpcy5zdHJJbnN0cnVjdGlvbnMgPSBjdXJyZW50TWVhbC5zdHJJbnN0cnVjdGlvbnM7XHJcbiAgICB0aGlzLmNvbW1lbnRzID0gY29tbWVudHM7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZldGNoUmVxdWVzdCB7XG4gIG1ldGhvZDtcblxuICBib2R5O1xuXG4gIGhlYWRlcnM7XG5cbiAgdXJsO1xuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBtZXRob2QgPSAnR0VUJyxcbiAgICBib2R5LFxuICAgIHVybCA9ICcnLFxuICAgIGhlYWRlcnMgPSB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgIH0sXG4gIH0gPSB7fSkge1xuICAgIHRoaXMubWV0aG9kID0gbWV0aG9kO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gICAgdGhpcy5oZWFkZXJzID0gaGVhZGVycztcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgfVxuXG4gIGFzeW5jIGNhbGwoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIG1ldGhvZDogdGhpcy5tZXRob2QsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRoaXMuYm9keSksXG4gICAgICAgIGhlYWRlcnM6IHRoaXMubWV0aG9kID09PSAnUE9TVCcgPyB0aGlzLmhlYWRlcnMgOiB1bmRlZmluZWQsXG4gICAgICB9O1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMudXJsLCBvcHRpb25zKTtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkgcmV0dXJuIG51bGw7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG59XG4iLCIvLyBuNEtybnhhMUd4WEhiWjM0OVVNbSBjbGVhblxyXG4vLyBqdFhGUFhOaXpSdFU1cGZaMjZzVFxyXG4vLyB0ZXN0OiBNQnhTSnlWUTh6UXp1eEJrd2E1bVxyXG5cclxuaW1wb3J0IEZldGNoUmVxdWVzdCBmcm9tICcuL2ZldGNoUmVxdWVzdC5qcyc7XHJcblxyXG5jb25zdCBhcHBJZCA9ICdqdFhGUFhOaXpSdFU1cGZaMjZzVCc7XHJcbmNvbnN0IHVybE1BUCA9IHtcclxuICBtYWluOiAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJyxcclxuICBsaWtlczogYCR7YXBwSWR9L2xpa2VzL2AsXHJcbiAgY29tbWVudHM6IGAke2FwcElkfS9jb21tZW50c2AsXHJcbiAgYnlDb21tZW50OiBgJHthcHBJZH0vY29tbWVudHM/aXRlbV9pZD1gLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52b2x2ZW1lbnRBUEkge1xyXG4gIHN0YXRpYyBhc3luYyBhZGRMaWtlKG1lYWwpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGZldGNoUmVxdWVzdCA9IG5ldyBGZXRjaFJlcXVlc3Qoe1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IHsgaXRlbV9pZDogbWVhbCB9LFxyXG4gICAgICAgIHVybDogYCR7dXJsTUFQLm1haW59JHt1cmxNQVAubGlrZXN9YCxcclxuICAgICAgfSk7XHJcbiAgICAgIGF3YWl0IGZldGNoUmVxdWVzdC5jYWxsKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldEFsbExpa2VzKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZmV0Y2hSZXF1ZXN0ID0gbmV3IEZldGNoUmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiBgJHt1cmxNQVAubWFpbn0ke3VybE1BUC5saWtlc31gLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgYWxsTGlrZXMgPSBhd2FpdCBmZXRjaFJlcXVlc3QuY2FsbCgpO1xyXG4gICAgICByZXR1cm4gYWxsTGlrZXM7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldE1lYWxMaWtlcyhsaWtlc0FyciwgSXRlbUlkKSB7XHJcbiAgICBjb25zdCBtZWFsTGlrZXMgPSBsaWtlc0Fyci5maWx0ZXIoXHJcbiAgICAgIChtZWFsKSA9PiBtZWFsLml0ZW1faWQgPT09IEl0ZW1JZCxcclxuICAgIClbMF07XHJcbiAgICBpZiAoIW1lYWxMaWtlcykgcmV0dXJuIDA7XHJcbiAgICByZXR1cm4gbWVhbExpa2VzLmxpa2VzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGFkZENvbW1lbnQoeyB1c2VybmFtZSwgY29tbWVudCB9LCBtZWFsKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBmZXRjaFJlcXVlc3QgPSBuZXcgRmV0Y2hSZXF1ZXN0KHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiB7XHJcbiAgICAgICAgICBpdGVtX2lkOiBtZWFsLFxyXG4gICAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgICBjb21tZW50LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXJsOiBgJHt1cmxNQVAubWFpbn0ke3VybE1BUC5jb21tZW50c31gLFxyXG4gICAgICB9KTtcclxuICAgICAgYXdhaXQgZmV0Y2hSZXF1ZXN0LmNhbGwoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0Q29tbWVudHMobWVhbCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZmV0Y2hSZXF1ZXN0ID0gbmV3IEZldGNoUmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiBgJHt1cmxNQVAubWFpbn0ke3VybE1BUC5ieUNvbW1lbnR9JHttZWFsfWAsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGZldGNoUmVxdWVzdC5jYWxsKCk7XHJcbiAgICAgIHJldHVybiBjb21tZW50cztcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBGZXRjaFJlcXVlc3QgZnJvbSAnLi9mZXRjaFJlcXVlc3QuanMnO1xyXG5cclxuY29uc3QgdXJsTWFwID0ge1xyXG4gIHJhbmRvbTogJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9yYW5kb20ucGhwJyxcclxuICBjYXRlZ29yaWVzOlxyXG4gICAgJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9jYXRlZ29yaWVzLnBocCcsXHJcbiAgYnlDYXRlZ29yeTogJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9maWx0ZXIucGhwP2M9JyxcclxuICBieU1lYWxJZDogJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9sb29rdXAucGhwP2k9JyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lYWxBUEkge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRSZWNpcGUoaWQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGZldGNoUmVxdWVzdCA9IG5ldyBGZXRjaFJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogYCR7dXJsTWFwLmJ5TWVhbElkfSR7aWR9YCxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaFJlcXVlc3QuY2FsbCgpO1xyXG4gICAgICByZXR1cm4gZGF0YS5tZWFsc1swXTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0Q2F0ZWdvcmllcygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGZldGNoUmVxdWVzdCA9IG5ldyBGZXRjaFJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogdXJsTWFwLmNhdGVnb3JpZXMsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgZmV0Y2hSZXF1ZXN0LmNhbGwoKTtcclxuICAgICAgcmV0dXJuIGNhdGVnb3JpZXMuY2F0ZWdvcmllcztcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0QnlDYXRlZ29yeShjYXRlZ29yeSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZmV0Y2hSZXF1ZXN0ID0gbmV3IEZldGNoUmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiBgJHt1cmxNYXAuYnlDYXRlZ29yeX0ke2NhdGVnb3J5fWAsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCByZWNpcGVzID0gYXdhaXQgZmV0Y2hSZXF1ZXN0LmNhbGwoKTtcclxuICAgICAgcmV0dXJuIHJlY2lwZXMubWVhbHM7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgSW52b2x2ZW1lbnRBUEkgZnJvbSAnLi9pbnZvbHZlbWVudEFQSS5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3BVcCB7XHJcbiAgc3RhdGljIHBvcChkYXRhKSB7XHJcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5jb21tZW50Q291bnQgPSAwO1xyXG4gICAgdGhpcy50ZW1wbGF0ZSh0aGlzLmRhdGEudHlwZSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdGVtcGxhdGUoKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgdGhpcy5kYXRhLmlkTWVhbCk7XHJcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyZWNpcGVzX19wb3B1cCcpO1xyXG5cclxuICAgIGNvbnN0IGNvbW1lbnRTZWN0aW9uID0gUG9wVXAuY29tbWVudHNUZW1wbGF0ZSh0aGlzLmRhdGEudHlwZSk7XHJcbiAgICBjb25zdCByZXNlcnZhdGlvblNlY3Rpb24gPSBQb3BVcC5yZXNlcnZhdGlvbnNUZW1wbGF0ZSh0aGlzLmRhdGEudHlwZSk7XHJcblxyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgICAgPGltZyBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2ltYWdlXCIgc3JjPVwiJHt0aGlzLmRhdGEuc3RyTWVhbFRodW1ifVwiIGFsdD1cIkRlbGljaW91cyAke3RoaXMuZGF0YS5zdHJNZWFsfVwiPlxyXG4gICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXhtYXJrXCI+PC9pPlxyXG4gICAgICA8aDI+JHt0aGlzLmRhdGEuc3RyTWVhbH08L2gyPlxyXG4gICAgICBcclxuICAgICAgJHtjb21tZW50U2VjdGlvbn1cclxuICAgICAgJHtyZXNlcnZhdGlvblNlY3Rpb259XHJcbiAgICBgO1xyXG5cclxuICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLmRhdGEudHlwZSA9PT0gJ1JlY2lwZScpIHtcclxuICAgICAgY29uc3QgW3VzZXIsIGNvbW1lbnRdID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XHJcbiAgICAgIGNvbnN0IHN1Ym1pdCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcclxuICAgICAgY29uc3QgdWxDb250YWluZXIgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcigndWwnKTtcclxuXHJcbiAgICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZiAodXNlci52YWx1ZSA9PT0gJycgfHwgY29tbWVudC52YWx1ZSA9PT0gJycpIHJldHVybjtcclxuICAgICAgICBjb25zdCBpbnB1dENvbW1lbnQgPSB7IHVzZXJuYW1lOiB1c2VyLnZhbHVlLCBjb21tZW50OiBjb21tZW50LnZhbHVlIH07XHJcbiAgICAgICAgUG9wVXAuY3JlYXRlQ29tbWVudE9uRE9NKHVzZXIsIGNvbW1lbnQsIHVsQ29udGFpbmVyLCBpbnB1dENvbW1lbnQpO1xyXG4gICAgICAgIGF3YWl0IEludm9sdmVtZW50QVBJLmFkZENvbW1lbnQoaW5wdXRDb21tZW50LCB0aGlzLmRhdGEuaWRNZWFsKTtcclxuICAgICAgICBQb3BVcC5jb21tZW50Q291bnRBZGQoY29udGFpbmVyKTtcclxuICAgICAgICBbdXNlci52YWx1ZSwgY29tbWVudC52YWx1ZV0gPSBbJycsICcnXTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGRpc3BsYXlDb21tZW50KGRhdGEpIHtcclxuICAgIGNvbnN0IFt5ZWFyLCBtb250aCwgZGF5XSA9IGRhdGEuY3JlYXRpb25fZGF0ZS5zcGxpdCgnLScpO1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgICA8bGkgY2xhc3M9XCJyZWNpcGVzX19wb3B1cF9jb21tZW50XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2NvbW1lbnQtZGF0ZVwiPlxyXG4gICAgICAgICAgICAke2RheX0tJHttb250aH0tJHt5ZWFyfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZWNpcGVzX19wb3B1cF9jb21tZW50LXVzZXJcIj5cclxuICAgICAgICAgICAgJHtkYXRhLnVzZXJuYW1lfTpcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfY29tbWVudC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICR7ZGF0YS5jb21tZW50fVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIGA7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY29tbWVudHNUZW1wbGF0ZSh0eXBlKSB7XHJcbiAgICBpZiAodHlwZSAhPT0gJ1JlY2lwZScpIHJldHVybiAnJztcclxuICAgIGxldCBjb21tZW50cyA9ICcnO1xyXG4gICAgdGhpcy5kYXRhLmNvbW1lbnRzLmZvckVhY2goKGNvbW1lbnQpID0+IHtcclxuICAgICAgY29tbWVudHMgKz0gUG9wVXAuZGlzcGxheUNvbW1lbnQoY29tbWVudCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyZWNpcGVzX19wb3B1cF9jb21tZW50c1wiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfY29tbWVudC1jb3VudFwiPkNvbW1lbnRzICgke3RoaXMuZGF0YS5jb21tZW50cy5sZW5ndGh9KTwvc3Bhbj5cclxuICAgICAgICA8dWwgY2xhc3M9XCJyZWNpcGVzX19wb3B1cF9jb21tZW50c1wiPiR7Y29tbWVudHN9PC91bD5cclxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJyZWNpcGVzX19wb3B1cF9pbnB1dC11c2VyXCIgcGxhY2Vob2xkZXI9XCJVc2VyXCIgdGFiaW5kZXg9MD48L2lucHV0PlxyXG4gICAgICAgIDxpbnB1dCAgY2xhc3M9XCJyZWNpcGVzX19wb3B1cF9pbnB1dC1jb21tZW50XCIgcGxhY2Vob2xkZXI9XCJDb21tZW50XCIgdGFiaW5kZXg9MD48L2lucHV0PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJyZWNpcGVzX19wb3B1cF9pbnB1dC1zdWJtaXRcIiB0eXBlPVwiYnV0dG9uXCIgdGFiaW5kZXg9MD5Db21tZW50PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZXNlcnZhdGlvbnNUZW1wbGF0ZSh0eXBlKSB7XHJcbiAgICBpZiAodHlwZSAhPT0gJ1Jlc2VydmF0aW9uJykgcmV0dXJuICcnO1xyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNyZWF0ZUNvbW1lbnRPbkRPTSh1c2VyLCBjb21tZW50LCBjb250YWluZXIsIGlucHV0Q29tbWVudCkge1xyXG4gICAgY29uc3QgW2RheSwgbW9udGgsIHllYXJdID0gbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKS5zcGxpdCgnLycpO1xyXG4gICAgY29uc3QgbGkgPSBQb3BVcC5kaXNwbGF5Q29tbWVudChcclxuICAgICAge1xyXG4gICAgICAgIC4uLmlucHV0Q29tbWVudCxcclxuICAgICAgICBjcmVhdGlvbl9kYXRlOlxyXG4gICAgICAgICAgYCR7eWVhcn0tJHttb250aCA8IDEwID8gJzAnIDogJyd9JHttb250aH0tJHtkYXkgPCAxMCA/ICcwJyA6ICcnfSR7ZGF5fWAsXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCArPSBsaTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjb21tZW50Q291bnRBZGQoY29udGFpbmVyKSB7XHJcbiAgICB0aGlzLmNvbW1lbnRDb3VudCArPSAxO1xyXG4gICAgY29uc3QgY29tbWVudHNOdW0gPSB0aGlzLmRhdGEuY29tbWVudHMubGVuZ3RoICsgdGhpcy5jb21tZW50Q291bnQ7XHJcbiAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJlY2lwZXNfX3BvcHVwX2NvbW1lbnQtY291bnQnKS5pbm5lckhUTUwgPSBgQ29tbWVudHMgKCR7Y29tbWVudHNOdW19KWA7XHJcbiAgICByZXR1cm4gY29tbWVudHNOdW07XHJcbiAgfVxyXG59IiwiaW1wb3J0IEludm9sdmVtZW50QVBJIGZyb20gJy4vaW52b2x2ZW1lbnRBUEkuanMnO1xyXG5cclxuY29uc3QgcmVjaXBlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNpcGVzX19saXN0Jyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW50ZXJmYWNlIHtcclxuICBzdGF0aWMgZGlzcGxheVJlY2lwZXMobWVhbHNBcnIsIGxpa2VzID0gW10pIHtcclxuICAgIG1lYWxzQXJyLmZvckVhY2goKHJlY2lwZSkgPT4ge1xyXG4gICAgICBjb25zdCBtZWFsTGlrZXMgPSBJbnZvbHZlbWVudEFQSS5nZXRNZWFsTGlrZXMoXHJcbiAgICAgICAgbGlrZXMsXHJcbiAgICAgICAgcmVjaXBlLmlkTWVhbCxcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5jcmVhdGVDYXJkKHJlY2lwZSwgbWVhbExpa2VzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGRpc3BsYXlDYXRlZ29yaWVzKGNhdGVnb3JpZXNBcnIpIHtcclxuICAgIGNhdGVnb3JpZXNBcnIuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgdGhpcy5jcmVhdGVDYXRlZ29yeUNhcmQoY2F0ZWdvcnkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY3JlYXRlQ2F0ZWdvcnlDYXJkKHtcclxuICAgIGlkQ2F0ZWdvcnksXHJcbiAgICBzdHJDYXRlZ29yeSxcclxuICAgIHN0ckNhdGVnb3J5VGh1bWIsXHJcbiAgfSkge1xyXG4gICAgY29uc3QgTEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgTEkuY2xhc3NMaXN0LmFkZCgncmVjaXBlc19fY2FyZCcpO1xyXG4gICAgTEkuc2V0QXR0cmlidXRlKCdpZCcsIGlkQ2F0ZWdvcnkpO1xyXG4gICAgTEkuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8aW1nIGNsYXNzPVwicmVjaXBlc19faW1hZ2VcIiBzcmM9XCIke3N0ckNhdGVnb3J5VGh1bWJ9XCIgYWx0PVwiRGVsaWNpb3VzICR7c3RyQ2F0ZWdvcnl9XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyZWNpcGVzX19jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVjaXBlc19faGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzPVwicmVjaXBlc19fdGl0bGVcIj4ke3N0ckNhdGVnb3J5fTwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gY2F0ZWdvcmllc19fYnV0dG9uXCI+VmlldyByZWNpcGVzITwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgICByZWNpcGVMaXN0LmFwcGVuZENoaWxkKExJKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjcmVhdGVDYXJkKFxyXG4gICAgeyBzdHJNZWFsID0gJycsIHN0ck1lYWxUaHVtYiA9ICcnLCBpZE1lYWwgfSxcclxuICAgIGxpa2VzID0gMCxcclxuICApIHtcclxuICAgIGNvbnN0IExJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIExJLmNsYXNzTGlzdC5hZGQoJ3JlY2lwZXNfX2NhcmQnKTtcclxuICAgIExJLnNldEF0dHJpYnV0ZSgnaWQnLCBpZE1lYWwpO1xyXG4gICAgTEkuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8aW1nIGNsYXNzPVwicmVjaXBlc19faW1hZ2VcIiBzcmM9XCIke3N0ck1lYWxUaHVtYn1cIiBhbHQ9XCJEZWxpY2lvdXMgJHtzdHJNZWFsfVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicmVjaXBlc19fY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlY2lwZXNfX2hlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzcz1cInJlY2lwZXNfX3RpdGxlXCI+JHtzdHJNZWFsfTwvaDI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLWhlYXJ0XCI+PC9pPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlY2lwZXNfX2xpa2VzXCI+PHNwYW4+JHtsaWtlc308L3NwYW4+IGxpa2Uke1xyXG4gIGxpa2VzID09PSAxID8gJycgOiAncydcclxufTwvc3Bhbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJyZWNpcGVzX19jb21tZW50c1wiPkNvbW1lbnRzPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicmVjaXBlc19fcmVzZXJ2YXRpb25zXCI+UmVzZXJ2YXRpb25zPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICAgIHJlY2lwZUxpc3QuYXBwZW5kQ2hpbGQoTEkpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFkZFRvTGlrZXNDb3VudGVyRE9NKGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IG5MaWtlcyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLnJlY2lwZXNfX2xpa2VzJyk7XHJcbiAgICBjb25zdCBvbGRMaWtlcyA9ICtuTGlrZXMuY2hpbGRyZW5bMF0uaW5uZXJUZXh0O1xyXG4gICAgY29uc3QgbmV3TGlrZXMgPSBvbGRMaWtlcyArIDE7XHJcblxyXG4gICAgbkxpa2VzLmlubmVySFRNTCA9IGA8c3Bhbj4ke25ld0xpa2VzfTwvc3Bhbj4gbGlrZSR7XHJcbiAgICAgIG5ld0xpa2VzID09PSAxID8gJycgOiAncydcclxuICAgIH1gO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGl0ZW1Db3VudCgpIHtcclxuICAgIGNvbnN0IGl0ZW1MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY2lwZXNfX2xpc3QnKTtcclxuICAgIHJldHVybiBpdGVtTGlzdC5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY291bnRlclRleHQodHlwZSkge1xyXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXJfX3JlY2lwZXMnKTtcclxuICAgIHRleHQuaW5uZXJIVE1MID0gYCR7dHlwZX0gKCR7dGhpcy5pdGVtQ291bnQoKX0pYDtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XHJcbmltcG9ydCBVc2VySW50ZXJmYWNlIGZyb20gJy4vbW9kdWxlcy91c2VySW50ZXJmYWNlLmpzJztcclxuaW1wb3J0IE1lYWxBUEkgZnJvbSAnLi9tb2R1bGVzL21lYWxBUEkuanMnO1xyXG5pbXBvcnQgQ3VycmVudENhdGVnb3J5IGZyb20gJy4vbW9kdWxlcy9jdXJyZW50Q2F0ZWdvcnkuanMnO1xyXG5pbXBvcnQgQ3VycmVudE1lYWwgZnJvbSAnLi9tb2R1bGVzL2N1cnJlbnRNZWFsLmpzJztcclxuaW1wb3J0IEludm9sdmVtZW50QVBJIGZyb20gJy4vbW9kdWxlcy9pbnZvbHZlbWVudEFQSS5qcyc7XHJcbmltcG9ydCBQb3BVcCBmcm9tICcuL21vZHVsZXMvcG9wVXAuanMnO1xyXG5cclxuY29uc3QgYXN5bmNFbnYgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IE1lYWxBUEkuZ2V0Q2F0ZWdvcmllcygpO1xyXG4gIFVzZXJJbnRlcmZhY2UuZGlzcGxheUNhdGVnb3JpZXMoY2F0ZWdvcmllcyk7XHJcbiAgVXNlckludGVyZmFjZS5jb3VudGVyVGV4dCgnQ2F0ZWdvcmllcycpO1xyXG59O1xyXG5cclxuYXN5bmNFbnYoKTtcclxuXHJcbmNvbnN0IExJU1QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjaXBlc19fbGlzdCcpO1xyXG5cclxuTElTVC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XHJcbiAgY29uc3QgY2xpY2tlZEVsZW1lbnQgPSBlLnRhcmdldDtcclxuXHJcbiAgaWYgKGNsaWNrZWRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnY2F0ZWdvcmllc19fYnV0dG9uJykpIHtcclxuICAgIGNvbnN0IGNhdGVnb3J5TmFtZSA9IGNsaWNrZWRFbGVtZW50LnBhcmVudE5vZGUuY2hpbGRyZW5bMF0uaW5uZXJUZXh0O1xyXG4gICAgTElTVC5pbm5lckhUTUwgPSAnJztcclxuICAgIGNvbnN0IHBhc3RhID0gYXdhaXQgTWVhbEFQSS5nZXRCeUNhdGVnb3J5KGNhdGVnb3J5TmFtZSk7XHJcbiAgICBjb25zdCBhbGxMaWtlcyA9IGF3YWl0IEludm9sdmVtZW50QVBJLmdldEFsbExpa2VzKCk7XHJcbiAgICBjb25zdCBjdXJyZW50Q2F0ZWdvcnkgPSBuZXcgQ3VycmVudENhdGVnb3J5KHBhc3RhKTtcclxuICAgIFVzZXJJbnRlcmZhY2UuZGlzcGxheVJlY2lwZXMoY3VycmVudENhdGVnb3J5Lm1lYWxzLCBhbGxMaWtlcyk7XHJcblxyXG4gICAgVXNlckludGVyZmFjZS5jb3VudGVyVGV4dCgnUmVjaXBlcycpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNsaWNrZWRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZmEtaGVhcnQnKSkge1xyXG4gICAgY29uc3QgY2FyZCA9IGNsaWNrZWRFbGVtZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gICAgY29uc3QgbWVhbElkID0gY2FyZC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XHJcbiAgICBhd2FpdCBJbnZvbHZlbWVudEFQSS5hZGRMaWtlKG1lYWxJZCk7XHJcbiAgICBVc2VySW50ZXJmYWNlLmFkZFRvTGlrZXNDb3VudGVyRE9NKGNhcmQpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNsaWNrZWRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncmVjaXBlc19fY29tbWVudHMnKSkge1xyXG4gICAgY29uc3QgY2FyZCA9IGNsaWNrZWRFbGVtZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IG1lYWxJZCA9IGNhcmQuZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG4gICAgY29uc3QgbWVhbCA9IGF3YWl0IE1lYWxBUEkuZ2V0UmVjaXBlKG1lYWxJZCk7XHJcblxyXG4gICAgYXdhaXQgSW52b2x2ZW1lbnRBUEkuYWRkQ29tbWVudChcclxuICAgICAgeyB1c2VybmFtZTogJycsIGNvbW1lbnQ6ICcnIH0sXHJcbiAgICAgIG1lYWxJZCxcclxuICAgICk7XHJcblxyXG4gICAgbGV0IGNvbW1lbnRzID0gYXdhaXQgSW52b2x2ZW1lbnRBUEkuZ2V0Q29tbWVudHMobWVhbElkKTtcclxuXHJcbiAgICBjb21tZW50cyA9IGNvbW1lbnRzLmZpbHRlcigoY29tbWVudCkgPT4gY29tbWVudC51c2VybmFtZSAhPT0gJycpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRNZWFsID0gbmV3IEN1cnJlbnRNZWFsKG1lYWwsIGNvbW1lbnRzKTtcclxuXHJcbiAgICBQb3BVcC5wb3Aoe1xyXG4gICAgICAuLi5jdXJyZW50TWVhbCxcclxuICAgICAgY29tbWVudHMsXHJcbiAgICAgIHR5cGU6ICdSZWNpcGUnLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9