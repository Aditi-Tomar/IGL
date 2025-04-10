(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["station-payment-collection-payment-collection-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/station/payment-collection/payment-collection.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/station/payment-collection/payment-collection.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<h1 class=\"text_white text_center title\">{{SummeryDate}}</h1>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<div class=\"main_heading1\">\r\n\t\t<div>\r\n\t\t\t<ion-back-button defaultHref=\"dsa-entry-detail\"></ion-back-button>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<h1>Payment Collection</h1>\r\n\t\t</div>\r\n\t\t<div class=\"text_center\">\r\n\t\t</div>\r\n\t</div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<div class=\"content_area p0\">\r\n\t\t<!-- <form> -->\r\n\t\t<ion-grid class=\"p0\">\r\n\t\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t\t<ion-col size=\"8\">\r\n\t\t\t\t\t<h5>Bifurcation of Sale</h5>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<!-- <ion-col size=\"2\">\r\n\t\t\t\t\t\t<ion-button color=\"dark\" size=\"small\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"2\">\r\n\t\t\t\t\t\t<ion-button color=\"dark\" size=\"small\"><ion-icon name=\"arrow-forward\"></ion-icon></ion-button>\r\n\t\t\t\t\t</ion-col> -->\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col class=\"inp_groupt\">\r\n\t\t\t\t\t<ion-label>Dispenser List</ion-label>\r\n\t\t\t\t\t<ion-item class=\"inp_control\">\r\n\t\t\t\t\t\t<ion-label>Choose Option</ion-label>\r\n\t\t\t\t\t\t<ion-select placeholder=\"Select One\" (ionChange)=\"onSelectDispenser($event)\"\r\n\t\t\t\t\t\t\tname=\"dispenserlist\">\r\n\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let itm of listDispensers\" [value]=\"itm.DispenserId\">\r\n\t\t\t\t\t\t\t\t{{itm.DispenserName}}</ion-select-option>\r\n\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t</ion-item>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col class=\"inp_groupt\">\r\n\t\t\t\t\t<ion-label>Shift</ion-label>\r\n\t\t\t\t\t<ion-item class=\"inp_control\">\r\n\t\t\t\t\t\t<ion-label>Choose Option</ion-label>\r\n\t\t\t\t\t\t<ion-select placeholder=\"Select One\" (ionChange)=\"onSelectShift($event.detail.value)\"\r\n\t\t\t\t\t\t\tname=\"optShift\">\r\n\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let itm of cmbShiftData\" [value]=\"itm.ShiftId\">\r\n\t\t\t\t\t\t\t\t{{itm.ShiftDetails}}</ion-select-option>\r\n\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t</ion-item>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"armA_detail_cont\">\r\n\t\t\t\t\t\t<h5 (click)=\"armACollapse()\">For Arm A <ion-icon name=\"arrow-down\" class=\"ion-float-right\">\r\n\t\t\t\t\t\t\t</ion-icon>\r\n\t\t\t\t\t\t</h5>\r\n\t\t\t\t\t\t<div *ngIf=\"ArmADetailSec\">\r\n\t\t\t\t\t\t\t<ion-card>\r\n\t\t\t\t\t\t\t\t<ion-card-header>\r\n\t\t\t\t\t\t\t\t\t<ion-card-subtitle>DSM (Gas Filler)</ion-card-subtitle>\r\n\t\t\t\t\t\t\t\t</ion-card-header>\r\n\t\t\t\t\t\t\t\t<ion-card-content>\r\n\t\t\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t\t\t<ion-col class=\"inp_group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-item class=\"inp_control\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-label>Choose Option</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-select placeholder=\"Select One\" [(ngModel)]='SelectedDSMIdArmA'\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(ionChange)=\"onDSMSelectArmA($event.detail.value)\" name=\"dsm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let itm of listDSM\" [value]=\"itm.DSMId\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{itm.DSMName}}</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-select-option value=\"NA\">NOT AVAILABLE</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-item>\r\n\r\n\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t\t</ion-card-content>\r\n\t\t\t\t\t\t\t</ion-card>\r\n\t\t\t\t\t\t\t<ion-card>\r\n\t\t\t\t\t\t\t\t<ion-card-header>\r\n\t\t\t\t\t\t\t\t\t<ion-card-subtitle>Total Sale (₹)</ion-card-subtitle>\r\n\t\t\t\t\t\t\t\t</ion-card-header>\r\n\t\t\t\t\t\t\t\t<ion-card-content>\r\n\t\t\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t\t\t<ion-col class=\"inp_group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-label>{{TotalSalesA}}</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-text>{{TotalReadingsA}}</ion-text>\r\n\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t\t</ion-card-content>\r\n\t\t\t\t\t\t\t</ion-card>\r\n\t\t\t\t\t\t\t<ion-card *ngFor=\"let pm of AddPaymentMode\">\r\n\t\t\t\t\t\t\t\t<ion-card-header>\r\n\t\t\t\t\t\t\t\t\t<ion-card-subtitle for=\"{{pm.PaymentMode}\">{{pm.PaymentMode}}</ion-card-subtitle>\r\n\t\t\t\t\t\t\t\t\t</ion-card-header>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<ion-card-content>\r\n\t\t\t\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-col class=\"inp_group\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-input class=\"inp_control\" type=\"number\"\r\n\t\t\t\t\t\t\t\t\t\t\t(input)=\"onPayemntEntry($event.target,pm.PaymentModeId,'A')\"\r\n\t\t\t\t\t\t\t\t\t\t\tvalue=\"{{pm.PaymentAmountA}}\" value=\"0.00\" min=\"0.00\" (blur)=\"checkout()\">\r\n\t\t\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t</ion-card-content>\r\n\t\t\t<ion-card-header>\r\n\t\t\t\t<ion-card-subtitle for=\"{{pm.PaymentMode}\">Quantity : {{pm.PaymentQuantityA}} Kg\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-card-subtitle>\r\n\t\t\t\t\t\t\t\t\t</ion-card-header>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!-- <ion-card-content>\r\n\t\t\t\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-col class=\"inp_group\">\r\n\t\t\t\t\t<ion-input class=\"inp_control\" type=\"number\"\r\n\t\t\t\t\t\t(input)=\"onPayemntEntry($event.target,pm.PaymentModeId,'B')\" value=\"{{pm.PaymentAmountB}}\"\r\n\t\t\t\t\t\tvalue=\"0.00\" min=\"0.00\" (blur)=\"checkout()\"></ion-input>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t</ion-card-content> -->\r\n\t\t\t\t\t</ion-card>\r\n\r\n\t\t\t\t\t<ion-card>\r\n\t\t\t\t\t\t<ion-card-header>\r\n\t\t\t\t\t\t\t<ion-card-subtitle>Total (₹)</ion-card-subtitle>\r\n\t\t\t\t\t\t</ion-card-header>\r\n\r\n\t\t\t\t\t\t<ion-card-content>\r\n\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t<ion-col class=\"inp_group\">\r\n\t\t\t\t\t\t\t\t\t<ion-text>{{TotalCurrentSalesA}}</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t</ion-card-content>\r\n\t\t\t\t\t</ion-card>\r\n\t</div>\r\n\t</div>\r\n\t</ion-col>\r\n\t</ion-row>\r\n\t<ion-row>\r\n\t\t<ion-col>\r\n\t\t\t<div class=\"armA_detail_cont\">\r\n\t\t\t\t<h5 (click)=\"armBCollapse()\">For Arm B <ion-icon name=\"arrow-down\" class=\"ion-float-right\"></ion-icon>\r\n\t\t\t\t</h5>\r\n\t\t\t\t<div *ngIf=\"ArmBDetailSec\">\r\n\t\t\t\t\t<ion-card>\r\n\t\t\t\t\t\t<ion-card-header>\r\n\t\t\t\t\t\t\t<ion-card-subtitle>DSM (Gas Filler)</ion-card-subtitle>\r\n\t\t\t\t\t\t</ion-card-header>\r\n\r\n\t\t\t\t\t\t<ion-card-content>\r\n\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t<ion-col class=\"inp_group\">\r\n\r\n\t\t\t\t\t\t\t\t\t<ion-item class=\"inp_control\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-label>Choose Option</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t<ion-select placeholder=\"Select One\" name=\"DSM2\" [(ngModel)]='SelectedDSMIdArmB'\r\n\t\t\t\t\t\t\t\t\t\t\t(ionChange)=\"onDSMSelectArmB($event.target.value)\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let itm of listDSM\" [value]=\"itm.DSMId\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{itm.DSMName}}</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-select-option value=\"NA\">NOT AVAILABLE</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t\t</ion-item>\r\n\r\n\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t</ion-card-content>\r\n\t\t\t\t\t</ion-card>\r\n\t\t\t\t\t<ion-card>\r\n\t\t\t\t\t\t<ion-card-header>\r\n\t\t\t\t\t\t\t<ion-card-subtitle>Total Sale (₹)</ion-card-subtitle>\r\n\t\t\t\t\t\t</ion-card-header>\r\n\t\t\t\t\t\t<ion-card-content>\r\n\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t<ion-col class=\"inp_group\">\r\n\t\t\t\t\t\t\t\t\t<ion-label>{{TotalSalesB}}</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-text>{{TotalReadingsB}}</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t</ion-card-content>\r\n\t\t\t\t\t</ion-card>\r\n\t\t\t\t\t<ion-card *ngFor=\"let pm of AddPaymentMode\">\r\n\t\t\t\t\t\t<ion-card-header>\r\n\t\t\t\t\t\t\t<ion-card-subtitle for=\"{{pm.PaymentMode}\">{{pm.PaymentMode}}</ion-card-subtitle>\r\n\t\t\t\t\t\t\t\t</ion-card-header>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<!-- <ion-card-content>\r\n\t\t\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t\t\t<ion-col class=\"inp_group\">\r\n\t\t\t\t\t\t\t\t<ion-input class=\"inp_control\" type=\"number\"\r\n\t\t\t\t\t\t\t\t\t(input)=\"onPayemntEntry($event.target,pm.PaymentModeId,'A')\"\r\n\t\t\t\t\t\t\t\t\tvalue=\"{{pm.PaymentAmountA}}\" value=\"0.00\" min=\"0.00\" (blur)=\"checkout()\">\r\n\t\t\t\t\t\t\t\t</ion-input>\r\n\r\n\r\n\t\t</ion-col>\r\n\t</ion-row>\r\n\t</ion-card-content> -->\r\n\r\n\t<ion-card-content>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col class=\"inp_group\">\r\n\t\t\t\t<ion-input class=\"inp_control\" type=\"number\"\r\n\t\t\t\t\t(input)=\"onPayemntEntry($event.target,pm.PaymentModeId,'B')\" value=\"{{pm.PaymentAmountB}}\"\r\n\t\t\t\t\tvalue=\"0.00\" min=\"0.00\" (blur)=\"checkout()\"></ion-input>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-card-content>\r\n\r\n\t<ion-card-header>\r\n\t\t<ion-card-subtitle for=\"{{pm.PaymentMode}\">Quantity : {{pm.PaymentQuantityB}} Kg</ion-card-subtitle>\r\n\t\t\t\t\t\t\t\t</ion-card-header>\r\n\t\t\t\t\t\t\t</ion-card>\r\n\t\t\t\t\t\t\t<ion-card>\r\n\t\t\t\t\t\t\t\t<ion-card-header>\r\n\t\t\t\t\t\t\t\t\t<ion-card-subtitle>Total (₹)</ion-card-subtitle>\r\n\t\t\t\t\t\t\t\t</ion-card-header>\r\n\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t\t<ion-card-content>\r\n\t\t\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t\t\t<ion-col class=\"inp_group\">\r\n\t\t\t<ion-text>{{TotalCurrentSalesB}}</ion-text>\r\n\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t</ion-card-content>\r\n\t\t\t</ion-card>\r\n\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"inp_form_control\">\r\n\t\t\t\t\t\t<div class=\"button_container\">\r\n\t\t\t\t\t\t\t<ion-button color=\"dark_green_clr\" type=\"submit\" (click)=\"savePayment();\">Save</ion-button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t</ion-grid>\r\n\t\t\t<!-- </form> -->\r\n\t\t\t</div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/station/payment-collection/payment-collection-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/station/payment-collection/payment-collection-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: PaymentCollectionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentCollectionPageRoutingModule", function() { return PaymentCollectionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _payment_collection_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-collection.page */ "./src/app/station/payment-collection/payment-collection.page.ts");




const routes = [
    {
        path: '',
        component: _payment_collection_page__WEBPACK_IMPORTED_MODULE_3__["PaymentCollectionPage"]
    }
];
let PaymentCollectionPageRoutingModule = class PaymentCollectionPageRoutingModule {
};
PaymentCollectionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentCollectionPageRoutingModule);



/***/ }),

