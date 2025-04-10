(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["station-dpr-dispenser-entry-dpr-dispenser-entry-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/station/dpr-dispenser-entry/dpr-dispenser-entry.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/station/dpr-dispenser-entry/dpr-dispenser-entry.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<!-- <button class=\"home_btn\" routerLink=\"/home\">\r\n\t\t\t\t<img src=\"../../assets/images/home.png\" />\r\n\t\t\t</button> -->\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<div class=\"main_heading1\">\r\n\t\t<div>\r\n\t\t\t<ion-back-button defaultHref=\"home\"></ion-back-button>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<h1>Dispenser Entry</h1>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t</div>\r\n\t</div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<div class=\"content_area\">\r\n\t\t<div class=\"mycard over_y_auto\">\r\n\t\t\t<form [formGroup]=\"addupdateform\">\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col class=\"ion-text-right\">\r\n\t\t\t\t\t\t<ion-label><strong>Current Rate:</strong>{{CurrentRate}}</ion-label>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t<label>Date</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t<ion-datetime #selcteddate class=\"datepick\" formControlName=\"EntryDate\" [max]=\"secondMaxDate\"\r\n\t\t\t\t\t\t\tdisplayFormat=\"DD-MMM-YYYY\" pickerFormat=\"DD MMM YYYY\" name=\"selcteddate\"\r\n\t\t\t\t\t\t\t(ionChange)=\"getSelectedDate(selcteddate.value)\">\r\n\t\t\t\t\t\t</ion-datetime>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<!-- <div class=\"form_inp_container\">\r\n\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t<label>Shift</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t<ion-select placeholder=\"Select One\" (ionChange)=\"onSelectShift($event.detail.value)\" \r\n\t\t\t\t\t\t\tformControlName=\"selectedShiftId\" [(ngModel)]=\"selectedShiftId\" [disabled]=\"shiftsubshift\"> \r\n\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let itm1 of cmbShiftData;\" [value]=\"itm1.ShiftId\" >\r\n\t\t\t\t\t\t\t\t{{itm1.ShiftDetails}}</ion-select-option>\r\n\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t<label>Sub Shift</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<ion-select placeholder=\"Select One\" (ionChange)=\"onSelectSubShift($event.detail.value)\"\r\n\t\t\t\t\t\t\tinterface=\"alert\" formControlName=\"selectedSubShiftId\" [(ngModel)]=\"selectedSubShiftId\"  [disabled]=\"shiftsubshift\">\r\n\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let itm of cmbSubShiftData;\" [value]=\"itm.SubShiftId\">\r\n\t\t\t\t\t\t\t\t{{itm.SubShiftDetails}}</ion-select-option>\r\n\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>  -->\r\n\t\t\t</form>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<div class=\"form_inp_container\" style=\"width: 100%;\">\r\n\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t<label>Shift</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t\t<select interface=\"alert\" (change)=\"onSelectShift($event.target.value)\" name=\"optShift\" class=\"form-control\" [(ngModel)]=\"selectedShiftId\" [disabled]=\"shiftsubshift\">\r\n\t\t\t\t\t\t\t<option value=\"-1\" selected>--Select Shift--</option>\r\n\t\t\t\t\t\t\t<option *ngFor=\"let itm1 of cmbShiftData;\" [value]=\"itm1.ShiftId\">{{itm1.ShiftDetails}}</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<div class=\"form_inp_container\" style=\"width: 100%;\">\r\n\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t<label>Sub Shift</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t<select (change)=\"onSelectSubShift($event.target.value)\" name=\"optSubShift\"  class=\"form-control\"  [(ngModel)]=\"selectedSubShiftId\" [disabled]=\"shiftsubshift\">\r\n\t\t\t\t\t\t\t<option value=\"-1\" selected>--Select Sub Shift--</option>\r\n\t\t\t\t\t\t\t<option *ngFor=\"let itm of cmbSubShiftData;\" [value]=\"itm.SubShiftId\">{{itm.SubShiftDetails}}</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-row>\r\n\t\t\t<div *ngFor=\"let itm of allDispenserData;let i=index\">\r\n\t\t\t\t<div class=\"card_box\">\r\n\t\t\t\t\t<div class=\"card_heading\">\r\n\t\t\t\t\t\t<h5>\r\n\t\t\t\t\t\t\t<span class=\"span1\">\r\n\t\t\t\t\t\t\t\t<span>{{i+1}} </span>{{itm.DispenserName}}\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"span2\">\r\n\t\t\t\t\t\t\t\t<ion-icon name=\"apps\" (click)=\"getvalues(itm)\" [hidden]=\"jumppopup\"></ion-icon>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"card_content\">\r\n\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Prev A</label>\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-col class=\"text_right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>{{itm.PreArmReadingA}}</label>\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-input type=\"text\" placeholder=\"Arm A\" min=\"0\" [disabled]=\"jumppopup\"\r\n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"itm.ArmReadingA\" (keypress)=\"numberOnly($event)\"\r\n\t\t\t\t\t\t\t\t\t\t\t(ionChange)=\"OnchangeA(itm)\"\r\n\t\t\t\t\t\t\t\t\t\t\t(change)=\"validation1(itm.ArmReadingA,itm.PreArmReadingA)\" required>\r\n\t\t\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t\t\t\t<!-- (focusout)=\"onChangeRishabh(itm)\" -->\r\n\t\t\t\t\t\t\t\t\t\t<!-- (ionInput)=\"OnchangeA(itm)\" -->\r\n\t\t\t\t\t\t\t\t\t\t<!-- (keypress)=\"numberOnly($event)\"  -->\r\n\t\t\t\t\t\t\t\t\t\t<!-- (change)=\"validation1(itm.ArmReadingA,itm.PreArmReadingA)\"  -->\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Prev B</label>\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-col class=\"text_right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>{{itm.PreArmReadingB}}</label>\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-input type=\"text\" placeholder=\"Arm B\" min=\"0\" name=\"ArmB\"\r\n\t\t\t\t\t\t\t\t\t\t\t[disabled]=\"jumppopup\" [(ngModel)]=\"itm.ArmReadingB\"\r\n\t\t\t\t\t\t\t\t\t\t\t(keypress)=\"numberOnly($event)\" (ionChange)=\"OnchangeB(itm)\"\r\n\t\t\t\t\t\t\t\t\t\t\t(change)=\"validation2(itm.ArmReadingB,itm.PreArmReadingB)\" required>\r\n\t\t\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row class=\"bottom_label_row\">\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"bottom_label_cont\">\r\n\t\t\t\t\t\t\t\t\t<label>Arm A Sale</label>\r\n\t\t\t\t\t\t\t\t\t<span>{{itm.TotA}}</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"bottom_label_cont\">\r\n\t\t\t\t\t\t\t\t\t<label>Arm B Sale</label>\r\n\t\t\t\t\t\t\t\t\t<span>{{itm.TotB}}</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"bottom_label_cont\">\r\n\t\t\t\t\t\t\t\t\t<label>Total Sale</label>\r\n\t\t\t\t\t\t\t\t\t<span>{{itm.FinalTot}}</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div *ngIf=\"isDispencerLocked\" class=\"button_container\">\r\n\t\t\t\t<ion-button expand=\"block\" color=\"dark_green_clr\" (click)=\"saveAll()\">Save All\r\n\t\t\t\t</ion-button>\r\n\t\t\t</div>\r\n\t\t\t<div *ngIf=\"!isDispencerLocked\">\r\n\t\t\t\t<h1  style=\"color: red; text-align: center; \">{{DispLockMsg}}</h1>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/station/dpr-dispenser-entry/dpr-dispenser-entry-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/station/dpr-dispenser-entry/dpr-dispenser-entry-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: DprDispenserEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DprDispenserEntryPageRoutingModule", function() { return DprDispenserEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dpr_dispenser_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dpr-dispenser-entry.page */ "./src/app/station/dpr-dispenser-entry/dpr-dispenser-entry.page.ts");




const routes = [
    {
        path: '',
        component: _dpr_dispenser_entry_page__WEBPACK_IMPORTED_MODULE_3__["DprDispenserEntryPage"]
    }
];
let DprDispenserEntryPageRoutingModule = class DprDispenserEntryPageRoutingModule {
};
DprDispenserEntryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DprDispenserEntryPageRoutingModule);



/***/ }),

