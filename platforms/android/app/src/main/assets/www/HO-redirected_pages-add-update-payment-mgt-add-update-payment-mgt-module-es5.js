(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-redirected_pages-add-update-payment-mgt-add-update-payment-mgt-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/redirected_pages/add-update-payment-mgt/add-update-payment-mgt.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/redirected_pages/add-update-payment-mgt/add-update-payment-mgt.page.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<ion-toolbar color=\"dark_green\">\r\n\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-left\">\r\n\t\t\t\t<ion-back-button defaultHref=\"payment-management\" class=\"text_white\"></ion-back-button>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"8\" class=\"ion-text-center\">\r\n\t\t\t\t<ion-text class=\"text_white\" *ngIf=\"pageFlag =='addds'\">Add Payment Mode</ion-text>\r\n\t\t\t\t<ion-text class=\"text_white\" *ngIf=\"pageFlag =='updateds'\">Update Payment Mode</ion-text>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-center\">\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<form [formGroup]=\"addForm\" (ngSubmit)=\"Insertpayement()\">\r\n\t\t<ion-grid>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Payment Mode<span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"PaymentMode\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Payment Mode Code<span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"PaymentModeCode\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Payment Mode Type <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-input class=\"inp_control\" formControlName=\"PaymentModeType\"></ion-input>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row class=\"align_center\">\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\tStatus\r\n\t\t\t\t</ion-col>\r\n\t\t\t\t<ion-col class=\"d_flex ion-justify-content-end\">\r\n\t\t\t\t\t<ion-toggle [(ngModel)]=\"status\" [ngModelOptions]=\"{standalone: true}\"></ion-toggle>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"button_container\">\r\n\t\t\t\t\t\t<ion-button type=\"submit\" color=\"dark_green_clr\">Save</ion-button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-grid>\r\n\t</form>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/HO/redirected_pages/add-update-payment-mgt/add-update-payment-mgt-routing.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-update-payment-mgt/add-update-payment-mgt-routing.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AddUpdatePaymentMgtPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUpdatePaymentMgtPageRoutingModule", function() { return AddUpdatePaymentMgtPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_update_payment_mgt_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-update-payment-mgt.page */ "./src/app/HO/redirected_pages/add-update-payment-mgt/add-update-payment-mgt.page.ts");




var routes = [
    {
        path: '',
        component: _add_update_payment_mgt_page__WEBPACK_IMPORTED_MODULE_3__["AddUpdatePaymentMgtPage"]
    }
];
var AddUpdatePaymentMgtPageRoutingModule = /** @class */ (function () {
    function AddUpdatePaymentMgtPageRoutingModule() {
    }
    AddUpdatePaymentMgtPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AddUpdatePaymentMgtPageRoutingModule);
    return AddUpdatePaymentMgtPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/HO/redirected_pages/add-update-payment-mgt/add-update-payment-mgt.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-update-payment-mgt/add-update-payment-mgt.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: AddUpdatePaymentMgtPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUpdatePaymentMgtPageModule", function() { return AddUpdatePaymentMgtPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_update_payment_mgt_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-update-payment-mgt-routing.module */ "./src/app/HO/redirected_pages/add-update-payment-mgt/add-update-payment-mgt-routing.module.ts");
/* harmony import */ var _add_update_payment_mgt_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-update-payment-mgt.page */ "./src/app/HO/redirected_pages/add-update-payment-mgt/add-update-payment-mgt.page.ts");







var AddUpdatePaymentMgtPageModule = /** @class */ (function () {
    function AddUpdatePaymentMgtPageModule() {
    }
    AddUpdatePaymentMgtPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _add_update_payment_mgt_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddUpdatePaymentMgtPageRoutingModule"]
            ],
            declarations: [_add_update_payment_mgt_page__WEBPACK_IMPORTED_MODULE_6__["AddUpdatePaymentMgtPage"]]
        })
    ], AddUpdatePaymentMgtPageModule);
    return AddUpdatePaymentMgtPageModule;
}());



/***/ }),

