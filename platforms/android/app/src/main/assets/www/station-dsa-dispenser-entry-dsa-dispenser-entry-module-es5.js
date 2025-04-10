(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["station-dsa-dispenser-entry-dsa-dispenser-entry-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/station/dsa-dispenser-entry/dsa-dispenser-entry.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/station/dsa-dispenser-entry/dsa-dispenser-entry.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<!-- <button class=\"home_btn\" routerLink=\"/home\">\r\n\t\t\t\t<img src=\"../../assets/images/home.png\" style=\"width:36px;margin-left: 5px;\" />\r\n\t\t\t</button> -->\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" style=\"width:53px;margin-left: 5px;\" />\r\n\t\t\t</div>\r\n\t\t\t<span style=\"margin-left: auto;\" class=\"logout_div\">\r\n\t\t\t\t<ion-buttons style=\"justify-content: flex-end;\">\r\n\t\t\t\t\t<ion-icon name=\"log-out\" style=\"color:white;font-size: 28px;\" routerLink=\"/login\"></ion-icon>\r\n\t\t\t\t</ion-buttons>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<div class=\"main_heading1\">\r\n\t\t<div>\r\n\t\t\t<ion-back-button defaultHref=\"dispenser-entry\"></ion-back-button>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<h1>DSA Dispenser Entry</h1>\r\n\t\t</div>\r\n\t\t<div></div>\r\n\t</div>\r\n</ion-header>\r\n<ion-content>\r\n\t<div class=\"content_area\">\r\n\t\t<div class=\"mycard\">\r\n\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t<label>Shift</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t<ion-select placeholder=\"Select One\">\r\n\t\t\t\t\t\t<ion-select-option value=\"m\">A(06:00 AM 02:00 PM)</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"m\">B(02:00 PM 10:00 PM)</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"m\">C(10:00 PM 11:59 PM)</ion-select-option>\r\n\t\t\t\t\t\t<ion-select-option value=\"m\">D(11:59 PM 06:00 AM)</ion-select-option>\r\n\t\t\t\t\t</ion-select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t<label>Sub Shift</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t<ion-select placeholder=\"Select One\" interface=\"alert\">\r\n\t\t\t\t\t\t<ion-select-option value=\"m\">D-1 (11:59 PM 06:00 AM)</ion-select-option>\r\n\t\t\t\t\t</ion-select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"card_box\">\r\n\t\t\t\t<div class=\"card_heading\">\r\n\t\t\t\t\t<h5>\r\n\t\t\t\t\t\t<span class=\"span1\">\r\n\t\t\t\t\t\t\t<span>1 </span>ARM A OF DISP CAR 17C-144928-21\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<span class=\"span2\" (click)=\"jumpReadingPop()\">\r\n\t\t\t\t\t\t\t<ion-icon name=\"apps\"></ion-icon>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card_content\">\r\n\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t\t\t\t<label>Prev A</label>\r\n\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t\t<ion-col class=\"text_right\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label>0.16</label>\r\n\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t<ion-input type=\"number\" placeholder=\"Arm A\"></ion-input>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t\t\t\t<label>Prev B</label>\r\n\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t\t<ion-col class=\"text_right\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label>0.16</label>\r\n\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t<ion-input type=\"number\" placeholder=\"Arm B\"></ion-input>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row class=\"bottom_label_row\">\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<div class=\"bottom_label_cont\">\r\n\t\t\t\t\t\t\t\t<label>Arm A Sale</label>\r\n\t\t\t\t\t\t\t\t<span>0.0</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<div class=\"bottom_label_cont\">\r\n\t\t\t\t\t\t\t\t<label>Arm A Sale</label>\r\n\t\t\t\t\t\t\t\t<span>0.0</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<div class=\"bottom_label_cont\">\r\n\t\t\t\t\t\t\t\t<label>Arm A Sale</label>\r\n\t\t\t\t\t\t\t\t<span>0.0</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"card_box\">\r\n\t\t\t\t<div class=\"card_heading\">\r\n\t\t\t\t\t<h5>\r\n\t\t\t\t\t\t<span class=\"span1\">\r\n\t\t\t\t\t\t\t<span>1 </span>ARM A OF DISP CAR 17C-144928-21\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<span class=\"span2\">\r\n\t\t\t\t\t\t\t<ion-icon name=\"apps\"></ion-icon>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card_content\">\r\n\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t\t\t\t<label>Prev A</label>\r\n\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t\t<ion-col class=\"text_right\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label>0.16</label>\r\n\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t<ion-input type=\"number\" placeholder=\"Arm A\"></ion-input>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t\t\t\t<label>Prev B</label>\r\n\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t\t<ion-col class=\"text_right\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label>0.16</label>\r\n\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t<ion-input type=\"number\" placeholder=\"Arm B\"></ion-input>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row class=\"bottom_label_row\">\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<div class=\"bottom_label_cont\">\r\n\t\t\t\t\t\t\t\t<label>Arm A Sale</label>\r\n\t\t\t\t\t\t\t\t<span>0.0</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<div class=\"bottom_label_cont\">\r\n\t\t\t\t\t\t\t\t<label>Arm A Sale</label>\r\n\t\t\t\t\t\t\t\t<span>0.0</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<div class=\"bottom_label_cont\">\r\n\t\t\t\t\t\t\t\t<label>Arm A Sale</label>\r\n\t\t\t\t\t\t\t\t<span>0.0</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/station/dsa-dispenser-entry/dsa-dispenser-entry-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/station/dsa-dispenser-entry/dsa-dispenser-entry-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: DsaDispenserEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsaDispenserEntryPageRoutingModule", function() { return DsaDispenserEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dsa_dispenser_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dsa-dispenser-entry.page */ "./src/app/station/dsa-dispenser-entry/dsa-dispenser-entry.page.ts");




var routes = [
    {
        path: '',
        component: _dsa_dispenser_entry_page__WEBPACK_IMPORTED_MODULE_3__["DsaDispenserEntryPage"]
    }
];
var DsaDispenserEntryPageRoutingModule = /** @class */ (function () {
    function DsaDispenserEntryPageRoutingModule() {
    }
    DsaDispenserEntryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DsaDispenserEntryPageRoutingModule);
    return DsaDispenserEntryPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/station/dsa-dispenser-entry/dsa-dispenser-entry.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/station/dsa-dispenser-entry/dsa-dispenser-entry.module.ts ***!
  \***************************************************************************/
/*! exports provided: DsaDispenserEntryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsaDispenserEntryPageModule", function() { return DsaDispenserEntryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dsa_dispenser_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dsa-dispenser-entry-routing.module */ "./src/app/station/dsa-dispenser-entry/dsa-dispenser-entry-routing.module.ts");
/* harmony import */ var _dsa_dispenser_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dsa-dispenser-entry.page */ "./src/app/station/dsa-dispenser-entry/dsa-dispenser-entry.page.ts");







var DsaDispenserEntryPageModule = /** @class */ (function () {
    function DsaDispenserEntryPageModule() {
    }
    DsaDispenserEntryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _dsa_dispenser_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__["DsaDispenserEntryPageRoutingModule"]
            ],
            declarations: [_dsa_dispenser_entry_page__WEBPACK_IMPORTED_MODULE_6__["DsaDispenserEntryPage"]]
        })
    ], DsaDispenserEntryPageModule);
    return DsaDispenserEntryPageModule;
}());



