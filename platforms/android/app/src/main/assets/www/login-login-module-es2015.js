(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <div class=\"main_wrapper\">\r\n    <div class=\"login_wrapper\">\r\n      <div class=\"round_back_div\">\r\n        <img src=\"../../assets/images/rounded.png\" class=\"round-img\" alt=\"\">\r\n        <div>\r\n          <h1>\r\n            <img src=\"../../assets/images/logo.png\" class=\"logo\" alt=\"\">\r\n          </h1>\r\n          <h3>Indraprastha Gas Limited</h3>\r\n        </div>\r\n      </div>\r\n      <div class=\"form_div\">\r\n        <div class=\"logo_div_onTab\">\r\n          <span>\r\n            <img src=\"../../assets/images/logo.png\" alt=\"\">\r\n          </span>\r\n        </div>\r\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"doLogin()\">\r\n          <ion-list no-lines>\r\n            <h4 style=\"text-align: center;\">Login Your Account</h4>\r\n            <ion-item>\r\n              <ion-input placeholder=\"Login ID\"   \r\n                type=\"text\" formControlName=\"loginid\" \r\n                (ionChange)=\"onKeyPressed($event)\"\r\n                (ionInput)=\"onKeyFocus($event)\">\r\n              </ion-input>\r\n              \r\n              <div class=\"erroeshow\" *ngFor=\"let error of errorMessages.loginid\">\r\n                <ng-container *ngIf=\"loginid.hasError(error.type) && (loginid.dirty || loginid.touched)\">\r\n                  <small class=\"error-message\">{{error.message}}</small>\r\n                </ng-container>\r\n              </div>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"ishidden == true\">\r\n              <ion-input placeholder=\"Employee Code\" type=\"text\" formControlName=\"employeecode\"></ion-input>\r\n              <div class=\"erroeshow\" *ngFor=\"let error of errorMessages.employeecode\">\r\n                <ng-container *ngIf=\"employeecode.hasError(error.type) && (employeecode.dirty || employeecode.touched)\">\r\n                  <small class=\"error-message\">{{error.message}}</small>\r\n                </ng-container>\r\n              </div>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-input placeholder=\"Password\" type=\"password\" formControlName=\"password\"></ion-input>\r\n              <div class=\"erroeshow\" *ngFor=\"let error of errorMessages.password\">\r\n                <ng-container *ngIf=\"password.hasError(error.type) && (password.dirty || password.touched)\">\r\n                  <small class=\"error-message\">{{error.message}}</small>\r\n                </ng-container>\r\n              </div>\r\n            </ion-item>\r\n            <ion-button expand=\"block\" class=\"login_btn\" shape=\"round\" block type=\"submit\">Login </ion-button>\r\n          </ion-list>\r\n        </form>\r\n        <button ion-button clear class=\"forgot\" (click)=\"forgetPassword()\">Forgot Password?</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main_wrapper {\n  width: 100vw;\n  min-height: 100vh;\n  background-color: #ddd;\n}\n\n.login_wrapper {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: white;\n  min-height: 100vh;\n}\n\n.ion-activatable {\n  position: relative;\n  overflow: hidden;\n}\n\n.round_back_div {\n  width: 100%;\n  height: 180px;\n  z-index: 2;\n  position: relative;\n}\n\n.round_back_div img {\n  height: 100%;\n}\n\n.round_back_div > div {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  text-align: center;\n}\n\n.round_back_div h1 {\n  margin-top: 15px;\n  margin-bottom: 7px;\n}\n\n.round_back_div > div h3 {\n  color: white;\n}\n\n.form_div {\n  width: 100%;\n}\n\n.item-native {\n  padding: 0px !important;\n}\n\nion-content h4 {\n  margin: 7vw 0 3vw;\n}\n\nion-list {\n  padding: 5vw;\n}\n\nion-list h4 {\n  margin: 0 0 2vw;\n  font-size: 22px;\n}\n\nion-list ion-input {\n  border: 2px solid #045a33;\n  border-radius: 20px;\n  padding-left: 16px !important;\n}\n\nion-list ion-input:first-of-type {\n  margin-top: 20px;\n  margin-bottom: 15px;\n}\n\nion-list ion-input:last-of-type {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\nion-list ion-button {\n  font-size: 16px !important;\n  --padding-top:7px;\n  --padding-bottom:7px;\n  height: 40px;\n  border-radius: 20px;\n  background-color: var(--dark_green_clr);\n  box-shadow: inset 0px 0px 17px rgba(0, 0, 0, 0.45);\n}\n\n.forgot {\n  color: red;\n  font-size: 16px;\n  margin-top: 10px;\n  display: block;\n  text-align: center;\n  margin: 0 auto;\n  margin-bottom: 15px;\n}\n\n.round-img {\n  width: 100%;\n}\n\n.logo {\n  width: 95px;\n}\n\n.error-message {\n  color: #ff0000;\n  position: absolute;\n  top: -3px;\n  left: 0;\n}\n\n.item-highlight {\n  border: none !important;\n}\n\n.logo_div_onTab {\n  display: none;\n  text-align: center;\n  padding-top: 30px;\n}\n\n.logo_div_onTab span {\n  display: inline-block;\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  border: 3px solid #ddd;\n  background-color: var(--green_clr);\n}\n\n.logo_div_onTab span img {\n  width: 85%;\n  margin-top: 11px;\n}\n\n@media (min-width: 767px) {\n  .round_back_div {\n    display: none;\n  }\n\n  .form_div {\n    width: 600px;\n    margin-left: auto;\n    margin-right: auto;\n    border: 1px solid #d8d8d8;\n    box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.3);\n    margin-top: 40px;\n  }\n\n  .logo_div_onTab {\n    display: block;\n  }\n\n  ion-list {\n    padding-top: 3vh;\n  }\n}\n\n.login_btn {\n  --background:#047943;\n  --background-hover:#036437;\n}\n\n.item-interactive.ion-valid {\n  --highlight-background: #05b061!important ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQ0FKOztBREVBO0VBR0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FDREo7O0FER0E7RUFFSSxrQkFBQTtFQUNBLGdCQUFBO0FDREo7O0FER0E7RUFFSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0RKOztBREVJO0VBRUksWUFBQTtBQ0RSOztBRElBO0VBRUksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURJQTtFQUVJLGdCQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURJQTtFQUVJLFlBQUE7QUNGSjs7QURJQTtFQUVJLFdBQUE7QUNGSjs7QURLQTtFQUVJLHVCQUFBO0FDSEo7O0FEU0E7RUFFSSxpQkFBQTtBQ1BKOztBRFdBO0VBRUksWUFBQTtBQ1RKOztBRFVRO0VBRUksZUFBQTtFQUNBLGVBQUE7QUNUWjs7QURXUTtFQUVJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ1ZaOztBRFlRO0VBRUksZ0JBQUE7RUFDQSxtQkFBQTtBQ1haOztBRGFRO0VBRUksZ0JBQUE7RUFDQSxtQkFBQTtBQ1paOztBRGNRO0VBRUksMEJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7RUFDQSxrREFBQTtBQ2JaOztBRHdCQTtFQUVJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUN0Qko7O0FEd0JJO0VBRUksV0FBQTtBQ3RCUjs7QUR3Qkk7RUFFSSxXQUFBO0FDdEJSOztBRHlCSTtFQUFlLGNBQUE7RUFDWCxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0FDckJSOztBRHVCUTtFQUFnQix1QkFBQTtBQ25CeEI7O0FEeUJRO0VBRUksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUN2Qlo7O0FEeUJZO0VBRUkscUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtBQ3hCaEI7O0FEMEJnQjtFQUVJLFVBQUE7RUFDQSxnQkFBQTtBQ3pCcEI7O0FEOEJRO0VBRUk7SUFFSSxhQUFBO0VDN0JkOztFRCtCVTtJQUVJLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EseUJBQUE7SUFDQSwwQ0FBQTtJQUNBLGdCQUFBO0VDN0JkOztFRCtCVTtJQUVJLGNBQUE7RUM3QmQ7O0VEK0JVO0lBRUksZ0JBQUE7RUM3QmQ7QUFDRjs7QUQrQlE7RUFFSSxvQkFBQTtFQUNBLDBCQUFBO0FDOUJaOztBRGdDUTtFQUVJLDBDQUFBO0FDOUJaIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fd3JhcHBlclxyXG57XHJcbiAgICB3aWR0aDoxMDB2dztcclxuICAgIG1pbi1oZWlnaHQ6MTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkZGQ7XHJcbn1cclxuLmxvZ2luX3dyYXBwZXJcclxue1xyXG4gICAgLy8gbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5pb24tYWN0aXZhdGFibGUgXHJcbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnJvdW5kX2JhY2tfZGl2XHJcbntcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGltZ1xyXG4gICAge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxufVxyXG4ucm91bmRfYmFja19kaXY+ZGl2XHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5yb3VuZF9iYWNrX2RpdiBoMVxyXG57XHJcbiAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7O1xyXG59XHJcbi5yb3VuZF9iYWNrX2Rpdj5kaXYgaDNcclxue1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuLmZvcm1fZGl2XHJcbntcclxuICAgIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi5pdGVtLW5hdGl2ZVxyXG57XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuaW9uLWNvbnRlbnQgaDRcclxue1xyXG4gICAgbWFyZ2luOiA3dncgMCAzdnc7XHJcbn1cclxuXHJcblxyXG5pb24tbGlzdCBcclxue1xyXG4gICAgcGFkZGluZzogNXZ3O1xyXG4gICAgICAgIGg0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCAydnc7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWlucHV0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDQ1YTMzO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHghaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taW5wdXQ6Zmlyc3Qtb2YtdHlwZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWlucHV0Omxhc3Qtb2YtdHlwZVxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1idXR0b25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctdG9wOjdweDs7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206N3B4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6NDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya19ncmVlbl9jbHIpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDE3cHggcmdiYSgwLCAwLCAwLCAwLjQ1KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIC5lcnJvci1tZXNzYWdle1xyXG4gICAgICAgIC8vICAgICBjb2xvcjogcmdiKDE5OSwgNzgsIDIyKTtcclxuICAgICAgICAvLyAgICAgLy9tYXJnaW4tYm90dG9tOiA3cHg7IFxyXG4gICAgICAgIC8vICAgICBtYXJnaW4tbGVmdDogMTFweFxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIFxyXG59XHJcblxyXG4uZm9yZ290XHJcbntcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuICAgIC5yb3VuZC1pbWdcclxuICAgIHtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgfVxyXG4gICAgLmxvZ29cclxuICAgIHtcclxuICAgICAgICB3aWR0aDo5NXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5lcnJvci1tZXNzYWdle2NvbG9yOiAjZmYwMDAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IC0zcHg7XHJcbiAgICAgICAgbGVmdDogMDt9XHJcblxyXG4gICAgICAgIC5pdGVtLWhpZ2hsaWdodHtib3JkZXI6IG5vbmUhaW1wb3J0YW50O31cclxuXHJcbiAgICAgICAgLy8gLmVycm9lc2hvd3tcclxuICAgICAgICAvLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLmxvZ29fZGl2X29uVGFiXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOjMwcHg7XHJcblxyXG4gICAgICAgICAgICBzcGFuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW5fY2xyKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaW1nXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDo3NjdweClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC5yb3VuZF9iYWNrX2RpdlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb3JtX2RpdlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDg7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDlweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sb2dvX2Rpdl9vblRhYlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1saXN0XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjN2aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubG9naW5fYnRuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IzA0Nzk0MztcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiMwMzY0Mzc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pdGVtLWludGVyYWN0aXZlLmlvbi12YWxpZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogIzA1YjA2MSFpbXBvcnRhbnRcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4iLCIubWFpbl93cmFwcGVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cblxuLmxvZ2luX3dyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uaW9uLWFjdGl2YXRhYmxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucm91bmRfYmFja19kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxODBweDtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnJvdW5kX2JhY2tfZGl2IGltZyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnJvdW5kX2JhY2tfZGl2ID4gZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yb3VuZF9iYWNrX2RpdiBoMSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbn1cblxuLnJvdW5kX2JhY2tfZGl2ID4gZGl2IGgzIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZm9ybV9kaXYge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLml0ZW0tbmF0aXZlIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IGg0IHtcbiAgbWFyZ2luOiA3dncgMCAzdnc7XG59XG5cbmlvbi1saXN0IHtcbiAgcGFkZGluZzogNXZ3O1xufVxuaW9uLWxpc3QgaDQge1xuICBtYXJnaW46IDAgMCAydnc7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbmlvbi1saXN0IGlvbi1pbnB1dCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwNDVhMzM7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMTZweCAhaW1wb3J0YW50O1xufVxuaW9uLWxpc3QgaW9uLWlucHV0OmZpcnN0LW9mLXR5cGUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuaW9uLWxpc3QgaW9uLWlucHV0Omxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5pb24tbGlzdCBpb24tYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy10b3A6N3B4O1xuICAtLXBhZGRpbmctYm90dG9tOjdweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrX2dyZWVuX2Nscik7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMTdweCByZ2JhKDAsIDAsIDAsIDAuNDUpO1xufVxuXG4uZm9yZ290IHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnJvdW5kLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiA5NXB4O1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiAjZmYwMDAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTNweDtcbiAgbGVmdDogMDtcbn1cblxuLml0ZW0taGlnaGxpZ2h0IHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dvX2Rpdl9vblRhYiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG4ubG9nb19kaXZfb25UYWIgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNkZGQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuX2Nscik7XG59XG4ubG9nb19kaXZfb25UYWIgc3BhbiBpbWcge1xuICB3aWR0aDogODUlO1xuICBtYXJnaW4tdG9wOiAxMXB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY3cHgpIHtcbiAgLnJvdW5kX2JhY2tfZGl2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmZvcm1fZGl2IHtcbiAgICB3aWR0aDogNjAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA5cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gIH1cblxuICAubG9nb19kaXZfb25UYWIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgaW9uLWxpc3Qge1xuICAgIHBhZGRpbmctdG9wOiAzdmg7XG4gIH1cbn1cbi5sb2dpbl9idG4ge1xuICAtLWJhY2tncm91bmQ6IzA0Nzk0MztcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiMwMzY0Mzc7XG59XG5cbi5pdGVtLWludGVyYWN0aXZlLmlvbi12YWxpZCB7XG4gIC0taGlnaGxpZ2h0LWJhY2tncm91bmQ6ICMwNWIwNjEhaW1wb3J0YW50IDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");






