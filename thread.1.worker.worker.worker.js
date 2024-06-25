/******/ (function(modules) { // webpackBootstrap
/******/ 	self["webpackChunk"] = function webpackChunkCallback(chunkIds, moreModules) {
/******/ 		for(var moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		while(chunkIds.length)
/******/ 			installedChunks[chunkIds.pop()] = 1;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "1" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"thread.1.worker": 1
/******/ 	};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"../../renderity/wasm-wrapper/src/test-atomic/build/test.wasm": function() {
/******/ 			return {
/******/
/******/ 			};
/******/ 		},
/******/ 		"../../renderity/wasm-wrapper/src/test-simd/build/test.wasm": function() {
/******/ 			return {
/******/
/******/ 			};
/******/ 		},
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/ 		promises.push(Promise.resolve().then(function() {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				importScripts(__webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".worker.worker.js");
/******/ 			}
/******/ 		}));
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"0":["../../renderity/wasm-wrapper/src/test-atomic/build/test.wasm"],"1":["../../renderity/wasm-wrapper/src/test-simd/build/test.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"../../renderity/wasm-wrapper/src/test-atomic/build/test.wasm":"c8e8b144c658ecc0cc8b","../../renderity/wasm-wrapper/src/test-simd/build/test.wasm":"15c3acd181c9cc8c1774"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/babel-loader/lib/index.js?!./node_modules/@open-wc/webpack-import-meta-loader/webpack-import-meta-loader.js!./node_modules/conditional-compile-loader/index.js?!../../renderity/wasm-wrapper/src/threads/thread/thread.1.worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../renderity/wasm-wrapper/src/cxx-specific.js":
/*!********************************************************************!*\
  !*** /Users/Denis/reps/renderity/wasm-wrapper/src/cxx-specific.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// TODO: new for C++ types (e.g. _new('uint32_t', 16)).

/* harmony default export */ __webpack_exports__["default"] = ({
  // https://en.cppreference.com/w/cpp/language/types
  bool: function bool(addr) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new this.mem.bool.typed_array_constructor(this.memory.buffer, addr, length);
  },
  "char": function char(addr) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new this.mem["char"].typed_array_constructor(this.memory.buffer, addr, length);
  },
  "int": function int(addr) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new this.mem["int"].typed_array_constructor(this.memory.buffer, addr, length);
  },
  "short": function short(addr) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new this.mem["short"].typed_array_constructor(this.memory.buffer, addr, length);
  },
  "long": function long(addr) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new this.mem["long"].typed_array_constructor(this.memory.buffer, addr, length);
  },
  size_t: function size_t(addr) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new this.mem.size_t.typed_array_constructor(this.memory.buffer, addr, length);
  },
  addr: function addr(_addr2) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new this.mem.addr.typed_array_constructor(this.memory.buffer, _addr2, length);
  },
  uint8_t: function uint8_t(addr) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new self.Uint8Array(this.memory.buffer, addr, length);
  },
  int8_t: function int8_t(addr) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new self.Int8Array(this.memory.buffer, addr, length);
  },
  uint16_t: function uint16_t(addr) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new self.Uint16Array(this.memory.buffer, addr, length);
  },
  int16_t: function int16_t(addr) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new self.Int16Array(this.memory.buffer, addr, length);
  },
  uint32_t: function uint32_t(addr) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new self.Uint32Array(this.memory.buffer, addr, length);
  },
  int32_t: function int32_t(addr) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new self.Int32Array(this.memory.buffer, addr, length);
  },
  uint64_t: function uint64_t(addr) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new self.BigUint64Array(this.memory.buffer, addr, length);
  },
  int64_t: function int64_t(addr) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new self.BigInt64Array(this.memory.buffer, addr, length);
  },
  "float": function float(addr) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new this.mem["float"].typed_array_constructor(this.memory.buffer, addr, length);
  },
  "double": function double(addr) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new this.mem["double"].typed_array_constructor(this.memory.buffer, addr, length);
  },
  long_double: function long_double(addr) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new self.Uint8Array(this.memory.buffer, addr, length * this.mem.long_double.size);
  },
  addr2: function addr2(name) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return this.addr(this.globals[name] || this.exports[name].value, length);
  },
  getCStringLength: function getCStringLength(addr) {
    var _addr = addr;

    // Find terminating "\0".
    for (var vend = 0;; ++vend) {
      // if (this.char(_addr + vend)[0] === 0)
      if (this.memory_views.UI8[_addr + vend] === 0) {
        return vend;
      }
    }

    // return this.exports.__strlen(addr);
  },
  c_string: function c_string(addr) {
    return this["char"](addr, this.getCStringLength(addr));
    // return this.memory_views.UI8.subarray(addr, addr + this.getCStringLength(addr));
  },
  c_string2: function c_string2(addr) {
    return this.constructor.convertUint8ArrayToDomString(this.c_string(addr));
    // return this.constructor.convertUint8ArrayToDomString(this.memory_views.UI8.subarray(addr, addr + this.getCStringLength(addr)));
  },
  std_string: function std_string(addr) {
    var result = this["char"](this.exports.__getStdStringData(addr), this.exports.__getStdStringSize(addr));
    return result;
  },
  std_string2: function std_string2(addr) {
    return this.constructor.convertUint8ArrayToDomString(this.std_string(addr));
  },
  std_vector: function std_vector(addr, type) {
    var result = this[type](this.exports.__getStdVectorData(addr), this.exports.__getStdVectorSize(addr));
    return result;
  },
  // std_vector_bool (addr) { return this.std_vector(addr, 'bool'); },
  std_vector_char: function std_vector_char(addr) {
    return this.std_vector(addr, 'char');
  },
  std_vector_int: function std_vector_int(addr) {
    return this.std_vector(addr, 'int');
  },
  std_vector_short: function std_vector_short(addr) {
    return this.std_vector(addr, 'short');
  },
  std_vector_long: function std_vector_long(addr) {
    return this.std_vector(addr, 'long');
  },
  std_vector_size_t: function std_vector_size_t(addr) {
    return this.std_vector(addr, 'size_t');
  },
  std_vector_addr: function std_vector_addr(addr) {
    return this.std_vector(addr, 'addr');
  },
  std_vector_uint8_t: function std_vector_uint8_t(addr) {
    return this.std_vector(addr, 'uint8_t');
  },
  std_vector_int8_t: function std_vector_int8_t(addr) {
    return this.std_vector(addr, 'int8_t');
  },
  std_vector_uint16_t: function std_vector_uint16_t(addr) {
    return this.std_vector(addr, 'uint16_t');
  },
  std_vector_int16_t: function std_vector_int16_t(addr) {
    return this.std_vector(addr, 'int16_t');
  },
  std_vector_uint32_t: function std_vector_uint32_t(addr) {
    return this.std_vector(addr, 'uint32_t');
  },
  std_vector_int32_t: function std_vector_int32_t(addr) {
    return this.std_vector(addr, 'int32_t');
  },
  std_vector_uint64_t: function std_vector_uint64_t(addr) {
    return this.std_vector(addr, 'uint64_t');
  },
  std_vector_int64_t: function std_vector_int64_t(addr) {
    return this.std_vector(addr, 'int64_t');
  },
  std_vector_float: function std_vector_float(addr) {
    return this.std_vector(addr, 'float');
  },
  std_vector_double: function std_vector_double(addr) {
    return this.std_vector(addr, 'double');
  },
  std_vector_long_double: function std_vector_long_double(addr) {
    return this.std_vector(addr, 'long_double');
  },
  resizeStdVector: function resizeStdVector(addr, size) {
    this.exports.__resizeStdVector(addr, size);
  },
  updateStdVectorData: function updateStdVectorData(addr, type, _data) {
    this.std_vector(addr, type).set(_data);
  },
  demangleCxxNames: function demangleCxxNames() {
    var _this = this;
    var demangled_name_max_length = 1024;
    var demangled_name_addr = this.exports.__malloc(demangled_name_max_length);
    var exports_demangled_reduced = {};
    var exports_demangled = Object.keys(this.exports).reduce(function (exports_demangled, _name) {
      if (_name.startsWith('_Z')) {
        var name = "".concat(_name, "\0");
        _this.memory_views.UI8.set(_this.constructor.convertDomStringToUint8Array(name), demangled_name_addr);
        var demangled_name = _this.constructor.convertUint8ArrayToDomString(_this.c_string(_this.exports.__demangleCxxName(demangled_name_addr))).replace(/, /g, ',');
        if (exports_demangled[demangled_name]) {
          if (Array.isArray(exports_demangled[demangled_name])) {
            exports_demangled[demangled_name].push(_this.exports[_name]);
            return exports_demangled;
          }
          var first_entry = exports_demangled[demangled_name];
          exports_demangled[demangled_name] = [first_entry, _this.exports[_name]];
          return exports_demangled;
        }
        exports_demangled[demangled_name] = _this.exports[_name];
        exports_demangled_reduced[demangled_name.replace(/\([^)]*\)/g, '')] = _this.exports[_name];
      }
      return exports_demangled;
    }, {});
    this.exports.__free(demangled_name_addr);
    return {
      exports_demangled: exports_demangled,
      exports_demangled_reduced: exports_demangled_reduced
    };
  },
  // TODO: rename to "getClass".
  Class: function Class(name) {
    var wasm_wrapper = this;
    var _Class = /*#__PURE__*/_createClass(function _Class(input) {
      _classCallCheck(this, _Class);
      if (typeof input === 'number') {
        this.addr = input;
      } else if (typeof input === 'string') {
        var _wasm_wrapper$addr = wasm_wrapper.addr2(input);
        var _wasm_wrapper$addr2 = _slicedToArray(_wasm_wrapper$addr, 1);
        this.addr = _wasm_wrapper$addr2[0];
      }
    });
    _defineProperty(_Class, "name", name);
    _defineProperty(_Class, "overloaded", {});
    self.Object.keys(this.exports_demangled).filter(function (member_name) {
      return member_name.includes(name);
    }).forEach(function (member_name) {
      var member_name_trimmed = member_name.replace("".concat(name, "::"), '').replace(/\((.*)+/g, '');

      // Some objects may be exported twice from wasm. TODO: why does it occur?
      var wasm_object = wasm_wrapper.exports_demangled[member_name][0] || wasm_wrapper.exports_demangled[member_name];
      if (typeof wasm_object === 'function') {
        var _member_name$match;
        var parameters = (_member_name$match = member_name.match(/\((.*)+/g)) === null || _member_name$match === void 0 ? void 0 : _member_name$match[0].replace(/\(|( )|\)/g, '').split(',');
        if (parameters.length && parameters[0] === '') {
          parameters.length = 0;
        }

        // static function
        if (parameters.length === wasm_object.length) {
          if (_Class[member_name_trimmed]) {
            if (!_Class.overloaded[member_name_trimmed]) {
              _Class.overloaded[member_name_trimmed] = 0;
            }
            ++_Class.overloaded[member_name_trimmed];
            member_name_trimmed += "_o".concat(_Class.overloaded[member_name_trimmed]);
          }
          _Class[member_name_trimmed] = wasm_object;
        }

        // non-static function
        else {
          if (_Class.prototype[member_name_trimmed]) {
            if (!_Class.overloaded[member_name_trimmed]) {
              _Class.overloaded[member_name_trimmed] = 0;
            }
            ++_Class.overloaded[member_name_trimmed];
            member_name_trimmed += "_o".concat(_Class.overloaded[member_name_trimmed]);
          }

          // Non-wrapped
          _Class["proto_".concat(member_name_trimmed)] = wasm_object;
          _Class.prototype[member_name_trimmed] = function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            return wasm_object.apply(void 0, [this.addr].concat(args));
          };
        }
      } else if (_typeof(wasm_object) === 'object') {
        _Class[member_name_trimmed] = wasm_object;
      }
    });

    // Presume New() returns a pointer
    if (_Class.New) {
      _Class.NewWrapper = function () {
        return new _Class(_Class.New());
      };
    }
    return _Class;
  }
});

