(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["station-attachment-dpr-attachment-dpr-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/station/attachment-dpr/attachment-dpr.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/station/attachment-dpr/attachment-dpr.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<ion-row class=\"align_center search_parent\">\r\n\t\t<ion-col size=\"2\">\r\n\t\t\t<ion-back-button defaultHref=\"attachment\"></ion-back-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"8\">\r\n\t\t\t<h4 class=\"ion-text-center\">DPR Other Attachments</h4>\r\n\t\t</ion-col>\r\n\t\t<!--<ion-col size=\"2\">\r\n\t\t\t<ion-button color=\"light\" size=\"small\" (click)=\"searchCollapse()\"><ion-icon name=\"search\" class=\"font22\"></ion-icon></ion-button>\r\n\t\t</ion-col>\r\n\t\t <ion-col size=\"12\" class=\"searchbar_container\" *ngIf=\"searchShow\">\r\n\t\t\t<ion-searchbar showCancelButton=\"always\" (ionCancel)=\"hideSearchBar()\" ></ion-searchbar>\r\n\t\t</ion-col> -->\r\n\t</ion-row>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<div class=\"content_area\">\r\n\t\t<div class=\"form_inp_container\">\r\n\t\t\t<div class=\"label_container\">\r\n\t\t\t\t<label>Date From</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"input_container\">\r\n\t\t\t\t<ion-item>\r\n\t\t\t\t\t<ion-label>Select Date:</ion-label>\r\n\t\t\t\t\t<ion-datetime #selcteddateFrom class=\"inp_control date\" displayFormat=\"DD-MMM-YYYY\"\r\n\t\t\t\t\t\tpickerFormat=\"DD MMM YYYY\" [ngModel]=\"DateFrom\" name=\"selcteddateForm\"\r\n\t\t\t\t\t\t(ngModelChange)=\"OnDateChnageFrom(selcteddateFrom.value)\" [max]=\"secondMaxDate\"></ion-datetime>\r\n\t\t\t\t</ion-item>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form_inp_container\">\r\n\t\t\t<div class=\"label_container\">\r\n\t\t\t\t<label>Date To</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"input_container\">\r\n\t\t\t\t<ion-item>\r\n\t\t\t\t\t<ion-label>Select Date:</ion-label>\r\n\t\t\t\t\t<ion-datetime #selcteddateTo class=\"inp_control date\" displayFormat=\"DD-MMM-YYYY\"\r\n\t\t\t\t\t\tpickerFormat=\"DD MMM YYYY\" [ngModel]=\"DateTo\" name=\"selcteddateTo\"\r\n\t\t\t\t\t\t(ngModelChange)=\"OnDateChnageTo(selcteddateTo.value)\" [min]=\"DateFromMy\" [max]=\"secondMaxDate\">\r\n\t\t\t\t\t</ion-datetime>\r\n\t\t\t\t</ion-item>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<div class=\"card_box\" *ngFor=\"let item of AttachmentData; let i=index\">\r\n\t\t\t\t\t<div class=\"card_heading\">\r\n\t\t\t\t\t\t<h5>\r\n\t\t\t\t\t\t\t<span class=\"span1\">\r\n\t\t\t\t\t\t\t\t<span>{{i+1}} </span> {{item.CertificateType}}\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"card_content\">\r\n\t\t\t\t\t\t<ion-grid>\r\n\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-label>Attachement For</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t<ion-text>{{item.name}}</ion-text>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-label>Entry Date</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t<ion-text>{{item.EntryDate}}</ion-text>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-label>Type</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t<ion-text>{{item.CertificateType}}</ion-text>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t<ion-row class=\"bottom_row ion-align-items-center\">\r\n\t\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t\t<div class=\"item ion-text-left\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-label>Jump Certificate</ion-label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t<ion-col class=\"ion-text-right\" (click)=\"GenerateJumpCertificate(item);\"\r\n\t\t\t\t\t\t\t\t\t*ngIf=\"item.IsApprovedByInstrumental == 1\">\r\n\t\t\t\t\t\t\t\t\t<ion-text>\r\n\t\t\t\t\t\t\t\t\t\t<ion-button color=\"light\" size=\"small\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"cloud-download\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t<ion-row class=\"bottom_row ion-align-items-center\">\r\n\t\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t\t<div class=\"item ion-text-left\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-label>Approved By Instrumental </ion-label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t<ion-col class=\"ion-text-right\">\r\n\t\t\t\t\t\t\t\t\t<ion-text><i class=\"fas fa-check mycheck\"\r\n\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"item.IsApprovedByInstrumental == 1\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-times myclose\" *ngIf=\"item.IsApprovedByInstrumental==2\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-minus myminus\" *ngIf=\"item.IsApprovedByInstrumental == 0\"></i>\r\n\t\t\t\t\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t<ion-row class=\"bottom_row ion-align-items-center\">\r\n\t\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t\t<div class=\"item ion-text-left\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-label>Approved By ONM </ion-label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t<ion-col class=\"ion-text-right\">\r\n\t\t\t\t\t\t\t\t\t<ion-text><i class=\"fas fa-check mycheck\" *ngIf=\"item.IsApprovedByONM == 1\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-times myclose\" *ngIf=\"item.IsApprovedByONM==2\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-minus myminus\" *ngIf=\"item.IsApprovedByONM == 0\"></i>\r\n\t\t\t\t\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t<ion-row class=\"bottom_row ion-align-items-center\">\r\n\t\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t\t<div class=\"item ion-text-left\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-label>Approved By DSO</ion-label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t<ion-col class=\"ion-text-right\">\r\n\t\t\t\t\t\t\t\t\t<ion-text><i class=\"fas fa-check mycheck\" *ngIf=\"item.IsApprovedByMO == 1\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-times myclose\" *ngIf=\"item.IsApprovedByMO==2\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-minus myminus\" *ngIf=\"item.IsApprovedByMO == 0\"></i>\r\n\t\t\t\t\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t<ion-col *ngIf=\"item.CertificatePath == '' \">\r\n\t\t\t\t\t\t\t\t\t<div class=\"item ion-text-center\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-button color=\"light\" class=\"xyz\" (click)=\"selectImage(item)\">\r\n\t\t\t\t\t\t\t\t\t\t\tUpload&nbsp;<ion-icon name=\"cloud-upload\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t<ion-col *ngIf=\"item.CertificatePath != '' \">\r\n\t\t\t\t\t\t\t\t\t<div class=\"item ion-text-center\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-button color=\"light\" class=\"xyz\"\r\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"presentModal1(item.CertificatePath)\">\r\n\t\t\t\t\t\t\t\t\t\t\tView&nbsp;<ion-icon name=\"eye\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t</ion-grid>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/station/attachment-dpr/attachment-dpr-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/station/attachment-dpr/attachment-dpr-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: AttachmentDprPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentDprPageRoutingModule", function() { return AttachmentDprPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _attachment_dpr_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attachment-dpr.page */ "./src/app/station/attachment-dpr/attachment-dpr.page.ts");




var routes = [
    {
        path: '',
        component: _attachment_dpr_page__WEBPACK_IMPORTED_MODULE_3__["AttachmentDprPage"]
    }
];
var AttachmentDprPageRoutingModule = /** @class */ (function () {
    function AttachmentDprPageRoutingModule() {
    }
    AttachmentDprPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AttachmentDprPageRoutingModule);
    return AttachmentDprPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/station/attachment-dpr/attachment-dpr.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/station/attachment-dpr/attachment-dpr.module.ts ***!
  \*****************************************************************/
/*! exports provided: AttachmentDprPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentDprPageModule", function() { return AttachmentDprPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _attachment_dpr_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attachment-dpr-routing.module */ "./src/app/station/attachment-dpr/attachment-dpr-routing.module.ts");
/* harmony import */ var _attachment_dpr_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attachment-dpr.page */ "./src/app/station/attachment-dpr/attachment-dpr.page.ts");







var AttachmentDprPageModule = /** @class */ (function () {
    function AttachmentDprPageModule() {
    }
    AttachmentDprPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _attachment_dpr_routing_module__WEBPACK_IMPORTED_MODULE_5__["AttachmentDprPageRoutingModule"]
            ],
            declarations: [_attachment_dpr_page__WEBPACK_IMPORTED_MODULE_6__["AttachmentDprPage"]]
        })
    ], AttachmentDprPageModule);
    return AttachmentDprPageModule;
}());



