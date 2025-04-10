(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["station-meter-skid-meter-skid-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/station/meter-skid/meter-skid.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/station/meter-skid/meter-skid.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<div class=\"main_heading1\">\r\n\t\t<div>\r\n\t\t\t<ion-back-button defaultHref=\"home\"></ion-back-button>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<h1>Meter Skid</h1>\r\n\t\t</div>\r\n\t\t<div></div>\r\n\t</div>\r\n</ion-header>\r\n<ion-content>\r\n\t<div class=\"content_area\">\r\n\t\t<form class=\"myform\">\r\n\t\t\t<ion-grid>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"sap_no_div\">\r\n\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t<strong>SAP Equipment Number : </strong>\r\n\t\t\t\t\t\t\t\t<span>{{(MSMeterSkidCode == null) ? '0.00' : MSMeterSkidCode}}</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<form [formGroup]=\"addForm\" (ngSubmit)=\"insertStationSkid()\">\r\n\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t<label>Select Date\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"star\">*</span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t\t<ion-label>Select Date:</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t<!-- <ion-datetime displayFormat=\"DD-MMM-YYYY\"  name=\"DPREntryDate\" [max]=\"maxDate\"></ion-datetime> -->\r\n\t\t\t\t\t\t\t\t\t\t<ion-datetime #selcteddate class=\"datepick\" formControlName=\"DPREntryDate\"\r\n\t\t\t\t\t\t\t\t\t\t\t[max]=\"secondMaxDate\" displayFormat=\"DD-MMM-YYYY\"\r\n\t\t\t\t\t\t\t\t\t\t\tpickerFormat=\"DD MMM YYYY\" name=\"selcteddate\"\r\n\t\t\t\t\t\t\t\t\t\t\t(ionChange)=\"getSelectedDate(selcteddate.value)\">\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- form=\"DispenserDate.selcteddate\" -->\r\n\t\t\t\t\t\t\t\t\t\t</ion-datetime>\r\n\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<div class=\"form_inp_container mb5\">\r\n\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t<label>Flow Meter Totaliser\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"star\">*</span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"input_container d_flex justify_space_beetween\">\r\n\t\t\t\t\t\t\t\t\t<ion-input placeholder=\"Flow Meter Totaliser\" formControlName=\"meterTotaliser\">\r\n\t\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t\t\t<span class=\"font13 mr5\">Prev :{{(MSFlowMeterTotaliserPrv == null) ?\r\n\t\t\t\t\t\t\t\t\t '0.00': MSFlowMeterTotaliserPrv}}</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form_inp_container cng_reset_btn_div mb5\">\r\n\t\t\t\t\t\t\t\t<ion-button class=\"font11 change_reset_btn\" size=\"small\"\r\n\t\t\t\t\t\t\t\t\t(click)=\"change_resetRedirect()\">Jump/Change/Reset</ion-button>\r\n\t\t\t\t\t\t\t\t<ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\r\n\t\t\t\t\t<!-- New Comment -->\r\n\r\n\t\t\t\t\t<!-- <ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-list lines=\"none\">\r\n\t\t\t\t\t\t\t\t\t<ion-item >\r\n\t\t\t\t\t\t\t\t\t\t<ion-label>Jump</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t<ion-checkbox slot=\"end\" (ionChange)=\"showFields()\" ></ion-checkbox>\r\n\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t</ion-list>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"12\" *ngIf=\"myVar\">\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<label>Jump Reading </label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-input placeholder=\"Jump Reading\" formControlName=\"jumpReading\"></ion-input>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<label>Choose File</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container file_cont\">\r\n\t\t\t\t\t\t\t\t<input type=\"file\"  name=\"MSfileInput\" id=\"MSfileInput\"  (change)=\"upload($event)\"/>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<label>Jump Reading Count</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-input placeholder=\"Enter Input\" id=\"colFormLabel\" formControlName=\"jumpReadingCount\"></ion-input>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row> -->\r\n\r\n\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t<label>Remark</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t<ion-input type=\"textarea\" placeholder=\"Remark\" formControlName=\"remark\">\r\n\t\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<div class=\"button_container\" [hidden]=\"IsMSkidhide\">\r\n\t\t\t\t\t\t\t\t<ion-button color=\"dark_green_clr\" type=\"submit\"\r\n\t\t\t\t\t\t\t\t\t[hidden]=\"MSisStationSubmitted > 0  || MSisCRSentToHo > 0\">Save</ion-button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\r\n\t\t\t\t\t<!-- <ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\" [hidden]=\"MSisStationSubmitted == 0\">\r\n\t\t\t\t\t\t<ion-text class=\"redTextRis\">\r\n\t\t\t\t\t\t\t* Data is submitted for the date {{DPREntryDate}}.\r\n\t\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"12\" [hidden]=\"MSisCRSentToHo == 0\">\r\n\t\t\t\t\t\t<ion-text class=\"redTextRis\">\r\n\t\t\t\t\t\t\t* Submission is closed for date {{DPREntryDate}}  from Control Room.\r\n\t\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row> -->\r\n\r\n\t\t\t\t</form>\r\n\t\t\t</ion-grid>\r\n\t\t\t<div class=\"msg\">\r\n\t\t\t\t<span class=\"data_submit_msg\" [hidden]=\"MSisStationSubmitted == 0 \">\r\n\t\t\t\t\t* Data is submitted for the date {{meterDate.selcteddate}} by Station.</span><br>\r\n\t\t\t\t<span class=\"data_submit_msg\" [hidden]=\"MSisCRSentToHo == 0 \">\r\n\t\t\t\t\t* Submission is closed for date {{meterDate.selcteddate}} by Control Room.</span>\r\n\t\t\t\t<!-- DPREntryDate -->\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"msg\" *ngIf=\"IsMSkidhide\" style=\"margin-left: 15px;\">\r\n\t\t\t\t<span class=\"data_submit_msg\" >* Equipment not available for this Station.</span>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/station/meter-skid/meter-skid-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/station/meter-skid/meter-skid-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: MeterSkidPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeterSkidPageRoutingModule", function() { return MeterSkidPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _meter_skid_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meter-skid.page */ "./src/app/station/meter-skid/meter-skid.page.ts");




var routes = [
    {
        path: '',
        component: _meter_skid_page__WEBPACK_IMPORTED_MODULE_3__["MeterSkidPage"]
    }
];
var MeterSkidPageRoutingModule = /** @class */ (function () {
    function MeterSkidPageRoutingModule() {
    }
    MeterSkidPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], MeterSkidPageRoutingModule);
    return MeterSkidPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/station/meter-skid/meter-skid.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/station/meter-skid/meter-skid.module.ts ***!
  \*********************************************************/
/*! exports provided: MeterSkidPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeterSkidPageModule", function() { return MeterSkidPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _meter_skid_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./meter-skid-routing.module */ "./src/app/station/meter-skid/meter-skid-routing.module.ts");
/* harmony import */ var _meter_skid_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./meter-skid.page */ "./src/app/station/meter-skid/meter-skid.page.ts");