/***/ }),

/***/ "../../renderity/wasm-wrapper/src/imports.js":
/*!***************************************************************!*\
  !*** /Users/Denis/reps/renderity/wasm-wrapper/src/imports.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var IDLE_FUNCTION = function IDLE_FUNCTION() {
  return 0;
};
/* harmony default export */ __webpack_exports__["default"] = (function (wasm_wrapper) {
  var imports_lib = {
    console_log: function console_log(size, types_addr, values_addr) {
      var _console;
      var arg_types = wasm_wrapper.size_t(types_addr, size);
      var args = new Array(size);
      var _wasm_wrapper$size_t = wasm_wrapper.size_t(wasm_wrapper.globals.__any_value_size),
        _wasm_wrapper$size_t2 = _slicedToArray(_wasm_wrapper$size_t, 1),
        any_value_size = _wasm_wrapper$size_t2[0];
      for (var i = 0; i < size; ++i) {
        var type_name = wasm_wrapper.type_names[arg_types[i]];
        var value_addr = values_addr + any_value_size * i;
        args[i] = wasm_wrapper.mem[type_name].interp_log(value_addr);
      }
      (_console = console).log.apply(_console, ['%cWASM:', 'color: #bada55'].concat(args));
    },
    console_log2: function console_log2() {
      var _console2;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      (_console2 = console).log.apply(_console2, ['%cWASM:', 'color: #bada55'].concat(args));
    },
    date_now: function date_now() {
      return Date.now();
    },
    host_loop: function host_loop(function_addr) {
      var _function = wasm_wrapper["function"](function_addr);

      // setInterval(_function, 1000, ...args);
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      setInterval.apply(void 0, [_function, 0].concat(args));
    },
    host_animation_loop: function host_animation_loop(function_addr) {
      var _function = wasm_wrapper["function"](function_addr);
      var loop = function loop() {
        requestAnimationFrame(_function);
        _function.apply(void 0, _toConsumableArray(args));
      };
      loop();
    },
    // For using this function WASM code must be processed by
    // wasm-opt tool with flags: "-O1", "--asyncify".
    rdty_sleep: function rdty_sleep(duration) {
      // Global state for running the program.

      var DATA_ADDR = 16;
      if (wasm_wrapper.sleeping) {
        // We are called as part of a resume/rewind. Stop sleeping.
        // console.log('...resume');
        wasm_wrapper.exports.asyncify_stop_rewind();
        wasm_wrapper.sleeping = false;
      } else {
        // We are called in order to start a sleep/unwind.
        // console.log('sleep...');
        // Fill in the data structure. The first value has the stack location,
        // which for simplicity we can start right after the data structure itself.
        wasm_wrapper.memory_views.I32[DATA_ADDR >> 2] = DATA_ADDR + 8;
        // The end of the stack will not be reached here anyhow.

        // TODO: use stack_size instead of 1024 * 1024.
        wasm_wrapper.memory_views.I32[DATA_ADDR + 4 >> 2] = 1024 * 1024;
        wasm_wrapper.exports.asyncify_start_unwind(DATA_ADDR);
        wasm_wrapper.sleeping = true;

        // // Resume after the proper delay.
        // setTimeout
        // (
        // 	() =>
        // 	{
        // 		// console.log('timeout ended, starting to rewind the stack');
        // 		wasm_wrapper.exports.asyncify_start_rewind(DATA_ADDR);
        // 		// The code is now ready to rewind; to start the process, enter the
        // 		// first function that should be on the call stack.
        // 	},

        // 	duration,
        // );

        setTimeout(wasm_wrapper.exports.asyncify_start_rewind, duration, DATA_ADDR);
      }
    }
  };

  // For using these functions WASM code must be processed by
  // wasm-opt tool with flags: "-O1", "--asyncify".
  // If this is main worker.
  if (self.window && self.Worker && self.SharedArrayBuffer) {
    Object.assign(imports_lib, {
      runThread: function runThread(thread_addr, function_addr, thread_types_addr, thread_values_addr) {
        if (!wasm_wrapper.threads) {
          wasm_wrapper.threads = {};
        }
        var thread = new wasm_wrapper.constructor.Thread2(wasm_wrapper, [function_addr, wasm_wrapper.exports.__getStdVectorData(thread_types_addr), wasm_wrapper.exports.__getStdVectorData(thread_values_addr)]);
        wasm_wrapper.threads[thread_addr] = thread;
      },
      joinThread: function joinThread(thread_addr) {
        wasm_wrapper.async_count = wasm_wrapper.async_count || 0;
        ++wasm_wrapper.async_count;
        if (wasm_wrapper.async_count === 1) {
          wasm_wrapper.async_promise = new Promise(function (resolve) {
            wasm_wrapper.async_promise_setter = function (val) {
              if (val) {
                resolve();
              }
            };
          });
        }
        var DATA_ADDR = 16;
        if (wasm_wrapper.sleeping) {
          wasm_wrapper.exports.asyncify_stop_rewind();
          wasm_wrapper.sleeping = false;
        } else {
          wasm_wrapper.memory_views.I32[DATA_ADDR >> 2] = DATA_ADDR + 8;
          wasm_wrapper.memory_views.I32[DATA_ADDR + 4 >> 2] = 1024 * 1024;
          wasm_wrapper.exports.asyncify_start_unwind(DATA_ADDR);
          wasm_wrapper.sleeping = true;
          wasm_wrapper.threads[thread_addr].promise.then(function () {
            wasm_wrapper.exports.asyncify_start_rewind(DATA_ADDR);
            wasm_wrapper.async_func.apply(wasm_wrapper, _toConsumableArray(wasm_wrapper.async_args));
            if (wasm_wrapper.async_count % 2 === 0) {
              wasm_wrapper.async_promise_setter(true);
            }
          });
        }
      },
      terminateThread: function terminateThread(thread_addr) {
        wasm_wrapper.threads[thread_addr].terminate();
      }
    });
  }
  if (
  // self.Worker && // Safari doesn't allow workers to create Worker objects. Only main worker is allowed.
  self.SharedArrayBuffer && self.Atomics) {
    if (self.window) {
      Object.assign(imports_lib, {
        atomic_lock: IDLE_FUNCTION,
        atomic_unlock: IDLE_FUNCTION
      });
    } else {
      var UNLOCKED = 0;
      var LOCKED = 1;
      Object.assign(imports_lib, {
        atomic_lock: function atomic_lock(atomic_addr) {
          var __atomic_malloc_index = atomic_addr / 4;
          do {
            self.Atomics.wait(wasm_wrapper.memory_views.I32, __atomic_malloc_index, LOCKED, Infinity);
          } while (self.Atomics.compareExchange(wasm_wrapper.memory_views.I32, __atomic_malloc_index, UNLOCKED, LOCKED) === LOCKED);
        },
        atomic_unlock: function atomic_unlock(atomic_addr) {
          var __atomic_malloc_index = atomic_addr / 4;
          self.Atomics.store(wasm_wrapper.memory_views.I32, __atomic_malloc_index, UNLOCKED);
          self.Atomics.notify(wasm_wrapper.memory_views.I32, __atomic_malloc_index, 1);
        }
      });
    }
  }
  return imports_lib;
});
;

