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
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nclass cell {\r\n    constructor(args) {\r\n        this.coord = { x: 0, y: 0 };\r\n        this.size = args.size;\r\n    }\r\n    present(context, option = { blink: false, opacity: 1 }) {\r\n        if (this.lock) {\r\n            return;\r\n        }\r\n        this.lock = true;\r\n        setTimeout(() => {\r\n            this.lock = false;\r\n        }, (16));\r\n        if (this.coord.x == undefined || this.coord.y == undefined) {\r\n            return;\r\n        }\r\n        context.font = `${this.size.height}px consolas`;\r\n        context.fillStyle = option.blink ? '#FFFFFF' : '#03A062';\r\n        context.globalAlpha = option.opacity;\r\n        context.fillText(Math.random().toString(36).charAt(2), this.coord.x * this.size.width, this.coord.y * this.size.height);\r\n    }\r\n    setCoord(x, y) {\r\n        if (x) {\r\n            this.setX(x);\r\n        }\r\n        if (y) {\r\n            this.setY(y);\r\n        }\r\n        return this;\r\n    }\r\n    moveDown(value = 1) {\r\n        this.setY(this.coord.y + value);\r\n        return this;\r\n    }\r\n    setX(value) {\r\n        this.coord.x = value;\r\n        return this;\r\n    }\r\n    setY(value) {\r\n        this.coord.y = value;\r\n        return this;\r\n    }\r\n    startStared() {\r\n        this.stared = true;\r\n        return this;\r\n    }\r\n    drawStared() {\r\n        this.stared = false;\r\n        return this;\r\n    }\r\n    isStared() {\r\n        return this.stared;\r\n    }\r\n}\r\nexports.default = cell;\r\n\n\n//# sourceURL=webpack://mate/./dist/components/cell.js?");

/***/ }),

/***/ "./dist/components/simulacre.js":
/*!**************************************!*\
  !*** ./dist/components/simulacre.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nclass simulacre {\r\n    constructor(args) {\r\n        this.horizon = args.horizon;\r\n        this.coord = args.coord;\r\n    }\r\n}\r\nexports.default = simulacre;\r\n\n\n//# sourceURL=webpack://mate/./dist/components/simulacre.js?");

/***/ }),

/***/ "./dist/components/snake.js":
/*!**********************************!*\
  !*** ./dist/components/snake.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst space_1 = __webpack_require__(/*! ../views/space */ \"./dist/views/space.js\");\r\nconst simulacre_1 = __importDefault(__webpack_require__(/*! ./simulacre */ \"./dist/components/simulacre.js\"));\r\nclass snake extends simulacre_1.default {\r\n    constructor(args) {\r\n        super(args);\r\n        this.length = Math.floor(Math.random() * 7) + 12;\r\n        this.children = new Array();\r\n        this.initializeCoord();\r\n        this.tick = 0;\r\n    }\r\n    initializeCoord() {\r\n        for (let i = 0; i < this.length; i++) {\r\n            this.children.push({\r\n                x: this.coord.x,\r\n                y: this.coord.y - i,\r\n            });\r\n        }\r\n    }\r\n    present(context) {\r\n        var _a;\r\n        this.requestDestroy();\r\n        const toBeRemoved = [];\r\n        for (let i = this.children.length - 1; i >= 0; i--) {\r\n            const result = this.horizon.borrowCell(this.children[i].x, this.children[i].y);\r\n            if (result.response === space_1.borrowResponse.out) {\r\n                toBeRemoved.push(i);\r\n                continue;\r\n            }\r\n            (_a = result.cell) === null || _a === void 0 ? void 0 : _a.present(context, {\r\n                blink: i === 0,\r\n                opacity: 1 - (i / this.children.length)\r\n            });\r\n        }\r\n        for (let i = 0; i < toBeRemoved.length; i++) {\r\n            this.children.splice(toBeRemoved[i], 1);\r\n        }\r\n        if (this.tick % 2 == 0) {\r\n            this.move();\r\n        }\r\n        this.tick++;\r\n    }\r\n    move() {\r\n        if (this.children[0]) {\r\n            this.children[0].y++;\r\n        }\r\n        for (let i = 1; i < this.children.length; i++) {\r\n            if (this.children[i - 1].y - this.children[i].y > 1) {\r\n                this.children[i].y++;\r\n            }\r\n        }\r\n    }\r\n    requestDestroy() {\r\n        if (this.children.length < 1) {\r\n            this.horizon.destroy(this);\r\n        }\r\n    }\r\n}\r\nexports.default = snake;\r\n\n\n//# sourceURL=webpack://mate/./dist/components/snake.js?");

/***/ }),

