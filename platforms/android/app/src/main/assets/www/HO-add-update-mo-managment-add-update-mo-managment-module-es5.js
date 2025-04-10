(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-add-update-mo-managment-add-update-mo-managment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/add-update-mo-managment/add-update-mo-managment.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/add-update-mo-managment/add-update-mo-managment.page.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--add Mo-->\r\n<ion-header *ngIf=\"pageFlag =='addmo'\">\r\n\t<ion-toolbar color=\"dark_green\">\r\n\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-left\">\r\n\t\t\t\t<ion-back-button defaultHref=\"mo-management\" class=\"text_white\"></ion-back-button>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"8\" class=\"ion-text-center\">\r\n\t\t\t\t<ion-text  class=\"text_white\">Add DSO</ion-text>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-center\">\r\n\t\t\t\t\r\n\t\t\t</ion-col>\r\n\r\n\t\t</ion-row>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"pageFlag =='addmo'\">\r\n\t<form [formGroup]=\"addForm\" (ngSubmit)=\"InsertMo()\">\r\n\t\t<ion-grid>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Name </ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" placeholder=\"Name\" formControlName=\"name\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Login Id </ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"loginid\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Password </ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"password\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Confirm Password </ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"cpassword\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Primary Email </ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" placeholder=\"Primary Email\" formControlName=\"email\"></ion-input>\r\n\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Email Id 2 </ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"email2\"></ion-input>\r\n\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Email Id 3 </ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"email3\"></ion-input>\r\n\r\n\t\t\t\t</ion-col>\r\n\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Primary Contact No </ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"contact1\">\r\n\t\t\t\t\t</ion-input>\r\n\r\n\t\t\t\t</ion-col>\r\n\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Contact No 2 </ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"contact2\"></ion-input>\r\n\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Contact No 3 </ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"contact3\"></ion-input>\r\n\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Contact No 4 </ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"contact4\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-grid>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>Status</ion-col>\r\n\t\t\t<ion-col class=\"d_flex ion-justify-content-end\">\r\n\t\t\t\t<ion-toggle [(ngModel)]=\"status\" [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<div class=\"button_container\">\r\n\t\t\t\t\t<ion-button color=\"dark_green_clr\"  type=\"submit\">Submit </ion-button>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</form>\r\n</ion-content>\r\n\r\n\r\n<!--Update Mo-->\r\n<ion-header *ngIf=\"pageFlag =='updatemo'\">\r\n\t<ion-toolbar color=\"dark_green\">\r\n\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-left\">\r\n\t\t\t\t<ion-back-button defaultHref=\"mo-management\" class=\"text_white\"></ion-back-button>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"8\" class=\"ion-text-center\">\r\n\t\t\t\t<ion-text  class=\"text_white\">Update DSO</ion-text>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-center\">\r\n\t\t\t\t\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"pageFlag =='updatemo'\">\r\n\t<form [formGroup]=\"addForm\" (ngSubmit)=\"UpdateMo()\">\r\n\t\t<ion-grid>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Name </ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"name\"></ion-input>\r\n\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Login Id </ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"loginid\"></ion-input>\r\n\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Password </ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"password\"></ion-input>\r\n\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Confirm Password </ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"cpassword\">\r\n\t\t\t\t\t</ion-input>\r\n\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Primary Email </ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"email\"></ion-input>\r\n\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Email Id 2 </ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"email2\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Email Id 3 </ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\"  formControlName=\"email3\"></ion-input>\r\n\r\n\t\t\t\t</ion-col>\r\n\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Primary Contact No </ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"contact1\">\r\n\t\t\t\t\t</ion-input>\r\n\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Contact No 2 </ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" placeholder=\"\" formControlName=\"contact2\">\r\n\t\t\t\t\t</ion-input>\r\n\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Contact No 3</ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"contact3\"></ion-input>\r\n\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Contact No 4</ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"contact4\"></ion-input>\r\n\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-grid>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>Status</ion-col>\r\n\t\t\t<ion-col class=\"d_flex ion-justify-content-end\">\r\n\t\t\t\t<ion-toggle [(ngModel)]=\"status\" [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<div class=\"button_container\">\r\n\t\t\t\t\t<ion-button color=\"dark_green_clr\" type=\"submit\">Submit </ion-button>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\r\n\t\t\r\n\t</form>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/HO/add-update-mo-managment/add-update-mo-managment-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/HO/add-update-mo-managment/add-update-mo-managment-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: AddUpdateMoManagmentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUpdateMoManagmentPageRoutingModule", function() { return AddUpdateMoManagmentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_update_mo_managment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-update-mo-managment.page */ "./src/app/HO/add-update-mo-managment/add-update-mo-managment.page.ts");




var routes = [
    {
        path: '',
        component: _add_update_mo_managment_page__WEBPACK_IMPORTED_MODULE_3__["AddUpdateMoManagmentPage"]
    }
];
var AddUpdateMoManagmentPageRoutingModule = /** @class */ (function () {
    function AddUpdateMoManagmentPageRoutingModule() {
    }
    AddUpdateMoManagmentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AddUpdateMoManagmentPageRoutingModule);
    return AddUpdateMoManagmentPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/HO/add-update-mo-managment/add-update-mo-managment.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/HO/add-update-mo-managment/add-update-mo-managment.module.ts ***!
  \******************************************************************************/
/*! exports provided: AddUpdateMoManagmentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUpdateMoManagmentPageModule", function() { return AddUpdateMoManagmentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_update_mo_managment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-update-mo-managment-routing.module */ "./src/app/HO/add-update-mo-managment/add-update-mo-managment-routing.module.ts");
/* harmony import */ var _add_update_mo_managment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-update-mo-managment.page */ "./src/app/HO/add-update-mo-managment/add-update-mo-managment.page.ts");