/***/ }),

/***/ "./src/app/station/dsa-dispenser-entry/dsa-dispenser-entry.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/station/dsa-dispenser-entry/dsa-dispenser-entry.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpb24vZHNhLWRpc3BlbnNlci1lbnRyeS9kc2EtZGlzcGVuc2VyLWVudHJ5LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/station/dsa-dispenser-entry/dsa-dispenser-entry.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/station/dsa-dispenser-entry/dsa-dispenser-entry.page.ts ***!
  \*************************************************************************/
/*! exports provided: DsaDispenserEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsaDispenserEntryPage", function() { return DsaDispenserEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _jump_reading_pop_jump_reading_pop_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../jump-reading-pop/jump-reading-pop.page */ "./src/app/jump-reading-pop/jump-reading-pop.page.ts");




var DsaDispenserEntryPage = /** @class */ (function () {
    function DsaDispenserEntryPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    DsaDispenserEntryPage.prototype.ngOnInit = function () {
    };
    DsaDispenserEntryPage.prototype.jumpReadingPop = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _jump_reading_pop_jump_reading_pop_page__WEBPACK_IMPORTED_MODULE_3__["JumpReadingPopPage"],
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DsaDispenserEntryPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    DsaDispenserEntryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dsa-dispenser-entry',
            template: __webpack_require__(/*! raw-loader!./dsa-dispenser-entry.page.html */ "./node_modules/raw-loader/index.js!./src/app/station/dsa-dispenser-entry/dsa-dispenser-entry.page.html"),
            styles: [__webpack_require__(/*! ./dsa-dispenser-entry.page.scss */ "./src/app/station/dsa-dispenser-entry/dsa-dispenser-entry.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], DsaDispenserEntryPage);
    return DsaDispenserEntryPage;
}());



/***/ })

}]);
//# sourceMappingURL=station-dsa-dispenser-entry-dsa-dispenser-entry-module-es5.js.map