(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CO-reviews-co-reviews-co-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/CO/reviews-co/reviews-co.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/CO/reviews-co/reviews-co.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/co-dashboard\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<h1 class=\"text_white text_center title\">Reviews</h1>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<ion-row class=\"align_center search_parent\">\r\n\t\t<ion-col size=\"2\">\r\n\t\t\t<ion-back-button defaultHref=\"co-dashboard\"></ion-back-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"2\" offset=\"6\" *ngIf=\"outerCheck != 1\">\r\n\t\t\t<ion-button size=\"small\" color=\"light\" (click)=\"makeFinalApprove()\">\r\n\t\t\t\t<ion-icon name=\"checkmark\" class=\"font22\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"2\" *ngIf=\"outerCheck != 1\">\r\n\t\t\t<ion-button color=\"light\" size=\"small\" (click)=\"openModal()\">\r\n\t\t\t\t<ion-icon name=\"paper-plane\" class=\"font22\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-col>\r\n\t\t<!-- <ion-col size=\"2\" *ngIf=\"outerCheck != 1\">\r\n\t\t\t<ion-button size=\"small\" color=\"light\">\r\n\t\t\t\t<ion-icon name=\"arrow-down\" class=\"font22\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-col> -->\r\n\t\t<ion-col size=\"10\">\r\n\t\t\t<span class=\"switch_span\" *ngIf=\"outerCheck == 1\">\r\n\t\t\t\t<strong class=\"send_ho\">Already sent to HO for the\r\n\t\t\t\t\tday!</strong>\r\n\t\t\t</span>\r\n\t\t</ion-col>\r\n\t</ion-row>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<div *ngIf=\"isShown\" class=\"stcode tooltiptext\">\r\n\t\t{{stationCode}}\r\n\t</div>\r\n\t<ion-grid>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t<ion-label>Date <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t<ion-item class=\"inp_control\">\r\n\t\t\t\t\t<ion-label>Select Date:</ion-label>\r\n\t\t\t\t\t<ion-datetime #selcteddate displayFormat=\"DD-MMM-YYYY\" pickerFormat=\"DD MMM YYYY\"\r\n\t\t\t\t\t\t[ngModel]=\"geteDate.selcteddate\" name=\"selcteddate\"\r\n\t\t\t\t\t\t(ngModelChange)=\"getSelectedDate(selcteddate.value)\" [max]=\"secondMaxDate\">\r\n\t\t\t\t\t</ion-datetime>\r\n\t\t\t\t</ion-item>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t\t\t\t\t<th>Region</th>\r\n\t\t\t\t\t\t\t\t<th>Company Name</th>\r\n\t\t\t\t\t\t\t\t<th>Station Name</th>\r\n\t\t\t\t\t\t\t\t<th>Control Room Code</th>\r\n\t\t\t\t\t\t\t\t<th>Package Capacity(SCMH)</th>\r\n\t\t\t\t\t\t\t\t<th>Station Capacity(SCMH)</th>\r\n\t\t\t\t\t\t\t\t<th>Previous Month Average Sale</th>\r\n\t\t\t\t\t\t\t\t<th>Total Gas Filled LCV</th>\r\n\t\t\t\t\t\t\t\t<th>Total Sale KG</th>\r\n\t\t\t\t\t\t\t\t<th>Total Bus Gas Sale</th>\r\n\t\t\t\t\t\t\t\t<th>No OF LCV</th>\r\n\t\t\t\t\t\t\t\t<th>No OF BUS</th>\r\n\t\t\t\t\t\t\t\t<th>Utilization</th>\r\n\t\t\t\t\t\t\t\t<th>Package Make</th>\r\n\t\t\t\t\t\t\t\t<th>Sap Equipment No</th>\r\n\t\t\t\t\t\t\t\t<th>Prime Mover</th>\r\n\t\t\t\t\t\t\t\t<th>Running Hours</th>\r\n\t\t\t\t\t\t\t\t<th>Schedule Shutdown Hours</th>\r\n\t\t\t\t\t\t\t\t<th>UnSchedule Shutdown Hours</th>\r\n\t\t\t\t\t\t\t\t<th>Breakdown Hours</th>\r\n\t\t\t\t\t\t\t\t<th>Remark</th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr *ngFor=\"let itm of arrReviewData\">\r\n\t\t\t\t\t\t\t\t<td *ngIf=\"itm.SubmitStatus == 0\" class=\"red\"><span>Pending</span></td>\r\n\t\t\t\t\t\t\t\t<td *ngIf=\"itm.SubmitStatus == 2\" class=\"green\"><span>Approved</span></td>\r\n\t\t\t\t\t\t\t\t<td>{{itm.Region}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{itm.CompanyName}}</td>\r\n\t\t\t\t\t\t\t\t<td (click)=\"showStationCode(itm.StationName)\">{{itm.StationName}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{itm.ControlRoomCode}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{itm.PackageCapacity}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{itm.StationCapacity}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{itm.PreviousMonthAverageSale}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{itm.TotalGasFilledLCV}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{itm.TotalSaleKG}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{itm.TotalBusGasSale}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{itm.NumberOfLcv}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{itm.NumberOfBusses}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{itm.UTILIZATION}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{itm.PackageMake}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{itm.SAPEQUIPMENTNO}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{itm.Prime_Mover}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{itm.RunningHours}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{itm.ScheduleShutdownHours}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{itm.UnscheduledShutdownHours}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{itm.BreakdownHours}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{itm.Remark}}</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<div class=\"button_container downloadfile\">\r\n\t\t\t\t\t<ion-button color=\"dark_green_clr\" (click)=\"exportToExcel()\">Download File</ion-button>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/CO/reviews-co/reviews-co-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/CO/reviews-co/reviews-co-routing.module.ts ***!
  \************************************************************/
/*! exports provided: ReviewsCOPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsCOPageRoutingModule", function() { return ReviewsCOPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _reviews_co_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reviews-co.page */ "./src/app/CO/reviews-co/reviews-co.page.ts");




