(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["station-redirected_pages-change-reset-ges-genset-change-reset-ges-genset-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/station/redirected_pages/change-reset-ges-genset/change-reset-ges-genset.page.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/station/redirected_pages/change-reset-ges-genset/change-reset-ges-genset.page.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<ion-toolbar color=\"dark_green\">\r\n\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-left\"><ion-back-button defaultHref=\"gas-genset\" class=\"text_white\"></ion-back-button></ion-col>\r\n\t\t\t<ion-col size=\"8\" class=\"ion-text-center\"><ion-text class=\"text_white\">Change/Reset Meter</ion-text></ion-col>\r\n\t\t</ion-row>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<div class=\"content_area\">\r\n\t\t<form>\r\n\t\t\t<ion-grid>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<ion-label>Action</ion-label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t<ion-label>Action</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-select placeholder=\"Select One\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-select-option value=\"f\">Reset</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t<ion-select-option value=\"m\">Change</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<ion-label>Old Meter Reading <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-input type=\"text\"></ion-input>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<ion-label>Jump Reading(If any)</ion-label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-input type=\"text\"></ion-input>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<ion-label>Choose File</ion-label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-input type=\"file\"></ion-input>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"button_container\" >\r\n\t\t\t\t\t\t\t<ion-button color=\"dark_green_clr\">Save</ion-button>\r\n\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</ion-grid>\r\n\t\t</form>\r\n\t</div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/station/redirected_pages/change-reset-ges-genset/change-reset-ges-genset-routing.module.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/station/redirected_pages/change-reset-ges-genset/change-reset-ges-genset-routing.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: ChangeResetGesGensetPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeResetGesGensetPageRoutingModule", function() { return ChangeResetGesGensetPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _change_reset_ges_genset_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-reset-ges-genset.page */ "./src/app/station/redirected_pages/change-reset-ges-genset/change-reset-ges-genset.page.ts");




const routes = [
    {
        path: '',
        component: _change_reset_ges_genset_page__WEBPACK_IMPORTED_MODULE_3__["ChangeResetGesGensetPage"]
    }
];
let ChangeResetGesGensetPageRoutingModule = class ChangeResetGesGensetPageRoutingModule {
};
ChangeResetGesGensetPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChangeResetGesGensetPageRoutingModule);



/***/ }),

/***/ "./src/app/station/redirected_pages/change-reset-ges-genset/change-reset-ges-genset.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/station/redirected_pages/change-reset-ges-genset/change-reset-ges-genset.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: ChangeResetGesGensetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeResetGesGensetPageModule", function() { return ChangeResetGesGensetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _change_reset_ges_genset_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-reset-ges-genset-routing.module */ "./src/app/station/redirected_pages/change-reset-ges-genset/change-reset-ges-genset-routing.module.ts");
/* harmony import */ var _change_reset_ges_genset_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-reset-ges-genset.page */ "./src/app/station/redirected_pages/change-reset-ges-genset/change-reset-ges-genset.page.ts");







let ChangeResetGesGensetPageModule = class ChangeResetGesGensetPageModule {
};
ChangeResetGesGensetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _change_reset_ges_genset_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangeResetGesGensetPageRoutingModule"]
        ],
        declarations: [_change_reset_ges_genset_page__WEBPACK_IMPORTED_MODULE_6__["ChangeResetGesGensetPage"]]
    })
], ChangeResetGesGensetPageModule);



/***/ }),

/***/ "./src/app/station/redirected_pages/change-reset-ges-genset/change-reset-ges-genset.page.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/station/redirected_pages/change-reset-ges-genset/change-reset-ges-genset.page.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpb24vcmVkaXJlY3RlZF9wYWdlcy9jaGFuZ2UtcmVzZXQtZ2VzLWdlbnNldC9jaGFuZ2UtcmVzZXQtZ2VzLWdlbnNldC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/station/redirected_pages/change-reset-ges-genset/change-reset-ges-genset.page.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/station/redirected_pages/change-reset-ges-genset/change-reset-ges-genset.page.ts ***!
  \**************************************************************************************************/
/*! exports provided: ChangeResetGesGensetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeResetGesGensetPage", function() { return ChangeResetGesGensetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChangeResetGesGensetPage = class ChangeResetGesGensetPage {
    constructor() { }
    ngOnInit() {
    }
};
ChangeResetGesGensetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-reset-ges-genset',
        template: __webpack_require__(/*! raw-loader!./change-reset-ges-genset.page.html */ "./node_modules/raw-loader/index.js!./src/app/station/redirected_pages/change-reset-ges-genset/change-reset-ges-genset.page.html"),
        styles: [__webpack_require__(/*! ./change-reset-ges-genset.page.scss */ "./src/app/station/redirected_pages/change-reset-ges-genset/change-reset-ges-genset.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ChangeResetGesGensetPage);



/***/ })

}]);
//# sourceMappingURL=station-redirected_pages-change-reset-ges-genset-change-reset-ges-genset-module-es2015.js.map