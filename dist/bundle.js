/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/chat.js":
/*!********************!*\
  !*** ./js/chat.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./js/component.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./js/header.js");
/* harmony import */ var _messageField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messageField */ "./js/messageField.js");
/* harmony import */ var _textInput_textInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./textInput/textInput */ "./js/textInput/textInput.js");
/* harmony import */ var _services_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/helper */ "./js/services/helper.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var Chat = /*#__PURE__*/function (_Component) {
  _inherits(Chat, _Component);

  var _super = _createSuper(Chat);

  function Chat(parent, props) {
    var _thisSuper, _this;

    _classCallCheck(this, Chat);

    _this = _super.call(this, parent);
    _this.props = props;
    _this.active = false;
    _this.inputHeight = 60;
    _this.headerHeight = 60;
    _this.style = {
      position: 'fixed',
      bottom: Object(_services_helper__WEBPACK_IMPORTED_MODULE_4__["numberToPixel"])(props.bottom),
      right: Object(_services_helper__WEBPACK_IMPORTED_MODULE_4__["numberToPixel"])(props.right),
      height: Object(_services_helper__WEBPACK_IMPORTED_MODULE_4__["numberToPixel"])(props.height),
      width: Object(_services_helper__WEBPACK_IMPORTED_MODULE_4__["numberToPixel"])(props.width),
      backgroundColor: props.backgroundColor,
      display: 'none',
      boxShadow: '0 0 4px rgba(0, 0, 0, .14), 0 4px 8px rgba(0, 0, 0, .28)',
      borderRadius: Object(_services_helper__WEBPACK_IMPORTED_MODULE_4__["numberToPixel"])(15),
      mediaQuery: {
        query: '(max-width: 700px)',
        style: {
          position: 'relative',
          bottom: 0,
          right: 0,
          height: '100%',
          width: '100%'
        }
      }
    };

    _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(Chat.prototype)), "render", _thisSuper).call(_thisSuper);

    return _this;
  }

  _createClass(Chat, [{
    key: "addChildren",
    value: function addChildren() {
      var header = new _header__WEBPACK_IMPORTED_MODULE_1__["default"](this.element, {
        height: this.headerHeight - 5,
        bottomMargin: 5,
        backgroundColor: this.props.baseColor
      });
      var messageField = new _messageField__WEBPACK_IMPORTED_MODULE_2__["default"](this.element, this.headerHeight, this.inputHeight);
      this.children = [header, messageField, new _textInput_textInput__WEBPACK_IMPORTED_MODULE_3__["default"](this.element, this.width, this.inputHeight, 'Send a message', function (message) {
        return messageField.onUserMessage(message);
      })];
    }
  }, {
    key: "create",
    value: function create() {
      this.element = document.createElement('div');
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.active) {
        this.element.style.display = 'none';
        this.active = false;
      } else {
        this.element.style.display = 'block';
        this.active = true;
      }
    }
  }]);

  return Chat;
}(_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Chat);

/***/ }),

/***/ "./js/component.js":
/*!*************************!*\
  !*** ./js/component.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/helper */ "./js/services/helper.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Component = /*#__PURE__*/function () {
  function Component(parent) {
    _classCallCheck(this, Component);

    _defineProperty(this, "parent", void 0);

    _defineProperty(this, "element", void 0);

    _defineProperty(this, "children", []);

    _defineProperty(this, "style", {});

    this.parent = parent;
  }

  _createClass(Component, [{
    key: "render",
    value: function render() {
      this.create();
      this.applyStyle();
      this.append();
      this.addChildren();
    }
  }, {
    key: "create",
    value: function create() {
      throw new Error('Create not implemented');
    }
  }, {
    key: "append",
    value: function append() {
      this.parent.appendChild(this.element);
    }
  }, {
    key: "remove",
    value: function remove() {
      parent.removeChild(this.element);
    }
  }, {
    key: "update",
    value: function update() {
      this.remove();
      this.render();
    } //TODO move this

  }, {
    key: "addChildren",
    value: function addChildren() {}
  }, {
    key: "applyStyle",
    value: function applyStyle() {
      Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["aplyStylesToElement"])(this.style, this.element);
    }
  }]);

  return Component;
}();

/* harmony default export */ __webpack_exports__["default"] = (Component);

/***/ }),

/***/ "./js/container.js":
/*!*************************!*\
  !*** ./js/container.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./js/component.js");
/* harmony import */ var _chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat */ "./js/chat.js");
/* harmony import */ var _toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggle */ "./js/toggle.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Container = /*#__PURE__*/function (_Component) {
  _inherits(Container, _Component);

  var _super = _createSuper(Container);

  function Container(parent, props) {
    var _thisSuper, _this;

    _classCallCheck(this, Container);

    _this = _super.call(this, parent);
    _this.props = props;
    _this.style = {
      position: 'fixed',
      right: 0,
      bottom: 0,
      mediaQuery: {
        query: '(max-width: 700px)',
        style: {
          left: 0,
          top: 0,
          position: 'fixed',
          width: '100%',
          height: '100%',
          boxSizing: 'border-box',
          padding: '20px 20px 80px 20px'
        }
      }
    };

    _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(Container.prototype)), "render", _thisSuper).call(_thisSuper);

    return _this;
  }

  _createClass(Container, [{
    key: "addChildren",
    value: function addChildren() {
      var chat = new _chat__WEBPACK_IMPORTED_MODULE_1__["default"](this.element, {
        bottom: this.props.bottom,
        right: this.props.right + this.props.diameterToggle * 1.5,
        height: this.props.height,
        width: this.props.width,
        backgroundColor: this.props.backgroundColor,
        baseColor: this.props.baseColor
      });
      this.children = [chat, new _toggle__WEBPACK_IMPORTED_MODULE_2__["default"](this.element, {
        bottom: this.props.bottom,
        right: this.props.right,
        diameter: this.props.diameterToggle,
        color: this.props.baseColor,
        callback: function callback() {
          return chat.toggle();
        }
      })];
    }
  }, {
    key: "create",
    value: function create() {
      this.element = document.createElement('div');
      this.element.id = 'container';
    }
  }]);

  return Container;
}(_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./js/header.js":
/*!**********************!*\
  !*** ./js/header.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./js/component.js");
/* harmony import */ var _services_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/helper */ "./js/services/helper.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Header = /*#__PURE__*/function (_Component) {
  _inherits(Header, _Component);

  var _super = _createSuper(Header);

  function Header(parent, props) {
    var _thisSuper, _this;

    _classCallCheck(this, Header);

    _this = _super.call(this, parent);
    _this.style = {
      height: Object(_services_helper__WEBPACK_IMPORTED_MODULE_1__["numberToPixel"])(props.height - props.bottomMargin),
      backgroundColor: props.backgroundColor,
      borderRadius: '15px 15px 0 0',
      marginBottom: Object(_services_helper__WEBPACK_IMPORTED_MODULE_1__["numberToPixel"])(props.bottomMargin)
    };

    _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(Header.prototype)), "render", _thisSuper).call(_thisSuper);

    return _this;
  }

  _createClass(Header, [{
    key: "create",
    value: function create() {
      this.element = document.createElement('div');
      this.element.className = 'header';
    }
  }]);

  return Header;
}(_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./js/messageField.js":
/*!****************************!*\
  !*** ./js/messageField.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./js/component.js");
/* harmony import */ var _messages_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages/message */ "./js/messages/message.js");
/* harmony import */ var _messages_messageWithButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages/messageWithButtons */ "./js/messages/messageWithButtons.js");
/* harmony import */ var _services_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/helper */ "./js/services/helper.js");
/* harmony import */ var _services_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/client */ "./js/services/client.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var MessageField = /*#__PURE__*/function (_Component) {
  _inherits(MessageField, _Component);

  var _super = _createSuper(MessageField);

  function MessageField(parent, top, bottom) {
    var _thisSuper, _this;

    _classCallCheck(this, MessageField);

    _this = _super.call(this, parent);
    _this.style = {
      position: 'absolute',
      bottom: Object(_services_helper__WEBPACK_IMPORTED_MODULE_3__["numberToPixel"])(bottom),
      left: '0',
      right: '0',
      top: Object(_services_helper__WEBPACK_IMPORTED_MODULE_3__["numberToPixel"])(top),
      overflowY: 'auto'
    };

    _get((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(MessageField.prototype)), "render", _thisSuper).call(_thisSuper);

    Object(_services_client__WEBPACK_IMPORTED_MODULE_4__["setupWebsocket"])(function (message) {
      return _this.onBotMessage(message);
    });
    return _this;
  }

  _createClass(MessageField, [{
    key: "create",
    value: function create() {
      this.element = document.createElement('div');
      this.element.className = 'chat-bot-scrollbar';
    }
  }, {
    key: "addMessage",
    value: function addMessage(text, isUser) {
      this.children.push(new _messages_message__WEBPACK_IMPORTED_MODULE_1__["default"](this.element, text, isUser));
    }
  }, {
    key: "addMessageWithButtons",
    value: function addMessageWithButtons(text, isUser, buttonTexts) {
      var _this2 = this;

      console.log(buttonTexts);
      this.children.push(new _messages_messageWithButtons__WEBPACK_IMPORTED_MODULE_2__["default"](this.element, text, isUser, buttonTexts, function (text) {
        return _this2.onUserMessage(text);
      }));
    }
  }, {
    key: "onUserMessage",
    value: function onUserMessage(message) {
      this.addMessage(message, true);
      this.scrollDown();
      Object(_services_client__WEBPACK_IMPORTED_MODULE_4__["sendMessage"])(message);
    }
  }, {
    key: "onBotMessage",
    value: function onBotMessage(data) {
      console.log('Message data:', data);

      if (data.buttons.length) {
        this.addMessageWithButtons(data.message.text, false, data.buttons);
      } else {
        this.addMessage(data.message.text, false);
      }

      this.scrollDown();
    }
  }, {
    key: "addMessage",
    value: function addMessage(text, isUser) {
      this.children.push(new _messages_message__WEBPACK_IMPORTED_MODULE_1__["default"](this.element, text, isUser));
    }
  }, {
    key: "scrollDown",
    value: function scrollDown() {
      this.element.scrollTop = this.element.scrollHeight;
    }
  }]);

  return MessageField;
}(_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (MessageField);

/***/ }),

/***/ "./js/messages/button.js":
/*!*******************************!*\
  !*** ./js/messages/button.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/helper */ "./js/services/helper.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component */ "./js/component.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Button = /*#__PURE__*/function (_Component) {
  _inherits(Button, _Component);

  var _super = _createSuper(Button);

  function Button(parent, text, right, backgroundColor, textColor, callback) {
    var _this;

    _classCallCheck(this, Button);

    _this = _super.call(this, parent);
    _this.callback = callback;
    _this.style = {
      backgroundColor: backgroundColor,
      borderRadius: Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["numberToPixel"])(5),
      color: textColor,
      display: 'inline-block',
      padding: Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["numberToPixel"])(5),
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontSize: Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["numberToPixel"])(12),
      lineHeight: Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["numberToPixel"])(20),
      fontWeight: 'bold',
      fontSmoothing: 'antialiased',
      outline: 'none',
      border: 'none',
      marginTop: Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["numberToPixel"])(12)
    };

    if (right) {
      _this.style.float = 'right';
      _this.style.marginLeft = '20px';
    } else {
      _this.style.marginRight = '20px';
    }

    _this.text = text;

    _this.render();

    return _this;
  }

  _createClass(Button, [{
    key: "create",
    value: function create() {
      var _this2 = this;

      this.element = document.createElement('button');
      this.element.setAttribute('type', 'button');
      this.element.textContent = this.text;

      this.element.onclick = function () {
        return _this2.callback(_this2.text);
      };
    }
  }]);

  return Button;
}(_component__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./js/messages/buttonContainer.js":
/*!****************************************!*\
  !*** ./js/messages/buttonContainer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component */ "./js/component.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ "./js/messages/button.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var ButtonContainer = /*#__PURE__*/function (_Component) {
  _inherits(ButtonContainer, _Component);

  var _super = _createSuper(ButtonContainer);

  function ButtonContainer(parent, right, backgroundColor, textColor, buttonMessages, callback) {
    var _this;

    _classCallCheck(this, ButtonContainer);

    _this = _super.call(this, parent);
    _this.callback = callback;
    _this.buttonMessages = buttonMessages;
    _this.right = right;
    _this.backgroundColor = backgroundColor;
    _this.textColor = textColor;
    _this.style = {
      display: 'flex',
      justifyContent: 'space-between'
    };

    _this.render();

    return _this;
  }

  _createClass(ButtonContainer, [{
    key: "addChildren",
    value: function addChildren() {
      var _this2 = this;

      var buttons = [];
      this.buttonMessages.forEach(function (message) {
        buttons.push(new _button__WEBPACK_IMPORTED_MODULE_1__["default"](_this2.element, message.text, _this2.right, _this2.backgroundColor, _this2.textColor, function (text) {
          return _this2.callback(text);
        }));
      });
      this.children = buttons;
    }
  }, {
    key: "create",
    value: function create() {
      this.element = document.createElement('div');
    }
  }]);

  return ButtonContainer;
}(_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (ButtonContainer);

/***/ }),

/***/ "./js/messages/message.js":
/*!********************************!*\
  !*** ./js/messages/message.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/helper */ "./js/services/helper.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component */ "./js/component.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text */ "./js/messages/text.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Message = /*#__PURE__*/function (_Component) {
  _inherits(Message, _Component);

  var _super = _createSuper(Message);

  function Message(parent, text, isUser) {
    var _this;

    _classCallCheck(this, Message);

    _this = _super.call(this, parent);
    _this.isUser = isUser;
    _this.text = text;

    if (_this.isUser) {
      _this.backgroundColor = '#42a5f5';
      _this.textColor = '#ffffff';
    } else {
      _this.backgroundColor = '#f7f7f7';
      _this.textColor = '#6c6c6c';
    }

    _this.style = {
      margin: Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["numberToPixel"])(5),
      marginBottom: Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["numberToPixel"])(20),
      overflow: 'hidden'
    };

    _this.render();

    return _this;
  }

  _createClass(Message, [{
    key: "addChildren",
    value: function addChildren() {
      this.children.push(new _text__WEBPACK_IMPORTED_MODULE_2__["default"](this.element, this.text, this.right, this.backgroundColor, this.textColor));
    }
  }, {
    key: "create",
    value: function create() {
      this.element = document.createElement('div');
    }
  }]);

  return Message;
}(_component__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Message);

/***/ }),

/***/ "./js/messages/messageWithButtons.js":
/*!*******************************************!*\
  !*** ./js/messages/messageWithButtons.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message */ "./js/messages/message.js");
/* harmony import */ var _buttonContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttonContainer */ "./js/messages/buttonContainer.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


 //TODO This does not conform to Component Rethin Component

var MassageWithButtons = /*#__PURE__*/function (_Message) {
  _inherits(MassageWithButtons, _Message);

  var _super = _createSuper(MassageWithButtons);

  function MassageWithButtons(parent, text, isUser, buttonTexts, callback) {
    var _this;

    _classCallCheck(this, MassageWithButtons);

    _this = _super.call(this, parent, text, isUser);
    _this.buttonTexts = buttonTexts;
    _this.callback = callback;

    _this.addChildrenLate();

    return _this;
  }

  _createClass(MassageWithButtons, [{
    key: "addChildrenLate",
    value: function addChildrenLate() {
      var _this2 = this;

      this.children.push(new _buttonContainer__WEBPACK_IMPORTED_MODULE_1__["default"](this.element, this.isUser, this.backgroundColor, this.textColor, this.buttonTexts, function (text) {
        return _this2.callback(text);
      }));
    }
  }]);

  return MassageWithButtons;
}(_message__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (MassageWithButtons);

/***/ }),