const routes = [
    {
        path: '',
        component: _reviews_co_page__WEBPACK_IMPORTED_MODULE_3__["ReviewsCOPage"]
    }
];
let ReviewsCOPageRoutingModule = class ReviewsCOPageRoutingModule {
};
ReviewsCOPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReviewsCOPageRoutingModule);



/***/ }),

/***/ "./src/app/CO/reviews-co/reviews-co.module.ts":
/*!****************************************************!*\
  !*** ./src/app/CO/reviews-co/reviews-co.module.ts ***!
  \****************************************************/
/*! exports provided: ReviewsCOPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsCOPageModule", function() { return ReviewsCOPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reviews_co_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reviews-co-routing.module */ "./src/app/CO/reviews-co/reviews-co-routing.module.ts");
/* harmony import */ var _reviews_co_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reviews-co.page */ "./src/app/CO/reviews-co/reviews-co.page.ts");







let ReviewsCOPageModule = class ReviewsCOPageModule {
};
ReviewsCOPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reviews_co_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReviewsCOPageRoutingModule"]
        ],
        declarations: [_reviews_co_page__WEBPACK_IMPORTED_MODULE_6__["ReviewsCOPage"]]
    })
], ReviewsCOPageModule);



/***/ }),

/***/ "./src/app/CO/reviews-co/reviews-co.page.scss":
/*!****************************************************!*\
  !*** ./src/app/CO/reviews-co/reviews-co.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".red {\n  color: red;\n}\n\n.green {\n  color: green;\n}\n\n.send_ho {\n  border: 1px solid #d8b10d;\n  padding: 5px 9px;\n  font-size: 14px;\n}\n\n.my_table .tooltiptext {\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  padding: 5px 0;\n  border-radius: 6px;\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  right: 0;\n  top: 0;\n}\n\n.tooltiptext {\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  text-align: center;\n  padding: 5px 0;\n  border-radius: 6px;\n  position: -webkit-sticky;\n  position: sticky;\n  z-index: 1;\n  left: 0;\n  right: 0;\n  top: 0;\n  width: 93%;\n  margin: 0 auto;\n}\n\n.button_container.downloadfile {\n  text-align: center;\n  margin-top: 15px;\n  margin-bottom: 20px;\n  position: fixed;\n  bottom: -24px;\n  width: 89%;\n  /* left: 0; */\n  /* right: 0; */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvQ08vcmV2aWV3cy1jby9yZXZpZXdzLWNvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvQ08vcmV2aWV3cy1jby9yZXZpZXdzLWNvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFVBQUE7QUNBSjs7QURFQTtFQUVJLFlBQUE7QUNBSjs7QURFQTtFQUVJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQUo7O0FERUE7RUFDSSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtBQ0NKOztBRENFO0VBRUksb0NBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDRixjQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvQ08vcmV2aWV3cy1jby9yZXZpZXdzLWNvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWRcclxue1xyXG4gICAgY29sb3I6cmVkO1xyXG59XHJcbi5ncmVlblxyXG57XHJcbiAgICBjb2xvcjpncmVlbjtcclxufVxyXG4uc2VuZF9ob1xyXG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDhiMTBkO1xyXG4gICAgcGFkZGluZzogNXB4IDlweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4ubXlfdGFibGUgLnRvb2x0aXB0ZXh0IHsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuICAudG9vbHRpcHRleHQgXHJcbiAgeyAgICBcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLDAuOCk7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHdpZHRoOiA5MyU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gIC5idXR0b25fY29udGFpbmVyLmRvd25sb2FkZmlsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogLTI0cHg7XHJcbiAgICB3aWR0aDogODklO1xyXG4gICAgLyogbGVmdDogMDsgKi9cclxuICAgIC8qIHJpZ2h0OiAwOyAqL1xyXG59IiwiLnJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5ncmVlbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnNlbmRfaG8ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDhiMTBkO1xuICBwYWRkaW5nOiA1cHggOXB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5teV90YWJsZSAudG9vbHRpcHRleHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xufVxuXG4udG9vbHRpcHRleHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHotaW5kZXg6IDE7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiA5MyU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYnV0dG9uX2NvbnRhaW5lci5kb3dubG9hZGZpbGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAtMjRweDtcbiAgd2lkdGg6IDg5JTtcbiAgLyogbGVmdDogMDsgKi9cbiAgLyogcmlnaHQ6IDA7ICovXG59Il19 */"