/***/ }),

/***/ "../../renderity/wasm-wrapper/src/memory.js":
/*!**************************************************************!*\
  !*** /Users/Denis/reps/renderity/wasm-wrapper/src/memory.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _this = this;
  var that = this;
  this.options = Object.assign({
    // 1024 b * 1024 b == 1048576 b == 1 mb
    thread_stack_size: 0x0100000
  }, this.options);
  ['Uint8Array', 'Int8Array', 'Uint16Array', 'Int16Array', 'Uint32Array', 'Int32Array', 'Uint8Array', 'Int8Array', 'BigUint64Array', 'BigInt64Array', 'Float32Array', 'Float64Array'].forEach(function (typed_array_name) {
    if (self[typed_array_name]) {
      /**
       * byteOffset is an address in WASM memory.
       *
       * Array has to be used carefully, especially on mobile devices.
       * Undefined behavior may be occured in the following cases:
       * - Transferring array between workers (for both ArrayBuffer and SharedArrayBuffer).
       * - Calling slice().
       * ...
       */

      _this[typed_array_name] = /*#__PURE__*/function (_self$typed_array_nam) {
        _inherits(_class, _self$typed_array_nam);
        var _super = _createSuper(_class);
        function _class() {
          var _this2;
          _classCallCheck(this, _class);
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          if (args[0] instanceof self.ArrayBuffer || self.SharedArrayBuffer && args[0] instanceof self.SharedArrayBuffer) {
            if (args[0] === that.memory.buffer) {
              _this2 = _super.call.apply(_super, [this].concat(args));
              _this2.__allocated = false;
              return _possibleConstructorReturn(_this2);
            }
            throw new Error('wasm-wrapper typed array can not be backed by array buffer other than wasm-wrapper instance memory buffer.');
          }
          var length = 0;
          if (_typeof(args[0]) === 'object') {
            // length = args[0].length;
            length = args[0].length;
            if (args[0] instanceof that[typed_array_name] || args[0] instanceof that["".concat(typed_array_name, "2")]) {
              var byteOffset = args[0].byteOffset;
              _this2 = _super.call(this, that.memory.buffer, byteOffset, length);
              _this2.__allocated = false;
            } else {
              var _byteOffset = that.exports.__malloc(length * self[typed_array_name].BYTES_PER_ELEMENT);
              _this2 = _super.call(this, that.memory.buffer, _byteOffset, length);
              _this2.__allocated = true;
              _this2.set(args[0]);
            }
          } else {
            length = args[0];
            var _byteOffset2 = that.exports.__malloc(length * self[typed_array_name].BYTES_PER_ELEMENT);
            _this2 = _super.call(this, that.memory.buffer, _byteOffset2, length);
            _this2.__allocated = true;
          }
          return _possibleConstructorReturn(_this2);
        }
        _createClass(_class, [{
          key: "__free",
          value: function __free() {
            that.exports.__free(this.byteOffset);
          }

          // slice (...args) {}
        }]);
        return _class;
      }(self[typed_array_name]);
      _this["".concat(typed_array_name, "2")] = /*#__PURE__*/function () {
        function _class2() {
          _classCallCheck(this, _class2);
          var byteOffset = 0;
          var length = 0;
          this.__allocated = false;
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          if (args[0] instanceof self.ArrayBuffer || self.SharedArrayBuffer && args[0] instanceof self.SharedArrayBuffer) {
            if (args[0] === that.memory.buffer) {
              byteOffset = args[1] || 0;
              length = args[2] || that.memory.buffer.byteLength / self[typed_array_name].BYTES_PER_ELEMENT;
              Object.assign(this, {
                byteOffset: byteOffset,
                length: length
              });
              return;
            }
            throw new Error('wasm-wrapper typed array can not be backed by array buffer other than wasm-wrapper instance memory buffer.');
          }
          if (_typeof(args[0]) === 'object') {
            // if (args[0].buffer === that.memory.buffer)
            length = args[0].length;
            if (args[0] instanceof that[typed_array_name] || args[0] instanceof that["".concat(typed_array_name, "2")]) {
              byteOffset = args[0].byteOffset;
              Object.assign(this, {
                byteOffset: byteOffset,
                length: length
              });
            } else {
              byteOffset = that.exports.__malloc(length * self[typed_array_name].BYTES_PER_ELEMENT);
              this.__allocated = true;
              Object.assign(this, {
                byteOffset: byteOffset,
                length: length
              });
              this.set(args[0]);
            }
          } else {
            length = args[0];
            byteOffset = that.exports.__malloc(length * self[typed_array_name].BYTES_PER_ELEMENT);
            this.__allocated = true;
            Object.assign(this, {
              byteOffset: byteOffset,
              length: length
            });
          }
        }
        _createClass(_class2, [{
          key: "buffer",
          get: function get() {
            return that.memory.buffer;
          }
        }, {
          key: "__free",
          value: function __free() {
            that.exports.__free(this.byteOffset);
          }
        }, {
          key: "__getData",
          value: function __getData() {
            return new self[typed_array_name](that.memory.buffer, this.byteOffset, this.length);
          }
        }]);
        return _class2;
      }();
      ['set', 'slice'].forEach(function (function_name) {
        _this["".concat(typed_array_name, "2")].prototype[function_name] = function () {
          var _self$typed_array_nam2;
          return (_self$typed_array_nam2 = new self[typed_array_name](that.memory.buffer, this.byteOffset, this.length))[function_name].apply(_self$typed_array_nam2, arguments);
        };
      });
    }
  });
  {
    this.mem =
    // TODO: wrap into "cxx" prop.
    // TODO: add "views" props instead of using this.memory_views.
    {
      'bool': {
        kind: 'Uint'
      },
      'char': {
        kind: 'Uint'
      },
      'int': {
        kind: 'Int'
      },
      'short': {
        kind: 'Int'
      },
      'long': {
        kind: 'Int'
      },
      'size_t': {
        kind: 'Uint'
      },
      'addr': {
        kind: 'Uint'
      },
      'uint8_t': {
        kind: 'Uint'
      },
      'int8_t': {
        kind: 'Int'
      },
      'uint16_t': {
        kind: 'Uint'
      },
      'int16_t': {
        kind: 'Int'
      },
      'uint32_t': {
        kind: 'Uint'
      },
      'int32_t': {
        kind: 'Int'
      },
      'uint64_t': {
        kind: 'Uint'
      },
      'int64_t': {
        kind: 'Int'
      },
      'float': {
        kind: 'Float'
      },
      'double': {
        kind: 'Float'
      },
      'long_double': {
        kind: 'Float'
      },
      'c_string': {}
    };
    this.type_names = Object.keys(this.mem);
    this.type_names.forEach(function (type_name, type_name_index) {
      var size = _this.exports.__sizeof(type_name_index);
      var typed_array_constructor_name = "".concat(_this.mem[type_name].kind).concat(size * 8, "Array");
      if (!_this[typed_array_constructor_name]) {
        typed_array_constructor_name = "Big".concat(typed_array_constructor_name);
      }
      Object.assign(_this.mem[type_name], {
        size: size,
        typed_array_constructor: self[typed_array_constructor_name],
        typed_array_constructor_wasm: _this[typed_array_constructor_name],
        typed_array_constructor_wasm2: _this["".concat(typed_array_constructor_name, "2")],
        interp_log: function interp_log(addr) {
          return _this[type_name](addr)[0];
        },
        interp_thread: function interp_thread(addr) {
          return _this[type_name](addr);
        }
      });
    });
    this.mem.bool.interp_log = function (addr) {
      return Boolean(_this.bool(addr)[0]);
    }, this.mem.c_string.interp_log = function (addr) {
      return _this.c_string2(_this.addr(addr)[0]);
    };
    this.mem.c_string.interp_thread = function (addr) {
      return _this.addr(addr);
    };
    this.mem.c_string.interp_arg = function (str) {
      return new _this.mem["char"].typed_array_constructor_wasm(_this.constructor.convertDomStringToUint8Array(str)).byteOffset;
    };
  }
  {
    this.memory_views = {};
    this.memory_views.UI8 = new self.Uint8Array(this.memory.buffer);
    this.memory_views.UI8 = new self.Uint8Array(this.memory.buffer);
    this.memory_views.I8 = new self.Int8Array(this.memory.buffer);
    this.memory_views.UI16 = new self.Uint16Array(this.memory.buffer);
    this.memory_views.I16 = new self.Int16Array(this.memory.buffer);
    this.memory_views.UI32 = new self.Uint32Array(this.memory.buffer);
    this.memory_views.I32 = new self.Int32Array(this.memory.buffer);
    this.memory_views.I32 = new self.Int32Array(this.memory.buffer);
    if (self.BigUint64Array) {
      this.memory_views.UI64 = new self.BigUint64Array(this.memory.buffer);
    }
    if (self.BigInt64Array) {
      this.memory_views.I64 = new self.BigInt64Array(this.memory.buffer);
    }
    this.memory_views.F32 = new self.Float32Array(this.memory.buffer);
    this.memory_views.F64 = new self.Float64Array(this.memory.buffer);
  }
});

