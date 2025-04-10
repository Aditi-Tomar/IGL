(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-entry-threshhold-entry-threshhold-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/entry-threshhold/entry-threshhold.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/entry-threshhold/entry-threshhold.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <header>\r\n    <div class=\"header\">\r\n      <div class=\"logo_div\" routerLink=\"/admin-home\">\r\n        <img src=\"../../assets/images/logo.png\" />\r\n      </div>\r\n      <h1 class=\"text_white text_center title\">Entry Thresh Hold</h1>\r\n      <span class=\"logout_div\">\r\n        <div class=\"toggle_div\">\r\n          <button (click)=\"openFirst()\">\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n          </button>\r\n        </div>\r\n      </span>\r\n    </div>\r\n  </header>\r\n  <ion-row class=\"align_center search_parent\">\r\n    <ion-col size=\"2\">\r\n      <ion-back-button defaultHref=\"admin-home\"></ion-back-button>\r\n    </ion-col>\r\n    <ion-col size=\"2\" offset=\"6\">\r\n      <ion-button size=\"small\" color=\"light\" (click)=\"searchCollapse()\">\r\n        <ion-icon name=\"search\" class=\"font22\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"2\">\r\n      <ion-button size=\"small\" color=\"light\" (click)=\"goToAddEntryThreshold()\">\r\n        <ion-icon name=\"add\" class=\"font22\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"12\" class=\"searchbar_container\" *ngIf=\"searchShow\">\r\n      <ion-searchbar type=\"text\" showCancelButton=\"always\" (ionCancel)=\"hideSearchBar()\" (ionInput)=\"getItems($event)\">\r\n      </ion-searchbar>\r\n      <ion-row *ngIf=\"isItemAvailable\">\r\n        <ion-col>\r\n          <div class=\"my_table_container\">\r\n            <table class=\"my_table\">\r\n              <tbody>\r\n                <tr (click)=\"goToUpdateEntryThreshold(item)\" *ngFor=\"let item of items; let i = index\">\r\n                  <td>{{i+1}}</td>\r\n                  <td>{{item.MeterType}}</td>\r\n                  <td>{{item.ThresholdValue}}</td>\r\n                  <td>{{item.DaysForAverage}}</td>\r\n                  <td>{{item.status}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-segment class=\"status_bar\" value=\"All\" (ionChange)=\"segmentChanged($event)\">\r\n          <ion-segment-button value=\"Active\">\r\n            <ion-label>Active</ion-label>\r\n          </ion-segment-button>\r\n          <ion-segment-button value=\"All\">\r\n            <ion-label>All</ion-label>\r\n          </ion-segment-button>\r\n          <ion-segment-button value=\"InActive\">\r\n            <ion-label>InActive</ion-label>\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <div class=\"my_table_container\">\r\n          <table class=\"my_table\">\r\n            <thead>\r\n              <tr>\r\n                <th>Sr No.</th>\r\n                <th>Meter Type</th>\r\n                <th>Thresh Hold Value (in %)</th>\r\n                <th>Average Days (in days)</th>\r\n                <th>Status</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let psmitem of listEntryThreshold;let i = index\" (click)=\"goToUpdateEntryThreshold(psmitem)\">\r\n                <td>{{i+1}}</td>\r\n                <td>{{psmitem.MeterType}}</td>\r\n                <td>{{psmitem.ThresholdValue}}</td>\r\n                <td>{{psmitem.DaysForAverage}}</td>\r\n                <td>{{psmitem.status}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/HO/entry-threshhold/entry-threshhold-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/HO/entry-threshhold/entry-threshhold-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: EntryThreshholdPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryThreshholdPageRoutingModule", function() { return EntryThreshholdPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _entry_threshhold_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entry-threshhold.page */ "./src/app/HO/entry-threshhold/entry-threshhold.page.ts");




const routes = [
    {
        path: '',
        component: _entry_threshhold_page__WEBPACK_IMPORTED_MODULE_3__["EntryThreshholdPage"]
    }
];
let EntryThreshholdPageRoutingModule = class EntryThreshholdPageRoutingModule {
};
EntryThreshholdPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EntryThreshholdPageRoutingModule);



/***/ }),

/***/ "./src/app/HO/entry-threshhold/entry-threshhold.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/HO/entry-threshhold/entry-threshhold.module.ts ***!
  \****************************************************************/
