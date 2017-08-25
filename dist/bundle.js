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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__board_board_js__ = __webpack_require__(1);


let board = new __WEBPACK_IMPORTED_MODULE_0__board_board_js__["a" /* Board */]();
board.render();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__templates_canvas_html__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__templates_canvas_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__templates_canvas_html__);


class Board {

    constructor() {
        this.canvas = __WEBPACK_IMPORTED_MODULE_0__templates_canvas_html___default.a;
        this.color = 'black';
        this.prevX = 0;
        this.currX = 0;
        this.prevY = 0;
        this.currY = 0;
        this.lineWidth = 2;
        this.canDraw = false;
    }

    render() {
        document.write(this.canvas);
        this.bindEvents();
    }

    bindEvents() {
        this.getCanvas().addEventListener('mousemove', event => {
            this.onMouseEvent('move', event);
        });

        this.getCanvas().addEventListener('mousedown', event => {
            this.onMouseEvent('down', event);
        });

        this.getCanvas().addEventListener('mouseup', event => {
            this.onMouseEvent('up', event);
        });

        this.getCanvas().addEventListener('mouseout', event => {
            this.onMouseEvent('out', event);
        });
    }

    onMouseEvent(mouseEventType, event) {
        this.getCoordinates(mouseEventType, event);
    }

    getContext() {
        const canvas = document.getElementById('whiteboard');
        return canvas.getContext("2d");
    }

    getCanvas() {
        return document.getElementById('whiteboard');
    }

    getCoordinates(mouseEventType, event) {
        const canvas = this.getCanvas();
        const ctx = this.getContext();
        if (mouseEventType === 'down') {
            this.prevX = this.currX;
            this.prevY = this.currY;
            this.currX = event.clientX - canvas.offsetLeft;
            this.currY = event.clientY - canvas.offsetTop;

            this.canDraw = true;

            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.fillRect(this.currX, this.currY, 2, 2);
            ctx.closePath();
        } else if (mouseEventType == 'up' || mouseEventType == "out") {
            this.canDraw = false;
        } else if (mouseEventType == 'move') {
            if (this.canDraw) {
                this.prevX = this.currX;
                this.prevY = this.currY;
                this.currX = event.clientX - canvas.offsetLeft;
                this.currY = event.clientY - canvas.offsetTop;
                this.draw();
            }
        }
    }

    draw() {
        const ctx = this.getContext();
        ctx.beginPath();
        ctx.moveTo(this.prevX, this.prevY);
        ctx.lineTo(this.currX, this.currY);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineWidth;
        ctx.stroke();
        ctx.closePath();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Board;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"tool\">\n        <div class=\"color-box\">\n            <div class=\"color red\"></div>\n            <div class=\"color blue\"></div>\n        </div>\n    </div>\n    <canvas id=\"whiteboard\">\n    \n    </canvas>\n</div>\n";

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map