/***/ }),

/***/ "./src/app/CO/reviews-co/reviews-co.page.ts":
/*!**************************************************!*\
  !*** ./src/app/CO/reviews-co/reviews-co.page.ts ***!
  \**************************************************/
/*! exports provided: ReviewsCOPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsCOPage", function() { return ReviewsCOPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _remark_popup_remark_popup_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../remark-popup/remark-popup.page */ "./src/app/CO/remark-popup/remark-popup.page.ts");










let ReviewsCOPage = class ReviewsCOPage {
    constructor(formBuilder, router, modalController, activatedroute, commonServices, dp, actionSheetController, alertController, menu) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.modalController = modalController;
        this.activatedroute = activatedroute;
        this.commonServices = commonServices;
        this.dp = dp;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.menu = menu;
        this.arrReviewData = [];
        this.geteDate = { selcteddate: "" };
        this.secondMaxDate = new Date().toISOString();
        this.outerCheck = 0;
        this.isShown = false; // hidden by default
        this.stationReportData = [];
        this.DataTable = [];
        this.DataTable1 = [];
        this.DataTable2 = [];
        this.DataTable3 = [];
        this.StationCode = localStorage.getItem('stationCode');
        this.LoginId = localStorage.getItem('LoginCode');
        this.glovalJson = JSON.parse(localStorage.getItem('globalDetail'));
        this.stationName = "";
        this.MeterSkitdiffAVG = 0.00;
        this.StationGasLoss = 0.00;
        this.GrossSale = 0.00;
        this.TotalList = [];
        this.summary = {
            prm_id: (this.glovalJson[0].prm_id == null || this.glovalJson[0].prm_id === undefined) ? 0 : this.glovalJson[0].prm_id
        };
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
            const dt = new Date(this.currDate);
            //IOS Comment
            // let latest_date = dt.getDate() + "-" + this.monthNames[dt.getMonth()] + "-" + dt.getFullYear();
            // this.geteDate.selcteddate = latest_date;
            //IOS Add
            this.DPREntryDateTime = this.dp.transform(dt, 'yyyy/MM/dd hh:mm:ss');
            this.geteDate.selcteddate = this.dp.transform(dt, 'yyyy/MM/dd');
            this.getReviewData();
        }
    }
    ngOnInit() {
        this.stationName = JSON.parse(localStorage.getItem("globalDetail"))[0].UserName;
        //this.getStationReportData();
        console.log(this.glovalJson[0], "PrimaryId");
    }
    openFirst() {
        this.menu.enable(true, 'menuCO');
        this.menu.open('menuCO');
    }
    getSelectedDate(datePicker) {
        console.log("datePicker", datePicker);
        const dt = new Date(datePicker);
        //IOS Comment
        // let latest_date = dt.getDate() + "-" + this.monthNames[dt.getMonth()] + "-" + dt.getFullYear();
        // this.geteDate.selcteddate = latest_date;
        // this.DPREntryDateTime = this.dp.transform(this.geteDate.selcteddate, 'yyyy-MM-dd hh:mm:ss');
        //IOS Add
        this.DPREntryDateTime = this.dp.transform(dt, 'yyyy/MM/dd hh:mm:ss');
        this.geteDate.selcteddate = this.dp.transform(dt, 'yyyy/MM/dd');
        this.getReviewData();
    }
    getReviewData() {
        // try {
        console.log(this.LoginId);
        this.commonServices.loadingPresent();
        this.commonServices.postwithservice("GetStationsByCR", {
            LoginId: this.LoginId,
            // DPREntryDate: this.geteDate.selcteddate,
            DPREntryDate: this.dp.transform(this.geteDate.selcteddate, 'dd/MMM/yyyy')
        }).subscribe((response) => {
            // const data = JSON.parse(responseonse);
            console.log(response, "SummaryData");
            console.log(response);
            const data = response;
            // JSON.parse(response._body);
            if (data) {
                this.arrReviewData = response;
                console.log(this.arrReviewData);
                this.newArrayafterremove = this.arrReviewData.map((_a) => {
                    var { StationName, SubmitStatus } = _a, rest = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](_a, ["StationName", "SubmitStatus"]);
                    return rest;
                });
                console.log(this.newArrayafterremove);
                // this.stationToSubmit = this.arrReviewData.filter(
                //   arrayobj => arrayobj.SubmitStatus == "1"); 
                if (this.arrReviewData[0].isSentToHo == 1)
                    this.outerCheck = 1;
                else
                    this.outerCheck = 0;
                // this.objDbServ.ShowLoaders.emit(false);
            }
            else {
                this.commonServices.presentToast('Data not found.');
            }
            this.commonServices.loadingDismiss();
        }, (error) => {
            this.commonServices.presentToast('Something went wrong.');
            this.commonServices.loadingDismiss();
        });
        // }
        // catch (err) {
        //   console.log(err);
        // }
    }
    // For Final Approve
    makeFinalApprove() {
        console.log(this.glovalJson[0].LoginId);
        var temparray = [];
        temparray = this.arrReviewData.filter(arrayobj => arrayobj.selected == true);
        if (temparray.length == 0) {
            this.commonServices.presentToast('Station Entry is Pending.');
            return false;
        }
        // if (!confirm('Do you really want to Approve?'))
        //     return false;
        this.conApprove();
    }
    openModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _remark_popup_remark_popup_page__WEBPACK_IMPORTED_MODULE_7__["RemarkPopupPage"],
                cssClass: 'modalCSSDiscount',
                componentProps: {
                    LoginId: this.LoginId,
                    ControlRoomCode: this.LoginId,
                    //DPREntryDate: this.geteDate.selcteddate
                    DPREntryDate: this.dp.transform(this.geteDate.selcteddate, 'dd/MMM/yyyy')
                }
            });
            modal.onDidDismiss().then(data => {
                // console.log("Data AGE" + JSON.parse(data.toString()));
                if (data.data.typeDismis == 1) {
                    this.getReviewData();
                }
                else {
                }
            });
            return yield modal.present();
        });
    }
    conApprove() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm',
                message: 'Do you really want to Approve?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Ok',
                        handler: () => {
                            console.log('Confirm Okay');
                            // return false;
                            this.FinalFileApprove();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    FinalFileApprove() {
        console.log(this.glovalJson[0].LoginId);
        var temparray = [];
        temparray = this.arrReviewData.filter(arrayobj => arrayobj.selected == true);
        var stJson = [];
        temparray.forEach(element => {
            stJson.push({
                LoginId: this.glovalJson[0].LoginId,
                StationCode: element.StationCode,
                // DPREntryDate: this.geteDate.selcteddate
                DPREntryDate: this.dp.transform(this.geteDate.selcteddate, 'dd/MMM/yyyy')
            });
        });
        this.commonServices.loadingPresent();
        this.commonServices.postwithservice("FinalSubmitCO", stJson).subscribe((resp) => {
            const data = resp;
            console.log(data);
            if (data.Status == 'false') {
                this.commonServices.presentToast('Please save all the entries before final Approval.');
                this.commonServices.loadingDismiss();
                return false;
            }
            else {
                this.commonServices.loadingDismiss();
                this.commonServices.presentToast('Data is Approved.');
                this.getReviewData();
            }
        }, (error) => {
            this.commonServices.presentToast('Something went wrong.');
            this.commonServices.loadingDismiss();
        });
    }
    showStationCode(stname) {
        var item = this.arrReviewData.filter(item => item.StationName === stname);
        console.log("station code", item);
        this.stationCode = item[0].StationCode;
        this.stationname = item[0].StationName;
        this.isShown = !this.isShown;
    }
    exportToExcel() {
        this.commonServices.exportToExcel(this.newArrayafterremove, 'ReviewData');
    }
};
ReviewsCOPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
ReviewsCOPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reviews-co',
        template: __webpack_require__(/*! raw-loader!./reviews-co.page.html */ "./node_modules/raw-loader/index.js!./src/app/CO/reviews-co/reviews-co.page.html"),
        styles: [__webpack_require__(/*! ./reviews-co.page.scss */ "./src/app/CO/reviews-co/reviews-co.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], ReviewsCOPage);



/***/ })

}]);
//# sourceMappingURL=CO-reviews-co-reviews-co-module-es2015.js.map