/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\n.header {\n    display: flex;\n    align-items: center;\n    padding: 0 16px;\n    font-size: 32px;\n    font-weight: 900;\n    height: 72px;\n    background: darkmagenta;\n    color: white;\n    justify-content: center;\n  }\n.content{\n  display: flex;\n  flex:1;\n}\n\n.add-task-button{\n  align-self: center;\n  padding: 15px 30px;\n  background-color: #555;\n  color: white;\n  border: none;\n  cursor: pointer;\n  opacity: 0.8;\n  max-width: 200px;\n}\n\n.new-task-form-popup{\n  position: fixed; \n  display: none;\n  z-index: 1; \n  left: 0;\n  top: 0;\n  width: 100%; \n  height: 100%; \n  overflow: auto; \n  background-color: rgb(0,0,0); \n  background-color: rgba(0,0,0,0.4); \n}\n\n  #new-task-form-container{\n      max-width: 600px;\n      background-color: white;\n      background-color: #fefefe;\n      margin: auto;\n      padding: 20px;\n      border: 1px solid #888;\n      width: 80%;\n      margin-top: 50px;\n      font-size: 25px;\n  }\n  \n      #new-task-form-container input[type=text],\n      #new-task-form-container input[type=number]\n      {\n          width: 80%;\n          padding: 15px;\n          margin: 5px 0 15px 0;\n          border: none;\n          background: #f1f1f1;\n      }\n      #new-task-form-container input[type=checkbox]{ margin: 5px 0 22px 0;}\n      \n      /* When the inputs get focus, do something */\n      #new-task-form-container input[type=text]:focus,  #form-container input[type=number]:focus {\n          background-color: #ddd;\n          outline: none;\n      }\n\n      #new-task-form-container .submit-cancel {\n      background-color: #04AA6D;\n      color: white;\n      padding: 16px 20px;\n      border: none;\n      cursor: pointer;\n      width: 100%;\n      margin: 0 5px 10px 5px;\n      opacity: 0.8;\n      text-align: center;\n      }\n      #new-task-form-container #cancel { background-color: red; }\n      #new-task-form-container .submit-cancel:hover, #new-book-button:hover { opacity: 1;}\n\n\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n  .modal-content {\n    background-color: #fefefe;\n    margin: 15% auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    width: 80%; /* Could be more or less, depending on screen size */\n  }\n  .close {\n    color: #aaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n  .close:hover,\n  .close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n  }\n\n\n\n\n\n.task-area{\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  flex-basis: 100%;\n}\n\n.sidebar {\n  width: 300px;\n  background: royalblue;\n  flex-shrink: 0;\n  padding: 16px;\n}\n\n\nul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n  }\n  li {\n    margin-bottom: 16px;\n  }\n\n  a {\n    color: white;\n    text-decoration: none;\n    font-size: 24px;\n  }\n\n.footer {\n  height: 72px;\n  background: #eee;\n  color: darkmagenta;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  \n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,wIAAwI;IACxI,SAAS;IACT,iBAAiB;IACjB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,uBAAuB;IACvB,YAAY;IACZ,uBAAuB;EACzB;AACF;EACE,aAAa;EACb,MAAM;AACR;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,UAAU;EACV,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,cAAc;EACd,4BAA4B;EAC5B,iCAAiC;AACnC;;EAEE;MACI,gBAAgB;MAChB,uBAAuB;MACvB,yBAAyB;MACzB,YAAY;MACZ,aAAa;MACb,sBAAsB;MACtB,UAAU;MACV,gBAAgB;MAChB,eAAe;EACnB;;MAEI;;;UAGI,UAAU;UACV,aAAa;UACb,oBAAoB;UACpB,YAAY;UACZ,mBAAmB;MACvB;MACA,+CAA+C,oBAAoB,CAAC;;MAEpE,4CAA4C;MAC5C;UACI,sBAAsB;UACtB,aAAa;MACjB;;MAEA;MACA,yBAAyB;MACzB,YAAY;MACZ,kBAAkB;MAClB,YAAY;MACZ,eAAe;MACf,WAAW;MACX,sBAAsB;MACtB,YAAY;MACZ,kBAAkB;MAClB;MACA,mCAAmC,qBAAqB,EAAE;MAC1D,wEAAwE,UAAU,CAAC;;;AAGzF;EACE,aAAa,EAAE,sBAAsB;EACrC,eAAe,EAAE,kBAAkB;EACnC,UAAU,EAAE,eAAe;EAC3B,OAAO;EACP,MAAM;EACN,WAAW,EAAE,eAAe;EAC5B,YAAY,EAAE,gBAAgB;EAC9B,cAAc,EAAE,4BAA4B;EAC5C,4BAA4B,EAAE,mBAAmB;EACjD,iCAAiC,EAAE,qBAAqB;AAC1D;;EAEE;IACE,yBAAyB;IACzB,gBAAgB,EAAE,kCAAkC;IACpD,aAAa;IACb,sBAAsB;IACtB,UAAU,EAAE,oDAAoD;EAClE;EACA;IACE,WAAW;IACX,YAAY;IACZ,eAAe;IACf,iBAAiB;EACnB;EACA;;EAEA,YAAY;EACZ,qBAAqB;EACrB,eAAe;EACf;;;;;;AAMF;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,qBAAqB;EACrB,cAAc;EACd,aAAa;AACf;;;AAGA;IACI,qBAAqB;IACrB,SAAS;IACT,UAAU;EACZ;EACA;IACE,mBAAmB;EACrB;;EAEA;IACE,YAAY;IACZ,qBAAqB;IACrB,eAAe;EACjB;;AAEF;EACE,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;;AAEzB","sourcesContent":["body {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\n.header {\n    display: flex;\n    align-items: center;\n    padding: 0 16px;\n    font-size: 32px;\n    font-weight: 900;\n    height: 72px;\n    background: darkmagenta;\n    color: white;\n    justify-content: center;\n  }\n.content{\n  display: flex;\n  flex:1;\n}\n\n.add-task-button{\n  align-self: center;\n  padding: 15px 30px;\n  background-color: #555;\n  color: white;\n  border: none;\n  cursor: pointer;\n  opacity: 0.8;\n  max-width: 200px;\n}\n\n.new-task-form-popup{\n  position: fixed; \n  display: none;\n  z-index: 1; \n  left: 0;\n  top: 0;\n  width: 100%; \n  height: 100%; \n  overflow: auto; \n  background-color: rgb(0,0,0); \n  background-color: rgba(0,0,0,0.4); \n}\n\n  #new-task-form-container{\n      max-width: 600px;\n      background-color: white;\n      background-color: #fefefe;\n      margin: auto;\n      padding: 20px;\n      border: 1px solid #888;\n      width: 80%;\n      margin-top: 50px;\n      font-size: 25px;\n  }\n  \n      #new-task-form-container input[type=text],\n      #new-task-form-container input[type=number]\n      {\n          width: 80%;\n          padding: 15px;\n          margin: 5px 0 15px 0;\n          border: none;\n          background: #f1f1f1;\n      }\n      #new-task-form-container input[type=checkbox]{ margin: 5px 0 22px 0;}\n      \n      /* When the inputs get focus, do something */\n      #new-task-form-container input[type=text]:focus,  #form-container input[type=number]:focus {\n          background-color: #ddd;\n          outline: none;\n      }\n\n      #new-task-form-container .submit-cancel {\n      background-color: #04AA6D;\n      color: white;\n      padding: 16px 20px;\n      border: none;\n      cursor: pointer;\n      width: 100%;\n      margin: 0 5px 10px 5px;\n      opacity: 0.8;\n      text-align: center;\n      }\n      #new-task-form-container #cancel { background-color: red; }\n      #new-task-form-container .submit-cancel:hover, #new-book-button:hover { opacity: 1;}\n\n\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n  .modal-content {\n    background-color: #fefefe;\n    margin: 15% auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    width: 80%; /* Could be more or less, depending on screen size */\n  }\n  .close {\n    color: #aaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n  .close:hover,\n  .close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n  }\n\n\n\n\n\n.task-area{\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  flex-basis: 100%;\n}\n\n.sidebar {\n  width: 300px;\n  background: royalblue;\n  flex-shrink: 0;\n  padding: 16px;\n}\n\n\nul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n  }\n  li {\n    margin-bottom: 16px;\n  }\n\n  a {\n    color: white;\n    text-decoration: none;\n    font-size: 24px;\n  }\n\n.footer {\n  height: 72px;\n  background: #eee;\n  color: darkmagenta;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  \n}"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/createToDoDomElement.js":
/*!*************************************!*\
  !*** ./src/createToDoDomElement.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDoDomElementFactory": () => (/* binding */ toDoDomElementFactory)