/***/ "./src/app/station/dpr-dispenser-entry/dpr-dispenser-entry.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/station/dpr-dispenser-entry/dpr-dispenser-entry.module.ts ***!
  \***************************************************************************/
/*! exports provided: DprDispenserEntryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DprDispenserEntryPageModule", function() { return DprDispenserEntryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dpr_dispenser_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dpr-dispenser-entry-routing.module */ "./src/app/station/dpr-dispenser-entry/dpr-dispenser-entry-routing.module.ts");
/* harmony import */ var _dpr_dispenser_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dpr-dispenser-entry.page */ "./src/app/station/dpr-dispenser-entry/dpr-dispenser-entry.page.ts");







let DprDispenserEntryPageModule = class DprDispenserEntryPageModule {
};
DprDispenserEntryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dpr_dispenser_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__["DprDispenserEntryPageRoutingModule"]
        ],
        declarations: [_dpr_dispenser_entry_page__WEBPACK_IMPORTED_MODULE_6__["DprDispenserEntryPage"]]
    })
], DprDispenserEntryPageModule);



/***/ }),

/***/ "./src/app/station/dpr-dispenser-entry/dpr-dispenser-entry.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/station/dpr-dispenser-entry/dpr-dispenser-entry.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card_box {\n  border: none;\n  margin-bottom: 15px;\n  border: 1px solid var(--gray_clr);\n  border-top: none;\n}\n\n.card_heading {\n  background-color: var(--green_clr);\n}\n\n.card_heading h5 {\n  font-size: 17px;\n  padding: 11px 8px;\n  color: var(--light_gray_clr);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.card_heading h5 .span2 {\n  font-size: 21px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.bottom_label_cont {\n  border-radius: 2px;\n  background: #f6f6f6;\n  border-radius: 5px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);\n}\n\n.bottom_label_cont label, .bottom_label_cont span {\n  display: block;\n  text-align: center;\n}\n\n.bottom_label_cont label {\n  background: var(--black_clr);\n  text-align: center;\n  font-size: 15px;\n  color: white;\n}\n\n.bottom_label_row {\n  background-color: var(--gray_clr);\n}\n\n.container {\n  border: 1px solid;\n  height: 52px;\n  border-radius: 1px;\n}\n\n.form-control {\n  width: 100%;\n  height: 48px;\n  border: none;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvc3RhdGlvbi9kcHItZGlzcGVuc2VyLWVudHJ5L2Rwci1kaXNwZW5zZXItZW50cnkucGFnZS5zY3NzIiwic3JjL2FwcC9zdGF0aW9uL2Rwci1kaXNwZW5zZXItZW50cnkvZHByLWRpc3BlbnNlci1lbnRyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0FDQUo7O0FERUE7RUFFSSxrQ0FBQTtBQ0FKOztBREVBO0VBRUksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0FKOztBREVBO0VBRUksZUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNBSjs7QURNQTtFQUVJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FDSko7O0FETUE7RUFFSSxjQUFBO0VBQ0Esa0JBQUE7QUNKSjs7QURNQTtFQUVJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0pKOztBRFdBO0VBRUksaUNBQUE7QUNUSjs7QURZQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDVEo7O0FEWUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1RKIiwiZmlsZSI6InNyYy9hcHAvc3RhdGlvbi9kcHItZGlzcGVuc2VyLWVudHJ5L2Rwci1kaXNwZW5zZXItZW50cnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRfYm94XHJcbntcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgdmFyKC0tZ3JheV9jbHIpO1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxufVxyXG4uY2FyZF9oZWFkaW5nXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tZ3JlZW5fY2xyKTtcclxufVxyXG4uY2FyZF9oZWFkaW5nIGg1XHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHBhZGRpbmc6IDExcHggOHB4O1xyXG4gICAgY29sb3I6dmFyKC0tbGlnaHRfZ3JheV9jbHIpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmNhcmRfaGVhZGluZyBoNSAuc3BhbjJcclxue1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmNhcmRfYm94IC5jYXJkX2NvbnRlbnRcclxue1xyXG4gICAgLy8gcGFkZGluZzogMTFweCA4cHg7XHJcbn1cclxuLmJvdHRvbV9sYWJlbF9jb250XHJcbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJhY2tncm91bmQ6ICNmNmY2ZjY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG59XHJcbi5ib3R0b21fbGFiZWxfY29udCBsYWJlbCwuYm90dG9tX2xhYmVsX2NvbnQgc3BhblxyXG57XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYm90dG9tX2xhYmVsX2NvbnQgbGFiZWxcclxue1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2tfY2xyKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuLmJvdHRvbV9sYWJlbF9jb250IHNwYW5cclxue1xyXG4gICAgXHJcbn1cclxuLmJvdHRvbV9sYWJlbF9yb3dcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1ncmF5X2Nscik7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGhlaWdodDogNTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59IiwiLmNhcmRfYm94IHtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5X2Nscik7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbi5jYXJkX2hlYWRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbl9jbHIpO1xufVxuXG4uY2FyZF9oZWFkaW5nIGg1IHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBwYWRkaW5nOiAxMXB4IDhweDtcbiAgY29sb3I6IHZhcigtLWxpZ2h0X2dyYXlfY2xyKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2FyZF9oZWFkaW5nIGg1IC5zcGFuMiB7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJvdHRvbV9sYWJlbF9jb250IHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG5cbi5ib3R0b21fbGFiZWxfY29udCBsYWJlbCwgLmJvdHRvbV9sYWJlbF9jb250IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYm90dG9tX2xhYmVsX2NvbnQgbGFiZWwge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibGFja19jbHIpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYm90dG9tX2xhYmVsX3JvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXlfY2xyKTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBoZWlnaHQ6IDUycHg7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/station/dpr-dispenser-entry/dpr-dispenser-entry.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/station/dpr-dispenser-entry/dpr-dispenser-entry.page.ts ***!
  \*************************************************************************/
