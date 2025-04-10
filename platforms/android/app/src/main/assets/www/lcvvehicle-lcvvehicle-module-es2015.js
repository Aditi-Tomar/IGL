(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lcvvehicle-lcvvehicle-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/lcvvehicle/lcvvehicle.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/lcvvehicle/lcvvehicle.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n  <div class=\"main_heading1\">\r\n\t\t<div>\r\n\t\t\t<ion-back-button defaultHref=\"home\"></ion-back-button>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<h1>LCV Vehicals</h1>\r\n\t\t</div>\r\n\t\t<div></div>\r\n\t</div>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<div class=\"content_area\">\r\n\t\t<div class=\"mycard\">\r\n\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t<label>Date From</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t<ion-label>Select Date:</ion-label>\r\n\t\t\t\t\t\t<ion-datetime #selcteddateFrom  displayFormat=\"DD-MMM-YYYY\"\r\n\t\t\t\t\t\t\tpickerFormat=\"DD MMM YYYY\" [ngModel]=\"DateFrom\" name=\"selcteddateForm\"\r\n\t\t\t\t\t\t\t(ngModelChange)=\"OnDateChnageFrom(selcteddateFrom.value)\" [max]=\"secondMaxDate\">\r\n\t\t\t\t\t\t</ion-datetime>\r\n\t\t\t\t\t</ion-item>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n      <div class=\"form_inp_container\">\r\n\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t<label>From Station</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"input_container\">\r\n          <ion-item>\r\n            <ion-input type=\"text\" [(ngModel)]=\"Stationfrom\" name=\"Stationfrom\" [disabled]=\"isstationfrom\"></ion-input>\r\n          </ion-item>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n      <div class=\"form_inp_container\">\r\n\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t<label>To Station</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"input_container\">\r\n          <ion-item>\r\n            <ion-input type=\"text\" [(ngModel)]=\"stCodeMy\" placeholder=\"--Select Station Name--\" (click)=\"filterBoxShow($event)\" readonly></ion-input>\r\n          </ion-item>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n      <div *ngIf=\"fiterBox\">\r\n        <ion-searchbar [(ngModel)]=\"filterItem\" (ionInput)=\"filterStations()\" placeholder=\"Search..\" autocomplete=\"off\"></ion-searchbar>\r\n        <ion-list>\r\n          <ion-item *ngFor=\"let itm of filteredListStation\" (click)=\"filterBoxShow(itm)\">\r\n            {{itm.StationName}}\r\n          </ion-item>\r\n        </ion-list>\r\n      </div>\r\n      \r\n\r\n      <div class=\"form_inp_container\">\r\n        <div class=\"label_container\">\r\n          <label>LCV KG</label>\r\n        </div>\r\n        <div class=\"input_container\">\r\n          <ion-input type=\"text\" [(ngModel)]=\"LCVKG\" name=\"LCVKG\"></ion-input>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form_inp_container\">\r\n        <div class=\"label_container\">\r\n          <label>NO. OF TRIPS</label>\r\n        </div>\r\n        <div class=\"input_container\">\r\n          <ion-input type=\"text\" [(ngModel)]=\"Trips\" name=\"Trips\"></ion-input>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form_inp_container\">\r\n        <div class=\"label_container\">\r\n          <label>LCV NO</label>\r\n        </div>\r\n        <div class=\"input_container\">\r\n          <ion-input type=\"text\" [(ngModel)]=\"LCVNO\" name=\"LCVNO\"></ion-input>\r\n        </div>\r\n      </div>\r\n\r\n        <div class=\"button_container\">\r\n          <ion-button color=\"dark_green_clr\" (click)=\"InsertLCVVehicl()\">SAVE</ion-button>\r\n        </div>\r\n      \r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col>\r\n              <div class=\"my_table_container\">\r\n                <table class=\"my_table\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>Sr No.</th>\r\n                      <th>From Station</th>\r\n                      <th>To Station</th>\r\n                      <th>LCV KG</th>\r\n                      <th>No. of Trips</th>\r\n                      <th>LCV NO</th>\r\n                      <th style=\"width:150px; text-align:center;\">Action</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let itm of lcvlist; let i = index\">\r\n                      <td>{{i + 1}}</td>\r\n                      <td>{{itm.Fromstation}}</td>\r\n                      <td>{{itm.Tostation}}</td>\r\n                      <td>{{itm.LCVKG}}</td>\r\n                      <td>{{itm.Trips}}</td>\r\n                      <td>{{itm.LCVNO}}</td>\r\n                      <td style=\"text-align: center;\">\r\n                        <ion-button size=\"small\" color=\"success\" (click)=\"Edit(itm)\">\r\n                          Edit\r\n                        </ion-button>\r\n                        <ion-button size=\"small\" color=\"danger\" (click)=\"Deletelcv(itm.id)\">\r\n                          Delete\r\n                        </ion-button>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n        \r\n    </div>\r\n  </div>\r\n\r\n \r\n  \r\n</ion-content>\r\n\r\n"

/***/ }),

