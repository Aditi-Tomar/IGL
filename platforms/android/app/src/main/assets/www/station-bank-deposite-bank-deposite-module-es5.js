(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["station-bank-deposite-bank-deposite-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/station/bank-deposite/bank-deposite.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/station/bank-deposite/bank-deposite.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<h1 class=\"text_white text_center title\">{{SummeryDate}}</h1>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<div class=\"main_heading1\">\r\n\t\t<div>\r\n\t\t\t<ion-back-button defaultHref=\"dsa-entry-detail\"></ion-back-button>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<h1>Bank Deposit</h1>\r\n\t\t</div>\r\n\t\t<div class=\"text_center\">\r\n\t\t</div>\r\n\t</div>\r\n</ion-header>\r\n<ion-content>\r\n\t<div class=\"content_area\">\r\n\t\t<ion-card>\r\n\t\t\t<ion-grid>\r\n\t\t\t\t<ion-row *ngFor=\"let cp of CashPayment\">\r\n\t\t\t\t\t<ion-col>{{cp.PaymentMode}}</ion-col>\r\n\t\t\t\t\t<ion-col class=\"ion-text-right\">(₹) {{cp.PaymentAmount}}</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</ion-grid>\r\n\t\t</ion-card>\r\n\t\t<ion-card>\r\n\t\t\t<div class=\"card_header\">\r\n\t\t\t\t<h3>Details</h3>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"card_content\">\r\n\t\t\t\t<ion-grid>\r\n\t\t\t\t\t<ion-row *ngFor=\"let pm of AddDenominationsType\">\r\n\t\t\t\t\t\t<ion-col size=\"2\" *ngIf=\"(pm.DenominationsName == 'Other Notes')\">{{pm.DenominationsName}} (₹) x\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t<ion-col size=\"2\" *ngIf=\"(pm.DenominationsName == 'Coins')\">{{pm.DenominationsName}} (₹) x\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t<ion-col size=\"2\"\r\n\t\t\t\t\t\t\t*ngIf=\"(pm.DenominationsName != 'Other Notes' && pm.DenominationsName != 'Coins')\">\r\n\t\t\t\t\t\t\t{{pm.DenominationsName}} (₹) x</ion-col>\r\n\t\t\t\t\t\t<ion-col size=\"3\" offset=\"1\">\r\n\t\t\t\t\t\t\t<ion-input class=\"inp_control\" type=\"number\" placeholder=\"{{pm.DenominationsName}}\"\r\n\t\t\t\t\t\t\t\tvalue=\"{{pm.DenominationsCount}}\" min=\"0\"\r\n\t\t\t\t\t\t\t\t(input)=\"Onchange($event.target,pm.DenominationsName)\" (keypress)=\"check($event)\">\r\n\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t<ion-col size=\"2\" class=\"ion-text-right\">(₹) {{pm.DenominationsAmount}}</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t</ion-grid>\r\n\t\t\t\t<ion-grid>\r\n\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t<ion-col size=\"6\">Total Bank Deposit</ion-col>\r\n\t\t\t\t\t\t<ion-col size=\"3\" offset=\"3\" class=\"ion-text-right\">(₹) {{CashDeposit}}</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<ion-item line=\"none\">\r\n\t\t\t\t\t\t\t\t<ion-label>Submitted</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-checkbox id=\"IsSubmitcheck\" (ionChange)=\"OnCheckboxChange($event)\"></ion-checkbox>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<div class=\"inp_form_control\">\r\n\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t<ion-label>Slip/Reference No.</ion-label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t<ion-input [value]=\"SlipNo\" (input)=\"SlipNo = $event.target.value\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"!IsBankSubmitted ? 'showDisabled' : 'hideDisabled'\"\r\n\t\t\t\t\t\t\t\t\t\t[disabled]=\"!IsBankSubmitted\"></ion-input>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<div class=\"inp_form_control\">\r\n\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t<ion-label>Date</ion-label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t<ion-datetime displayFormat=\"DD-MMM-YYYY\" pickerFormat=\"DD MMM YYYY\"\r\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Date\" [max]=\"secondMaxDate\"\r\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"SubmissionDate\" [disabled]=\"!IsBankSubmitted\" \r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"!IsBankSubmitted ? 'showDisabled' : 'hideDisabled'\"\r\n\t\t\t\t\t\t\t\t\t\t(ngModelChange)=\"OnDateChnagefrom($event)\">\r\n\t\t\t\t\t\t\t\t\t</ion-datetime>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<div class=\"inp_form_control\">\r\n\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t<ion-label>Submit By</ion-label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t<ion-input [value]=\"SubmitBy\" (input)=\"SubmitBy=$event.target.value\"\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"!IsBankSubmitted ? 'showDisabled' : 'hideDisabled'\"\r\n\t\t\t\t\t\t\t\t\t\t[disabled]=\"!IsBankSubmitted\"></ion-input>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<div class=\"inp_form_control\">\r\n\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t<ion-label>Remark</ion-label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t<ion-input id=\"remark\" [value]=\"remark\" (input)=\"remark=$event.target.value\"\r\n\t\t\t\t\t\t\t\t\t\t[disabled]=\"RemarkIsfalse\"></ion-input>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<div class=\"inp_form_control\">\r\n\t\t\t\t\t\t\t\t<div class=\"button_container\">\r\n\t\t\t\t\t\t\t\t\t<ion-button color=\"dark_green_clr\" type=\"submit\" (click)=\"presentAlerttoConfirm();\">\r\n\t\t\t\t\t\t\t\t\t\tSave</ion-button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t</ion-grid>\r\n\t\t\t</div>\r\n\t\t</ion-card>\r\n\t</div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/station/bank-deposite/bank-deposite-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/station/bank-deposite/bank-deposite-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: BankDepositePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankDepositePageRoutingModule", function() { return BankDepositePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bank_deposite_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bank-deposite.page */ "./src/app/station/bank-deposite/bank-deposite.page.ts");




var routes = [
    {
        path: '',
        component: _bank_deposite_page__WEBPACK_IMPORTED_MODULE_3__["BankDepositePage"]
    }
];
var BankDepositePageRoutingModule = /** @class */ (function () {
    function BankDepositePageRoutingModule() {
    }
    BankDepositePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], BankDepositePageRoutingModule);
    return BankDepositePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/station/bank-deposite/bank-deposite.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/station/bank-deposite/bank-deposite.module.ts ***!
  \***************************************************************/
/*! exports provided: BankDepositePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankDepositePageModule", function() { return BankDepositePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bank_deposite_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bank-deposite-routing.module */ "./src/app/station/bank-deposite/bank-deposite-routing.module.ts");
/* harmony import */ var _bank_deposite_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bank-deposite.page */ "./src/app/station/bank-deposite/bank-deposite.page.ts");







