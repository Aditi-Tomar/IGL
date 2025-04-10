(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["station-staton-status-staton-status-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/station/staton-status/staton-status.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/station/staton-status/staton-status.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <header>\r\n    <div class=\"header\">\r\n      <div class=\"logo_div\" routerLink=\"/home\">\r\n        <img src=\"../../assets/images/logo.png\" />\r\n      </div>\r\n      <span class=\"logout_div\">\r\n        <div class=\"toggle_div\">\r\n          <button (click)=\"openFirst()\">\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n          </button>\r\n        </div>\r\n      </span>\r\n    </div>\r\n  </header>\r\n  <div class=\"main_heading1\">\r\n    <div>\r\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n    </div>\r\n    <div>\r\n      <h1>Station Status</h1>\r\n    </div>\r\n    <div></div>\r\n  </div>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"content_area\">\r\n    <div class=\"mycard\">\r\n      <form>\r\n        <div class=\"form_inp_container\">\r\n          <div class=\"label_container\">\r\n            <label>Date From</label>\r\n          </div>\r\n          <div class=\"input_container\">\r\n            <ion-item>\r\n              <ion-label>Select Date:</ion-label>\r\n              <ion-datetime #selcteddateFrom class=\"inp_control date\" displayFormat=\"DD-MMM-YYYY\"\r\n                pickerFormat=\"DD MMM YYYY\" [ngModel]=\"DateFrom\" name=\"selcteddateForm\" [max]=\"secondMaxDate\"\r\n                (ngModelChange)=\"OnDateChnageFrom(selcteddateFrom.value)\"></ion-datetime>\r\n            </ion-item>\r\n          </div>\r\n        </div>\r\n        <div class=\"form_inp_container\">\r\n          <div class=\"label_container\">\r\n            <label>Date To</label>\r\n          </div>\r\n          <div class=\"input_container\">\r\n            <ion-item>\r\n              <ion-label>Select Date:</ion-label>\r\n              <ion-datetime #selcteddateTo class=\"inp_control date\" displayFormat=\"DD-MMM-YYYY\"\r\n                pickerFormat=\"DD MMM YYYY\" [ngModel]=\"DateTo\" name=\"selcteddateTo\" [max]=\"secondMaxDate\"\r\n                [min]=\"DateFromMy\" (ngModelChange)=\"OnDateChnageTo(selcteddateTo.value)\"></ion-datetime>\r\n            </ion-item>\r\n          </div>\r\n        </div>\r\n        <div class=\"form_inp_container\">\r\n          <div class=\"label_container\">\r\n            <label>Status</label>\r\n          </div>\r\n          <div class=\"input_container\">\r\n            <ion-list>\r\n              <ion-radio-group name=\"StatusFlag\" (ionChange)=\"statusChange($event)\" [(ngModel)]=\"StatusFlag\">\r\n                <ion-item>\r\n                  <ion-label>Operational</ion-label>\r\n                  <ion-radio slot=\"start\" value=\"Active\" checked></ion-radio>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>Non Operational</ion-label>\r\n                  <ion-radio slot=\"start\" value=\"InActive\"></ion-radio>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-list>\r\n          </div>\r\n        </div>\r\n        <div class=\"form_inp_container\">\r\n          <div class=\"label_container\">\r\n            <label>Shift (From)</label>\r\n          </div>\r\n          <div class=\"input_container\">\r\n            <ion-select placeholder=\"Select One\" name=\"optShiftId\" [(ngModel)]='SelectedShiftId'\r\n              (ionChange)=\"onShiftSelect($event.detail.value)\"\r\n              style=\"padding-top: 8px;padding-bottom: 8px;background-color: white;padding-right: 10px;\">\r\n              <ion-select-option *ngFor=\"let itm of ShiftList\" [value]=\"itm.ShiftId\">{{itm.ShiftDetails}}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form_inp_container\">\r\n          <div class=\"label_container\">\r\n            <label>Sub Shift (From)</label>\r\n          </div>\r\n          <div class=\"input_container\">\r\n            <ion-select placeholder=\"Select One\" name=\"optSubShiftId\" [(ngModel)]='SubShiftId'\r\n              style=\"padding-top: 8px;padding-bottom: 8px;background-color: white;padding-right: 10px;\">\r\n              <ion-select-option *ngFor=\"let itm of SubShiftList\" [value]=\"itm.SubShiftId\">{{itm.SubShiftDetails}}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form_inp_container\">\r\n          <div class=\"label_container\">\r\n            <label>Shift (To)</label>\r\n          </div>\r\n          <div class=\"input_container\">\r\n            <ion-select placeholder=\"Select One\" name=\"optShiftId\" [(ngModel)]='SelectedShiftId_To'\r\n              (ionChange)=\"onShiftSelect_To($event.detail.value)\"\r\n              style=\"padding-top: 8px;padding-bottom: 8px;background-color: white;padding-right: 10px;\">\r\n              <ion-select-option *ngFor=\"let itm of ShiftList\" [value]=\"itm.ShiftId\">{{itm.ShiftDetails}}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form_inp_container\">\r\n          <div class=\"label_container\">\r\n            <label>Sub Shift (To)</label>\r\n          </div>\r\n          <div class=\"input_container\">\r\n            <ion-select placeholder=\"Select One\" name=\"optSubShiftId\" [(ngModel)]='SubShiftId_To'\r\n              style=\"padding-top: 8px;padding-bottom: 8px;background-color: white;padding-right: 10px;\">\r\n              <ion-select-option *ngFor=\"let itm of SubShiftList_To\" [value]=\"itm.SubShiftId\">{{itm.SubShiftDetails}}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form_inp_container\">\r\n          <div class=\"label_container\">\r\n            <label>Remark</label>\r\n          </div>\r\n          <div class=\"input_container\">\r\n            <ion-textarea name=\"remark\" [value]=\"Remark\" (ionInput)=\"Remark=$event.target.value\"></ion-textarea>\r\n          </div>\r\n        </div>\r\n        <ion-row>\r\n          <ion-col>\r\n            <div class=\"button_container\">\r\n              <ion-button color=\"dark_green_clr\" (click)=\"insertRecord();\">Save</ion-button>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/station/staton-status/staton-status-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/station/staton-status/staton-status-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: StatonStatusPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatonStatusPageRoutingModule", function() { return StatonStatusPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _staton_status_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staton-status.page */ "./src/app/station/staton-status/staton-status.page.ts");




var routes = [
    {
        path: '',
        component: _staton_status_page__WEBPACK_IMPORTED_MODULE_3__["StatonStatusPage"]
    }
];
var StatonStatusPageRoutingModule = /** @class */ (function () {
    function StatonStatusPageRoutingModule() {
    }
    StatonStatusPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], StatonStatusPageRoutingModule);
    return StatonStatusPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/station/staton-status/staton-status.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/station/staton-status/staton-status.module.ts ***!
  \***************************************************************/
/*! exports provided: StatonStatusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatonStatusPageModule", function() { return StatonStatusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _staton_status_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./staton-status-routing.module */ "./src/app/station/staton-status/staton-status-routing.module.ts");
/* harmony import */ var _staton_status_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./staton-status.page */ "./src/app/station/staton-status/staton-status.page.ts");







