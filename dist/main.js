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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --dark-green: hsl(121, 31%, 44%);\n  --green: hsl(108, 35%, 60%);\n  --light-green: hsl(68, 59%, 85%);\n}\n\nhtml {\n  box-sizing: border-box;\n  font-family: 'Mukta', sans-serif;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n  font-size: 1rem;\n}\n\na,\na:hover,\na:focus,\na:active {\n  text-decoration: none;\n  color: inherit;\n}\n\nul,\nli {\n  list-style: none;\n  padding: 0%;\n  margin: 0%;\n}\n\n.navbar {\n  height: 50px;\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  align-items: center;\n  background-color: var(--dark-green);\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n\n.navbar__logo i {\n  font-size: 3rem;\n}\n\n.navbar__recipes {\n  display: none;\n  font-size: 2rem;\n}\n\n.navbar__hamburger :nth-child(2) {\n  display: none;\n}\n\n.recipes {\n  margin: 80px auto;\n  width: 90%;\n}\n\n.recipes__list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  list-style: none;\n}\n\n.recipes__card {\n  display: flex;\n  margin: 1.5%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n\n.recipes__image {\n  width: 100%;\n}\n\n.recipes__content {\n  width: 100%;\n  padding-inline: 20px;\n}\n\n.recipes__header {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.recipes__title {\n  font-size: 1.3rem;\n}\n\n.recipes__likes {\n  display: block;\n  margin-top: -10px;\n  margin-bottom: 20px;\n}\n\n.recipes__comments,\n.recipes__reservations {\n  display: block;\n  width: 70%;\n  margin: 10px auto;\n  padding: 5px 10px;\n}\n\n.recipes__popup {\n  display: block;\n  width: 85%;\n  height: 75%;\n  padding: 4%;\n  position: fixed;\n  background-color: white;\n  backdrop-filter: blur(2px);\n  top: 12.5%;\n  left: 7.5%;\n  overflow-y: auto;\n}\n\n.recipes__popup_image {\n  height: 60%;\n  width: auto;\n}\n\nfooter {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  position: fixed;\n  top: calc(100% - 30px);\n  width: 100%;\n  padding: 8px;\n  height: 30px;\n  background-color: var(--dark-green);\n}\n\n.license-rights {\n  font-size: 10px;\n}\n\n@media screen and (min-width: 768px) {\n  .navbar {\n    height: 70px;\n    justify-content: space-evenly;\n  }\n\n  .navbar__recipes {\n    display: block;\n  }\n\n  .navbar__hamburger {\n    display: none;\n  }\n\n  .license-rights {\n    font-size: 14px;\n  }\n\n  .recipes {\n    margin-top: 100px;\n    justify-content: flex-start;\n    margin-bottom: 100px;\n  }\n\n  .recipes__list {\n    justify-content: flex-start;\n    margin: 0 auto;\n  }\n\n  .recipes__card {\n    width: 30%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  }\n\n  .recipes__image {\n    width: 100%;\n  }\n\n  .recipes__content {\n    width: 100%;\n    padding-inline: 20px;\n  }\n\n  .recipes__header {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .recipes__title {\n    font-size: 1.3rem;\n  }\n\n  .recipes__likes {\n    display: block;\n    margin-top: -10px;\n    margin-bottom: 20px;\n  }\n\n  .recipes__comments,\n  .recipes__reservations {\n    display: block;\n    width: 70%;\n    margin: 10px auto;\n    padding: 5px 10px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAEA;EACE,gCAAgC;EAChC,2BAA2B;EAC3B,gCAAgC;AAClC;;AAEA;EACE,sBAAsB;EACtB,gCAAgC;AAClC;;AAEA;;;EAGE,mBAAmB;EACnB,UAAU;EACV,SAAS;EACT,eAAe;AACjB;;AAEA;;;;EAIE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;;EAEE,gBAAgB;EAChB,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,8BAA8B;EAC9B,SAAS;EACT,mBAAmB;EACnB,mCAAmC;EACnC,eAAe;EACf,MAAM;EACN,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,4EAA4E;AAC9E;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;EACX,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;;EAEE,cAAc;EACd,UAAU;EACV,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,UAAU;EACV,WAAW;EACX,WAAW;EACX,eAAe;EACf,uBAAuB;EACvB,0BAA0B;EAC1B,UAAU;EACV,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,WAAW;AACb;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,eAAe;EACf,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,mCAAmC;AACrC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE;IACE,YAAY;IACZ,6BAA6B;EAC/B;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,iBAAiB;IACjB,2BAA2B;IAC3B,oBAAoB;EACtB;;EAEA;IACE,2BAA2B;IAC3B,cAAc;EAChB;;EAEA;IACE,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,4EAA4E;EAC9E;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,WAAW;IACX,oBAAoB;EACtB;;EAEA;IACE,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;EACrB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,cAAc;IACd,iBAAiB;IACjB,mBAAmB;EACrB;;EAEA;;IAEE,cAAc;IACd,UAAU;IACV,iBAAiB;IACjB,iBAAiB;EACnB;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Mukta');\n\n:root {\n  --dark-green: hsl(121, 31%, 44%);\n  --green: hsl(108, 35%, 60%);\n  --light-green: hsl(68, 59%, 85%);\n}\n\nhtml {\n  box-sizing: border-box;\n  font-family: 'Mukta', sans-serif;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n  font-size: 1rem;\n}\n\na,\na:hover,\na:focus,\na:active {\n  text-decoration: none;\n  color: inherit;\n}\n\nul,\nli {\n  list-style: none;\n  padding: 0%;\n  margin: 0%;\n}\n\n.navbar {\n  height: 50px;\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  align-items: center;\n  background-color: var(--dark-green);\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n\n.navbar__logo i {\n  font-size: 3rem;\n}\n\n.navbar__recipes {\n  display: none;\n  font-size: 2rem;\n}\n\n.navbar__hamburger :nth-child(2) {\n  display: none;\n}\n\n.recipes {\n  margin: 80px auto;\n  width: 90%;\n}\n\n.recipes__list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  list-style: none;\n}\n\n.recipes__card {\n  display: flex;\n  margin: 1.5%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n\n.recipes__image {\n  width: 100%;\n}\n\n.recipes__content {\n  width: 100%;\n  padding-inline: 20px;\n}\n\n.recipes__header {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.recipes__title {\n  font-size: 1.3rem;\n}\n\n.recipes__likes {\n  display: block;\n  margin-top: -10px;\n  margin-bottom: 20px;\n}\n\n.recipes__comments,\n.recipes__reservations {\n  display: block;\n  width: 70%;\n  margin: 10px auto;\n  padding: 5px 10px;\n}\n\n.recipes__popup {\n  display: block;\n  width: 85%;\n  height: 75%;\n  padding: 4%;\n  position: fixed;\n  background-color: white;\n  backdrop-filter: blur(2px);\n  top: 12.5%;\n  left: 7.5%;\n  overflow-y: auto;\n}\n\n.recipes__popup_image {\n  height: 60%;\n  width: auto;\n}\n\nfooter {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  position: fixed;\n  top: calc(100% - 30px);\n  width: 100%;\n  padding: 8px;\n  height: 30px;\n  background-color: var(--dark-green);\n}\n\n.license-rights {\n  font-size: 10px;\n}\n\n@media screen and (min-width: 768px) {\n  .navbar {\n    height: 70px;\n    justify-content: space-evenly;\n  }\n\n  .navbar__recipes {\n    display: block;\n  }\n\n  .navbar__hamburger {\n    display: none;\n  }\n\n  .license-rights {\n    font-size: 14px;\n  }\n\n  .recipes {\n    margin-top: 100px;\n    justify-content: flex-start;\n    margin-bottom: 100px;\n  }\n\n  .recipes__list {\n    justify-content: flex-start;\n    margin: 0 auto;\n  }\n\n  .recipes__card {\n    width: 30%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  }\n\n  .recipes__image {\n    width: 100%;\n  }\n\n  .recipes__content {\n    width: 100%;\n    padding-inline: 20px;\n  }\n\n  .recipes__header {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .recipes__title {\n    font-size: 1.3rem;\n  }\n\n  .recipes__likes {\n    display: block;\n    margin-top: -10px;\n    margin-bottom: 20px;\n  }\n\n  .recipes__comments,\n  .recipes__reservations {\n    display: block;\n    width: 70%;\n    margin: 10px auto;\n    padding: 5px 10px;\n  }\n}\n"],"sourceRoot":""}]);
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
};

class MealAPI {
  static async getRandomRecipe() {
    try {
      const fetchRequest = new _fetchRequest_js__WEBPACK_IMPORTED_MODULE_0__["default"]({ url: urlMap.random });
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
/* harmony import */ var _popUp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popUp.js */ "./src/modules/popUp.js");



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

  static displayCategories() {}

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

    const openComments = LI.querySelector('.recipes__comments');
    openComments.addEventListener('click', async () => {
      await _involvementAPI_js__WEBPACK_IMPORTED_MODULE_0__["default"].addComment(
        { username: '', comment: '' },
        idMeal,
      );
      let comments = await _involvementAPI_js__WEBPACK_IMPORTED_MODULE_0__["default"].getComments(idMeal);
      comments = comments.filter(
        (comment) => comment.username !== '',
      );
      _popUp_js__WEBPACK_IMPORTED_MODULE_1__["default"].pop({
        strMeal,
        strMealThumb,
        idMeal,
        comments,
        type: 'Recipe',
      });
    });

    const openReservations = LI.querySelector(
      '.recipes__reservations',
    );
    openReservations.addEventListener('click', () => {
      _popUp_js__WEBPACK_IMPORTED_MODULE_1__["default"].pop({
        strMeal,
        strMealThumb,
        idMeal,
        type: 'Reservation',
      });
    });

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
/* harmony import */ var _modules_involvementAPI_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/involvementAPI.js */ "./src/modules/involvementAPI.js");






const asyncEnv = async () => {
  const pasta = await _modules_mealAPI_js__WEBPACK_IMPORTED_MODULE_2__["default"].getByCategory('Chicken');
  const allLikes = await _modules_involvementAPI_js__WEBPACK_IMPORTED_MODULE_4__["default"].getAllLikes();
  const currentCategory = new _modules_currentCategory_js__WEBPACK_IMPORTED_MODULE_3__["default"](pasta);
  _modules_userInterface_js__WEBPACK_IMPORTED_MODULE_1__["default"].displayRecipes(currentCategory.meals, allLikes);
  _modules_userInterface_js__WEBPACK_IMPORTED_MODULE_1__["default"].counterText('Recipes');
};

asyncEnv();

const LIST = document.querySelector('.recipes__list');

LIST.addEventListener('click', async (e) => {
  const clickedElement = e.target;

  if (clickedElement.classList.contains('fa-heart')) {
    const card = clickedElement.parentNode.parentNode.parentNode;
    const mealId = card.getAttribute('id');
    await _modules_involvementAPI_js__WEBPACK_IMPORTED_MODULE_4__["default"].addLike(mealId);
    _modules_userInterface_js__WEBPACK_IMPORTED_MODULE_1__["default"].addToLikesCounterDOM(card);
  }

  if (clickedElement.classList.contains('recipes__comments')) {
    const mealId = clickedElement.parentNode.getAttribute('id');
    await _modules_involvementAPI_js__WEBPACK_IMPORTED_MODULE_4__["default"].addComment(
      { username: '', comment: '' },
      mealId,
    );
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vc3JjL21vZHVsZXMvY3VycmVudENhdGVnb3J5LmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL3NyYy9tb2R1bGVzL2ZldGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9zcmMvbW9kdWxlcy9pbnZvbHZlbWVudEFQSS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9zcmMvbW9kdWxlcy9tZWFsQVBJLmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL3NyYy9tb2R1bGVzL3BvcFVwLmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL3NyYy9tb2R1bGVzL3VzZXJJbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NhcHN0b25lLXR3by93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NhcHN0b25lLXR3by93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NhcHN0b25lLXR3by93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NhcHN0b25lLXR3by93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TXVrdGEpO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWRhcmstZ3JlZW46IGhzbCgxMjEsIDMxJSwgNDQlKTtcXG4gIC0tZ3JlZW46IGhzbCgxMDgsIDM1JSwgNjAlKTtcXG4gIC0tbGlnaHQtZ3JlZW46IGhzbCg2OCwgNTklLCA4NSUpO1xcbn1cXG5cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ011a3RhJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbmEsXFxuYTpob3ZlcixcXG5hOmZvY3VzLFxcbmE6YWN0aXZlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG51bCxcXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMCU7XFxuICBtYXJnaW46IDAlO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JlZW4pO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5uYXZiYXJfX2xvZ28gaSB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5uYXZiYXJfX3JlY2lwZXMge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLm5hdmJhcl9faGFtYnVyZ2VyIDpudGgtY2hpbGQoMikge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnJlY2lwZXMge1xcbiAgbWFyZ2luOiA4MHB4IGF1dG87XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4ucmVjaXBlc19fbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnJlY2lwZXNfX2NhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMS41JTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xcbn1cXG5cXG4ucmVjaXBlc19faW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5yZWNpcGVzX19jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XFxufVxcblxcbi5yZWNpcGVzX19oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJlY2lwZXNfX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ucmVjaXBlc19fbGlrZXMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tdG9wOiAtMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5yZWNpcGVzX19jb21tZW50cyxcXG4ucmVjaXBlc19fcmVzZXJ2YXRpb25zIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcblxcbi5yZWNpcGVzX19wb3B1cCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA4NSU7XFxuICBoZWlnaHQ6IDc1JTtcXG4gIHBhZGRpbmc6IDQlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXG4gIHRvcDogMTIuNSU7XFxuICBsZWZ0OiA3LjUlO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLnJlY2lwZXNfX3BvcHVwX2ltYWdlIHtcXG4gIGhlaWdodDogNjAlO1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogY2FsYygxMDAlIC0gMzBweCk7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JlZW4pO1xcbn1cXG5cXG4ubGljZW5zZS1yaWdodHMge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLm5hdmJhciB7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB9XFxuXFxuICAubmF2YmFyX19yZWNpcGVzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAubmF2YmFyX19oYW1idXJnZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmxpY2Vuc2UtcmlnaHRzIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgfVxcblxcbiAgLnJlY2lwZXMge1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG4gIH1cXG5cXG4gIC5yZWNpcGVzX19saXN0IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gIH1cXG5cXG4gIC5yZWNpcGVzX19jYXJkIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XFxuICB9XFxuXFxuICAucmVjaXBlc19faW1hZ2Uge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5yZWNpcGVzX19jb250ZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmctaW5saW5lOiAyMHB4O1xcbiAgfVxcblxcbiAgLnJlY2lwZXNfX2hlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAucmVjaXBlc19fdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gIH1cXG5cXG4gIC5yZWNpcGVzX19saWtlcyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG5cXG4gIC5yZWNpcGVzX19jb21tZW50cyxcXG4gIC5yZWNpcGVzX19yZXNlcnZhdGlvbnMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDJCQUEyQjtFQUMzQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZ0NBQWdDO0FBQ2xDOztBQUVBOzs7RUFHRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBOzs7O0VBSUUscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztFQUNULG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDbkMsZUFBZTtFQUNmLE1BQU07RUFDTixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsNEVBQTRFO0FBQzlFOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQixVQUFVO0VBQ1YsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWiw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0Isb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsMkJBQTJCO0lBQzNCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDRFQUE0RTtFQUM5RTs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjs7RUFFQTs7SUFFRSxjQUFjO0lBQ2QsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NdWt0YScpO1xcblxcbjpyb290IHtcXG4gIC0tZGFyay1ncmVlbjogaHNsKDEyMSwgMzElLCA0NCUpO1xcbiAgLS1ncmVlbjogaHNsKDEwOCwgMzUlLCA2MCUpO1xcbiAgLS1saWdodC1ncmVlbjogaHNsKDY4LCA1OSUsIDg1JSk7XFxufVxcblxcbmh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnTXVrdGEnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuYSxcXG5hOmhvdmVyLFxcbmE6Zm9jdXMsXFxuYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbnVsLFxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwJTtcXG4gIG1hcmdpbjogMCU7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmVlbik7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm5hdmJhcl9fbG9nbyBpIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLm5hdmJhcl9fcmVjaXBlcyB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ubmF2YmFyX19oYW1idXJnZXIgOm50aC1jaGlsZCgyKSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucmVjaXBlcyB7XFxuICBtYXJnaW46IDgwcHggYXV0bztcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbi5yZWNpcGVzX19saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ucmVjaXBlc19fY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAxLjUlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XFxufVxcblxcbi5yZWNpcGVzX19pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnJlY2lwZXNfX2NvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWlubGluZTogMjBweDtcXG59XFxuXFxuLnJlY2lwZXNfX2hlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmVjaXBlc19fdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5yZWNpcGVzX19saWtlcyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnJlY2lwZXNfX2NvbW1lbnRzLFxcbi5yZWNpcGVzX19yZXNlcnZhdGlvbnMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogNzAlO1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG59XFxuXFxuLnJlY2lwZXNfX3BvcHVwIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDg1JTtcXG4gIGhlaWdodDogNzUlO1xcbiAgcGFkZGluZzogNCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcbiAgdG9wOiAxMi41JTtcXG4gIGxlZnQ6IDcuNSU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXBfaW1hZ2Uge1xcbiAgaGVpZ2h0OiA2MCU7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiBjYWxjKDEwMCUgLSAzMHB4KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmVlbik7XFxufVxcblxcbi5saWNlbnNlLXJpZ2h0cyB7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAubmF2YmFyIHtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIH1cXG5cXG4gIC5uYXZiYXJfX3JlY2lwZXMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC5uYXZiYXJfX2hhbWJ1cmdlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAubGljZW5zZS1yaWdodHMge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICB9XFxuXFxuICAucmVjaXBlcyB7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbiAgfVxcblxcbiAgLnJlY2lwZXNfX2xpc3Qge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgfVxcblxcbiAgLnJlY2lwZXNfX2NhcmQge1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcXG4gIH1cXG5cXG4gIC5yZWNpcGVzX19pbWFnZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLnJlY2lwZXNfX2NvbnRlbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XFxuICB9XFxuXFxuICAucmVjaXBlc19faGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5yZWNpcGVzX190aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgfVxcblxcbiAgLnJlY2lwZXNfX2xpa2VzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgfVxcblxcbiAgLnJlY2lwZXNfX2NvbW1lbnRzLFxcbiAgLnJlY2lwZXNfX3Jlc2VydmF0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBtYXJnaW46IDEwcHggYXV0bztcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VycmVudENhdGVnb3J5IHtcbiAgbWVhbHM7XG5cbiAgY29uc3RydWN0b3IoY2F0ZWdvcnlNZWFscyA9IFtdKSB7XG4gICAgdGhpcy5tZWFscyA9IGNhdGVnb3J5TWVhbHM7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZldGNoUmVxdWVzdCB7XG4gIG1ldGhvZDtcblxuICBib2R5O1xuXG4gIGhlYWRlcnM7XG5cbiAgdXJsO1xuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBtZXRob2QgPSAnR0VUJyxcbiAgICBib2R5LFxuICAgIHVybCA9ICcnLFxuICAgIGhlYWRlcnMgPSB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgIH0sXG4gIH0gPSB7fSkge1xuICAgIHRoaXMubWV0aG9kID0gbWV0aG9kO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gICAgdGhpcy5oZWFkZXJzID0gaGVhZGVycztcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgfVxuXG4gIGFzeW5jIGNhbGwoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIG1ldGhvZDogdGhpcy5tZXRob2QsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRoaXMuYm9keSksXG4gICAgICAgIGhlYWRlcnM6IHRoaXMubWV0aG9kID09PSAnUE9TVCcgPyB0aGlzLmhlYWRlcnMgOiB1bmRlZmluZWQsXG4gICAgICB9O1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMudXJsLCBvcHRpb25zKTtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkgcmV0dXJuIG51bGw7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG59XG4iLCIvLyBuNEtybnhhMUd4WEhiWjM0OVVNbSBjbGVhblxuLy8ganRYRlBYTml6UnRVNXBmWjI2c1Rcbi8vIHRlc3Q6IE1CeFNKeVZROHpRenV4Qmt3YTVtXG5cbmltcG9ydCBGZXRjaFJlcXVlc3QgZnJvbSAnLi9mZXRjaFJlcXVlc3QuanMnO1xuXG5jb25zdCBhcHBJZCA9ICdqdFhGUFhOaXpSdFU1cGZaMjZzVCc7XG5jb25zdCB1cmxNQVAgPSB7XG4gIG1haW46ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nLFxuICBsaWtlczogYCR7YXBwSWR9L2xpa2VzL2AsXG4gIGNvbW1lbnRzOiBgJHthcHBJZH0vY29tbWVudHNgLFxuICBieUNvbW1lbnQ6IGAke2FwcElkfS9jb21tZW50cz9pdGVtX2lkPWAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnZvbHZlbWVudEFQSSB7XG4gIHN0YXRpYyBhc3luYyBhZGRMaWtlKG1lYWwpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmV0Y2hSZXF1ZXN0ID0gbmV3IEZldGNoUmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiB7IGl0ZW1faWQ6IG1lYWwgfSxcbiAgICAgICAgdXJsOiBgJHt1cmxNQVAubWFpbn0ke3VybE1BUC5saWtlc31gLFxuICAgICAgfSk7XG4gICAgICBhd2FpdCBmZXRjaFJlcXVlc3QuY2FsbCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRBbGxMaWtlcygpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmV0Y2hSZXF1ZXN0ID0gbmV3IEZldGNoUmVxdWVzdCh7XG4gICAgICAgIHVybDogYCR7dXJsTUFQLm1haW59JHt1cmxNQVAubGlrZXN9YCxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgYWxsTGlrZXMgPSBhd2FpdCBmZXRjaFJlcXVlc3QuY2FsbCgpO1xuICAgICAgcmV0dXJuIGFsbExpa2VzO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXRNZWFsTGlrZXMobGlrZXNBcnIsIEl0ZW1JZCkge1xuICAgIGNvbnN0IG1lYWxMaWtlcyA9IGxpa2VzQXJyLmZpbHRlcihcbiAgICAgIChtZWFsKSA9PiBtZWFsLml0ZW1faWQgPT09IEl0ZW1JZCxcbiAgICApWzBdO1xuICAgIGlmICghbWVhbExpa2VzKSByZXR1cm4gMDtcbiAgICByZXR1cm4gbWVhbExpa2VzLmxpa2VzO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGFkZENvbW1lbnQoeyB1c2VybmFtZSwgY29tbWVudCB9LCBtZWFsKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZldGNoUmVxdWVzdCA9IG5ldyBGZXRjaFJlcXVlc3Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keToge1xuICAgICAgICAgIGl0ZW1faWQ6IG1lYWwsXG4gICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgY29tbWVudCxcbiAgICAgICAgfSxcbiAgICAgICAgdXJsOiBgJHt1cmxNQVAubWFpbn0ke3VybE1BUC5jb21tZW50c31gLFxuICAgICAgfSk7XG4gICAgICBhd2FpdCBmZXRjaFJlcXVlc3QuY2FsbCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRDb21tZW50cyhtZWFsKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZldGNoUmVxdWVzdCA9IG5ldyBGZXRjaFJlcXVlc3Qoe1xuICAgICAgICB1cmw6IGAke3VybE1BUC5tYWlufSR7dXJsTUFQLmJ5Q29tbWVudH0ke21lYWx9YCxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBmZXRjaFJlcXVlc3QuY2FsbCgpO1xuICAgICAgcmV0dXJuIGNvbW1lbnRzO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IEZldGNoUmVxdWVzdCBmcm9tICcuL2ZldGNoUmVxdWVzdC5qcyc7XG5cbmNvbnN0IHVybE1hcCA9IHtcbiAgcmFuZG9tOiAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL3JhbmRvbS5waHAnLFxuICBjYXRlZ29yaWVzOlxuICAgICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvY2F0ZWdvcmllcy5waHAnLFxuICBieUNhdGVnb3J5OiAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2ZpbHRlci5waHA/Yz0nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVhbEFQSSB7XG4gIHN0YXRpYyBhc3luYyBnZXRSYW5kb21SZWNpcGUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZldGNoUmVxdWVzdCA9IG5ldyBGZXRjaFJlcXVlc3QoeyB1cmw6IHVybE1hcC5yYW5kb20gfSk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hSZXF1ZXN0LmNhbGwoKTtcbiAgICAgIHJldHVybiBkYXRhLm1lYWxzWzBdO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRDYXRlZ29yaWVzKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBmZXRjaFJlcXVlc3QgPSBuZXcgRmV0Y2hSZXF1ZXN0KHtcbiAgICAgICAgdXJsOiB1cmxNYXAuY2F0ZWdvcmllcyxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGZldGNoUmVxdWVzdC5jYWxsKCk7XG4gICAgICByZXR1cm4gY2F0ZWdvcmllcy5jYXRlZ29yaWVzO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRCeUNhdGVnb3J5KGNhdGVnb3J5KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZldGNoUmVxdWVzdCA9IG5ldyBGZXRjaFJlcXVlc3Qoe1xuICAgICAgICB1cmw6IGAke3VybE1hcC5ieUNhdGVnb3J5fSR7Y2F0ZWdvcnl9YCxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgcmVjaXBlcyA9IGF3YWl0IGZldGNoUmVxdWVzdC5jYWxsKCk7XG4gICAgICByZXR1cm4gcmVjaXBlcy5tZWFscztcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBJbnZvbHZlbWVudEFQSSBmcm9tICcuL2ludm9sdmVtZW50QVBJLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wVXAge1xuICBzdGF0aWMgcG9wKGRhdGEpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMuY29tbWVudENvdW50ID0gMDtcbiAgICB0aGlzLnRlbXBsYXRlKHRoaXMuZGF0YS50eXBlKTtcbiAgfVxuXG4gIHN0YXRpYyB0ZW1wbGF0ZSgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMuZGF0YS5pZE1lYWwpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JlY2lwZXNfX3BvcHVwJyk7XG5cbiAgICBjb25zdCBjb21tZW50U2VjdGlvbiA9IFBvcFVwLmNvbW1lbnRzVGVtcGxhdGUodGhpcy5kYXRhLnR5cGUpO1xuICAgIGNvbnN0IHJlc2VydmF0aW9uU2VjdGlvbiA9IFBvcFVwLnJlc2VydmF0aW9uc1RlbXBsYXRlKHRoaXMuZGF0YS50eXBlKTtcblxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICA8aW1nIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfaW1hZ2VcIiBzcmM9XCIke3RoaXMuZGF0YS5zdHJNZWFsVGh1bWJ9XCIgYWx0PVwiRGVsaWNpb3VzICR7dGhpcy5kYXRhLnN0ck1lYWx9XCI+XG4gICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXhtYXJrXCI+PC9pPlxuICAgICAgPGgyPiR7dGhpcy5kYXRhLnN0ck1lYWx9PC9oMj5cbiAgICAgIFxuICAgICAgJHtjb21tZW50U2VjdGlvbn1cbiAgICAgICR7cmVzZXJ2YXRpb25TZWN0aW9ufVxuICAgIGA7XG5cbiAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcignaScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29udGFpbmVyLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuZGF0YS50eXBlID09PSAnUmVjaXBlJykge1xuICAgICAgY29uc3QgW3VzZXIsIGNvbW1lbnRdID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG4gICAgICBjb25zdCBzdWJtaXQgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG4gICAgICBjb25zdCB1bENvbnRhaW5lciA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCd1bCcpO1xuXG4gICAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmICh1c2VyLnZhbHVlID09PSAnJyB8fCBjb21tZW50LnZhbHVlID09PSAnJykgcmV0dXJuO1xuICAgICAgICBjb25zdCBpbnB1dENvbW1lbnQgPSB7IHVzZXJuYW1lOiB1c2VyLnZhbHVlLCBjb21tZW50OiBjb21tZW50LnZhbHVlIH07XG4gICAgICAgIFBvcFVwLmNyZWF0ZUNvbW1lbnRPbkRPTSh1c2VyLCBjb21tZW50LCB1bENvbnRhaW5lciwgaW5wdXRDb21tZW50KTtcbiAgICAgICAgYXdhaXQgSW52b2x2ZW1lbnRBUEkuYWRkQ29tbWVudChpbnB1dENvbW1lbnQsIHRoaXMuZGF0YS5pZE1lYWwpO1xuICAgICAgICBQb3BVcC5jb21tZW50Q291bnRBZGQoY29udGFpbmVyKTtcbiAgICAgICAgW3VzZXIudmFsdWUsIGNvbW1lbnQudmFsdWVdID0gWycnLCAnJ107XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIH1cblxuICBzdGF0aWMgZGlzcGxheUNvbW1lbnQoZGF0YSkge1xuICAgIGNvbnN0IFt5ZWFyLCBtb250aCwgZGF5XSA9IGRhdGEuY3JlYXRpb25fZGF0ZS5zcGxpdCgnLScpO1xuICAgIHJldHVybiBgXG4gICAgICAgIDxsaSBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2NvbW1lbnRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2NvbW1lbnQtZGF0ZVwiPlxuICAgICAgICAgICAgJHtkYXl9LSR7bW9udGh9LSR7eWVhcn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZWNpcGVzX19wb3B1cF9jb21tZW50LXVzZXJcIj5cbiAgICAgICAgICAgICR7ZGF0YS51c2VybmFtZX06XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfY29tbWVudC1jb250ZW50XCI+XG4gICAgICAgICAgICAke2RhdGEuY29tbWVudH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICBgO1xuICB9XG5cbiAgc3RhdGljIGNvbW1lbnRzVGVtcGxhdGUodHlwZSkge1xuICAgIGlmICh0eXBlICE9PSAnUmVjaXBlJykgcmV0dXJuICcnO1xuICAgIGxldCBjb21tZW50cyA9ICcnO1xuICAgIHRoaXMuZGF0YS5jb21tZW50cy5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgICBjb21tZW50cyArPSBQb3BVcC5kaXNwbGF5Q29tbWVudChjb21tZW50KTtcbiAgICB9KTtcbiAgICByZXR1cm4gYFxuICAgICAgPGRpdiBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2NvbW1lbnRzXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfY29tbWVudC1jb3VudFwiPkNvbW1lbnRzICgke3RoaXMuZGF0YS5jb21tZW50cy5sZW5ndGh9KTwvc3Bhbj5cbiAgICAgICAgPHVsIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfY29tbWVudHNcIj4ke2NvbW1lbnRzfTwvdWw+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2lucHV0LXVzZXJcIiBwbGFjZWhvbGRlcj1cIlVzZXJcIiB0YWJpbmRleD0wPjwvaW5wdXQ+XG4gICAgICAgIDxpbnB1dCAgY2xhc3M9XCJyZWNpcGVzX19wb3B1cF9pbnB1dC1jb21tZW50XCIgcGxhY2Vob2xkZXI9XCJDb21tZW50XCIgdGFiaW5kZXg9MD48L2lucHV0PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfaW5wdXQtc3VibWl0XCIgdHlwZT1cImJ1dHRvblwiIHRhYmluZGV4PTA+Q29tbWVudDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyByZXNlcnZhdGlvbnNUZW1wbGF0ZSh0eXBlKSB7XG4gICAgaWYgKHR5cGUgIT09ICdSZXNlcnZhdGlvbicpIHJldHVybiAnJztcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlQ29tbWVudE9uRE9NKHVzZXIsIGNvbW1lbnQsIGNvbnRhaW5lciwgaW5wdXRDb21tZW50KSB7XG4gICAgY29uc3QgW2RheSwgbW9udGgsIHllYXJdID0gbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKS5zcGxpdCgnLycpO1xuICAgIGNvbnN0IGxpID0gUG9wVXAuZGlzcGxheUNvbW1lbnQoXG4gICAgICB7XG4gICAgICAgIC4uLmlucHV0Q29tbWVudCxcbiAgICAgICAgY3JlYXRpb25fZGF0ZTpcbiAgICAgICAgICBgJHt5ZWFyfS0ke21vbnRoIDwgMTAgPyAnMCcgOiAnJ30ke21vbnRofS0ke2RheSA8IDEwID8gJzAnIDogJyd9JHtkYXl9YCxcbiAgICAgIH0sXG4gICAgKTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MICs9IGxpO1xuICB9XG5cbiAgc3RhdGljIGNvbW1lbnRDb3VudEFkZChjb250YWluZXIpIHtcbiAgICB0aGlzLmNvbW1lbnRDb3VudCArPSAxO1xuICAgIGNvbnN0IGNvbW1lbnRzTnVtID0gdGhpcy5kYXRhLmNvbW1lbnRzLmxlbmd0aCArIHRoaXMuY29tbWVudENvdW50O1xuICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmVjaXBlc19fcG9wdXBfY29tbWVudC1jb3VudCcpLmlubmVySFRNTCA9IGBDb21tZW50cyAoJHtjb21tZW50c051bX0pYDtcbiAgICByZXR1cm4gY29tbWVudHNOdW07XG4gIH1cbn0iLCJpbXBvcnQgSW52b2x2ZW1lbnRBUEkgZnJvbSAnLi9pbnZvbHZlbWVudEFQSS5qcyc7XG5pbXBvcnQgUG9wVXAgZnJvbSAnLi9wb3BVcC5qcyc7XG5cbmNvbnN0IHJlY2lwZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjaXBlc19fbGlzdCcpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW50ZXJmYWNlIHtcbiAgc3RhdGljIGRpc3BsYXlSZWNpcGVzKG1lYWxzQXJyLCBsaWtlcyA9IFtdKSB7XG4gICAgbWVhbHNBcnIuZm9yRWFjaCgocmVjaXBlKSA9PiB7XG4gICAgICBjb25zdCBtZWFsTGlrZXMgPSBJbnZvbHZlbWVudEFQSS5nZXRNZWFsTGlrZXMoXG4gICAgICAgIGxpa2VzLFxuICAgICAgICByZWNpcGUuaWRNZWFsLFxuICAgICAgKTtcbiAgICAgIHRoaXMuY3JlYXRlQ2FyZChyZWNpcGUsIG1lYWxMaWtlcyk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGlzcGxheUNhdGVnb3JpZXMoKSB7fVxuXG4gIHN0YXRpYyBjcmVhdGVDYXJkKFxuICAgIHsgc3RyTWVhbCA9ICcnLCBzdHJNZWFsVGh1bWIgPSAnJywgaWRNZWFsIH0sXG4gICAgbGlrZXMgPSAwLFxuICApIHtcbiAgICBjb25zdCBMSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgTEkuY2xhc3NMaXN0LmFkZCgncmVjaXBlc19fY2FyZCcpO1xuICAgIExJLnNldEF0dHJpYnV0ZSgnaWQnLCBpZE1lYWwpO1xuICAgIExJLmlubmVySFRNTCA9IGBcbiAgICAgIDxpbWcgY2xhc3M9XCJyZWNpcGVzX19pbWFnZVwiIHNyYz1cIiR7c3RyTWVhbFRodW1ifVwiIGFsdD1cIkRlbGljaW91cyAke3N0ck1lYWx9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicmVjaXBlc19fY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWNpcGVzX19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzPVwicmVjaXBlc19fdGl0bGVcIj4ke3N0ck1lYWx9PC9oMj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLWhlYXJ0XCI+PC9pPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVjaXBlc19fbGlrZXNcIj48c3Bhbj4ke2xpa2VzfTwvc3Bhbj4gbGlrZSR7XG4gIGxpa2VzID09PSAxID8gJycgOiAncydcbn08L3NwYW4+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJlY2lwZXNfX2NvbW1lbnRzXCI+Q29tbWVudHM8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicmVjaXBlc19fcmVzZXJ2YXRpb25zXCI+UmVzZXJ2YXRpb25zPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgY29uc3Qgb3BlbkNvbW1lbnRzID0gTEkucXVlcnlTZWxlY3RvcignLnJlY2lwZXNfX2NvbW1lbnRzJyk7XG4gICAgb3BlbkNvbW1lbnRzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgSW52b2x2ZW1lbnRBUEkuYWRkQ29tbWVudChcbiAgICAgICAgeyB1c2VybmFtZTogJycsIGNvbW1lbnQ6ICcnIH0sXG4gICAgICAgIGlkTWVhbCxcbiAgICAgICk7XG4gICAgICBsZXQgY29tbWVudHMgPSBhd2FpdCBJbnZvbHZlbWVudEFQSS5nZXRDb21tZW50cyhpZE1lYWwpO1xuICAgICAgY29tbWVudHMgPSBjb21tZW50cy5maWx0ZXIoXG4gICAgICAgIChjb21tZW50KSA9PiBjb21tZW50LnVzZXJuYW1lICE9PSAnJyxcbiAgICAgICk7XG4gICAgICBQb3BVcC5wb3Aoe1xuICAgICAgICBzdHJNZWFsLFxuICAgICAgICBzdHJNZWFsVGh1bWIsXG4gICAgICAgIGlkTWVhbCxcbiAgICAgICAgY29tbWVudHMsXG4gICAgICAgIHR5cGU6ICdSZWNpcGUnLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBvcGVuUmVzZXJ2YXRpb25zID0gTEkucXVlcnlTZWxlY3RvcihcbiAgICAgICcucmVjaXBlc19fcmVzZXJ2YXRpb25zJyxcbiAgICApO1xuICAgIG9wZW5SZXNlcnZhdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBQb3BVcC5wb3Aoe1xuICAgICAgICBzdHJNZWFsLFxuICAgICAgICBzdHJNZWFsVGh1bWIsXG4gICAgICAgIGlkTWVhbCxcbiAgICAgICAgdHlwZTogJ1Jlc2VydmF0aW9uJyxcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmVjaXBlTGlzdC5hcHBlbmRDaGlsZChMSSk7XG4gIH1cblxuICBzdGF0aWMgYWRkVG9MaWtlc0NvdW50ZXJET00oZWxlbWVudCkge1xuICAgIGNvbnN0IG5MaWtlcyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLnJlY2lwZXNfX2xpa2VzJyk7XG4gICAgY29uc3Qgb2xkTGlrZXMgPSArbkxpa2VzLmNoaWxkcmVuWzBdLmlubmVyVGV4dDtcbiAgICBjb25zdCBuZXdMaWtlcyA9IG9sZExpa2VzICsgMTtcblxuICAgIG5MaWtlcy5pbm5lckhUTUwgPSBgPHNwYW4+JHtuZXdMaWtlc308L3NwYW4+IGxpa2Uke1xuICAgICAgbmV3TGlrZXMgPT09IDEgPyAnJyA6ICdzJ1xuICAgIH1gO1xuICB9XG5cbiAgc3RhdGljIGl0ZW1Db3VudCgpIHtcbiAgICBjb25zdCBpdGVtTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNpcGVzX19saXN0Jyk7XG4gICAgcmV0dXJuIGl0ZW1MaXN0LmNoaWxkcmVuLmxlbmd0aDtcbiAgfVxuXG4gIHN0YXRpYyBjb3VudGVyVGV4dCh0eXBlKSB7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXJfX3JlY2lwZXMnKTtcbiAgICB0ZXh0LmlubmVySFRNTCA9IGAke3R5cGV9ICgke3RoaXMuaXRlbUNvdW50KCl9KWA7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IFVzZXJJbnRlcmZhY2UgZnJvbSAnLi9tb2R1bGVzL3VzZXJJbnRlcmZhY2UuanMnO1xuaW1wb3J0IE1lYWxBUEkgZnJvbSAnLi9tb2R1bGVzL21lYWxBUEkuanMnO1xuaW1wb3J0IEN1cnJlbnRDYXRlZ29yeSBmcm9tICcuL21vZHVsZXMvY3VycmVudENhdGVnb3J5LmpzJztcbmltcG9ydCBJbnZvbHZlbWVudEFQSSBmcm9tICcuL21vZHVsZXMvaW52b2x2ZW1lbnRBUEkuanMnO1xuXG5jb25zdCBhc3luY0VudiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcGFzdGEgPSBhd2FpdCBNZWFsQVBJLmdldEJ5Q2F0ZWdvcnkoJ0NoaWNrZW4nKTtcbiAgY29uc3QgYWxsTGlrZXMgPSBhd2FpdCBJbnZvbHZlbWVudEFQSS5nZXRBbGxMaWtlcygpO1xuICBjb25zdCBjdXJyZW50Q2F0ZWdvcnkgPSBuZXcgQ3VycmVudENhdGVnb3J5KHBhc3RhKTtcbiAgVXNlckludGVyZmFjZS5kaXNwbGF5UmVjaXBlcyhjdXJyZW50Q2F0ZWdvcnkubWVhbHMsIGFsbExpa2VzKTtcbiAgVXNlckludGVyZmFjZS5jb3VudGVyVGV4dCgnUmVjaXBlcycpO1xufTtcblxuYXN5bmNFbnYoKTtcblxuY29uc3QgTElTVCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNpcGVzX19saXN0Jyk7XG5cbkxJU1QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICBjb25zdCBjbGlja2VkRWxlbWVudCA9IGUudGFyZ2V0O1xuXG4gIGlmIChjbGlja2VkRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLWhlYXJ0JykpIHtcbiAgICBjb25zdCBjYXJkID0gY2xpY2tlZEVsZW1lbnQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgY29uc3QgbWVhbElkID0gY2FyZC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgYXdhaXQgSW52b2x2ZW1lbnRBUEkuYWRkTGlrZShtZWFsSWQpO1xuICAgIFVzZXJJbnRlcmZhY2UuYWRkVG9MaWtlc0NvdW50ZXJET00oY2FyZCk7XG4gIH1cblxuICBpZiAoY2xpY2tlZEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZWNpcGVzX19jb21tZW50cycpKSB7XG4gICAgY29uc3QgbWVhbElkID0gY2xpY2tlZEVsZW1lbnQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgYXdhaXQgSW52b2x2ZW1lbnRBUEkuYWRkQ29tbWVudChcbiAgICAgIHsgdXNlcm5hbWU6ICcnLCBjb21tZW50OiAnJyB9LFxuICAgICAgbWVhbElkLFxuICAgICk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9