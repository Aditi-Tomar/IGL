(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["jmr-jmr-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/jmr/jmr.page.html":
/*!*************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/jmr/jmr.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n  <div class=\"main_heading1\">\r\n\t\t<div>\r\n\t\t\t<ion-back-button defaultHref=\"home\"></ion-back-button>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<h1>JMR - Report Management</h1>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<ion-button color=\"light\" size=\"small\" (click)=\"GetExportJMRreports()\">\r\n\t\t\t\t<i class=\"fas fa-file-excel\"></i>\r\n\t\t\t</ion-button>\r\n\t\t\t<ion-button color=\"light\" size=\"small\" (click)=\"GetPDF()\">\r\n\t\t\t\t<i class=\"fa-solid fa-file-pdf\"></i>\r\n\t\t\t</ion-button>\r\n\t\t</div>\r\n\t</div>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\t<ion-segment color=\"success\" [value]=\"selectedSegment\" (ionChange)=\"segmentChanged($event)\" *ngIf=\"Buttondisp\">\r\n\t\t<ion-segment-button value=\"jmrtotal\">\r\n\t\t  <ion-label>Total Sale</ion-label>\r\n\t\t</ion-segment-button>\r\n\t\t<ion-segment-button value=\"diswise\">\r\n\t\t  <ion-label>E-Detail</ion-label>\r\n\t\t</ion-segment-button>\r\n\t</ion-segment>\r\n\r\n\t<div class=\"content_area\">\r\n\t\t<div class=\"mycard\">\r\n\t\t  <!-- Year Selector -->\r\n\t\t  <div class=\"form_inp_container\">\r\n\t\t\t<div class=\"label_container\">\r\n\t\t\t  <label>Select Year</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"input_container\">\r\n\t\t\t  <ion-item>\r\n\t\t\t\t<ion-label>Select Year:</ion-label>\r\n\t\t\t\t<ion-datetime\r\n\t\t\t\t  displayFormat=\"YYYY\"\r\n\t\t\t\t  pickerFormat=\"YYYY\"\r\n\t\t\t\t  [ngModel]=\"selectedYear\"\r\n\t\t\t\t  (ngModelChange)=\"onYearChange($event)\"\r\n\t\t\t\t  [min]=\"minYear\"\r\n\t\t\t\t  [max]=\"secondMaxDate\">\r\n\t\t\t\t  \r\n\t\t\t\t</ion-datetime>\r\n\t\t\t  </ion-item>\r\n\t\t\t</div>\r\n\t\t  </div>\r\n\t\r\n\t\t  <div class=\"form_inp_container\" >\r\n\t\t\t<div class=\"label_container\">\r\n\t\t\t  <label>Select Month</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"input_container\">\r\n\t\t\t\t<ion-select name=\"selectedMonth\" (ionChange)=\"onMonthChange($event)\" >\r\n\t\t\t\t  <ion-select-option value=\"\" selected>--Select--</ion-select-option>\r\n\t\t\t\t  <ion-select-option value=\"Jan\">January</ion-select-option>\r\n\t\t\t\t  <ion-select-option value=\"Feb\">February</ion-select-option>\r\n\t\t\t\t  <ion-select-option value=\"Mar\">March</ion-select-option>\r\n\t\t\t\t  <ion-select-option value=\"Apr\">April</ion-select-option>\r\n\t\t\t\t  <ion-select-option value=\"May\">May</ion-select-option>\r\n\t\t\t\t  <ion-select-option value=\"Jun\">June</ion-select-option>\r\n\t\t\t\t  <ion-select-option value=\"Jul\">July</ion-select-option>\r\n\t\t\t\t  <ion-select-option value=\"Aug\">August</ion-select-option>\r\n\t\t\t\t  <ion-select-option value=\"Sep\">September</ion-select-option>\r\n\t\t\t\t  <ion-select-option value=\"Oct\">October</ion-select-option>\r\n\t\t\t\t  <ion-select-option value=\"Nov\">November</ion-select-option>\r\n\t\t\t\t  <ion-select-option value=\"Dec\">December</ion-select-option>\r\n\t\t\t\t</ion-select>\r\n\t\t\t\t</div>\r\n\t\t  </div>\r\n\t\r\n\t\t  <!-- Fortnight Selector -->\r\n\t\t  <div class=\"form_inp_container\">\r\n\t\t\t<div class=\"label_container\">\r\n\t\t\t  <label>Select Fortnight</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"input_container\">\r\n\t\t\t\t<ion-select name=\"selectedFortnight\" (ionChange)=\"onFortnightChange($event)\">\r\n\t\t\t\t\t<ion-select-option value=\"\" selected>--Select--</ion-select-option>\r\n\t\t\t\t\t<ion-select-option value=\"Fortnight1\">Fortnight 1</ion-select-option>\r\n\t\t\t\t\t<ion-select-option value=\"Fortnight2\">Fortnight 2</ion-select-option>\r\n\t\t\t\t  </ion-select>\r\n\t\t\t</div>\r\n\t\t  </div>\r\n\r\n\t\t  <div class=\"button_container\">\r\n\t\t\t<ion-button color=\"dark_green_clr\" (click)=\"OnSubmit()\" *ngIf=\"isStationSubmitted\">Submit</ion-button>\r\n\t\t  </div>\r\n\r\n\t  <ion-grid *ngIf=\"columns.length > 0\">\r\n\t\t<ion-row>\r\n\t\t  <ion-col>\r\n\t\t\t<div class=\"my_table_container\">\r\n\t\t\t  <table class=\"my_table\" >\r\n\t\t\t\t<thead>\r\n\t\t\t\t  <tr>\r\n\t\t\t\t\t<th >Sr. No.</th>\r\n\t\t\t\r\n\t\t\t\t\t<th *ngFor=\"let column of columns \">\r\n\t\t\t\t\t  {{column}}\r\n\t\t\t\t\t</th>\r\n\t\t\t\t  </tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t  <tr *ngFor=\"let row of ResponseList; let i = index\" \r\n\t\t\t\t\tclass=\"divTableCell\">\r\n\t\t\t\t\t<td>{{i + 1}}</td>\r\n\t\t\t\t\t<td *ngFor=\"let column of columns\">\r\n\t\t\t\t\t  {{row[column]}}\r\n\t\t\t\t\t</td>\r\n\t\t\t\t  </tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t  </table>\r\n\t\t\t</div>\r\n\t\t  </ion-col>\r\n\t\t</ion-row>\r\n\t  </ion-grid>\r\n\r\n\t  <div >\r\n\t\t<div *ngIf=\"!isStationSubmitted\" class=\"save_all_btn_div text-center\">\r\n\t\t  <span style=\"color:red;font-size:14pt;font-weight:bolder;\">{{Msg}}</span>\r\n\t\t</div>\r\n\t  </div>\r\n\r\n\t</div>\r\n</div>\r\n\t  \r\n\t  \r\n\t  \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/jmr/jmr-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/jmr/jmr-routing.module.ts ***!
  \*******************************************/
/*! exports provided: JMRPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JMRPageRoutingModule", function() { return JMRPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _jmr_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jmr.page */ "./src/app/jmr/jmr.page.ts");




var routes = [
    {
        path: '',
        component: _jmr_page__WEBPACK_IMPORTED_MODULE_3__["JMRPage"]
    }
];
var JMRPageRoutingModule = /** @class */ (function () {
    function JMRPageRoutingModule() {
    }
    JMRPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], JMRPageRoutingModule);
    return JMRPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/jmr/jmr.module.ts":
/*!***********************************!*\
  !*** ./src/app/jmr/jmr.module.ts ***!
  \***********************************/
/*! exports provided: JMRPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JMRPageModule", function() { return JMRPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _jmr_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jmr-routing.module */ "./src/app/jmr/jmr-routing.module.ts");
/* harmony import */ var _jmr_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jmr.page */ "./src/app/jmr/jmr.page.ts");







