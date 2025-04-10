(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-package-package-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/package/package.page.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/package/package.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/admin-home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t  \t<h1 class=\"text_white text_center title\">Package</h1>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<ion-row class=\"align_center search_parent\">\r\n\t\t<ion-col size=\"2\">\r\n\t\t\t<ion-back-button defaultHref=\"admin-home\"></ion-back-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"2\" offset=\"4\">\r\n\t\t\t<ion-button size=\"small\" color=\"light\" (click)=\"searchCollapse()\">\r\n\t\t\t\t<ion-icon name=\"search\" class=\"font22\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"2\">\r\n\t\t\t<ion-button size=\"small\" color=\"light\" (click)=\"goToaddpack()\"><ion-icon name=\"add\" class=\"font22\"></ion-icon></ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col >\r\n\t\t\t<ion-button color=\"light\" size=\"small\" (click)=\"exportFile()\">\r\n\t\t\t\t<ion-icon name=\"arrow-down\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"12\" class=\"searchbar_container\" *ngIf=\"searchShow\">\r\n\t\t\t<ion-searchbar type=\"text\" debounce=\"500\" (ionInput)=\"getItems($event)\" showCancelButton=\"always\" (ionCancel)=\"hideSearchBar()\"></ion-searchbar>\r\n\t\t\t<ion-row *ngIf=\"isItemAvailable\">\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr (click)=\"goToUpdatepack(item)\" *ngFor=\"let item of items; let i = index\">\r\n\t\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.PackageName}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.PackageCode}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.StationName}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.StationCode}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.PackageMake}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.PackageCapacity}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.PrimeMover}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.IsVentFlow}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{item.status}}</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-col>\r\n\t</ion-row>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-grid>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t<ion-segment class=\"status_bar\" value=\"All\" (ionChange)=\"segmentChanged($event)\">\r\n\t\t\t\t\t<ion-segment-button value=\"Active\">\r\n\t\t\t\t\t  <ion-label>Active</ion-label>\r\n\t\t\t\t\t</ion-segment-button>\r\n\t\t\t\t\t<ion-segment-button value=\"All\">\r\n\t\t\t\t\t  <ion-label>All</ion-label>\r\n\t\t\t\t\t</ion-segment-button>\r\n\t\t\t\t\t<ion-segment-button value=\"InActive\">\r\n\t\t\t\t\t\t<ion-label>InActive</ion-label>\r\n\t\t\t\t\t</ion-segment-button>\r\n\t\t\t\t</ion-segment>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th>Sr No</th>\r\n\t\t\t\t\t\t\t\t<th>Package Name</th>\r\n\t\t\t\t\t\t\t\t<th>Package Code</th>\r\n\t\t\t\t\t\t\t\t<th>Station Name</th>\r\n\t\t\t\t\t\t\t\t<th>Station Code</th>\r\n\t\t\t\t\t\t\t\t<th>Package Maker</th>\r\n\t\t\t\t\t\t\t\t<th>Package Capacity</th>\r\n\t\t\t\t\t\t\t\t<th>Prime Mover</th>\r\n\t\t\t\t\t\t\t\t<th>Vent Flow</th>\r\n\t\t\t\t\t\t\t\t<th>Status</th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr (click)=\"goToUpdatepack(packitem)\"  *ngFor=\"let packitem of PackageList; let i= index\">\r\n\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{packitem.PackageName}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{packitem.PackageCode}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{packitem.StationName}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{packitem.StationCode}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{packitem.PackageMake}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{packitem.PackageCapacity}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{packitem.PrimeMover}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{packitem.IsVentFlow}}</td>\r\n\t\t\t\t\t\t\t\t<td>{{packitem.status}}</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n    </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/HO/package/package-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/HO/package/package-routing.module.ts ***!
  \******************************************************/
/*! exports provided: PackagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagePageRoutingModule", function() { return PackagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _package_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./package.page */ "./src/app/HO/package/package.page.ts");




const routes = [
    {
        path: '',
        component: _package_page__WEBPACK_IMPORTED_MODULE_3__["PackagePage"]
    }
];
let PackagePageRoutingModule = class PackagePageRoutingModule {
};
PackagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PackagePageRoutingModule);



