(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-dpr-sorting-dpr-sorting-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/dpr-sorting/dpr-sorting.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/dpr-sorting/dpr-sorting.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/admin-home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<div>\r\n\t\t<div class=\"main_heading1\">\r\n\t\t\t<div>\r\n\t\t\t\t<ion-back-button defaultHref=\"sorting\"></ion-back-button>\r\n\t\t\t</div>\r\n\t\t\t<div><h1>DPR Sorting</h1></div>\r\n\t\t\t<div></div>\r\n\t\t</div>\r\n\t</div>\r\n</ion-header>\r\n\r\n<!-- ------- START TOGGEL MENU--- -->\r\n<ion-menu side=\"end\" menuId=\"menuDprSorting\" contentId=\"menuDprSorting\">\r\n\t<ion-header >\r\n\t  <ion-toolbar>\r\n\t\t<ion-row class=\"menu_header\">\r\n\t\t\t<ion-col size=\"3\">\r\n\t\t\t\t<div class=\"menu_img_cont\">\r\n\t\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"9\">\r\n\t\t\t\t<div class=\"text_white\">\r\n\t\t\t\t\t<h4>Indraprastha</h4>\r\n\t\t\t\t\t<p>Gas LImited</p>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t  </ion-toolbar>\r\n\t</ion-header>\r\n\t<ion-content>\r\n\t\t<ion-list>\r\n\t\t\t<ion-item>\r\n\t\t\t\t<div class=\"head_info_div\">\r\n\t\t\t\t\t<h5>Head Office User</h5>\r\n\t\t\t\t\t<ion-text>Administration</ion-text>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item>\r\n\t\t\t\t<div class=\"head_info_div\">\r\n\t\t\t\t\t<h5>Current Date</h5>\r\n\t\t\t\t\t<ion-text>15-06-2020</ion-text>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item>\r\n\t\t\t\t<div class=\"head_info_div\">\r\n\t\t\t\t\t<h5>DSA Date</h5>\r\n\t\t\t\t\t<ion-text>15-06-2020</ion-text>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item>\r\n\t\t\t\t<div class=\"head_info_div\">\r\n\t\t\t\t\t<h5>Password Notification <ion-badge color=\"success\" class=\"ion-float-end\">44</ion-badge></h5>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item>\r\n\t\t\t\t<div class=\"head_info_div\">\r\n\t\t\t\t\t<h5>Help <ion-icon name=\"help-circle\" class=\"ion-float-end font22\"></ion-icon></h5>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\t\t\t<ion-item>\r\n\t\t\t\t<div class=\"head_info_div\">\r\n\t\t\t\t\t<h5 class=\"logout_h5\">Logout <ion-icon name=\"power\" class=\"ion-float-end\"></ion-icon></h5>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-item>\r\n\t\t</ion-list>\r\n\t</ion-content>\r\n</ion-menu>\r\n<ion-router-outlet id=\"menuDprSorting\"></ion-router-outlet>\t\r\n<!-- ------- START TOGGEL MENU--- -->\r\n\r\n<ion-content>\r\n<ion-grid>\r\n\t<ion-slides pager=\"true\" scrollbar=\"true\" >\r\n\t\t<ion-slide>\r\n\t\t\t<div class=\"myclass\">\r\n\t\t\t\t<ion-row class=\"ion-align-items-center\" style=\"margin-bottom:13px;\"> \r\n\t\t\t\t\t<ion-col size=\"6\">\r\n\t\t\t\t\t\t<ion-text>Region(7)</ion-text>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"6\" class=\"ion-text-right\">\r\n\t\t\t\t\t\t<ion-button size=\"small\" color=\"dark\"><ion-icon name=\"save\"></ion-icon></ion-button>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-card>\r\n\t\t\t\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t\t\t\t<ion-col size=\"7\"><ion-text>Delhi</ion-text></ion-col>\r\n\t\t\t\t\t\t<ion-col size=\"3\"><ion-input type=\"number\" class=\"inp_control\"></ion-input></ion-col>\r\n\t\t\t\t\t\t<ion-col size=\"2\" class=\"ion-text-right\"><ion-button size=\"small\" color=\"light\"><ion-icon name=\"arrow-forward\"></ion-icon></ion-button></ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t</ion-card>\r\n\t\t\t\t<ion-card>\r\n\t\t\t\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t\t\t\t<ion-col size=\"7\"><ion-text>Delhi</ion-text></ion-col>\r\n\t\t\t\t\t\t<ion-col size=\"3\"><ion-input type=\"number\" class=\"inp_control\"></ion-input></ion-col>\r\n\t\t\t\t\t\t<ion-col size=\"2\" class=\"ion-text-right\"><ion-button size=\"small\" color=\"light\"><ion-icon name=\"arrow-forward\"></ion-icon></ion-button></ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t</ion-card>\r\n\t\t\t\t<ion-card>\r\n\t\t\t\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t\t\t\t<ion-col size=\"7\"><ion-text>Delhi</ion-text></ion-col>\r\n\t\t\t\t\t\t<ion-col size=\"3\"><ion-input type=\"number\" class=\"inp_control\"></ion-input></ion-col>\r\n\t\t\t\t\t\t<ion-col size=\"2\" class=\"ion-text-right\"><ion-button size=\"small\" color=\"light\"><ion-icon name=\"arrow-forward\"></ion-icon></ion-button></ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t</ion-card>\r\n\t\t\t\t<ion-card>\r\n\t\t\t\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t\t\t\t<ion-col size=\"7\"><ion-text>Delhi</ion-text></ion-col>\r\n\t\t\t\t\t\t<ion-col size=\"3\"><ion-input type=\"number\" class=\"inp_control\"></ion-input></ion-col>\r\n\t\t\t\t\t\t<ion-col size=\"2\" class=\"ion-text-right\"><ion-button size=\"small\" color=\"light\"><ion-icon name=\"arrow-forward\"></ion-icon></ion-button></ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t</ion-card>\r\n\t\t\t\t<ion-card>\r\n\t\t\t\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t\t\t\t<ion-col size=\"7\"><ion-text>Delhi</ion-text></ion-col>\r\n\t\t\t\t\t\t<ion-col size=\"3\"><ion-input type=\"number\" class=\"inp_control\"></ion-input></ion-col>\r\n\t\t\t\t\t\t<ion-col size=\"2\" class=\"ion-text-right\"><ion-button size=\"small\" color=\"light\"><ion-icon name=\"arrow-forward\"></ion-icon></ion-button></ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t</ion-card>\r\n\t\t\t</div>\r\n\t\t</ion-slide>\r\n\t\t<ion-slide>\r\n\t\t\t\t<div class=\"myclass\">\r\n\t\t\t\t\t<ion-row class=\"ion-align-items-center\" style=\"margin-bottom:13px;\"> \r\n\t\t\t\t\t\t<ion-col size=\"6\">\r\n\t\t\t\t\t\t\t<ion-text>Company(6)</ion-text>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t<ion-col size=\"6\" class=\"ion-text-right\">\r\n\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"dark\"><ion-icon name=\"save\"></ion-icon></ion-button>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-card>\r\n\t\t\t\t\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t\t\t\t\t<ion-col size=\"7\"><ion-text>Delhi</ion-text></ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"3\"><ion-input type=\"number\" class=\"inp_control\"></ion-input></ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"2\" class=\"ion-text-right\"><ion-button size=\"small\" color=\"light\"><ion-icon name=\"arrow-forward\"></ion-icon></ion-button></ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t</ion-card>\r\n\t\t\t\t\t<ion-card>\r\n\t\t\t\t\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t\t\t\t\t<ion-col size=\"7\"><ion-text>Delhi</ion-text></ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"3\"><ion-input type=\"number\" class=\"inp_control\"></ion-input></ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"2\" class=\"ion-text-right\"><ion-button size=\"small\" color=\"light\"><ion-icon name=\"arrow-forward\"></ion-icon></ion-button></ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t</ion-card>\r\n\t\t\t\t\t<ion-card>\r\n\t\t\t\t\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t\t\t\t\t<ion-col size=\"7\"><ion-text>Delhi</ion-text></ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"3\"><ion-input type=\"number\" class=\"inp_control\"></ion-input></ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"2\" class=\"ion-text-right\"><ion-button size=\"small\" color=\"light\"><ion-icon name=\"arrow-forward\"></ion-icon></ion-button></ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t</ion-card>\r\n\t\t\t\t\t<ion-card>\r\n\t\t\t\t\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t\t\t\t\t<ion-col size=\"7\"><ion-text>Delhi</ion-text></ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"3\"><ion-input type=\"number\" class=\"inp_control\"></ion-input></ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"2\" class=\"ion-text-right\"><ion-button size=\"small\" color=\"light\"><ion-icon name=\"arrow-forward\"></ion-icon></ion-button></ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t</ion-card>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-slide>\r\n\t\t\t<ion-slide>\r\n\t\t\t\t\t<div class=\"myclass width100\">\r\n\t\t\t\t\t\t<ion-row class=\"ion-align-items-center\" style=\"margin-bottom:13px;\"> \r\n\t\t\t\t\t\t\t<ion-col size=\"6\">\r\n\t\t\t\t\t\t\t\t<ion-text>Station(7)</ion-text>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"6\" class=\"ion-text-right\">\r\n\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"dark\"><ion-icon name=\"save\"></ion-icon></ion-button>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-card>\r\n\t\t\t\t\t\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t\t\t\t\t\t<ion-col size=\"9\"><ion-text>Delhi</ion-text></ion-col>\r\n\t\t\t\t\t\t\t\t<ion-col size=\"3\"><ion-input type=\"number\" class=\"inp_control\"></ion-input></ion-col>\r\n\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t</ion-card>\r\n\t\t\t\t\t\t<ion-card>\r\n\t\t\t\t\t\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t\t\t\t\t\t<ion-col size=\"9\"><ion-text>Delhi</ion-text></ion-col>\r\n\t\t\t\t\t\t\t\t<ion-col size=\"3\"><ion-input type=\"number\" class=\"inp_control\"></ion-input></ion-col>\r\n\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t</ion-card>\r\n\t\t\t\t\t\t<ion-card>\r\n\t\t\t\t\t\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t\t\t\t\t\t<ion-col size=\"9\"><ion-text>Delhi</ion-text></ion-col>\r\n\t\t\t\t\t\t\t\t<ion-col size=\"3\"><ion-input type=\"number\" class=\"inp_control\"></ion-input></ion-col>\r\n\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t</ion-card>\r\n\t\t\t\t\t\t<ion-card>\r\n\t\t\t\t\t\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t\t\t\t\t\t<ion-col size=\"9\"><ion-text>Delhi</ion-text></ion-col>\r\n\t\t\t\t\t\t\t\t<ion-col size=\"3\"><ion-input type=\"number\" class=\"inp_control\"></ion-input></ion-col>\r\n\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t</ion-card>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-slide>\r\n\t\t\t</ion-slides>\r\n</ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/HO/dpr-sorting/dpr-sorting-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/HO/dpr-sorting/dpr-sorting-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: DprSortingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DprSortingPageRoutingModule", function() { return DprSortingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dpr_sorting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dpr-sorting.page */ "./src/app/HO/dpr-sorting/dpr-sorting.page.ts");




var routes = [
    {
        path: '',
        component: _dpr_sorting_page__WEBPACK_IMPORTED_MODULE_3__["DprSortingPage"]
    }
];
var DprSortingPageRoutingModule = /** @class */ (function () {
    function DprSortingPageRoutingModule() {
    }
    DprSortingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DprSortingPageRoutingModule);
    return DprSortingPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/HO/dpr-sorting/dpr-sorting.module.ts":
/*!******************************************************!*\
  !*** ./src/app/HO/dpr-sorting/dpr-sorting.module.ts ***!
  \******************************************************/
/*! exports provided: DprSortingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DprSortingPageModule", function() { return DprSortingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dpr_sorting_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dpr-sorting-routing.module */ "./src/app/HO/dpr-sorting/dpr-sorting-routing.module.ts");
/* harmony import */ var _dpr_sorting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dpr-sorting.page */ "./src/app/HO/dpr-sorting/dpr-sorting.page.ts");







