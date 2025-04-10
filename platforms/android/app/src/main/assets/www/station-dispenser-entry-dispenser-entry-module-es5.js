(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["station-dispenser-entry-dispenser-entry-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/station/dispenser-entry/dispenser-entry.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/station/dispenser-entry/dispenser-entry.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <header>\r\n\t\t<div class=\"header\">\r\n\t\t\t\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"content_area\">\r\n\t\t<ion-row class=\"ion-align-items-center mb5\">\r\n\t\t\t<ion-col size=\"2\" size-sm ><ion-back-button defaultHref=\"home\"></ion-back-button></ion-col>\r\n\t\t\t<ion-col size=\"8\" size-sm class=\"text_center\">\r\n\t\t\t\t<div class=\"main_head\">\r\n\t\t\t\t\t<h3><span>Dispenser Entry</span></h3>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"2\" size-sm></ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<ul class=\"menu_ul\">\r\n\t\t\t\t\t<!-- <li class=\"ion-activatable ripple-parent\" (click)=\"dispEntryDsaRedirect()\">\r\n\t\t\t\t\t\t<ion-icon name=\"tv\"></ion-icon> DSA Entry <ion-icon name=\"arrow-forward\"></ion-icon>\r\n\t\t\t\t\t\t<ion-ripple-effect></ion-ripple-effect>\r\n\t\t\t\t\t</li> -->\r\n\t\t\t\t\t<li class=\"ion-activatable ripple-parent\" (click)=\"dispEntryDprRedirect()\">\r\n\t\t\t\t\t\t<ion-icon name=\"tv\"></ion-icon> DPR Entry <ion-icon name=\"arrow-forward\"></ion-icon>\r\n\t\t\t\t\t\t<ion-ripple-effect></ion-ripple-effect>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n    </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/station/dispenser-entry/dispenser-entry-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/station/dispenser-entry/dispenser-entry-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: DispenserEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispenserEntryPageRoutingModule", function() { return DispenserEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dispenser_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dispenser-entry.page */ "./src/app/station/dispenser-entry/dispenser-entry.page.ts");




var routes = [
    {
        path: '',
        component: _dispenser_entry_page__WEBPACK_IMPORTED_MODULE_3__["DispenserEntryPage"]
    }
];
var DispenserEntryPageRoutingModule = /** @class */ (function () {
    function DispenserEntryPageRoutingModule() {
    }
    DispenserEntryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DispenserEntryPageRoutingModule);
    return DispenserEntryPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/station/dispenser-entry/dispenser-entry.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/station/dispenser-entry/dispenser-entry.module.ts ***!
  \*******************************************************************/
/*! exports provided: DispenserEntryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispenserEntryPageModule", function() { return DispenserEntryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dispenser_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dispenser-entry-routing.module */ "./src/app/station/dispenser-entry/dispenser-entry-routing.module.ts");
/* harmony import */ var _dispenser_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dispenser-entry.page */ "./src/app/station/dispenser-entry/dispenser-entry.page.ts");







var DispenserEntryPageModule = /** @class */ (function () {
    function DispenserEntryPageModule() {
    }
    DispenserEntryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _dispenser_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__["DispenserEntryPageRoutingModule"]
            ],
            declarations: [_dispenser_entry_page__WEBPACK_IMPORTED_MODULE_6__["DispenserEntryPage"]]
        })
    ], DispenserEntryPageModule);
    return DispenserEntryPageModule;
}());



/***/ }),

/***/ "./src/app/station/dispenser-entry/dispenser-entry.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/station/dispenser-entry/dispenser-entry.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpb24vZGlzcGVuc2VyLWVudHJ5L2Rpc3BlbnNlci1lbnRyeS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/station/dispenser-entry/dispenser-entry.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/station/dispenser-entry/dispenser-entry.page.ts ***!
  \*****************************************************************/
/*! exports provided: DispenserEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispenserEntryPage", function() { return DispenserEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var DispenserEntryPage = /** @class */ (function () {
    function DispenserEntryPage(router, menu) {
        this.router = router;
        this.menu = menu;
    }
    DispenserEntryPage.prototype.ngOnInit = function () {
    };
    DispenserEntryPage.prototype.openFirst = function () {
        this.menu.enable(true, 'menuStn');
        this.menu.open('menuStn');
    };
    DispenserEntryPage.prototype.dispEntryDsaRedirect = function () {
        this.router.navigateByUrl('dsa-dispenser-entry');
    };
    DispenserEntryPage.prototype.dispEntryDprRedirect = function () {
        this.router.navigateByUrl('dpr-dispenser-entry');
    };
    DispenserEntryPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
    ]; };
    DispenserEntryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dispenser-entry',
            template: __webpack_require__(/*! raw-loader!./dispenser-entry.page.html */ "./node_modules/raw-loader/index.js!./src/app/station/dispenser-entry/dispenser-entry.page.html"),
            styles: [__webpack_require__(/*! ./dispenser-entry.page.scss */ "./src/app/station/dispenser-entry/dispenser-entry.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
    ], DispenserEntryPage);
    return DispenserEntryPage;
}());



/***/ })

}]);
//# sourceMappingURL=station-dispenser-entry-dispenser-entry-module-es5.js.map