/***/ "./dist/views/space.js":
/*!*****************************!*\
  !*** ./dist/views/space.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.borrowResponse = void 0;\r\nconst cell_1 = __importDefault(__webpack_require__(/*! ../components/cell */ \"./dist/components/cell.js\"));\r\nconst snake_1 = __importDefault(__webpack_require__(/*! ../components/snake */ \"./dist/components/snake.js\"));\r\nconst view_1 = __webpack_require__(/*! ./view */ \"./dist/views/view.js\");\r\nvar borrowResponse;\r\n(function (borrowResponse) {\r\n    borrowResponse[borrowResponse[\"success\"] = 0] = \"success\";\r\n    borrowResponse[borrowResponse[\"failed\"] = 1] = \"failed\";\r\n    borrowResponse[borrowResponse[\"out\"] = 2] = \"out\";\r\n})(borrowResponse = exports.borrowResponse || (exports.borrowResponse = {}));\r\nclass space extends view_1.canvas {\r\n    constructor() {\r\n        super();\r\n        this.context.textBaseline = 'top';\r\n        this.initializeChessBoard();\r\n        this.initializeLives();\r\n        this.resize();\r\n        window.addEventListener('click', this.detect.bind(this));\r\n    }\r\n    initializeChessBoard() {\r\n        this.initializeCellSize();\r\n        this.chessBoard = new Array();\r\n        for (let i = 0; i < this.stageWidth / this.cellSize.width; i++) {\r\n            this.chessBoard[i] = new Array();\r\n            for (let j = 0; j < this.stageHeight / this.cellSize.height + 1; j++) {\r\n                const child = new cell_1.default({\r\n                    size: this.cellSize,\r\n                });\r\n                child.setCoord(i, j);\r\n                this.chessBoard[i][j] = child;\r\n            }\r\n        }\r\n    }\r\n    initializeCellSize() {\r\n        if (this.cellSize) {\r\n            return;\r\n        }\r\n        this.cellSize = { width: 14, height: 20 };\r\n    }\r\n    initializeLives() {\r\n        this.lives = new Array();\r\n    }\r\n    present() {\r\n        if (!this.lives) {\r\n            return;\r\n        }\r\n        for (let i = this.lives.length - 1; i >= 0; i--) {\r\n            this.lives[i].present(this.context);\r\n        }\r\n    }\r\n    borrowCell(x, y) {\r\n        if (!this.chessBoard) {\r\n            return {\r\n                cell: null,\r\n                response: borrowResponse.failed\r\n            };\r\n        }\r\n        if (x < 0 || this.chessBoard.length - 1 < x || y < 0) {\r\n            return {\r\n                cell: null,\r\n                response: borrowResponse.failed\r\n            };\r\n        }\r\n        if (!this.chessBoard[x]) {\r\n            return {\r\n                cell: null,\r\n                response: borrowResponse.failed\r\n            };\r\n        }\r\n        if (this.chessBoard[x].length - 1 < y) {\r\n            return {\r\n                cell: null,\r\n                response: borrowResponse.out\r\n            };\r\n        }\r\n        return {\r\n            cell: this.chessBoard[x][y],\r\n            response: borrowResponse.success\r\n        };\r\n    }\r\n    doubleUpdate() {\r\n        if (Math.random() < space.luck) {\r\n            this.born();\r\n        }\r\n    }\r\n    born() {\r\n        const life = new snake_1.default({\r\n            horizon: this,\r\n            coord: {\r\n                x: Math.floor(this.chessBoard.length * Math.random()),\r\n                y: 0\r\n            },\r\n        });\r\n        this.lives.push(life);\r\n    }\r\n    detect(e) {\r\n    }\r\n    resize() {\r\n        super.resize();\r\n        this.initializeChessBoard();\r\n    }\r\n    destroy(life) {\r\n        this.lives.splice(this.lives.findIndex(x => x == life), 1);\r\n    }\r\n}\r\nspace.luck = 0.99;\r\nexports.default = space;\r\n\n\n//# sourceURL=webpack://mate/./dist/views/space.js?");

/***/ }),

/***/ "./dist/views/view.js":
/*!****************************!*\
  !*** ./dist/views/view.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.canvas = void 0;\r\nclass view {\r\n    constructor() {\r\n        window.addEventListener('resize', this.resize.bind(this));\r\n    }\r\n}\r\nclass canvas extends view {\r\n    constructor() {\r\n        super();\r\n        this.frameRate = 24;\r\n        this.lastUpdated = 0;\r\n        this.lastDoubleUpdated = 0;\r\n        this.initializeCanvas();\r\n        this.resize();\r\n        window.requestAnimationFrame(this.animate.bind(this));\r\n    }\r\n    initializeCanvas() {\r\n        this.canvas = document.createElement('canvas');\r\n        document.body.appendChild(this.canvas);\r\n        this.context = this.canvas.getContext('2d');\r\n    }\r\n    resize() {\r\n        this.stageWidth = document.body.clientWidth;\r\n        this.stageHeight = document.body.clientHeight;\r\n        this.canvas.width = this.stageWidth * canvas.scale;\r\n        this.canvas.height = this.stageHeight * canvas.scale;\r\n        this.context.scale(canvas.scale, canvas.scale);\r\n    }\r\n    animate(t) {\r\n        window.requestAnimationFrame(this.animate.bind(this));\r\n        this.fps = (t - this.elapsed) * canvas.frame;\r\n        this.elapsed = t;\r\n        if (this.elapsed - this.lastUpdated >= 1000 / this.frameRate) {\r\n            this.update();\r\n            this.lastUpdated = this.elapsed;\r\n        }\r\n        if (this.elapsed - this.lastDoubleUpdated >= 500 / this.frameRate) {\r\n            this.doubleUpdate();\r\n            this.lastDoubleUpdated = this.elapsed;\r\n        }\r\n    }\r\n    update() {\r\n        this.context.clearRect(0, 0, this.stageWidth, this.stageHeight);\r\n        this.present(this.context);\r\n    }\r\n    doubleUpdate() { }\r\n}\r\nexports.canvas = canvas;\r\ncanvas.scale = 2;\r\ncanvas.frame = 0.0625;\r\nexports.default = view;\r\n\n\n//# sourceURL=webpack://mate/./dist/views/view.js?");

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