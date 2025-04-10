(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-add-update-station-management-add-update-station-management-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/add-update-station-management/add-update-station-management.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/add-update-station-management/add-update-station-management.page.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<ion-toolbar color=\"dark_green\">\r\n\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-left\">\r\n\t\t\t\t<ion-back-button defaultHref=\"station-management\" class=\"text_white\"></ion-back-button>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"8\" class=\"ion-text-center\">\r\n\t\t\t\t<ion-text class=\"text_white\" *ngIf=\"pageFlag =='addstationm'\">Add Station</ion-text>\r\n\t\t\t\t<ion-text class=\"text_white\" *ngIf=\"pageFlag =='updatestationm'\">Update Station</ion-text>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-center\">\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\t<form [formGroup]=\"addForm\" (ngSubmit)=\"Insertstation()\">\r\n\t\t<ion-grid>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t<ion-label>Station Code <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"StationCode\"></ion-input>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t<ion-label >Station Name <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"StationName\"></ion-input>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t<label>Station Address <span class=\"star\">*</span></label>\r\n\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"StationAddress\"></ion-input>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t<ion-label>Region <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t<ion-select class=\"inp_control\" [compareWith]=\"compareWith\" formControlName=\"StationRegionId\">\r\n\t\t\t\t\t<ion-select-option *ngFor=\"let stitem of dataRegionMaster\" [value]=\"stitem.RegionId\">{{stitem.RegionName}}\r\n\t\t\t\t\t</ion-select-option>\r\n\t\t\t\t</ion-select>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t<ion-label>Company <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t<ion-select class=\"inp_control\" [compareWith]=\"compareWith\" formControlName=\"StationCompanyId\">\r\n\t\t\t\t\t<ion-select-option *ngFor=\"let stitem of dataCompanyMaster\" [value]=\"stitem.CompanyId\">\r\n\t\t\t\t\t{{stitem.CompanyName}}</ion-select-option>\r\n\t\t\t\t</ion-select>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t<ion-label>Station Type <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t<ion-select class=\"inp_control\" [compareWith]=\"compareWith\" formControlName=\"StationTypeId\">\r\n\t\t\t\t\t<ion-select-option *ngFor=\"let stitem of dataStationTypeMaster\" [value]=\"stitem.StationTypeId\">\r\n\t\t\t\t\t{{stitem.StationTypeName}}</ion-select-option>\r\n\t\t\t\t</ion-select>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t<!-- <ion-label>Marketing Officer <span class=\"star\">*</span></ion-label> -->\r\n\t\t\t\t<ion-label>DSO <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t<ion-select class=\"inp_control\" [compareWith]=\"compareWith\" formControlName=\"MoId\">\r\n\t\t\t\t\t<ion-select-option *ngFor=\"let stitem of dataMoMaster\" [value]=\"stitem.MoId\">{{stitem.MoName}}\r\n\t\t\t\t\t</ion-select-option>\r\n\t\t\t\t</ion-select>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t<ion-label>Control Room <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t<ion-select class=\"inp_control\" [compareWith]=\"compareWith\" formControlName=\"ControlRoomId\">\r\n\t\t\t\t\t<ion-select-option *ngFor=\"let stitem of dataCRoomMaster\" [value]=\"stitem.ControlRoomId\">\r\n\t\t\t\t\t{{stitem.ControlRoomName}}</ion-select-option>\r\n\t\t\t\t</ion-select>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t<ion-label>Login Id</ion-label>\r\n\t\t\t\t<ion-input class=\"inp_control\"  formControlName=\"StationLoginId\"></ion-input>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t<ion-label>Password</ion-label>\r\n\t\t\t\t<ion-input type=\"password\" class=\"inp_control\"  formControlName=\"StationPassword\">\r\n\t\t\t\t</ion-input>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t<ion-label>Confirm Password</ion-label>\r\n\t\t\t\t<ion-input type=\"password\" class=\"inp_control\" placeholder=\"\"\r\n\t\t\t\tformControlName=\"StationConfPassword\"></ion-input>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t<ion-label>Email Id</ion-label>\r\n\t\t\t\t<ion-input class=\"inp_control\"  formControlName=\"StationEmailId\"></ion-input>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t<ion-label>Contact No</ion-label>\r\n\t\t\t\t<ion-input class=\"inp_control\"  formControlName=\"StationContactNo\"></ion-input>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t<ion-label>Ope. Balance</ion-label>\r\n\t\t\t\t<ion-input type=\"number\" class=\"inp_control\" formControlName=\"OpeBalance\">\r\n\t\t\t\t</ion-input>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-label class=\"shift\">Shift A</ion-label>\r\n\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t<ion-label>Manager Name</ion-label>\r\n\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"ShiftAManagerName\"></ion-input>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t<ion-label>Contact No</ion-label>\r\n\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"ShiftAManagerContactNo\"></ion-input>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-label class=\"shift\">Shift B </ion-label>\r\n\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t<ion-label>Manager Name</ion-label>\r\n\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"ShiftBManagerName\"></ion-input>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t<ion-label>Contact No</ion-label>\r\n\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"ShiftBManagerContactNo\"></ion-input>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-label class=\"shift\">Shift C</ion-label>\r\n\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t<ion-label>Manager Name</ion-label>\r\n\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"ShiftCManagerName\"></ion-input>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t<ion-label>Contact No</ion-label>\r\n\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"ShiftCManagerContactNo\"></ion-input>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-label class=\"shift\">Shift D</ion-label>\r\n\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t<ion-label>Manager Name</ion-label>\r\n\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"ShiftDManagerName\"></ion-input>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t<ion-label>Contact No</ion-label>\r\n\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"ShiftDManagerContactNo\"></ion-input>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t<ion-label>Shutdown Remark</ion-label>\r\n\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"ShutdownRemark\"></ion-input>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t</ion-grid>\r\n\t\t<ion-row class=\"align_center\">\r\n\t\t\t<ion-col>\r\n\t\t\t\tStatus\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col class=\"d_flex ion-justify-content-end\">\r\n\t\t\t\t<ion-toggle [(ngModel)]=\"status\" [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<div class=\"button_container\">\r\n\t\t\t\t\t<ion-button color=\"dark_green_clr\" type=\"submit\">Submit </ion-button>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</form>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/HO/add-update-station-management/add-update-station-management-routing.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/HO/add-update-station-management/add-update-station-management-routing.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: AddUpdateStationManagementPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUpdateStationManagementPageRoutingModule", function() { return AddUpdateStationManagementPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_update_station_management_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-update-station-management.page */ "./src/app/HO/add-update-station-management/add-update-station-management.page.ts");




var routes = [
    {
        path: '',
        component: _add_update_station_management_page__WEBPACK_IMPORTED_MODULE_3__["AddUpdateStationManagementPage"]
    }
];
var AddUpdateStationManagementPageRoutingModule = /** @class */ (function () {
    function AddUpdateStationManagementPageRoutingModule() {
    }
    AddUpdateStationManagementPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AddUpdateStationManagementPageRoutingModule);
    return AddUpdateStationManagementPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/HO/add-update-station-management/add-update-station-management.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/HO/add-update-station-management/add-update-station-management.module.ts ***!
  \******************************************************************************************/
/*! exports provided: AddUpdateStationManagementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUpdateStationManagementPageModule", function() { return AddUpdateStationManagementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_update_station_management_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-update-station-management-routing.module */ "./src/app/HO/add-update-station-management/add-update-station-management-routing.module.ts");
/* harmony import */ var _add_update_station_management_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-update-station-management.page */ "./src/app/HO/add-update-station-management/add-update-station-management.page.ts");







