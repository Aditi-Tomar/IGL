(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-lcv-lcv-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/lcv/lcv.page.html":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/lcv/lcv.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/admin-home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t  \t<h1 class=\"text_white text_center title\">LCV</h1>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<ion-row class=\"align_center search_parent\">\r\n\t\t<ion-col size=\"2\">\r\n\t\t\t<ion-back-button defaultHref=\"admin-home\"></ion-back-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"2\" offset=\"4\">\r\n\t\t\t<ion-button size=\"small\" color=\"light\" (click)=\"searchCollapse()\">\r\n\t\t\t\t<ion-icon name=\"search\" class=\"font22\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"2\">\r\n\t\t\t<ion-button size=\"small\" color=\"light\" (click)=\"goToaddLcv()\"><ion-icon name=\"add\" class=\"font22\"></ion-icon></ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col >\r\n\t\t\t<ion-button color=\"light\" size=\"small\" (click)=\"exportFile()\">\r\n\t\t\t\t<ion-icon name=\"arrow-down\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-col>\r\n\r\n\t\t<ion-col size=\"12\" class=\"searchbar_container\" *ngIf=\"searchShow\">\r\n\t\t\t<ion-searchbar type=\"text\" debounce=\"500\" (ionInput)=\"getItems($event)\" showCancelButton=\"always\" (ionCancel)=\"hideSearchBar()\"></ion-searchbar>\r\n\t\t\t<ion-row *ngIf=\"isItemAvailable\">\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr (click)=\"goToUpdateLcv(item)\" *ngFor=\"let item of items; let i = index\">\r\n\t\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.LcvName}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.LcvCode}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.Description}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.StationName}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.StationCode}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.status}}</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-col>\r\n\t</ion-row>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-grid>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t<ion-segment class=\"status_bar\" value=\"swthAll\" (ionChange)=\"segmentChanged($event)\"> \r\n\t\t\t\t\t<ion-segment-button value=\"swthActive\">\r\n\t\t\t\t\t  <ion-label>Active</ion-label>\r\n\t\t\t\t\t</ion-segment-button>\r\n\t\t\t\t\t<ion-segment-button value=\"swthAll\">\r\n\t\t\t\t\t  <ion-label>All</ion-label>\r\n\t\t\t\t\t</ion-segment-button>\r\n\t\t\t\t\t<ion-segment-button value=\"swthInActive\">\r\n\t\t\t\t\t\t<ion-label>InActive</ion-label>\r\n\t\t\t\t\t</ion-segment-button>\r\n\t\t\t\t</ion-segment>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th>Sr No</th>\r\n\t\t\t\t\t\t\t\t<th>LCV Name</th>\r\n\t\t\t\t\t\t\t\t<th>LCV Code</th>\r\n\t\t\t\t\t\t\t\t<th>LCV Description</th>\r\n\t\t\t\t\t\t\t\t<th>Station Name</th>\r\n\t\t\t\t\t\t\t\t<th>Station Code</th>\r\n\t\t\t\t\t\t\t\t<th>Status</th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr (click)=\"goToUpdateLcv(lcvitem)\" *ngFor=\"let lcvitem of LcvList; let i= index\">\r\n\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{lcvitem.LcvName}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{lcvitem.LcvCode}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{lcvitem.Description}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{lcvitem.StationName}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{lcvitem.StationCode}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{lcvitem.status}}</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n    </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/HO/lcv/lcv-routing.module.ts":
/*!**********************************************!*\
  !*** ./src/app/HO/lcv/lcv-routing.module.ts ***!
  \**********************************************/
/*! exports provided: LcvPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LcvPageRoutingModule", function() { return LcvPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _lcv_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lcv.page */ "./src/app/HO/lcv/lcv.page.ts");




var routes = [
    {
        path: '',
        component: _lcv_page__WEBPACK_IMPORTED_MODULE_3__["LcvPage"]
    }
];
var LcvPageRoutingModule = /** @class */ (function () {
    function LcvPageRoutingModule() {
    }
    LcvPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LcvPageRoutingModule);
    return LcvPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/HO/lcv/lcv.module.ts":
/*!**************************************!*\
  !*** ./src/app/HO/lcv/lcv.module.ts ***!
  \**************************************/
/*! exports provided: LcvPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LcvPageModule", function() { return LcvPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _lcv_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lcv-routing.module */ "./src/app/HO/lcv/lcv-routing.module.ts");
/* harmony import */ var _lcv_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lcv.page */ "./src/app/HO/lcv/lcv.page.ts");