/***/ }),

/***/ "./src/app/station/attachment-dpr/attachment-dpr.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/station/attachment-dpr/attachment-dpr.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bottom_row {\n  background-color: #f6f6f6;\n  border-top: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n.mycheck {\n  color: #22d629;\n  font-size: 16px;\n  margin-right: 14px;\n}\n\n.myclose {\n  color: red;\n  font-size: 16px;\n  margin-right: 14px;\n}\n\n.myminus {\n  color: gray;\n  font-size: 16px;\n  margin-right: 14px;\n}\n\n.xyz {\n  --border-radius:20px;\n  --background:var(--green_clr);\n}\n\n.main_heading1 > div:nth-of-type(3) {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  align-content: center;\n}\n\n.main_heading1 > div:nth-of-type(3) ion-icon {\n  font-size: 21px;\n}\n\n.searchbar {\n  position: absolute;\n  top: -6px;\n  display: none;\n}\n\n.card_box {\n  border: none;\n  margin-bottom: 15px;\n  border: 1px solid var(--gray_clr);\n  border-top: none;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);\n  width: 98%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.card_heading {\n  background-color: var(--yellow_clr);\n  border-bottom: 2px solid var(--dark_green_clr);\n}\n\n.card_heading h5 {\n  font-size: 17px;\n  padding: 11px 8px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.bottom_row .item {\n  text-align: center;\n}\n\n.item ion-label {\n  font-weight: bold;\n}\n\n.bottom_row {\n  border-top: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n.card_box {\n  border-radius: 0px;\n}\n\n.mypopup .popup_container {\n  overflow: hidden;\n}\n\n.mypopup .popup_container .trigger_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.attc_head {\n  font-size: 18px;\n  text-align: center;\n}\n\n.attachment_cont {\n  text-align: center;\n  margin-top: 15px;\n  width: 130px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  position: relative;\n}\n\n.attachment_cont input[type=file] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  opacity: 0;\n  z-index: 5;\n}\n\n.attachment_cont ion-icon {\n  color: #e6e6e6;\n  font-size: 75px;\n}\n\n.inp_control {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvc3RhdGlvbi9hdHRhY2htZW50LWRwci9hdHRhY2htZW50LWRwci5wYWdlLnNjc3MiLCJzcmMvYXBwL3N0YXRpb24vYXR0YWNobWVudC1kcHIvYXR0YWNobWVudC1kcHIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0kseUJBQUE7RUFDQSx3Q0FBQTtBQ0RKOztBRElBO0VBRUksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBRElBO0VBRUksVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBRElBO0VBRUksV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBRElBO0VBRUksb0JBQUE7RUFDQSw2QkFBQTtBQ0ZKOztBREtBO0VBRUksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHFCQUFBO0FDSEo7O0FES0E7RUFFSSxlQUFBO0FDSEo7O0FES0E7RUFFSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FDSEo7O0FETUE7RUFFSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsNENBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0pKOztBRE1BO0VBRUksbUNBQUE7RUFDQSw4Q0FBQTtBQ0pKOztBRE1BO0VBRUksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNKSjs7QURVQTtFQUVJLGtCQUFBO0FDUko7O0FEVUE7RUFFSSxpQkFBQTtBQ1JKOztBRFVBO0VBRUksd0NBQUE7QUNSSjs7QURVQTtFQUVJLGtCQUFBO0FDUko7O0FEYUE7RUFFSSxnQkFBQTtBQ1hKOztBRGFBO0VBRUksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ1hKOztBRGFBO0VBRUksZUFBQTtFQUNBLGtCQUFBO0FDWEo7O0FEYUE7RUFFSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ1hKOztBRGFBO0VBRUksY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDWEo7O0FEYUE7RUFFSSxjQUFBO0VBQ0EsZUFBQTtBQ1hKOztBRGFBO0VBQWEsWUFBQTtBQ1RiIiwiZmlsZSI6InNyYy9hcHAvc3RhdGlvbi9hdHRhY2htZW50LWRwci9hdHRhY2htZW50LWRwci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90dG9tX3Jvd1xyXG57XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjZmNmY2O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjIpO1xyXG59XHJcblxyXG4ubXljaGVja1xyXG57XHJcbiAgICBjb2xvcjogIzIyZDYyOTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1yaWdodDoxNHB4O1xyXG59XHJcbi5teWNsb3NlXHJcbntcclxuICAgIGNvbG9yOnJlZDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1yaWdodDoxNHB4O1xyXG59XHJcbi5teW1pbnVzXHJcbntcclxuICAgIGNvbG9yOmdyYXk7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MTRweDtcclxufVxyXG4ueHl6XHJcbntcclxuICAgIC0tYm9yZGVyLXJhZGl1czoyMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOnZhcigtLWdyZWVuX2Nscik7XHJcbn1cclxuLy8gSGVhZGluZ1xyXG4ubWFpbl9oZWFkaW5nMT5kaXY6bnRoLW9mLXR5cGUoMykgXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ubWFpbl9oZWFkaW5nMT5kaXY6bnRoLW9mLXR5cGUoMykgaW9uLWljb25cclxue1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG59XHJcbi5zZWFyY2hiYXJcclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtNnB4O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmNhcmRfYm94XHJcbntcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5X2Nscik7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLmNhcmRfaGVhZGluZ1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXllbGxvd19jbHIpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWRhcmtfZ3JlZW5fY2xyKTtcclxufVxyXG4uY2FyZF9oZWFkaW5nIGg1XHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHBhZGRpbmc6IDExcHggOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLy8gLml0ZW1cclxuLy8ge1xyXG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyB9XHJcbi5ib3R0b21fcm93IC5pdGVtXHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaXRlbSBpb24tbGFiZWxcclxue1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmJvdHRvbV9yb3dcclxue1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjIpO1xyXG59XHJcbi5jYXJkX2JveFxyXG57XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLm15cG9wdXAgLnBvcHVwX2NvbnRhaW5lciBcclxue1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ubXlwb3B1cCAucG9wdXBfY29udGFpbmVyIC50cmlnZ2VyX2RpdiBcclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uYXR0Y19oZWFkXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYXR0YWNobWVudF9jb250XHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5hdHRhY2htZW50X2NvbnQgaW5wdXRbdHlwZT1cImZpbGVcIl1cclxue1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHotaW5kZXg6IDU7XHJcbn1cclxuLmF0dGFjaG1lbnRfY29udCBpb24taWNvblxyXG57XHJcbiAgICBjb2xvcjogI2U2ZTZlNjtcclxuICAgIGZvbnQtc2l6ZTogNzVweDtcclxufVxyXG4uaW5wX2NvbnRyb2x7Ym9yZGVyOm5vbmU7fSIsIi5ib3R0b21fcm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLm15Y2hlY2sge1xuICBjb2xvcjogIzIyZDYyOTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG59XG5cbi5teWNsb3NlIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG59XG5cbi5teW1pbnVzIHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xufVxuXG4ueHl6IHtcbiAgLS1ib3JkZXItcmFkaXVzOjIwcHg7XG4gIC0tYmFja2dyb3VuZDp2YXIoLS1ncmVlbl9jbHIpO1xufVxuXG4ubWFpbl9oZWFkaW5nMSA+IGRpdjpudGgtb2YtdHlwZSgzKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYWluX2hlYWRpbmcxID4gZGl2Om50aC1vZi10eXBlKDMpIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMXB4O1xufVxuXG4uc2VhcmNoYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC02cHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jYXJkX2JveCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JheV9jbHIpO1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgd2lkdGg6IDk4JTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmNhcmRfaGVhZGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvd19jbHIpO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZGFya19ncmVlbl9jbHIpO1xufVxuXG4uY2FyZF9oZWFkaW5nIGg1IHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBwYWRkaW5nOiAxMXB4IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYm90dG9tX3JvdyAuaXRlbSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLml0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ib3R0b21fcm93IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmNhcmRfYm94IHtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG4ubXlwb3B1cCAucG9wdXBfY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm15cG9wdXAgLnBvcHVwX2NvbnRhaW5lciAudHJpZ2dlcl9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5hdHRjX2hlYWQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmF0dGFjaG1lbnRfY29udCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgd2lkdGg6IDEzMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hdHRhY2htZW50X2NvbnQgaW5wdXRbdHlwZT1maWxlXSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IDU7XG59XG5cbi5hdHRhY2htZW50X2NvbnQgaW9uLWljb24ge1xuICBjb2xvcjogI2U2ZTZlNjtcbiAgZm9udC1zaXplOiA3NXB4O1xufVxuXG4uaW5wX2NvbnRyb2wge1xuICBib3JkZXI6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/station/attachment-dpr/attachment-dpr.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/station/attachment-dpr/attachment-dpr.page.ts ***!
  \***************************************************************/