/*! exports provided: DprDispenserEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DprDispenserEntryPage", function() { return DprDispenserEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








let DprDispenserEntryPage = class DprDispenserEntryPage {
    constructor(formBuilder, router, activatedroute, commonServices, menu, dp) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedroute = activatedroute;
        this.commonServices = commonServices;
        this.menu = menu;
        this.dp = dp;
        this.DispenserDate = { selcteddate: "" };
        this.secondMaxDate = new Date().toISOString();
        this.cnt = 0;
        this.armA = '';
        this.armAPrevReading = '';
        this.armB = '';
        this.armBPrevReading = '';
        this.UpdateArmA = '';
        this.UpdateArmB = '';
        this.remark = '';
        this.prevReadingA = '';
        this.prevReadingB = '';
        this.jumpReadingA = '';
        this.jumpReadingB = '';
        this.ArmASale = '0.00';
        this.ArmBSale = '0.00';
        this.TArmSale = '0.00';
        this.oldvalueA = '';
        this.oldvalueB = '';
        this.errorFlag = false;
        this.before = '';
        this.after = '';
        this.popupFlag = false;
        this.UpdateFlag = false;
        this.popupFor = "ArmA";
        this.StationId = '';
        this.JumpSide = '';
        this.CashCollection = 0.0;
        this.IsJumpSelected = false;
        this.JumpType = '';
        this.FileName = '';
        this.IsFileSelected = false;
        this.allDispenserData = [];
        this.listJumpedReading = [];
        this.armSide = "armA";
        this.dispId = 0;
        this.jumppopup = true;
        this.isDispencerLocked = true;
        this.DispLockMsg = '';
        this.showNext = true;
        this.showPrevious = true;
        this.totalDispenser = 0;
        this.dispCounterIndex = 0;
        this.DispencerCount = 0;
        //listDispensers:{DispenserName,DispenserId,StationId}[];
        this.selectedDispId = 0;
        this.selectedShiftId = '-1';
        //cmbSubShiftData:{SubShiftId,SubShiftDetails}[];
        this.selectedSubShiftId = '-1';
        this.SubShiftCount = 0;
        this.SubShiftCurrentCount = 0;
        this.CurrentRate = '0.00';
        this.NormalRate = '0.00';
        this.DiscountedRate = '0.00';
        this.StationCode = localStorage.getItem('LoginId');
        this.DispanserJumpId = '';
        this.stationName = "";
        this.CompanyName = '';
        this.SummeryDate = '';
        this.selectedStation = 0;
        this.shiftsubshift = false;
        this.ArmAReadingAverage = '';
        this.ArmBReadingAverage = '';
        // jumpReadingPop() {
        //   this.router.navigate(['jump-reading-pop']);
        // }
        this.monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ];
        this.currentdate = new Date().toISOString().split('T')[0];
        if (this.DispenserDate.selcteddate == "") {
            this.currDate = this.currentdate;
            console.log(this.currDate);
            const dt = new Date(this.currDate);
            //IOS Comment
            // let latest_date = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
            // this.DispenserDate.selcteddate = latest_date;
            //IOS Add
            this.DispenserDate.selcteddate = this.dp.transform(dt, 'yyyy/MM/dd');
            this.SummeryDate = this.dp.transform(dt, 'yyyy/MM/dd');
            console.log(this.DispenserDate.selcteddate);
        }
        this.addupdateform = formBuilder.group({
            EntryDate: [this.DispenserDate.selcteddate, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            selectedShiftId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            selectedSubShiftId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            StationCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            CurrentRate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            DispanserEntryData: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    ngOnInit() {
        this.selectedStation = localStorage.getItem('StationId');
        this.checkEntryPending('initial');
        // this.getSelectedDate(this.SummeryDate);
    }
    openFirst() {
        this.menu.enable(true, 'menuStn');
        this.menu.open('menuStn');
    }
    getSelectedDate(datePicker) {
        console.log("datePicker", datePicker);
        // const dt = new Date(datePicker);
        // let latest_date = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        const dt = new Date(datePicker);
        console.log(dt);
        // this.SummeryDate = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        // this.SummeryDate = new Date(datePicker).toLocaleDateString();
        this.SummeryDate = this.dp.transform(dt, 'yyyy/MM/dd');
        console.log(this.SummeryDate);
        this.DispenserDate.selcteddate = this.SummeryDate;
        this.checkEntryPending('change');
        this.CheckDispenserLockUnlock();
    }
    abc() {
        var self = this;
        self.commonServices.postwithservice("DispenserAverage", {
            StationId: Number(localStorage.getItem('stationId')), ShiftId: self.selectedShiftId,
            SubShiftId: self.selectedSubShiftId,
            EntryDate: self.dp.transform(self.SummeryDate, 'dd-MMM-yyyy')
        }).subscribe((resp) => {
            const data = JSON.parse(resp).Table[0];
            self.ArmAReadingAverage = data.FinalArmA;
            self.ArmBReadingAverage = data.FinalArmB;
            console.log(self.ArmAReadingAverage, ",", self.ArmBReadingAverage);
        }, (error) => {
            console.log(error);
            self.commonServices.presentToast("Something went wrong.");
            self.commonServices.loadingDismiss();
        });
    }
    checkEntryPending(str) {
        console.log(str + "str");
        var self = this;
        self.GetStationCompany();
        // self.commonServices.loadingPresent();
        self.commonServices.post("CommonGetData", {
            Id: self.selectedStation,
            // Status: self.DispenserDate.selcteddate,
            Status: self.dp.transform(self.DispenserDate.selcteddate, 'dd/MMM/yyyy'),
            Flag: 'validatePopup'
        }).subscribe((resp) => {
            const data = JSON.parse(resp);
            console.log(data);
            if (data.Table[0].Msg == 'Allow') {
                self.shiftsubshift = false;
                self.GetReadingbyShift();
                console.log('allow');
            }
            else {
                self.commonServices.presentToast(data.Table[0].Msg);
                self.shiftsubshift = true;
                // alert(data.Table[0].Msg);
                self.allDispenserData = [];
                self.selectedShiftId = '-1';
                self.selectedSubShiftId = '-1';
                self.CurrentRate = '0.00';
                if (str == 'initial') {
                    // Date Work in Pending
                    var riDateStation = data.Table[0].Msg.split("for ");
                    console.log("riDateStation" + riDateStation);
                    var mriDate = new Date(riDateStation[1]);
                    //self.secondMaxDate = mriDate.toISOString();
                    const dt = new Date(riDateStation[1]);
                    // let latest_date = dt.getDate() + "/" + self.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
                    // self.DispenserDate.selcteddate = latest_date;
                    //IOS Add
                    self.DispenserDate.selcteddate = self.dp.transform(dt, 'yyyy/MM/dd');
                    console.log(self.DispenserDate.selcteddate);
                    self.addupdateform.patchValue({
                        EntryDate: self.DispenserDate.selcteddate,
                    });
                    // self.addupdateform.setValue({EntryDate: self.DispenserDate.selcteddate});
                    self.getSelectedDate(self.DispenserDate.selcteddate);
                    // this.DispenserDate.selcteddate = 
                }
                else {
                    console.log(str);
                }
            }
            if (this.CompanyId == '1' || this.CompanyId == '2' || this.CompanyId == '4' ||
                this.CompanyId == '5' || this.CompanyId == '6' || this.CompanyId == '8' ||
                this.CompanyId == '9' || this.CompanyId == '10' || this.CompanyId == '11') {
                this.selectedShiftId = '4';
                this.selectedSubShiftId = '6';
                this.shiftsubshift = true;
            }
            else {
                this.shiftsubshift = false;
            }
            self.commonServices.loadingDismiss();
        }, (error) => {
            self.commonServices.presentToast('Something went wrong.');
            // self.commonServices.loadingDismiss();
        });
    }
    GetStationCompany() {
        var self = this;
        self.commonServices.post("CommonGetData", { Flag: 'CompanyByStation', Id: self.selectedStation, Status: 1 }).subscribe((resp) => {
            console.log(resp);
            self.CompanyName = JSON.parse(resp).Table[0].CompanyName;
            self.CompanyId = JSON.parse(resp).Table[0].CompanyId;
            console.log(self.CompanyName, 'Company');
            console.log(self.CompanyId, 'comapny id ');
            if (self.CompanyId == '2' || self.CompanyId == '4' || self.CompanyId == '1' ||
                self.CompanyId == '5' || self.CompanyId == '6' || self.CompanyId == '8' ||
                self.CompanyId == '9' || this.CompanyId == '10' || this.CompanyId == '11') {
                self.selectedShiftId = '4';
                self.selectedSubShiftId = '6';
                self.shiftsubshift = true;
            }
            self.CheckCompany();
        }, (error) => {
            self.commonServices.presentToast("Something went wrong.");
        });
    }
    CheckCompany() {
        if (this.CompanyName == 'OMC' || this.CompanyName == 'DTC' || this.CompanyName == 'DIMITS' || this.CompanyName == 'NMRC') {
            this.commonServices.IsCompanyValid.emit(true);
        }
        else {
            this.commonServices.IsCompanyValid.emit(false);
        }
    }
    GetReadingbyShift() {
        var self = this;
        if (this.CompanyId == '1' || this.CompanyId == '2' || this.CompanyId == '4' ||
            this.CompanyId == '5' || this.CompanyId == '6' || this.CompanyId == '8' ||
            this.CompanyId == '9' || this.CompanyId == '10' || this.CompanyId == '11') {
            this.selectedShiftId = '1',
                this.selectedSubShiftId = '1';
        }
        const obj = {
            StationId: Number(localStorage.getItem('StationId')),
            // EntryDate: self.DispenserDate.selcteddate,
            EntryDate: self.dp.transform(self.DispenserDate.selcteddate, 'dd/MMM/yyyy'),
            DispenserId: self.selectedDispId,
            ShiftId: this.selectedShiftId,
            SubShiftId: this.selectedSubShiftId
        };
        // self.commonServices.loadingDismiss();
        // self.commonServices.loadingPresent();
        self.commonServices.post("GetReadingbyShift", obj).subscribe((resp) => {
            self.commonServices.loadingDismiss();
            self.DispencerCount = JSON.parse(resp).Table4.length;
            if (self.DispencerCount != 0) {
                console.log(JSON.parse(resp));
                console.log(JSON.parse(resp).Table4);
                if (self.selectedDispId == 0)
                    self.selectedDispId = JSON.parse(resp).Table4[0].DispenserId;
                console.log(self.selectedDispId);
                self.listDispensers = JSON.parse(resp).Table4;
                self.allDispenserData = JSON.parse(resp).Table;
                console.log(self.allDispenserData);
                self.totalDispenser = JSON.parse(resp).Table4.length;
                self.cmbShiftData = JSON.parse(resp).Table1;
                console.log("shift data", self.cmbShiftData);
                // self.cmbSubShiftData = JSON.parse(resp).Table2;
                // console.log("subshift data", self.cmbSubShiftData);
                // self.selectedShiftId = JSON.parse(resp).Table3[0].ShiftId;
                // self.selectedSubShiftId = JSON.parse(resp).Table3[0].SubShiftId;
                if (this.CompanyId != '1' && this.CompanyId != '2' && this.CompanyId != '4' &&
                    this.CompanyId != '5' && this.CompanyId != '6' && this.CompanyId != '8' &&
                    this.CompanyId != '9' && this.CompanyId != '10' && this.CompanyId != '11') {
                    this.cmbSubShiftData = JSON.parse(resp).Table2;
                }
                else {
                    this.cmbSubShiftData = JSON.parse(resp).Table5;
                }
                if (this.CompanyId == '1' || this.CompanyId == '2' || this.CompanyId == '4' ||
                    this.CompanyId == '5' || this.CompanyId == '6' || this.CompanyId == '8' ||
                    this.CompanyId == '9' || this.CompanyId == '10' || this.CompanyId == '11') {
                    this.selectedShiftId = '4';
                    this.selectedSubShiftId = '6';
                    this.shiftsubshift = true;
                    console.log(this.selectedSubShiftId, "Sub");
                }
                else {
                    this.selectedShiftId = JSON.parse(resp).Table3[0].ShiftId;
                    this.selectedSubShiftId = JSON.parse(resp).Table3[0].SubShiftId;
                }
                self.DiscountedRate = (parseFloat(JSON.parse(resp).Table3[0].DisountedRate).toFixed(2)).toString();
                self.NormalRate = (parseFloat(JSON.parse(resp).Table3[0].CurrentRate).toFixed(2)).toString();
                if (self.selectedShiftId == '-1')
                    self.CurrentRate = '0.00';
                else if (self.selectedSubShiftId == '6')
                    self.CurrentRate = self.DiscountedRate;
                else
                    self.CurrentRate = self.NormalRate;
                self.SubShiftCount = JSON.parse(resp).Table2.length;
                var element = 0;
                if (self.selectedShiftId == '-1' || self.selectedSubShiftId == '-1') {
                    self.jumppopup = true;
                }
                else {
                    self.jumppopup = false;
                }
                self.ArmASale = (parseFloat(JSON.parse(resp).Table[0].TotA).toFixed(2)).toString();
                self.ArmBSale = (parseFloat(JSON.parse(resp).Table[0].TotB).toFixed(2)).toString();
                self.TArmSale = (parseFloat(JSON.parse(resp).Table[0].FinalTot).toFixed(2)).toString();
                if (this.CompanyId != '1' && this.CompanyId != '2' && this.CompanyId != '4' &&
                    this.CompanyId != '5' && this.CompanyId != '6' && this.CompanyId != '8' &&
                    this.CompanyId != '9' && this.CompanyId != '10' && this.CompanyId != '11') {
                    for (let index = 0; index < this.cmbSubShiftData.length; index++) {
                        if (this.cmbSubShiftData[index].SubShiftId == this.selectedSubShiftId)
                            element = index;
                    }
                    this.SubShiftCurrentCount = (element + 1);
                }
                else {
                    for (let index = 0; index < this.cmbSubShiftData.length; index++) {
                        if (this.cmbSubShiftData[index].SubShiftId == this.selectedSubShiftId)
                            element = index;
                    }
                    this.SubShiftCurrentCount = (element + 1);
                }
            }
            // self.commonServices.loadingDismiss();
            else {
                self.commonServices.presentToast('No Dispenser Available');
                // self.commonServices.loadingDismiss();
            }
        }, (error) => {
            self.commonServices.presentToast("Something went wrong.");
            self.commonServices.loadingDismiss();
        });
    }
    onSelectShift(shiftId) {
        this.selectedShiftId = shiftId;
        setTimeout(() => { this.GetReadingbyShift(); });
        this.CheckDispenserLockUnlock();
    }
    onSelectSubShift(SubShiftId) {
        this.selectedSubShiftId = SubShiftId;
        var element = 0;
        for (let index = 0; index < this.cmbSubShiftData.length; index++) {
            if (this.cmbSubShiftData[index].SubShiftId == SubShiftId)
                element = index;
        }
        this.SubShiftCurrentCount = (element + 1);
        setTimeout(() => { this.GetReadingbyShift(); });
        this.CheckDispenserLockUnlock();
    }
    numberOnly(event) {
        console.log(event);
        var val = event.target.value;
        const charCode = (event.which) ? event.which : event.keyCode;
        if (event.target.selectionDirection == "backward" && event.target.selectionStart == 0 && event.target.selectionEnd > 0 && (charCode == 45 || charCode == 46 || (charCode > 31 && (charCode > 47 && charCode < 58)))) {
            return true;
        }
        if (!(val)) {
            if (charCode == 45) {
                return true;
            }
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                return false;
            }
            return true;
        }
        else {
            if (charCode == 45 || charCode == 46 || (charCode > 31 && (charCode > 47 && charCode < 58))) {
                var points = 0;
                var minus = -1;
                points = val.indexOf(".", points);
                minus = val.indexOf("-", minus);
                if (minus != -1 && event.target.selectionStart <= minus) {
                    return false;
                }
                if (points >= 0 && charCode == 46) {
                    return false;
                }
                else if (minus >= 0 && charCode == 45 || event.target.selectionStart != 0 && charCode == 45) {
                    return false;
                }
                else {
                    return true;
                }
            }
            else {
                return false;
            }
        }
    }
    onChangeRishabh(itm) {
        var rx = /^[+-]?[0-9]{1,10}(?:\.[0-9]{1,3})?$/;
        console.log(rx.test(itm.ArmReadingA));
    }
    OnchangeA(itm) {
        if (itm.ArmReadingA < 0) {
            this.commonServices.presentToast('Reading must be positive');
            itm.ArmReadingA = 0;
            //this.armA='0';
        }
        if (itm.ArmReadingA != '') {
            // var rx = /^\d+(?:\.\d{1,3})?$/
            var rx = /^[+-]?[0-9]{1,10}(?:\.[0-9]{1,3})?$/;
            // console.log(rx.test(itm.ArmReadingA));
            if (rx.test(itm.ArmReadingA)) {
                this.oldvalueA = itm.ArmReadingA;
            }
            else {
                itm.ArmReadingA = this.oldvalueA;
            }
        }
        else {
            itm.ArmReadingA = '';
        }
        const ArmASaleCal = ((parseFloat(itm.ArmReadingA) - parseFloat(itm.PreArmReadingA) -
            parseFloat(itm.JumpArmA)).toFixed(2)).toString();
        itm.TotA = Number(isNaN(parseFloat(ArmASaleCal)) ? '0.00' : ArmASaleCal);
        const TArmSaleCal = ((parseFloat(itm.TotA) + parseFloat(itm.TotB)).toFixed(2)).toString();
        itm.FinalTot = Number((isNaN(parseFloat(TArmSaleCal)) ? '0.00' : TArmSaleCal));
    }
    OnchangeB(itm) {
        var regexNumeric = /^[+-]?[0-9]{1,1000}(?:\.[0-9]{1,1000})?$/;
        console.log(itm);
        if (itm.ArmReadingB < 0) {
            this.commonServices.presentToast('Reading must be positive');
            itm.ArmReadingB = 0;
            //this.armB='0';
        }
        if (itm.ArmReadingB != '') {
            var rx = /^\d+(?:\.\d{1,3})?$/;
            if (rx.test(itm.ArmReadingB)) {
                this.oldvalueB = itm.ArmReadingB;
            }
            else {
                itm.ArmReadingB = this.oldvalueB;
            }
        }
        else {
            itm.ArmReadingB = '';
        }
        const ArmBSaleCal = ((parseFloat(itm.ArmReadingB) - parseFloat(itm.PreArmReadingB) - parseFloat(itm.JumpArmB)).toFixed(2)).toString();
        itm.TotB = Number(isNaN(parseFloat(ArmBSaleCal)) ? '0.00' : ArmBSaleCal);
        const TArmSaleCal = ((parseFloat(itm.TotB) + parseFloat(itm.TotA)).toFixed(2)).toString();
        itm.FinalTot = Number((isNaN(parseFloat(TArmSaleCal)) ? '0.00' : TArmSaleCal));
    }
    saveAll() {
        console.log(this.allDispenserData);
        if (this.checkSale()) {
            var arr = [];
            arr = this.allDispenserData.filter(element => element.ArmReadingA != 0);
            console.log(arr);
            if (this.selectedShiftId == "-1" || Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(this.selectedShiftId)) {
                this.commonServices.presentToast('Please select Shift.');
            }
            else if (this.selectedSubShiftId == "-1" || Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(this.selectedSubShiftId)) {
                this.commonServices.presentToast('Please select Sub Shift.');
            }
            else if (arr.length == 0) {
                this.commonServices.presentToast('Please Enter Arm Reading.');
            }
            else {
                // if(this.selectedSubShiftId == "-1") {
                //   this.commonServices.presentToast('Please select the Sub Shift.');
                // }
                //else{
                console.log(this.allDispenserData);
                var array = [];
                this.allDispenserData.forEach(element => {
                    array.push({ DispenserId: element.DispenserId, ArmReadingA: element.ArmReadingA, ArmReadingB: element.ArmReadingB });
                });
                console.log(array);
                const obj = {
                    UserId: localStorage.getItem('UID'),
                    // EntryDate: this.DispenserDate.selcteddate,
                    EntryDate: this.dp.transform(this.DispenserDate.selcteddate, 'dd/MMM/yyyy'),
                    StationId: Number(localStorage.getItem('StationId')),
                    shiftId: this.selectedShiftId,
                    SubShiftId: this.selectedSubShiftId,
                    StationCode: this.StationCode,
                    CurrentRate: this.CurrentRate,
                    DispanserEntryData: array
                };
                console.log(obj);
                this.commonServices.loadingPresent();
                this.commonServices.post("DispenserEntryMaster", (obj)).subscribe((resp) => {
                    this.CheckDispenserLockUnlock();
                    const data = JSON.parse(resp);
                    this.commonServices.presentToast(data.Table[0].Meaasge);
                    this.commonServices.loadingDismiss();
                }, (error) => {
                    this.commonServices.presentToast("Something went wrong.");
                    this.commonServices.loadingDismiss();
                });
                //}
            }
        }
    }
    // OnDateChnage(val) {
    //   const dt = new Date(val);
    //   //this.SummeryDate = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
    //   this.SummeryDate = new Date(val).toLocaleDateString();
    //   console.log(this.SummeryDate, "SummeryDate");
    //   this.checkEntryPending();
    //   this.FetchDSASubmittedData();
    //   console.log(this.SummeryDate, "Rishabh 2");
    //   if (this.localLockDate == this.SummeryDate || this.IsTimeOverlocal == true)
    //     this.submittedflag = true;
    //   else
    //     this.submittedflag = false;
    //     this.CheckDispencerLockUnlock();
    // }
    CheckDispenserLockUnlock() {
        const obj = {
            // EntryDate: this.dp.transform(this.DispenserDate.selcteddate, 'dd/MMM/yyyy'),
            EntryDate: this.SummeryDate,
            StationId: Number(localStorage.getItem('StationId')),
            StationCode: this.StationCode,
        };
        console.log('Dispenser Lock Unlock');
        console.log(obj);
        this.commonServices.post("CheckDispencerLockUnlockStatus", (obj)).subscribe((resp) => {
            const data = JSON.parse(resp);
            console.log(data);
            console.log(data.Table[0], 'CheckLock');
            console.log(data.Table[0].Status, 'SSS');
            // if(this.selectedShiftId == "4" && this.selectedSubShiftId == "6" && data.Table[0].Status == "1")
            if (data.Table[0].Status == "1") {
                this.isDispencerLocked = false;
                this.DispLockMsg = data.Table[0].Message;
            }
            else {
                this.isDispencerLocked = true;
                this.DispLockMsg = "";
            }
        }, (error) => {
            this.commonServices.presentToast("Something went wrong.");
            this.commonServices.loadingDismiss();
        });
    }
    checkSale() {
        console.log(this.allDispenserData);
        var sumArmASale = 0.00;
        var sumArmBSale = 0.00;
        for (var i = 0; i < this.allDispenserData.length; i++) {
            sumArmASale = parseFloat(sumArmASale + this.allDispenserData[i].TotA);
        }
        console.log(sumArmASale);
        for (var i = 0; i < this.allDispenserData.length; i++) {
            sumArmBSale = parseFloat(sumArmBSale + this.allDispenserData[i].TotB);
        }
        console.log(sumArmBSale);
        if (sumArmASale < 0) {
            this.commonServices.presentToast('Please enter positive sale for Arm A');
            return false;
        }
        else if (sumArmBSale < 0) {
            this.commonServices.presentToast('Please enter positive sale for Arm B');
            return false;
        }
        else {
            return true;
        }
        //return sum;  
    }
    validation1(ArmReadingA, PreArmReadingA) {
        console.log(ArmReadingA);
        if (String(Number(ArmReadingA)) == 'NaN') {
            this.commonServices.presentToast('Please enter the numeric value for Arm A.');
            return false;
        }
        else if (parseFloat(ArmReadingA) == 0 && parseFloat(PreArmReadingA) > 0) {
            this.commonServices.presentToast('Zero is not allowed for Arm A.');
            return false;
        }
        else if (parseFloat(ArmReadingA) <= parseFloat(PreArmReadingA)) {
            const ret = confirm('There is a suspecious entry in Arm A. Do you want to continue?');
            //this.errorFlag = (ret == true)?false:true; 
            return false; //This will not stop doing the entry, it's only for confirmation
        }
        else if (ArmReadingA == '') {
            this.commonServices.presentToast('Please enter reading for Arm A.');
            return false;
        }
        else if (ArmReadingA != '') {
            this.commonServices.postwithservice("DispenserAverage", {
                StationId: Number(localStorage.getItem('stationId')), ShiftId: this.selectedShiftId,
                SubShiftId: this.selectedSubShiftId,
                EntryDate: this.dp.transform(this.SummeryDate, 'dd-MMM-yyyy')
            }).subscribe((resp) => {
                const data = JSON.parse(resp).Table[0];
                this.ArmAReadingAverage = data.FinalArmA;
                this.ArmBReadingAverage = data.FinalArmB;
                console.log(this.ArmAReadingAverage, ",", this.ArmBReadingAverage);
                if (ArmReadingA > this.ArmAReadingAverage) {
                    //const ret = confirm('Wrong Entry for Arm A Reading, Do you want to continue?')
                    // if(confirm('Wrong Entry for Arm A Reading, Do you want to continue?')){
                    //   return true;
                    // }
                    const ret = this.commonServices.alertMessage("Confirm", "Wrong Entry for Arm A Reading, Do you want to continue?").then((res) => {
                        console.log(res);
                        if (!res) {
                            return true;
                        }
                        else {
                            ArmReadingA = 0;
                            return false;
                        }
                    });
                }
            }, (error) => {
                console.log(error);
                this.commonServices.presentToast("Something went wrong.");
                this.commonServices.loadingDismiss();
            });
        }
    }
    validation2(ArmReadingB, PreArmReadingB) {
        if (String(Number(ArmReadingB)) == 'NaN') {
            this.commonServices.presentToast('Please enter the numeric value for Arm B.');
            return false;
        }
        else if (parseFloat(ArmReadingB) == 0 && parseFloat(PreArmReadingB) > 0) {
            this.commonServices.presentToast('Zero is not allowed for Arm B.');
            return false;
        }
        else if (parseFloat(ArmReadingB) <= parseFloat(PreArmReadingB)) {
            const ret = confirm('There is a suspecious entry in Arm B. Do you want to continue?');
            //this.errorFlag = (ret == true)?false:true; 
            return false; //This will not stop doing the entry, it's only for confirmation
        }
        else if (ArmReadingB == '') {
            this.commonServices.presentToast('Please enter reading for Arm B.');
            return false;
        }
        else if (ArmReadingB != '') {
            this.commonServices.postwithservice("DispenserAverage", {
                StationId: Number(localStorage.getItem('stationId')), ShiftId: this.selectedShiftId, SubShiftId: this.selectedSubShiftId,
                EntryDate: this.dp.transform(this.SummeryDate, 'dd-MMM-yyyy')
            }).subscribe((resp) => {
                const data = JSON.parse(resp).Table[0];
                this.ArmAReadingAverage = data.FinalArmA;
                this.ArmBReadingAverage = data.FinalArmB;
                console.log(this.ArmAReadingAverage, ",", this.ArmBReadingAverage);
                if (ArmReadingB > this.ArmBReadingAverage) {
                    this.commonServices.alertMessage("Confirm", "Wrong Entry for Arm B Reading, Do you want to continue?").then((res) => {
                        console.log(res);
                        if (!res) {
                            return false;
                        }
                    });
                    // const ret = confirm('Wrong Entry for Arm B Reading, Do you want to continue?')
                    // return false;
                }
            }, (error) => {
                console.log(error);
                this.commonServices.presentToast("Something went wrong.");
                this.commonServices.loadingDismiss();
            });
        }
    }
    getvalues(itm) {
        this.armSide = "ArmA";
        this.before = "";
        this.after = "";
        this.remark = "";
        this.dispId = itm.DispenserId;
        this.armAPrevReading = itm.PreArmReadingA;
        this.armBPrevReading = itm.PreArmReadingB;
        this.getJumpReadingList(this.dispId);
        this.router.navigate(['jump-reading-pop', { ShiftId: this.addupdateform.value.selectedShiftId, EntryDate: this.dp.transform(this.DispenserDate.selcteddate, 'dd/MMM/yyyy'),
                SubShiftId: this.addupdateform.value.selectedSubShiftId, dispId: this.dispId, armAPrevReading: this.armAPrevReading, armBPrevReading: itm.PreArmReadingB }]);
    }
    getJumpReadingList(itm) {
        console.log(itm);
        console.log(this.dispId);
        const obj = {
            // EntryDate: this.DispenserDate.selcteddate,//this.detailsStation.SummeryDate,
            EntryDate: this.dp.transform(this.DispenserDate.selcteddate, 'dd/MMM/yyyy'),
            ShiftId: (this.CompanyId == '1' || this.CompanyId == '2' || this.CompanyId == '4' ||
                this.CompanyId == '5' || this.CompanyId == '6' || this.CompanyId == '8' ||
                this.CompanyId == '9' || this.CompanyId == '10' || this.CompanyId == '11') ? 1 : this.selectedShiftId,
            SubShiftId: (this.CompanyId == '1' || this.CompanyId == '2' || this.CompanyId == '4' ||
                this.CompanyId == '5' || this.CompanyId == '6' || this.CompanyId == '8' ||
                this.CompanyId == '9' || this.CompanyId == '10' || this.CompanyId == '11') ? 1 : this.selectedSubShiftId,
            //DispanserSide: this.popupFor,
            DispenserId: this.dispId
        };
        console.log(obj);
        this.commonServices.loadingPresent();
        this.commonServices.post("GetJumpReadingByShift", obj).subscribe((resp) => {
            this.listJumpedReading = JSON.parse(resp).Table;
            console.log(this.listJumpedReading);
            this.commonServices.loadingDismiss();
        }, (error) => {
            this.commonServices.presentToast("Something went wrong.");
            this.commonServices.loadingDismiss();
        });
    }
};
DprDispenserEntryPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] }
];
DprDispenserEntryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dpr-dispenser-entry',
        template: __webpack_require__(/*! raw-loader!./dpr-dispenser-entry.page.html */ "./node_modules/raw-loader/index.js!./src/app/station/dpr-dispenser-entry/dpr-dispenser-entry.page.html"),
        styles: [__webpack_require__(/*! ./dpr-dispenser-entry.page.scss */ "./src/app/station/dpr-dispenser-entry/dpr-dispenser-entry.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]])
], DprDispenserEntryPage);



/***/ })

}]);
//# sourceMappingURL=station-dpr-dispenser-entry-dpr-dispenser-entry-module-es2015.js.map