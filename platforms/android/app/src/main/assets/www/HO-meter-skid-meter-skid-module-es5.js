(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-meter-skid-meter-skid-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/meter-skid/meter-skid.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/meter-skid/meter-skid.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/admin-home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t  \t<h1 class=\"text_white text_center title\">Meter Skid</h1>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<ion-row class=\"align_center search_parent\">\r\n\t\t<ion-col size=\"2\">\r\n\t\t\t<ion-back-button defaultHref=\"admin-home\"></ion-back-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"2\" offset=\"4\">\r\n\t\t\t<ion-button size=\"small\" color=\"light\" (click)=\"searchCollapse()\">\r\n\t\t\t\t<ion-icon name=\"search\" class=\"font22\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"2\">\r\n\t\t\t<ion-button size=\"small\" color=\"light\" (click)=\"goToaddMSkid()\"><ion-icon name=\"add\" class=\"font22\"></ion-icon></ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col >\r\n\t\t\t<ion-button color=\"light\" size=\"small\" (click)=\"exportFile()\">\r\n\t\t\t\t<ion-icon name=\"arrow-down\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"12\" class=\"searchbar_container\" *ngIf=\"searchShow\">\r\n\t\t\t<ion-searchbar debounce=\"500\" (ionInput)=\"getItems($event)\" showCancelButton=\"always\" (ionCancel)=\"hideSearchBar()\"></ion-searchbar>\r\n\t\t\t<ion-row *ngIf=\"isItemAvailable\">\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr (click)=\"goToUpdateMSkid(item)\" *ngFor=\"let item of items; let i = index\">\r\n\t\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.MeterSkidName}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.MeterSkidCode}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.StationCode}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.StationName}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.Status}}</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-col>\r\n\t</ion-row>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-grid>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t<ion-segment class=\"status_bar\" value=\"All\" (ionChange)=\"segmentChanged($event)\">\r\n\t\t\t\t\t<ion-segment-button value=\"Active\">\r\n\t\t\t\t\t  <ion-label>Active</ion-label>\r\n\t\t\t\t\t</ion-segment-button>\r\n\t\t\t\t\t<ion-segment-button value=\"All\">\r\n\t\t\t\t\t  <ion-label>All</ion-label>\r\n\t\t\t\t\t</ion-segment-button>\r\n\t\t\t\t\t<ion-segment-button value=\"InActive\">\r\n\t\t\t\t\t\t<ion-label>InActive</ion-label>\r\n\t\t\t\t\t</ion-segment-button>\r\n\t\t\t\t</ion-segment>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th>Sr No</th>\r\n\t\t\t\t\t\t\t\t<th>Meter Skid Name</th>\r\n\t\t\t\t\t\t\t\t<th>Meter Skid Code</th>\r\n\t\t\t\t\t\t\t\t<th>Station Code</th>\r\n\t\t\t\t\t\t\t\t<th>Station Name</th>\r\n\t\t\t\t\t\t\t\t<th>Status</th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr (click)=\"goToUpdateMSkid(mskiditem)\" *ngFor=\"let mskiditem of MeterSkidList; let i = index\">\r\n\t\t\t\t\t\t\t\t<td >{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{mskiditem.MeterSkidName}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{mskiditem.MeterSkidCode}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{mskiditem.StationCode}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{mskiditem.StationName}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{mskiditem.Status}}</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n    </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/HO/meter-skid/meter-skid-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/HO/meter-skid/meter-skid-routing.module.ts ***!
  \************************************************************/
/*! exports provided: MeterSkidPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeterSkidPageRoutingModule", function() { return MeterSkidPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _meter_skid_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meter-skid.page */ "./src/app/HO/meter-skid/meter-skid.page.ts");




var routes = [
    {
        path: '',
        component: _meter_skid_page__WEBPACK_IMPORTED_MODULE_3__["MeterSkidPage"]
    }
];
var MeterSkidPageRoutingModule = /** @class */ (function () {
    function MeterSkidPageRoutingModule() {
    }
    MeterSkidPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], MeterSkidPageRoutingModule);
    return MeterSkidPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/HO/meter-skid/meter-skid.module.ts":
/*!****************************************************!*\
  !*** ./src/app/HO/meter-skid/meter-skid.module.ts ***!
  \****************************************************/