/***/ "./js/messages/text.js":
/*!*****************************!*\
  !*** ./js/messages/text.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/helper */ "./js/services/helper.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component */ "./js/component.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Text = /*#__PURE__*/function (_Component) {
  _inherits(Text, _Component);

  var _super = _createSuper(Text);

  function Text(parent, text, right, backgroundColor, textColor) {
    var _this;

    _classCallCheck(this, Text);

    _this = _super.call(this, parent);

    _defineProperty(_assertThisInitialized(_this), "rowStyle", void 0);

    _defineProperty(_assertThisInitialized(_this), "textStyle", void 0);

    _defineProperty(_assertThisInitialized(_this), "text", '');

    _this.style = {
      backgroundColor: backgroundColor,
      borderRadius: Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["numberToPixel"])(5),
      color: textColor,
      padding: Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["numberToPixel"])(10),
      display: 'inline-block',
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontSize: Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["numberToPixel"])(12),
      lineHeight: Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["numberToPixel"])(20),
      fontWeight: '500',
      fontSmoothing: 'antialiased'
    };

    if (right) {
      _this.style.float = 'right';
      _this.style.marginLeft = '20px';
    } else {
      _this.style.marginRight = '20px';
    }

    _this.text = text;

    _this.render();

    return _this;
  }

  _createClass(Text, [{
    key: "create",
    value: function create() {
      this.element = document.createElement('div');
      this.element.textContent = this.text;
    }
  }]);

  return Text;
}(_component__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./js/root.js":
/*!********************!*\
  !*** ./js/root.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Root = /*#__PURE__*/function () {
  function Root(tag) {
    _classCallCheck(this, Root);

    this.tag = tag;
    this.create();
  }

  _createClass(Root, [{
    key: "create",
    value: function create() {
      this.element = document.getElementsByClassName(this.tag)[0];
    }
  }]);

  return Root;
}();

/* harmony default export */ __webpack_exports__["default"] = (Root);

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root */ "./js/root.js");
/* harmony import */ var _messages_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages/message */ "./js/messages/message.js");
/* harmony import */ var _messages_messageWithButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages/messageWithButtons */ "./js/messages/messageWithButtons.js");
/* harmony import */ var _services_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/helper */ "./js/services/helper.js");
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./container */ "./js/container.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var chatbotStyle = {
  bottom: 20,
  right: 20,
  width: 340,
  height: 600,
  headerHeight: 60,
  inputHeight: 60,
  diameterToggle: 40,
  baseColor: '#42a5f5',
  backgroundColor: '#ffffff',

  get bgColorUser() {
    return this.baseColor;
  },

  textColorUser: '#ffffff',
  bgColorBot: '#f7f7f7',
  textColorBot: '#6c6c6c'
};

var ChatBot = function ChatBot() {
  _classCallCheck(this, ChatBot);

  _defineProperty(this, "messages", []);

  //TODO
  for (var _i = 0, _Object$entries = Object.entries(chatbotStyle); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    this[key] = value;
  }

  this.element = new _root__WEBPACK_IMPORTED_MODULE_0__["default"]('chat-bot').element;
  this.container = new _container__WEBPACK_IMPORTED_MODULE_4__["default"](this.element, {
    bottom: this.bottom,
    right: this.right,
    height: this.height,
    width: this.width,
    backgroundColor: this.backgroundColor,
    diameterToggle: this.diameterToggle,
    baseColor: this.baseColor
  });
};

function init() {
  new ChatBot();
  Object(_services_helper__WEBPACK_IMPORTED_MODULE_3__["addStylesheet"])('css/styles.css');
}

window.addEventListener('load', init());

/***/ }),

/***/ "./js/services/client.js":
/*!*******************************!*\
  !*** ./js/services/client.js ***!
  \*******************************/
/*! exports provided: setupWebsocket, sendMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupWebsocket", function() { return setupWebsocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessage", function() { return sendMessage; });
var session;
var socket;

function getSessionAndCockies() {
  fetch('https://test.kittyandrew.dev/api/get_session', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }
  }).then(function (response) {
    return response.json();
  }).then(function (json) {
    session = json.session;
    console.log(session);
  });
}

function setupWebsocket(callbackOnMessage) {
  getSessionAndCockies();
  var websockedUrl = 'wss://test.kittyandrew.dev/api/messages';
  socket = new WebSocket(websockedUrl); // Connection opened callback

  socket.addEventListener('open', function (event) {
    console.log(event, session);
    socket.send(JSON.stringify({
      event: 'start',
      session: session
    }));
  });
  socket.addEventListener('close', function (event) {
    console.log('The connection has been closed successfully.');
  }); // Listen for incomming events

  socket.addEventListener('message', function (event) {
    var data = JSON.parse(event.data);

    if (data.event == 'new_message') {
      console.log(data);
      callbackOnMessage(data);
    }
  });
} // Sends messages to the socket

function sendMessage(text) {
  socket.send(JSON.stringify({
    event: 'new_message',
    message: {
      text: text
    }
  }));
}

/***/ }),

/***/ "./js/services/helper.js":
/*!*******************************!*\
  !*** ./js/services/helper.js ***!
  \*******************************/
/*! exports provided: numberToPixel, aplyStylesToElement, addStylesheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberToPixel", function() { return numberToPixel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aplyStylesToElement", function() { return aplyStylesToElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStylesheet", function() { return addStylesheet; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function numberToPixel(number) {
  return number + 'px';
}
function aplyStylesToElement(style, domElement) {
  var _loop = function _loop() {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    if (key == 'mediaQuery') {
      var mediaQuery = window.matchMedia(value.query);
      mediaQuery.addListener(function (x) {
        if (x.matches) {
          aplyStylesToElement(value.style, domElement);
        } else {
          console.log('intersect', intersect(style, value.style));
          aplyStylesToElement(intersect(style, value.style), domElement);
        }
      });

      if (mediaQuery.matches) {
        aplyStylesToElement(value.style, domElement);
      }
    }

    domElement.style[key] = value;
  };

  for (var _i = 0, _Object$entries = Object.entries(style); _i < _Object$entries.length; _i++) {
    _loop();
  }
} //TODO Performance

function intersect(object1, object2) {
  var intersection = {};
  var entries = Object.entries(object1).filter(function (entry) {
    return entry[0] in object2;
  });
  entries.forEach(function (entry) {
    return intersection[entry[0]] = entry[1];
  });
  return intersection;
}

function addStylesheet(fileName) {
  var head = document.head;
  var link = document.createElement('link');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = fileName;
  head.appendChild(link);
}

/***/ }),

/***/ "./js/textInput/textArea.js":
/*!**********************************!*\
  !*** ./js/textInput/textArea.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/helper */ "./js/services/helper.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component */ "./js/component.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var TextArea = /*#__PURE__*/function (_Component) {
  _inherits(TextArea, _Component);

  var _super = _createSuper(TextArea);

  function TextArea(parent, width, height, placeholder, onkeypress) {
    var _this$style;

    var _this;

    _classCallCheck(this, TextArea);

    _this = _super.call(this, parent);
    _this.placeholder = placeholder;
    _this.onkeypress = onkeypress;
    var padding = height / 4;
    _this.divStyle = {
      float: 'left',
      //TODO
      width: Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["numberToPixel"])(200),
      overflow: 'hidden'
    };
    _this.style = (_this$style = {
      height: Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["numberToPixel"])(height - padding * 2),
      width: '100%',
      resize: 'none',
      fontSize: '13px',
      fontWeight: '400',
      padding: Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["numberToPixel"])(padding),
      border: 'none',
      outline: 'none',
      borderBottomLeftRadius: Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["numberToPixel"])(15),
      verticalAlign: 'middle',
      fontFamily: 'Arial, Helvetica, sans-serif'
    }, _defineProperty(_this$style, "fontSize", Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["numberToPixel"])(12)), _defineProperty(_this$style, "lineHeight", Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["numberToPixel"])(20)), _defineProperty(_this$style, "fontWeight", '500'), _defineProperty(_this$style, "fontSmoothing", 'antialiased'), _defineProperty(_this$style, "overflow", 'hidden'), _this$style);

    _this.render();

    return _this;
  }

  _createClass(TextArea, [{
    key: "create",
    value: function create() {
      var _this2 = this;

      this.div = document.createElement('div');
      this.element = document.createElement('textarea');
      this.element.placeholder = this.placeholder;
      this.element.className = 'chat-bot-scrollbar';

      this.element.onkeypress = function (event) {
        return _this2.onkeypress(event);
      };
    }
  }, {
    key: "append",
    value: function append() {
      this.div.appendChild(this.element);
      this.parent.appendChild(this.div);
    }
  }, {
    key: "applyStyle",
    value: function applyStyle() {
      Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["aplyStylesToElement"])(this.style, this.element);
      Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["aplyStylesToElement"])(this.divStyle, this.div);
    }
  }]);

  return TextArea;
}(_component__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (TextArea);

/***/ }),

/***/ "./js/textInput/textButton.js":
/*!************************************!*\
  !*** ./js/textInput/textButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/helper */ "./js/services/helper.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component */ "./js/component.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var TextButton = /*#__PURE__*/function (_Component) {
  _inherits(TextButton, _Component);

  var _super = _createSuper(TextButton);

  function TextButton(parent, height, onMouseUp) {
    var _this;

    _classCallCheck(this, TextButton);

    _this = _super.call(this, parent);
    _this.onMouseUp = onMouseUp;
    var padding = height / 4;
    _this.style = {
      height: Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["numberToPixel"])(height / 2),
      width: Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["numberToPixel"])(height / 2),
      margin: Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["numberToPixel"])(padding),
      cursor: 'pointer',
      color: 'gray',
      borderRadius: Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["numberToPixel"])(height),
      float: 'right',
      border: 'none',
      outline: 'none'
    };

    _this.render();

    return _this;
  }

  _createClass(TextButton, [{
    key: "create",
    value: function create() {
      var _this2 = this;

      this.element = document.createElement('button');

      this.element.onmouseup = function () {
        return _this2.onMouseUp();
      };
    }
  }]);

  return TextButton;
}(_component__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (TextButton);

/***/ }),

/***/ "./js/textInput/textInput.js":
/*!***********************************!*\
  !*** ./js/textInput/textInput.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/helper */ "./js/services/helper.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component */ "./js/component.js");
/* harmony import */ var _textArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./textArea */ "./js/textInput/textArea.js");
/* harmony import */ var _textButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./textButton */ "./js/textInput/textButton.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var TextInput = /*#__PURE__*/function (_Component) {
  _inherits(TextInput, _Component);

  var _super = _createSuper(TextInput);

  function TextInput(parent, width, height, placeholder, messageCallback) {
    var _this;

    _classCallCheck(this, TextInput);

    _this = _super.call(this, parent);
    _this.width = width;
    _this.height = height;
    _this.placeholder = placeholder;
    _this.messageCallback = messageCallback;
    _this.style = {
      bottom: 0,
      position: 'absolute',
      width: '100%'
    };

    _this.render();

    return _this;
  }

  _createClass(TextInput, [{
    key: "create",
    value: function create() {
      this.element = document.createElement('div');
    }
  }, {
    key: "addChildren",
    value: function addChildren() {
      var _this2 = this;

      this.textArea = new _textArea__WEBPACK_IMPORTED_MODULE_2__["default"](this.element, this.width, this.height, this.placeholder, function (event) {
        return _this2.onKeyPress(event);
      });
      this.children.push(this.textArea);
      this.children.push(new _textButton__WEBPACK_IMPORTED_MODULE_3__["default"](this.element, this.height, function () {
        return _this2.onMouseUp();
      }));
    }
  }, {
    key: "onKeyPress",
    value: function onKeyPress(event) {
      if (event.keyCode == 13) {
        event.preventDefault();

        if (this.textArea.element.value) {
          this.onSubmit(this.textArea.element.value);
        }
      }
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp() {
      if (this.textArea.element.value) {
        this.onSubmit(this.textArea.element.value);
      }
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(value) {
      this.textArea.element.value = null;
      this.messageCallback(value);
    }
  }]);

  return TextInput;
}(_component__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (TextInput);

/***/ }),

/***/ "./js/toggle.js":
/*!**********************!*\
  !*** ./js/toggle.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/helper */ "./js/services/helper.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Toggle = /*#__PURE__*/function () {
  function Toggle(parent, props) {
    _classCallCheck(this, Toggle);

    this.active = false;
    this.style = {
      position: 'fixed',
      bottom: Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["numberToPixel"])(props.bottom),
      right: Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["numberToPixel"])(props.right),
      width: Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["numberToPixel"])(props.diameter),
      height: Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["numberToPixel"])(props.diameter),
      borderRadius: Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["numberToPixel"])(props.diameter / 2),
      backgroundColor: props.color,
      boxShadow: '0 0 4px rgba(0, 0, 0, .14), 0 4px 8px rgba(0, 0, 0, .28)'
    };
    this.create(parent, props.callback);
  }

  _createClass(Toggle, [{
    key: "create",
    value: function create(parent, toggleCallback) {
      this.element = document.createElement('div');
      Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["aplyStylesToElement"])(this.style, this.element);
      this.element.onclick = toggleCallback;
      parent.appendChild(this.element);
    }
  }]);

  return Toggle;
}();

