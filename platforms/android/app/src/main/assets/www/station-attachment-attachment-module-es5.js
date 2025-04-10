(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["station-attachment-attachment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/station/attachment/attachment.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/station/attachment/attachment.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n</ion-header>\r\n<ion-content>\r\n\t<div class=\"content_area\">\r\n\t\t<ion-row class=\"ion-align-items-center mb5\">\r\n\t\t\t<ion-col size=\"2\" size-sm>\r\n\t\t\t\t<ion-back-button defaultHref=\"home\"></ion-back-button>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"8\" size-sm class=\"text_center\">\r\n\t\t\t\t<div class=\"main_head\">\r\n\t\t\t\t\t<h3><span>JRS</span></h3>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"2\" size-sm></ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<ul class=\"menu_ul\">\r\n\t\t\t\t\t<li class=\"ion-activatable ripple-parent\" (click)=\"attachDsaRedirect() \">\r\n\t\t\t\t\t\t<ion-icon name=\"link\"></ion-icon> Dispenser Jump <ion-icon name=\"arrow-forward\"></ion-icon>\r\n\t\t\t\t\t\t<ion-ripple-effect></ion-ripple-effect>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"ion-activatable ripple-parent\" (click)=\"attachDprRedirect()\">\r\n\t\t\t\t\t\t<ion-icon name=\"link\"></ion-icon> Other Jump <ion-icon name=\"arrow-forward\"></ion-icon>\r\n\t\t\t\t\t\t<ion-ripple-effect></ion-ripple-effect>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"ion-activatable ripple-parent\" (click)=\"jumpReadingRedirect()\">\r\n\t\t\t\t\t\t<ion-icon name=\"link\"></ion-icon> Jump Reading System <ion-icon name=\"arrow-forward\"></ion-icon>\r\n\t\t\t\t\t\t<ion-ripple-effect></ion-ripple-effect>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/station/attachment/attachment-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/station/attachment/attachment-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AttachmentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentPageRoutingModule", function() { return AttachmentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _attachment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attachment.page */ "./src/app/station/attachment/attachment.page.ts");




var routes = [
    {
        path: '',
        component: _attachment_page__WEBPACK_IMPORTED_MODULE_3__["AttachmentPage"]
    }
];
var AttachmentPageRoutingModule = /** @class */ (function () {
    function AttachmentPageRoutingModule() {
    }
    AttachmentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AttachmentPageRoutingModule);
    return AttachmentPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/station/attachment/attachment.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/station/attachment/attachment.module.ts ***!
  \*********************************************************/
/*! exports provided: AttachmentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentPageModule", function() { return AttachmentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _attachment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attachment-routing.module */ "./src/app/station/attachment/attachment-routing.module.ts");
/* harmony import */ var _attachment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attachment.page */ "./src/app/station/attachment/attachment.page.ts");







var AttachmentPageModule = /** @class */ (function () {
    function AttachmentPageModule() {
    }
    AttachmentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _attachment_routing_module__WEBPACK_IMPORTED_MODULE_5__["AttachmentPageRoutingModule"]
            ],
            declarations: [_attachment_page__WEBPACK_IMPORTED_MODULE_6__["AttachmentPage"]]
        })
    ], AttachmentPageModule);
    return AttachmentPageModule;
}());



/***/ }),

/***/ "./src/app/station/attachment/attachment.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/station/attachment/attachment.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpb24vYXR0YWNobWVudC9hdHRhY2htZW50LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/station/attachment/attachment.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/station/attachment/attachment.page.ts ***!
  \*******************************************************/
/*! exports provided: AttachmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentPage", function() { return AttachmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var AttachmentPage = /** @class */ (function () {
    function AttachmentPage(router, menu) {
        this.router = router;
        this.menu = menu;
    }
    AttachmentPage.prototype.ngOnInit = function () {
    };
    AttachmentPage.prototype.openFirst = function () {
        this.menu.enable(true, 'menuStn');
        this.menu.open('menuStn');
    };
    AttachmentPage.prototype.attachDsaRedirect = function () {
        this.router.navigateByUrl('attachment-dsa');
    };
    AttachmentPage.prototype.attachDprRedirect = function () {
        this.router.navigateByUrl('attachment-dpr');
    };
    AttachmentPage.prototype.jumpReadingRedirect = function () {
        this.router.navigate(['jump-reading-system']);
    };
    AttachmentPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
    ]; };
    AttachmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-attachment',
            template: __webpack_require__(/*! raw-loader!./attachment.page.html */ "./node_modules/raw-loader/index.js!./src/app/station/attachment/attachment.page.html"),
            styles: [__webpack_require__(/*! ./attachment.page.scss */ "./src/app/station/attachment/attachment.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
    ], AttachmentPage);
    return AttachmentPage;
}());



/***/ })

}]);
//# sourceMappingURL=station-attachment-attachment-module-es5.js.map