/* harmony export */ });
/* harmony import */ var _toDoObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoObject.js */ "./src/toDoObject.js");
/* harmony import */ var _projectController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectController.js */ "./src/projectController.js");
/* harmony import */ var _toDoNewTaskForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDoNewTaskForm.js */ "./src/toDoNewTaskForm.js");
/* harmony import */ var _projectObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectObject.js */ "./src/projectObject.js");
/* harmony import */ var _toDoObjectDetailsModalBox_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toDoObjectDetailsModalBox.js */ "./src/toDoObjectDetailsModalBox.js");






const toDoDomElementFactory = (toDoObject) => {
    
       function createDomElements(toDoObject) {
        const domElementList = document.createElement("li");
        let currentProject= _projectController_js__WEBPACK_IMPORTED_MODULE_1__.projectController.getCurrentProject();
        domElementList.setAttribute("data-index",
                                   currentProject.findIndexOfToDoObject(toDoObject));

        const checkBox = document.createElement('input');
        const label = document.createElement('label');
        const titleSpan = document.createElement("span");
        const detailsButton = document.createElement("button");
        const dateSpan = document.createElement("span");
        const editButton = document.createElement("button");
        const removeButton = document.createElement("button");
        
            function populateDomElements() {
                checkBox.type = "checkbox";
                checkBox.name = "check-box";
                checkBox.id = "check-box";
                label.htmlFor = 'id';
                detailsButton.textContent = "Details";
                detailsButton.onclick = () => {
                    _toDoObjectDetailsModalBox_js__WEBPACK_IMPORTED_MODULE_4__.toDoObjectDetailsModalBox.createToDoObjectDetailsModalBox();
                    _toDoObjectDetailsModalBox_js__WEBPACK_IMPORTED_MODULE_4__.toDoObjectDetailsModalBox.setToDoObjectDetailsModalBox(toDoObject);
                    _toDoObjectDetailsModalBox_js__WEBPACK_IMPORTED_MODULE_4__.toDoObjectDetailsModalBox.showModalBox();
                }
                editButton.textContent = "Edit"; //simge eklenecek.
                removeButton.textContent = "Remove"; //simge eklenecek.
                titleSpan.textContent = toDoObject.getValueFromToDoObject('title');
                dateSpan.textContent = toDoObject.getValueFromToDoObject('dueDate');
            }
            populateDomElements();

            function appendDomElementsToListElement() {
                domElementList.appendChild(label);
                domElementList.appendChild(checkBox);
                domElementList.appendChild(titleSpan);
                domElementList.appendChild(dateSpan);
                domElementList.appendChild(detailsButton);
                domElementList.appendChild(removeButton);
                domElementList.appendChild(editButton);
            }
            appendDomElementsToListElement();

            return domElementList;
    }
  let element = createDomElements(toDoObject);
  return element;
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAndPushNewToDoTask": () => (/* binding */ createAndPushNewToDoTask)
/* harmony export */ });
/* harmony import */ var _toDoObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoObject.js */ "./src/toDoObject.js");
/* harmony import */ var _projectObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectObject.js */ "./src/projectObject.js");
/* harmony import */ var _toDoNewTaskForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDoNewTaskForm.js */ "./src/toDoNewTaskForm.js");
/* harmony import */ var _projectController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectController.js */ "./src/projectController.js");
/* harmony import */ var _createToDoDomElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createToDoDomElement.js */ "./src/createToDoDomElement.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");








const exampleProject = (0,_projectObject_js__WEBPACK_IMPORTED_MODULE_1__.ProjectObject)("Example Project");


const todoobject = (0,_toDoObject_js__WEBPACK_IMPORTED_MODULE_0__.toDoObjectFactory)("Clean room","29/05/2021", "medium", "Your room is really dirty");
exampleProject.addToDoObjectToArray(todoobject);

exampleProject.showArrayContent();

_projectController_js__WEBPACK_IMPORTED_MODULE_3__.projectController.addProjectToArray(exampleProject);
_projectController_js__WEBPACK_IMPORTED_MODULE_3__.projectController.setCurrentProject(exampleProject);
console.log(_projectController_js__WEBPACK_IMPORTED_MODULE_3__.projectController.getCurrentProject().getTitle());



function createAndPushNewToDoTask(formdata) {
    //Bunun form-data eventini ateşlemesi gerekiyor ama kontrol edilmesi lazım.
   //Data-key ekle?
  
  const newToDoObject = (0,_toDoObject_js__WEBPACK_IMPORTED_MODULE_0__.toDoObjectFactory)(formdata.get('title'),
       formdata.get('due-date'),
       formdata.get('priority'),
       formdata.get('details'));

   let currentProject = _projectController_js__WEBPACK_IMPORTED_MODULE_3__.projectController.getCurrentProject();
       
   currentProject.addToDoObjectToArray(newToDoObject);
   
   let newToDoDomElement = (0,_createToDoDomElement_js__WEBPACK_IMPORTED_MODULE_4__.toDoDomElementFactory)(newToDoObject);

   document.querySelector(".task-area").firstElementChild.appendChild(newToDoDomElement);

   
}


/***/ }),

/***/ "./src/projectController.js":
/*!**********************************!*\
  !*** ./src/projectController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectController": () => (/* binding */ projectController)
/* harmony export */ });
/* harmony import */ var _projectObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectObject.js */ "./src/projectObject.js");


const projectController = (() => {

    let allProjects = [];

    let currentProject = null;

    const getCurrentProject = () => currentProject;

    const setCurrentProject = project => currentProject = project;

    const addProjectToProjectsArray = project => allProjects.push(project);

    const removeProjectFromProjectsArray = projectToRemove => {
        let index = allProjects.findIndex(element => {element.getTitle() == projectToRemove.getTitle()});
        allProjects.splice(index,1);}

    return {getCurrentProject, setCurrentProject, addProjectToArray: addProjectToProjectsArray, removeProjectFromArray: removeProjectFromProjectsArray}
})();



/***/ }),

/***/ "./src/projectObject.js":
/*!******************************!*\
  !*** ./src/projectObject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectObject": () => (/* binding */ ProjectObject)
/* harmony export */ });
/* harmony import */ var _toDoObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoObject.js */ "./src/toDoObject.js");
/* harmony import */ var _toDoNewTaskForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoNewTaskForm.js */ "./src/toDoNewTaskForm.js");



const ProjectObject = (title) => {
    
    let toDoObjects = [];

    const getTitle = () => title;

    const addToDoObjectToArray = objectToAdd => toDoObjects.push(objectToAdd);
    

    const removeToDoObjectFromArray = objectToRemove => {
        let index = findIndexOfToDoObject(objectToRemove);
        toDoObjects.splice(index,1);
      
    }
    const findIndexOfToDoObject = (object) => {
       
        return toDoObjects.findIndex(element => element.getValueFromToDoObject('title') === object.getValueFromToDoObject('title'));
        
    }
  
    const showArrayContent = () => toDoObjects.forEach(element => console.log(element.getValueFromToDoObject("title")));

    return {getTitle, addToDoObjectToArray, removeToDoObjectFromArray, showArrayContent, findIndexOfToDoObject};

}



/***/ }),

/***/ "./src/toDoNewTaskForm.js":
/*!********************************!*\
  !*** ./src/toDoNewTaskForm.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskForm": () => (/* binding */ taskForm)