var LcvPageModule = /** @class */ (function () {
    function LcvPageModule() {
    }
    LcvPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _lcv_routing_module__WEBPACK_IMPORTED_MODULE_5__["LcvPageRoutingModule"]
            ],
            declarations: [_lcv_page__WEBPACK_IMPORTED_MODULE_6__["LcvPage"]]
        })
    ], LcvPageModule);
    return LcvPageModule;
}());



/***/ }),

/***/ "./src/app/HO/lcv/lcv.page.scss":
/*!**************************************!*\
  !*** ./src/app/HO/lcv/lcv.page.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0hPL2xjdi9sY3YucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/HO/lcv/lcv.page.ts":
/*!************************************!*\
  !*** ./src/app/HO/lcv/lcv.page.ts ***!
  \************************************/
/*! exports provided: LcvPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LcvPage", function() { return LcvPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");





var LcvPage = /** @class */ (function () {
    function LcvPage(router, commonServices, menu) {
        this.router = router;
        this.commonServices = commonServices;
        this.menu = menu;
        this.searchShow = false;
        this.searchFlag = 0;
        this.isItemAvailable = false;
        this.StatusIsfalse = false;
        this.DSStatus = '';
        this.currentdate = new Date().toISOString().split('T')[0];
        this.currDate = this.currentdate;
        console.log(this.currDate);
    }
    LcvPage.prototype.ngOnInit = function () {
        this.getLcvList();
    };
    LcvPage.prototype.openFirst = function () {
        this.menu.enable(true, 'menuCO');
        this.menu.open('menuCO');
    };
    LcvPage.prototype.segmentChanged = function (value) {
        console.log(value);
        if (value.detail.value == 'swthActive') {
            this.DSStatus = '0';
        }
        else if (value.detail.value == 'swthAll') {
            this.DSStatus = '';
        }
        else if (value.detail.value == 'swthInActive') {
            this.DSStatus = '1';
        }
        this.getLcvList();
    };
    LcvPage.prototype.getLcvList = function () {
        var self = this;
        self.commonServices.loadingPresent();
        self.commonServices.postwithservice("GetLcvMaster", { Status: self.DSStatus }).subscribe(function (res) {
            var lcvRes = JSON.parse(res);
            if (lcvRes != "" && lcvRes != undefined && lcvRes != null) {
                self.LcvList = lcvRes.Table;
                console.log(self.LcvList);
            }
            else {
                self.commonServices.presentToast("Something went wrong.");
            }
            self.commonServices.loadingDismiss();
        }, function (error) {
            self.commonServices.presentToast("Something went wrong.");
            self.commonServices.loadingDismiss();
        });
    };
    LcvPage.prototype.goToaddLcv = function () {
        this.router.navigate(['add-update-lcv', { pageFlag: "addlcv" }]);
    };
    LcvPage.prototype.goToUpdateLcv = function (item) {
        this.router.navigate(['add-update-lcv', { lcvlist: JSON.stringify(item), pageFlag: "updatelcv" }]);
    };
    LcvPage.prototype.searchCollapse = function () {
        if (this.searchFlag == 0) {
            this.searchShow = true;
            this.searchFlag = 1;
        }
        else {
            this.searchShow = false;
            this.searchFlag = 0;
        }
    };
    LcvPage.prototype.hideSearchBar = function () {
        this.searchShow = false;
        this.searchFlag = 0;
    };
    LcvPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        // this.getLcvList();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.isItemAvailable = true;
            this.items = this.LcvList.filter(function (item) {
                return (item.LcvName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            console.log(this.items);
        }
    };
    LcvPage.prototype.exportFile = function () {
        var _this = this;
        this.commonServices.post("getAllDetails_CSV", { status: this.DSStatus, PageFlag: 'LCV' }).subscribe(function (resp) {
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
    LcvPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
    ]; };
    LcvPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lcv',
            template: __webpack_require__(/*! raw-loader!./lcv.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/lcv/lcv.page.html"),
            styles: [__webpack_require__(/*! ./lcv.page.scss */ "./src/app/HO/lcv/lcv.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
    ], LcvPage);
    return LcvPage;
}());



/***/ })

}]);
//# sourceMappingURL=HO-lcv-lcv-module-es5.js.map