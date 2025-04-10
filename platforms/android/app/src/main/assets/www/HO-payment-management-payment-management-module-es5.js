(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-payment-management-payment-management-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/payment-management/payment-management.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/payment-management/payment-management.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/admin-home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<h1 class=\"text_white text_center title\">Payement Management</h1>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<ion-row class=\"align_center search_parent\">\r\n\t\t<ion-col size=\"2\">\r\n\t\t\t<ion-back-button defaultHref=\"admin-home\"></ion-back-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"2\" offset=\"4\">\r\n\t\t\t<ion-button size=\"small\" color=\"light\" (click)=\"searchCollapse()\">\r\n\t\t\t\t<ion-icon name=\"search\" class=\"font22\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"2\">\r\n\t\t\t<ion-button size=\"small\" color=\"light\" (click)=\"goToaddDispenser()\">\r\n\t\t\t\t<ion-icon name=\"add\" class=\"font22\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"2\"  >\r\n\t\t\t<ion-button color=\"light\" size=\"small\" (click)=\"exportFile()\">\r\n\t\t\t\t<ion-icon name=\"arrow-down\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"12\" class=\"searchbar_container\" *ngIf=\"searchShow\">\r\n\t\t\t<ion-searchbar type=\"text\" showCancelButton=\"always\" (ionCancel)=\"hideSearchBar()\"\r\n\t\t\t\t(ionInput)=\"getItems($event)\"></ion-searchbar>\r\n\t\t\t<ion-row *ngIf=\"isItemAvailable\">\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr (click)=\"goToupdatePayment(item)\" *ngFor=\"let item of items; let i = index\">\r\n\t\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.PaymentMode}}</td>\r\n\t\t\t\t\t\t\t\t\t<!-- <td>{{item.PaymentModeCode}}</td> -->\r\n\t\t\t\t\t\t\t\t\t<td>{{item.PaymentModeType}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.status}}</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-col>\r\n\t</ion-row>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<ion-grid>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t<ion-segment class=\"status_bar\" value=\"All\" (ionChange)=\"segmentChanged($event)\">\r\n\t\t\t\t\t<ion-segment-button value=\"Active\">\r\n\t\t\t\t\t\t<ion-label>Active</ion-label>\r\n\t\t\t\t\t</ion-segment-button>\r\n\t\t\t\t\t<ion-segment-button value=\"All\">\r\n\t\t\t\t\t\t<ion-label>All</ion-label>\r\n\t\t\t\t\t</ion-segment-button>\r\n\t\t\t\t\t<ion-segment-button value=\"InActive\">\r\n\t\t\t\t\t\t<ion-label>InActive</ion-label>\r\n\t\t\t\t\t</ion-segment-button>\r\n\t\t\t\t</ion-segment>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th>Sr No.</th>\r\n\t\t\t\t\t\t\t\t<th>Payment Mode</th>\r\n\t\t\t\t\t\t\t\t<!-- <th>Payment Mode Code</th> -->\r\n\t\t\t\t\t\t\t\t<th>Payment Mode Type</th>\r\n\t\t\t\t\t\t\t\t<th>Status</th>\r\n\t\t\t\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr *ngFor=\"let psmitem of paymentListRe;let i = index\">\r\n\t\t\t\t\t\t\t\t<td (click)=\"goToupdatePayment(psmitem)\">{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t<td (click)=\"goToupdatePayment(psmitem)\">{{psmitem.PaymentMode}}</td>\r\n\t\t\t\t\t\t\t\t<!-- <td (click)=\"goToupdatePayment(psmitem)\">{{psmitem.PaymentModeCode}}</td> -->\r\n\t\t\t\t\t\t\t\t<td (click)=\"goToupdatePayment(psmitem)\">{{psmitem.PaymentModeType}}</td>\r\n\t\t\t\t\t\t\t\t<td (click)=\"goToupdatePayment(psmitem)\">{{psmitem.status}}</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"danger\"\r\n\t\t\t\t\t\t\t\t\t(click)=\"payDelete(psmitem.PaymentModeId)\">\r\n\t\t\t\t\t\t\t\t\t<ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/HO/payment-management/payment-management-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/HO/payment-management/payment-management-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: PaymentManagementPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentManagementPageRoutingModule", function() { return PaymentManagementPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _payment_management_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-management.page */ "./src/app/HO/payment-management/payment-management.page.ts");




var routes = [
    {
        path: '',
        component: _payment_management_page__WEBPACK_IMPORTED_MODULE_3__["PaymentManagementPage"]
    }
];
var PaymentManagementPageRoutingModule = /** @class */ (function () {
    function PaymentManagementPageRoutingModule() {
    }
    PaymentManagementPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PaymentManagementPageRoutingModule);
    return PaymentManagementPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/HO/payment-management/payment-management.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/HO/payment-management/payment-management.module.ts ***!
  \********************************************************************/
/*! exports provided: PaymentManagementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentManagementPageModule", function() { return PaymentManagementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _payment_management_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-management-routing.module */ "./src/app/HO/payment-management/payment-management-routing.module.ts");
/* harmony import */ var _payment_management_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-management.page */ "./src/app/HO/payment-management/payment-management.page.ts");







var PaymentManagementPageModule = /** @class */ (function () {
    function PaymentManagementPageModule() {
    }
    PaymentManagementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _payment_management_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentManagementPageRoutingModule"]
            ],
            declarations: [_payment_management_page__WEBPACK_IMPORTED_MODULE_6__["PaymentManagementPage"]]
        })
    ], PaymentManagementPageModule);
    return PaymentManagementPageModule;
}());



/***/ }),