/*! exports provided: AttachmentDprPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentDprPage", function() { return AttachmentDprPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _redirected_pages_attach_dpr_modal_attach_dpr_modal_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../redirected_pages/attach-dpr-modal/attach-dpr-modal.page */ "./src/app/station/redirected_pages/attach-dpr-modal/attach-dpr-modal.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ "./node_modules/@ionic-native/document-viewer/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
















var AttachmentDprPage = /** @class */ (function () {
    function AttachmentDprPage(alertController, formBuilder, router, activatedroute, commonServices, menu, modalController, camera, actionSheetController, file, transfer, dp, platform, fileOpener, document) {
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedroute = activatedroute;
        this.commonServices = commonServices;
        this.menu = menu;
        this.modalController = modalController;
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.file = file;
        this.transfer = transfer;
        this.dp = dp;
        this.platform = platform;
        this.fileOpener = fileOpener;
        this.document = document;
        this.searchShow = false;
        this.searchFlag = 0;
        this.StationCode = localStorage.getItem('LoginId');
        this.attachData = { Imagename: '', Imagepath: '' };
        this.geteDate = { selcteddate: "" };
        this.secondMaxDate = new Date().toISOString();
        this.outerCheck = 0;
        this.CurrentDate = '';
        this.DateFromMy = new Date().toISOString().split('T')[0];
        this.DepartmentCode = '';
        this.monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ];
        this.currentdate = new Date().toISOString().split('T')[0];
        // if (this.geteDate.selcteddate == "") {
        //   this.currDate = this.currentdate;
        //   console.log(this.currDate)
        //   const dt = new Date(this.currDate);
        //   let latest_date = dt.getDate() + "-" + this.monthNames[dt.getMonth()] + "-" + dt.getFullYear();
        //   this.geteDate.selcteddate = latest_date;
        //   this.GetAttachmentForHO();
        // }
    }
    AttachmentDprPage.prototype.ngOnInit = function () {
        var _this = this;
        this.DepartmentCode = localStorage.getItem('DepartmentCode');
        var dt = new Date();
        this.CurrentDate = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        //IOS Comment
        // this.DateFrom = new Date().toLocaleDateString();
        // this.DateTo = new Date().toLocaleDateString();
        // this.DateFrom = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        // this.DateTo = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        //IOS Add
        this.DateFrom = this.dp.transform(dt, 'yyyy/MM/dd');
        this.DateTo = this.dp.transform(dt, 'yyyy/MM/dd');
        setTimeout(function () {
            _this.GetAttachmentForHO();
        });
    };
    AttachmentDprPage.prototype.OnDateChnageFrom = function (val) {
        var self = this;
        var dt = new Date(val);
        this.DateFromMy = val.split('T')[0];
        //IOS Comment
        // self.DateFrom = dt.getDate() + "/" + self.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        //IOS Add
        self.DateFrom = this.dp.transform(dt, 'yyyy/MM/dd');
        if ((new Date(self.DateTo)) < (new Date(self.DateFrom))) {
            console.log("Time");
            this.DateTo = this.DateFrom.split('T')[0];
            // this.DateFromMy = this.DateFrom.split('T')[0];
        }
        this.GetAttachmentForHO();
    };
    AttachmentDprPage.prototype.OnDateChnageTo = function (val) {
        var self = this;
        var dt = new Date(val);
        //IOS Comment
        // self.DateTo = dt.getDate() + "/" + self.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        //IOS Add
        self.DateTo = this.dp.transform(dt, 'yyyy/MM/dd');
        this.GetAttachmentForHO();
    };
    AttachmentDprPage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _redirected_pages_attach_dpr_modal_attach_dpr_modal_page__WEBPACK_IMPORTED_MODULE_9__["AttachDprModalPage"],
                            cssClass: 'modal_container',
                            componentProps: {
                                uploadVar: true,
                                heading: 'Upload Attachement'
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AttachmentDprPage.prototype.presentModal1 = function (attachment) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _redirected_pages_attach_dpr_modal_attach_dpr_modal_page__WEBPACK_IMPORTED_MODULE_9__["AttachDprModalPage"],
                            cssClass: 'modal_container',
                            componentProps: {
                                previewVar: true,
                                heading: 'View Attachement',
                                viewattachment: attachment
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AttachmentDprPage.prototype.openFirst = function () {
        this.menu.enable(true, 'menuStn');
        this.menu.open('menuStn');
    };
    AttachmentDprPage.prototype.searchCollapse = function () {
        if (this.searchFlag == 0) {
            this.searchShow = true;
            this.searchFlag = 1;
        }
        else {
            this.searchShow = false;
            this.searchFlag = 0;
        }
    };
    AttachmentDprPage.prototype.hideSearchBar = function () {
        this.searchShow = false;
        this.searchFlag = 0;
    };
    AttachmentDprPage.prototype.getSelectedDate = function (datePicker) {
        console.log("datePicker", datePicker);
        var dt = new Date(datePicker);
        var latest_date = dt.getDate() + "-" + this.monthNames[dt.getMonth()] + "-" + dt.getFullYear();
        // this.geteDate.selcteddate = latest_date;
        // this.DPREntryDateTime = this.dp.transform(this.geteDate.selcteddate, 'yyyy-MM-dd hh:mm:ss');
        this.GetAttachmentForHO();
    };
    AttachmentDprPage.prototype.GetAttachmentForHO = function () {
        var self = this;
        self.commonServices.loadingPresent();
        self.commonServices.postwithservice("GetAttachmentForHO", {
            StationCode: this.StationCode,
            FromDate: this.dp.transform(this.DateFrom, 'dd/MMM/yyyy'),
            ToDate: this.dp.transform(this.DateTo, 'dd/MMM/yyyy'),
            flag: (this.DepartmentCode == 'SO') ? 'JumpDispenserDataByStation' : 'JumpDispenserDataByCO',
        }).subscribe(function (res) {
            var data = JSON.parse(res).Table;
            console.log(data, "Table");
            self.commonServices.loadingDismiss();
            if (data.length > 0)
                self.AttachmentData = data;
            else {
                self.commonServices.presentToast("No Data Found.");
                self.AttachmentData = [];
            }
        }, function (error) {
            self.commonServices.presentToast("Something went wrong.");
            self.commonServices.loadingDismiss();
        });
    };
    AttachmentDprPage.prototype.selectImage = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.JumpReadingId = item.JumpID;
                        this.FlagType = item.Flag;
                        this.DPRJumpCeritificate = item.CertificatePath;
                        return [4 /*yield*/, this.actionSheetController.create({
                                header: "Select Image source",
                                buttons: [{
                                        text: 'From Gallery',
                                        handler: function () {
                                            _this.pickImage(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                        }
                                    },
                                    {
                                        text: 'From Camera',
                                        handler: function () {
                                            _this.pickImage(_this.camera.PictureSourceType.CAMERA);
                                        }
                                    },
                                    {
                                        text: 'Cancel',
                                        role: 'cancel'
                                    }
                                ]
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AttachmentDprPage.prototype.pickImage = function (sourceType) {
        var self = this;
        var options = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            // let base64Image = 'data:image/jpeg;base64,' + imageData;
            self.imageURI = imageData;
            self.saveAttachment(self.imageURI);
        }, function (err) {
            // Handle error
            console.log(err);
            self.commonServices.loadingDismiss();
        });
    };
    AttachmentDprPage.prototype.saveAttachment = function (imageURI) {
        var self = this;
        var MyJson = {
            Id: this.JumpReadingId,
            LoginId: this.StationCode,
            flag: this.FlagType
        };
        var fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
        // let fileextension=  fileName.lastIndexOf('.') + 1;
        var fileextension = fileName.split('.').pop();
        if (fileextension == "jpg") {
            self.attachData.Imagename = fileName;
            self.commonServices.loadingDismiss();
        }
        else {
            self.attachData.Imagename = fileName + '.jpg';
            self.commonServices.loadingDismiss();
        }
        var frmData = new FormData();
        frmData.append('Image', "", self.attachData.Imagename);
        frmData.append('Id', self.JumpReadingId);
        frmData.append("jsonDetail", JSON.stringify(MyJson));
        self.commonServices.loadingDismiss();
        self.commonServices.udpateAttachment(frmData).subscribe(function (resp) {
            self.commonServices.presentToast(resp);
            self.GetAttachmentForHO();
            self.commonServices.loadingDismiss();
        }, function (error) {
            self.commonServices.presentToast("Something went wrong.");
            self.commonServices.loadingDismiss();
        });
    };
    AttachmentDprPage.prototype.GenerateJumpCertificate = function (item) {
        var _this = this;
        console.log(item + "Rish");
        console.log(item.JumpSystemId + "Rish");
        console.log(item.StationId + "Rish");
        var Id = item.JumpSystemId;
        var StationId = item.StationId;
        var self = this;
        self.commonServices.loadingPresent();
        //  self.commonServices.post("CommonGetData",{Flag: 'JumpDispenserData', Id: self.UserId}).subscribe(
        self.commonServices.post("JumpReadingCertificate", {
            Flag: 'JumpReadingCerficatateById',
            Id: Id,
            Status: StationId,
            CDashdate: item.EntryDate
        }).subscribe(function (res) {
            var data = JSON.parse(res);
            console.log(data, "JumpReadingCerficatateById");
            if (data) {
                var PdfUrl = "";
                PdfUrl = _this.commonServices.baseUrl.substring(0, _this.commonServices.baseUrl.length - 4) + JSON.parse(res);
                console.log(PdfUrl);
                // const FileSaver = require('file-saver');
                // FileSaver.saveAs(PdfUrl);
                var path = null;
                if (_this.platform.is('ios')) {
                    path = _this.file.documentsDirectory;
                }
                else {
                    path = _this.file.dataDirectory;
                }
                var transfer = _this.transfer.create();
                transfer.download(PdfUrl, path + data).then(function (entry) {
                    var url = entry.toURL();
                    if (_this.platform.is('ios')) {
                        _this.document.viewDocument(url, 'application/pdf', {});
                    }
                    else {
                        _this.fileOpener.open(url, 'application/pdf');
                    }
                });
            }
            self.commonServices.loadingDismiss();
        }, function (error) {
            self.commonServices.presentToast("Something went wrong.");
            self.commonServices.loadingDismiss();
        });
    };
    AttachmentDprPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"] },
        { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_12__["FileOpener"] },
        { type: _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_11__["DocumentViewer"] }
    ]; };
    AttachmentDprPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-attachment-dpr',
            template: __webpack_require__(/*! raw-loader!./attachment-dpr.page.html */ "./node_modules/raw-loader/index.js!./src/app/station/attachment-dpr/attachment-dpr.page.html"),
            styles: [__webpack_require__(/*! ./attachment-dpr.page.scss */ "./src/app/station/attachment-dpr/attachment-dpr.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_12__["FileOpener"],
            _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_11__["DocumentViewer"]])
    ], AttachmentDprPage);
    return AttachmentDprPage;
}());



/***/ })

}]);
//# sourceMappingURL=station-attachment-dpr-attachment-dpr-module-es5.js.map