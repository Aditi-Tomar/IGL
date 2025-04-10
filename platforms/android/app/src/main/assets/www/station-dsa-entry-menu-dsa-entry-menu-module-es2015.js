(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["station-dsa-entry-menu-dsa-entry-menu-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/station/dsa-entry-menu/dsa-entry-menu.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/station/dsa-entry-menu/dsa-entry-menu.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<div class=\"content_area\">\r\n\t\t<ion-row class=\"ion-align-items-center mb5\">\r\n\t\t\t<ion-col size=\"2\" size-sm ><ion-back-button defaultHref=\"home\"></ion-back-button></ion-col>\r\n\t\t\t<ion-col size=\"8\" size-sm class=\"text_center\">\r\n\t\t\t\t<div class=\"main_head\">\r\n\t\t\t\t\t<h3><span>Entry DSA</span></h3>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"2\" size-sm></ion-col>\r\n\t\t</ion-row>\r\n\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<ul class=\"menu_ul\">\r\n\t\t\t\t\t<li class=\"ion-activatable ripple-parent\" (click)=\"dsaEntryRedirect()\">\r\n\t\t\t\t\t\t<ion-icon name=\"speedometer\"></ion-icon> Entry DSA <ion-icon name=\"arrow-forward\"></ion-icon>\r\n\t\t\t\t\t\t<ion-ripple-effect></ion-ripple-effect>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</div>\r\n</ion-content>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/station/dsa-entry-menu/dsa-entry-menu-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/station/dsa-entry-menu/dsa-entry-menu-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: DsaEntryMenuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsaEntryMenuPageRoutingModule", function() { return DsaEntryMenuPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dsa_entry_menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dsa-entry-menu.page */ "./src/app/station/dsa-entry-menu/dsa-entry-menu.page.ts");




const routes = [
    {
        path: '',
        component: _dsa_entry_menu_page__WEBPACK_IMPORTED_MODULE_3__["DsaEntryMenuPage"]
    }
];
let DsaEntryMenuPageRoutingModule = class DsaEntryMenuPageRoutingModule {
};
DsaEntryMenuPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DsaEntryMenuPageRoutingModule);



/***/ }),

/***/ "./src/app/station/dsa-entry-menu/dsa-entry-menu.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/station/dsa-entry-menu/dsa-entry-menu.module.ts ***!
  \*****************************************************************/
/*! exports provided: DsaEntryMenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsaEntryMenuPageModule", function() { return DsaEntryMenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dsa_entry_menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dsa-entry-menu-routing.module */ "./src/app/station/dsa-entry-menu/dsa-entry-menu-routing.module.ts");
/* harmony import */ var _dsa_entry_menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dsa-entry-menu.page */ "./src/app/station/dsa-entry-menu/dsa-entry-menu.page.ts");







let DsaEntryMenuPageModule = class DsaEntryMenuPageModule {
};
DsaEntryMenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dsa_entry_menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["DsaEntryMenuPageRoutingModule"]
        ],
        declarations: [_dsa_entry_menu_page__WEBPACK_IMPORTED_MODULE_6__["DsaEntryMenuPage"]]
    })
], DsaEntryMenuPageModule);



/***/ }),

/***/ "./src/app/station/dsa-entry-menu/dsa-entry-menu.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/station/dsa-entry-menu/dsa-entry-menu.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpb24vZHNhLWVudHJ5LW1lbnUvZHNhLWVudHJ5LW1lbnUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/station/dsa-entry-menu/dsa-entry-menu.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/station/dsa-entry-menu/dsa-entry-menu.page.ts ***!
  \***************************************************************/
/*! exports provided: DsaEntryMenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsaEntryMenuPage", function() { return DsaEntryMenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let DsaEntryMenuPage = class DsaEntryMenuPage {
    constructor(router, menu) {
        this.router = router;
        this.menu = menu;
    }
    ngOnInit() {
    }
    openFirst() {
        this.menu.enable(true, 'menuStn');
        this.menu.open('menuStn');
    }
    dsaEntryRedirect() {
        this.router.navigateByUrl('dsa-entry');
    }
};
DsaEntryMenuPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
];
DsaEntryMenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dsa-entry-menu',
        template: __webpack_require__(/*! raw-loader!./dsa-entry-menu.page.html */ "./node_modules/raw-loader/index.js!./src/app/station/dsa-entry-menu/dsa-entry-menu.page.html"),
        styles: [__webpack_require__(/*! ./dsa-entry-menu.page.scss */ "./src/app/station/dsa-entry-menu/dsa-entry-menu.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
], DsaEntryMenuPage);



/***/ })

}]);
//# sourceMappingURL=station-dsa-entry-menu-dsa-entry-menu-module-es2015.js.map