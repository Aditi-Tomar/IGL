(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-summary-dsareport-summary-dsareport-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/summary-dsareport/summary-dsareport.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/summary-dsareport/summary-dsareport.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <header>\r\n    <div class=\"header\">\r\n      <div class=\"logo_div\" routerLink=\"/admin-home\">\r\n        <img src=\"../../assets/images/logo.png\" />\r\n      </div>\r\n      <h1 class=\"text_white text_center title\">DSA Summary I</h1>\r\n      <span class=\"logout_div\">\r\n        <div class=\"toggle_div\">\r\n          <button (click)=\"openFirst()\">\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n          </button>\r\n        </div>\r\n      </span>\r\n    </div>\r\n  </header>\r\n\r\n  <div class=\"main_heading1\">\r\n    <!-- <div *ngIf=\"pageFlag !='dsaStationSummary'\">\r\n\t\t\t<ion-back-button defaultHref=\"dsa-entry-menu\"></ion-back-button>\r\n\t\t</div>\r\n\t\t<div *ngIf=\"pageFlag =='dsaStationSummary'\">\r\n\t\t\t<ion-back-button defaultHref=\"so-dashboard\"></ion-back-button>\r\n\t\t</div> -->\r\n    <div>\r\n      <ion-back-button defaultHref=\"admin-home\"></ion-back-button>\r\n    </div>\r\n    <div>\r\n      <h1>DSA Summary (DSA REPORT)</h1>\r\n    </div>\r\n    <div class=\"text_center\">\r\n      <ion-button size=\"small\" color=\"light\" (click)=\"ExportToPdf()\"><ion-icon name=\"arrow-down\"></ion-icon></ion-button>\r\n    </div>\r\n  </div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"inp_group\">\r\n      <ion-label>Date From</ion-label>\r\n      <ion-item class=\"inp_control\">\r\n        <ion-label>Select Date:</ion-label>\r\n        <ion-datetime displayFormat=\"DD-MMM-YYYY\" pickerFormat=\"DD MMM YYYY\" placeholder=\"Select Date\"\r\n          [max]=\"secondMaxDate\" [(ngModel)]=\"dateFrom\" (ngModelChange)=\"OnDateChnagefrom($event)\"></ion-datetime>\r\n      </ion-item>\r\n    </ion-col>\r\n    <ion-col size=\"12\" class=\"inp_group\">\r\n      <ion-label>Date To</ion-label>\r\n      <ion-item class=\"inp_control\">\r\n        <ion-label>Select Date:</ion-label>\r\n        <ion-datetime [(ngModel)]=\"dateTo\" displayFormat=\"DD-MMM-YYYY\" pickerFormat=\"DD MMM YYYY\" [min]=\"DateFromMy\"\r\n          [max]=\"secondMaxDate\" placeholder=\"Select Date\" (ngModelChange)=\"OnDateChnageTo($event)\"></ion-datetime>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"inp_group\">\r\n      <ion-label>Station Name <span class=\"star\">*</span></ion-label>\r\n      <div class=\"custom_dropdown\">\r\n        <ion-input class=\"inp_control\" name=\"stCodeMy\" [(ngModel)]=\"stCodeMy\" (click)=\"filterBoxShow(0)\" readonly>\r\n        </ion-input>\r\n      </div>\r\n      <div class=\"filter_box\" *ngIf=(fiterBox)>\r\n        <ion-searchbar (ionChange)=\"onSearchTerm($event)\" placeholder=\"Search an item\"></ion-searchbar>\r\n        <div class=\"stn_list_container\">\r\n          <ion-list>\r\n            <div *ngIf=\"items.length > 0; else noItems\">\r\n              <ion-item *ngFor=\"let item of items\" (click)=\"filterBoxShow(item)\">\r\n                {{item.StationName}}\r\n              </ion-item>\r\n            </div>\r\n            <ng-template #noItems>\r\n              <ion-item>\r\n                No items found.\r\n              </ion-item>\r\n            </ng-template>\r\n          </ion-list>\r\n        </div>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col>\r\n      <div class=\"button_container\">\r\n        <ion-button color=\"dark_green_clr\" (click)=\"stationViewData()\">\r\n          Submit</ion-button>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-grid *ngFor=\"let mainItm of DispenserTableRes, let i = index\">\r\n\r\n    <ion-row>\r\n      <ion-col side=\"12\">\r\n        <div class=\"dsa_smry_container\">\r\n          <table class=\"dsa_stn_smry_table\">\r\n            <tr>\r\n              <td colspan=\"4\" class=\"text_center\" class=\"head_col\">\r\n                <h5>DSA REPORT</h5>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td colspan=\"4\" class=\"text_center left_col\">\r\n                <h6>Name of Station - {{stCodeMyDummy}}</h6><br/>\r\n                <h6>Date : {{mainItm.SummeryDates | date:'dd-MMM-yyyy'}}</h6>\r\n              </td>\r\n              <!-- <td colspan=\"4\" class=\"text_center left_col\">\r\n                <h6>Date : {{mainItm.SummeryDates | date:'dd-MMM-yyyy'}}</h6>\r\n              </td> -->\r\n            </tr>\r\n            <tr class=\"head_tr\">\r\n              <td class=\"text_center\">SL.NO</td>\r\n              <td class=\"text_center\">PARTICULARS</td>\r\n              <td class=\"text_center\">TOTAL QUANTITY</td>\r\n              <td class=\"text_center\">TOTAL AMOUNT</td>\r\n            </tr>\r\n            <tr *ngFor=\"let itm of mainItm.DispenserEntryRes, let i = index\">\r\n              <td>{{i+1}}</td>\r\n              <td\r\n                [ngClass]=\"itm.Particulars == 'NET CASH SALE' || itm.Particulars == 'CASH COLLECTION FOR THE DAY (RS.)' || itm.Particulars == 'OPENING CASH BALANCE (RS.)' || itm.Particulars == 'CLOSING BALANCE (RS.)' || itm.Particulars == 'CASH DEPOSITED WITH BANK (RS.)' ? 'text_bold' : ''\">\r\n                {{itm.Particulars}}</td>\r\n              <td class=\"text_right\">{{itm.TotalQuntity}}</td>\r\n              <td class=\"text_right\">{{itm.TotalAmount}}</td>\r\n            </tr>\r\n            <tr class=\"remark_tr\">\r\n              <td></td>\r\n              <td>REMARKS:</td>\r\n              <td></td>\r\n              <td></td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/HO/summary-dsareport/summary-dsareport-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/HO/summary-dsareport/summary-dsareport-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: SummaryDSAReportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryDSAReportPageRoutingModule", function() { return SummaryDSAReportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _summary_dsareport_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./summary-dsareport.page */ "./src/app/HO/summary-dsareport/summary-dsareport.page.ts");




var routes = [
    {
        path: '',
        component: _summary_dsareport_page__WEBPACK_IMPORTED_MODULE_3__["SummaryDSAReportPage"]
    }
];
var SummaryDSAReportPageRoutingModule = /** @class */ (function () {
    function SummaryDSAReportPageRoutingModule() {
    }
    SummaryDSAReportPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SummaryDSAReportPageRoutingModule);
    return SummaryDSAReportPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/HO/summary-dsareport/summary-dsareport.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/HO/summary-dsareport/summary-dsareport.module.ts ***!
  \******************************************************************/
/*! exports provided: SummaryDSAReportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryDSAReportPageModule", function() { return SummaryDSAReportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _summary_dsareport_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./summary-dsareport-routing.module */ "./src/app/HO/summary-dsareport/summary-dsareport-routing.module.ts");
/* harmony import */ var _summary_dsareport_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./summary-dsareport.page */ "./src/app/HO/summary-dsareport/summary-dsareport.page.ts");







