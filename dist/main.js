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
___CSS_LOADER_EXPORT___.push([module.id, "::-webkit-scrollbar {\n  width: 8px;\n}\n\n::-webkit-scrollbar-track {\n  background: rgb(241, 241, 241, 0.2);\n}\n\n::-webkit-scrollbar-thumb {\n  background: rgb(168, 168, 168);\n}\n\n:root {\n  --dark-green: hsl(121, 31%, 44%);\n  --green: hsl(108, 35%, 60%);\n  --light-green: hsl(68, 59%, 85%);\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: rgb(139, 139, 139);\n}\n\nhtml {\n  box-sizing: border-box;\n  font-family: 'Mukta', sans-serif;\n}\n\nbody.noScroll {\n  overflow: hidden;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n  font-size: 1rem;\n}\n\na,\na:hover,\na:focus,\na:active {\n  text-decoration: none;\n  color: inherit;\n}\n\nul,\nli {\n  list-style: none;\n  padding: 0%;\n  margin: 0%;\n}\n\n.navbar {\n  height: 50px;\n  padding: 10px 32px;\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  align-items: center;\n  background-color: var(--dark-green);\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n\nspan.image {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.hero__logo {\n  width: 160px;\n}\n\n.navbar__logo .hero__logo {\n  width: 32px;\n}\n\n.navbar__recipes {\n  display: none;\n  font-size: 2rem;\n}\n\n.menu {\n  position: fixed;\n  top: 50px;\n  left: 0;\n  background-color: var(--dark-green);\n  width: 100%;\n  height: calc(100vh - 80px);\n  padding: 40px 0;\n  display: flex;\n  flex-direction: column;\n  transform: translateX(100%);\n  overflow-y: auto;\n  transition: all 0.5s ease;\n}\n\n.menu.active {\n  transform: translateX(0);\n}\n\n.menu__categories {\n  font-size: 1.4rem;\n  width: 100% !important;\n  height: 40px;\n  border-bottom: solid 1px black;\n  text-align: center;\n  margin: 0 auto 12px;\n  color: white;\n}\n\n.menu__list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.menu__item {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 32px;\n  padding: 12px;\n  border-bottom: 1px solid black;\n  color: white;\n}\n\n.menu__item img {\n  width: 50%;\n  max-width: 80px;\n}\n\n.menu__item span {\n  font-size: 1.2rem;\n  width: 50%;\n  text-align: left;\n}\n\n.fa-solid {\n  color: white;\n}\n\n.landing {\n  margin: 50px auto;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n}\n\n.hero.hidden {\n  display: none;\n}\n\n.landing__counter.counter {\n  width: 80%;\n  font-size: 1.3rem;\n  margin-top: 20px;\n}\n\n.hero {\n  height: calc(100vh - 80px);\n  width: 100%;\n  margin-inline: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 32px;\n  background-color: rgb(245, 244, 244);\n  box-shadow: 0 10px 20px rgba(145, 145, 145, 0.699);\n  border-bottom: 1px double lightblue;\n}\n\nspan > i.menu-toggle.hidden {\n  display: none;\n}\n\nspan > i.menu-toggle {\n  display: block;\n}\n\n.hero__title {\n  font-size: 2rem;\n}\n\n.hero__description {\n  padding: 12px;\n  border: 1px solid rgb(194, 196, 197);\n  background-color: white;\n}\n\n.counter {\n  width: 320px;\n  padding: 0 8px;\n  align-self: center;\n}\n\n.list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  list-style: none;\n  gap: 24px;\n  padding: 8px;\n}\n\n.category__card {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  cursor: pointer;\n}\n\n.category__image {\n  width: 100%;\n}\n\n.category__content {\n  width: 100%;\n  padding-inline: 20px;\n}\n\n.category__header {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.category__title {\n  font-size: 1.3rem;\n}\n\n.recipes {\n  margin: 0 auto;\n  width: 90%;\n}\n\n.recipes__card {\n  display: flex;\n  margin: 1.5%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  border-radius: 12px;\n}\n\n.recipes__image {\n  width: 100%;\n  border-radius: 12px 12px 0 0;\n}\n\n.recipes__content {\n  width: 100%;\n  padding-inline: 20px;\n}\n\n.recipes__header {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.recipes__title {\n  font-size: 1.3rem;\n}\n\n.recipes__likes {\n  display: block;\n  margin-top: -10px;\n  margin-bottom: 20px;\n}\n\n.fa-heart {\n  cursor: pointer;\n}\n\n.recipes__comments {\n  display: block;\n  width: 70%;\n  margin: 10px auto;\n  padding: 5px 10px;\n  cursor: pointer;\n}\n\n.recipes__popup {\n  display: block;\n  width: 100%;\n  height: 100%;\n  padding: 7.5% 10%;\n  position: fixed;\n  background-color: white;\n  backdrop-filter: blur(2px);\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  top: 0%;\n  left: 0%;\n  overflow-y: auto;\n  border-radius: 10px;\n}\n\n.recipes__popup_image {\n  width: 100%;\n}\n\n.recipes__popup .fa-xmark {\n  color: white;\n  background-color: black;\n  padding: 6px 8px;\n  position: fixed;\n  top: 0;\n  right: 0;\n}\n\n.recipes__popup_title {\n  padding: 4%;\n  font-size: 1.3rem;\n}\n\n.recipes__popup_tags {\n  width: 90%;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin: 0 auto 16px;\n}\n\n.recipes__popup_tagLi {\n  text-align: center;\n  font-size: 0.8rem;\n  min-width: 50px;\n  padding: 1px 6px;\n  background-color: var(--green);\n  border: 1px solid var(--dark-green);\n  border-radius: 10px;\n}\n\n.recipes__popup_instructs {\n  padding: 8%;\n  max-height: 60%;\n  overflow: auto;\n  background-color: var(--light-green);\n}\n\n.popup__instructs_line {\n  margin-top: 16px;\n  list-style: decimal;\n  font-size: 0.9rem;\n  line-height: 1.5rem;\n}\n\n.recipes__popup_video {\n  margin: 16px auto;\n  display: block;\n  text-align: center;\n}\n\n.recipes__popup_video a {\n  color: rgb(49, 80, 255);\n}\n\ndiv.recipes__popup_comments {\n  padding: 4%;\n  margin: 0 auto;\n}\n\n.recipes__popup_comment-count {\n  display: block;\n  text-align: center;\n  font-size: 1.3rem;\n  font-weight: bold;\n}\n\nul.recipes__popup_comments {\n  background-color: var(--light-green);\n  border: 1px solid var(--dark-green);\n  border-radius: 5px;\n  max-height: 216px;\n  overflow-y: auto;\n  margin: 20px 0;\n}\n\n.recipes__popup_comment {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  padding: 3px 8px;\n}\n\n.recipes__popup_comment:nth-child(even) {\n  background-color: var(--green);\n}\n\n.recipes__popup_comment-date {\n  grid-area: 1/2/2/3;\n  text-align: right;\n}\n\n.recipes__popup_comment-user {\n  grid-area: 1/1/2/2;\n}\n\n.recipes__popup_comment-content {\n  grid-area: 2/1/3/3;\n  padding: 3px 12px;\n}\n\n.recipes__popup_input-user {\n  width: 100%;\n  margin-top: 12px;\n  padding: 4px;\n  font-family: inherit;\n  outline: none;\n  border: 2px solid var(--green);\n  border-radius: 5px;\n}\n\n.recipes__popup_input-user:focus {\n  border: 2px solid var(--dark-green);\n}\n\n.recipes__popup_input-comment {\n  width: 100%;\n  margin: 12px 0;\n  padding: 4px;\n  font-family: inherit;\n  max-height: 200px;\n  min-height: 80px;\n  resize: vertical;\n  outline: none;\n  border: 2px solid var(--green);\n  border-radius: 5px;\n}\n\n.recipes__popup_input-comment:focus {\n  border: 2px solid var(--dark-green);\n}\n\n.recipes__popup_input-submit {\n  display: block;\n  width: auto;\n  padding: 6px 16px;\n  margin-inline: auto;\n  outline: none;\n  border: 2px solid var(--light-green);\n  border-radius: 5px;\n  color: var(--light-green);\n  background-color: black;\n  transition: all 0.3s;\n  cursor: pointer;\n}\n\n.recipes__popup_input-submit:hover {\n  border: 2px solid var(--dark-green);\n  transform: scale(1.1);\n}\n\nfooter {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  position: fixed;\n  top: calc(100% - 30px);\n  width: 100%;\n  padding: 8px;\n  height: 30px;\n  background-color: var(--dark-green);\n}\n\n.license-rights {\n  font-size: 10px;\n}\n\n.mobile_visible {\n  display: unset;\n}\n\n.desktop_visible {\n  display: none;\n}\n\n@media screen and (min-width: 768px) {\n  .navbar {\n    height: 70px;\n    justify-content: space-between;\n  }\n\n  .menu {\n    width: 32%;\n    transform: translateX(100vw);\n  }\n\n  .menu.active {\n    transform: translateX(70vw);\n  }\n\n  .menu-toggle {\n    color: white !important;\n    font-size: 1.3rem !important;\n  }\n\n  .menu__categories {\n    width: 100% !important;\n  }\n\n  .landing {\n    margin-top: 70px;\n    gap: 20px;\n  }\n\n  .landing__counter {\n    width: 80%;\n    font-size: 1.69rem;\n    margin-top: 20px;\n  }\n\n  .navbar__recipes {\n    display: block;\n  }\n\n  .navbar__hamburger {\n    display: none;\n  }\n\n  .license-rights {\n    font-size: 14px;\n  }\n\n  .recipes {\n    margin-top: 100px;\n    justify-content: flex-start;\n    margin-bottom: 100px;\n  }\n\n  .list {\n    justify-content: center;\n    margin: 0 auto;\n  }\n\n  .category__card {\n    border-radius: 6px;\n  }\n\n  .category__image {\n    border-radius: 6px 6px 0 0;\n  }\n\n  .recipes__card {\n    width: 20%;\n    min-width: 180px;\n    max-width: 200px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    height: 385px;\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n    border-radius: 12px;\n  }\n\n  .recipes__image {\n    width: 100%;\n    border-radius: 12px 12px 0 0;\n  }\n\n  .recipes__content {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    padding-inline: 20px;\n  }\n\n  .recipes__header {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    margin-top: 8px;\n  }\n\n  .recipes__title {\n    font-size: 0.95rem;\n    line-height: 1.15rem;\n    max-width: 130px;\n    align-self: center;\n  }\n\n  .recipes__likes {\n    display: block;\n    margin: 10px 0;\n  }\n\n  .recipes__comments {\n    display: block;\n    width: 70%;\n    margin: 10px auto;\n    padding: 5px 10px;\n  }\n\n  .recipes__comments:last-of-type {\n    margin-top: auto;\n  }\n\n  .recipes__popup {\n    display: flex;\n    flex-direction: column;\n  }\n\n  div.recipes__popup_comments {\n    padding: 8px;\n    width: 80%;\n  }\n\n  .recipes__popup_image {\n    width: 50%;\n    align-self: center;\n  }\n\n  .recipes__popup_instructs {\n    min-height: 300px;\n    padding: 40px;\n  }\n\n  .popup__instructs_line {\n    font-size: 1.1rem;\n  }\n\n  .mobile_visible {\n    display: none;\n  }\n\n  .desktop_visible {\n    display: unset;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Mukta');\n\n::-webkit-scrollbar {\n  width: 8px;\n}\n\n::-webkit-scrollbar-track {\n  background: rgb(241, 241, 241, 0.2);\n}\n\n::-webkit-scrollbar-thumb {\n  background: rgb(168, 168, 168);\n}\n\n:root {\n  --dark-green: hsl(121, 31%, 44%);\n  --green: hsl(108, 35%, 60%);\n  --light-green: hsl(68, 59%, 85%);\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: rgb(139, 139, 139);\n}\n\nhtml {\n  box-sizing: border-box;\n  font-family: 'Mukta', sans-serif;\n}\n\nbody.noScroll {\n  overflow: hidden;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n  font-size: 1rem;\n}\n\na,\na:hover,\na:focus,\na:active {\n  text-decoration: none;\n  color: inherit;\n}\n\nul,\nli {\n  list-style: none;\n  padding: 0%;\n  margin: 0%;\n}\n\n.navbar {\n  height: 50px;\n  padding: 10px 32px;\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  align-items: center;\n  background-color: var(--dark-green);\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n\nspan.image {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.hero__logo {\n  width: 160px;\n}\n\n.navbar__logo .hero__logo {\n  width: 32px;\n}\n\n.navbar__recipes {\n  display: none;\n  font-size: 2rem;\n}\n\n.menu {\n  position: fixed;\n  top: 50px;\n  left: 0;\n  background-color: var(--dark-green);\n  width: 100%;\n  height: calc(100vh - 80px);\n  padding: 40px 0;\n  display: flex;\n  flex-direction: column;\n  transform: translateX(100%);\n  overflow-y: auto;\n  transition: all 0.5s ease;\n}\n\n.menu.active {\n  transform: translateX(0);\n}\n\n.menu__categories {\n  font-size: 1.4rem;\n  width: 100% !important;\n  height: 40px;\n  border-bottom: solid 1px black;\n  text-align: center;\n  margin: 0 auto 12px;\n  color: white;\n}\n\n.menu__list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.menu__item {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 32px;\n  padding: 12px;\n  border-bottom: 1px solid black;\n  color: white;\n}\n\n.menu__item img {\n  width: 50%;\n  max-width: 80px;\n}\n\n.menu__item span {\n  font-size: 1.2rem;\n  width: 50%;\n  text-align: left;\n}\n\n.fa-solid {\n  color: white;\n}\n\n.landing {\n  margin: 50px auto;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n}\n\n.hero.hidden {\n  display: none;\n}\n\n.landing__counter.counter {\n  width: 80%;\n  font-size: 1.3rem;\n  margin-top: 20px;\n}\n\n.hero {\n  height: calc(100vh - 80px);\n  width: 100%;\n  margin-inline: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 32px;\n  background-color: rgb(245, 244, 244);\n  box-shadow: 0 10px 20px rgba(145, 145, 145, 0.699);\n  border-bottom: 1px double lightblue;\n}\n\nspan > i.menu-toggle.hidden {\n  display: none;\n}\n\nspan > i.menu-toggle {\n  display: block;\n}\n\n.hero__title {\n  font-size: 2rem;\n}\n\n.hero__description {\n  padding: 12px;\n  border: 1px solid rgb(194, 196, 197);\n  background-color: white;\n}\n\n.counter {\n  width: 320px;\n  padding: 0 8px;\n  align-self: center;\n}\n\n.list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  list-style: none;\n  gap: 24px;\n  padding: 8px;\n}\n\n.category__card {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  cursor: pointer;\n}\n\n.category__image {\n  width: 100%;\n}\n\n.category__content {\n  width: 100%;\n  padding-inline: 20px;\n}\n\n.category__header {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.category__title {\n  font-size: 1.3rem;\n}\n\n.recipes {\n  margin: 0 auto;\n  width: 90%;\n}\n\n.recipes__card {\n  display: flex;\n  margin: 1.5%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  border-radius: 12px;\n}\n\n.recipes__image {\n  width: 100%;\n  border-radius: 12px 12px 0 0;\n}\n\n.recipes__content {\n  width: 100%;\n  padding-inline: 20px;\n}\n\n.recipes__header {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.recipes__title {\n  font-size: 1.3rem;\n}\n\n.recipes__likes {\n  display: block;\n  margin-top: -10px;\n  margin-bottom: 20px;\n}\n\n.fa-heart {\n  cursor: pointer;\n}\n\n.recipes__comments {\n  display: block;\n  width: 70%;\n  margin: 10px auto;\n  padding: 5px 10px;\n  cursor: pointer;\n}\n\n.recipes__popup {\n  display: block;\n  width: 100%;\n  height: 100%;\n  padding: 7.5% 10%;\n  position: fixed;\n  background-color: white;\n  backdrop-filter: blur(2px);\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  top: 0%;\n  left: 0%;\n  overflow-y: auto;\n  border-radius: 10px;\n}\n\n.recipes__popup_image {\n  width: 100%;\n}\n\n.recipes__popup .fa-xmark {\n  color: white;\n  background-color: black;\n  padding: 6px 8px;\n  position: fixed;\n  top: 0;\n  right: 0;\n}\n\n.recipes__popup_title {\n  padding: 4%;\n  font-size: 1.3rem;\n}\n\n.recipes__popup_tags {\n  width: 90%;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin: 0 auto 16px;\n}\n\n.recipes__popup_tagLi {\n  text-align: center;\n  font-size: 0.8rem;\n  min-width: 50px;\n  padding: 1px 6px;\n  background-color: var(--green);\n  border: 1px solid var(--dark-green);\n  border-radius: 10px;\n}\n\n.recipes__popup_instructs {\n  padding: 8%;\n  max-height: 60%;\n  overflow: auto;\n  background-color: var(--light-green);\n}\n\n.popup__instructs_line {\n  margin-top: 16px;\n  list-style: decimal;\n  font-size: 0.9rem;\n  line-height: 1.5rem;\n}\n\n.recipes__popup_video {\n  margin: 16px auto;\n  display: block;\n  text-align: center;\n}\n\n.recipes__popup_video a {\n  color: rgb(49, 80, 255);\n}\n\ndiv.recipes__popup_comments {\n  padding: 4%;\n  margin: 0 auto;\n}\n\n.recipes__popup_comment-count {\n  display: block;\n  text-align: center;\n  font-size: 1.3rem;\n  font-weight: bold;\n}\n\nul.recipes__popup_comments {\n  background-color: var(--light-green);\n  border: 1px solid var(--dark-green);\n  border-radius: 5px;\n  max-height: 216px;\n  overflow-y: auto;\n  margin: 20px 0;\n}\n\n.recipes__popup_comment {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  padding: 3px 8px;\n}\n\n.recipes__popup_comment:nth-child(even) {\n  background-color: var(--green);\n}\n\n.recipes__popup_comment-date {\n  grid-area: 1/2/2/3;\n  text-align: right;\n}\n\n.recipes__popup_comment-user {\n  grid-area: 1/1/2/2;\n}\n\n.recipes__popup_comment-content {\n  grid-area: 2/1/3/3;\n  padding: 3px 12px;\n}\n\n.recipes__popup_input-user {\n  width: 100%;\n  margin-top: 12px;\n  padding: 4px;\n  font-family: inherit;\n  outline: none;\n  border: 2px solid var(--green);\n  border-radius: 5px;\n}\n\n.recipes__popup_input-user:focus {\n  border: 2px solid var(--dark-green);\n}\n\n.recipes__popup_input-comment {\n  width: 100%;\n  margin: 12px 0;\n  padding: 4px;\n  font-family: inherit;\n  max-height: 200px;\n  min-height: 80px;\n  resize: vertical;\n  outline: none;\n  border: 2px solid var(--green);\n  border-radius: 5px;\n}\n\n.recipes__popup_input-comment:focus {\n  border: 2px solid var(--dark-green);\n}\n\n.recipes__popup_input-submit {\n  display: block;\n  width: auto;\n  padding: 6px 16px;\n  margin-inline: auto;\n  outline: none;\n  border: 2px solid var(--light-green);\n  border-radius: 5px;\n  color: var(--light-green);\n  background-color: black;\n  transition: all 0.3s;\n  cursor: pointer;\n}\n\n.recipes__popup_input-submit:hover {\n  border: 2px solid var(--dark-green);\n  transform: scale(1.1);\n}\n\nfooter {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  position: fixed;\n  top: calc(100% - 30px);\n  width: 100%;\n  padding: 8px;\n  height: 30px;\n  background-color: var(--dark-green);\n}\n\n.license-rights {\n  font-size: 10px;\n}\n\n.mobile_visible {\n  display: unset;\n}\n\n.desktop_visible {\n  display: none;\n}\n\n@media screen and (min-width: 768px) {\n  .navbar {\n    height: 70px;\n    justify-content: space-between;\n  }\n\n  .menu {\n    width: 32%;\n    transform: translateX(100vw);\n  }\n\n  .menu.active {\n    transform: translateX(70vw);\n  }\n\n  .menu-toggle {\n    color: white !important;\n    font-size: 1.3rem !important;\n  }\n\n  .menu__categories {\n    width: 100% !important;\n  }\n\n  .landing {\n    margin-top: 70px;\n    gap: 20px;\n  }\n\n  .landing__counter {\n    width: 80%;\n    font-size: 1.69rem;\n    margin-top: 20px;\n  }\n\n  .navbar__recipes {\n    display: block;\n  }\n\n  .navbar__hamburger {\n    display: none;\n  }\n\n  .license-rights {\n    font-size: 14px;\n  }\n\n  .recipes {\n    margin-top: 100px;\n    justify-content: flex-start;\n    margin-bottom: 100px;\n  }\n\n  .list {\n    justify-content: center;\n    margin: 0 auto;\n  }\n\n  .category__card {\n    border-radius: 6px;\n  }\n\n  .category__image {\n    border-radius: 6px 6px 0 0;\n  }\n\n  .recipes__card {\n    width: 20%;\n    min-width: 180px;\n    max-width: 200px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    height: 385px;\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n    border-radius: 12px;\n  }\n\n  .recipes__image {\n    width: 100%;\n    border-radius: 12px 12px 0 0;\n  }\n\n  .recipes__content {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    padding-inline: 20px;\n  }\n\n  .recipes__header {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    margin-top: 8px;\n  }\n\n  .recipes__title {\n    font-size: 0.95rem;\n    line-height: 1.15rem;\n    max-width: 130px;\n    align-self: center;\n  }\n\n  .recipes__likes {\n    display: block;\n    margin: 10px 0;\n  }\n\n  .recipes__comments {\n    display: block;\n    width: 70%;\n    margin: 10px auto;\n    padding: 5px 10px;\n  }\n\n  .recipes__comments:last-of-type {\n    margin-top: auto;\n  }\n\n  .recipes__popup {\n    display: flex;\n    flex-direction: column;\n  }\n\n  div.recipes__popup_comments {\n    padding: 8px;\n    width: 80%;\n  }\n\n  .recipes__popup_image {\n    width: 50%;\n    align-self: center;\n  }\n\n  .recipes__popup_instructs {\n    min-height: 300px;\n    padding: 40px;\n  }\n\n  .popup__instructs_line {\n    font-size: 1.1rem;\n  }\n\n  .mobile_visible {\n    display: none;\n  }\n\n  .desktop_visible {\n    display: unset;\n  }\n}\n"],"sourceRoot":""}]);
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
    if (
      node.getAttribute(a.type).includes(a.item) !==
      node.parentNode.getAttribute(a.type).includes(a.item)
    )
      return node;
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
    const [burger, close] = document.querySelectorAll(
      'span > i.menu-toggle'
    );
    burger.classList.remove('hidden');
    close.classList.add('hidden');
  }

  static hideLanding() {
    document.querySelector('.hero').classList.add('hidden');
  }

  selectCategory = async (clickedElement) => {
    const parent = this.goBackToCommonParent(clickedElement, {
      type: 'class',
      item: 'category',
    });
    const categoryName = parent.children[1].innerText;
    this.LIST.innerHTML = '';
    const category = await _mealAPI_js__WEBPACK_IMPORTED_MODULE_3__["default"].getByCategory(categoryName);
    const allLikes = await _involvementAPI_js__WEBPACK_IMPORTED_MODULE_6__["default"].getAllLikes();
    const currentCategory = new _currentCategory_js__WEBPACK_IMPORTED_MODULE_4__["default"](category);
    _userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].displayRecipes(currentCategory.meals, allLikes);
    _userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].counterText(`${categoryName} Recipes`);
    window.scrollTo(0, 0);
    App.hideLanding();
  };

  menuLoadCategories = async (clickedElement) => {
    const parent = this.goBackToCommonParent(clickedElement, {
      type: 'class',
      item: 'menu__item',
    });
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
  };

  logoLoadCategories = async () => {
    this.LIST.innerHTML = '';
    const categories = await _mealAPI_js__WEBPACK_IMPORTED_MODULE_3__["default"].getCategories();
    _userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].displayCategories(categories);
    _userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].counterText('Categories');
    App.closeMenu();
  };

  addLike = async (clickedElement) => {
    const card = clickedElement.parentNode.parentNode.parentNode;
    const mealId = card.getAttribute('id');
    await _involvementAPI_js__WEBPACK_IMPORTED_MODULE_6__["default"].addLike(mealId);
    _userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].addToLikesCounterDOM(card);
  };

  loadPopup = async (clickedElement) => {
    const card = clickedElement.parentNode.parentNode;
    const mealId = card.getAttribute('id');
    const meal = await _mealAPI_js__WEBPACK_IMPORTED_MODULE_3__["default"].getRecipe(mealId);
    document.body.classList.add('noScroll');

    await _involvementAPI_js__WEBPACK_IMPORTED_MODULE_6__["default"].addComment(
      { username: '', comment: '' },
      mealId
    );

    let comments = await _involvementAPI_js__WEBPACK_IMPORTED_MODULE_6__["default"].getComments(mealId);
    comments = comments.filter((comment) => comment.username !== '');
    const currentMeal = new _currentMeal_js__WEBPACK_IMPORTED_MODULE_5__["default"](meal, comments);

    _popUp_js__WEBPACK_IMPORTED_MODULE_7__["default"].pop({
      ...currentMeal,
      comments,
      type: 'Recipe',
    });
  };

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
    const instructs = PopUp.instructionsTemplate(
      this.data.strInstructions,
    );

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
      if (line === '') return;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUIsb0JBQW9CLEtBQUssd0JBQXdCLHFCQUFxQixLQUFLLEdBQUcsU0FBUyxnRkFBZ0YsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLFFBQVEsWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFX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ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL3NyYy9tb2R1bGVzL2FwcC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9zcmMvbW9kdWxlcy9jdXJyZW50Q2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vc3JjL21vZHVsZXMvY3VycmVudE1lYWwuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vc3JjL21vZHVsZXMvZmV0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL3NyYy9tb2R1bGVzL2ludm9sdmVtZW50QVBJLmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL3NyYy9tb2R1bGVzL21lYWxBUEkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9zcmMvbW9kdWxlcy9wb3BVcC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9zcmMvbW9kdWxlcy91c2VySW50ZXJmYWNlLmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NdWt0YSk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDhweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDEsIDI0MSwgMC4yKTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTY4LCAxNjgsIDE2OCk7XFxufVxcblxcbjpyb290IHtcXG4gIC0tZGFyay1ncmVlbjogaHNsKDEyMSwgMzElLCA0NCUpO1xcbiAgLS1ncmVlbjogaHNsKDEwOCwgMzUlLCA2MCUpO1xcbiAgLS1saWdodC1ncmVlbjogaHNsKDY4LCA1OSUsIDg1JSk7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiKDEzOSwgMTM5LCAxMzkpO1xcbn1cXG5cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ011a3RhJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keS5ub1Njcm9sbCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuYSxcXG5hOmhvdmVyLFxcbmE6Zm9jdXMsXFxuYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbnVsLFxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwJTtcXG4gIG1hcmdpbjogMCU7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgcGFkZGluZzogMTBweCAzMnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZWVuKTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5zcGFuLmltYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5oZXJvX19sb2dvIHtcXG4gIHdpZHRoOiAxNjBweDtcXG59XFxuXFxuLm5hdmJhcl9fbG9nbyAuaGVyb19fbG9nbyB7XFxuICB3aWR0aDogMzJweDtcXG59XFxuXFxuLm5hdmJhcl9fcmVjaXBlcyB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ubWVudSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwcHg7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmVlbik7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xcbiAgcGFkZGluZzogNDBweCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG59XFxuXFxuLm1lbnUuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG59XFxuXFxuLm1lbnVfX2NhdGVnb3JpZXMge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwIGF1dG8gMTJweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1lbnVfX2xpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZW51X19pdGVtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMzJweDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tZW51X19pdGVtIGltZyB7XFxuICB3aWR0aDogNTAlO1xcbiAgbWF4LXdpZHRoOiA4MHB4O1xcbn1cXG5cXG4ubWVudV9faXRlbSBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgd2lkdGg6IDUwJTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5mYS1zb2xpZCB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5sYW5kaW5nIHtcXG4gIG1hcmdpbjogNTBweCBhdXRvO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDQwcHg7XFxufVxcblxcbi5oZXJvLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubGFuZGluZ19fY291bnRlci5jb3VudGVyIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5oZXJvIHtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDMycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDQsIDI0NCk7XFxuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDE0NSwgMTQ1LCAxNDUsIDAuNjk5KTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkb3VibGUgbGlnaHRibHVlO1xcbn1cXG5cXG5zcGFuID4gaS5tZW51LXRvZ2dsZS5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuc3BhbiA+IGkubWVudS10b2dnbGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5oZXJvX190aXRsZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5oZXJvX19kZXNjcmlwdGlvbiB7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5NCwgMTk2LCAxOTcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb3VudGVyIHtcXG4gIHdpZHRoOiAzMjBweDtcXG4gIHBhZGRpbmc6IDAgOHB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGdhcDogMjRweDtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLmNhdGVnb3J5X19jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2F0ZWdvcnlfX2ltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2F0ZWdvcnlfX2NvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWlubGluZTogMjBweDtcXG59XFxuXFxuLmNhdGVnb3J5X19oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2F0ZWdvcnlfX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ucmVjaXBlcyB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbi5yZWNpcGVzX19jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDEuNSU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxufVxcblxcbi5yZWNpcGVzX19pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwIDA7XFxufVxcblxcbi5yZWNpcGVzX19jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XFxufVxcblxcbi5yZWNpcGVzX19oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJlY2lwZXNfX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ucmVjaXBlc19fbGlrZXMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tdG9wOiAtMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5mYS1oZWFydCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yZWNpcGVzX19jb21tZW50cyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA3MCU7XFxuICBtYXJnaW46IDEwcHggYXV0bztcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXAge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDcuNSUgMTAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XFxuICB0b3A6IDAlO1xcbiAgbGVmdDogMCU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnJlY2lwZXNfX3BvcHVwX2ltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXAgLmZhLXhtYXJrIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogNnB4IDhweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXBfdGl0bGUge1xcbiAgcGFkZGluZzogNCU7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnJlY2lwZXNfX3BvcHVwX3RhZ3Mge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDEwcHg7XFxuICBtYXJnaW46IDAgYXV0byAxNnB4O1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXBfdGFnTGkge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBtaW4td2lkdGg6IDUwcHg7XFxuICBwYWRkaW5nOiAxcHggNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ncmVlbik7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXBfaW5zdHJ1Y3RzIHtcXG4gIHBhZGRpbmc6IDglO1xcbiAgbWF4LWhlaWdodDogNjAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmVlbik7XFxufVxcblxcbi5wb3B1cF9faW5zdHJ1Y3RzX2xpbmUge1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG4gIGxpc3Qtc3R5bGU6IGRlY2ltYWw7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbi5yZWNpcGVzX19wb3B1cF92aWRlbyB7XFxuICBtYXJnaW46IDE2cHggYXV0bztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXBfdmlkZW8gYSB7XFxuICBjb2xvcjogcmdiKDQ5LCA4MCwgMjU1KTtcXG59XFxuXFxuZGl2LnJlY2lwZXNfX3BvcHVwX2NvbW1lbnRzIHtcXG4gIHBhZGRpbmc6IDQlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5yZWNpcGVzX19wb3B1cF9jb21tZW50LWNvdW50IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxudWwucmVjaXBlc19fcG9wdXBfY29tbWVudHMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JlZW4pO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ncmVlbik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXgtaGVpZ2h0OiAyMTZweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuLnJlY2lwZXNfX3BvcHVwX2NvbW1lbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzcHggOHB4O1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXBfY29tbWVudDpudGgtY2hpbGQoZXZlbikge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXBfY29tbWVudC1kYXRlIHtcXG4gIGdyaWQtYXJlYTogMS8yLzIvMztcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXBfY29tbWVudC11c2VyIHtcXG4gIGdyaWQtYXJlYTogMS8xLzIvMjtcXG59XFxuXFxuLnJlY2lwZXNfX3BvcHVwX2NvbW1lbnQtY29udGVudCB7XFxuICBncmlkLWFyZWE6IDIvMS8zLzM7XFxuICBwYWRkaW5nOiAzcHggMTJweDtcXG59XFxuXFxuLnJlY2lwZXNfX3BvcHVwX2lucHV0LXVzZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgcGFkZGluZzogNHB4O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ3JlZW4pO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXBfaW5wdXQtdXNlcjpmb2N1cyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrLWdyZWVuKTtcXG59XFxuXFxuLnJlY2lwZXNfX3BvcHVwX2lucHV0LWNvbW1lbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDEycHggMDtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgbWF4LWhlaWdodDogMjAwcHg7XFxuICBtaW4taGVpZ2h0OiA4MHB4O1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ncmVlbik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5yZWNpcGVzX19wb3B1cF9pbnB1dC1jb21tZW50OmZvY3VzIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRhcmstZ3JlZW4pO1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXBfaW5wdXQtc3VibWl0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IGF1dG87XFxuICBwYWRkaW5nOiA2cHggMTZweDtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGlnaHQtZ3JlZW4pO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyZWVuKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yZWNpcGVzX19wb3B1cF9pbnB1dC1zdWJtaXQ6aG92ZXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGFyay1ncmVlbik7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogY2FsYygxMDAlIC0gMzBweCk7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JlZW4pO1xcbn1cXG5cXG4ubGljZW5zZS1yaWdodHMge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG4ubW9iaWxlX3Zpc2libGUge1xcbiAgZGlzcGxheTogdW5zZXQ7XFxufVxcblxcbi5kZXNrdG9wX3Zpc2libGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5uYXZiYXIge1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG5cXG4gIC5tZW51IHtcXG4gICAgd2lkdGg6IDMyJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHZ3KTtcXG4gIH1cXG5cXG4gIC5tZW51LmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg3MHZ3KTtcXG4gIH1cXG5cXG4gIC5tZW51LXRvZ2dsZSB7XFxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xcbiAgICBmb250LXNpemU6IDEuM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLm1lbnVfX2NhdGVnb3JpZXMge1xcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmxhbmRpbmcge1xcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICB9XFxuXFxuICAubGFuZGluZ19fY291bnRlciB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGZvbnQtc2l6ZTogMS42OXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gIH1cXG5cXG4gIC5uYXZiYXJfX3JlY2lwZXMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC5uYXZiYXJfX2hhbWJ1cmdlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAubGljZW5zZS1yaWdodHMge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICB9XFxuXFxuICAucmVjaXBlcyB7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbiAgfVxcblxcbiAgLmxpc3Qge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICB9XFxuXFxuICAuY2F0ZWdvcnlfX2NhcmQge1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICB9XFxuXFxuICAuY2F0ZWdvcnlfX2ltYWdlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4IDZweCAwIDA7XFxuICB9XFxuXFxuICAucmVjaXBlc19fY2FyZCB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIG1pbi13aWR0aDogMTgwcHg7XFxuICAgIG1heC13aWR0aDogMjAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzODVweDtcXG4gICAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIH1cXG5cXG4gIC5yZWNpcGVzX19pbWFnZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMCAwO1xcbiAgfVxcblxcbiAgLnJlY2lwZXNfX2NvbnRlbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHBhZGRpbmctaW5saW5lOiAyMHB4O1xcbiAgfVxcblxcbiAgLnJlY2lwZXNfX2hlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxuICB9XFxuXFxuICAucmVjaXBlc19fdGl0bGUge1xcbiAgICBmb250LXNpemU6IDAuOTVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1cmVtO1xcbiAgICBtYXgtd2lkdGg6IDEzMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB9XFxuXFxuICAucmVjaXBlc19fbGlrZXMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxuICB9XFxuXFxuICAucmVjaXBlc19fY29tbWVudHMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgfVxcblxcbiAgLnJlY2lwZXNfX2NvbW1lbnRzOmxhc3Qtb2YtdHlwZSB7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICB9XFxuXFxuICAucmVjaXBlc19fcG9wdXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgZGl2LnJlY2lwZXNfX3BvcHVwX2NvbW1lbnRzIHtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgfVxcblxcbiAgLnJlY2lwZXNfX3BvcHVwX2ltYWdlIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgfVxcblxcbiAgLnJlY2lwZXNfX3BvcHVwX2luc3RydWN0cyB7XFxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbiAgfVxcblxcbiAgLnBvcHVwX19pbnN0cnVjdHNfbGluZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgfVxcblxcbiAgLm1vYmlsZV92aXNpYmxlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5kZXNrdG9wX3Zpc2libGUge1xcbiAgICBkaXNwbGF5OiB1bnNldDtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQywyQkFBMkI7RUFDM0IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7O0VBR0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTs7OztFQUlFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsbUNBQW1DO0VBQ25DLGVBQWU7RUFDZixNQUFNO0VBQ04sV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFB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aW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NdWt0YScpO1xcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDhweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDEsIDI0MSwgMC4yKTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTY4LCAxNjgsIDE2OCk7XFxufVxcblxcbjpyb290IHtcXG4gIC0tZGFyay1ncmVlbjogaHNsKDEyMSwgMzElLCA0NCUpO1xcbiAgLS1ncmVlbjogaHNsKDEwOCwgMzUlLCA2MCUpO1xcbiAgLS1saWdodC1ncmVlbjogaHNsKDY4LCA1OSUsIDg1JSk7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiKDEzOSwgMTM5LCAxMzkpO1xcbn1cXG5cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ011a3RhJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keS5ub1Njcm9sbCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuYSxcXG5hOmhvdmVyLFxcbmE6Zm9jdXMsXFxuYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbnVsLFxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwJTtcXG4gIG1hcmdpbjogMCU7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgcGFkZGluZzogMTBweCAzMnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZWVuKTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5zcGFuLmltYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5oZXJvX19sb2dvIHtcXG4gIHdpZHRoOiAxNjBweDtcXG59XFxuXFxuLm5hdmJhcl9fbG9nbyAuaGVyb19fbG9nbyB7XFxuICB3aWR0aDogMzJweDtcXG59XFxuXFxuLm5hdmJhcl9fcmVjaXBlcyB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ubWVudSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwcHg7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmVlbik7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xcbiAgcGFkZGluZzogNDBweCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG59XFxuXFxuLm1lbnUuYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG59XFxuXFxuLm1lbnVfX2NhdGVnb3JpZXMge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGJsYWNrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwIGF1dG8gMTJweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1lbnVfX2xpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZW51X19pdGVtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMzJweDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tZW51X19pdGVtIGltZyB7XFxuICB3aWR0aDogNTAlO1xcbiAgbWF4LXdpZHRoOiA4MHB4O1xcbn1cXG5cXG4ubWVudV9faXRlbSBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgd2lkdGg6IDUwJTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5mYS1zb2xpZCB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5sYW5kaW5nIHtcXG4gIG1hcmdpbjogNTBweCBhdXRvO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDQwcHg7XFxufVxcblxcbi5oZXJvLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubGFuZGluZ19fY291bnRlci5jb3VudGVyIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5oZXJvIHtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDMycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDQsIDI0NCk7XFxuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDE0NSwgMTQ1LCAxNDUsIDAuNjk5KTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkb3VibGUgbGlnaHRibHVlO1xcbn1cXG5cXG5zcGFuID4gaS5tZW51LXRvZ2dsZS5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuc3BhbiA+IGkubWVudS10b2dnbGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5oZXJvX190aXRsZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5oZXJvX19kZXNjcmlwdGlvbiB7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5NCwgMTk2LCAxOTcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb3VudGVyIHtcXG4gIHdpZHRoOiAzMjBweDtcXG4gIHBhZGRpbmc6IDAgOHB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGdhcDogMjRweDtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLmNhdGVnb3J5X19jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2F0ZWdvcnlfX2ltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2F0ZWdvcnlfX2NvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWlubGluZTogMjBweDtcXG59XFxuXFxuLmNhdGVnb3J5X19oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2F0ZWdvcnlfX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ucmVjaXBlcyB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiA5MCU7XFxufVxcblxcbi5yZWNpcGVzX19jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDEuNSU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxufVxcblxcbi5yZWNpcGVzX19pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwIDA7XFxufVxcblxcbi5yZWNpcGVzX19jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XFxufVxcblxcbi5yZWNpcGVzX19oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJlY2lwZXNfX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ucmVjaXBlc19fbGlrZXMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tdG9wOiAtMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5mYS1oZWFydCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yZWNpcGVzX19jb21tZW50cyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA3MCU7XFxuICBtYXJnaW46IDEwcHggYXV0bztcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXAge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDcuNSUgMTAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XFxuICB0b3A6IDAlO1xcbiAgbGVmdDogMCU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnJlY2lwZXNfX3BvcHVwX2ltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXAgLmZhLXhtYXJrIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogNnB4IDhweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXBfdGl0bGUge1xcbiAgcGFkZGluZzogNCU7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnJlY2lwZXNfX3BvcHVwX3RhZ3Mge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDEwcHg7XFxuICBtYXJnaW46IDAgYXV0byAxNnB4O1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXBfdGFnTGkge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBtaW4td2lkdGg6IDUwcHg7XFxuICBwYWRkaW5nOiAxcHggNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ncmVlbik7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXBfaW5zdHJ1Y3RzIHtcXG4gIHBhZGRpbmc6IDglO1xcbiAgbWF4LWhlaWdodDogNjAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmVlbik7XFxufVxcblxcbi5wb3B1cF9faW5zdHJ1Y3RzX2xpbmUge1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG4gIGxpc3Qtc3R5bGU6IGRlY2ltYWw7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbi5yZWNpcGVzX19wb3B1cF92aWRlbyB7XFxuICBtYXJnaW46IDE2cHggYXV0bztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXBfdmlkZW8gYSB7XFxuICBjb2xvcjogcmdiKDQ5LCA4MCwgMjU1KTtcXG59XFxuXFxuZGl2LnJlY2lwZXNfX3BvcHVwX2NvbW1lbnRzIHtcXG4gIHBhZGRpbmc6IDQlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5yZWNpcGVzX19wb3B1cF9jb21tZW50LWNvdW50IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxudWwucmVjaXBlc19fcG9wdXBfY29tbWVudHMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JlZW4pO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ncmVlbik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXgtaGVpZ2h0OiAyMTZweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuLnJlY2lwZXNfX3BvcHVwX2NvbW1lbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzcHggOHB4O1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXBfY29tbWVudDpudGgtY2hpbGQoZXZlbikge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXBfY29tbWVudC1kYXRlIHtcXG4gIGdyaWQtYXJlYTogMS8yLzIvMztcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXBfY29tbWVudC11c2VyIHtcXG4gIGdyaWQtYXJlYTogMS8xLzIvMjtcXG59XFxuXFxuLnJlY2lwZXNfX3BvcHVwX2NvbW1lbnQtY29udGVudCB7XFxuICBncmlkLWFyZWE6IDIvMS8zLzM7XFxuICBwYWRkaW5nOiAzcHggMTJweDtcXG59XFxuXFxuLnJlY2lwZXNfX3BvcHVwX2lucHV0LXVzZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgcGFkZGluZzogNHB4O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ3JlZW4pO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXBfaW5wdXQtdXNlcjpmb2N1cyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrLWdyZWVuKTtcXG59XFxuXFxuLnJlY2lwZXNfX3BvcHVwX2lucHV0LWNvbW1lbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDEycHggMDtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgbWF4LWhlaWdodDogMjAwcHg7XFxuICBtaW4taGVpZ2h0OiA4MHB4O1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ncmVlbik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5yZWNpcGVzX19wb3B1cF9pbnB1dC1jb21tZW50OmZvY3VzIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRhcmstZ3JlZW4pO1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXBfaW5wdXQtc3VibWl0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IGF1dG87XFxuICBwYWRkaW5nOiA2cHggMTZweDtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGlnaHQtZ3JlZW4pO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyZWVuKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yZWNpcGVzX19wb3B1cF9pbnB1dC1zdWJtaXQ6aG92ZXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGFyay1ncmVlbik7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogY2FsYygxMDAlIC0gMzBweCk7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JlZW4pO1xcbn1cXG5cXG4ubGljZW5zZS1yaWdodHMge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG4ubW9iaWxlX3Zpc2libGUge1xcbiAgZGlzcGxheTogdW5zZXQ7XFxufVxcblxcbi5kZXNrdG9wX3Zpc2libGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5uYXZiYXIge1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG5cXG4gIC5tZW51IHtcXG4gICAgd2lkdGg6IDMyJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHZ3KTtcXG4gIH1cXG5cXG4gIC5tZW51LmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg3MHZ3KTtcXG4gIH1cXG5cXG4gIC5tZW51LXRvZ2dsZSB7XFxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xcbiAgICBmb250LXNpemU6IDEuM3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLm1lbnVfX2NhdGVnb3JpZXMge1xcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmxhbmRpbmcge1xcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICB9XFxuXFxuICAubGFuZGluZ19fY291bnRlciB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGZvbnQtc2l6ZTogMS42OXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gIH1cXG5cXG4gIC5uYXZiYXJfX3JlY2lwZXMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC5uYXZiYXJfX2hhbWJ1cmdlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAubGljZW5zZS1yaWdodHMge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICB9XFxuXFxuICAucmVjaXBlcyB7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbiAgfVxcblxcbiAgLmxpc3Qge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICB9XFxuXFxuICAuY2F0ZWdvcnlfX2NhcmQge1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICB9XFxuXFxuICAuY2F0ZWdvcnlfX2ltYWdlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4IDZweCAwIDA7XFxuICB9XFxuXFxuICAucmVjaXBlc19fY2FyZCB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIG1pbi13aWR0aDogMTgwcHg7XFxuICAgIG1heC13aWR0aDogMjAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzODVweDtcXG4gICAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIH1cXG5cXG4gIC5yZWNpcGVzX19pbWFnZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMCAwO1xcbiAgfVxcblxcbiAgLnJlY2lwZXNfX2NvbnRlbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHBhZGRpbmctaW5saW5lOiAyMHB4O1xcbiAgfVxcblxcbiAgLnJlY2lwZXNfX2hlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxuICB9XFxuXFxuICAucmVjaXBlc19fdGl0bGUge1xcbiAgICBmb250LXNpemU6IDAuOTVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1cmVtO1xcbiAgICBtYXgtd2lkdGg6IDEzMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB9XFxuXFxuICAucmVjaXBlc19fbGlrZXMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxuICB9XFxuXFxuICAucmVjaXBlc19fY29tbWVudHMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgfVxcblxcbiAgLnJlY2lwZXNfX2NvbW1lbnRzOmxhc3Qtb2YtdHlwZSB7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICB9XFxuXFxuICAucmVjaXBlc19fcG9wdXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgZGl2LnJlY2lwZXNfX3BvcHVwX2NvbW1lbnRzIHtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgfVxcblxcbiAgLnJlY2lwZXNfX3BvcHVwX2ltYWdlIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgfVxcblxcbiAgLnJlY2lwZXNfX3BvcHVwX2luc3RydWN0cyB7XFxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbiAgfVxcblxcbiAgLnBvcHVwX19pbnN0cnVjdHNfbGluZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgfVxcblxcbiAgLm1vYmlsZV92aXNpYmxlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5kZXNrdG9wX3Zpc2libGUge1xcbiAgICBkaXNwbGF5OiB1bnNldDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4uL2luZGV4LmNzcyc7XG5pbXBvcnQgbG9nbyBmcm9tICcuLi9hc3NldHMvYnVyZ2VyLWxvZ28ucG5nJztcbmltcG9ydCBVc2VySW50ZXJmYWNlIGZyb20gJy4vdXNlckludGVyZmFjZS5qcyc7XG5pbXBvcnQgTWVhbEFQSSBmcm9tICcuL21lYWxBUEkuanMnO1xuaW1wb3J0IEN1cnJlbnRDYXRlZ29yeSBmcm9tICcuL2N1cnJlbnRDYXRlZ29yeS5qcyc7XG5pbXBvcnQgQ3VycmVudE1lYWwgZnJvbSAnLi9jdXJyZW50TWVhbC5qcyc7XG5pbXBvcnQgSW52b2x2ZW1lbnRBUEkgZnJvbSAnLi9pbnZvbHZlbWVudEFQSS5qcyc7XG5pbXBvcnQgUG9wVXAgZnJvbSAnLi9wb3BVcC5qcyc7XG5pbXBvcnQgTWVudSBmcm9tICcuL21lbnUuanMnO1xuXG5jbGFzcyBBcHAge1xuICBzdGFydCgpIHtcbiAgICB0aGlzLmltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmltYWdlJyk7XG4gICAgdGhpcy5hc3luY0VudigpO1xuICB9XG5cbiAgc2V0TG9nbygpIHtcbiAgICBBcnJheS5mcm9tKHRoaXMuaW1hZ2VDb250YWluZXIpLmZvckVhY2goKGNvbnRhaW5lcikgPT4ge1xuICAgICAgY29uc3QgbG9nb0ltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgbG9nb0ltZy5zcmMgPSBsb2dvO1xuICAgICAgbG9nb0ltZy5jbGFzc0xpc3QuYWRkKCdoZXJvX19sb2dvJyk7XG4gICAgICBsb2dvSW1nLmFsdCA9ICdZdW1teSBSZWNpcGVzIExvZ28nO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29JbWcpO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgYXN5bmNFbnYoKSB7XG4gICAgdGhpcy5zZXRMb2dvKCk7XG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IE1lYWxBUEkuZ2V0Q2F0ZWdvcmllcygpO1xuICAgIE1lbnUuZGlzcGxheUNhdGVnb3JpZXMoY2F0ZWdvcmllcyk7XG4gICAgVXNlckludGVyZmFjZS5kaXNwbGF5Q2F0ZWdvcmllcyhjYXRlZ29yaWVzKTtcbiAgICBVc2VySW50ZXJmYWNlLmNvdW50ZXJUZXh0KCdDYXRlZ29yaWVzJyk7XG4gICAgdGhpcy5zZWxlY3RUYWdzKCk7XG4gICAgdGhpcy5zZXRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGdvQmFja1RvQ29tbW9uUGFyZW50ID0gKG5vZGUsIGEpID0+IHtcbiAgICBpZiAoXG4gICAgICBub2RlLmdldEF0dHJpYnV0ZShhLnR5cGUpLmluY2x1ZGVzKGEuaXRlbSkgIT09XG4gICAgICBub2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKGEudHlwZSkuaW5jbHVkZXMoYS5pdGVtKVxuICAgIClcbiAgICAgIHJldHVybiBub2RlO1xuICAgIHJldHVybiB0aGlzLmdvQmFja1RvQ29tbW9uUGFyZW50KG5vZGUucGFyZW50Tm9kZSwgYSk7XG4gIH07XG5cbiAgc3RhdGljIHRvZ2dsZU1lbnUoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdub1Njcm9sbCcpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51JykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtdG9nZ2xlJykuZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgICAgaWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBjbG9zZU1lbnUoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdub1Njcm9sbCcpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51JykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8nKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBjb25zdCBbYnVyZ2VyLCBjbG9zZV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJ3NwYW4gPiBpLm1lbnUtdG9nZ2xlJ1xuICAgICk7XG4gICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICB9XG5cbiAgc3RhdGljIGhpZGVMYW5kaW5nKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIH1cblxuICBzZWxlY3RDYXRlZ29yeSA9IGFzeW5jIChjbGlja2VkRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZ29CYWNrVG9Db21tb25QYXJlbnQoY2xpY2tlZEVsZW1lbnQsIHtcbiAgICAgIHR5cGU6ICdjbGFzcycsXG4gICAgICBpdGVtOiAnY2F0ZWdvcnknLFxuICAgIH0pO1xuICAgIGNvbnN0IGNhdGVnb3J5TmFtZSA9IHBhcmVudC5jaGlsZHJlblsxXS5pbm5lclRleHQ7XG4gICAgdGhpcy5MSVNULmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gYXdhaXQgTWVhbEFQSS5nZXRCeUNhdGVnb3J5KGNhdGVnb3J5TmFtZSk7XG4gICAgY29uc3QgYWxsTGlrZXMgPSBhd2FpdCBJbnZvbHZlbWVudEFQSS5nZXRBbGxMaWtlcygpO1xuICAgIGNvbnN0IGN1cnJlbnRDYXRlZ29yeSA9IG5ldyBDdXJyZW50Q2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICAgIFVzZXJJbnRlcmZhY2UuZGlzcGxheVJlY2lwZXMoY3VycmVudENhdGVnb3J5Lm1lYWxzLCBhbGxMaWtlcyk7XG4gICAgVXNlckludGVyZmFjZS5jb3VudGVyVGV4dChgJHtjYXRlZ29yeU5hbWV9IFJlY2lwZXNgKTtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgQXBwLmhpZGVMYW5kaW5nKCk7XG4gIH07XG5cbiAgbWVudUxvYWRDYXRlZ29yaWVzID0gYXN5bmMgKGNsaWNrZWRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5nb0JhY2tUb0NvbW1vblBhcmVudChjbGlja2VkRWxlbWVudCwge1xuICAgICAgdHlwZTogJ2NsYXNzJyxcbiAgICAgIGl0ZW06ICdtZW51X19pdGVtJyxcbiAgICB9KTtcbiAgICBjb25zdCBjYXRlZ29yeU5hbWUgPSBwYXJlbnQuY2hpbGRyZW5bMV0uaW5uZXJUZXh0O1xuICAgIHRoaXMuTElTVC5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgTWVhbEFQSS5nZXRCeUNhdGVnb3J5KGNhdGVnb3J5TmFtZSk7XG4gICAgY29uc3QgYWxsTGlrZXMgPSBhd2FpdCBJbnZvbHZlbWVudEFQSS5nZXRBbGxMaWtlcygpO1xuICAgIGNvbnN0IGN1cnJlbnRDYXRlZ29yeSA9IG5ldyBDdXJyZW50Q2F0ZWdvcnkoY2F0ZWdvcmllcyk7XG4gICAgVXNlckludGVyZmFjZS5kaXNwbGF5UmVjaXBlcyhjdXJyZW50Q2F0ZWdvcnkubWVhbHMsIGFsbExpa2VzKTtcbiAgICBVc2VySW50ZXJmYWNlLmNvdW50ZXJUZXh0KGAke2NhdGVnb3J5TmFtZX0gUmVjaXBlc2ApO1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICBBcHAuaGlkZUxhbmRpbmcoKTtcbiAgICBBcHAudG9nZ2xlTWVudSgpO1xuICB9O1xuXG4gIGxvZ29Mb2FkQ2F0ZWdvcmllcyA9IGFzeW5jICgpID0+IHtcbiAgICB0aGlzLkxJU1QuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IE1lYWxBUEkuZ2V0Q2F0ZWdvcmllcygpO1xuICAgIFVzZXJJbnRlcmZhY2UuZGlzcGxheUNhdGVnb3JpZXMoY2F0ZWdvcmllcyk7XG4gICAgVXNlckludGVyZmFjZS5jb3VudGVyVGV4dCgnQ2F0ZWdvcmllcycpO1xuICAgIEFwcC5jbG9zZU1lbnUoKTtcbiAgfTtcblxuICBhZGRMaWtlID0gYXN5bmMgKGNsaWNrZWRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY2FyZCA9IGNsaWNrZWRFbGVtZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIGNvbnN0IG1lYWxJZCA9IGNhcmQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIGF3YWl0IEludm9sdmVtZW50QVBJLmFkZExpa2UobWVhbElkKTtcbiAgICBVc2VySW50ZXJmYWNlLmFkZFRvTGlrZXNDb3VudGVyRE9NKGNhcmQpO1xuICB9O1xuXG4gIGxvYWRQb3B1cCA9IGFzeW5jIChjbGlja2VkRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBjbGlja2VkRWxlbWVudC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgY29uc3QgbWVhbElkID0gY2FyZC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgY29uc3QgbWVhbCA9IGF3YWl0IE1lYWxBUEkuZ2V0UmVjaXBlKG1lYWxJZCk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdub1Njcm9sbCcpO1xuXG4gICAgYXdhaXQgSW52b2x2ZW1lbnRBUEkuYWRkQ29tbWVudChcbiAgICAgIHsgdXNlcm5hbWU6ICcnLCBjb21tZW50OiAnJyB9LFxuICAgICAgbWVhbElkXG4gICAgKTtcblxuICAgIGxldCBjb21tZW50cyA9IGF3YWl0IEludm9sdmVtZW50QVBJLmdldENvbW1lbnRzKG1lYWxJZCk7XG4gICAgY29tbWVudHMgPSBjb21tZW50cy5maWx0ZXIoKGNvbW1lbnQpID0+IGNvbW1lbnQudXNlcm5hbWUgIT09ICcnKTtcbiAgICBjb25zdCBjdXJyZW50TWVhbCA9IG5ldyBDdXJyZW50TWVhbChtZWFsLCBjb21tZW50cyk7XG5cbiAgICBQb3BVcC5wb3Aoe1xuICAgICAgLi4uY3VycmVudE1lYWwsXG4gICAgICBjb21tZW50cyxcbiAgICAgIHR5cGU6ICdSZWNpcGUnLFxuICAgIH0pO1xuICB9O1xuXG4gIHN0YXRpYyBmb3JFYWNoTGlzdGVuZXIoaXRlbXMsIGZ1bmMpIHtcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZnVuYyhlLnRhcmdldCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldExpc3RlbmVycygpIHtcbiAgICBBcHAuZm9yRWFjaExpc3RlbmVyKHRoaXMubWVudVRvZ2dsZXIsIEFwcC50b2dnbGVNZW51KTtcbiAgICBBcHAuZm9yRWFjaExpc3RlbmVyKHRoaXMubWVudUl0ZW1zLCB0aGlzLm1lbnVMb2FkQ2F0ZWdvcmllcyk7XG4gICAgQXBwLmZvckVhY2hMaXN0ZW5lcih0aGlzLmhlcm9Mb2dvcywgdGhpcy5sb2dvTG9hZENhdGVnb3JpZXMpO1xuXG4gICAgdGhpcy5MSVNULmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IGNsaWNrZWRFbGVtZW50ID0gZS50YXJnZXQ7XG5cbiAgICAgIGlmIChjbGlja2VkRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuaW5jbHVkZXMoJ2NhdGVnb3J5JykpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RDYXRlZ29yeShjbGlja2VkRWxlbWVudCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGNsaWNrZWRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZmEtaGVhcnQnKSkge1xuICAgICAgICB0aGlzLmFkZExpa2UoY2xpY2tlZEVsZW1lbnQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChjbGlja2VkRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3JlY2lwZXNfX2NvbW1lbnRzJykpIHtcbiAgICAgICAgdGhpcy5sb2FkUG9wdXAoY2xpY2tlZEVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2VsZWN0VGFncygpIHtcbiAgICB0aGlzLm1lbnVUb2dnbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtdG9nZ2xlJyk7XG4gICAgdGhpcy5tZW51SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudV9faXRlbScpO1xuICAgIHRoaXMuaGVyb0xvZ29zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlcm9fX2xvZ28nKTtcbiAgICB0aGlzLkxJU1QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdCcpO1xuICB9XG59XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VycmVudENhdGVnb3J5IHtcbiAgbWVhbHM7XG5cbiAgY29uc3RydWN0b3IoY2F0ZWdvcnlNZWFscyA9IFtdKSB7XG4gICAgdGhpcy5tZWFscyA9IGNhdGVnb3J5TWVhbHM7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnJlbnRNZWFsIHtcbiAgaWRNZWFsO1xuXG4gIHN0ck1lYWw7XG5cbiAgc3RyTWVhbFRodW1iO1xuXG4gIHN0ckluc3RydWN0aW9ucztcblxuICBzdHJUYWdzO1xuXG4gIHN0cllvdXR1YmU7XG5cbiAgY29tbWVudHM7XG5cbiAgY29uc3RydWN0b3IoY3VycmVudE1lYWwsIGNvbW1lbnRzID0gW10pIHtcbiAgICB0aGlzLmlkTWVhbCA9IGN1cnJlbnRNZWFsLmlkTWVhbDtcbiAgICB0aGlzLnN0ck1lYWwgPSBjdXJyZW50TWVhbC5zdHJNZWFsO1xuICAgIHRoaXMuc3RyTWVhbFRodW1iID0gY3VycmVudE1lYWwuc3RyTWVhbFRodW1iO1xuICAgIHRoaXMuc3RySW5zdHJ1Y3Rpb25zID0gY3VycmVudE1lYWwuc3RySW5zdHJ1Y3Rpb25zO1xuICAgIHRoaXMuc3RyVGFncyA9IGN1cnJlbnRNZWFsLnN0clRhZ3M7XG4gICAgdGhpcy5zdHJZb3V0dWJlID0gY3VycmVudE1lYWwuc3RyWW91dHViZTtcbiAgICB0aGlzLmNvbW1lbnRzID0gY29tbWVudHM7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZldGNoUmVxdWVzdCB7XG4gIG1ldGhvZDtcblxuICBib2R5O1xuXG4gIGhlYWRlcnM7XG5cbiAgdXJsO1xuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBtZXRob2QgPSAnR0VUJyxcbiAgICBib2R5LFxuICAgIHVybCA9ICcnLFxuICAgIGhlYWRlcnMgPSB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgIH0sXG4gIH0gPSB7fSkge1xuICAgIHRoaXMubWV0aG9kID0gbWV0aG9kO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gICAgdGhpcy5oZWFkZXJzID0gaGVhZGVycztcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgfVxuXG4gIGFzeW5jIGNhbGwoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIG1ldGhvZDogdGhpcy5tZXRob2QsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRoaXMuYm9keSksXG4gICAgICAgIGhlYWRlcnM6IHRoaXMubWV0aG9kID09PSAnUE9TVCcgPyB0aGlzLmhlYWRlcnMgOiB1bmRlZmluZWQsXG4gICAgICB9O1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMudXJsLCBvcHRpb25zKTtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkgcmV0dXJuIG51bGw7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG59XG4iLCIvLyBuNEtybnhhMUd4WEhiWjM0OVVNbSBjbGVhblxuLy8ganRYRlBYTml6UnRVNXBmWjI2c1Rcbi8vIHRlc3Q6IE1CeFNKeVZROHpRenV4Qmt3YTVtXG5cbmltcG9ydCBGZXRjaFJlcXVlc3QgZnJvbSAnLi9mZXRjaFJlcXVlc3QuanMnO1xuXG5jb25zdCBhcHBJZCA9ICdqdFhGUFhOaXpSdFU1cGZaMjZzVCc7XG5jb25zdCB1cmxNQVAgPSB7XG4gIG1haW46ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nLFxuICBsaWtlczogYCR7YXBwSWR9L2xpa2VzL2AsXG4gIGNvbW1lbnRzOiBgJHthcHBJZH0vY29tbWVudHNgLFxuICBieUNvbW1lbnQ6IGAke2FwcElkfS9jb21tZW50cz9pdGVtX2lkPWAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnZvbHZlbWVudEFQSSB7XG4gIHN0YXRpYyBhc3luYyBhZGRMaWtlKG1lYWwpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmV0Y2hSZXF1ZXN0ID0gbmV3IEZldGNoUmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiB7IGl0ZW1faWQ6IG1lYWwgfSxcbiAgICAgICAgdXJsOiBgJHt1cmxNQVAubWFpbn0ke3VybE1BUC5saWtlc31gLFxuICAgICAgfSk7XG4gICAgICBhd2FpdCBmZXRjaFJlcXVlc3QuY2FsbCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRBbGxMaWtlcygpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmV0Y2hSZXF1ZXN0ID0gbmV3IEZldGNoUmVxdWVzdCh7XG4gICAgICAgIHVybDogYCR7dXJsTUFQLm1haW59JHt1cmxNQVAubGlrZXN9YCxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgYWxsTGlrZXMgPSBhd2FpdCBmZXRjaFJlcXVlc3QuY2FsbCgpO1xuICAgICAgcmV0dXJuIGFsbExpa2VzO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXRNZWFsTGlrZXMobGlrZXNBcnIsIEl0ZW1JZCkge1xuICAgIGNvbnN0IG1lYWxMaWtlcyA9IGxpa2VzQXJyLmZpbHRlcihcbiAgICAgIChtZWFsKSA9PiBtZWFsLml0ZW1faWQgPT09IEl0ZW1JZCxcbiAgICApWzBdO1xuICAgIGlmICghbWVhbExpa2VzKSByZXR1cm4gMDtcbiAgICByZXR1cm4gbWVhbExpa2VzLmxpa2VzO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGFkZENvbW1lbnQoeyB1c2VybmFtZSwgY29tbWVudCB9LCBtZWFsKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZldGNoUmVxdWVzdCA9IG5ldyBGZXRjaFJlcXVlc3Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keToge1xuICAgICAgICAgIGl0ZW1faWQ6IG1lYWwsXG4gICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgY29tbWVudCxcbiAgICAgICAgfSxcbiAgICAgICAgdXJsOiBgJHt1cmxNQVAubWFpbn0ke3VybE1BUC5jb21tZW50c31gLFxuICAgICAgfSk7XG4gICAgICBhd2FpdCBmZXRjaFJlcXVlc3QuY2FsbCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRDb21tZW50cyhtZWFsKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZldGNoUmVxdWVzdCA9IG5ldyBGZXRjaFJlcXVlc3Qoe1xuICAgICAgICB1cmw6IGAke3VybE1BUC5tYWlufSR7dXJsTUFQLmJ5Q29tbWVudH0ke21lYWx9YCxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBmZXRjaFJlcXVlc3QuY2FsbCgpO1xuICAgICAgcmV0dXJuIGNvbW1lbnRzO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IEZldGNoUmVxdWVzdCBmcm9tICcuL2ZldGNoUmVxdWVzdC5qcyc7XG5cbmNvbnN0IHVybE1hcCA9IHtcbiAgcmFuZG9tOiAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL3JhbmRvbS5waHAnLFxuICBjYXRlZ29yaWVzOlxuICAgICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvY2F0ZWdvcmllcy5waHAnLFxuICBieUNhdGVnb3J5OiAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2ZpbHRlci5waHA/Yz0nLFxuICBieU1lYWxJZDogJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9sb29rdXAucGhwP2k9Jyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lYWxBUEkge1xuICBzdGF0aWMgYXN5bmMgZ2V0UmVjaXBlKGlkKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZldGNoUmVxdWVzdCA9IG5ldyBGZXRjaFJlcXVlc3Qoe1xuICAgICAgICB1cmw6IGAke3VybE1hcC5ieU1lYWxJZH0ke2lkfWAsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaFJlcXVlc3QuY2FsbCgpO1xuICAgICAgcmV0dXJuIGRhdGEubWVhbHNbMF07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldENhdGVnb3JpZXMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZldGNoUmVxdWVzdCA9IG5ldyBGZXRjaFJlcXVlc3Qoe1xuICAgICAgICB1cmw6IHVybE1hcC5jYXRlZ29yaWVzLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgZmV0Y2hSZXF1ZXN0LmNhbGwoKTtcbiAgICAgIHJldHVybiBjYXRlZ29yaWVzLmNhdGVnb3JpZXM7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEJ5Q2F0ZWdvcnkoY2F0ZWdvcnkpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmV0Y2hSZXF1ZXN0ID0gbmV3IEZldGNoUmVxdWVzdCh7XG4gICAgICAgIHVybDogYCR7dXJsTWFwLmJ5Q2F0ZWdvcnl9JHtjYXRlZ29yeX1gLFxuICAgICAgfSk7XG4gICAgICBjb25zdCByZWNpcGVzID0gYXdhaXQgZmV0Y2hSZXF1ZXN0LmNhbGwoKTtcbiAgICAgIHJldHVybiByZWNpcGVzLm1lYWxzO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxufVxuIiwiY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fbGlzdCcpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IHtcbiAgc3RhdGljIGRpc3BsYXlDYXRlZ29yaWVzKGNhdGVnb3JpZXNBcnIpIHtcbiAgICBjYXRlZ29yaWVzQXJyLmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZURvbU1lbnVJdGVtKGNhdGVnb3J5KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVEb21NZW51SXRlbSh7XG4gICAgaWRDYXRlZ29yeSxcbiAgICBzdHJDYXRlZ29yeSxcbiAgICBzdHJDYXRlZ29yeVRodW1iLFxuICB9KSB7XG4gICAgY29uc3QgTEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIExJLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2l0ZW0nKTtcbiAgICBMSS5zZXRBdHRyaWJ1dGUoJ2lkJywgaWRDYXRlZ29yeSk7XG4gICAgTEkuaW5uZXJIVE1MID0gYFxuICAgICAgPGltZyBjbGFzcz1cIm1lbnVfX2l0ZW1fX2ltZ1wiIHNyYz1cIiR7c3RyQ2F0ZWdvcnlUaHVtYn1cIiBhbHQ9XCJDYXRlZ29yeSAke3N0ckNhdGVnb3J5fVwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJtZW51X19pdGVtX19jYXRlZ29yeVwiPiR7c3RyQ2F0ZWdvcnl9PC9zcGFuPmA7XG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQoTEkpO1xuICB9XG59XG4iLCJpbXBvcnQgSW52b2x2ZW1lbnRBUEkgZnJvbSAnLi9pbnZvbHZlbWVudEFQSS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcFVwIHtcbiAgc3RhdGljIHBvcChkYXRhKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLmNvbW1lbnRDb3VudCA9IDA7XG4gICAgdGhpcy50ZW1wbGF0ZSh0aGlzLmRhdGEudHlwZSk7XG4gIH1cblxuICBzdGF0aWMgdGVtcGxhdGUoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLmRhdGEuaWRNZWFsKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyZWNpcGVzX19wb3B1cCcpO1xuXG4gICAgY29uc3QgdGFncyA9IFBvcFVwLnRhZ3NUZW1wbGF0ZSh0aGlzLmRhdGEuc3RyVGFncyk7XG4gICAgY29uc3QgY29tbWVudFNlY3Rpb24gPSBQb3BVcC5jb21tZW50c1RlbXBsYXRlKCk7XG4gICAgY29uc3QgaW5zdHJ1Y3RzID0gUG9wVXAuaW5zdHJ1Y3Rpb25zVGVtcGxhdGUoXG4gICAgICB0aGlzLmRhdGEuc3RySW5zdHJ1Y3Rpb25zLFxuICAgICk7XG5cbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgICAgPGltZyBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2ltYWdlXCIgc3JjPVwiJHt0aGlzLmRhdGEuc3RyTWVhbFRodW1ifVwiIGFsdD1cIkRlbGljaW91cyAke3RoaXMuZGF0YS5zdHJNZWFsfVwiPlxuICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS14bWFya1wiPjwvaT5cbiAgICAgIDxoMiBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX3RpdGxlXCI+JHt0aGlzLmRhdGEuc3RyTWVhbH08L2gyPlxuICAgICAgPHVsIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfdGFnc1wiPiR7dGFnc308L3VsPlxuICAgICAgPHVsIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfaW5zdHJ1Y3RzXCI+JHtpbnN0cnVjdHN9PC91bD5cbiAgICAgIDxzcGFuIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfdmlkZW9cIj5XYXRjaCBhIDxhIGhyZWY9XCIke3RoaXMuZGF0YS5zdHJZb3V0dWJlfVwiPlZpZGVvPC9hPiBoZXJlPC9zcGFuPlxuICAgICAgJHtjb21tZW50U2VjdGlvbn1cbiAgICBgO1xuXG4gICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2knKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm9TY3JvbGwnKTtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmRhdGEudHlwZSA9PT0gJ1JlY2lwZScpIHtcbiAgICAgIGNvbnN0IHVzZXIgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICAgIGNvbnN0IGNvbW1lbnQgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKTtcbiAgICAgIGNvbnN0IHN1Ym1pdCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbiAgICAgIGNvbnN0IHVsQ29udGFpbmVyID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICcucmVjaXBlc19fcG9wdXBfY29tbWVudHMgdWwnLFxuICAgICAgKTtcblxuICAgICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAodXNlci52YWx1ZSA9PT0gJycgfHwgY29tbWVudC52YWx1ZSA9PT0gJycpIHJldHVybjtcbiAgICAgICAgY29uc3QgaW5wdXRDb21tZW50ID0ge1xuICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLnZhbHVlLFxuICAgICAgICAgIGNvbW1lbnQ6IGNvbW1lbnQudmFsdWUsXG4gICAgICAgIH07XG4gICAgICAgIFBvcFVwLmNyZWF0ZUNvbW1lbnRPbkRPTShcbiAgICAgICAgICB1c2VyLFxuICAgICAgICAgIGNvbW1lbnQsXG4gICAgICAgICAgdWxDb250YWluZXIsXG4gICAgICAgICAgaW5wdXRDb21tZW50LFxuICAgICAgICApO1xuICAgICAgICBhd2FpdCBJbnZvbHZlbWVudEFQSS5hZGRDb21tZW50KFxuICAgICAgICAgIGlucHV0Q29tbWVudCxcbiAgICAgICAgICB0aGlzLmRhdGEuaWRNZWFsLFxuICAgICAgICApO1xuICAgICAgICBQb3BVcC5jb21tZW50Q291bnRBZGQoY29udGFpbmVyKTtcbiAgICAgICAgW3VzZXIudmFsdWUsIGNvbW1lbnQudmFsdWVdID0gWycnLCAnJ107XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIH1cblxuICBzdGF0aWMgZGlzcGxheUNvbW1lbnQoZGF0YSkge1xuICAgIGNvbnN0IFt5ZWFyLCBtb250aCwgZGF5XSA9IGRhdGEuY3JlYXRpb25fZGF0ZS5zcGxpdCgnLScpO1xuICAgIHJldHVybiBgXG4gICAgICAgIDxsaSBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2NvbW1lbnRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2NvbW1lbnQtdXNlclwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLXVzZXJcIj48L2k+XG4gICAgICAgICAgICAke2RhdGEudXNlcm5hbWV9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfY29tbWVudC1kYXRlXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLWNhbGVuZGFyXCI+PC9pPlxuICAgICAgICAgICAgJHtkYXl9LSR7bW9udGh9LSR7eWVhcn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZWNpcGVzX19wb3B1cF9jb21tZW50LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICR7ZGF0YS5jb21tZW50fVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgIGA7XG4gIH1cblxuICBzdGF0aWMgY29tbWVudHNUZW1wbGF0ZSgpIHtcbiAgICBsZXQgY29tbWVudHMgPSAnJztcbiAgICB0aGlzLmRhdGEuY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgICAgY29tbWVudHMgKz0gUG9wVXAuZGlzcGxheUNvbW1lbnQoY29tbWVudCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJyZWNpcGVzX19wb3B1cF9jb21tZW50c1wiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2NvbW1lbnQtY291bnRcIj5Db21tZW50cyAoJHt0aGlzLmRhdGEuY29tbWVudHMubGVuZ3RofSk8L3NwYW4+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfaW5wdXQtdXNlclwiIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiB0YWJpbmRleD0wPjwvaW5wdXQ+XG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2lucHV0LWNvbW1lbnRcIiBwbGFjZWhvbGRlcj1cIldyaXRlIHlvdXIgY29tbWVudFwiIHRhYmluZGV4PTA+PC90ZXh0YXJlYT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2lucHV0LXN1Ym1pdFwiIHR5cGU9XCJidXR0b25cIiB0YWJpbmRleD0wPkFkZCBDb21tZW50PC9idXR0b24+XG4gICAgICAgIDx1bCBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2NvbW1lbnRzXCI+JHtjb21tZW50c308L3VsPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVDb21tZW50T25ET00odXNlciwgY29tbWVudCwgY29udGFpbmVyLCBpbnB1dENvbW1lbnQpIHtcbiAgICBjb25zdCBbZGF5LCBtb250aCwgeWVhcl0gPSBuZXcgRGF0ZSgpXG4gICAgICAudG9Mb2NhbGVEYXRlU3RyaW5nKClcbiAgICAgIC5zcGxpdCgnLycpO1xuICAgIGNvbnN0IGxpID0gUG9wVXAuZGlzcGxheUNvbW1lbnQoe1xuICAgICAgLi4uaW5wdXRDb21tZW50LFxuICAgICAgY3JlYXRpb25fZGF0ZTogYCR7eWVhcn0tJHttb250aCA8IDEwID8gJzAnIDogJyd9JHttb250aH0tJHtcbiAgICAgICAgZGF5IDwgMTAgPyAnMCcgOiAnJ1xuICAgICAgfSR7ZGF5fWAsXG4gICAgfSk7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCArPSBsaTtcbiAgfVxuXG4gIHN0YXRpYyBjb21tZW50Q291bnRBZGQoY29udGFpbmVyKSB7XG4gICAgdGhpcy5jb21tZW50Q291bnQgKz0gMTtcbiAgICBjb25zdCBjb21tZW50c051bSA9IHRoaXMuZGF0YS5jb21tZW50cy5sZW5ndGggKyB0aGlzLmNvbW1lbnRDb3VudDtcbiAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICcucmVjaXBlc19fcG9wdXBfY29tbWVudC1jb3VudCcsXG4gICAgKS5pbm5lckhUTUwgPSBgQ29tbWVudHMgKCR7Y29tbWVudHNOdW19KWA7XG4gICAgcmV0dXJuIGNvbW1lbnRzTnVtO1xuICB9XG5cbiAgc3RhdGljIGluc3RydWN0aW9uc1RlbXBsYXRlKGluc3RydWN0cykge1xuICAgIGxldCBuZXdJbnN0cnVjdHMgPSAnJztcbiAgICBpbnN0cnVjdHMuc3BsaXQoL1xccj9cXG4vKS5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgICBpZiAobGluZSA9PT0gJycpIHJldHVybjtcbiAgICAgIG5ld0luc3RydWN0cyArPSBgPGxpIGNsYXNzPVwicG9wdXBfX2luc3RydWN0c19saW5lXCI+JHtsaW5lfTwvbGk+YDtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3SW5zdHJ1Y3RzO1xuICB9XG5cbiAgc3RhdGljIHRhZ3NUZW1wbGF0ZSh0YWdzKSB7XG4gICAgaWYgKCF0YWdzKSByZXR1cm4gJyc7XG4gICAgbGV0IHRhZ3NVbCA9ICcnO1xuICAgIHRhZ3Muc3BsaXQoJywnKS5mb3JFYWNoKCh0YWcpID0+IHtcbiAgICAgIHRhZ3NVbCArPSBgPGxpIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfdGFnTGlcIj4ke3RhZ308L2xpPmA7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRhZ3NVbDtcbiAgfVxufVxuIiwiaW1wb3J0IEludm9sdmVtZW50QVBJIGZyb20gJy4vaW52b2x2ZW1lbnRBUEkuanMnO1xuXG5jb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckludGVyZmFjZSB7XG4gIHN0YXRpYyBkaXNwbGF5UmVjaXBlcyhtZWFsc0FyciwgbGlrZXMgPSBbXSkge1xuICAgIG1lYWxzQXJyLmZvckVhY2goKHJlY2lwZSkgPT4ge1xuICAgICAgY29uc3QgbWVhbExpa2VzID0gSW52b2x2ZW1lbnRBUEkuZ2V0TWVhbExpa2VzKFxuICAgICAgICBsaWtlcyxcbiAgICAgICAgcmVjaXBlLmlkTWVhbCxcbiAgICAgICk7XG4gICAgICB0aGlzLmNyZWF0ZUNhcmQocmVjaXBlLCBtZWFsTGlrZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRpc3BsYXlDYXRlZ29yaWVzKGNhdGVnb3JpZXNBcnIpIHtcbiAgICBjYXRlZ29yaWVzQXJyLmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZUNhdGVnb3J5Q2FyZChjYXRlZ29yeSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlQ2F0ZWdvcnlDYXJkKHtcbiAgICBpZENhdGVnb3J5LFxuICAgIHN0ckNhdGVnb3J5LFxuICAgIHN0ckNhdGVnb3J5VGh1bWIsXG4gIH0pIHtcbiAgICBjb25zdCBMSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgTEkuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnlfX2NhcmQnKTtcbiAgICBMSS5zZXRBdHRyaWJ1dGUoJ2lkJywgaWRDYXRlZ29yeSk7XG4gICAgTEkuaW5uZXJIVE1MID0gYFxuICAgICAgPGltZyBjbGFzcz1cImNhdGVnb3J5X19pbWFnZVwiIHNyYz1cIiR7c3RyQ2F0ZWdvcnlUaHVtYn1cIiBhbHQ9XCJEZWxpY2lvdXMgJHtzdHJDYXRlZ29yeX1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeV9fY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeV9faGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzcz1cImNhdGVnb3J5X190aXRsZVwiPiR7c3RyQ2F0ZWdvcnl9PC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChMSSk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlQ2FyZChcbiAgICB7IHN0ck1lYWwgPSAnJywgc3RyTWVhbFRodW1iID0gJycsIGlkTWVhbCB9LFxuICAgIGxpa2VzID0gMCxcbiAgKSB7XG4gICAgY29uc3QgTEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIExJLmNsYXNzTGlzdC5hZGQoJ3JlY2lwZXNfX2NhcmQnKTtcbiAgICBMSS5zZXRBdHRyaWJ1dGUoJ2lkJywgaWRNZWFsKTtcbiAgICBMSS5pbm5lckhUTUwgPSBgXG4gICAgICA8aW1nIGNsYXNzPVwicmVjaXBlc19faW1hZ2VcIiBzcmM9XCIke3N0ck1lYWxUaHVtYn1cIiBhbHQ9XCJEZWxpY2lvdXMgJHtzdHJNZWFsfVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJlY2lwZXNfX2NvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVjaXBlc19faGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzcz1cInJlY2lwZXNfX3RpdGxlXCI+JHtzdHJNZWFsfTwvaDI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1oZWFydFwiPjwvaT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlY2lwZXNfX2xpa2VzXCI+PHNwYW4+JHtsaWtlc308L3NwYW4+IGxpa2Uke1xuICBsaWtlcyA9PT0gMSA/ICcnIDogJ3MnXG59PC9zcGFuPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJyZWNpcGVzX19jb21tZW50c1wiPkNvbW1lbnRzPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQoTEkpO1xuICB9XG5cbiAgc3RhdGljIGFkZFRvTGlrZXNDb3VudGVyRE9NKGVsZW1lbnQpIHtcbiAgICBjb25zdCBuTGlrZXMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNpcGVzX19saWtlcycpO1xuICAgIGNvbnN0IG9sZExpa2VzID0gK25MaWtlcy5jaGlsZHJlblswXS5pbm5lclRleHQ7XG4gICAgY29uc3QgbmV3TGlrZXMgPSBvbGRMaWtlcyArIDE7XG5cbiAgICBuTGlrZXMuaW5uZXJIVE1MID0gYDxzcGFuPiR7bmV3TGlrZXN9PC9zcGFuPiBsaWtlJHtcbiAgICAgIG5ld0xpa2VzID09PSAxID8gJycgOiAncydcbiAgICB9YDtcbiAgfVxuXG4gIHN0YXRpYyBjb3VudGVyVGV4dCh0eXBlKSB7XG4gICAgY29uc3QgY291bnRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY291bnRlcicpO1xuICAgIGxldCBpID0gMDtcbiAgICBjb3VudGVycy5mb3JFYWNoKChjb3VudGVyKSA9PiB7XG4gICAgICBjb3VudGVyLmlubmVySFRNTCA9IGAke2kgPCAxID8gJ0NhdGVnb3JpZXMnIDogdHlwZX0gKCR7dGhpcy5pdGVtQ291bnQoXG4gICAgICAgIGNvdW50ZXIubmV4dEVsZW1lbnRTaWJsaW5nLFxuICAgICAgKX0pYDtcbiAgICAgIGkgKz0gMTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBpdGVtQ291bnQoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmNoaWxkcmVuLmxlbmd0aDtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBhcHAgZnJvbSAnLi9tb2R1bGVzL2FwcC5qcyc7XG5cbmFwcC5zdGFydCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9