var StatonStatusPageModule = /** @class */ (function () {
    function StatonStatusPageModule() {
    }
    StatonStatusPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _staton_status_routing_module__WEBPACK_IMPORTED_MODULE_5__["StatonStatusPageRoutingModule"]
            ],
            declarations: [_staton_status_page__WEBPACK_IMPORTED_MODULE_6__["StatonStatusPage"]]
        })
    ], StatonStatusPageModule);
    return StatonStatusPageModule;
}());



/***/ }),

/***/ "./src/app/station/staton-status/staton-status.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/station/staton-status/staton-status.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mycard {\n  padding: 0px 7px;\n}\n\n.inp_control.armlist {\n  display: inline-block;\n  text-align: center !important;\n}\n\n.header-title ion-row {\n  padding-left: 2%;\n}\n\n.inp_control.coins div {\n  display: inherit;\n}\n\nion-col, ion-grid {\n  padding-left: 0;\n  padding-right: 0;\n}\n\nion-card {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.inp_control {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvc3RhdGlvbi9zdGF0b24tc3RhdHVzL3N0YXRvbi1zdGF0dXMucGFnZS5zY3NzIiwic3JjL2FwcC9zdGF0aW9uL3N0YXRvbi1zdGF0dXMvc3RhdG9uLXN0YXR1cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQkFBQTtBQ0FKOztBREdBO0VBRUkscUJBQUE7RUFDSiw2QkFBQTtBQ0RBOztBRElBO0VBQXNCLGdCQUFBO0FDQXRCOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFBaUIsZ0JBQUE7QUNHckI7O0FEREE7RUFDSSxjQUFBO0VBQWdCLGVBQUE7QUNLcEI7O0FERkE7RUFBYSxZQUFBO0FDTWIiLCJmaWxlIjoic3JjL2FwcC9zdGF0aW9uL3N0YXRvbi1zdGF0dXMvc3RhdG9uLXN0YXR1cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXljYXJkIFxyXG57XHJcbiAgICBwYWRkaW5nOiAwcHggN3B4O1xyXG59XHJcblxyXG4uaW5wX2NvbnRyb2wuYXJtbGlzdCB7XHJcbiAgXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbnRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItdGl0bGUgaW9uLXJvd3twYWRkaW5nLWxlZnQ6IDIlO31cclxuXHJcbi5pbnBfY29udHJvbC5jb2lucyBkaXZ7XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG59XHJcbmlvbi1jb2wsIGlvbi1ncmlke1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwOyBwYWRkaW5nLXJpZ2h0OiAwOztcclxufVxyXG5pb24tY2FyZHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwOyBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5pbnBfY29udHJvbHtib3JkZXI6bm9uZTt9IiwiLm15Y2FyZCB7XG4gIHBhZGRpbmc6IDBweCA3cHg7XG59XG5cbi5pbnBfY29udHJvbC5hcm1saXN0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci10aXRsZSBpb24tcm93IHtcbiAgcGFkZGluZy1sZWZ0OiAyJTtcbn1cblxuLmlucF9jb250cm9sLmNvaW5zIGRpdiB7XG4gIGRpc3BsYXk6IGluaGVyaXQ7XG59XG5cbmlvbi1jb2wsIGlvbi1ncmlkIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5pbnBfY29udHJvbCB7XG4gIGJvcmRlcjogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/station/staton-status/staton-status.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/station/staton-status/staton-status.page.ts ***!
  \*************************************************************/