var AddUpdateStationManagementPageModule = /** @class */ (function () {
    function AddUpdateStationManagementPageModule() {
    }
    AddUpdateStationManagementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _add_update_station_management_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddUpdateStationManagementPageRoutingModule"]
            ],
            declarations: [_add_update_station_management_page__WEBPACK_IMPORTED_MODULE_6__["AddUpdateStationManagementPage"]]
        })
    ], AddUpdateStationManagementPageModule);
    return AddUpdateStationManagementPageModule;
}());



/***/ }),

/***/ "./src/app/HO/add-update-station-management/add-update-station-management.page.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/HO/add-update-station-management/add-update-station-management.page.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form ion-toggle {\n  padding: 1%;\n}\nform .error-message {\n  color: #ff0000;\n}\n.home_button {\n  --background: #ffffff;\n  --color: #2a2a2a;\n  --background-hover: #fff;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvSE8vYWRkLXVwZGF0ZS1zdGF0aW9uLW1hbmFnZW1lbnQvYWRkLXVwZGF0ZS1zdGF0aW9uLW1hbmFnZW1lbnQucGFnZS5zY3NzIiwic3JjL2FwcC9ITy9hZGQtdXBkYXRlLXN0YXRpb24tbWFuYWdlbWVudC9hZGQtdXBkYXRlLXN0YXRpb24tbWFuYWdlbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR1E7RUFDSSxXQUFBO0FDRlo7QURLUTtFQUFlLGNBQUE7QUNGdkI7QURLQTtFQUVJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL0hPL2FkZC11cGRhdGUtc3RhdGlvbi1tYW5hZ2VtZW50L2FkZC11cGRhdGUtc3RhdGlvbi1tYW5hZ2VtZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm17XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIGlvbi10b2dnbGV7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDElO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmVycm9yLW1lc3NhZ2V7Y29sb3I6ICNmZjAwMDA7XHJcbiAgICAgICAgfVxyXG59XHJcbi5ob21lX2J1dHRvblxyXG57XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAtLWNvbG9yOiAjMmEyYTJhO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59IiwiZm9ybSBpb24tdG9nZ2xlIHtcbiAgcGFkZGluZzogMSU7XG59XG5mb3JtIC5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6ICNmZjAwMDA7XG59XG5cbi5ob21lX2J1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgLS1jb2xvcjogIzJhMmEyYTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/HO/add-update-station-management/add-update-station-management.page.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/HO/add-update-station-management/add-update-station-management.page.ts ***!
  \****************************************************************************************/