/***/ }),

/***/ "../../renderity/wasm-wrapper/src/wasm-wrapper.js":
/*!********************************************************************!*\
  !*** /Users/Denis/reps/renderity/wasm-wrapper/src/wasm-wrapper.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _memory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memory */ "../../renderity/wasm-wrapper/src/memory.js");
/* harmony import */ var _imports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imports */ "../../renderity/wasm-wrapper/src/imports.js");
/* harmony import */ var _cxx_specific__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cxx-specific */ "../../renderity/wasm-wrapper/src/cxx-specific.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * https://webassembly.org
 * https://webassembly.github.io/spec
 * https://github.com/WebAssembly
 * https://developer.mozilla.org/en-US/docs/WebAssembly
 * https://wasi.dev
 * https://lld.llvm.org/WebAssembly.html
 * https://github.com/bytecodealliance/wasmtime/blob/main/docs/WASI-documents.md
 * https://docs.wasmtime.dev/
 * https://v8.dev/
 *
 *
 *
 * Using TypedArray.subarray() is preferred
 * when accessing to data
 * to avoid extra memory allocation.
 *
 *
 *
 * Strange std::string behavior:
 * if std::string data length <=11, std::string object address is the same with its data;
 * if >11, std::string object name stores address of beginning of the data.
 * So in second case one can use WasmWrapper::c_string method to get string bytes.
 * Maybe it's not related to data length, but to dynamic memory allocation.
 *
 *
 *
 * If memory is shared then maximum memory size is specified at compilation.
 *
 *
 *
 * Passing argument by reference works as passing by pointer.
 * So, functions with reference parameters expect address instead of value.
 *
 *
 *
 * TODO: determination capabiity of what wasm memory type is being used.
 *
 *
 *
 * 1 page == 65536 bytes == 0.0625 mb.
 * 1 mb == 16 pages.
 * 1gb == 16384 pages.
 * 4gb == 65536 pages (maximum memory size for wasm32).
 */