var JMRPageModule = /** @class */ (function () {
    function JMRPageModule() {
    }
    JMRPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _jmr_routing_module__WEBPACK_IMPORTED_MODULE_5__["JMRPageRoutingModule"]
            ],
            declarations: [_jmr_page__WEBPACK_IMPORTED_MODULE_6__["JMRPage"]]
        })
    ], JMRPageModule);
    return JMRPageModule;
}());



/***/ }),

/***/ "./src/app/jmr/jmr.page.scss":
/*!***********************************!*\
  !*** ./src/app/jmr/jmr.page.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ptci9qbXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/jmr/jmr.page.ts":
/*!*********************************!*\
  !*** ./src/app/jmr/jmr.page.ts ***!
  \*********************************/
/*! exports provided: JMRPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JMRPage", function() { return JMRPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");






var JMRPage = /** @class */ (function () {
    function JMRPage(router, menu, commonservice) {
        this.router = router;
        this.menu = menu;
        this.commonservice = commonservice;
        this.isStationSubmitted = true;
        this.selectedSegment = 'jmrtotal';
        this.selectedMonth = '';
        this.selectedFortnight = '';
        this.selectedYear = new Date().getFullYear().toString();
        this.columns = [];
        this.Buttondisp = false;
        var today = new Date();
        this.secondMaxDate = today.getFullYear().toString();
        this.minYear = '2020';
        this.ControlRoomCode = localStorage.getItem('stationCode');
        this.stationid = localStorage.getItem('StationId');
        console.log(this.stationid);
        console.log(this.ControlRoomCode);
    }
    JMRPage.prototype.ngOnInit = function () {
        this.GetStationCompany();
    };
    JMRPage.prototype.openFirst = function () {
        this.menu.enable(true, 'menuStn');
        this.menu.open('menuStn');
    };
    JMRPage.prototype.GetStationCompany = function () {
        var _this = this;
        this.commonservice.post('CommonGetData', { Flag: 'CompanyByStation', Id: this.stationid, Status: 1 }).subscribe(function (resp) {
            _this.CompanyName = JSON.parse(resp).Table[0].CompanyName;
            console.log(_this.CompanyName, 'Company');
            _this.CheckCompany();
        }, function (error) {
            alert("Something went wrong.");
        });
    };
    JMRPage.prototype.CheckCompany = function () {
        if (this.CompanyName == 'IGL' || this.CompanyName == 'DODO' || this.CompanyName == 'DTC' || this.CompanyName == 'DIMTS') {
            this.Buttondisp = true;
        }
        else {
            this.Buttondisp = false;
        }
        console.log(this.Buttondisp);
    };
    JMRPage.prototype.segmentChanged = function (event) {
        this.selectedSegment = event.detail.value; // Update the value when segment changes
        console.log('Selected Segment:', this.selectedSegment);
        if (this.selectedSegment === 'jmrtotal') {
            console.log('Handling jmrtotal');
            this.ResponseList = this.TotalSale;
            this.columns = this.columnstotal;
        }
        else if (this.selectedSegment === 'diswise') {
            this.ResponseList = this.DisWIse;
            this.columns = this.columnsdiswise;
        }
        else {
            this.columns = [];
            this.commonservice.presentToast('No Data found');
        }
    };
    JMRPage.prototype.onYearChange = function (event) {
        var selectedYear = new Date(event).getFullYear(); // Get the full year
        console.log('Selected Year:', selectedYear);
        this.selectedYear = selectedYear.toString();
        this.onReportShow();
        this.CheckStatusOfStation();
    };
    JMRPage.prototype.onMonthChange = function (event) {
        this.selectedMonth = event.target.value;
        console.log('Selected Month:', this.selectedMonth);
        this.onReportShow();
        if (this.ValidationReports()) {
            this.CheckStatusOfStation();
        }
    };
    // Handle fortnight change event
    JMRPage.prototype.onFortnightChange = function (event) {
        this.selectedfortnight = event.target.value;
        console.log('Selected Fortnight:', this.selectedfortnight);
        this.onReportShow();
        this.CheckStatusOfStation();
    };
    JMRPage.prototype.ValidationReports = function () {
        this.errorFound = true;
        if (this.selectedMonth == "" || Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.selectedMonth)) {
            this.commonservice.presentToast('Please select Month.!');
            this.errorFound = false;
        }
        else if (this.selectedfortnight == "" || Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.selectedfortnight)) {
            this.commonservice.presentToast('Please select Fornight.!');
            this.errorFound = false;
        }
        return this.errorFound;
    };
    JMRPage.prototype.onReportShow = function () {
        var _this = this;
        // this.visible=!this.visible;
        var dt = new Date();
        if (this.selectedMonth == "Jan") {
            var month = 0;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Feb") {
            var month = 1;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Mar") {
            var month = 2;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Apr") {
            var month = 3;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "May") {
            var month = 4;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "June") {
            var month = 5;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        if (this.selectedMonth == "July") {
            var month = 6;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Aug") {
            var month = 7;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Sep") {
            var month = 8;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Oct") {
            var month = 9;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Nov") {
            var month = 10;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Dec") {
            var month = 11;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        {
            if (this.selectedfortnight == "Fortnight1") {
                this.dateFrom = "01-" + this.selectedMonth + "-" + this.selectedYear;
                this.dateTo = "15-" + this.selectedMonth + "-" + this.selectedYear;
                console.log(this.dateFrom);
                console.log(this.dateTo);
            }
            else {
                var date = new Date();
                this.dateFrom = "16-" + this.selectedMonth + "-" + this.selectedYear;
                this.dateTo = d + "-" + this.selectedMonth + "-" + this.selectedYear;
                console.log(this.dateTo, 'shrutielse');
            }
        }
        if (this.ValidationReports()) {
            var obj = {
                ControlRoomCode: this.ControlRoomCode,
                flag: 'StationReport',
                FromDate: this.dateFrom,
                ToDate: this.dateTo,
            };
            console.log(obj);
            if (this.selectedMonth != null && this.selectedfortnight != null) {
                this.commonservice.postwithservice('ExportJMRReportStationsView', obj).subscribe(function (resp) {
                    _this.ResponseList = JSON.parse(resp).Table;
                    console.log("response", _this.ResponseList);
                    _this.ResponseList = JSON.parse(resp).Table;
                    _this.TotalSale = JSON.parse(resp).Table;
                    _this.TotalSale = JSON.parse(resp).Table;
                    _this.DisWIse = JSON.parse(resp).Table1;
                    if (_this.TotalSale.length != 0 || _this.DisWIse.length != 0) {
                        _this.columns = Object.keys(_this.ResponseList[0]);
                        console.log(_this.columns);
                        _this.columnstotal = Object.keys(_this.TotalSale[0]);
                        _this.columnsdiswise = Object.keys(_this.DisWIse[0]);
                    }
                    else {
                        _this.columns = [];
                        _this.commonservice.presentToast('No Data found');
                    }
                    if (_this.ResponseList.length != 0) {
                        _this.columns = Object.keys(_this.ResponseList[0]);
                    }
                    else {
                        _this.columns = [];
                        _this.commonservice.presentToast('No Data found');
                    }
                }, function (error) {
                    _this.commonservice.presentToast('Something went wrong.');
                });
            }
            else {
                this.commonservice.presentToast('Please Select Reporting Date.');
            }
        }
    };
    JMRPage.prototype.CheckStatusOfStation = function () {
        var _this = this;
        var dt = new Date();
        if (this.selectedMonth == "Jan") {
            var month = 0;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Feb") {
            var month = 1;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Mar") {
            var month = 2;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Apr") {
            var month = 3;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "May") {
            var month = 4;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "June") {
            var month = 5;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        if (this.selectedMonth == "July") {
            var month = 6;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Aug") {
            var month = 7;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Sep") {
            var month = 8;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Oct") {
            var month = 9;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Nov") {
            var month = 10;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Dec") {
            var month = 11;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        {
            if (this.selectedfortnight == "Fortnight1") {
                this.dateFrom = "01-" + this.selectedMonth + "-" + this.selectedYear;
                this.dateTo = "15-" + this.selectedMonth + "-" + this.selectedYear;
            }
            else {
                var date = new Date();
                this.dateFrom = "16-" + this.selectedMonth + "-" + this.selectedYear;
                this.dateTo = d + "-" + this.selectedMonth + "-" + this.selectedYear;
            }
        }
        var obj = {
            ControlRoomCode: this.ControlRoomCode,
            flag: 'SubmitByStation',
            FromDate: this.dateFrom,
            ToDate: this.dateTo,
        };
        console.log(obj);
        this.commonservice.postwithservice('CheckStatusOfStation', obj).subscribe(function (response) {
            var data = JSON.parse(response);
            console.log(data);
            if (data.Table[0].Status == '1') {
                _this.isStationSubmitted = false;
                _this.Msg = data.Table[0].Message;
                console.log(_this.Msg);
                return false;
            }
            else {
                _this.isStationSubmitted = true;
                _this.Msg = "";
            }
            // this.objDbServ.ShowLoaders.emit(false);
        }, function (error) { _this.commonservice.presentToast("Something went wrong."); });
    };
    JMRPage.prototype.OnSubmit = function () {
        var _this = this;
        var dt = new Date();
        if (this.selectedMonth == "Jan") {
            var month = 0;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Feb") {
            var month = 1;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Mar") {
            var month = 2;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Apr") {
            var month = 3;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "May") {
            var month = 4;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "June") {
            var month = 5;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        if (this.selectedMonth == "July") {
            var month = 6;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Aug") {
            var month = 7;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Sep") {
            var month = 8;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Oct") {
            var month = 9;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Nov") {
            var month = 10;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Dec") {
            var month = 11;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        {
            if (this.selectedfortnight == "Fortnight1") {
                this.dateFrom = "01-" + this.selectedMonth + "-" + this.selectedYear;
                this.dateTo = "15-" + this.selectedMonth + "-" + this.selectedYear;
            }
            else {
                var date = new Date();
                this.dateFrom = "16-" + this.selectedMonth + "-" + this.selectedYear;
                this.dateTo = d + "-" + this.selectedMonth + "-" + this.selectedYear;
            }
        }
        if (this.ValidationReports()) {
            var obj = {
                ControlRoomCode: this.ControlRoomCode,
                flag: 'SubmitByStation',
                FromDate: this.dateFrom,
                ToDate: this.dateTo,
            };
            this.commonservice.postwithservice('SubmitByStation', obj).subscribe(function (response) {
                var data = JSON.parse(response);
                console.log(data);
                if (data.Status == '2') {
                    _this.isStationSubmitted = false;
                    //alert('Data is already submitted.');
                    return false;
                }
                if (data.Status == '1') {
                    _this.isStationSubmitted = false;
                    _this.commonservice.presentToast('Data is submitted.');
                    _this.CheckStatusOfStation();
                    return false;
                }
            }, function (error) {
                console.log('something went wrong.');
            });
        }
    };
    JMRPage.prototype.GetExportJMRreports = function () {
        var _this = this;
        var dt = new Date();
        if (this.selectedMonth == "Jan") {
            var month = 0;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Feb") {
            var month = 1;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Mar") {
            var month = 2;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Apr") {
            var month = 3;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "May") {
            var month = 4;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "June") {
            var month = 5;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        if (this.selectedMonth == "July") {
            var month = 6;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Aug") {
            var month = 7;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Sep") {
            var month = 8;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Oct") {
            var month = 9;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Nov") {
            var month = 10;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Dec") {
            var month = 11;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        {
            if (this.selectedfortnight == "Fortnight1") {
                this.dateFrom = "01-" + this.selectedMonth + "-" + this.selectedYear;
                this.dateTo = "15-" + this.selectedMonth + "-" + this.selectedYear;
                console.log('shruti', this.dateFrom);
                console.log('shruti', this.dateTo);
            }
            else {
                var date = new Date();
                this.dateFrom = "16-" + this.selectedMonth + "-" + this.selectedYear;
                this.dateTo = d + "-" + this.selectedMonth + "-" + this.selectedYear;
                console.log(this.dateTo, 'shrutielse');
            }
        }
        if (this.ValidationReports()) {
            var obj = {
                ControlRoomCode: this.ControlRoomCode,
                flag: 'Export',
                FromDate: this.dateFrom,
                ToDate: this.dateTo,
            };
            {
                if (this.selectedMonth != null && this.selectedfortnight != null) {
                    this.commonservice.postwithservice('ExportJMRReportstations', obj).subscribe(function (resp) {
                        var data = JSON.parse(resp);
                        console.log(data);
                        if (data.FileName != '') {
                            if (JSON.parse(resp).errMsg == 'success') {
                                window.location.href = _this.commonservice.apiImageAttachment + "/Attachments/Excel/" + JSON.parse(resp).FileName;
                            }
                            else {
                                _this.commonservice.presentToast(JSON.parse(resp).errMsg);
                            }
                        }
                        else {
                            _this.commonservice.presentToast("No Data found.!");
                        }
                    }, function (error) {
                        _this.commonservice.presentToast('Something went wrong.');
                    });
                }
                else {
                    alert('Please Select Reporting Date.');
                }
            }
        }
    };
    JMRPage.prototype.GetPDF = function () {
        var _this = this;
        var dt = new Date();
        if (this.selectedMonth == "Jan") {
            var month = 0;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Feb") {
            var month = 1;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Mar") {
            var month = 2;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Apr") {
            var month = 3;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "May") {
            var month = 4;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "June") {
            var month = 5;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        if (this.selectedMonth == "July") {
            var month = 6;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Aug") {
            var month = 7;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Sep") {
            var month = 8;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Oct") {
            var month = 9;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Nov") {
            var month = 10;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        else if (this.selectedMonth == "Dec") {
            var month = 11;
            var d = new Date(dt.getFullYear(), month + 1, 0).getDate();
        }
        {
            if (this.selectedfortnight == "Fortnight1") {
                this.dateFrom = "01-" + this.selectedMonth + "-" + this.selectedYear;
                this.dateTo = "15-" + this.selectedMonth + "-" + this.selectedYear;
                console.log('shruti', this.dateFrom);
                console.log('shruti', this.dateTo);
            }
            else {
                var date = new Date();
                this.dateFrom = "16-" + this.selectedMonth + "-" + this.selectedYear;
                this.dateTo = d + "-" + this.selectedMonth + "-" + this.selectedYear;
                console.log(this.dateTo, 'shrutielse');
            }
        }
        if (this.ValidationReports()) {
            var obj = {
                ControlRoomCode: this.ControlRoomCode,
                flag: 'Export',
                FromDate: this.dateFrom,
                ToDate: this.dateTo,
            };
            {
                if (this.selectedMonth != null && this.selectedfortnight != null) {
                    this.commonservice.postwithservice('GetPdFReport', obj).subscribe(function (resp) {
                        var data = JSON.parse(resp);
                        console.log(data);
                        // if(data != 'No Data Available') {
                        console.log(data);
                        var PdfUrl = "";
                        PdfUrl = _this.commonservice.baseUrl.substring(0, _this.commonservice.baseUrl.length - 4) + JSON.parse(resp);
                        console.log(PdfUrl);
                        window.location.href = PdfUrl;
                        // const FileSaver = require('file-saver');
                        // FileSaver.saveAs(PdfUrl);
                        // }
                        // else {
                        //   alert(data);
                        // }
                    }, function (error) {
                        alert('Something went wrong.');
                    });
                }
                else {
                    alert('Please Select Reporting Date.');
                }
            }
        }
    };
    JMRPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }
    ]; };
    JMRPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jmr',
            template: __webpack_require__(/*! raw-loader!./jmr.page.html */ "./node_modules/raw-loader/index.js!./src/app/jmr/jmr.page.html"),
            styles: [__webpack_require__(/*! ./jmr.page.scss */ "./src/app/jmr/jmr.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])
    ], JMRPage);
    return JMRPage;
}());



/***/ })

}]);
//# sourceMappingURL=jmr-jmr-module-es5.js.map