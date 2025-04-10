(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["station-dsa-summary-dsa-summary-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/station/dsa-summary/dsa-summary.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/station/dsa-summary/dsa-summary.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" *ngIf=\"pageFlag !='dsaStationSummary'\" routerLink=\"/home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<div class=\"logo_div\" *ngIf=\"pageFlag =='dsaStationSummary'\" routerLink=\"/so-dashboard\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<div class=\"main_heading1\">\r\n\t\t<!-- <div *ngIf=\"pageFlag !='dsaStationSummary'\">\r\n\t\t\t<ion-back-button defaultHref=\"dsa-entry-menu\"></ion-back-button>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"pageFlag =='dsaStationSummary'\">\r\n\t\t\t<ion-back-button defaultHref=\"so-dashboard\"></ion-back-button>\r\n\t\t</div> -->\r\n\t\t<div>\r\n\t\t\t\t<ion-back-button defaultHref=\"dsa-entry-detail\"></ion-back-button>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<h1>DSA Summary (DSA REPORT)</h1>\r\n\t\t</div>\r\n\t\t<div class=\"text_center\">\r\n\t\t\t<!-- <ion-button size=\"small\" color=\"light\"><ion-icon name=\"arrow-down\"></ion-icon></ion-button> -->\r\n\t\t</div>\r\n\t</div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<div class=\"content_area\">\r\n\t\t<div class=\"mycard shadow_none back_trans\">\r\n\t\t\t<ion-row style=\"margin-bottom:7px;\" *ngIf=\"pageFlag =='dsaStationSummary'\">\r\n\t\t\t\t<ion-col size=\"8\" offset=\"2\" class=\"date_col\">\r\n\t\t\t\t\t<ion-datetime #selcteddate class=\"inp_control date\" displayFormat=\"DD-MMM-YYYY\"\r\n\t\t\t\t\t\tpickerFormat=\"DD MMM YYYY\" [ngModel]=\"SummeryDate\" name=\"selcteddate\" [max]=\"secondMaxDate\"\r\n\t\t\t\t\t\t(ngModelChange)=\"getSelectedDate(selcteddate.value)\"></ion-datetime>\r\n\t\t\t\t\t<ion-icon name=\"calendar\"></ion-icon>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-grid>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col side=\"12\">\r\n\t\t\t\t\t\t<div class=\"dsa_smry_container\">\r\n\t\t\t\t\t\t\t<table class=\"dsa_stn_smry_table\">\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td colspan=\"8\" class=\"text_center\" class=\"head_col\"></td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td colspan=\"4\" class=\"text_center left_col\">\r\n\t\t\t\t\t\t\t\t\t\t<h6>Name of Station - {{stationName}}</h6>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td colspan=\"4\" class=\"text_center left_col\">\r\n\t\t\t\t\t\t\t\t\t\t<h6>Date : {{SummeryDate}}</h6>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr class=\"head_tr\">\r\n\t\t\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t\t\t<td colspan=\"2\" class=\"text_center\">NON DISCOUNT</td>\r\n\t\t\t\t\t\t\t\t\t<td colspan=\"2\" class=\"text_center\">DISCOUNT</td>\r\n\t\t\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr class=\"head_tr\">\r\n\t\t\t\t\t\t\t\t\t<td>SL.NO</td>\r\n\t\t\t\t\t\t\t\t\t<td>PARTICULARS</td>\r\n\t\t\t\t\t\t\t\t\t<td rowspan=\"2\" class=\"text_center\">TOTAL QUANTITY</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text_center\">Qty.</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text_center\">Amount = Rate * Qty</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text_center\">Qty.</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text_center\">Amount = Rate * Qty</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text_center\">Total Amount</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr class=\"head_tr\">\r\n\t\t\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text_center\">A</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text_center\">B</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text_center\">C</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text_center\">D</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text_center\">E = (B+D)</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let itm of DispensarTable5, let i = index\">\r\n\t\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t\t<td\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"itm.Particulars == 'NET CASH SALE' || itm.Particulars == 'CASH COLLECTION FOR THE DAY (RS.)' || itm.Particulars == 'OPENING CASH BALANCE (RS.)' || itm.Particulars == 'CLOSING BALANCE (RS.)' || itm.Particulars == 'CASH DEPOSITED WITH BANK (RS.)' ? 'text_bold' : ''\">\r\n\t\t\t\t\t\t\t\t\t\t{{itm.Particulars}}</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text_right\">{{itm.TotalQuntity}}</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text_right\">{{itm.NonDiscount_QTY}}</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text_right\">{{itm.NonDiscount_Amt}}</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text_right\">{{itm.Discount_QTY}}</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text_right\">{{itm.Discount_Amt}}</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text_right\">{{itm.NonDiscount_Amt + itm.Discount_Amt | number:'1.2-2'}}\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr class=\"remark_tr\">\r\n\t\t\t\t\t\t\t\t\t<td rowspan=\"6\"></td>\r\n\t\t\t\t\t\t\t\t\t<td rowspan=\"6\" colspan=\"5\">REMARKS:</td>\r\n\t\t\t\t\t\t\t\t\t<td colspan=\"2\" rowspan=\"6\"></td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row class=\"align_center\">\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<ion-input type=\"file\" [value]=\"submitFile\" (change)=\"uploadImage($event)\"></ion-input>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col class=\"ion-text-right\">\r\n\t\t\t\t\t\t<ion-button size=\"small\" color=\"light\" (click)=\"presentModal()\">View</ion-button>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"button_container\" *ngIf=\"!SubmittedBySOFlaglocal\">\r\n\t\t\t\t\t\t\t<ion-button color=\"dark_green_clr\" (click)=\"checkPendingEntry()\" *ngIf=\"submitButton\">\r\n\t\t\t\t\t\t\t\t{{Submitbtn}}</ion-button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</ion-grid>\r\n\t\t</div>\r\n\t</div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/station/dsa-summary/dsa-summary-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/station/dsa-summary/dsa-summary-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: DsaSummaryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsaSummaryPageRoutingModule", function() { return DsaSummaryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dsa_summary_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dsa-summary.page */ "./src/app/station/dsa-summary/dsa-summary.page.ts");




var routes = [
    {
        path: '',
        component: _dsa_summary_page__WEBPACK_IMPORTED_MODULE_3__["DsaSummaryPage"]
    }
];
var DsaSummaryPageRoutingModule = /** @class */ (function () {
    function DsaSummaryPageRoutingModule() {
    }
    DsaSummaryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DsaSummaryPageRoutingModule);
    return DsaSummaryPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/station/dsa-summary/dsa-summary.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/station/dsa-summary/dsa-summary.module.ts ***!
  \***********************************************************/
/*! exports provided: DsaSummaryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsaSummaryPageModule", function() { return DsaSummaryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dsa_summary_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dsa-summary-routing.module */ "./src/app/station/dsa-summary/dsa-summary-routing.module.ts");
/* harmony import */ var _dsa_summary_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dsa-summary.page */ "./src/app/station/dsa-summary/dsa-summary.page.ts");







var DsaSummaryPageModule = /** @class */ (function () {
    function DsaSummaryPageModule() {
    }
    DsaSummaryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _dsa_summary_routing_module__WEBPACK_IMPORTED_MODULE_5__["DsaSummaryPageRoutingModule"]
            ],
            declarations: [_dsa_summary_page__WEBPACK_IMPORTED_MODULE_6__["DsaSummaryPage"]]
        })
    ], DsaSummaryPageModule);
    return DsaSummaryPageModule;
}());



