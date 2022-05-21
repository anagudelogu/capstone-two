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
___CSS_LOADER_EXPORT___.push([module.id, "::-webkit-scrollbar {\r\n  width: 8px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n  background: rgb(241, 241, 241, 0.2);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: rgb(168, 168, 168);\r\n}\r\n\r\n:root {\r\n  --dark-green: hsl(121, 31%, 44%);\r\n  --green: hsl(108, 35%, 60%);\r\n  --light-green: hsl(68, 59%, 85%);\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: rgb(139, 139, 139);\r\n}\r\n\r\nhtml {\r\n  box-sizing: border-box;\r\n  font-family: 'Mukta', sans-serif;\r\n}\r\n\r\nbody.noScroll {\r\n  overflow: hidden;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 1rem;\r\n}\r\n\r\na,\r\na:hover,\r\na:focus,\r\na:active {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\nul,\r\nli {\r\n  list-style: none;\r\n  padding: 0%;\r\n  margin: 0%;\r\n}\r\n\r\n.navbar {\r\n  height: 50px;\r\n  padding: 10px 32px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n  align-items: center;\r\n  background-color: var(--dark-green);\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n}\r\n\r\nspan.image {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.hero__logo {\r\n  width: 160px;\r\n}\r\n\r\n.navbar__logo .hero__logo {\r\n  width: 32px;\r\n}\r\n\r\n.navbar__recipes {\r\n  display: none;\r\n  font-size: 2rem;\r\n}\r\n\r\n.menu {\r\n  position: fixed;\r\n  top: 50px;\r\n  left: 0;\r\n  background-color: var(--dark-green);\r\n  width: 100%;\r\n  height: calc(100vh - 80px);\r\n  padding: 40px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  transform: translateX(100%);\r\n  overflow-y: auto;\r\n  transition: all 0.5s ease;\r\n}\r\n\r\n.menu.active {\r\n  transform: translateX(0);\r\n}\r\n\r\n.menu__categories {\r\n  font-size: 1.4rem;\r\n  width: 100% !important;\r\n  height: 40px;\r\n  border-bottom: solid 1px black;\r\n  text-align: center;\r\n  margin: 0 auto 12px;\r\n  color: white;\r\n}\r\n\r\n.menu__list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.menu__item {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 32px;\r\n  padding: 12px;\r\n  border-bottom: 1px solid black;\r\n  color: white;\r\n}\r\n\r\n.menu__item img {\r\n  width: 50%;\r\n  max-width: 80px;\r\n}\r\n\r\n.menu__item span {\r\n  font-size: 1.2rem;\r\n  width: 50%;\r\n  text-align: left;\r\n}\r\n\r\n.fa-solid {\r\n  color: white;\r\n}\r\n\r\n.landing {\r\n  margin: 50px auto;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 40px;\r\n}\r\n\r\n.hero.hidden {\r\n  display: none;\r\n}\r\n\r\n.landing__counter.counter {\r\n  width: 80%;\r\n  font-size: 1.3rem;\r\n  margin-top: 20px;\r\n}\r\n\r\n.hero {\r\n  height: calc(100vh - 80px);\r\n  width: 100%;\r\n  margin-inline: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 32px;\r\n  background-color: rgb(245, 244, 244);\r\n  box-shadow: 0 10px 20px rgba(145, 145, 145, 0.699);\r\n  border-bottom: 1px double lightblue;\r\n}\r\n\r\nspan > i.menu-toggle.hidden {\r\n  display: none;\r\n}\r\n\r\nspan > i.menu-toggle {\r\n  display: block;\r\n}\r\n\r\n.hero__title {\r\n  font-size: 2rem;\r\n}\r\n\r\n.hero__description {\r\n  padding: 12px;\r\n  border: 1px solid rgb(194, 196, 197);\r\n  background-color: white;\r\n}\r\n\r\n.counter {\r\n  width: 320px;\r\n  padding: 0 8px;\r\n  align-self: center;\r\n}\r\n\r\n.list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  list-style: none;\r\n  gap: 24px;\r\n  padding: 8px;\r\n}\r\n\r\n.category__card {\r\n  background-color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n  cursor: pointer;\r\n}\r\n\r\n.category__image {\r\n  width: 100%;\r\n}\r\n\r\n.category__content {\r\n  width: 100%;\r\n  padding-inline: 20px;\r\n}\r\n\r\n.category__header {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.category__title {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.recipes {\r\n  margin: 0 auto;\r\n  width: 90%;\r\n}\r\n\r\n.recipes__card {\r\n  display: flex;\r\n  margin: 1.5%;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n  border-radius: 12px;\r\n}\r\n\r\n.recipes__image {\r\n  width: 100%;\r\n  border-radius: 12px 12px 0 0;\r\n}\r\n\r\n.recipes__content {\r\n  width: 100%;\r\n  padding-inline: 20px;\r\n}\r\n\r\n.recipes__header {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.recipes__title {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.recipes__likes {\r\n  display: block;\r\n  margin-top: -10px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.fa-heart {\r\n  cursor: pointer;\r\n}\r\n\r\n.recipes__comments {\r\n  display: block;\r\n  width: 70%;\r\n  margin: 10px auto;\r\n  padding: 5px 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.recipes__popup {\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 7.5% 10%;\r\n  position: fixed;\r\n  background-color: white;\r\n  backdrop-filter: blur(2px);\r\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n  top: 0%;\r\n  left: 0%;\r\n  overflow-y: auto;\r\n  border-radius: 10px;\r\n}\r\n\r\n.recipes__popup_image {\r\n  width: 100%;\r\n}\r\n\r\n.recipes__popup .fa-xmark {\r\n  color: white;\r\n  background-color: black;\r\n  padding: 6px 8px;\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n}\r\n\r\n.recipes__popup_title {\r\n  padding: 4%;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.recipes__popup_tags {\r\n  width: 90%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 10px;\r\n  margin: 0 auto 16px;\r\n}\r\n\r\n.recipes__popup_tagLi {\r\n  text-align: center;\r\n  font-size: 0.8rem;\r\n  min-width: 50px;\r\n  padding: 1px 6px;\r\n  background-color: var(--green);\r\n  border: 1px solid var(--dark-green);\r\n  border-radius: 10px;\r\n}\r\n\r\n.recipes__popup_instructs {\r\n  padding: 8%;\r\n  max-height: 60%;\r\n  overflow: auto;\r\n  background-color: var(--light-green);\r\n}\r\n\r\n.popup__instructs_line {\r\n  margin-top: 16px;\r\n  list-style: decimal;\r\n  font-size: 0.9rem;\r\n  line-height: 1.5rem;\r\n}\r\n\r\n.recipes__popup_video {\r\n  margin: 16px auto;\r\n  display: block;\r\n  text-align: center;\r\n}\r\n\r\n.recipes__popup_video a {\r\n  color: rgb(49, 80, 255);\r\n}\r\n\r\ndiv.recipes__popup_comments {\r\n  padding: 4%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.recipes__popup_comment-count {\r\n  display: block;\r\n  text-align: center;\r\n  font-size: 1.3rem;\r\n  font-weight: bold;\r\n}\r\n\r\nul.recipes__popup_comments {\r\n  background-color: var(--light-green);\r\n  border: 1px solid var(--dark-green);\r\n  border-radius: 5px;\r\n  max-height: 216px;\r\n  overflow-y: auto;\r\n  margin: 20px 0;\r\n}\r\n\r\n.recipes__popup_comment {\r\n  display: grid;\r\n  grid-template-rows: 1fr 1fr;\r\n  grid-template-columns: 1fr 1fr;\r\n  align-items: center;\r\n  padding: 3px 8px;\r\n}\r\n\r\n.recipes__popup_comment:nth-child(even) {\r\n  background-color: var(--green);\r\n}\r\n\r\n.recipes__popup_comment-date {\r\n  grid-area: 1/2/2/3;\r\n  text-align: right;\r\n}\r\n\r\n.recipes__popup_comment-user {\r\n  grid-area: 1/1/2/2;\r\n}\r\n\r\n.recipes__popup_comment-content {\r\n  grid-area: 2/1/3/3;\r\n  padding: 3px 12px;\r\n}\r\n\r\n.recipes__popup_input-user {\r\n  width: 100%;\r\n  margin-top: 12px;\r\n  padding: 4px;\r\n  font-family: inherit;\r\n  outline: none;\r\n  border: 2px solid var(--green);\r\n  border-radius: 5px;\r\n}\r\n\r\n.recipes__popup_input-user:focus {\r\n  border: 2px solid var(--dark-green);\r\n}\r\n\r\n.recipes__popup_input-comment {\r\n  width: 100%;\r\n  margin: 12px 0;\r\n  padding: 4px;\r\n  font-family: inherit;\r\n  max-height: 200px;\r\n  min-height: 80px;\r\n  resize: vertical;\r\n  outline: none;\r\n  border: 2px solid var(--green);\r\n  border-radius: 5px;\r\n}\r\n\r\n.recipes__popup_input-comment:focus {\r\n  border: 2px solid var(--dark-green);\r\n}\r\n\r\n.recipes__popup_input-submit {\r\n  display: block;\r\n  width: auto;\r\n  padding: 6px 16px;\r\n  margin-inline: auto;\r\n  outline: none;\r\n  border: 2px solid var(--light-green);\r\n  border-radius: 5px;\r\n  color: var(--light-green);\r\n  background-color: black;\r\n  transition: all 0.3s;\r\n  cursor: pointer;\r\n}\r\n\r\n.recipes__popup_input-submit:hover {\r\n  border: 2px solid var(--dark-green);\r\n  transform: scale(1.1);\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  position: fixed;\r\n  top: calc(100% - 30px);\r\n  width: 100%;\r\n  padding: 8px;\r\n  height: 30px;\r\n  background-color: var(--dark-green);\r\n}\r\n\r\n.license-rights {\r\n  font-size: 10px;\r\n}\r\n\r\n.mobile_visible {\r\n  display: unset;\r\n}\r\n\r\n.desktop_visible {\r\n  display: none;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .navbar {\r\n    height: 70px;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .menu {\r\n    width: 32%;\r\n    transform: translateX(100vw);\r\n  }\r\n\r\n  .menu.active {\r\n    transform: translateX(70vw);\r\n  }\r\n\r\n  .menu-toggle {\r\n    color: white !important;\r\n    font-size: 1.3rem !important;\r\n  }\r\n\r\n  .menu__categories {\r\n    width: 100% !important;\r\n  }\r\n\r\n  .landing {\r\n    margin-top: 70px;\r\n    gap: 20px;\r\n  }\r\n\r\n  .landing__counter {\r\n    width: 80%;\r\n    font-size: 1.69rem;\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .navbar__recipes {\r\n    display: block;\r\n  }\r\n\r\n  .navbar__hamburger {\r\n    display: none;\r\n  }\r\n\r\n  .license-rights {\r\n    font-size: 14px;\r\n  }\r\n\r\n  .recipes {\r\n    margin-top: 100px;\r\n    justify-content: flex-start;\r\n    margin-bottom: 100px;\r\n  }\r\n\r\n  .list {\r\n    justify-content: center;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .category__card {\r\n    border-radius: 6px;\r\n  }\r\n\r\n  .category__image {\r\n    border-radius: 6px 6px 0 0;\r\n  }\r\n\r\n  .recipes__card {\r\n    width: 20%;\r\n    min-width: 180px;\r\n    max-width: 200px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    height: 385px;\r\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n    border-radius: 12px;\r\n  }\r\n\r\n  .recipes__image {\r\n    width: 100%;\r\n    border-radius: 12px 12px 0 0;\r\n  }\r\n\r\n  .recipes__content {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    padding-inline: 20px;\r\n  }\r\n\r\n  .recipes__header {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-start;\r\n    margin-top: 8px;\r\n  }\r\n\r\n  .recipes__title {\r\n    font-size: 0.95rem;\r\n    line-height: 1.15rem;\r\n    max-width: 130px;\r\n    align-self: center;\r\n  }\r\n\r\n  .recipes__likes {\r\n    display: block;\r\n    margin: 10px 0;\r\n  }\r\n\r\n  .recipes__comments {\r\n    display: block;\r\n    width: 70%;\r\n    margin: 10px auto;\r\n    padding: 5px 10px;\r\n  }\r\n\r\n  .recipes__comments:last-of-type {\r\n    margin-top: auto;\r\n  }\r\n\r\n  .recipes__popup {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  div.recipes__popup_comments {\r\n    padding: 8px;\r\n    width: 80%;\r\n  }\r\n\r\n  .recipes__popup_image {\r\n    width: 50%;\r\n    align-self: center;\r\n  }\r\n\r\n  .recipes__popup_instructs {\r\n    min-height: 300px;\r\n    padding: 40px;\r\n  }\r\n\r\n  .popup__instructs_line {\r\n    font-size: 1.1rem;\r\n  }\r\n\r\n  .mobile_visible {\r\n    display: none;\r\n  }\r\n\r\n  .desktop_visible {\r\n    display: unset;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Mukta');\r\n\r\n::-webkit-scrollbar {\r\n  width: 8px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n  background: rgb(241, 241, 241, 0.2);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: rgb(168, 168, 168);\r\n}\r\n\r\n:root {\r\n  --dark-green: hsl(121, 31%, 44%);\r\n  --green: hsl(108, 35%, 60%);\r\n  --light-green: hsl(68, 59%, 85%);\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: rgb(139, 139, 139);\r\n}\r\n\r\nhtml {\r\n  box-sizing: border-box;\r\n  font-family: 'Mukta', sans-serif;\r\n}\r\n\r\nbody.noScroll {\r\n  overflow: hidden;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 1rem;\r\n}\r\n\r\na,\r\na:hover,\r\na:focus,\r\na:active {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\nul,\r\nli {\r\n  list-style: none;\r\n  padding: 0%;\r\n  margin: 0%;\r\n}\r\n\r\n.navbar {\r\n  height: 50px;\r\n  padding: 10px 32px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n  align-items: center;\r\n  background-color: var(--dark-green);\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n}\r\n\r\nspan.image {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.hero__logo {\r\n  width: 160px;\r\n}\r\n\r\n.navbar__logo .hero__logo {\r\n  width: 32px;\r\n}\r\n\r\n.navbar__recipes {\r\n  display: none;\r\n  font-size: 2rem;\r\n}\r\n\r\n.menu {\r\n  position: fixed;\r\n  top: 50px;\r\n  left: 0;\r\n  background-color: var(--dark-green);\r\n  width: 100%;\r\n  height: calc(100vh - 80px);\r\n  padding: 40px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  transform: translateX(100%);\r\n  overflow-y: auto;\r\n  transition: all 0.5s ease;\r\n}\r\n\r\n.menu.active {\r\n  transform: translateX(0);\r\n}\r\n\r\n.menu__categories {\r\n  font-size: 1.4rem;\r\n  width: 100% !important;\r\n  height: 40px;\r\n  border-bottom: solid 1px black;\r\n  text-align: center;\r\n  margin: 0 auto 12px;\r\n  color: white;\r\n}\r\n\r\n.menu__list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.menu__item {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 32px;\r\n  padding: 12px;\r\n  border-bottom: 1px solid black;\r\n  color: white;\r\n}\r\n\r\n.menu__item img {\r\n  width: 50%;\r\n  max-width: 80px;\r\n}\r\n\r\n.menu__item span {\r\n  font-size: 1.2rem;\r\n  width: 50%;\r\n  text-align: left;\r\n}\r\n\r\n.fa-solid {\r\n  color: white;\r\n}\r\n\r\n.landing {\r\n  margin: 50px auto;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 40px;\r\n}\r\n\r\n.hero.hidden {\r\n  display: none;\r\n}\r\n\r\n.landing__counter.counter {\r\n  width: 80%;\r\n  font-size: 1.3rem;\r\n  margin-top: 20px;\r\n}\r\n\r\n.hero {\r\n  height: calc(100vh - 80px);\r\n  width: 100%;\r\n  margin-inline: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 32px;\r\n  background-color: rgb(245, 244, 244);\r\n  box-shadow: 0 10px 20px rgba(145, 145, 145, 0.699);\r\n  border-bottom: 1px double lightblue;\r\n}\r\n\r\nspan > i.menu-toggle.hidden {\r\n  display: none;\r\n}\r\n\r\nspan > i.menu-toggle {\r\n  display: block;\r\n}\r\n\r\n.hero__title {\r\n  font-size: 2rem;\r\n}\r\n\r\n.hero__description {\r\n  padding: 12px;\r\n  border: 1px solid rgb(194, 196, 197);\r\n  background-color: white;\r\n}\r\n\r\n.counter {\r\n  width: 320px;\r\n  padding: 0 8px;\r\n  align-self: center;\r\n}\r\n\r\n.list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  list-style: none;\r\n  gap: 24px;\r\n  padding: 8px;\r\n}\r\n\r\n.category__card {\r\n  background-color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n  cursor: pointer;\r\n}\r\n\r\n.category__image {\r\n  width: 100%;\r\n}\r\n\r\n.category__content {\r\n  width: 100%;\r\n  padding-inline: 20px;\r\n}\r\n\r\n.category__header {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.category__title {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.recipes {\r\n  margin: 0 auto;\r\n  width: 90%;\r\n}\r\n\r\n.recipes__card {\r\n  display: flex;\r\n  margin: 1.5%;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n  border-radius: 12px;\r\n}\r\n\r\n.recipes__image {\r\n  width: 100%;\r\n  border-radius: 12px 12px 0 0;\r\n}\r\n\r\n.recipes__content {\r\n  width: 100%;\r\n  padding-inline: 20px;\r\n}\r\n\r\n.recipes__header {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.recipes__title {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.recipes__likes {\r\n  display: block;\r\n  margin-top: -10px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.fa-heart {\r\n  cursor: pointer;\r\n}\r\n\r\n.recipes__comments {\r\n  display: block;\r\n  width: 70%;\r\n  margin: 10px auto;\r\n  padding: 5px 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.recipes__popup {\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 7.5% 10%;\r\n  position: fixed;\r\n  background-color: white;\r\n  backdrop-filter: blur(2px);\r\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n  top: 0%;\r\n  left: 0%;\r\n  overflow-y: auto;\r\n  border-radius: 10px;\r\n}\r\n\r\n.recipes__popup_image {\r\n  width: 100%;\r\n}\r\n\r\n.recipes__popup .fa-xmark {\r\n  color: white;\r\n  background-color: black;\r\n  padding: 6px 8px;\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n}\r\n\r\n.recipes__popup_title {\r\n  padding: 4%;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.recipes__popup_tags {\r\n  width: 90%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 10px;\r\n  margin: 0 auto 16px;\r\n}\r\n\r\n.recipes__popup_tagLi {\r\n  text-align: center;\r\n  font-size: 0.8rem;\r\n  min-width: 50px;\r\n  padding: 1px 6px;\r\n  background-color: var(--green);\r\n  border: 1px solid var(--dark-green);\r\n  border-radius: 10px;\r\n}\r\n\r\n.recipes__popup_instructs {\r\n  padding: 8%;\r\n  max-height: 60%;\r\n  overflow: auto;\r\n  background-color: var(--light-green);\r\n}\r\n\r\n.popup__instructs_line {\r\n  margin-top: 16px;\r\n  list-style: decimal;\r\n  font-size: 0.9rem;\r\n  line-height: 1.5rem;\r\n}\r\n\r\n.recipes__popup_video {\r\n  margin: 16px auto;\r\n  display: block;\r\n  text-align: center;\r\n}\r\n\r\n.recipes__popup_video a {\r\n  color: rgb(49, 80, 255);\r\n}\r\n\r\ndiv.recipes__popup_comments {\r\n  padding: 4%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.recipes__popup_comment-count {\r\n  display: block;\r\n  text-align: center;\r\n  font-size: 1.3rem;\r\n  font-weight: bold;\r\n}\r\n\r\nul.recipes__popup_comments {\r\n  background-color: var(--light-green);\r\n  border: 1px solid var(--dark-green);\r\n  border-radius: 5px;\r\n  max-height: 216px;\r\n  overflow-y: auto;\r\n  margin: 20px 0;\r\n}\r\n\r\n.recipes__popup_comment {\r\n  display: grid;\r\n  grid-template-rows: 1fr 1fr;\r\n  grid-template-columns: 1fr 1fr;\r\n  align-items: center;\r\n  padding: 3px 8px;\r\n}\r\n\r\n.recipes__popup_comment:nth-child(even) {\r\n  background-color: var(--green);\r\n}\r\n\r\n.recipes__popup_comment-date {\r\n  grid-area: 1/2/2/3;\r\n  text-align: right;\r\n}\r\n\r\n.recipes__popup_comment-user {\r\n  grid-area: 1/1/2/2;\r\n}\r\n\r\n.recipes__popup_comment-content {\r\n  grid-area: 2/1/3/3;\r\n  padding: 3px 12px;\r\n}\r\n\r\n.recipes__popup_input-user {\r\n  width: 100%;\r\n  margin-top: 12px;\r\n  padding: 4px;\r\n  font-family: inherit;\r\n  outline: none;\r\n  border: 2px solid var(--green);\r\n  border-radius: 5px;\r\n}\r\n\r\n.recipes__popup_input-user:focus {\r\n  border: 2px solid var(--dark-green);\r\n}\r\n\r\n.recipes__popup_input-comment {\r\n  width: 100%;\r\n  margin: 12px 0;\r\n  padding: 4px;\r\n  font-family: inherit;\r\n  max-height: 200px;\r\n  min-height: 80px;\r\n  resize: vertical;\r\n  outline: none;\r\n  border: 2px solid var(--green);\r\n  border-radius: 5px;\r\n}\r\n\r\n.recipes__popup_input-comment:focus {\r\n  border: 2px solid var(--dark-green);\r\n}\r\n\r\n.recipes__popup_input-submit {\r\n  display: block;\r\n  width: auto;\r\n  padding: 6px 16px;\r\n  margin-inline: auto;\r\n  outline: none;\r\n  border: 2px solid var(--light-green);\r\n  border-radius: 5px;\r\n  color: var(--light-green);\r\n  background-color: black;\r\n  transition: all 0.3s;\r\n  cursor: pointer;\r\n}\r\n\r\n.recipes__popup_input-submit:hover {\r\n  border: 2px solid var(--dark-green);\r\n  transform: scale(1.1);\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  position: fixed;\r\n  top: calc(100% - 30px);\r\n  width: 100%;\r\n  padding: 8px;\r\n  height: 30px;\r\n  background-color: var(--dark-green);\r\n}\r\n\r\n.license-rights {\r\n  font-size: 10px;\r\n}\r\n\r\n.mobile_visible {\r\n  display: unset;\r\n}\r\n\r\n.desktop_visible {\r\n  display: none;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .navbar {\r\n    height: 70px;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .menu {\r\n    width: 32%;\r\n    transform: translateX(100vw);\r\n  }\r\n\r\n  .menu.active {\r\n    transform: translateX(70vw);\r\n  }\r\n\r\n  .menu-toggle {\r\n    color: white !important;\r\n    font-size: 1.3rem !important;\r\n  }\r\n\r\n  .menu__categories {\r\n    width: 100% !important;\r\n  }\r\n\r\n  .landing {\r\n    margin-top: 70px;\r\n    gap: 20px;\r\n  }\r\n\r\n  .landing__counter {\r\n    width: 80%;\r\n    font-size: 1.69rem;\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .navbar__recipes {\r\n    display: block;\r\n  }\r\n\r\n  .navbar__hamburger {\r\n    display: none;\r\n  }\r\n\r\n  .license-rights {\r\n    font-size: 14px;\r\n  }\r\n\r\n  .recipes {\r\n    margin-top: 100px;\r\n    justify-content: flex-start;\r\n    margin-bottom: 100px;\r\n  }\r\n\r\n  .list {\r\n    justify-content: center;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .category__card {\r\n    border-radius: 6px;\r\n  }\r\n\r\n  .category__image {\r\n    border-radius: 6px 6px 0 0;\r\n  }\r\n\r\n  .recipes__card {\r\n    width: 20%;\r\n    min-width: 180px;\r\n    max-width: 200px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    height: 385px;\r\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n    border-radius: 12px;\r\n  }\r\n\r\n  .recipes__image {\r\n    width: 100%;\r\n    border-radius: 12px 12px 0 0;\r\n  }\r\n\r\n  .recipes__content {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    padding-inline: 20px;\r\n  }\r\n\r\n  .recipes__header {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-start;\r\n    margin-top: 8px;\r\n  }\r\n\r\n  .recipes__title {\r\n    font-size: 0.95rem;\r\n    line-height: 1.15rem;\r\n    max-width: 130px;\r\n    align-self: center;\r\n  }\r\n\r\n  .recipes__likes {\r\n    display: block;\r\n    margin: 10px 0;\r\n  }\r\n\r\n  .recipes__comments {\r\n    display: block;\r\n    width: 70%;\r\n    margin: 10px auto;\r\n    padding: 5px 10px;\r\n  }\r\n\r\n  .recipes__comments:last-of-type {\r\n    margin-top: auto;\r\n  }\r\n\r\n  .recipes__popup {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  div.recipes__popup_comments {\r\n    padding: 8px;\r\n    width: 80%;\r\n  }\r\n\r\n  .recipes__popup_image {\r\n    width: 50%;\r\n    align-self: center;\r\n  }\r\n\r\n  .recipes__popup_instructs {\r\n    min-height: 300px;\r\n    padding: 40px;\r\n  }\r\n\r\n  .popup__instructs_line {\r\n    font-size: 1.1rem;\r\n  }\r\n\r\n  .mobile_visible {\r\n    display: none;\r\n  }\r\n\r\n  .desktop_visible {\r\n    display: unset;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.css */ "./src/index.css");
/* harmony import */ var _assets_burger_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/burger-logo.png */ "./src/assets/burger-logo.png");
/* harmony import */ var _userInterface_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userInterface.js */ "./src/modules/userInterface.js");
/* harmony import */ var _mealAPI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mealAPI.js */ "./src/modules/mealAPI.js");
/* harmony import */ var _currentCategory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./currentCategory.js */ "./src/modules/currentCategory.js");
/* harmony import */ var _currentMeal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./currentMeal.js */ "./src/modules/currentMeal.js");
/* harmony import */ var _involvementAPI_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./involvementAPI.js */ "./src/modules/involvementAPI.js");
/* harmony import */ var _popUp_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popUp.js */ "./src/modules/popUp.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu.js */ "./src/modules/menu.js");