/***/ }),

/***/ "./src/app/HO/package/package.module.ts":
/*!**********************************************!*\
  !*** ./src/app/HO/package/package.module.ts ***!
  \**********************************************/
/*! exports provided: PackagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagePageModule", function() { return PackagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _package_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./package-routing.module */ "./src/app/HO/package/package-routing.module.ts");
/* harmony import */ var _package_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./package.page */ "./src/app/HO/package/package.page.ts");







let PackagePageModule = class PackagePageModule {
};
PackagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _package_routing_module__WEBPACK_IMPORTED_MODULE_5__["PackagePageRoutingModule"]
        ],
        declarations: [_package_page__WEBPACK_IMPORTED_MODULE_6__["PackagePage"]]
    })
], PackagePageModule);



/***/ }),

/***/ "./src/app/HO/package/package.page.scss":
/*!**********************************************!*\
  !*** ./src/app/HO/package/package.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0hPL3BhY2thZ2UvcGFja2FnZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/HO/package/package.page.ts":
/*!********************************************!*\
  !*** ./src/app/HO/package/package.page.ts ***!
  \********************************************/
/*! exports provided: PackagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagePage", function() { return PackagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");





let PackagePage = class PackagePage {
    constructor(router, commonServices, menu) {
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
    ngOnInit() {
        this.getPackageList();
    }
    openFirst() {
        this.menu.enable(true, 'menuCO');
        this.menu.open('menuCO');
    }
    segmentChanged(value) {
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
        this.getPackageList();
    }
    getPackageList() {
        var self = this;
        self.commonServices.loadingPresent();
        self.commonServices.postwithservice("GetPackageMaster", { Status: self.DSStatus }).subscribe((res) => {
            var packageRes = JSON.parse(res);
            if (packageRes != "" && packageRes != undefined && packageRes != null) {
                self.PackageList = packageRes.Table;
                console.log(self.PackageList);
            }
            else {
                self.commonServices.presentToast("Something went wrong.");
            }
            self.commonServices.loadingDismiss();
        }, (error) => {
            self.commonServices.presentToast("Something went wrong.");
            self.commonServices.loadingDismiss();
        });
    }
    goToaddpack() {
        this.router.navigate(['add-apdate-package', { pageFlag: "addpage" }]);
    }
    goToUpdatepack(item) {
        this.router.navigate(['add-apdate-package', { packlist: JSON.stringify(item), pageFlag: "updatepage" }]);
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
    getItems(ev) {
        // Reset items back to all of the items
        // this.getPackageList();
        // set val to the value of the searchbar
        const val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.isItemAvailable = true;
            this.items = this.PackageList.filter((item) => {
                return (item.StationCode.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            console.log(this.items);
        }
    }
    exportFile() {
        this.commonServices.post("getAllDetails_CSV", { status: this.DSStatus, PageFlag: 'Package' }).subscribe((resp) => {
            const data = JSON.parse(resp);
            // console.log(data);
            if (data.FileName != '') {
                //  alert('file name');
                if (JSON.parse(resp).errMsg == 'success') {
                    // alert('inneer sucess');
                    window.location.href = this.commonServices.apiImageAttachment + "/Attachments/Excel/" + JSON.parse(resp).FileName;
                    this.commonServices.loadingDismiss();
                }
                else {
                    this.commonServices.presentToast(JSON.parse(resp).errMsg);
                    this.commonServices.loadingDismiss();
                }
            }
            else {
                this.commonServices.presentToast('No Report Data Found');
                this.commonServices.loadingDismiss();
            }
        }, (error) => {
            this.commonServices.presentToast('Something went wrong.');
            this.commonServices.loadingDismiss();
        });
    }
};
PackagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
];
PackagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-package',
        template: __webpack_require__(/*! raw-loader!./package.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/package/package.page.html"),
        styles: [__webpack_require__(/*! ./package.page.scss */ "./src/app/HO/package/package.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
], PackagePage);



/***/ })

}]);
//# sourceMappingURL=HO-package-package-module-es2015.js.map