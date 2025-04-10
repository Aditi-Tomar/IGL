(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["station-genral-entry-genral-entry-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/station/genral-entry/genral-entry.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/station/genral-entry/genral-entry.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<div class=\"main_heading1\">\r\n\t\t<div>\r\n\t\t\t<ion-back-button defaultHref=\"dpr-entry\"></ion-back-button>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<h1>Genral Entry</h1>\r\n\t\t</div>\r\n\t\t<div></div>\r\n\t</div>\r\n</ion-header>\r\n<ion-content>\r\n\t<div class=\"content_area\">\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t<label>Select Date\r\n\t\t\t\t\t\t\t<span class=\"star\">*</span>\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t<ion-label>Select Date:</ion-label>\r\n\t\t\t\t\t\t\t<ion-datetime #selcteddate class=\"datepick\" [max]=\"secondMaxDate\"\r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"geteDate.selcteddate\" displayFormat=\"DD-MMM-YYYY\"\r\n\t\t\t\t\t\t\t\tpickerFormat=\"DD MMM YYYY\"  name=\"selcteddate\"\r\n\t\t\t\t\t\t\t\t(ionChange)=\"getSelectedDate(selcteddate.value)\"></ion-datetime>\r\n\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<form class=\"myform\">\r\n\t\t\t<ion-grid>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<label>Number Of Buses</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-input type=\"text\" name=\"NOB\" [(ngModel)]=\"NOB\"></ion-input>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<label>Number Of LCV</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-input type=\"text\" name=\"NOL\" [(ngModel)]=\"NOL\"></ion-input>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<label>Energy Meter Reading (KVAH)</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-input type=\"text\" name=\"ENERGY\" [(ngModel)]= \"ENERGY\"></ion-input>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"button_container\">\r\n\t\t\t\t\t\t\t<ion-button color=\"dark_green_clr\"\r\n\t\t\t\t\t\t\t\t[hidden]=\"GEisStationSubmitted > 0  || GEisCRSentToHo > 0 \"\r\n\t\t\t\t\t\t\t\t(click)=\"InsertGeneralEntry()\" type=\"submit\">Save</ion-button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"msg\">\r\n\t\t\t\t\t\t\t<!-- /<span>* Data is submitted for the day</span> -->\r\n\t\t\t\t\t\t\t<p class=\"data_submit_msg\" [hidden]=\"GEisStationSubmitted == 0 \">* Data is submitted for the date {{geteDate.selcteddate}} by Station.</p>\r\n\t\t\t\t\t\t\t<p class=\"data_submit_msg\" [hidden]=\"GEisCRSentToHo == 0 \">* Submission is closed for date {{geteDate.selcteddate}} by Control Room.</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</ion-grid>\r\n\t\t</form>\r\n\t</div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/station/genral-entry/genral-entry-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/station/genral-entry/genral-entry-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: GenralEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenralEntryPageRoutingModule", function() { return GenralEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _genral_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./genral-entry.page */ "./src/app/station/genral-entry/genral-entry.page.ts");




var routes = [
    {
        path: '',
        component: _genral_entry_page__WEBPACK_IMPORTED_MODULE_3__["GenralEntryPage"]
    }
];
var GenralEntryPageRoutingModule = /** @class */ (function () {
    function GenralEntryPageRoutingModule() {
    }
    GenralEntryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], GenralEntryPageRoutingModule);
    return GenralEntryPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/station/genral-entry/genral-entry.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/station/genral-entry/genral-entry.module.ts ***!
  \*************************************************************/
/*! exports provided: GenralEntryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenralEntryPageModule", function() { return GenralEntryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _genral_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./genral-entry-routing.module */ "./src/app/station/genral-entry/genral-entry-routing.module.ts");
/* harmony import */ var _genral_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./genral-entry.page */ "./src/app/station/genral-entry/genral-entry.page.ts");







var GenralEntryPageModule = /** @class */ (function () {
    function GenralEntryPageModule() {
    }
    GenralEntryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _genral_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__["GenralEntryPageRoutingModule"]
            ],
            declarations: [_genral_entry_page__WEBPACK_IMPORTED_MODULE_6__["GenralEntryPage"]]
        })
    ], GenralEntryPageModule);
    return GenralEntryPageModule;
}());



/***/ }),

/***/ "./src/app/station/genral-entry/genral-entry.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/station/genral-entry/genral-entry.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpb24vZ2VucmFsLWVudHJ5L2dlbnJhbC1lbnRyeS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/station/genral-entry/genral-entry.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/station/genral-entry/genral-entry.page.ts ***!
  \***********************************************************/
