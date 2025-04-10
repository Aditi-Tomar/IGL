(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["station-redirected_pages-change-reset-meter-skid-change-reset-meter-skid-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/station/redirected_pages/change-reset-meter-skid/change-reset-meter-skid.page.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/station/redirected_pages/change-reset-meter-skid/change-reset-meter-skid.page.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<ion-toolbar color=\"dark_green\">\r\n\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-left\">\r\n\t\t\t\t<ion-back-button defaultHref=\"meter-skid\" class=\"text_white\"></ion-back-button>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"8\" class=\"ion-text-center\">\r\n\t\t\t\t<ion-text class=\"text_white\">Jump/Change/Reset Meter</ion-text>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\t<div class=\"content_area\">\r\n\t\t<form [formGroup]=\"addForm\" (ngSubmit)=\"MSchangeresetpopup()\">\r\n\t\t\t<ion-grid>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<ion-label>Action</ion-label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t<ion-label>Action</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-select placeholder=\"Select One\" [value]=\"MSFlagJumpType\"\r\n\t\t\t\t\t\t\t\t\t\t(ionChange)=\"resetchange($event.target.value, 'MS')\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-select-option value='J'>Jump</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t<ion-select-option value=\"R\">Reset</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t<ion-select-option value=\"C\">Change</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t\t<ion-label>Before</ion-label>\r\n\t\t\t\t\t\t<ion-input class=\"inp_control\" placeholder=\"Before Meter Reading\" [value]=\"OldMeterReading\"\r\n\t\t\t\t\t\t\t(input)=\"OldMeterReading=$event.target.value\" name=\"Before\"></ion-input>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t\t<ion-label>After</ion-label>\r\n\t\t\t\t\t\t<ion-input class=\"inp_control\" placeholder=\"After Meter Reading\" [value]=\"NewMeterReading\"\r\n\t\t\t\t\t\t\t(input)=\"MSJReadingvalue($event.detail.value)\" (input)=\"NewMeterReading=$event.target.value\"\r\n\t\t\t\t\t\t\tname=\"after\"></ion-input>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t\t<ion-label>Attachment</ion-label>\r\n\t\t\t\t\t\t<ion-input #inputFile type=\"file\" class=\"inp_control\" id=\"MSfileInputreset\"\r\n\t\t\t\t\t\t\tname=\"MSfileInputreset\" (change)=\"fileuploadreset($event.target.files, $event)\"\r\n\t\t\t\t\t\t\t[disabled]=\"MSpopupfilevisible\"></ion-input>\r\n\t\t\t\t\t\t<!-- <span *ngIf=\"!IsFileSelected\" class=\"temp_file_name\" style=\"right:-6px;\">{{FileName}}</span> -->\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t\t<ion-label>Remark</ion-label>\r\n\t\t\t\t\t\t<ion-textarea class=\"inp_control\" [value]=\"MeterJumpRemark\"\r\n\t\t\t\t\t\t\t(input)=\"MeterJumpRemark=$event.target.value\" placeholder=\"Remark\" placeholder=\"Remark\">\r\n\t\t\t\t\t\t</ion-textarea>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<th>Sr No</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Before</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>After</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Jumped</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Action Type</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Remark</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let itm of MSJumpListHistory, let i = index\">\r\n\t\t\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.BeforeJumpReading}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.AfterJumpReading}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.JumpReading}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.Action}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.Remark}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<!-- <td>{{itm.DispanserJumpRemark}}</td> -->\r\n\t\t\t\t\t\t\t\t\t\t<td> \r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <span (click)=\"UpdateMSJumpHistory(itm.id, itm)\">Edit</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"closeicon\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"DeleteMSJumpHistory(itm.id, itm.Action,itm)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon ios=\"ios-close\" md=\"md-close\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t</span> -->\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"dark\"\r\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"UpdateMSJumpHistory(itm.id, itm)\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"create\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"danger\"\r\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"DeleteMSJumpHistory(itm.id, itm.Action,itm)\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"trash\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<!--old c0de-->\r\n\t\t\t\t<!-- <ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<ion-label>Old Meter Reading <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-input type=\"text\" formControlName=\"OldMeterReading\"></ion-input>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<ion-label>Jump Reading(If any)</ion-label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-input type=\"text\" formControlName=\"JReading\"></ion-input>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<ion-label>Choose File</ion-label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-input type=\"file\" id=\"MSfileInputreset\" name=\"MSfileInputreset\"  (change)=\"upload($event)\"></ion-input>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row> -->\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"button_container\">\r\n\t\t\t\t\t\t\t<ion-button color=\"dark_green_clr\" type=\"submit\">Save</ion-button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</ion-grid>\r\n\t\t</form>\r\n\t</div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/station/redirected_pages/change-reset-meter-skid/change-reset-meter-skid-routing.module.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/station/redirected_pages/change-reset-meter-skid/change-reset-meter-skid-routing.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: ChangeResetMeterSkidPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeResetMeterSkidPageRoutingModule", function() { return ChangeResetMeterSkidPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _change_reset_meter_skid_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-reset-meter-skid.page */ "./src/app/station/redirected_pages/change-reset-meter-skid/change-reset-meter-skid.page.ts");




var routes = [
    {
        path: '',
        component: _change_reset_meter_skid_page__WEBPACK_IMPORTED_MODULE_3__["ChangeResetMeterSkidPage"]
    }
];
var ChangeResetMeterSkidPageRoutingModule = /** @class */ (function () {
    function ChangeResetMeterSkidPageRoutingModule() {
    }
    ChangeResetMeterSkidPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ChangeResetMeterSkidPageRoutingModule);
    return ChangeResetMeterSkidPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/station/redirected_pages/change-reset-meter-skid/change-reset-meter-skid.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/station/redirected_pages/change-reset-meter-skid/change-reset-meter-skid.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: ChangeResetMeterSkidPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeResetMeterSkidPageModule", function() { return ChangeResetMeterSkidPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _change_reset_meter_skid_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-reset-meter-skid-routing.module */ "./src/app/station/redirected_pages/change-reset-meter-skid/change-reset-meter-skid-routing.module.ts");
/* harmony import */ var _change_reset_meter_skid_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-reset-meter-skid.page */ "./src/app/station/redirected_pages/change-reset-meter-skid/change-reset-meter-skid.page.ts");







var ChangeResetMeterSkidPageModule = /** @class */ (function () {
    function ChangeResetMeterSkidPageModule() {
    }
    ChangeResetMeterSkidPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _change_reset_meter_skid_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangeResetMeterSkidPageRoutingModule"]
            ],
            declarations: [_change_reset_meter_skid_page__WEBPACK_IMPORTED_MODULE_6__["ChangeResetMeterSkidPage"]]
        })
    ], ChangeResetMeterSkidPageModule);
    return ChangeResetMeterSkidPageModule;
}());