// import { Storage } from '@ionic/storage';
// declare var $:any;

let LoginPage = class LoginPage {
    // stationCode: string ='1001-CNG-1000-ST001';
    // password: string='Rahul123';
    // employeeId: string='123';
    constructor(navCtrl, formBuilder, router, commonServices, events, menuCtrl) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.router = router;
        this.commonServices = commonServices;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.ishidden = true;
        this.errorMessages = {
            loginid: [
                { type: 'required', message: 'Login Id is required' }
            ],
            password: [
                { type: 'required', message: 'Password is required' },
            ],
            employeecode: [
                { type: 'required', message: 'Employee Code is required' },
            ],
        };
        this.loginForm = formBuilder.group({
            loginid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            employeecode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    ngOnInit() {
        this.menuCtrl.enable(false);
    }
    //   doLogin()
    //   {
    //   var self=this;
    //   if(self.loginForm.value.loginid=="") {
    //     self.commonServices.presentToast('Please Enter Login Id');
    //     return;
    //   }
    //  else if(self.loginForm.value.employeecode=="" && self.loginForm.value.loginid != "admin") {
    //     self.commonServices.presentToast('Please Enter Employee Code');
    //     return;
    //   }
    //   else if(self.loginForm.value.password=="") {
    //     self.commonServices.presentToast('Please Enter Password');
    //     return;
    //   }
    //   else{
    //     localStorage.setItem('LoginCode', self.loginForm.value.loginid);
    //   var loginReq ={Loginid:self.loginForm.value.loginid,EmployeeCode:self.loginForm.value.employeecode,Password:self.loginForm.value.password}
    //   self.commonServices.post("ValidateUser",loginReq).subscribe((res:any) =>{
    //     var loginRes=JSON.parse(res);
    //     console.log(loginRes);
    //     localStorage.setItem('DepartmentCode', loginRes[0].DepartmentCode);
    //     localStorage.setItem("UID",loginRes[0].UserId);
    //     localStorage.setItem('Loginidd', loginRes[0].LoginId);
    //     localStorage.setItem("StationId",loginRes[0].StationId);
    //     localStorage.setItem('globalDetail', JSON.stringify(loginRes[0]));
    //     localStorage.setItem('stationCode', loginRes[0].StationCode);
    //     localStorage.setItem("LoginId",loginRes[0].StationCode);
    //     localStorage.setItem("UID",loginRes[0].UserId);
    //     if(loginRes[0].DepartmentCode=="HO")
    //     {
    //       console.log(loginRes);
    //       self.router.navigate(['/admin-home']);
    //     }
    //     else if(loginRes[0].DepartmentCode=="MO")
    //     {
    //       self.router.navigate(['/mo-dashboard']);
    //     }
    doLogin() {
        var self = this;
        if (self.loginForm.value.loginid == "") {
            self.commonServices.presentToast('Please Enter Login Id');
            return;
        }
        else if (self.loginForm.value.employeecode == "" && self.loginForm.value.loginid != "admin") {
            self.commonServices.presentToast('Please Enter Employee Code');
            return;
        }
        else if (self.loginForm.value.password == "") {
            self.commonServices.presentToast('Please Enter Password');
            return;
        }
        else {
            localStorage.setItem('LoginCode', self.loginForm.value.loginid);
            var loginReq = {
                Loginid: self.loginForm.value.loginid,
                EmployeeCode: self.loginForm.value.employeecode,
                Password: self.loginForm.value.password
            };
            self.commonServices.loadingPresent();
            self.commonServices.post("ValidateUser", loginReq).subscribe((res) => {
                var loginRes = JSON.parse(res);
                if (loginRes[0].Status == 1) {
                    self.commonServices.presentToast("Station is Inactive,To Login please connect with H.O..!!");
                    self.commonServices.loadingDismiss();
                    return;
                }
                console.log('loginrea');
                console.log(loginRes);
                localStorage.setItem('DepartmentCode', loginRes[0].DepartmentCode);
                localStorage.setItem("UID", loginRes[0].UserId);
                localStorage.setItem('Loginidd', loginRes[0].LoginId);
                localStorage.setItem("StationId", loginRes[0].StationId);
                localStorage.setItem('globalDetail', JSON.stringify(loginRes[0]));
                localStorage.setItem('stationCode', loginRes[0].StationCode);
                localStorage.setItem("LoginId", loginRes[0].StationCode);
                localStorage.setItem("UID", loginRes[0].UserId);
                // localStorage.setItem("userDataR",JSON.stringify(loginRes[0]));
                // console.log(loginRes);
                // this.events.publish('user:created', loginRes);
                this.sideMenuData(loginRes[0].UserId);
                if (loginRes[0].DepartmentCode == "HO") {
                    console.log(loginRes);
                    self.navCtrl.navigateRoot(['/admin-home']);
                }
                else if (loginRes[0].DepartmentCode == "MO") {
                    self.navCtrl.navigateRoot('/mo-dashboard');
                }
                else if (loginRes[0].DepartmentCode == "CO") {
                    self.navCtrl.navigateRoot(['/co-dashboard']);
                }
                else if (loginRes[0].DepartmentCode == "SO") {
                    self.navCtrl.navigateRoot(['/home']);
                }
                else if (loginRes[0].DepartmentCode == "SOP") {
                    self.navCtrl.navigateRoot(['/so-dashboard']);
                }
                else {
                    self.commonServices.presentToast(loginRes[0].Meaasge);
                }
                self.GetStationDetail();
                self.commonServices.loadingDismiss();
            }, (error) => {
                self.commonServices.presentToast("Something went wrong.");
                self.commonServices.loadingDismiss();
            });
        }
    }
    GetStationDetail() {
        var MyJson = { LoginId: this.loginForm.value.loginid };
        this.commonServices.postwithservice("GetStationDetail", MyJson).subscribe((resp) => {
            const data = JSON.parse(resp);
            console.log(data.Table);
            console.log("datatable");
            localStorage.setItem('globalDetail', JSON.stringify(data.Table));
            localStorage.setItem('leftMenus', JSON.stringify(data.Table1));
            localStorage.setItem('StationMenus', JSON.stringify(data.Table2));
            localStorage.setItem('AllStation', JSON.stringify(data.Table3));
            //this.loaderLogin = false;
            //window.location.href = JSON.parse(response.data).Table1[0].goFor;             
        }, (error) => {
            this.commonServices.presentToast("Something went wrong.");
        });
    }
    sideMenuData(userID) {
        var self = this;
        self.commonServices.post("getHeader", {
            UserID: userID
        }).subscribe((res) => {
            // var loginRes = JSON.parse(res);
            // console.log(loginRes);
            const data = JSON.parse(res.toString()).Table;
            console.log(data);
            if (data.length > 0) {
                localStorage.setItem("userDataR", JSON.stringify(data[0]));
                console.log(data);
                console.log('side menu data');
                this.events.publish('user:created', data);
            }
        }, (error) => {
            self.commonServices.presentToast("Something went wrong.");
        });
    }
    //for validation check
    get loginid() {
        return this.loginForm.get('loginid');
    }
    get password() {
        return this.loginForm.get('password');
    }
    get employeecode() {
        return this.loginForm.get('employeecode');
    }
    //end validation
    // get value on keypress
    onKeyPressed(event) {
        // console.log(event.key) 
        console.log(event);
        // // console.log(event.keyCode) 
        console.log(event.detail.value);
        // if(event.key=="a")
        // {
        // this.ishidden=false;
        // }
        var logText = event.detail.value.toLowerCase();
        // if (logText == "a") {
        //   this.ishidden = false;
        // } else if (logText == "ad") {
        //   this.ishidden = false;
        // } else if (logText == "adm") {
        //   this.ishidden = false;
        // } else if (logText == "admi") {
        //   this.ishidden = false;
        // } else 
        if (logText == "admin") {
            this.ishidden = false;
        }
        else {
            this.ishidden = true;
        }
    }
    onKeyFocus(event) {
        console.log(event);
        console.log(event.detail.data);
        // if(event.detail.data =="a")
        // {
        // this.ishidden=false;
        // }
    }
    forgetPassword() {
        this.router.navigate(['forget-password']);
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map