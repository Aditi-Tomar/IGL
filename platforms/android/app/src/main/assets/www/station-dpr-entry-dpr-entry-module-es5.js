(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["station-dpr-entry-dpr-entry-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/station/dpr-entry/dpr-entry.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/station/dpr-entry/dpr-entry.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n</ion-header>\r\n<ion-content>\r\n\t<div class=\"content_area\">\r\n\t\t<ion-row class=\"ion-align-items-center mb5\">\r\n\t\t\t<ion-col size=\"2\" size-sm>\r\n\t\t\t\t<ion-back-button defaultHref=\"home\"></ion-back-button>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"8\" size-sm class=\"text_center\">\r\n\t\t\t\t<div class=\"main_head\">\r\n\t\t\t\t\t<h3><span>Entry DPR</span></h3>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"2\" size-sm></ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<ul class=\"menu_ul\">\r\n\t\t\t\t\t<li class=\"ion-activatable ripple-parent\" (click)=\"meterSkidRedirect()\">\r\n\t\t\t\t\t\t<ion-icon name=\"speedometer\"></ion-icon> Meter Skid <ion-icon name=\"arrow-forward\"></ion-icon>\r\n\t\t\t\t\t\t<ion-ripple-effect></ion-ripple-effect>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"ion-activatable ripple-parent\" (click)=\"packageRedirect()\">\r\n\t\t\t\t\t\t<ion-icon name=\"logo-dropbox\"></ion-icon>Compressor Package <ion-icon name=\"arrow-forward\">\r\n\t\t\t\t\t\t</ion-icon>\r\n\t\t\t\t\t\t<ion-ripple-effect></ion-ripple-effect>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"ion-activatable ripple-parent\" (click)=\"lcvRedirect()\">\r\n\t\t\t\t\t\t<ion-icon name=\"car\"></ion-icon> LCV <ion-icon name=\"arrow-forward\"></ion-icon>\r\n\t\t\t\t\t\t<ion-ripple-effect></ion-ripple-effect>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"ion-activatable ripple-parent\" (click)=\"gasGensetRedirect()\">\r\n\t\t\t\t\t\t<ion-icon name=\"apps\"></ion-icon> Gas Genset <ion-icon name=\"arrow-forward\"></ion-icon>\r\n\t\t\t\t\t\t<ion-ripple-effect></ion-ripple-effect>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"ion-activatable ripple-parent\" (click)=\"genralEntryRedirect()\">\r\n\t\t\t\t\t\t<ion-icon name=\"laptop\"></ion-icon> Genral Entry <ion-icon name=\"arrow-forward\"></ion-icon>\r\n\t\t\t\t\t\t<ion-ripple-effect></ion-ripple-effect>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"ion-activatable ripple-parent\" (click)=\"dprSummaryRedirect()\">\r\n\t\t\t\t\t\t<ion-icon name=\"laptop\"></ion-icon>DPR Summary <ion-icon name=\"arrow-forward\"></ion-icon>\r\n\t\t\t\t\t\t<ion-ripple-effect></ion-ripple-effect>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/station/dpr-entry/dpr-entry-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/station/dpr-entry/dpr-entry-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DprEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DprEntryPageRoutingModule", function() { return DprEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dpr_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dpr-entry.page */ "./src/app/station/dpr-entry/dpr-entry.page.ts");




var routes = [
    {
        path: '',
        component: _dpr_entry_page__WEBPACK_IMPORTED_MODULE_3__["DprEntryPage"]
    }
];
var DprEntryPageRoutingModule = /** @class */ (function () {
    function DprEntryPageRoutingModule() {
    }
    DprEntryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DprEntryPageRoutingModule);
    return DprEntryPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/station/dpr-entry/dpr-entry.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/station/dpr-entry/dpr-entry.module.ts ***!
  \*******************************************************/
/*! exports provided: DprEntryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DprEntryPageModule", function() { return DprEntryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dpr_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dpr-entry-routing.module */ "./src/app/station/dpr-entry/dpr-entry-routing.module.ts");
/* harmony import */ var _dpr_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dpr-entry.page */ "./src/app/station/dpr-entry/dpr-entry.page.ts");







var DprEntryPageModule = /** @class */ (function () {
    function DprEntryPageModule() {
    }
    DprEntryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _dpr_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__["DprEntryPageRoutingModule"]
            ],
            declarations: [_dpr_entry_page__WEBPACK_IMPORTED_MODULE_6__["DprEntryPage"]]
        })
    ], DprEntryPageModule);
    return DprEntryPageModule;
}());



/***/ }),

/***/ "./src/app/station/dpr-entry/dpr-entry.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/station/dpr-entry/dpr-entry.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content_area {\n  padding-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvc3RhdGlvbi9kcHItZW50cnkvZHByLWVudHJ5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc3RhdGlvbi9kcHItZW50cnkvZHByLWVudHJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9zdGF0aW9uL2Rwci1lbnRyeS9kcHItZW50cnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnRfYXJlYVxyXG57XHJcbiAgICBwYWRkaW5nLXRvcDowcHg7XHJcbn0iLCIuY29udGVudF9hcmVhIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/station/dpr-entry/dpr-entry.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/station/dpr-entry/dpr-entry.page.ts ***!
  \*****************************************************/
/*! exports provided: DprEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DprEntryPage", function() { return DprEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var DprEntryPage = /** @class */ (function () {
    function DprEntryPage(router, menu) {
        this.router = router;
        this.menu = menu;
    }
    DprEntryPage.prototype.ngOnInit = function () {
    };
    DprEntryPage.prototype.openFirst = function () {
        this.menu.enable(true, 'menuStn');
        this.menu.open('menuStn');
    };
    DprEntryPage.prototype.meterSkidRedirect = function () {
        this.router.navigateByUrl('meter-skid');
    };
    DprEntryPage.prototype.packageRedirect = function () {
        this.router.navigateByUrl('package');
    };
    DprEntryPage.prototype.dispenserRedirect = function () {
        this.router.navigateByUrl('dispenser');
    };
    DprEntryPage.prototype.lcvRedirect = function () {
        this.router.navigateByUrl('lcv');
    };
    DprEntryPage.prototype.gasGensetRedirect = function () {
        this.router.navigateByUrl('gas-genset');
    };
    DprEntryPage.prototype.genralEntryRedirect = function () {
        this.router.navigateByUrl('genral-entry');
    };
    DprEntryPage.prototype.dprSummaryRedirect = function () {
        this.router.navigateByUrl('dpr-summary');
    };
    DprEntryPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
    ]; };
    DprEntryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dpr-entry',
            template: __webpack_require__(/*! raw-loader!./dpr-entry.page.html */ "./node_modules/raw-loader/index.js!./src/app/station/dpr-entry/dpr-entry.page.html"),
            styles: [__webpack_require__(/*! ./dpr-entry.page.scss */ "./src/app/station/dpr-entry/dpr-entry.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
    ], DprEntryPage);
    return DprEntryPage;
}());



/***/ })

}]);
//# sourceMappingURL=station-dpr-entry-dpr-entry-module-es5.js.map