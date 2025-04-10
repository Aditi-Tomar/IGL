(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-gas-genset-gas-genset-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/gas-genset/gas-genset.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/gas-genset/gas-genset.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/admin-home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t  \t<h1 class=\"text_white text_center title\">Gas Genset</h1>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<ion-row class=\"align_center search_parent\">\r\n\t\t<ion-col size=\"2\">\r\n\t\t\t<ion-back-button defaultHref=\"admin-home\"></ion-back-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"2\" offset=\"4\">\r\n\t\t\t<ion-button size=\"small\" color=\"light\" (click)=\"searchCollapse()\">\r\n\t\t\t\t<ion-icon name=\"search\" class=\"font22\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"2\">\r\n\t\t\t<ion-button size=\"small\" color=\"light\" (click)=\"goToaddGset()\"><ion-icon name=\"add\" class=\"font22\"></ion-icon></ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col >\r\n\t\t\t<ion-button color=\"light\" size=\"small\" (click)=\"exportFile()\">\r\n\t\t\t\t<ion-icon name=\"arrow-down\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"12\" class=\"searchbar_container\" *ngIf=\"searchShow\">\r\n\t\t\t<ion-searchbar type=\"text\" debounce=\"500\" (ionInput)=\"getItems($event)\" placeholder=\"Gas GenSet Name\" showCancelButton=\"always\" (ionCancel)=\"hideSearchBar()\"></ion-searchbar>\r\n\t\t\t<ion-row *ngIf=\"isItemAvailable\">\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr (click)=\"goToRegionUpdate(item)\" *ngFor=\"let item of items; let i = index\">\r\n\t\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.GasGenSetName}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.GenSetCode}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.Description}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.StationName}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.StationCode}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.status}}</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-col>\r\n\t</ion-row>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-grid>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t<ion-segment class=\"status_bar\" value=\"All\" (ionChange)=\"segmentChanged($event)\">\r\n\t\t\t\t\t<ion-segment-button value=\"Active\">\r\n\t\t\t\t\t  <ion-label>Active</ion-label>\r\n\t\t\t\t\t</ion-segment-button>\r\n\t\t\t\t\t<ion-segment-button value=\"All\">\r\n\t\t\t\t\t  <ion-label>All</ion-label>\r\n\t\t\t\t\t</ion-segment-button>\r\n\t\t\t\t\t<ion-segment-button value=\"InActive\">\r\n\t\t\t\t\t\t<ion-label>InActive</ion-label>\r\n\t\t\t\t\t</ion-segment-button>\r\n\t\t\t\t</ion-segment>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th>Sr No</th>\r\n\t\t\t\t\t\t\t\t<th>Gas Genset Name</th>\r\n\t\t\t\t\t\t\t\t<th>Gas Genset Code</th>\r\n\t\t\t\t\t\t\t\t<th>Discription</th>\r\n\t\t\t\t\t\t\t\t<th>Station Name</th>\r\n\t\t\t\t\t\t\t\t<th>Station Code</th>\r\n\t\t\t\t\t\t\t\t<th>Status</th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr (click)=\"goToUpdateGset(gitem)\" *ngFor=\"let gitem of GasList; let i=index\">\r\n\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{gitem.GasGenSetName}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{gitem.GenSetCode}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{gitem.Description}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{gitem.StationName}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{gitem.StationCode}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{gitem.status}}</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n    </ion-grid>\r\n</ion-content> "

/***/ }),

/***/ "./src/app/HO/gas-genset/gas-genset-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/HO/gas-genset/gas-genset-routing.module.ts ***!
  \************************************************************/
/*! exports provided: GasGensetPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GasGensetPageRoutingModule", function() { return GasGensetPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gas_genset_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gas-genset.page */ "./src/app/HO/gas-genset/gas-genset.page.ts");




var routes = [
    {
        path: '',
        component: _gas_genset_page__WEBPACK_IMPORTED_MODULE_3__["GasGensetPage"]
    }
];
var GasGensetPageRoutingModule = /** @class */ (function () {
    function GasGensetPageRoutingModule() {
    }
    GasGensetPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], GasGensetPageRoutingModule);
    return GasGensetPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/HO/gas-genset/gas-genset.module.ts":
/*!****************************************************!*\
  !*** ./src/app/HO/gas-genset/gas-genset.module.ts ***!
  \****************************************************/