var MeterSkidPageModule = /** @class */ (function () {
    function MeterSkidPageModule() {
    }
    MeterSkidPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _meter_skid_routing_module__WEBPACK_IMPORTED_MODULE_5__["MeterSkidPageRoutingModule"]
            ],
            declarations: [_meter_skid_page__WEBPACK_IMPORTED_MODULE_6__["MeterSkidPage"]]
        })
    ], MeterSkidPageModule);
    return MeterSkidPageModule;
}());



/***/ }),

/***/ "./src/app/station/meter-skid/meter-skid.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/station/meter-skid/meter-skid.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpb24vbWV0ZXItc2tpZC9tZXRlci1za2lkLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/station/meter-skid/meter-skid.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/station/meter-skid/meter-skid.page.ts ***!
  \*******************************************************/
/*! exports provided: MeterSkidPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeterSkidPage", function() { return MeterSkidPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var MeterSkidPage = /** @class */ (function () {
    function MeterSkidPage(formBuilder, router, activatedroute, commonServices, menu, dp) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedroute = activatedroute;
        this.commonServices = commonServices;
        this.menu = menu;
        this.dp = dp;
        this.meterDate = { selcteddate: "" };
        this.myVar = false;
        this.myFlag = 0;
        this.IsMSkidhide = false;
        this.IsPackagehide = false;
        this.IsDisphide = false;
        this.IsLCVhide = false;
        this.IsGenSethide = false;
        //Meter Skid Vars//
        this.MSMeterSkidCode = '';
        this.MSFlowMeterTotaliserPrv = '';
        this.meterStationSkidData = [];
        this.loginId = localStorage.getItem('UID');
        this.meterTotaliser = '';
        this.jumpReading = '';
        this.jumpReadingFile = null;
        this.jumpReadingCount = '';
        this.MeterSkidDetailJson = [];
        this.GlobalDetail = [];
        this.remark = "";
        this.OldMeterReading = "";
        this.JReading = "";
        this.resetTypeJsonSelected = "";
        this.MSisCRSentToHo = 0;
        this.MSisStationSubmitted = 0;
        this.MSfilevisible = false;
        this.popupfilevisible = true;
        this.JumpVisible = true;
        this.stationName = "";
        this.MeterSkidReadingAverage = '';
        this.secondMaxDate = new Date().toISOString();
        this.monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ];
        this.currentdate = new Date().toISOString().split('T')[0];
        if (this.meterDate.selcteddate == "") {
            this.currDate = this.currentdate;
            console.log(this.currDate);
            var dt = new Date(this.currDate);
            //IOS Comment
            // let latest_date = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
            // this.meterDate.selcteddate = latest_date;
            this.DPREntryDateTime = this.dp.transform(dt, 'yyyy/MM/dd hh:mm:ss');
            this.meterDate.selcteddate = this.DPREntryDateTime;
        }
        this.addForm = formBuilder.group({
            DPREntryDate: [this.meterDate.selcteddate, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            meterTotaliser: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            jumpReading: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            jumpReadingCount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            remark: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    MeterSkidPage.prototype.ngOnInit = function () {
        this.stationName = JSON.parse(localStorage.getItem("globalDetail"))[0].StationName;
        console.log(this.stationName);
        console.log(localStorage.getItem('UID'));
        this.getStationMeterSkidData();
    };
    MeterSkidPage.prototype.openFirst = function () {
        this.menu.enable(true, 'menuStn');
        this.menu.open('menuStn');
    };
    MeterSkidPage.prototype.change_resetRedirect = function () {
        this.router.navigate(['change-reset-meter-skid', { entryDate: this.meterDate.selcteddate }]);
    };
    MeterSkidPage.prototype.showFields = function () {
        if (this.myFlag == 0) {
            this.myVar = true;
            this.myFlag = 1;
        }
        else {
            this.myVar = false;
            this.myFlag = 0;
        }
    };
    MeterSkidPage.prototype.getSelectedDate = function (datePicker) {
        console.log("datePicker", datePicker);
        var dt = new Date(datePicker);
        //IOS Comment
        // let latest_date = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        // this.meterDate.selcteddate = latest_date;
        // this.DPREntryDateTime = this.dp.transform(this.meterDate.selcteddate, 'yyyy-MM-dd hh:mm:ss');
        this.DPREntryDateTime = this.dp.transform(dt, 'yyyy/MM/dd hh:mm:ss');
        this.meterDate.selcteddate = this.DPREntryDateTime;
        this.getStationMeterSkidData();
    };
    MeterSkidPage.prototype.getStationMeterSkidData = function () {
        var _this = this;
        try {
            // this.commonServices.loadingPresent();
            this.commonServices.postwithservice("GetStationMeterSkid", {
                StationCode: localStorage.getItem('stationCode'),
                LoginId: localStorage.getItem('stationCode'),
                DPREntryDate: this.dp.transform(this.meterDate.selcteddate, 'dd/MMM/yyyy')
                //IOS Comment
                //DPREntryDate: this.meterDate.selcteddate
            }).subscribe(function (response) {
                // this.commonServices.loadingDismiss();
                var data = JSON.parse(response);
                console.log(data);
                if (data.length > 0) {
                    console.log('true');
                    _this.IsMSkidhide = false;
                    _this.meterStationSkidData = data[1][0];
                    console.log(_this.meterStationSkidData);
                    console.log(_this.meterStationSkidData, "GK meterStationSkidData");
                    _this.MSMeterSkidCode = _this.meterStationSkidData.MeterSkidCode;
                    _this.MSFlowMeterTotaliserPrv = _this.meterStationSkidData.FlowMeterTotaliserPrv;
                    console.log(_this.MSMeterSkidCode, "GK MSMeterSkidCode");
                    console.log(_this.MSFlowMeterTotaliserPrv, "GK MSFlowMeterTotaliserPrv");
                    _this.meterTotaliser = _this.meterStationSkidData.FlowMeterTotaliser;
                    _this.jumpReading = _this.meterStationSkidData.JumpReadingFMT;
                    _this.jumpReadingCount = _this.meterStationSkidData.JumpReadingFMTCount;
                    // this.remark = this.meterStationSkidData.Remark;
                    // isNullOrUndefined(this.PackageDetailJson[0].isCRSentToHo) ? 0 : this.PackageDetailJson[0].isCRSentToHo;
                    // this.MSisStationSubmitted = isNullOrUndefined(parseInt(this.meterStationSkidData.isStationSubmitted)) ? 0 : this.meterStationSkidData.isStationSubmitted;
                    console.log(_this.MSisCRSentToHo, "MSisCRSentToHo");
                    _this.remark = Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(_this.meterStationSkidData.Remark) ? '' : _this.meterStationSkidData.Remark;
                    _this.MSisCRSentToHo = Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(_this.meterStationSkidData.isCRSentToHo) ? 0 : _this.meterStationSkidData.isCRSentToHo;
                    _this.MSisStationSubmitted = Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(_this.meterStationSkidData.isStationSubmitted) ? 0 : _this.meterStationSkidData.isStationSubmitted;
                    console.log(_this.MSisCRSentToHo, "MSisCRSentToHo");
                    console.log(_this.MSisStationSubmitted, "MSisStationSubmitted");
                    // this.JumpCertificateFMT = this.meterStationSkidData.JumpCertificateFMT;
                    // if(this.JumpCertificateFMT != '')
                    //    this.MSkidShowJumpImage=true;
                    // else
                    //    this.MSkidShowJumpImage=false;
                    // if(parseFloat(this.jumpReading) > 0.000) {
                    //     this.MSfilevisible = false;
                    //     $("#Ischeckbox").prop("checked", true);
                    //     this.JumpVisible=false;
                    // }else  {
                    //     this.MSfilevisible= true;
                    //     $("#Ischeckbox").prop("checked", false);
                    //     this.JumpVisible =true;
                    // }
                }
                else {
                    _this.commonServices.presentToast('No Meter Skid data available. Please try another station.');
                    console.log('data[0].length<0');
                    _this.IsMSkidhide = true;
                    _this.MSisCRSentToHo = 0;
                    _this.MSisStationSubmitted = 0;
                    console.log(_this.MSisCRSentToHo, "MSisCRSentToHo");
                    console.log(_this.MSisStationSubmitted, "MSisStationSubmitted");
                }
                // this.commonServices.loadingDismiss();
            }, function (error) {
                _this.commonServices.presentToast('Something went wrong.');
                // this.commonServices.loadingDismiss();
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    MeterSkidPage.prototype.upload = function (str) {
        // const formData = new FormData();
        this.uploadedfile = str.target.files[0];
        // formData.append('file', this.uploadedfile);
        console.log(this.uploadedfile);
        // this.commonServices.post("http://localhost/test/test.php",formData)
        // .subscribe((data:any)=>{
        //   console.log(data);
        // })
        // console.log(str);
    };
    MeterSkidPage.prototype.insertStationSkid = function () {
        var _this = this;
        var MyJson = {
            LoginId: localStorage.getItem('LoginId'),
            MeterSkidCode: this.MSMeterSkidCode,
            FlowMeterTotaliser: this.addForm.value.meterTotaliser,
            JumpReadingFMT: 0,
            JumpReadingFMTCount: 0,
            Jumpcertificate: ((this.uploadedfile == undefined) ? '' : this.uploadedfile.name),
            Remark: this.addForm.value.remark,
            StationCode: localStorage.getItem('LoginId'),
            FilePath: localStorage.getItem('LoginId') + "/MeterSkid/",
            MeterSkidId: this.meterStationSkidData.MeterSkidId,
            DPREntryDate: this.meterDate.selcteddate
        };
        this.commonServices.postwithservice("MeterSkidAvrage", {
            LoginId: localStorage.getItem('LoginId'),
            DPREntryDate: this.dp.transform(this.meterDate.selcteddate, 'dd/MMM/yyyy')
            // DPREntryDate: this.meterDate.selcteddate
        }).subscribe(
        // DPREntryDate:this.dp.transform(this.meterDate.selcteddate,'dd-MMM-yyyy'
        function (resp) {
            var data = JSON.parse(resp).Table[0];
            _this.MeterSkidReadingAverage = data.FinalAmount;
            console.log(_this.MeterSkidReadingAverage);
            console.log(_this.meterTotaliser);
            _this.commonServices.presentToast("Meter Skid Average");
        }, function (error) {
            console.log(error);
            _this.commonServices.presentToast("Something went wrong.");
            _this.commonServices.loadingDismiss();
        });
        //  IOS Comment
        // this.MSfiles = $('#MSfileInput');
        // console.log(this.MSfiles);
        var frmData = new FormData();
        // var fileInput = this.MSfiles[0];
        frmData.append("meterSkidDetail", JSON.stringify(MyJson));
        this.commonServices.presentToast("Frmdate" + frmData);
        if (this.uploadedfile != undefined) {
            frmData.append('file', this.uploadedfile, this.uploadedfile.name);
        }
        // var ErrorMsg = this.checkStationSkidvalidations(MyJson, fileInput);
        var ErrorMsg = this.checkStationSkidvalidations(MyJson);
        console.log("Message" + ErrorMsg);
        if (ErrorMsg == '' || ErrorMsg == undefined) {
            if (Number(this.meterTotaliser) <= Number(this.MSFlowMeterTotaliserPrv)) {
                this.commonServices.alertMessage("Confirm", "Suspected Meter Skid Reading, Do you want to continue?").then(function (res) {
                    console.log(res);
                    if (!res) {
                        _this.commonServices.loadingPresent();
                        _this.commonServices.insertStationSkidApi(frmData).subscribe(function (resp) {
                            var data = resp;
                            console.log(data);
                            _this.commonServices.presentToast(data.Status);
                            if (data != '') {
                                _this.getStationMeterSkidData();
                            }
                            _this.commonServices.loadingDismiss();
                        }, function (error) {
                            _this.commonServices.presentToast('Something went wrong.');
                            _this.commonServices.loadingDismiss();
                        });
                    }
                });
            }
            else if (this.meterTotaliser > this.MeterSkidReadingAverage) {
                this.commonServices.alertMessage("Confirm", "Wrong Entry for Meter Skid Reading, Do you want to continue?").then(function (res) {
                    console.log(res);
                    if (!res) {
                        _this.commonServices.loadingPresent();
                        _this.commonServices.insertStationSkidApi(frmData).subscribe(function (resp) {
                            var data = resp;
                            console.log(data);
                            _this.commonServices.presentToast(data.Status);
                            if (data != '') {
                                _this.getStationMeterSkidData();
                            }
                            _this.commonServices.loadingDismiss();
                        }, function (error) {
                            _this.commonServices.presentToast('Something went wrong.');
                            _this.commonServices.loadingDismiss();
                        });
                    }
                });
            }
            else if (Number(this.meterTotaliser) >= 2 * Number(this.MSFlowMeterTotaliserPrv)) {
                this.commonServices.alertMessage("Confirm", "Suspected Meter Skid Reading, Do you want to continue?").then(function (res) {
                    console.log(res);
                    if (!res) {
                        _this.commonServices.loadingPresent();
                        _this.commonServices.insertStationSkidApi(frmData).subscribe(function (resp) {
                            var data = resp;
                            console.log(data);
                            _this.commonServices.presentToast(data.Status);
                            if (data != '') {
                                _this.getStationMeterSkidData();
                            }
                            _this.commonServices.loadingDismiss();
                        }, function (error) {
                            _this.commonServices.presentToast('Something went wrong.');
                            _this.commonServices.loadingDismiss();
                        });
                    }
                });
            }
            else {
                this.commonServices.loadingPresent();
                this.commonServices.insertStationSkidApi(frmData).subscribe(function (resp) {
                    var data = resp;
                    console.log(data);
                    _this.commonServices.presentToast(data.Status);
                    if (data != '') {
                        _this.getStationMeterSkidData();
                    }
                    _this.commonServices.loadingDismiss();
                }, function (error) {
                    _this.commonServices.presentToast('Something went wrong.');
                    _this.commonServices.loadingDismiss();
                });
            }
        }
        else {
            this.commonServices.presentToast(ErrorMsg);
        }
    };
    // checkStationSkidvalidations(MeterSkidDetailJson, fileInput) {
    MeterSkidPage.prototype.checkStationSkidvalidations = function (MeterSkidDetailJson) {
        var regexNumeric = /^[+-]?[0-9]{1,1000}(?:\.[0-9]{1,1000})?$/;
        var regexDecimalThree = /^[+-]?[0-9]{1,10}(?:\.[0-9]{1,3})?$/;
        var regexDecimalThreeNegative = /^[+]?[0-9]{1,10}(?:\.[0-9]{1,3})?$/;
        var imgShow = 'assets/images/attachment.gif';
        var foundError = '';
        var foundError = '';
        if (MeterSkidDetailJson.FlowMeterTotaliser == '') {
            foundError = 'Flow Meter Totaliser is required.';
            return foundError;
        }
        if ((MeterSkidDetailJson.JumpReadingFMT == '' || MeterSkidDetailJson.JumpReadingFMT == undefined || parseFloat(MeterSkidDetailJson.JumpReadingFMT) == parseFloat("0")) && parseFloat(MeterSkidDetailJson.FlowMeterTotaliser) == parseFloat("0")) {
            foundError = 'Invalid Meter Skid Reading';
            return foundError;
        }
        if (MeterSkidDetailJson.FlowMeterTotaliser != "") {
            if (regexNumeric.test(MeterSkidDetailJson.FlowMeterTotaliser) == false) {
                foundError = 'Only numeric value allowed for reading.';
                return foundError;
            }
            if (regexDecimalThree.test(MeterSkidDetailJson.FlowMeterTotaliser) == false) {
                foundError = 'Three decimal with Max 10 Precision values allowed';
                return foundError;
            }
            if (parseFloat(MeterSkidDetailJson.FlowMeterTotaliser) < 0) {
                foundError = 'Flow Meter Totaliser must be Positive.';
                return foundError;
            }
        }
        // New Comment //
        // if (MeterSkidDetailJson.JumpReadingFMT != '') {
        //   if (parseFloat(MeterSkidDetailJson.JumpReadingFMT) > 0 && fileInput.files.length == 0 && MeterSkidDetailJson.JumpCeritificateLCV == '') { foundError = 'Please attach the Jump certificate.'; return foundError; }
        //   if (fileInput.files.length > 0) {
        //     var validExtension = 'jpeg,jpg,png,gif,pdf';
        //     for (var i = 0; i < fileInput.files.length; i++) {
        //       var fileExtension = fileInput.files[i].name.split('.')[1];
        //       if (validExtension.indexOf(fileExtension) < 0) {
        //         foundError = 'Attachment allowed only for [' + validExtension + '].'; return foundError;
        //       }
        //     }
        //   }
        //   if (regexNumeric.test(MeterSkidDetailJson.JumpReadingFMT) == false) {
        //     foundError = 'Only numeric value allowed for Jump reading.'; return foundError;
        //   }
        //   if (regexDecimalThree.test(MeterSkidDetailJson.JumpReadingFMT) == false) {
        //     foundError = 'Three decimal with Max 10 Precision values allowed'; return foundError;
        //   }
        // }
        // var JumpReadingFMTCnt = MeterSkidDetailJson.JumpReadingFMTCount;
        // if (JumpReadingFMTCnt != '' && parseFloat(JumpReadingFMTCnt) != 0 && (JumpReadingFMTCnt === undefined) == false) {
        //   if (regexNumeric.test(JumpReadingFMTCnt) == false) {
        //     foundError = 'Only numeric value allowed for Jump reading count.';
        //     return foundError;
        //   }
        //   if (JumpReadingFMTCnt.indexOf('.') > -1) {
        //     foundError = 'Decimal value not allowed for Jump reading count.';
        //     return foundError;
        //   }
        //   if (parseFloat(JumpReadingFMTCnt) < 0) {
        //     foundError = 'FMT Jump Reading count must be Positive.';
        //     return foundError;
        //   }
        //   if (MeterSkidDetailJson.JumpReadingFMT == '' || (MeterSkidDetailJson.JumpReadingFMT == undefined)) {
        //     foundError = 'Please enter the Jump reading.';
        //     return foundError;
        //   }
        //   if (MeterSkidDetailJson.JumpReadingFMT == '' || parseFloat(MeterSkidDetailJson.JumpReadingFMT) == 0) {
        //     foundError = 'Plese enter the Jump Reading';
        //     return foundError;
        //   }
        // }
        // else {
        // if (MeterSkidDetailJson.JumpReadingFMT != '' && parseFloat(MeterSkidDetailJson.JumpReadingFMT) != 0) {
        //     foundError = 'Plese enter the MS Jump Reading count.';
        //     return foundError;
        // }
        // }
        return foundError;
    };
    MeterSkidPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] }
    ]; };
    MeterSkidPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-meter-skid',
            template: __webpack_require__(/*! raw-loader!./meter-skid.page.html */ "./node_modules/raw-loader/index.js!./src/app/station/meter-skid/meter-skid.page.html"),
            styles: [__webpack_require__(/*! ./meter-skid.page.scss */ "./src/app/station/meter-skid/meter-skid.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]])
    ], MeterSkidPage);
    return MeterSkidPage;
}());



/***/ })

}]);
//# sourceMappingURL=station-meter-skid-meter-skid-module-es5.js.map