var BankDepositePageModule = /** @class */ (function () {
    function BankDepositePageModule() {
    }
    BankDepositePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _bank_deposite_routing_module__WEBPACK_IMPORTED_MODULE_5__["BankDepositePageRoutingModule"]
            ],
            declarations: [_bank_deposite_page__WEBPACK_IMPORTED_MODULE_6__["BankDepositePage"]]
        })
    ], BankDepositePageModule);
    return BankDepositePageModule;
}());



/***/ }),

/***/ "./src/app/station/bank-deposite/bank-deposite.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/station/bank-deposite/bank-deposite.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card_header {\n  width: 100%;\n  padding: 8px 9px;\n  border-bottom: 1px solid #d6d6d6;\n}\n\n.card_content {\n  width: 100%;\n  padding: 8px 9px;\n}\n\n.inp_control {\n  height: 34px;\n}\n\n.showDisabled {\n  background-color: #eee;\n  opacity: 1;\n}\n\n.hideDisabled {\n  background-color: #fff;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvc3RhdGlvbi9iYW5rLWRlcG9zaXRlL2JhbmstZGVwb3NpdGUucGFnZS5zY3NzIiwic3JjL2FwcC9zdGF0aW9uL2JhbmstZGVwb3NpdGUvYmFuay1kZXBvc2l0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQ0FKOztBREVBO0VBRUksV0FBQTtFQUNBLGdCQUFBO0FDQUo7O0FERUE7RUFFSSxZQUFBO0FDQUo7O0FER0E7RUFDSSxzQkFBQTtFQUNBLFVBQUE7QUNBSjs7QURHQTtFQUNJLHNCQUFBO0VBQ0EsVUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvc3RhdGlvbi9iYW5rLWRlcG9zaXRlL2JhbmstZGVwb3NpdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRfaGVhZGVyXHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogOHB4IDlweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDZkNmQ2O1xyXG59XHJcbi5jYXJkX2NvbnRlbnRcclxue1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHBhZGRpbmc6IDhweCA5cHg7XHJcbn1cclxuLmlucF9jb250cm9sXHJcbntcclxuICAgIGhlaWdodDozNHB4O1xyXG59XHJcblxyXG4uc2hvd0Rpc2FibGVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5oaWRlRGlzYWJsZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgb3BhY2l0eTogMTtcclxufSIsIi5jYXJkX2hlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA4cHggOXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q2ZDZkNjtcbn1cblxuLmNhcmRfY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA4cHggOXB4O1xufVxuXG4uaW5wX2NvbnRyb2wge1xuICBoZWlnaHQ6IDM0cHg7XG59XG5cbi5zaG93RGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uaGlkZURpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgb3BhY2l0eTogMTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/station/bank-deposite/bank-deposite.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/station/bank-deposite/bank-deposite.page.ts ***!
  \*************************************************************/
