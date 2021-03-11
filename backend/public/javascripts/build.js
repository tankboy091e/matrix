/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/app.js":
/*!*********************!*\
  !*** ./dist/app.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst space_1 = __importDefault(__webpack_require__(/*! ./views/space */ \"./dist/views/space.js\"));\r\nwindow.onload = () => new app();\r\nclass app {\r\n    constructor() {\r\n        this.view = new space_1.default();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://mate/./dist/app.js?");

/***/ }),

/***/ "./dist/components/cell.js":
/*!*********************************!*\
  !*** ./dist/components/cell.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst simulacre_1 = __importDefault(__webpack_require__(/*! ./simulacre */ \"./dist/components/simulacre.js\"));\r\nclass cell extends simulacre_1.default {\r\n    constructor(args) {\r\n        super(args);\r\n        this.size = args.size;\r\n    }\r\n    present(context) {\r\n        if (this.coord.x == undefined || this.coord.y == undefined) {\r\n            return;\r\n        }\r\n        context.font = `${this.size.height}px consolas`;\r\n        context.fillStyle = '#03A062';\r\n        context.fillText(Math.random().toString(36).charAt(2), this.coord.x * this.size.width, this.coord.y * this.size.height);\r\n        if (this.coord.y * this.size.height > context.canvas.height) {\r\n        }\r\n    }\r\n}\r\nexports.default = cell;\r\n\n\n//# sourceURL=webpack://mate/./dist/components/cell.js?");

/***/ }),

/***/ "./dist/components/simulacre.js":
/*!**************************************!*\
  !*** ./dist/components/simulacre.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nclass simulacre {\r\n    constructor(args) {\r\n        this.coord = { x: 0, y: 0 };\r\n    }\r\n    setCoord(x, y) {\r\n        if (x) {\r\n            this.setX(x);\r\n        }\r\n        if (y) {\r\n            this.setY(y);\r\n        }\r\n        return this;\r\n    }\r\n    moveDown(value = 1) {\r\n        this.setY(this.coord.y + value);\r\n        return this;\r\n    }\r\n    setX(value) {\r\n        this.coord.x = value;\r\n        return this;\r\n    }\r\n    setY(value) {\r\n        this.coord.y = value;\r\n        return this;\r\n    }\r\n}\r\nexports.default = simulacre;\r\n\n\n//# sourceURL=webpack://mate/./dist/components/simulacre.js?");

/***/ }),

/***/ "./dist/components/snake.js":
/*!**********************************!*\
  !*** ./dist/components/snake.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst cell_1 = __importDefault(__webpack_require__(/*! ./cell */ \"./dist/components/cell.js\"));\r\nconst simulacre_1 = __importDefault(__webpack_require__(/*! ./simulacre */ \"./dist/components/simulacre.js\"));\r\nclass snake extends simulacre_1.default {\r\n    constructor(args) {\r\n        super(args);\r\n        this.length = args.length;\r\n        this.children = new Array();\r\n        for (let i = 0; i < this.length; i++) {\r\n            const child = new cell_1.default({\r\n                size: args.size\r\n            });\r\n            this.children.push(child);\r\n        }\r\n    }\r\n    present(context) {\r\n        for (let i = 0; i < this.children.length; i++) {\r\n            this.children[i].present(context);\r\n            this.children[i].moveDown();\r\n        }\r\n    }\r\n    move() {\r\n        for (let i = 0; i < this.children.length; i++) {\r\n            this.children[i].moveDown();\r\n        }\r\n    }\r\n    setCoord(x, y) {\r\n        super.setCoord(x, y);\r\n        for (let i = 0; i < this.children.length; i++) {\r\n            this.children[i].setCoord(this.coord.x, this.coord.y - i);\r\n        }\r\n        return this;\r\n    }\r\n}\r\nexports.default = snake;\r\n\n\n//# sourceURL=webpack://mate/./dist/components/snake.js?");

/***/ }),