/***/ "./src/app/HO/payment-management/payment-management.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/HO/payment-management/payment-management.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0hPL3BheW1lbnQtbWFuYWdlbWVudC9wYXltZW50LW1hbmFnZW1lbnQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/HO/payment-management/payment-management.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/HO/payment-management/payment-management.page.ts ***!
  \******************************************************************/
/*! exports provided: PaymentManagementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentManagementPage", function() { return PaymentManagementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");





var PaymentManagementPage = /** @class */ (function () {
    function PaymentManagementPage(router, commonServices, menu, alertController) {
        this.router = router;
        this.commonServices = commonServices;
        this.menu = menu;
        this.alertController = alertController;
        this.searchShow = false;
        this.searchFlag = 0;
        this.isShown = false;
        this.isItemAvailable = false;
        this.StatusIsfalse = false;
        this.payStatus = '';
    }
    PaymentManagementPage.prototype.ngOnInit = function () {
        // this.getPayementList();
    };
    PaymentManagementPage.prototype.openFirst = function () {
        this.menu.enable(true, 'menuCO');
        this.menu.open('menuCO');
    };
    PaymentManagementPage.prototype.segmentChanged = function (value) {
        console.log(value);
        if (value.detail.value == 'Active') {
            this.payStatus = '1';
        }
        else if (value.detail.value == 'All') {
            this.payStatus = '';
        }
        else if (value.detail.value == 'InActive') {
            this.payStatus = '0';
        }
        this.getPayementList();
    };
    PaymentManagementPage.prototype.ionViewWillEnter = function () {
        this.getPayementList();
    };
    PaymentManagementPage.prototype.getPayementList = function () {
        var self = this;
        self.commonServices.loadingPresent();
        self.commonServices.post("getPaymentMode", { status: self.payStatus })
            .subscribe(function (res) {
            var paymentRes = JSON.parse(res);
            self.paymentListRe = paymentRes.Table;
            console.log(self.paymentListRe);
            self.commonServices.loadingDismiss();
        }, function (error) {
            self.commonServices.presentToast('Something went wrong.');
            self.commonServices.loadingDismiss();
        });
    };
    PaymentManagementPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        // this.getPayementList();
        // set val to the value of the searchbar
        var val = ev.target.value;
        this.items = this.paymentListRe;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.isItemAvailable = true;
            this.items = this.paymentListRe.filter(function (item) {
                return (item.PaymentMode.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            console.log(this.items);
        }
    };
    PaymentManagementPage.prototype.goToaddDispenser = function () {
        this.router.navigate(['add-update-payment-mgt', { pageFlag: "addds" }]);
    };
    PaymentManagementPage.prototype.goToupdatePayment = function (item) {
        this.router.navigate(['add-update-payment-mgt', { paymentObj: JSON.stringify(item), pageFlag: "updateds" }]);
    };
    PaymentManagementPage.prototype.payDelete = function (PaymentModeId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Delete',
                            message: 'Are you sure want to delete this payment mode ? ',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'OK',
                                    handler: function () {
                                        _this.paymentDelete(PaymentModeId);
                                        console.log('Confirm Okay');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PaymentManagementPage.prototype.paymentDelete = function (PaymentModeId) {
        var _this = this;
        var self = this;
        self.commonServices.loadingPresent();
        self.commonServices.post("DeletePaymentMode", { PaymentModeId: PaymentModeId }).subscribe(function (res) {
            var disRes = JSON.parse(res);
            if (disRes.Table[0].Msg == "PaymentMode deleted successfully.") {
                self.commonServices.presentToast(disRes.Table[0].Msg);
            }
            _this.getPayementList();
            self.commonServices.loadingDismiss();
        }, function (error) {
            self.commonServices.presentToast("Something went wrong.");
            self.commonServices.loadingDismiss();
        });
    };
    PaymentManagementPage.prototype.searchCollapse = function () {
        if (this.searchFlag == 0) {
            this.searchShow = true;
            this.searchFlag = 1;
        }
        else {
            this.searchShow = false;
            this.searchFlag = 0;
        }
    };
    PaymentManagementPage.prototype.hideSearchBar = function () {
        this.searchShow = false;
        this.searchFlag = 0;
    };
    PaymentManagementPage.prototype.exportFile = function () {
        var _this = this;
        console.log(this.payStatus);
        this.commonServices.post("getAllDetails_CSV", { Status: this.payStatus, PageFlag: 'PaymentManagement' }).subscribe(function (resp) {
            var data = JSON.parse(resp);
            // console.log(data);
            if (data.FileName != '') {
                //  alert('file name');
                if (JSON.parse(resp).errMsg == 'success') {
                    // alert('inneer sucess');
                    window.location.href = _this.commonServices.apiImageAttachment + "/Attachments/Excel/" + JSON.parse(resp).FileName;
                    _this.commonServices.loadingDismiss();
                }
                else {
                    _this.commonServices.presentToast(JSON.parse(resp).errMsg);
                    _this.commonServices.loadingDismiss();
                }
            }
            else {
                _this.commonServices.presentToast('No Report Data Found');
                _this.commonServices.loadingDismiss();
            }
        }, function (error) {
            _this.commonServices.presentToast('Something went wrong.');
            _this.commonServices.loadingDismiss();
        });
    };
    PaymentManagementPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    PaymentManagementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-management',
            template: __webpack_require__(/*! raw-loader!./payment-management.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/payment-management/payment-management.page.html"),
            styles: [__webpack_require__(/*! ./payment-management.page.scss */ "./src/app/HO/payment-management/payment-management.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], PaymentManagementPage);
    return PaymentManagementPage;
}());



/***/ })

}]);
//# sourceMappingURL=HO-payment-management-payment-management-module-es5.js.map