/*! exports provided: BankDepositePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankDepositePage", function() { return BankDepositePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var BankDepositePage = /** @class */ (function () {
    function BankDepositePage(alertController, formBuilder, datepipe, router, activatedroute, commonServices, menu, dp) {
        var _this = this;
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.datepipe = datepipe;
        this.router = router;
        this.activatedroute = activatedroute;
        this.commonServices = commonServices;
        this.menu = menu;
        this.dp = dp;
        this.Cdate = '';
        this.StationShift = { ShiftId: '-1', SubShiftId: '-1', ActiveTab: 'Bank' };
        this.OpeningCashBalance = '0.00';
        this.TotalSale = '0.00';
        this.CashDeposit = '0.00';
        this.ClosingCashBalance = '0.00';
        this.CurrentCash = '0.00';
        this.DepositDate = '';
        this.oldvalue = '';
        this.RemarkIsfalse = false;
        this.searchValue = '';
        this.IsBankSubmitted = false;
        this.SlipNo = '';
        this.CompanyName = '';
        this.selectedStation = 0;
        this.submittedflag = false;
        this.SubmitBy = '';
        this.secondMaxDate = new Date().toISOString();
        this.SummeryDate = localStorage.getItem('SummeryDate');
        this.UserId = localStorage.getItem('UserId');
        this.onselectedStation = localStorage.getItem('StationId');
        this.toggleSideBar();
        this.StationShift = this.StationShift;
        setTimeout(function () { _this.GetDenominationsType(); }, 1000);
        this.commonServices.lockUnlock.subscribe(function (value) {
            _this.submittedflag = value;
        });
    }
    BankDepositePage.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedStation = Number(localStorage.getItem('StationId'));
        this.subscription = this.commonServices.StationDetails.subscribe(function (test) {
            _this.detailsStation = test;
            console.log("detailsStation", _this.detailsStation);
        });
        this.currentdate = new Date().toISOString().split('T')[0];
        console.log(this.currentdate);
        var dt = new Date(this.currentdate);
        this.SubmissionDate = this.datepipe.transform(dt, 'yyyy/MM/dd');
    };
    BankDepositePage.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    BankDepositePage.prototype.openFirst = function () {
        this.menu.enable(true, 'menuStn');
        this.menu.open('menuStn');
    };
    BankDepositePage.prototype.toggleSideBar = function () {
        var _this = this;
        //this.commonServices.loadingPresent();
        this.commonServices.post("CommonGetData", {
            Id: this.onselectedStation,
            Status: this.SummeryDate, Flag: 'validatePopup'
        }).subscribe(function (resp) {
            var data = JSON.parse(resp);
            console.log(data);
            if (data.Table[0].Msg == 'Allow') {
                _this.commonServices.StationDetails.emit({
                    StationId: _this.onselectedStation,
                    SummeryDate: _this.SummeryDate,
                    UserId: _this.UserId
                });
            }
            else {
                _this, _this.commonServices.presentToast(data.Table[0].Msg);
            }
            // this.commonServices.loadingDismiss();
        }, function (error) {
            _this, _this.commonServices.presentToast('Something went wrong.');
            //this.commonServices.loadingDismiss();
        });
    };
    BankDepositePage.prototype.OnDateChnagefrom = function (val) {
        var self = this;
        var dt = new Date(val);
        self.SubmissionDate = this.datepipe.transform(dt, 'yyyy/MM/dd');
    };
    BankDepositePage.prototype.GetDenominationsType = function () {
        var _this = this;
        this.commonServices.loadingDismiss();
        this.commonServices.loadingPresent();
        this.commonServices.post("GetDenominationsData", { StationId: this.detailsStation.StationId, DepositDate: this.detailsStation.SummeryDate }).subscribe(function (resp) {
            _this.commonServices.loadingDismiss();
            _this.AddDenominationsType = JSON.parse(resp).Table;
            _this.CashPayment = JSON.parse(resp).Table1;
            _this.OpeningCashBalance = parseFloat(JSON.parse(resp).Table2[0].OpeningCashBalance.toFixed(2)).toString();
            _this.CurrentCash = parseFloat(JSON.parse(resp).Table2[0].CurrentCash.toFixed(2)).toString();
            _this.ClosingCashBalance = parseFloat(JSON.parse(resp).Table2[0].ClosingCashBalance.toFixed(2)).toString();
            _this.CalculateClosingBalanace();
            var Ischek = JSON.parse(resp).Table2[0].IsSubmited;
            if (Ischek == 1)
                $("#IsSubmitcheck").prop("checked", true);
            else
                $("#IsSubmitcheck").prop("checked", false);
            _this.SlipNo = JSON.parse(resp).Table2[0].SlipNo;
            _this.SubmitBy = JSON.parse(resp).Table2[0].SubmittedBy;
            _this.remark = JSON.parse(resp).Table2[0].Remark;
        }, function (error) {
            _this.commonServices.presentToast("Something went wrong.");
            _this.commonServices.loadingDismiss();
        });
    };
    BankDepositePage.prototype.check = function (evt) {
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    };
    BankDepositePage.prototype.Onchange = function (val, DenominationsName) {
        if (val.value == '') {
            var Value = this.AddDenominationsType.find(function (pm) { return pm.DenominationsName === DenominationsName; });
            if (DenominationsName == 'Other Notes') {
                Value.DenominationsAmount = 0;
                Value.DenominationsCount = (parseFloat(val.value)).toString();
            }
            else if (DenominationsName == 'Coins') {
                Value.DenominationsAmount = 0;
                Value.DenominationsCount = (parseFloat(val.value)).toString();
            }
            else {
                Value.DenominationsCount = val.value;
                Value.DenominationsAmount = (0 * parseFloat(DenominationsName)).toString();
            }
        }
        else {
            var Value = this.AddDenominationsType.find(function (pm) { return pm.DenominationsName === DenominationsName; });
            if (DenominationsName == 'Other Notes') {
                Value.DenominationsAmount = (parseFloat(val.value)).toString();
                Value.DenominationsCount = (parseFloat(val.value)).toString();
            }
            else if (DenominationsName == 'Coins') {
                Value.DenominationsAmount = (parseFloat(val.value)).toString();
                Value.DenominationsCount = (parseFloat(val.value)).toString();
            }
            else {
                Value.DenominationsCount = val.value;
                Value.DenominationsAmount = (parseFloat(val.value) * parseFloat(DenominationsName)).toString();
            }
        }
        this.CalculateClosingBalanace();
    };
    BankDepositePage.prototype.CalculateClosingBalanace = function () {
        this.CashDeposit = '0.00';
        for (var i = 0; i < this.AddDenominationsType.length; i++) {
            this.CashDeposit = (parseFloat(this.CashDeposit) + parseFloat(this.AddDenominationsType[i].DenominationsAmount)).toFixed(2).toString();
        }
        var Value = this.CashPayment.find(function (pm) { return pm.PaymentMode === 'Closing Cash Balance'; });
        this.ClosingCashBalance = ((parseFloat(this.OpeningCashBalance) + parseFloat(this.CurrentCash) - parseFloat(this.CashDeposit)).toFixed(2)).toString();
        Value.PaymentAmount = this.ClosingCashBalance;
    };
    BankDepositePage.prototype.saveBankDeposit = function () {
        var _this = this;
        if (this.detailsStation.SummeryDate != '') {
            if (parseFloat(this.CashDeposit) <= (parseFloat(this.CurrentCash) +
                parseFloat(this.OpeningCashBalance))) {
                if (this.IsBankSubmitted == true) {
                    if (this.SlipNo == '') {
                        this.commonServices.presentToast('Slip/reference no. must be fill.');
                        return false;
                    }
                    if (this.SubmitBy == '') {
                        this.commonServices.presentToast('SubmitBy must be fill.');
                        return false;
                    }
                }
                // if (this.IsBankSubmitted==false) {
                //     if(isNullOrUndefined(this.remark) || this.remark=='') {
                //        alert('Remark must be fill.');
                //        return false;
                //     }            
                // }
                var v = (this.IsBankSubmitted == true) ? 1 : 2;
                this.commonServices.loadingDismiss();
                this.commonServices.loadingPresent();
                this.commonServices.post("BankDepositPaymentCollection", { StationId: this.detailsStation.StationId, UserId: this.detailsStation.UserId, Remark: this.remark, DepositDate: this.detailsStation.SummeryDate, DispanserPayment: this.AddDenominationsType, SlipNo: this.SlipNo, IsSubmited: v, SubmitBy: this.SubmitBy, EntryDate: this.SubmissionDate }).subscribe(function (resp) {
                    var data = JSON.parse(resp);
                    _this.commonServices.presentToast(data.Table[0].Meaasge);
                    _this.commonServices.loadingDismiss();
                    // $('.nav-tabs >').first('li').find('a').trigger('click');
                    // this.objDbServ.DispencerPopup.emit(false);
                }, function (error) {
                    _this.commonServices.presentToast("Something went wrong.");
                    _this.commonServices.loadingDismiss();
                });
            }
            else {
                if (this.remark != '' && this.remark != undefined) {
                    // this.commonServices.loadingPresent();
                    this.commonServices.post("BankDepositPaymentCollection", { StationId: this.detailsStation.StationId, UserId: this.detailsStation.UserId, Remark: this.remark, DepositDate: this.detailsStation.SummeryDate, DispanserPayment: this.AddDenominationsType }).subscribe(function (resp) {
                        var data = JSON.parse(resp);
                        _this.commonServices.presentToast(data.Table[0].Meaasge);
                        // this.commonServices.loadingDismiss();
                        // $('.nav-tabs >').first('li').find('a').trigger('click');
                        // this.objDbServ.DispencerPopup.emit(false);
                        // this.searchInput.nativeElement.value = '';
                        _this.remark = '';
                        _this.RemarkIsfalse = false;
                    }, function (error) {
                        _this.commonServices.presentToast("Something went wrong.");
                        // this.commonServices.loadingDismiss();
                    });
                }
                else {
                    this.commonServices.presentToast("Remark Can't be blank.");
                }
            }
        }
        else {
            this.commonServices.presentToast("Deposit date must be.");
        }
    };
    BankDepositePage.prototype.saveBankDepositOnOkClick = function (val) {
        if (val == "yes") {
            this.RemarkIsfalse = true;
            this.saveBankDeposit();
        }
        else {
            this.RemarkIsfalse = false;
        }
    };
    BankDepositePage.prototype.OnCheckboxChange = function (evt) {
        if (evt.target.checked == true) {
            this.SlipNo = '';
            this.SubmitBy = '';
            this.IsBankSubmitted = true;
        }
        else if (evt.target.checked == false) {
            this.SlipNo = '';
            this.SubmitBy = '';
            this.IsBankSubmitted = false;
        }
    };
    BankDepositePage.prototype.unlockpayment = function () {
        this.commonServices.presentToast("Please unlock this from payment collection tab");
    };
    BankDepositePage.prototype.presentAlerttoConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'my-custom-class',
                            header: 'Bank Deposit Confirmation !',
                            message: 'Your bank deposit is greater than (Cash collection + Ope. Cash Balance).',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                        _this.saveBankDepositOnOkClick('no');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.saveBankDepositOnOkClick('yes');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BankDepositePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] }
    ]; };
    BankDepositePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bank-deposite',
            template: __webpack_require__(/*! raw-loader!./bank-deposite.page.html */ "./node_modules/raw-loader/index.js!./src/app/station/bank-deposite/bank-deposite.page.html"),
            styles: [__webpack_require__(/*! ./bank-deposite.page.scss */ "./src/app/station/bank-deposite/bank-deposite.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]])
    ], BankDepositePage);
    return BankDepositePage;
}());



/***/ })

}]);
//# sourceMappingURL=station-bank-deposite-bank-deposite-module-es5.js.map