var SummaryDSAReportPageModule = /** @class */ (function () {
    function SummaryDSAReportPageModule() {
    }
    SummaryDSAReportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _summary_dsareport_routing_module__WEBPACK_IMPORTED_MODULE_5__["SummaryDSAReportPageRoutingModule"]
            ],
            declarations: [_summary_dsareport_page__WEBPACK_IMPORTED_MODULE_6__["SummaryDSAReportPage"]]
        })
    ], SummaryDSAReportPageModule);
    return SummaryDSAReportPageModule;
}());



/***/ }),

/***/ "./src/app/HO/summary-dsareport/summary-dsareport.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/HO/summary-dsareport/summary-dsareport.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".download_icon {\n  padding: 2px 6px;\n  font-size: 20px;\n  border: 1px solid #ffce00;\n  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n}\n\n.date {\n  border: none;\n  border-bottom: 1px solid var(--dark_green_clr);\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);\n}\n\n.date_col {\n  position: relative;\n}\n\n.date_col ion-icon {\n  position: absolute;\n  right: 13px;\n  font-size: 25px;\n  color: rgba(0, 0, 0, 0.4);\n  top: 0px;\n  margin-top: auto;\n  bottom: 0px;\n  margin-bottom: auto;\n}\n\n.dsa_smry_container {\n  width: 100%;\n  overflow-x: auto;\n  padding: 7px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);\n  border-radius: 7px;\n}\n\n.dsa_stn_smry_table {\n  width: 100%;\n  border: 1px solid gray;\n  border-collapse: collapse;\n}\n\n.dsa_stn_smry_table tr td {\n  border: 1px solid #d8d8d8;\n  padding: 5px 3px;\n  font-size: 14px;\n  white-space: nowrap;\n}\n\n.head_col {\n  border: none;\n  background: var(--light_black_clr);\n  box-shadow: inset 0px 0px 19px rgba(0, 0, 0, 0.3);\n  text-align: center;\n}\n\n.head_col h5 {\n  color: white;\n  font-weight: bold;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  letter-spacing: 1px;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);\n  font-size: 16px;\n}\n\n.left_col {\n  border: none;\n  background: var(--light_gray_clr);\n  padding-top: 10px;\n  padding-bottom: 10px !important;\n}\n\n.left_col h6 {\n  color: #303030;\n  font-weight: bold;\n  font-size: 13px;\n}\n\n.head_tr td {\n  background-color: var(--gray_clr);\n  color: #414141;\n  font-weight: bold;\n}\n\n.remark_tr td {\n  height: 65px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvSE8vc3VtbWFyeS1kc2FyZXBvcnQvc3VtbWFyeS1kc2FyZXBvcnQucGFnZS5zY3NzIiwic3JjL2FwcC9ITy9zdW1tYXJ5LWRzYXJlcG9ydC9zdW1tYXJ5LWRzYXJlcG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNBO0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0FDM0NKOztBRDZDQTtFQUVJLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLDBDQUFBO0FDM0NKOztBRDZDQTtFQUVJLGtCQUFBO0FDM0NKOztBRDZDQTtFQUVJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQzNDSjs7QURnREE7RUFFSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtBQzlDSjs7QURnREE7RUFFQyxXQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQzlDRDs7QURnREE7RUFFQyx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDOUNEOztBRGdEQTtFQUVDLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLGlEQUFBO0VBQ0Esa0JBQUE7QUM5Q0Q7O0FEZ0RBO0VBRUMsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxlQUFBO0FDOUNEOztBRGdEQTtFQUVDLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUM5Q0Q7O0FEZ0RBO0VBRUMsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQzlDRDs7QURnREE7RUFFQyxpQ0FBQTtFQUNBLGNBQUE7RUFDRCxpQkFBQTtBQzlDQTs7QURnREE7RUFFSSxZQUFBO0FDOUNKIiwiZmlsZSI6InNyYy9hcHAvSE8vc3VtbWFyeS1kc2FyZXBvcnQvc3VtbWFyeS1kc2FyZXBvcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmhlYWRfY29sXHJcbi8vIHtcclxuLy8gIGJvcmRlcjpub25lO1xyXG4vLyAgd2lkdGg6IDEwMCU7XHJcbi8vICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodF9ibGFja19jbHIpO1xyXG4vLyAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxOXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuLy8gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gfVxyXG4vLyAuaGVhZF9jb2wgaDVcclxuLy8ge1xyXG4vLyAgY29sb3I6d2hpdGU7XHJcbi8vICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4vLyAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbi8vICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4vLyAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuLy8gIGZvbnQtc2l6ZTogMTZweDtcclxuLy8gfVxyXG5cclxuLy8gLmxlZnRfY29sXHJcbi8vIHtcclxuLy8gIGJvcmRlcjpub25lO1xyXG4vLyAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHRfZ3JheV9jbHIpO1xyXG4vLyAgcGFkZGluZy10b3A6IDEwcHg7XHJcbi8vICBwYWRkaW5nLWJvdHRvbTogMTBweCFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuLy8gLmxlZnRfY29sIGg2XHJcbi8vIHtcclxuLy8gIGNvbG9yOiMzMDMwMzA7XHJcbi8vICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gIGZvbnQtc2l6ZTogMTNweDtcclxuLy8gfVxyXG5cclxuLy8gLnJlbWFya190ciB0ZFxyXG4vLyB7XHJcbi8vICAgICBoZWlnaHQ6NjVweDtcclxuLy8gfVxyXG4vLyAuaGVhZF90ciB0ZFxyXG4vLyB7XHJcbi8vICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWdyYXlfY2xyKTtcclxuLy8gIGNvbG9yOiAjNDE0MTQxO1xyXG4vLyBmb250LXdlaWdodDogYm9sZDtcclxuLy8gfVxyXG4uZG93bmxvYWRfaWNvblxyXG57XHJcbiAgICBwYWRkaW5nOiAycHggNnB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmY2UwMDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuLmRhdGVcclxue1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCB2YXIoLS1kYXJrX2dyZWVuX2Nscik7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2JhKDAsMCwwLC4yKTtcclxufVxyXG4uZGF0ZV9jb2xcclxue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5kYXRlX2NvbCBpb24taWNvblxyXG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTNweDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC40KTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxufVxyXG5cclxuXHJcbi8vIHRhYmxcclxuLmRzYV9zbXJ5X2NvbnRhaW5lclxyXG57XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgb3ZlcmZsb3cteDphdXRvO1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuLmRzYV9zdG5fc21yeV90YWJsZVxyXG57XHJcbiB3aWR0aDoxMDAlO1xyXG4gYm9yZGVyOjFweCBzb2xpZCBncmF5O1xyXG4gYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG4uZHNhX3N0bl9zbXJ5X3RhYmxlIHRyIHRkXHJcbntcclxuIGJvcmRlcjoxcHggc29saWQgI2Q4ZDhkODtcclxuIHBhZGRpbmc6IDVweCAzcHg7XHJcbiBmb250LXNpemU6IDE0cHg7XHJcbiB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbi5oZWFkX2NvbFxyXG57XHJcbiBib3JkZXI6bm9uZTtcclxuIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0X2JsYWNrX2Nscik7XHJcbiBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDE5cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5oZWFkX2NvbCBoNVxyXG57XHJcbiBjb2xvcjp3aGl0ZTtcclxuIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gcGFkZGluZy10b3A6IDEycHg7XHJcbiBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5sZWZ0X2NvbFxyXG57XHJcbiBib3JkZXI6bm9uZTtcclxuIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0X2dyYXlfY2xyKTtcclxuIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gcGFkZGluZy1ib3R0b206IDEwcHghaW1wb3J0YW50O1xyXG59XHJcbi5sZWZ0X2NvbCBoNlxyXG57XHJcbiBjb2xvcjojMzAzMDMwO1xyXG4gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLmhlYWRfdHIgdGRcclxue1xyXG4gYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1ncmF5X2Nscik7XHJcbiBjb2xvcjogIzQxNDE0MTtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnJlbWFya190ciB0ZFxyXG57XHJcbiAgICBoZWlnaHQ6NjVweDtcclxufSIsIi5kb3dubG9hZF9pY29uIHtcbiAgcGFkZGluZzogMnB4IDZweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZjZTAwO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5kYXRlIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFya19ncmVlbl9jbHIpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5kYXRlX2NvbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRhdGVfY29sIGlvbi1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTNweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB0b3A6IDBweDtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgYm90dG9tOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG5cbi5kc2Ffc21yeV9jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgcGFkZGluZzogN3B4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLmRzYV9zdG5fc21yeV90YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4uZHNhX3N0bl9zbXJ5X3RhYmxlIHRyIHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZDhkODtcbiAgcGFkZGluZzogNXB4IDNweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uaGVhZF9jb2wge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0X2JsYWNrX2Nscik7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMTlweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRfY29sIGg1IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5sZWZ0X2NvbCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHRfZ3JheV9jbHIpO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmxlZnRfY29sIGg2IHtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5oZWFkX3RyIHRkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheV9jbHIpO1xuICBjb2xvcjogIzQxNDE0MTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5yZW1hcmtfdHIgdGQge1xuICBoZWlnaHQ6IDY1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/HO/summary-dsareport/summary-dsareport.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/HO/summary-dsareport/summary-dsareport.page.ts ***!
  \****************************************************************/
/*! exports provided: SummaryDSAReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryDSAReportPage", function() { return SummaryDSAReportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var SummaryDSAReportPage = /** @class */ (function () {
    function SummaryDSAReportPage(formBuilder, menu, router, datepipe, activatedroute, commonServices) {
        this.formBuilder = formBuilder;
        this.menu = menu;
        this.router = router;
        this.datepipe = datepipe;
        this.activatedroute = activatedroute;
        this.commonServices = commonServices;
        this.fiterBox = false;
        this.filterBoxFlag = 0;
        this.selectedStationId = 0;
        this.StationCode = '';
        this.dsaData = { selcteddate: "" };
        this.secondMaxDate = new Date().toISOString();
        this.DateFromMy = new Date().toISOString().split('T')[0];
        this.stationName = "";
        this.DispenserTableRes = [];
        this.stationReportData = [];
        this.DispensarTable1 = [];
        this.DispensarTable2 = [];
        this.DispensarTable3 = [];
        this.DispensarTable4 = [];
        this.DispensarTable5 = [];
        this.DispensarTable6 = [];
        this.currentdate = new Date().toISOString().split('T')[0];
        if (this.dsaData.selcteddate == "") {
            this.currDate = this.currentdate;
            console.log(this.currDate);
            var dt = new Date(this.currDate);
            this.dsaData.selcteddate = this.datepipe.transform(dt, 'yyyy/MM/dd');
        }
        this.dateFrom = this.dsaData.selcteddate;
        this.dateTo = this.dsaData.selcteddate;
    }
    SummaryDSAReportPage.prototype.ngOnInit = function () {
        this.getStationList();
    };
    SummaryDSAReportPage.prototype.openFirst = function () {
        this.menu.enable(true, 'menuCO');
        this.menu.open('menuCO');
    };
    SummaryDSAReportPage.prototype.OnDateChnagefrom = function (val) {
        var self = this;
        var dt = new Date(val);
        this.DateFromMy = val.split('T')[0];
        //IOS Comment
        // self.dateFrom = dt.getDate() + "/" + self.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        //IOS Add
        self.dateFrom = this.datepipe.transform(dt, 'yyyy/MM/dd');
        // self.checkdifference(self.dateFrom, self.dateTo);
    };
    SummaryDSAReportPage.prototype.OnDateChnageTo = function (val) {
        var self = this;
        var dt = new Date(val);
        //IOS Comment
        // self.dateTo = dt.getDate() + "/" + self.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        //IOS Add
        self.dateTo = this.datepipe.transform(dt, 'yyyy/MM/dd');
        // self.checkdifference(self.dateFrom, self.dateTo);
    };
    SummaryDSAReportPage.prototype.getStationList = function () {
        var _this = this;
        var self = this;
        self.commonServices.loadingPresent();
        self.commonServices.post("CommonGetData", { Id: 0, CompanyId: 0, ReportFlag: 'HO', Flag: 'GetAllStationsForDSA', Status: '', UserId: 1 }).subscribe(function (res) {
            var packageRes = JSON.parse(res).Table;
            if (packageRes != "" && packageRes != undefined && packageRes != null) {
                //   self.StationList = packageRes.Table1;
                //   self.items = self.StationList;
                //   console.log(self.StationList);
                _this.StationList = JSON.parse(res).Table;
                self.items = self.StationList;
                _this.stCodeMy = _this.StationList[0].StationName;
                _this.stCodeMyDummy = _this.StationList[0].StationName;
                _this.StationCode = _this.StationList[0].StationCode;
                _this.selectedStationId = _this.StationList[0].StationId;
                // this.GetReadingbyShift(this.StationList[0].StationId);
                _this.stationViewData();
            }
            else {
                self.commonServices.presentToast("Something went wrong.");
            }
            self.commonServices.loadingDismiss();
        }, function (error) {
            self.commonServices.presentToast("Something went wrong.");
            self.commonServices.loadingDismiss();
        });
    };
    SummaryDSAReportPage.prototype.filterBoxShow = function (itm) {
        if (this.filterBoxFlag == 0) {
            this.fiterBox = true;
            this.filterBoxFlag = 1;
        }
        else {
            this.fiterBox = false;
            this.filterBoxFlag = 0;
            // if (this.packlist != null && this.pageFlag == 'updatepage') {
            //   this.packlist.StationName = itm.StationName;
            //   this.packlist.StationCode = itm.StationCode;
            // }
            // else {
            //   this.addupdateForm.value.StationCode = itm.StationCode;
            //   this.addupdateForm.value.StationName = itm.StationName;
            //   this.packlist = 0;
            // }
            // this.updatepackage();
            this.stCodeMy = itm.StationName;
            this.selectedStationId = itm.StationId;
            // this.GetReadingbyShift(this.selectedStation);
            this.StationCode = itm.StationCode;
            console.log(this.stCodeMy);
        }
    };
    SummaryDSAReportPage.prototype.onSearchTerm = function (ev) {
        this.items = this.StationList;
        var val = ev.detail.value;
        if (val && val.trim() !== '') {
            this.items = this.items.filter(function (term) {
                return term.StationName.toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
            });
        }
    };
    SummaryDSAReportPage.prototype.stationViewData = function () {
        var _this = this;
        var obj = {
            StationId: this.selectedStationId,
            EntryDateFrom: this.dateFrom,
            EntryDateTo: this.dateTo
        };
        var self = this;
        self.commonServices.loadingPresent();
        self.commonServices.post("getSummaryHOForAdmin", obj).subscribe(function (res) {
            _this.stCodeMyDummy = _this.stCodeMy;
            _this.DispenserTableRes = JSON.parse(res);
            console.log("chh", _this.DispenserTableRes);
            _this.DispensarTable3 = JSON.parse(res).Table;
            //this.DispensarTable4 = JSON.parse(res).Table3;
            _this.DispensarTable5 = JSON.parse(res).Table1;
            //this.DispensarTable6 = JSON.parse(res).Table5;
            // this.stationName = "";
            self.commonServices.loadingDismiss();
        }, function (error) {
            self.commonServices.presentToast("Something went wrong.");
            self.commonServices.loadingDismiss();
        });
    };
    SummaryDSAReportPage.prototype.ExportToPdf = function () {
        var _this = this;
        var obj = {
            StationId: this.selectedStationId,
            EntryDateFrom: this.dateFrom,
            EntryDateTo: this.dateTo,
            StationCode: this.StationCode
        };
        this.commonServices.post('DispenserSummaryPDF_ForAdmin', obj).subscribe(function (resp) {
            console.log(resp);
            var data = JSON.parse(resp);
            if (data != 'No Data Available') {
                console.log(data + 'response');
                var PdfUrl = "";
                PdfUrl = _this.commonServices.baseUrl.substring(0, _this.commonServices.baseUrl.length - 4) + JSON.parse(resp);
                console.log(PdfUrl, 'pdf');
                window.location.href = _this.commonServices.baseUrl.substring(0, _this.commonServices.baseUrl.length - 4) + JSON.parse(resp);
                // const FileSaver = require('file-saver');
                // FileSaver.saveAs(PdfUrl);
            }
            else {
                alert(data);
            }
            _this.commonServices.loadingDismiss();
        }, function (error) { alert("Something went wrong."); });
    };
    SummaryDSAReportPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
    ]; };
    SummaryDSAReportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-summary-dsareport',
            template: __webpack_require__(/*! raw-loader!./summary-dsareport.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/summary-dsareport/summary-dsareport.page.html"),
            styles: [__webpack_require__(/*! ./summary-dsareport.page.scss */ "./src/app/HO/summary-dsareport/summary-dsareport.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], SummaryDSAReportPage);
    return SummaryDSAReportPage;
}());



/***/ })

}]);
//# sourceMappingURL=HO-summary-dsareport-summary-dsareport-module-es5.js.map