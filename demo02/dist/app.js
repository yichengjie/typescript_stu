/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var common_1 = __webpack_require__(1);
	var Animal = (function () {
	    function Animal(name) {
	        this.name = name;
	    }
	    Animal.prototype.move = function (meters) {
	        console.info(this.name + " moved " + meters + "m .");
	    };
	    return Animal;
	}());
	var Snake = (function (_super) {
	    __extends(Snake, _super);
	    function Snake() {
	        _super.apply(this, arguments);
	    }
	    Snake.prototype.move = function () {
	        console.info('Slitering....');
	        _super.prototype.move.call(this, 5);
	    };
	    return Snake;
	}(Animal));
	var Horse = (function (_super) {
	    __extends(Horse, _super);
	    function Horse() {
	        _super.apply(this, arguments);
	    }
	    Horse.prototype.move = function () {
	        console.info('Galloping....');
	        _super.prototype.move.call(this, 45);
	    };
	    return Horse;
	}(Animal));
	var sam = new Snake('Sammy the Python');
	//var tom:Animal = new Horse('Tommy the Palomino') ;
	sam.move();
	console.info('add result is : ', common_1.add(1, 2));
	//tom.move() ;
	//tom.move(34) ;


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	function add(a, b) {
	    return a + b;
	}
	exports.add = add;


/***/ }
/******/ ]);