/*
eslint-disable

max-statements,
*/

// Webpack arraybuffer-loader is required.
// import test_simd_wasm_buffer from './test-simd/build/clang-wasm32/output/wasm/test-simd.wasm';




var __CODE_TYPE_BYTECODE__ = 0;
var __CODE_TYPE_FUNCTION__ = 1;
var IDLE_FUNCTION = function IDLE_FUNCTION() {
  return 0;
};
var ERROR_LOG = function ERROR_LOG() {
  var _console;
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return (_console = console).log.apply(_console, ["%c".concat(args[0]), 'background-color: red; padding: 2px;'].concat(_toConsumableArray(args.slice(1))));
};
var WARN_LOG = function WARN_LOG() {
  var _console2;
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }
  return (_console2 = console).log.apply(_console2, ["%c".concat(args[0]), 'background-color: #8B8000; padding: 2px;'].concat(_toConsumableArray(args.slice(1))));
};
var DEBUG_INFO = [];
var DEBUG_INFO_PUSH = function DEBUG_INFO_PUSH() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }
  return DEBUG_INFO.push(args);
};
var DEBUG_INFO_LOG = function DEBUG_INFO_LOG(thread_id) {
  DEBUG_INFO.forEach(function (label) {
    var _console3;
    return (_console3 = console).log.apply(_console3, ["%c".concat(thread_id, ": ").concat(label[0]), 'background-color: #00858A; padding: 2px;'].concat(_toConsumableArray(label.slice(1))));
  });
  DEBUG_INFO.length = 0;
};
DEBUG_INFO_PUSH("WASM CONCURRENCY: ".concat(self.navigator.hardwareConcurrency));
var WasmWrapper = /*#__PURE__*/function () {
  function WasmWrapper() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, WasmWrapper);
    self.__wasm_wrapper__ = this;
    this.options = options;
    var wasm_wrapper = this;
    var ThreadPromiseBunch = /*#__PURE__*/function () {
      function ThreadPromiseBunch() {
        _classCallCheck(this, ThreadPromiseBunch);
        // TODO: rename to run_count.
        this.running_count = 0;
      }
      _createClass(ThreadPromiseBunch, [{
        key: "run",
        value: function run(callback1) {
          var _this = this;
          var callback2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : IDLE_FUNCTION;
          ++this.running_count;
          if (this.running_count > 1) {
            this.callback_next1 = callback1;
            this.callback_next2 = callback2;
            return false;
          }
          return Promise.all(callback1()).then(function (resolves) {
            callback2(resolves);
            if (_this.running_count > 1) {
              _this.running_count = 0;
              return _this.run(_this.callback_next1, _this.callback_next2);
            }
            _this.running_count = 0;
            return true;
          });
        }
      }, {
        key: "runAsync",
        value: function () {
          var _runAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(callback1) {
            var _this2 = this;
            var callback2,
              _args = arguments;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  callback2 = _args.length > 1 && _args[1] !== undefined ? _args[1] : IDLE_FUNCTION;
                  ++this.running_count;
                  if (!(this.running_count > 1)) {
                    _context.next = 6;
                    break;
                  }
                  this.callback_next1 = callback1;
                  this.callback_next2 = callback2;
                  return _context.abrupt("return", false);
                case 6:
                  _context.t0 = Promise;
                  _context.next = 9;
                  return callback1();
                case 9:
                  _context.t1 = _context.sent;
                  return _context.abrupt("return", _context.t0.all.call(_context.t0, _context.t1).then(function (resolves) {
                    callback2(resolves);
                    if (_this2.running_count > 1) {
                      _this2.running_count = 0;
                      return _this2.runAsync(_this2.callback_next1, _this2.callback_next2);
                    }
                    _this2.running_count = 0;
                    return true;
                  }));
                case 11:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function runAsync(_x) {
            return _runAsync.apply(this, arguments);
          }
          return runAsync;
        }()
      }, {
        key: "run2",
        value: function run2(callback1) {
          var callback2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : IDLE_FUNCTION;
          return Promise.all(callback1()).then(callback2);
        }
      }, {
        key: "runAsync2",
        value: function () {
          var _runAsync2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(callback1) {
            var callback2,
              _args2 = arguments;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  callback2 = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : IDLE_FUNCTION;
                  _context2.t0 = Promise;
                  _context2.next = 4;
                  return callback1();
                case 4:
                  _context2.t1 = _context2.sent;
                  return _context2.abrupt("return", _context2.t0.all.call(_context2.t0, _context2.t1).then(callback2));
                case 6:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function runAsync2(_x2) {
            return _runAsync2.apply(this, arguments);
          }
          return runAsync2;
        }()
      }]);
      return ThreadPromiseBunch;
    }();
    this.ThreadPromiseBunch = ThreadPromiseBunch;
  }
  _createClass(WasmWrapper, [{
    key: "function",
    value: function _function(addr) {
      return this.exports.__indirect_function_table.get(addr);
    }
  }, {
    key: "async",
    value: function () {
      var _async = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_function) {
        var _len4,
          args,
          _key4,
          _args3 = arguments;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              for (_len4 = _args3.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
                args[_key4 - 1] = _args3[_key4];
              }
              this.async_args = args;
              (this.async_func = _function).apply(void 0, args);
              this.exports.asyncify_stop_unwind();
              _context3.next = 6;
              return this.async_promise;
            case 6:
              this.async_count = 0;
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function async(_x3) {
        return _async.apply(this, arguments);
      }
      return async;
    }()
  }, {
    key: "instantiate",
    value: function () {
      var _instantiate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(_ref) {
        var _this3 = this;
        var wasm_module_imports, imports_lib, imports_custom, wasm_module, code, debug, imports_aggregate, exports, wasm_module_instance;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              wasm_module_imports = _ref.wasm_module_imports, imports_lib = _ref.imports_lib, imports_custom = _ref.imports_custom, wasm_module = _ref.wasm_module, code = _ref.code, debug = _ref.debug;
              // Object for passing to threads.
              this.imports_thread = {
                env: {}
              };
              Object.keys(imports_custom).forEach(function (module) {
                Object.keys(imports_custom[module]).forEach(function (import_custom) {
                  if (!_this3.imports_thread[module]) {
                    _this3.imports_thread[module] = {};
                  }
                  _this3.imports_thread[module][import_custom] = 0;

                  // TODO: use "|=" operator ?
                  // If (imports_custom[module][import_custom] === 0) then make it IDLE_FUNCTION.
                  imports_custom[module][import_custom] = imports_custom[module][import_custom] || IDLE_FUNCTION;
                });
              });
              imports_aggregate = {};
              Object.assign(imports_aggregate, imports_custom);
              Object.assign(imports_aggregate.env, imports_lib);

              // Imported memory
              if (this.memory) {
                imports_aggregate.env.memory = this.memory;
              }
              wasm_module_imports.forEach(function (wasm_module_import) {
                if (!imports_aggregate[wasm_module_import.module]) {
                  imports_aggregate[wasm_module_import.module] = {};
                }
                if (!imports_aggregate[wasm_module_import.module][wasm_module_import.name]) {
                  if (debug) {
                    WARN_LOG("Missed ".concat(wasm_module_import.module, " import:"), wasm_module_import.name);
                  }
                  imports_aggregate[wasm_module_import.module][wasm_module_import.name] = IDLE_FUNCTION;
                  // imports_aggregate[wasm_module_import.module][wasm_module_import.name] = () => { MISSED_IMPORT_FUNCTION_LOG(`Missed import function called: module "${ wasm_module_import.module }", function "${ wasm_module_import.name }"`); };

                  // if (wasm_module_import.name !== 'clock_time_get')
                  // {
                  // 	imports_aggregate[wasm_module_import.module][wasm_module_import.name] = () => { MISSED_IMPORT_FUNCTION_LOG(`Missed import function called: module "${ wasm_module_import.module }", function "${ wasm_module_import.name }"`); };
                  // }

                  // if (wasm_module_import.name === 'fd_write')
                  // {
                  // 	imports_aggregate[wasm_module_import.module][wasm_module_import.name] = (...args) => { MISSED_IMPORT_FUNCTION_LOG(`Missed import function called: module "${ wasm_module_import.module }", function "${ wasm_module_import.name }"`); LOG(args.map(arg => this.CString2(arg))); };
                  // }
                }
              });
              exports = null;
              console.log(wasm_module);
              if (!wasm_module) {
                _context4.next = 19;
                break;
              }
              _context4.next = 13;
              return WebAssembly.instantiate
              // await WebAssembly.instantiateStreaming
              (wasm_module, imports_aggregate);
            case 13:
              wasm_module_instance = _context4.sent;
              console.log(wasm_module_instance);
              if (debug) {
                DEBUG_INFO_PUSH('WASM MODULE INSTANCE:', wasm_module_instance);
              }

              // this.instance = wasm_module_instance;
              exports = wasm_module_instance.exports;
              _context4.next = 20;
              break;
            case 19:
              // imports_aggregate.wasi_snapshot_preview1 = {};
              // imports_aggregate.wasi_snapshot_preview1.fd_write = (...args) => LOG(args.map(arg => this.c_string2(arg)));

              exports = code(imports_aggregate);
            case 20:
              // Exported memory
              if (!this.memory) {
                this.memory = exports.memory;
              }
              DEBUG_INFO_PUSH("WASM MEMORY: ".concat(this.memory.buffer.byteLength / 65536, " pages (").concat(this.memory.buffer.byteLength, " bytes)"));
              return _context4.abrupt("return", exports);
            case 23:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function instantiate(_x4) {
        return _instantiate.apply(this, arguments);
      }
      return instantiate;
    }()
  }, {
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(_ref2) {
        var code, _ref2$memory, memory, _ref2$memory_params, memory_params, _ref2$imports, imports_custom, _ref2$stack_pointer, stack_pointer, _ref2$configureMemory, configureMemory, _ref2$forceLocalMemor, forceLocalMemory, _ref2$initGlobals, initGlobals, _ref2$demangleCxxName, demangleCxxNames, _ref2$debug, debug, code_type, code_temp, imports_lib, wasm_module, wasm_module_imports, _wasm_module_imports$, _wasm_module_imports$2, imported_memory, shared_memory_allowed, memory_desc, _wasm_module_imports, _this$demangleCxxName, exports_demangled, exports_demangled_reduced;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              code = _ref2.code, _ref2$memory = _ref2.memory, memory = _ref2$memory === void 0 ? null : _ref2$memory, _ref2$memory_params = _ref2.memory_params, memory_params = _ref2$memory_params === void 0 ? {
                minimum: 1,
                initial: 1,
                maximum: 65536,
                shared: true
              } : _ref2$memory_params, _ref2$imports = _ref2.imports, imports_custom = _ref2$imports === void 0 ? {
                env: {}
              } : _ref2$imports, _ref2$stack_pointer = _ref2.stack_pointer, stack_pointer = _ref2$stack_pointer === void 0 ? undefined : _ref2$stack_pointer, _ref2$configureMemory = _ref2.configureMemory, configureMemory = _ref2$configureMemory === void 0 ? true : _ref2$configureMemory, _ref2$forceLocalMemor = _ref2.forceLocalMemory, forceLocalMemory = _ref2$forceLocalMemor === void 0 ? false : _ref2$forceLocalMemor, _ref2$initGlobals = _ref2.initGlobals, initGlobals = _ref2$initGlobals === void 0 ? true : _ref2$initGlobals, _ref2$demangleCxxName = _ref2.demangleCxxNames, demangleCxxNames = _ref2$demangleCxxName === void 0 ? false : _ref2$demangleCxxName, _ref2$debug = _ref2.debug, debug = _ref2$debug === void 0 ? false : _ref2$debug;
              code_type = null; // Code for passing to other WASM instances (e.g. threads).
              this.code = code;
              if (typeof code === 'string') {
                if (code.startsWith('function')) {
                  code_type = __CODE_TYPE_FUNCTION__;
                  code = new Function(code);
                  DEBUG_INFO_PUSH("WASM CODE: string function -> ".concat(code.constructor.name));
                }
                // base64
                else {
                  code = Uint8Array.from(atob(code), function (c) {
                    return c.charCodeAt(0);
                  });

                  // TODO: Make code shared (if can) to speed up passing it to workers. DONE?
                  if (self.SharedArrayBuffer) {
                    code_temp = code;
                    code = new Uint8Array(new SharedArrayBuffer(code.length));
                    code.set(code_temp);
                  }
                  this.code = code;
                  code_type = __CODE_TYPE_BYTECODE__;
                  DEBUG_INFO_PUSH("WASM CODE: string base64 -> ".concat(code.constructor.name));
                }
              } else if (typeof code === 'function') {
                code_type = __CODE_TYPE_FUNCTION__;
                this.code = code.toString();
                DEBUG_INFO_PUSH("WASM CODE: function");
              }
              // Code is an Uint8Array backed (SharedArrayBuffer optionally) or ArrayBuffer or SharedArrayBuffer.
              // UPD. SharedArrayBuffer can not be used as source for WebAssembly module, only for Uint8Array
              // backed by SharedArrayBuffer.
              else {
                code_type = __CODE_TYPE_BYTECODE__;
                DEBUG_INFO_PUSH("WASM CODE: ".concat(code.constructor.name));
              }
              DEBUG_INFO_PUSH("WASM CODE: ".concat(code_type === __CODE_TYPE_BYTECODE__ ? 'BYTECODE' : 'FUNCTION'));
              imports_lib = Object(_imports__WEBPACK_IMPORTED_MODULE_1__["default"])(this);
              if (!(code_type === __CODE_TYPE_BYTECODE__)) {
                _context5.next = 19;
                break;
              }
              _context5.next = 9;
              return WebAssembly.compile(code);
            case 9:
              wasm_module = _context5.sent;
              if (debug) {
                DEBUG_INFO_PUSH('WASM MODULE: ', wasm_module);
              }
              wasm_module_imports = WebAssembly.Module.imports(wasm_module); // const wasm_module_exports = WebAssembly.Module.exports(wasm_module);
              this.memory = null;

              // Memory comes from WASM main worker instance to thread instance.
              // is always imported and shared.
              if (memory) {
                this.memory = memory;
                DEBUG_INFO_PUSH('WASM MEMORY: IMPORTED');
                DEBUG_INFO_PUSH('WASM MEMORY: SHARED');
              } else {
                _wasm_module_imports$ = wasm_module_imports.filter(function (import_desc) {
                  return import_desc.kind === 'memory';
                }), _wasm_module_imports$2 = _slicedToArray(_wasm_module_imports$, 1), imported_memory = _wasm_module_imports$2[0];
                shared_memory_allowed = Boolean(self.SharedArrayBuffer) && !forceLocalMemory;
                if (imported_memory) {
                  DEBUG_INFO_PUSH('WASM MEMORY: IMPORTED');
                  memory_desc = null;
                  if (imported_memory.type) {
                    /**
                     * chrome://flags#enable-experimental-webassembly-features must be enabled
                     * to access "type" property of "imported_memory". It contains memory
                     * type and size info produced by the linker (aka defined in WebAssembly module).
                     *
                     * "--import-memory" linker flag specifies whether memory is imported to WebAssembly module.
                     * "--shared-memory" linker flag specifies whether memory is shared between WebAssembly instances.
                     * "--max-memory=N" linker flag specifies maximum size of memory for WebAssembly instance.
                     *
                     * The advantqge of this is that we don't need to provide "memory_params"
                     * to crate the memory object. Memory object is created automatically
                     * after reading the "imported_memory.type".
                     */

                    memory_desc = {
                      initial: imported_memory.type.minimum,
                      maximum: imported_memory.type.maximum || imported_memory.type.minimum,
                      shared: imported_memory.type.shared && shared_memory_allowed
                    };
                  }
                  // Parameters must match values produced by the linker (aka defined in WebAssembly module).
                  else {
                    memory_desc = {
                      // 65536 pages == 4gb, maximum possible memory size for 32-bit WebAssembly instance.
                      initial: memory_params.initial,
                      maximum: memory_params.maximum,
                      // Must match "--max-memory=N" flag.
                      // shared, // Must match "--shared-memory" flag.
                      shared: memory_params.shared && shared_memory_allowed
                    };
                  }
                  this.memory = new WebAssembly.Memory(memory_desc);
                  DEBUG_INFO_PUSH("WASM MEMORY: ".concat(memory_desc.shared ? 'SHARED' : 'NOT SHARED'));
                }
                // TODO: add the case when memory is imported but can be created with arbitrary parameters.
                // Is this case possible? Meybe possible only when memory is not shared?
                else {
                  DEBUG_INFO_PUSH('WASM MEMORY: EXPORTED');
                }
              }
              _context5.next = 16;
              return this.instantiate({
                wasm_module_imports: wasm_module_imports,
                imports_lib: imports_lib,
                imports_custom: imports_custom,
                wasm_module: wasm_module,
                debug: debug
              });
            case 16:
              this.exports = _context5.sent;
              _context5.next = 25;
              break;
            case 19:
              /**
               * Initializes WasmWrapper instance with JS code compiled from WASM with wasm2js.
               * In this case presume WASM instances don't use shared memory and exported memory.
               * Compiler option "-matomics" must not be used.
               * Linker option "--shared-memory" must not be used.
               * wasm2js options "--disable-threads", "--emscripten" must be used.
               */

              this.memory = null;
              if (memory) {
                this.memory = memory;
              } else {
                this.memory = {
                  buffer: new self.ArrayBuffer(Math.imul(memory_params.initial, memory_params.maximum))
                };
              }

              // TODO: Find better solution to get import modules used.
              // Now it is hardcoded.
              _wasm_module_imports = [{
                module: 'env'
              }, {
                module: 'wasi_snapshot_preview1'
              }];
              _context5.next = 24;
              return this.instantiate({
                wasm_module_imports: _wasm_module_imports,
                imports_lib: imports_lib,
                imports_custom: imports_custom,
                code: code,
                debug: debug
              });
            case 24:
              this.exports = _context5.sent;
            case 25:
              if (configureMemory) {
                this.configureMemory();
              }
              if (this.exports.__main) {
                this.__thread_id = this.exports.__main(stack_pointer);
                if (debug) {
                  DEBUG_INFO_LOG(this.__thread_id);
                }
              }
              if (initGlobals) {
                this.globals = this.initGlobals();
                if (debug) {
                  DEBUG_INFO_PUSH('WASM GLOBALS:', this.globals);
                }
              }
              if (demangleCxxNames) {
                _this$demangleCxxName = this.demangleCxxNames(), exports_demangled = _this$demangleCxxName.exports_demangled, exports_demangled_reduced = _this$demangleCxxName.exports_demangled_reduced;
                Object.assign(this, {
                  exports_demangled: exports_demangled,
                  exports_demangled_reduced: exports_demangled_reduced
                });
                if (debug) {
                  DEBUG_INFO_PUSH('WASM EXPORTS DEMANGLED: ', this.exports_demangled);
                  DEBUG_INFO_PUSH('WASM EXPORTS DEMANGLED: ', this.exports_demangled_reduced);
                }
              }
            case 29:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function init(_x5) {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }, {
    key: "initGlobals",
    value: function initGlobals() {
      var _this4 = this;
      var globals = {};
      var prefix_length = '__EXPORT_ADDR__'.length;
      Object.keys(this.exports).forEach(function (export_name) {
        if (export_name.startsWith('__EXPORT_ADDR__')) {
          globals[export_name.slice(prefix_length)] = _this4.exports[export_name]();
        }
      });
      return globals;
    }
  }], [{
    key: "convertUint8ArrayToDomString",
    value: function convertUint8ArrayToDomString(uint8array) {
      // return WasmWrapper.text_decoder.decode(uint8_array);
      // return WasmWrapper.text_decoder.decode(uint8array.slice());
      return WasmWrapper.text_decoder.decode(new self.Uint8Array(uint8array)); // Decoding view of shared buffer is not allowed so need new instance.
    }
  }, {
    key: "convertDomStringToUint8Array",
    value: function convertDomStringToUint8Array(text) {
      return WasmWrapper.text_encoder.encode(text);
    }
  }, {
    key: "testSimd",
    value: function () {
      var _testSimd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var result, wasm_buffer, wasm_module, instance;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              result = false;
              _context6.prev = 1;
              _context6.next = 4;
              return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./test-simd/build/test.wasm */ "../../renderity/wasm-wrapper/src/test-simd/build/test.wasm"));
            case 4:
              wasm_buffer = _context6.sent["default"];
              _context6.next = 7;
              return WebAssembly.compile(wasm_buffer);
            case 7:
              wasm_module = _context6.sent;
              _context6.next = 10;
              return WebAssembly.instantiate(wasm_module);
            case 10:
              instance = _context6.sent;
              // // Webpack since version 4 has embedded WASM parser.
              // // MIME type "application/wasm" must be defined for ".wasm" extension on server.
              // // TODO: use another type of importing ?
              // await import('./test-simd/build/clang-wasm32/output/wasm/test-simd.wasm');

              result = true;
              _context6.next = 17;
              break;
            case 14:
              _context6.prev = 14;
              _context6.t0 = _context6["catch"](1);
              ERROR_LOG("WASM SIMD TEST FAILED: ".concat(_context6.t0));
            case 17:
              DEBUG_INFO_PUSH("WASM SIMD: ".concat(result ? 'ON' : 'OFF'));
              return _context6.abrupt("return", result);
            case 19:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[1, 14]]);
      }));
      function testSimd() {
        return _testSimd.apply(this, arguments);
      }
      return testSimd;
    }()
    /**
     * memory.atomic.wait can't be called in main worker
     * so need to make the test in another worker.
     */
  }, {
    key: "testAtomics",
    value: (function () {
      var _testAtomics = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var result, wasm_buffer, wasm_module, instance;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              result = false;
              _context7.prev = 1;
              _context7.next = 4;
              return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./test-atomic/build/test.wasm */ "../../renderity/wasm-wrapper/src/test-atomic/build/test.wasm"));
            case 4:
              wasm_buffer = _context7.sent["default"];
              _context7.next = 7;
              return WebAssembly.compile(wasm_buffer);
            case 7:
              wasm_module = _context7.sent;
              _context7.next = 10;
              return WebAssembly.instantiate(wasm_module);
            case 10:
              instance = _context7.sent;
              result = true;
              _context7.next = 17;
              break;
            case 14:
              _context7.prev = 14;
              _context7.t0 = _context7["catch"](1);
              ERROR_LOG("WASM ATOMIC TEST FAILED: ".concat(_context7.t0));
            case 17:
              DEBUG_INFO_PUSH("WASM ATOMIC: ".concat(result ? 'ON' : 'OFF'));
              return _context7.abrupt("return", result);
            case 19:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[1, 14]]);
      }));
      function testAtomics() {
        return _testAtomics.apply(this, arguments);
      }
      return testAtomics;
    }())
  }]);
  return WasmWrapper;
}();
_defineProperty(WasmWrapper, "text_decoder", new self.TextDecoder('utf-8'));
_defineProperty(WasmWrapper, "text_encoder", new self.TextEncoder());
if (self.window) {
  WasmWrapper.prototype.getNewThread = function () {
    return new WasmWrapper.Thread(this);
  };
  WasmWrapper.prototype.getNewThread2 = function () {
    return new WasmWrapper.Thread2(this);
  };
  WasmWrapper.prototype.getNewThread3 = function () {
    return new WasmWrapper.Thread3(this);
  };
  WasmWrapper.prototype.getNewThread4 = function () {
    return new WasmWrapper.Thread4(this);
  };
  WasmWrapper.prototype.initThreads = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(thread_count) {
      var _this5 = this;
      var threads;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            threads = new Array(thread_count).fill(null).map(function () {
              return new WasmWrapper.Thread3(_this5);
            });
            _context8.next = 3;
            return Promise.all(threads.map(function (thread) {
              return thread.init();
            }));
          case 3:
            return _context8.abrupt("return", threads);
          case 4:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
    return function (_x6) {
      return _ref3.apply(this, arguments);
    };
  }();
  WasmWrapper.prototype.terminateThreads = function terminateThreads(threads) {
    threads.reverse().forEach(function (thread) {
      return thread.terminate();
    });
  };
}
WasmWrapper.prototype.configureMemory = _memory__WEBPACK_IMPORTED_MODULE_0__["default"];
Object.assign(WasmWrapper.prototype, _cxx_specific__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (WasmWrapper);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/@open-wc/webpack-import-meta-loader/webpack-import-meta-loader.js!./node_modules/conditional-compile-loader/index.js?!../../renderity/wasm-wrapper/src/threads/thread/thread.1.worker.js":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@open-wc/webpack-import-meta-loader/webpack-import-meta-loader.js!./node_modules/conditional-compile-loader??ref--5-2!/Users/Denis/reps/renderity/wasm-wrapper/src/threads/thread/thread.1.worker.js ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wasm_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../wasm-wrapper */ "../../renderity/wasm-wrapper/src/wasm-wrapper.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var wasm = new _wasm_wrapper__WEBPACK_IMPORTED_MODULE_0__["default"]();
onmessage = function onmessage(_ref) {
  var data = _ref.data;
  return wasm.init(data).then(function () {
    var _wasm$exports;
    return postMessage((_wasm$exports = wasm.exports)[data.function_name].apply(_wasm$exports, _toConsumableArray(data.data)));
  });
};
/* harmony default export */ __webpack_exports__["default"] = (0);

/***/ })

/******/ });
//# sourceMappingURL=thread.1.worker.worker.worker.js.map