/*! exports provided: EntryThreshholdPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryThreshholdPageModule", function() { return EntryThreshholdPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _entry_threshhold_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entry-threshhold-routing.module */ "./src/app/HO/entry-threshhold/entry-threshhold-routing.module.ts");
/* harmony import */ var _entry_threshhold_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entry-threshhold.page */ "./src/app/HO/entry-threshhold/entry-threshhold.page.ts");







let EntryThreshholdPageModule = class EntryThreshholdPageModule {
};
EntryThreshholdPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _entry_threshhold_routing_module__WEBPACK_IMPORTED_MODULE_5__["EntryThreshholdPageRoutingModule"]
        ],
        declarations: [_entry_threshhold_page__WEBPACK_IMPORTED_MODULE_6__["EntryThreshholdPage"]]
    })
], EntryThreshholdPageModule);



/***/ }),

/***/ "./src/app/HO/entry-threshhold/entry-threshhold.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/HO/entry-threshhold/entry-threshhold.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0hPL2VudHJ5LXRocmVzaGhvbGQvZW50cnktdGhyZXNoaG9sZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/HO/entry-threshhold/entry-threshhold.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/HO/entry-threshhold/entry-threshhold.page.ts ***!
  \**************************************************************/
/*! exports provided: EntryThreshholdPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryThreshholdPage", function() { return EntryThreshholdPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");





let EntryThreshholdPage = class EntryThreshholdPage {
    constructor(router, commonServices, menu, alertController) {
        this.router = router;
        this.commonServices = commonServices;
        this.menu = menu;
        this.alertController = alertController;
        this.searchShow = false;
        this.searchFlag = 0;
        this.isShown = false;
        this.isItemAvailable = false;
        this.listEntryThreshold = [];
        this.StatusIsfalse = false;
        this.entryThresholdStatus = '';
    }
    ngOnInit() {
        // this.getEntryThresholdList();
    }
    openFirst() {
        this.menu.enable(true, 'menuCO');
        this.menu.open('menuCO');
    }
    segmentChanged(value) {
        console.log(value);
        if (value.detail.value == 'Active') {
            this.entryThresholdStatus = '0';
        }
        else if (value.detail.value == 'All') {
            this.entryThresholdStatus = '';
        }
        else if (value.detail.value == 'InActive') {
            this.entryThresholdStatus = '1';
        }
        this.getEntryThresholdList();
    }
    ionViewWillEnter() {
        this.getEntryThresholdList();
    }
    getEntryThresholdList() {
        var self = this;
        self.commonServices.loadingPresent();
        self.commonServices.post("getEntryThreshold", { status: self.entryThresholdStatus })
            .subscribe((res) => {
            var paymentRes = JSON.parse(res);
            if (paymentRes.Table.length > 0) {
                self.listEntryThreshold = paymentRes.Table;
            }
            console.log(self.listEntryThreshold);
            self.commonServices.loadingDismiss();
        }, (error) => {
            self.commonServices.presentToast('Something went wrong.');
            self.commonServices.loadingDismiss();
        });
    }
    getItems(ev) {
        // Reset items back to all of the items
        // this.getEntryThresholdList();
        // set val to the value of the searchbar
        const val = ev.target.value;
        this.items = this.listEntryThreshold;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.isItemAvailable = true;
            this.items = this.listEntryThreshold.filter((item) => {
                return (item.MeterType.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            console.log(this.items);
        }
    }
    goToAddEntryThreshold() {
        this.router.navigate(['add-update-entry-threshhold', { pageFlag: "addds" }]);
    }
    goToUpdateEntryThreshold(item) {
        this.router.navigate(['add-update-entry-threshhold', { threshholdbj: JSON.stringify(item), pageFlag: "updateds" }]);
    }
    searchCollapse() {
        if (this.searchFlag == 0) {
            this.searchShow = true;
            this.searchFlag = 1;
        }
        else {
            this.searchShow = false;
            this.searchFlag = 0;
        }
    }
    hideSearchBar() {
        this.searchShow = false;
        this.searchFlag = 0;
    }
};
EntryThreshholdPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
EntryThreshholdPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-entry-threshhold',
        template: __webpack_require__(/*! raw-loader!./entry-threshhold.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/entry-threshhold/entry-threshhold.page.html"),
        styles: [__webpack_require__(/*! ./entry-threshhold.page.scss */ "./src/app/HO/entry-threshhold/entry-threshhold.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], EntryThreshholdPage);



/***/ })

}]);
//# sourceMappingURL=HO-entry-threshhold-entry-threshhold-module-es2015.js.map