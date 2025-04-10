(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-redirected_pages-add-update-dispenser-mgt-add-update-dispenser-mgt-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/redirected_pages/add-update-dispenser-mgt/add-update-dispenser-mgt.page.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/redirected_pages/add-update-dispenser-mgt/add-update-dispenser-mgt.page.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<ion-toolbar color=\"dark_green\">\r\n\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-left\">\r\n\t\t\t\t<ion-back-button defaultHref=\"dispenser-management\" class=\"text_white\"></ion-back-button>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"8\" class=\"ion-text-center\">\r\n\t\t\t\t<ion-text class=\"text_white\" *ngIf=\"pageFlag =='addds'\">Add Dispenser</ion-text>\r\n\t\t\t\t<ion-text class=\"text_white\" *ngIf=\"pageFlag =='updateds'\">Update Dispenser</ion-text>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-center\">\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\t<form [formGroup]=\"addForm\" (ngSubmit)=\"Insertstation()\">\r\n\t\t<ion-grid>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Dispenser Name <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"DispenserName\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Dispenser Type Code A <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-item class=\"inp_control\">\r\n\t\t\t\t\t\t<ion-select formControlName=\"DispenserTypeIdA\">\r\n\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let dsitem of dataDispTypesA\" [value]=\"dsitem.DispanserTypeId\">\r\n\t\t\t\t\t\t\t\t{{dsitem.DispanserTypeCode}}</ion-select-option>\r\n\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t</ion-item>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Dispenser Code A <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"DispenserCodeA\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Current Reading A</ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"CurrentReadingA\" disabled></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Dispenser Type Code B <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-item class=\"inp_control\">\r\n\t\t\t\t\t\t<ion-select formControlName=\"DispenserTypeIdB\">\r\n\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let dsitem of FinalDispTypesB\" [value]=\"dsitem.DispanserTypeId\">\r\n\t\t\t\t\t\t\t\t{{dsitem.DispanserTypeCode}}</ion-select-option>\r\n\r\n\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t</ion-item>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Dispenser Code B <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"DispenserCodeB\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Current Reading B</ion-label>\r\n\t\t\t\t\t<ion-input disabled class=\"inp_control\" formControlName=\"CurrentReadingB\" disabled></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Station <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<div class=\"custom_dropdown\">\r\n\t\t\t\t\t\t<ion-input class=\"inp_control\" name=\"stCodeMy\" formControlName=\"stCodeMy\"\r\n\t\t\t\t\t\t\t(click)=\"filterBoxShow(0)\" readonly></ion-input>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"filter_box\" *ngIf=(fiterBox)>\r\n\t\t\t\t\t\t<ion-searchbar (ionChange)=\"onSearchTerm($event)\" placeholder=\"Search an item\"></ion-searchbar>\r\n\t\t\t\t\t\t<div class=\"stn_list_container\">\r\n\t\t\t\t\t\t\t<ion-list>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"items.length > 0; else noItems\">\r\n\t\t\t\t\t\t\t\t\t<ion-item *ngFor=\"let item of items\" (click)=\"filterBoxShow(item)\">\r\n\t\t\t\t\t\t\t\t\t\t{{item.StationCode}}\r\n\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<ng-template #noItems>\r\n\t\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t\tNo items found.\r\n\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t</ion-list>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Effective Date <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<!-- <ion-datetime value=\"2019-10-01T15:43:40.394Z\" display-timezone=\"utc\"\r\n\t\t\t\t\t class=\"inp_control\" formControlName=\"DispenserName\" [(ngModel)]=\"disData.selcteddate\" \r\n\t\t\t\t\t name=\"selcteddate\" (ionChange)=\"getSelectedDate(selcteddate.value)\"></ion-datetime>  -->\r\n\t\t\t\t\t<ion-datetime #selcteddate class=\"datepick\" displayFormat=\"DD-MMM-YYYY\" \r\n\t\t\t\t\tpickerFormat=\"DD MMM YYYY\"\r\n\t\t\t\t\t\tformControlName=\"EffectiveDate\" class=\"inp_control\" max=\"2099-12-31\"></ion-datetime>\r\n\t\t\t\t\t<ion-datetime></ion-datetime>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<!-- <ion-row>\r\n\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t<ion-label>Order By <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t<ion-item class=\"inp_control\"> -->\r\n\t\t\t<!-- <ion-label>Order By</ion-label> -->\r\n\t\t\t<!-- <ion-select formControlName=\"OrderBy\">\r\n\t\t\t\t\t\t<ion-select-option *ngFor=\"let dsitem of jsonOrder\" [value]=\"dsitem.value\">{{dsitem.value}}</ion-select-option>\r\n\t\t\t\t\t</ion-select>\r\n\t\t\t\t</ion-item>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row> -->\r\n\t\t\t<ion-row class=\"align_center\">\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\tStatus\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col class=\"d_flex ion-justify-content-end\">\r\n\t\t\t\t\t<ion-toggle [(ngModel)]=\"status\" [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"button_container\">\r\n\t\t\t\t\t\t<ion-button type=\"submit\" color=\"dark_green_clr\">Save</ion-button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-grid>\r\n\t</form>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/HO/redirected_pages/add-update-dispenser-mgt/add-update-dispenser-mgt-routing.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-update-dispenser-mgt/add-update-dispenser-mgt-routing.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: AddUpdateDispenserMgtPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUpdateDispenserMgtPageRoutingModule", function() { return AddUpdateDispenserMgtPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_update_dispenser_mgt_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-update-dispenser-mgt.page */ "./src/app/HO/redirected_pages/add-update-dispenser-mgt/add-update-dispenser-mgt.page.ts");




var routes = [
    {
        path: '',
        component: _add_update_dispenser_mgt_page__WEBPACK_IMPORTED_MODULE_3__["AddUpdateDispenserMgtPage"]
    }
];
var AddUpdateDispenserMgtPageRoutingModule = /** @class */ (function () {
    function AddUpdateDispenserMgtPageRoutingModule() {
    }
    AddUpdateDispenserMgtPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AddUpdateDispenserMgtPageRoutingModule);
    return AddUpdateDispenserMgtPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/HO/redirected_pages/add-update-dispenser-mgt/add-update-dispenser-mgt.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-update-dispenser-mgt/add-update-dispenser-mgt.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: AddUpdateDispenserMgtPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUpdateDispenserMgtPageModule", function() { return AddUpdateDispenserMgtPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_update_dispenser_mgt_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-update-dispenser-mgt-routing.module */ "./src/app/HO/redirected_pages/add-update-dispenser-mgt/add-update-dispenser-mgt-routing.module.ts");
/* harmony import */ var _add_update_dispenser_mgt_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-update-dispenser-mgt.page */ "./src/app/HO/redirected_pages/add-update-dispenser-mgt/add-update-dispenser-mgt.page.ts");







var AddUpdateDispenserMgtPageModule = /** @class */ (function () {
    function AddUpdateDispenserMgtPageModule() {
    }
    AddUpdateDispenserMgtPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _add_update_dispenser_mgt_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddUpdateDispenserMgtPageRoutingModule"]
            ],
            declarations: [_add_update_dispenser_mgt_page__WEBPACK_IMPORTED_MODULE_6__["AddUpdateDispenserMgtPage"]]
        })
    ], AddUpdateDispenserMgtPageModule);
    return AddUpdateDispenserMgtPageModule;
}());