class App {
  start() {
    this.imageContainer = document.querySelectorAll('.image');
    this.asyncEnv();
  }

  setLogo() {
    Array.from(this.imageContainer).forEach((container) => {
      const logoImg = new Image();
      logoImg.src = _assets_burger_logo_png__WEBPACK_IMPORTED_MODULE_1__;
      logoImg.classList.add('hero__logo');
      logoImg.alt = 'Yummy Recipes Logo';
      container.appendChild(logoImg);
    });
  }

  async asyncEnv() {
    this.setLogo();
    const categories = await _mealAPI_js__WEBPACK_IMPORTED_MODULE_3__["default"].getCategories();
    _menu_js__WEBPACK_IMPORTED_MODULE_8__["default"].displayCategories(categories);
    _userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].displayCategories(categories);
    _userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].counterText('Categories');
    this.selectTags();
    this.setListeners();
  }

  goBackToCommonParent = (node, a) => {
    if (node.getAttribute(a.type).includes(a.item)
        !== node.parentNode.getAttribute(a.type).includes(a.item)
    ) return node;
    return this.goBackToCommonParent(node.parentNode, a);
  };

  static toggleMenu() {
    document.body.classList.toggle('noScroll');
    document.querySelector('.menu').classList.toggle('active');
    document.querySelectorAll('.menu-toggle').forEach((icon) => {
      icon.classList.toggle('hidden');
    });
  }

  static closeMenu() {
    document.body.classList.remove('noScroll');
    document.querySelector('.menu').classList.remove('active');
    document.querySelector('.hero').classList.remove('hidden');
    const [burger, close] = document.querySelectorAll('span > i.menu-toggle');
    burger.classList.remove('hidden');
    close.classList.add('hidden');
  }

  static hideLanding() {
    document.querySelector('.hero').classList.add('hidden');
  }

  selectCategory = async (clickedElement) => {
    const parent = this.goBackToCommonParent(
      clickedElement,
      { type: 'class', item: 'category' },
    );
    const categoryName = parent.children[1].innerText;
    this.LIST.innerHTML = '';
    const category = await _mealAPI_js__WEBPACK_IMPORTED_MODULE_3__["default"].getByCategory(categoryName);
    const allLikes = await _involvementAPI_js__WEBPACK_IMPORTED_MODULE_6__["default"].getAllLikes();
    const currentCategory = new _currentCategory_js__WEBPACK_IMPORTED_MODULE_4__["default"](category);
    _userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].displayRecipes(currentCategory.meals, allLikes);
    _userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].counterText(`${categoryName} Recipes`);
    window.scrollTo(0, 0);
    App.hideLanding();
  }

  menuLoadCategories = async (clickedElement) => {
    const parent = this.goBackToCommonParent(
      clickedElement,
      { type: 'class', item: 'menu__item' },
    );
    const categoryName = parent.children[1].innerText;
    this.LIST.innerHTML = '';
    const categories = await _mealAPI_js__WEBPACK_IMPORTED_MODULE_3__["default"].getByCategory(categoryName);
    const allLikes = await _involvementAPI_js__WEBPACK_IMPORTED_MODULE_6__["default"].getAllLikes();
    const currentCategory = new _currentCategory_js__WEBPACK_IMPORTED_MODULE_4__["default"](categories);
    _userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].displayRecipes(currentCategory.meals, allLikes);
    _userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].counterText(`${categoryName} Recipes`);
    window.scrollTo(0, 0);
    App.hideLanding();
    App.toggleMenu();
  }

  logoLoadCategories = async () => {
    this.LIST.innerHTML = '';
    const categories = await _mealAPI_js__WEBPACK_IMPORTED_MODULE_3__["default"].getCategories();
    _userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].displayCategories(categories);
    _userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].counterText('Categories');
    App.closeMenu();
  }

  addLike = async (clickedElement) => {
    const card = clickedElement.parentNode.parentNode.parentNode;
    const mealId = card.getAttribute('id');
    await _involvementAPI_js__WEBPACK_IMPORTED_MODULE_6__["default"].addLike(mealId);
    _userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].addToLikesCounterDOM(card);
  }

  loadPopup = async (clickedElement) => {
    const card = clickedElement.parentNode.parentNode;
    const mealId = card.getAttribute('id');
    const meal = await _mealAPI_js__WEBPACK_IMPORTED_MODULE_3__["default"].getRecipe(mealId);
    document.body.classList.add('noScroll');

    await _involvementAPI_js__WEBPACK_IMPORTED_MODULE_6__["default"].addComment(
      { username: '', comment: '' },
      mealId,
    );

    let comments = await _involvementAPI_js__WEBPACK_IMPORTED_MODULE_6__["default"].getComments(mealId);
    comments = comments.filter((comment) => comment.username !== '');
    const currentMeal = new _currentMeal_js__WEBPACK_IMPORTED_MODULE_5__["default"](meal, comments);

    _popUp_js__WEBPACK_IMPORTED_MODULE_7__["default"].pop({
      ...currentMeal,
      comments,
      type: 'Recipe',
    });
  }

  static forEachListener(items, func) {
    items.forEach((item) => {
      item.addEventListener('click', (e) => {
        func(e.target);
      });
    });
  }

  setListeners() {
    App.forEachListener(this.menuToggler, App.toggleMenu);
    App.forEachListener(this.menuItems, this.menuLoadCategories);
    App.forEachListener(this.heroLogos, this.logoLoadCategories);

    this.LIST.addEventListener('click', (e) => {
      const clickedElement = e.target;

      if (clickedElement.getAttribute('class').includes('category')) {
        this.selectCategory(clickedElement);
        return;
      }

      if (clickedElement.classList.contains('fa-heart')) {
        this.addLike(clickedElement);
        return;
      }

      if (clickedElement.classList.contains('recipes__comments')) {
        this.loadPopup(clickedElement);
      }
    });
  }

  selectTags() {
    this.menuToggler = document.querySelectorAll('.menu-toggle');
    this.menuItems = document.querySelectorAll('.menu__item');
    this.heroLogos = document.querySelectorAll('.hero__logo');
    this.LIST = document.querySelector('.list');
  }
}