/*! exports provided: AddUpdateStationManagementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUpdateStationManagementPage", function() { return AddUpdateStationManagementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var AddUpdateStationManagementPage = /** @class */ (function () {
    function AddUpdateStationManagementPage(datepipe, formBuilder, router, activatedroute, commonServices) {
        this.datepipe = datepipe;
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedroute = activatedroute;
        this.commonServices = commonServices;
        this.status = false;
        this.OpeBalance = '0.00';
        this.compareWithFn = function (o1, o2) {
            return o1 && o2 ? o1.id === o2.id : o1 === o2;
        };
        this.compareWith = this.compareWithFn;
        this.userid = localStorage.getItem("UID");
        this.pageFlag = this.activatedroute.snapshot.paramMap.get("pageFlag");
        this.addForm = formBuilder.group({
            StationId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            StationCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            StationName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            StationAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            StationRegionId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            StationCompanyId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            StationTypeId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            MoId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            StationLoginId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            StationPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            StationConfPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ControlRoomId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            StationEmailId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            StationContactNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            Status: this.status,
            OpeBalance: parseFloat(this.OpeBalance),
            ShutdownRemark: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ShiftAManagerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ShiftAManagerContactNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ShiftBManagerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ShiftBManagerContactNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ShiftCManagerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ShiftCManagerContactNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ShiftDManagerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ShiftDManagerContactNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    ;
    ;
    ;
    AddUpdateStationManagementPage.prototype.ngAfterContentInit = function () {
        this.addForm;
    };
    AddUpdateStationManagementPage.prototype.ngOnInit = function () {
        this.stationid = JSON.parse(this.activatedroute.snapshot.paramMap.get("stationid"));
        this.getStationMListById(this.stationid);
    };
    AddUpdateStationManagementPage.prototype.onSelectChange = function (selectedValue) {
        this.SelectedYValueId = selectedValue.detail.value;
        console.log(this.SelectedYValueId);
    };
    AddUpdateStationManagementPage.prototype.getStationMListById = function (StationId) {
        var _this = this;
        var self = this;
        self.commonServices.loadingPresent();
        self.commonServices.post("CommonGetData", { Flag: 'SoById', Id: StationId })
            .subscribe(function (res) {
            var StaionmRes = JSON.parse(res);
            self.stationmlist = StaionmRes.Table[0];
            self.dataRegionMaster = StaionmRes.Table1;
            self.dataCompanyMaster = StaionmRes.Table2;
            self.dataStationTypeMaster = StaionmRes.Table3;
            self.dataMoMaster = StaionmRes.Table4;
            self.dataCRoomMaster = StaionmRes.Table5;
            console.log(self.stationmlist);
            if (_this.stationmlist != "" && _this.stationmlist != undefined) {
                _this.addForm = _this.formBuilder.group({
                    StationId: [_this.stationmlist.StationId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    StationCode: [_this.stationmlist.StationCode, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    StationName: [_this.stationmlist.StationName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    StationAddress: [_this.stationmlist.StationAddress, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    StationRegionId: [_this.stationmlist.StationRegionId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    StationCompanyId: [_this.stationmlist.StationCompanyId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    StationTypeId: [_this.stationmlist.StationTypeId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    MoId: [_this.stationmlist.MoId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    StationLoginId: [_this.stationmlist.LoginId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    StationPassword: [_this.stationmlist.StationId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    StationConfPassword: [_this.stationmlist.StationId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    ControlRoomId: [_this.stationmlist.ControlRoomId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    StationEmailId: [_this.stationmlist.EmailId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    StationContactNo: [_this.stationmlist.ContactNo, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    Status: _this.stationmlist.Status,
                    OpeBalance: parseFloat(_this.stationmlist.OpeBalance),
                    ShutdownRemark: [_this.stationmlist.ShutdownRemark, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    ShiftAManagerName: [_this.stationmlist.ShiftAManager, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    ShiftAManagerContactNo: [_this.stationmlist.ShiftAManagerContact, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    ShiftBManagerName: [_this.stationmlist.ShiftBManager, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    ShiftBManagerContactNo: [_this.stationmlist.ShiftBManagerContact, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    ShiftCManagerName: [_this.stationmlist.ShiftCManager, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    ShiftCManagerContactNo: [_this.stationmlist.ShiftCManagerContact, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    ShiftDManagerName: [_this.stationmlist.ShiftDManager, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    ShiftDManagerContactNo: [_this.stationmlist.ShiftDManagerContact, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                });
                if (self.stationmlist.StatusSort == 'Inactive') {
                    _this.status = false;
                }
                else {
                    _this.status = true;
                }
            }
            console.log(_this.updateForm);
            self.commonServices.loadingDismiss();
        }, function (error) {
            self.commonServices.presentToast("Something went wrong.");
            self.commonServices.loadingDismiss();
        });
    };
    AddUpdateStationManagementPage.prototype.StationMList = function (StationMList) {
        throw new Error("Method not implemented.");
    };
    AddUpdateStationManagementPage.prototype.Insertstation = function () {
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
        if (self.stationid != "") {
            self.title = 'Update Station';
            self.actionFlag = 'Update';
            self.SelectedStationId = self.stationid;
        }
        else {
            self.title = 'Add Station';
            self.actionFlag = 'Add';
            self.SelectedStationId = '0';
        }
        if (self.validationSO()) {
            var obj = {
                StationId: (self.actionFlag == 'Update') ? self.SelectedStationId : '0',
                StationCode: self.addForm.value.StationCode,
                StationName: self.addForm.value.StationName,
                StationAddress: self.addForm.value.StationAddress,
                Status: statusToggle,
                StationPassword: self.addForm.value.StationPassword,
                StationRegionId: self.addForm.value.StationRegionId,
                StationCompanyId: self.addForm.value.StationCompanyId,
                StationTypeId: self.addForm.value.StationTypeId,
                MoId: self.addForm.value.MoId,
                ControlRoomId: self.addForm.value.ControlRoomId,
                StationLoginId: self.addForm.value.StationLoginId,
                StationEmailId: self.addForm.value.StationEmailId,
                StationContactNo: self.addForm.value.StationContactNo,
                ShiftAManagerName: self.addForm.value.ShiftAManagerName,
                ShiftAManagerContactNo: self.addForm.value.ShiftAManagerContactNo,
                ShiftBManagerName: self.addForm.value.ShiftBManagerName,
                ShiftBManagerContactNo: self.addForm.value.ShiftBManagerContactNo,
                ShiftCManagerName: self.addForm.value.ShiftCManagerName,
                ShiftCManagerContactNo: self.addForm.value.ShiftCManagerContactNo,
                ShiftDManagerName: self.addForm.value.ShiftDManagerName,
                ShiftDManagerContactNo: self.addForm.value.ShiftDManagerContactNo,
                OpeBalance: parseFloat(self.addForm.value.OpeBalance),
                ShutdownRemark: self.addForm.value.ShutdownRemark
            };
            self.commonServices.loadingPresent();
            self.commonServices.post("SOInsertUpdate", obj).subscribe(function (res) {
                var StRes = JSON.parse(res);
                console.log(StRes);
                if (StRes.Table[0].Meaasge == "Station created successfully.") {
                    self.commonServices.presentToast(StRes.Table[0].Meaasge);
                    self.addForm.reset();
                    setTimeout(function () {
                        self.router.navigate(['/station-management']);
                    }, 2000);
                }
                else if (StRes.Table[0].Meaasge == "Station updated successfully.") {
                    self.commonServices.presentToast(StRes.Table[0].Meaasge);
                    self.addForm.reset();
                    setTimeout(function () {
                        self.router.navigate(['/station-management']);
                    }, 2000);
                }
                else {
                    self.commonServices.presentToast(StRes.Table[0].Meaasge);
                    if (StRes.Table[0].Meaasge == '') {
                        self.commonServices.presentToast("Something went wrong.");
                    }
                }
                self.commonServices.loadingDismiss();
            }, function (error) {
                self.commonServices.presentToast("Something went wrong.");
                self.commonServices.loadingDismiss();
            });
        }
    };
    AddUpdateStationManagementPage.prototype.validationSO = function () {
        var re = new RegExp(/^[0-9]*$/);
        var len = new RegExp(/^.{1,50}$/);
        var Ope = /^\s*(?=.*[1-9])\d*(?:\.\d{1,3})?\s*$/g;
        if (this.addForm.value.StationCode == '') {
            this.commonServices.presentToast('Station code must be filled.');
            this.errorFound = false;
            return this.errorFound;
        }
        else if (this.addForm.value.StationCode.length < 3) {
            this.commonServices.presentToast('Station code must be min. 3 character.');
            this.errorFound = false;
            return this.errorFound;
        }
        else if (this.addForm.value.StationName == '') {
            this.commonServices.presentToast('Station name must be filled.');
            this.errorFound = false;
            return this.errorFound;
        }
        else if (this.addForm.value.StationName.length < 3) {
            this.commonServices.presentToast('Station name must be min. 3 character.');
            this.errorFound = false;
            return this.errorFound;
        }
        else if (re.test(this.addForm.value.StationName)) {
            this.commonServices.presentToast('Invalid Station Name.');
            this.errorFound = false;
        }
        else if (this.addForm.value.StationAddress == '') {
            this.commonServices.presentToast('Station address must be filled.');
            this.errorFound = false;
        }
        else if (this.addForm.value.StationRegionId == '') {
            this.commonServices.presentToast('Region must be selected.');
            this.errorFound = false;
        }
        else if (this.addForm.value.StationCompanyId == '') {
            this.commonServices.presentToast('Company must be selected.');
            this.errorFound = false;
        }
        else if (this.addForm.value.StationTypeId == '') {
            this.commonServices.presentToast('Station type must be selected.');
            this.errorFound = false;
        }
        else if (this.addForm.value.MoId == '') {
            // this.commonServices.presentToast('Marketing officer must be selected.');
            this.commonServices.presentToast('DSO must be selected.');
            this.errorFound = false;
        }
        else if (this.addForm.value.ControlRoomId == '' || this.addForm.value.ControlRoomId == '--Select Control Room--') {
            this.commonServices.presentToast('Control Room must be selected.');
            this.errorFound = false;
        }
        else if (this.OpeBalance != "0.00") {
            if (!Ope.test(this.addForm.value.OpeBalance) && this.addForm.value.actionFlag == 'Add') {
                this.commonServices.presentToast('Invalid Ope. Balance.');
                this.errorFound = false;
            }
        }
        else if (this.addForm.value.StationLoginId == '' && this.addForm.value.actionFlag == 'Add') {
            this.commonServices.presentToast('Login Id must be filled.');
            this.errorFound = false;
        }
        else if (this.addForm.value.StationPassword == '' && this.addForm.value.actionFlag == 'Add') {
            this.commonServices.presentToast('Station password must be filled.');
            this.errorFound = false;
        }
        else if (this.addForm.value.StationConfPassword == '' && this.addForm.value.actionFlag == 'Add') {
            this.commonServices.presentToast('Confirm password must be filled.');
            this.errorFound = false;
        }
        else if (this.addForm.value.StationPassword != this.addForm.value.StationConfPassword && this.addForm.value.actionFlag == 'Add') {
            this.commonServices.presentToast('Password did not matched.');
            this.errorFound = false;
        }
        else if (this.addForm.value.ShiftAManagerContactNo == '' && this.addForm.value.actionFlag == 'Add') {
            this.commonServices.presentToast('Shift A Manager Name must be filled.');
            this.errorFound = false;
            return this.errorFound;
        }
        else if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.addForm.value.ShiftAManagerName) || this.addForm.value.ShiftAManagerName == "") {
            this.commonServices.presentToast('Shift A Manager Name must be filled.');
            this.errorFound = false;
            return this.errorFound;
        }
        else if (this.addForm.value.ShiftAManagerContactNo == '' && this.addForm.value.actionFlag == 'Add') {
            this.commonServices.presentToast('Shift A Contact No must be filled.');
            this.errorFound = false;
            return this.errorFound;
        }
        else if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.addForm.value.ShiftAManagerContactNo)) {
            this.commonServices.presentToast('Shift A Contact No must be filled.');
            this.errorFound = false;
            return this.errorFound;
        }
        // else if(this.ShiftAManagerContactNo != ''){
        //   var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        //   const isValidated = this.ShiftAManagerContactNo.match(phoneno);
        //   if(isNullOrUndefined(isValidated))
        //   {
        //     this.commonServices.presentToast('You have entered an invalid contact no. of Shift D');
        //     return this.errorFound = false;
        //   }
        // }
        else if (this.addForm.value.ShiftBManagerName == '' && this.addForm.value.actionFlag == 'Add') {
            this.commonServices.presentToast('Shift B Manager Name must be filled.');
            this.errorFound = false;
            return this.errorFound;
        }
        else if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.addForm.value.ShiftBManagerName) || this.addForm.value.ShiftBManagerName == "") {
            this.commonServices.presentToast('Shift B Manager Name must be filled.');
            this.errorFound = false;
            return this.errorFound;
        }
        else if (this.addForm.value.ShiftBManagerContactNo == '' && this.addForm.value.actionFlag == 'Add') {
            this.commonServices.presentToast('Shift B Contact No must be filled.');
            this.errorFound = false;
            return this.errorFound;
        }
        else if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.addForm.value.ShiftBManagerContactNo)) {
            this.commonServices.presentToast('Shift B Contact No must be filled.');
            this.errorFound = false;
            return this.errorFound;
        }
        // else if(this.ShiftBManagerContactNo != ''){
        //   var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        //   const isValidated = this.ShiftBManagerContactNo.match(phoneno);
        //   if(isValidated==null)
        //   {
        //     this.commonServices.presentToast('You have entered an invalid contact no. of Shift B');
        //     return this.errorFound = false;
        //   }
        // }
        else if (this.addForm.value.ShiftCManagerName == '' && this.addForm.value.actionFlag == 'Add') {
            this.commonServices.presentToast('Shift C Manager Name must be filled.');
            this.errorFound = false;
            return this.errorFound;
        }
        else if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.addForm.value.ShiftCManagerName) || this.addForm.value.ShiftCManagerName == "") {
            this.commonServices.presentToast('Shift C Manager Name must be filled.');
            this.errorFound = false;
            return this.errorFound;
        }
        else if (this.addForm.value.ShiftCManagerContactNo == '' && this.addForm.value.actionFlag == 'Add') {
            this.commonServices.presentToast('Shift C Contact No must be filled.');
            this.errorFound = false;
            return this.errorFound;
        }
        else if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.addForm.value.ShiftCManagerContactNo)) {
            this.commonServices.presentToast('Shift C Contact No must be filled.');
            this.errorFound = false;
            return this.errorFound;
        }
        // else if(this.ShiftCManagerContactNo != ''){
        //   var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        //   const isValidated = this.ShiftCManagerContactNo.match(phoneno);
        //   if(isValidated==null)
        //   {
        //     this.commonServices.presentToast('You have entered an invalid contact no. of Shift C');
        //     return this.errorFound = false;
        //   } 
        // }
        else if (this.addForm.value.ShiftDManagerName == '' && this.addForm.value.actionFlag == 'Add') {
            this.commonServices.presentToast('Shift D Manager Name must be filled.');
            this.errorFound = false;
            return this.errorFound;
        }
        else if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.addForm.value.ShiftDManagerName) || this.addForm.value.ShiftDManagerName == "") {
            this.commonServices.presentToast('Shift D Manager Name must be filled.');
            this.errorFound = false;
            return this.errorFound;
        }
        else if (this.addForm.value.ShiftDManagerContactNo == '') {
            this.commonServices.presentToast('Shift D Contact No must be filled.');
            this.errorFound = false;
            return this.errorFound;
        }
        else if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.addForm.value.ShiftDManagerContactNo)) {
            this.commonServices.presentToast('Shift D Contact No must be filled.');
            this.errorFound = false;
            return this.errorFound;
        }
        // else if(this.ShiftDManagerContactNo != ''){
        //   var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        //   const isValidated = this.ShiftDManagerContactNo.match(phoneno);
        //   if(isValidated==null)
        //   {
        //     this.commonServices.presentToast('You have entered an invalid contact no. of Shift D');
        //     return this.errorFound = false;
        //   }
        // }
        else if (this.addForm.value.ShiftAManagerName.length < 3) {
            this.commonServices.presentToast('Shift A Manager Name must be min. 3 character.');
            this.errorFound = false;
            return this.errorFound;
        }
        else if (this.addForm.value.ShiftBManagerName.length < 3) {
            this.commonServices.presentToast('Shift B Manager Name must be min. 3 character.');
            this.errorFound = false;
            return this.errorFound;
        }
        else if (this.addForm.value.ShiftCManagerName.length < 3) {
            this.commonServices.presentToast('Shift C Manager Name must be min. 3 character.');
            this.errorFound = false;
            return this.errorFound;
        }
        else if (this.addForm.value.ShiftDManagerName.length < 3) {
            this.commonServices.presentToast('Shift D Manager Name must be min. 3 character.');
            this.errorFound = false;
            return this.errorFound;
        }
        // else if(this.StationEmailId == ''){
        //   this.commonServices.presentToast('Email Id must be filled.');
        //   this.errorFound = false;
        // }
        // else if(this.StationContactNo == ''){
        //   this.commonServices.presentToast('Contact number must be filled.');
        //   this.errorFound = false;
        // }
        if (this.addForm.value.StationEmailId != '') {
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var isValidated = this.addForm.value.StationEmailId.match(mailformat);
            if (isValidated == null) {
                this.commonServices.presentToast('You have entered an invalid email address.');
                this.errorFound = false;
            }
        }
        if (this.addForm.value.StationContactNo != '') {
            var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            var isValidated = this.addForm.value.StationContactNo.match(phoneno);
            if (isValidated == null) {
                this.commonServices.presentToast('You have entered an invalid contact no.');
                this.errorFound = false;
            }
        }
        if (this.addForm.value.ShiftAManagerContactNo != '') {
            var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            var isValidated = this.addForm.value.ShiftAManagerContactNo.match(phoneno);
            if (isValidated == null) {
                this.commonServices.presentToast('You have entered an invalid contact no. of Shift A');
                return this.errorFound = false;
            }
        }
        if (this.addForm.value.ShiftBManagerContactNo != '') {
            var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            var isValidated = this.addForm.value.ShiftBManagerContactNo.match(phoneno);
            if (isValidated == null) {
                this.commonServices.presentToast('You have entered an invalid contact no. of Shift B');
                return this.errorFound = false;
            }
        }
        if (this.addForm.value.ShiftCManagerContactNo != '') {
            var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            var isValidated = this.addForm.value.ShiftCManagerContactNo.match(phoneno);
            if (isValidated == null) {
                this.commonServices.presentToast('You have entered an invalid contact no. of Shift C');
                return this.errorFound = false;
            }
        }
        if (this.addForm.value.ShiftDManagerContactNo != '') {
            var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            var isValidated = this.addForm.value.ShiftDManagerContactNo.match(phoneno);
            if (isValidated == null) {
                this.commonServices.presentToast('You have entered an invalid contact no. of Shift D');
                return this.errorFound = false;
            }
        }
        if (this.addForm.value.Status == false) {
            if (this.addForm.value.ShutdownRemark == '') {
                this.commonServices.presentToast('You have entered Shutdown Remark.');
                this.errorFound = false;
            }
        }
        return this.errorFound;
    };
    AddUpdateStationManagementPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
    ]; };
    AddUpdateStationManagementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-update-station-management',
            template: __webpack_require__(/*! raw-loader!./add-update-station-management.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/add-update-station-management/add-update-station-management.page.html"),
            styles: [__webpack_require__(/*! ./add-update-station-management.page.scss */ "./src/app/HO/add-update-station-management/add-update-station-management.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], AddUpdateStationManagementPage);
    return AddUpdateStationManagementPage;
}());



/***/ })

}]);
//# sourceMappingURL=HO-add-update-station-management-add-update-station-management-module-es5.js.map