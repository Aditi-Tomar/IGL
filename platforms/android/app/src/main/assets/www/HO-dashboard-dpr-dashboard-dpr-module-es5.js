(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-dashboard-dpr-dashboard-dpr-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/dashboard-dpr/dashboard-dpr.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/dashboard-dpr/dashboard-dpr.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/admin-home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<h1 class=\"text_white text_center title\">Dashboard DPR</h1>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<ion-grid>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col size=\"2\">\r\n\t\t\t\t<ion-back-button defaultHref=\"dashboard\"></ion-back-button>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"6\" offset=\"1\">\r\n\t\t\t\t<ion-datetime #selcteddate class=\"datepick\" displayFormat=\"DD-MMM-YYYY\" pickerFormat=\"DD MMM YYYY\"\r\n\t\t\t\t\t[(ngModel)]=\"dprData.selcteddate\" name=\"selcteddate\" [max]=\"secondMaxDate\"\r\n\t\t\t\t\t(ngModelChange)=\"getSelectedDate(selcteddate.value)\"></ion-datetime>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row *ngFor=\"let dpritem of dprRes\">\r\n\t\t\t<ion-col>\r\n\t\t\t\t<div class=\"prog_row\">\r\n\t\t\t\t\t<div class=\"prog_heading\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<h5>{{dpritem.ControlRoomName}}</h5>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<span *ngIf=\"dpritem.Per == 100\">\r\n\t\t\t\t\t\t\t\t<ion-icon name=\"checkmark-circle\"></ion-icon>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span *ngIf=\"dpritem.Per != 100\">\r\n\t\t\t\t\t\t\t\t<ion-icon name=\"alert\" class=\"red\"></ion-icon>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"ion-text-center\"><ion-text>{{dpritem.Per}} %</ion-text></div>\r\n\t\t\t\t\t<div class=\"progress_container\">\r\n\t\t\t\t\t\t<span class=\"progress_content\">\r\n\t\t\t\t\t\t\t{{dpritem.SubmittedStationCountbyCO}}/{{dpritem.totalStation}}\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<div class=\"myprogress\">\r\n\t\t\t\t\t\t\t<ion-progress-bar class=\"prog\" [style.width]=\"dpritem.Per + '%'\">\r\n\t\t\t\t\t\t\t</ion-progress-bar>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/HO/dashboard-dpr/dashboard-dpr-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/HO/dashboard-dpr/dashboard-dpr-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: DashboardDprPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardDprPageRoutingModule", function() { return DashboardDprPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dpr_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-dpr.page */ "./src/app/HO/dashboard-dpr/dashboard-dpr.page.ts");




var routes = [
    {
        path: '',
        component: _dashboard_dpr_page__WEBPACK_IMPORTED_MODULE_3__["DashboardDprPage"]
    }
];
var DashboardDprPageRoutingModule = /** @class */ (function () {
    function DashboardDprPageRoutingModule() {
    }
    DashboardDprPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DashboardDprPageRoutingModule);
    return DashboardDprPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/HO/dashboard-dpr/dashboard-dpr.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/HO/dashboard-dpr/dashboard-dpr.module.ts ***!
  \**********************************************************/
/*! exports provided: DashboardDprPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardDprPageModule", function() { return DashboardDprPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_dpr_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-dpr-routing.module */ "./src/app/HO/dashboard-dpr/dashboard-dpr-routing.module.ts");
/* harmony import */ var _dashboard_dpr_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-dpr.page */ "./src/app/HO/dashboard-dpr/dashboard-dpr.page.ts");







var DashboardDprPageModule = /** @class */ (function () {
    function DashboardDprPageModule() {
    }
    DashboardDprPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _dashboard_dpr_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardDprPageRoutingModule"]
            ],
            declarations: [_dashboard_dpr_page__WEBPACK_IMPORTED_MODULE_6__["DashboardDprPage"]]
        })
    ], DashboardDprPageModule);
    return DashboardDprPageModule;
}());



/***/ }),