/*! exports provided: MeterSkidPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeterSkidPageModule", function() { return MeterSkidPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _meter_skid_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./meter-skid-routing.module */ "./src/app/HO/meter-skid/meter-skid-routing.module.ts");
/* harmony import */ var _meter_skid_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./meter-skid.page */ "./src/app/HO/meter-skid/meter-skid.page.ts");







var MeterSkidPageModule = /** @class */ (function () {
    function MeterSkidPageModule() {
    }
    MeterSkidPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _meter_skid_routing_module__WEBPACK_IMPORTED_MODULE_5__["MeterSkidPageRoutingModule"]
            ],
            declarations: [_meter_skid_page__WEBPACK_IMPORTED_MODULE_6__["MeterSkidPage"]]
        })
    ], MeterSkidPageModule);
    return MeterSkidPageModule;
}());



/***/ }),

/***/ "./src/app/HO/meter-skid/meter-skid.page.scss":
/*!****************************************************!*\
  !*** ./src/app/HO/meter-skid/meter-skid.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0hPL21ldGVyLXNraWQvbWV0ZXItc2tpZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/HO/meter-skid/meter-skid.page.ts":
/*!**************************************************!*\
  !*** ./src/app/HO/meter-skid/meter-skid.page.ts ***!
  \**************************************************/
/*! exports provided: MeterSkidPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeterSkidPage", function() { return MeterSkidPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");





var MeterSkidPage = /** @class */ (function () {
    function MeterSkidPage(router, commonServices, menu) {
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
    MeterSkidPage.prototype.ngOnInit = function () {
        this.getMeterSkidList();
    };
    MeterSkidPage.prototype.openFirst = function () {
        this.menu.enable(true, 'menuCO');
        this.menu.open('menuCO');
    };
    MeterSkidPage.prototype.segmentChanged = function (value) {
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
        this.getMeterSkidList();
    };
    MeterSkidPage.prototype.getMeterSkidList = function () {
        var self = this;
        self.commonServices.loadingPresent();
        self.commonServices.postwithservice("GetMeterSkidMaster", { Status: self.DSStatus }).subscribe(function (res) {
            var MeterSkidRes = JSON.parse(res);
            if (MeterSkidRes != "" && MeterSkidRes != undefined && MeterSkidRes != null) {
                self.MeterSkidList = MeterSkidRes.Table;
                console.log(self.MeterSkidList);
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
    MeterSkidPage.prototype.goToaddMSkid = function () {
        this.router.navigate(['add-apdate-meter-skid', { pageFlag: "addsmkid" }]);
    };
    MeterSkidPage.prototype.goToUpdateMSkid = function (item) {
        this.router.navigate(['add-apdate-meter-skid', { mskidlist: JSON.stringify(item), pageFlag: "updatemkid" }]);
    };
    MeterSkidPage.prototype.searchCollapse = function () {
        if (this.searchFlag == 0) {
            this.searchShow = true;
            this.searchFlag = 1;
        }
        else {
            this.searchShow = false;
            this.searchFlag = 0;
        }
    };
    MeterSkidPage.prototype.hideSearchBar = function () {
        this.searchShow = false;
        this.searchFlag = 0;
    };
    MeterSkidPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        // this.getMeterSkidList();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.isItemAvailable = true;
            this.items = this.MeterSkidList.filter(function (item) {
                return (item.MeterSkidName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            console.log(this.items);
        }
    };
    MeterSkidPage.prototype.exportFile = function () {
        var _this = this;
        this.commonServices.post("getAllDetails_CSV", { status: this.DSStatus, PageFlag: 'MeterSkid' }).subscribe(function (resp) {
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
    MeterSkidPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
    ]; };
    MeterSkidPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-meter-skid',
            template: __webpack_require__(/*! raw-loader!./meter-skid.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/meter-skid/meter-skid.page.html"),
            styles: [__webpack_require__(/*! ./meter-skid.page.scss */ "./src/app/HO/meter-skid/meter-skid.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
    ], MeterSkidPage);
    return MeterSkidPage;
}());



/***/ })

}]);
//# sourceMappingURL=HO-meter-skid-meter-skid-module-es5.js.map