/***/ }),

/***/ "./src/app/station/redirected_pages/change-reset-meter-skid/change-reset-meter-skid.page.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/station/redirected_pages/change-reset-meter-skid/change-reset-meter-skid.page.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button_container {\n  margin-top: 0px;\n}\n\n.closeicon {\n  vertical-align: sub;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvc3RhdGlvbi9yZWRpcmVjdGVkX3BhZ2VzL2NoYW5nZS1yZXNldC1tZXRlci1za2lkL2NoYW5nZS1yZXNldC1tZXRlci1za2lkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc3RhdGlvbi9yZWRpcmVjdGVkX3BhZ2VzL2NoYW5nZS1yZXNldC1tZXRlci1za2lkL2NoYW5nZS1yZXNldC1tZXRlci1za2lkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGVBQUE7QUNBSjs7QURHQTtFQUFXLG1CQUFBO0FDQ1giLCJmaWxlIjoic3JjL2FwcC9zdGF0aW9uL3JlZGlyZWN0ZWRfcGFnZXMvY2hhbmdlLXJlc2V0LW1ldGVyLXNraWQvY2hhbmdlLXJlc2V0LW1ldGVyLXNraWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbl9jb250YWluZXIgXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLmNsb3NlaWNvbnt2ZXJ0aWNhbC1hbGlnbjogc3ViO30iLCIuYnV0dG9uX2NvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLmNsb3NlaWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBzdWI7XG59Il19 */"