/* harmony export */ });
/* harmony import */ var _toDoObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoObject.js */ "./src/toDoObject.js");
/* harmony import */ var _projectObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectObject.js */ "./src/projectObject.js");
/* harmony import */ var _projectController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectController.js */ "./src/projectController.js");
/* harmony import */ var _createToDoDomElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createToDoDomElement.js */ "./src/createToDoDomElement.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.js */ "./src/index.js");






const taskForm = (() => {

    const formContainer = document.querySelector(".new-task-form-popup");
    const form = document.querySelector("#new-task-form-container");
    const addTaskButton = document.querySelector(".add-task-button");
    const cancelButton = document.querySelector("#cancel");

    addEventListenersToElements();


    function addEventListenersToElements() {

        form.addEventListener("submit", createFormData);
        form.addEventListener("formdata", () => {
            console.log('formdata fired');
            formContainer.style.display = "none";
            form.reset();
        })

        addTaskButton.onclick = () => formContainer.style.display = "block";
        cancelButton.onclick = () => formContainer.style.display = "none";
    }


function createFormData(e){
    if (e.submitter.id === "cancel") return;
    e.preventDefault();
    const formdata = new FormData(e.target);
    (0,_index_js__WEBPACK_IMPORTED_MODULE_4__.createAndPushNewToDoTask)(formdata);
}



})();



/***/ }),

/***/ "./src/toDoObject.js":
/*!***************************!*\
  !*** ./src/toDoObject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDoObjectFactory": () => (/* binding */ toDoObjectFactory)
/* harmony export */ });
/* harmony import */ var _projectObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectObject.js */ "./src/projectObject.js");
/* harmony import */ var _toDoNewTaskForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoNewTaskForm.js */ "./src/toDoNewTaskForm.js");



const toDoObjectFactory = (title, dueDate, priority, details="" ) => {
 
    const getValueFromToDoObject = privatePropertyName => {
        switch(privatePropertyName){
            case ("title"):
              return title;
            case ("dueDate"):
                return dueDate;
            case ("priority"):
                return priority;
            case ("details"):
                return details;
            default:
                return null;
        }
    }
        
    // const showDetailsOfToDoObject = () => {
    //     for (const [key, value] of Object.entries(privatePropertiesObject)) {
    //         console.log(`${key}: ${value}`);
    // }}

    const setPropertyValueOfToDoObject = (privatePropertyName, newValue) => {
        let oldValue = getValueFromToDoObject(privatePropertyName);
        oldValue = newValue;
    }


    return {getValueFromToDoObject, setPropertyValueOfToDoObject,
        };
    
}



/***/ }),

/***/ "./src/toDoObjectDetailsModalBox.js":
/*!******************************************!*\
  !*** ./src/toDoObjectDetailsModalBox.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDoObjectDetailsModalBox": () => (/* binding */ toDoObjectDetailsModalBox)
/* harmony export */ });
/* harmony import */ var _projectController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectController.js */ "./src/projectController.js");
/* harmony import */ var _toDoObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoObject.js */ "./src/toDoObject.js");
/* harmony import */ var _projectObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectObject.js */ "./src/projectObject.js");