/***/ "./src/app/HO/redirected_pages/add-update-payment-mgt/add-update-payment-mgt.page.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-update-payment-mgt/add-update-payment-mgt.page.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home_button {\n  --background: #ffffff;\n  --color: #2a2a2a;\n  --background-hover: #fff;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvSE8vcmVkaXJlY3RlZF9wYWdlcy9hZGQtdXBkYXRlLXBheW1lbnQtbWd0L2FkZC11cGRhdGUtcGF5bWVudC1tZ3QucGFnZS5zY3NzIiwic3JjL2FwcC9ITy9yZWRpcmVjdGVkX3BhZ2VzL2FkZC11cGRhdGUtcGF5bWVudC1tZ3QvYWRkLXVwZGF0ZS1wYXltZW50LW1ndC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9ITy9yZWRpcmVjdGVkX3BhZ2VzL2FkZC11cGRhdGUtcGF5bWVudC1tZ3QvYWRkLXVwZGF0ZS1wYXltZW50LW1ndC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZV9idXR0b25cclxue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgLS1jb2xvcjogIzJhMmEyYTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufSIsIi5ob21lX2J1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgLS1jb2xvcjogIzJhMmEyYTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/HO/redirected_pages/add-update-payment-mgt/add-update-payment-mgt.page.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/HO/redirected_pages/add-update-payment-mgt/add-update-payment-mgt.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: AddUpdatePaymentMgtPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUpdatePaymentMgtPage", function() { return AddUpdatePaymentMgtPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");





var AddUpdatePaymentMgtPage = /** @class */ (function () {
    function AddUpdatePaymentMgtPage(formBuilder, router, activatedroute, commonServices) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedroute = activatedroute;
        this.commonServices = commonServices;
        this.status = false;
        this.PaymentModeId = '0';
        this.userid = localStorage.getItem("UID");
        this.pageFlag = this.activatedroute.snapshot.paramMap.get("pageFlag");
        this.paymentObj = this.activatedroute.snapshot.paramMap.get("paymentObj");
        this.paymentObj = JSON.parse(this.paymentObj);
        if (this.pageFlag == "updateds") {
            if (this.paymentObj.status == 'Inactive') {
                this.status = false;
            }
            else {
                this.status = true;
            }
            this.addForm = formBuilder.group({
                PaymentMode: [this.paymentObj.PaymentMode, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                PaymentModeCode: [this.paymentObj.PaymentModeCode, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                PaymentModeType: [this.paymentObj.PaymentModeType, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            });
            this.PaymentModeId = this.paymentObj.PaymentModeId;
        }
        else {
            this.addForm = formBuilder.group({
                PaymentMode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                PaymentModeCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                PaymentModeType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            });
        }
    }
    AddUpdatePaymentMgtPage.prototype.ngAfterContentInit = function () {
        this.addForm;
    };
    AddUpdatePaymentMgtPage.prototype.ngOnInit = function () {
    };
    AddUpdatePaymentMgtPage.prototype.Insertpayement = function () {
        console.log(this.addForm);
        var self = this;
        self.errorFound = true;
        if (self.validationDisp()) {
            var obj = {
                PaymentModeId: (this.pageFlag == 'updateds') ? this.PaymentModeId : '0',
                PaymentMode: self.addForm.value.PaymentMode,
                PaymentModeCode: self.addForm.value.PaymentModeCode,
                PaymentModeType: self.addForm.value.PaymentModeType,
                status: (this.status == true) ? '0' : '1',
            };
            self.commonServices.loadingPresent();
            self.commonServices.post("InsertUpdatePaymentMode", obj).subscribe(function (res) {
                var disRes = JSON.parse(res);
                if (disRes.Table[0].Msg == "PaymentMode inserted successfully.") {
                    self.commonServices.presentToast(disRes.Table[0].Msg);
                    self.addForm.reset();
                    setTimeout(function () {
                        self.router.navigate(['/payment-management']);
                    }, 1000);
                }
                else if (disRes.Table[0].Msg == "PaymentMode updated successfully.") {
                    self.commonServices.presentToast(disRes.Table[0].Msg);
                    self.addForm.reset();
                    setTimeout(function () {
                        self.router.navigate(['/payment-management']);
                    }, 1000);
                }
                else if (disRes.Table[0].Msg == "PaymentMode already exists.") {
                    self.commonServices.presentToast(disRes.Table[0].Msg);
                }
                else {
                    self.commonServices.presentToast(disRes.Table[0].Msg);
                }
                self.commonServices.loadingDismiss();
            }, function (error) {
                self.commonServices.presentToast("Something went wrong.");
                self.commonServices.loadingDismiss();
            });
        }
    };
    AddUpdatePaymentMgtPage.prototype.validationDisp = function () {
        if (this.addForm.value.PaymentMode == '') {
            this.commonServices.presentToast('Please enter the Payment Mode.');
            this.errorFound = false;
            return this.errorFound;
        }
        else if (this.addForm.value.PaymentModeCode == '') {
            this.commonServices.presentToast('Please enter the PaymentMode Code.');
            this.errorFound = false;
            return this.errorFound;
        }
        else if (this.addForm.value.PaymentModeType == '') {
            this.commonServices.presentToast('Please enter the PaymentMode Type.');
            this.errorFound = false;
            return this.errorFound;
        }
        return this.errorFound;
    };
    AddUpdatePaymentMgtPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
    ]; };
    AddUpdatePaymentMgtPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-update-payment-mgt',
            template: __webpack_require__(/*! raw-loader!./add-update-payment-mgt.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/redirected_pages/add-update-payment-mgt/add-update-payment-mgt.page.html"),
            styles: [__webpack_require__(/*! ./add-update-payment-mgt.page.scss */ "./src/app/HO/redirected_pages/add-update-payment-mgt/add-update-payment-mgt.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], AddUpdatePaymentMgtPage);
    return AddUpdatePaymentMgtPage;
}());



/***/ })

}]);
//# sourceMappingURL=HO-redirected_pages-add-update-payment-mgt-add-update-payment-mgt-module-es5.js.map