/*! exports provided: StatonStatusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatonStatusPage", function() { return StatonStatusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var StatonStatusPage = /** @class */ (function () {
    function StatonStatusPage(router, activatedroute, commonServices, menu, dp) {
        this.router = router;
        this.activatedroute = activatedroute;
        this.commonServices = commonServices;
        this.menu = menu;
        this.dp = dp;
        this.SelectedShiftId_To = '';
        this.SubShiftId_To = '';
        this.listData = [];
        this.exportList = [];
        this.ShiftList = [];
        this.SubShiftList = [];
        this.flag = '';
        this.DSMCode = '';
        this.DSMName = '';
        this.selectedDSMnameId = '';
        this.errMsg = '';
        this.DSMPopup = false;
        this.StatusIsfalse = false;
        this.key = 'Name';
        this.reverse = true;
        this.filter = '';
        this.Id = "0";
        this.sortingColumn = "";
        this.DSMId = "";
        this.DS = true;
        this.Status = '';
        this.selectedStation = '';
        this.SelectedShiftId = '';
        this.SubShiftId = '';
        this.Remark = '';
        this.CurrentDate = '';
        this.StatusFlag = 'InActive';
        this.monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ];
        this.secondMaxDate = new Date().toISOString();
        this.DateFromMy = new Date().toISOString().split('T')[0];
        var dt = new Date();
        this.CurrentDate = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        this.DateFrom = new Date().toLocaleDateString();
        this.DateTo = new Date().toLocaleDateString();
        this.StationId = localStorage.getItem('StationId');
    }
    StatonStatusPage.prototype.ngOnInit = function () {
        this.getShift();
        // this.getData();
    };
    StatonStatusPage.prototype.openFirst = function () {
        this.menu.enable(true, 'menuStn');
        this.menu.open('menuStn');
    };
    StatonStatusPage.prototype.getData = function () {
        var self = this;
        self.commonServices.post("CommonGetData", { Flag: 'StationStatus', Id: self.Id,
            Status: self.StationId }).subscribe(function (res) {
            self.listData = JSON.parse(res).Table;
            console.log(self.listData, "StationStatus");
            self.Id = self.listData[0].Id;
            self.DateFrom = self.listData[0].FromDate;
            self.DateTo = self.listData[0].ToDate;
            self.StatusFlag = self.listData[0].Status;
            self.SelectedShiftId = self.listData[0].ShiftId;
            self.SubShiftId = self.listData[0].SubShiftId;
            self.Remark = self.listData[0].Remark;
        }, function (error) {
            self.commonServices.presentToast("Something went wrong.");
        });
    };
    StatonStatusPage.prototype.getShift = function () {
        var self = this;
        self.commonServices.post("CommonGetData", { Flag: 'StationShift', Id: 0, Status: 1 }).subscribe(function (res) {
            self.ShiftList = JSON.parse(res).Table;
            console.log(self.ShiftList, "ShiftList");
        }, function (error) {
            self.commonServices.presentToast("Something went wrong.");
        });
    };
    StatonStatusPage.prototype.getSubShift = function () {
        var self = this;
        self.commonServices.post("CommonGetData", { Flag: 'SubShift', Id: self.SelectedShiftId, Status: 1 }).subscribe(function (res) {
            self.SubShiftList = JSON.parse(res).Table;
            console.log(self.SubShiftList, "SubShiftList");
        }, function (error) {
            self.commonServices.presentToast("Something went wrong.");
        });
    };
    StatonStatusPage.prototype.getSubShift_To = function () {
        var _this = this;
        var self = this;
        self.commonServices.post("CommonGetData", { Flag: 'SubShift', Id: this.SelectedShiftId_To, Status: 1 }).subscribe(function (resp) {
            _this.SubShiftList_To = JSON.parse(resp).Table;
            console.log(_this.SubShiftList_To, "SubShiftList");
        }, function (error) {
            self.commonServices.presentToast("Something went wrong.");
        });
    };
    StatonStatusPage.prototype.onShiftSelect = function (val) {
        var self = this;
        self.SelectedShiftId = val;
        self.getSubShift();
    };
    StatonStatusPage.prototype.onShiftSelect_To = function (val) {
        this.SelectedShiftId_To = val;
        this.getSubShift_To();
    };
    StatonStatusPage.prototype.OnDateChnageFrom = function (val) {
        var self = this;
        var dt = new Date(val);
        this.DateFromMy = val.split('T')[0];
        //Ios Comment
        //self.DateFrom= dt.getDate() + "/" + self.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        //IOS Add
        self.DateFrom = this.dp.transform(dt, 'yyyy/MM/dd');
        console.log(self.DateFrom);
    };
    StatonStatusPage.prototype.OnDateChnageTo = function (val) {
        var self = this;
        var dt = new Date(val);
        //Ios Comment
        //self.DateTo= dt.getDate() + "/" + self.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        //IOS Add
        self.DateTo = this.dp.transform(dt, 'yyyy/MM/dd');
        console.log(self.DateTo);
    };
    StatonStatusPage.prototype.statusChange = function (val) {
        this.StatusFlag = val.detail.value;
    };
    StatonStatusPage.prototype.insertRecord = function () {
        var self = this;
        self.errorFound = true;
        if (self.Validation()) {
            var obj = {
                Id: self.Id,
                // FromDate : self.DateFrom,
                // ToDate : self.DateTo,
                FromDate: this.dp.transform(self.DateFrom, 'dd/MMM/yyyy'),
                ToDate: this.dp.transform(self.DateTo, 'dd/MMM/yyyy'),
                ShiftId: self.SelectedShiftId,
                SubShiftId: self.SubShiftId,
                flag: self.StatusFlag,
                StationIDs: self.StationId,
                Remark: self.Remark,
                ShiftId_To: this.SelectedShiftId_To,
                SubShiftId_To: this.SubShiftId_To
            };
            self.commonServices.loadingPresent();
            self.commonServices.post("InsertStationStatus", obj).subscribe(function (res) {
                var data = JSON.parse(res);
                console.log(data.Table[0].Mesage, "Success");
                if (data.Table[0].Mesage == "Record Update successfully." || data.Table[0].Mesage == "Record Inserted successfully.") {
                    self.getData();
                    self.StatusFlag = 'InActive';
                }
                self.commonServices.presentToast(data.Table[0].Mesage);
                self.commonServices.loadingDismiss();
            }, function (error) {
                self.commonServices.presentToast('Something went wrong.');
                self.commonServices.loadingDismiss();
            });
        }
    };
    StatonStatusPage.prototype.Validation = function () {
        var self = this;
        self.OnDateChnageFrom(self.DateFrom);
        // self.OnDateChnageFrom(self.DateFrom);
        self.OnDateChnageTo(self.DateTo);
        if (self.StatusFlag == '' || Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(self.StatusFlag)) {
            self.commonServices.presentToast('Status must be selected.');
            self.errorFound = false;
        }
        // else if(this.DateFrom < this.CurrentDate){
        //   alert('Date must be curent or future.');
        //   this.errorFound = false;
        // }
        else if ((new Date(self.DateTo)) < (new Date(self.DateFrom))) {
            self.commonServices.presentToast('DateTo must be greater then DateFrom.');
            self.errorFound = false;
        }
        // else if(this.SubShiftId == ''){
        //   alert('Sub Shift must Slected.');
        //   this.errorFound = false;
        // }
        else if (self.Remark == '') {
            self.commonServices.presentToast('Remark must be entered.');
            self.errorFound = false;
        }
        return self.errorFound;
    };
    StatonStatusPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] }
    ]; };
    StatonStatusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-staton-status',
            template: __webpack_require__(/*! raw-loader!./staton-status.page.html */ "./node_modules/raw-loader/index.js!./src/app/station/staton-status/staton-status.page.html"),
            styles: [__webpack_require__(/*! ./staton-status.page.scss */ "./src/app/station/staton-status/staton-status.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]])
    ], StatonStatusPage);
    return StatonStatusPage;
}());



/***/ })

}]);
//# sourceMappingURL=station-staton-status-staton-status-module-es5.js.map