var AddUpdateMoManagmentPageModule = /** @class */ (function () {
    function AddUpdateMoManagmentPageModule() {
    }
    AddUpdateMoManagmentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _add_update_mo_managment_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddUpdateMoManagmentPageRoutingModule"]
            ],
            declarations: [_add_update_mo_managment_page__WEBPACK_IMPORTED_MODULE_6__["AddUpdateMoManagmentPage"]]
        })
    ], AddUpdateMoManagmentPageModule);
    return AddUpdateMoManagmentPageModule;
}());



/***/ }),

/***/ "./src/app/HO/add-update-mo-managment/add-update-mo-managment.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/HO/add-update-mo-managment/add-update-mo-managment.page.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form ion-toggle {\n  padding: 1%;\n}\nform .error-message {\n  color: #ff0000;\n}\n.home_button {\n  --background: #ffffff;\n  --color: #2a2a2a;\n  --background-hover: #fff;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvSE8vYWRkLXVwZGF0ZS1tby1tYW5hZ21lbnQvYWRkLXVwZGF0ZS1tby1tYW5hZ21lbnQucGFnZS5zY3NzIiwic3JjL2FwcC9ITy9hZGQtdXBkYXRlLW1vLW1hbmFnbWVudC9hZGQtdXBkYXRlLW1vLW1hbmFnbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR1E7RUFDSSxXQUFBO0FDRlo7QURLUTtFQUFlLGNBQUE7QUNGdkI7QURLQTtFQUVJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL0hPL2FkZC11cGRhdGUtbW8tbWFuYWdtZW50L2FkZC11cGRhdGUtbW8tbWFuYWdtZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm17XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIGlvbi10b2dnbGV7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDElO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmVycm9yLW1lc3NhZ2V7Y29sb3I6ICNmZjAwMDA7XHJcbiAgICAgICAgfVxyXG59XHJcbi5ob21lX2J1dHRvblxyXG57XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAtLWNvbG9yOiAjMmEyYTJhO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4iLCJmb3JtIGlvbi10b2dnbGUge1xuICBwYWRkaW5nOiAxJTtcbn1cbmZvcm0gLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogI2ZmMDAwMDtcbn1cblxuLmhvbWVfYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAtLWNvbG9yOiAjMmEyYTJhO1xuICAtLWJhY2tncm91bmQtaG92ZXI6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/HO/add-update-mo-managment/add-update-mo-managment.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/HO/add-update-mo-managment/add-update-mo-managment.page.ts ***!
  \****************************************************************************/