/***/ }),

/***/ "./src/app/station/redirected_pages/change-reset-meter-skid/change-reset-meter-skid.page.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/station/redirected_pages/change-reset-meter-skid/change-reset-meter-skid.page.ts ***!
  \**************************************************************************************************/
/*! exports provided: ChangeResetMeterSkidPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeResetMeterSkidPage", function() { return ChangeResetMeterSkidPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var ChangeResetMeterSkidPage = /** @class */ (function () {
    function ChangeResetMeterSkidPage(formBuilder, router, activatedroute, commonServices, menu, dp) {
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
        this.MSisCRSentToHo = 0;
        this.MSisStationSubmitted = 0;
        this.MSfilevisible = false;
        this.popupfilevisible = true;
        this.JumpVisible = true;
        this.stationName = "";
        this.NewMeterReading = "";
        this.MeterJumpRemark = "";
        this.MSJumpListHistory = [];
        this.JumpHistoryId = '';
        this.MSJReading = "";
        this.MSpopupfilevisible = true;
        this.MSFlagJumpType = 'J';
        this.resetTypeJsonSelected = "J";
        this.addForm = formBuilder.group({
            OldMeterReading: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            JReading: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            jumpReadingCount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            remark: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.DPREntryDate = this.activatedroute.snapshot.paramMap.get("entryDate");
        this.getStationMeterSkidData();
    }
    ChangeResetMeterSkidPage.prototype.ngOnInit = function () {
        console.log("Change Meter Skid");
    };
    ChangeResetMeterSkidPage.prototype.fileuploadreset = function (file, event) {
        this.uploadedfilereset = file.item(0);
    };
    ChangeResetMeterSkidPage.prototype.getStationMeterSkidData = function () {
        var _this = this;
        try {
            this.commonServices.loadingPresent();
            this.commonServices.postwithservice("GetStationMeterSkid", {
                StationCode: localStorage.getItem('stationCode'), LoginId: localStorage.getItem('stationCode'),
                DPREntryDate: this.meterDate.selcteddate
            }).subscribe(function (response) {
                // this.commonServices.loadingDismiss();
                var data = JSON.parse(response);
                console.log(data[0]);
                if (data[0].length > 0) {
                    _this.IsMSkidhide = false;
                    _this.meterStationSkidData = data[0][0];
                    console.log(_this.meterStationSkidData, "GK meterStationSkidData");
                    _this.MSMeterSkidCode = _this.meterStationSkidData.MeterSkidCode;
                    _this.MSFlowMeterTotaliserPrv = _this.meterStationSkidData.FlowMeterTotaliserPrv;
                    console.log(_this.MSMeterSkidCode, "GK MSMeterSkidCode");
                    console.log(_this.MSFlowMeterTotaliserPrv, "GK MSFlowMeterTotaliserPrv");
                    _this.meterTotaliser = _this.meterStationSkidData.FlowMeterTotaliser;
                    _this.jumpReading = _this.meterStationSkidData.JumpReadingFMT;
                    _this.jumpReadingCount = _this.meterStationSkidData.JumpReadingFMTCount;
                    _this.remark = _this.meterStationSkidData.Remark;
                    _this.MSisCRSentToHo = Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(parseInt(_this.meterStationSkidData.isCRSentToHo)) ? 0 : _this.meterStationSkidData.isCRSentToHo;
                    _this.MSisStationSubmitted = Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(parseInt(_this.meterStationSkidData.isStationSubmitted)) ? 0 : _this.meterStationSkidData.isStationSubmitted;
                    console.log(_this.MSisCRSentToHo, "MSisCRSentToHo");
                    console.log(_this.MSisStationSubmitted, "MSisStationSubmitted");
                    _this.getMSJumpHistory('GET');
                }
                else {
                    _this.commonServices.presentToast('No Meter Skid data available. Please try another station.');
                    _this.IsMSkidhide = true;
                    _this.MSisCRSentToHo = 0;
                    _this.MSisStationSubmitted = 0;
                    console.log(_this.MSisCRSentToHo, "MSisCRSentToHo");
                    console.log(_this.MSisStationSubmitted, "MSisStationSubmitted");
                }
                _this.commonServices.loadingDismiss();
            }, function (error) {
                console.log('Something went wrong.');
                _this.commonServices.loadingDismiss();
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    ChangeResetMeterSkidPage.prototype.resetchange = function (value, flag) {
        this.resetTypeJsonSelected = value;
        console.log(this.resetTypeJsonSelected);
    };
    ChangeResetMeterSkidPage.prototype.upload = function (str) {
        this.uploadedfile = str.target.files[0];
        console.log(this.uploadedfile);
    };
    // MSchangeresetpopup() {
    //   var MyJsonreset = {
    //     StationCode: localStorage.getItem('LoginId'),
    //     MeterOf: 'MS',
    //     MeterOfId: this.meterStationSkidData.MeterSkidId,
    //     MeterType: 'FMT',
    //     FlagRead: 0,
    //     FlagReadingType: this.resetTypeJsonSelected,
    //     Id: this.meterStationSkidData.MeterResetId,
    //     LoginId: localStorage.getItem('Loginidd'),
    //     PrvReading: this.OldMeterReading,
    //     JumpReading: this.OldMeterReading,
    //     ReadingOnSwitch: ((this.meterStationSkidData.ReadingOnSwitch == '') ? '0' : this.meterStationSkidData.ReadingOnSwitch),
    //     FilePath: localStorage.getItem('LoginId') + "/MeterSkid/",
    //     MeterAfterJump : this.NewMeterReading,
    //     MeterJumpRemark : this.MeterJumpRemark,
    //     JumpHistoryId : this.JumpHistoryId
    //   };
    //   this.filesreset = $('#MSfileInputreset');
    //   var frmData = new FormData();
    //   var fileInputreset = this.filesreset[0];
    //   frmData.append("jsonDetail", JSON.stringify(MyJsonreset));
    //   if (this.uploadedfilereset != undefined) {
    //     console.log(this.uploadedfilereset);
    //     frmData.append('JumpReadingFile', this.uploadedfilereset, this.uploadedfilereset.name);
    //   }
    //   var ErrorMsg = this.changeresetValidation(MyJsonreset);
    //   if (ErrorMsg == '' || ErrorMsg == undefined) {
    //     this.commonServices.loadingPresent();
    //     this.commonServices.HoldResetReading(frmData).subscribe(
    //       (resp: any) => {
    //         const data = resp;
    //         if ( data.Status == "Inserted") {
    //           this.commonServices.presentToast('Record Saved Successfully.');
    //           this.getMSJumpHistory('GET');
    //         }
    //         else if (data.Status == "Updated") {
    //           this.commonServices.presentToast('Record Updated Successfully.');
    //           this.getMSJumpHistory('GET');
    //         }
    //         else {
    //           this.commonServices.presentToast(data.Status);
    //         }
    //         this.commonServices.loadingDismiss();
    //       },
    //       (error) => {
    //         this.commonServices.presentToast('Something went wrong.');
    //         this.commonServices.loadingDismiss();
    //       }
    //     )
    //   }
    //   else {
    //     this.commonServices.presentToast(ErrorMsg);
    //   }
    // }
    // MSchangeresetpopup() {
    //   var MyJsonreset = {
    //     StationCode: localStorage.getItem('LoginId'),
    //     MeterOf: 'MS',
    //     MeterOfId: this.meterStationSkidData.MeterSkidId, 
    //     MeterType: 'FMT',
    //     FlagRead: 0,
    //     FlagReadingType: this.resetTypeJsonSelected,
    //     Id: this.meterStationSkidData.MeterResetId,
    //     LoginId: localStorage.getItem('LoginId'),
    //     PrvReading: this.OldMeterReading,
    //     MeterBeforeJump: this.OldMeterReading,
    //     JumpReading: ((this.JReading == '') ? '0' : this.JReading),
    //     ReadingOnSwitch: ((this.meterStationSkidData.ReadingOnSwitch == '') ? '0' : this.meterStationSkidData.ReadingOnSwitch),
    //     FilePath: localStorage.getItem('LoginId') + "/MeterSkid/",
    //     MeterAfterJump : this.NewMeterReading,
    //     MeterJumpRemark : this.MeterJumpRemark,
    //     JumpHistoryId : this.JumpHistoryId,
    //     DetailId : this.meterStationSkidData.MeterSkidId,
    //     EntryDate:this.DPREntryDate
    //  };
    // this.filesreset = $('#MSfileInputreset');
    // var frmData = new FormData();
    // var fileInputreset = this.filesreset[0];
    // frmData.append("jsonDetail", JSON.stringify(MyJsonreset));
    // if(this.uploadedfilereset != undefined) {
    //     console.log(this.uploadedfilereset);
    //     frmData.append('JumpReadingFile', this.uploadedfilereset, this.uploadedfilereset.name);
    //    }
    // var ErrorMsg = this.changeresetValidation(MyJsonreset);
    // if(ErrorMsg == '' || ErrorMsg == undefined) {
    //     this.commonServices.HoldResetReading(frmData).subscribe(
    //         (resp: any) => {
    //             const data= (resp);
    //             if(data.Status=="Inserted") {
    //               this.commonServices.presentToast('Record Saved Successfully.');
    //               this.getMSJumpHistory('GET');
    //               this.clearMS();
    //             }
    //             else if(data.Status=="Updated") {
    //               this.commonServices.presentToast('Record Updated Successfully.');
    //               this.getMSJumpHistory('GET');
    //               this.clearMS();
    //             }
    //             else {
    //               this.commonServices.presentToast(data.Status);
    //             }
    //         },
    //         (error) =>{this.commonServices.presentToast('Something went wrong.');
    //     }
    //     )
    //  }
    //  else {
    //     (ErrorMsg);
    //   }   
    // }
    ChangeResetMeterSkidPage.prototype.MSchangeresetpopup = function () {
        var _this = this;
        var MyJsonreset = {
            StationCode: localStorage.getItem('Loginidd'),
            MeterOf: 'MS',
            MeterOfId: this.meterStationSkidData.MeterSkidId,
            MeterType: 'FMT',
            FlagRead: 0,
            FlagReadingType: this.resetTypeJsonSelected,
            Id: this.meterStationSkidData.MeterResetId,
            LoginId: localStorage.getItem('Loginidd'),
            PrvReading: this.OldMeterReading,
            MeterBeforeJump: this.OldMeterReading,
            JumpReading: ((this.JReading == '') ? '0' : this.JReading),
            ReadingOnSwitch: ((this.meterStationSkidData.ReadingOnSwitch == '') ? '0' : this.meterStationSkidData.ReadingOnSwitch),
            FilePath: localStorage.getItem('Loginidd') + "/MeterSkid/",
            MeterAfterJump: this.NewMeterReading,
            MeterJumpRemark: this.MeterJumpRemark,
            JumpHistoryId: this.JumpHistoryId,
            DetailId: this.meterStationSkidData.MeterSkidId,
            EntryDate: this.DPREntryDate
        };
        this.JumpHistoryId = "";
        this.filesreset = $('#MSfileInputreset');
        var frmData = new FormData();
        var fileInputreset = this.filesreset[0];
        frmData.append("jsonDetail", JSON.stringify(MyJsonreset));
        if (this.uploadedfilereset != undefined) {
            console.log(this.uploadedfilereset);
            frmData.append('JumpReadingFile', this.uploadedfilereset, this.uploadedfilereset.name);
        }
        var ErrorMsg = this.changeresetValidation(MyJsonreset, fileInputreset);
        if (ErrorMsg == '' || ErrorMsg == undefined) {
            this.commonServices.loadingPresent();
            this.commonServices.HoldResetReading(frmData).subscribe(function (resp) {
                _this.commonServices.loadingDismiss();
                var data = (resp);
                if (data.Status == "Inserted") {
                    _this.commonServices.presentToast('Record Saved Successfully.');
                    _this.getMSJumpHistory('GET');
                    _this.clearMS();
                }
                else if (data.Status == "Updated") {
                    _this.commonServices.presentToast('Record Updated Successfully.');
                    _this.getMSJumpHistory('GET');
                    _this.clearMS();
                }
                else {
                    _this.commonServices.presentToast(data.Status);
                }
            }, function (error) {
                _this.commonServices.presentToast('Something went wrong.');
                _this.commonServices.loadingDismiss();
            });
        }
        else {
            this.commonServices.presentToast(ErrorMsg);
        }
    };
    ChangeResetMeterSkidPage.prototype.getMSJumpHistory = function (FlagType) {
        var _this = this;
        this.clearMS();
        var obj = {
            FlagEntryFor: FlagType,
            MeterOf: 'MS',
            Id: '',
            StationCode: '',
            MeterOfId: this.meterStationSkidData.MeterSkidId,
            MeterType: 'FMT',
            EntryDate: this.DPREntryDate,
            FlagReadingType: ""
        };
        console.log(obj);
        this.commonServices.postwithservice("GetJumpReadingList", obj).subscribe(function (resp) {
            _this.MSJumpListHistory = JSON.parse(resp).Table;
            console.log(_this.MSJumpListHistory);
            _this.commonServices.loadingDismiss();
        }, function (error) {
            _this.commonServices.presentToast("Something went wrong.");
            _this.commonServices.loadingDismiss();
        });
    };
    ChangeResetMeterSkidPage.prototype.DeleteMSJumpHistory = function (Id, FlagReading, itm) {
        var _this = this;
        this.commonServices.alertMessage("Delete", "Are you sure to delete this record..?").then(function (res) {
            console.log(res);
            if (!res) {
                var Json = {
                    Id: Id,
                    FlagEntryFor: 'DELETE',
                    FlagReadingType: FlagReading,
                    MeterOf: 'MS',
                    MeterOfId: _this.meterStationSkidData.MeterSkidId,
                    EntryDate: _this.DPREntryDate
                };
                _this.commonServices.loadingPresent();
                _this.commonServices.postwithservice("GetJumpReadingList", Json).subscribe(function (resp) {
                    var data = JSON.parse(resp);
                    _this.getMSJumpHistory('GET');
                    _this.commonServices.presentToast("Record Deleted Successfully");
                    //this.openPopup(this.popupFor);
                    // setTimeout(() => {
                    //   this.getMSJumpHistory('GET');
                    // });
                    _this.clearMS();
                    _this.commonServices.loadingDismiss();
                }, function (error) {
                    _this.commonServices.presentToast("Something went wrong.");
                    _this.commonServices.loadingDismiss();
                });
            }
        });
        // if (confirm("Are you sure to delete this record..?")) {
        //   var Json = {
        //     Id: Id,
        //     FlagEntryFor: 'DELETE',
        //     FlagReadingType: FlagReading,
        //     MeterOf: 'MS',
        //     MeterOfId: this.meterStationSkidData.MeterSkidId,
        //     EntryDate: this.DPREntryDate
        //   }
        //   this.commonServices.postwithservice("GetJumpReadingList", Json).subscribe(
        //     (resp: any) => {
        //       const data = JSON.parse(resp);
        //       this.getMSJumpHistory('GET');
        //       this.commonServices.presentToast("Record Deleted Successfully");
        //       //this.openPopup(this.popupFor);
        //       // setTimeout(() => {
        //       //   this.getMSJumpHistory('GET');
        //       // });
        //       this.commonServices.loadingDismiss();
        //     },
        //     (error) => {
        //       this.commonServices.presentToast("Something went wrong.");
        //       this.commonServices.loadingDismiss();
        //     })
        // }
    };
    ChangeResetMeterSkidPage.prototype.UpdateMSJumpHistory = function (Id, itm) {
        this.JumpHistoryId = Id;
        this.OldMeterReading = itm.BeforeJumpReading;
        this.NewMeterReading = itm.AfterJumpReading;
        this.MeterJumpRemark = itm.Remark;
        if (itm.Action == "Jump") {
            this.MSFlagJumpType = "J";
        }
        else if (itm.Action == "Change") {
            this.MSFlagJumpType = "C";
        }
        else {
            this.MSFlagJumpType = "R";
        }
    };
    ChangeResetMeterSkidPage.prototype.MSJReadingvalue = function (value) {
        this.MSJReading = value;
        if (this.MSJReading != '') {
            this.MSpopupfilevisible = false;
        }
        else {
            this.MSpopupfilevisible = true;
        }
    };
    ChangeResetMeterSkidPage.prototype.clearMS = function () {
        this.MSFlagJumpType = "J";
        this.OldMeterReading = "";
        this.NewMeterReading = "";
        this.MeterJumpRemark = "";
        this.InputFileVar.value = "";
    };
    ChangeResetMeterSkidPage.prototype.changeresetValidation = function (LcvDetailJsonreset, fileInput) {
        var regexNumeric = /^[+-]?[0-9]{1,1000}(?:\.[0-9]{1,1000})?$/;
        var regexDecimalThree = /^[+-]?[0-9]{1,10}(?:\.[0-9]{1,3})?$/;
        var regexDecimalThreeNegative = /^[+]?[0-9]{1,10}(?:\.[0-9]{1,3})?$/;
        var imgShow = 'assets/images/attachment.gif';
        var errorMsg = '';
        if ((LcvDetailJsonreset.PrvReading === undefined) || LcvDetailJsonreset.PrvReading == '') {
            errorMsg = 'Please enter the Old Meter Reading.';
            return errorMsg;
        }
        if (regexNumeric.test(LcvDetailJsonreset.PrvReading) == false) {
            errorMsg = 'Only numeric value allowed for reading.';
            return errorMsg;
        }
        if (parseFloat(LcvDetailJsonreset.PrvReading) < 0) {
            errorMsg = 'Old Meter Reading must be Positive.';
            return errorMsg;
        }
        // if ((parseInt(LcvDetailJsonreset.JumpReading) == '0' || LcvDetailJsonreset.oldJumpReading == '') && !angular.isUndefined(LcvDetailJsonreset.fileObject) && (jsonValidation.fileObject != null) && (jsonValidation.fileObject.files.length > 0 || jsonValidation.formarJRImage == true)) {
        //     jsonErrorMsg = { errorMsg: 'Please enter the Jump Reading.' };
        //     return jsonErrorMsg;
        // }
        if (regexNumeric.test(LcvDetailJsonreset.JumpReading) == false) {
            errorMsg = 'Only numeric value allowed for Jump reading.';
            return errorMsg;
        }
        if (fileInput.firstChild.files.length > 0) {
            var validExtension = 'jpeg,jpg,png,gif';
            for (var i = 0; i < fileInput.firstChild.files.length; i++) {
                var fileExtension = fileInput.firstChild.files[i].name.split('.').pop().toLowerCase()[1];
                if (validExtension.indexOf(fileExtension) < 0) {
                    errorMsg = 'Attachment allowed only for [' + validExtension + '].';
                    return errorMsg;
                }
            }
        }
        return errorMsg;
    };
    ChangeResetMeterSkidPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputFile', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChangeResetMeterSkidPage.prototype, "InputFileVar", void 0);
    ChangeResetMeterSkidPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-reset-meter-skid',
            template: __webpack_require__(/*! raw-loader!./change-reset-meter-skid.page.html */ "./node_modules/raw-loader/index.js!./src/app/station/redirected_pages/change-reset-meter-skid/change-reset-meter-skid.page.html"),
            styles: [__webpack_require__(/*! ./change-reset-meter-skid.page.scss */ "./src/app/station/redirected_pages/change-reset-meter-skid/change-reset-meter-skid.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]])
    ], ChangeResetMeterSkidPage);
    return ChangeResetMeterSkidPage;
}());



/***/ })

}]);
//# sourceMappingURL=station-redirected_pages-change-reset-meter-skid-change-reset-meter-skid-module-es5.js.map