/***/ "./src/app/lcvvehicle/lcvvehicle-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/lcvvehicle/lcvvehicle-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: LCVvehiclePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LCVvehiclePageRoutingModule", function() { return LCVvehiclePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _lcvvehicle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lcvvehicle.page */ "./src/app/lcvvehicle/lcvvehicle.page.ts");




const routes = [
    {
        path: '',
        component: _lcvvehicle_page__WEBPACK_IMPORTED_MODULE_3__["LCVvehiclePage"]
    }
];
let LCVvehiclePageRoutingModule = class LCVvehiclePageRoutingModule {
};
LCVvehiclePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LCVvehiclePageRoutingModule);



/***/ }),

/***/ "./src/app/lcvvehicle/lcvvehicle.module.ts":
/*!*************************************************!*\
  !*** ./src/app/lcvvehicle/lcvvehicle.module.ts ***!
  \*************************************************/
/*! exports provided: LCVvehiclePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LCVvehiclePageModule", function() { return LCVvehiclePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _lcvvehicle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lcvvehicle-routing.module */ "./src/app/lcvvehicle/lcvvehicle-routing.module.ts");
/* harmony import */ var _lcvvehicle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lcvvehicle.page */ "./src/app/lcvvehicle/lcvvehicle.page.ts");







let LCVvehiclePageModule = class LCVvehiclePageModule {
};
LCVvehiclePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _lcvvehicle_routing_module__WEBPACK_IMPORTED_MODULE_5__["LCVvehiclePageRoutingModule"]
        ],
        declarations: [_lcvvehicle_page__WEBPACK_IMPORTED_MODULE_6__["LCVvehiclePage"]]
    })
], LCVvehiclePageModule);



/***/ }),

/***/ "./src/app/lcvvehicle/lcvvehicle.page.scss":
/*!*************************************************!*\
  !*** ./src/app/lcvvehicle/lcvvehicle.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xjdnZlaGljbGUvbGN2dmVoaWNsZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/lcvvehicle/lcvvehicle.page.ts":
/*!***********************************************!*\
  !*** ./src/app/lcvvehicle/lcvvehicle.page.ts ***!
  \***********************************************/