const toDoObjectDetailsModalBox = (() => {
    let modalCreated = false;

    const createToDoObjectDetailsModalBox = () => {
    
        if(modalCreated) clearDetailsModalBox();

        const detailsModalContainerDiv = document.createElement("div");
        detailsModalContainerDiv.classList.add('modal');
        detailsModalContainerDiv.id = 'myModal';

        const detailsModalContentDiv = document.createElement('div');
        detailsModalContentDiv.classList.add('modal-content');

        const detailsModalContetCloseSpan = document.createElement('span');
        detailsModalContetCloseSpan.textContent = "X";
        detailsModalContetCloseSpan.classList.add('close');
        detailsModalContetCloseSpan.addEventListener('click', hideModalBox);

        const detailsModalHeader = document.createElement('h2');
        detailsModalHeader.id = "details-modal-title-header";

        const detailsModalProjectDiv = document.createElement('div');
        detailsModalProjectDiv.classList.add('modal-project-div');
        const detailsModalProjectSpan = document.createElement('span');
        detailsModalProjectSpan.textContent = "Project: ";
        const detailsModalProjectSpanText = document.createElement('span');
        detailsModalProjectSpanText.id = 'project-span-text';
        detailsModalProjectDiv.appendChild(detailsModalProjectSpan);
        detailsModalProjectDiv.appendChild(detailsModalProjectSpanText);

        
        const detailsModalPriorityDiv = document.createElement('div');
        detailsModalPriorityDiv.classList.add('modal-priority-div');
        const detailsModalPrioritySpan = document.createElement('span');
        detailsModalPrioritySpan.textContent = 'Priority: ';
        const detailsModalPrioritySpanText = document.createElement('span');
        detailsModalPrioritySpanText.id = 'priority-span-text';
        detailsModalPriorityDiv.appendChild(detailsModalPrioritySpan);
        detailsModalPriorityDiv.appendChild(detailsModalPrioritySpanText);

        const detailsModalDueDateDiv = document.createElement('div');
        detailsModalDueDateDiv.classList.add('modal-due-date-div');
        const detailsModalDueDateSpan = document.createElement('span');
        detailsModalDueDateSpan.textContent = 'Due Date: ';
        const detailsModalDueDateSpanText = document.createElement('span');
        detailsModalDueDateSpanText.id = 'due-date-span-text';
        detailsModalDueDateDiv.appendChild(detailsModalDueDateSpan);
        detailsModalDueDateDiv.appendChild(detailsModalDueDateSpanText);

        const detailsModalDetailsDiv = document.createElement('div');
        detailsModalDetailsDiv.classList.add('modal-details-div');
        const detailsModalDetailsSpan = document.createElement('span');
        detailsModalDetailsSpan.textContent = 'Details: ';
        const detailsModalDetailsSpanText = document.createElement('span');
        detailsModalDetailsSpanText.id = 'details-span-text';
        detailsModalDetailsDiv.appendChild(detailsModalDetailsSpan);
        detailsModalDetailsDiv.appendChild(detailsModalDetailsSpanText);
        
        detailsModalContentDiv.appendChild(detailsModalContetCloseSpan);
        detailsModalContentDiv.appendChild(detailsModalHeader);
        detailsModalContentDiv.appendChild(detailsModalProjectDiv);
        detailsModalContentDiv.appendChild(detailsModalPriorityDiv);
        detailsModalContentDiv.appendChild(detailsModalDueDateDiv);
        detailsModalContentDiv.appendChild(detailsModalDetailsDiv);

        
        detailsModalContainerDiv.appendChild(detailsModalContentDiv);
        document.querySelector('body').appendChild(detailsModalContainerDiv);

        modalCreated = true;
}
const setToDoObjectDetailsModalBox = (toDoobject) => {
        document.querySelector('#details-modal-title-header').textContent = `${toDoobject.getValueFromToDoObject('title')}`;
        document.querySelector('#project-span-text').textContent = `${_projectController_js__WEBPACK_IMPORTED_MODULE_0__.projectController.getCurrentProject().getTitle()}`;
        document.querySelector('#priority-span-text').textContent = `${toDoobject.getValueFromToDoObject('priority')}`;
        document.querySelector('#due-date-span-text').textContent = `${toDoobject.getValueFromToDoObject('dueDate')}`;
        document.querySelector('#details-span-text').textContent = `${toDoobject.getValueFromToDoObject('details')}`;
    }
    const clearDetailsModalBox = () => {
        const detailsModalContainerDiv = document.querySelector(".modal");
        detailsModalContainerDiv.remove();
    }
    
    const showModalBox = () => {
        const detailsModalContainerDiv = document.querySelector(".modal");
        detailsModalContainerDiv.style.display = "block";
    }

    const hideModalBox = () => {
        const detailsModalContainerDiv = document.querySelector("#myModal");
        detailsModalContainerDiv.style.display = "none";
    }
    return {setToDoObjectDetailsModalBox, createToDoObjectDetailsModalBox, showModalBox};

})();


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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZVRvRG9Eb21FbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RPYmplY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvRG9OZXdUYXNrRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9Eb09iamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9Eb09iamVjdERldGFpbHNNb2RhbEJveC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDE2cHg7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgaGVpZ2h0OiA3MnB4O1xcbiAgICBiYWNrZ3JvdW5kOiBkYXJrbWFnZW50YTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG4uY29udGVudHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OjE7XFxufVxcblxcbi5hZGQtdGFzay1idXR0b257XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxNXB4IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgbWF4LXdpZHRoOiAyMDBweDtcXG59XFxuXFxuLm5ldy10YXNrLWZvcm0tcG9wdXB7XFxuICBwb3NpdGlvbjogZml4ZWQ7IFxcbiAgZGlzcGxheTogbm9uZTtcXG4gIHotaW5kZXg6IDE7IFxcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlOyBcXG4gIGhlaWdodDogMTAwJTsgXFxuICBvdmVyZmxvdzogYXV0bzsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyBcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgXFxufVxcblxcbiAgI25ldy10YXNrLWZvcm0tY29udGFpbmVye1xcbiAgICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgICBmb250LXNpemU6IDI1cHg7XFxuICB9XFxuICBcXG4gICAgICAjbmV3LXRhc2stZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT10ZXh0XSxcXG4gICAgICAjbmV3LXRhc2stZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT1udW1iZXJdXFxuICAgICAge1xcbiAgICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICAgICAgICBtYXJnaW46IDVweCAwIDE1cHggMDtcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xcbiAgICAgIH1cXG4gICAgICAjbmV3LXRhc2stZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT1jaGVja2JveF17IG1hcmdpbjogNXB4IDAgMjJweCAwO31cXG4gICAgICBcXG4gICAgICAvKiBXaGVuIHRoZSBpbnB1dHMgZ2V0IGZvY3VzLCBkbyBzb21ldGhpbmcgKi9cXG4gICAgICAjbmV3LXRhc2stZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgICNmb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPW51bWJlcl06Zm9jdXMge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgIH1cXG5cXG4gICAgICAjbmV3LXRhc2stZm9ybS1jb250YWluZXIgLnN1Ym1pdC1jYW5jZWwge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNEFBNkQ7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIHBhZGRpbmc6IDE2cHggMjBweDtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIG1hcmdpbjogMCA1cHggMTBweCA1cHg7XFxuICAgICAgb3BhY2l0eTogMC44O1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICB9XFxuICAgICAgI25ldy10YXNrLWZvcm0tY29udGFpbmVyICNjYW5jZWwgeyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7IH1cXG4gICAgICAjbmV3LXRhc2stZm9ybS1jb250YWluZXIgLnN1Ym1pdC1jYW5jZWw6aG92ZXIsICNuZXctYm9vay1idXR0b246aG92ZXIgeyBvcGFjaXR5OiAxO31cXG5cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG59XFxuXFxuICAubW9kYWwtY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICAgIG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgIHdpZHRoOiA4MCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXFxuICB9XFxuICAuY2xvc2Uge1xcbiAgICBjb2xvcjogI2FhYTtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcbiAgLmNsb3NlOmhvdmVyLFxcbiAgLmNsb3NlOmZvY3VzIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG5cXG5cXG5cXG5cXG4udGFzay1hcmVhe1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1iYXNpczogMTAwJTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYmFja2dyb3VuZDogcm95YWxibHVlO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBwYWRkaW5nOiAxNnB4O1xcbn1cXG5cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbiAgbGkge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgfVxcblxcbiAgYSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICB9XFxuXFxuLmZvb3RlciB7XFxuICBoZWlnaHQ6IDcycHg7XFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgY29sb3I6IGRhcmttYWdlbnRhO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIFxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0lBQXdJO0lBQ3hJLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osdUJBQXVCO0VBQ3pCO0FBQ0Y7RUFDRSxhQUFhO0VBQ2IsTUFBTTtBQUNSOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsVUFBVTtFQUNWLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsNEJBQTRCO0VBQzVCLGlDQUFpQztBQUNuQzs7RUFFRTtNQUNJLGdCQUFnQjtNQUNoQix1QkFBdUI7TUFDdkIseUJBQXlCO01BQ3pCLFlBQVk7TUFDWixhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLFVBQVU7TUFDVixnQkFBZ0I7TUFDaEIsZUFBZTtFQUNuQjs7TUFFSTs7O1VBR0ksVUFBVTtVQUNWLGFBQWE7VUFDYixvQkFBb0I7VUFDcEIsWUFBWTtVQUNaLG1CQUFtQjtNQUN2QjtNQUNBLCtDQUErQyxvQkFBb0IsQ0FBQzs7TUFFcEUsNENBQTRDO01BQzVDO1VBQ0ksc0JBQXNCO1VBQ3RCLGFBQWE7TUFDakI7O01BRUE7TUFDQSx5QkFBeUI7TUFDekIsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osZUFBZTtNQUNmLFdBQVc7TUFDWCxzQkFBc0I7TUFDdEIsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQjtNQUNBLG1DQUFtQyxxQkFBcUIsRUFBRTtNQUMxRCx3RUFBd0UsVUFBVSxDQUFDOzs7QUFHekY7RUFDRSxhQUFhLEVBQUUsc0JBQXNCO0VBQ3JDLGVBQWUsRUFBRSxrQkFBa0I7RUFDbkMsVUFBVSxFQUFFLGVBQWU7RUFDM0IsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXLEVBQUUsZUFBZTtFQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0VBQzlCLGNBQWMsRUFBRSw0QkFBNEI7RUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0VBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtBQUMxRDs7RUFFRTtJQUNFLHlCQUF5QjtJQUN6QixnQkFBZ0IsRUFBRSxrQ0FBa0M7SUFDcEQsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVLEVBQUUsb0RBQW9EO0VBQ2xFO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7RUFDQTs7RUFFQSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZjs7Ozs7O0FBTUY7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsYUFBYTtBQUNmOzs7QUFHQTtJQUNJLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsVUFBVTtFQUNaO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7O0FBRUY7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1Qjs7QUFFekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDE2cHg7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgaGVpZ2h0OiA3MnB4O1xcbiAgICBiYWNrZ3JvdW5kOiBkYXJrbWFnZW50YTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG4uY29udGVudHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OjE7XFxufVxcblxcbi5hZGQtdGFzay1idXR0b257XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxNXB4IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgbWF4LXdpZHRoOiAyMDBweDtcXG59XFxuXFxuLm5ldy10YXNrLWZvcm0tcG9wdXB7XFxuICBwb3NpdGlvbjogZml4ZWQ7IFxcbiAgZGlzcGxheTogbm9uZTtcXG4gIHotaW5kZXg6IDE7IFxcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlOyBcXG4gIGhlaWdodDogMTAwJTsgXFxuICBvdmVyZmxvdzogYXV0bzsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyBcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgXFxufVxcblxcbiAgI25ldy10YXNrLWZvcm0tY29udGFpbmVye1xcbiAgICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgICBmb250LXNpemU6IDI1cHg7XFxuICB9XFxuICBcXG4gICAgICAjbmV3LXRhc2stZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT10ZXh0XSxcXG4gICAgICAjbmV3LXRhc2stZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT1udW1iZXJdXFxuICAgICAge1xcbiAgICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICAgICAgICBtYXJnaW46IDVweCAwIDE1cHggMDtcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xcbiAgICAgIH1cXG4gICAgICAjbmV3LXRhc2stZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT1jaGVja2JveF17IG1hcmdpbjogNXB4IDAgMjJweCAwO31cXG4gICAgICBcXG4gICAgICAvKiBXaGVuIHRoZSBpbnB1dHMgZ2V0IGZvY3VzLCBkbyBzb21ldGhpbmcgKi9cXG4gICAgICAjbmV3LXRhc2stZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgICNmb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPW51bWJlcl06Zm9jdXMge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgIH1cXG5cXG4gICAgICAjbmV3LXRhc2stZm9ybS1jb250YWluZXIgLnN1Ym1pdC1jYW5jZWwge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNEFBNkQ7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIHBhZGRpbmc6IDE2cHggMjBweDtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIG1hcmdpbjogMCA1cHggMTBweCA1cHg7XFxuICAgICAgb3BhY2l0eTogMC44O1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICB9XFxuICAgICAgI25ldy10YXNrLWZvcm0tY29udGFpbmVyICNjYW5jZWwgeyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7IH1cXG4gICAgICAjbmV3LXRhc2stZm9ybS1jb250YWluZXIgLnN1Ym1pdC1jYW5jZWw6aG92ZXIsICNuZXctYm9vay1idXR0b246aG92ZXIgeyBvcGFjaXR5OiAxO31cXG5cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG59XFxuXFxuICAubW9kYWwtY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICAgIG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgIHdpZHRoOiA4MCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXFxuICB9XFxuICAuY2xvc2Uge1xcbiAgICBjb2xvcjogI2FhYTtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcbiAgLmNsb3NlOmhvdmVyLFxcbiAgLmNsb3NlOmZvY3VzIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG5cXG5cXG5cXG5cXG4udGFzay1hcmVhe1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1iYXNpczogMTAwJTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYmFja2dyb3VuZDogcm95YWxibHVlO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBwYWRkaW5nOiAxNnB4O1xcbn1cXG5cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbiAgbGkge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgfVxcblxcbiAgYSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICB9XFxuXFxuLmZvb3RlciB7XFxuICBoZWlnaHQ6IDcycHg7XFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgY29sb3I6IGRhcmttYWdlbnRhO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIFxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7dG9Eb09iamVjdEZhY3Rvcnl9IGZyb20gXCIuL3RvRG9PYmplY3QuanNcIjtcbmltcG9ydCB7cHJvamVjdENvbnRyb2xsZXJ9IGZyb20gJy4vcHJvamVjdENvbnRyb2xsZXIuanMnO1xuaW1wb3J0IHt0YXNrRm9ybX0gZnJvbSAnLi90b0RvTmV3VGFza0Zvcm0uanMnO1xuaW1wb3J0IHtQcm9qZWN0T2JqZWN0fSBmcm9tIFwiLi9wcm9qZWN0T2JqZWN0LmpzXCI7XG5pbXBvcnQge3RvRG9PYmplY3REZXRhaWxzTW9kYWxCb3h9IGZyb20gJy4vdG9Eb09iamVjdERldGFpbHNNb2RhbEJveC5qcyc7XG5cbmNvbnN0IHRvRG9Eb21FbGVtZW50RmFjdG9yeSA9ICh0b0RvT2JqZWN0KSA9PiB7XG4gICAgXG4gICAgICAgZnVuY3Rpb24gY3JlYXRlRG9tRWxlbWVudHModG9Eb09iamVjdCkge1xuICAgICAgICBjb25zdCBkb21FbGVtZW50TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbGV0IGN1cnJlbnRQcm9qZWN0PSBwcm9qZWN0Q29udHJvbGxlci5nZXRDdXJyZW50UHJvamVjdCgpO1xuICAgICAgICBkb21FbGVtZW50TGlzdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LmZpbmRJbmRleE9mVG9Eb09iamVjdCh0b0RvT2JqZWN0KSk7XG5cbiAgICAgICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGNvbnN0IHRpdGxlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBjb25zdCBkZXRhaWxzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY29uc3QgZGF0ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIFxuICAgICAgICAgICAgZnVuY3Rpb24gcG9wdWxhdGVEb21FbGVtZW50cygpIHtcbiAgICAgICAgICAgICAgICBjaGVja0JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgICAgICAgICAgIGNoZWNrQm94Lm5hbWUgPSBcImNoZWNrLWJveFwiO1xuICAgICAgICAgICAgICAgIGNoZWNrQm94LmlkID0gXCJjaGVjay1ib3hcIjtcbiAgICAgICAgICAgICAgICBsYWJlbC5odG1sRm9yID0gJ2lkJztcbiAgICAgICAgICAgICAgICBkZXRhaWxzQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZXRhaWxzXCI7XG4gICAgICAgICAgICAgICAgZGV0YWlsc0J1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b0RvT2JqZWN0RGV0YWlsc01vZGFsQm94LmNyZWF0ZVRvRG9PYmplY3REZXRhaWxzTW9kYWxCb3goKTtcbiAgICAgICAgICAgICAgICAgICAgdG9Eb09iamVjdERldGFpbHNNb2RhbEJveC5zZXRUb0RvT2JqZWN0RGV0YWlsc01vZGFsQm94KHRvRG9PYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICB0b0RvT2JqZWN0RGV0YWlsc01vZGFsQm94LnNob3dNb2RhbEJveCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJFZGl0XCI7IC8vc2ltZ2UgZWtsZW5lY2VrLlxuICAgICAgICAgICAgICAgIHJlbW92ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUmVtb3ZlXCI7IC8vc2ltZ2UgZWtsZW5lY2VrLlxuICAgICAgICAgICAgICAgIHRpdGxlU3Bhbi50ZXh0Q29udGVudCA9IHRvRG9PYmplY3QuZ2V0VmFsdWVGcm9tVG9Eb09iamVjdCgndGl0bGUnKTtcbiAgICAgICAgICAgICAgICBkYXRlU3Bhbi50ZXh0Q29udGVudCA9IHRvRG9PYmplY3QuZ2V0VmFsdWVGcm9tVG9Eb09iamVjdCgnZHVlRGF0ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9wdWxhdGVEb21FbGVtZW50cygpO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBhcHBlbmREb21FbGVtZW50c1RvTGlzdEVsZW1lbnQoKSB7XG4gICAgICAgICAgICAgICAgZG9tRWxlbWVudExpc3QuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgICAgIGRvbUVsZW1lbnRMaXN0LmFwcGVuZENoaWxkKGNoZWNrQm94KTtcbiAgICAgICAgICAgICAgICBkb21FbGVtZW50TGlzdC5hcHBlbmRDaGlsZCh0aXRsZVNwYW4pO1xuICAgICAgICAgICAgICAgIGRvbUVsZW1lbnRMaXN0LmFwcGVuZENoaWxkKGRhdGVTcGFuKTtcbiAgICAgICAgICAgICAgICBkb21FbGVtZW50TGlzdC5hcHBlbmRDaGlsZChkZXRhaWxzQnV0dG9uKTtcbiAgICAgICAgICAgICAgICBkb21FbGVtZW50TGlzdC5hcHBlbmRDaGlsZChyZW1vdmVCdXR0b24pO1xuICAgICAgICAgICAgICAgIGRvbUVsZW1lbnRMaXN0LmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXBwZW5kRG9tRWxlbWVudHNUb0xpc3RFbGVtZW50KCk7XG5cbiAgICAgICAgICAgIHJldHVybiBkb21FbGVtZW50TGlzdDtcbiAgICB9XG4gIGxldCBlbGVtZW50ID0gY3JlYXRlRG9tRWxlbWVudHModG9Eb09iamVjdCk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuZXhwb3J0IHt0b0RvRG9tRWxlbWVudEZhY3Rvcnl9OyIsImltcG9ydCB7dG9Eb09iamVjdEZhY3Rvcnl9IGZyb20gXCIuL3RvRG9PYmplY3QuanNcIjtcbmltcG9ydCB7UHJvamVjdE9iamVjdH0gZnJvbSBcIi4vcHJvamVjdE9iamVjdC5qc1wiO1xuaW1wb3J0IHt0YXNrRm9ybX0gZnJvbSAnLi90b0RvTmV3VGFza0Zvcm0uanMnO1xuaW1wb3J0IHtwcm9qZWN0Q29udHJvbGxlcn0gZnJvbSAnLi9wcm9qZWN0Q29udHJvbGxlci5qcyc7XG5pbXBvcnQge3RvRG9Eb21FbGVtZW50RmFjdG9yeX0gZnJvbSAnLi9jcmVhdGVUb0RvRG9tRWxlbWVudC5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuXG5jb25zdCBleGFtcGxlUHJvamVjdCA9IFByb2plY3RPYmplY3QoXCJFeGFtcGxlIFByb2plY3RcIik7XG5cblxuY29uc3QgdG9kb29iamVjdCA9IHRvRG9PYmplY3RGYWN0b3J5KFwiQ2xlYW4gcm9vbVwiLFwiMjkvMDUvMjAyMVwiLCBcIm1lZGl1bVwiLCBcIllvdXIgcm9vbSBpcyByZWFsbHkgZGlydHlcIik7XG5leGFtcGxlUHJvamVjdC5hZGRUb0RvT2JqZWN0VG9BcnJheSh0b2Rvb2JqZWN0KTtcblxuZXhhbXBsZVByb2plY3Quc2hvd0FycmF5Q29udGVudCgpO1xuXG5wcm9qZWN0Q29udHJvbGxlci5hZGRQcm9qZWN0VG9BcnJheShleGFtcGxlUHJvamVjdCk7XG5wcm9qZWN0Q29udHJvbGxlci5zZXRDdXJyZW50UHJvamVjdChleGFtcGxlUHJvamVjdCk7XG5jb25zb2xlLmxvZyhwcm9qZWN0Q29udHJvbGxlci5nZXRDdXJyZW50UHJvamVjdCgpLmdldFRpdGxlKCkpO1xuXG5cblxuZnVuY3Rpb24gY3JlYXRlQW5kUHVzaE5ld1RvRG9UYXNrKGZvcm1kYXRhKSB7XG4gICAgLy9CdW51biBmb3JtLWRhdGEgZXZlbnRpbmkgYXRlxZ9sZW1lc2kgZ2VyZWtpeW9yIGFtYSBrb250cm9sIGVkaWxtZXNpIGxhesSxbS5cbiAgIC8vRGF0YS1rZXkgZWtsZT9cbiAgXG4gIGNvbnN0IG5ld1RvRG9PYmplY3QgPSB0b0RvT2JqZWN0RmFjdG9yeShmb3JtZGF0YS5nZXQoJ3RpdGxlJyksXG4gICAgICAgZm9ybWRhdGEuZ2V0KCdkdWUtZGF0ZScpLFxuICAgICAgIGZvcm1kYXRhLmdldCgncHJpb3JpdHknKSxcbiAgICAgICBmb3JtZGF0YS5nZXQoJ2RldGFpbHMnKSk7XG5cbiAgIGxldCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RDb250cm9sbGVyLmdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgICAgXG4gICBjdXJyZW50UHJvamVjdC5hZGRUb0RvT2JqZWN0VG9BcnJheShuZXdUb0RvT2JqZWN0KTtcbiAgIFxuICAgbGV0IG5ld1RvRG9Eb21FbGVtZW50ID0gdG9Eb0RvbUVsZW1lbnRGYWN0b3J5KG5ld1RvRG9PYmplY3QpO1xuXG4gICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stYXJlYVwiKS5maXJzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChuZXdUb0RvRG9tRWxlbWVudCk7XG5cbiAgIFxufVxuZXhwb3J0IHtjcmVhdGVBbmRQdXNoTmV3VG9Eb1Rhc2t9IiwiaW1wb3J0IHtQcm9qZWN0T2JqZWN0fSBmcm9tIFwiLi9wcm9qZWN0T2JqZWN0LmpzXCI7XG5cbmNvbnN0IHByb2plY3RDb250cm9sbGVyID0gKCgpID0+IHtcblxuICAgIGxldCBhbGxQcm9qZWN0cyA9IFtdO1xuXG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gbnVsbDtcblxuICAgIGNvbnN0IGdldEN1cnJlbnRQcm9qZWN0ID0gKCkgPT4gY3VycmVudFByb2plY3Q7XG5cbiAgICBjb25zdCBzZXRDdXJyZW50UHJvamVjdCA9IHByb2plY3QgPT4gY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xuXG4gICAgY29uc3QgYWRkUHJvamVjdFRvUHJvamVjdHNBcnJheSA9IHByb2plY3QgPT4gYWxsUHJvamVjdHMucHVzaChwcm9qZWN0KTtcblxuICAgIGNvbnN0IHJlbW92ZVByb2plY3RGcm9tUHJvamVjdHNBcnJheSA9IHByb2plY3RUb1JlbW92ZSA9PiB7XG4gICAgICAgIGxldCBpbmRleCA9IGFsbFByb2plY3RzLmZpbmRJbmRleChlbGVtZW50ID0+IHtlbGVtZW50LmdldFRpdGxlKCkgPT0gcHJvamVjdFRvUmVtb3ZlLmdldFRpdGxlKCl9KTtcbiAgICAgICAgYWxsUHJvamVjdHMuc3BsaWNlKGluZGV4LDEpO31cblxuICAgIHJldHVybiB7Z2V0Q3VycmVudFByb2plY3QsIHNldEN1cnJlbnRQcm9qZWN0LCBhZGRQcm9qZWN0VG9BcnJheTogYWRkUHJvamVjdFRvUHJvamVjdHNBcnJheSwgcmVtb3ZlUHJvamVjdEZyb21BcnJheTogcmVtb3ZlUHJvamVjdEZyb21Qcm9qZWN0c0FycmF5fVxufSkoKTtcblxuZXhwb3J0IHsgcHJvamVjdENvbnRyb2xsZXIgfTsiLCJpbXBvcnQge3RvRG9PYmplY3RGYWN0b3J5fSBmcm9tIFwiLi90b0RvT2JqZWN0LmpzXCJcbmltcG9ydCB7dGFza0Zvcm19IGZyb20gJy4vdG9Eb05ld1Rhc2tGb3JtLmpzJztcblxuY29uc3QgUHJvamVjdE9iamVjdCA9ICh0aXRsZSkgPT4ge1xuICAgIFxuICAgIGxldCB0b0RvT2JqZWN0cyA9IFtdO1xuXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcblxuICAgIGNvbnN0IGFkZFRvRG9PYmplY3RUb0FycmF5ID0gb2JqZWN0VG9BZGQgPT4gdG9Eb09iamVjdHMucHVzaChvYmplY3RUb0FkZCk7XG4gICAgXG5cbiAgICBjb25zdCByZW1vdmVUb0RvT2JqZWN0RnJvbUFycmF5ID0gb2JqZWN0VG9SZW1vdmUgPT4ge1xuICAgICAgICBsZXQgaW5kZXggPSBmaW5kSW5kZXhPZlRvRG9PYmplY3Qob2JqZWN0VG9SZW1vdmUpO1xuICAgICAgICB0b0RvT2JqZWN0cy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgICBcbiAgICB9XG4gICAgY29uc3QgZmluZEluZGV4T2ZUb0RvT2JqZWN0ID0gKG9iamVjdCkgPT4ge1xuICAgICAgIFxuICAgICAgICByZXR1cm4gdG9Eb09iamVjdHMuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC5nZXRWYWx1ZUZyb21Ub0RvT2JqZWN0KCd0aXRsZScpID09PSBvYmplY3QuZ2V0VmFsdWVGcm9tVG9Eb09iamVjdCgndGl0bGUnKSk7XG4gICAgICAgIFxuICAgIH1cbiAgXG4gICAgY29uc3Qgc2hvd0FycmF5Q29udGVudCA9ICgpID0+IHRvRG9PYmplY3RzLmZvckVhY2goZWxlbWVudCA9PiBjb25zb2xlLmxvZyhlbGVtZW50LmdldFZhbHVlRnJvbVRvRG9PYmplY3QoXCJ0aXRsZVwiKSkpO1xuXG4gICAgcmV0dXJuIHtnZXRUaXRsZSwgYWRkVG9Eb09iamVjdFRvQXJyYXksIHJlbW92ZVRvRG9PYmplY3RGcm9tQXJyYXksIHNob3dBcnJheUNvbnRlbnQsIGZpbmRJbmRleE9mVG9Eb09iamVjdH07XG5cbn1cblxuZXhwb3J0IHtQcm9qZWN0T2JqZWN0fTsiLCJpbXBvcnQge3RvRG9PYmplY3RGYWN0b3J5fSBmcm9tIFwiLi90b0RvT2JqZWN0LmpzXCI7XG5pbXBvcnQge1Byb2plY3RPYmplY3R9IGZyb20gXCIuL3Byb2plY3RPYmplY3QuanNcIjtcbmltcG9ydCB7cHJvamVjdENvbnRyb2xsZXJ9IGZyb20gJy4vcHJvamVjdENvbnRyb2xsZXIuanMnO1xuaW1wb3J0IHt0b0RvRG9tRWxlbWVudEZhY3Rvcnl9IGZyb20gJy4vY3JlYXRlVG9Eb0RvbUVsZW1lbnQuanMnO1xuaW1wb3J0IHsgY3JlYXRlQW5kUHVzaE5ld1RvRG9UYXNrIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuY29uc3QgdGFza0Zvcm0gPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRhc2stZm9ybS1wb3B1cFwiKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctdGFzay1mb3JtLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1idXR0b25cIik7XG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW5jZWxcIik7XG5cbiAgICBhZGRFdmVudExpc3RlbmVyc1RvRWxlbWVudHMoKTtcblxuXG4gICAgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnNUb0VsZW1lbnRzKCkge1xuXG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBjcmVhdGVGb3JtRGF0YSk7XG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImZvcm1kYXRhXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmb3JtZGF0YSBmaXJlZCcpO1xuICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgYWRkVGFza0J1dHRvbi5vbmNsaWNrID0gKCkgPT4gZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBjYW5jZWxCdXR0b24ub25jbGljayA9ICgpID0+IGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxuXG5mdW5jdGlvbiBjcmVhdGVGb3JtRGF0YShlKXtcbiAgICBpZiAoZS5zdWJtaXR0ZXIuaWQgPT09IFwiY2FuY2VsXCIpIHJldHVybjtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoZS50YXJnZXQpO1xuICAgIGNyZWF0ZUFuZFB1c2hOZXdUb0RvVGFzayhmb3JtZGF0YSk7XG59XG5cblxuXG59KSgpO1xuXG5leHBvcnQge3Rhc2tGb3JtfTsiLCJpbXBvcnQge1Byb2plY3RPYmplY3R9IGZyb20gXCIuL3Byb2plY3RPYmplY3QuanNcIjtcbmltcG9ydCB7dGFza0Zvcm19IGZyb20gJy4vdG9Eb05ld1Rhc2tGb3JtLmpzJztcblxuY29uc3QgdG9Eb09iamVjdEZhY3RvcnkgPSAodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXRhaWxzPVwiXCIgKSA9PiB7XG4gXG4gICAgY29uc3QgZ2V0VmFsdWVGcm9tVG9Eb09iamVjdCA9IHByaXZhdGVQcm9wZXJ0eU5hbWUgPT4ge1xuICAgICAgICBzd2l0Y2gocHJpdmF0ZVByb3BlcnR5TmFtZSl7XG4gICAgICAgICAgICBjYXNlIChcInRpdGxlXCIpOlxuICAgICAgICAgICAgICByZXR1cm4gdGl0bGU7XG4gICAgICAgICAgICBjYXNlIChcImR1ZURhdGVcIik6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGR1ZURhdGU7XG4gICAgICAgICAgICBjYXNlIChcInByaW9yaXR5XCIpOlxuICAgICAgICAgICAgICAgIHJldHVybiBwcmlvcml0eTtcbiAgICAgICAgICAgIGNhc2UgKFwiZGV0YWlsc1wiKTpcbiAgICAgICAgICAgICAgICByZXR1cm4gZGV0YWlscztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgICAgIFxuICAgIC8vIGNvbnN0IHNob3dEZXRhaWxzT2ZUb0RvT2JqZWN0ID0gKCkgPT4ge1xuICAgIC8vICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwcml2YXRlUHJvcGVydGllc09iamVjdCkpIHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGAke2tleX06ICR7dmFsdWV9YCk7XG4gICAgLy8gfX1cblxuICAgIGNvbnN0IHNldFByb3BlcnR5VmFsdWVPZlRvRG9PYmplY3QgPSAocHJpdmF0ZVByb3BlcnR5TmFtZSwgbmV3VmFsdWUpID0+IHtcbiAgICAgICAgbGV0IG9sZFZhbHVlID0gZ2V0VmFsdWVGcm9tVG9Eb09iamVjdChwcml2YXRlUHJvcGVydHlOYW1lKTtcbiAgICAgICAgb2xkVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB9XG5cblxuICAgIHJldHVybiB7Z2V0VmFsdWVGcm9tVG9Eb09iamVjdCwgc2V0UHJvcGVydHlWYWx1ZU9mVG9Eb09iamVjdCxcbiAgICAgICAgfTtcbiAgICBcbn1cblxuZXhwb3J0IHt0b0RvT2JqZWN0RmFjdG9yeX07IiwiaW1wb3J0IHsgcHJvamVjdENvbnRyb2xsZXIgfSBmcm9tIFwiLi9wcm9qZWN0Q29udHJvbGxlci5qc1wiO1xuaW1wb3J0IHt0b0RvT2JqZWN0RmFjdG9yeX0gZnJvbSBcIi4vdG9Eb09iamVjdC5qc1wiO1xuaW1wb3J0IHtQcm9qZWN0T2JqZWN0fSBmcm9tIFwiLi9wcm9qZWN0T2JqZWN0LmpzXCI7XG5cbmNvbnN0IHRvRG9PYmplY3REZXRhaWxzTW9kYWxCb3ggPSAoKCkgPT4ge1xuICAgIGxldCBtb2RhbENyZWF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNyZWF0ZVRvRG9PYmplY3REZXRhaWxzTW9kYWxCb3ggPSAoKSA9PiB7XG4gICAgXG4gICAgICAgIGlmKG1vZGFsQ3JlYXRlZCkgY2xlYXJEZXRhaWxzTW9kYWxCb3goKTtcblxuICAgICAgICBjb25zdCBkZXRhaWxzTW9kYWxDb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkZXRhaWxzTW9kYWxDb250YWluZXJEaXYuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgICAgICAgZGV0YWlsc01vZGFsQ29udGFpbmVyRGl2LmlkID0gJ215TW9kYWwnO1xuXG4gICAgICAgIGNvbnN0IGRldGFpbHNNb2RhbENvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGV0YWlsc01vZGFsQ29udGVudERpdi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jb250ZW50Jyk7XG5cbiAgICAgICAgY29uc3QgZGV0YWlsc01vZGFsQ29udGV0Q2xvc2VTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBkZXRhaWxzTW9kYWxDb250ZXRDbG9zZVNwYW4udGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICAgICAgZGV0YWlsc01vZGFsQ29udGV0Q2xvc2VTcGFuLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJyk7XG4gICAgICAgIGRldGFpbHNNb2RhbENvbnRldENsb3NlU3Bhbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVNb2RhbEJveCk7XG5cbiAgICAgICAgY29uc3QgZGV0YWlsc01vZGFsSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgZGV0YWlsc01vZGFsSGVhZGVyLmlkID0gXCJkZXRhaWxzLW1vZGFsLXRpdGxlLWhlYWRlclwiO1xuXG4gICAgICAgIGNvbnN0IGRldGFpbHNNb2RhbFByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGV0YWlsc01vZGFsUHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1wcm9qZWN0LWRpdicpO1xuICAgICAgICBjb25zdCBkZXRhaWxzTW9kYWxQcm9qZWN0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZGV0YWlsc01vZGFsUHJvamVjdFNwYW4udGV4dENvbnRlbnQgPSBcIlByb2plY3Q6IFwiO1xuICAgICAgICBjb25zdCBkZXRhaWxzTW9kYWxQcm9qZWN0U3BhblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGRldGFpbHNNb2RhbFByb2plY3RTcGFuVGV4dC5pZCA9ICdwcm9qZWN0LXNwYW4tdGV4dCc7XG4gICAgICAgIGRldGFpbHNNb2RhbFByb2plY3REaXYuYXBwZW5kQ2hpbGQoZGV0YWlsc01vZGFsUHJvamVjdFNwYW4pO1xuICAgICAgICBkZXRhaWxzTW9kYWxQcm9qZWN0RGl2LmFwcGVuZENoaWxkKGRldGFpbHNNb2RhbFByb2plY3RTcGFuVGV4dCk7XG5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRldGFpbHNNb2RhbFByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRldGFpbHNNb2RhbFByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ21vZGFsLXByaW9yaXR5LWRpdicpO1xuICAgICAgICBjb25zdCBkZXRhaWxzTW9kYWxQcmlvcml0eVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGRldGFpbHNNb2RhbFByaW9yaXR5U3Bhbi50ZXh0Q29udGVudCA9ICdQcmlvcml0eTogJztcbiAgICAgICAgY29uc3QgZGV0YWlsc01vZGFsUHJpb3JpdHlTcGFuVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZGV0YWlsc01vZGFsUHJpb3JpdHlTcGFuVGV4dC5pZCA9ICdwcmlvcml0eS1zcGFuLXRleHQnO1xuICAgICAgICBkZXRhaWxzTW9kYWxQcmlvcml0eURpdi5hcHBlbmRDaGlsZChkZXRhaWxzTW9kYWxQcmlvcml0eVNwYW4pO1xuICAgICAgICBkZXRhaWxzTW9kYWxQcmlvcml0eURpdi5hcHBlbmRDaGlsZChkZXRhaWxzTW9kYWxQcmlvcml0eVNwYW5UZXh0KTtcblxuICAgICAgICBjb25zdCBkZXRhaWxzTW9kYWxEdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRldGFpbHNNb2RhbER1ZURhdGVEaXYuY2xhc3NMaXN0LmFkZCgnbW9kYWwtZHVlLWRhdGUtZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRldGFpbHNNb2RhbER1ZURhdGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBkZXRhaWxzTW9kYWxEdWVEYXRlU3Bhbi50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZTogJztcbiAgICAgICAgY29uc3QgZGV0YWlsc01vZGFsRHVlRGF0ZVNwYW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBkZXRhaWxzTW9kYWxEdWVEYXRlU3BhblRleHQuaWQgPSAnZHVlLWRhdGUtc3Bhbi10ZXh0JztcbiAgICAgICAgZGV0YWlsc01vZGFsRHVlRGF0ZURpdi5hcHBlbmRDaGlsZChkZXRhaWxzTW9kYWxEdWVEYXRlU3Bhbik7XG4gICAgICAgIGRldGFpbHNNb2RhbER1ZURhdGVEaXYuYXBwZW5kQ2hpbGQoZGV0YWlsc01vZGFsRHVlRGF0ZVNwYW5UZXh0KTtcblxuICAgICAgICBjb25zdCBkZXRhaWxzTW9kYWxEZXRhaWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRldGFpbHNNb2RhbERldGFpbHNEaXYuY2xhc3NMaXN0LmFkZCgnbW9kYWwtZGV0YWlscy1kaXYnKTtcbiAgICAgICAgY29uc3QgZGV0YWlsc01vZGFsRGV0YWlsc1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGRldGFpbHNNb2RhbERldGFpbHNTcGFuLnRleHRDb250ZW50ID0gJ0RldGFpbHM6ICc7XG4gICAgICAgIGNvbnN0IGRldGFpbHNNb2RhbERldGFpbHNTcGFuVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZGV0YWlsc01vZGFsRGV0YWlsc1NwYW5UZXh0LmlkID0gJ2RldGFpbHMtc3Bhbi10ZXh0JztcbiAgICAgICAgZGV0YWlsc01vZGFsRGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChkZXRhaWxzTW9kYWxEZXRhaWxzU3Bhbik7XG4gICAgICAgIGRldGFpbHNNb2RhbERldGFpbHNEaXYuYXBwZW5kQ2hpbGQoZGV0YWlsc01vZGFsRGV0YWlsc1NwYW5UZXh0KTtcbiAgICAgICAgXG4gICAgICAgIGRldGFpbHNNb2RhbENvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZGV0YWlsc01vZGFsQ29udGV0Q2xvc2VTcGFuKTtcbiAgICAgICAgZGV0YWlsc01vZGFsQ29udGVudERpdi5hcHBlbmRDaGlsZChkZXRhaWxzTW9kYWxIZWFkZXIpO1xuICAgICAgICBkZXRhaWxzTW9kYWxDb250ZW50RGl2LmFwcGVuZENoaWxkKGRldGFpbHNNb2RhbFByb2plY3REaXYpO1xuICAgICAgICBkZXRhaWxzTW9kYWxDb250ZW50RGl2LmFwcGVuZENoaWxkKGRldGFpbHNNb2RhbFByaW9yaXR5RGl2KTtcbiAgICAgICAgZGV0YWlsc01vZGFsQ29udGVudERpdi5hcHBlbmRDaGlsZChkZXRhaWxzTW9kYWxEdWVEYXRlRGl2KTtcbiAgICAgICAgZGV0YWlsc01vZGFsQ29udGVudERpdi5hcHBlbmRDaGlsZChkZXRhaWxzTW9kYWxEZXRhaWxzRGl2KTtcblxuICAgICAgICBcbiAgICAgICAgZGV0YWlsc01vZGFsQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGRldGFpbHNNb2RhbENvbnRlbnREaXYpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoZGV0YWlsc01vZGFsQ29udGFpbmVyRGl2KTtcblxuICAgICAgICBtb2RhbENyZWF0ZWQgPSB0cnVlO1xufVxuY29uc3Qgc2V0VG9Eb09iamVjdERldGFpbHNNb2RhbEJveCA9ICh0b0Rvb2JqZWN0KSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXRhaWxzLW1vZGFsLXRpdGxlLWhlYWRlcicpLnRleHRDb250ZW50ID0gYCR7dG9Eb29iamVjdC5nZXRWYWx1ZUZyb21Ub0RvT2JqZWN0KCd0aXRsZScpfWA7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXNwYW4tdGV4dCcpLnRleHRDb250ZW50ID0gYCR7cHJvamVjdENvbnRyb2xsZXIuZ2V0Q3VycmVudFByb2plY3QoKS5nZXRUaXRsZSgpfWA7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eS1zcGFuLXRleHQnKS50ZXh0Q29udGVudCA9IGAke3RvRG9vYmplY3QuZ2V0VmFsdWVGcm9tVG9Eb09iamVjdCgncHJpb3JpdHknKX1gO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlLWRhdGUtc3Bhbi10ZXh0JykudGV4dENvbnRlbnQgPSBgJHt0b0Rvb2JqZWN0LmdldFZhbHVlRnJvbVRvRG9PYmplY3QoJ2R1ZURhdGUnKX1gO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGV0YWlscy1zcGFuLXRleHQnKS50ZXh0Q29udGVudCA9IGAke3RvRG9vYmplY3QuZ2V0VmFsdWVGcm9tVG9Eb09iamVjdCgnZGV0YWlscycpfWA7XG4gICAgfVxuICAgIGNvbnN0IGNsZWFyRGV0YWlsc01vZGFsQm94ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkZXRhaWxzTW9kYWxDb250YWluZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuICAgICAgICBkZXRhaWxzTW9kYWxDb250YWluZXJEaXYucmVtb3ZlKCk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHNob3dNb2RhbEJveCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGV0YWlsc01vZGFsQ29udGFpbmVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcbiAgICAgICAgZGV0YWlsc01vZGFsQ29udGFpbmVyRGl2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuXG4gICAgY29uc3QgaGlkZU1vZGFsQm94ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkZXRhaWxzTW9kYWxDb250YWluZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI215TW9kYWxcIik7XG4gICAgICAgIGRldGFpbHNNb2RhbENvbnRhaW5lckRpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICAgIHJldHVybiB7c2V0VG9Eb09iamVjdERldGFpbHNNb2RhbEJveCwgY3JlYXRlVG9Eb09iamVjdERldGFpbHNNb2RhbEJveCwgc2hvd01vZGFsQm94fTtcblxufSkoKTtcbmV4cG9ydCB7dG9Eb09iamVjdERldGFpbHNNb2RhbEJveH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9