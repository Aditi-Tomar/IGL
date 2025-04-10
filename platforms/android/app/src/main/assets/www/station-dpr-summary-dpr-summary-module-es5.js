(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["station-dpr-summary-dpr-summary-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/station/dpr-summary/dpr-summary.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/station/dpr-summary/dpr-summary.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<!-- <button class=\"home_btn\" routerLink=\"/home\">\r\n\t\t\t\t<img src=\"../../assets/images/home.png\" />\r\n\t\t\t</button> -->\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<div class=\"main_heading1\">\r\n\t\t<div>\r\n\t\t\t<ion-back-button defaultHref=\"home\"></ion-back-button>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<h1>DPR Summary</h1>\r\n\t\t</div>\r\n\t\t<div class=\"text_center\">\r\n\t\t\t<!--<ion-icon name=\"arrow-down\" class=\"download_icon\"></ion-icon>-->\r\n\t\t</div>\r\n\t</div>\r\n</ion-header>\r\n<ion-content>\r\n\t<div class=\"content_area\">\r\n\t\t<div class=\"mycard shadow_none back_trans\">\r\n\t\t\t<ion-row style=\"margin-bottom:7px;\">\r\n\t\t\t\t<ion-col size=\"8\" offset=\"2\" class=\"date_col\">\r\n\t\t\t\t\t<ion-datetime #selcteddate class=\"inp_control date\" displayFormat=\"DD-MMM-YYYY\"\r\n\t\t\t\t\t\tpickerFormat=\"DD MMM YYYY\" [(ngModel)]=\"geteDate.selcteddate\" name=\"selcteddate\"\r\n\t\t\t\t\t\t(ngModelChange)=\"getSelectedDate(selcteddate.value)\" [max]=\"secondMaxDate\"></ion-datetime>\r\n\t\t\t\t\t<ion-icon name=\"calendar\"></ion-icon>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<div class=\"card_box\" *ngIf=\"DataTable.length != 0\">\r\n\t\t\t\t<h4>Meter Skid</h4>\r\n\t\t\t\t<div class=\"card_content\">\r\n\t\t\t\t\t<ion-row class=\"smry_row\" *ngFor=\"let msItem of DataTable\">\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<label class=\"smry_label\">Flow Meter Difference</label>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\tclass=\"smry_val\">{{msItem.MeterskitdiffAVG == null ? '00.00' : msItem.MeterskitdiffAVG}}</span>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div *ngIf=\"DataTable1.length!=0\">\r\n\t\t\t\t<div class=\"card_box\" *ngFor=\"let packageItem of stationReportData.Table1\">\r\n\t\t\t\t\t<h4>Package: {{packageItem.PackageName}}</h4>\r\n\t\t\t\t\t<div class=\"card_content\">\r\n\t\t\t\t\t\t<ion-row class=\"smry_row\">\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<label class=\"smry_label\">Suction Flow Meter Difference</label>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\tclass=\"smry_val\">{{packageItem.SuctionFlowMeterReading == null ? '00.00' : packageItem.SuctionFlowMeterReading}}</span>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row class=\"smry_row\">\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<label class=\"smry_label\">Discharge Flow Meter Difference</label>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\tclass=\"smry_val\">{{packageItem.DischargeFlowMeterReading == null ? '00.00' : packageItem.DischargeFlowMeterReading}}</span>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row class=\"smry_row\" *ngIf=\"packageItem.PrimeMover != 'M'\">\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<label class=\"smry_label\">Engine Flow Meter Difference</label>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\tclass=\"smry_val\">{{packageItem.EngineFlowMeterReading == null ? '00.00' : packageItem.EngineFlowMeterReading}}</span>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row class=\"smry_row\" *ngIf=\"packageItem.PrimeMover == 'M'\">\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<label class=\"smry_label\">Motor Flow Meter Difference</label>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\tclass=\"smry_val\">{{packageItem.EngineFlowMeterReading == null ? '00.00' : packageItem.EngineFlowMeterReading}}</span>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row class=\"smry_row\" >\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<label class=\"smry_label\">Vent Flow Meter Difference</label>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\tclass=\"smry_val\">{{packageItem.VentFlowMeter == null ? '00.00' : packageItem.VentFlowMeter}}</span>\r\n\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row class=\"smry_row\">\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<label class=\"smry_label\">Running Hours</label>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\tclass=\"smry_val\">{{packageItem.RunningHours == null ? '00:00' : packageItem.RunningHours}}</span>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row class=\"smry_row\">\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<label class=\"smry_label\">Schedule Shutdown Hours</label>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\tclass=\"smry_val\">{{packageItem.ScheduleShutdownHours == null ? '00:00' : packageItem.ScheduleShutdownHours}}</span>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row class=\"smry_row\">\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<label class=\"smry_label\">Unscheduled Shutdown Hours</label>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\tclass=\"smry_val\">{{packageItem.UnscheduledShutdownHours == null ? '00:00' : packageItem.UnscheduledShutdownHours}}</span>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row class=\"smry_row\">\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<label class=\"smry_label\">Breakdown Hours</label>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\tclass=\"smry_val\">{{packageItem.BreakdownHours == null ? '00:00' : packageItem.BreakdownHours}}</span>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row class=\"smry_row\">\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<label class=\"smry_label\">Suction Pressure</label>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\tclass=\"smry_val\">{{packageItem.SuctionPressure == null ? '00.00' : packageItem.SuctionPressure}}</span>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"card_box\" *ngIf=\"DataTable3.length!=0\">\r\n\t\t\t\t<h4>LCV - LCV-1</h4>\r\n\t\t\t\t<div class=\"card_content\">\r\n\t\t\t\t\t<ion-row class=\"smry_row\" *ngFor=\"let gasGensetItem of DataTable3\">\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<label class=\"smry_label\">LCV Meter Difference</label>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\tclass=\"smry_val\">{{gasGensetItem.LCVMeterTotaliser == null ? '00.00' : gasGensetItem.LCVMeterTotaliser}}</span>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"card_box\" *ngIf=\"DataTable2.length!=0\">\r\n\t\t\t\t<h4>Gas Genset: GAS GENSET</h4>\r\n\t\t\t\t<div *ngFor=\"let gasGensetItem of DataTable2\">\r\n\t\t\t\t\t<div class=\"card_content\">\r\n\t\t\t\t\t\t<ion-row class=\"smry_row\">\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<label class=\"smry_label\">Running Hours</label>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\tclass=\"smry_val\">{{gasGensetItem.RunningHoursgenset == null ? '00:00' : gasGensetItem.RunningHoursgenset}}</span>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row class=\"smry_row\">\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<label class=\"smry_label\">Meter Difference</label>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\tclass=\"smry_val\">{{gasGensetItem.FlowMeterReadiGenset == null ? '00.00' : gasGensetItem.FlowMeterReadiGenset}}</span>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<!-- <ion-row class=\"smry_row\">\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<label class=\"smry_label\">Flow Meter Difference</label>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<span class=\"smry_val\">00.00</span>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row> -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"card_box\" *ngIf=\"DataTable.length!=0\">\r\n\t\t\t\t<h4>Dispenser</h4>\r\n\t\t\t\t<div class=\"card_content\">\r\n\t\t\t\t\t<ion-row class=\"smry_row\" *ngFor=\"let dispItem of DataTable\">\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<label class=\"smry_label\">Total Sale</label>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\tclass=\"smry_val\">{{dispItem.DispenserTotalSale == null ? '00.00' : dispItem.DispenserTotalSale}}</span>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row class=\"smry_row\">\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<label class=\"smry_label\">Station Gas Loss</label>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<span class=\"smry_val\">{{StationGasLoss == 0 ? '00.00' : StationGasLoss}}</span>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"button_container\">\r\n\t\t\t\t<ion-button color=\"dark_green\" [hidden]=\"summary.prm_id != 1\" (click)=\"stationSummarySubmit()\">Submit\r\n\t\t\t\t</ion-button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/station/dpr-summary/dpr-summary-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/station/dpr-summary/dpr-summary-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: DprSummaryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DprSummaryPageRoutingModule", function() { return DprSummaryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dpr_summary_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dpr-summary.page */ "./src/app/station/dpr-summary/dpr-summary.page.ts");




var routes = [
    {
        path: '',
        component: _dpr_summary_page__WEBPACK_IMPORTED_MODULE_3__["DprSummaryPage"]
    }
];
var DprSummaryPageRoutingModule = /** @class */ (function () {
    function DprSummaryPageRoutingModule() {
    }
    DprSummaryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DprSummaryPageRoutingModule);
    return DprSummaryPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/station/dpr-summary/dpr-summary.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/station/dpr-summary/dpr-summary.module.ts ***!
  \***********************************************************/
/*! exports provided: DprSummaryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DprSummaryPageModule", function() { return DprSummaryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dpr_summary_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dpr-summary-routing.module */ "./src/app/station/dpr-summary/dpr-summary-routing.module.ts");
/* harmony import */ var _dpr_summary_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dpr-summary.page */ "./src/app/station/dpr-summary/dpr-summary.page.ts");







var DprSummaryPageModule = /** @class */ (function () {
    function DprSummaryPageModule() {
    }
    DprSummaryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _dpr_summary_routing_module__WEBPACK_IMPORTED_MODULE_5__["DprSummaryPageRoutingModule"]
            ],
            declarations: [_dpr_summary_page__WEBPACK_IMPORTED_MODULE_6__["DprSummaryPage"]]
        })
    ], DprSummaryPageModule);
    return DprSummaryPageModule;
}());