/* harmony default export */ __webpack_exports__["default"] = (Toggle);

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./js/script.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./js/script.js */"./js/script.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvY2hhdC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vanMvY29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL2pzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tZXNzYWdlRmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vanMvbWVzc2FnZXMvYnV0dG9uLmpzIiwid2VicGFjazovLy8uL2pzL21lc3NhZ2VzL2J1dHRvbkNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tZXNzYWdlcy9tZXNzYWdlLmpzIiwid2VicGFjazovLy8uL2pzL21lc3NhZ2VzL21lc3NhZ2VXaXRoQnV0dG9ucy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tZXNzYWdlcy90ZXh0LmpzIiwid2VicGFjazovLy8uL2pzL3Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vanMvc2NyaXB0LmpzIiwid2VicGFjazovLy8uL2pzL3NlcnZpY2VzL2NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9zZXJ2aWNlcy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdGV4dElucHV0L3RleHRBcmVhLmpzIiwid2VicGFjazovLy8uL2pzL3RleHRJbnB1dC90ZXh0QnV0dG9uLmpzIiwid2VicGFjazovLy8uL2pzL3RleHRJbnB1dC90ZXh0SW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdG9nZ2xlLmpzIl0sIm5hbWVzIjpbIkNoYXQiLCJwYXJlbnQiLCJwcm9wcyIsImFjdGl2ZSIsImlucHV0SGVpZ2h0IiwiaGVhZGVySGVpZ2h0Iiwic3R5bGUiLCJwb3NpdGlvbiIsImJvdHRvbSIsIm51bWJlclRvUGl4ZWwiLCJyaWdodCIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiZGlzcGxheSIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsIm1lZGlhUXVlcnkiLCJxdWVyeSIsImhlYWRlciIsIkhlYWRlciIsImVsZW1lbnQiLCJib3R0b21NYXJnaW4iLCJiYXNlQ29sb3IiLCJtZXNzYWdlRmllbGQiLCJNZXNzYWdlRmllbGQiLCJjaGlsZHJlbiIsIlRleHRJbnB1dCIsIm1lc3NhZ2UiLCJvblVzZXJNZXNzYWdlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiQ29tcG9uZW50IiwiY3JlYXRlIiwiYXBwbHlTdHlsZSIsImFwcGVuZCIsImFkZENoaWxkcmVuIiwiRXJyb3IiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwicmVtb3ZlIiwicmVuZGVyIiwiYXBseVN0eWxlc1RvRWxlbWVudCIsIkNvbnRhaW5lciIsImxlZnQiLCJ0b3AiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiY2hhdCIsImRpYW1ldGVyVG9nZ2xlIiwiVG9nZ2xlIiwiZGlhbWV0ZXIiLCJjb2xvciIsImNhbGxiYWNrIiwidG9nZ2xlIiwiaWQiLCJtYXJnaW5Cb3R0b20iLCJjbGFzc05hbWUiLCJvdmVyZmxvd1kiLCJzZXR1cFdlYnNvY2tldCIsIm9uQm90TWVzc2FnZSIsInRleHQiLCJpc1VzZXIiLCJwdXNoIiwiTWVzc2FnZSIsImJ1dHRvblRleHRzIiwiY29uc29sZSIsImxvZyIsIk1lc3NhZ2VXaXRoQnV0dG9ucyIsImFkZE1lc3NhZ2UiLCJzY3JvbGxEb3duIiwic2VuZE1lc3NhZ2UiLCJkYXRhIiwiYnV0dG9ucyIsImxlbmd0aCIsImFkZE1lc3NhZ2VXaXRoQnV0dG9ucyIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsIkJ1dHRvbiIsInRleHRDb2xvciIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJmb250V2VpZ2h0IiwiZm9udFNtb290aGluZyIsIm91dGxpbmUiLCJib3JkZXIiLCJtYXJnaW5Ub3AiLCJmbG9hdCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInNldEF0dHJpYnV0ZSIsInRleHRDb250ZW50Iiwib25jbGljayIsIkJ1dHRvbkNvbnRhaW5lciIsImJ1dHRvbk1lc3NhZ2VzIiwianVzdGlmeUNvbnRlbnQiLCJmb3JFYWNoIiwibWFyZ2luIiwib3ZlcmZsb3ciLCJUZXh0IiwiTWFzc2FnZVdpdGhCdXR0b25zIiwiYWRkQ2hpbGRyZW5MYXRlIiwiUm9vdCIsInRhZyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjaGF0Ym90U3R5bGUiLCJiZ0NvbG9yVXNlciIsInRleHRDb2xvclVzZXIiLCJiZ0NvbG9yQm90IiwidGV4dENvbG9yQm90IiwiQ2hhdEJvdCIsIk9iamVjdCIsImVudHJpZXMiLCJrZXkiLCJ2YWx1ZSIsImNvbnRhaW5lciIsImluaXQiLCJhZGRTdHlsZXNoZWV0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNlc3Npb24iLCJzb2NrZXQiLCJnZXRTZXNzaW9uQW5kQ29ja2llcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJjYWxsYmFja09uTWVzc2FnZSIsIndlYnNvY2tlZFVybCIsIldlYlNvY2tldCIsImV2ZW50Iiwic2VuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXJzZSIsIm51bWJlciIsImRvbUVsZW1lbnQiLCJtYXRjaE1lZGlhIiwiYWRkTGlzdGVuZXIiLCJ4IiwibWF0Y2hlcyIsImludGVyc2VjdCIsIm9iamVjdDEiLCJvYmplY3QyIiwiaW50ZXJzZWN0aW9uIiwiZmlsdGVyIiwiZW50cnkiLCJmaWxlTmFtZSIsImhlYWQiLCJsaW5rIiwidHlwZSIsInJlbCIsImhyZWYiLCJUZXh0QXJlYSIsInBsYWNlaG9sZGVyIiwib25rZXlwcmVzcyIsImRpdlN0eWxlIiwicmVzaXplIiwiYm9yZGVyQm90dG9tTGVmdFJhZGl1cyIsInZlcnRpY2FsQWxpZ24iLCJkaXYiLCJUZXh0QnV0dG9uIiwib25Nb3VzZVVwIiwiY3Vyc29yIiwib25tb3VzZXVwIiwibWVzc2FnZUNhbGxiYWNrIiwidGV4dEFyZWEiLCJvbktleVByZXNzIiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0Iiwib25TdWJtaXQiLCJ0b2dnbGVDYWxsYmFjayJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLEk7Ozs7O0FBQ0osZ0JBQVlDLE1BQVosRUFBb0JDLEtBQXBCLEVBQTJCO0FBQUE7O0FBQUE7O0FBQ3pCLDhCQUFNRCxNQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsVUFBS0MsTUFBTCxHQUFjLEtBQWQ7QUFDQSxVQUFLQyxXQUFMLEdBQW1CLEVBQW5CO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixFQUFwQjtBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRLEVBQUUsT0FEQztBQUVYQyxZQUFNLEVBQUVDLHNFQUFhLENBQUNQLEtBQUssQ0FBQ00sTUFBUCxDQUZWO0FBR1hFLFdBQUssRUFBRUQsc0VBQWEsQ0FBQ1AsS0FBSyxDQUFDUSxLQUFQLENBSFQ7QUFJWEMsWUFBTSxFQUFFRixzRUFBYSxDQUFDUCxLQUFLLENBQUNTLE1BQVAsQ0FKVjtBQUtYQyxXQUFLLEVBQUVILHNFQUFhLENBQUNQLEtBQUssQ0FBQ1UsS0FBUCxDQUxUO0FBTVhDLHFCQUFlLEVBQUVYLEtBQUssQ0FBQ1csZUFOWjtBQU9YQyxhQUFPLEVBQUUsTUFQRTtBQVFYQyxlQUFTLEVBQUUsMERBUkE7QUFTWEMsa0JBQVksRUFBRVAsc0VBQWEsQ0FBQyxFQUFELENBVGhCO0FBVVhRLGdCQUFVLEVBQUU7QUFDVkMsYUFBSyxFQUFFLG9CQURHO0FBRVZaLGFBQUssRUFBRTtBQUNMQyxrQkFBUSxFQUFFLFVBREw7QUFFTEMsZ0JBQU0sRUFBRSxDQUZIO0FBR0xFLGVBQUssRUFBRSxDQUhGO0FBSUxDLGdCQUFNLEVBQUUsTUFKSDtBQUtMQyxlQUFLLEVBQUU7QUFMRjtBQUZHO0FBVkQsS0FBYjs7QUFzQkE7O0FBN0J5QjtBQThCMUI7Ozs7a0NBRWE7QUFDWixVQUFNTyxNQUFNLEdBQUcsSUFBSUMsK0NBQUosQ0FBVyxLQUFLQyxPQUFoQixFQUF5QjtBQUN0Q1YsY0FBTSxFQUFFLEtBQUtOLFlBQUwsR0FBb0IsQ0FEVTtBQUV0Q2lCLG9CQUFZLEVBQUUsQ0FGd0I7QUFHdENULHVCQUFlLEVBQUUsS0FBS1gsS0FBTCxDQUFXcUI7QUFIVSxPQUF6QixDQUFmO0FBS0EsVUFBTUMsWUFBWSxHQUFHLElBQUlDLHFEQUFKLENBQ25CLEtBQUtKLE9BRGMsRUFFbkIsS0FBS2hCLFlBRmMsRUFHbkIsS0FBS0QsV0FIYyxDQUFyQjtBQUtBLFdBQUtzQixRQUFMLEdBQWdCLENBQ2RQLE1BRGMsRUFFZEssWUFGYyxFQUdkLElBQUlHLDREQUFKLENBQ0UsS0FBS04sT0FEUCxFQUVFLEtBQUtULEtBRlAsRUFHRSxLQUFLUixXQUhQLEVBSUUsZ0JBSkYsRUFLRSxVQUFDd0IsT0FBRDtBQUFBLGVBQWFKLFlBQVksQ0FBQ0ssYUFBYixDQUEyQkQsT0FBM0IsQ0FBYjtBQUFBLE9BTEYsQ0FIYyxDQUFoQjtBQVdEOzs7NkJBRVE7QUFDUCxXQUFLUCxPQUFMLEdBQWVTLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFmO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQUksS0FBSzVCLE1BQVQsRUFBaUI7QUFDZixhQUFLa0IsT0FBTCxDQUFhZixLQUFiLENBQW1CUSxPQUFuQixHQUE2QixNQUE3QjtBQUNBLGFBQUtYLE1BQUwsR0FBYyxLQUFkO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsYUFBS2tCLE9BQUwsQ0FBYWYsS0FBYixDQUFtQlEsT0FBbkIsR0FBNkIsT0FBN0I7QUFDQSxhQUFLWCxNQUFMLEdBQWMsSUFBZDtBQUNEO0FBQ0Y7Ozs7RUFyRWdCNkIsa0Q7O0FBd0VKaEMsbUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlFQTs7SUFDTWdDLFM7QUFNSixxQkFBWS9CLE1BQVosRUFBb0I7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSxzQ0FIVCxFQUdTOztBQUFBLG1DQUZaLEVBRVk7O0FBQ2xCLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7OzZCQUVRO0FBQ1AsV0FBS2dDLE1BQUw7QUFDQSxXQUFLQyxVQUFMO0FBQ0EsV0FBS0MsTUFBTDtBQUNBLFdBQUtDLFdBQUw7QUFDRDs7OzZCQUVRO0FBQ1AsWUFBTSxJQUFJQyxLQUFKLENBQVUsd0JBQVYsQ0FBTjtBQUNEOzs7NkJBRVE7QUFDUCxXQUFLcEMsTUFBTCxDQUFZcUMsV0FBWixDQUF3QixLQUFLakIsT0FBN0I7QUFDRDs7OzZCQUVRO0FBQ1BwQixZQUFNLENBQUNzQyxXQUFQLENBQW1CLEtBQUtsQixPQUF4QjtBQUNEOzs7NkJBRVE7QUFDUCxXQUFLbUIsTUFBTDtBQUNBLFdBQUtDLE1BQUw7QUFDRCxLLENBRUQ7Ozs7a0NBQ2MsQ0FBRTs7O2lDQUVIO0FBQ1hDLGtGQUFtQixDQUFDLEtBQUtwQyxLQUFOLEVBQWEsS0FBS2UsT0FBbEIsQ0FBbkI7QUFDRDs7Ozs7O0FBR1lXLHdFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7O0lBRU1XLFM7Ozs7O0FBQ0oscUJBQVkxQyxNQUFaLEVBQW9CQyxLQUFwQixFQUEyQjtBQUFBOztBQUFBOztBQUN6Qiw4QkFBTUQsTUFBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFVBQUtJLEtBQUwsR0FBYTtBQUNYQyxjQUFRLEVBQUUsT0FEQztBQUVYRyxXQUFLLEVBQUUsQ0FGSTtBQUdYRixZQUFNLEVBQUUsQ0FIRztBQUlYUyxnQkFBVSxFQUFFO0FBQ1ZDLGFBQUssRUFBRSxvQkFERztBQUVWWixhQUFLLEVBQUU7QUFDTHNDLGNBQUksRUFBRSxDQUREO0FBRUxDLGFBQUcsRUFBRSxDQUZBO0FBR0x0QyxrQkFBUSxFQUFFLE9BSEw7QUFJTEssZUFBSyxFQUFFLE1BSkY7QUFLTEQsZ0JBQU0sRUFBRSxNQUxIO0FBTUxtQyxtQkFBUyxFQUFFLFlBTk47QUFPTEMsaUJBQU8sRUFBRTtBQVBKO0FBRkc7QUFKRCxLQUFiOztBQWtCQTs7QUFyQnlCO0FBc0IxQjs7OztrQ0FFYTtBQUNaLFVBQUlDLElBQUksR0FBRyxJQUFJaEQsNkNBQUosQ0FBUyxLQUFLcUIsT0FBZCxFQUF1QjtBQUNoQ2IsY0FBTSxFQUFFLEtBQUtOLEtBQUwsQ0FBV00sTUFEYTtBQUVoQ0UsYUFBSyxFQUFFLEtBQUtSLEtBQUwsQ0FBV1EsS0FBWCxHQUFtQixLQUFLUixLQUFMLENBQVcrQyxjQUFYLEdBQTRCLEdBRnRCO0FBR2hDdEMsY0FBTSxFQUFFLEtBQUtULEtBQUwsQ0FBV1MsTUFIYTtBQUloQ0MsYUFBSyxFQUFFLEtBQUtWLEtBQUwsQ0FBV1UsS0FKYztBQUtoQ0MsdUJBQWUsRUFBRSxLQUFLWCxLQUFMLENBQVdXLGVBTEk7QUFNaENVLGlCQUFTLEVBQUUsS0FBS3JCLEtBQUwsQ0FBV3FCO0FBTlUsT0FBdkIsQ0FBWDtBQVFBLFdBQUtHLFFBQUwsR0FBZ0IsQ0FDZHNCLElBRGMsRUFFZCxJQUFJRSwrQ0FBSixDQUFXLEtBQUs3QixPQUFoQixFQUF5QjtBQUN2QmIsY0FBTSxFQUFFLEtBQUtOLEtBQUwsQ0FBV00sTUFESTtBQUV2QkUsYUFBSyxFQUFFLEtBQUtSLEtBQUwsQ0FBV1EsS0FGSztBQUd2QnlDLGdCQUFRLEVBQUUsS0FBS2pELEtBQUwsQ0FBVytDLGNBSEU7QUFJdkJHLGFBQUssRUFBRSxLQUFLbEQsS0FBTCxDQUFXcUIsU0FKSztBQUt2QjhCLGdCQUFRLEVBQUU7QUFBQSxpQkFBTUwsSUFBSSxDQUFDTSxNQUFMLEVBQU47QUFBQTtBQUxhLE9BQXpCLENBRmMsQ0FBaEI7QUFVRDs7OzZCQUVRO0FBQ1AsV0FBS2pDLE9BQUwsR0FBZVMsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWY7QUFDQSxXQUFLVixPQUFMLENBQWFrQyxFQUFiLEdBQWtCLFdBQWxCO0FBQ0Q7Ozs7RUFqRHFCdkIsa0Q7O0FBb0RUVyx3RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUNBOztJQUVNdkIsTTs7Ozs7QUFDSixrQkFBWW5CLE1BQVosRUFBb0JDLEtBQXBCLEVBQTJCO0FBQUE7O0FBQUE7O0FBQ3pCLDhCQUFNRCxNQUFOO0FBQ0EsVUFBS0ssS0FBTCxHQUFhO0FBQ1hLLFlBQU0sRUFBRUYsc0VBQWEsQ0FBQ1AsS0FBSyxDQUFDUyxNQUFOLEdBQWVULEtBQUssQ0FBQ29CLFlBQXRCLENBRFY7QUFFWFQscUJBQWUsRUFBRVgsS0FBSyxDQUFDVyxlQUZaO0FBR1hHLGtCQUFZLEVBQUUsZUFISDtBQUlYd0Msa0JBQVksRUFBRS9DLHNFQUFhLENBQUNQLEtBQUssQ0FBQ29CLFlBQVA7QUFKaEIsS0FBYjs7QUFNQTs7QUFSeUI7QUFTMUI7Ozs7NkJBRVE7QUFDUCxXQUFLRCxPQUFMLEdBQWVTLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFmO0FBQ0EsV0FBS1YsT0FBTCxDQUFhb0MsU0FBYixHQUF5QixRQUF6QjtBQUNEOzs7O0VBZmtCekIsa0Q7O0FBa0JOWixxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNSyxZOzs7OztBQUNKLHdCQUFZeEIsTUFBWixFQUFvQjRDLEdBQXBCLEVBQXlCckMsTUFBekIsRUFBaUM7QUFBQTs7QUFBQTs7QUFDL0IsOEJBQU1QLE1BQU47QUFDQSxVQUFLSyxLQUFMLEdBQWE7QUFDWEMsY0FBUSxFQUFFLFVBREM7QUFFWEMsWUFBTSxFQUFFQyxzRUFBYSxDQUFDRCxNQUFELENBRlY7QUFHWG9DLFVBQUksRUFBRSxHQUhLO0FBSVhsQyxXQUFLLEVBQUUsR0FKSTtBQUtYbUMsU0FBRyxFQUFFcEMsc0VBQWEsQ0FBQ29DLEdBQUQsQ0FMUDtBQU1YYSxlQUFTLEVBQUU7QUFOQSxLQUFiOztBQVNBOztBQUNBQywyRUFBYyxDQUFDLFVBQUMvQixPQUFEO0FBQUEsYUFBYSxNQUFLZ0MsWUFBTCxDQUFrQmhDLE9BQWxCLENBQWI7QUFBQSxLQUFELENBQWQ7QUFaK0I7QUFhaEM7Ozs7NkJBRVE7QUFDUCxXQUFLUCxPQUFMLEdBQWVTLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFmO0FBQ0EsV0FBS1YsT0FBTCxDQUFhb0MsU0FBYixHQUF5QixvQkFBekI7QUFDRDs7OytCQUVVSSxJLEVBQU1DLE0sRUFBUTtBQUN2QixXQUFLcEMsUUFBTCxDQUFjcUMsSUFBZCxDQUFtQixJQUFJQyx5REFBSixDQUFZLEtBQUszQyxPQUFqQixFQUEwQndDLElBQTFCLEVBQWdDQyxNQUFoQyxDQUFuQjtBQUNEOzs7MENBRXFCRCxJLEVBQU1DLE0sRUFBUUcsVyxFQUFhO0FBQUE7O0FBQy9DQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsV0FBWjtBQUNBLFdBQUt2QyxRQUFMLENBQWNxQyxJQUFkLENBQ0UsSUFBSUssb0VBQUosQ0FBdUIsS0FBSy9DLE9BQTVCLEVBQXFDd0MsSUFBckMsRUFBMkNDLE1BQTNDLEVBQW1ERyxXQUFuRCxFQUFnRSxVQUFDSixJQUFEO0FBQUEsZUFDOUQsTUFBSSxDQUFDaEMsYUFBTCxDQUFtQmdDLElBQW5CLENBRDhEO0FBQUEsT0FBaEUsQ0FERjtBQUtEOzs7a0NBRWFqQyxPLEVBQVM7QUFDckIsV0FBS3lDLFVBQUwsQ0FBZ0J6QyxPQUFoQixFQUF5QixJQUF6QjtBQUNBLFdBQUswQyxVQUFMO0FBQ0FDLDBFQUFXLENBQUMzQyxPQUFELENBQVg7QUFDRDs7O2lDQUVZNEMsSSxFQUFNO0FBQ2pCTixhQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCSyxJQUE3Qjs7QUFDQSxVQUFJQSxJQUFJLENBQUNDLE9BQUwsQ0FBYUMsTUFBakIsRUFBeUI7QUFDdkIsYUFBS0MscUJBQUwsQ0FBMkJILElBQUksQ0FBQzVDLE9BQUwsQ0FBYWlDLElBQXhDLEVBQThDLEtBQTlDLEVBQXFEVyxJQUFJLENBQUNDLE9BQTFEO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS0osVUFBTCxDQUFnQkcsSUFBSSxDQUFDNUMsT0FBTCxDQUFhaUMsSUFBN0IsRUFBbUMsS0FBbkM7QUFDRDs7QUFDRCxXQUFLUyxVQUFMO0FBQ0Q7OzsrQkFFVVQsSSxFQUFNQyxNLEVBQVE7QUFDdkIsV0FBS3BDLFFBQUwsQ0FBY3FDLElBQWQsQ0FBbUIsSUFBSUMseURBQUosQ0FBWSxLQUFLM0MsT0FBakIsRUFBMEJ3QyxJQUExQixFQUFnQ0MsTUFBaEMsQ0FBbkI7QUFDRDs7O2lDQUVZO0FBQ1gsV0FBS3pDLE9BQUwsQ0FBYXVELFNBQWIsR0FBeUIsS0FBS3ZELE9BQUwsQ0FBYXdELFlBQXRDO0FBQ0Q7Ozs7RUF4RHdCN0Msa0Q7O0FBMkRaUCwyRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVBO0FBQ0E7O0lBRU1xRCxNOzs7OztBQUNKLGtCQUFZN0UsTUFBWixFQUFvQjRELElBQXBCLEVBQTBCbkQsS0FBMUIsRUFBaUNHLGVBQWpDLEVBQWtEa0UsU0FBbEQsRUFBNkQxQixRQUE3RCxFQUF1RTtBQUFBOztBQUFBOztBQUNyRSw4QkFBTXBELE1BQU47QUFFQSxVQUFLb0QsUUFBTCxHQUFnQkEsUUFBaEI7QUFFQSxVQUFLL0MsS0FBTCxHQUFhO0FBQ1hPLHFCQUFlLEVBQUVBLGVBRE47QUFFWEcsa0JBQVksRUFBRVAsc0VBQWEsQ0FBQyxDQUFELENBRmhCO0FBR1gyQyxXQUFLLEVBQUUyQixTQUhJO0FBSVhqRSxhQUFPLEVBQUUsY0FKRTtBQUtYaUMsYUFBTyxFQUFFdEMsc0VBQWEsQ0FBQyxDQUFELENBTFg7QUFNWHVFLGdCQUFVLEVBQUUsOEJBTkQ7QUFPWEMsY0FBUSxFQUFFeEUsc0VBQWEsQ0FBQyxFQUFELENBUFo7QUFRWHlFLGdCQUFVLEVBQUV6RSxzRUFBYSxDQUFDLEVBQUQsQ0FSZDtBQVNYMEUsZ0JBQVUsRUFBRSxNQVREO0FBVVhDLG1CQUFhLEVBQUUsYUFWSjtBQVdYQyxhQUFPLEVBQUUsTUFYRTtBQVlYQyxZQUFNLEVBQUUsTUFaRztBQWFYQyxlQUFTLEVBQUU5RSxzRUFBYSxDQUFDLEVBQUQ7QUFiYixLQUFiOztBQWdCQSxRQUFJQyxLQUFKLEVBQVc7QUFDVCxZQUFLSixLQUFMLENBQVdrRixLQUFYLEdBQW1CLE9BQW5CO0FBQ0EsWUFBS2xGLEtBQUwsQ0FBV21GLFVBQVgsR0FBd0IsTUFBeEI7QUFDRCxLQUhELE1BR087QUFDTCxZQUFLbkYsS0FBTCxDQUFXb0YsV0FBWCxHQUF5QixNQUF6QjtBQUNEOztBQUVELFVBQUs3QixJQUFMLEdBQVlBLElBQVo7O0FBRUEsVUFBS3BCLE1BQUw7O0FBOUJxRTtBQStCdEU7Ozs7NkJBRVE7QUFBQTs7QUFDUCxXQUFLcEIsT0FBTCxHQUFlUyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtBQUNBLFdBQUtWLE9BQUwsQ0FBYXNFLFlBQWIsQ0FBMEIsTUFBMUIsRUFBa0MsUUFBbEM7QUFDQSxXQUFLdEUsT0FBTCxDQUFhdUUsV0FBYixHQUEyQixLQUFLL0IsSUFBaEM7O0FBQ0EsV0FBS3hDLE9BQUwsQ0FBYXdFLE9BQWIsR0FBdUI7QUFBQSxlQUFNLE1BQUksQ0FBQ3hDLFFBQUwsQ0FBYyxNQUFJLENBQUNRLElBQW5CLENBQU47QUFBQSxPQUF2QjtBQUNEOzs7O0VBdkNrQjdCLGtEOztBQTBDTjhDLHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7QUFDQTs7SUFFTWdCLGU7Ozs7O0FBQ0osMkJBQ0U3RixNQURGLEVBRUVTLEtBRkYsRUFHRUcsZUFIRixFQUlFa0UsU0FKRixFQUtFZ0IsY0FMRixFQU1FMUMsUUFORixFQU9FO0FBQUE7O0FBQUE7O0FBQ0EsOEJBQU1wRCxNQUFOO0FBRUEsVUFBS29ELFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsVUFBSzBDLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0EsVUFBS3JGLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFVBQUtHLGVBQUwsR0FBdUJBLGVBQXZCO0FBQ0EsVUFBS2tFLFNBQUwsR0FBaUJBLFNBQWpCO0FBRUEsVUFBS3pFLEtBQUwsR0FBYTtBQUNYUSxhQUFPLEVBQUUsTUFERTtBQUVYa0Ysb0JBQWMsRUFBRTtBQUZMLEtBQWI7O0FBS0EsVUFBS3ZELE1BQUw7O0FBZEE7QUFlRDs7OztrQ0FFYTtBQUFBOztBQUNaLFVBQUlnQyxPQUFPLEdBQUcsRUFBZDtBQUNBLFdBQUtzQixjQUFMLENBQW9CRSxPQUFwQixDQUE0QixVQUFDckUsT0FBRCxFQUFhO0FBQ3ZDNkMsZUFBTyxDQUFDVixJQUFSLENBQ0UsSUFBSWUsK0NBQUosQ0FDRSxNQUFJLENBQUN6RCxPQURQLEVBRUVPLE9BQU8sQ0FBQ2lDLElBRlYsRUFHRSxNQUFJLENBQUNuRCxLQUhQLEVBSUUsTUFBSSxDQUFDRyxlQUpQLEVBS0UsTUFBSSxDQUFDa0UsU0FMUCxFQU1FLFVBQUNsQixJQUFEO0FBQUEsaUJBQVUsTUFBSSxDQUFDUixRQUFMLENBQWNRLElBQWQsQ0FBVjtBQUFBLFNBTkYsQ0FERjtBQVVELE9BWEQ7QUFZQSxXQUFLbkMsUUFBTCxHQUFnQitDLE9BQWhCO0FBQ0Q7Ozs2QkFFUTtBQUNQLFdBQUtwRCxPQUFMLEdBQWVTLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFmO0FBQ0Q7Ozs7RUE1QzJCQyxrRDs7QUErQ2Y4RCw4RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUNBO0FBQ0E7O0lBRU05QixPOzs7OztBQUNKLG1CQUFZL0QsTUFBWixFQUFvQjRELElBQXBCLEVBQTBCQyxNQUExQixFQUFrQztBQUFBOztBQUFBOztBQUNoQyw4QkFBTTdELE1BQU47QUFDQSxVQUFLNkQsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsVUFBS0QsSUFBTCxHQUFZQSxJQUFaOztBQUNBLFFBQUksTUFBS0MsTUFBVCxFQUFpQjtBQUNmLFlBQUtqRCxlQUFMLEdBQXVCLFNBQXZCO0FBQ0EsWUFBS2tFLFNBQUwsR0FBaUIsU0FBakI7QUFDRCxLQUhELE1BR087QUFDTCxZQUFLbEUsZUFBTCxHQUF1QixTQUF2QjtBQUNBLFlBQUtrRSxTQUFMLEdBQWlCLFNBQWpCO0FBQ0Q7O0FBRUQsVUFBS3pFLEtBQUwsR0FBYTtBQUNYNEYsWUFBTSxFQUFFekYsc0VBQWEsQ0FBQyxDQUFELENBRFY7QUFFWCtDLGtCQUFZLEVBQUUvQyxzRUFBYSxDQUFDLEVBQUQsQ0FGaEI7QUFHWDBGLGNBQVEsRUFBRTtBQUhDLEtBQWI7O0FBTUEsVUFBSzFELE1BQUw7O0FBbEJnQztBQW1CakM7Ozs7a0NBRWE7QUFDWixXQUFLZixRQUFMLENBQWNxQyxJQUFkLENBQ0UsSUFBSXFDLDZDQUFKLENBQ0UsS0FBSy9FLE9BRFAsRUFFRSxLQUFLd0MsSUFGUCxFQUdFLEtBQUtuRCxLQUhQLEVBSUUsS0FBS0csZUFKUCxFQUtFLEtBQUtrRSxTQUxQLENBREY7QUFTRDs7OzZCQUVRO0FBQ1AsV0FBSzFELE9BQUwsR0FBZVMsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWY7QUFDRDs7OztFQXBDbUJDLGtEOztBQXVDUGdDLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7Q0FHQTs7SUFDTXFDLGtCOzs7OztBQUNKLDhCQUFZcEcsTUFBWixFQUFvQjRELElBQXBCLEVBQTBCQyxNQUExQixFQUFrQ0csV0FBbEMsRUFBK0NaLFFBQS9DLEVBQXlEO0FBQUE7O0FBQUE7O0FBQ3ZELDhCQUFNcEQsTUFBTixFQUFjNEQsSUFBZCxFQUFvQkMsTUFBcEI7QUFFQSxVQUFLRyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLFVBQUtaLFFBQUwsR0FBZ0JBLFFBQWhCOztBQUVBLFVBQUtpRCxlQUFMOztBQU51RDtBQU94RDs7OztzQ0FFaUI7QUFBQTs7QUFDaEIsV0FBSzVFLFFBQUwsQ0FBY3FDLElBQWQsQ0FDRSxJQUFJK0Isd0RBQUosQ0FDRSxLQUFLekUsT0FEUCxFQUVFLEtBQUt5QyxNQUZQLEVBR0UsS0FBS2pELGVBSFAsRUFJRSxLQUFLa0UsU0FKUCxFQUtFLEtBQUtkLFdBTFAsRUFNRSxVQUFDSixJQUFEO0FBQUEsZUFBVSxNQUFJLENBQUNSLFFBQUwsQ0FBY1EsSUFBZCxDQUFWO0FBQUEsT0FORixDQURGO0FBVUQ7Ozs7RUFyQjhCRyxnRDs7QUF3QmxCcUMsaUZBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7O0lBRU1ELEk7Ozs7O0FBTUosZ0JBQVluRyxNQUFaLEVBQW9CNEQsSUFBcEIsRUFBMEJuRCxLQUExQixFQUFpQ0csZUFBakMsRUFBa0RrRSxTQUFsRCxFQUE2RDtBQUFBOztBQUFBOztBQUMzRCw4QkFBTTlFLE1BQU47O0FBRDJEOztBQUFBOztBQUFBLDJEQUZ0RCxFQUVzRDs7QUFHM0QsVUFBS0ssS0FBTCxHQUFhO0FBQ1hPLHFCQUFlLEVBQUVBLGVBRE47QUFFWEcsa0JBQVksRUFBRVAsc0VBQWEsQ0FBQyxDQUFELENBRmhCO0FBR1gyQyxXQUFLLEVBQUUyQixTQUhJO0FBSVhoQyxhQUFPLEVBQUV0QyxzRUFBYSxDQUFDLEVBQUQsQ0FKWDtBQUtYSyxhQUFPLEVBQUUsY0FMRTtBQU1Ya0UsZ0JBQVUsRUFBRSw4QkFORDtBQU9YQyxjQUFRLEVBQUV4RSxzRUFBYSxDQUFDLEVBQUQsQ0FQWjtBQVFYeUUsZ0JBQVUsRUFBRXpFLHNFQUFhLENBQUMsRUFBRCxDQVJkO0FBU1gwRSxnQkFBVSxFQUFFLEtBVEQ7QUFVWEMsbUJBQWEsRUFBRTtBQVZKLEtBQWI7O0FBYUEsUUFBSTFFLEtBQUosRUFBVztBQUNULFlBQUtKLEtBQUwsQ0FBV2tGLEtBQVgsR0FBbUIsT0FBbkI7QUFDQSxZQUFLbEYsS0FBTCxDQUFXbUYsVUFBWCxHQUF3QixNQUF4QjtBQUNELEtBSEQsTUFHTztBQUNMLFlBQUtuRixLQUFMLENBQVdvRixXQUFYLEdBQXlCLE1BQXpCO0FBQ0Q7O0FBRUQsVUFBSzdCLElBQUwsR0FBWUEsSUFBWjs7QUFFQSxVQUFLcEIsTUFBTDs7QUF6QjJEO0FBMEI1RDs7Ozs2QkFFUTtBQUNQLFdBQUtwQixPQUFMLEdBQWVTLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFmO0FBQ0EsV0FBS1YsT0FBTCxDQUFhdUUsV0FBYixHQUEyQixLQUFLL0IsSUFBaEM7QUFDRDs7OztFQXJDZ0I3QixrRDs7QUF3Q0pvRSxtRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDM0NNRyxJO0FBQ0osZ0JBQVlDLEdBQVosRUFBaUI7QUFBQTs7QUFDZixTQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFFQSxTQUFLdkUsTUFBTDtBQUNEOzs7OzZCQUVRO0FBQ1AsV0FBS1osT0FBTCxHQUFlUyxRQUFRLENBQUMyRSxzQkFBVCxDQUFnQyxLQUFLRCxHQUFyQyxFQUEwQyxDQUExQyxDQUFmO0FBQ0Q7Ozs7OztBQUdZRCxtRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1HLFlBQVksR0FBRztBQUNuQmxHLFFBQU0sRUFBRSxFQURXO0FBRW5CRSxPQUFLLEVBQUUsRUFGWTtBQUduQkUsT0FBSyxFQUFFLEdBSFk7QUFJbkJELFFBQU0sRUFBRSxHQUpXO0FBS25CTixjQUFZLEVBQUUsRUFMSztBQU1uQkQsYUFBVyxFQUFFLEVBTk07QUFPbkI2QyxnQkFBYyxFQUFFLEVBUEc7QUFRbkIxQixXQUFTLEVBQUUsU0FSUTtBQVNuQlYsaUJBQWUsRUFBRSxTQVRFOztBQVVuQixNQUFJOEYsV0FBSixHQUFrQjtBQUNoQixXQUFPLEtBQUtwRixTQUFaO0FBQ0QsR0Faa0I7O0FBYW5CcUYsZUFBYSxFQUFFLFNBYkk7QUFjbkJDLFlBQVUsRUFBRSxTQWRPO0FBZW5CQyxjQUFZLEVBQUU7QUFmSyxDQUFyQjs7SUFrQk1DLE8sR0FHSixtQkFBYztBQUFBOztBQUFBLG9DQUZILEVBRUc7O0FBQ1o7QUFDQSxxQ0FBMkJDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlUCxZQUFmLENBQTNCLHFDQUF5RDtBQUFBO0FBQUEsUUFBN0NRLEdBQTZDO0FBQUEsUUFBeENDLEtBQXdDOztBQUN2RCxTQUFLRCxHQUFMLElBQVlDLEtBQVo7QUFDRDs7QUFDRCxPQUFLOUYsT0FBTCxHQUFlLElBQUlrRiw2Q0FBSixDQUFTLFVBQVQsRUFBcUJsRixPQUFwQztBQUNBLE9BQUsrRixTQUFMLEdBQWlCLElBQUl6RSxrREFBSixDQUFjLEtBQUt0QixPQUFuQixFQUE0QjtBQUMzQ2IsVUFBTSxFQUFFLEtBQUtBLE1BRDhCO0FBRTNDRSxTQUFLLEVBQUUsS0FBS0EsS0FGK0I7QUFHM0NDLFVBQU0sRUFBRSxLQUFLQSxNQUg4QjtBQUkzQ0MsU0FBSyxFQUFFLEtBQUtBLEtBSitCO0FBSzNDQyxtQkFBZSxFQUFFLEtBQUtBLGVBTHFCO0FBTTNDb0Msa0JBQWMsRUFBRSxLQUFLQSxjQU5zQjtBQU8zQzFCLGFBQVMsRUFBRSxLQUFLQTtBQVAyQixHQUE1QixDQUFqQjtBQVNELEM7O0FBR0gsU0FBUzhGLElBQVQsR0FBZ0I7QUFDZCxNQUFJTixPQUFKO0FBQ0FPLHdFQUFhLENBQUMsZ0JBQUQsQ0FBYjtBQUNEOztBQUVEQyxNQUFNLENBQUNDLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDSCxJQUFJLEVBQXBDLEU7Ozs7Ozs7Ozs7OztBQ25EQTtBQUFBO0FBQUE7QUFBQSxJQUFJSSxPQUFKO0FBQ0EsSUFBSUMsTUFBSjs7QUFFQSxTQUFTQyxvQkFBVCxHQUFnQztBQUM5QkMsT0FBSyxDQUFDLDhDQUFELEVBQWlEO0FBQ3BEQyxVQUFNLEVBQUUsS0FENEM7QUFFcERDLFdBQU8sRUFBRTtBQUNQLHNCQUFnQjtBQURUO0FBRjJDLEdBQWpELENBQUwsQ0FNR0MsSUFOSCxDQU1RLFVBQUNDLFFBQUQ7QUFBQSxXQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLEdBTlIsRUFPR0YsSUFQSCxDQU9RLFVBQUNFLElBQUQsRUFBVTtBQUNkUixXQUFPLEdBQUdRLElBQUksQ0FBQ1IsT0FBZjtBQUNBdkQsV0FBTyxDQUFDQyxHQUFSLENBQVlzRCxPQUFaO0FBQ0QsR0FWSDtBQVdEOztBQUVNLFNBQVM5RCxjQUFULENBQXdCdUUsaUJBQXhCLEVBQTJDO0FBQ2hEUCxzQkFBb0I7QUFFcEIsTUFBTVEsWUFBWSxHQUFHLHlDQUFyQjtBQUNBVCxRQUFNLEdBQUcsSUFBSVUsU0FBSixDQUFjRCxZQUFkLENBQVQsQ0FKZ0QsQ0FLaEQ7O0FBQ0FULFFBQU0sQ0FBQ0YsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsVUFBVWEsS0FBVixFQUFpQjtBQUMvQ25FLFdBQU8sQ0FBQ0MsR0FBUixDQUFZa0UsS0FBWixFQUFtQlosT0FBbkI7QUFDQUMsVUFBTSxDQUFDWSxJQUFQLENBQVlDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUVILFdBQUssRUFBRSxPQUFUO0FBQWtCWixhQUFPLEVBQUVBO0FBQTNCLEtBQWYsQ0FBWjtBQUNELEdBSEQ7QUFLQUMsUUFBTSxDQUFDRixnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFDYSxLQUFELEVBQVc7QUFDMUNuRSxXQUFPLENBQUNDLEdBQVIsQ0FBWSw4Q0FBWjtBQUNELEdBRkQsRUFYZ0QsQ0FlaEQ7O0FBQ0F1RCxRQUFNLENBQUNGLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLFVBQVVhLEtBQVYsRUFBaUI7QUFDbEQsUUFBSTdELElBQUksR0FBRytELElBQUksQ0FBQ0UsS0FBTCxDQUFXSixLQUFLLENBQUM3RCxJQUFqQixDQUFYOztBQUNBLFFBQUlBLElBQUksQ0FBQzZELEtBQUwsSUFBYyxhQUFsQixFQUFpQztBQUMvQm5FLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSyxJQUFaO0FBQ0EwRCx1QkFBaUIsQ0FBQzFELElBQUQsQ0FBakI7QUFDRDtBQUNGLEdBTkQ7QUFPRCxDLENBRUQ7O0FBQ08sU0FBU0QsV0FBVCxDQUFxQlYsSUFBckIsRUFBMkI7QUFDaEM2RCxRQUFNLENBQUNZLElBQVAsQ0FDRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBRUgsU0FBSyxFQUFFLGFBQVQ7QUFBd0J6RyxXQUFPLEVBQUU7QUFBRWlDLFVBQUksRUFBRUE7QUFBUjtBQUFqQyxHQUFmLENBREY7QUFHRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NNLFNBQVNwRCxhQUFULENBQXVCaUksTUFBdkIsRUFBK0I7QUFDcEMsU0FBT0EsTUFBTSxHQUFHLElBQWhCO0FBQ0Q7QUFFTSxTQUFTaEcsbUJBQVQsQ0FBNkJwQyxLQUE3QixFQUFvQ3FJLFVBQXBDLEVBQWdEO0FBQUE7QUFBQTtBQUFBLFFBQ3pDekIsR0FEeUM7QUFBQSxRQUNwQ0MsS0FEb0M7O0FBRW5ELFFBQUlELEdBQUcsSUFBSSxZQUFYLEVBQXlCO0FBQ3ZCLFVBQU1qRyxVQUFVLEdBQUdzRyxNQUFNLENBQUNxQixVQUFQLENBQWtCekIsS0FBSyxDQUFDakcsS0FBeEIsQ0FBbkI7QUFDQUQsZ0JBQVUsQ0FBQzRILFdBQVgsQ0FBdUIsVUFBQ0MsQ0FBRCxFQUFPO0FBQzVCLFlBQUlBLENBQUMsQ0FBQ0MsT0FBTixFQUFlO0FBQ2JyRyw2QkFBbUIsQ0FBQ3lFLEtBQUssQ0FBQzdHLEtBQVAsRUFBY3FJLFVBQWQsQ0FBbkI7QUFDRCxTQUZELE1BRU87QUFDTHpFLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCNkUsU0FBUyxDQUFDMUksS0FBRCxFQUFRNkcsS0FBSyxDQUFDN0csS0FBZCxDQUFsQztBQUNBb0MsNkJBQW1CLENBQUNzRyxTQUFTLENBQUMxSSxLQUFELEVBQVE2RyxLQUFLLENBQUM3RyxLQUFkLENBQVYsRUFBZ0NxSSxVQUFoQyxDQUFuQjtBQUNEO0FBQ0YsT0FQRDs7QUFRQSxVQUFJMUgsVUFBVSxDQUFDOEgsT0FBZixFQUF3QjtBQUN0QnJHLDJCQUFtQixDQUFDeUUsS0FBSyxDQUFDN0csS0FBUCxFQUFjcUksVUFBZCxDQUFuQjtBQUNEO0FBQ0Y7O0FBQ0RBLGNBQVUsQ0FBQ3JJLEtBQVgsQ0FBaUI0RyxHQUFqQixJQUF3QkMsS0FBeEI7QUFoQm1EOztBQUNyRCxxQ0FBMkJILE1BQU0sQ0FBQ0MsT0FBUCxDQUFlM0csS0FBZixDQUEzQixxQ0FBa0Q7QUFBQTtBQWdCakQ7QUFDRixDLENBRUQ7O0FBQ0EsU0FBUzBJLFNBQVQsQ0FBbUJDLE9BQW5CLEVBQTRCQyxPQUE1QixFQUFxQztBQUNuQyxNQUFNQyxZQUFZLEdBQUcsRUFBckI7QUFDQSxNQUFNbEMsT0FBTyxHQUFHRCxNQUFNLENBQUNDLE9BQVAsQ0FBZWdDLE9BQWYsRUFBd0JHLE1BQXhCLENBQ2QsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQyxDQUFELENBQUwsSUFBWUgsT0FBdkI7QUFBQSxHQURjLENBQWhCO0FBR0FqQyxTQUFPLENBQUNoQixPQUFSLENBQWdCLFVBQUNvRCxLQUFEO0FBQUEsV0FBWUYsWUFBWSxDQUFDRSxLQUFLLENBQUMsQ0FBRCxDQUFOLENBQVosR0FBeUJBLEtBQUssQ0FBQyxDQUFELENBQTFDO0FBQUEsR0FBaEI7QUFDQSxTQUFPRixZQUFQO0FBQ0Q7O0FBRU0sU0FBUzdCLGFBQVQsQ0FBdUJnQyxRQUF2QixFQUFpQztBQUN0QyxNQUFJQyxJQUFJLEdBQUd6SCxRQUFRLENBQUN5SCxJQUFwQjtBQUNBLE1BQUlDLElBQUksR0FBRzFILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFYO0FBRUF5SCxNQUFJLENBQUNDLElBQUwsR0FBWSxVQUFaO0FBQ0FELE1BQUksQ0FBQ0UsR0FBTCxHQUFXLFlBQVg7QUFDQUYsTUFBSSxDQUFDRyxJQUFMLEdBQVlMLFFBQVo7QUFFQUMsTUFBSSxDQUFDakgsV0FBTCxDQUFpQmtILElBQWpCO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NEO0FBQ0E7O0lBRU1JLFE7Ozs7O0FBQ0osb0JBQVkzSixNQUFaLEVBQW9CVyxLQUFwQixFQUEyQkQsTUFBM0IsRUFBbUNrSixXQUFuQyxFQUFnREMsVUFBaEQsRUFBNEQ7QUFBQTs7QUFBQTs7QUFBQTs7QUFDMUQsOEJBQU03SixNQUFOO0FBRUEsVUFBSzRKLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxRQUFNL0csT0FBTyxHQUFHcEMsTUFBTSxHQUFHLENBQXpCO0FBQ0EsVUFBS29KLFFBQUwsR0FBZ0I7QUFDZHZFLFdBQUssRUFBRSxNQURPO0FBRWQ7QUFDQTVFLFdBQUssRUFBRUgsc0VBQWEsQ0FBQyxHQUFELENBSE47QUFJZDBGLGNBQVEsRUFBRTtBQUpJLEtBQWhCO0FBTUEsVUFBSzdGLEtBQUw7QUFDRUssWUFBTSxFQUFFRixzRUFBYSxDQUFDRSxNQUFNLEdBQUdvQyxPQUFPLEdBQUcsQ0FBcEIsQ0FEdkI7QUFFRW5DLFdBQUssRUFBRSxNQUZUO0FBR0VvSixZQUFNLEVBQUUsTUFIVjtBQUlFL0UsY0FBUSxFQUFFLE1BSlo7QUFLRUUsZ0JBQVUsRUFBRSxLQUxkO0FBTUVwQyxhQUFPLEVBQUV0QyxzRUFBYSxDQUFDc0MsT0FBRCxDQU54QjtBQU9FdUMsWUFBTSxFQUFFLE1BUFY7QUFRRUQsYUFBTyxFQUFFLE1BUlg7QUFTRTRFLDRCQUFzQixFQUFFeEosc0VBQWEsQ0FBQyxFQUFELENBVHZDO0FBVUV5SixtQkFBYSxFQUFFLFFBVmpCO0FBV0VsRixnQkFBVSxFQUFFO0FBWGQsZ0RBWVl2RSxzRUFBYSxDQUFDLEVBQUQsQ0FaekIsOENBYWNBLHNFQUFhLENBQUMsRUFBRCxDQWIzQiw4Q0FjYyxLQWRkLGlEQWVpQixhQWZqQiw0Q0FnQlksUUFoQlo7O0FBbUJBLFVBQUtnQyxNQUFMOztBQS9CMEQ7QUFnQzNEOzs7OzZCQUVRO0FBQUE7O0FBQ1AsV0FBSzBILEdBQUwsR0FBV3JJLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFYO0FBQ0EsV0FBS1YsT0FBTCxHQUFlUyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBZjtBQUNBLFdBQUtWLE9BQUwsQ0FBYXdJLFdBQWIsR0FBMkIsS0FBS0EsV0FBaEM7QUFDQSxXQUFLeEksT0FBTCxDQUFhb0MsU0FBYixHQUF5QixvQkFBekI7O0FBQ0EsV0FBS3BDLE9BQUwsQ0FBYXlJLFVBQWIsR0FBMEIsVUFBQ3pCLEtBQUQ7QUFBQSxlQUFXLE1BQUksQ0FBQ3lCLFVBQUwsQ0FBZ0J6QixLQUFoQixDQUFYO0FBQUEsT0FBMUI7QUFDRDs7OzZCQUVRO0FBQ1AsV0FBSzhCLEdBQUwsQ0FBUzdILFdBQVQsQ0FBcUIsS0FBS2pCLE9BQTFCO0FBQ0EsV0FBS3BCLE1BQUwsQ0FBWXFDLFdBQVosQ0FBd0IsS0FBSzZILEdBQTdCO0FBQ0Q7OztpQ0FFWTtBQUNYekgsa0ZBQW1CLENBQUMsS0FBS3BDLEtBQU4sRUFBYSxLQUFLZSxPQUFsQixDQUFuQjtBQUNBcUIsa0ZBQW1CLENBQUMsS0FBS3FILFFBQU4sRUFBZ0IsS0FBS0ksR0FBckIsQ0FBbkI7QUFDRDs7OztFQW5Eb0JuSSxrRDs7QUFzRFI0SCx1RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekRBO0FBQ0E7O0lBRU1RLFU7Ozs7O0FBQ0osc0JBQVluSyxNQUFaLEVBQW9CVSxNQUFwQixFQUE0QjBKLFNBQTVCLEVBQXVDO0FBQUE7O0FBQUE7O0FBQ3JDLDhCQUFNcEssTUFBTjtBQUNBLFVBQUtvSyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFFBQU10SCxPQUFPLEdBQUdwQyxNQUFNLEdBQUcsQ0FBekI7QUFFQSxVQUFLTCxLQUFMLEdBQWE7QUFDWEssWUFBTSxFQUFFRixzRUFBYSxDQUFDRSxNQUFNLEdBQUcsQ0FBVixDQURWO0FBRVhDLFdBQUssRUFBRUgsc0VBQWEsQ0FBQ0UsTUFBTSxHQUFHLENBQVYsQ0FGVDtBQUdYdUYsWUFBTSxFQUFFekYsc0VBQWEsQ0FBQ3NDLE9BQUQsQ0FIVjtBQUlYdUgsWUFBTSxFQUFFLFNBSkc7QUFLWGxILFdBQUssRUFBRSxNQUxJO0FBTVhwQyxrQkFBWSxFQUFFUCxzRUFBYSxDQUFDRSxNQUFELENBTmhCO0FBT1g2RSxXQUFLLEVBQUUsT0FQSTtBQVFYRixZQUFNLEVBQUUsTUFSRztBQVNYRCxhQUFPLEVBQUU7QUFURSxLQUFiOztBQVlBLFVBQUs1QyxNQUFMOztBQWpCcUM7QUFrQnRDOzs7OzZCQUVRO0FBQUE7O0FBQ1AsV0FBS3BCLE9BQUwsR0FBZVMsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7O0FBQ0EsV0FBS1YsT0FBTCxDQUFha0osU0FBYixHQUF5QjtBQUFBLGVBQU0sTUFBSSxDQUFDRixTQUFMLEVBQU47QUFBQSxPQUF6QjtBQUNEOzs7O0VBeEJzQnJJLGtEOztBQTJCVm9JLHlFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTXpJLFM7Ozs7O0FBQ0oscUJBQVkxQixNQUFaLEVBQW9CVyxLQUFwQixFQUEyQkQsTUFBM0IsRUFBbUNrSixXQUFuQyxFQUFnRFcsZUFBaEQsRUFBaUU7QUFBQTs7QUFBQTs7QUFDL0QsOEJBQU12SyxNQUFOO0FBQ0EsVUFBS1csS0FBTCxHQUFhQSxLQUFiO0FBQ0EsVUFBS0QsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsVUFBS2tKLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsVUFBS1csZUFBTCxHQUF1QkEsZUFBdkI7QUFFQSxVQUFLbEssS0FBTCxHQUFhO0FBQ1hFLFlBQU0sRUFBRSxDQURHO0FBRVhELGNBQVEsRUFBRSxVQUZDO0FBR1hLLFdBQUssRUFBRTtBQUhJLEtBQWI7O0FBTUEsVUFBSzZCLE1BQUw7O0FBYitEO0FBY2hFOzs7OzZCQUVRO0FBQ1AsV0FBS3BCLE9BQUwsR0FBZVMsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWY7QUFDRDs7O2tDQUVhO0FBQUE7O0FBQ1osV0FBSzBJLFFBQUwsR0FBZ0IsSUFBSWIsaURBQUosQ0FDZCxLQUFLdkksT0FEUyxFQUVkLEtBQUtULEtBRlMsRUFHZCxLQUFLRCxNQUhTLEVBSWQsS0FBS2tKLFdBSlMsRUFLZCxVQUFDeEIsS0FBRDtBQUFBLGVBQVcsTUFBSSxDQUFDcUMsVUFBTCxDQUFnQnJDLEtBQWhCLENBQVg7QUFBQSxPQUxjLENBQWhCO0FBT0EsV0FBSzNHLFFBQUwsQ0FBY3FDLElBQWQsQ0FBbUIsS0FBSzBHLFFBQXhCO0FBQ0EsV0FBSy9JLFFBQUwsQ0FBY3FDLElBQWQsQ0FDRSxJQUFJcUcsbURBQUosQ0FBZSxLQUFLL0ksT0FBcEIsRUFBNkIsS0FBS1YsTUFBbEMsRUFBMEM7QUFBQSxlQUFNLE1BQUksQ0FBQzBKLFNBQUwsRUFBTjtBQUFBLE9BQTFDLENBREY7QUFHRDs7OytCQUVVaEMsSyxFQUFPO0FBQ2hCLFVBQUlBLEtBQUssQ0FBQ3NDLE9BQU4sSUFBaUIsRUFBckIsRUFBeUI7QUFDdkJ0QyxhQUFLLENBQUN1QyxjQUFOOztBQUNBLFlBQUksS0FBS0gsUUFBTCxDQUFjcEosT0FBZCxDQUFzQjhGLEtBQTFCLEVBQWlDO0FBQy9CLGVBQUswRCxRQUFMLENBQWMsS0FBS0osUUFBTCxDQUFjcEosT0FBZCxDQUFzQjhGLEtBQXBDO0FBQ0Q7QUFDRjtBQUNGOzs7Z0NBRVc7QUFDVixVQUFJLEtBQUtzRCxRQUFMLENBQWNwSixPQUFkLENBQXNCOEYsS0FBMUIsRUFBaUM7QUFDL0IsYUFBSzBELFFBQUwsQ0FBYyxLQUFLSixRQUFMLENBQWNwSixPQUFkLENBQXNCOEYsS0FBcEM7QUFDRDtBQUNGOzs7NkJBRVFBLEssRUFBTztBQUNkLFdBQUtzRCxRQUFMLENBQWNwSixPQUFkLENBQXNCOEYsS0FBdEIsR0FBOEIsSUFBOUI7QUFDQSxXQUFLcUQsZUFBTCxDQUFxQnJELEtBQXJCO0FBQ0Q7Ozs7RUFyRHFCbkYsa0Q7O0FBd0RUTCx3RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTs7SUFDTXVCLE07QUFDSixrQkFBWWpELE1BQVosRUFBb0JDLEtBQXBCLEVBQTJCO0FBQUE7O0FBQ3pCLFNBQUtDLE1BQUwsR0FBYyxLQUFkO0FBRUEsU0FBS0csS0FBTCxHQUFhO0FBQ1hDLGNBQVEsRUFBRSxPQURDO0FBRVhDLFlBQU0sRUFBRUMsc0VBQWEsQ0FBQ1AsS0FBSyxDQUFDTSxNQUFQLENBRlY7QUFHWEUsV0FBSyxFQUFFRCxzRUFBYSxDQUFDUCxLQUFLLENBQUNRLEtBQVAsQ0FIVDtBQUlYRSxXQUFLLEVBQUVILHNFQUFhLENBQUNQLEtBQUssQ0FBQ2lELFFBQVAsQ0FKVDtBQUtYeEMsWUFBTSxFQUFFRixzRUFBYSxDQUFDUCxLQUFLLENBQUNpRCxRQUFQLENBTFY7QUFNWG5DLGtCQUFZLEVBQUVQLHNFQUFhLENBQUNQLEtBQUssQ0FBQ2lELFFBQU4sR0FBaUIsQ0FBbEIsQ0FOaEI7QUFPWHRDLHFCQUFlLEVBQUVYLEtBQUssQ0FBQ2tELEtBUFo7QUFRWHJDLGVBQVMsRUFBRTtBQVJBLEtBQWI7QUFXQSxTQUFLa0IsTUFBTCxDQUFZaEMsTUFBWixFQUFvQkMsS0FBSyxDQUFDbUQsUUFBMUI7QUFDRDs7OzsyQkFFTXBELE0sRUFBUTZLLGMsRUFBZ0I7QUFDN0IsV0FBS3pKLE9BQUwsR0FBZVMsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWY7QUFDQVcsa0ZBQW1CLENBQUMsS0FBS3BDLEtBQU4sRUFBYSxLQUFLZSxPQUFsQixDQUFuQjtBQUNBLFdBQUtBLE9BQUwsQ0FBYXdFLE9BQWIsR0FBdUJpRixjQUF2QjtBQUNBN0ssWUFBTSxDQUFDcUMsV0FBUCxDQUFtQixLQUFLakIsT0FBeEI7QUFDRDs7Ozs7O0FBR1k2QixxRUFBZixFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgTWVzc2FnZUZpZWxkIGZyb20gJy4vbWVzc2FnZUZpZWxkJztcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSAnLi90ZXh0SW5wdXQvdGV4dElucHV0JztcbmltcG9ydCB7IG51bWJlclRvUGl4ZWwsIGFwbHlTdHlsZXNUb0VsZW1lbnQgfSBmcm9tICcuL3NlcnZpY2VzL2hlbHBlcic7XG5cbmNsYXNzIENoYXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihwYXJlbnQsIHByb3BzKSB7XG4gICAgc3VwZXIocGFyZW50KTtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmlucHV0SGVpZ2h0ID0gNjA7XG4gICAgdGhpcy5oZWFkZXJIZWlnaHQgPSA2MDtcblxuICAgIHRoaXMuc3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIGJvdHRvbTogbnVtYmVyVG9QaXhlbChwcm9wcy5ib3R0b20pLFxuICAgICAgcmlnaHQ6IG51bWJlclRvUGl4ZWwocHJvcHMucmlnaHQpLFxuICAgICAgaGVpZ2h0OiBudW1iZXJUb1BpeGVsKHByb3BzLmhlaWdodCksXG4gICAgICB3aWR0aDogbnVtYmVyVG9QaXhlbChwcm9wcy53aWR0aCksXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHByb3BzLmJhY2tncm91bmRDb2xvcixcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgIGJveFNoYWRvdzogJzAgMCA0cHggcmdiYSgwLCAwLCAwLCAuMTQpLCAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAuMjgpJyxcbiAgICAgIGJvcmRlclJhZGl1czogbnVtYmVyVG9QaXhlbCgxNSksXG4gICAgICBtZWRpYVF1ZXJ5OiB7XG4gICAgICAgIHF1ZXJ5OiAnKG1heC13aWR0aDogNzAwcHgpJyxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHN1cGVyLnJlbmRlcigpO1xuICB9XG5cbiAgYWRkQ2hpbGRyZW4oKSB7XG4gICAgY29uc3QgaGVhZGVyID0gbmV3IEhlYWRlcih0aGlzLmVsZW1lbnQsIHtcbiAgICAgIGhlaWdodDogdGhpcy5oZWFkZXJIZWlnaHQgLSA1LFxuICAgICAgYm90dG9tTWFyZ2luOiA1LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLnByb3BzLmJhc2VDb2xvcixcbiAgICB9KTtcbiAgICBjb25zdCBtZXNzYWdlRmllbGQgPSBuZXcgTWVzc2FnZUZpZWxkKFxuICAgICAgdGhpcy5lbGVtZW50LFxuICAgICAgdGhpcy5oZWFkZXJIZWlnaHQsXG4gICAgICB0aGlzLmlucHV0SGVpZ2h0XG4gICAgKTtcbiAgICB0aGlzLmNoaWxkcmVuID0gW1xuICAgICAgaGVhZGVyLFxuICAgICAgbWVzc2FnZUZpZWxkLFxuICAgICAgbmV3IFRleHRJbnB1dChcbiAgICAgICAgdGhpcy5lbGVtZW50LFxuICAgICAgICB0aGlzLndpZHRoLFxuICAgICAgICB0aGlzLmlucHV0SGVpZ2h0LFxuICAgICAgICAnU2VuZCBhIG1lc3NhZ2UnLFxuICAgICAgICAobWVzc2FnZSkgPT4gbWVzc2FnZUZpZWxkLm9uVXNlck1lc3NhZ2UobWVzc2FnZSlcbiAgICAgICksXG4gICAgXTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0O1xuIiwiaW1wb3J0IHsgYXBseVN0eWxlc1RvRWxlbWVudCB9IGZyb20gJy4vc2VydmljZXMvaGVscGVyJztcbmNsYXNzIENvbXBvbmVudCB7XG4gIHBhcmVudDtcbiAgZWxlbWVudDtcbiAgY2hpbGRyZW4gPSBbXTtcbiAgc3R5bGUgPSB7fTtcblxuICBjb25zdHJ1Y3RvcihwYXJlbnQpIHtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLmNyZWF0ZSgpO1xuICAgIHRoaXMuYXBwbHlTdHlsZSgpO1xuICAgIHRoaXMuYXBwZW5kKCk7XG4gICAgdGhpcy5hZGRDaGlsZHJlbigpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ3JlYXRlIG5vdCBpbXBsZW1lbnRlZCcpO1xuICB9XG5cbiAgYXBwZW5kKCkge1xuICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5yZW1vdmUoKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgLy9UT0RPIG1vdmUgdGhpc1xuICBhZGRDaGlsZHJlbigpIHt9XG5cbiAgYXBwbHlTdHlsZSgpIHtcbiAgICBhcGx5U3R5bGVzVG9FbGVtZW50KHRoaXMuc3R5bGUsIHRoaXMuZWxlbWVudCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudCc7XG5pbXBvcnQgQ2hhdCBmcm9tICcuL2NoYXQnO1xuaW1wb3J0IFRvZ2dsZSBmcm9tICcuL3RvZ2dsZSc7XG5cbmNsYXNzIENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHBhcmVudCwgcHJvcHMpIHtcbiAgICBzdXBlcihwYXJlbnQpO1xuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICB0aGlzLnN0eWxlID0ge1xuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICByaWdodDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIG1lZGlhUXVlcnk6IHtcbiAgICAgICAgcXVlcnk6ICcobWF4LXdpZHRoOiA3MDBweCknLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgcGFkZGluZzogJzIwcHggMjBweCA4MHB4IDIwcHgnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgc3VwZXIucmVuZGVyKCk7XG4gIH1cblxuICBhZGRDaGlsZHJlbigpIHtcbiAgICBsZXQgY2hhdCA9IG5ldyBDaGF0KHRoaXMuZWxlbWVudCwge1xuICAgICAgYm90dG9tOiB0aGlzLnByb3BzLmJvdHRvbSxcbiAgICAgIHJpZ2h0OiB0aGlzLnByb3BzLnJpZ2h0ICsgdGhpcy5wcm9wcy5kaWFtZXRlclRvZ2dsZSAqIDEuNSxcbiAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5oZWlnaHQsXG4gICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5wcm9wcy5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBiYXNlQ29sb3I6IHRoaXMucHJvcHMuYmFzZUNvbG9yLFxuICAgIH0pO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXG4gICAgICBjaGF0LFxuICAgICAgbmV3IFRvZ2dsZSh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgYm90dG9tOiB0aGlzLnByb3BzLmJvdHRvbSxcbiAgICAgICAgcmlnaHQ6IHRoaXMucHJvcHMucmlnaHQsXG4gICAgICAgIGRpYW1ldGVyOiB0aGlzLnByb3BzLmRpYW1ldGVyVG9nZ2xlLFxuICAgICAgICBjb2xvcjogdGhpcy5wcm9wcy5iYXNlQ29sb3IsXG4gICAgICAgIGNhbGxiYWNrOiAoKSA9PiBjaGF0LnRvZ2dsZSgpLFxuICAgICAgfSksXG4gICAgXTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmVsZW1lbnQuaWQgPSAnY29udGFpbmVyJztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcbmltcG9ydCB7IG51bWJlclRvUGl4ZWwsIGFwbHlTdHlsZXNUb0VsZW1lbnQgfSBmcm9tICcuL3NlcnZpY2VzL2hlbHBlcic7XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHBhcmVudCwgcHJvcHMpIHtcbiAgICBzdXBlcihwYXJlbnQpO1xuICAgIHRoaXMuc3R5bGUgPSB7XG4gICAgICBoZWlnaHQ6IG51bWJlclRvUGl4ZWwocHJvcHMuaGVpZ2h0IC0gcHJvcHMuYm90dG9tTWFyZ2luKSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogcHJvcHMuYmFja2dyb3VuZENvbG9yLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMTVweCAxNXB4IDAgMCcsXG4gICAgICBtYXJnaW5Cb3R0b206IG51bWJlclRvUGl4ZWwocHJvcHMuYm90dG9tTWFyZ2luKSxcbiAgICB9O1xuICAgIHN1cGVyLnJlbmRlcigpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSAnaGVhZGVyJztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4vbWVzc2FnZXMvbWVzc2FnZSc7XG5pbXBvcnQgTWVzc2FnZVdpdGhCdXR0b25zIGZyb20gJy4vbWVzc2FnZXMvbWVzc2FnZVdpdGhCdXR0b25zJztcbmltcG9ydCB7IG51bWJlclRvUGl4ZWwgfSBmcm9tICcuL3NlcnZpY2VzL2hlbHBlcic7XG5pbXBvcnQgeyBzZXR1cFdlYnNvY2tldCwgc2VuZE1lc3NhZ2UgfSBmcm9tICcuL3NlcnZpY2VzL2NsaWVudCc7XG5cbmNsYXNzIE1lc3NhZ2VGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHBhcmVudCwgdG9wLCBib3R0b20pIHtcbiAgICBzdXBlcihwYXJlbnQpO1xuICAgIHRoaXMuc3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGJvdHRvbTogbnVtYmVyVG9QaXhlbChib3R0b20pLFxuICAgICAgbGVmdDogJzAnLFxuICAgICAgcmlnaHQ6ICcwJyxcbiAgICAgIHRvcDogbnVtYmVyVG9QaXhlbCh0b3ApLFxuICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgfTtcblxuICAgIHN1cGVyLnJlbmRlcigpO1xuICAgIHNldHVwV2Vic29ja2V0KChtZXNzYWdlKSA9PiB0aGlzLm9uQm90TWVzc2FnZShtZXNzYWdlKSk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9ICdjaGF0LWJvdC1zY3JvbGxiYXInO1xuICB9XG5cbiAgYWRkTWVzc2FnZSh0ZXh0LCBpc1VzZXIpIHtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2gobmV3IE1lc3NhZ2UodGhpcy5lbGVtZW50LCB0ZXh0LCBpc1VzZXIpKTtcbiAgfVxuXG4gIGFkZE1lc3NhZ2VXaXRoQnV0dG9ucyh0ZXh0LCBpc1VzZXIsIGJ1dHRvblRleHRzKSB7XG4gICAgY29uc29sZS5sb2coYnV0dG9uVGV4dHMpO1xuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChcbiAgICAgIG5ldyBNZXNzYWdlV2l0aEJ1dHRvbnModGhpcy5lbGVtZW50LCB0ZXh0LCBpc1VzZXIsIGJ1dHRvblRleHRzLCAodGV4dCkgPT5cbiAgICAgICAgdGhpcy5vblVzZXJNZXNzYWdlKHRleHQpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIG9uVXNlck1lc3NhZ2UobWVzc2FnZSkge1xuICAgIHRoaXMuYWRkTWVzc2FnZShtZXNzYWdlLCB0cnVlKTtcbiAgICB0aGlzLnNjcm9sbERvd24oKTtcbiAgICBzZW5kTWVzc2FnZShtZXNzYWdlKTtcbiAgfVxuXG4gIG9uQm90TWVzc2FnZShkYXRhKSB7XG4gICAgY29uc29sZS5sb2coJ01lc3NhZ2UgZGF0YTonLCBkYXRhKTtcbiAgICBpZiAoZGF0YS5idXR0b25zLmxlbmd0aCkge1xuICAgICAgdGhpcy5hZGRNZXNzYWdlV2l0aEJ1dHRvbnMoZGF0YS5tZXNzYWdlLnRleHQsIGZhbHNlLCBkYXRhLmJ1dHRvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZE1lc3NhZ2UoZGF0YS5tZXNzYWdlLnRleHQsIGZhbHNlKTtcbiAgICB9XG4gICAgdGhpcy5zY3JvbGxEb3duKCk7XG4gIH1cblxuICBhZGRNZXNzYWdlKHRleHQsIGlzVXNlcikge1xuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChuZXcgTWVzc2FnZSh0aGlzLmVsZW1lbnQsIHRleHQsIGlzVXNlcikpO1xuICB9XG5cbiAgc2Nyb2xsRG93bigpIHtcbiAgICB0aGlzLmVsZW1lbnQuc2Nyb2xsVG9wID0gdGhpcy5lbGVtZW50LnNjcm9sbEhlaWdodDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlRmllbGQ7XG4iLCJpbXBvcnQgeyBudW1iZXJUb1BpeGVsIH0gZnJvbSAnLi4vc2VydmljZXMvaGVscGVyJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocGFyZW50LCB0ZXh0LCByaWdodCwgYmFja2dyb3VuZENvbG9yLCB0ZXh0Q29sb3IsIGNhbGxiYWNrKSB7XG4gICAgc3VwZXIocGFyZW50KTtcblxuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcblxuICAgIHRoaXMuc3R5bGUgPSB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvcixcbiAgICAgIGJvcmRlclJhZGl1czogbnVtYmVyVG9QaXhlbCg1KSxcbiAgICAgIGNvbG9yOiB0ZXh0Q29sb3IsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIHBhZGRpbmc6IG51bWJlclRvUGl4ZWwoNSksXG4gICAgICBmb250RmFtaWx5OiAnQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZicsXG4gICAgICBmb250U2l6ZTogbnVtYmVyVG9QaXhlbCgxMiksXG4gICAgICBsaW5lSGVpZ2h0OiBudW1iZXJUb1BpeGVsKDIwKSxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgIGZvbnRTbW9vdGhpbmc6ICdhbnRpYWxpYXNlZCcsXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgIG1hcmdpblRvcDogbnVtYmVyVG9QaXhlbCgxMiksXG4gICAgfTtcblxuICAgIGlmIChyaWdodCkge1xuICAgICAgdGhpcy5zdHlsZS5mbG9hdCA9ICdyaWdodCc7XG4gICAgICB0aGlzLnN0eWxlLm1hcmdpbkxlZnQgPSAnMjBweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3R5bGUubWFyZ2luUmlnaHQgPSAnMjBweCc7XG4gICAgfVxuXG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLnRleHQ7XG4gICAgdGhpcy5lbGVtZW50Lm9uY2xpY2sgPSAoKSA9PiB0aGlzLmNhbGxiYWNrKHRoaXMudGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J1dHRvbic7XG5cbmNsYXNzIEJ1dHRvbkNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhcmVudCxcbiAgICByaWdodCxcbiAgICBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgdGV4dENvbG9yLFxuICAgIGJ1dHRvbk1lc3NhZ2VzLFxuICAgIGNhbGxiYWNrXG4gICkge1xuICAgIHN1cGVyKHBhcmVudCk7XG5cbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgdGhpcy5idXR0b25NZXNzYWdlcyA9IGJ1dHRvbk1lc3NhZ2VzO1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvcjtcbiAgICB0aGlzLnRleHRDb2xvciA9IHRleHRDb2xvcjtcblxuICAgIHRoaXMuc3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIH07XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgYWRkQ2hpbGRyZW4oKSB7XG4gICAgbGV0IGJ1dHRvbnMgPSBbXTtcbiAgICB0aGlzLmJ1dHRvbk1lc3NhZ2VzLmZvckVhY2goKG1lc3NhZ2UpID0+IHtcbiAgICAgIGJ1dHRvbnMucHVzaChcbiAgICAgICAgbmV3IEJ1dHRvbihcbiAgICAgICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICAgICAgbWVzc2FnZS50ZXh0LFxuICAgICAgICAgIHRoaXMucmlnaHQsXG4gICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgICAgdGhpcy50ZXh0Q29sb3IsXG4gICAgICAgICAgKHRleHQpID0+IHRoaXMuY2FsbGJhY2sodGV4dClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KTtcbiAgICB0aGlzLmNoaWxkcmVuID0gYnV0dG9ucztcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25Db250YWluZXI7XG4iLCJpbXBvcnQgeyBudW1iZXJUb1BpeGVsIH0gZnJvbSAnLi4vc2VydmljZXMvaGVscGVyJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBUZXh0IGZyb20gJy4vdGV4dCc7XG5cbmNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihwYXJlbnQsIHRleHQsIGlzVXNlcikge1xuICAgIHN1cGVyKHBhcmVudCk7XG4gICAgdGhpcy5pc1VzZXIgPSBpc1VzZXI7XG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICBpZiAodGhpcy5pc1VzZXIpIHtcbiAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gJyM0MmE1ZjUnO1xuICAgICAgdGhpcy50ZXh0Q29sb3IgPSAnI2ZmZmZmZic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gJyNmN2Y3ZjcnO1xuICAgICAgdGhpcy50ZXh0Q29sb3IgPSAnIzZjNmM2Yyc7XG4gICAgfVxuXG4gICAgdGhpcy5zdHlsZSA9IHtcbiAgICAgIG1hcmdpbjogbnVtYmVyVG9QaXhlbCg1KSxcbiAgICAgIG1hcmdpbkJvdHRvbTogbnVtYmVyVG9QaXhlbCgyMCksXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgfTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBhZGRDaGlsZHJlbigpIHtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goXG4gICAgICBuZXcgVGV4dChcbiAgICAgICAgdGhpcy5lbGVtZW50LFxuICAgICAgICB0aGlzLnRleHQsXG4gICAgICAgIHRoaXMucmlnaHQsXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yLFxuICAgICAgICB0aGlzLnRleHRDb2xvclxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZTtcbiIsImltcG9ydCBNZXNzYWdlIGZyb20gJy4vbWVzc2FnZSc7XG5pbXBvcnQgQnV0dG9uQ29udGFpbmVyIGZyb20gJy4vYnV0dG9uQ29udGFpbmVyJztcblxuLy9UT0RPIFRoaXMgZG9lcyBub3QgY29uZm9ybSB0byBDb21wb25lbnQgUmV0aGluIENvbXBvbmVudFxuY2xhc3MgTWFzc2FnZVdpdGhCdXR0b25zIGV4dGVuZHMgTWVzc2FnZSB7XG4gIGNvbnN0cnVjdG9yKHBhcmVudCwgdGV4dCwgaXNVc2VyLCBidXR0b25UZXh0cywgY2FsbGJhY2spIHtcbiAgICBzdXBlcihwYXJlbnQsIHRleHQsIGlzVXNlcik7XG5cbiAgICB0aGlzLmJ1dHRvblRleHRzID0gYnV0dG9uVGV4dHM7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuXG4gICAgdGhpcy5hZGRDaGlsZHJlbkxhdGUoKTtcbiAgfVxuXG4gIGFkZENoaWxkcmVuTGF0ZSgpIHtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goXG4gICAgICBuZXcgQnV0dG9uQ29udGFpbmVyKFxuICAgICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICAgIHRoaXMuaXNVc2VyLFxuICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvcixcbiAgICAgICAgdGhpcy50ZXh0Q29sb3IsXG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dHMsXG4gICAgICAgICh0ZXh0KSA9PiB0aGlzLmNhbGxiYWNrKHRleHQpXG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXNzYWdlV2l0aEJ1dHRvbnM7XG4iLCJpbXBvcnQgeyBudW1iZXJUb1BpeGVsLCBhcGx5U3R5bGVzVG9FbGVtZW50IH0gZnJvbSAnLi4vc2VydmljZXMvaGVscGVyJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcblxuY2xhc3MgVGV4dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJvd1N0eWxlO1xuICB0ZXh0U3R5bGU7XG5cbiAgdGV4dCA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHBhcmVudCwgdGV4dCwgcmlnaHQsIGJhY2tncm91bmRDb2xvciwgdGV4dENvbG9yKSB7XG4gICAgc3VwZXIocGFyZW50KTtcblxuICAgIHRoaXMuc3R5bGUgPSB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvcixcbiAgICAgIGJvcmRlclJhZGl1czogbnVtYmVyVG9QaXhlbCg1KSxcbiAgICAgIGNvbG9yOiB0ZXh0Q29sb3IsXG4gICAgICBwYWRkaW5nOiBudW1iZXJUb1BpeGVsKDEwKSxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZm9udEZhbWlseTogJ0FyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnLFxuICAgICAgZm9udFNpemU6IG51bWJlclRvUGl4ZWwoMTIpLFxuICAgICAgbGluZUhlaWdodDogbnVtYmVyVG9QaXhlbCgyMCksXG4gICAgICBmb250V2VpZ2h0OiAnNTAwJyxcbiAgICAgIGZvbnRTbW9vdGhpbmc6ICdhbnRpYWxpYXNlZCcsXG4gICAgfTtcblxuICAgIGlmIChyaWdodCkge1xuICAgICAgdGhpcy5zdHlsZS5mbG9hdCA9ICdyaWdodCc7XG4gICAgICB0aGlzLnN0eWxlLm1hcmdpbkxlZnQgPSAnMjBweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3R5bGUubWFyZ2luUmlnaHQgPSAnMjBweCc7XG4gICAgfVxuXG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gdGhpcy50ZXh0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHQ7XG4iLCJjbGFzcyBSb290IHtcbiAgY29uc3RydWN0b3IodGFnKSB7XG4gICAgdGhpcy50YWcgPSB0YWc7XG5cbiAgICB0aGlzLmNyZWF0ZSgpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy50YWcpWzBdO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvb3Q7XG4iLCJpbXBvcnQgUm9vdCBmcm9tICcuL3Jvb3QnO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi9tZXNzYWdlcy9tZXNzYWdlJztcbmltcG9ydCBNZXNzYWdlV2l0aEJ1dHRvbnMgZnJvbSAnLi9tZXNzYWdlcy9tZXNzYWdlV2l0aEJ1dHRvbnMnO1xuXG5pbXBvcnQgeyBhZGRTdHlsZXNoZWV0IH0gZnJvbSAnLi9zZXJ2aWNlcy9oZWxwZXInO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcic7XG5cbmNvbnN0IGNoYXRib3RTdHlsZSA9IHtcbiAgYm90dG9tOiAyMCxcbiAgcmlnaHQ6IDIwLFxuICB3aWR0aDogMzQwLFxuICBoZWlnaHQ6IDYwMCxcbiAgaGVhZGVySGVpZ2h0OiA2MCxcbiAgaW5wdXRIZWlnaHQ6IDYwLFxuICBkaWFtZXRlclRvZ2dsZTogNDAsXG4gIGJhc2VDb2xvcjogJyM0MmE1ZjUnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcbiAgZ2V0IGJnQ29sb3JVc2VyKCkge1xuICAgIHJldHVybiB0aGlzLmJhc2VDb2xvcjtcbiAgfSxcbiAgdGV4dENvbG9yVXNlcjogJyNmZmZmZmYnLFxuICBiZ0NvbG9yQm90OiAnI2Y3ZjdmNycsXG4gIHRleHRDb2xvckJvdDogJyM2YzZjNmMnLFxufTtcblxuY2xhc3MgQ2hhdEJvdCB7XG4gIG1lc3NhZ2VzID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy9UT0RPXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoY2hhdGJvdFN0eWxlKSkge1xuICAgICAgdGhpc1trZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHRoaXMuZWxlbWVudCA9IG5ldyBSb290KCdjaGF0LWJvdCcpLmVsZW1lbnQ7XG4gICAgdGhpcy5jb250YWluZXIgPSBuZXcgQ29udGFpbmVyKHRoaXMuZWxlbWVudCwge1xuICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbSxcbiAgICAgIHJpZ2h0OiB0aGlzLnJpZ2h0LFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmJhY2tncm91bmRDb2xvcixcbiAgICAgIGRpYW1ldGVyVG9nZ2xlOiB0aGlzLmRpYW1ldGVyVG9nZ2xlLFxuICAgICAgYmFzZUNvbG9yOiB0aGlzLmJhc2VDb2xvcixcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICBuZXcgQ2hhdEJvdCgpO1xuICBhZGRTdHlsZXNoZWV0KCdjc3Mvc3R5bGVzLmNzcycpO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGluaXQoKSk7XG4iLCJsZXQgc2Vzc2lvbjtcbmxldCBzb2NrZXQ7XG5cbmZ1bmN0aW9uIGdldFNlc3Npb25BbmRDb2NraWVzKCkge1xuICBmZXRjaCgnaHR0cHM6Ly90ZXN0LmtpdHR5YW5kcmV3LmRldi9hcGkvZ2V0X3Nlc3Npb24nLCB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgIH0sXG4gIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIHNlc3Npb24gPSBqc29uLnNlc3Npb247XG4gICAgICBjb25zb2xlLmxvZyhzZXNzaW9uKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwV2Vic29ja2V0KGNhbGxiYWNrT25NZXNzYWdlKSB7XG4gIGdldFNlc3Npb25BbmRDb2NraWVzKCk7XG5cbiAgY29uc3Qgd2Vic29ja2VkVXJsID0gJ3dzczovL3Rlc3Qua2l0dHlhbmRyZXcuZGV2L2FwaS9tZXNzYWdlcyc7XG4gIHNvY2tldCA9IG5ldyBXZWJTb2NrZXQod2Vic29ja2VkVXJsKTtcbiAgLy8gQ29ubmVjdGlvbiBvcGVuZWQgY2FsbGJhY2tcbiAgc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoJ29wZW4nLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhldmVudCwgc2Vzc2lvbik7XG4gICAgc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoeyBldmVudDogJ3N0YXJ0Jywgc2Vzc2lvbjogc2Vzc2lvbiB9KSk7XG4gIH0pO1xuXG4gIHNvY2tldC5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsIChldmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdUaGUgY29ubmVjdGlvbiBoYXMgYmVlbiBjbG9zZWQgc3VjY2Vzc2Z1bGx5LicpO1xuICB9KTtcblxuICAvLyBMaXN0ZW4gZm9yIGluY29tbWluZyBldmVudHNcbiAgc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgaWYgKGRhdGEuZXZlbnQgPT0gJ25ld19tZXNzYWdlJykge1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICBjYWxsYmFja09uTWVzc2FnZShkYXRhKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBTZW5kcyBtZXNzYWdlcyB0byB0aGUgc29ja2V0XG5leHBvcnQgZnVuY3Rpb24gc2VuZE1lc3NhZ2UodGV4dCkge1xuICBzb2NrZXQuc2VuZChcbiAgICBKU09OLnN0cmluZ2lmeSh7IGV2ZW50OiAnbmV3X21lc3NhZ2UnLCBtZXNzYWdlOiB7IHRleHQ6IHRleHQgfSB9KVxuICApO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG51bWJlclRvUGl4ZWwobnVtYmVyKSB7XG4gIHJldHVybiBudW1iZXIgKyAncHgnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBseVN0eWxlc1RvRWxlbWVudChzdHlsZSwgZG9tRWxlbWVudCkge1xuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhzdHlsZSkpIHtcbiAgICBpZiAoa2V5ID09ICdtZWRpYVF1ZXJ5Jykge1xuICAgICAgY29uc3QgbWVkaWFRdWVyeSA9IHdpbmRvdy5tYXRjaE1lZGlhKHZhbHVlLnF1ZXJ5KTtcbiAgICAgIG1lZGlhUXVlcnkuYWRkTGlzdGVuZXIoKHgpID0+IHtcbiAgICAgICAgaWYgKHgubWF0Y2hlcykge1xuICAgICAgICAgIGFwbHlTdHlsZXNUb0VsZW1lbnQodmFsdWUuc3R5bGUsIGRvbUVsZW1lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnRlcnNlY3QnLCBpbnRlcnNlY3Qoc3R5bGUsIHZhbHVlLnN0eWxlKSk7XG4gICAgICAgICAgYXBseVN0eWxlc1RvRWxlbWVudChpbnRlcnNlY3Qoc3R5bGUsIHZhbHVlLnN0eWxlKSwgZG9tRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKG1lZGlhUXVlcnkubWF0Y2hlcykge1xuICAgICAgICBhcGx5U3R5bGVzVG9FbGVtZW50KHZhbHVlLnN0eWxlLCBkb21FbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZG9tRWxlbWVudC5zdHlsZVtrZXldID0gdmFsdWU7XG4gIH1cbn1cblxuLy9UT0RPIFBlcmZvcm1hbmNlXG5mdW5jdGlvbiBpbnRlcnNlY3Qob2JqZWN0MSwgb2JqZWN0Mikge1xuICBjb25zdCBpbnRlcnNlY3Rpb24gPSB7fTtcbiAgY29uc3QgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKG9iamVjdDEpLmZpbHRlcihcbiAgICAoZW50cnkpID0+IGVudHJ5WzBdIGluIG9iamVjdDJcbiAgKTtcbiAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4gKGludGVyc2VjdGlvbltlbnRyeVswXV0gPSBlbnRyeVsxXSkpO1xuICByZXR1cm4gaW50ZXJzZWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkU3R5bGVzaGVldChmaWxlTmFtZSkge1xuICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQ7XG4gIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuXG4gIGxpbmsudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICBsaW5rLmhyZWYgPSBmaWxlTmFtZTtcblxuICBoZWFkLmFwcGVuZENoaWxkKGxpbmspO1xufVxuIiwiaW1wb3J0IHsgYXBseVN0eWxlc1RvRWxlbWVudCwgbnVtYmVyVG9QaXhlbCB9IGZyb20gJy4uL3NlcnZpY2VzL2hlbHBlcic7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5cbmNsYXNzIFRleHRBcmVhIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocGFyZW50LCB3aWR0aCwgaGVpZ2h0LCBwbGFjZWhvbGRlciwgb25rZXlwcmVzcykge1xuICAgIHN1cGVyKHBhcmVudCk7XG5cbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgdGhpcy5vbmtleXByZXNzID0gb25rZXlwcmVzcztcbiAgICBjb25zdCBwYWRkaW5nID0gaGVpZ2h0IC8gNDtcbiAgICB0aGlzLmRpdlN0eWxlID0ge1xuICAgICAgZmxvYXQ6ICdsZWZ0JyxcbiAgICAgIC8vVE9ET1xuICAgICAgd2lkdGg6IG51bWJlclRvUGl4ZWwoMjAwKSxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB9O1xuICAgIHRoaXMuc3R5bGUgPSB7XG4gICAgICBoZWlnaHQ6IG51bWJlclRvUGl4ZWwoaGVpZ2h0IC0gcGFkZGluZyAqIDIpLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIHJlc2l6ZTogJ25vbmUnLFxuICAgICAgZm9udFNpemU6ICcxM3B4JyxcbiAgICAgIGZvbnRXZWlnaHQ6ICc0MDAnLFxuICAgICAgcGFkZGluZzogbnVtYmVyVG9QaXhlbChwYWRkaW5nKSxcbiAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogbnVtYmVyVG9QaXhlbCgxNSksXG4gICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmJyxcbiAgICAgIGZvbnRTaXplOiBudW1iZXJUb1BpeGVsKDEyKSxcbiAgICAgIGxpbmVIZWlnaHQ6IG51bWJlclRvUGl4ZWwoMjApLFxuICAgICAgZm9udFdlaWdodDogJzUwMCcsXG4gICAgICBmb250U21vb3RoaW5nOiAnYW50aWFsaWFzZWQnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIH07XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICB0aGlzLmVsZW1lbnQucGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyO1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSAnY2hhdC1ib3Qtc2Nyb2xsYmFyJztcbiAgICB0aGlzLmVsZW1lbnQub25rZXlwcmVzcyA9IChldmVudCkgPT4gdGhpcy5vbmtleXByZXNzKGV2ZW50KTtcbiAgfVxuXG4gIGFwcGVuZCgpIHtcbiAgICB0aGlzLmRpdi5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZGl2KTtcbiAgfVxuXG4gIGFwcGx5U3R5bGUoKSB7XG4gICAgYXBseVN0eWxlc1RvRWxlbWVudCh0aGlzLnN0eWxlLCB0aGlzLmVsZW1lbnQpO1xuICAgIGFwbHlTdHlsZXNUb0VsZW1lbnQodGhpcy5kaXZTdHlsZSwgdGhpcy5kaXYpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRBcmVhO1xuIiwiaW1wb3J0IHsgYXBseVN0eWxlc1RvRWxlbWVudCwgbnVtYmVyVG9QaXhlbCB9IGZyb20gJy4uL3NlcnZpY2VzL2hlbHBlcic7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5cbmNsYXNzIFRleHRCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihwYXJlbnQsIGhlaWdodCwgb25Nb3VzZVVwKSB7XG4gICAgc3VwZXIocGFyZW50KTtcbiAgICB0aGlzLm9uTW91c2VVcCA9IG9uTW91c2VVcDtcbiAgICBjb25zdCBwYWRkaW5nID0gaGVpZ2h0IC8gNDtcblxuICAgIHRoaXMuc3R5bGUgPSB7XG4gICAgICBoZWlnaHQ6IG51bWJlclRvUGl4ZWwoaGVpZ2h0IC8gMiksXG4gICAgICB3aWR0aDogbnVtYmVyVG9QaXhlbChoZWlnaHQgLyAyKSxcbiAgICAgIG1hcmdpbjogbnVtYmVyVG9QaXhlbChwYWRkaW5nKSxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgY29sb3I6ICdncmF5JyxcbiAgICAgIGJvcmRlclJhZGl1czogbnVtYmVyVG9QaXhlbChoZWlnaHQpLFxuICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICB9O1xuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0aGlzLmVsZW1lbnQub25tb3VzZXVwID0gKCkgPT4gdGhpcy5vbk1vdXNlVXAoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0QnV0dG9uO1xuIiwiaW1wb3J0IHsgYXBseVN0eWxlc1RvRWxlbWVudCwgbnVtYmVyVG9QaXhlbCB9IGZyb20gJy4uL3NlcnZpY2VzL2hlbHBlcic7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnLi90ZXh0QXJlYSc7XG5pbXBvcnQgVGV4dEJ1dHRvbiBmcm9tICcuL3RleHRCdXR0b24nO1xuXG5jbGFzcyBUZXh0SW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihwYXJlbnQsIHdpZHRoLCBoZWlnaHQsIHBsYWNlaG9sZGVyLCBtZXNzYWdlQ2FsbGJhY2spIHtcbiAgICBzdXBlcihwYXJlbnQpO1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgdGhpcy5tZXNzYWdlQ2FsbGJhY2sgPSBtZXNzYWdlQ2FsbGJhY2s7XG5cbiAgICB0aGlzLnN0eWxlID0ge1xuICAgICAgYm90dG9tOiAwLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH07XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB9XG5cbiAgYWRkQ2hpbGRyZW4oKSB7XG4gICAgdGhpcy50ZXh0QXJlYSA9IG5ldyBUZXh0QXJlYShcbiAgICAgIHRoaXMuZWxlbWVudCxcbiAgICAgIHRoaXMud2lkdGgsXG4gICAgICB0aGlzLmhlaWdodCxcbiAgICAgIHRoaXMucGxhY2Vob2xkZXIsXG4gICAgICAoZXZlbnQpID0+IHRoaXMub25LZXlQcmVzcyhldmVudClcbiAgICApO1xuICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLnRleHRBcmVhKTtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goXG4gICAgICBuZXcgVGV4dEJ1dHRvbih0aGlzLmVsZW1lbnQsIHRoaXMuaGVpZ2h0LCAoKSA9PiB0aGlzLm9uTW91c2VVcCgpKVxuICAgICk7XG4gIH1cblxuICBvbktleVByZXNzKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMTMpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodGhpcy50ZXh0QXJlYS5lbGVtZW50LnZhbHVlKSB7XG4gICAgICAgIHRoaXMub25TdWJtaXQodGhpcy50ZXh0QXJlYS5lbGVtZW50LnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbk1vdXNlVXAoKSB7XG4gICAgaWYgKHRoaXMudGV4dEFyZWEuZWxlbWVudC52YWx1ZSkge1xuICAgICAgdGhpcy5vblN1Ym1pdCh0aGlzLnRleHRBcmVhLmVsZW1lbnQudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uU3VibWl0KHZhbHVlKSB7XG4gICAgdGhpcy50ZXh0QXJlYS5lbGVtZW50LnZhbHVlID0gbnVsbDtcbiAgICB0aGlzLm1lc3NhZ2VDYWxsYmFjayh2YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dElucHV0O1xuIiwiaW1wb3J0IHsgbnVtYmVyVG9QaXhlbCwgYXBseVN0eWxlc1RvRWxlbWVudCB9IGZyb20gJy4vc2VydmljZXMvaGVscGVyJztcbmNsYXNzIFRvZ2dsZSB7XG4gIGNvbnN0cnVjdG9yKHBhcmVudCwgcHJvcHMpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5zdHlsZSA9IHtcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgYm90dG9tOiBudW1iZXJUb1BpeGVsKHByb3BzLmJvdHRvbSksXG4gICAgICByaWdodDogbnVtYmVyVG9QaXhlbChwcm9wcy5yaWdodCksXG4gICAgICB3aWR0aDogbnVtYmVyVG9QaXhlbChwcm9wcy5kaWFtZXRlciksXG4gICAgICBoZWlnaHQ6IG51bWJlclRvUGl4ZWwocHJvcHMuZGlhbWV0ZXIpLFxuICAgICAgYm9yZGVyUmFkaXVzOiBudW1iZXJUb1BpeGVsKHByb3BzLmRpYW1ldGVyIC8gMiksXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgYm94U2hhZG93OiAnMCAwIDRweCByZ2JhKDAsIDAsIDAsIC4xNCksIDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIC4yOCknLFxuICAgIH07XG5cbiAgICB0aGlzLmNyZWF0ZShwYXJlbnQsIHByb3BzLmNhbGxiYWNrKTtcbiAgfVxuXG4gIGNyZWF0ZShwYXJlbnQsIHRvZ2dsZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYXBseVN0eWxlc1RvRWxlbWVudCh0aGlzLnN0eWxlLCB0aGlzLmVsZW1lbnQpO1xuICAgIHRoaXMuZWxlbWVudC5vbmNsaWNrID0gdG9nZ2xlQ2FsbGJhY2s7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9nZ2xlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==