/***/ }),

/***/ "./src/app/HO/redirected_pages/add-update-dispenser-mgt/add-update-dispenser-mgt.page.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-update-dispenser-mgt/add-update-dispenser-mgt.page.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-select {\n  width: 100%;\n  max-width: 100%;\n}\n\n.home_button {\n  --background: #ffffff;\n  --color: #2a2a2a;\n  --background-hover: #fff;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvSE8vcmVkaXJlY3RlZF9wYWdlcy9hZGQtdXBkYXRlLWRpc3BlbnNlci1tZ3QvYWRkLXVwZGF0ZS1kaXNwZW5zZXItbWd0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvSE8vcmVkaXJlY3RlZF9wYWdlcy9hZGQtdXBkYXRlLWRpc3BlbnNlci1tZ3QvYWRkLXVwZGF0ZS1kaXNwZW5zZXItbWd0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFFSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9ITy9yZWRpcmVjdGVkX3BhZ2VzL2FkZC11cGRhdGUtZGlzcGVuc2VyLW1ndC9hZGQtdXBkYXRlLWRpc3BlbnNlci1tZ3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlbGVjdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbi5ob21lX2J1dHRvblxyXG57XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAtLWNvbG9yOiAjMmEyYTJhO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbiIsImlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uaG9tZV9idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIC0tY29sb3I6ICMyYTJhMmE7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/HO/redirected_pages/add-update-dispenser-mgt/add-update-dispenser-mgt.page.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-update-dispenser-mgt/add-update-dispenser-mgt.page.ts ***!
  \***********************************************************************************************/
/*! exports provided: AddUpdateDispenserMgtPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUpdateDispenserMgtPage", function() { return AddUpdateDispenserMgtPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var AddUpdateDispenserMgtPage = /** @class */ (function () {
    function AddUpdateDispenserMgtPage(formBuilder, router, activatedroute, datepipe, commonServices) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedroute = activatedroute;
        this.datepipe = datepipe;
        this.commonServices = commonServices;
        this.status = false;
        this.disData = { selcteddate: "" };
        this.CurrentReadingA = 0;
        this.CurrentReadingB = 0;
        this.SelectedOrder = '';
        this.DispId = '0';
        this.dataStationMaster = [];
        this.dataDispTypesA = [];
        this.FinalDispTypesB = [];
        this.dataDispTypesB = [];
        this.jsonOrder = [
            { text: '1', value: '1' },
            { text: '2', value: '2' },
            { text: '3', value: '3' },
            { text: '4', value: '4' },
            { text: '5', value: '5' },
            { text: '6', value: '6' },
            { text: '7', value: '7' },
            { text: '8', value: '8' },
            { text: '9', value: '9' },
            { text: '10', value: '10' },
            { text: '11', value: '11' },
            { text: '12', value: '12' },
            { text: '13', value: '13' },
            { text: '14', value: '14' },
            { text: '15', value: '15' },
            { text: '16', value: '16' },
            { text: '17', value: '17' },
            { text: '18', value: '18' },
            { text: '19', value: '19' },
            { text: '20', value: '20' }
        ];
        this.fiterBox = false;
        this.filterBoxFlag = 0;
        this.monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ];
        this.userid = localStorage.getItem("UID");
        this.pageFlag = this.activatedroute.snapshot.paramMap.get("pageFlag");
        // this.Dslist=JSON.parse(this.activatedroute.snapshot.paramMap.get("arrayItem"));
        // this.singleDslist=JSON.parse(this.activatedroute.snapshot.paramMap.get("singlearrayItem"));
        this.currentdate = new Date().toISOString().split('T')[0];
        if (this.disData.selcteddate == "") {
            this.currDate = this.currentdate;
            console.log(this.currDate);
            var dt = new Date(this.currDate);
            //IOS Comment
            // let latest_date = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
            // this.disData.selcteddate = latest_date;
            //IOS Add
            this.disData.selcteddate = this.datepipe.transform(dt, 'yyyy/MM/dd');
        }
        else {
            this.selectedDate = new Date(this.disData.selcteddate).setDate(new Date(this.disData.selcteddate).getDate());
            this.todayTime = new Date(this.currDate);
            this.month = this.todayTime.getMonth() + 1;
            this.day = this.todayTime.getDate();
            this.year = this.todayTime.getFullYear();
            this.FulllYear = this.year + "-" + this.month + "-" + this.day;
        }
        this.addForm = formBuilder.group({
            DispenserName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            DispenserCodeA: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            DispenserCodeB: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            DispenserTypeIdA: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            DispenserTypeIdB: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            StationId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            EffectiveDate: [this.disData.selcteddate, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            // Status: this.status,
            CurrentReadingA: [this.CurrentReadingA, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            CurrentReadingB: [this.CurrentReadingB, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            // OrderBy: ['', Validators.required]
            stCodeMy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    AddUpdateDispenserMgtPage.prototype.ngAfterContentInit = function () {
        this.addForm;
    };
    AddUpdateDispenserMgtPage.prototype.ngOnInit = function () {
        this.DispId = JSON.parse(this.activatedroute.snapshot.paramMap.get("dispId"));
        this.getDispenserListBYId(this.DispId);
    };
    // get Date
    AddUpdateDispenserMgtPage.prototype.getSelectedDate = function (datePicker) {
        console.log("datePicker", datePicker);
        var dt = new Date(datePicker);
        //IOS Comment
        // let latest_date = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        // this.disData.selcteddate = latest_date;
        //IOS Add
        this.disData.selcteddate = this.datepipe.transform(dt, 'yyyy/MM/dd');
        this.Insertstation();
    };
    AddUpdateDispenserMgtPage.prototype.getDispenserListBYId = function (DispId) {
        var _this = this;
        var self = this;
        self.commonServices.loadingPresent();
        self.commonServices.post("CommonGetData", { Flag: 'DispenserById', Id: DispId })
            .subscribe(function (res) {
            if (DispId == 0) {
                stCodeMy: [self.DispenserResList.StationCode];
                self.items = self.dataStationMaster;
            }
            else {
                var DispenserRes = JSON.parse(res);
                if (DispenserRes.Table.length > 0) {
                    self.DispenserResList = DispenserRes.Table[0];
                }
                else {
                    self.DispenserResList = DispenserRes.Table;
                }
                console.log(self.DispenserResList);
                self.dataStationMaster = DispenserRes.Table1;
                self.items = self.dataStationMaster;
                self.dataDispTypesA = DispenserRes.Table2;
                self.dataDispTypesB = DispenserRes.Table2;
                self.FinalDispTypesB.push({ 'DispanserTypeId': 0, 'DispanserTypeCode': 'None' });
                self.dataDispTypesB.forEach(function (element, i) {
                    self.FinalDispTypesB.push({ 'DispanserTypeId': element.DispanserTypeId, 'DispanserTypeCode': element.DispanserTypeCode });
                });
            }
            // if (this.DispenserResList != "" && this.DispenserResList != undefined) {
            self.addForm = self.formBuilder.group({
                DispenserName: [self.DispenserResList.DispenserName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                DispenserCodeA: [self.DispenserResList.DispenserCodeA, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                DispenserCodeB: [self.DispenserResList.DispenserCodeB, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                DispenserTypeIdA: [self.DispenserResList.DispenserTypeIdA, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                DispenserTypeIdB: [self.DispenserResList.DispenserTypeIdA, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                StationId: [self.DispenserResList.StationId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                EffectiveDate: [self.DispenserResList.EffectiveDate, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                // Status: self.status,
                CurrentReadingA: [self.DispenserResList.CurrentReadingA, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                CurrentReadingB: [self.DispenserResList.CurrentReadingB, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                // OrderBy: [self.DispenserResList.OrderBy, Validators.required]
                stCodeMy: [self.DispenserResList.StationCode, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
            if (self.DispenserResList.StatusSort == 'Inactive') {
                _this.status = false;
            }
            else {
                _this.status = true;
                //}
            }
            self.commonServices.loadingDismiss();
        }, function (error) {
            self.commonServices.presentToast("Something went wrong.");
            self.commonServices.loadingDismiss();
        });
    };
    AddUpdateDispenserMgtPage.prototype.Insertstation = function () {
        console.log(this.addForm);
        var self = this;
        var statusToggle = 2;
        if (self.status == false) {
            // self.status = 2;
            statusToggle = 2;
        }
        else {
            // self.status = 1;
            statusToggle = 1;
        }
        self.errorFound = true;
        if (self.DispId != '0') {
            self.actionFlag = 'Update';
            self.SelectedDispenserId = self.DispId;
        }
        else {
            self.title = 'Add Dispenser';
            self.actionFlag = 'Add';
            self.SelectedDispenserId = '0';
        }
        if (self.validationDisp()) {
            var obj = {
                DispenserId: (this.actionFlag == 'Update') ? this.SelectedDispenserId : '0',
                DispenserName: self.addForm.value.DispenserName,
                DispenserCodeA: self.addForm.value.DispenserCodeA,
                DispenserCodeB: self.addForm.value.DispenserCodeB,
                DispenserTypeIdA: self.addForm.value.DispenserTypeIdA,
                DispenserTypeIdB: self.addForm.value.DispenserTypeIdB,
                StationId: self.addForm.value.StationId,
                EffectiveDate: self.addForm.value.EffectiveDate,
                Status: statusToggle,
                CurrentReadingA: self.CurrentReadingA,
                CurrentReadingB: self.addForm.value.CurrentReadingB,
                // OrderBy: self.addForm.value.OrderBy,
                OrderBy: 0,
            };
            self.commonServices.loadingPresent();
            self.commonServices.post("DispencerMaster", obj).subscribe(function (res) {
                var disRes = JSON.parse(res);
                if (disRes.Table[0].Meaasge == "Dispenser mapped successfully.") {
                    self.commonServices.presentToast(disRes.Table[0].Meaasge);
                    self.addForm.reset();
                    setTimeout(function () {
                        self.router.navigate(['/dispenser-management']);
                    }, 2000);
                }
                else if (disRes.Table[0].Meaasge == "Dispenser updated successfully.") {
                    self.commonServices.presentToast(disRes.Table[0].Meaasge);
                    self.addForm.reset();
                    setTimeout(function () {
                        self.router.navigate(['/dispenser-management']);
                    }, 2000);
                }
                else {
                    self.commonServices.presentToast("Something went wrong.");
                }
                self.commonServices.loadingDismiss();
            }, function (error) {
                self.commonServices.presentToast("Something went wrong.");
                self.commonServices.loadingDismiss();
            });
        }
    };
    AddUpdateDispenserMgtPage.prototype.validationDisp = function () {
        var specials = /[*|\":<>[\]{}`\\()';@&$~!]/;
        var re = new RegExp(/^[a-zA-Z0-9_]*$/);
        if (this.addForm.value.DispenserName == '') {
            this.commonServices.presentToast('Dispenser name must be filled.');
            this.errorFound = false;
            return this.errorFound;
        }
        else if (specials.test(this.addForm.value.DispenserName)) {
            this.commonServices.presentToast('Invalid Dispenser Name.');
            this.errorFound = false;
            return this.errorFound;
        }
        else if (re.test(this.addForm.value.DispenserName)) {
            this.commonServices.presentToast('Invalid Dispenser Name.');
            this.errorFound = false;
            return this.errorFound;
        }
        else if (this.addForm.value.DispenserCodeA == '') {
            this.commonServices.presentToast('Please select Dispenser Type Code A.');
            this.errorFound = false;
            return this.errorFound;
        }
        else if (this.addForm.value.DispenserCodeA == '') {
            this.commonServices.presentToast('Dispenser Code A must be filled.');
            this.errorFound = false;
            return this.errorFound;
        }
        else if (this.addForm.value.DispenserCodeB == '') {
            this.commonServices.presentToast('Please select Dispenser Type Code B.');
            this.errorFound = false;
            return this.errorFound;
        }
        else if (this.addForm.value.StationId == '') {
            this.commonServices.presentToast('Please select station.');
            this.errorFound = false;
            return this.errorFound;
        }
        // if (this.addForm.value.OrderBy == '' || this.addForm.value.OrderBy == null || isUndefined(this.addForm.value.OrderBy) || this.addForm.value.OrderBy == '0') {
        //   this.commonServices.presentToast('Order must be selected.');
        //   this.errorFound = false;
        //   return this.errorFound;
        // }
        return this.errorFound;
    };
    AddUpdateDispenserMgtPage.prototype.filterBoxShow = function (itm) {
        var self = this;
        if (self.filterBoxFlag == 0) {
            self.fiterBox = true;
            self.filterBoxFlag = 1;
        }
        else {
            self.fiterBox = false;
            self.filterBoxFlag = 0;
            self.DispenserResList.StationCode = itm.StationCode;
            self.DispenserResList.StationId = itm.StationId;
            console.log(this.DispenserResList.StationCode);
            self.getDispenserListBYId(0);
        }
    };
    AddUpdateDispenserMgtPage.prototype.onSearchTerm = function (ev) {
        this.items = this.dataStationMaster;
        var val = ev.detail.value;
        if (val && val.trim() !== '') {
            this.items = this.items.filter(function (term) {
                return term.StationCode.toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
            });
        }
    };
    AddUpdateDispenserMgtPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
    ]; };
    AddUpdateDispenserMgtPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-update-dispenser-mgt',
            template: __webpack_require__(/*! raw-loader!./add-update-dispenser-mgt.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/redirected_pages/add-update-dispenser-mgt/add-update-dispenser-mgt.page.html"),
            styles: [__webpack_require__(/*! ./add-update-dispenser-mgt.page.scss */ "./src/app/HO/redirected_pages/add-update-dispenser-mgt/add-update-dispenser-mgt.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], AddUpdateDispenserMgtPage);
    return AddUpdateDispenserMgtPage;
}());



/***/ })

}]);
//# sourceMappingURL=HO-redirected_pages-add-update-dispenser-mgt-add-update-dispenser-mgt-module-es5.js.map