/***/ }),

/***/ "./src/app/station/dpr-summary/dpr-summary.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/station/dpr-summary/dpr-summary.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".action-sheet-group.sc-ion-action-sheet-md {\n  background-color: red;\n}\n\n.download_icon {\n  padding: 4px 7px;\n  font-size: 20px;\n  border: 2px solid #ffce00;\n  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 6px;\n  margin-top: 6px;\n  margin-right: 5px;\n}\n\n.date {\n  border: none;\n  border-bottom: 1px solid var(--dark_green_clr);\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);\n}\n\n.date_col {\n  position: relative;\n}\n\n.date_col ion-icon {\n  position: absolute;\n  right: 13px;\n  font-size: 25px;\n  color: rgba(0, 0, 0, 0.4);\n  top: 0px;\n  margin-top: auto;\n  bottom: 0px;\n  margin-bottom: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvc3RhdGlvbi9kcHItc3VtbWFyeS9kcHItc3VtbWFyeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3N0YXRpb24vZHByLXN1bW1hcnkvZHByLXN1bW1hcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUkscUJBQUE7QUNBSjs7QURFQTtFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREVBO0VBRUksWUFBQTtFQUNBLDhDQUFBO0VBQ0EsMENBQUE7QUNBSjs7QURFQTtFQUVJLGtCQUFBO0FDQUo7O0FERUE7RUFFSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpb24vZHByLXN1bW1hcnkvZHByLXN1bW1hcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LW1kXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmVkO1xyXG59XHJcbi5kb3dubG9hZF9pY29uXHJcbntcclxuICAgIHBhZGRpbmc6IDRweCA3cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZjZTAwO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbi5kYXRlXHJcbntcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgdmFyKC0tZGFya19ncmVlbl9jbHIpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggcmdiYSgwLDAsMCwuMik7XHJcbn1cclxuLmRhdGVfY29sXHJcbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uZGF0ZV9jb2wgaW9uLWljb25cclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEzcHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNCk7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn0iLCIuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5kb3dubG9hZF9pY29uIHtcbiAgcGFkZGluZzogNHB4IDdweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZjZTAwO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5kYXRlIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFya19ncmVlbl9jbHIpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5kYXRlX2NvbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRhdGVfY29sIGlvbi1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTNweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB0b3A6IDBweDtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgYm90dG9tOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/station/dpr-summary/dpr-summary.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/station/dpr-summary/dpr-summary.page.ts ***!
  \*********************************************************/
/*! exports provided: DprSummaryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DprSummaryPage", function() { return DprSummaryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");









var DprSummaryPage = /** @class */ (function () {
    function DprSummaryPage(formBuilder, router, activatedroute, commonServices, dp, actionSheetController, alertController, menu) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedroute = activatedroute;
        this.commonServices = commonServices;
        this.dp = dp;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.menu = menu;
        this.geteDate = { selcteddate: "" };
        this.stationReportData = [];
        this.DataTable = [];
        this.DataTable1 = [];
        this.DataTable2 = [];
        this.DataTable3 = [];
        this.StationCode = localStorage.getItem('stationCode');
        this.LoginId = localStorage.getItem('stationCode');
        this.glovalJson = JSON.parse(localStorage.getItem('globalDetail'));
        this.stationName = "";
        this.MeterSkitdiffAVG = 0.00;
        this.StationGasLoss = 0.00;
        this.GrossSale = 0.00;
        this.TotalList = [];
        this.summary = {
            prm_id: (this.glovalJson[0].prm_id == null || this.glovalJson[0].prm_id === undefined) ? 0 : this.glovalJson[0].prm_id
        };
        this.secondMaxDate = new Date().toISOString();
        this.monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ];
        this.currentdate = new Date().toISOString().split('T')[0];
        if (this.geteDate.selcteddate == "") {
            this.currDate = this.currentdate;
            console.log(this.currDate);
            var dt = new Date(this.currDate);
            //IOS Comment
            // let latest_date = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
            // this.geteDate.selcteddate = latest_date;
            this.DPREntryDateTime = this.dp.transform(dt, 'yyyy/MM/dd hh:mm:ss');
            this.geteDate.selcteddate = this.DPREntryDateTime;
            this.getStationReportData();
        }
    }
    DprSummaryPage.prototype.ngOnInit = function () {
        this.stationName = JSON.parse(localStorage.getItem("globalDetail"))[0].UserName;
        //this.getStationReportData();
        console.log(this.glovalJson[0], "PrimaryId");
    };
    DprSummaryPage.prototype.openFirst = function () {
        this.menu.enable(true, 'menuStn');
        this.menu.open('menuStn');
    };
    DprSummaryPage.prototype.getSelectedDate = function (datePicker) {
        console.log("datePicker", datePicker);
        var dt = new Date(datePicker);
        //IoS Comment
        // let latest_date = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        // this.geteDate.selcteddate = latest_date;
        // this.DPREntryDateTime = this.dp.transform(this.geteDate.selcteddate, 'yyyy-MM-dd hh:mm:ss');
        this.DPREntryDateTime = this.dp.transform(dt, 'yyyy/MM/dd hh:mm:ss');
        this.geteDate.selcteddate = this.DPREntryDateTime;
        this.getStationReportData();
    };
    DprSummaryPage.prototype.getStationReportData = function () {
        var _this = this;
        // try {
        this.commonServices.loadingPresent();
        this.commonServices.postwithservice("GetStationReport", {
            StationCode: this.StationCode, LoginId: this.LoginId,
            DPREntryDate: this.geteDate.selcteddate
        }).subscribe(function (response) {
            var data = JSON.parse(response);
            console.log(data, "SummaryData");
            if (data) {
                _this.stationReportData = data;
                console.log(_this.stationReportData);
                _this.DataTable = _this.stationReportData.Table;
                console.log(_this.DataTable + 'DataTable');
                _this.MeterSkitdiffAVG = _this.stationReportData.Table[0].MeterskitdiffAVG;
                //this.StationGasLoss = (this.MeterSkitdiffAVG) - parseFloat(this.stationReportData.Table[0].DispenserTotalSale);
                // this.StationGasLoss = (this.MeterSkitdiffAVG == null ? 0.00 : this.MeterSkitdiffAVG) - parseFloat(this.stationReportData.Table[0].DispenserTotalSale == null ? 0.00 : this.stationReportData.Table[0].DispenserTotalSale);
                console.log("MS : " + _this.MeterSkitdiffAVG, "D Sale" + _this.stationReportData.Table[0]);
                _this.DataTable1 = _this.stationReportData.Table1;
                _this.DataTable2 = _this.stationReportData.Table2;
                _this.DataTable3 = _this.stationReportData.Table3;
                _this.StationGasLoss = _this.stationReportData.Table4[0].Loss;
                console.log(_this.StationLossData);
                _this.StationGasLoss = parseFloat(_this.StationGasLoss.toFixed(2));
                console.log(_this.StationGasLoss, "StationLoss");
                console.log(_this.stationReportData.Table, "DispenserTotalSale");
                console.log(_this.stationReportData.Table.length, "length");
                console.log(_this.stationReportData.Table, "Table");
            }
            else {
                _this.commonServices.presentToast('No data available. Please try again.');
            }
            _this.commonServices.loadingDismiss();
        }, function (error) {
            console.log('Something went wrong.');
            _this.commonServices.loadingDismiss();
        });
        // }
        // catch (err) {
        //   console.log(err);
        // }
    };
    DprSummaryPage.prototype.stationSummarySubmit = function () {
        var _this = this;
        // if (!confirm('You won\'t be able to make changes after submit, are you sure?')) 
        // { return false; }
        this.commonServices.alertMessage("Confirm", "You won\'t be able to make changes after submit, are you sure?").then(function (res) {
            console.log(res);
            if (!res)
                try {
                    var obj = {
                        LoginId: _this.glovalJson[0].LoginId,
                        StationName: _this.glovalJson[0].StationCode,
                        StationCode: _this.glovalJson[0].StationCode,
                        DPREntryDate: _this.geteDate.selcteddate
                    };
                    _this.commonServices.loadingPresent();
                    _this.commonServices.postwithservice("FinalSubmit", obj).subscribe(function (response) {
                        var data = JSON.parse(response);
                        console.log(data);
                        if (data.Status.indexOf('#999#') > -1) {
                            var missingFor = data.Status.split('#999#')[1];
                            _this.commonServices.presentToast('Please fill the entry for ' + missingFor + '.');
                            _this.commonServices.loadingDismiss();
                            return false;
                        }
                        if (data.Status == '3') {
                            _this.commonServices.presentToast('Data is already submitted.');
                            _this.commonServices.loadingDismiss();
                            return false;
                        }
                        if (data.Status == '4') {
                            _this.commonServices.presentToast('You are not authorized to submit data.');
                            _this.commonServices.loadingDismiss();
                            return false;
                        }
                        else {
                            _this.commonServices.loadingDismiss();
                            _this.commonServices.presentToast('Data is submitted.');
                        }
                    }, function (error) {
                        console.log('Something went wrong.');
                        _this.commonServices.loadingDismiss();
                    });
                }
                catch (err) {
                    console.log(err);
                }
        });
    };
    DprSummaryPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
    ]; };
    DprSummaryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dpr-summary',
            template: __webpack_require__(/*! raw-loader!./dpr-summary.page.html */ "./node_modules/raw-loader/index.js!./src/app/station/dpr-summary/dpr-summary.page.html"),
            styles: [__webpack_require__(/*! ./dpr-summary.page.scss */ "./src/app/station/dpr-summary/dpr-summary.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], DprSummaryPage);
    return DprSummaryPage;
}());



/***/ })

}]);
//# sourceMappingURL=station-dpr-summary-dpr-summary-module-es5.js.map