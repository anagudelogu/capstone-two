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
___CSS_LOADER_EXPORT___.push([module.id, "::-webkit-scrollbar {\r\n  width: 8px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n  background: rgb(241, 241, 241, 0.2);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: rgb(168, 168, 168);\r\n}\r\n\r\n:root {\r\n  --dark-green: hsl(121, 31%, 44%);\r\n  --green: hsl(108, 35%, 60%);\r\n  --light-green: hsl(68, 59%, 85%);\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: rgb(139, 139, 139);\r\n}\r\n\r\nhtml {\r\n  box-sizing: border-box;\r\n  font-family: 'Mukta', sans-serif;\r\n}\r\n\r\nbody.noScroll {\r\n  overflow: hidden;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 1rem;\r\n}\r\n\r\na,\r\na:hover,\r\na:focus,\r\na:active {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\nul,\r\nli {\r\n  list-style: none;\r\n  padding: 0%;\r\n  margin: 0%;\r\n}\r\n\r\n.navbar {\r\n  height: 50px;\r\n  padding: 10px 32px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n  align-items: center;\r\n  background-color: var(--dark-green);\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n}\r\n\r\nspan.image {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.hero__logo {\r\n  width: 160px;\r\n}\r\n\r\n.navbar__logo .hero__logo {\r\n  width: 32px;\r\n}\r\n\r\n.navbar__recipes {\r\n  display: none;\r\n  font-size: 2rem;\r\n}\r\n\r\n.navbar__hamburger :nth-child(2) {\r\n  display: none;\r\n}\r\n\r\n.menu {\r\n  position: fixed;\r\n  top: 50px;\r\n  left: 0;\r\n  background-color: var(--dark-green);\r\n  width: 100%;\r\n  height: calc(100vh - 80px);\r\n  padding: 40px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  transform: translateX(100%);\r\n  overflow-y: auto;\r\n  transition: all 0.5s ease;\r\n}\r\n\r\n.menu.active {\r\n  transform: translateX(0);\r\n}\r\n\r\n.menu__categories {\r\n  font-size: 1.4rem;\r\n  width: 100% !important;\r\n  height: 40px;\r\n  border-bottom: solid 1px black;\r\n  text-align: center;\r\n  margin: 0 auto 12px;\r\n  color: white;\r\n}\r\n\r\n.menu__list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.menu__item {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 32px;\r\n  padding: 12px;\r\n  border-bottom: 1px solid black;\r\n  color: white;\r\n}\r\n\r\n.menu__item img {\r\n  width: 50%;\r\n  max-width: 80px;\r\n}\r\n\r\n.menu__item span {\r\n  font-size: 1.2rem;\r\n  width: 50%;\r\n  text-align: left;\r\n}\r\n\r\n.fa-solid {\r\n  color: white;\r\n}\r\n\r\n.landing {\r\n  margin: 50px auto;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 40px;\r\n}\r\n\r\n.hero {\r\n  height: calc(100vh - 80px);\r\n  width: 100%;\r\n  margin-inline: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 32px;\r\n  background-color: rgb(245, 244, 244);\r\n  box-shadow: 0 10px 20px rgba(145, 145, 145, 0.699);\r\n  border-bottom: 1px double lightblue;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.hero__title {\r\n  font-size: 2rem;\r\n}\r\n\r\n.hero__description {\r\n  padding: 12px;\r\n  border: 1px solid rgb(194, 196, 197);\r\n  background-color: white;\r\n}\r\n\r\n.counter {\r\n  width: 320px;\r\n  padding: 0 8px;\r\n  align-self: center;\r\n}\r\n\r\n.list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  list-style: none;\r\n  gap: 24px;\r\n  padding: 8px;\r\n}\r\n\r\n.category__card {\r\n  background-color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n}\r\n\r\n.category__image {\r\n  width: 100%;\r\n}\r\n\r\n.category__content {\r\n  width: 100%;\r\n  padding-inline: 20px;\r\n}\r\n\r\n.category__header {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.category__title {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.recipes {\r\n  margin: 0 auto;\r\n  width: 90%;\r\n}\r\n\r\n.recipes__card {\r\n  display: flex;\r\n  margin: 1.5%;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n  border-radius: 12px;\r\n}\r\n\r\n.recipes__image {\r\n  width: 100%;\r\n  border-radius: 12px 12px 0 0;\r\n}\r\n\r\n.recipes__content {\r\n  width: 100%;\r\n  padding-inline: 20px;\r\n}\r\n\r\n.recipes__header {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.recipes__title {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.recipes__likes {\r\n  display: block;\r\n  margin-top: -10px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.recipes__comments,\r\n.recipes__reservations {\r\n  display: block;\r\n  width: 70%;\r\n  margin: 10px auto;\r\n  padding: 5px 10px;\r\n}\r\n\r\n.recipes__popup {\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 7.5% 10%;\r\n  position: fixed;\r\n  background-color: white;\r\n  backdrop-filter: blur(2px);\r\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n  top: 0%;\r\n  left: 0%;\r\n  overflow-y: auto;\r\n  border-radius: 10px;\r\n}\r\n\r\n.recipes__popup_image {\r\n  width: 100%;\r\n}\r\n\r\n.recipes__popup .fa-xmark {\r\n  color: white;\r\n  background-color: black;\r\n  padding: 6px 8px;\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n}\r\n\r\n.recipes__popup_title {\r\n  padding: 4%;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.recipes__popup_tags {\r\n  width: 90%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 10px;\r\n  margin: 0 auto 16px;\r\n}\r\n\r\n.recipes__popup_tagLi {\r\n  text-align: center;\r\n  font-size: 0.8rem;\r\n  min-width: 50px;\r\n  padding: 1px 6px;\r\n  background-color: var(--green);\r\n  border: 1px solid var(--dark-green);\r\n  border-radius: 10px;\r\n}\r\n\r\n.recipes__popup_instructs {\r\n  padding: 8%;\r\n  max-height: 60%;\r\n  overflow: auto;\r\n  background-color: var(--light-green);\r\n}\r\n\r\n.popup__instructs_line {\r\n  margin-top: 16px;\r\n  list-style: decimal;\r\n  font-size: 0.9rem;\r\n  line-height: 1.5rem;\r\n}\r\n\r\n.recipes__popup_video {\r\n  margin: 16px auto;\r\n  display: block;\r\n  text-align: center;\r\n}\r\n\r\n.recipes__popup_video a {\r\n  color: rgb(49, 80, 255);\r\n}\r\n\r\ndiv.recipes__popup_comments {\r\n  padding: 4%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.recipes__popup_comment-count {\r\n  display: block;\r\n  text-align: center;\r\n  font-size: 1.3rem;\r\n  font-weight: bold;\r\n}\r\n\r\nul.recipes__popup_comments {\r\n  background-color: var(--light-green);\r\n  border: 1px solid var(--dark-green);\r\n  border-radius: 5px;\r\n  max-height: 216px;\r\n  overflow-y: auto;\r\n  margin: 20px 0;\r\n}\r\n\r\n.recipes__popup_comment {\r\n  display: grid;\r\n  grid-template-rows: 1fr 1fr;\r\n  grid-template-columns: 1fr 1fr;\r\n  align-items: center;\r\n  padding: 3px 8px;\r\n}\r\n\r\n.recipes__popup_comment:nth-child(even) {\r\n  background-color: var(--green);\r\n}\r\n\r\n.recipes__popup_comment-date {\r\n  grid-area: 1/2/2/3;\r\n  text-align: right;\r\n}\r\n\r\n.recipes__popup_comment-user {\r\n  grid-area: 1/1/2/2;\r\n}\r\n\r\n.recipes__popup_comment-content {\r\n  grid-area: 2/1/3/3;\r\n  padding: 3px 12px;\r\n}\r\n\r\n.recipes__popup_input-user {\r\n  width: 100%;\r\n  margin-top: 12px;\r\n  padding: 4px;\r\n  font-family: inherit;\r\n  outline: none;\r\n  border: 2px solid var(--green);\r\n  border-radius: 5px;\r\n}\r\n\r\n.recipes__popup_input-user:focus {\r\n  border: 2px solid var(--dark-green);\r\n}\r\n\r\n.recipes__popup_input-comment {\r\n  width: 100%;\r\n  margin: 12px 0;\r\n  padding: 4px;\r\n  font-family: inherit;\r\n  max-height: 200px;\r\n  min-height: 80px;\r\n  resize: vertical;\r\n  outline: none;\r\n  border: 2px solid var(--green);\r\n  border-radius: 5px;\r\n}\r\n\r\n.recipes__popup_input-comment:focus {\r\n  border: 2px solid var(--dark-green);\r\n}\r\n\r\n.recipes__popup_input-submit {\r\n  display: block;\r\n  width: auto;\r\n  padding: 6px 16px;\r\n  margin-inline: auto;\r\n  outline: none;\r\n  border: 2px solid var(--light-green);\r\n  border-radius: 5px;\r\n  color: var(--light-green);\r\n  background-color: black;\r\n  transition: all 0.3s;\r\n  cursor: pointer;\r\n}\r\n\r\n.recipes__popup_input-submit:hover {\r\n  border: 2px solid var(--dark-green);\r\n  transform: scale(1.1);\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  position: fixed;\r\n  top: calc(100% - 30px);\r\n  width: 100%;\r\n  padding: 8px;\r\n  height: 30px;\r\n  background-color: var(--dark-green);\r\n}\r\n\r\n.license-rights {\r\n  font-size: 10px;\r\n}\r\n\r\n.mobile_visible {\r\n  display: unset;\r\n}\r\n\r\n.desktop_visible {\r\n  display: none;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .navbar {\r\n    height: 70px;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .menu {\r\n    width: 32%;\r\n    transform: translateX(100vw);\r\n  }\r\n  \r\n  .menu.active {\r\n    transform: translateX(70vw);\r\n  }\r\n  \r\n  .menu-toggle {\r\n    color: white !important;\r\n    font-size: 1.3rem !important;\r\n  }\r\n\r\n  .menu__categories {\r\n    width: 100% !important;\r\n  }\r\n\r\n  .landing {\r\n    margin-top: 70px;\r\n    gap: 20px;\r\n  }\r\n\r\n  .landing__counter {\r\n    width: 80%;\r\n    font-size: 1.69rem;\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .navbar__recipes {\r\n    display: block;\r\n  }\r\n\r\n  .navbar__hamburger {\r\n    display: none;\r\n  }\r\n\r\n  .license-rights {\r\n    font-size: 14px;\r\n  }\r\n\r\n  .recipes {\r\n    margin-top: 100px;\r\n    justify-content: flex-start;\r\n    margin-bottom: 100px;\r\n  }\r\n\r\n  .list {\r\n    justify-content: center;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .category__card {\r\n    border-radius: 6px;\r\n  }\r\n\r\n  .category__image {\r\n    border-radius: 6px 6px 0 0;\r\n  }\r\n\r\n  .recipes__card {\r\n    width: 20%;\r\n    min-width: 180px;\r\n    max-width: 200px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    height: 385px;\r\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n    border-radius: 12px;\r\n  }\r\n\r\n  .recipes__image {\r\n    width: 100%;\r\n    border-radius: 12px 12px 0 0;\r\n  }\r\n\r\n  .recipes__content {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    padding-inline: 20px;\r\n  }\r\n\r\n  .recipes__header {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-start;\r\n    margin-top: 8px;\r\n  }\r\n\r\n  .recipes__title {\r\n    font-size: 0.95rem;\r\n    line-height: 1.15rem;\r\n    max-width: 130px;\r\n    align-self: center;\r\n  }\r\n\r\n  .recipes__likes {\r\n    display: block;\r\n    margin: 10px 0;\r\n  }\r\n\r\n  .recipes__comments{\r\n    display: block;\r\n    width: 70%;\r\n    margin: 10px auto;\r\n    padding: 5px 10px;\r\n  }\r\n\r\n  .recipes__comments:last-of-type {\r\n    margin-top: auto;\r\n  }\r\n\r\n  .recipes__popup {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  div.recipes__popup_comments {\r\n    padding: 8px;\r\n    width: 80%;\r\n  }\r\n\r\n  .recipes__popup_image {\r\n    width: 50%;\r\n    align-self: center;\r\n  }\r\n\r\n  .recipes__popup_instructs {\r\n    min-height: 300px;\r\n    padding: 40px;\r\n  }\r\n  \r\n  .popup__instructs_line {\r\n    font-size: 1.1rem;\r\n  }\r\n\r\n  .mobile_visible {\r\n    display: none;\r\n  }\r\n\r\n  .desktop_visible {\r\n    display: unset;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Mukta');\r\n\r\n::-webkit-scrollbar {\r\n  width: 8px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n  background: rgb(241, 241, 241, 0.2);\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: rgb(168, 168, 168);\r\n}\r\n\r\n:root {\r\n  --dark-green: hsl(121, 31%, 44%);\r\n  --green: hsl(108, 35%, 60%);\r\n  --light-green: hsl(68, 59%, 85%);\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: rgb(139, 139, 139);\r\n}\r\n\r\nhtml {\r\n  box-sizing: border-box;\r\n  font-family: 'Mukta', sans-serif;\r\n}\r\n\r\nbody.noScroll {\r\n  overflow: hidden;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 1rem;\r\n}\r\n\r\na,\r\na:hover,\r\na:focus,\r\na:active {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\nul,\r\nli {\r\n  list-style: none;\r\n  padding: 0%;\r\n  margin: 0%;\r\n}\r\n\r\n.navbar {\r\n  height: 50px;\r\n  padding: 10px 32px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n  align-items: center;\r\n  background-color: var(--dark-green);\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n}\r\n\r\nspan.image {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.hero__logo {\r\n  width: 160px;\r\n}\r\n\r\n.navbar__logo .hero__logo {\r\n  width: 32px;\r\n}\r\n\r\n.navbar__recipes {\r\n  display: none;\r\n  font-size: 2rem;\r\n}\r\n\r\n.navbar__hamburger :nth-child(2) {\r\n  display: none;\r\n}\r\n\r\n.menu {\r\n  position: fixed;\r\n  top: 50px;\r\n  left: 0;\r\n  background-color: var(--dark-green);\r\n  width: 100%;\r\n  height: calc(100vh - 80px);\r\n  padding: 40px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  transform: translateX(100%);\r\n  overflow-y: auto;\r\n  transition: all 0.5s ease;\r\n}\r\n\r\n.menu.active {\r\n  transform: translateX(0);\r\n}\r\n\r\n.menu__categories {\r\n  font-size: 1.4rem;\r\n  width: 100% !important;\r\n  height: 40px;\r\n  border-bottom: solid 1px black;\r\n  text-align: center;\r\n  margin: 0 auto 12px;\r\n  color: white;\r\n}\r\n\r\n.menu__list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.menu__item {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 32px;\r\n  padding: 12px;\r\n  border-bottom: 1px solid black;\r\n  color: white;\r\n}\r\n\r\n.menu__item img {\r\n  width: 50%;\r\n  max-width: 80px;\r\n}\r\n\r\n.menu__item span {\r\n  font-size: 1.2rem;\r\n  width: 50%;\r\n  text-align: left;\r\n}\r\n\r\n.fa-solid {\r\n  color: white;\r\n}\r\n\r\n.landing {\r\n  margin: 50px auto;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 40px;\r\n}\r\n\r\n.hero {\r\n  height: calc(100vh - 80px);\r\n  width: 100%;\r\n  margin-inline: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 32px;\r\n  background-color: rgb(245, 244, 244);\r\n  box-shadow: 0 10px 20px rgba(145, 145, 145, 0.699);\r\n  border-bottom: 1px double lightblue;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.hero__title {\r\n  font-size: 2rem;\r\n}\r\n\r\n.hero__description {\r\n  padding: 12px;\r\n  border: 1px solid rgb(194, 196, 197);\r\n  background-color: white;\r\n}\r\n\r\n.counter {\r\n  width: 320px;\r\n  padding: 0 8px;\r\n  align-self: center;\r\n}\r\n\r\n.list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  list-style: none;\r\n  gap: 24px;\r\n  padding: 8px;\r\n}\r\n\r\n.category__card {\r\n  background-color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n}\r\n\r\n.category__image {\r\n  width: 100%;\r\n}\r\n\r\n.category__content {\r\n  width: 100%;\r\n  padding-inline: 20px;\r\n}\r\n\r\n.category__header {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.category__title {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.recipes {\r\n  margin: 0 auto;\r\n  width: 90%;\r\n}\r\n\r\n.recipes__card {\r\n  display: flex;\r\n  margin: 1.5%;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n  border-radius: 12px;\r\n}\r\n\r\n.recipes__image {\r\n  width: 100%;\r\n  border-radius: 12px 12px 0 0;\r\n}\r\n\r\n.recipes__content {\r\n  width: 100%;\r\n  padding-inline: 20px;\r\n}\r\n\r\n.recipes__header {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.recipes__title {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.recipes__likes {\r\n  display: block;\r\n  margin-top: -10px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.recipes__comments,\r\n.recipes__reservations {\r\n  display: block;\r\n  width: 70%;\r\n  margin: 10px auto;\r\n  padding: 5px 10px;\r\n}\r\n\r\n.recipes__popup {\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 7.5% 10%;\r\n  position: fixed;\r\n  background-color: white;\r\n  backdrop-filter: blur(2px);\r\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n  top: 0%;\r\n  left: 0%;\r\n  overflow-y: auto;\r\n  border-radius: 10px;\r\n}\r\n\r\n.recipes__popup_image {\r\n  width: 100%;\r\n}\r\n\r\n.recipes__popup .fa-xmark {\r\n  color: white;\r\n  background-color: black;\r\n  padding: 6px 8px;\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n}\r\n\r\n.recipes__popup_title {\r\n  padding: 4%;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.recipes__popup_tags {\r\n  width: 90%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 10px;\r\n  margin: 0 auto 16px;\r\n}\r\n\r\n.recipes__popup_tagLi {\r\n  text-align: center;\r\n  font-size: 0.8rem;\r\n  min-width: 50px;\r\n  padding: 1px 6px;\r\n  background-color: var(--green);\r\n  border: 1px solid var(--dark-green);\r\n  border-radius: 10px;\r\n}\r\n\r\n.recipes__popup_instructs {\r\n  padding: 8%;\r\n  max-height: 60%;\r\n  overflow: auto;\r\n  background-color: var(--light-green);\r\n}\r\n\r\n.popup__instructs_line {\r\n  margin-top: 16px;\r\n  list-style: decimal;\r\n  font-size: 0.9rem;\r\n  line-height: 1.5rem;\r\n}\r\n\r\n.recipes__popup_video {\r\n  margin: 16px auto;\r\n  display: block;\r\n  text-align: center;\r\n}\r\n\r\n.recipes__popup_video a {\r\n  color: rgb(49, 80, 255);\r\n}\r\n\r\ndiv.recipes__popup_comments {\r\n  padding: 4%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.recipes__popup_comment-count {\r\n  display: block;\r\n  text-align: center;\r\n  font-size: 1.3rem;\r\n  font-weight: bold;\r\n}\r\n\r\nul.recipes__popup_comments {\r\n  background-color: var(--light-green);\r\n  border: 1px solid var(--dark-green);\r\n  border-radius: 5px;\r\n  max-height: 216px;\r\n  overflow-y: auto;\r\n  margin: 20px 0;\r\n}\r\n\r\n.recipes__popup_comment {\r\n  display: grid;\r\n  grid-template-rows: 1fr 1fr;\r\n  grid-template-columns: 1fr 1fr;\r\n  align-items: center;\r\n  padding: 3px 8px;\r\n}\r\n\r\n.recipes__popup_comment:nth-child(even) {\r\n  background-color: var(--green);\r\n}\r\n\r\n.recipes__popup_comment-date {\r\n  grid-area: 1/2/2/3;\r\n  text-align: right;\r\n}\r\n\r\n.recipes__popup_comment-user {\r\n  grid-area: 1/1/2/2;\r\n}\r\n\r\n.recipes__popup_comment-content {\r\n  grid-area: 2/1/3/3;\r\n  padding: 3px 12px;\r\n}\r\n\r\n.recipes__popup_input-user {\r\n  width: 100%;\r\n  margin-top: 12px;\r\n  padding: 4px;\r\n  font-family: inherit;\r\n  outline: none;\r\n  border: 2px solid var(--green);\r\n  border-radius: 5px;\r\n}\r\n\r\n.recipes__popup_input-user:focus {\r\n  border: 2px solid var(--dark-green);\r\n}\r\n\r\n.recipes__popup_input-comment {\r\n  width: 100%;\r\n  margin: 12px 0;\r\n  padding: 4px;\r\n  font-family: inherit;\r\n  max-height: 200px;\r\n  min-height: 80px;\r\n  resize: vertical;\r\n  outline: none;\r\n  border: 2px solid var(--green);\r\n  border-radius: 5px;\r\n}\r\n\r\n.recipes__popup_input-comment:focus {\r\n  border: 2px solid var(--dark-green);\r\n}\r\n\r\n.recipes__popup_input-submit {\r\n  display: block;\r\n  width: auto;\r\n  padding: 6px 16px;\r\n  margin-inline: auto;\r\n  outline: none;\r\n  border: 2px solid var(--light-green);\r\n  border-radius: 5px;\r\n  color: var(--light-green);\r\n  background-color: black;\r\n  transition: all 0.3s;\r\n  cursor: pointer;\r\n}\r\n\r\n.recipes__popup_input-submit:hover {\r\n  border: 2px solid var(--dark-green);\r\n  transform: scale(1.1);\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  position: fixed;\r\n  top: calc(100% - 30px);\r\n  width: 100%;\r\n  padding: 8px;\r\n  height: 30px;\r\n  background-color: var(--dark-green);\r\n}\r\n\r\n.license-rights {\r\n  font-size: 10px;\r\n}\r\n\r\n.mobile_visible {\r\n  display: unset;\r\n}\r\n\r\n.desktop_visible {\r\n  display: none;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .navbar {\r\n    height: 70px;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .menu {\r\n    width: 32%;\r\n    transform: translateX(100vw);\r\n  }\r\n  \r\n  .menu.active {\r\n    transform: translateX(70vw);\r\n  }\r\n  \r\n  .menu-toggle {\r\n    color: white !important;\r\n    font-size: 1.3rem !important;\r\n  }\r\n\r\n  .menu__categories {\r\n    width: 100% !important;\r\n  }\r\n\r\n  .landing {\r\n    margin-top: 70px;\r\n    gap: 20px;\r\n  }\r\n\r\n  .landing__counter {\r\n    width: 80%;\r\n    font-size: 1.69rem;\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .navbar__recipes {\r\n    display: block;\r\n  }\r\n\r\n  .navbar__hamburger {\r\n    display: none;\r\n  }\r\n\r\n  .license-rights {\r\n    font-size: 14px;\r\n  }\r\n\r\n  .recipes {\r\n    margin-top: 100px;\r\n    justify-content: flex-start;\r\n    margin-bottom: 100px;\r\n  }\r\n\r\n  .list {\r\n    justify-content: center;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .category__card {\r\n    border-radius: 6px;\r\n  }\r\n\r\n  .category__image {\r\n    border-radius: 6px 6px 0 0;\r\n  }\r\n\r\n  .recipes__card {\r\n    width: 20%;\r\n    min-width: 180px;\r\n    max-width: 200px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    height: 385px;\r\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n    border-radius: 12px;\r\n  }\r\n\r\n  .recipes__image {\r\n    width: 100%;\r\n    border-radius: 12px 12px 0 0;\r\n  }\r\n\r\n  .recipes__content {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    padding-inline: 20px;\r\n  }\r\n\r\n  .recipes__header {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-start;\r\n    margin-top: 8px;\r\n  }\r\n\r\n  .recipes__title {\r\n    font-size: 0.95rem;\r\n    line-height: 1.15rem;\r\n    max-width: 130px;\r\n    align-self: center;\r\n  }\r\n\r\n  .recipes__likes {\r\n    display: block;\r\n    margin: 10px 0;\r\n  }\r\n\r\n  .recipes__comments{\r\n    display: block;\r\n    width: 70%;\r\n    margin: 10px auto;\r\n    padding: 5px 10px;\r\n  }\r\n\r\n  .recipes__comments:last-of-type {\r\n    margin-top: auto;\r\n  }\r\n\r\n  .recipes__popup {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  div.recipes__popup_comments {\r\n    padding: 8px;\r\n    width: 80%;\r\n  }\r\n\r\n  .recipes__popup_image {\r\n    width: 50%;\r\n    align-self: center;\r\n  }\r\n\r\n  .recipes__popup_instructs {\r\n    min-height: 300px;\r\n    padding: 40px;\r\n  }\r\n  \r\n  .popup__instructs_line {\r\n    font-size: 1.1rem;\r\n  }\r\n\r\n  .mobile_visible {\r\n    display: none;\r\n  }\r\n\r\n  .desktop_visible {\r\n    display: unset;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
    const [burger, close] = document.querySelectorAll('span.menu-toggle');
    console.log(burger, close);

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
    _userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].counterText('Recipes');
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
    _userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].counterText('Recipes');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sS0FBSyxXQUFXLGdGQUFnRixVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sUUFBUSxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sdUZBQXVGLDZCQUE2QixpQkFBaUIsS0FBSyxtQ0FBbUMsMENBQTBDLEtBQUss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O0FDQW1DO0FBQ25DO0FBQ0EsNkRBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vc3JjL21vZHVsZXMvYXBwLmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL3NyYy9tb2R1bGVzL2N1cnJlbnRDYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9zcmMvbW9kdWxlcy9jdXJyZW50TWVhbC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9zcmMvbW9kdWxlcy9mZXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vc3JjL21vZHVsZXMvaW52b2x2ZW1lbnRBUEkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vc3JjL21vZHVsZXMvbWVhbEFQSS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL3NyYy9tb2R1bGVzL3BvcFVwLmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL3NyYy9tb2R1bGVzL3VzZXJJbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NhcHN0b25lLXR3by93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NhcHN0b25lLXR3by93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2NhcHN0b25lLXR3by93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NhcHN0b25lLXR3by93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NhcHN0b25lLXR3by93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU11a3RhKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigyNDEsIDI0MSwgMjQxLCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigxNjgsIDE2OCwgMTY4KTtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1kYXJrLWdyZWVuOiBoc2woMTIxLCAzMSUsIDQ0JSk7XFxyXFxuICAtLWdyZWVuOiBoc2woMTA4LCAzNSUsIDYwJSk7XFxyXFxuICAtLWxpZ2h0LWdyZWVuOiBoc2woNjgsIDU5JSwgODUlKTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMTM5LCAxMzksIDEzOSk7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTXVrdGEnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5Lm5vU2Nyb2xsIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5hLFxcclxcbmE6aG92ZXIsXFxyXFxuYTpmb2N1cyxcXHJcXG5hOmFjdGl2ZSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxudWwsXFxyXFxubGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDAlO1xcclxcbiAgbWFyZ2luOiAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDMycHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JlZW4pO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbnNwYW4uaW1hZ2Uge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm9fX2xvZ28ge1xcclxcbiAgd2lkdGg6IDE2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyX19sb2dvIC5oZXJvX19sb2dvIHtcXHJcXG4gIHdpZHRoOiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyX19yZWNpcGVzIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJfX2hhbWJ1cmdlciA6bnRoLWNoaWxkKDIpIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tZW51IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTBweDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZWVuKTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XFxyXFxuICBwYWRkaW5nOiA0MHB4IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS5hY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9fY2F0ZWdvcmllcyB7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggYmxhY2s7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDAgYXV0byAxMnB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9fbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfX2l0ZW0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAzMnB4O1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfX2l0ZW0gaW1nIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBtYXgtd2lkdGg6IDgwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51X19pdGVtIHNwYW4ge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXNvbGlkIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhbmRpbmcge1xcclxcbiAgbWFyZ2luOiA1MHB4IGF1dG87XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8ge1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMzJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NCwgMjQ0KTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMTQ1LCAxNDUsIDE0NSwgMC42OTkpO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdWJsZSBsaWdodGJsdWU7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm9fX3RpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm9fX2Rlc2NyaXB0aW9uIHtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTk0LCAxOTYsIDE5Nyk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvdW50ZXIge1xcclxcbiAgd2lkdGg6IDMyMHB4O1xcclxcbiAgcGFkZGluZzogMCA4cHg7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZ2FwOiAyNHB4O1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnlfX2NhcmQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yeV9faW1hZ2Uge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yeV9fY29udGVudCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnlfX2hlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yeV9fdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzIHtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX2NhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbjogMS41JTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX2ltYWdlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX2NvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nLWlubGluZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX2hlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlc19fdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19saWtlcyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX2NvbW1lbnRzLFxcclxcbi5yZWNpcGVzX19yZXNlcnZhdGlvbnMge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX3BvcHVwIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiA3LjUlIDEwJTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxyXFxuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xcclxcbiAgdG9wOiAwJTtcXHJcXG4gIGxlZnQ6IDAlO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19wb3B1cF9pbWFnZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX3BvcHVwIC5mYS14bWFyayB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIHBhZGRpbmc6IDZweCA4cHg7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX3BvcHVwX3RpdGxlIHtcXHJcXG4gIHBhZGRpbmc6IDQlO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19wb3B1cF90YWdzIHtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG8gMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX3BvcHVwX3RhZ0xpIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgbWluLXdpZHRoOiA1MHB4O1xcclxcbiAgcGFkZGluZzogMXB4IDZweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstZ3JlZW4pO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX3BvcHVwX2luc3RydWN0cyB7XFxyXFxuICBwYWRkaW5nOiA4JTtcXHJcXG4gIG1heC1oZWlnaHQ6IDYwJTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JlZW4pO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfX2luc3RydWN0c19saW5lIHtcXHJcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxyXFxuICBsaXN0LXN0eWxlOiBkZWNpbWFsO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlc19fcG9wdXBfdmlkZW8ge1xcclxcbiAgbWFyZ2luOiAxNnB4IGF1dG87XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX3BvcHVwX3ZpZGVvIGEge1xcclxcbiAgY29sb3I6IHJnYig0OSwgODAsIDI1NSk7XFxyXFxufVxcclxcblxcclxcbmRpdi5yZWNpcGVzX19wb3B1cF9jb21tZW50cyB7XFxyXFxuICBwYWRkaW5nOiA0JTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlc19fcG9wdXBfY29tbWVudC1jb3VudCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbnVsLnJlY2lwZXNfX3BvcHVwX2NvbW1lbnRzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZWVuKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstZ3JlZW4pO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgbWF4LWhlaWdodDogMjE2cHg7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgbWFyZ2luOiAyMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19wb3B1cF9jb21tZW50IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogM3B4IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX3BvcHVwX2NvbW1lbnQ6bnRoLWNoaWxkKGV2ZW4pIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX3BvcHVwX2NvbW1lbnQtZGF0ZSB7XFxyXFxuICBncmlkLWFyZWE6IDEvMi8yLzM7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX3BvcHVwX2NvbW1lbnQtdXNlciB7XFxyXFxuICBncmlkLWFyZWE6IDEvMS8yLzI7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19wb3B1cF9jb21tZW50LWNvbnRlbnQge1xcclxcbiAgZ3JpZC1hcmVhOiAyLzEvMy8zO1xcclxcbiAgcGFkZGluZzogM3B4IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19wb3B1cF9pbnB1dC11c2VyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luLXRvcDogMTJweDtcXHJcXG4gIHBhZGRpbmc6IDRweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdyZWVuKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX3BvcHVwX2lucHV0LXVzZXI6Zm9jdXMge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGFyay1ncmVlbik7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19wb3B1cF9pbnB1dC1jb21tZW50IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiAxMnB4IDA7XFxyXFxuICBwYWRkaW5nOiA0cHg7XFxyXFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xcclxcbiAgbWluLWhlaWdodDogODBweDtcXHJcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ3JlZW4pO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlc19fcG9wdXBfaW5wdXQtY29tbWVudDpmb2N1cyB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrLWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX3BvcHVwX2lucHV0LXN1Ym1pdCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgcGFkZGluZzogNnB4IDE2cHg7XFxyXFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWdyZWVuKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1ncmVlbik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlc19fcG9wdXBfaW5wdXQtc3VibWl0OmhvdmVyIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRhcmstZ3JlZW4pO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IGNhbGMoMTAwJSAtIDMwcHgpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpY2Vuc2UtcmlnaHRzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vYmlsZV92aXNpYmxlIHtcXHJcXG4gIGRpc3BsYXk6IHVuc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVza3RvcF92aXNpYmxlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubmF2YmFyIHtcXHJcXG4gICAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudSB7XFxyXFxuICAgIHdpZHRoOiAzMiU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDB2dyk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5tZW51LmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg3MHZ3KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm1lbnUtdG9nZ2xlIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudV9fY2F0ZWdvcmllcyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGFuZGluZyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDcwcHg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sYW5kaW5nX19jb3VudGVyIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjY5cmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdmJhcl9fcmVjaXBlcyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdmJhcl9faGFtYnVyZ2VyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5saWNlbnNlLXJpZ2h0cyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGlzdCB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXRlZ29yeV9fY2FyZCB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXRlZ29yeV9faW1hZ2Uge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDAgMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzX19jYXJkIHtcXHJcXG4gICAgd2lkdGg6IDIwJTtcXHJcXG4gICAgbWluLXdpZHRoOiAxODBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDM4NXB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJlY2lwZXNfX2ltYWdlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwIDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVjaXBlc19fY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVjaXBlc19faGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzX190aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTVyZW07XFxyXFxuICAgIG1heC13aWR0aDogMTMwcHg7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzX19saWtlcyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW46IDEwcHggMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzX19jb21tZW50c3tcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzX19jb21tZW50czpsYXN0LW9mLXR5cGUge1xcclxcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJlY2lwZXNfX3BvcHVwIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGRpdi5yZWNpcGVzX19wb3B1cF9jb21tZW50cyB7XFxyXFxuICAgIHBhZGRpbmc6IDhweDtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzX19wb3B1cF9pbWFnZSB7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzX19wb3B1cF9pbnN0cnVjdHMge1xcclxcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgcGFkZGluZzogNDBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnBvcHVwX19pbnN0cnVjdHNfbGluZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vYmlsZV92aXNpYmxlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kZXNrdG9wX3Zpc2libGUge1xcclxcbiAgICBkaXNwbGF5OiB1bnNldDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQywyQkFBMkI7RUFDM0IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7O0VBR0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTs7OztFQUlFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsbUNBQW1DO0VBQ25DLGVBQWU7RUFDZixNQUFNO0VBQ04sV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VB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QUEwQjtFQUM1Qjs7RUFFQTtJQUNFLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsNEVBQTRFO0lBQzVFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7SUFDVixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsY0FBYztFQUNoQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU11a3RhJyk7XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigyNDEsIDI0MSwgMjQxLCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigxNjgsIDE2OCwgMTY4KTtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1kYXJrLWdyZWVuOiBoc2woMTIxLCAzMSUsIDQ0JSk7XFxyXFxuICAtLWdyZWVuOiBoc2woMTA4LCAzNSUsIDYwJSk7XFxyXFxuICAtLWxpZ2h0LWdyZWVuOiBoc2woNjgsIDU5JSwgODUlKTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMTM5LCAxMzksIDEzOSk7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTXVrdGEnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5Lm5vU2Nyb2xsIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5hLFxcclxcbmE6aG92ZXIsXFxyXFxuYTpmb2N1cyxcXHJcXG5hOmFjdGl2ZSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxudWwsXFxyXFxubGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDAlO1xcclxcbiAgbWFyZ2luOiAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDMycHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JlZW4pO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbnNwYW4uaW1hZ2Uge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm9fX2xvZ28ge1xcclxcbiAgd2lkdGg6IDE2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyX19sb2dvIC5oZXJvX19sb2dvIHtcXHJcXG4gIHdpZHRoOiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyX19yZWNpcGVzIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJfX2hhbWJ1cmdlciA6bnRoLWNoaWxkKDIpIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tZW51IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTBweDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZWVuKTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XFxyXFxuICBwYWRkaW5nOiA0MHB4IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS5hY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9fY2F0ZWdvcmllcyB7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggYmxhY2s7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDAgYXV0byAxMnB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9fbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfX2l0ZW0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAzMnB4O1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfX2l0ZW0gaW1nIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBtYXgtd2lkdGg6IDgwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51X19pdGVtIHNwYW4ge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXNvbGlkIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhbmRpbmcge1xcclxcbiAgbWFyZ2luOiA1MHB4IGF1dG87XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8ge1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMzJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NCwgMjQ0KTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMTQ1LCAxNDUsIDE0NSwgMC42OTkpO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdWJsZSBsaWdodGJsdWU7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm9fX3RpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm9fX2Rlc2NyaXB0aW9uIHtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTk0LCAxOTYsIDE5Nyk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvdW50ZXIge1xcclxcbiAgd2lkdGg6IDMyMHB4O1xcclxcbiAgcGFkZGluZzogMCA4cHg7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZ2FwOiAyNHB4O1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnlfX2NhcmQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yeV9faW1hZ2Uge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yeV9fY29udGVudCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnlfX2hlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXRlZ29yeV9fdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzIHtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX2NhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbjogMS41JTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX2ltYWdlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX2NvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nLWlubGluZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX2hlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlc19fdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19saWtlcyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX2NvbW1lbnRzLFxcclxcbi5yZWNpcGVzX19yZXNlcnZhdGlvbnMge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX3BvcHVwIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiA3LjUlIDEwJTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxyXFxuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xcclxcbiAgdG9wOiAwJTtcXHJcXG4gIGxlZnQ6IDAlO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19wb3B1cF9pbWFnZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX3BvcHVwIC5mYS14bWFyayB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIHBhZGRpbmc6IDZweCA4cHg7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX3BvcHVwX3RpdGxlIHtcXHJcXG4gIHBhZGRpbmc6IDQlO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19wb3B1cF90YWdzIHtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG8gMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX3BvcHVwX3RhZ0xpIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgbWluLXdpZHRoOiA1MHB4O1xcclxcbiAgcGFkZGluZzogMXB4IDZweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstZ3JlZW4pO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX3BvcHVwX2luc3RydWN0cyB7XFxyXFxuICBwYWRkaW5nOiA4JTtcXHJcXG4gIG1heC1oZWlnaHQ6IDYwJTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JlZW4pO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfX2luc3RydWN0c19saW5lIHtcXHJcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxyXFxuICBsaXN0LXN0eWxlOiBkZWNpbWFsO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlc19fcG9wdXBfdmlkZW8ge1xcclxcbiAgbWFyZ2luOiAxNnB4IGF1dG87XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX3BvcHVwX3ZpZGVvIGEge1xcclxcbiAgY29sb3I6IHJnYig0OSwgODAsIDI1NSk7XFxyXFxufVxcclxcblxcclxcbmRpdi5yZWNpcGVzX19wb3B1cF9jb21tZW50cyB7XFxyXFxuICBwYWRkaW5nOiA0JTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlc19fcG9wdXBfY29tbWVudC1jb3VudCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbnVsLnJlY2lwZXNfX3BvcHVwX2NvbW1lbnRzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZWVuKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstZ3JlZW4pO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgbWF4LWhlaWdodDogMjE2cHg7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgbWFyZ2luOiAyMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19wb3B1cF9jb21tZW50IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogM3B4IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX3BvcHVwX2NvbW1lbnQ6bnRoLWNoaWxkKGV2ZW4pIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX3BvcHVwX2NvbW1lbnQtZGF0ZSB7XFxyXFxuICBncmlkLWFyZWE6IDEvMi8yLzM7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX3BvcHVwX2NvbW1lbnQtdXNlciB7XFxyXFxuICBncmlkLWFyZWE6IDEvMS8yLzI7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19wb3B1cF9jb21tZW50LWNvbnRlbnQge1xcclxcbiAgZ3JpZC1hcmVhOiAyLzEvMy8zO1xcclxcbiAgcGFkZGluZzogM3B4IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19wb3B1cF9pbnB1dC11c2VyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luLXRvcDogMTJweDtcXHJcXG4gIHBhZGRpbmc6IDRweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdyZWVuKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX3BvcHVwX2lucHV0LXVzZXI6Zm9jdXMge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGFyay1ncmVlbik7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGVzX19wb3B1cF9pbnB1dC1jb21tZW50IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiAxMnB4IDA7XFxyXFxuICBwYWRkaW5nOiA0cHg7XFxyXFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xcclxcbiAgbWluLWhlaWdodDogODBweDtcXHJcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ3JlZW4pO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlc19fcG9wdXBfaW5wdXQtY29tbWVudDpmb2N1cyB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrLWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZXNfX3BvcHVwX2lucHV0LXN1Ym1pdCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgcGFkZGluZzogNnB4IDE2cHg7XFxyXFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWdyZWVuKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1ncmVlbik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjaXBlc19fcG9wdXBfaW5wdXQtc3VibWl0OmhvdmVyIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRhcmstZ3JlZW4pO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IGNhbGMoMTAwJSAtIDMwcHgpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpY2Vuc2UtcmlnaHRzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vYmlsZV92aXNpYmxlIHtcXHJcXG4gIGRpc3BsYXk6IHVuc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVza3RvcF92aXNpYmxlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubmF2YmFyIHtcXHJcXG4gICAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudSB7XFxyXFxuICAgIHdpZHRoOiAzMiU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDB2dyk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5tZW51LmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg3MHZ3KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm1lbnUtdG9nZ2xlIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudV9fY2F0ZWdvcmllcyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGFuZGluZyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDcwcHg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sYW5kaW5nX19jb3VudGVyIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjY5cmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdmJhcl9fcmVjaXBlcyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdmJhcl9faGFtYnVyZ2VyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5saWNlbnNlLXJpZ2h0cyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGlzdCB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXRlZ29yeV9fY2FyZCB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXRlZ29yeV9faW1hZ2Uge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDAgMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzX19jYXJkIHtcXHJcXG4gICAgd2lkdGg6IDIwJTtcXHJcXG4gICAgbWluLXdpZHRoOiAxODBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDM4NXB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJlY2lwZXNfX2ltYWdlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwIDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVjaXBlc19fY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVjaXBlc19faGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzX190aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTVyZW07XFxyXFxuICAgIG1heC13aWR0aDogMTMwcHg7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzX19saWtlcyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW46IDEwcHggMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzX19jb21tZW50c3tcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzX19jb21tZW50czpsYXN0LW9mLXR5cGUge1xcclxcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJlY2lwZXNfX3BvcHVwIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGRpdi5yZWNpcGVzX19wb3B1cF9jb21tZW50cyB7XFxyXFxuICAgIHBhZGRpbmc6IDhweDtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzX19wb3B1cF9pbWFnZSB7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZWNpcGVzX19wb3B1cF9pbnN0cnVjdHMge1xcclxcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgcGFkZGluZzogNDBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnBvcHVwX19pbnN0cnVjdHNfbGluZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vYmlsZV92aXNpYmxlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kZXNrdG9wX3Zpc2libGUge1xcclxcbiAgICBkaXNwbGF5OiB1bnNldDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4uL2luZGV4LmNzcyc7XHJcbmltcG9ydCBsb2dvIGZyb20gJy4uL2Fzc2V0cy9idXJnZXItbG9nby5wbmcnO1xyXG5pbXBvcnQgVXNlckludGVyZmFjZSBmcm9tICcuL3VzZXJJbnRlcmZhY2UuanMnO1xyXG5pbXBvcnQgTWVhbEFQSSBmcm9tICcuL21lYWxBUEkuanMnO1xyXG5pbXBvcnQgQ3VycmVudENhdGVnb3J5IGZyb20gJy4vY3VycmVudENhdGVnb3J5LmpzJztcclxuaW1wb3J0IEN1cnJlbnRNZWFsIGZyb20gJy4vY3VycmVudE1lYWwuanMnO1xyXG5pbXBvcnQgSW52b2x2ZW1lbnRBUEkgZnJvbSAnLi9pbnZvbHZlbWVudEFQSS5qcyc7XHJcbmltcG9ydCBQb3BVcCBmcm9tICcuL3BvcFVwLmpzJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51LmpzJztcclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgc3RhcnQoKSB7XHJcbiAgICB0aGlzLmltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmltYWdlJyk7XHJcbiAgICB0aGlzLmFzeW5jRW52KCk7XHJcbiAgfVxyXG5cclxuICBzZXRMb2dvKCkge1xyXG4gICAgQXJyYXkuZnJvbSh0aGlzLmltYWdlQ29udGFpbmVyKS5mb3JFYWNoKChjb250YWluZXIpID0+IHtcclxuICAgICAgY29uc3QgbG9nb0ltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBsb2dvSW1nLnNyYyA9IGxvZ287XHJcbiAgICAgIGxvZ29JbWcuY2xhc3NMaXN0LmFkZCgnaGVyb19fbG9nbycpO1xyXG4gICAgICBsb2dvSW1nLmFsdCA9ICdZdW1teSBSZWNpcGVzIExvZ28nO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobG9nb0ltZyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGFzeW5jRW52KCkge1xyXG4gICAgdGhpcy5zZXRMb2dvKCk7XHJcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgTWVhbEFQSS5nZXRDYXRlZ29yaWVzKCk7XHJcbiAgICBNZW51LmRpc3BsYXlDYXRlZ29yaWVzKGNhdGVnb3JpZXMpO1xyXG4gICAgVXNlckludGVyZmFjZS5kaXNwbGF5Q2F0ZWdvcmllcyhjYXRlZ29yaWVzKTtcclxuICAgIFVzZXJJbnRlcmZhY2UuY291bnRlclRleHQoJ0NhdGVnb3JpZXMnKTtcclxuICAgIHRoaXMuc2VsZWN0VGFncygpO1xyXG4gICAgdGhpcy5zZXRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIGdvQmFja1RvQ29tbW9uUGFyZW50ID0gKG5vZGUsIGEpID0+IHtcclxuICAgIGlmIChub2RlLmdldEF0dHJpYnV0ZShhLnR5cGUpLmluY2x1ZGVzKGEuaXRlbSlcclxuICAgICAgICAhPT0gbm9kZS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShhLnR5cGUpLmluY2x1ZGVzKGEuaXRlbSlcclxuICAgICkgcmV0dXJuIG5vZGU7XHJcbiAgICByZXR1cm4gdGhpcy5nb0JhY2tUb0NvbW1vblBhcmVudChub2RlLnBhcmVudE5vZGUsIGEpO1xyXG4gIH07XHJcblxyXG4gIHN0YXRpYyB0b2dnbGVNZW51KCkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdub1Njcm9sbCcpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LXRvZ2dsZScpLmZvckVhY2goKGljb24pID0+IHtcclxuICAgICAgaWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNsb3NlTWVudSgpIHtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm9TY3JvbGwnKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51JykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVybycpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgY29uc3QgW2J1cmdlciwgY2xvc2VdID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3Bhbi5tZW51LXRvZ2dsZScpO1xyXG4gICAgY29uc29sZS5sb2coYnVyZ2VyLCBjbG9zZSk7XHJcblxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGhpZGVMYW5kaW5nKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8nKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdENhdGVnb3J5ID0gYXN5bmMgKGNsaWNrZWRFbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdvQmFja1RvQ29tbW9uUGFyZW50KFxyXG4gICAgICBjbGlja2VkRWxlbWVudCxcclxuICAgICAgeyB0eXBlOiAnY2xhc3MnLCBpdGVtOiAnY2F0ZWdvcnknIH0sXHJcbiAgICApO1xyXG4gICAgY29uc3QgY2F0ZWdvcnlOYW1lID0gcGFyZW50LmNoaWxkcmVuWzFdLmlubmVyVGV4dDtcclxuICAgIHRoaXMuTElTVC5pbm5lckhUTUwgPSAnJztcclxuICAgIGNvbnN0IGNhdGVnb3J5ID0gYXdhaXQgTWVhbEFQSS5nZXRCeUNhdGVnb3J5KGNhdGVnb3J5TmFtZSk7XHJcbiAgICBjb25zdCBhbGxMaWtlcyA9IGF3YWl0IEludm9sdmVtZW50QVBJLmdldEFsbExpa2VzKCk7XHJcbiAgICBjb25zdCBjdXJyZW50Q2F0ZWdvcnkgPSBuZXcgQ3VycmVudENhdGVnb3J5KGNhdGVnb3J5KTtcclxuICAgIFVzZXJJbnRlcmZhY2UuZGlzcGxheVJlY2lwZXMoY3VycmVudENhdGVnb3J5Lm1lYWxzLCBhbGxMaWtlcyk7XHJcbiAgICBVc2VySW50ZXJmYWNlLmNvdW50ZXJUZXh0KCdSZWNpcGVzJyk7XHJcbiAgICBBcHAuaGlkZUxhbmRpbmcoKTtcclxuICB9XHJcblxyXG4gIG1lbnVMb2FkQ2F0ZWdvcmllcyA9IGFzeW5jIChjbGlja2VkRWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5nb0JhY2tUb0NvbW1vblBhcmVudChcclxuICAgICAgY2xpY2tlZEVsZW1lbnQsXHJcbiAgICAgIHsgdHlwZTogJ2NsYXNzJywgaXRlbTogJ21lbnVfX2l0ZW0nIH0sXHJcbiAgICApO1xyXG4gICAgY29uc3QgY2F0ZWdvcnlOYW1lID0gcGFyZW50LmNoaWxkcmVuWzFdLmlubmVyVGV4dDtcclxuICAgIHRoaXMuTElTVC5pbm5lckhUTUwgPSAnJztcclxuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBNZWFsQVBJLmdldEJ5Q2F0ZWdvcnkoY2F0ZWdvcnlOYW1lKTtcclxuICAgIGNvbnN0IGFsbExpa2VzID0gYXdhaXQgSW52b2x2ZW1lbnRBUEkuZ2V0QWxsTGlrZXMoKTtcclxuICAgIGNvbnN0IGN1cnJlbnRDYXRlZ29yeSA9IG5ldyBDdXJyZW50Q2F0ZWdvcnkoY2F0ZWdvcmllcyk7XHJcbiAgICBVc2VySW50ZXJmYWNlLmRpc3BsYXlSZWNpcGVzKGN1cnJlbnRDYXRlZ29yeS5tZWFscywgYWxsTGlrZXMpO1xyXG4gICAgVXNlckludGVyZmFjZS5jb3VudGVyVGV4dCgnUmVjaXBlcycpO1xyXG4gICAgQXBwLmhpZGVMYW5kaW5nKCk7XHJcbiAgICBBcHAudG9nZ2xlTWVudSgpO1xyXG4gIH1cclxuXHJcbiAgbG9nb0xvYWRDYXRlZ29yaWVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdGhpcy5MSVNULmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IE1lYWxBUEkuZ2V0Q2F0ZWdvcmllcygpO1xyXG4gICAgVXNlckludGVyZmFjZS5kaXNwbGF5Q2F0ZWdvcmllcyhjYXRlZ29yaWVzKTtcclxuICAgIFVzZXJJbnRlcmZhY2UuY291bnRlclRleHQoJ0NhdGVnb3JpZXMnKTtcclxuICAgIEFwcC5jbG9zZU1lbnUoKTtcclxuICB9XHJcblxyXG4gIGFkZExpa2UgPSBhc3luYyAoY2xpY2tlZEVsZW1lbnQpID0+IHtcclxuICAgIGNvbnN0IGNhcmQgPSBjbGlja2VkRWxlbWVudC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IG1lYWxJZCA9IGNhcmQuZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG4gICAgYXdhaXQgSW52b2x2ZW1lbnRBUEkuYWRkTGlrZShtZWFsSWQpO1xyXG4gICAgVXNlckludGVyZmFjZS5hZGRUb0xpa2VzQ291bnRlckRPTShjYXJkKTtcclxuICB9XHJcblxyXG4gIGxvYWRQb3B1cCA9IGFzeW5jIChjbGlja2VkRWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgY2FyZCA9IGNsaWNrZWRFbGVtZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IG1lYWxJZCA9IGNhcmQuZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG4gICAgY29uc3QgbWVhbCA9IGF3YWl0IE1lYWxBUEkuZ2V0UmVjaXBlKG1lYWxJZCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ25vU2Nyb2xsJyk7XHJcblxyXG4gICAgYXdhaXQgSW52b2x2ZW1lbnRBUEkuYWRkQ29tbWVudChcclxuICAgICAgeyB1c2VybmFtZTogJycsIGNvbW1lbnQ6ICcnIH0sXHJcbiAgICAgIG1lYWxJZCxcclxuICAgICk7XHJcblxyXG4gICAgbGV0IGNvbW1lbnRzID0gYXdhaXQgSW52b2x2ZW1lbnRBUEkuZ2V0Q29tbWVudHMobWVhbElkKTtcclxuICAgIGNvbW1lbnRzID0gY29tbWVudHMuZmlsdGVyKChjb21tZW50KSA9PiBjb21tZW50LnVzZXJuYW1lICE9PSAnJyk7XHJcbiAgICBjb25zdCBjdXJyZW50TWVhbCA9IG5ldyBDdXJyZW50TWVhbChtZWFsLCBjb21tZW50cyk7XHJcblxyXG4gICAgUG9wVXAucG9wKHtcclxuICAgICAgLi4uY3VycmVudE1lYWwsXHJcbiAgICAgIGNvbW1lbnRzLFxyXG4gICAgICB0eXBlOiAnUmVjaXBlJyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZvckVhY2hMaXN0ZW5lcihpdGVtcywgZnVuYykge1xyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBmdW5jKGUudGFyZ2V0KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldExpc3RlbmVycygpIHtcclxuICAgIEFwcC5mb3JFYWNoTGlzdGVuZXIodGhpcy5tZW51VG9nZ2xlciwgQXBwLnRvZ2dsZU1lbnUpO1xyXG4gICAgQXBwLmZvckVhY2hMaXN0ZW5lcih0aGlzLm1lbnVJdGVtcywgdGhpcy5tZW51TG9hZENhdGVnb3JpZXMpO1xyXG4gICAgQXBwLmZvckVhY2hMaXN0ZW5lcih0aGlzLmhlcm9Mb2dvcywgdGhpcy5sb2dvTG9hZENhdGVnb3JpZXMpO1xyXG5cclxuICAgIHRoaXMuTElTVC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNsaWNrZWRFbGVtZW50ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgICBpZiAoY2xpY2tlZEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpLmluY2x1ZGVzKCdjYXRlZ29yeScpKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RDYXRlZ29yeShjbGlja2VkRWxlbWVudCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY2xpY2tlZEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1oZWFydCcpKSB7XHJcbiAgICAgICAgdGhpcy5hZGRMaWtlKGNsaWNrZWRFbGVtZW50KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjbGlja2VkRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3JlY2lwZXNfX2NvbW1lbnRzJykpIHtcclxuICAgICAgICB0aGlzLmxvYWRQb3B1cChjbGlja2VkRWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0VGFncygpIHtcclxuICAgIHRoaXMubWVudVRvZ2dsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS10b2dnbGUnKTtcclxuICAgIHRoaXMubWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnVfX2l0ZW0nKTtcclxuICAgIHRoaXMuaGVyb0xvZ29zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlcm9fX2xvZ28nKTtcclxuICAgIHRoaXMuTElTVCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Jyk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHA7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VycmVudENhdGVnb3J5IHtcbiAgbWVhbHM7XG5cbiAgY29uc3RydWN0b3IoY2F0ZWdvcnlNZWFscyA9IFtdKSB7XG4gICAgdGhpcy5tZWFscyA9IGNhdGVnb3J5TWVhbHM7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnJlbnRNZWFsIHtcclxuICBpZE1lYWw7XHJcblxyXG4gIHN0ck1lYWw7XHJcblxyXG4gIHN0ck1lYWxUaHVtYjtcclxuXHJcbiAgc3RySW5zdHJ1Y3Rpb25zO1xyXG5cclxuICBzdHJUYWdzO1xyXG5cclxuICBzdHJZb3V0dWJlO1xyXG5cclxuICBjb21tZW50cztcclxuXHJcbiAgY29uc3RydWN0b3IoY3VycmVudE1lYWwsIGNvbW1lbnRzID0gW10pIHtcclxuICAgIHRoaXMuaWRNZWFsID0gY3VycmVudE1lYWwuaWRNZWFsO1xyXG4gICAgdGhpcy5zdHJNZWFsID0gY3VycmVudE1lYWwuc3RyTWVhbDtcclxuICAgIHRoaXMuc3RyTWVhbFRodW1iID0gY3VycmVudE1lYWwuc3RyTWVhbFRodW1iO1xyXG4gICAgdGhpcy5zdHJJbnN0cnVjdGlvbnMgPSBjdXJyZW50TWVhbC5zdHJJbnN0cnVjdGlvbnM7XHJcbiAgICB0aGlzLnN0clRhZ3MgPSBjdXJyZW50TWVhbC5zdHJUYWdzO1xyXG4gICAgdGhpcy5zdHJZb3V0dWJlID0gY3VycmVudE1lYWwuc3RyWW91dHViZTtcclxuICAgIHRoaXMuY29tbWVudHMgPSBjb21tZW50cztcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmV0Y2hSZXF1ZXN0IHtcbiAgbWV0aG9kO1xuXG4gIGJvZHk7XG5cbiAgaGVhZGVycztcblxuICB1cmw7XG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIG1ldGhvZCA9ICdHRVQnLFxuICAgIGJvZHksXG4gICAgdXJsID0gJycsXG4gICAgaGVhZGVycyA9IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgfSxcbiAgfSA9IHt9KSB7XG4gICAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgICB0aGlzLmhlYWRlcnMgPSBoZWFkZXJzO1xuICAgIHRoaXMudXJsID0gdXJsO1xuICB9XG5cbiAgYXN5bmMgY2FsbCgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kOiB0aGlzLm1ldGhvZCxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodGhpcy5ib2R5KSxcbiAgICAgICAgaGVhZGVyczogdGhpcy5tZXRob2QgPT09ICdQT1NUJyA/IHRoaXMuaGVhZGVycyA6IHVuZGVmaW5lZCxcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy51cmwsIG9wdGlvbnMpO1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSByZXR1cm4gbnVsbDtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIG40S3JueGExR3hYSGJaMzQ5VU1tIGNsZWFuXG4vLyBqdFhGUFhOaXpSdFU1cGZaMjZzVFxuLy8gdGVzdDogTUJ4U0p5VlE4elF6dXhCa3dhNW1cblxuaW1wb3J0IEZldGNoUmVxdWVzdCBmcm9tICcuL2ZldGNoUmVxdWVzdC5qcyc7XG5cbmNvbnN0IGFwcElkID0gJ2p0WEZQWE5pelJ0VTVwZloyNnNUJztcbmNvbnN0IHVybE1BUCA9IHtcbiAgbWFpbjogJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLycsXG4gIGxpa2VzOiBgJHthcHBJZH0vbGlrZXMvYCxcbiAgY29tbWVudHM6IGAke2FwcElkfS9jb21tZW50c2AsXG4gIGJ5Q29tbWVudDogYCR7YXBwSWR9L2NvbW1lbnRzP2l0ZW1faWQ9YCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludm9sdmVtZW50QVBJIHtcbiAgc3RhdGljIGFzeW5jIGFkZExpa2UobWVhbCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBmZXRjaFJlcXVlc3QgPSBuZXcgRmV0Y2hSZXF1ZXN0KHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IHsgaXRlbV9pZDogbWVhbCB9LFxuICAgICAgICB1cmw6IGAke3VybE1BUC5tYWlufSR7dXJsTUFQLmxpa2VzfWAsXG4gICAgICB9KTtcbiAgICAgIGF3YWl0IGZldGNoUmVxdWVzdC5jYWxsKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEFsbExpa2VzKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBmZXRjaFJlcXVlc3QgPSBuZXcgRmV0Y2hSZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBgJHt1cmxNQVAubWFpbn0ke3VybE1BUC5saWtlc31gLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBhbGxMaWtlcyA9IGF3YWl0IGZldGNoUmVxdWVzdC5jYWxsKCk7XG4gICAgICByZXR1cm4gYWxsTGlrZXM7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldE1lYWxMaWtlcyhsaWtlc0FyciwgSXRlbUlkKSB7XG4gICAgY29uc3QgbWVhbExpa2VzID0gbGlrZXNBcnIuZmlsdGVyKFxuICAgICAgKG1lYWwpID0+IG1lYWwuaXRlbV9pZCA9PT0gSXRlbUlkLFxuICAgIClbMF07XG4gICAgaWYgKCFtZWFsTGlrZXMpIHJldHVybiAwO1xuICAgIHJldHVybiBtZWFsTGlrZXMubGlrZXM7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgYWRkQ29tbWVudCh7IHVzZXJuYW1lLCBjb21tZW50IH0sIG1lYWwpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmV0Y2hSZXF1ZXN0ID0gbmV3IEZldGNoUmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgaXRlbV9pZDogbWVhbCxcbiAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICBjb21tZW50LFxuICAgICAgICB9LFxuICAgICAgICB1cmw6IGAke3VybE1BUC5tYWlufSR7dXJsTUFQLmNvbW1lbnRzfWAsXG4gICAgICB9KTtcbiAgICAgIGF3YWl0IGZldGNoUmVxdWVzdC5jYWxsKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldENvbW1lbnRzKG1lYWwpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmV0Y2hSZXF1ZXN0ID0gbmV3IEZldGNoUmVxdWVzdCh7XG4gICAgICAgIHVybDogYCR7dXJsTUFQLm1haW59JHt1cmxNQVAuYnlDb21tZW50fSR7bWVhbH1gLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGZldGNoUmVxdWVzdC5jYWxsKCk7XG4gICAgICByZXR1cm4gY29tbWVudHM7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgRmV0Y2hSZXF1ZXN0IGZyb20gJy4vZmV0Y2hSZXF1ZXN0LmpzJztcblxuY29uc3QgdXJsTWFwID0ge1xuICByYW5kb206ICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvcmFuZG9tLnBocCcsXG4gIGNhdGVnb3JpZXM6XG4gICAgJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9jYXRlZ29yaWVzLnBocCcsXG4gIGJ5Q2F0ZWdvcnk6ICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvZmlsdGVyLnBocD9jPScsXG4gIGJ5TWVhbElkOiAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2xvb2t1cC5waHA/aT0nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVhbEFQSSB7XG4gIHN0YXRpYyBhc3luYyBnZXRSZWNpcGUoaWQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmV0Y2hSZXF1ZXN0ID0gbmV3IEZldGNoUmVxdWVzdCh7XG4gICAgICAgIHVybDogYCR7dXJsTWFwLmJ5TWVhbElkfSR7aWR9YCxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoUmVxdWVzdC5jYWxsKCk7XG4gICAgICByZXR1cm4gZGF0YS5tZWFsc1swXTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0Q2F0ZWdvcmllcygpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmV0Y2hSZXF1ZXN0ID0gbmV3IEZldGNoUmVxdWVzdCh7XG4gICAgICAgIHVybDogdXJsTWFwLmNhdGVnb3JpZXMsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBmZXRjaFJlcXVlc3QuY2FsbCgpO1xuICAgICAgcmV0dXJuIGNhdGVnb3JpZXMuY2F0ZWdvcmllcztcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0QnlDYXRlZ29yeShjYXRlZ29yeSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBmZXRjaFJlcXVlc3QgPSBuZXcgRmV0Y2hSZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBgJHt1cmxNYXAuYnlDYXRlZ29yeX0ke2NhdGVnb3J5fWAsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHJlY2lwZXMgPSBhd2FpdCBmZXRjaFJlcXVlc3QuY2FsbCgpO1xuICAgICAgcmV0dXJuIHJlY2lwZXMubWVhbHM7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG59XG4iLCJjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19saXN0Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUge1xuICBzdGF0aWMgZGlzcGxheUNhdGVnb3JpZXMoY2F0ZWdvcmllc0Fycikge1xuICAgIGNhdGVnb3JpZXNBcnIuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlRG9tTWVudUl0ZW0oY2F0ZWdvcnkpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZURvbU1lbnVJdGVtKHtcbiAgICBpZENhdGVnb3J5LFxuICAgIHN0ckNhdGVnb3J5LFxuICAgIHN0ckNhdGVnb3J5VGh1bWIsXG4gIH0pIHtcbiAgICBjb25zdCBMSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgTEkuY2xhc3NMaXN0LmFkZCgnbWVudV9faXRlbScpO1xuICAgIExJLnNldEF0dHJpYnV0ZSgnaWQnLCBpZENhdGVnb3J5KTtcbiAgICBMSS5pbm5lckhUTUwgPSBgXG4gICAgICA8aW1nIGNsYXNzPVwibWVudV9faXRlbV9faW1nXCIgc3JjPVwiJHtzdHJDYXRlZ29yeVRodW1ifVwiIGFsdD1cIkNhdGVnb3J5ICR7c3RyQ2F0ZWdvcnl9XCI+XG4gICAgICA8c3BhbiBjbGFzcz1cIm1lbnVfX2l0ZW1fX2NhdGVnb3J5XCI+JHtzdHJDYXRlZ29yeX08L3NwYW4+YDtcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChMSSk7XG4gIH1cbn1cbiIsImltcG9ydCBJbnZvbHZlbWVudEFQSSBmcm9tICcuL2ludm9sdmVtZW50QVBJLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcFVwIHtcclxuICBzdGF0aWMgcG9wKGRhdGEpIHtcclxuICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLmNvbW1lbnRDb3VudCA9IDA7XHJcbiAgICB0aGlzLnRlbXBsYXRlKHRoaXMuZGF0YS50eXBlKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB0ZW1wbGF0ZSgpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLmRhdGEuaWRNZWFsKTtcclxuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JlY2lwZXNfX3BvcHVwJyk7XHJcblxyXG4gICAgY29uc3QgdGFncyA9IFBvcFVwLnRhZ3NUZW1wbGF0ZSh0aGlzLmRhdGEuc3RyVGFncyk7XHJcbiAgICBjb25zdCBjb21tZW50U2VjdGlvbiA9IFBvcFVwLmNvbW1lbnRzVGVtcGxhdGUoKTtcclxuICAgIGNvbnN0IGluc3RydWN0cyA9IFBvcFVwLmluc3RydWN0aW9uc1RlbXBsYXRlKHRoaXMuZGF0YS5zdHJJbnN0cnVjdGlvbnMpO1xyXG5cclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxpbWcgY2xhc3M9XCJyZWNpcGVzX19wb3B1cF9pbWFnZVwiIHNyYz1cIiR7dGhpcy5kYXRhLnN0ck1lYWxUaHVtYn1cIiBhbHQ9XCJEZWxpY2lvdXMgJHt0aGlzLmRhdGEuc3RyTWVhbH1cIj5cclxuICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS14bWFya1wiPjwvaT5cclxuICAgICAgPGgyIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfdGl0bGVcIj4ke3RoaXMuZGF0YS5zdHJNZWFsfTwvaDI+XHJcbiAgICAgIDx1bCBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX3RhZ3NcIj4ke3RhZ3N9PC91bD5cclxuICAgICAgPHVsIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfaW5zdHJ1Y3RzXCI+JHtpbnN0cnVjdHN9PC91bD5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJyZWNpcGVzX19wb3B1cF92aWRlb1wiPldhdGNoIGEgPGEgaHJlZj1cIiR7dGhpcy5kYXRhLnN0cllvdXR1YmV9XCI+VmlkZW88L2E+IGhlcmU8L3NwYW4+XHJcbiAgICAgICR7Y29tbWVudFNlY3Rpb259XHJcbiAgICBgO1xyXG5cclxuICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm9TY3JvbGwnKTtcclxuICAgICAgY29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0YS50eXBlID09PSAnUmVjaXBlJykge1xyXG4gICAgICBjb25zdCB1c2VyID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbiAgICAgIGNvbnN0IGNvbW1lbnQgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKTtcclxuICAgICAgY29uc3Qgc3VibWl0ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xyXG4gICAgICBjb25zdCB1bENvbnRhaW5lciA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICcucmVjaXBlc19fcG9wdXBfY29tbWVudHMgdWwnLFxyXG4gICAgICApO1xyXG5cclxuICAgICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmICh1c2VyLnZhbHVlID09PSAnJyB8fCBjb21tZW50LnZhbHVlID09PSAnJykgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGlucHV0Q29tbWVudCA9IHtcclxuICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLnZhbHVlLFxyXG4gICAgICAgICAgY29tbWVudDogY29tbWVudC52YWx1ZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIFBvcFVwLmNyZWF0ZUNvbW1lbnRPbkRPTShcclxuICAgICAgICAgIHVzZXIsXHJcbiAgICAgICAgICBjb21tZW50LFxyXG4gICAgICAgICAgdWxDb250YWluZXIsXHJcbiAgICAgICAgICBpbnB1dENvbW1lbnQsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBhd2FpdCBJbnZvbHZlbWVudEFQSS5hZGRDb21tZW50KFxyXG4gICAgICAgICAgaW5wdXRDb21tZW50LFxyXG4gICAgICAgICAgdGhpcy5kYXRhLmlkTWVhbCxcclxuICAgICAgICApO1xyXG4gICAgICAgIFBvcFVwLmNvbW1lbnRDb3VudEFkZChjb250YWluZXIpO1xyXG4gICAgICAgIFt1c2VyLnZhbHVlLCBjb21tZW50LnZhbHVlXSA9IFsnJywgJyddO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZGlzcGxheUNvbW1lbnQoZGF0YSkge1xyXG4gICAgY29uc3QgW3llYXIsIG1vbnRoLCBkYXldID0gZGF0YS5jcmVhdGlvbl9kYXRlLnNwbGl0KCctJyk7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICAgIDxsaSBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2NvbW1lbnRcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfY29tbWVudC11c2VyXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS11c2VyXCI+PC9pPlxyXG4gICAgICAgICAgICAke2RhdGEudXNlcm5hbWV9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2NvbW1lbnQtZGF0ZVwiPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLWNhbGVuZGFyXCI+PC9pPlxyXG4gICAgICAgICAgICAke2RheX0tJHttb250aH0tJHt5ZWFyfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZWNpcGVzX19wb3B1cF9jb21tZW50LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgJHtkYXRhLmNvbW1lbnR9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgYDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjb21tZW50c1RlbXBsYXRlKCkge1xyXG4gICAgbGV0IGNvbW1lbnRzID0gJyc7XHJcbiAgICB0aGlzLmRhdGEuY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xyXG4gICAgICBjb21tZW50cyArPSBQb3BVcC5kaXNwbGF5Q29tbWVudChjb21tZW50KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgPGRpdiBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2NvbW1lbnRzXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJyZWNpcGVzX19wb3B1cF9jb21tZW50LWNvdW50XCI+Q29tbWVudHMgKCR7dGhpcy5kYXRhLmNvbW1lbnRzLmxlbmd0aH0pPC9zcGFuPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfaW5wdXQtdXNlclwiIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiB0YWJpbmRleD0wPjwvaW5wdXQ+XHJcbiAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfaW5wdXQtY29tbWVudFwiIHBsYWNlaG9sZGVyPVwiV3JpdGUgeW91ciBjb21tZW50XCIgdGFiaW5kZXg9MD48L3RleHRhcmVhPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJyZWNpcGVzX19wb3B1cF9pbnB1dC1zdWJtaXRcIiB0eXBlPVwiYnV0dG9uXCIgdGFiaW5kZXg9MD5BZGQgQ29tbWVudDwvYnV0dG9uPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2NvbW1lbnRzXCI+JHtjb21tZW50c308L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY3JlYXRlQ29tbWVudE9uRE9NKHVzZXIsIGNvbW1lbnQsIGNvbnRhaW5lciwgaW5wdXRDb21tZW50KSB7XHJcbiAgICBjb25zdCBbZGF5LCBtb250aCwgeWVhcl0gPSBuZXcgRGF0ZSgpXHJcbiAgICAgIC50b0xvY2FsZURhdGVTdHJpbmcoKVxyXG4gICAgICAuc3BsaXQoJy8nKTtcclxuICAgIGNvbnN0IGxpID0gUG9wVXAuZGlzcGxheUNvbW1lbnQoe1xyXG4gICAgICAuLi5pbnB1dENvbW1lbnQsXHJcbiAgICAgIGNyZWF0aW9uX2RhdGU6IGAke3llYXJ9LSR7bW9udGggPCAxMCA/ICcwJyA6ICcnfSR7bW9udGh9LSR7XHJcbiAgICAgICAgZGF5IDwgMTAgPyAnMCcgOiAnJ1xyXG4gICAgICB9JHtkYXl9YCxcclxuICAgIH0pO1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCArPSBsaTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjb21tZW50Q291bnRBZGQoY29udGFpbmVyKSB7XHJcbiAgICB0aGlzLmNvbW1lbnRDb3VudCArPSAxO1xyXG4gICAgY29uc3QgY29tbWVudHNOdW0gPSB0aGlzLmRhdGEuY29tbWVudHMubGVuZ3RoICsgdGhpcy5jb21tZW50Q291bnQ7XHJcbiAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcihcclxuICAgICAgJy5yZWNpcGVzX19wb3B1cF9jb21tZW50LWNvdW50JyxcclxuICAgICkuaW5uZXJIVE1MID0gYENvbW1lbnRzICgke2NvbW1lbnRzTnVtfSlgO1xyXG4gICAgcmV0dXJuIGNvbW1lbnRzTnVtO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGluc3RydWN0aW9uc1RlbXBsYXRlKGluc3RydWN0cykge1xyXG4gICAgbGV0IG5ld0luc3RydWN0cyA9ICcnO1xyXG4gICAgaW5zdHJ1Y3RzLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaCgobGluZSkgPT4ge1xyXG4gICAgICBuZXdJbnN0cnVjdHMgKz0gYDxsaSBjbGFzcz1cInBvcHVwX19pbnN0cnVjdHNfbGluZVwiPiR7bGluZX08L2xpPmA7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBuZXdJbnN0cnVjdHM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdGFnc1RlbXBsYXRlKHRhZ3MpIHtcclxuICAgIGlmICghdGFncykgcmV0dXJuICcnO1xyXG4gICAgbGV0IHRhZ3NVbCA9ICcnO1xyXG4gICAgdGFncy5zcGxpdCgnLCcpLmZvckVhY2goKHRhZykgPT4ge1xyXG4gICAgICB0YWdzVWwgKz0gYDxsaSBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX3RhZ0xpXCI+JHt0YWd9PC9saT5gO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGFnc1VsO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgSW52b2x2ZW1lbnRBUEkgZnJvbSAnLi9pbnZvbHZlbWVudEFQSS5qcyc7XHJcblxyXG5jb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbnRlcmZhY2Uge1xyXG4gIHN0YXRpYyBkaXNwbGF5UmVjaXBlcyhtZWFsc0FyciwgbGlrZXMgPSBbXSkge1xyXG4gICAgbWVhbHNBcnIuZm9yRWFjaCgocmVjaXBlKSA9PiB7XHJcbiAgICAgIGNvbnN0IG1lYWxMaWtlcyA9IEludm9sdmVtZW50QVBJLmdldE1lYWxMaWtlcyhcclxuICAgICAgICBsaWtlcyxcclxuICAgICAgICByZWNpcGUuaWRNZWFsLFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmNyZWF0ZUNhcmQocmVjaXBlLCBtZWFsTGlrZXMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZGlzcGxheUNhdGVnb3JpZXMoY2F0ZWdvcmllc0Fycikge1xyXG4gICAgY2F0ZWdvcmllc0Fyci5mb3JFYWNoKChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICB0aGlzLmNyZWF0ZUNhdGVnb3J5Q2FyZChjYXRlZ29yeSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjcmVhdGVDYXRlZ29yeUNhcmQoe1xyXG4gICAgaWRDYXRlZ29yeSxcclxuICAgIHN0ckNhdGVnb3J5LFxyXG4gICAgc3RyQ2F0ZWdvcnlUaHVtYixcclxuICB9KSB7XHJcbiAgICBjb25zdCBMSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBMSS5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeV9fY2FyZCcpO1xyXG4gICAgTEkuc2V0QXR0cmlidXRlKCdpZCcsIGlkQ2F0ZWdvcnkpO1xyXG4gICAgTEkuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8aW1nIGNsYXNzPVwiY2F0ZWdvcnlfX2ltYWdlXCIgc3JjPVwiJHtzdHJDYXRlZ29yeVRodW1ifVwiIGFsdD1cIkRlbGljaW91cyAke3N0ckNhdGVnb3J5fVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnlfX2NvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeV9faGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiY2F0ZWdvcnlfX3RpdGxlXCI+JHtzdHJDYXRlZ29yeX08L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICAgIGxpc3QuYXBwZW5kQ2hpbGQoTEkpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNyZWF0ZUNhcmQoXHJcbiAgICB7IHN0ck1lYWwgPSAnJywgc3RyTWVhbFRodW1iID0gJycsIGlkTWVhbCB9LFxyXG4gICAgbGlrZXMgPSAwLFxyXG4gICkge1xyXG4gICAgY29uc3QgTEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgTEkuY2xhc3NMaXN0LmFkZCgncmVjaXBlc19fY2FyZCcpO1xyXG4gICAgTEkuc2V0QXR0cmlidXRlKCdpZCcsIGlkTWVhbCk7XHJcbiAgICBMSS5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxpbWcgY2xhc3M9XCJyZWNpcGVzX19pbWFnZVwiIHNyYz1cIiR7c3RyTWVhbFRodW1ifVwiIGFsdD1cIkRlbGljaW91cyAke3N0ck1lYWx9XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyZWNpcGVzX19jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVjaXBlc19faGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzPVwicmVjaXBlc19fdGl0bGVcIj4ke3N0ck1lYWx9PC9oMj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtaGVhcnRcIj48L2k+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVjaXBlc19fbGlrZXNcIj48c3Bhbj4ke2xpa2VzfTwvc3Bhbj4gbGlrZSR7XHJcbiAgbGlrZXMgPT09IDEgPyAnJyA6ICdzJ1xyXG59PC9zcGFuPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJlY2lwZXNfX2NvbW1lbnRzXCI+Q29tbWVudHM8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gICAgbGlzdC5hcHBlbmRDaGlsZChMSSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYWRkVG9MaWtlc0NvdW50ZXJET00oZWxlbWVudCkge1xyXG4gICAgY29uc3Qgbkxpa2VzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucmVjaXBlc19fbGlrZXMnKTtcclxuICAgIGNvbnN0IG9sZExpa2VzID0gK25MaWtlcy5jaGlsZHJlblswXS5pbm5lclRleHQ7XHJcbiAgICBjb25zdCBuZXdMaWtlcyA9IG9sZExpa2VzICsgMTtcclxuXHJcbiAgICBuTGlrZXMuaW5uZXJIVE1MID0gYDxzcGFuPiR7bmV3TGlrZXN9PC9zcGFuPiBsaWtlJHtcclxuICAgICAgbmV3TGlrZXMgPT09IDEgPyAnJyA6ICdzJ1xyXG4gICAgfWA7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY291bnRlclRleHQodHlwZSkge1xyXG4gICAgY29uc3QgY291bnRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY291bnRlcicpO1xyXG4gICAgbGV0IGkgPSAwO1xyXG4gICAgY291bnRlcnMuZm9yRWFjaCgoY291bnRlcikgPT4ge1xyXG4gICAgICBjb3VudGVyLmlubmVySFRNTCA9IGAke2kgPCAxID8gJ0NhdGVnb3JpZXMnIDogdHlwZX0gKCR7dGhpcy5pdGVtQ291bnQoXHJcbiAgICAgICAgY291bnRlci5uZXh0RWxlbWVudFNpYmxpbmcsXHJcbiAgICAgICl9KWA7XHJcbiAgICAgIGkgKz0gMTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGl0ZW1Db3VudChlbGVtZW50KSB7XHJcbiAgICByZXR1cm4gZWxlbWVudC5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgYXBwIGZyb20gJy4vbW9kdWxlcy9hcHAuanMnO1xyXG5cclxuYXBwLnN0YXJ0KCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==