(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-dashboard-dsa-dashboard-dsa-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/dashboard-dsa/dashboard-dsa.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/dashboard-dsa/dashboard-dsa.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/admin-home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" /></div>\r\n\t\t\t<h1 class=\"text_white text_center title\">Dashboard DSA</h1>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<ion-grid>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col size=\"2\">\r\n\t\t\t\t<ion-back-button defaultHref=\"dashboard\"></ion-back-button>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"6\" offset=\"1\">\r\n\t\t\t\t<ion-datetime #selcteddate class=\"datepick\" displayFormat=\"DD-MMM-YYYY\" pickerFormat=\"DD MMM YYYY\"\r\n\t\t\t\t\t[(ngModel)]=\"dsaData.selcteddate\" name=\"selcteddate\" [max]=\"secondMaxDate\"\r\n\t\t\t\t\t(ngModelChange)=\"getSelectedDate(selcteddate.value)\"></ion-datetime>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row *ngFor=\"let dsalist of dsaRes\">\r\n\t\t\t<ion-col>\r\n\t\t\t\t<div class=\"prog_row\">\r\n\t\t\t\t\t<div class=\"prog_heading\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<h5>{{dsalist.Name}}</h5>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<span *ngIf=\"dsalist.MOPer == 100\">\r\n\t\t\t\t\t\t\t\t<ion-icon name=\"checkmark-circle\"></ion-icon>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span *ngIf=\"dsalist.MOPer != 100\">\r\n\t\t\t\t\t\t\t\t<ion-icon name=\"alert\" class=\"red\"></ion-icon>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"ion-text-center\">\r\n\t\t\t\t\t\t<ion-text>{{dsalist.MOPer}}%</ion-text>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"progress_container\">\r\n\t\t\t\t\t\t<span class=\"progress_content\">\r\n\t\t\t\t\t\t\t{{(dsalist.SubmitedStation=='0') ? dsalist.StCount : dsalist.SubmitedStation}}/{{dsalist.StCount}}\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<div class=\"myprogress\">\r\n\t\t\t\t\t\t\t<ion-progress-bar class=\"prog\" [style.width]=\"dsalist.MOPer + '%'\">\r\n\t\t\t\t\t\t\t</ion-progress-bar>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/HO/dashboard-dsa/dashboard-dsa-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/HO/dashboard-dsa/dashboard-dsa-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: DashboardDsaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardDsaPageRoutingModule", function() { return DashboardDsaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dsa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-dsa.page */ "./src/app/HO/dashboard-dsa/dashboard-dsa.page.ts");




var routes = [
    {
        path: '',
        component: _dashboard_dsa_page__WEBPACK_IMPORTED_MODULE_3__["DashboardDsaPage"]
    }
];
var DashboardDsaPageRoutingModule = /** @class */ (function () {
    function DashboardDsaPageRoutingModule() {
    }
    DashboardDsaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DashboardDsaPageRoutingModule);
    return DashboardDsaPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/HO/dashboard-dsa/dashboard-dsa.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/HO/dashboard-dsa/dashboard-dsa.module.ts ***!
  \**********************************************************/
/*! exports provided: DashboardDsaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardDsaPageModule", function() { return DashboardDsaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_dsa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-dsa-routing.module */ "./src/app/HO/dashboard-dsa/dashboard-dsa-routing.module.ts");
/* harmony import */ var _dashboard_dsa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-dsa.page */ "./src/app/HO/dashboard-dsa/dashboard-dsa.page.ts");







var DashboardDsaPageModule = /** @class */ (function () {
    function DashboardDsaPageModule() {
    }
    DashboardDsaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _dashboard_dsa_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardDsaPageRoutingModule"]
            ],
            declarations: [_dashboard_dsa_page__WEBPACK_IMPORTED_MODULE_6__["DashboardDsaPage"]]
        })
    ], DashboardDsaPageModule);
    return DashboardDsaPageModule;
}());



/***/ }),