var DprSortingPageModule = /** @class */ (function () {
    function DprSortingPageModule() {
    }
    DprSortingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _dpr_sorting_routing_module__WEBPACK_IMPORTED_MODULE_5__["DprSortingPageRoutingModule"]
            ],
            declarations: [_dpr_sorting_page__WEBPACK_IMPORTED_MODULE_6__["DprSortingPage"]]
        })
    ], DprSortingPageModule);
    return DprSortingPageModule;
}());



/***/ }),

/***/ "./src/app/HO/dpr-sorting/dpr-sorting.page.scss":
/*!******************************************************!*\
  !*** ./src/app/HO/dpr-sorting/dpr-sorting.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inp_control {\n  height: 35px;\n  border: 1px solid #e3e3e3;\n}\n\nion-content ion-card {\n  border-bottom: 1px solid #d5d5d5;\n  border-radius: 0px;\n  padding-right: 5px;\n  position: relative;\n  margin-bottom: 0px;\n  margin-top: 0px;\n  box-shadow: none;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);\n  border-radius: 5px;\n  margin-bottom: 6px;\n  background-color: #fbfbfb;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.myclass ion-card ion-row ion-col:first-child {\n  text-align: left;\n}\n\n.myclass > ion-row > ion-col:first-child {\n  text-align: left;\n}\n\n.width100 {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvSE8vZHByLXNvcnRpbmcvZHByLXNvcnRpbmcucGFnZS5zY3NzIiwic3JjL2FwcC9ITy9kcHItc29ydGluZy9kcHItc29ydGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxZQUFBO0VBQ0EseUJBQUE7QUNBSjs7QURFQTtFQUVJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FERUE7RUFFSSxnQkFBQTtBQ0FKOztBREVBO0VBRUksZ0JBQUE7QUNBSjs7QURFQTtFQUVJLFdBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL0hPL2Rwci1zb3J0aW5nL2Rwci1zb3J0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnBfY29udHJvbFxyXG57XHJcbiAgICBoZWlnaHQ6MzVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlM2UzZTM7XHJcbn1cclxuaW9uLWNvbnRlbnQgaW9uLWNhcmRcclxue1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNWQ1ZDU7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuLm15Y2xhc3MgaW9uLWNhcmQgaW9uLXJvdyBpb24tY29sOmZpcnN0LWNoaWxkXHJcbntcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLm15Y2xhc3M+aW9uLXJvdz5pb24tY29sOmZpcnN0LWNoaWxkXHJcbntcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLndpZHRoMTAwXHJcbntcclxuICAgIHdpZHRoOjEwMCU7XHJcbn1cclxuIiwiLmlucF9jb250cm9sIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTNlM2UzO1xufVxuXG5pb24tY29udGVudCBpb24tY2FyZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDVkNWQ1O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ubXljbGFzcyBpb24tY2FyZCBpb24tcm93IGlvbi1jb2w6Zmlyc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubXljbGFzcyA+IGlvbi1yb3cgPiBpb24tY29sOmZpcnN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLndpZHRoMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/HO/dpr-sorting/dpr-sorting.page.ts":
/*!****************************************************!*\
  !*** ./src/app/HO/dpr-sorting/dpr-sorting.page.ts ***!
  \****************************************************/
/*! exports provided: DprSortingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DprSortingPage", function() { return DprSortingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var DprSortingPage = /** @class */ (function () {
    function DprSortingPage(menu) {
        this.menu = menu;
    }
    DprSortingPage.prototype.ngOnInit = function () {
    };
    DprSortingPage.prototype.openFirst = function () {
        this.menu.enable(true, 'menuDprSorting');
        this.menu.open('menuDprSorting');
    };
    DprSortingPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
    ]; };
    DprSortingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dpr-sorting',
            template: __webpack_require__(/*! raw-loader!./dpr-sorting.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/dpr-sorting/dpr-sorting.page.html"),
            styles: [__webpack_require__(/*! ./dpr-sorting.page.scss */ "./src/app/HO/dpr-sorting/dpr-sorting.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], DprSortingPage);
    return DprSortingPage;
}());



/***/ })

}]);
//# sourceMappingURL=HO-dpr-sorting-dpr-sorting-module-es5.js.map