(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forget-password-forget-password-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/forget-password/forget-password.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forget-password/forget-password.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n\t<ion-toolbar>\r\n\t\t<ion-row class=\"ion-align-items-center bb\">\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-left\">\r\n\t\t\t\t<ion-back-button defaultHref=\"login\"></ion-back-button>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"8\" class=\"ion-text-center\">\r\n\t\t\t\t<ion-text>Forgot Password</ion-text>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-toolbar>\r\n\t<ion-grid>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col size-sm=\"12\" size-md=\"8\" offset-md=\"2\" class=\"inp_group\">\r\n\t\t\t\t<label>Enter Your Station Id</label>\r\n\t\t\t\t<ion-input class=\"inp_control\" [(ngModel)]=\"stationId\"></ion-input>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col size-sm=\"12\" size-md=\"8\" offset-md=\"2\" class=\"msg d_flex\">\r\n\t\t\t\t<i class=\"far fa-hand-point-right\"></i>\r\n\t\t\t\t<ion-text>\r\n\t\t\t\t\tPassword will be sent to admin registered Email Id.\r\n\t\t\t\t</ion-text>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col size-sm=\"12\" size-md=\"8\" offset-md=\"2\">\r\n\t\t\t\t<div class=\"button_container\">\r\n\t\t\t\t\t<ion-button type=\"submit\" color=\"dark_green_clr\" (click)=\"forgotPassword()\">Next</ion-button>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/forget-password/forget-password-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/forget-password/forget-password-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ForgetPasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordPageRoutingModule", function() { return ForgetPasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _forget_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forget-password.page */ "./src/app/forget-password/forget-password.page.ts");




var routes = [
    {
        path: '',
        component: _forget_password_page__WEBPACK_IMPORTED_MODULE_3__["ForgetPasswordPage"]
    }
];
var ForgetPasswordPageRoutingModule = /** @class */ (function () {
    function ForgetPasswordPageRoutingModule() {
    }
    ForgetPasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ForgetPasswordPageRoutingModule);
    return ForgetPasswordPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/forget-password/forget-password.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/forget-password/forget-password.module.ts ***!
  \***********************************************************/
/*! exports provided: ForgetPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordPageModule", function() { return ForgetPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forget-password-routing.module */ "./src/app/forget-password/forget-password-routing.module.ts");
/* harmony import */ var _forget_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forget-password.page */ "./src/app/forget-password/forget-password.page.ts");







var ForgetPasswordPageModule = /** @class */ (function () {
    function ForgetPasswordPageModule() {
    }
    ForgetPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgetPasswordPageRoutingModule"]
            ],
            declarations: [_forget_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgetPasswordPage"]]
        })
    ], ForgetPasswordPageModule);
    return ForgetPasswordPageModule;
}());



/***/ }),

/***/ "./src/app/forget-password/forget-password.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/forget-password/forget-password.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inp_group {\n  margin-top: 15px;\n}\n.inp_group label {\n  margin-left: 20px;\n  margin-bottom: 5px;\n  display: block;\n}\n.inp_group .inp_control {\n  border-radius: 30px;\n  padding-left: 11px !important;\n}\n.msg i {\n  margin-right: 4px;\n  padding-top: 3px;\n}\n.msg ion-text {\n  line-height: 17px;\n  font-size: 15px;\n  color: #7a7a7a;\n}\n.button_container > ion-button {\n  border-radius: 30px;\n  --box-shadow:none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvZm9yZ2V0LXBhc3N3b3JkL2ZvcmdldC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0JBQUE7QUNBSjtBREVJO0VBRUksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNEUjtBREdJO0VBRUksbUJBQUE7RUFDQSw2QkFBQTtBQ0ZSO0FET0k7RUFFSSxpQkFBQTtFQUNBLGdCQUFBO0FDTFI7QURPSTtFQUVJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNOUjtBRFNBO0VBR0ksbUJBQUE7RUFDQSxpQkFBQTtBQ1JKIiwiZmlsZSI6InNyYy9hcHAvZm9yZ2V0LXBhc3N3b3JkL2ZvcmdldC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wX2dyb3VwXHJcbntcclxuICAgIG1hcmdpbi10b3A6MTVweDtcclxuXHJcbiAgICBsYWJlbFxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5pbnBfY29udHJvbFxyXG4gICAge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OjExcHghaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbi5tc2dcclxue1xyXG4gICAgaVxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDo0cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDNweDs7XHJcbiAgICB9XHJcbiAgICBpb24tdGV4dFxyXG4gICAge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBjb2xvcjogIzdhN2E3YTtcclxuICAgIH1cclxufVxyXG4uYnV0dG9uX2NvbnRhaW5lciA+IGlvbi1idXR0b24gXHJcbntcclxuICAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIC0tYm94LXNoYWRvdzpub25lO1xyXG59XHJcblxyXG4iLCIuaW5wX2dyb3VwIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5pbnBfZ3JvdXAgbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5pbnBfZ3JvdXAgLmlucF9jb250cm9sIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tc2cgaSB7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xufVxuLm1zZyBpb24tdGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjN2E3YTdhO1xufVxuXG4uYnV0dG9uX2NvbnRhaW5lciA+IGlvbi1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/forget-password/forget-password.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/forget-password/forget-password.page.ts ***!
  \*********************************************************/
/*! exports provided: ForgetPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordPage", function() { return ForgetPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var ForgetPasswordPage = /** @class */ (function () {
    function ForgetPasswordPage(formBuilder, router, activatedroute, commonServices, menuCtrl) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedroute = activatedroute;
        this.commonServices = commonServices;
        this.menuCtrl = menuCtrl;
        this.stationId = '';
    }
    ForgetPasswordPage.prototype.ngOnInit = function () {
        this.menuCtrl.enable(false);
    };
    ForgetPasswordPage.prototype.forgotPassword = function () {
        var self = this;
        if (self.stationId == '') {
            self.commonServices.presentToast("Please enter Station Id .");
        }
        else {
            self.commonServices.loadingPresent();
            self.commonServices.postwithservice("forgotPassword", { Id: this.stationId }).subscribe(function (res) {
                var disRes = JSON.parse(res);
                if (disRes.Table[0].Message == "Invalid Station ID") {
                    self.commonServices.presentToast(disRes.Table[0].Message);
                }
                else {
                    self.commonServices.presentToast(disRes.Table[0].Message);
                    setTimeout(function () {
                        self.router.navigate(['/login']);
                    }, 1000);
                }
                self.commonServices.loadingDismiss();
            }, function (error) {
                self.commonServices.presentToast("Something went wrong.");
                self.commonServices.loadingDismiss();
            });
        }
    };
    ForgetPasswordPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] }
    ]; };
    ForgetPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forget-password',
            template: __webpack_require__(/*! raw-loader!./forget-password.page.html */ "./node_modules/raw-loader/index.js!./src/app/forget-password/forget-password.page.html"),
            styles: [__webpack_require__(/*! ./forget-password.page.scss */ "./src/app/forget-password/forget-password.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]])
    ], ForgetPasswordPage);
    return ForgetPasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=forget-password-forget-password-module-es5.js.map