/*! exports provided: LCVvehiclePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LCVvehiclePage", function() { return LCVvehiclePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");







let LCVvehiclePage = class LCVvehiclePage {
    constructor(router, menu, datepipe, commonServices, alertCtrl) {
        this.router = router;
        this.menu = menu;
        this.datepipe = datepipe;
        this.commonServices = commonServices;
        this.alertCtrl = alertCtrl;
        this.CurrentDate = '';
        this.DateFromMy = new Date().toISOString().split('T')[0];
        this.secondMaxDate = new Date().toISOString();
        this.monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ];
        this.userData = '';
        this.DepartmentCode = localStorage.getItem('DepartmentCode');
        this.UserId = localStorage.getItem('UID');
        this.isstationfrom = true;
        this.filterBoxFlag = 0;
        this.fiterBox = false;
        this.StationName = "";
        this.Remark = "";
        this.SelectedlcvId = '';
        this.userData = JSON.parse(localStorage.getItem('userDataR'));
        this.Stationfrom = this.userData.StationName;
        this.stationCode = localStorage.getItem('stationCode');
        console.log(this.stationCode);
    }
    ngOnInit() {
        const dt = new Date();
        this.CurrentDate = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        this.DateFrom = new Date().toLocaleDateString();
        // this.DateTo = new Date().toLocaleDateString();
        this.DateFrom = this.datepipe.transform(dt, 'yyyy/MM/dd');
        // this.DateTo = this.datepipe.transform(dt, 'yyyy/MM/dd');
        this.getstationlist();
        this.getlcvlist();
    }
    openFirst() {
        this.menu.enable(true, 'menuStn');
        this.menu.open('menuStn');
    }
    getstationlist() {
        this.commonServices.post('CommonGetData', { Flag: 'Stationforlcvvehicle' }).subscribe((resp) => {
            this.listStation = JSON.parse(resp).Table;
            this.filteredListStation = this.listStation;
            console.log(this.listStation, "listStation");
        }, (error) => {
            alert("Something went wrong.");
        });
    }
    getlcvlist() {
        this.commonServices.postwithservice("getlcvlist", { flag: 'get', Fromstation: this.stationCode, Entrydate: this.DateFrom }).subscribe((resp) => {
            this.lcvlist = JSON.parse(resp).Table;
            console.log(this.lcvlist, "lcvlist");
            const retData = JSON.parse(resp).Table[0];
        }, (error) => {
            alert("Something went wrong.");
        });
    }
    filterBoxShow(itm) {
        if (this.filterBoxFlag == 0) {
            this.fiterBox = !this.fiterBox;
            this.filterBoxFlag = 1;
        }
        else {
            this.filterBoxFlag = 0;
            this.fiterBox = false;
            this.stCodeMy = itm.StationName;
            this.SelectedStationCode = itm.StationCode;
            console.log(this.stCodeMy);
        }
    }
    OnDateChnageFrom(val) {
        var self = this;
        const dt = new Date(val);
        this.DateFromMy = val.split('T')[0];
        self.DateFrom = this.datepipe.transform(dt, 'yyyy/MM/dd');
        console.log(self.DateFrom);
        if ((new Date(self.DateTo)) < (new Date(self.DateFrom))) {
            console.log("Time");
            this.DateTo = this.DateFrom.split('T')[0];
        }
        this.getstationlist();
        this.getlcvlist();
    }
    filterStations() {
        console.log(this.filterItem);
        if (!this.filterItem || this.filterItem.trim() === '') {
            this.filteredListStation = this.listStation;
        }
        else {
            this.filteredListStation = this.listStation.filter(itm => itm.StationName.toLowerCase().includes(this.filterItem.toLowerCase()));
        }
    }
    Deletelcv(Id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Confirm!',
                message: 'Are you sure you want to delete this record?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log('Delete canceled');
                        }
                    },
                    {
                        text: 'OK',
                        handler: () => {
                            // Proceed with the deletion if 'OK' is pressed
                            const Json = {
                                id: Id
                            };
                            this.commonServices.postwithservice("Deletelcv", Json).subscribe((resp) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                const data = JSON.parse(resp);
                                const successAlert = yield this.alertCtrl.create({
                                    header: 'Success',
                                    message: data.Table[0].msg,
                                    buttons: ['OK']
                                });
                                yield successAlert.present();
                                this.getlcvlist();
                            }), (error) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                const errorAlert = yield this.alertCtrl.create({
                                    header: 'Error',
                                    message: 'Something went wrong.',
                                    buttons: ['OK']
                                });
                                yield errorAlert.present();
                            }));
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    InsertLCVVehicl() {
        // alert(this.stCodeMy);
        // alert(this.SelectedStationCode);
        this.errorFound = true;
        if (this.flag == '' || this.flag == undefined) {
            this.flag = 'Insert';
        }
        if (this.Validationlcv()) {
            const obj = {
                Id: (this.flag == 'Update') ? this.SelectedlcvId : '0',
                Tostation: this.SelectedStationCode,
                EntryDate: this.DateFrom,
                Fromstation: this.stationCode,
                LCVKG: this.LCVKG,
                Tripsoflcv: this.Trips,
                Remarks: this.Remark,
                LCVNO: this.LCVNO,
                flag: this.flag,
            };
            console.log(obj, 'flag');
            this.commonServices.postwithservice("InsertLCVdata", obj).subscribe((resp) => {
                this.commonServices.presentToast(JSON.parse(resp)[0].msg);
                this.SelectedStationCode = '';
                this.stCodeMy = '';
                this.LCVKG = '';
                this.flag = '';
                this.Trips = '';
                this.Remark = '';
                this.LCVNO = '';
                this.getlcvlist();
            }, (error) => {
                this.commonServices.presentToast("Something went wrong.");
            });
        }
    }
    Validationlcv() {
        var re = new RegExp(/^[a-zA-Z ]*$/);
        var regexNumeric = /^[+-]?[0-9]{1,1000}(?:\.[0-9]{1,1000})?$/;
        var regexDecimalThree = /^[+-]?[0-9]{1,10}(?:\.[0-9]{1,3})?$/;
        if (this.SelectedStationCode == '' || this.SelectedStationCode == undefined) {
            alert('To Station Name must be selected.');
            this.errorFound = false;
        }
        else if (this.LCVKG == '' || this.LCVKG == undefined) {
            alert('LCV KG must be entered.');
            this.errorFound = false;
        }
        else if (regexNumeric.test(this.LCVKG) == false) {
            alert('only Number allowed in LCVKG.');
            this.errorFound = false;
        }
        else if (this.Trips == '' || this.Trips == undefined) {
            alert('NO.of trips must be entered.');
            this.errorFound = false;
        }
        else if (regexNumeric.test(this.Trips) == false) {
            alert('only Number allowed in Trips.');
            this.errorFound = false;
        }
        else if (this.LCVNO == '' || this.LCVNO == undefined) {
            alert('LCV NO must be entered.');
            this.errorFound = false;
        }
        return this.errorFound;
    }
    Edit(itm) {
        console.log(itm);
        this.stCodeMy = '';
        this.SelectedlcvId = itm.id;
        this.Stationfrom = itm.Fromstation;
        this.stCodeMy = itm.Tostation;
        this.LCVKG = itm.LCVKG;
        this.Trips = itm.Trips;
        this.Remark = itm.Remarks;
        this.LCVNO = itm.LCVNO;
        this.SelectedStationCode = itm.FromStationCode;
        this.flag = 'Update';
    }
};
LCVvehiclePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
LCVvehiclePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lcvvehicle',
        template: __webpack_require__(/*! raw-loader!./lcvvehicle.page.html */ "./node_modules/raw-loader/index.js!./src/app/lcvvehicle/lcvvehicle.page.html"),
        styles: [__webpack_require__(/*! ./lcvvehicle.page.scss */ "./src/app/lcvvehicle/lcvvehicle.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], LCVvehiclePage);



/***/ })

}]);
//# sourceMappingURL=lcvvehicle-lcvvehicle-module-es2015.js.map