/***/ }),

/***/ "./src/app/station/dsa-summary/dsa-summary.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/station/dsa-summary/dsa-summary.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".download_icon {\n  padding: 2px 6px;\n  font-size: 20px;\n  border: 1px solid #ffce00;\n  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n}\n\n.date {\n  border: none;\n  border-bottom: 1px solid var(--dark_green_clr);\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);\n}\n\n.date_col {\n  position: relative;\n}\n\n.date_col ion-icon {\n  position: absolute;\n  right: 13px;\n  font-size: 25px;\n  color: rgba(0, 0, 0, 0.4);\n  top: 0px;\n  margin-top: auto;\n  bottom: 0px;\n  margin-bottom: auto;\n}\n\n.dsa_smry_container {\n  width: 100%;\n  overflow-x: auto;\n  padding: 7px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);\n  border-radius: 7px;\n}\n\n.dsa_stn_smry_table {\n  width: 100%;\n  border: 1px solid gray;\n  border-collapse: collapse;\n}\n\n.dsa_stn_smry_table tr td {\n  border: 1px solid #d8d8d8;\n  padding: 5px 3px;\n  font-size: 14px;\n  white-space: nowrap;\n}\n\n.head_col {\n  border: none;\n  background: var(--light_black_clr);\n  box-shadow: inset 0px 0px 19px rgba(0, 0, 0, 0.3);\n  text-align: center;\n}\n\n.head_col h5 {\n  color: white;\n  font-weight: bold;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  letter-spacing: 1px;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);\n  font-size: 16px;\n}\n\n.left_col {\n  border: none;\n  background: var(--light_gray_clr);\n  padding-top: 10px;\n  padding-bottom: 10px !important;\n}\n\n.left_col h6 {\n  color: #303030;\n  font-weight: bold;\n  font-size: 13px;\n}\n\n.head_tr td {\n  background-color: var(--gray_clr);\n  color: #414141;\n  font-weight: bold;\n}\n\n.remark_tr td {\n  height: 65px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvc3RhdGlvbi9kc2Etc3VtbWFyeS9kc2Etc3VtbWFyeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3N0YXRpb24vZHNhLXN1bW1hcnkvZHNhLXN1bW1hcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0FDQUo7O0FERUE7RUFFSSxZQUFBO0VBQ0EsOENBQUE7RUFDQSwwQ0FBQTtBQ0FKOztBREVBO0VBRUksa0JBQUE7QUNBSjs7QURFQTtFQUVJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREtBO0VBRUksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7QUNISjs7QURLQTtFQUVDLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FDSEQ7O0FES0E7RUFFQyx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDSEQ7O0FES0E7RUFFQyxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxpREFBQTtFQUNBLGtCQUFBO0FDSEQ7O0FES0E7RUFFQyxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGVBQUE7QUNIRDs7QURLQTtFQUVDLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUNIRDs7QURLQTtFQUVDLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNIRDs7QURLQTtFQUVDLGlDQUFBO0VBQ0EsY0FBQTtFQUNELGlCQUFBO0FDSEE7O0FES0E7RUFFSSxZQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9zdGF0aW9uL2RzYS1zdW1tYXJ5L2RzYS1zdW1tYXJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kb3dubG9hZF9pY29uXHJcbntcclxuICAgIHBhZGRpbmc6IDJweCA2cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZjZTAwO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4uZGF0ZVxyXG57XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIHZhcigtLWRhcmtfZ3JlZW5fY2xyKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHJnYmEoMCwwLDAsLjIpO1xyXG59XHJcbi5kYXRlX2NvbFxyXG57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmRhdGVfY29sIGlvbi1pY29uXHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxM3B4O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjQpO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcblxyXG5cclxuLy8gdGFibFxyXG4uZHNhX3NtcnlfY29udGFpbmVyXHJcbntcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBvdmVyZmxvdy14OmF1dG87XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2JhKDAsIDAsIDAsIC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG4uZHNhX3N0bl9zbXJ5X3RhYmxlXHJcbntcclxuIHdpZHRoOjEwMCU7XHJcbiBib3JkZXI6MXB4IHNvbGlkIGdyYXk7XHJcbiBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcbi5kc2Ffc3RuX3NtcnlfdGFibGUgdHIgdGRcclxue1xyXG4gYm9yZGVyOjFweCBzb2xpZCAjZDhkOGQ4O1xyXG4gcGFkZGluZzogNXB4IDNweDtcclxuIGZvbnQtc2l6ZTogMTRweDtcclxuIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLmhlYWRfY29sXHJcbntcclxuIGJvcmRlcjpub25lO1xyXG4gYmFja2dyb3VuZDogdmFyKC0tbGlnaHRfYmxhY2tfY2xyKTtcclxuIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMTlweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmhlYWRfY29sIGg1XHJcbntcclxuIGNvbG9yOndoaXRlO1xyXG4gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiBwYWRkaW5nLXRvcDogMTJweDtcclxuIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmxlZnRfY29sXHJcbntcclxuIGJvcmRlcjpub25lO1xyXG4gYmFja2dyb3VuZDogdmFyKC0tbGlnaHRfZ3JheV9jbHIpO1xyXG4gcGFkZGluZy10b3A6IDEwcHg7XHJcbiBwYWRkaW5nLWJvdHRvbTogMTBweCFpbXBvcnRhbnQ7XHJcbn1cclxuLmxlZnRfY29sIGg2XHJcbntcclxuIGNvbG9yOiMzMDMwMzA7XHJcbiBmb250LXdlaWdodDogYm9sZDtcclxuIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4uaGVhZF90ciB0ZFxyXG57XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWdyYXlfY2xyKTtcclxuIGNvbG9yOiAjNDE0MTQxO1xyXG5mb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ucmVtYXJrX3RyIHRkXHJcbntcclxuICAgIGhlaWdodDo2NXB4O1xyXG59IiwiLmRvd25sb2FkX2ljb24ge1xuICBwYWRkaW5nOiAycHggNnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmNlMDA7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLmRhdGUge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXJrX2dyZWVuX2Nscik7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmRhdGVfY29sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZGF0ZV9jb2wgaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxM3B4O1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHRvcDogMHB4O1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBib3R0b206IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cblxuLmRzYV9zbXJ5X2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBwYWRkaW5nOiA3cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG4uZHNhX3N0bl9zbXJ5X3RhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5kc2Ffc3RuX3NtcnlfdGFibGUgdHIgdGQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDhkOGQ4O1xuICBwYWRkaW5nOiA1cHggM3B4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5oZWFkX2NvbCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHRfYmxhY2tfY2xyKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxOXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZF9jb2wgaDUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmxlZnRfY29sIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodF9ncmF5X2Nscik7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xufVxuXG4ubGVmdF9jb2wgaDYge1xuICBjb2xvcjogIzMwMzAzMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmhlYWRfdHIgdGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5X2Nscik7XG4gIGNvbG9yOiAjNDE0MTQxO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJlbWFya190ciB0ZCB7XG4gIGhlaWdodDogNjVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/station/dsa-summary/dsa-summary.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/station/dsa-summary/dsa-summary.page.ts ***!
  \*********************************************************/
/*! exports provided: DsaSummaryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsaSummaryPage", function() { return DsaSummaryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _redirected_pages_dsa_summary_preview_modal_dsa_summary_preview_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redirected_pages/dsa-summary-preview-modal/dsa-summary-preview-modal.page */ "./src/app/station/redirected_pages/dsa-summary-preview-modal/dsa-summary-preview-modal.page.ts");










