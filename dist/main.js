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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --dark-green: hsl(121, 31%, 44%);\n  --green: hsl(108, 35%, 60%);\n  --light-green: hsl(68, 59%, 85%);\n}\n\nhtml {\n  box-sizing: border-box;\n  font-family: 'Mukta', sans-serif;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n  font-size: 1rem;\n}\n\na,\na:hover,\na:focus,\na:active {\n  text-decoration: none;\n  color: inherit;\n}\n\nul,\nli {\n  list-style: none;\n  padding: 0%;\n  margin: 0%;\n}\n\n.navbar {\n  height: 50px;\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  align-items: center;\n  background-color: var(--dark-green);\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n\n.navbar__logo .hero__logo {\n  width: 20px;\n}\n\n.navbar__recipes {\n  display: none;\n  font-size: 2rem;\n}\n\n.navbar__hamburger :nth-child(2) {\n  display: none;\n}\n\n.landing {\n  margin: 80px auto;\n}\n\n.hero {\n  height: calc(100vh - 80px);\n  width: 70%;\n  margin-inline: auto;\n}\n\n.hero .category__list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  list-style: none;\n}\n\n.category__card {\n  display: flex;\n  margin: 1.5%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n\n.category__image {\n  width: 100%;\n}\n\n.category__content {\n  width: 100%;\n  padding-inline: 20px;\n}\n\n.category__header {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.category__title {\n  font-size: 1.3rem;\n}\n\n.recipes {\n  margin: 80px auto;\n  width: 90%;\n}\n\n.recipes__list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  list-style: none;\n}\n\n.recipes__card {\n  display: flex;\n  margin: 1.5%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n\n.recipes__image {\n  width: 100%;\n}\n\n.recipes__content {\n  width: 100%;\n  padding-inline: 20px;\n}\n\n.recipes__header {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.recipes__title {\n  font-size: 1.3rem;\n}\n\n.recipes__likes {\n  display: block;\n  margin-top: -10px;\n  margin-bottom: 20px;\n}\n\n.recipes__comments,\n.recipes__reservations {\n  display: block;\n  width: 70%;\n  margin: 10px auto;\n  padding: 5px 10px;\n}\n\n.recipes__popup {\n  display: block;\n  width: 85%;\n  height: 75%;\n  padding: 4%;\n  position: fixed;\n  background-color: white;\n  backdrop-filter: blur(2px);\n  top: 12.5%;\n  left: 7.5%;\n  overflow-y: auto;\n}\n\n.recipes__popup_image {\n  height: 60%;\n  width: auto;\n}\n\nfooter {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  position: fixed;\n  top: calc(100% - 30px);\n  width: 100%;\n  padding: 8px;\n  height: 30px;\n  background-color: var(--dark-green);\n}\n\n.license-rights {\n  font-size: 10px;\n}\n\n@media screen and (min-width: 768px) {\n  .navbar {\n    height: 70px;\n    justify-content: space-evenly;\n  }\n\n  .navbar__recipes {\n    display: block;\n  }\n\n  .navbar__hamburger {\n    display: none;\n  }\n\n  .license-rights {\n    font-size: 14px;\n  }\n\n  .recipes {\n    margin-top: 100px;\n    justify-content: flex-start;\n    margin-bottom: 100px;\n  }\n\n  .recipes__list {\n    justify-content: flex-start;\n    margin: 0 auto;\n  }\n\n  .recipes__card {\n    width: 30%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  }\n\n  .recipes__image {\n    width: 100%;\n  }\n\n  .recipes__content {\n    width: 100%;\n    padding-inline: 20px;\n  }\n\n  .recipes__header {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .recipes__title {\n    font-size: 1.3rem;\n  }\n\n  .recipes__likes {\n    display: block;\n    margin-top: -10px;\n    margin-bottom: 20px;\n  }\n\n  .recipes__comments,\n  .recipes__reservations {\n    display: block;\n    width: 70%;\n    margin: 10px auto;\n    padding: 5px 10px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Mukta');\n\n:root {\n  --dark-green: hsl(121, 31%, 44%);\n  --green: hsl(108, 35%, 60%);\n  --light-green: hsl(68, 59%, 85%);\n}\n\nhtml {\n  box-sizing: border-box;\n  font-family: 'Mukta', sans-serif;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n  font-size: 1rem;\n}\n\na,\na:hover,\na:focus,\na:active {\n  text-decoration: none;\n  color: inherit;\n}\n\nul,\nli {\n  list-style: none;\n  padding: 0%;\n  margin: 0%;\n}\n\n.navbar {\n  height: 50px;\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  align-items: center;\n  background-color: var(--dark-green);\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n\n.navbar__logo .hero__logo {\n  width: 20px;\n}\n\n.navbar__recipes {\n  display: none;\n  font-size: 2rem;\n}\n\n.navbar__hamburger :nth-child(2) {\n  display: none;\n}\n\n.landing {\n  margin: 80px auto;\n}\n\n.hero {\n  height: calc(100vh - 80px);\n  width: 70%;\n  margin-inline: auto;\n}\n\n.hero .category__list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  list-style: none;\n}\n\n.category__card {\n  display: flex;\n  margin: 1.5%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n\n.category__image {\n  width: 100%;\n}\n\n.category__content {\n  width: 100%;\n  padding-inline: 20px;\n}\n\n.category__header {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.category__title {\n  font-size: 1.3rem;\n}\n\n.recipes {\n  margin: 80px auto;\n  width: 90%;\n}\n\n.recipes__list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  list-style: none;\n}\n\n.recipes__card {\n  display: flex;\n  margin: 1.5%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n\n.recipes__image {\n  width: 100%;\n}\n\n.recipes__content {\n  width: 100%;\n  padding-inline: 20px;\n}\n\n.recipes__header {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.recipes__title {\n  font-size: 1.3rem;\n}\n\n.recipes__likes {\n  display: block;\n  margin-top: -10px;\n  margin-bottom: 20px;\n}\n\n.recipes__comments,\n.recipes__reservations {\n  display: block;\n  width: 70%;\n  margin: 10px auto;\n  padding: 5px 10px;\n}\n\n.recipes__popup {\n  display: block;\n  width: 85%;\n  height: 75%;\n  padding: 4%;\n  position: fixed;\n  background-color: white;\n  backdrop-filter: blur(2px);\n  top: 12.5%;\n  left: 7.5%;\n  overflow-y: auto;\n}\n\n.recipes__popup_image {\n  height: 60%;\n  width: auto;\n}\n\nfooter {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  position: fixed;\n  top: calc(100% - 30px);\n  width: 100%;\n  padding: 8px;\n  height: 30px;\n  background-color: var(--dark-green);\n}\n\n.license-rights {\n  font-size: 10px;\n}\n\n@media screen and (min-width: 768px) {\n  .navbar {\n    height: 70px;\n    justify-content: space-evenly;\n  }\n\n  .navbar__recipes {\n    display: block;\n  }\n\n  .navbar__hamburger {\n    display: none;\n  }\n\n  .license-rights {\n    font-size: 14px;\n  }\n\n  .recipes {\n    margin-top: 100px;\n    justify-content: flex-start;\n    margin-bottom: 100px;\n  }\n\n  .recipes__list {\n    justify-content: flex-start;\n    margin: 0 auto;\n  }\n\n  .recipes__card {\n    width: 30%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  }\n\n  .recipes__image {\n    width: 100%;\n  }\n\n  .recipes__content {\n    width: 100%;\n    padding-inline: 20px;\n  }\n\n  .recipes__header {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .recipes__title {\n    font-size: 1.3rem;\n  }\n\n  .recipes__likes {\n    display: block;\n    margin-top: -10px;\n    margin-bottom: 20px;\n  }\n\n  .recipes__comments,\n  .recipes__reservations {\n    display: block;\n    width: 70%;\n    margin: 10px auto;\n    padding: 5px 10px;\n  }\n}\n"],"sourceRoot":""}]);
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
    const instructs = PopUp.instructionsTemplate(this.data.strInstructions);

    container.innerHTML = `
      <img class="recipes__popup_image" src="${this.data.strMealThumb}" alt="Delicious ${this.data.strMeal}">
      <i class="fa-solid fa-xmark"></i>
      <h2 class="recipes__popup_title">${this.data.strMeal}</h2>
      <ul class="recipes__popup_instructs">${instructs}</ul>
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

  static instructionsTemplate(instructs) {
    let newInstructs = '';
    instructs.split(/\r?\n/).forEach((line) => {
      newInstructs += `<li class="popup__instructs_line">${line}</li>`;
    });
    return newInstructs;
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
const categoryList = document.querySelector('.category__list');

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
    LI.classList.add('category__card');
    LI.setAttribute('id', idCategory);
    LI.innerHTML = `
      <img class="category__image" src="${strCategoryThumb}" alt="Delicious ${strCategory}">
      <div class="category__content">
          <div class="category__header">
              <h2 class="category__title">${strCategory}</h2>
          </div>
      </div>
    `;
    categoryList.appendChild(LI);
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


/***/ }),

/***/ "./src/assets/burger-logo.png":
/*!************************************!*\
  !*** ./src/assets/burger-logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8e01aded2e800fa3611.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _assets_burger_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/burger-logo.png */ "./src/assets/burger-logo.png");
/* harmony import */ var _modules_userInterface_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/userInterface.js */ "./src/modules/userInterface.js");
/* harmony import */ var _modules_mealAPI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mealAPI.js */ "./src/modules/mealAPI.js");
/* harmony import */ var _modules_currentCategory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/currentCategory.js */ "./src/modules/currentCategory.js");
/* harmony import */ var _modules_currentMeal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/currentMeal.js */ "./src/modules/currentMeal.js");
/* harmony import */ var _modules_involvementAPI_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/involvementAPI.js */ "./src/modules/involvementAPI.js");
/* harmony import */ var _modules_popUp_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/popUp.js */ "./src/modules/popUp.js");









const imageContainer = document.querySelectorAll('.image');

Array.from(imageContainer).forEach((container) => {
  const logoImg = new Image();
  logoImg.src = _assets_burger_logo_png__WEBPACK_IMPORTED_MODULE_1__;
  logoImg.classList.add('hero__logo');
  logoImg.alt = 'Yummy Recipes Logo';
  container.appendChild(logoImg);
});

const asyncEnv = async () => {
  const categories = await _modules_mealAPI_js__WEBPACK_IMPORTED_MODULE_3__["default"].getCategories();
  _modules_userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].displayCategories(categories);
  _modules_userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].counterText('Categories');
};

asyncEnv();

const LIST = document.querySelector('.recipes__list');

LIST.addEventListener('click', async (e) => {
  const clickedElement = e.target;

  if (clickedElement.classList.contains('categories__button')) {
    const categoryName = clickedElement.parentNode.children[0].innerText;
    LIST.innerHTML = '';
    const pasta = await _modules_mealAPI_js__WEBPACK_IMPORTED_MODULE_3__["default"].getByCategory(categoryName);
    const allLikes = await _modules_involvementAPI_js__WEBPACK_IMPORTED_MODULE_6__["default"].getAllLikes();
    const currentCategory = new _modules_currentCategory_js__WEBPACK_IMPORTED_MODULE_4__["default"](pasta);
    _modules_userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].displayRecipes(currentCategory.meals, allLikes);

    _modules_userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].counterText('Recipes');
  }

  if (clickedElement.classList.contains('fa-heart')) {
    const card = clickedElement.parentNode.parentNode.parentNode;
    const mealId = card.getAttribute('id');
    await _modules_involvementAPI_js__WEBPACK_IMPORTED_MODULE_6__["default"].addLike(mealId);
    _modules_userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].addToLikesCounterDOM(card);
  }

  if (clickedElement.classList.contains('recipes__comments')) {
    const card = clickedElement.parentNode.parentNode;
    const mealId = card.getAttribute('id');
    const meal = await _modules_mealAPI_js__WEBPACK_IMPORTED_MODULE_3__["default"].getRecipe(mealId);

    await _modules_involvementAPI_js__WEBPACK_IMPORTED_MODULE_6__["default"].addComment(
      { username: '', comment: '' },
      mealId,
    );

    let comments = await _modules_involvementAPI_js__WEBPACK_IMPORTED_MODULE_6__["default"].getComments(mealId);

    comments = comments.filter((comment) => comment.username !== '');

    const currentMeal = new _modules_currentMeal_js__WEBPACK_IMPORTED_MODULE_5__["default"](meal, comments);

    _modules_popUp_js__WEBPACK_IMPORTED_MODULE_7__["default"].pop({
      ...currentMeal,
      comments,
      type: 'Recipe',
    });
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sdUZBQXVGLFdBQVcscUNBQXFDLGdDQUFnQyxxQ0FBcUMsR0FBRyxVQUFVLDJCQUEyQixx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RUFBZTtBQUMvQyxJQUFJLGdGQUE0Qjs7QUFFaEMsSUFBSSw2RUFBeUI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVSwwRUFBc0I7QUFDaEMsSUFBSSxzRkFBa0M7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHFFQUFpQjs7QUFFeEMsVUFBVSw2RUFBeUI7QUFDbkMsUUFBUSwyQkFBMkI7QUFDbkM7QUFDQTs7QUFFQSx5QkFBeUIsOEVBQTBCOztBQUVuRDs7QUFFQSw0QkFBNEIsK0RBQVc7O0FBRXZDLElBQUksNkRBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL3NyYy9tb2R1bGVzL2N1cnJlbnRDYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9zcmMvbW9kdWxlcy9jdXJyZW50TWVhbC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9zcmMvbW9kdWxlcy9mZXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vc3JjL21vZHVsZXMvaW52b2x2ZW1lbnRBUEkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vc3JjL21vZHVsZXMvbWVhbEFQSS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9zcmMvbW9kdWxlcy9wb3BVcC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9zcmMvbW9kdWxlcy91c2VySW50ZXJmYWNlLmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NdWt0YSk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tZGFyay1ncmVlbjogaHNsKDEyMSwgMzElLCA0NCUpO1xcbiAgLS1ncmVlbjogaHNsKDEwOCwgMzUlLCA2MCUpO1xcbiAgLS1saWdodC1ncmVlbjogaHNsKDY4LCA1OSUsIDg1JSk7XFxufVxcblxcbmh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnTXVrdGEnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuYSxcXG5hOmhvdmVyLFxcbmE6Zm9jdXMsXFxuYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbnVsLFxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwJTtcXG4gIG1hcmdpbjogMCU7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmVlbik7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm5hdmJhcl9fbG9nbyAuaGVyb19fbG9nbyB7XFxuICB3aWR0aDogMjBweDtcXG59XFxuXFxuLm5hdmJhcl9fcmVjaXBlcyB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ubmF2YmFyX19oYW1idXJnZXIgOm50aC1jaGlsZCgyKSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubGFuZGluZyB7XFxuICBtYXJnaW46IDgwcHggYXV0bztcXG59XFxuXFxuLmhlcm8ge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XFxuICB3aWR0aDogNzAlO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG59XFxuXFxuLmhlcm8gLmNhdGVnb3J5X19saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uY2F0ZWdvcnlfX2NhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMS41JTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xcbn1cXG5cXG4uY2F0ZWdvcnlfX2ltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2F0ZWdvcnlfX2NvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWlubGluZTogMjBweDtcXG59XFxuXFxuLmNhdGVnb3J5X19oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2F0ZWdvcnlfX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ucmVjaXBlcyB7XFxuICBtYXJnaW46IDgwcHggYXV0bztcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbi5yZWNpcGVzX19saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ucmVjaXBlc19fY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAxLjUlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XFxufVxcblxcbi5yZWNpcGVzX19pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnJlY2lwZXNfX2NvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWlubGluZTogMjBweDtcXG59XFxuXFxuLnJlY2lwZXNfX2hlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmVjaXBlc19fdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5yZWNpcGVzX19saWtlcyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnJlY2lwZXNfX2NvbW1lbnRzLFxcbi5yZWNpcGVzX19yZXNlcnZhdGlvbnMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogNzAlO1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG59XFxuXFxuLnJlY2lwZXNfX3BvcHVwIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDg1JTtcXG4gIGhlaWdodDogNzUlO1xcbiAgcGFkZGluZzogNCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcbiAgdG9wOiAxMi41JTtcXG4gIGxlZnQ6IDcuNSU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXBfaW1hZ2Uge1xcbiAgaGVpZ2h0OiA2MCU7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiBjYWxjKDEwMCUgLSAzMHB4KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmVlbik7XFxufVxcblxcbi5saWNlbnNlLXJpZ2h0cyB7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAubmF2YmFyIHtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIH1cXG5cXG4gIC5uYXZiYXJfX3JlY2lwZXMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC5uYXZiYXJfX2hhbWJ1cmdlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAubGljZW5zZS1yaWdodHMge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICB9XFxuXFxuICAucmVjaXBlcyB7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbiAgfVxcblxcbiAgLnJlY2lwZXNfX2xpc3Qge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgfVxcblxcbiAgLnJlY2lwZXNfX2NhcmQge1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcXG4gIH1cXG5cXG4gIC5yZWNpcGVzX19pbWFnZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLnJlY2lwZXNfX2NvbnRlbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XFxuICB9XFxuXFxuICAucmVjaXBlc19faGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5yZWNpcGVzX190aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgfVxcblxcbiAgLnJlY2lwZXNfX2xpa2VzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgfVxcblxcbiAgLnJlY2lwZXNfX2NvbW1lbnRzLFxcbiAgLnJlY2lwZXNfX3Jlc2VydmF0aW9ucyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBtYXJnaW46IDEwcHggYXV0bztcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsMkJBQTJCO0VBQzNCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixnQ0FBZ0M7QUFDbEM7O0FBRUE7OztFQUdFLG1C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OztFQUVBO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7O0VBRUE7O0lBRUUsY0FBYztJQUNkLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TXVrdGEnKTtcXG5cXG46cm9vdCB7XFxuICAtLWRhcmstZ3JlZW46IGhzbCgxMjEsIDMxJSwgNDQlKTtcXG4gIC0tZ3JlZW46IGhzbCgxMDgsIDM1JSwgNjAlKTtcXG4gIC0tbGlnaHQtZ3JlZW46IGhzbCg2OCwgNTklLCA4NSUpO1xcbn1cXG5cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ011a3RhJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbmEsXFxuYTpob3ZlcixcXG5hOmZvY3VzLFxcbmE6YWN0aXZlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG51bCxcXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMCU7XFxuICBtYXJnaW46IDAlO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JlZW4pO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5uYXZiYXJfX2xvZ28gLmhlcm9fX2xvZ28ge1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5uYXZiYXJfX3JlY2lwZXMge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLm5hdmJhcl9faGFtYnVyZ2VyIDpudGgtY2hpbGQoMikge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmxhbmRpbmcge1xcbiAgbWFyZ2luOiA4MHB4IGF1dG87XFxufVxcblxcbi5oZXJvIHtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxufVxcblxcbi5oZXJvIC5jYXRlZ29yeV9fbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmNhdGVnb3J5X19jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDEuNSU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcXG59XFxuXFxuLmNhdGVnb3J5X19pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNhdGVnb3J5X19jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XFxufVxcblxcbi5jYXRlZ29yeV9faGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNhdGVnb3J5X190aXRsZSB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnJlY2lwZXMge1xcbiAgbWFyZ2luOiA4MHB4IGF1dG87XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4ucmVjaXBlc19fbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnJlY2lwZXNfX2NhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMS41JTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xcbn1cXG5cXG4ucmVjaXBlc19faW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5yZWNpcGVzX19jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XFxufVxcblxcbi5yZWNpcGVzX19oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJlY2lwZXNfX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ucmVjaXBlc19fbGlrZXMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tdG9wOiAtMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5yZWNpcGVzX19jb21tZW50cyxcXG4ucmVjaXBlc19fcmVzZXJ2YXRpb25zIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcblxcbi5yZWNpcGVzX19wb3B1cCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA4NSU7XFxuICBoZWlnaHQ6IDc1JTtcXG4gIHBhZGRpbmc6IDQlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXG4gIHRvcDogMTIuNSU7XFxuICBsZWZ0OiA3LjUlO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLnJlY2lwZXNfX3BvcHVwX2ltYWdlIHtcXG4gIGhlaWdodDogNjAlO1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogY2FsYygxMDAlIC0gMzBweCk7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JlZW4pO1xcbn1cXG5cXG4ubGljZW5zZS1yaWdodHMge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLm5hdmJhciB7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB9XFxuXFxuICAubmF2YmFyX19yZWNpcGVzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAubmF2YmFyX19oYW1idXJnZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmxpY2Vuc2UtcmlnaHRzIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgfVxcblxcbiAgLnJlY2lwZXMge1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG4gIH1cXG5cXG4gIC5yZWNpcGVzX19saXN0IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gIH1cXG5cXG4gIC5yZWNpcGVzX19jYXJkIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XFxuICB9XFxuXFxuICAucmVjaXBlc19faW1hZ2Uge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5yZWNpcGVzX19jb250ZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmctaW5saW5lOiAyMHB4O1xcbiAgfVxcblxcbiAgLnJlY2lwZXNfX2hlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAucmVjaXBlc19fdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gIH1cXG5cXG4gIC5yZWNpcGVzX19saWtlcyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG5cXG4gIC5yZWNpcGVzX19jb21tZW50cyxcXG4gIC5yZWNpcGVzX19yZXNlcnZhdGlvbnMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnJlbnRDYXRlZ29yeSB7XG4gIG1lYWxzO1xuXG4gIGNvbnN0cnVjdG9yKGNhdGVnb3J5TWVhbHMgPSBbXSkge1xuICAgIHRoaXMubWVhbHMgPSBjYXRlZ29yeU1lYWxzO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDdXJyZW50TWVhbCB7XG4gIGlkTWVhbDtcblxuICBzdHJNZWFsO1xuXG4gIHN0ck1lYWxUaHVtYjtcblxuICBzdHJJbnN0cnVjdGlvbnM7XG5cbiAgY29tbWVudHM7XG5cbiAgY29uc3RydWN0b3IoY3VycmVudE1lYWwsIGNvbW1lbnRzID0gW10pIHtcbiAgICB0aGlzLmlkTWVhbCA9IGN1cnJlbnRNZWFsLmlkTWVhbDtcbiAgICB0aGlzLnN0ck1lYWwgPSBjdXJyZW50TWVhbC5zdHJNZWFsO1xuICAgIHRoaXMuc3RyTWVhbFRodW1iID0gY3VycmVudE1lYWwuc3RyTWVhbFRodW1iO1xuICAgIHRoaXMuc3RySW5zdHJ1Y3Rpb25zID0gY3VycmVudE1lYWwuc3RySW5zdHJ1Y3Rpb25zO1xuICAgIHRoaXMuY29tbWVudHMgPSBjb21tZW50cztcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmV0Y2hSZXF1ZXN0IHtcbiAgbWV0aG9kO1xuXG4gIGJvZHk7XG5cbiAgaGVhZGVycztcblxuICB1cmw7XG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIG1ldGhvZCA9ICdHRVQnLFxuICAgIGJvZHksXG4gICAgdXJsID0gJycsXG4gICAgaGVhZGVycyA9IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgfSxcbiAgfSA9IHt9KSB7XG4gICAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgICB0aGlzLmhlYWRlcnMgPSBoZWFkZXJzO1xuICAgIHRoaXMudXJsID0gdXJsO1xuICB9XG5cbiAgYXN5bmMgY2FsbCgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kOiB0aGlzLm1ldGhvZCxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodGhpcy5ib2R5KSxcbiAgICAgICAgaGVhZGVyczogdGhpcy5tZXRob2QgPT09ICdQT1NUJyA/IHRoaXMuaGVhZGVycyA6IHVuZGVmaW5lZCxcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy51cmwsIG9wdGlvbnMpO1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSByZXR1cm4gbnVsbDtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIG40S3JueGExR3hYSGJaMzQ5VU1tIGNsZWFuXG4vLyBqdFhGUFhOaXpSdFU1cGZaMjZzVFxuLy8gdGVzdDogTUJ4U0p5VlE4elF6dXhCa3dhNW1cblxuaW1wb3J0IEZldGNoUmVxdWVzdCBmcm9tICcuL2ZldGNoUmVxdWVzdC5qcyc7XG5cbmNvbnN0IGFwcElkID0gJ2p0WEZQWE5pelJ0VTVwZloyNnNUJztcbmNvbnN0IHVybE1BUCA9IHtcbiAgbWFpbjogJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLycsXG4gIGxpa2VzOiBgJHthcHBJZH0vbGlrZXMvYCxcbiAgY29tbWVudHM6IGAke2FwcElkfS9jb21tZW50c2AsXG4gIGJ5Q29tbWVudDogYCR7YXBwSWR9L2NvbW1lbnRzP2l0ZW1faWQ9YCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludm9sdmVtZW50QVBJIHtcbiAgc3RhdGljIGFzeW5jIGFkZExpa2UobWVhbCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBmZXRjaFJlcXVlc3QgPSBuZXcgRmV0Y2hSZXF1ZXN0KHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IHsgaXRlbV9pZDogbWVhbCB9LFxuICAgICAgICB1cmw6IGAke3VybE1BUC5tYWlufSR7dXJsTUFQLmxpa2VzfWAsXG4gICAgICB9KTtcbiAgICAgIGF3YWl0IGZldGNoUmVxdWVzdC5jYWxsKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEFsbExpa2VzKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBmZXRjaFJlcXVlc3QgPSBuZXcgRmV0Y2hSZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBgJHt1cmxNQVAubWFpbn0ke3VybE1BUC5saWtlc31gLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBhbGxMaWtlcyA9IGF3YWl0IGZldGNoUmVxdWVzdC5jYWxsKCk7XG4gICAgICByZXR1cm4gYWxsTGlrZXM7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldE1lYWxMaWtlcyhsaWtlc0FyciwgSXRlbUlkKSB7XG4gICAgY29uc3QgbWVhbExpa2VzID0gbGlrZXNBcnIuZmlsdGVyKFxuICAgICAgKG1lYWwpID0+IG1lYWwuaXRlbV9pZCA9PT0gSXRlbUlkLFxuICAgIClbMF07XG4gICAgaWYgKCFtZWFsTGlrZXMpIHJldHVybiAwO1xuICAgIHJldHVybiBtZWFsTGlrZXMubGlrZXM7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgYWRkQ29tbWVudCh7IHVzZXJuYW1lLCBjb21tZW50IH0sIG1lYWwpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmV0Y2hSZXF1ZXN0ID0gbmV3IEZldGNoUmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgaXRlbV9pZDogbWVhbCxcbiAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICBjb21tZW50LFxuICAgICAgICB9LFxuICAgICAgICB1cmw6IGAke3VybE1BUC5tYWlufSR7dXJsTUFQLmNvbW1lbnRzfWAsXG4gICAgICB9KTtcbiAgICAgIGF3YWl0IGZldGNoUmVxdWVzdC5jYWxsKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldENvbW1lbnRzKG1lYWwpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmV0Y2hSZXF1ZXN0ID0gbmV3IEZldGNoUmVxdWVzdCh7XG4gICAgICAgIHVybDogYCR7dXJsTUFQLm1haW59JHt1cmxNQVAuYnlDb21tZW50fSR7bWVhbH1gLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGZldGNoUmVxdWVzdC5jYWxsKCk7XG4gICAgICByZXR1cm4gY29tbWVudHM7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgRmV0Y2hSZXF1ZXN0IGZyb20gJy4vZmV0Y2hSZXF1ZXN0LmpzJztcblxuY29uc3QgdXJsTWFwID0ge1xuICByYW5kb206ICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvcmFuZG9tLnBocCcsXG4gIGNhdGVnb3JpZXM6XG4gICAgJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9jYXRlZ29yaWVzLnBocCcsXG4gIGJ5Q2F0ZWdvcnk6ICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvZmlsdGVyLnBocD9jPScsXG4gIGJ5TWVhbElkOiAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2xvb2t1cC5waHA/aT0nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVhbEFQSSB7XG4gIHN0YXRpYyBhc3luYyBnZXRSZWNpcGUoaWQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmV0Y2hSZXF1ZXN0ID0gbmV3IEZldGNoUmVxdWVzdCh7XG4gICAgICAgIHVybDogYCR7dXJsTWFwLmJ5TWVhbElkfSR7aWR9YCxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoUmVxdWVzdC5jYWxsKCk7XG4gICAgICByZXR1cm4gZGF0YS5tZWFsc1swXTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0Q2F0ZWdvcmllcygpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmV0Y2hSZXF1ZXN0ID0gbmV3IEZldGNoUmVxdWVzdCh7XG4gICAgICAgIHVybDogdXJsTWFwLmNhdGVnb3JpZXMsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBmZXRjaFJlcXVlc3QuY2FsbCgpO1xuICAgICAgcmV0dXJuIGNhdGVnb3JpZXMuY2F0ZWdvcmllcztcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0QnlDYXRlZ29yeShjYXRlZ29yeSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBmZXRjaFJlcXVlc3QgPSBuZXcgRmV0Y2hSZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBgJHt1cmxNYXAuYnlDYXRlZ29yeX0ke2NhdGVnb3J5fWAsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHJlY2lwZXMgPSBhd2FpdCBmZXRjaFJlcXVlc3QuY2FsbCgpO1xuICAgICAgcmV0dXJuIHJlY2lwZXMubWVhbHM7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgSW52b2x2ZW1lbnRBUEkgZnJvbSAnLi9pbnZvbHZlbWVudEFQSS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcFVwIHtcbiAgc3RhdGljIHBvcChkYXRhKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLmNvbW1lbnRDb3VudCA9IDA7XG4gICAgdGhpcy50ZW1wbGF0ZSh0aGlzLmRhdGEudHlwZSk7XG4gIH1cblxuICBzdGF0aWMgdGVtcGxhdGUoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLmRhdGEuaWRNZWFsKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyZWNpcGVzX19wb3B1cCcpO1xuXG4gICAgY29uc3QgY29tbWVudFNlY3Rpb24gPSBQb3BVcC5jb21tZW50c1RlbXBsYXRlKHRoaXMuZGF0YS50eXBlKTtcbiAgICBjb25zdCByZXNlcnZhdGlvblNlY3Rpb24gPSBQb3BVcC5yZXNlcnZhdGlvbnNUZW1wbGF0ZSh0aGlzLmRhdGEudHlwZSk7XG4gICAgY29uc3QgaW5zdHJ1Y3RzID0gUG9wVXAuaW5zdHJ1Y3Rpb25zVGVtcGxhdGUodGhpcy5kYXRhLnN0ckluc3RydWN0aW9ucyk7XG5cbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgICAgPGltZyBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2ltYWdlXCIgc3JjPVwiJHt0aGlzLmRhdGEuc3RyTWVhbFRodW1ifVwiIGFsdD1cIkRlbGljaW91cyAke3RoaXMuZGF0YS5zdHJNZWFsfVwiPlxuICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS14bWFya1wiPjwvaT5cbiAgICAgIDxoMiBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX3RpdGxlXCI+JHt0aGlzLmRhdGEuc3RyTWVhbH08L2gyPlxuICAgICAgPHVsIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfaW5zdHJ1Y3RzXCI+JHtpbnN0cnVjdHN9PC91bD5cbiAgICAgICR7Y29tbWVudFNlY3Rpb259XG4gICAgICAke3Jlc2VydmF0aW9uU2VjdGlvbn1cbiAgICBgO1xuXG4gICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2knKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmRhdGEudHlwZSA9PT0gJ1JlY2lwZScpIHtcbiAgICAgIGNvbnN0IFt1c2VyLCBjb21tZW50XSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgICAgY29uc3Qgc3VibWl0ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuICAgICAgY29uc3QgdWxDb250YWluZXIgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcigndWwnKTtcblxuICAgICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAodXNlci52YWx1ZSA9PT0gJycgfHwgY29tbWVudC52YWx1ZSA9PT0gJycpIHJldHVybjtcbiAgICAgICAgY29uc3QgaW5wdXRDb21tZW50ID0geyB1c2VybmFtZTogdXNlci52YWx1ZSwgY29tbWVudDogY29tbWVudC52YWx1ZSB9O1xuICAgICAgICBQb3BVcC5jcmVhdGVDb21tZW50T25ET00odXNlciwgY29tbWVudCwgdWxDb250YWluZXIsIGlucHV0Q29tbWVudCk7XG4gICAgICAgIGF3YWl0IEludm9sdmVtZW50QVBJLmFkZENvbW1lbnQoaW5wdXRDb21tZW50LCB0aGlzLmRhdGEuaWRNZWFsKTtcbiAgICAgICAgUG9wVXAuY29tbWVudENvdW50QWRkKGNvbnRhaW5lcik7XG4gICAgICAgIFt1c2VyLnZhbHVlLCBjb21tZW50LnZhbHVlXSA9IFsnJywgJyddO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICB9XG5cbiAgc3RhdGljIGRpc3BsYXlDb21tZW50KGRhdGEpIHtcbiAgICBjb25zdCBbeWVhciwgbW9udGgsIGRheV0gPSBkYXRhLmNyZWF0aW9uX2RhdGUuc3BsaXQoJy0nKTtcbiAgICByZXR1cm4gYFxuICAgICAgICA8bGkgY2xhc3M9XCJyZWNpcGVzX19wb3B1cF9jb21tZW50XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZWNpcGVzX19wb3B1cF9jb21tZW50LWRhdGVcIj5cbiAgICAgICAgICAgICR7ZGF5fS0ke21vbnRofS0ke3llYXJ9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfY29tbWVudC11c2VyXCI+XG4gICAgICAgICAgICAke2RhdGEudXNlcm5hbWV9OlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2NvbW1lbnQtY29udGVudFwiPlxuICAgICAgICAgICAgJHtkYXRhLmNvbW1lbnR9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBjb21tZW50c1RlbXBsYXRlKHR5cGUpIHtcbiAgICBpZiAodHlwZSAhPT0gJ1JlY2lwZScpIHJldHVybiAnJztcbiAgICBsZXQgY29tbWVudHMgPSAnJztcbiAgICB0aGlzLmRhdGEuY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgICAgY29tbWVudHMgKz0gUG9wVXAuZGlzcGxheUNvbW1lbnQoY29tbWVudCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJyZWNpcGVzX19wb3B1cF9jb21tZW50c1wiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2NvbW1lbnQtY291bnRcIj5Db21tZW50cyAoJHt0aGlzLmRhdGEuY29tbWVudHMubGVuZ3RofSk8L3NwYW4+XG4gICAgICAgIDx1bCBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2NvbW1lbnRzXCI+JHtjb21tZW50c308L3VsPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJyZWNpcGVzX19wb3B1cF9pbnB1dC11c2VyXCIgcGxhY2Vob2xkZXI9XCJVc2VyXCIgdGFiaW5kZXg9MD48L2lucHV0PlxuICAgICAgICA8aW5wdXQgIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfaW5wdXQtY29tbWVudFwiIHBsYWNlaG9sZGVyPVwiQ29tbWVudFwiIHRhYmluZGV4PTA+PC9pbnB1dD5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2lucHV0LXN1Ym1pdFwiIHR5cGU9XCJidXR0b25cIiB0YWJpbmRleD0wPkNvbW1lbnQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgcmVzZXJ2YXRpb25zVGVtcGxhdGUodHlwZSkge1xuICAgIGlmICh0eXBlICE9PSAnUmVzZXJ2YXRpb24nKSByZXR1cm4gJyc7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUNvbW1lbnRPbkRPTSh1c2VyLCBjb21tZW50LCBjb250YWluZXIsIGlucHV0Q29tbWVudCkge1xuICAgIGNvbnN0IFtkYXksIG1vbnRoLCB5ZWFyXSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCkuc3BsaXQoJy8nKTtcbiAgICBjb25zdCBsaSA9IFBvcFVwLmRpc3BsYXlDb21tZW50KFxuICAgICAge1xuICAgICAgICAuLi5pbnB1dENvbW1lbnQsXG4gICAgICAgIGNyZWF0aW9uX2RhdGU6XG4gICAgICAgICAgYCR7eWVhcn0tJHttb250aCA8IDEwID8gJzAnIDogJyd9JHttb250aH0tJHtkYXkgPCAxMCA/ICcwJyA6ICcnfSR7ZGF5fWAsXG4gICAgICB9LFxuICAgICk7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCArPSBsaTtcbiAgfVxuXG4gIHN0YXRpYyBjb21tZW50Q291bnRBZGQoY29udGFpbmVyKSB7XG4gICAgdGhpcy5jb21tZW50Q291bnQgKz0gMTtcbiAgICBjb25zdCBjb21tZW50c051bSA9IHRoaXMuZGF0YS5jb21tZW50cy5sZW5ndGggKyB0aGlzLmNvbW1lbnRDb3VudDtcbiAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJlY2lwZXNfX3BvcHVwX2NvbW1lbnQtY291bnQnKS5pbm5lckhUTUwgPSBgQ29tbWVudHMgKCR7Y29tbWVudHNOdW19KWA7XG4gICAgcmV0dXJuIGNvbW1lbnRzTnVtO1xuICB9XG5cbiAgc3RhdGljIGluc3RydWN0aW9uc1RlbXBsYXRlKGluc3RydWN0cykge1xuICAgIGxldCBuZXdJbnN0cnVjdHMgPSAnJztcbiAgICBpbnN0cnVjdHMuc3BsaXQoL1xccj9cXG4vKS5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgICBuZXdJbnN0cnVjdHMgKz0gYDxsaSBjbGFzcz1cInBvcHVwX19pbnN0cnVjdHNfbGluZVwiPiR7bGluZX08L2xpPmA7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld0luc3RydWN0cztcbiAgfVxufSIsImltcG9ydCBJbnZvbHZlbWVudEFQSSBmcm9tICcuL2ludm9sdmVtZW50QVBJLmpzJztcblxuY29uc3QgcmVjaXBlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNpcGVzX19saXN0Jyk7XG5jb25zdCBjYXRlZ29yeUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcnlfX2xpc3QnKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckludGVyZmFjZSB7XG4gIHN0YXRpYyBkaXNwbGF5UmVjaXBlcyhtZWFsc0FyciwgbGlrZXMgPSBbXSkge1xuICAgIG1lYWxzQXJyLmZvckVhY2goKHJlY2lwZSkgPT4ge1xuICAgICAgY29uc3QgbWVhbExpa2VzID0gSW52b2x2ZW1lbnRBUEkuZ2V0TWVhbExpa2VzKFxuICAgICAgICBsaWtlcyxcbiAgICAgICAgcmVjaXBlLmlkTWVhbCxcbiAgICAgICk7XG4gICAgICB0aGlzLmNyZWF0ZUNhcmQocmVjaXBlLCBtZWFsTGlrZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRpc3BsYXlDYXRlZ29yaWVzKGNhdGVnb3JpZXNBcnIpIHtcbiAgICBjYXRlZ29yaWVzQXJyLmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZUNhdGVnb3J5Q2FyZChjYXRlZ29yeSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlQ2F0ZWdvcnlDYXJkKHtcbiAgICBpZENhdGVnb3J5LFxuICAgIHN0ckNhdGVnb3J5LFxuICAgIHN0ckNhdGVnb3J5VGh1bWIsXG4gIH0pIHtcbiAgICBjb25zdCBMSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgTEkuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnlfX2NhcmQnKTtcbiAgICBMSS5zZXRBdHRyaWJ1dGUoJ2lkJywgaWRDYXRlZ29yeSk7XG4gICAgTEkuaW5uZXJIVE1MID0gYFxuICAgICAgPGltZyBjbGFzcz1cImNhdGVnb3J5X19pbWFnZVwiIHNyYz1cIiR7c3RyQ2F0ZWdvcnlUaHVtYn1cIiBhbHQ9XCJEZWxpY2lvdXMgJHtzdHJDYXRlZ29yeX1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeV9fY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeV9faGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzcz1cImNhdGVnb3J5X190aXRsZVwiPiR7c3RyQ2F0ZWdvcnl9PC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgY2F0ZWdvcnlMaXN0LmFwcGVuZENoaWxkKExJKTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVDYXJkKFxuICAgIHsgc3RyTWVhbCA9ICcnLCBzdHJNZWFsVGh1bWIgPSAnJywgaWRNZWFsIH0sXG4gICAgbGlrZXMgPSAwLFxuICApIHtcbiAgICBjb25zdCBMSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgTEkuY2xhc3NMaXN0LmFkZCgncmVjaXBlc19fY2FyZCcpO1xuICAgIExJLnNldEF0dHJpYnV0ZSgnaWQnLCBpZE1lYWwpO1xuICAgIExJLmlubmVySFRNTCA9IGBcbiAgICAgIDxpbWcgY2xhc3M9XCJyZWNpcGVzX19pbWFnZVwiIHNyYz1cIiR7c3RyTWVhbFRodW1ifVwiIGFsdD1cIkRlbGljaW91cyAke3N0ck1lYWx9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicmVjaXBlc19fY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWNpcGVzX19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzPVwicmVjaXBlc19fdGl0bGVcIj4ke3N0ck1lYWx9PC9oMj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLWhlYXJ0XCI+PC9pPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVjaXBlc19fbGlrZXNcIj48c3Bhbj4ke2xpa2VzfTwvc3Bhbj4gbGlrZSR7XG4gIGxpa2VzID09PSAxID8gJycgOiAncydcbn08L3NwYW4+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJlY2lwZXNfX2NvbW1lbnRzXCI+Q29tbWVudHM8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicmVjaXBlc19fcmVzZXJ2YXRpb25zXCI+UmVzZXJ2YXRpb25zPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIHJlY2lwZUxpc3QuYXBwZW5kQ2hpbGQoTEkpO1xuICB9XG5cbiAgc3RhdGljIGFkZFRvTGlrZXNDb3VudGVyRE9NKGVsZW1lbnQpIHtcbiAgICBjb25zdCBuTGlrZXMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNpcGVzX19saWtlcycpO1xuICAgIGNvbnN0IG9sZExpa2VzID0gK25MaWtlcy5jaGlsZHJlblswXS5pbm5lclRleHQ7XG4gICAgY29uc3QgbmV3TGlrZXMgPSBvbGRMaWtlcyArIDE7XG5cbiAgICBuTGlrZXMuaW5uZXJIVE1MID0gYDxzcGFuPiR7bmV3TGlrZXN9PC9zcGFuPiBsaWtlJHtcbiAgICAgIG5ld0xpa2VzID09PSAxID8gJycgOiAncydcbiAgICB9YDtcbiAgfVxuXG4gIHN0YXRpYyBpdGVtQ291bnQoKSB7XG4gICAgY29uc3QgaXRlbUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjaXBlc19fbGlzdCcpO1xuICAgIHJldHVybiBpdGVtTGlzdC5jaGlsZHJlbi5sZW5ndGg7XG4gIH1cblxuICBzdGF0aWMgY291bnRlclRleHQodHlwZSkge1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyX19yZWNpcGVzJyk7XG4gICAgdGV4dC5pbm5lckhUTUwgPSBgJHt0eXBlfSAoJHt0aGlzLml0ZW1Db3VudCgpfSlgO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgbG9nbyBmcm9tICcuL2Fzc2V0cy9idXJnZXItbG9nby5wbmcnO1xuaW1wb3J0IFVzZXJJbnRlcmZhY2UgZnJvbSAnLi9tb2R1bGVzL3VzZXJJbnRlcmZhY2UuanMnO1xuaW1wb3J0IE1lYWxBUEkgZnJvbSAnLi9tb2R1bGVzL21lYWxBUEkuanMnO1xuaW1wb3J0IEN1cnJlbnRDYXRlZ29yeSBmcm9tICcuL21vZHVsZXMvY3VycmVudENhdGVnb3J5LmpzJztcbmltcG9ydCBDdXJyZW50TWVhbCBmcm9tICcuL21vZHVsZXMvY3VycmVudE1lYWwuanMnO1xuaW1wb3J0IEludm9sdmVtZW50QVBJIGZyb20gJy4vbW9kdWxlcy9pbnZvbHZlbWVudEFQSS5qcyc7XG5pbXBvcnQgUG9wVXAgZnJvbSAnLi9tb2R1bGVzL3BvcFVwLmpzJztcblxuY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW1hZ2UnKTtcblxuQXJyYXkuZnJvbShpbWFnZUNvbnRhaW5lcikuZm9yRWFjaCgoY29udGFpbmVyKSA9PiB7XG4gIGNvbnN0IGxvZ29JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgbG9nb0ltZy5zcmMgPSBsb2dvO1xuICBsb2dvSW1nLmNsYXNzTGlzdC5hZGQoJ2hlcm9fX2xvZ28nKTtcbiAgbG9nb0ltZy5hbHQgPSAnWXVtbXkgUmVjaXBlcyBMb2dvJztcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29JbWcpO1xufSk7XG5cbmNvbnN0IGFzeW5jRW52ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgTWVhbEFQSS5nZXRDYXRlZ29yaWVzKCk7XG4gIFVzZXJJbnRlcmZhY2UuZGlzcGxheUNhdGVnb3JpZXMoY2F0ZWdvcmllcyk7XG4gIFVzZXJJbnRlcmZhY2UuY291bnRlclRleHQoJ0NhdGVnb3JpZXMnKTtcbn07XG5cbmFzeW5jRW52KCk7XG5cbmNvbnN0IExJU1QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjaXBlc19fbGlzdCcpO1xuXG5MSVNULmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgY29uc3QgY2xpY2tlZEVsZW1lbnQgPSBlLnRhcmdldDtcblxuICBpZiAoY2xpY2tlZEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXRlZ29yaWVzX19idXR0b24nKSkge1xuICAgIGNvbnN0IGNhdGVnb3J5TmFtZSA9IGNsaWNrZWRFbGVtZW50LnBhcmVudE5vZGUuY2hpbGRyZW5bMF0uaW5uZXJUZXh0O1xuICAgIExJU1QuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgcGFzdGEgPSBhd2FpdCBNZWFsQVBJLmdldEJ5Q2F0ZWdvcnkoY2F0ZWdvcnlOYW1lKTtcbiAgICBjb25zdCBhbGxMaWtlcyA9IGF3YWl0IEludm9sdmVtZW50QVBJLmdldEFsbExpa2VzKCk7XG4gICAgY29uc3QgY3VycmVudENhdGVnb3J5ID0gbmV3IEN1cnJlbnRDYXRlZ29yeShwYXN0YSk7XG4gICAgVXNlckludGVyZmFjZS5kaXNwbGF5UmVjaXBlcyhjdXJyZW50Q2F0ZWdvcnkubWVhbHMsIGFsbExpa2VzKTtcblxuICAgIFVzZXJJbnRlcmZhY2UuY291bnRlclRleHQoJ1JlY2lwZXMnKTtcbiAgfVxuXG4gIGlmIChjbGlja2VkRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLWhlYXJ0JykpIHtcbiAgICBjb25zdCBjYXJkID0gY2xpY2tlZEVsZW1lbnQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgY29uc3QgbWVhbElkID0gY2FyZC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgYXdhaXQgSW52b2x2ZW1lbnRBUEkuYWRkTGlrZShtZWFsSWQpO1xuICAgIFVzZXJJbnRlcmZhY2UuYWRkVG9MaWtlc0NvdW50ZXJET00oY2FyZCk7XG4gIH1cblxuICBpZiAoY2xpY2tlZEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZWNpcGVzX19jb21tZW50cycpKSB7XG4gICAgY29uc3QgY2FyZCA9IGNsaWNrZWRFbGVtZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICBjb25zdCBtZWFsSWQgPSBjYXJkLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICBjb25zdCBtZWFsID0gYXdhaXQgTWVhbEFQSS5nZXRSZWNpcGUobWVhbElkKTtcblxuICAgIGF3YWl0IEludm9sdmVtZW50QVBJLmFkZENvbW1lbnQoXG4gICAgICB7IHVzZXJuYW1lOiAnJywgY29tbWVudDogJycgfSxcbiAgICAgIG1lYWxJZCxcbiAgICApO1xuXG4gICAgbGV0IGNvbW1lbnRzID0gYXdhaXQgSW52b2x2ZW1lbnRBUEkuZ2V0Q29tbWVudHMobWVhbElkKTtcblxuICAgIGNvbW1lbnRzID0gY29tbWVudHMuZmlsdGVyKChjb21tZW50KSA9PiBjb21tZW50LnVzZXJuYW1lICE9PSAnJyk7XG5cbiAgICBjb25zdCBjdXJyZW50TWVhbCA9IG5ldyBDdXJyZW50TWVhbChtZWFsLCBjb21tZW50cyk7XG5cbiAgICBQb3BVcC5wb3Aoe1xuICAgICAgLi4uY3VycmVudE1lYWwsXG4gICAgICBjb21tZW50cyxcbiAgICAgIHR5cGU6ICdSZWNpcGUnLFxuICAgIH0pO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==