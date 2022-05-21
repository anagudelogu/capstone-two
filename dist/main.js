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
___CSS_LOADER_EXPORT___.push([module.id, "::-webkit-scrollbar {\n  width: 8px;\n}\n\n::-webkit-scrollbar-track {\n  background: rgb(241, 241, 241, 0.2);\n}\n\n::-webkit-scrollbar-thumb {\n  background: rgb(168, 168, 168);\n}\n\n:root {\n  --dark-green: hsl(121, 31%, 44%);\n  --green: hsl(108, 35%, 60%);\n  --light-green: hsl(68, 59%, 85%);\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: rgb(139, 139, 139);\n}\n\nhtml {\n  box-sizing: border-box;\n  font-family: 'Mukta', sans-serif;\n}\n\nbody.noScroll {\n  overflow: hidden;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n  font-size: 1rem;\n}\n\na,\na:hover,\na:focus,\na:active {\n  text-decoration: none;\n  color: inherit;\n}\n\nul,\nli {\n  list-style: none;\n  padding: 0%;\n  margin: 0%;\n}\n\n.navbar {\n  height: 50px;\n  padding: 10px 32px;\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  align-items: center;\n  background-color: var(--dark-green);\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n\nspan.image {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.hero__logo {\n  width: 160px;\n}\n\n.navbar__logo .hero__logo {\n  width: 32px;\n}\n\n.navbar__recipes {\n  display: none;\n  font-size: 2rem;\n}\n\n.menu {\n  position: fixed;\n  top: 50px;\n  left: 0;\n  background-color: var(--dark-green);\n  width: 100%;\n  height: calc(100vh - 80px);\n  padding: 40px 0;\n  display: flex;\n  flex-direction: column;\n  transform: translateX(100%);\n  overflow-y: auto;\n  transition: all 0.5s ease;\n}\n\n.menu.active {\n  transform: translateX(0);\n}\n\n.menu__categories {\n  font-size: 1.4rem;\n  width: 100% !important;\n  height: 40px;\n  border-bottom: solid 1px black;\n  text-align: center;\n  margin: 0 auto 12px;\n  color: white;\n}\n\n.menu__list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.menu__item {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 32px;\n  padding: 12px;\n  border-bottom: 1px solid black;\n  color: white;\n  cursor: pointer;\n}\n\n.menu__item img {\n  width: 50%;\n  max-width: 80px;\n}\n\n.menu__item span {\n  font-size: 1.2rem;\n  width: 50%;\n  text-align: left;\n}\n\n.fa-solid {\n  color: white;\n}\n\n.landing {\n  margin: 50px auto;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n}\n\n.hero.hidden {\n  display: none;\n}\n\n.landing__counter.counter {\n  width: 80%;\n  font-size: 1.3rem;\n  margin-top: 20px;\n}\n\n.hero {\n  height: calc(100vh - 80px);\n  width: 100%;\n  margin-inline: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 32px;\n  background-color: rgb(245, 244, 244);\n  box-shadow: 0 10px 20px rgba(145, 145, 145, 0.699);\n  border-bottom: 1px double lightblue;\n}\n\nspan > i.menu-toggle.hidden {\n  display: none;\n}\n\nspan > i.menu-toggle {\n  display: block;\n  cursor: pointer;\n}\n\n.hero__title {\n  font-size: 2rem;\n}\n\n.hero__description {\n  padding: 12px;\n  border: 1px solid rgb(194, 196, 197);\n  background-color: white;\n}\n\n.counter {\n  width: 320px;\n  padding: 0 8px;\n  align-self: center;\n}\n\n.list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  list-style: none;\n  gap: 24px;\n  padding: 8px;\n}\n\n.category__card {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  cursor: pointer;\n}\n\n.category__image {\n  width: 100%;\n}\n\n.category__content {\n  width: 100%;\n  padding-inline: 20px;\n}\n\n.category__header {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.category__title {\n  font-size: 1.3rem;\n}\n\n.recipes {\n  margin: 0 auto;\n  width: 90%;\n}\n\n.recipes__card {\n  display: flex;\n  margin: 1.5%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  border-radius: 12px;\n}\n\n.recipes__image {\n  width: 100%;\n  border-radius: 12px 12px 0 0;\n}\n\n.recipes__content {\n  width: 100%;\n  padding-inline: 20px;\n}\n\n.recipes__header {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.recipes__title {\n  font-size: 1.3rem;\n}\n\n.recipes__likes {\n  display: block;\n  margin-top: -10px;\n  margin-bottom: 20px;\n}\n\n.fa-heart {\n  cursor: pointer;\n}\n\n.recipes__comments {\n  display: block;\n  width: 70%;\n  margin: 10px auto;\n  padding: 5px 10px;\n  cursor: pointer;\n}\n\n.recipes__popup {\n  display: block;\n  width: 100%;\n  height: 100%;\n  padding: 7.5% 10%;\n  position: fixed;\n  background-color: white;\n  backdrop-filter: blur(2px);\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  top: 0%;\n  left: 0%;\n  overflow-y: auto;\n  border-radius: 10px;\n}\n\n.recipes__popup_image {\n  width: 100%;\n}\n\n.recipes__popup .fa-xmark {\n  color: white;\n  background-color: black;\n  padding: 6px 8px;\n  position: fixed;\n  top: 0;\n  right: 0;\n  cursor: pointer;\n}\n\n.recipes__popup_title {\n  padding: 4%;\n  font-size: 1.3rem;\n}\n\n.recipes__popup_tags {\n  width: 90%;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin: 0 auto 16px;\n}\n\n.recipes__popup_tagLi {\n  text-align: center;\n  font-size: 0.8rem;\n  min-width: 50px;\n  padding: 1px 6px;\n  background-color: var(--green);\n  border: 1px solid var(--dark-green);\n  border-radius: 10px;\n}\n\n.recipes__popup_instructs {\n  padding: 8%;\n  max-height: 60%;\n  overflow: auto;\n  background-color: var(--light-green);\n}\n\n.popup__instructs_line {\n  margin-top: 16px;\n  list-style: decimal;\n  font-size: 0.9rem;\n  line-height: 1.5rem;\n}\n\n.recipes__popup_video {\n  margin: 16px auto;\n  display: block;\n  text-align: center;\n}\n\n.recipes__popup_video a {\n  color: rgb(49, 80, 255);\n}\n\ndiv.recipes__popup_comments {\n  padding: 4%;\n  margin: 0 auto;\n}\n\n.recipes__popup_comment-count {\n  display: block;\n  text-align: center;\n  font-size: 1.3rem;\n  font-weight: bold;\n}\n\nul.recipes__popup_comments {\n  background-color: var(--light-green);\n  border: 1px solid var(--dark-green);\n  border-radius: 5px;\n  min-height: 72px;\n  max-height: 216px;\n  overflow-y: auto;\n  margin: 20px 0;\n}\n\n.recipes__popup_comment {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  padding: 3px 8px;\n}\n\n.recipes__popup_comment:nth-child(even) {\n  background-color: var(--green);\n}\n\n.recipes__popup_comment-date {\n  grid-area: 1/2/2/3;\n  text-align: right;\n}\n\n.recipes__popup_comment-user {\n  grid-area: 1/1/2/2;\n}\n\n.recipes__popup_comment-content {\n  grid-area: 2/1/3/3;\n  padding: 3px 12px;\n}\n\n.recipes__popup_input-user {\n  width: 100%;\n  margin-top: 12px;\n  padding: 4px;\n  font-family: inherit;\n  outline: none;\n  border: 2px solid var(--green);\n  border-radius: 5px;\n}\n\n.recipes__popup_input-user:focus {\n  border: 2px solid var(--dark-green);\n}\n\n.recipes__popup_input-comment {\n  width: 100%;\n  margin: 12px 0;\n  padding: 4px;\n  font-family: inherit;\n  max-height: 200px;\n  min-height: 80px;\n  resize: vertical;\n  outline: none;\n  border: 2px solid var(--green);\n  border-radius: 5px;\n}\n\n.recipes__popup_input-comment:focus {\n  border: 2px solid var(--dark-green);\n}\n\n.recipes__popup_input-submit {\n  display: block;\n  width: auto;\n  padding: 6px 16px;\n  margin-inline: auto;\n  outline: none;\n  border: 2px solid var(--light-green);\n  border-radius: 5px;\n  color: var(--light-green);\n  background-color: black;\n  transition: all 0.3s;\n  cursor: pointer;\n}\n\n.recipes__popup_input-submit:hover {\n  border: 2px solid var(--dark-green);\n  transform: scale(1.1);\n}\n\nfooter {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  position: fixed;\n  top: calc(100% - 30px);\n  width: 100%;\n  padding: 8px;\n  height: 30px;\n  background-color: var(--dark-green);\n}\n\n.license-rights {\n  font-size: 10px;\n}\n\n.mobile_visible {\n  display: unset;\n}\n\n.desktop_visible {\n  display: none;\n}\n\n@media screen and (min-width: 768px) {\n  .navbar {\n    height: 70px;\n    justify-content: space-between;\n  }\n\n  .menu {\n    width: 32%;\n    transform: translateX(100vw);\n  }\n\n  .menu.active {\n    transform: translateX(70vw);\n  }\n\n  .menu-toggle {\n    color: white !important;\n    font-size: 1.3rem !important;\n    cursor: pointer;\n  }\n\n  .menu__categories {\n    width: 100% !important;\n  }\n\n  .landing {\n    margin-top: 70px;\n    gap: 20px;\n  }\n\n  .landing__counter {\n    width: 80%;\n    font-size: 1.69rem;\n    margin-top: 20px;\n  }\n\n  .navbar__recipes {\n    display: block;\n  }\n\n  .navbar__hamburger {\n    display: none;\n  }\n\n  .license-rights {\n    font-size: 14px;\n  }\n\n  .recipes {\n    margin-top: 100px;\n    justify-content: flex-start;\n    margin-bottom: 100px;\n  }\n\n  .list {\n    justify-content: center;\n    margin: 0 auto;\n  }\n\n  .category__card {\n    border-radius: 6px;\n  }\n\n  .category__image {\n    border-radius: 6px 6px 0 0;\n  }\n\n  .recipes__card {\n    width: 20%;\n    min-width: 180px;\n    max-width: 200px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    height: 385px;\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n    border-radius: 12px;\n  }\n\n  .recipes__image {\n    width: 100%;\n    border-radius: 12px 12px 0 0;\n  }\n\n  .recipes__content {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    padding-inline: 20px;\n  }\n\n  .recipes__header {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    margin-top: 8px;\n  }\n\n  .recipes__title {\n    font-size: 0.95rem;\n    line-height: 1.15rem;\n    max-width: 130px;\n    align-self: center;\n  }\n\n  .recipes__likes {\n    display: block;\n    margin: 10px 0;\n  }\n\n  .recipes__comments {\n    display: block;\n    width: 70%;\n    margin: 10px auto;\n    padding: 5px 10px;\n  }\n\n  .recipes__comments:last-of-type {\n    margin-top: auto;\n  }\n\n  .recipes__popup {\n    display: flex;\n    flex-direction: column;\n  }\n\n  div.recipes__popup_comments {\n    padding: 8px;\n    width: 80%;\n  }\n\n  .recipes__popup_image {\n    width: 50%;\n    align-self: center;\n  }\n\n  .recipes__popup_instructs {\n    min-height: 300px;\n    padding: 40px;\n  }\n\n  .popup__instructs_line {\n    font-size: 1.1rem;\n  }\n\n  .mobile_visible {\n    display: none;\n  }\n\n  .desktop_visible {\n    display: unset;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Mukta');\n\n::-webkit-scrollbar {\n  width: 8px;\n}\n\n::-webkit-scrollbar-track {\n  background: rgb(241, 241, 241, 0.2);\n}\n\n::-webkit-scrollbar-thumb {\n  background: rgb(168, 168, 168);\n}\n\n:root {\n  --dark-green: hsl(121, 31%, 44%);\n  --green: hsl(108, 35%, 60%);\n  --light-green: hsl(68, 59%, 85%);\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: rgb(139, 139, 139);\n}\n\nhtml {\n  box-sizing: border-box;\n  font-family: 'Mukta', sans-serif;\n}\n\nbody.noScroll {\n  overflow: hidden;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n  font-size: 1rem;\n}\n\na,\na:hover,\na:focus,\na:active {\n  text-decoration: none;\n  color: inherit;\n}\n\nul,\nli {\n  list-style: none;\n  padding: 0%;\n  margin: 0%;\n}\n\n.navbar {\n  height: 50px;\n  padding: 10px 32px;\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  align-items: center;\n  background-color: var(--dark-green);\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n\nspan.image {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.hero__logo {\n  width: 160px;\n}\n\n.navbar__logo .hero__logo {\n  width: 32px;\n}\n\n.navbar__recipes {\n  display: none;\n  font-size: 2rem;\n}\n\n.menu {\n  position: fixed;\n  top: 50px;\n  left: 0;\n  background-color: var(--dark-green);\n  width: 100%;\n  height: calc(100vh - 80px);\n  padding: 40px 0;\n  display: flex;\n  flex-direction: column;\n  transform: translateX(100%);\n  overflow-y: auto;\n  transition: all 0.5s ease;\n}\n\n.menu.active {\n  transform: translateX(0);\n}\n\n.menu__categories {\n  font-size: 1.4rem;\n  width: 100% !important;\n  height: 40px;\n  border-bottom: solid 1px black;\n  text-align: center;\n  margin: 0 auto 12px;\n  color: white;\n}\n\n.menu__list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.menu__item {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 32px;\n  padding: 12px;\n  border-bottom: 1px solid black;\n  color: white;\n  cursor: pointer;\n}\n\n.menu__item img {\n  width: 50%;\n  max-width: 80px;\n}\n\n.menu__item span {\n  font-size: 1.2rem;\n  width: 50%;\n  text-align: left;\n}\n\n.fa-solid {\n  color: white;\n}\n\n.landing {\n  margin: 50px auto;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n}\n\n.hero.hidden {\n  display: none;\n}\n\n.landing__counter.counter {\n  width: 80%;\n  font-size: 1.3rem;\n  margin-top: 20px;\n}\n\n.hero {\n  height: calc(100vh - 80px);\n  width: 100%;\n  margin-inline: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 32px;\n  background-color: rgb(245, 244, 244);\n  box-shadow: 0 10px 20px rgba(145, 145, 145, 0.699);\n  border-bottom: 1px double lightblue;\n}\n\nspan > i.menu-toggle.hidden {\n  display: none;\n}\n\nspan > i.menu-toggle {\n  display: block;\n  cursor: pointer;\n}\n\n.hero__title {\n  font-size: 2rem;\n}\n\n.hero__description {\n  padding: 12px;\n  border: 1px solid rgb(194, 196, 197);\n  background-color: white;\n}\n\n.counter {\n  width: 320px;\n  padding: 0 8px;\n  align-self: center;\n}\n\n.list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  list-style: none;\n  gap: 24px;\n  padding: 8px;\n}\n\n.category__card {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  cursor: pointer;\n}\n\n.category__image {\n  width: 100%;\n}\n\n.category__content {\n  width: 100%;\n  padding-inline: 20px;\n}\n\n.category__header {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.category__title {\n  font-size: 1.3rem;\n}\n\n.recipes {\n  margin: 0 auto;\n  width: 90%;\n}\n\n.recipes__card {\n  display: flex;\n  margin: 1.5%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  border-radius: 12px;\n}\n\n.recipes__image {\n  width: 100%;\n  border-radius: 12px 12px 0 0;\n}\n\n.recipes__content {\n  width: 100%;\n  padding-inline: 20px;\n}\n\n.recipes__header {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.recipes__title {\n  font-size: 1.3rem;\n}\n\n.recipes__likes {\n  display: block;\n  margin-top: -10px;\n  margin-bottom: 20px;\n}\n\n.fa-heart {\n  cursor: pointer;\n}\n\n.recipes__comments {\n  display: block;\n  width: 70%;\n  margin: 10px auto;\n  padding: 5px 10px;\n  cursor: pointer;\n}\n\n.recipes__popup {\n  display: block;\n  width: 100%;\n  height: 100%;\n  padding: 7.5% 10%;\n  position: fixed;\n  background-color: white;\n  backdrop-filter: blur(2px);\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  top: 0%;\n  left: 0%;\n  overflow-y: auto;\n  border-radius: 10px;\n}\n\n.recipes__popup_image {\n  width: 100%;\n}\n\n.recipes__popup .fa-xmark {\n  color: white;\n  background-color: black;\n  padding: 6px 8px;\n  position: fixed;\n  top: 0;\n  right: 0;\n  cursor: pointer;\n}\n\n.recipes__popup_title {\n  padding: 4%;\n  font-size: 1.3rem;\n}\n\n.recipes__popup_tags {\n  width: 90%;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin: 0 auto 16px;\n}\n\n.recipes__popup_tagLi {\n  text-align: center;\n  font-size: 0.8rem;\n  min-width: 50px;\n  padding: 1px 6px;\n  background-color: var(--green);\n  border: 1px solid var(--dark-green);\n  border-radius: 10px;\n}\n\n.recipes__popup_instructs {\n  padding: 8%;\n  max-height: 60%;\n  overflow: auto;\n  background-color: var(--light-green);\n}\n\n.popup__instructs_line {\n  margin-top: 16px;\n  list-style: decimal;\n  font-size: 0.9rem;\n  line-height: 1.5rem;\n}\n\n.recipes__popup_video {\n  margin: 16px auto;\n  display: block;\n  text-align: center;\n}\n\n.recipes__popup_video a {\n  color: rgb(49, 80, 255);\n}\n\ndiv.recipes__popup_comments {\n  padding: 4%;\n  margin: 0 auto;\n}\n\n.recipes__popup_comment-count {\n  display: block;\n  text-align: center;\n  font-size: 1.3rem;\n  font-weight: bold;\n}\n\nul.recipes__popup_comments {\n  background-color: var(--light-green);\n  border: 1px solid var(--dark-green);\n  border-radius: 5px;\n  min-height: 72px;\n  max-height: 216px;\n  overflow-y: auto;\n  margin: 20px 0;\n}\n\n.recipes__popup_comment {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  padding: 3px 8px;\n}\n\n.recipes__popup_comment:nth-child(even) {\n  background-color: var(--green);\n}\n\n.recipes__popup_comment-date {\n  grid-area: 1/2/2/3;\n  text-align: right;\n}\n\n.recipes__popup_comment-user {\n  grid-area: 1/1/2/2;\n}\n\n.recipes__popup_comment-content {\n  grid-area: 2/1/3/3;\n  padding: 3px 12px;\n}\n\n.recipes__popup_input-user {\n  width: 100%;\n  margin-top: 12px;\n  padding: 4px;\n  font-family: inherit;\n  outline: none;\n  border: 2px solid var(--green);\n  border-radius: 5px;\n}\n\n.recipes__popup_input-user:focus {\n  border: 2px solid var(--dark-green);\n}\n\n.recipes__popup_input-comment {\n  width: 100%;\n  margin: 12px 0;\n  padding: 4px;\n  font-family: inherit;\n  max-height: 200px;\n  min-height: 80px;\n  resize: vertical;\n  outline: none;\n  border: 2px solid var(--green);\n  border-radius: 5px;\n}\n\n.recipes__popup_input-comment:focus {\n  border: 2px solid var(--dark-green);\n}\n\n.recipes__popup_input-submit {\n  display: block;\n  width: auto;\n  padding: 6px 16px;\n  margin-inline: auto;\n  outline: none;\n  border: 2px solid var(--light-green);\n  border-radius: 5px;\n  color: var(--light-green);\n  background-color: black;\n  transition: all 0.3s;\n  cursor: pointer;\n}\n\n.recipes__popup_input-submit:hover {\n  border: 2px solid var(--dark-green);\n  transform: scale(1.1);\n}\n\nfooter {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  position: fixed;\n  top: calc(100% - 30px);\n  width: 100%;\n  padding: 8px;\n  height: 30px;\n  background-color: var(--dark-green);\n}\n\n.license-rights {\n  font-size: 10px;\n}\n\n.mobile_visible {\n  display: unset;\n}\n\n.desktop_visible {\n  display: none;\n}\n\n@media screen and (min-width: 768px) {\n  .navbar {\n    height: 70px;\n    justify-content: space-between;\n  }\n\n  .menu {\n    width: 32%;\n    transform: translateX(100vw);\n  }\n\n  .menu.active {\n    transform: translateX(70vw);\n  }\n\n  .menu-toggle {\n    color: white !important;\n    font-size: 1.3rem !important;\n    cursor: pointer;\n  }\n\n  .menu__categories {\n    width: 100% !important;\n  }\n\n  .landing {\n    margin-top: 70px;\n    gap: 20px;\n  }\n\n  .landing__counter {\n    width: 80%;\n    font-size: 1.69rem;\n    margin-top: 20px;\n  }\n\n  .navbar__recipes {\n    display: block;\n  }\n\n  .navbar__hamburger {\n    display: none;\n  }\n\n  .license-rights {\n    font-size: 14px;\n  }\n\n  .recipes {\n    margin-top: 100px;\n    justify-content: flex-start;\n    margin-bottom: 100px;\n  }\n\n  .list {\n    justify-content: center;\n    margin: 0 auto;\n  }\n\n  .category__card {\n    border-radius: 6px;\n  }\n\n  .category__image {\n    border-radius: 6px 6px 0 0;\n  }\n\n  .recipes__card {\n    width: 20%;\n    min-width: 180px;\n    max-width: 200px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    height: 385px;\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n    border-radius: 12px;\n  }\n\n  .recipes__image {\n    width: 100%;\n    border-radius: 12px 12px 0 0;\n  }\n\n  .recipes__content {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    padding-inline: 20px;\n  }\n\n  .recipes__header {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    margin-top: 8px;\n  }\n\n  .recipes__title {\n    font-size: 0.95rem;\n    line-height: 1.15rem;\n    max-width: 130px;\n    align-self: center;\n  }\n\n  .recipes__likes {\n    display: block;\n    margin: 10px 0;\n  }\n\n  .recipes__comments {\n    display: block;\n    width: 70%;\n    margin: 10px auto;\n    padding: 5px 10px;\n  }\n\n  .recipes__comments:last-of-type {\n    margin-top: auto;\n  }\n\n  .recipes__popup {\n    display: flex;\n    flex-direction: column;\n  }\n\n  div.recipes__popup_comments {\n    padding: 8px;\n    width: 80%;\n  }\n\n  .recipes__popup_image {\n    width: 50%;\n    align-self: center;\n  }\n\n  .recipes__popup_instructs {\n    min-height: 300px;\n    padding: 40px;\n  }\n\n  .popup__instructs_line {\n    font-size: 1.1rem;\n  }\n\n  .mobile_visible {\n    display: none;\n  }\n\n  .desktop_visible {\n    display: unset;\n  }\n}\n"],"sourceRoot":""}]);
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
      node.getAttribute(a.type).includes(a.item)
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
    const [burger, close] = document.querySelectorAll(
      'span > i.menu-toggle',
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


const appId = 'n4Krnxa1GxXHbZ349UMm';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZ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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7OztBQ0FtQzs7QUFFbkMsNkRBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vc3JjL21vZHVsZXMvYXBwLmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL3NyYy9tb2R1bGVzL2N1cnJlbnRDYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9zcmMvbW9kdWxlcy9jdXJyZW50TWVhbC5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9zcmMvbW9kdWxlcy9mZXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vc3JjL21vZHVsZXMvaW52b2x2ZW1lbnRBUEkuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvLy4vc3JjL21vZHVsZXMvbWVhbEFQSS5qcyIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL3NyYy9tb2R1bGVzL3BvcFVwLmpzIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL3NyYy9tb2R1bGVzL3VzZXJJbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vY2Fwc3RvbmUtdHdvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NhcHN0b25lLXR3by93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NhcHN0b25lLXR3by93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2NhcHN0b25lLXR3by93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NhcHN0b25lLXR3by93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NhcHN0b25lLXR3by93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9jYXBzdG9uZS10d28vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2NhcHN0b25lLXR3by8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU11a3RhKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogOHB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6IHJnYigyNDEsIDI0MSwgMjQxLCAwLjIpO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxNjgsIDE2OCwgMTY4KTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1kYXJrLWdyZWVuOiBoc2woMTIxLCAzMSUsIDQ0JSk7XFxuICAtLWdyZWVuOiBoc2woMTA4LCAzNSUsIDYwJSk7XFxuICAtLWxpZ2h0LWdyZWVuOiBoc2woNjgsIDU5JSwgODUlKTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTM5LCAxMzksIDEzOSk7XFxufVxcblxcbmh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnTXVrdGEnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5Lm5vU2Nyb2xsIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5hLFxcbmE6aG92ZXIsXFxuYTpmb2N1cyxcXG5hOmFjdGl2ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxudWwsXFxubGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDAlO1xcbiAgbWFyZ2luOiAwJTtcXG59XFxuXFxuLm5hdmJhciB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBwYWRkaW5nOiAxMHB4IDMycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JlZW4pO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbnNwYW4uaW1hZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmhlcm9fX2xvZ28ge1xcbiAgd2lkdGg6IDE2MHB4O1xcbn1cXG5cXG4ubmF2YmFyX19sb2dvIC5oZXJvX19sb2dvIHtcXG4gIHdpZHRoOiAzMnB4O1xcbn1cXG5cXG4ubmF2YmFyX19yZWNpcGVzIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5tZW51IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTBweDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZWVuKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XFxuICBwYWRkaW5nOiA0MHB4IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbn1cXG5cXG4ubWVudS5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbn1cXG5cXG4ubWVudV9fY2F0ZWdvcmllcyB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggYmxhY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgYXV0byAxMnB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWVudV9fbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnVfX2l0ZW0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzMnB4O1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnVfX2l0ZW0gaW1nIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXgtd2lkdGg6IDgwcHg7XFxufVxcblxcbi5tZW51X19pdGVtIHNwYW4ge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICB3aWR0aDogNTAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmZhLXNvbGlkIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmxhbmRpbmcge1xcbiAgbWFyZ2luOiA1MHB4IGF1dG87XFxuICBoZWlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNDBweDtcXG59XFxuXFxuLmhlcm8uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5sYW5kaW5nX19jb3VudGVyLmNvdW50ZXIge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLmhlcm8ge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMzJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NCwgMjQ0KTtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMTQ1LCAxNDUsIDE0NSwgMC42OTkpO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdWJsZSBsaWdodGJsdWU7XFxufVxcblxcbnNwYW4gPiBpLm1lbnUtdG9nZ2xlLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5zcGFuID4gaS5tZW51LXRvZ2dsZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhlcm9fX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmhlcm9fX2Rlc2NyaXB0aW9uIHtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTk0LCAxOTYsIDE5Nyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNvdW50ZXIge1xcbiAgd2lkdGg6IDMyMHB4O1xcbiAgcGFkZGluZzogMCA4cHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZ2FwOiAyNHB4O1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4uY2F0ZWdvcnlfX2NhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jYXRlZ29yeV9faW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXRlZ29yeV9fY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctaW5saW5lOiAyMHB4O1xcbn1cXG5cXG4uY2F0ZWdvcnlfX2hlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXRlZ29yeV9fdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5yZWNpcGVzIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuLnJlY2lwZXNfX2NhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMS41JTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG59XFxuXFxuLnJlY2lwZXNfX2ltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMDtcXG59XFxuXFxuLnJlY2lwZXNfX2NvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWlubGluZTogMjBweDtcXG59XFxuXFxuLnJlY2lwZXNfX2hlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmVjaXBlc19fdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5yZWNpcGVzX19saWtlcyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmZhLWhlYXJ0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJlY2lwZXNfX2NvbW1lbnRzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yZWNpcGVzX19wb3B1cCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogNy41JSAxMCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcXG4gIHRvcDogMCU7XFxuICBsZWZ0OiAwJTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXBfaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5yZWNpcGVzX19wb3B1cCAuZmEteG1hcmsge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiA2cHggOHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yZWNpcGVzX19wb3B1cF90aXRsZSB7XFxuICBwYWRkaW5nOiA0JTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXBfdGFncyB7XFxuICB3aWR0aDogOTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbjogMCBhdXRvIDE2cHg7XFxufVxcblxcbi5yZWNpcGVzX19wb3B1cF90YWdMaSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIG1pbi13aWR0aDogNTBweDtcXG4gIHBhZGRpbmc6IDFweCA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWdyZWVuKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5yZWNpcGVzX19wb3B1cF9pbnN0cnVjdHMge1xcbiAgcGFkZGluZzogOCU7XFxuICBtYXgtaGVpZ2h0OiA2MCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZWVuKTtcXG59XFxuXFxuLnBvcHVwX19pbnN0cnVjdHNfbGluZSB7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgbGlzdC1zdHlsZTogZGVjaW1hbDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuLnJlY2lwZXNfX3BvcHVwX3ZpZGVvIHtcXG4gIG1hcmdpbjogMTZweCBhdXRvO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5yZWNpcGVzX19wb3B1cF92aWRlbyBhIHtcXG4gIGNvbG9yOiByZ2IoNDksIDgwLCAyNTUpO1xcbn1cXG5cXG5kaXYucmVjaXBlc19fcG9wdXBfY29tbWVudHMge1xcbiAgcGFkZGluZzogNCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLnJlY2lwZXNfX3BvcHVwX2NvbW1lbnQtY291bnQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG51bC5yZWNpcGVzX19wb3B1cF9jb21tZW50cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmVlbik7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWdyZWVuKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1pbi1oZWlnaHQ6IDcycHg7XFxuICBtYXgtaGVpZ2h0OiAyMTZweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuLnJlY2lwZXNfX3BvcHVwX2NvbW1lbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzcHggOHB4O1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXBfY29tbWVudDpudGgtY2hpbGQoZXZlbikge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXBfY29tbWVudC1kYXRlIHtcXG4gIGdyaWQtYXJlYTogMS8yLzIvMztcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXBfY29tbWVudC11c2VyIHtcXG4gIGdyaWQtYXJlYTogMS8xLzIvMjtcXG59XFxuXFxuLnJlY2lwZXNfX3BvcHVwX2NvbW1lbnQtY29udGVudCB7XFxuICBncmlkLWFyZWE6IDIvMS8zLzM7XFxuICBwYWRkaW5nOiAzcHggMTJweDtcXG59XFxuXFxuLnJlY2lwZXNfX3BvcHVwX2lucHV0LXVzZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgcGFkZGluZzogNHB4O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ3JlZW4pO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXBfaW5wdXQtdXNlcjpmb2N1cyB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrLWdyZWVuKTtcXG59XFxuXFxuLnJlY2lwZXNfX3BvcHVwX2lucHV0LWNvbW1lbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDEycHggMDtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgbWF4LWhlaWdodDogMjAwcHg7XFxuICBtaW4taGVpZ2h0OiA4MHB4O1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ncmVlbik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5yZWNpcGVzX19wb3B1cF9pbnB1dC1jb21tZW50OmZvY3VzIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRhcmstZ3JlZW4pO1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXBfaW5wdXQtc3VibWl0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IGF1dG87XFxuICBwYWRkaW5nOiA2cHggMTZweDtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGlnaHQtZ3JlZW4pO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyZWVuKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yZWNpcGVzX19wb3B1cF9pbnB1dC1zdWJtaXQ6aG92ZXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGFyay1ncmVlbik7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogY2FsYygxMDAlIC0gMzBweCk7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JlZW4pO1xcbn1cXG5cXG4ubGljZW5zZS1yaWdodHMge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG4ubW9iaWxlX3Zpc2libGUge1xcbiAgZGlzcGxheTogdW5zZXQ7XFxufVxcblxcbi5kZXNrdG9wX3Zpc2libGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5uYXZiYXIge1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG5cXG4gIC5tZW51IHtcXG4gICAgd2lkdGg6IDMyJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHZ3KTtcXG4gIH1cXG5cXG4gIC5tZW51LmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg3MHZ3KTtcXG4gIH1cXG5cXG4gIC5tZW51LXRvZ2dsZSB7XFxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xcbiAgICBmb250LXNpemU6IDEuM3JlbSAhaW1wb3J0YW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICAubWVudV9fY2F0ZWdvcmllcyB7XFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAubGFuZGluZyB7XFxuICAgIG1hcmdpbi10b3A6IDcwcHg7XFxuICAgIGdhcDogMjBweDtcXG4gIH1cXG5cXG4gIC5sYW5kaW5nX19jb3VudGVyIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZm9udC1zaXplOiAxLjY5cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgfVxcblxcbiAgLm5hdmJhcl9fcmVjaXBlcyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLm5hdmJhcl9faGFtYnVyZ2VyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5saWNlbnNlLXJpZ2h0cyB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gIH1cXG5cXG4gIC5yZWNpcGVzIHtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxuICB9XFxuXFxuICAubGlzdCB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gIH1cXG5cXG4gIC5jYXRlZ29yeV9fY2FyZCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIH1cXG5cXG4gIC5jYXRlZ29yeV9faW1hZ2Uge1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDAgMDtcXG4gIH1cXG5cXG4gIC5yZWNpcGVzX19jYXJkIHtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgbWluLXdpZHRoOiAxODBweDtcXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDM4NXB4O1xcbiAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgfVxcblxcbiAgLnJlY2lwZXNfX2ltYWdlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwIDA7XFxuICB9XFxuXFxuICAucmVjaXBlc19fY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XFxuICB9XFxuXFxuICAucmVjaXBlc19faGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi10b3A6IDhweDtcXG4gIH1cXG5cXG4gIC5yZWNpcGVzX190aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTVyZW07XFxuICAgIG1heC13aWR0aDogMTMwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5yZWNpcGVzX19saWtlcyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG4gIH1cXG5cXG4gIC5yZWNpcGVzX19jb21tZW50cyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBtYXJnaW46IDEwcHggYXV0bztcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICB9XFxuXFxuICAucmVjaXBlc19fY29tbWVudHM6bGFzdC1vZi10eXBlIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gIH1cXG5cXG4gIC5yZWNpcGVzX19wb3B1cCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICBkaXYucmVjaXBlc19fcG9wdXBfY29tbWVudHMge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxuXFxuICAucmVjaXBlc19fcG9wdXBfaW1hZ2Uge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB9XFxuXFxuICAucmVjaXBlc19fcG9wdXBfaW5zdHJ1Y3RzIHtcXG4gICAgbWluLWhlaWdodDogMzAwcHg7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxuICB9XFxuXFxuICAucG9wdXBfX2luc3RydWN0c19saW5lIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICB9XFxuXFxuICAubW9iaWxlX3Zpc2libGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmRlc2t0b3BfdmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IHVuc2V0O1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDJCQUEyQjtFQUMzQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7RUFHRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBOzs7O0VBSUUscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw4QkFBOEI7RUFD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QjtFQUNsQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TXVrdGEnKTtcXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA4cHg7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogcmdiKDI0MSwgMjQxLCAyNDEsIDAuMik7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZDogcmdiKDE2OCwgMTY4LCAxNjgpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWRhcmstZ3JlZW46IGhzbCgxMjEsIDMxJSwgNDQlKTtcXG4gIC0tZ3JlZW46IGhzbCgxMDgsIDM1JSwgNjAlKTtcXG4gIC0tbGlnaHQtZ3JlZW46IGhzbCg2OCwgNTklLCA4NSUpO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxMzksIDEzOSwgMTM5KTtcXG59XFxuXFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdNdWt0YScsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkubm9TY3JvbGwge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbmEsXFxuYTpob3ZlcixcXG5hOmZvY3VzLFxcbmE6YWN0aXZlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG51bCxcXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMCU7XFxuICBtYXJnaW46IDAlO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHBhZGRpbmc6IDEwcHggMzJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmVlbik7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuc3Bhbi5pbWFnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaGVyb19fbG9nbyB7XFxuICB3aWR0aDogMTYwcHg7XFxufVxcblxcbi5uYXZiYXJfX2xvZ28gLmhlcm9fX2xvZ28ge1xcbiAgd2lkdGg6IDMycHg7XFxufVxcblxcbi5uYXZiYXJfX3JlY2lwZXMge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLm1lbnUge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MHB4O1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JlZW4pO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcXG4gIHBhZGRpbmc6IDQwcHggMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcblxcbi5tZW51LmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxufVxcblxcbi5tZW51X19jYXRlZ29yaWVzIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBibGFjaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMCBhdXRvIDEycHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tZW51X19saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudV9faXRlbSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDMycHg7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudV9faXRlbSBpbWcge1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1heC13aWR0aDogODBweDtcXG59XFxuXFxuLm1lbnVfX2l0ZW0gc3BhbiB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHdpZHRoOiA1MCU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uZmEtc29saWQge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubGFuZGluZyB7XFxuICBtYXJnaW46IDUwcHggYXV0bztcXG4gIGhlaWdodDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4uaGVyby5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmxhbmRpbmdfX2NvdW50ZXIuY291bnRlciB7XFxuICB3aWR0aDogODAlO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4uaGVybyB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAzMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ0LCAyNDQpO1xcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgxNDUsIDE0NSwgMTQ1LCAwLjY5OSk7XFxuICBib3JkZXItYm90dG9tOiAxcHggZG91YmxlIGxpZ2h0Ymx1ZTtcXG59XFxuXFxuc3BhbiA+IGkubWVudS10b2dnbGUuaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbnNwYW4gPiBpLm1lbnUtdG9nZ2xlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGVyb19fdGl0bGUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uaGVyb19fZGVzY3JpcHRpb24ge1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOTQsIDE5NiwgMTk3KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY291bnRlciB7XFxuICB3aWR0aDogMzIwcHg7XFxuICBwYWRkaW5nOiAwIDhweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBnYXA6IDI0cHg7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbi5jYXRlZ29yeV9fY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhdGVnb3J5X19pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNhdGVnb3J5X19jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XFxufVxcblxcbi5jYXRlZ29yeV9faGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNhdGVnb3J5X190aXRsZSB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnJlY2lwZXMge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4ucmVjaXBlc19fY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAxLjUlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbn1cXG5cXG4ucmVjaXBlc19faW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMCAwO1xcbn1cXG5cXG4ucmVjaXBlc19fY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctaW5saW5lOiAyMHB4O1xcbn1cXG5cXG4ucmVjaXBlc19faGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yZWNpcGVzX190aXRsZSB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnJlY2lwZXNfX2xpa2VzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLXRvcDogLTEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uZmEtaGVhcnQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmVjaXBlc19fY29tbWVudHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogNzAlO1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJlY2lwZXNfX3BvcHVwIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiA3LjUlIDEwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xcbiAgdG9wOiAwJTtcXG4gIGxlZnQ6IDAlO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5yZWNpcGVzX19wb3B1cF9pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnJlY2lwZXNfX3BvcHVwIC5mYS14bWFyayB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDZweCA4cHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJlY2lwZXNfX3BvcHVwX3RpdGxlIHtcXG4gIHBhZGRpbmc6IDQlO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5yZWNpcGVzX19wb3B1cF90YWdzIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG8gMTZweDtcXG59XFxuXFxuLnJlY2lwZXNfX3BvcHVwX3RhZ0xpIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgbWluLXdpZHRoOiA1MHB4O1xcbiAgcGFkZGluZzogMXB4IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstZ3JlZW4pO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnJlY2lwZXNfX3BvcHVwX2luc3RydWN0cyB7XFxuICBwYWRkaW5nOiA4JTtcXG4gIG1heC1oZWlnaHQ6IDYwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JlZW4pO1xcbn1cXG5cXG4ucG9wdXBfX2luc3RydWN0c19saW5lIHtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxuICBsaXN0LXN0eWxlOiBkZWNpbWFsO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXBfdmlkZW8ge1xcbiAgbWFyZ2luOiAxNnB4IGF1dG87XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnJlY2lwZXNfX3BvcHVwX3ZpZGVvIGEge1xcbiAgY29sb3I6IHJnYig0OSwgODAsIDI1NSk7XFxufVxcblxcbmRpdi5yZWNpcGVzX19wb3B1cF9jb21tZW50cyB7XFxuICBwYWRkaW5nOiA0JTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXBfY29tbWVudC1jb3VudCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbnVsLnJlY2lwZXNfX3BvcHVwX2NvbW1lbnRzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZWVuKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstZ3JlZW4pO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWluLWhlaWdodDogNzJweDtcXG4gIG1heC1oZWlnaHQ6IDIxNnB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIG1hcmdpbjogMjBweCAwO1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXBfY29tbWVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDNweCA4cHg7XFxufVxcblxcbi5yZWNpcGVzX19wb3B1cF9jb21tZW50Om50aC1jaGlsZChldmVuKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxufVxcblxcbi5yZWNpcGVzX19wb3B1cF9jb21tZW50LWRhdGUge1xcbiAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5yZWNpcGVzX19wb3B1cF9jb21tZW50LXVzZXIge1xcbiAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXBfY29tbWVudC1jb250ZW50IHtcXG4gIGdyaWQtYXJlYTogMi8xLzMvMztcXG4gIHBhZGRpbmc6IDNweCAxMnB4O1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXBfaW5wdXQtdXNlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ncmVlbik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5yZWNpcGVzX19wb3B1cF9pbnB1dC11c2VyOmZvY3VzIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRhcmstZ3JlZW4pO1xcbn1cXG5cXG4ucmVjaXBlc19fcG9wdXBfaW5wdXQtY29tbWVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMTJweCAwO1xcbiAgcGFkZGluZzogNHB4O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gIG1pbi1oZWlnaHQ6IDgwcHg7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdyZWVuKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnJlY2lwZXNfX3BvcHVwX2lucHV0LWNvbW1lbnQ6Zm9jdXMge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGFyay1ncmVlbik7XFxufVxcblxcbi5yZWNpcGVzX19wb3B1cF9pbnB1dC1zdWJtaXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogYXV0bztcXG4gIHBhZGRpbmc6IDZweCAxNnB4O1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1saWdodC1ncmVlbik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JlZW4pO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJlY2lwZXNfX3BvcHVwX2lucHV0LXN1Ym1pdDpob3ZlciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrLWdyZWVuKTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiBjYWxjKDEwMCUgLSAzMHB4KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmVlbik7XFxufVxcblxcbi5saWNlbnNlLXJpZ2h0cyB7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcblxcbi5tb2JpbGVfdmlzaWJsZSB7XFxuICBkaXNwbGF5OiB1bnNldDtcXG59XFxuXFxuLmRlc2t0b3BfdmlzaWJsZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLm5hdmJhciB7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcblxcbiAgLm1lbnUge1xcbiAgICB3aWR0aDogMzIlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwdncpO1xcbiAgfVxcblxcbiAgLm1lbnUuYWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDcwdncpO1xcbiAgfVxcblxcbiAgLm1lbnUtdG9nZ2xlIHtcXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtICFpbXBvcnRhbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIC5tZW51X19jYXRlZ29yaWVzIHtcXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC5sYW5kaW5nIHtcXG4gICAgbWFyZ2luLXRvcDogNzBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgfVxcblxcbiAgLmxhbmRpbmdfX2NvdW50ZXIge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBmb250LXNpemU6IDEuNjlyZW07XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICB9XFxuXFxuICAubmF2YmFyX19yZWNpcGVzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAubmF2YmFyX19oYW1idXJnZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmxpY2Vuc2UtcmlnaHRzIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgfVxcblxcbiAgLnJlY2lwZXMge1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG4gIH1cXG5cXG4gIC5saXN0IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgfVxcblxcbiAgLmNhdGVnb3J5X19jYXJkIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgfVxcblxcbiAgLmNhdGVnb3J5X19pbWFnZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweCA2cHggMCAwO1xcbiAgfVxcblxcbiAgLnJlY2lwZXNfX2NhcmQge1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBtaW4td2lkdGg6IDE4MHB4O1xcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMzg1cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICB9XFxuXFxuICAucmVjaXBlc19faW1hZ2Uge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMDtcXG4gIH1cXG5cXG4gIC5yZWNpcGVzX19jb250ZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBwYWRkaW5nLWlubGluZTogMjBweDtcXG4gIH1cXG5cXG4gIC5yZWNpcGVzX19oZWFkZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcbiAgfVxcblxcbiAgLnJlY2lwZXNfX3RpdGxlIHtcXG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS4xNXJlbTtcXG4gICAgbWF4LXdpZHRoOiAxMzBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgfVxcblxcbiAgLnJlY2lwZXNfX2xpa2VzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbiAgfVxcblxcbiAgLnJlY2lwZXNfX2NvbW1lbnRzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIH1cXG5cXG4gIC5yZWNpcGVzX19jb21tZW50czpsYXN0LW9mLXR5cGUge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgfVxcblxcbiAgLnJlY2lwZXNfX3BvcHVwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIGRpdi5yZWNpcGVzX19wb3B1cF9jb21tZW50cyB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG5cXG4gIC5yZWNpcGVzX19wb3B1cF9pbWFnZSB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5yZWNpcGVzX19wb3B1cF9pbnN0cnVjdHMge1xcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gICAgcGFkZGluZzogNDBweDtcXG4gIH1cXG5cXG4gIC5wb3B1cF9faW5zdHJ1Y3RzX2xpbmUge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gIH1cXG5cXG4gIC5tb2JpbGVfdmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuZGVza3RvcF92aXNpYmxlIHtcXG4gICAgZGlzcGxheTogdW5zZXQ7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuLi9pbmRleC5jc3MnO1xuaW1wb3J0IGxvZ28gZnJvbSAnLi4vYXNzZXRzL2J1cmdlci1sb2dvLnBuZyc7XG5pbXBvcnQgVXNlckludGVyZmFjZSBmcm9tICcuL3VzZXJJbnRlcmZhY2UuanMnO1xuaW1wb3J0IE1lYWxBUEkgZnJvbSAnLi9tZWFsQVBJLmpzJztcbmltcG9ydCBDdXJyZW50Q2F0ZWdvcnkgZnJvbSAnLi9jdXJyZW50Q2F0ZWdvcnkuanMnO1xuaW1wb3J0IEN1cnJlbnRNZWFsIGZyb20gJy4vY3VycmVudE1lYWwuanMnO1xuaW1wb3J0IEludm9sdmVtZW50QVBJIGZyb20gJy4vaW52b2x2ZW1lbnRBUEkuanMnO1xuaW1wb3J0IFBvcFVwIGZyb20gJy4vcG9wVXAuanMnO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51LmpzJztcblxuY2xhc3MgQXBwIHtcbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5pbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbWFnZScpO1xuICAgIHRoaXMuYXN5bmNFbnYoKTtcbiAgfVxuXG4gIHNldExvZ28oKSB7XG4gICAgQXJyYXkuZnJvbSh0aGlzLmltYWdlQ29udGFpbmVyKS5mb3JFYWNoKChjb250YWluZXIpID0+IHtcbiAgICAgIGNvbnN0IGxvZ29JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGxvZ29JbWcuc3JjID0gbG9nbztcbiAgICAgIGxvZ29JbWcuY2xhc3NMaXN0LmFkZCgnaGVyb19fbG9nbycpO1xuICAgICAgbG9nb0ltZy5hbHQgPSAnWXVtbXkgUmVjaXBlcyBMb2dvJztcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvSW1nKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGFzeW5jRW52KCkge1xuICAgIHRoaXMuc2V0TG9nbygpO1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBNZWFsQVBJLmdldENhdGVnb3JpZXMoKTtcbiAgICBNZW51LmRpc3BsYXlDYXRlZ29yaWVzKGNhdGVnb3JpZXMpO1xuICAgIFVzZXJJbnRlcmZhY2UuZGlzcGxheUNhdGVnb3JpZXMoY2F0ZWdvcmllcyk7XG4gICAgVXNlckludGVyZmFjZS5jb3VudGVyVGV4dCgnQ2F0ZWdvcmllcycpO1xuICAgIHRoaXMuc2VsZWN0VGFncygpO1xuICAgIHRoaXMuc2V0TGlzdGVuZXJzKCk7XG4gIH1cblxuICBnb0JhY2tUb0NvbW1vblBhcmVudCA9IChub2RlLCBhKSA9PiB7XG4gICAgaWYgKFxuICAgICAgbm9kZS5nZXRBdHRyaWJ1dGUoYS50eXBlKS5pbmNsdWRlcyhhLml0ZW0pXG4gICAgICAhPT0gbm9kZS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShhLnR5cGUpLmluY2x1ZGVzKGEuaXRlbSlcbiAgICApIHJldHVybiBub2RlO1xuICAgIHJldHVybiB0aGlzLmdvQmFja1RvQ29tbW9uUGFyZW50KG5vZGUucGFyZW50Tm9kZSwgYSk7XG4gIH07XG5cbiAgc3RhdGljIHRvZ2dsZU1lbnUoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdub1Njcm9sbCcpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51JykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtdG9nZ2xlJykuZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgICAgaWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBjbG9zZU1lbnUoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdub1Njcm9sbCcpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51JykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8nKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBjb25zdCBbYnVyZ2VyLCBjbG9zZV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJ3NwYW4gPiBpLm1lbnUtdG9nZ2xlJyxcbiAgICApO1xuICAgIGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgfVxuXG4gIHN0YXRpYyBoaWRlTGFuZGluZygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVybycpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICB9XG5cbiAgc2VsZWN0Q2F0ZWdvcnkgPSBhc3luYyAoY2xpY2tlZEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdvQmFja1RvQ29tbW9uUGFyZW50KGNsaWNrZWRFbGVtZW50LCB7XG4gICAgICB0eXBlOiAnY2xhc3MnLFxuICAgICAgaXRlbTogJ2NhdGVnb3J5JyxcbiAgICB9KTtcbiAgICBjb25zdCBjYXRlZ29yeU5hbWUgPSBwYXJlbnQuY2hpbGRyZW5bMV0uaW5uZXJUZXh0O1xuICAgIHRoaXMuTElTVC5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCBjYXRlZ29yeSA9IGF3YWl0IE1lYWxBUEkuZ2V0QnlDYXRlZ29yeShjYXRlZ29yeU5hbWUpO1xuICAgIGNvbnN0IGFsbExpa2VzID0gYXdhaXQgSW52b2x2ZW1lbnRBUEkuZ2V0QWxsTGlrZXMoKTtcbiAgICBjb25zdCBjdXJyZW50Q2F0ZWdvcnkgPSBuZXcgQ3VycmVudENhdGVnb3J5KGNhdGVnb3J5KTtcbiAgICBVc2VySW50ZXJmYWNlLmRpc3BsYXlSZWNpcGVzKGN1cnJlbnRDYXRlZ29yeS5tZWFscywgYWxsTGlrZXMpO1xuICAgIFVzZXJJbnRlcmZhY2UuY291bnRlclRleHQoYCR7Y2F0ZWdvcnlOYW1lfSBSZWNpcGVzYCk7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIEFwcC5oaWRlTGFuZGluZygpO1xuICB9O1xuXG4gIG1lbnVMb2FkQ2F0ZWdvcmllcyA9IGFzeW5jIChjbGlja2VkRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZ29CYWNrVG9Db21tb25QYXJlbnQoY2xpY2tlZEVsZW1lbnQsIHtcbiAgICAgIHR5cGU6ICdjbGFzcycsXG4gICAgICBpdGVtOiAnbWVudV9faXRlbScsXG4gICAgfSk7XG4gICAgY29uc3QgY2F0ZWdvcnlOYW1lID0gcGFyZW50LmNoaWxkcmVuWzFdLmlubmVyVGV4dDtcbiAgICB0aGlzLkxJU1QuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IE1lYWxBUEkuZ2V0QnlDYXRlZ29yeShjYXRlZ29yeU5hbWUpO1xuICAgIGNvbnN0IGFsbExpa2VzID0gYXdhaXQgSW52b2x2ZW1lbnRBUEkuZ2V0QWxsTGlrZXMoKTtcbiAgICBjb25zdCBjdXJyZW50Q2F0ZWdvcnkgPSBuZXcgQ3VycmVudENhdGVnb3J5KGNhdGVnb3JpZXMpO1xuICAgIFVzZXJJbnRlcmZhY2UuZGlzcGxheVJlY2lwZXMoY3VycmVudENhdGVnb3J5Lm1lYWxzLCBhbGxMaWtlcyk7XG4gICAgVXNlckludGVyZmFjZS5jb3VudGVyVGV4dChgJHtjYXRlZ29yeU5hbWV9IFJlY2lwZXNgKTtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgQXBwLmhpZGVMYW5kaW5nKCk7XG4gICAgQXBwLnRvZ2dsZU1lbnUoKTtcbiAgfTtcblxuICBsb2dvTG9hZENhdGVnb3JpZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgdGhpcy5MSVNULmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBNZWFsQVBJLmdldENhdGVnb3JpZXMoKTtcbiAgICBVc2VySW50ZXJmYWNlLmRpc3BsYXlDYXRlZ29yaWVzKGNhdGVnb3JpZXMpO1xuICAgIFVzZXJJbnRlcmZhY2UuY291bnRlclRleHQoJ0NhdGVnb3JpZXMnKTtcbiAgICBBcHAuY2xvc2VNZW51KCk7XG4gIH07XG5cbiAgYWRkTGlrZSA9IGFzeW5jIChjbGlja2VkRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBjbGlja2VkRWxlbWVudC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICBjb25zdCBtZWFsSWQgPSBjYXJkLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICBhd2FpdCBJbnZvbHZlbWVudEFQSS5hZGRMaWtlKG1lYWxJZCk7XG4gICAgVXNlckludGVyZmFjZS5hZGRUb0xpa2VzQ291bnRlckRPTShjYXJkKTtcbiAgfTtcblxuICBsb2FkUG9wdXAgPSBhc3luYyAoY2xpY2tlZEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjYXJkID0gY2xpY2tlZEVsZW1lbnQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIGNvbnN0IG1lYWxJZCA9IGNhcmQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIGNvbnN0IG1lYWwgPSBhd2FpdCBNZWFsQVBJLmdldFJlY2lwZShtZWFsSWQpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbm9TY3JvbGwnKTtcblxuICAgIGF3YWl0IEludm9sdmVtZW50QVBJLmFkZENvbW1lbnQoXG4gICAgICB7IHVzZXJuYW1lOiAnJywgY29tbWVudDogJycgfSxcbiAgICAgIG1lYWxJZCxcbiAgICApO1xuXG4gICAgbGV0IGNvbW1lbnRzID0gYXdhaXQgSW52b2x2ZW1lbnRBUEkuZ2V0Q29tbWVudHMobWVhbElkKTtcbiAgICBjb21tZW50cyA9IGNvbW1lbnRzLmZpbHRlcigoY29tbWVudCkgPT4gY29tbWVudC51c2VybmFtZSAhPT0gJycpO1xuICAgIGNvbnN0IGN1cnJlbnRNZWFsID0gbmV3IEN1cnJlbnRNZWFsKG1lYWwsIGNvbW1lbnRzKTtcblxuICAgIFBvcFVwLnBvcCh7XG4gICAgICAuLi5jdXJyZW50TWVhbCxcbiAgICAgIGNvbW1lbnRzLFxuICAgICAgdHlwZTogJ1JlY2lwZScsXG4gICAgfSk7XG4gIH07XG5cbiAgc3RhdGljIGZvckVhY2hMaXN0ZW5lcihpdGVtcywgZnVuYykge1xuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBmdW5jKGUudGFyZ2V0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0TGlzdGVuZXJzKCkge1xuICAgIEFwcC5mb3JFYWNoTGlzdGVuZXIodGhpcy5tZW51VG9nZ2xlciwgQXBwLnRvZ2dsZU1lbnUpO1xuICAgIEFwcC5mb3JFYWNoTGlzdGVuZXIodGhpcy5tZW51SXRlbXMsIHRoaXMubWVudUxvYWRDYXRlZ29yaWVzKTtcbiAgICBBcHAuZm9yRWFjaExpc3RlbmVyKHRoaXMuaGVyb0xvZ29zLCB0aGlzLmxvZ29Mb2FkQ2F0ZWdvcmllcyk7XG5cbiAgICB0aGlzLkxJU1QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgY2xpY2tlZEVsZW1lbnQgPSBlLnRhcmdldDtcblxuICAgICAgaWYgKGNsaWNrZWRFbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5pbmNsdWRlcygnY2F0ZWdvcnknKSkge1xuICAgICAgICB0aGlzLnNlbGVjdENhdGVnb3J5KGNsaWNrZWRFbGVtZW50KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2xpY2tlZEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1oZWFydCcpKSB7XG4gICAgICAgIHRoaXMuYWRkTGlrZShjbGlja2VkRWxlbWVudCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGNsaWNrZWRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncmVjaXBlc19fY29tbWVudHMnKSkge1xuICAgICAgICB0aGlzLmxvYWRQb3B1cChjbGlja2VkRWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3RUYWdzKCkge1xuICAgIHRoaXMubWVudVRvZ2dsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS10b2dnbGUnKTtcbiAgICB0aGlzLm1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51X19pdGVtJyk7XG4gICAgdGhpcy5oZXJvTG9nb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVyb19fbG9nbycpO1xuICAgIHRoaXMuTElTVCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Jyk7XG4gIH1cbn1cblxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuXG5leHBvcnQgZGVmYXVsdCBhcHA7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDdXJyZW50Q2F0ZWdvcnkge1xuICBtZWFscztcblxuICBjb25zdHJ1Y3RvcihjYXRlZ29yeU1lYWxzID0gW10pIHtcbiAgICB0aGlzLm1lYWxzID0gY2F0ZWdvcnlNZWFscztcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VycmVudE1lYWwge1xuICBpZE1lYWw7XG5cbiAgc3RyTWVhbDtcblxuICBzdHJNZWFsVGh1bWI7XG5cbiAgc3RySW5zdHJ1Y3Rpb25zO1xuXG4gIHN0clRhZ3M7XG5cbiAgc3RyWW91dHViZTtcblxuICBjb21tZW50cztcblxuICBjb25zdHJ1Y3RvcihjdXJyZW50TWVhbCwgY29tbWVudHMgPSBbXSkge1xuICAgIHRoaXMuaWRNZWFsID0gY3VycmVudE1lYWwuaWRNZWFsO1xuICAgIHRoaXMuc3RyTWVhbCA9IGN1cnJlbnRNZWFsLnN0ck1lYWw7XG4gICAgdGhpcy5zdHJNZWFsVGh1bWIgPSBjdXJyZW50TWVhbC5zdHJNZWFsVGh1bWI7XG4gICAgdGhpcy5zdHJJbnN0cnVjdGlvbnMgPSBjdXJyZW50TWVhbC5zdHJJbnN0cnVjdGlvbnM7XG4gICAgdGhpcy5zdHJUYWdzID0gY3VycmVudE1lYWwuc3RyVGFncztcbiAgICB0aGlzLnN0cllvdXR1YmUgPSBjdXJyZW50TWVhbC5zdHJZb3V0dWJlO1xuICAgIHRoaXMuY29tbWVudHMgPSBjb21tZW50cztcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmV0Y2hSZXF1ZXN0IHtcbiAgbWV0aG9kO1xuXG4gIGJvZHk7XG5cbiAgaGVhZGVycztcblxuICB1cmw7XG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIG1ldGhvZCA9ICdHRVQnLFxuICAgIGJvZHksXG4gICAgdXJsID0gJycsXG4gICAgaGVhZGVycyA9IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgfSxcbiAgfSA9IHt9KSB7XG4gICAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgICB0aGlzLmhlYWRlcnMgPSBoZWFkZXJzO1xuICAgIHRoaXMudXJsID0gdXJsO1xuICB9XG5cbiAgYXN5bmMgY2FsbCgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kOiB0aGlzLm1ldGhvZCxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodGhpcy5ib2R5KSxcbiAgICAgICAgaGVhZGVyczogdGhpcy5tZXRob2QgPT09ICdQT1NUJyA/IHRoaXMuaGVhZGVycyA6IHVuZGVmaW5lZCxcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy51cmwsIG9wdGlvbnMpO1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSByZXR1cm4gbnVsbDtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBGZXRjaFJlcXVlc3QgZnJvbSAnLi9mZXRjaFJlcXVlc3QuanMnO1xuXG5jb25zdCBhcHBJZCA9ICduNEtybnhhMUd4WEhiWjM0OVVNbSc7XG5jb25zdCB1cmxNQVAgPSB7XG4gIG1haW46ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nLFxuICBsaWtlczogYCR7YXBwSWR9L2xpa2VzL2AsXG4gIGNvbW1lbnRzOiBgJHthcHBJZH0vY29tbWVudHNgLFxuICBieUNvbW1lbnQ6IGAke2FwcElkfS9jb21tZW50cz9pdGVtX2lkPWAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnZvbHZlbWVudEFQSSB7XG4gIHN0YXRpYyBhc3luYyBhZGRMaWtlKG1lYWwpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmV0Y2hSZXF1ZXN0ID0gbmV3IEZldGNoUmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiB7IGl0ZW1faWQ6IG1lYWwgfSxcbiAgICAgICAgdXJsOiBgJHt1cmxNQVAubWFpbn0ke3VybE1BUC5saWtlc31gLFxuICAgICAgfSk7XG4gICAgICBhd2FpdCBmZXRjaFJlcXVlc3QuY2FsbCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRBbGxMaWtlcygpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmV0Y2hSZXF1ZXN0ID0gbmV3IEZldGNoUmVxdWVzdCh7XG4gICAgICAgIHVybDogYCR7dXJsTUFQLm1haW59JHt1cmxNQVAubGlrZXN9YCxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgYWxsTGlrZXMgPSBhd2FpdCBmZXRjaFJlcXVlc3QuY2FsbCgpO1xuICAgICAgcmV0dXJuIGFsbExpa2VzO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXRNZWFsTGlrZXMobGlrZXNBcnIsIEl0ZW1JZCkge1xuICAgIGNvbnN0IG1lYWxMaWtlcyA9IGxpa2VzQXJyLmZpbHRlcihcbiAgICAgIChtZWFsKSA9PiBtZWFsLml0ZW1faWQgPT09IEl0ZW1JZCxcbiAgICApWzBdO1xuICAgIGlmICghbWVhbExpa2VzKSByZXR1cm4gMDtcbiAgICByZXR1cm4gbWVhbExpa2VzLmxpa2VzO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGFkZENvbW1lbnQoeyB1c2VybmFtZSwgY29tbWVudCB9LCBtZWFsKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZldGNoUmVxdWVzdCA9IG5ldyBGZXRjaFJlcXVlc3Qoe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keToge1xuICAgICAgICAgIGl0ZW1faWQ6IG1lYWwsXG4gICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgY29tbWVudCxcbiAgICAgICAgfSxcbiAgICAgICAgdXJsOiBgJHt1cmxNQVAubWFpbn0ke3VybE1BUC5jb21tZW50c31gLFxuICAgICAgfSk7XG4gICAgICBhd2FpdCBmZXRjaFJlcXVlc3QuY2FsbCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRDb21tZW50cyhtZWFsKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZldGNoUmVxdWVzdCA9IG5ldyBGZXRjaFJlcXVlc3Qoe1xuICAgICAgICB1cmw6IGAke3VybE1BUC5tYWlufSR7dXJsTUFQLmJ5Q29tbWVudH0ke21lYWx9YCxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBmZXRjaFJlcXVlc3QuY2FsbCgpO1xuICAgICAgcmV0dXJuIGNvbW1lbnRzO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IEZldGNoUmVxdWVzdCBmcm9tICcuL2ZldGNoUmVxdWVzdC5qcyc7XG5cbmNvbnN0IHVybE1hcCA9IHtcbiAgcmFuZG9tOiAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL3JhbmRvbS5waHAnLFxuICBjYXRlZ29yaWVzOlxuICAgICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvY2F0ZWdvcmllcy5waHAnLFxuICBieUNhdGVnb3J5OiAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2ZpbHRlci5waHA/Yz0nLFxuICBieU1lYWxJZDogJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9sb29rdXAucGhwP2k9Jyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lYWxBUEkge1xuICBzdGF0aWMgYXN5bmMgZ2V0UmVjaXBlKGlkKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZldGNoUmVxdWVzdCA9IG5ldyBGZXRjaFJlcXVlc3Qoe1xuICAgICAgICB1cmw6IGAke3VybE1hcC5ieU1lYWxJZH0ke2lkfWAsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaFJlcXVlc3QuY2FsbCgpO1xuICAgICAgcmV0dXJuIGRhdGEubWVhbHNbMF07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldENhdGVnb3JpZXMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZldGNoUmVxdWVzdCA9IG5ldyBGZXRjaFJlcXVlc3Qoe1xuICAgICAgICB1cmw6IHVybE1hcC5jYXRlZ29yaWVzLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgZmV0Y2hSZXF1ZXN0LmNhbGwoKTtcbiAgICAgIHJldHVybiBjYXRlZ29yaWVzLmNhdGVnb3JpZXM7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEJ5Q2F0ZWdvcnkoY2F0ZWdvcnkpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmV0Y2hSZXF1ZXN0ID0gbmV3IEZldGNoUmVxdWVzdCh7XG4gICAgICAgIHVybDogYCR7dXJsTWFwLmJ5Q2F0ZWdvcnl9JHtjYXRlZ29yeX1gLFxuICAgICAgfSk7XG4gICAgICBjb25zdCByZWNpcGVzID0gYXdhaXQgZmV0Y2hSZXF1ZXN0LmNhbGwoKTtcbiAgICAgIHJldHVybiByZWNpcGVzLm1lYWxzO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxufVxuIiwiY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fbGlzdCcpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IHtcbiAgc3RhdGljIGRpc3BsYXlDYXRlZ29yaWVzKGNhdGVnb3JpZXNBcnIpIHtcbiAgICBjYXRlZ29yaWVzQXJyLmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZURvbU1lbnVJdGVtKGNhdGVnb3J5KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVEb21NZW51SXRlbSh7XG4gICAgaWRDYXRlZ29yeSxcbiAgICBzdHJDYXRlZ29yeSxcbiAgICBzdHJDYXRlZ29yeVRodW1iLFxuICB9KSB7XG4gICAgY29uc3QgTEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIExJLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2l0ZW0nKTtcbiAgICBMSS5zZXRBdHRyaWJ1dGUoJ2lkJywgaWRDYXRlZ29yeSk7XG4gICAgTEkuaW5uZXJIVE1MID0gYFxuICAgICAgPGltZyBjbGFzcz1cIm1lbnVfX2l0ZW1fX2ltZ1wiIHNyYz1cIiR7c3RyQ2F0ZWdvcnlUaHVtYn1cIiBhbHQ9XCJDYXRlZ29yeSAke3N0ckNhdGVnb3J5fVwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJtZW51X19pdGVtX19jYXRlZ29yeVwiPiR7c3RyQ2F0ZWdvcnl9PC9zcGFuPmA7XG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQoTEkpO1xuICB9XG59XG4iLCJpbXBvcnQgSW52b2x2ZW1lbnRBUEkgZnJvbSAnLi9pbnZvbHZlbWVudEFQSS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcFVwIHtcbiAgc3RhdGljIHBvcChkYXRhKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLmNvbW1lbnRDb3VudCA9IDA7XG4gICAgdGhpcy50ZW1wbGF0ZSh0aGlzLmRhdGEudHlwZSk7XG4gIH1cblxuICBzdGF0aWMgdGVtcGxhdGUoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCB0aGlzLmRhdGEuaWRNZWFsKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyZWNpcGVzX19wb3B1cCcpO1xuXG4gICAgY29uc3QgdGFncyA9IFBvcFVwLnRhZ3NUZW1wbGF0ZSh0aGlzLmRhdGEuc3RyVGFncyk7XG4gICAgY29uc3QgY29tbWVudFNlY3Rpb24gPSBQb3BVcC5jb21tZW50c1RlbXBsYXRlKCk7XG4gICAgY29uc3QgaW5zdHJ1Y3RzID0gUG9wVXAuaW5zdHJ1Y3Rpb25zVGVtcGxhdGUoXG4gICAgICB0aGlzLmRhdGEuc3RySW5zdHJ1Y3Rpb25zLFxuICAgICk7XG5cbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgICAgPGltZyBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2ltYWdlXCIgc3JjPVwiJHt0aGlzLmRhdGEuc3RyTWVhbFRodW1ifVwiIGFsdD1cIkRlbGljaW91cyAke3RoaXMuZGF0YS5zdHJNZWFsfVwiPlxuICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS14bWFya1wiPjwvaT5cbiAgICAgIDxoMiBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX3RpdGxlXCI+JHt0aGlzLmRhdGEuc3RyTWVhbH08L2gyPlxuICAgICAgPHVsIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfdGFnc1wiPiR7dGFnc308L3VsPlxuICAgICAgPHVsIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfaW5zdHJ1Y3RzXCI+JHtpbnN0cnVjdHN9PC91bD5cbiAgICAgIDxzcGFuIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfdmlkZW9cIj5XYXRjaCBhIDxhIGhyZWY9XCIke3RoaXMuZGF0YS5zdHJZb3V0dWJlfVwiPlZpZGVvPC9hPiBoZXJlPC9zcGFuPlxuICAgICAgJHtjb21tZW50U2VjdGlvbn1cbiAgICBgO1xuXG4gICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2knKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm9TY3JvbGwnKTtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmRhdGEudHlwZSA9PT0gJ1JlY2lwZScpIHtcbiAgICAgIGNvbnN0IHVzZXIgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICAgIGNvbnN0IGNvbW1lbnQgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKTtcbiAgICAgIGNvbnN0IHN1Ym1pdCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbiAgICAgIGNvbnN0IHVsQ29udGFpbmVyID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICcucmVjaXBlc19fcG9wdXBfY29tbWVudHMgdWwnLFxuICAgICAgKTtcblxuICAgICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAodXNlci52YWx1ZSA9PT0gJycgfHwgY29tbWVudC52YWx1ZSA9PT0gJycpIHJldHVybjtcbiAgICAgICAgY29uc3QgaW5wdXRDb21tZW50ID0ge1xuICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLnZhbHVlLFxuICAgICAgICAgIGNvbW1lbnQ6IGNvbW1lbnQudmFsdWUsXG4gICAgICAgIH07XG4gICAgICAgIFBvcFVwLmNyZWF0ZUNvbW1lbnRPbkRPTShcbiAgICAgICAgICB1c2VyLFxuICAgICAgICAgIGNvbW1lbnQsXG4gICAgICAgICAgdWxDb250YWluZXIsXG4gICAgICAgICAgaW5wdXRDb21tZW50LFxuICAgICAgICApO1xuICAgICAgICBhd2FpdCBJbnZvbHZlbWVudEFQSS5hZGRDb21tZW50KFxuICAgICAgICAgIGlucHV0Q29tbWVudCxcbiAgICAgICAgICB0aGlzLmRhdGEuaWRNZWFsLFxuICAgICAgICApO1xuICAgICAgICBQb3BVcC5jb21tZW50Q291bnRBZGQoY29udGFpbmVyKTtcbiAgICAgICAgW3VzZXIudmFsdWUsIGNvbW1lbnQudmFsdWVdID0gWycnLCAnJ107XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIH1cblxuICBzdGF0aWMgZGlzcGxheUNvbW1lbnQoZGF0YSkge1xuICAgIGNvbnN0IFt5ZWFyLCBtb250aCwgZGF5XSA9IGRhdGEuY3JlYXRpb25fZGF0ZS5zcGxpdCgnLScpO1xuICAgIHJldHVybiBgXG4gICAgICAgIDxsaSBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2NvbW1lbnRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2NvbW1lbnQtdXNlclwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLXVzZXJcIj48L2k+XG4gICAgICAgICAgICAke2RhdGEudXNlcm5hbWV9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfY29tbWVudC1kYXRlXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLWNhbGVuZGFyXCI+PC9pPlxuICAgICAgICAgICAgJHtkYXl9LSR7bW9udGh9LSR7eWVhcn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZWNpcGVzX19wb3B1cF9jb21tZW50LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICR7ZGF0YS5jb21tZW50fVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgIGA7XG4gIH1cblxuICBzdGF0aWMgY29tbWVudHNUZW1wbGF0ZSgpIHtcbiAgICBsZXQgY29tbWVudHMgPSAnJztcbiAgICB0aGlzLmRhdGEuY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgICAgY29tbWVudHMgKz0gUG9wVXAuZGlzcGxheUNvbW1lbnQoY29tbWVudCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJyZWNpcGVzX19wb3B1cF9jb21tZW50c1wiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2NvbW1lbnQtY291bnRcIj5Db21tZW50cyAoJHt0aGlzLmRhdGEuY29tbWVudHMubGVuZ3RofSk8L3NwYW4+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfaW5wdXQtdXNlclwiIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiB0YWJpbmRleD0wPjwvaW5wdXQ+XG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2lucHV0LWNvbW1lbnRcIiBwbGFjZWhvbGRlcj1cIldyaXRlIHlvdXIgY29tbWVudFwiIHRhYmluZGV4PTA+PC90ZXh0YXJlYT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2lucHV0LXN1Ym1pdFwiIHR5cGU9XCJidXR0b25cIiB0YWJpbmRleD0wPkFkZCBDb21tZW50PC9idXR0b24+XG4gICAgICAgIDx1bCBjbGFzcz1cInJlY2lwZXNfX3BvcHVwX2NvbW1lbnRzXCI+JHtjb21tZW50c308L3VsPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVDb21tZW50T25ET00odXNlciwgY29tbWVudCwgY29udGFpbmVyLCBpbnB1dENvbW1lbnQpIHtcbiAgICBjb25zdCBbZGF5LCBtb250aCwgeWVhcl0gPSBuZXcgRGF0ZSgpXG4gICAgICAudG9Mb2NhbGVEYXRlU3RyaW5nKClcbiAgICAgIC5zcGxpdCgnLycpO1xuICAgIGNvbnN0IGxpID0gUG9wVXAuZGlzcGxheUNvbW1lbnQoe1xuICAgICAgLi4uaW5wdXRDb21tZW50LFxuICAgICAgY3JlYXRpb25fZGF0ZTogYCR7eWVhcn0tJHttb250aCA8IDEwID8gJzAnIDogJyd9JHttb250aH0tJHtcbiAgICAgICAgZGF5IDwgMTAgPyAnMCcgOiAnJ1xuICAgICAgfSR7ZGF5fWAsXG4gICAgfSk7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCArPSBsaTtcbiAgfVxuXG4gIHN0YXRpYyBjb21tZW50Q291bnRBZGQoY29udGFpbmVyKSB7XG4gICAgdGhpcy5jb21tZW50Q291bnQgKz0gMTtcbiAgICBjb25zdCBjb21tZW50c051bSA9IHRoaXMuZGF0YS5jb21tZW50cy5sZW5ndGggKyB0aGlzLmNvbW1lbnRDb3VudDtcbiAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICcucmVjaXBlc19fcG9wdXBfY29tbWVudC1jb3VudCcsXG4gICAgKS5pbm5lckhUTUwgPSBgQ29tbWVudHMgKCR7Y29tbWVudHNOdW19KWA7XG4gICAgcmV0dXJuIGNvbW1lbnRzTnVtO1xuICB9XG5cbiAgc3RhdGljIGluc3RydWN0aW9uc1RlbXBsYXRlKGluc3RydWN0cykge1xuICAgIGxldCBuZXdJbnN0cnVjdHMgPSAnJztcbiAgICBpbnN0cnVjdHMuc3BsaXQoL1xccj9cXG4vKS5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgICBpZiAobGluZSA9PT0gJycpIHJldHVybjtcbiAgICAgIG5ld0luc3RydWN0cyArPSBgPGxpIGNsYXNzPVwicG9wdXBfX2luc3RydWN0c19saW5lXCI+JHtsaW5lfTwvbGk+YDtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3SW5zdHJ1Y3RzO1xuICB9XG5cbiAgc3RhdGljIHRhZ3NUZW1wbGF0ZSh0YWdzKSB7XG4gICAgaWYgKCF0YWdzKSByZXR1cm4gJyc7XG4gICAgbGV0IHRhZ3NVbCA9ICcnO1xuICAgIHRhZ3Muc3BsaXQoJywnKS5mb3JFYWNoKCh0YWcpID0+IHtcbiAgICAgIHRhZ3NVbCArPSBgPGxpIGNsYXNzPVwicmVjaXBlc19fcG9wdXBfdGFnTGlcIj4ke3RhZ308L2xpPmA7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRhZ3NVbDtcbiAgfVxufVxuIiwiaW1wb3J0IEludm9sdmVtZW50QVBJIGZyb20gJy4vaW52b2x2ZW1lbnRBUEkuanMnO1xuXG5jb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckludGVyZmFjZSB7XG4gIHN0YXRpYyBkaXNwbGF5UmVjaXBlcyhtZWFsc0FyciwgbGlrZXMgPSBbXSkge1xuICAgIG1lYWxzQXJyLmZvckVhY2goKHJlY2lwZSkgPT4ge1xuICAgICAgY29uc3QgbWVhbExpa2VzID0gSW52b2x2ZW1lbnRBUEkuZ2V0TWVhbExpa2VzKFxuICAgICAgICBsaWtlcyxcbiAgICAgICAgcmVjaXBlLmlkTWVhbCxcbiAgICAgICk7XG4gICAgICB0aGlzLmNyZWF0ZUNhcmQocmVjaXBlLCBtZWFsTGlrZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRpc3BsYXlDYXRlZ29yaWVzKGNhdGVnb3JpZXNBcnIpIHtcbiAgICBjYXRlZ29yaWVzQXJyLmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZUNhdGVnb3J5Q2FyZChjYXRlZ29yeSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlQ2F0ZWdvcnlDYXJkKHtcbiAgICBpZENhdGVnb3J5LFxuICAgIHN0ckNhdGVnb3J5LFxuICAgIHN0ckNhdGVnb3J5VGh1bWIsXG4gIH0pIHtcbiAgICBjb25zdCBMSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgTEkuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnlfX2NhcmQnKTtcbiAgICBMSS5zZXRBdHRyaWJ1dGUoJ2lkJywgaWRDYXRlZ29yeSk7XG4gICAgTEkuaW5uZXJIVE1MID0gYFxuICAgICAgPGltZyBjbGFzcz1cImNhdGVnb3J5X19pbWFnZVwiIHNyYz1cIiR7c3RyQ2F0ZWdvcnlUaHVtYn1cIiBhbHQ9XCJEZWxpY2lvdXMgJHtzdHJDYXRlZ29yeX1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeV9fY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeV9faGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzcz1cImNhdGVnb3J5X190aXRsZVwiPiR7c3RyQ2F0ZWdvcnl9PC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChMSSk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlQ2FyZChcbiAgICB7IHN0ck1lYWwgPSAnJywgc3RyTWVhbFRodW1iID0gJycsIGlkTWVhbCB9LFxuICAgIGxpa2VzID0gMCxcbiAgKSB7XG4gICAgY29uc3QgTEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIExJLmNsYXNzTGlzdC5hZGQoJ3JlY2lwZXNfX2NhcmQnKTtcbiAgICBMSS5zZXRBdHRyaWJ1dGUoJ2lkJywgaWRNZWFsKTtcbiAgICBMSS5pbm5lckhUTUwgPSBgXG4gICAgICA8aW1nIGNsYXNzPVwicmVjaXBlc19faW1hZ2VcIiBzcmM9XCIke3N0ck1lYWxUaHVtYn1cIiBhbHQ9XCJEZWxpY2lvdXMgJHtzdHJNZWFsfVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJlY2lwZXNfX2NvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVjaXBlc19faGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzcz1cInJlY2lwZXNfX3RpdGxlXCI+JHtzdHJNZWFsfTwvaDI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1oZWFydFwiPjwvaT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlY2lwZXNfX2xpa2VzXCI+PHNwYW4+JHtsaWtlc308L3NwYW4+IGxpa2Uke1xuICBsaWtlcyA9PT0gMSA/ICcnIDogJ3MnXG59PC9zcGFuPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJyZWNpcGVzX19jb21tZW50c1wiPkNvbW1lbnRzPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQoTEkpO1xuICB9XG5cbiAgc3RhdGljIGFkZFRvTGlrZXNDb3VudGVyRE9NKGVsZW1lbnQpIHtcbiAgICBjb25zdCBuTGlrZXMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNpcGVzX19saWtlcycpO1xuICAgIGNvbnN0IG9sZExpa2VzID0gK25MaWtlcy5jaGlsZHJlblswXS5pbm5lclRleHQ7XG4gICAgY29uc3QgbmV3TGlrZXMgPSBvbGRMaWtlcyArIDE7XG5cbiAgICBuTGlrZXMuaW5uZXJIVE1MID0gYDxzcGFuPiR7bmV3TGlrZXN9PC9zcGFuPiBsaWtlJHtcbiAgICAgIG5ld0xpa2VzID09PSAxID8gJycgOiAncydcbiAgICB9YDtcbiAgfVxuXG4gIHN0YXRpYyBjb3VudGVyVGV4dCh0eXBlKSB7XG4gICAgY29uc3QgY291bnRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY291bnRlcicpO1xuICAgIGxldCBpID0gMDtcbiAgICBjb3VudGVycy5mb3JFYWNoKChjb3VudGVyKSA9PiB7XG4gICAgICBjb3VudGVyLmlubmVySFRNTCA9IGAke2kgPCAxID8gJ0NhdGVnb3JpZXMnIDogdHlwZX0gKCR7dGhpcy5pdGVtQ291bnQoXG4gICAgICAgIGNvdW50ZXIubmV4dEVsZW1lbnRTaWJsaW5nLFxuICAgICAgKX0pYDtcbiAgICAgIGkgKz0gMTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBpdGVtQ291bnQoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmNoaWxkcmVuLmxlbmd0aDtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBhcHAgZnJvbSAnLi9tb2R1bGVzL2FwcC5qcyc7XG5cbmFwcC5zdGFydCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9