const app = new App();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);

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

  strTags;

  strYoutube;

  comments;

  constructor(currentMeal, comments = []) {
    this.idMeal = currentMeal.idMeal;
    this.strMeal = currentMeal.strMeal;
    this.strMealThumb = currentMeal.strMealThumb;
    this.strInstructions = currentMeal.strInstructions;
    this.strTags = currentMeal.strTags;
    this.strYoutube = currentMeal.strYoutube;
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
    LI.innerHTML = `
      <img class="menu__item__img" src="${strCategoryThumb}" alt="Category ${strCategory}">
      <span class="menu__item__category">${strCategory}</span>`;
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

    const tags = PopUp.tagsTemplate(this.data.strTags);
    const commentSection = PopUp.commentsTemplate();
    const instructs = PopUp.instructionsTemplate(this.data.strInstructions);

    container.innerHTML = `
      <img class="recipes__popup_image" src="${this.data.strMealThumb}" alt="Delicious ${this.data.strMeal}">
      <i class="fa-solid fa-xmark"></i>
      <h2 class="recipes__popup_title">${this.data.strMeal}</h2>
      <ul class="recipes__popup_tags">${tags}</ul>
      <ul class="recipes__popup_instructs">${instructs}</ul>
      <span class="recipes__popup_video">Watch a <a href="${this.data.strYoutube}">Video</a> here</span>
      ${commentSection}
    `;

    container.querySelector('i').addEventListener('click', () => {
      document.body.classList.remove('noScroll');
      container.remove();
    });

    if (this.data.type === 'Recipe') {
      const user = container.querySelector('input');
      const comment = container.querySelector('textarea');
      const submit = container.querySelector('button');
      const ulContainer = container.querySelector(
        '.recipes__popup_comments ul',
      );

      submit.addEventListener('click', async () => {
        if (user.value === '' || comment.value === '') return;
        const inputComment = {
          username: user.value,
          comment: comment.value,
        };
        PopUp.createCommentOnDOM(
          user,
          comment,
          ulContainer,
          inputComment,
        );
        await _involvementAPI_js__WEBPACK_IMPORTED_MODULE_0__["default"].addComment(
          inputComment,
          this.data.idMeal,
        );
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
          <span class="recipes__popup_comment-user">
            <i class="fa-regular fa-user"></i>
            ${data.username}
          </span>
          <span class="recipes__popup_comment-date">
          <i class="fa-regular fa-calendar"></i>
            ${day}-${month}-${year}
          </span>
          <span class="recipes__popup_comment-content">
            ${data.comment}
          </span>
        </li>
      `;
  }

  static commentsTemplate() {
    let comments = '';
    this.data.comments.forEach((comment) => {
      comments += PopUp.displayComment(comment);
    });
    return `
      <div class="recipes__popup_comments">
        <span class="recipes__popup_comment-count">Comments (${this.data.comments.length})</span>
        <input type="text" class="recipes__popup_input-user" placeholder="Username" tabindex=0></input>
        <textarea class="recipes__popup_input-comment" placeholder="Write your comment" tabindex=0></textarea>
        <button class="recipes__popup_input-submit" type="button" tabindex=0>Add Comment</button>
        <ul class="recipes__popup_comments">${comments}</ul>
      </div>
    `;
  }

  static createCommentOnDOM(user, comment, container, inputComment) {
    const [day, month, year] = new Date()
      .toLocaleDateString()
      .split('/');
    const li = PopUp.displayComment({
      ...inputComment,
      creation_date: `${year}-${month < 10 ? '0' : ''}${month}-${
        day < 10 ? '0' : ''
      }${day}`,
    });
    container.innerHTML += li;
  }

  static commentCountAdd(container) {
    this.commentCount += 1;
    const commentsNum = this.data.comments.length + this.commentCount;
    container.querySelector(
      '.recipes__popup_comment-count',
    ).innerHTML = `Comments (${commentsNum})`;
    return commentsNum;
  }

  static instructionsTemplate(instructs) {
    let newInstructs = '';
    instructs.split(/\r?\n/).forEach((line) => {
      newInstructs += `<li class="popup__instructs_line">${line}</li>`;
    });
    return newInstructs;
  }

  static tagsTemplate(tags) {
    if (!tags) return '';
    let tagsUl = '';
    tags.split(',').forEach((tag) => {
      tagsUl += `<li class="recipes__popup_tagLi">${tag}</li>`;
    });
    return tagsUl;
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
    let i = 0;
    counters.forEach((counter) => {
      counter.innerHTML = `${i < 1 ? 'Categories' : type} (${this.itemCount(
        counter.nextElementSibling,
      )})`;
      i += 1;
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
/* harmony import */ var _modules_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/app.js */ "./src/modules/app.js");


_modules_app_js__WEBPACK_IMPORTED_MODULE_0__["default"].start();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8s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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7OztBQ0FtQzs7QUFFbkMsNkRBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vc3JjL21vZHVsZXMvYXBwLmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL3NyYy9tb2R1bGVzL2N1cnJlbnRDYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9zcmMvbW9kdWxlcy9jdXJyZW50TWVhbC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9zcmMvbW9kdWxlcy9mZXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vc3JjL21vZHVsZXMvaW52b2x2ZW1lbnRBUEkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vc3JjL21vZHVsZXMvbWVhbEFQSS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL3NyYy9tb2R1bGVzL3BvcFVwLmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL3NyYy9tb2R1bGVzL3VzZXJJbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NhcHN0b25lLXR3by93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NhcHN0b25lLXR3by93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2NhcHN0b25lLXR3by93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NhcHN0b25lLXR3by93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NhcHN0b25lLXR3by93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU11a3RhKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigyNDEsIDI0MSwgMjQxLCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigxNjgsIDE2OCwgMTY4KTtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1kYXJrLWdyZWVuOiBoc2woMTIxLCAzMSUsIDQ0JSk7XFxyXFxuICAtLWdyZWVuOiBoc2woMTA4LCAzNSUsIDYwJSk7XFxyXFxuICAtLWxpZ2h0LWdyZWVuOiBoc2woNjgsIDU5JSwgODUlKTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMTM5LCAxMzksIDEzOSk7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTXVrdGEnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5Lm5vU2Nyb2xsIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5hLFxcclxcbmE6aG92ZXIsXFxyXFxuYTpmb2N1cyxcXHJcXG5hOmFjdGl2ZSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxudWwsXFxyXFxubGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDAlO1xcclxcbiAgbWFyZ2luOiAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDMycHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JlZW4pO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbnNwYW4uaW1hZ2Uge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm9fX2xvZ28ge1xcclxcbiAgd2lkdGg6IDE2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyX19sb2dvIC5oZXJvX19sb2dvIHtcXHJcXG4gIHdpZHRoOiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyX19yZWNpcGVzIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTBweDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZWVuKTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XFxyXFxuICBwYWRkaW5nOiA0MHB4IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS5hY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9fY2F0ZWdvcmllcyB7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggYmxhY2s7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDAgYXV0byAxMnB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9fbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfX2l0ZW0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAzMnB4O1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfX2l0ZW0gaW1nIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBtYXgtd2lkdGg6IDgwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51X19pdGVtIHNwYW4ge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXNvbGlkIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhbmRpbmcge1xcclxcbiAgbWFyZ2luOiA1MHB4IGF1dG87XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5sYW5kaW5nX19jb3VudGVyLmNvdW50ZXIge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8ge1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMzJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NCwgMjQ0KTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMTQ1LCAxNDUsIDE0NSwgMC42OTkpO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdWJsZSBsaWdodGJsdWU7XFxyXFxufVxcclxcblxcclxcbnNwYW4gPiBpLm1lbnUtdG9nZ2xlLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuID4gaS5tZW51LXRvZ2dsZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm9fX3RpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm9fX2Rlc2NyaXB0aW9uIHtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTk0LCAxOTYsIDE5Nyk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvdW50ZXIge1xcclxcbiAgd2lkdGg6IDMyMHB4O1xcclxcbiAgcGFkZGluZzogMCA4cHg7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZ2FwOiAyNHB4O1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnlfX2NhcmQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yeV9faW1hZ2Uge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yeV9fY29udGVudCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnlfX2hlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yeV9fdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzIHtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX2NhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbjogMS41JTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX2ltYWdlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX2NvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nLWlubGluZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX2hlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlc19fdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19saWtlcyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWhlYXJ0IHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX2NvbW1lbnRzIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19wb3B1cCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcGFkZGluZzogNy41JSAxMCU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcclxcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcXHJcXG4gIHRvcDogMCU7XFxyXFxuICBsZWZ0OiAwJTtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlc19fcG9wdXBfaW1hZ2Uge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19wb3B1cCAuZmEteG1hcmsge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBwYWRkaW5nOiA2cHggOHB4O1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19wb3B1cF90aXRsZSB7XFxyXFxuICBwYWRkaW5nOiA0JTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlc19fcG9wdXBfdGFncyB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvIDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19wb3B1cF90YWdMaSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIG1pbi13aWR0aDogNTBweDtcXHJcXG4gIHBhZGRpbmc6IDFweCA2cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWdyZWVuKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19wb3B1cF9pbnN0cnVjdHMge1xcclxcbiAgcGFkZGluZzogOCU7XFxyXFxuICBtYXgtaGVpZ2h0OiA2MCU7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwX19pbnN0cnVjdHNfbGluZSB7XFxyXFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcclxcbiAgbGlzdC1zdHlsZTogZGVjaW1hbDtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX3BvcHVwX3ZpZGVvIHtcXHJcXG4gIG1hcmdpbjogMTZweCBhdXRvO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19wb3B1cF92aWRlbyBhIHtcXHJcXG4gIGNvbG9yOiByZ2IoNDksIDgwLCAyNTUpO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYucmVjaXBlc19fcG9wdXBfY29tbWVudHMge1xcclxcbiAgcGFkZGluZzogNCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX3BvcHVwX2NvbW1lbnQtY291bnQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG51bC5yZWNpcGVzX19wb3B1cF9jb21tZW50cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmVlbik7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWdyZWVuKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIG1heC1oZWlnaHQ6IDIxNnB4O1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIG1hcmdpbjogMjBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlc19fcG9wdXBfY29tbWVudCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDNweCA4cHg7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19wb3B1cF9jb21tZW50Om50aC1jaGlsZChldmVuKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19wb3B1cF9jb21tZW50LWRhdGUge1xcclxcbiAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19wb3B1cF9jb21tZW50LXVzZXIge1xcclxcbiAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlc19fcG9wdXBfY29tbWVudC1jb250ZW50IHtcXHJcXG4gIGdyaWQtYXJlYTogMi8xLzMvMztcXHJcXG4gIHBhZGRpbmc6IDNweCAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlc19fcG9wdXBfaW5wdXQtdXNlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxyXFxuICBwYWRkaW5nOiA0cHg7XFxyXFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ncmVlbik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19wb3B1cF9pbnB1dC11c2VyOmZvY3VzIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRhcmstZ3JlZW4pO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlc19fcG9wdXBfaW5wdXQtY29tbWVudCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMTJweCAwO1xcclxcbiAgcGFkZGluZzogNHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICBtYXgtaGVpZ2h0OiAyMDBweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDgwcHg7XFxyXFxuICByZXNpemU6IHZlcnRpY2FsO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdyZWVuKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX3BvcHVwX2lucHV0LWNvbW1lbnQ6Zm9jdXMge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGFyay1ncmVlbik7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19wb3B1cF9pbnB1dC1zdWJtaXQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDZweCAxNnB4O1xcclxcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1saWdodC1ncmVlbik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JlZW4pO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX3BvcHVwX2lucHV0LXN1Ym1pdDpob3ZlciB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrLWdyZWVuKTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiBjYWxjKDEwMCUgLSAzMHB4KTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmVlbik7XFxyXFxufVxcclxcblxcclxcbi5saWNlbnNlLXJpZ2h0cyB7XFxyXFxuICBmb250LXNpemU6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGVfdmlzaWJsZSB7XFxyXFxuICBkaXNwbGF5OiB1bnNldDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2t0b3BfdmlzaWJsZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm5hdmJhciB7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnUge1xcclxcbiAgICB3aWR0aDogMzIlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwdncpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnUuYWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDcwdncpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnUtdG9nZ2xlIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudV9fY2F0ZWdvcmllcyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGFuZGluZyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDcwcHg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sYW5kaW5nX19jb3VudGVyIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjY5cmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdmJhcl9fcmVjaXBlcyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdmJhcl9faGFtYnVyZ2VyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5saWNlbnNlLXJpZ2h0cyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGlzdCB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXRlZ29yeV9fY2FyZCB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXRlZ29yeV9faW1hZ2Uge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDAgMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzX19jYXJkIHtcXHJcXG4gICAgd2lkdGg6IDIwJTtcXHJcXG4gICAgbWluLXdpZHRoOiAxODBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDM4NXB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJlY2lwZXNfX2ltYWdlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwIDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVjaXBlc19fY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVjaXBlc19faGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzX190aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTVyZW07XFxyXFxuICAgIG1heC13aWR0aDogMTMwcHg7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzX19saWtlcyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW46IDEwcHggMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzX19jb21tZW50cyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbiAgICBtYXJnaW46IDEwcHggYXV0bztcXHJcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVjaXBlc19fY29tbWVudHM6bGFzdC1vZi10eXBlIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzX19wb3B1cCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICBkaXYucmVjaXBlc19fcG9wdXBfY29tbWVudHMge1xcclxcbiAgICBwYWRkaW5nOiA4cHg7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVjaXBlc19fcG9wdXBfaW1hZ2Uge1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVjaXBlc19fcG9wdXBfaW5zdHJ1Y3RzIHtcXHJcXG4gICAgbWluLWhlaWdodDogMzAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wdXBfX2luc3RydWN0c19saW5lIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9iaWxlX3Zpc2libGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmRlc2t0b3BfdmlzaWJsZSB7XFxyXFxuICAgIGRpc3BsYXk6IHVuc2V0O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDJCQUEyQjtFQUMzQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7RUFHRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBOzs7O0VBSUUscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxVQUFVO0FBQ1o7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RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7SUFDVixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsY0FBYztFQUNoQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU11a3RhJyk7XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigyNDEsIDI0MSwgMjQxLCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigxNjgsIDE2OCwgMTY4KTtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1kYXJrLWdyZWVuOiBoc2woMTIxLCAzMSUsIDQ0JSk7XFxyXFxuICAtLWdyZWVuOiBoc2woMTA4LCAzNSUsIDYwJSk7XFxyXFxuICAtLWxpZ2h0LWdyZWVuOiBoc2woNjgsIDU5JSwgODUlKTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMTM5LCAxMzksIDEzOSk7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTXVrdGEnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5Lm5vU2Nyb2xsIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5hLFxcclxcbmE6aG92ZXIsXFxyXFxuYTpmb2N1cyxcXHJcXG5hOmFjdGl2ZSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxudWwsXFxyXFxubGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDAlO1xcclxcbiAgbWFyZ2luOiAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDMycHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JlZW4pO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbnNwYW4uaW1hZ2Uge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm9fX2xvZ28ge1xcclxcbiAgd2lkdGg6IDE2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyX19sb2dvIC5oZXJvX19sb2dvIHtcXHJcXG4gIHdpZHRoOiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyX19yZWNpcGVzIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTBweDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZWVuKTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XFxyXFxuICBwYWRkaW5nOiA0MHB4IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS5hY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9fY2F0ZWdvcmllcyB7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggYmxhY2s7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDAgYXV0byAxMnB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9fbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfX2l0ZW0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAzMnB4O1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfX2l0ZW0gaW1nIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBtYXgtd2lkdGg6IDgwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51X19pdGVtIHNwYW4ge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXNvbGlkIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhbmRpbmcge1xcclxcbiAgbWFyZ2luOiA1MHB4IGF1dG87XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5sYW5kaW5nX19jb3VudGVyLmNvdW50ZXIge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8ge1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMzJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NCwgMjQ0KTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMTQ1LCAxNDUsIDE0NSwgMC42OTkpO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdWJsZSBsaWdodGJsdWU7XFxyXFxufVxcclxcblxcclxcbnNwYW4gPiBpLm1lbnUtdG9nZ2xlLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuID4gaS5tZW51LXRvZ2dsZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm9fX3RpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm9fX2Rlc2NyaXB0aW9uIHtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTk0LCAxOTYsIDE5Nyk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvdW50ZXIge1xcclxcbiAgd2lkdGg6IDMyMHB4O1xcclxcbiAgcGFkZGluZzogMCA4cHg7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZ2FwOiAyNHB4O1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnlfX2NhcmQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yeV9faW1hZ2Uge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yeV9fY29udGVudCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnlfX2hlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yeV9fdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzIHtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX2NhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbjogMS41JTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX2ltYWdlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX2NvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nLWlubGluZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX2hlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlc19fdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19saWtlcyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWhlYXJ0IHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX2NvbW1lbnRzIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19wb3B1cCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcGFkZGluZzogNy41JSAxMCU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcclxcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcXHJcXG4gIHRvcDogMCU7XFxyXFxuICBsZWZ0OiAwJTtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlc19fcG9wdXBfaW1hZ2Uge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19wb3B1cCAuZmEteG1hcmsge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBwYWRkaW5nOiA2cHggOHB4O1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19wb3B1cF90aXRsZSB7XFxyXFxuICBwYWRkaW5nOiA0JTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlc19fcG9wdXBfdGFncyB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvIDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19wb3B1cF90YWdMaSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIG1pbi13aWR0aDogNTBweDtcXHJcXG4gIHBhZGRpbmc6IDFweCA2cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWdyZWVuKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19wb3B1cF9pbnN0cnVjdHMge1xcclxcbiAgcGFkZGluZzogOCU7XFxyXFxuICBtYXgtaGVpZ2h0OiA2MCU7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwX19pbnN0cnVjdHNfbGluZSB7XFxyXFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcclxcbiAgbGlzdC1zdHlsZTogZGVjaW1hbDtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX3BvcHVwX3ZpZGVvIHtcXHJcXG4gIG1hcmdpbjogMTZweCBhdXRvO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19wb3B1cF92aWRlbyBhIHtcXHJcXG4gIGNvbG9yOiByZ2IoNDksIDgwLCAyNTUpO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYucmVjaXBlc19fcG9wdXBfY29tbWVudHMge1xcclxcbiAgcGFkZGluZzogNCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX3BvcHVwX2NvbW1lbnQtY291bnQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG51bC5yZWNpcGVzX19wb3B1cF9jb21tZW50cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmVlbik7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWdyZWVuKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIG1heC1oZWlnaHQ6IDIxNnB4O1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIG1hcmdpbjogMjBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlc19fcG9wdXBfY29tbWVudCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDNweCA4cHg7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19wb3B1cF9jb21tZW50Om50aC1jaGlsZChldmVuKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19wb3B1cF9jb21tZW50LWRhdGUge1xcclxcbiAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19wb3B1cF9jb21tZW50LXVzZXIge1xcclxcbiAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlc19fcG9wdXBfY29tbWVudC1jb250ZW50IHtcXHJcXG4gIGdyaWQtYXJlYTogMi8xLzMvMztcXHJcXG4gIHBhZGRpbmc6IDNweCAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlc19fcG9wdXBfaW5wdXQtdXNlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxyXFxuICBwYWRkaW5nOiA0cHg7XFxyXFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ncmVlbik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19wb3B1cF9pbnB1dC11c2VyOmZvY3VzIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRhcmstZ3JlZW4pO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlc19fcG9wdXBfaW5wdXQtY29tbWVudCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMTJweCAwO1xcclxcbiAgcGFkZGluZzogNHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICBtYXgtaGVpZ2h0OiAyMDBweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDgwcHg7XFxyXFxuICByZXNpemU6IHZlcnRpY2FsO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdyZWVuKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX3BvcHVwX2lucHV0LWNvbW1lbnQ6Zm9jdXMge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGFyay1ncmVlbik7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19wb3B1cF9pbnB1dC1zdWJtaXQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDZweCAxNnB4O1xcclxcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1saWdodC1ncmVlbik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JlZW4pO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX3BvcHVwX2lucHV0LXN1Ym1pdDpob3ZlciB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrLWdyZWVuKTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiBjYWxjKDEwMCUgLSAzMHB4KTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmVlbik7XFxyXFxufVxcclxcblxcclxcbi5saWNlbnNlLXJpZ2h0cyB7XFxyXFxuICBmb250LXNpemU6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb2JpbGVfdmlzaWJsZSB7XFxyXFxuICBkaXNwbGF5OiB1bnNldDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2t0b3BfdmlzaWJsZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm5hdmJhciB7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnUge1xcclxcbiAgICB3aWR0aDogMzIlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwdncpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnUuYWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDcwdncpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnUtdG9nZ2xlIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudV9fY2F0ZWdvcmllcyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGFuZGluZyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDcwcHg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sYW5kaW5nX19jb3VudGVyIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjY5cmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdmJhcl9fcmVjaXBlcyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdmJhcl9faGFtYnVyZ2VyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5saWNlbnNlLXJpZ2h0cyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGlzdCB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXRlZ29yeV9fY2FyZCB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXRlZ29yeV9faW1hZ2Uge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDAgMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzX19jYXJkIHtcXHJcXG4gICAgd2lkdGg6IDIwJTtcXHJcXG4gICAgbWluLXdpZHRoOiAxODBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDM4NXB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJlY2lwZXNfX2ltYWdlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwIDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVjaXBlc19fY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVjaXBlc19faGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzX190aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTVyZW07XFxyXFxuICAgIG1heC13aWR0aDogMTMwcHg7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzX19saWtlcyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW46IDEwcHggMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzX19jb21tZW50cyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbiAgICBtYXJnaW46IDEwcHggYXV0bztcXHJcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVjaXBlc19fY29tbWVudHM6bGFzdC1vZi10eXBlIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzX19wb3B1cCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICBkaXYucmVjaXBlc19fcG9wdXBfY29tbWVudHMge1xcclxcbiAgICBwYWRkaW5nOiA4cHg7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVjaXBlc19fcG9wdXBfaW1hZ2Uge1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVjaXBlc19fcG9wdXBfaW5zdHJ1Y3RzIHtcXHJcXG4gICAgbWluLWhlaWdodDogMzAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wdXBfX2luc3RydWN0c19saW5lIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9iaWxlX3Zpc2libGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmRlc2t0b3BfdmlzaWJsZSB7XFxyXFxuICAgIGRpc3BsYXk6IHVuc2V0O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi4vaW5kZXguY3NzJztcbmltcG9ydCBsb2dvIGZyb20gJy4uL2Fzc2V0cy9idXJnZXItbG9nby5wbmcnO1xuaW1wb3J0IFVzZXJJbnRlcmZhY2UgZnJvbSAnLi91c2VySW50ZXJmYWNlLmpzJztcbmltcG9ydCBNZWFsQVBJIGZyb20gJy4vbWVhbEFQSS5qcyc7XG5pbXBvcnQgQ3VycmVudENhdGVnb3J5IGZyb20gJy4vY3VycmVudENhdGVnb3J5LmpzJztcbmltcG9ydCBDdXJyZW50TWVhbCBmcm9tICcuL2N1cnJlbnRNZWFsLmpzJztcbmltcG9ydCBJbnZvbHZlbWVudEFQSSBmcm9tICcuL2ludm9sdmVtZW50QVBJLmpzJztcbmltcG9ydCBQb3BVcCBmcm9tICcuL3BvcFVwLmpzJztcbmltcG9ydCBNZW51IGZyb20gJy4vbWVudS5qcyc7XG5cbmNsYXNzIEFwcCB7XG4gIHN0YXJ0KCkge1xuICAgIHRoaXMuaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW1hZ2UnKTtcbiAgICB0aGlzLmFzeW5jRW52KCk7XG4gIH1cblxuICBzZXRMb2dvKCkge1xuICAgIEFycmF5LmZyb20odGhpcy5pbWFnZUNvbnRhaW5lcikuZm9yRWFjaCgoY29udGFpbmVyKSA9PiB7XG4gICAgICBjb25zdCBsb2dvSW1nID0gbmV3IEltYWdlKCk7XG4gICAgICBsb2dvSW1nLnNyYyA9IGxvZ287XG4gICAgICBsb2dvSW1nLmNsYXNzTGlzdC5hZGQoJ2hlcm9fX2xvZ28nKTtcbiAgICAgIGxvZ29JbWcuYWx0ID0gJ1l1bW15IFJlY2lwZXMgTG9nbyc7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobG9nb0ltZyk7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBhc3luY0VudigpIHtcbiAgICB0aGlzLnNldExvZ28oKTtcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgTWVhbEFQSS5nZXRDYXRlZ29yaWVzKCk7XG4gICAgTWVudS5kaXNwbGF5Q2F0ZWdvcmllcyhjYXRlZ29yaWVzKTtcbiAgICBVc2VySW50ZXJmYWNlLmRpc3BsYXlDYXRlZ29yaWVzKGNhdGVnb3JpZXMpO1xuICAgIFVzZXJJbnRlcmZhY2UuY291bnRlclRleHQoJ0NhdGVnb3JpZXMnKTtcbiAgICB0aGlzLnNlbGVjdFRhZ3MoKTtcbiAgICB0aGlzLnNldExpc3RlbmVycygpO1xuICB9XG5cbiAgZ29CYWNrVG9Db21tb25QYXJlbnQgPSAobm9kZSwgYSkgPT4ge1xuICAgIGlmIChub2RlLmdldEF0dHJpYnV0ZShhLnR5cGUpLmluY2x1ZGVzKGEuaXRlbSlcbiAgICAgICAgIT09IG5vZGUucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoYS50eXBlKS5pbmNsdWRlcyhhLml0ZW0pXG4gICAgKSByZXR1cm4gbm9kZTtcbiAgICByZXR1cm4gdGhpcy5nb0JhY2tUb0NvbW1vblBhcmVudChub2RlLnBhcmVudE5vZGUsIGEpO1xuICB9O1xuXG4gIHN0YXRpYyB0b2dnbGVNZW51KCkge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbm9TY3JvbGwnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LXRvZ2dsZScpLmZvckVhY2goKGljb24pID0+IHtcbiAgICAgIGljb24uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgY2xvc2VNZW51KCkge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm9TY3JvbGwnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgY29uc3QgW2J1cmdlciwgY2xvc2VdID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3BhbiA+IGkubWVudS10b2dnbGUnKTtcbiAgICBidXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIH1cblxuICBzdGF0aWMgaGlkZUxhbmRpbmcoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8nKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgfVxuXG4gIHNlbGVjdENhdGVnb3J5ID0gYXN5bmMgKGNsaWNrZWRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5nb0JhY2tUb0NvbW1vblBhcmVudChcbiAgICAgIGNsaWNrZWRFbGVtZW50LFxuICAgICAgeyB0eXBlOiAnY2xhc3MnLCBpdGVtOiAnY2F0ZWdvcnknIH0sXG4gICAgKTtcbiAgICBjb25zdCBjYXRlZ29yeU5hbWUgPSBwYXJlbnQuY2hpbGRyZW5bMV0uaW5uZXJUZXh0O1xuICAgIHRoaXMuTElTVC5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCBjYXRlZ29yeSA9IGF3YWl0IE1lYWxBUEkuZ2V0QnlDYXRlZ29yeShjYXRlZ29yeU5hbWUpO1xuICAgIGNvbnN0IGFsbExpa2VzID0gYXdhaXQgSW52b2x2ZW1lbnRBUEkuZ2V0QWxsTGlrZXMoKTtcbiAgICBjb25zdCBjdXJyZW50Q2F0ZWdvcnkgPSBuZXcgQ3VycmVudENhdGVnb3J5KGNhdGVnb3J5KTtcbiAgICBVc2VySW50ZXJmYWNlLmRpc3BsYXlSZWNpcGVzKGN1cnJlbnRDYXRlZ29yeS5tZWFscywgYWxsTGlrZXMpO1xuICAgIFVzZXJJbnRlcmZhY2UuY291bnRlclRleHQoYCR7Y2F0ZWdvcnlOYW1lfSBSZWNpcGVzYCk7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIEFwcC5oaWRlTGFuZGluZygpO1xuICB9XG5cbiAgbWVudUxvYWRDYXRlZ29yaWVzID0gYXN5bmMgKGNsaWNrZWRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5nb0JhY2tUb0NvbW1vblBhcmVudChcbiAgICAgIGNsaWNrZWRFbGVtZW50LFxuICAgICAgeyB0eXBlOiAnY2xhc3MnLCBpdGVtOiAnbWVudV9faXRlbScgfSxcbiAgICApO1xuICAgIGNvbnN0IGNhdGVnb3J5TmFtZSA9IHBhcmVudC5jaGlsZHJlblsxXS5pbm5lclRleHQ7XG4gICAgdGhpcy5MSVNULmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBNZWFsQVBJLmdldEJ5Q2F0ZWdvcnkoY2F0ZWdvcnlOYW1lKTtcbiAgICBjb25zdCBhbGxMaWtlcyA9IGF3YWl0IEludm9sdmVtZW50QVBJLmdldEFsbExpa2VzKCk7XG4gICAgY29uc3QgY3VycmVudENhdGVnb3J5ID0gbmV3IEN1cnJlbnRDYXRlZ29yeShjYXRlZ29yaWVzKTtcbiAgICBVc2VySW50ZXJmYWNlLmRpc3BsYXlSZWNpcGVzKGN1cnJlbnRDYXRlZ29yeS5tZWFscywgYWxsTGlrZXMpO1xuICAgIFVzZXJJbnRlcmZhY2UuY291bnRlclRleHQoYCR7Y2F0ZWdvcnlOYW1lfSBSZWNpcGVzYCk7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIEFwcC5oaWRlTGFuZGluZygpO1xuICAgIEFwcC50b2dnbGVNZW51KCk7XG4gIH1cblxuICBsb2dvTG9hZENhdGVnb3JpZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgdGhpcy5MSVNULmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBNZWFsQVBJLmdldENhdGVnb3JpZXMoKTtcbiAgICBVc2VySW50ZXJmYWNlLmRpc3BsYXlDYXRlZ29yaWVzKGNhdGVnb3JpZXMpO1xuICAgIFVzZXJJbnRlcmZhY2UuY291bnRlclRleHQoJ0NhdGVnb3JpZXMnKTtcbiAgICBBcHAuY2xvc2VNZW51KCk7XG4gIH1cblxuICBhZGRMaWtlID0gYXN5bmMgKGNsaWNrZWRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY2FyZCA9IGNsaWNrZWRFbGVtZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIGNvbnN0IG1lYWxJZCA9IGNhcmQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIGF3YWl0IEludm9sdmVtZW50QVBJLmFkZExpa2UobWVhbElkKTtcbiAgICBVc2VySW50ZXJmYWNlLmFkZFRvTGlrZXNDb3VudGVyRE9NKGNhcmQpO1xuICB9XG5cbiAgbG9hZFBvcHVwID0gYXN5bmMgKGNsaWNrZWRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY2FyZCA9IGNsaWNrZWRFbGVtZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICBjb25zdCBtZWFsSWQgPSBjYXJkLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICBjb25zdCBtZWFsID0gYXdhaXQgTWVhbEFQSS5nZXRSZWNpcGUobWVhbElkKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ25vU2Nyb2xsJyk7XG5cbiAgICBhd2FpdCBJbnZvbHZlbWVudEFQSS5hZGRDb21tZW50KFxuICAgICAgeyB1c2VybmFtZTogJycsIGNvbW1lbnQ6ICcnIH0sXG4gICAgICBtZWFsSWQsXG4gICAgKTtcblxuICAgIGxldCBjb21tZW50cyA9IGF3YWl0IEludm9sdmVtZW50QVBJLmdldENvbW1lbnRzKG1lYWxJZCk7XG4gICAgY29tbWVudHMgPSBjb21tZW50cy5maWx0ZXIoKGNvbW1lbnQpID0+IGNvbW1lbnQudXNlcm5hbWUgIT09ICcnKTtcbiAgICBjb25zdCBjdXJyZW50TWVhbCA9IG5ldyBDdXJyZW50TWVhbChtZWFsLCBjb21tZW50cyk7XG5cbiAgICBQb3BVcC5wb3Aoe1xuICAgICAgLi4uY3VycmVudE1lYWwsXG4gICAgICBjb21tZW50cyxcbiAgICAgIHR5cGU6ICdSZWNpcGUnLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZvckVhY2hMaXN0ZW5lcihpdGVtcywgZnVuYykge1xuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBmdW5jKGUudGFyZ2V0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0TGlzdGVuZXJzKCkge1xuICAgIEFwcC5mb3JFYWNoTGlzdGVuZXIodGhpcy5tZW51VG9nZ2xlciwgQXBwLnRvZ2dsZU1lbnUpO1xuICAgIEFwcC5mb3JFYWNoTGlzdGVuZXIodGhpcy5tZW51SXRlbXMsIHRoaXMubWVudUxvYWRDYXRlZ29yaWVzKTtcbiAgICBBcHAuZm9yRWFjaExpc3RlbmVyKHRoaXMuaGVyb0xvZ29zLCB0aGlzLmxvZ29Mb2FkQ2F0ZWdvcmllcyk7XG5cbiAgICB0aGlzLkxJU1QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgY2xpY2tlZEVsZW1lbnQgPSBlLnRhcmdldDtcblxuICAgICAgaWYgKGNsaWNrZWRFbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5pbmNsdWRlcygnY2F0ZWdvcnknKSkge1xuICAgICAgICB0aGlzLnNlbGVjdENhdGVnb3J5KGNsaWNrZWRFbGVtZW50KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2xpY2tlZEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1oZWFydCcpKSB7XG4gICAgICAgIHRoaXMuYWRkTGlrZShjbGlja2VkRWxlbWVudCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGNsaWNrZWRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncmVjaXBlc19fY29tbWVudHMnKSkge1xuICAgICAgICB0aGlzLmxvYWRQb3B1cChjbGlja2VkRWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3RUYWdzKCkge1xuICAgIHRoaXMubWVudVRvZ2dsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS10b2dnbGUnKTtcbiAgICB0aGlzLm1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51X19pdGVtJyk7XG4gICAgdGhpcy5oZXJvTG9nb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVyb19fbG9nbycpO1xuICAgIHRoaXMuTElTVCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Jyk7XG4gIH1cbn1cblxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuXG5leHBvcnQgZGVmYXVsdCBhcHA7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VycmVudENhdGVnb3J5IHtcbiAgbWVhbHM7XG5cbiAgY29uc3RydWN0b3IoY2F0ZWdvcnlNZWFscyA9IFtdKSB7XG4gICAgdGhpcy5tZWFscyA9IGNhdGVnb3J5TWVhbHM7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnJlbnRNZWFsIHtcbiAgaWRNZWFsO1xuXG4gIHN0ck1lYWw7XG5cbiAgc3RyTWVhbFRodW1iO1xuXG4gIHN0ckluc3RydWN0aW9ucztcblxuICBzdHJUYWdzO1xuXG4gIHN0cllvdXR1YmU7XG5cbiAgY29tbWVudHM7XG5cbiAgY29uc3RydWN0b3IoY3VycmVudE1lYWwsIGNvbW1lbnRzID0gW10pIHtcbiAgICB0aGlzLmlkTWVhbCA9IGN1cnJlbnRNZWFsLmlkTWVhbDtcbiAgICB0aGlzLnN0ck1lYWwgPSBjdXJyZW50TWVhbC5zdHJNZWFsO1xuICAgIHRoaXMuc3RyTWVhbFRodW1iID0gY3VycmVudE1lYWwuc3RyTWVhbFRodW1iO1xuICAgIHRoaXMuc3RySW5zdHJ1Y3Rpb25zID0gY3VycmVudE1lYWwuc3RySW5zdHJ1Y3Rpb25zO1xuICAgIHRoaXMuc3RyVGFncyA9IGN1cnJlbnRNZWFsLnN0clRhZ3M7XG4gICAgdGhpcy5zdHJZb3V0dWJlID0gY3VycmVudE1lYWwuc3RyWW91dHViZTtcbiAgICB0aGlzLmNvbW1lbnRzID0gY29tbWVudHM7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZldGNoUmVxdWVzdCB7XG4gIG1ldGhvZDtcblxuICBib2R5O1xuXG4gIGhlYWRlcnM7XG5cbiAgdXJsO1xuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBtZXRob2QgPSAnR0VUJyxcbiAgICBib2R5LFxuICAgIHVybCA9ICcnLFxuICAgIGhlYWRlcnMgPSB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgIH0sXG4gIH0gPSB7fSkge1xuICAgIHRoaXMubWV0aG9kID0gbWV0aG9kO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gICAgdGhpcy5oZWFkZXJzID0gaGVhZGVycztcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgfVxuXG4gIGFzeW5jIGNhbGwoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIG1ldGhvZDogdGhpcy5tZXRob2QsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRoaXMuYm9keSksXG4gICAgICAgIGhlYWRlcnM6IHRoaXMubWV0aG9kID09PSAnUE9TVCcgPyB0aGlzLmhlYWRlcnMgOiB1bmRlZmluZWQsXG4gICAgICB9O1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMudXJsLCBvcHRpb25zKTtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkgcmV0dXJuIG51bGw7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG59XG4iLCIvLyBuNEtybnhhMUd4WEhiWjM0OVVNbSBjbGVhblxuLy8ganRYRlBYTml6UnRVNXBmWjI2c1Rcbi8vIHRlc3Q6IE1CeFNKeVZROHpRenV4Qmt3YTVtXG5cbmltcG9ydCBGZXRjaFJlcXVlc3QgZnJvbSAnLi9mZXRjaFJlcXVlc3QuanMnO1xuXG5jb25zdCBhcHBJZCA9ICdqdFhGUFhOaXpSdFU1cGZaMjZzVCc7XG5jb25zdCB1cmxNQVAgPSB7XG4gIG1haW46ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nLFxuICBsaWtlczogYCR7YXBwSWR9L2xpa2VzL2AsXG4gIGNvbW1lbnRzOiBgJHthcHBJZH0vY29tbWVudHNgLFxuICBieUNvbW1lbnQ6IGAke2FwcElkfS9jb21tZW50cz9pdGVtX2lkPWAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnZvbHZlbWVudEFQSSB7XG4gIHN0YXRpYyBhc3luYyBhZGRMaWtlKG1lYWwpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmV0Y2hSZXF1ZXN0ID0gbmV3IEZldGNoUmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiB7IGl0ZW1faWQ6IG1lYWwgfSxcbiAgICAgICAgdXJsOiBgJHt1cmxNQVAubWFpbn0ke3VybE1BUC5saWtlc31gLFxuICAgICAgfSk7XG4gICAgICBhd2FpdCBmZXRjaFJlcXVlc3QuY2FsbCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRBbGxMaWtlcygpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmV0Y2hSZXF1ZXN0ID0gbmV3IEZldGNoUmVxdWVzdCh7XG4gICAgICAgIHVybDogYCR7dXJsTUFQLm1haW59JHt1cmxNQVAubGlrZXN9YCxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgYWxsTGlrZXMgPSBhd2FpdCBmZXRjaFJlcXVlc3QuY2FsbCgpO1xuICAgICAgcmV0dXJuIGFsbExpa2VzO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXRNZWFsTGlrZXMobGlrZXNBcnIsIEl0ZW1JZCkge1xuICAgIGNvbnN0IG1lYWxMaWtlcyA9IGxpa2VzQXJyLmZpbHRlcihcbiAgICAgIChtZWFsKSA9PiBtZWFsLml0ZW1faWQgPT09IEl0ZW1JZCxcbiAgICApWzBdO1xuICAgIGlmICghbWVhbExpa2VzKSByZXR1cm4gMDtcbiAgICByZXR1cm4gbWVhbExpa2VzLmxpa2VzO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGFkZENvbW1lbnQoeyB1c2VybmFtZSwgY29tbWVudCB9LCBtZWFsKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZldGNoUmVxdWVzdCA9IG5ldyBGZXRjaFJlcXVlc3Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keToge1xuICAgICAgICAgIGl0ZW1faWQ6IG1lYWwsXG4gICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgY29tbWVudCxcbiAgICAgICAgfSxcbiAgICAgICAgdXJsOiBgJHt1cmxNQVAubWFpbn0ke3VybE1BUC5jb21tZW50c31gLFxuICAgICAgfSk7XG4gICAgICBhd2FpdCBmZXRjaFJlcXVlc3QuY2FsbCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRDb21tZW50cyhtZWFsKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZldGNoUmVxdWVzdCA9IG5ldyBGZXRjaFJlcXVlc3Qoe1xuICAgICAgICB1cmw6IGAke3VybE1BUC5tYWlufSR7dXJsTUFQLmJ5Q29tbWVudH0ke21lYWx9YCxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBmZXRjaFJlcXVlc3QuY2FsbCgpO1xuICAgICAgcmV0dXJuIGNvbW1lbnRzO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IEZldGNoUmVxdWVzdCBmcm9tICcuL2ZldGNoUmVxdWVzdC5qcyc7XG5cbmNvbnN0IHVybE1hcCA9IHtcbiAgcmFuZG9tOiAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL3JhbmRvbS5waHAnLFxuICBjYXRlZ29yaWVzOlxuICAgICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvY2F0ZWdvcmllcy5waHAnLFxuICBieUNhdGVnb3J5OiAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2ZpbHRlci5waHA/Yz0nLFxuICBieU1lYWxJZDogJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9sb29rdXAucGhwP2k9Jyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lYWxBUEkge1xuICBzdGF0aWMgYXN5bmMgZ2V0UmVjaXBlKGlkKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZldGNoUmVxdWVzdCA9IG5ldyBGZXRjaFJlcXVlc3Qoe1xuICAgICAgICB1cmw6IGAke3VybE1hcC5ieU1lYWxJZH0ke2lkfWAsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaFJlcXVlc3QuY2FsbCgpO1xuICAgICAgcmV0dXJuIGRhdGEubWVhbHNbMF07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldENhdGVnb3JpZXMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZldGNoUmVxdWVzdCA9IG5ldyBGZXRjaFJlcXVlc3Qoe1xuICAgICAgICB1cmw6IHVybE1hcC5jYXRlZ29yaWVzLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgZmV0Y2hSZXF1ZXN0LmNhbGwoKTtcbiAgICAgIHJldHVybiBjYXRlZ29yaWVzLmNhdGVnb3JpZXM7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEJ5Q2F0ZWdvcnkoY2F0ZWdvcnkpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmV0Y2hSZXF1ZXN0ID0gbmV3IEZldGNoUmVxdWVzdCh7XG4gICAgICAgIHVybDogYCR7dXJsTWFwLmJ5Q2F0ZWdvcnl9JHtjYXRlZ29yeX1gLFxuICAgICAgfSk7XG4gICAgICBjb25zdCByZWNpcGVzID0gYXdhaXQgZmV0Y2hSZXF1ZXN0LmNhbGwoKTtcbiAgICAgIHJldHVybiByZWNpcGVzLm1lYWxzO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxufVxuIiwiY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fbGlzdCcpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IHtcbiAgc3RhdGljIGRpc3BsYXlDYXRlZ29yaWVzKGNhdGVnb3JpZXNBcnIpIHtcbiAgICBjYXRlZ29yaWVzQXJyLmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZURvbU1lbnVJdGVtKGNhdGVnb3J5KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVEb21NZW51SXRlbSh7XG4gICAgaWRDYXRlZ29yeSxcbiAgICBzdHJDYXRlZ29yeSxcbiAgICBzdHJDYXRlZ29yeVRodW1iLFxuICB9KSB7XG4gICAgY29uc3QgTEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIExJLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2l0ZW0nKTtcbiAgICBMSS5zZXRBdHRyaWJ1dGUoJ2lkJywgaWRDYXRlZ29yeSk7XG4gICAgTEkuaW5uZXJIVE1MID0gYFxuICAgICAgPGltZyBjbGFzcz1cIm1lbnVfX2l0ZW1fX2ltZ1wiIHNyYz1cIiR7c3RyQ2F0ZWdvcnlUaHVtYn1cIiBhbHQ9XCJDYXRlZ29yeSAke3N0ckNhdGVnb3J5fVwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJtZW51X19pdGVtX19jYXRlZ29yeVwiPiR7c3RyQ2F0ZWdvcnl9PC9zcGFuPmA7XG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQoTEkpO1xuICB9XG59XG4iLCJpbXBvcnQgSW52b2x2ZW1lbnRBUEkgZnJvbSAnLi9pbnZvbHZlbWVudEFQSS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcFVwIHtcbiAgc3RhdGljIHBvcChkYXRhKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLmNvbW1lbnRDb3VudCA9IDA7XG4gICAgdGhpcy50ZW1wbGF0ZSh0aGlzLmRhdGEudHlwZSk7XG4gIH1cblxuICBzdGF0aWMgdGVtcGxhdGUoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLmRhdGEuaWRNZWFsKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyZWNpcGVzX19wb3B1cCcpO1xuXG4gICAgY29uc3QgdGFncyA9IFBvcFVwLnRhZ3NUZW1wbGF0ZSh0aGlzLmRhdGEuc3RyVGFncyk7XG4gICAgY29uc3QgY29tbWVudFNlY3Rpb24gPSBQb3BVcC5jb21tZW50c1RlbXBsYXRlKCk7XG4gICAgY29uc3QgaW5zdHJ1Y3RzID0gUG9wVXAuaW5zdHJ1Y3Rpb25zVGVtcGxhdGUodGhpcy5kYXRhLnN0ckluc3RydWN0aW9ucyk7XG5cbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgICAgPGltZyBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2ltYWdlXCIgc3JjPVwiJHt0aGlzLmRhdGEuc3RyTWVhbFRodW1ifVwiIGFsdD1cIkRlbGljaW91cyAke3RoaXMuZGF0YS5zdHJNZWFsfVwiPlxuICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS14bWFya1wiPjwvaT5cbiAgICAgIDxoMiBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX3RpdGxlXCI+JHt0aGlzLmRhdGEuc3RyTWVhbH08L2gyPlxuICAgICAgPHVsIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfdGFnc1wiPiR7dGFnc308L3VsPlxuICAgICAgPHVsIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfaW5zdHJ1Y3RzXCI+JHtpbnN0cnVjdHN9PC91bD5cbiAgICAgIDxzcGFuIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfdmlkZW9cIj5XYXRjaCBhIDxhIGhyZWY9XCIke3RoaXMuZGF0YS5zdHJZb3V0dWJlfVwiPlZpZGVvPC9hPiBoZXJlPC9zcGFuPlxuICAgICAgJHtjb21tZW50U2VjdGlvbn1cbiAgICBgO1xuXG4gICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2knKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm9TY3JvbGwnKTtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmRhdGEudHlwZSA9PT0gJ1JlY2lwZScpIHtcbiAgICAgIGNvbnN0IHVzZXIgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICAgIGNvbnN0IGNvbW1lbnQgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKTtcbiAgICAgIGNvbnN0IHN1Ym1pdCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbiAgICAgIGNvbnN0IHVsQ29udGFpbmVyID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICcucmVjaXBlc19fcG9wdXBfY29tbWVudHMgdWwnLFxuICAgICAgKTtcblxuICAgICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAodXNlci52YWx1ZSA9PT0gJycgfHwgY29tbWVudC52YWx1ZSA9PT0gJycpIHJldHVybjtcbiAgICAgICAgY29uc3QgaW5wdXRDb21tZW50ID0ge1xuICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLnZhbHVlLFxuICAgICAgICAgIGNvbW1lbnQ6IGNvbW1lbnQudmFsdWUsXG4gICAgICAgIH07XG4gICAgICAgIFBvcFVwLmNyZWF0ZUNvbW1lbnRPbkRPTShcbiAgICAgICAgICB1c2VyLFxuICAgICAgICAgIGNvbW1lbnQsXG4gICAgICAgICAgdWxDb250YWluZXIsXG4gICAgICAgICAgaW5wdXRDb21tZW50LFxuICAgICAgICApO1xuICAgICAgICBhd2FpdCBJbnZvbHZlbWVudEFQSS5hZGRDb21tZW50KFxuICAgICAgICAgIGlucHV0Q29tbWVudCxcbiAgICAgICAgICB0aGlzLmRhdGEuaWRNZWFsLFxuICAgICAgICApO1xuICAgICAgICBQb3BVcC5jb21tZW50Q291bnRBZGQoY29udGFpbmVyKTtcbiAgICAgICAgW3VzZXIudmFsdWUsIGNvbW1lbnQudmFsdWVdID0gWycnLCAnJ107XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIH1cblxuICBzdGF0aWMgZGlzcGxheUNvbW1lbnQoZGF0YSkge1xuICAgIGNvbnN0IFt5ZWFyLCBtb250aCwgZGF5XSA9IGRhdGEuY3JlYXRpb25fZGF0ZS5zcGxpdCgnLScpO1xuICAgIHJldHVybiBgXG4gICAgICAgIDxsaSBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2NvbW1lbnRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2NvbW1lbnQtdXNlclwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLXVzZXJcIj48L2k+XG4gICAgICAgICAgICAke2RhdGEudXNlcm5hbWV9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfY29tbWVudC1kYXRlXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLWNhbGVuZGFyXCI+PC9pPlxuICAgICAgICAgICAgJHtkYXl9LSR7bW9udGh9LSR7eWVhcn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZWNpcGVzX19wb3B1cF9jb21tZW50LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICR7ZGF0YS5jb21tZW50fVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgIGA7XG4gIH1cblxuICBzdGF0aWMgY29tbWVudHNUZW1wbGF0ZSgpIHtcbiAgICBsZXQgY29tbWVudHMgPSAnJztcbiAgICB0aGlzLmRhdGEuY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgICAgY29tbWVudHMgKz0gUG9wVXAuZGlzcGxheUNvbW1lbnQoY29tbWVudCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJyZWNpcGVzX19wb3B1cF9jb21tZW50c1wiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2NvbW1lbnQtY291bnRcIj5Db21tZW50cyAoJHt0aGlzLmRhdGEuY29tbWVudHMubGVuZ3RofSk8L3NwYW4+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfaW5wdXQtdXNlclwiIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiB0YWJpbmRleD0wPjwvaW5wdXQ+XG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2lucHV0LWNvbW1lbnRcIiBwbGFjZWhvbGRlcj1cIldyaXRlIHlvdXIgY29tbWVudFwiIHRhYmluZGV4PTA+PC90ZXh0YXJlYT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2lucHV0LXN1Ym1pdFwiIHR5cGU9XCJidXR0b25cIiB0YWJpbmRleD0wPkFkZCBDb21tZW50PC9idXR0b24+XG4gICAgICAgIDx1bCBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2NvbW1lbnRzXCI+JHtjb21tZW50c308L3VsPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVDb21tZW50T25ET00odXNlciwgY29tbWVudCwgY29udGFpbmVyLCBpbnB1dENvbW1lbnQpIHtcbiAgICBjb25zdCBbZGF5LCBtb250aCwgeWVhcl0gPSBuZXcgRGF0ZSgpXG4gICAgICAudG9Mb2NhbGVEYXRlU3RyaW5nKClcbiAgICAgIC5zcGxpdCgnLycpO1xuICAgIGNvbnN0IGxpID0gUG9wVXAuZGlzcGxheUNvbW1lbnQoe1xuICAgICAgLi4uaW5wdXRDb21tZW50LFxuICAgICAgY3JlYXRpb25fZGF0ZTogYCR7eWVhcn0tJHttb250aCA8IDEwID8gJzAnIDogJyd9JHttb250aH0tJHtcbiAgICAgICAgZGF5IDwgMTAgPyAnMCcgOiAnJ1xuICAgICAgfSR7ZGF5fWAsXG4gICAgfSk7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCArPSBsaTtcbiAgfVxuXG4gIHN0YXRpYyBjb21tZW50Q291bnRBZGQoY29udGFpbmVyKSB7XG4gICAgdGhpcy5jb21tZW50Q291bnQgKz0gMTtcbiAgICBjb25zdCBjb21tZW50c051bSA9IHRoaXMuZGF0YS5jb21tZW50cy5sZW5ndGggKyB0aGlzLmNvbW1lbnRDb3VudDtcbiAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICcucmVjaXBlc19fcG9wdXBfY29tbWVudC1jb3VudCcsXG4gICAgKS5pbm5lckhUTUwgPSBgQ29tbWVudHMgKCR7Y29tbWVudHNOdW19KWA7XG4gICAgcmV0dXJuIGNvbW1lbnRzTnVtO1xuICB9XG5cbiAgc3RhdGljIGluc3RydWN0aW9uc1RlbXBsYXRlKGluc3RydWN0cykge1xuICAgIGxldCBuZXdJbnN0cnVjdHMgPSAnJztcbiAgICBpbnN0cnVjdHMuc3BsaXQoL1xccj9cXG4vKS5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgICBuZXdJbnN0cnVjdHMgKz0gYDxsaSBjbGFzcz1cInBvcHVwX19pbnN0cnVjdHNfbGluZVwiPiR7bGluZX08L2xpPmA7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld0luc3RydWN0cztcbiAgfVxuXG4gIHN0YXRpYyB0YWdzVGVtcGxhdGUodGFncykge1xuICAgIGlmICghdGFncykgcmV0dXJuICcnO1xuICAgIGxldCB0YWdzVWwgPSAnJztcbiAgICB0YWdzLnNwbGl0KCcsJykuZm9yRWFjaCgodGFnKSA9PiB7XG4gICAgICB0YWdzVWwgKz0gYDxsaSBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX3RhZ0xpXCI+JHt0YWd9PC9saT5gO1xuICAgIH0pO1xuICAgIHJldHVybiB0YWdzVWw7XG4gIH1cbn1cbiIsImltcG9ydCBJbnZvbHZlbWVudEFQSSBmcm9tICcuL2ludm9sdmVtZW50QVBJLmpzJztcblxuY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbnRlcmZhY2Uge1xuICBzdGF0aWMgZGlzcGxheVJlY2lwZXMobWVhbHNBcnIsIGxpa2VzID0gW10pIHtcbiAgICBtZWFsc0Fyci5mb3JFYWNoKChyZWNpcGUpID0+IHtcbiAgICAgIGNvbnN0IG1lYWxMaWtlcyA9IEludm9sdmVtZW50QVBJLmdldE1lYWxMaWtlcyhcbiAgICAgICAgbGlrZXMsXG4gICAgICAgIHJlY2lwZS5pZE1lYWwsXG4gICAgICApO1xuICAgICAgdGhpcy5jcmVhdGVDYXJkKHJlY2lwZSwgbWVhbExpa2VzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkaXNwbGF5Q2F0ZWdvcmllcyhjYXRlZ29yaWVzQXJyKSB7XG4gICAgY2F0ZWdvcmllc0Fyci5mb3JFYWNoKChjYXRlZ29yeSkgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVDYXRlZ29yeUNhcmQoY2F0ZWdvcnkpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUNhdGVnb3J5Q2FyZCh7XG4gICAgaWRDYXRlZ29yeSxcbiAgICBzdHJDYXRlZ29yeSxcbiAgICBzdHJDYXRlZ29yeVRodW1iLFxuICB9KSB7XG4gICAgY29uc3QgTEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIExJLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5X19jYXJkJyk7XG4gICAgTEkuc2V0QXR0cmlidXRlKCdpZCcsIGlkQ2F0ZWdvcnkpO1xuICAgIExJLmlubmVySFRNTCA9IGBcbiAgICAgIDxpbWcgY2xhc3M9XCJjYXRlZ29yeV9faW1hZ2VcIiBzcmM9XCIke3N0ckNhdGVnb3J5VGh1bWJ9XCIgYWx0PVwiRGVsaWNpb3VzICR7c3RyQ2F0ZWdvcnl9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnlfX2NvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnlfX2hlYWRlclwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJjYXRlZ29yeV9fdGl0bGVcIj4ke3N0ckNhdGVnb3J5fTwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQoTEkpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUNhcmQoXG4gICAgeyBzdHJNZWFsID0gJycsIHN0ck1lYWxUaHVtYiA9ICcnLCBpZE1lYWwgfSxcbiAgICBsaWtlcyA9IDAsXG4gICkge1xuICAgIGNvbnN0IExJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBMSS5jbGFzc0xpc3QuYWRkKCdyZWNpcGVzX19jYXJkJyk7XG4gICAgTEkuc2V0QXR0cmlidXRlKCdpZCcsIGlkTWVhbCk7XG4gICAgTEkuaW5uZXJIVE1MID0gYFxuICAgICAgPGltZyBjbGFzcz1cInJlY2lwZXNfX2ltYWdlXCIgc3JjPVwiJHtzdHJNZWFsVGh1bWJ9XCIgYWx0PVwiRGVsaWNpb3VzICR7c3RyTWVhbH1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyZWNpcGVzX19jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlY2lwZXNfX2hlYWRlclwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJyZWNpcGVzX190aXRsZVwiPiR7c3RyTWVhbH08L2gyPlxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtaGVhcnRcIj48L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZWNpcGVzX19saWtlc1wiPjxzcGFuPiR7bGlrZXN9PC9zcGFuPiBsaWtlJHtcbiAgbGlrZXMgPT09IDEgPyAnJyA6ICdzJ1xufTwvc3Bhbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicmVjaXBlc19fY29tbWVudHNcIj5Db21tZW50czwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICBsaXN0LmFwcGVuZENoaWxkKExJKTtcbiAgfVxuXG4gIHN0YXRpYyBhZGRUb0xpa2VzQ291bnRlckRPTShlbGVtZW50KSB7XG4gICAgY29uc3Qgbkxpa2VzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucmVjaXBlc19fbGlrZXMnKTtcbiAgICBjb25zdCBvbGRMaWtlcyA9ICtuTGlrZXMuY2hpbGRyZW5bMF0uaW5uZXJUZXh0O1xuICAgIGNvbnN0IG5ld0xpa2VzID0gb2xkTGlrZXMgKyAxO1xuXG4gICAgbkxpa2VzLmlubmVySFRNTCA9IGA8c3Bhbj4ke25ld0xpa2VzfTwvc3Bhbj4gbGlrZSR7XG4gICAgICBuZXdMaWtlcyA9PT0gMSA/ICcnIDogJ3MnXG4gICAgfWA7XG4gIH1cblxuICBzdGF0aWMgY291bnRlclRleHQodHlwZSkge1xuICAgIGNvbnN0IGNvdW50ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvdW50ZXInKTtcbiAgICBsZXQgaSA9IDA7XG4gICAgY291bnRlcnMuZm9yRWFjaCgoY291bnRlcikgPT4ge1xuICAgICAgY291bnRlci5pbm5lckhUTUwgPSBgJHtpIDwgMSA/ICdDYXRlZ29yaWVzJyA6IHR5cGV9ICgke3RoaXMuaXRlbUNvdW50KFxuICAgICAgICBjb3VudGVyLm5leHRFbGVtZW50U2libGluZyxcbiAgICAgICl9KWA7XG4gICAgICBpICs9IDE7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgaXRlbUNvdW50KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5jaGlsZHJlbi5sZW5ndGg7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgYXBwIGZyb20gJy4vbW9kdWxlcy9hcHAuanMnO1xuXG5hcHAuc3RhcnQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==