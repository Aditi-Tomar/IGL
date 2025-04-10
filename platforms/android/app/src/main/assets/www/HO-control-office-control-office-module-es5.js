(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-control-office-control-office-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/control-office/control-office.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/control-office/control-office.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/admin-home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<h1 class=\"text_white text_center title\">Control Office</h1>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<ion-row class=\"align_center search_parent\">\r\n\t\t<ion-col size=\"2\">\r\n\t\t\t<ion-back-button defaultHref=\"admin-home\"></ion-back-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"2\" offset=\"6\">\r\n\t\t\t<ion-button size=\"small\" color=\"light\" (click)=\"searchCollapse()\">\r\n\t\t\t\t<ion-icon name=\"search\" class=\"font22\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"2\">\r\n\t\t\t<ion-button (click)=\"goToAddControlOffice()\" color=\"light\" size=\"small\">\r\n\t\t\t\t<ion-icon name=\"add\" class=\"font22\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"12\" *ngIf=\"searchShow\" class=\"searchbar_container\">\r\n\t\t\t<ion-searchbar type=\"text\" showCancelButton=\"always\" (ionCancel)=\"hideSearchBar()\" debounce=\"500\"\r\n\t\t\t\t(ionInput)=\"getItems($event)\"></ion-searchbar>\r\n\t\t\t<ion-row *ngIf=\"isItemAvailable\">\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr (click)=\"goToControlOfficeUpdate(item)\" *ngFor=\"let item of items; let i = index\">\r\n\t\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.ControlRoomCode}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.ControlRoomName}}</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-col>\r\n\t</ion-row>\r\n</ion-header>\r\n<ion-content>\r\n\t<ion-grid>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th>Sr No</th>\r\n\t\t\t\t\t\t\t\t<th>Control Office Code</th>\r\n\t\t\t\t\t\t\t\t<th>Control Office Name</th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr (click)=\"goToControlOfficeUpdate(controlitem)\"\r\n\t\t\t\t\t\t\t\t*ngFor=\"let controlitem of controlofficeList;let i = index\">\r\n\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{controlitem.ControlRoomCode}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{controlitem.ControlRoomName}}</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/HO/control-office/control-office-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/HO/control-office/control-office-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: ControlOfficePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlOfficePageRoutingModule", function() { return ControlOfficePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _control_office_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./control-office.page */ "./src/app/HO/control-office/control-office.page.ts");




var routes = [
    {
        path: '',
        component: _control_office_page__WEBPACK_IMPORTED_MODULE_3__["ControlOfficePage"]
    }
];
var ControlOfficePageRoutingModule = /** @class */ (function () {
    function ControlOfficePageRoutingModule() {
    }
    ControlOfficePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ControlOfficePageRoutingModule);
    return ControlOfficePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/HO/control-office/control-office.module.ts":
/*!************************************************************!*\
  !*** ./src/app/HO/control-office/control-office.module.ts ***!
  \************************************************************/
/*! exports provided: ControlOfficePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlOfficePageModule", function() { return ControlOfficePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _control_office_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./control-office-routing.module */ "./src/app/HO/control-office/control-office-routing.module.ts");
/* harmony import */ var _control_office_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./control-office.page */ "./src/app/HO/control-office/control-office.page.ts");







var ControlOfficePageModule = /** @class */ (function () {
    function ControlOfficePageModule() {
    }
    ControlOfficePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _control_office_routing_module__WEBPACK_IMPORTED_MODULE_5__["ControlOfficePageRoutingModule"]
            ],
            declarations: [_control_office_page__WEBPACK_IMPORTED_MODULE_6__["ControlOfficePage"]]
        })
    ], ControlOfficePageModule);
    return ControlOfficePageModule;
}());



/***/ }),

/***/ "./src/app/HO/control-office/control-office.page.scss":
/*!************************************************************!*\
  !*** ./src/app/HO/control-office/control-office.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myclass {\n  width: 100%;\n  height: 120px;\n  background-color: #ddd;\n  border: 2px solid darkblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvSE8vY29udHJvbC1vZmZpY2UvY29udHJvbC1vZmZpY2UucGFnZS5zY3NzIiwic3JjL2FwcC9ITy9jb250cm9sLW9mZmljZS9jb250cm9sLW9mZmljZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL0hPL2NvbnRyb2wtb2ZmaWNlL2NvbnRyb2wtb2ZmaWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teWNsYXNzXHJcbntcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkZGQ7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkIGRhcmtibHVlO1xyXG59IiwiLm15Y2xhc3Mge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgYm9yZGVyOiAycHggc29saWQgZGFya2JsdWU7XG59Il19 */"

/***/ }),

/***/ "./src/app/HO/control-office/control-office.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/HO/control-office/control-office.page.ts ***!
  \**********************************************************/
/*! exports provided: ControlOfficePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlOfficePage", function() { return ControlOfficePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");





var ControlOfficePage = /** @class */ (function () {
    function ControlOfficePage(router, commonServices, menu) {
        this.router = router;
        this.commonServices = commonServices;
        this.menu = menu;
        this.isShown = false;
        this.isItemAvailable = false;
        this.searchShow = false;
        this.searchFlag = 0;
    }
    ControlOfficePage.prototype.ngOnInit = function () {
        this.getControlOfficeList();
    };
    ControlOfficePage.prototype.openFirst = function () {
        this.menu.enable(true, 'menuCO');
        this.menu.open('menuCO');
    };
    ControlOfficePage.prototype.searchCollapse = function () {
        if (this.searchFlag == 0) {
            this.searchShow = true;
            this.searchFlag = 1;
        }
        else {
            this.searchShow = false;
            this.searchFlag = 0;
        }
    };
    ControlOfficePage.prototype.hideSearchBar = function () {
        this.searchShow = false;
        this.searchFlag = 0;
    };
    ControlOfficePage.prototype.getControlOfficeList = function () {
        var self = this;
        self.commonServices.loadingPresent();
        self.commonServices.postwithservice("getCRooms", {}).subscribe(function (res) {
            var controlofficeRes = JSON.parse(res);
            self.controlofficeList = controlofficeRes.Table;
            console.log(self.controlofficeList);
            self.commonServices.loadingDismiss();
        }, function (error) {
            self.commonServices.presentToast("Something went wrong.");
            self.commonServices.loadingDismiss();
        });
    };
    ControlOfficePage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        // this.getControlOfficeList();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.isItemAvailable = true;
            this.items = this.controlofficeList.filter(function (item) {
                return (item.ControlRoomName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            console.log(this.items);
        }
    };
    ControlOfficePage.prototype.goToControlOfficeUpdate = function (item) {
        this.router.navigate(['/add-update-controloffice', { itemList: JSON.stringify(item), pageFlag: "updatecontroloffice" }]);
    };
    ControlOfficePage.prototype.goToAddControlOffice = function () {
        this.router.navigate(['/add-update-controloffice', { pageFlag: "addcontroloffice" }]);
    };
    ControlOfficePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
    ]; };
    ControlOfficePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-control-office',
            template: __webpack_require__(/*! raw-loader!./control-office.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/control-office/control-office.page.html"),
            styles: [__webpack_require__(/*! ./control-office.page.scss */ "./src/app/HO/control-office/control-office.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
    ], ControlOfficePage);
    return ControlOfficePage;
}());



/***/ })

}]);
//# sourceMappingURL=HO-control-office-control-office-module-es5.js.map