/***/ "./dist/views/space.js":
/*!*****************************!*\
  !*** ./dist/views/space.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst snake_1 = __importDefault(__webpack_require__(/*! ../components/snake */ \"./dist/components/snake.js\"));\r\nconst view_1 = __webpack_require__(/*! ./view */ \"./dist/views/view.js\");\r\nclass space extends view_1.canvas {\r\n    constructor() {\r\n        super();\r\n        this.cellSize = { width: 14, height: 20 };\r\n        console.log(this.context.font);\r\n        this.context.textBaseline = 'top';\r\n        this.children = new Array();\r\n        this.lanes = new Array();\r\n        for (let i = 0; i < this.stageWidth / this.cellSize.width; i++) {\r\n            this.lanes.push(new Array());\r\n        }\r\n        this.resize();\r\n    }\r\n    initializeLane() {\r\n        if (!this.cellSize) {\r\n            return;\r\n        }\r\n        const delta = (this.stageWidth / this.cellSize.width) - this.lanes.length;\r\n        if (delta < 0) {\r\n            for (let i = 0; i < -1 * delta; i++) {\r\n                this.lanes.pop();\r\n            }\r\n        }\r\n        if (delta > 0) {\r\n            for (let i = 0; i < delta; i++) {\r\n                this.lanes.push(new Array());\r\n            }\r\n        }\r\n    }\r\n    present() {\r\n        if (!this.children) {\r\n            return;\r\n        }\r\n        for (let i = 0; i < this.children.length; i++) {\r\n            this.children[i].present(this.context);\r\n        }\r\n    }\r\n    doubleUpdate() {\r\n        if (Math.random() < space.luck) {\r\n            this.born();\r\n        }\r\n    }\r\n    born() {\r\n        const child = new snake_1.default({\r\n            length: 7,\r\n            size: this.cellSize,\r\n        });\r\n        const lane = Math.floor(Math.random() * this.lanes.length);\r\n        child.setCoord(lane, 0);\r\n        this.children.push(child);\r\n        this.lanes[lane].push(child);\r\n    }\r\n    resize() {\r\n        super.resize();\r\n        this.initializeLane();\r\n    }\r\n}\r\nspace.luck = 0.99;\r\nexports.default = space;\r\n\n\n//# sourceURL=webpack://mate/./dist/views/space.js?");

/***/ }),

/***/ "./dist/views/view.js":
/*!****************************!*\
  !*** ./dist/views/view.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.canvas = void 0;\r\nclass view {\r\n    constructor() {\r\n        window.addEventListener('resize', this.resize.bind(this));\r\n    }\r\n}\r\nclass canvas extends view {\r\n    constructor() {\r\n        super();\r\n        this.frameRate = 12;\r\n        this.lastUpdated = 0;\r\n        this.lastDoubleUpdated = 0;\r\n        this.initializeCanvas();\r\n        this.resize();\r\n        window.requestAnimationFrame(this.animate.bind(this));\r\n    }\r\n    initializeCanvas() {\r\n        this.canvas = document.createElement('canvas');\r\n        document.body.appendChild(this.canvas);\r\n        this.context = this.canvas.getContext('2d');\r\n    }\r\n    resize() {\r\n        this.stageWidth = document.body.clientWidth;\r\n        this.stageHeight = document.body.clientHeight;\r\n        this.canvas.width = this.stageWidth * canvas.scale;\r\n        this.canvas.height = this.stageHeight * canvas.scale;\r\n        this.context.scale(canvas.scale, canvas.scale);\r\n    }\r\n    animate(t) {\r\n        window.requestAnimationFrame(this.animate.bind(this));\r\n        this.fps = (t - this.elapsed) * canvas.frame;\r\n        this.elapsed = t;\r\n        if (this.elapsed - this.lastUpdated >= 1000 / this.frameRate) {\r\n            this.update();\r\n            this.lastUpdated = this.elapsed;\r\n        }\r\n        if (this.elapsed - this.lastDoubleUpdated >= 500 / this.frameRate) {\r\n            this.doubleUpdate();\r\n            this.lastDoubleUpdated = this.elapsed;\r\n        }\r\n    }\r\n    update() {\r\n        this.context.clearRect(0, 0, this.stageWidth, this.stageHeight);\r\n        this.present(this.context);\r\n    }\r\n    doubleUpdate() { }\r\n}\r\nexports.canvas = canvas;\r\ncanvas.scale = 2;\r\ncanvas.frame = 0.0625;\r\nexports.default = view;\r\n\n\n//# sourceURL=webpack://mate/./dist/views/view.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./dist/app.js");
/******/ 	
/******/ })()
;