/*! exports provided: GenralEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenralEntryPage", function() { return GenralEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var GenralEntryPage = /** @class */ (function () {
    function GenralEntryPage(formBuilder, router, activatedroute, commonServices, menu, dp) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedroute = activatedroute;
        this.commonServices = commonServices;
        this.menu = menu;
        this.dp = dp;
        this.showhideflag = false;
        this.hidelcv = true;
        this.geteDate = { selcteddate: "" };
        this.ENERGY = [];
        this.GEisCRSentToHo = 0;
        this.GEisStationSubmitted = 0;
        this.GELoginId = localStorage.getItem('LoginId');
        this.GEStationCode = localStorage.getItem('LoginId');
        this.StationCode = localStorage.getItem('LoginId');
        this.secondMaxDate = new Date().toISOString();
        this.monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ];
        this.LoginId = localStorage.getItem('LoginId');
        this.currentdate = new Date().toISOString().split('T')[0];
        this.currentTimeR = new Date().toISOString().split('T')[1].split('.')[0];
        if (this.geteDate.selcteddate == "") {
            this.currDate = this.currentdate;
            console.log(this.currDate);
            var dt = new Date(this.currDate);
            //IOS Comment
            // let latest_date = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
            // this.geteDate.selcteddate = latest_date;
            // this.DPREntryDateTime = this.dp.transform(this.geteDate.selcteddate, 'yyyy-MM-dd hh:mm:ss');
            // this.geteDate.selcteddate = this.DPREntryDateTime;
            this.DPREntryDateTime = this.dp.transform(dt, 'yyyy/MM/dd hh:mm:ss');
            this.geteDate.selcteddate = this.DPREntryDateTime;
            // this.DPREntryDateTime = this.currentdate + ' ' + this.currentTimeR;
            // this.geteDate.selcteddate = this.DPREntryDateTime;
            this.GetGeneralEntry();
        }
    }
    GenralEntryPage.prototype.getSelectedDate = function (datePicker) {
        console.log("datePicker", datePicker);
        var dt = new Date(datePicker);
        //IoS Comment
        // let latest_date = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        // this.geteDate.selcteddate = latest_date;
        // this.DPREntryDateTime = this.dp.transform(this.geteDate.selcteddate, 'yyyy-MM-dd hh:mm:ss');
        // this.geteDate.selcteddate = this.DPREntryDateTime;
        this.DPREntryDateTime = this.dp.transform(dt, 'yyyy/MM/dd hh:mm:ss');
        this.geteDate.selcteddate = this.DPREntryDateTime;
        // this.InsertGeneralEntry();
        this.GetGeneralEntry();
    };
    GenralEntryPage.prototype.ngOnInit = function () {
    };
    GenralEntryPage.prototype.openFirst = function () {
        this.menu.enable(true, 'menuStn');
        this.menu.open('menuStn');
    };
    ///////////////////////////////////////////////////Genral Entry code Start///////////////////////////////////////////////////////////////
    GenralEntryPage.prototype.GetGeneralEntry = function () {
        var _this = this;
        // this.commonServices.loadingPresent();
        this.commonServices.postwithservice("GetGeneralEntry", {
            StationCode: this.StationCode, LoginId: this.LoginId,
            DPREntryDate: this.dp.transform(this.geteDate.selcteddate, 'dd/MMM/yyyy')
            //DPREntryDate: this.geteDate.selcteddate
        }).subscribe(function (resp) {
            var data = JSON.parse(resp).Table;
            if (data.length > 0) {
                _this.generalEntryList = JSON.parse(resp).Table;
                _this.GEId = JSON.parse(resp).Table[0].GEID;
                _this.NOB = JSON.parse(resp).Table[0].NOB;
                _this.NOL = JSON.parse(resp).Table[0].NOL;
                _this.ENERGY = JSON.parse(resp).Table[0].ENERGY;
            }
            else {
                _this.generalEntryList = [];
                _this.GEId = 0;
                _this.NOB = '';
                _this.NOL = '';
                _this.ENERGY = '';
            }
            _this.GEisCRSentToHo = JSON.parse(resp).Table1[0].isCRSentToHo;
            _this.GEisStationSubmitted = JSON.parse(resp).Table2[0].isStationSubmitted;
            // this.commonServices.loadingDismiss();
        }, function (error) {
            _this.commonServices.presentToast("Something went wrong.");
            // this.commonServices.loadingDismiss();
        });
    };
    GenralEntryPage.prototype.InsertGeneralEntry = function () {
        var _this = this;
        // this.commonServices.loadingPresent();
        // var getJson = this.GetValidation(this.globalJson, this.generalEntryList);
        var getJson = this.GetValidation();
        if (getJson.error != '') {
            this.commonServices.presentToast(getJson.error);
            return false;
        }
        if (getJson.skipSave == true) {
            return false;
        }
        this.commonServices.loadingPresent();
        this.commonServices.postwithservice("InsertGeneralEntry", getJson.retJson).subscribe(function (resp) {
            console.log(resp);
            _this.commonServices.loadingDismiss();
            if (JSON.parse(resp)[0] != null)
                var retJson = JSON.parse(resp)[0];
            if (retJson.status == '1') {
                _this.generalEntryList = retJson;
                _this.commonServices.presentToast('Data Inserted Successfully.');
                _this.NOB = '';
                _this.NOL = '';
                _this.ENERGY = '';
            }
            else if (retJson.status == '2') {
                _this.commonServices.presentToast('Couldn\'t insert the record.');
            }
            else if (retJson.status == '3') {
                _this.commonServices.presentToast('Data updated Successfully.');
                _this.NOB = '';
                _this.NOL = '';
                _this.ENERGY = '';
            }
            else if (retJson.status == '4') {
                _this.commonServices.presentToast('Data for today is already Submitted.');
            }
            else {
                _this.commonServices.presentToast(retJson.Msg);
            }
            _this.GetGeneralEntry();
        }, function (error) {
            _this.commonServices.presentToast("Something went wrong.");
            _this.commonServices.loadingDismiss();
        });
    };
    // GetValidation(globalJson, generalEntryList)
    GenralEntryPage.prototype.GetValidation = function () {
        var re = new RegExp(/^[a-zA-Z ]*$/);
        var regexNumeric = /^[+-]?[0-9]{1,1000}(?:\.[0-9]{1,1000})?$/;
        var regexDecimalThree = /^[+-]?[0-9]{1,10}(?:\.[0-9]{1,3})?$/;
        var regIntegers = /^[1-9]\d*$/;
        var ErrorMsg = '', flagSS = false;
        // if (isUndefined(generalEntryList)) {
        //     return {
        //         error: ErrorMsg,
        //         retJson: retJson,
        //         skipSave: true
        //     };
        // }
        if (this.NOB != "" && Object(util__WEBPACK_IMPORTED_MODULE_6__["isUndefined"])(this.NOB) == false) {
            if (regexNumeric.test(this.NOB) == false) {
                ErrorMsg = 'Only numeric value allowed for Buses.';
            }
            else {
                //if (geJson.NOB.indexOf('.') > -1) {
                //    ErrorMsg = 'Decimal is not allowed.';
                //}
                var re = new RegExp(/^[0-9]*$/gm);
                if (!re.test(this.NOB)) {
                    ErrorMsg = 'Decimal is not allowed.';
                }
            }
        }
        else {
            ErrorMsg = 'Please enter  value.';
        }
        if (this.NOL != "" && Object(util__WEBPACK_IMPORTED_MODULE_6__["isUndefined"])(this.NOL) == false) {
            if (regexNumeric.test(this.NOL) == false) {
                ErrorMsg = 'Only numeric value allowed for LCV.';
            }
            else {
                // if (this.NOL.indexOf('.') > -1) {
                //    ErrorMsg = 'Decimal is not allowed.';
                // }
                var re = new RegExp(/^[0-9]*$/gm);
                if (!re.test(this.NOL)) {
                    ErrorMsg = 'Decimal is not allowed.';
                }
            }
        }
        else {
            ErrorMsg = 'Please enter value.';
        }
        if (this.ENERGY != "" && Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(this.ENERGY) == false) {
            if (regexNumeric.test(this.ENERGY) == false) {
                ErrorMsg = 'Only numeric value allowed for Energy Meter Reading.';
            }
        }
        else {
            ErrorMsg = 'Please enter Energy Meter Reading!';
        }
        var retJson = {
            GEID: this.GEId,
            LoginId: this.LoginId,
            StationCode: this.StationCode,
            NOB: this.NOB,
            NOL: this.NOL,
            DPREntryDate: this.DPREntryDateTime,
            ENERGY: this.ENERGY,
        };
        return {
            error: ErrorMsg,
            retJson: retJson,
            skipSave: false
        };
    };
    GenralEntryPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] }
    ]; };
    GenralEntryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-genral-entry',
            template: __webpack_require__(/*! raw-loader!./genral-entry.page.html */ "./node_modules/raw-loader/index.js!./src/app/station/genral-entry/genral-entry.page.html"),
            styles: [__webpack_require__(/*! ./genral-entry.page.scss */ "./src/app/station/genral-entry/genral-entry.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]])
    ], GenralEntryPage);
    return GenralEntryPage;
}());



/***/ })

}]);
//# sourceMappingURL=station-genral-entry-genral-entry-module-es5.js.map