/***/ "./src/app/HO/dashboard-dsa/dashboard-dsa.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/HO/dashboard-dsa/dashboard-dsa.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".datepick {\n  border: 1px solid #e3e3e3;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  border-radius: 20px;\n  background-color: #f7f7f7;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);\n}\n\nion-progress-bar {\n  border-radius: 20px;\n  height: 18px;\n}\n\n.progress_content {\n  position: absolute;\n  right: 0;\n  top: -3px;\n  left: 0;\n  text-align: center;\n  margin: 0 auto;\n  z-index: 50;\n  color: black;\n}\n\n.progress_container {\n  position: relative;\n}\n\nion-card-header {\n  background-color: var(--light_gray_clr);\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n.mo_prog_row {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.mo_prog_row ion-label {\n  font-weight: bold;\n  color: black;\n}\n\n.prog {\n  --background:#4caf50;\n}\n\n.home_button {\n  --background: #ffffff;\n  --color: #2a2a2a;\n  --background-hover: #fff;\n  font-size: 14px;\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvSE8vZGFzaGJvYXJkLWRzYS9kYXNoYm9hcmQtZHNhLnBhZ2Uuc2NzcyIsInNyYy9hcHAvSE8vZGFzaGJvYXJkLWRzYS9kYXNoYm9hcmQtZHNhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwyQ0FBQTtBQ0NOOztBRENBO0VBQWlCLG1CQUFBO0VBQ2hCLFlBQUE7QUNHRDs7QURGQztFQUFrQixrQkFBQTtFQUNqQixRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ01GOztBREhDO0VBQ0Msa0JBQUE7QUNNRjs7QURIQTtFQUVDLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0tEOztBREhBO0VBRUMsaUJBQUE7RUFDQSxvQkFBQTtBQ0tEOztBREhDO0VBRUMsaUJBQUE7RUFDQSxZQUFBO0FDSUY7O0FEQUE7RUFFQyxvQkFBQTtBQ0VEOztBRENBO0VBRUkscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0gsZUFBQTtFQUNBLGlCQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC9ITy9kYXNoYm9hcmQtZHNhL2Rhc2hib2FyZC1kc2EucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGVwaWNre1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UzZTNlMztcclxuXHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDVweDtcclxuXHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDVweDtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMjBweDtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuXHRcdFx0XHRcdFx0Ym94LXNoYWRvdzogMHB4IDBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxufVxyXG5pb24tcHJvZ3Jlc3MtYmFye2JvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0aGVpZ2h0OiAxOHB4O31cclxuXHQucHJvZ3Jlc3NfY29udGVudHtwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdHRvcDogLTNweDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdHotaW5kZXg6IDUwO1xyXG5cdFx0Y29sb3I6YmxhY2s7XHJcblx0fVxyXG5cclxuXHQucHJvZ3Jlc3NfY29udGFpbmVye1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHJcbmlvbi1jYXJkLWhlYWRlclxyXG57XHJcblx0YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1saWdodF9ncmF5X2Nscik7XHJcblx0cGFkZGluZy10b3A6OHB4O1xyXG5cdHBhZGRpbmctYm90dG9tOiA4cHg7O1xyXG59XHJcbi5tb19wcm9nX3Jvd1xyXG57XHJcblx0cGFkZGluZy10b3A6MTBweDtcclxuXHRwYWRkaW5nLWJvdHRvbToxMHB4O1xyXG5cdFxyXG5cdGlvbi1sYWJlbFxyXG5cdHtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0Y29sb3I6YmxhY2s7XHJcblx0fVxyXG5cdFxyXG59XHJcbi5wcm9nXHJcbntcclxuXHQtLWJhY2tncm91bmQ6IzRjYWY1MDtcclxufVxyXG5cclxuLmhvbWVfYnV0dG9uXHJcbntcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIC0tY29sb3I6ICMyYTJhMmE7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmY7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdG1hcmdpbi1sZWZ0OjE1cHg7XHJcbn0iLCIuZGF0ZXBpY2sge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTNlM2UzO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuXG5pb24tcHJvZ3Jlc3MtYmFyIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuXG4ucHJvZ3Jlc3NfY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogLTNweDtcbiAgbGVmdDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbiAgei1pbmRleDogNTA7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnByb2dyZXNzX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRfZ3JheV9jbHIpO1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuXG4ubW9fcHJvZ19yb3cge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4ubW9fcHJvZ19yb3cgaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnByb2cge1xuICAtLWJhY2tncm91bmQ6IzRjYWY1MDtcbn1cblxuLmhvbWVfYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAtLWNvbG9yOiAjMmEyYTJhO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/HO/dashboard-dsa/dashboard-dsa.page.ts":
/*!********************************************************!*\
  !*** ./src/app/HO/dashboard-dsa/dashboard-dsa.page.ts ***!
  \********************************************************/
/*! exports provided: DashboardDsaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardDsaPage", function() { return DashboardDsaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var DashboardDsaPage = /** @class */ (function () {
    function DashboardDsaPage(router, commonServices, datepipe, menu) {
        this.router = router;
        this.commonServices = commonServices;
        this.datepipe = datepipe;
        this.menu = menu;
        this.dsaData = { selcteddate: "" };
        this.secondMaxDate = new Date().toISOString();
        this.monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ];
        this.currentdate = new Date().toISOString().split('T')[0];
        if (this.dsaData.selcteddate == "") {
            this.currDate = this.currentdate;
            console.log(this.currDate);
            var dt = new Date(this.currDate);
            //IOS Comment
            // let latest_date = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
            // this.dsaData.selcteddate = latest_date;
            //IOS Add
            this.dsaData.selcteddate = this.datepipe.transform(dt, 'yyyy/MM/dd');
        }
        else {
            this.selectedDate = new Date(this.dsaData.selcteddate).setDate(new Date(this.dsaData.selcteddate).getDate());
            this.todayTime = new Date(this.currDate);
            this.month = this.todayTime.getMonth() + 1;
            this.day = this.todayTime.getDate();
            this.year = this.todayTime.getFullYear();
            this.FulllYear = this.year + "-" + this.month + "-" + this.day;
        }
        this.userid = localStorage.getItem("UID");
        this.getDsaData();
    }
    DashboardDsaPage.prototype.ngOnInit = function () {
    };
    DashboardDsaPage.prototype.openFirst = function () {
        this.menu.enable(true, 'menuCO');
        this.menu.open('menuCO');
    };
    DashboardDsaPage.prototype.getSelectedDate = function (datePicker) {
        console.log("datePicker", datePicker);
        var dt = new Date(datePicker);
        //IOS Comment
        //let latest_date = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        // this.dsaData.selcteddate = latest_date;
        //IOS Add
        this.dsaData.selcteddate = this.datepipe.transform(dt, 'yyyy/MM/dd');
        //datePicker.open();
        this.getDsaData();
    };
    DashboardDsaPage.prototype.getDsaData = function () {
        var self = this;
        // self.commonServices.loadingPresent();
        self.commonServices.post("CommonGetData", {
            Flag: 'StationSubmittedStatusForMO', Id: self.userid,
            // CDashdate: self.dsaData.selcteddate
            CDashdate: this.datepipe.transform(this.dsaData.selcteddate, 'dd/MMM/yyyy')
        }).subscribe(function (res) {
            var getdsaRes = JSON.parse(res);
            var dsrdashboard = getdsaRes.Table;
            if (dsrdashboard.length > 0) {
                self.dsaRes = dsrdashboard;
                console.log(self.dsaRes);
            }
            else {
                self.commonServices.presentToast("No data available.");
            }
            // self.commonServices.loadingDismiss();
        }, function (error) {
            console.log('Something went wrong.');
            // self.commonServices.loadingDismiss();
        });
    };
    DashboardDsaPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
    ]; };
    DashboardDsaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-dsa',
            template: __webpack_require__(/*! raw-loader!./dashboard-dsa.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/dashboard-dsa/dashboard-dsa.page.html"),
            styles: [__webpack_require__(/*! ./dashboard-dsa.page.scss */ "./src/app/HO/dashboard-dsa/dashboard-dsa.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
    ], DashboardDsaPage);
    return DashboardDsaPage;
}());



/***/ })

}]);
//# sourceMappingURL=HO-dashboard-dsa-dashboard-dsa-module-es5.js.map