var DsaSummaryPage = /** @class */ (function () {
    function DsaSummaryPage(formBuilder, router, activatedroute, commonServices, menu, dp, modalController) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedroute = activatedroute;
        this.commonServices = commonServices;
        this.menu = menu;
        this.dp = dp;
        this.modalController = modalController;
        this.geteDate = { selcteddate: "" };
        this.stationReportData = [];
        this.DispensarTable1 = [];
        this.DispensarTable2 = [];
        this.DispensarTable3 = [];
        this.DispensarTable4 = [];
        this.DispensarTable5 = [];
        this.DispensarTable6 = [];
        this.enterOtpfields = false;
        this.DataSalesTable = [];
        this.DataTable3 = [];
        this.LoginId = localStorage.getItem('LoginCode');
        this.StationCode = localStorage.getItem('stationCode');
        this.DepartmentCode = localStorage.getItem('DepartmentCode');
        this.glovalJson = JSON.parse(sessionStorage.getItem('globalDetail'));
        this.stationName = "";
        this.selectedStation = 0;
        this.StationShift = { ShiftId: '-1', SubShiftId: '-1', ActiveTab: 'Summary' };
        this.FinalTotal = 0;
        this.submitFile = null;
        this.submitButton = true;
        this.submitButtonBySOP = true;
        this.FileName = "";
        this.imgDisplay = false;
        this.imgURL = "";
        this.Submitbtn = '';
        this.submittedflag = false;
        this.CdateTime = new Date();
        this.SubmittedBySOFlaglocal = false;
        this.enteredotp = "";
        this.validotp = "";
        this.popupDate = "";
        this.successMessage = false;
        this.selectedShiftId = '-1';
        this.selectedSubShiftId = '';
        this.attchPop = false;
        this.attchPopFlag = 0;
        this.secondMaxDate = new Date().toISOString();
        this.monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ];
        this.pageFlag = this.activatedroute.snapshot.paramMap.get('flag');
        this.SummeryDate = localStorage.getItem('SummeryDate');
        this.UserId = localStorage.getItem('UserId');
        this.onselectedStation = localStorage.getItem('StationId');
        this.toggleSideBar();
        this.commonServices.HeaderDisplay.emit(true);
        this.StationShift = this.StationShift;
        this.selectedShiftId = this.StationShift.ShiftId;
        this.selectedSubShiftId = this.StationShift.SubShiftId;
        setTimeout(function () {
            _this.GetReadingbyShift();
            _this.CheckShiftSubmitData();
        });
        this.commonServices.SubmittedBySOFlag.subscribe(function (value) {
            _this.SubmittedBySOFlaglocal = value;
            console.log(_this.SubmittedBySOFlaglocal, "SubmittedBySOFlag");
        });
        this.subscription = this.commonServices.StationDetails.subscribe(function (test) {
            _this.detailsStation = test;
            console.log(_this.detailsStation);
        });
        console.log(this.detailsStation);
        if (this.DepartmentCode == 'SOP')
            this.Submitbtn = 'Final Submit';
        else
            this.Submitbtn = 'Submit';
        this.commonServices.lockUnlock.subscribe(function (value) {
            _this.submittedflag = value;
            console.log(_this.submittedflag, "submittedflag");
        });
    }
    DsaSummaryPage.prototype.ngOnInit = function () {
        this.selectedStation = Number(localStorage.getItem('StationId'));
        this.fileUploadForm = this.formBuilder.group({
            myfile: ['']
        });
    };
    DsaSummaryPage.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DsaSummaryPage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _redirected_pages_dsa_summary_preview_modal_dsa_summary_preview_modal_page__WEBPACK_IMPORTED_MODULE_8__["DsaSummaryPreviewModalPage"],
                            cssClass: 'modal_container'
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DsaSummaryPage.prototype.openFirst = function () {
        if (this.DepartmentCode == 'SOP') {
            this.menu.enable(true, 'menuCO');
            this.menu.open('menuCO');
        }
        else {
            this.menu.enable(true, 'menuStn');
            this.menu.open('menuStn');
        }
    };
    DsaSummaryPage.prototype.getSelectedDate = function (datePicker) {
        console.log("datePicker", datePicker);
        var dt = new Date(datePicker);
        var latest_date = dt.getDate() + "-" + this.monthNames[dt.getMonth()] + "-" + dt.getFullYear();
        this.SummeryDate = latest_date;
        this.detailsStation.SummeryDate = latest_date;
        this.GetReadingbyShift();
    };
    DsaSummaryPage.prototype.toggleSideBar = function () {
        var _this = this;
        this.commonServices.post("CommonGetData", { Id: this.onselectedStation, Status: this.SummeryDate, Flag: 'validatePopup' }).subscribe(function (resp) {
            var data = JSON.parse(resp);
            console.log(data);
            if (data.Table[0].Msg == 'Allow') {
                _this.commonServices.StationDetails.emit({
                    StationId: _this.onselectedStation,
                    SummeryDate: _this.SummeryDate,
                    UserId: _this.UserId
                });
                setTimeout(function () {
                    _this.GetReadingbyShift();
                    _this.CheckShiftSubmitData();
                });
            }
            else {
                _this.commonServices.presentToast(data.Table[0].Msg);
            }
        }, function (error) {
            _this.commonServices.presentToast('Something went wrong.');
        });
    };
    DsaSummaryPage.prototype.GetReadingbyShift = function () {
        var _this = this;
        var obj = {
            StationId: Number(localStorage.getItem('StationId')),
            EntryDate: this.detailsStation.SummeryDate
        };
        this.commonServices.loadingDismiss();
        this.commonServices.loadingPresent();
        this.commonServices.post("getSummaryHO", obj).subscribe(function (resp) {
            console.log(JSON.parse(resp));
            _this.DispensarTable3 = JSON.parse(resp).Table2;
            _this.DispensarTable4 = JSON.parse(resp).Table3;
            _this.DispensarTable5 = JSON.parse(resp).Table4;
            _this.DispensarTable6 = JSON.parse(resp).Table5;
            _this.stationName = Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(_this.DispensarTable3[0].StationName) ? '' : _this.DispensarTable3[0].StationName;
            _this.commonServices.loadingDismiss();
            _this.FetchDSASubmittedData();
        }, function (error) {
            _this.commonServices.presentToast("Something went wrong.");
            _this.commonServices.loadingDismiss();
        });
    };
    DsaSummaryPage.prototype.checkPendingEntry = function () {
        var _this = this;
        var obj = {
            Id: Number(localStorage.getItem('StationId')),
            Status: this.detailsStation.SummeryDate,
            Flag: 'IsFinalEntry'
        };
        this.commonServices.loadingDismiss();
        this.commonServices.loadingPresent();
        this.commonServices.post("CommonGetData", obj).subscribe(function (resp) {
            var data = JSON.parse(resp);
            console.log(data);
            if (data.Table[0].Msg == 'Allow') {
                _this.DispenserSummarySubmitted();
            }
            else {
                _this.commonServices.presentToast(data.Table[0].Msg);
            }
            _this.commonServices.loadingDismiss();
        }, function (error) {
            _this.commonServices.presentToast('Something went wrong.');
            _this.commonServices.loadingDismiss();
        });
    };
    DsaSummaryPage.prototype.DispenserSummarySubmitted = function () {
        var _this = this;
        var obj = {
            StationId: Number(localStorage.getItem('StationId')),
            StationCode: localStorage.getItem('stationCode'),
            CDate: this.detailsStation.SummeryDate,
            IsStationSubmitted: 1,
            Flag: this.DepartmentCode,
            IsSubmittedBySOP: this.DepartmentCode == 'SOP' ? 1 : 0,
            SOPId: this.DepartmentCode == 'SOP' ? localStorage.getItem('UID') : 0
        };
        var frmData = new FormData();
        frmData.append("SubmissionDetails", JSON.stringify(obj));
        console.log(this.submitFile);
        if (this.submitFile != undefined) {
            if (this.validation()) {
                return false;
            }
            frmData.append('file', this.submitFile, this.submitFile.name);
        }
        this.commonServices.DispenserSummarySubmitted(frmData).subscribe(function (resp) {
            console.log(JSON.parse(resp));
            var data = JSON.parse(resp).Table[0].Msg;
            _this.FetchDSASubmittedData();
            _this.commonServices.presentToast(data);
        }, function (error) {
            _this.commonServices.presentToast("Something went wrong.");
        });
    };
    DsaSummaryPage.prototype.uploadImage = function (str) {
        this.submitFile = str.target.files[0];
    };
    DsaSummaryPage.prototype.FetchDSASubmittedData = function () {
        var _this = this;
        var objson = {
            StationId: Number(localStorage.getItem('StationId')),
            StationCode: localStorage.getItem('stationCode'),
            CDate: this.detailsStation.SummeryDate,
            Flag: this.DepartmentCode,
            SOPId: this.DepartmentCode == 'SOP' ? localStorage.getItem('UID') : 0
        };
        this.commonServices.FetchDSASubmittedData(objson).subscribe(function (resp) {
            var arr = [];
            var data1 = JSON.parse(resp);
            console.log(data1);
            if (data1.Table1.length > 0 || data1.Table2.length > 0) {
                if (JSON.parse(resp).Table1[0].FileName != '' || Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(JSON.parse(resp).Table1[0].FileName) == false) {
                    _this.FileName = JSON.parse(resp).Table1[0].FileName;
                    _this.imgDisplay = true;
                    _this.imgURL = _this.commonServices.baseUrl.substring(0, _this.commonServices.baseUrl.length - 4) + "Images/" + _this.FileName;
                    //this.imgURL = 'http://localhost:56150/Images/offer-icon1.png';
                    console.log(_this.imgURL);
                    localStorage.setItem("imgURL", _this.imgURL);
                }
                else {
                    _this.FileName = '';
                    _this.imgDisplay = false;
                }
                if (JSON.parse(resp).Table[0].IsStationSubmitted == 1 || JSON.parse(resp).Table[0].IsSubmittedBySOP == 1)
                    _this.submitButton = false;
                else
                    _this.submitButton = true;
            }
        }, function (error) {
            _this.commonServices.presentToast('Something went wrong.');
        });
    };
    DsaSummaryPage.prototype.validation = function () {
        var errorFlag = false;
        if (this.submitFile != undefined) {
            var fileName = (',' + this.submitFile.name.split('.')[1] + ',').toLowerCase();
            if (',png,jpeg,jpg,'.indexOf(fileName) == -1) {
                this.commonServices.presentToast('Please select the valid file (png, jpeg, jpg)');
                errorFlag = true;
            }
            else if (this.submitFile.size > 2097152) {
                this.commonServices.presentToast('Please select the file under size limit (2 MB)');
                errorFlag = true;
            }
        }
        return errorFlag;
    };
    DsaSummaryPage.prototype.CheckShiftSubmitData = function () {
        var _this = this;
        this.commonServices.post("CommonGetData", { Id: this.selectedStation, Flag: 'IsShiftEntryComplete',
            Status: this.CdateTime, ReportFlag: this.DepartmentCode }).subscribe(function (resp) {
            _this.commonServices.IsShiftIdPending = JSON.parse(resp).Table2[0].IsShiftIdPending;
        }, function (error) {
            _this.commonServices.presentToast('Something went wrong.');
        });
    };
    DsaSummaryPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
    ]; };
    DsaSummaryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dsa-summary',
            template: __webpack_require__(/*! raw-loader!./dsa-summary.page.html */ "./node_modules/raw-loader/index.js!./src/app/station/dsa-summary/dsa-summary.page.html"),
            styles: [__webpack_require__(/*! ./dsa-summary.page.scss */ "./src/app/station/dsa-summary/dsa-summary.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
    ], DsaSummaryPage);
    return DsaSummaryPage;
}());



/***/ })

}]);
//# sourceMappingURL=station-dsa-summary-dsa-summary-module-es5.js.map