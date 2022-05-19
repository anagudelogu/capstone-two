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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --dark-green: hsl(121, 31%, 44%);\r\n  --green: hsl(108, 35%, 60%);\r\n  --light-green: hsl(68, 59%, 85%);\r\n}\r\n\r\nhtml {\r\n  box-sizing: border-box;\r\n  font-family: 'Mukta', sans-serif;\r\n}\r\n\r\nbody.noScroll {\r\n  overflow: hidden;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 1rem;\r\n}\r\n\r\na,\r\na:hover,\r\na:focus,\r\na:active {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\nul,\r\nli {\r\n  list-style: none;\r\n  padding: 0%;\r\n  margin: 0%;\r\n}\r\n\r\n.navbar {\r\n  height: 50px;\r\n  padding: 10px 32px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n  align-items: center;\r\n  background-color: var(--dark-green);\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n}\r\n\r\nspan.image {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.hero__logo {\r\n  width: 160px;\r\n}\r\n\r\n.navbar__logo .hero__logo {\r\n  width: 32px;\r\n}\r\n\r\n.navbar__recipes {\r\n  display: none;\r\n  font-size: 2rem;\r\n}\r\n\r\n.navbar__hamburger :nth-child(2) {\r\n  display: none;\r\n}\r\n\r\n.menu {\r\n  position: fixed;\r\n  top: 50px;\r\n  left: 0;\r\n  background-color: var(--dark-green);\r\n  width: 100%;\r\n  height: calc(100vh - 80px);\r\n  padding: 40px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  transform: translateX(100%);\r\n  overflow-y: auto;\r\n  transition: all 0.5s ease;\r\n}\r\n\r\n.menu.active {\r\n  transform: translateX(0);\r\n}\r\n\r\n.menu__categories {\r\n  font-size: 1.4rem;\r\n  width: 100%;\r\n  height: 40px;\r\n  border-bottom: solid 1px black;\r\n  text-align: center;\r\n  margin: 0 auto 12px;\r\n}\r\n\r\n.menu__list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.menu__item {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 32px;\r\n  padding: 12px;\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\n.menu__item img {\r\n  width: 50%;\r\n  max-width: 80px;\r\n}\r\n\r\n.menu__item span {\r\n  font-size: 1.2rem;\r\n  width: 50%;\r\n  text-align: left;\r\n}\r\n\r\n.landing {\r\n  margin: 50px auto;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 40px;\r\n}\r\n\r\n.hero {\r\n  height: calc(100vh - 80px);\r\n  width: 100%;\r\n  margin-inline: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 32px;\r\n  background-color: rgb(245, 244, 244);\r\n  box-shadow: 0 10px 20px rgba(145, 145, 145, 0.699);\r\n  border-bottom: 1px double lightblue;\r\n}\r\n\r\n.hero__title {\r\n  font-size: 2rem;\r\n}\r\n\r\n.hero__description {\r\n  padding: 12px;\r\n  border: 1px solid rgb(194, 196, 197);\r\n  background-color: white;\r\n}\r\n\r\n.counter {\r\n  width: 320px;\r\n  padding: 0 8px;\r\n  align-self: center;\r\n}\r\n\r\n.list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  list-style: none;\r\n  gap: 24px;\r\n  padding: 8px;\r\n}\r\n\r\n.category__card {\r\n  background-color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n}\r\n\r\n.category__image {\r\n  width: 100%;\r\n}\r\n\r\n.category__content {\r\n  width: 100%;\r\n  padding-inline: 20px;\r\n}\r\n\r\n.category__header {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.category__title {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.recipes {\r\n  margin: 0 auto;\r\n  width: 90%;\r\n}\r\n\r\n.recipes__card {\r\n  display: flex;\r\n  margin: 1.5%;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n}\r\n\r\n.recipes__image {\r\n  width: 100%;\r\n}\r\n\r\n.recipes__content {\r\n  width: 100%;\r\n  padding-inline: 20px;\r\n}\r\n\r\n.recipes__header {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.recipes__title {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.recipes__likes {\r\n  display: block;\r\n  margin-top: -10px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.recipes__comments,\r\n.recipes__reservations {\r\n  display: block;\r\n  width: 70%;\r\n  margin: 10px auto;\r\n  padding: 5px 10px;\r\n}\r\n\r\n.recipes__popup {\r\n  display: block;\r\n  width: 85%;\r\n  height: 75%;\r\n  padding: 4%;\r\n  position: fixed;\r\n  background-color: white;\r\n  backdrop-filter: blur(2px);\r\n  top: 12.5%;\r\n  left: 7.5%;\r\n  overflow-y: auto;\r\n}\r\n\r\n.recipes__popup_image {\r\n  height: 60%;\r\n  width: auto;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  position: fixed;\r\n  top: calc(100% - 30px);\r\n  width: 100%;\r\n  padding: 8px;\r\n  height: 30px;\r\n  background-color: var(--dark-green);\r\n}\r\n\r\n.license-rights {\r\n  font-size: 10px;\r\n}\r\n\r\n.mobile_visible {\r\n  display: unset;\r\n}\r\n\r\n.desktop_visible {\r\n  display: none;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .navbar {\r\n    height: 70px;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .navbar__recipes {\r\n    display: block;\r\n  }\r\n\r\n  .navbar__hamburger {\r\n    display: none;\r\n  }\r\n\r\n  .license-rights {\r\n    font-size: 14px;\r\n  }\r\n\r\n  .recipes {\r\n    margin-top: 100px;\r\n    justify-content: flex-start;\r\n    margin-bottom: 100px;\r\n  }\r\n\r\n  .list {\r\n    justify-content: flex-start;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .recipes__card {\r\n    width: 30%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n  }\r\n\r\n  .recipes__image {\r\n    width: 100%;\r\n  }\r\n\r\n  .recipes__content {\r\n    width: 100%;\r\n    padding-inline: 20px;\r\n  }\r\n\r\n  .recipes__header {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n\r\n  .recipes__title {\r\n    font-size: 1.3rem;\r\n  }\r\n\r\n  .recipes__likes {\r\n    display: block;\r\n    margin-top: -10px;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .recipes__comments,\r\n  .recipes__reservations {\r\n    display: block;\r\n    width: 70%;\r\n    margin: 10px auto;\r\n    padding: 5px 10px;\r\n  }\r\n\r\n  .mobile_visible {\r\n    display: none;\r\n  }\r\n\r\n  .desktop_visible {\r\n    display: unset;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Mukta');\r\n\r\n:root {\r\n  --dark-green: hsl(121, 31%, 44%);\r\n  --green: hsl(108, 35%, 60%);\r\n  --light-green: hsl(68, 59%, 85%);\r\n}\r\n\r\nhtml {\r\n  box-sizing: border-box;\r\n  font-family: 'Mukta', sans-serif;\r\n}\r\n\r\nbody.noScroll {\r\n  overflow: hidden;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 1rem;\r\n}\r\n\r\na,\r\na:hover,\r\na:focus,\r\na:active {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\nul,\r\nli {\r\n  list-style: none;\r\n  padding: 0%;\r\n  margin: 0%;\r\n}\r\n\r\n.navbar {\r\n  height: 50px;\r\n  padding: 10px 32px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n  align-items: center;\r\n  background-color: var(--dark-green);\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n}\r\n\r\nspan.image {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.hero__logo {\r\n  width: 160px;\r\n}\r\n\r\n.navbar__logo .hero__logo {\r\n  width: 32px;\r\n}\r\n\r\n.navbar__recipes {\r\n  display: none;\r\n  font-size: 2rem;\r\n}\r\n\r\n.navbar__hamburger :nth-child(2) {\r\n  display: none;\r\n}\r\n\r\n.menu {\r\n  position: fixed;\r\n  top: 50px;\r\n  left: 0;\r\n  background-color: var(--dark-green);\r\n  width: 100%;\r\n  height: calc(100vh - 80px);\r\n  padding: 40px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  transform: translateX(100%);\r\n  overflow-y: auto;\r\n  transition: all 0.5s ease;\r\n}\r\n\r\n.menu.active {\r\n  transform: translateX(0);\r\n}\r\n\r\n.menu__categories {\r\n  font-size: 1.4rem;\r\n  width: 100%;\r\n  height: 40px;\r\n  border-bottom: solid 1px black;\r\n  text-align: center;\r\n  margin: 0 auto 12px;\r\n}\r\n\r\n.menu__list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.menu__item {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 32px;\r\n  padding: 12px;\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\n.menu__item img {\r\n  width: 50%;\r\n  max-width: 80px;\r\n}\r\n\r\n.menu__item span {\r\n  font-size: 1.2rem;\r\n  width: 50%;\r\n  text-align: left;\r\n}\r\n\r\n.landing {\r\n  margin: 50px auto;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 40px;\r\n}\r\n\r\n.hero {\r\n  height: calc(100vh - 80px);\r\n  width: 100%;\r\n  margin-inline: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 32px;\r\n  background-color: rgb(245, 244, 244);\r\n  box-shadow: 0 10px 20px rgba(145, 145, 145, 0.699);\r\n  border-bottom: 1px double lightblue;\r\n}\r\n\r\n.hero__title {\r\n  font-size: 2rem;\r\n}\r\n\r\n.hero__description {\r\n  padding: 12px;\r\n  border: 1px solid rgb(194, 196, 197);\r\n  background-color: white;\r\n}\r\n\r\n.counter {\r\n  width: 320px;\r\n  padding: 0 8px;\r\n  align-self: center;\r\n}\r\n\r\n.list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  list-style: none;\r\n  gap: 24px;\r\n  padding: 8px;\r\n}\r\n\r\n.category__card {\r\n  background-color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n}\r\n\r\n.category__image {\r\n  width: 100%;\r\n}\r\n\r\n.category__content {\r\n  width: 100%;\r\n  padding-inline: 20px;\r\n}\r\n\r\n.category__header {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.category__title {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.recipes {\r\n  margin: 0 auto;\r\n  width: 90%;\r\n}\r\n\r\n.recipes__card {\r\n  display: flex;\r\n  margin: 1.5%;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n}\r\n\r\n.recipes__image {\r\n  width: 100%;\r\n}\r\n\r\n.recipes__content {\r\n  width: 100%;\r\n  padding-inline: 20px;\r\n}\r\n\r\n.recipes__header {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.recipes__title {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.recipes__likes {\r\n  display: block;\r\n  margin-top: -10px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.recipes__comments,\r\n.recipes__reservations {\r\n  display: block;\r\n  width: 70%;\r\n  margin: 10px auto;\r\n  padding: 5px 10px;\r\n}\r\n\r\n.recipes__popup {\r\n  display: block;\r\n  width: 85%;\r\n  height: 75%;\r\n  padding: 4%;\r\n  position: fixed;\r\n  background-color: white;\r\n  backdrop-filter: blur(2px);\r\n  top: 12.5%;\r\n  left: 7.5%;\r\n  overflow-y: auto;\r\n}\r\n\r\n.recipes__popup_image {\r\n  height: 60%;\r\n  width: auto;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  position: fixed;\r\n  top: calc(100% - 30px);\r\n  width: 100%;\r\n  padding: 8px;\r\n  height: 30px;\r\n  background-color: var(--dark-green);\r\n}\r\n\r\n.license-rights {\r\n  font-size: 10px;\r\n}\r\n\r\n.mobile_visible {\r\n  display: unset;\r\n}\r\n\r\n.desktop_visible {\r\n  display: none;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .navbar {\r\n    height: 70px;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .navbar__recipes {\r\n    display: block;\r\n  }\r\n\r\n  .navbar__hamburger {\r\n    display: none;\r\n  }\r\n\r\n  .license-rights {\r\n    font-size: 14px;\r\n  }\r\n\r\n  .recipes {\r\n    margin-top: 100px;\r\n    justify-content: flex-start;\r\n    margin-bottom: 100px;\r\n  }\r\n\r\n  .list {\r\n    justify-content: flex-start;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .recipes__card {\r\n    width: 30%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n  }\r\n\r\n  .recipes__image {\r\n    width: 100%;\r\n  }\r\n\r\n  .recipes__content {\r\n    width: 100%;\r\n    padding-inline: 20px;\r\n  }\r\n\r\n  .recipes__header {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n\r\n  .recipes__title {\r\n    font-size: 1.3rem;\r\n  }\r\n\r\n  .recipes__likes {\r\n    display: block;\r\n    margin-top: -10px;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .recipes__comments,\r\n  .recipes__reservations {\r\n    display: block;\r\n    width: 70%;\r\n    margin: 10px auto;\r\n    padding: 5px 10px;\r\n  }\r\n\r\n  .mobile_visible {\r\n    display: none;\r\n  }\r\n\r\n  .desktop_visible {\r\n    display: unset;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
const menuList = document.querySelector('.menu__list');

class Menu {
  static displayCategories(categoriesArr) {
    categoriesArr.forEach((category) => {
      this.createDomMenuItem(category);
    });
  }

  static createDomMenuItem({
    idCategory,
    strCategory,
    strCategoryThumb,
  }) {
    const LI = document.createElement('li');
    LI.classList.add('menu__item');
    LI.setAttribute('id', idCategory);
    LI.innerHTML = `<img src="${strCategoryThumb}" alt="Category ${strCategory}"><span>${strCategory}</span>`;

    menuList.appendChild(LI);
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


const list = document.querySelector('.list');

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
    list.appendChild(LI);
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
    list.appendChild(LI);
  }

  static addToLikesCounterDOM(element) {
    const nLikes = element.querySelector('.recipes__likes');
    const oldLikes = +nLikes.children[0].innerText;
    const newLikes = oldLikes + 1;

    nLikes.innerHTML = `<span>${newLikes}</span> like${
      newLikes === 1 ? '' : 's'
    }`;
  }

  static counterText(type) {
    const counters = document.querySelectorAll('.counter');
    counters.forEach((counter) => {
      counter.innerHTML = `${type} (${this.itemCount(
        counter.nextElementSibling,
      )})`;
    });
  }

  static itemCount(element) {
    return element.children.length;
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
/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/menu.js */ "./src/modules/menu.js");










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
  _modules_menu_js__WEBPACK_IMPORTED_MODULE_8__["default"].displayCategories(categories);
  _modules_userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].counterText('Categories');
};

asyncEnv();

const LIST = document.querySelector('.list');

document.addEventListener('click', async (e) => {
  const clickedElement = e.target;

  if (clickedElement.classList.contains('menu-toggle')) {
    document.body.classList.toggle('noScroll');
    document.querySelector('.menu').classList.toggle('active');
  }

  if (clickedElement.classList.contains('category__image')) {
    const categoryName = clickedElement.parentNode.children[1].innerText;
    LIST.innerHTML = '';
    const categories = await _modules_mealAPI_js__WEBPACK_IMPORTED_MODULE_3__["default"].getByCategory(categoryName);
    const allLikes = await _modules_involvementAPI_js__WEBPACK_IMPORTED_MODULE_6__["default"].getAllLikes();
    const currentCategory = new _modules_currentCategory_js__WEBPACK_IMPORTED_MODULE_4__["default"](categories);
    _modules_userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].displayRecipes(currentCategory.meals, allLikes);
    _modules_userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].counterText('Recipes');
  }

  if (clickedElement.classList.contains('menu__item')) {
    const categoryName = clickedElement.children[1].innerText;
    LIST.innerHTML = '';
    const categories = await _modules_mealAPI_js__WEBPACK_IMPORTED_MODULE_3__["default"].getByCategory(categoryName);
    const allLikes = await _modules_involvementAPI_js__WEBPACK_IMPORTED_MODULE_6__["default"].getAllLikes();
    const currentCategory = new _modules_currentCategory_js__WEBPACK_IMPORTED_MODULE_4__["default"](categories);
    _modules_userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].displayRecipes(currentCategory.meals, allLikes);
    _modules_userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].counterText('Categories');
  }

  if (clickedElement.classList.contains('hero__logo')) {
    LIST.innerHTML = '';
    const categories = await _modules_mealAPI_js__WEBPACK_IMPORTED_MODULE_3__["default"].getCategories();
    _modules_userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].displayCategories(categories);
    _modules_userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].counterText('Categories');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUss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QUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsMkJBQTJCLHlFQUFxQjtBQUNoRCxFQUFFLG1GQUErQjtBQUNqQyxFQUFFLDBFQUFzQjtBQUN4QixFQUFFLDZFQUF5QjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHlFQUFxQjtBQUNsRCwyQkFBMkIsOEVBQTBCO0FBQ3JELGdDQUFnQyxtRUFBZTtBQUMvQyxJQUFJLGdGQUE0QjtBQUNoQyxJQUFJLDZFQUF5QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHlFQUFxQjtBQUNsRCwyQkFBMkIsOEVBQTBCO0FBQ3JELGdDQUFnQyxtRUFBZTtBQUMvQyxJQUFJLGdGQUE0QjtBQUNoQyxJQUFJLDZFQUF5QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix5RUFBcUI7QUFDbEQsSUFBSSxtRkFBK0I7QUFDbkMsSUFBSSw2RUFBeUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsMEVBQXNCO0FBQ2hDLElBQUksc0ZBQWtDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscUVBQWlCO0FBQ3hDO0FBQ0EsVUFBVSw2RUFBeUI7QUFDbkMsUUFBUSwyQkFBMkI7QUFDbkM7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDhFQUEwQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsK0RBQVc7QUFDdkM7QUFDQSxJQUFJLDZEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcHN0b25lLXR3by8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9zcmMvbW9kdWxlcy9jdXJyZW50Q2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vc3JjL21vZHVsZXMvY3VycmVudE1lYWwuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vc3JjL21vZHVsZXMvZmV0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL3NyYy9tb2R1bGVzL2ludm9sdmVtZW50QVBJLmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL3NyYy9tb2R1bGVzL21lYWxBUEkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9zcmMvbW9kdWxlcy9wb3BVcC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9zcmMvbW9kdWxlcy91c2VySW50ZXJmYWNlLmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NdWt0YSk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gIC0tZGFyay1ncmVlbjogaHNsKDEyMSwgMzElLCA0NCUpO1xcclxcbiAgLS1ncmVlbjogaHNsKDEwOCwgMzUlLCA2MCUpO1xcclxcbiAgLS1saWdodC1ncmVlbjogaHNsKDY4LCA1OSUsIDg1JSk7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTXVrdGEnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5Lm5vU2Nyb2xsIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5hLFxcclxcbmE6aG92ZXIsXFxyXFxuYTpmb2N1cyxcXHJcXG5hOmFjdGl2ZSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxudWwsXFxyXFxubGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDAlO1xcclxcbiAgbWFyZ2luOiAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDMycHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JlZW4pO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbnNwYW4uaW1hZ2Uge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm9fX2xvZ28ge1xcclxcbiAgd2lkdGg6IDE2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyX19sb2dvIC5oZXJvX19sb2dvIHtcXHJcXG4gIHdpZHRoOiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyX19yZWNpcGVzIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJfX2hhbWJ1cmdlciA6bnRoLWNoaWxkKDIpIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tZW51IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTBweDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZWVuKTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XFxyXFxuICBwYWRkaW5nOiA0MHB4IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS5hY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9fY2F0ZWdvcmllcyB7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGJsYWNrO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwIGF1dG8gMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfX2xpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51X19pdGVtIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMzJweDtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5tZW51X19pdGVtIGltZyB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgbWF4LXdpZHRoOiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9faXRlbSBzcGFuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5sYW5kaW5nIHtcXHJcXG4gIG1hcmdpbjogNTBweCBhdXRvO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5oZXJvIHtcXHJcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDMycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDQsIDI0NCk7XFxyXFxuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDE0NSwgMTQ1LCAxNDUsIDAuNjk5KTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBkb3VibGUgbGlnaHRibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyb19fdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyb19fZGVzY3JpcHRpb24ge1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOTQsIDE5NiwgMTk3KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY291bnRlciB7XFxyXFxuICB3aWR0aDogMzIwcHg7XFxyXFxuICBwYWRkaW5nOiAwIDhweDtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBnYXA6IDI0cHg7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yeV9fY2FyZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhdGVnb3J5X19pbWFnZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhdGVnb3J5X19jb250ZW50IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yeV9faGVhZGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhdGVnb3J5X190aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXMge1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlc19fY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luOiAxLjUlO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19pbWFnZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX2NvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nLWlubGluZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX2hlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlc19fdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19saWtlcyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX2NvbW1lbnRzLFxcclxcbi5yZWNpcGVzX19yZXNlcnZhdGlvbnMge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX3BvcHVwIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDg1JTtcXHJcXG4gIGhlaWdodDogNzUlO1xcclxcbiAgcGFkZGluZzogNCU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcclxcbiAgdG9wOiAxMi41JTtcXHJcXG4gIGxlZnQ6IDcuNSU7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlc19fcG9wdXBfaW1hZ2Uge1xcclxcbiAgaGVpZ2h0OiA2MCU7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiBjYWxjKDEwMCUgLSAzMHB4KTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmVlbik7XFxyXFxufVxcclxcblxcclxcbi5saWNlbnNlLXJpZ2h0cyB7XFxyXFxuICBmb250LXNpemU6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGVfdmlzaWJsZSB7XFxyXFxuICBkaXNwbGF5OiB1bnNldDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2t0b3BfdmlzaWJsZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm5hdmJhciB7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdmJhcl9fcmVjaXBlcyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdmJhcl9faGFtYnVyZ2VyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5saWNlbnNlLXJpZ2h0cyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGlzdCB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVjaXBlc19fY2FyZCB7XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJlY2lwZXNfX2ltYWdlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVjaXBlc19fY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nLWlubGluZTogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzX19oZWFkZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJlY2lwZXNfX3RpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVjaXBlc19fbGlrZXMge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVjaXBlc19fY29tbWVudHMsXFxyXFxuICAucmVjaXBlc19fcmVzZXJ2YXRpb25zIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb2JpbGVfdmlzaWJsZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZGVza3RvcF92aXNpYmxlIHtcXHJcXG4gICAgZGlzcGxheTogdW5zZXQ7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsMkJBQTJCO0VBQzNCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7OztFQUdFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7Ozs7RUFJRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxnQkFBZ0I7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Oi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TXVrdGEnKTtcXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWRhcmstZ3JlZW46IGhzbCgxMjEsIDMxJSwgNDQlKTtcXHJcXG4gIC0tZ3JlZW46IGhzbCgxMDgsIDM1JSwgNjAlKTtcXHJcXG4gIC0tbGlnaHQtZ3JlZW46IGhzbCg2OCwgNTklLCA4NSUpO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ011a3RhJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keS5ub1Njcm9sbCB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYSxcXHJcXG5hOmhvdmVyLFxcclxcbmE6Zm9jdXMsXFxyXFxuYTphY3RpdmUge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbnVsLFxcclxcbmxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwJTtcXHJcXG4gIG1hcmdpbjogMCU7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgcGFkZGluZzogMTBweCAzMnB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZWVuKTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuLmltYWdlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZXJvX19sb2dvIHtcXHJcXG4gIHdpZHRoOiAxNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhcl9fbG9nbyAuaGVyb19fbG9nbyB7XFxyXFxuICB3aWR0aDogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhcl9fcmVjaXBlcyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyX19oYW1idXJnZXIgOm50aC1jaGlsZCgyKSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDUwcHg7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmVlbik7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xcclxcbiAgcGFkZGluZzogNDBweCAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUuYWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfX2NhdGVnb3JpZXMge1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBibGFjaztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMCBhdXRvIDEycHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51X19saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9faXRlbSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDMycHg7XFxyXFxuICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9faXRlbSBpbWcge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIG1heC13aWR0aDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfX2l0ZW0gc3BhbiB7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4ubGFuZGluZyB7XFxyXFxuICBtYXJnaW46IDUwcHggYXV0bztcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVybyB7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAzMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ0LCAyNDQpO1xcclxcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgxNDUsIDE0NSwgMTQ1LCAwLjY5OSk7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggZG91YmxlIGxpZ2h0Ymx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm9fX3RpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm9fX2Rlc2NyaXB0aW9uIHtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTk0LCAxOTYsIDE5Nyk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvdW50ZXIge1xcclxcbiAgd2lkdGg6IDMyMHB4O1xcclxcbiAgcGFkZGluZzogMCA4cHg7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZ2FwOiAyNHB4O1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnlfX2NhcmQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yeV9faW1hZ2Uge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yeV9fY29udGVudCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnlfX2hlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yeV9fdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzIHtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX2NhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbjogMS41JTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlc19faW1hZ2Uge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19jb250ZW50IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19oZWFkZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX3RpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlc19fbGlrZXMge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW4tdG9wOiAtMTBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19jb21tZW50cyxcXHJcXG4ucmVjaXBlc19fcmVzZXJ2YXRpb25zIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19wb3B1cCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiA4NSU7XFxyXFxuICBoZWlnaHQ6IDc1JTtcXHJcXG4gIHBhZGRpbmc6IDQlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXHJcXG4gIHRvcDogMTIuNSU7XFxyXFxuICBsZWZ0OiA3LjUlO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX3BvcHVwX2ltYWdlIHtcXHJcXG4gIGhlaWdodDogNjAlO1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogY2FsYygxMDAlIC0gMzBweCk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JlZW4pO1xcclxcbn1cXHJcXG5cXHJcXG4ubGljZW5zZS1yaWdodHMge1xcclxcbiAgZm9udC1zaXplOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9iaWxlX3Zpc2libGUge1xcclxcbiAgZGlzcGxheTogdW5zZXQ7XFxyXFxufVxcclxcblxcclxcbi5kZXNrdG9wX3Zpc2libGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5uYXZiYXIge1xcclxcbiAgICBoZWlnaHQ6IDcwcHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXZiYXJfX3JlY2lwZXMge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXZiYXJfX2hhbWJ1cmdlciB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGljZW5zZS1yaWdodHMge1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVjaXBlcyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxpc3Qge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJlY2lwZXNfX2NhcmQge1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzX19pbWFnZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJlY2lwZXNfX2NvbnRlbnQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVjaXBlc19faGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzX190aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJlY2lwZXNfX2xpa2VzIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJlY2lwZXNfX2NvbW1lbnRzLFxcclxcbiAgLnJlY2lwZXNfX3Jlc2VydmF0aW9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbiAgICBtYXJnaW46IDEwcHggYXV0bztcXHJcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9iaWxlX3Zpc2libGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmRlc2t0b3BfdmlzaWJsZSB7XFxyXFxuICAgIGRpc3BsYXk6IHVuc2V0O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnJlbnRDYXRlZ29yeSB7XG4gIG1lYWxzO1xuXG4gIGNvbnN0cnVjdG9yKGNhdGVnb3J5TWVhbHMgPSBbXSkge1xuICAgIHRoaXMubWVhbHMgPSBjYXRlZ29yeU1lYWxzO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDdXJyZW50TWVhbCB7XG4gIGlkTWVhbDtcblxuICBzdHJNZWFsO1xuXG4gIHN0ck1lYWxUaHVtYjtcblxuICBzdHJJbnN0cnVjdGlvbnM7XG5cbiAgY29tbWVudHM7XG5cbiAgY29uc3RydWN0b3IoY3VycmVudE1lYWwsIGNvbW1lbnRzID0gW10pIHtcbiAgICB0aGlzLmlkTWVhbCA9IGN1cnJlbnRNZWFsLmlkTWVhbDtcbiAgICB0aGlzLnN0ck1lYWwgPSBjdXJyZW50TWVhbC5zdHJNZWFsO1xuICAgIHRoaXMuc3RyTWVhbFRodW1iID0gY3VycmVudE1lYWwuc3RyTWVhbFRodW1iO1xuICAgIHRoaXMuc3RySW5zdHJ1Y3Rpb25zID0gY3VycmVudE1lYWwuc3RySW5zdHJ1Y3Rpb25zO1xuICAgIHRoaXMuY29tbWVudHMgPSBjb21tZW50cztcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmV0Y2hSZXF1ZXN0IHtcbiAgbWV0aG9kO1xuXG4gIGJvZHk7XG5cbiAgaGVhZGVycztcblxuICB1cmw7XG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIG1ldGhvZCA9ICdHRVQnLFxuICAgIGJvZHksXG4gICAgdXJsID0gJycsXG4gICAgaGVhZGVycyA9IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgfSxcbiAgfSA9IHt9KSB7XG4gICAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgICB0aGlzLmhlYWRlcnMgPSBoZWFkZXJzO1xuICAgIHRoaXMudXJsID0gdXJsO1xuICB9XG5cbiAgYXN5bmMgY2FsbCgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kOiB0aGlzLm1ldGhvZCxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodGhpcy5ib2R5KSxcbiAgICAgICAgaGVhZGVyczogdGhpcy5tZXRob2QgPT09ICdQT1NUJyA/IHRoaXMuaGVhZGVycyA6IHVuZGVmaW5lZCxcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy51cmwsIG9wdGlvbnMpO1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSByZXR1cm4gbnVsbDtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIG40S3JueGExR3hYSGJaMzQ5VU1tIGNsZWFuXG4vLyBqdFhGUFhOaXpSdFU1cGZaMjZzVFxuLy8gdGVzdDogTUJ4U0p5VlE4elF6dXhCa3dhNW1cblxuaW1wb3J0IEZldGNoUmVxdWVzdCBmcm9tICcuL2ZldGNoUmVxdWVzdC5qcyc7XG5cbmNvbnN0IGFwcElkID0gJ2p0WEZQWE5pelJ0VTVwZloyNnNUJztcbmNvbnN0IHVybE1BUCA9IHtcbiAgbWFpbjogJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLycsXG4gIGxpa2VzOiBgJHthcHBJZH0vbGlrZXMvYCxcbiAgY29tbWVudHM6IGAke2FwcElkfS9jb21tZW50c2AsXG4gIGJ5Q29tbWVudDogYCR7YXBwSWR9L2NvbW1lbnRzP2l0ZW1faWQ9YCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludm9sdmVtZW50QVBJIHtcbiAgc3RhdGljIGFzeW5jIGFkZExpa2UobWVhbCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBmZXRjaFJlcXVlc3QgPSBuZXcgRmV0Y2hSZXF1ZXN0KHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IHsgaXRlbV9pZDogbWVhbCB9LFxuICAgICAgICB1cmw6IGAke3VybE1BUC5tYWlufSR7dXJsTUFQLmxpa2VzfWAsXG4gICAgICB9KTtcbiAgICAgIGF3YWl0IGZldGNoUmVxdWVzdC5jYWxsKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEFsbExpa2VzKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBmZXRjaFJlcXVlc3QgPSBuZXcgRmV0Y2hSZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBgJHt1cmxNQVAubWFpbn0ke3VybE1BUC5saWtlc31gLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBhbGxMaWtlcyA9IGF3YWl0IGZldGNoUmVxdWVzdC5jYWxsKCk7XG4gICAgICByZXR1cm4gYWxsTGlrZXM7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldE1lYWxMaWtlcyhsaWtlc0FyciwgSXRlbUlkKSB7XG4gICAgY29uc3QgbWVhbExpa2VzID0gbGlrZXNBcnIuZmlsdGVyKFxuICAgICAgKG1lYWwpID0+IG1lYWwuaXRlbV9pZCA9PT0gSXRlbUlkLFxuICAgIClbMF07XG4gICAgaWYgKCFtZWFsTGlrZXMpIHJldHVybiAwO1xuICAgIHJldHVybiBtZWFsTGlrZXMubGlrZXM7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgYWRkQ29tbWVudCh7IHVzZXJuYW1lLCBjb21tZW50IH0sIG1lYWwpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmV0Y2hSZXF1ZXN0ID0gbmV3IEZldGNoUmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgaXRlbV9pZDogbWVhbCxcbiAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICBjb21tZW50LFxuICAgICAgICB9LFxuICAgICAgICB1cmw6IGAke3VybE1BUC5tYWlufSR7dXJsTUFQLmNvbW1lbnRzfWAsXG4gICAgICB9KTtcbiAgICAgIGF3YWl0IGZldGNoUmVxdWVzdC5jYWxsKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldENvbW1lbnRzKG1lYWwpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmV0Y2hSZXF1ZXN0ID0gbmV3IEZldGNoUmVxdWVzdCh7XG4gICAgICAgIHVybDogYCR7dXJsTUFQLm1haW59JHt1cmxNQVAuYnlDb21tZW50fSR7bWVhbH1gLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGZldGNoUmVxdWVzdC5jYWxsKCk7XG4gICAgICByZXR1cm4gY29tbWVudHM7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgRmV0Y2hSZXF1ZXN0IGZyb20gJy4vZmV0Y2hSZXF1ZXN0LmpzJztcblxuY29uc3QgdXJsTWFwID0ge1xuICByYW5kb206ICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvcmFuZG9tLnBocCcsXG4gIGNhdGVnb3JpZXM6XG4gICAgJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9jYXRlZ29yaWVzLnBocCcsXG4gIGJ5Q2F0ZWdvcnk6ICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvZmlsdGVyLnBocD9jPScsXG4gIGJ5TWVhbElkOiAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2xvb2t1cC5waHA/aT0nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVhbEFQSSB7XG4gIHN0YXRpYyBhc3luYyBnZXRSZWNpcGUoaWQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmV0Y2hSZXF1ZXN0ID0gbmV3IEZldGNoUmVxdWVzdCh7XG4gICAgICAgIHVybDogYCR7dXJsTWFwLmJ5TWVhbElkfSR7aWR9YCxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoUmVxdWVzdC5jYWxsKCk7XG4gICAgICByZXR1cm4gZGF0YS5tZWFsc1swXTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0Q2F0ZWdvcmllcygpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmV0Y2hSZXF1ZXN0ID0gbmV3IEZldGNoUmVxdWVzdCh7XG4gICAgICAgIHVybDogdXJsTWFwLmNhdGVnb3JpZXMsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBmZXRjaFJlcXVlc3QuY2FsbCgpO1xuICAgICAgcmV0dXJuIGNhdGVnb3JpZXMuY2F0ZWdvcmllcztcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0QnlDYXRlZ29yeShjYXRlZ29yeSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBmZXRjaFJlcXVlc3QgPSBuZXcgRmV0Y2hSZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBgJHt1cmxNYXAuYnlDYXRlZ29yeX0ke2NhdGVnb3J5fWAsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHJlY2lwZXMgPSBhd2FpdCBmZXRjaFJlcXVlc3QuY2FsbCgpO1xuICAgICAgcmV0dXJuIHJlY2lwZXMubWVhbHM7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG59XG4iLCJjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19saXN0Jyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IHtcclxuICBzdGF0aWMgZGlzcGxheUNhdGVnb3JpZXMoY2F0ZWdvcmllc0Fycikge1xyXG4gICAgY2F0ZWdvcmllc0Fyci5mb3JFYWNoKChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICB0aGlzLmNyZWF0ZURvbU1lbnVJdGVtKGNhdGVnb3J5KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNyZWF0ZURvbU1lbnVJdGVtKHtcclxuICAgIGlkQ2F0ZWdvcnksXHJcbiAgICBzdHJDYXRlZ29yeSxcclxuICAgIHN0ckNhdGVnb3J5VGh1bWIsXHJcbiAgfSkge1xyXG4gICAgY29uc3QgTEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgTEkuY2xhc3NMaXN0LmFkZCgnbWVudV9faXRlbScpO1xyXG4gICAgTEkuc2V0QXR0cmlidXRlKCdpZCcsIGlkQ2F0ZWdvcnkpO1xyXG4gICAgTEkuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHtzdHJDYXRlZ29yeVRodW1ifVwiIGFsdD1cIkNhdGVnb3J5ICR7c3RyQ2F0ZWdvcnl9XCI+PHNwYW4+JHtzdHJDYXRlZ29yeX08L3NwYW4+YDtcclxuXHJcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChMSSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBJbnZvbHZlbWVudEFQSSBmcm9tICcuL2ludm9sdmVtZW50QVBJLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wVXAge1xuICBzdGF0aWMgcG9wKGRhdGEpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMuY29tbWVudENvdW50ID0gMDtcbiAgICB0aGlzLnRlbXBsYXRlKHRoaXMuZGF0YS50eXBlKTtcbiAgfVxuXG4gIHN0YXRpYyB0ZW1wbGF0ZSgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMuZGF0YS5pZE1lYWwpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JlY2lwZXNfX3BvcHVwJyk7XG5cbiAgICBjb25zdCBjb21tZW50U2VjdGlvbiA9IFBvcFVwLmNvbW1lbnRzVGVtcGxhdGUodGhpcy5kYXRhLnR5cGUpO1xuICAgIGNvbnN0IHJlc2VydmF0aW9uU2VjdGlvbiA9IFBvcFVwLnJlc2VydmF0aW9uc1RlbXBsYXRlKHRoaXMuZGF0YS50eXBlKTtcbiAgICBjb25zdCBpbnN0cnVjdHMgPSBQb3BVcC5pbnN0cnVjdGlvbnNUZW1wbGF0ZSh0aGlzLmRhdGEuc3RySW5zdHJ1Y3Rpb25zKTtcblxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICA8aW1nIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfaW1hZ2VcIiBzcmM9XCIke3RoaXMuZGF0YS5zdHJNZWFsVGh1bWJ9XCIgYWx0PVwiRGVsaWNpb3VzICR7dGhpcy5kYXRhLnN0ck1lYWx9XCI+XG4gICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXhtYXJrXCI+PC9pPlxuICAgICAgPGgyIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfdGl0bGVcIj4ke3RoaXMuZGF0YS5zdHJNZWFsfTwvaDI+XG4gICAgICA8dWwgY2xhc3M9XCJyZWNpcGVzX19wb3B1cF9pbnN0cnVjdHNcIj4ke2luc3RydWN0c308L3VsPlxuICAgICAgJHtjb21tZW50U2VjdGlvbn1cbiAgICAgICR7cmVzZXJ2YXRpb25TZWN0aW9ufVxuICAgIGA7XG5cbiAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcignaScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29udGFpbmVyLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuZGF0YS50eXBlID09PSAnUmVjaXBlJykge1xuICAgICAgY29uc3QgW3VzZXIsIGNvbW1lbnRdID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG4gICAgICBjb25zdCBzdWJtaXQgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG4gICAgICBjb25zdCB1bENvbnRhaW5lciA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCd1bCcpO1xuXG4gICAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmICh1c2VyLnZhbHVlID09PSAnJyB8fCBjb21tZW50LnZhbHVlID09PSAnJykgcmV0dXJuO1xuICAgICAgICBjb25zdCBpbnB1dENvbW1lbnQgPSB7IHVzZXJuYW1lOiB1c2VyLnZhbHVlLCBjb21tZW50OiBjb21tZW50LnZhbHVlIH07XG4gICAgICAgIFBvcFVwLmNyZWF0ZUNvbW1lbnRPbkRPTSh1c2VyLCBjb21tZW50LCB1bENvbnRhaW5lciwgaW5wdXRDb21tZW50KTtcbiAgICAgICAgYXdhaXQgSW52b2x2ZW1lbnRBUEkuYWRkQ29tbWVudChpbnB1dENvbW1lbnQsIHRoaXMuZGF0YS5pZE1lYWwpO1xuICAgICAgICBQb3BVcC5jb21tZW50Q291bnRBZGQoY29udGFpbmVyKTtcbiAgICAgICAgW3VzZXIudmFsdWUsIGNvbW1lbnQudmFsdWVdID0gWycnLCAnJ107XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIH1cblxuICBzdGF0aWMgZGlzcGxheUNvbW1lbnQoZGF0YSkge1xuICAgIGNvbnN0IFt5ZWFyLCBtb250aCwgZGF5XSA9IGRhdGEuY3JlYXRpb25fZGF0ZS5zcGxpdCgnLScpO1xuICAgIHJldHVybiBgXG4gICAgICAgIDxsaSBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2NvbW1lbnRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2NvbW1lbnQtZGF0ZVwiPlxuICAgICAgICAgICAgJHtkYXl9LSR7bW9udGh9LSR7eWVhcn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZWNpcGVzX19wb3B1cF9jb21tZW50LXVzZXJcIj5cbiAgICAgICAgICAgICR7ZGF0YS51c2VybmFtZX06XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfY29tbWVudC1jb250ZW50XCI+XG4gICAgICAgICAgICAke2RhdGEuY29tbWVudH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICBgO1xuICB9XG5cbiAgc3RhdGljIGNvbW1lbnRzVGVtcGxhdGUodHlwZSkge1xuICAgIGlmICh0eXBlICE9PSAnUmVjaXBlJykgcmV0dXJuICcnO1xuICAgIGxldCBjb21tZW50cyA9ICcnO1xuICAgIHRoaXMuZGF0YS5jb21tZW50cy5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgICBjb21tZW50cyArPSBQb3BVcC5kaXNwbGF5Q29tbWVudChjb21tZW50KTtcbiAgICB9KTtcbiAgICByZXR1cm4gYFxuICAgICAgPGRpdiBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2NvbW1lbnRzXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfY29tbWVudC1jb3VudFwiPkNvbW1lbnRzICgke3RoaXMuZGF0YS5jb21tZW50cy5sZW5ndGh9KTwvc3Bhbj5cbiAgICAgICAgPHVsIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfY29tbWVudHNcIj4ke2NvbW1lbnRzfTwvdWw+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2lucHV0LXVzZXJcIiBwbGFjZWhvbGRlcj1cIlVzZXJcIiB0YWJpbmRleD0wPjwvaW5wdXQ+XG4gICAgICAgIDxpbnB1dCAgY2xhc3M9XCJyZWNpcGVzX19wb3B1cF9pbnB1dC1jb21tZW50XCIgcGxhY2Vob2xkZXI9XCJDb21tZW50XCIgdGFiaW5kZXg9MD48L2lucHV0PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfaW5wdXQtc3VibWl0XCIgdHlwZT1cImJ1dHRvblwiIHRhYmluZGV4PTA+Q29tbWVudDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyByZXNlcnZhdGlvbnNUZW1wbGF0ZSh0eXBlKSB7XG4gICAgaWYgKHR5cGUgIT09ICdSZXNlcnZhdGlvbicpIHJldHVybiAnJztcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlQ29tbWVudE9uRE9NKHVzZXIsIGNvbW1lbnQsIGNvbnRhaW5lciwgaW5wdXRDb21tZW50KSB7XG4gICAgY29uc3QgW2RheSwgbW9udGgsIHllYXJdID0gbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKS5zcGxpdCgnLycpO1xuICAgIGNvbnN0IGxpID0gUG9wVXAuZGlzcGxheUNvbW1lbnQoXG4gICAgICB7XG4gICAgICAgIC4uLmlucHV0Q29tbWVudCxcbiAgICAgICAgY3JlYXRpb25fZGF0ZTpcbiAgICAgICAgICBgJHt5ZWFyfS0ke21vbnRoIDwgMTAgPyAnMCcgOiAnJ30ke21vbnRofS0ke2RheSA8IDEwID8gJzAnIDogJyd9JHtkYXl9YCxcbiAgICAgIH0sXG4gICAgKTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MICs9IGxpO1xuICB9XG5cbiAgc3RhdGljIGNvbW1lbnRDb3VudEFkZChjb250YWluZXIpIHtcbiAgICB0aGlzLmNvbW1lbnRDb3VudCArPSAxO1xuICAgIGNvbnN0IGNvbW1lbnRzTnVtID0gdGhpcy5kYXRhLmNvbW1lbnRzLmxlbmd0aCArIHRoaXMuY29tbWVudENvdW50O1xuICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmVjaXBlc19fcG9wdXBfY29tbWVudC1jb3VudCcpLmlubmVySFRNTCA9IGBDb21tZW50cyAoJHtjb21tZW50c051bX0pYDtcbiAgICByZXR1cm4gY29tbWVudHNOdW07XG4gIH1cblxuICBzdGF0aWMgaW5zdHJ1Y3Rpb25zVGVtcGxhdGUoaW5zdHJ1Y3RzKSB7XG4gICAgbGV0IG5ld0luc3RydWN0cyA9ICcnO1xuICAgIGluc3RydWN0cy5zcGxpdCgvXFxyP1xcbi8pLmZvckVhY2goKGxpbmUpID0+IHtcbiAgICAgIG5ld0luc3RydWN0cyArPSBgPGxpIGNsYXNzPVwicG9wdXBfX2luc3RydWN0c19saW5lXCI+JHtsaW5lfTwvbGk+YDtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3SW5zdHJ1Y3RzO1xuICB9XG59IiwiaW1wb3J0IEludm9sdmVtZW50QVBJIGZyb20gJy4vaW52b2x2ZW1lbnRBUEkuanMnO1xyXG5cclxuY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Jyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW50ZXJmYWNlIHtcclxuICBzdGF0aWMgZGlzcGxheVJlY2lwZXMobWVhbHNBcnIsIGxpa2VzID0gW10pIHtcclxuICAgIG1lYWxzQXJyLmZvckVhY2goKHJlY2lwZSkgPT4ge1xyXG4gICAgICBjb25zdCBtZWFsTGlrZXMgPSBJbnZvbHZlbWVudEFQSS5nZXRNZWFsTGlrZXMoXHJcbiAgICAgICAgbGlrZXMsXHJcbiAgICAgICAgcmVjaXBlLmlkTWVhbCxcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5jcmVhdGVDYXJkKHJlY2lwZSwgbWVhbExpa2VzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGRpc3BsYXlDYXRlZ29yaWVzKGNhdGVnb3JpZXNBcnIpIHtcclxuICAgIGNhdGVnb3JpZXNBcnIuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgdGhpcy5jcmVhdGVDYXRlZ29yeUNhcmQoY2F0ZWdvcnkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY3JlYXRlQ2F0ZWdvcnlDYXJkKHtcclxuICAgIGlkQ2F0ZWdvcnksXHJcbiAgICBzdHJDYXRlZ29yeSxcclxuICAgIHN0ckNhdGVnb3J5VGh1bWIsXHJcbiAgfSkge1xyXG4gICAgY29uc3QgTEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgTEkuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnlfX2NhcmQnKTtcclxuICAgIExJLnNldEF0dHJpYnV0ZSgnaWQnLCBpZENhdGVnb3J5KTtcclxuICAgIExJLmlubmVySFRNTCA9IGBcclxuICAgICAgPGltZyBjbGFzcz1cImNhdGVnb3J5X19pbWFnZVwiIHNyYz1cIiR7c3RyQ2F0ZWdvcnlUaHVtYn1cIiBhbHQ9XCJEZWxpY2lvdXMgJHtzdHJDYXRlZ29yeX1cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5X19jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnlfX2hlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzcz1cImNhdGVnb3J5X190aXRsZVwiPiR7c3RyQ2F0ZWdvcnl9PC9oMj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgICBsaXN0LmFwcGVuZENoaWxkKExJKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjcmVhdGVDYXJkKFxyXG4gICAgeyBzdHJNZWFsID0gJycsIHN0ck1lYWxUaHVtYiA9ICcnLCBpZE1lYWwgfSxcclxuICAgIGxpa2VzID0gMCxcclxuICApIHtcclxuICAgIGNvbnN0IExJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIExJLmNsYXNzTGlzdC5hZGQoJ3JlY2lwZXNfX2NhcmQnKTtcclxuICAgIExJLnNldEF0dHJpYnV0ZSgnaWQnLCBpZE1lYWwpO1xyXG4gICAgTEkuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8aW1nIGNsYXNzPVwicmVjaXBlc19faW1hZ2VcIiBzcmM9XCIke3N0ck1lYWxUaHVtYn1cIiBhbHQ9XCJEZWxpY2lvdXMgJHtzdHJNZWFsfVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicmVjaXBlc19fY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlY2lwZXNfX2hlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzcz1cInJlY2lwZXNfX3RpdGxlXCI+JHtzdHJNZWFsfTwvaDI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLWhlYXJ0XCI+PC9pPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlY2lwZXNfX2xpa2VzXCI+PHNwYW4+JHtsaWtlc308L3NwYW4+IGxpa2Uke1xyXG4gIGxpa2VzID09PSAxID8gJycgOiAncydcclxufTwvc3Bhbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJyZWNpcGVzX19jb21tZW50c1wiPkNvbW1lbnRzPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicmVjaXBlc19fcmVzZXJ2YXRpb25zXCI+UmVzZXJ2YXRpb25zPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICAgIGxpc3QuYXBwZW5kQ2hpbGQoTEkpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFkZFRvTGlrZXNDb3VudGVyRE9NKGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IG5MaWtlcyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLnJlY2lwZXNfX2xpa2VzJyk7XHJcbiAgICBjb25zdCBvbGRMaWtlcyA9ICtuTGlrZXMuY2hpbGRyZW5bMF0uaW5uZXJUZXh0O1xyXG4gICAgY29uc3QgbmV3TGlrZXMgPSBvbGRMaWtlcyArIDE7XHJcblxyXG4gICAgbkxpa2VzLmlubmVySFRNTCA9IGA8c3Bhbj4ke25ld0xpa2VzfTwvc3Bhbj4gbGlrZSR7XHJcbiAgICAgIG5ld0xpa2VzID09PSAxID8gJycgOiAncydcclxuICAgIH1gO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNvdW50ZXJUZXh0KHR5cGUpIHtcclxuICAgIGNvbnN0IGNvdW50ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvdW50ZXInKTtcclxuICAgIGNvdW50ZXJzLmZvckVhY2goKGNvdW50ZXIpID0+IHtcclxuICAgICAgY291bnRlci5pbm5lckhUTUwgPSBgJHt0eXBlfSAoJHt0aGlzLml0ZW1Db3VudChcclxuICAgICAgICBjb3VudGVyLm5leHRFbGVtZW50U2libGluZyxcclxuICAgICAgKX0pYDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGl0ZW1Db3VudChlbGVtZW50KSB7XHJcbiAgICByZXR1cm4gZWxlbWVudC5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcclxuaW1wb3J0IGxvZ28gZnJvbSAnLi9hc3NldHMvYnVyZ2VyLWxvZ28ucG5nJztcclxuaW1wb3J0IFVzZXJJbnRlcmZhY2UgZnJvbSAnLi9tb2R1bGVzL3VzZXJJbnRlcmZhY2UuanMnO1xyXG5pbXBvcnQgTWVhbEFQSSBmcm9tICcuL21vZHVsZXMvbWVhbEFQSS5qcyc7XHJcbmltcG9ydCBDdXJyZW50Q2F0ZWdvcnkgZnJvbSAnLi9tb2R1bGVzL2N1cnJlbnRDYXRlZ29yeS5qcyc7XHJcbmltcG9ydCBDdXJyZW50TWVhbCBmcm9tICcuL21vZHVsZXMvY3VycmVudE1lYWwuanMnO1xyXG5pbXBvcnQgSW52b2x2ZW1lbnRBUEkgZnJvbSAnLi9tb2R1bGVzL2ludm9sdmVtZW50QVBJLmpzJztcclxuaW1wb3J0IFBvcFVwIGZyb20gJy4vbW9kdWxlcy9wb3BVcC5qcyc7XHJcbmltcG9ydCBNZW51IGZyb20gJy4vbW9kdWxlcy9tZW51LmpzJztcclxuXHJcbmNvbnN0IGltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmltYWdlJyk7XHJcblxyXG5BcnJheS5mcm9tKGltYWdlQ29udGFpbmVyKS5mb3JFYWNoKChjb250YWluZXIpID0+IHtcclxuICBjb25zdCBsb2dvSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgbG9nb0ltZy5zcmMgPSBsb2dvO1xyXG4gIGxvZ29JbWcuY2xhc3NMaXN0LmFkZCgnaGVyb19fbG9nbycpO1xyXG4gIGxvZ29JbWcuYWx0ID0gJ1l1bW15IFJlY2lwZXMgTG9nbyc7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29JbWcpO1xyXG59KTtcclxuXHJcbmNvbnN0IGFzeW5jRW52ID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBNZWFsQVBJLmdldENhdGVnb3JpZXMoKTtcclxuICBVc2VySW50ZXJmYWNlLmRpc3BsYXlDYXRlZ29yaWVzKGNhdGVnb3JpZXMpO1xyXG4gIE1lbnUuZGlzcGxheUNhdGVnb3JpZXMoY2F0ZWdvcmllcyk7XHJcbiAgVXNlckludGVyZmFjZS5jb3VudGVyVGV4dCgnQ2F0ZWdvcmllcycpO1xyXG59O1xyXG5cclxuYXN5bmNFbnYoKTtcclxuXHJcbmNvbnN0IExJU1QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdCcpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xyXG4gIGNvbnN0IGNsaWNrZWRFbGVtZW50ID0gZS50YXJnZXQ7XHJcblxyXG4gIGlmIChjbGlja2VkRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtdG9nZ2xlJykpIHtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbm9TY3JvbGwnKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51JykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgfVxyXG5cclxuICBpZiAoY2xpY2tlZEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXRlZ29yeV9faW1hZ2UnKSkge1xyXG4gICAgY29uc3QgY2F0ZWdvcnlOYW1lID0gY2xpY2tlZEVsZW1lbnQucGFyZW50Tm9kZS5jaGlsZHJlblsxXS5pbm5lclRleHQ7XHJcbiAgICBMSVNULmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IE1lYWxBUEkuZ2V0QnlDYXRlZ29yeShjYXRlZ29yeU5hbWUpO1xyXG4gICAgY29uc3QgYWxsTGlrZXMgPSBhd2FpdCBJbnZvbHZlbWVudEFQSS5nZXRBbGxMaWtlcygpO1xyXG4gICAgY29uc3QgY3VycmVudENhdGVnb3J5ID0gbmV3IEN1cnJlbnRDYXRlZ29yeShjYXRlZ29yaWVzKTtcclxuICAgIFVzZXJJbnRlcmZhY2UuZGlzcGxheVJlY2lwZXMoY3VycmVudENhdGVnb3J5Lm1lYWxzLCBhbGxMaWtlcyk7XHJcbiAgICBVc2VySW50ZXJmYWNlLmNvdW50ZXJUZXh0KCdSZWNpcGVzJyk7XHJcbiAgfVxyXG5cclxuICBpZiAoY2xpY2tlZEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51X19pdGVtJykpIHtcclxuICAgIGNvbnN0IGNhdGVnb3J5TmFtZSA9IGNsaWNrZWRFbGVtZW50LmNoaWxkcmVuWzFdLmlubmVyVGV4dDtcclxuICAgIExJU1QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgTWVhbEFQSS5nZXRCeUNhdGVnb3J5KGNhdGVnb3J5TmFtZSk7XHJcbiAgICBjb25zdCBhbGxMaWtlcyA9IGF3YWl0IEludm9sdmVtZW50QVBJLmdldEFsbExpa2VzKCk7XHJcbiAgICBjb25zdCBjdXJyZW50Q2F0ZWdvcnkgPSBuZXcgQ3VycmVudENhdGVnb3J5KGNhdGVnb3JpZXMpO1xyXG4gICAgVXNlckludGVyZmFjZS5kaXNwbGF5UmVjaXBlcyhjdXJyZW50Q2F0ZWdvcnkubWVhbHMsIGFsbExpa2VzKTtcclxuICAgIFVzZXJJbnRlcmZhY2UuY291bnRlclRleHQoJ0NhdGVnb3JpZXMnKTtcclxuICB9XHJcblxyXG4gIGlmIChjbGlja2VkRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2hlcm9fX2xvZ28nKSkge1xyXG4gICAgTElTVC5pbm5lckhUTUwgPSAnJztcclxuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBNZWFsQVBJLmdldENhdGVnb3JpZXMoKTtcclxuICAgIFVzZXJJbnRlcmZhY2UuZGlzcGxheUNhdGVnb3JpZXMoY2F0ZWdvcmllcyk7XHJcbiAgICBVc2VySW50ZXJmYWNlLmNvdW50ZXJUZXh0KCdDYXRlZ29yaWVzJyk7XHJcbiAgfVxyXG5cclxuICBpZiAoY2xpY2tlZEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1oZWFydCcpKSB7XHJcbiAgICBjb25zdCBjYXJkID0gY2xpY2tlZEVsZW1lbnQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCBtZWFsSWQgPSBjYXJkLmdldEF0dHJpYnV0ZSgnaWQnKTtcclxuICAgIGF3YWl0IEludm9sdmVtZW50QVBJLmFkZExpa2UobWVhbElkKTtcclxuICAgIFVzZXJJbnRlcmZhY2UuYWRkVG9MaWtlc0NvdW50ZXJET00oY2FyZCk7XHJcbiAgfVxyXG5cclxuICBpZiAoY2xpY2tlZEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZWNpcGVzX19jb21tZW50cycpKSB7XHJcbiAgICBjb25zdCBjYXJkID0gY2xpY2tlZEVsZW1lbnQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gICAgY29uc3QgbWVhbElkID0gY2FyZC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XHJcbiAgICBjb25zdCBtZWFsID0gYXdhaXQgTWVhbEFQSS5nZXRSZWNpcGUobWVhbElkKTtcclxuXHJcbiAgICBhd2FpdCBJbnZvbHZlbWVudEFQSS5hZGRDb21tZW50KFxyXG4gICAgICB7IHVzZXJuYW1lOiAnJywgY29tbWVudDogJycgfSxcclxuICAgICAgbWVhbElkLFxyXG4gICAgKTtcclxuXHJcbiAgICBsZXQgY29tbWVudHMgPSBhd2FpdCBJbnZvbHZlbWVudEFQSS5nZXRDb21tZW50cyhtZWFsSWQpO1xyXG5cclxuICAgIGNvbW1lbnRzID0gY29tbWVudHMuZmlsdGVyKChjb21tZW50KSA9PiBjb21tZW50LnVzZXJuYW1lICE9PSAnJyk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudE1lYWwgPSBuZXcgQ3VycmVudE1lYWwobWVhbCwgY29tbWVudHMpO1xyXG5cclxuICAgIFBvcFVwLnBvcCh7XHJcbiAgICAgIC4uLmN1cnJlbnRNZWFsLFxyXG4gICAgICBjb21tZW50cyxcclxuICAgICAgdHlwZTogJ1JlY2lwZScsXHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=