/***/ "./src/app/station/payment-collection/payment-collection.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/station/payment-collection/payment-collection.module.ts ***!
  \*************************************************************************/
/*! exports provided: PaymentCollectionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentCollectionPageModule", function() { return PaymentCollectionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _payment_collection_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-collection-routing.module */ "./src/app/station/payment-collection/payment-collection-routing.module.ts");
/* harmony import */ var _payment_collection_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-collection.page */ "./src/app/station/payment-collection/payment-collection.page.ts");







let PaymentCollectionPageModule = class PaymentCollectionPageModule {
};
PaymentCollectionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _payment_collection_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentCollectionPageRoutingModule"]
        ],
        declarations: [_payment_collection_page__WEBPACK_IMPORTED_MODULE_6__["PaymentCollectionPage"]]
    })
], PaymentCollectionPageModule);



/***/ }),

/***/ "./src/app/station/payment-collection/payment-collection.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/station/payment-collection/payment-collection.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".armA_detail_cont {\n  border: 2px solid black;\n}\n\n.armA_detail_cont > h5 {\n  padding: 12px 10px 10px 10px;\n  background-color: var(--green_clr);\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvc3RhdGlvbi9wYXltZW50LWNvbGxlY3Rpb24vcGF5bWVudC1jb2xsZWN0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc3RhdGlvbi9wYXltZW50LWNvbGxlY3Rpb24vcGF5bWVudC1jb2xsZWN0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHVCQUFBO0FDQUo7O0FERUE7RUFFSSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvc3RhdGlvbi9wYXltZW50LWNvbGxlY3Rpb24vcGF5bWVudC1jb2xsZWN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcm1BX2RldGFpbF9jb250XHJcbntcclxuICAgIGJvcmRlcjoycHggc29saWQgYmxhY2s7XHJcbn1cclxuLmFybUFfZGV0YWlsX2NvbnQ+aDVcclxue1xyXG4gICAgcGFkZGluZzogMTJweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tZ3JlZW5fY2xyKTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59IiwiLmFybUFfZGV0YWlsX2NvbnQge1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbn1cblxuLmFybUFfZGV0YWlsX2NvbnQgPiBoNSB7XG4gIHBhZGRpbmc6IDEycHggMTBweCAxMHB4IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuX2Nscik7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/station/payment-collection/payment-collection.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/station/payment-collection/payment-collection.page.ts ***!
  \***********************************************************************/
/*! exports provided: PaymentCollectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentCollectionPage", function() { return PaymentCollectionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








let PaymentCollectionPage = class PaymentCollectionPage {
    constructor(formBuilder, router, activatedroute, commonServices, menu, dp) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedroute = activatedroute;
        this.commonServices = commonServices;
        this.menu = menu;
        this.dp = dp;
        this.ArmADetailSec = false;
        this.flagAramA = 0;
        this.ArmBDetailSec = false;
        this.flagAramB = 0;
        this.geteDate = { selcteddate: "" };
        this.StationShift = { ShiftId: "-1", SubShiftId: "-1", ActiveTab: "Payment" };
        this.dispCounterIndex = 0;
        this.DispencerCount = 0;
        this.totalDispenser = 0;
        this.selectedShiftId = "-1";
        this.selectedSubShiftId = "-1";
        this.selectedDispId = 0;
        this.cnt = 0;
        this.showNext = true;
        this.showPrevious = true;
        this.CreditPartySale = "0.00";
        this.CreditCardSale = "0.00";
        this.PrepaidCardSale = "0.00";
        this.PaytmSale = "0.00";
        this.PrepaidCardLoading = "0.00";
        this.PrepaidCardActivations = "0.00";
        this.OtherSale = "0.00";
        this.CashSale = "0.00";
        this.LubeSale = "0.00";
        this.TotalReadingsA = "0.00";
        this.TotalReadingsB = "0.00";
        this.TotalSalesA = "0.00";
        this.TotalSalesB = "0.00";
        this.CurrentRate = "0.00";
        this.NormalRate = "0.00";
        this.DiscountedRate = "0.00";
        this.TotalCurrentSalesA = "0.00";
        this.TotalCurrentReadingsA = "0.00";
        this.TotalCurrentSalesB = "0.00";
        this.TotalCurrentReadingsB = "0.00";
        this.TotalCashSalesA = "0.00";
        this.TotalCashSalesB = "0.00";
        this.PeriousA = "0.00";
        this.PeriousB = "0.00";
        this.IsCmbDisable = false;
        this.listDSM = [];
        this.SelectedDSMIdArmA = "";
        this.SelectedDSMIdArmB = "";
        this.StationId = Number(localStorage.getItem("StationId"));
        this.Armsflag = "";
        this.ValidateDSM = true;
        this.DSMId = "";
        this.selectedStation = 0;
        this.SubmittedBySOPFlag = false;
        this.enterOtpfields = false;
        this.enteredotp = "";
        this.validotp = "";
        this.popupDate = "";
        this.successMessage = false;
        this.SaveEnable = true;
        this.IsTimeOverlocal = false;
        this.getDSM();
        this.SummeryDate = localStorage.getItem("SummeryDate");
        this.UserId = localStorage.getItem("UserId");
        this.onselectedStation = localStorage.getItem("StationId");
        this.toggleSideBar();
        this.StationShift = this.StationShift;
        this.selectedDispId = 0;
        this.selectedShiftId = this.StationShift.ShiftId;
        this.selectedSubShiftId = this.StationShift.SubShiftId;
        this.dispCounterIndex = 0;
        this.subscription = this.commonServices.StationDetails.subscribe((test) => {
            this.detailsStation = test;
        });
        this.commonServices.IsShiftIdPending.subscribe((value) => {
            this.IsShiftIdComplete = value;
        });
        this.commonServices.IsTimeOver.subscribe((value) => {
            this.IsTimeOverlocal = value;
        });
        setTimeout(() => {
            setTimeout(() => {
                this.GetDataByShift();
            });
            this.FetchDSASubmittedData();
        }, 2000);
    }
    ionViewDidLeave() {
        //  setTimeout(() => {
        //     this.commonServices.StationDetails.unsubscribe();
        //   }, 10000);
    }
    ngOnInit() {
        this.selectedStation = Number(localStorage.getItem("StationId"));
        this.dispCounterIndex = 0;
        this.showNext = true;
        this.showPrevious = true;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    openFirst() {
        this.menu.enable(true, "menuStn");
        this.menu.open("menuStn");
    }
    armACollapse() {
        if (this.flagAramA == 0) {
            this.ArmADetailSec = true;
            this.flagAramA = 1;
        }
        else {
            this.ArmADetailSec = false;
            this.flagAramA = 0;
        }
    }
    armBCollapse() {
        if (this.flagAramB == 0) {
            this.ArmBDetailSec = true;
            this.flagAramB = 1;
        }
        else {
            this.ArmBDetailSec = false;
            this.flagAramB = 0;
        }
    }
    toggleSideBar() {
        this.commonServices
            .post("CommonGetData", {
            Id: this.onselectedStation,
            Status: this.SummeryDate,
            Flag: "validatePopup",
        })
            .subscribe((resp) => {
            const data = JSON.parse(resp);
            console.log(data);
            if (data.Table[0].Msg == "Allow") {
                this.commonServices.StationDetails.emit({
                    StationId: this.onselectedStation,
                    SummeryDate: this.SummeryDate,
                    UserId: this.UserId,
                });
            }
            else {
                this.commonServices.presentToast(data.Table[0].Msg);
            }
        }, (error) => {
            this.commonServices.presentToast("Something went wrong.");
        });
    }
    onDSMSelectArmA(val) {
        this.SelectedDSMIdArmA = val;
        this.Armsflag = "ArmA";
        if (Number(this.SelectedDSMIdArmA) > 0) {
            this.DSMId = this.SelectedDSMIdArmA;
            this.checkDSMByDay();
        }
    }
    onDSMSelectArmB(val) {
        this.SelectedDSMIdArmB = val;
        this.Armsflag = "ArmB";
        if (Number(this.SelectedDSMIdArmB) > 0) {
            this.DSMId = this.SelectedDSMIdArmB;
            this.checkDSMByDay();
        }
    }
    checkDSMByDay() {
        var obj = {
            Flag: this.Armsflag,
            DSMId: this.DSMId,
            ShiftId: this.selectedShiftId,
            EntryDate: this.detailsStation.SummeryDate,
        };
        this.commonServices.post("checkDSMByDay", obj).subscribe((resp) => {
            const data = JSON.parse(resp).Table;
            if (data[0].Mesage != "") {
                this.commonServices.presentToast(data[0].Mesage);
                this.ValidateDSM = false;
            }
            else
                this.ValidateDSM = true;
        }, (error) => {
            this.commonServices.presentToast("Something went wrong.");
        });
    }
    getDSM() {
        this.commonServices
            .post("CommonGetData", {
            Flag: "DSMByStation",
            Id: this.StationId,
            Status: 0,
        })
            .subscribe((resp) => {
            this.listDSM = JSON.parse(resp).Table;
            console.log(this.listDSM, "listDSM");
        }, (error) => {
            this.commonServices.presentToast("Something went wrong.");
        });
    }
    getData() {
        this.cnt = this.cnt + 1;
        //this.commonServices.loadingPresent();
        this.commonServices
            .post("CommonGetData", {
            Flag: "StationDispenserData",
            Id: this.detailsStation.StationId,
        })
            .subscribe((resp) => {
            this.DispencerCount = JSON.parse(resp).Table.length;
            //  this.commonServices.loadingDismiss();
            if (this.DispencerCount > 0 && JSON.parse(resp).Table1.length > 0) {
                this.DispencerCount = this.DispencerCount - 1;
                this.selectedDispId = JSON.parse(resp).Table[0].DispenserId;
                this.listDispensers = JSON.parse(resp).Table;
                this.totalDispenser = JSON.parse(resp).Table.length;
                this.cmbShiftData = JSON.parse(resp).Table1;
                console.log(this.cmbSubShiftData);
                this.selectedShiftId = this.StationShift.ShiftId;
                setTimeout(() => {
                    this.GetDataByShift();
                });
            }
        }, (error) => {
            this.commonServices.presentToast("Something went wrong.");
            //  this.commonServices.loadingDismiss();
        });
    }
    onSelectShift(shiftId) {
        this.selectedShiftId = shiftId;
        if (this.selectedShiftId == "-1") {
            this.CurrentRate = "0.00";
        }
        else if (this.selectedShiftId == "4") {
            this.CurrentRate = this.DiscountedRate;
            this.GetDataByShift();
        }
        else {
            this.CurrentRate = this.NormalRate;
            setTimeout(() => {
                this.GetDataByShift();
            });
        }
    }
    onSelectDispenser(event) {
        var dispenserId = event.detail.value;
        this.dispCounterIndex = this.listDispensers.findIndex((item) => item.DispenserId === Number(dispenserId));
        this.selectedDispId = Number(dispenserId);
        setTimeout(() => {
            this.GetDataByShift();
        });
    }
    GetDataByShift() {
        this.commonServices.loadingDismiss();
        this.commonServices.loadingPresent();
        this.commonServices
            .post("GetPaymentByShift", {
            EntryDate: this.detailsStation.SummeryDate,
            ShiftId: this.selectedShiftId,
            DispenserId: this.selectedDispId,
            StationId: this.detailsStation.StationId,
        })
            .subscribe((resp) => {
            if (this.selectedDispId == 0)
                this.selectedDispId = JSON.parse(resp).Table3[0].DispenserId;
            this.DispencerCount = JSON.parse(resp).Table3.length;
            this.listDispensers = JSON.parse(resp).Table3;
            this.totalDispenser = JSON.parse(resp).Table3.length;
            this.cmbShiftData = JSON.parse(resp).Table1;
            this.cmbSubShiftData = JSON.parse(resp).Table2;
            this.DispencerCount = this.DispencerCount - 1;
            this.AddPaymentMode = JSON.parse(resp).Table;
            this.TotalSalesA = parseFloat(JSON.parse(resp).Table2[0].TotalSalesA)
                .toFixed(2)
                .toString();
            this.TotalSalesB = parseFloat(JSON.parse(resp).Table2[0].TotalSalesB)
                .toFixed(2)
                .toString();
            this.TotalReadingsA = parseFloat(JSON.parse(resp).Table2[0].TotalReadingsA)
                .toFixed(2)
                .toString();
            this.TotalReadingsB = parseFloat(JSON.parse(resp).Table2[0].TotalReadingsB)
                .toFixed(2)
                .toString();
            this.DiscountedRate = parseFloat(JSON.parse(resp).Table2[0].DisountedRate)
                .toFixed(2)
                .toString();
            this.NormalRate = parseFloat(JSON.parse(resp).Table2[0].CurrentRate)
                .toFixed(2)
                .toString();
            this.selectedShiftId = JSON.parse(resp).Table2[0].ShiftId;
            this.ValidationFlag = JSON.parse(resp).Table2[0].ValidationFlag;
            this.SelectedDSMIdArmA = JSON.parse(resp).Table2[0].DSMIdArmA;
            this.SelectedDSMIdArmB = JSON.parse(resp).Table2[0].DSMIdArmB;
            if (this.selectedShiftId == "-1")
                this.CurrentRate = "0.00";
            else if (this.selectedShiftId == "4")
                this.CurrentRate = this.DiscountedRate;
            else
                this.CurrentRate = this.NormalRate;
            this.TotalCashSalesA = this.TotalSalesA;
            this.TotalCashSalesB = this.TotalSalesB;
            this.sumup();
            this.commonServices.loadingDismiss();
        }, (error) => {
            this.commonServices.presentToast("Something went wrong.");
            this.commonServices.loadingDismiss();
        });
    }
    savePayment() {
        console.log(parseFloat(this.TotalSalesA) + parseFloat("10"));
        if (this.SelectedDSMIdArmA == "" || this.SelectedDSMIdArmA == "-1") {
            this.commonServices.presentToast('Please select Arm "A" DSM.');
            return false;
        }
        if (this.SelectedDSMIdArmB == "" || this.SelectedDSMIdArmB == "-1") {
            this.commonServices.presentToast('Please select Arm "B" DSM.');
            return false;
        }
        if (Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(this.SelectedDSMIdArmA) ||
            Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(this.SelectedDSMIdArmB)) {
            this.commonServices.presentToast("Both Arm,s DSM must be selected.");
            return false;
        }
        // if (this.SelectedDSMIdArmA == this.SelectedDSMIdArmB) {
        //   this.commonServices.presentToast('Both Arm,s DSM must be different.');
        //   return false;
        // }
        // if (this.ValidateDSM == false) {
        //   this.commonServices.presentToast('One of DSM is already exist for this shift!');
        //   return false;
        // }
        // if (this.selectedShiftId == '' || this.selectedShiftId == '-1') {
        //   this.commonServices.presentToast('Please select shift.');
        //   return false;
        // }
        // if (this.ValidationFlag == 1) {
        //   if (parseFloat(this.TotalCurrentSalesA) >= parseFloat(this.TotalSalesA) && parseFloat(this.TotalCurrentSalesB) >= parseFloat(this.TotalSalesB)) {
        //     if (parseFloat(this.TotalCurrentSalesA) <= (parseFloat(this.TotalSalesA) + parseFloat("10")) && parseFloat(this.TotalCurrentSalesB) <= (parseFloat(this.TotalSalesB) + parseFloat("10"))) {
        //       this.saveData(Flag);
        //     }
        //     else {
        //       this.commonServices.presentToast("Your total sale amount is not matched with current details");
        //     }
        //     //this.saveData(Flag);
        //   }
        //   else {
        //     this.commonServices.presentToast("Your total sale amount is not matched with current details");
        //   }
        // }
        // else {
        //   this.saveData(Flag);
        // }
        console.log(this.SelectedDSMIdArmA, ",", this.SelectedDSMIdArmB);
        if (this.SelectedDSMIdArmA == this.SelectedDSMIdArmB &&
            (this.SelectedDSMIdArmA != "NA" || this.SelectedDSMIdArmB != "NA")) {
            this.commonServices.presentToast("Both Arm,s DSM must be different.");
            return false;
        }
        if (this.ValidateDSM == false &&
            (this.SelectedDSMIdArmA != "NA" || this.SelectedDSMIdArmB != "NA")) {
            this.commonServices.presentToast("One of DSM is already exist for this shift!");
            return false;
        }
        if (this.selectedShiftId == "" || this.selectedShiftId == "-1") {
            this.commonServices.presentToast("Please select shift.");
            return false;
        }
        if (this.ValidationFlag == 1) {
            if (parseFloat(this.TotalCurrentSalesA) >= parseFloat(this.TotalSalesA) &&
                parseFloat(this.TotalCurrentSalesB) >= parseFloat(this.TotalSalesB)) {
                if (parseFloat(this.TotalCurrentSalesA) <=
                    parseFloat(this.TotalSalesA) + parseFloat("10") &&
                    parseFloat(this.TotalCurrentSalesB) <=
                        parseFloat(this.TotalSalesB) + parseFloat("10")) {
                    this.saveData();
                }
                else {
                    this.commonServices.presentToast("Your total sale amount is not matched with current details");
                }
            }
            else {
                this.commonServices.presentToast("Your total sale amount is not matched with current details");
            }
        }
        else {
            this.saveData();
        }
    }
    saveData() {
        for (var i = 0; i < this.AddPaymentMode.length; i++) {
            if (parseFloat(this.AddPaymentMode[i].PaymentAmountA) < 0) {
                this.SaveEnable = false;
                this.commonServices.presentToast("All payment amount must be positive");
                break;
            }
            else if (parseFloat(this.AddPaymentMode[i].PaymentAmountB) < 0) {
                this.SaveEnable = false;
                this.commonServices.presentToast("All payment amount must be positive");
                break;
            }
        }
        if (this.SaveEnable) {
            this.commonServices.loadingDismiss();
            this.commonServices.loadingPresent();
            this.commonServices
                .post("DispenserPaymentCollection", {
                UserId: this.detailsStation.UserId,
                EntryDate: this.detailsStation.SummeryDate,
                DispenserId: this.selectedDispId,
                StationId: this.detailsStation.StationId,
                ShiftId: this.selectedShiftId,
                DispanserPayment: this.AddPaymentMode,
                DSMIdArmA: this.SelectedDSMIdArmA,
                DSMIdArmB: this.SelectedDSMIdArmB,
            })
                .subscribe((resp) => {
                const data = JSON.parse(resp);
                if (data.Table[0].Meaasge.indexOf("transfer") > -1) {
                    this.commonServices.presentToast(data.Table[0].Meaasge);
                    // this.objRoute.navigate(['']);
                }
                // else if(data.Table[0].Meaasge.indexOf('successfully') > -1)
                // {
                //   if(Flag!='M')
                //   {
                //     if(this.DispencerCount>this.dispCounterIndex){
                //       this.dispCounterIndex++;
                //       const dispIdToGo = this.listDispensers[this.dispCounterIndex].DispenserId;
                //       this.onSelectDispenser(dispIdToGo);
                //       this.showPrevious = true;
                //     }
                //     else{
                //       this.commonServices.ShiftDetails.emit({
                //         ShiftId:this.selectedShiftId,
                //         SubShiftId: this.selectedSubShiftId,
                //         ActiveTab:"Other"
                //       });
                //         $('.nav-tabs > .active').next('li').find('a').trigger('click');
                //     }
                //   }
                // }
                else {
                    this.commonServices.presentToast(data.Table[0].Meaasge);
                }
                this.commonServices.loadingDismiss();
            }, (error) => {
                this.commonServices.presentToast("Something went wrong.");
                this.commonServices.loadingDismiss();
            });
        }
        else {
            this.commonServices.presentToast("All payment value quantity be positive");
        }
    }
    onPayemntEntry(event, PaymentModeId, Valuefor) {
        if (event.value != "") {
            var rx = /^\d+(?:\.\d{1,3})?$/;
            if (rx.test(event.value)) {
                this.oldvalue = event.value;
            }
            else {
                event.value = this.oldvalue;
            }
        }
        else {
            if (Valuefor == "A") {
                for (var i = 0; i < this.AddPaymentMode.length; i++) {
                    if (PaymentModeId == this.AddPaymentMode[i].PaymentModeId) {
                        this.AddPaymentMode[i].PaymentAmountA = 0;
                    }
                }
            }
            if (Valuefor == "B") {
                for (var i = 0; i < this.AddPaymentMode.length; i++) {
                    if (PaymentModeId == this.AddPaymentMode[i].PaymentModeId) {
                        this.AddPaymentMode[i].PaymentAmountB = 0;
                    }
                }
            }
        }
        this.selectedPaymentModeId = PaymentModeId;
        this.selectedPaymentAmount = event.value == "" ? "0" : event.value;
        if (this.selectedPaymentAmount != "") {
            if (parseFloat(this.selectedPaymentAmount) >= 0) {
                const Value = this.AddPaymentMode.find((pm) => pm.PaymentModeId === this.selectedPaymentModeId);
                if (Valuefor == "A") {
                    Value.PaymentAmountA = this.selectedPaymentAmount;
                    Value.PaymentQuantityA = (parseFloat(this.selectedPaymentAmount) /
                        parseFloat(this.CurrentRate))
                        .toFixed(2)
                        .toString();
                    this.SaveEnable = true;
                }
                else if (Valuefor == "B") {
                    Value.PaymentAmountB = this.selectedPaymentAmount;
                    Value.PaymentQuantityB = (parseFloat(this.selectedPaymentAmount) /
                        parseFloat(this.CurrentRate))
                        .toFixed(2)
                        .toString();
                    this.SaveEnable = true;
                }
                this.sumup();
            }
            else {
                this.commonServices.presentToast("Amount must be positive");
                event.focus();
                this.SaveEnable = false;
            }
        }
        else {
            this.sumup();
            this.commonServices.presentToast("Amount must be entered");
            event.focus();
            this.SaveEnable = false;
        }
    }
    sumup() {
        this.TotalCurrentSalesB = "0";
        this.TotalCurrentSalesA = "0";
        this.TotalCurrentReadingsA = "0";
        this.TotalCurrentReadingsB = "0";
        for (var i = 0; i < this.AddPaymentMode.length; i++) {
            this.TotalCurrentSalesB = (parseFloat(this.TotalCurrentSalesB) +
                parseFloat(this.AddPaymentMode[i].PaymentAmountB))
                .toFixed(2)
                .toString();
            this.TotalCurrentSalesA = (parseFloat(this.TotalCurrentSalesA) +
                parseFloat(this.AddPaymentMode[i].PaymentAmountA))
                .toFixed(2)
                .toString();
            this.TotalCurrentReadingsA = (parseFloat(this.TotalCurrentReadingsA) +
                parseFloat(this.AddPaymentMode[i].PaymentQuantityA))
                .toFixed(2)
                .toString();
            this.TotalCurrentReadingsB = (parseFloat(this.TotalCurrentReadingsB) +
                parseFloat(this.AddPaymentMode[i].PaymentQuantityB))
                .toFixed(2)
                .toString();
            this.TotalCashSalesA = (parseFloat(this.TotalSalesA) - parseFloat(this.TotalCurrentSalesA))
                .toFixed(2)
                .toString();
            this.TotalCashSalesB = (parseFloat(this.TotalSalesB) - parseFloat(this.TotalCurrentSalesB))
                .toFixed(2)
                .toString();
        }
    }
    checkout() {
        this.oldvalue = "";
    }
    FetchDSASubmittedData() {
        var StationCode = JSON.parse(localStorage.getItem("globalDetail"))[0]
            .StationCode;
        this.commonServices
            .post("FetchDSASubmittedData", {
            StationId: this.selectedStation,
            CDate: this.detailsStation.SummeryDate,
            StationCode: StationCode,
        })
            .subscribe((resp) => {
            var arr = [];
            const data1 = JSON.parse(resp);
            console.log(data1);
            if (data1 != "") {
                arr = data1.Table;
                console.log(arr);
                this.popupDate = this.dp.transform(this.detailsStation.SummeryDate, "dd-MMM-yyyy");
                this.commonServices.LockDate = this.popupDate;
                if (this.IsTimeOverlocal == true) {
                    // this.SubmittedBySOPFlag = true;
                    // this.commonServices.lockUnlock.emit(false);
                    return;
                }
                if (arr.length == 0) {
                    this.SubmittedBySOPFlag = false;
                    this.commonServices.lockUnlock.emit(false);
                    // this.commonServices.lockUnlockDispenserEntry.next(false);
                }
                else if (arr[0].IsSubmittedBySOP == 1) {
                    // this.SubmittedBySOPFlag = true;
                    // this.commonServices.lockUnlock.emit(false);
                }
                else {
                    this.SubmittedBySOPFlag = false;
                    this.commonServices.lockUnlock.emit(false);
                    // this.commonServices.lockUnlockDispenserEntry.next(false);
                }
            }
        }, (error) => {
            this.commonServices.presentToast("Something went wrong.");
        });
    }
    requestOTP() {
        console.log("Hello");
        this.enterOtpfields = true;
        var StationCode = JSON.parse(sessionStorage.getItem("globalDetail"))[0]
            .StationCode;
        this.commonServices
            .post("AuthenticationMail", {
            CDate: this.detailsStation.SummeryDate,
            StationCode: StationCode,
            IsStationSubmitted: 0,
        })
            .subscribe((resp) => {
            var arr = [];
            const data1 = JSON.parse(resp);
            console.log(data1);
            if (data1 != "") {
                arr = data1.Table;
                console.log(arr);
                this.successMessage = true;
                this.validotp = arr[0].OTP;
            }
        }, (error) => {
            this.commonServices.presentToast("Something went wrong.");
        });
    }
    confirmOtp() {
        console.log(this.enteredotp);
        if (this.enteredotp == this.validotp) {
            var obj = {
                CDate: this.detailsStation.SummeryDate,
                StationCode: JSON.parse(sessionStorage.getItem("globalDetail"))[0]
                    .StationCode,
                IsStationSubmitted: 0,
                LockUnlockStatus: 1,
                // ShiftId : this.LockUnlockShiftId,
                LockUnlockDate: this.detailsStation.SummeryDate,
            };
            var StationCode = JSON.parse(sessionStorage.getItem("globalDetail"))[0]
                .StationCode;
            this.commonServices.post("updateDSAFlag", obj).subscribe((resp) => {
                var arr = [];
                const data1 = JSON.parse(resp);
                console.log(data1);
                this.SubmittedBySOPFlag = false;
                this.commonServices.lockUnlock.emit(false);
            }, (error) => {
                this.commonServices.presentToast("Something went wrong.");
            });
        }
        else {
            this.commonServices.presentToast("Please enter Valid OTP");
        }
    }
    requestPopup() {
        this.enteredotp = "";
        this.successMessage = false;
        this.enterOtpfields = false;
    }
};
PaymentCollectionPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] }
];
PaymentCollectionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-payment-collection",
        template: __webpack_require__(/*! raw-loader!./payment-collection.page.html */ "./node_modules/raw-loader/index.js!./src/app/station/payment-collection/payment-collection.page.html"),
        styles: [__webpack_require__(/*! ./payment-collection.page.scss */ "./src/app/station/payment-collection/payment-collection.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]])
], PaymentCollectionPage);



/***/ })

}]);
//# sourceMappingURL=station-payment-collection-payment-collection-module-es2015.js.map