/***/ "./src/app/HO/dashboard-dpr/dashboard-dpr.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/HO/dashboard-dpr/dashboard-dpr.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".datepick {\n  border: 1px solid #e3e3e3;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  border-radius: 20px;\n  background-color: #f7f7f7;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);\n}\n\nion-progress-bar {\n  border-radius: 20px;\n  height: 18px;\n}\n\n.progress_content {\n  position: absolute;\n  right: 0;\n  top: -3px;\n  left: 0;\n  text-align: center;\n  margin: 0 auto;\n  z-index: 50;\n  color: black;\n}\n\n.progress_container {\n  position: relative;\n}\n\n.prog {\n  --background:#4caf50;\n}\n\n.home_button {\n  --background: #ffffff;\n  --color: #2a2a2a;\n  --background-hover: #fff;\n  font-size: 14px;\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvSE8vZGFzaGJvYXJkLWRwci9kYXNoYm9hcmQtZHByLnBhZ2Uuc2NzcyIsInNyYy9hcHAvSE8vZGFzaGJvYXJkLWRwci9kYXNoYm9hcmQtZHByLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwyQ0FBQTtBQ0NOOztBRENBO0VBQWlCLG1CQUFBO0VBQ2hCLFlBQUE7QUNHRDs7QURGQztFQUFrQixrQkFBQTtFQUNqQixRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ01GOztBREhDO0VBQ0Msa0JBQUE7QUNNRjs7QURIQztFQUVDLG9CQUFBO0FDS0Y7O0FERkM7RUFFRyxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDSCxlQUFBO0VBQ0EsaUJBQUE7QUNJRCIsImZpbGUiOiJzcmMvYXBwL0hPL2Rhc2hib2FyZC1kcHIvZGFzaGJvYXJkLWRwci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0ZXBpY2t7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTNlM2UzO1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogNXB4O1xyXG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG5cdFx0XHRcdFx0XHRib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG59XHJcbmlvbi1wcm9ncmVzcy1iYXJ7Ym9yZGVyLXJhZGl1czogMjBweDtcclxuXHRoZWlnaHQ6IDE4cHg7fVxyXG5cdC5wcm9ncmVzc19jb250ZW50e3Bvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0dG9wOiAtM3B4O1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0ei1pbmRleDogNTA7XHJcblx0XHRjb2xvcjpibGFjaztcclxuXHR9XHJcblxyXG5cdC5wcm9ncmVzc19jb250YWluZXJ7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cclxuXHQucHJvZ1xyXG5cdHtcclxuXHRcdC0tYmFja2dyb3VuZDojNGNhZjUwO1xyXG5cdH1cclxuXHJcblx0LmhvbWVfYnV0dG9uXHJcbntcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIC0tY29sb3I6ICMyYTJhMmE7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmY7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdG1hcmdpbi1sZWZ0OjE1cHg7XHJcbn0iLCIuZGF0ZXBpY2sge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTNlM2UzO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuXG5pb24tcHJvZ3Jlc3MtYmFyIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuXG4ucHJvZ3Jlc3NfY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogLTNweDtcbiAgbGVmdDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbiAgei1pbmRleDogNTA7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnByb2dyZXNzX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnByb2cge1xuICAtLWJhY2tncm91bmQ6IzRjYWY1MDtcbn1cblxuLmhvbWVfYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAtLWNvbG9yOiAjMmEyYTJhO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/HO/dashboard-dpr/dashboard-dpr.page.ts":
/*!********************************************************!*\
  !*** ./src/app/HO/dashboard-dpr/dashboard-dpr.page.ts ***!
  \********************************************************/
/*! exports provided: DashboardDprPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardDprPage", function() { return DashboardDprPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");






var DashboardDprPage = /** @class */ (function () {
    function DashboardDprPage(router, commonServices, datepipe, menu) {
        this.router = router;
        this.commonServices = commonServices;
        this.datepipe = datepipe;
        this.menu = menu;
        this.dprData = { selcteddate: "" };
        this.secondMaxDate = new Date().toISOString();
        this.monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ];
        this.currentdate = new Date().toISOString().split('T')[0];
        if (this.dprData.selcteddate == "") {
            this.currDate = this.currentdate;
            console.log(this.currDate);
            var dt = new Date(this.currDate);
            //IOS Comment
            // let latest_date = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
            // this.dprData.selcteddate = latest_date;
            //IOS Add
            this.dprData.selcteddate = this.datepipe.transform(dt, 'yyyy/MM/dd');
        }
        else {
            this.selectedDate = new Date(this.dprData.selcteddate).setDate(new Date(this.dprData.selcteddate).getDate());
            this.todayTime = new Date(this.currDate);
            this.month = this.todayTime.getMonth() + 1;
            this.day = this.todayTime.getDate();
            this.year = this.todayTime.getFullYear();
            this.FulllYear = this.year + "-" + this.month + "-" + this.day;
        }
        this.userid = localStorage.getItem("UID");
        this.getDsaData();
    }
    DashboardDprPage.prototype.homeRedirect = function () {
        this.router.navigate(['admin-home']);
    };
    DashboardDprPage.prototype.ngOnInit = function () {
    };
    DashboardDprPage.prototype.openFirst = function () {
        this.menu.enable(true, 'menuCO');
        this.menu.open('menuCO');
    };
    DashboardDprPage.prototype.getSelectedDate = function (datePicker) {
        console.log("datePicker", datePicker);
        var dt = new Date(datePicker);
        //IOS Comment
        // let latest_date = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        // this.dprData.selcteddate = latest_date;
        //IOS Add
        this.dprData.selcteddate = this.datepipe.transform(dt, 'yyyy/MM/dd');
        //datePicker.open();
        this.getDsaData();
    };
    DashboardDprPage.prototype.getDsaData = function () {
        var self = this;
        // self.commonServices.loadingPresent();
        self.commonServices.postwithservice("GetDashBoardHO", {
            // Cdate: self.dprData.selcteddate 
            Cdate: this.datepipe.transform(this.dprData.selcteddate, 'dd/MMM/yyyy')
        }).
            subscribe(function (res) {
            var getdsaRes = JSON.parse(res);
            var dsrdashboard = getdsaRes.Table;
            if (dsrdashboard.length > 0) {
                self.dprRes = dsrdashboard;
                console.log(self.dprRes);
            }
            else {
                self.commonServices.presentToast("No data available.");
            }
            // self.commonServices.loadingDismiss();
        }, function (error) {
            self.commonServices.presentToast('Something went wrong.');
            // self.commonServices.loadingDismiss();
        });
    };
    DashboardDprPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] }
    ]; };
    DashboardDprPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dashboard-dpr',
            template: __webpack_require__(/*! raw-loader!./dashboard-dpr.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/dashboard-dpr/dashboard-dpr.page.html"),
            styles: [__webpack_require__(/*! ./dashboard-dpr.page.scss */ "./src/app/HO/dashboard-dpr/dashboard-dpr.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])
    ], DashboardDprPage);
    return DashboardDprPage;
}());



/***/ })

}]);
//# sourceMappingURL=HO-dashboard-dpr-dashboard-dpr-module-es5.js.map