/*! exports provided: AddUpdateMoManagmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUpdateMoManagmentPage", function() { return AddUpdateMoManagmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");





var AddUpdateMoManagmentPage = /** @class */ (function () {
    function AddUpdateMoManagmentPage(formBuilder, router, activatedroute, commonServices) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedroute = activatedroute;
        this.commonServices = commonServices;
        this.status = false;
        this.title = '';
        this.actionFlag = '';
        this.userid = localStorage.getItem("UID");
        this.pageFlag = this.activatedroute.snapshot.paramMap.get("pageFlag");
        this.updateItemList = JSON.parse(this.activatedroute.snapshot.paramMap.get("arrayItem"));
        console.log(this.updateItemList);
        this.addForm = formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            loginid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            contact1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            contact2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            contact3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            contact4: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    AddUpdateMoManagmentPage.prototype.ngAfterContentInit = function () {
        if (this.pageFlag == "updatemo") {
            if (this.updateItemList.StatusSort == 'Inactive') {
                this.status = false;
            }
            else {
                this.status = true;
            }
            ;
            this.addForm = this.formBuilder.group({
                name: [this.updateItemList.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                loginid: [this.updateItemList.LoginId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                cpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                email: [this.updateItemList.EmailId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                email1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                email2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                email3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                email4: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                contact1: [this.updateItemList.ContactNo, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                contact2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                contact3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                contact4: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            });
        }
    };
    AddUpdateMoManagmentPage.prototype.ngOnInit = function () {
    };
    AddUpdateMoManagmentPage.prototype.InsertMo = function () {
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
        self.title = 'Add Marketing Officer';
        self.actionFlag = 'Add';
        self.errorFound = true;
        if (self.validationMom()) {
            var obj = {
                MOId: self.userid,
                MOName: self.addForm.value.name,
                MOLoginId: self.addForm.value.loginid,
                MOPassword: self.addForm.value.password,
                MOEmailId: self.addForm.value.email,
                MOEmailId2: self.addForm.value.email1,
                MOEmailId3: self.addForm.value.email2,
                // email4:self.addForm.value.email4,
                MOContactNo: self.addForm.value.contact1,
                MOContactNo2: self.addForm.value.contact2,
                MOContactNo3: self.addForm.value.contact3,
                MOContactNo4: self.addForm.value.contact4,
                Status: statusToggle
            };
            self.commonServices.loadingPresent();
            self.commonServices.post("MOInsertUpdate", obj).subscribe(function (res) {
                var moRes = JSON.parse(res);
                if (moRes.Table[0].Meaasge == "Marketing officer updated successfully.") {
                    self.commonServices.presentToast(moRes.Table[0].Meaasge);
                    self.addForm.reset();
                    setTimeout(function () {
                        self.router.navigate(['/mo-management']);
                    }, 2000);
                }
                else if (moRes.Table[0].Meaasge == "Email Id already exists.") {
                    self.commonServices.presentToast(moRes.Table[0].Meaasge);
                }
                else {
                    self.commonServices.presentToast(moRes.Table[0].Meaasge);
                }
                self.commonServices.loadingDismiss();
            }, function (error) {
                self.commonServices.presentToast("Something went wrong.");
                self.commonServices.loadingDismiss();
            });
        }
    };
    AddUpdateMoManagmentPage.prototype.UpdateMo = function () {
        {
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
            this.title = 'Update Marketing Officer';
            this.actionFlag = 'Update';
            self.errorFound = true;
            var obj = {
                MOId: self.updateItemList.UserId,
                MOName: self.addForm.value.name,
                MOLoginId: self.addForm.value.loginid,
                MOPassword: self.addForm.value.password,
                MOEmailId: self.addForm.value.email,
                MOEmailId2: self.addForm.value.email1,
                MOEmailId3: self.addForm.value.email2,
                MOEmailId4: self.addForm.value.email3,
                // email4:self.addForm.value.email4,
                MOContactNo: self.addForm.value.contact1,
                MOContactNo2: self.addForm.value.contact2,
                MOContactNo3: self.addForm.value.contact3,
                MOContactNo4: self.addForm.value.contact4,
                Status: statusToggle
            };
            self.commonServices.loadingPresent();
            self.commonServices.post("MOInsertUpdate", obj).subscribe(function (res) {
                var moRes = JSON.parse(res);
                if (moRes.Table[0].Meaasge == "Marketing officer updated successfully.") {
                    self.commonServices.presentToast(moRes.Table[0].Meaasge);
                    self.addForm.reset();
                    setTimeout(function () {
                        self.router.navigate(['/mo-management']);
                    }, 2000);
                }
                self.commonServices.loadingDismiss();
            }, function (error) {
                self.commonServices.presentToast("Something went wrong.");
                self.commonServices.loadingDismiss();
            });
        }
    };
    //for validation check
    AddUpdateMoManagmentPage.prototype.validationMom = function () {
        if (this.addForm.value.name == '') {
            this.commonServices.presentToast('Name must be filled.');
            this.errorFound = false;
            return this.errorFound;
        }
        var re = new RegExp(/^[a-zA-Z ]*$/);
        if (!re.test(this.addForm.value.name)) {
            this.commonServices.presentToast('Invalid Name.');
            this.errorFound = false;
            return this.errorFound;
        }
        else if (this.addForm.value.loginid == '') {
            this.commonServices.presentToast('Login Id must be filled.');
            this.errorFound = false;
            return this.errorFound;
        }
        else if (this.addForm.value.password == '' && this.addForm.value.actionFlag == 'Add') {
            this.commonServices.presentToast('Password must be filled.');
            this.errorFound = false;
            return this.errorFound;
        }
        else if (this.addForm.value.cpassword == '' && this.addForm.value.actionFlag == 'Add') {
            this.commonServices.presentToast('Confirm password must be filled.');
            this.errorFound = false;
            return this.errorFound;
        }
        else if (this.addForm.value.password != this.addForm.value.cpassword && this.addForm.value.actionFlag == 'Add') {
            this.commonServices.presentToast('Password did not match.');
            this.errorFound = false;
            return this.errorFound;
        }
        else if (this.addForm.value.email == '') {
            this.commonServices.presentToast('Primary Email address must be filled.');
            this.errorFound = false;
            return this.errorFound;
        }
        else if (this.addForm.value.contact1 == '') {
            this.commonServices.presentToast('Primary Contact number must be filled.');
            this.errorFound = false;
            return this.errorFound;
        }
        if (this.addForm.value.email != '' && this.addForm.value.email != null) {
            //const mailformat  = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var isValidated = this.addForm.value.email.match(mailformat);
            if (isValidated == null) {
                this.commonServices.presentToast('You have entered an invalid Primary email address.');
                this.errorFound = false;
                return this.errorFound;
            }
        }
        if (this.addForm.value.email1 != '' && this.addForm.value.email1 != null) {
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var isValidated = this.addForm.value.email1.match(mailformat);
            if (isValidated == null) {
                this.commonServices.presentToast('You have entered an invalid email 2 address.');
                this.errorFound = false;
                return this.errorFound;
            }
        }
        if (this.addForm.value.email2 != '' && this.addForm.value.email2 != null) {
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var isValidated = this.addForm.value.email2.match(mailformat);
            if (isValidated == null) {
                this.commonServices.presentToast('You have entered an invalid email 3 address.');
                this.errorFound = false;
                return this.errorFound;
            }
        }
        if (this.addForm.value.email3 != '' && this.addForm.value.email3 != null) {
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var isValidated = this.addForm.value.email3.match(mailformat);
            if (isValidated == null) {
                this.commonServices.presentToast('You have entered an invalid email 4 address.');
                this.errorFound = false;
                return this.errorFound;
            }
        }
        if (this.addForm.value.contact1 != '' && this.addForm.value.contact1 != null) {
            var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            var isValidated = this.addForm.value.contact1.match(phoneno);
            if (isValidated == null) {
                this.commonServices.presentToast('You have entered an invalid Primary contact no.');
                this.errorFound = false;
                return this.errorFound;
            }
        }
        if (this.addForm.value.contact2 != '' && this.addForm.value.contact2 != null) {
            var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            var isValidated = this.addForm.value.contact2.match(phoneno);
            if (isValidated == null) {
                this.commonServices.presentToast('You have entered an invalid contact no 2.');
                this.errorFound = false;
                return this.errorFound;
            }
        }
        if (this.addForm.value.contact3 != '' && this.addForm.value.contact3 != null) {
            var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            var isValidated = this.addForm.value.contact3.match(phoneno);
            if (isValidated == null) {
                this.commonServices.presentToast('You have entered an invalid contact no 3.');
                this.errorFound = false;
                return this.errorFound;
            }
        }
        if (this.addForm.value.contact4 != '' && this.addForm.value.contact4 != null) {
            var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            var isValidated = this.addForm.value.contact4.match(phoneno);
            if (isValidated == null) {
                this.commonServices.presentToast('You have entered an invalid contact no 4.');
                this.errorFound = false;
                return this.errorFound;
            }
        }
        // if (((this.addForm.value.email != '' && this.addForm.value.email != null) && (this.addForm.value.email1 == this.addForm.value.email1 || this.addForm.value.email2 == this.addForm.value.email1 || this.addForm.value.email == this.addForm.value.email3)) || ((this.addForm.value.email1 != '' && this.addForm.value.email1 != null) && (this.addForm.value.email1 == this.addForm.value.email2 || this.addForm.value.email1 == this.addForm.value.email13)) || ((this.addForm.value.email2 != '' && this.addForm.value.email2 != null) && (this.addForm.value.email2 == this.addForm.value.email3))) {
        //   this.commonServices.presentToast('Email must be unique');
        //   this.errorFound = false;
        //   return this.errorFound;
        // }
        if (((this.addForm.value.contact1 != '' && this.addForm.value.contact1 != null) && (this.addForm.value.contact1 == this.addForm.value.contact2 || this.addForm.value.contact1 == this.addForm.value.contact3 || this.addForm.value.contact1 == this.addForm.value.contact4)) || ((this.addForm.value.contact2 != '' && this.addForm.value.MOContactNo2 != null) && (this.addForm.value.contact2 == this.addForm.value.contact3 || this.addForm.value.contact2 == this.addForm.value.contact4)) || ((this.addForm.value.contact3 != '' && this.addForm.value.contact3 != null) && (this.addForm.value.contact3 == this.addForm.value.contact4))) {
            this.commonServices.presentToast('Contact no must be unique');
            this.errorFound = false;
            return this.errorFound;
        }
        return this.errorFound;
    };
    AddUpdateMoManagmentPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
    ]; };
    AddUpdateMoManagmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-update-mo-managment',
            template: __webpack_require__(/*! raw-loader!./add-update-mo-managment.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/add-update-mo-managment/add-update-mo-managment.page.html"),
            styles: [__webpack_require__(/*! ./add-update-mo-managment.page.scss */ "./src/app/HO/add-update-mo-managment/add-update-mo-managment.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], AddUpdateMoManagmentPage);
    return AddUpdateMoManagmentPage;
}());



/***/ })

}]);
//# sourceMappingURL=HO-add-update-mo-managment-add-update-mo-managment-module-es5.js.map