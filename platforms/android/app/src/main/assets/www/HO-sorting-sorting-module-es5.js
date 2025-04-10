(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-sorting-sorting-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/sorting/sorting.page.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/sorting/sorting.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/admin-home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n</ion-header>\r\n\r\n<!-- ------- START TOGGEL MENU--- -->\r\n<ion-menu side=\"end\" menuId=\"menuSorting\" contentId=\"menuSorting\">\r\n\t<ion-header >\r\n\t  <ion-toolbar>\r\n\t\t<ion-row class=\"menu_header\">\r\n\t\t\t<ion-col size=\"3\">\r\n\t\t\t\t<div class=\"menu_img_cont\">\r\n\t\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"9\">\r\n\t\t\t\t<div class=\"text_white\">\r\n\t\t\t\t\t<h4>Indraprastha</h4>\r\n\t\t\t\t\t<p>Gas LImited</p>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t  </ion-toolbar>\r\n\t</ion-header>\r\n\t<ion-content>\r\n\t\t<ion-list>\r\n\t\t\t<ion-item>\r\n\t\t\t\t<div class=\"head_info_div\">\r\n\t\t\t\t\t<h5>Head Office User</h5>\r\n\t\t\t\t\t<ion-text>Administration</ion-text>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item>\r\n\t\t\t\t<div class=\"head_info_div\">\r\n\t\t\t\t\t<h5>Current Date</h5>\r\n\t\t\t\t\t<ion-text>15-06-2020</ion-text>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item>\r\n\t\t\t\t<div class=\"head_info_div\">\r\n\t\t\t\t\t<h5>DSA Date</h5>\r\n\t\t\t\t\t<ion-text>15-06-2020</ion-text>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item>\r\n\t\t\t\t<div class=\"head_info_div\">\r\n\t\t\t\t\t<h5>Password Notification <ion-badge color=\"success\" class=\"ion-float-end\">44</ion-badge></h5>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item>\r\n\t\t\t\t<div class=\"head_info_div\">\r\n\t\t\t\t\t<h5>Help <ion-icon name=\"help-circle\" class=\"ion-float-end font22\"></ion-icon></h5>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item>\r\n\t\t\t\t<div class=\"head_info_div\">\r\n\t\t\t\t\t<h5 class=\"logout_h5\">Logout <ion-icon name=\"power\" class=\"ion-float-end\"></ion-icon></h5>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\t\t</ion-list>\r\n\t</ion-content>\r\n</ion-menu>\r\n<ion-router-outlet id=\"menuSorting\"></ion-router-outlet>\t\r\n<!-- ------- START TOGGEL MENU--- -->\r\n\r\n<ion-content>\r\n\t<div class=\"content_area\">\r\n\t\t<ion-row class=\"ion-align-items-center mb5\">\r\n\t\t\t<ion-col size=\"2\" size-sm ><ion-back-button defaultHref=\"admin-home\"></ion-back-button></ion-col>\r\n\t\t\t<ion-col size=\"8\" size-sm class=\"text_center\">\r\n\t\t\t\t<div class=\"main_head\">\r\n\t\t\t\t\t<h3><span>Sorting</span></h3>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"2\" size-sm></ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<ul class=\"menu_ul\">\r\n\t\t\t\t\t<li class=\"ion-activatable ripple-parent\" (click)=\"sortingDSARedirect()\">\r\n\t\t\t\t\t\t<ion-icon name=\"tv\"></ion-icon> Sorting DSA <ion-icon name=\"arrow-forward\"></ion-icon>\r\n\t\t\t\t\t\t<ion-ripple-effect></ion-ripple-effect>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"ion-activatable ripple-parent\" (click)=\"sortingDPRRedirect()\">\r\n\t\t\t\t\t\t<ion-icon name=\"tv\"></ion-icon> Sorting DPR <ion-icon name=\"arrow-forward\"></ion-icon>\r\n\t\t\t\t\t\t<ion-ripple-effect></ion-ripple-effect>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/HO/sorting/sorting-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/HO/sorting/sorting-routing.module.ts ***!
  \******************************************************/
/*! exports provided: SortingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortingPageRoutingModule", function() { return SortingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sorting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sorting.page */ "./src/app/HO/sorting/sorting.page.ts");




var routes = [
    {
        path: '',
        component: _sorting_page__WEBPACK_IMPORTED_MODULE_3__["SortingPage"]
    }
];
var SortingPageRoutingModule = /** @class */ (function () {
    function SortingPageRoutingModule() {
    }
    SortingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SortingPageRoutingModule);
    return SortingPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/HO/sorting/sorting.module.ts":
/*!**********************************************!*\
  !*** ./src/app/HO/sorting/sorting.module.ts ***!
  \**********************************************/
/*! exports provided: SortingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortingPageModule", function() { return SortingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sorting_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sorting-routing.module */ "./src/app/HO/sorting/sorting-routing.module.ts");
/* harmony import */ var _sorting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sorting.page */ "./src/app/HO/sorting/sorting.page.ts");







var SortingPageModule = /** @class */ (function () {
    function SortingPageModule() {
    }
    SortingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _sorting_routing_module__WEBPACK_IMPORTED_MODULE_5__["SortingPageRoutingModule"]
            ],
            declarations: [_sorting_page__WEBPACK_IMPORTED_MODULE_6__["SortingPage"]]
        })
    ], SortingPageModule);
    return SortingPageModule;
}());



/***/ }),

/***/ "./src/app/HO/sorting/sorting.page.scss":
/*!**********************************************!*\
  !*** ./src/app/HO/sorting/sorting.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0hPL3NvcnRpbmcvc29ydGluZy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/HO/sorting/sorting.page.ts":
/*!********************************************!*\
  !*** ./src/app/HO/sorting/sorting.page.ts ***!
  \********************************************/
/*! exports provided: SortingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortingPage", function() { return SortingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var SortingPage = /** @class */ (function () {
    function SortingPage(router, menu) {
        this.router = router;
        this.menu = menu;
    }
    SortingPage.prototype.ngOnInit = function () {
    };
    SortingPage.prototype.openFirst = function () {
        this.menu.enable(true, 'menuSorting');
        this.menu.open('menuSorting');
    };
    SortingPage.prototype.sortingDSARedirect = function () {
        this.router.navigate(['dsa-sorting']);
    };
    SortingPage.prototype.sortingDPRRedirect = function () {
        this.router.navigate(['dpr-sorting']);
    };
    SortingPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
    ]; };
    SortingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sorting',
            template: __webpack_require__(/*! raw-loader!./sorting.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/sorting/sorting.page.html"),
            styles: [__webpack_require__(/*! ./sorting.page.scss */ "./src/app/HO/sorting/sorting.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
    ], SortingPage);
    return SortingPage;
}());



/***/ })

}]);
//# sourceMappingURL=HO-sorting-sorting-module-es5.js.map