/*! exports provided: GasGensetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GasGensetPageModule", function() { return GasGensetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gas_genset_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gas-genset-routing.module */ "./src/app/HO/gas-genset/gas-genset-routing.module.ts");
/* harmony import */ var _gas_genset_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gas-genset.page */ "./src/app/HO/gas-genset/gas-genset.page.ts");







var GasGensetPageModule = /** @class */ (function () {
    function GasGensetPageModule() {
    }
    GasGensetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _gas_genset_routing_module__WEBPACK_IMPORTED_MODULE_5__["GasGensetPageRoutingModule"]
            ],
            declarations: [_gas_genset_page__WEBPACK_IMPORTED_MODULE_6__["GasGensetPage"]]
        })
    ], GasGensetPageModule);
    return GasGensetPageModule;
}());



/***/ }),

/***/ "./src/app/HO/gas-genset/gas-genset.page.scss":
/*!****************************************************!*\
  !*** ./src/app/HO/gas-genset/gas-genset.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0hPL2dhcy1nZW5zZXQvZ2FzLWdlbnNldC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/HO/gas-genset/gas-genset.page.ts":
/*!**************************************************!*\
  !*** ./src/app/HO/gas-genset/gas-genset.page.ts ***!
  \**************************************************/
/*! exports provided: GasGensetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GasGensetPage", function() { return GasGensetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var GasGensetPage = /** @class */ (function () {
    function GasGensetPage(router, commonServices, menu) {
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
    GasGensetPage.prototype.ngOnInit = function () {
        this.getGassetList();
    };
    GasGensetPage.prototype.segmentChanged = function (value) {
        console.log(value);
        if (value.detail.value == 'Active') {
            this.DSStatus = '0';
        }
        else if (value.detail.value == 'All') {
            this.DSStatus = '';
        }
        else if (value.detail.value == 'InActive') {
            this.DSStatus = '1';
        }
        this.getGassetList();
    };
    GasGensetPage.prototype.getGassetList = function () {
        var self = this;
        self.commonServices.loadingPresent();
        self.commonServices.postwithservice("GetGensetMaster", { Flag: 'AlluserDetsils', Status: self.DSStatus }).subscribe(function (res) {
            var gassetRes = JSON.parse(res);
            if (gassetRes != "" && gassetRes != undefined && gassetRes != null) {
                self.GasList = gassetRes.Table;
                console.log(self.GasList);
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
    GasGensetPage.prototype.openFirst = function () {
        this.menu.enable(true, 'menuCO');
        this.menu.open('menuCO');
    };
    GasGensetPage.prototype.goToaddGset = function () {
        this.router.navigate(['add-update-gas-genset', { pageFlag: "addpage" }]);
    };
    GasGensetPage.prototype.goToUpdateGset = function (item) {
        this.router.navigate(['add-update-gas-genset', { gsetlist: JSON.stringify(item), pageFlag: "updatepage" }]);
    };
    GasGensetPage.prototype.searchCollapse = function () {
        if (this.searchFlag == 0) {
            this.searchShow = true;
            this.searchFlag = 1;
        }
        else {
            this.searchShow = false;
            this.searchFlag = 0;
        }
    };
    GasGensetPage.prototype.hideSearchBar = function () {
        this.searchShow = false;
        this.searchFlag = 0;
    };
    GasGensetPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        // this.getGassetList();
        // set val to the value of the searchbar
        var val = ev.target.value;
        console.log(val);
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.isItemAvailable = true;
            this.items = this.GasList.filter(function (item) {
                return (item.GasGenSetName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            console.log(this.items);
        }
    };
    GasGensetPage.prototype.exportFile = function () {
        var _this = this;
        this.commonServices.post("getAllDetails_CSV", { status: this.DSStatus, PageFlag: 'GasGenset' }).subscribe(function (resp) {
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
    GasGensetPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] }
    ]; };
    GasGensetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gas-genset',
            template: __webpack_require__(/*! raw-loader!./gas-genset.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/gas-genset/gas-genset.page.html"),
            styles: [__webpack_require__(/*! ./gas-genset.page.scss */ "./src/app/HO/gas-genset/gas-genset.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])
    ], GasGensetPage);
    return GasGensetPage;
}());



/***/ })

}]);
//# sourceMappingURL=HO-gas-genset-gas-genset-module-es5.js.map