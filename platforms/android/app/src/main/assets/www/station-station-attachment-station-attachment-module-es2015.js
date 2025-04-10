(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["station-station-attachment-station-attachment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/station/station-attachment/station-attachment.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/station/station-attachment/station-attachment.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<div class=\"main_heading1\">\r\n\t\t<div>\r\n\t\t\t<ion-back-button defaultHref=\"home\"></ion-back-button>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<h1>Station Credential</h1>\r\n\t\t</div>\r\n\t\t<div></div>\r\n\t</div>\r\n</ion-header>\r\n<ion-content>\r\n\t<div class=\"content_area\">\r\n\t\t<ion-grid>\r\n\t\t\t<form>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<label>Document Name\r\n\t\t\t\t\t\t\t\t\t<span class=\"star\">*</span>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t<ion-input type=\"text\" [value]=\"DocumentName\"\r\n\t\t\t\t\t\t\t\t\t\t(ionChange)=\"Readingvalue($event.target.value)\"\r\n\t\t\t\t\t\t\t\t\t\t(input)=\"DocumentName=$event.target.value\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"Document Name\"></ion-input>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<label>Attachment\r\n\t\t\t\t\t\t\t\t\t<span class=\"star\">*</span>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t<ion-input #inputFile type=\"file\" id=\"StationAttachmentInput\"\r\n\t\t\t\t\t\t\t\t\t\tname=\"StationAttachmentInput\" (change)=\"fileuploadreset( $event)\"\r\n\t\t\t\t\t\t\t\t\t\t[disabled]=\"filevisible\"></ion-input>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<label>Expiry Date\r\n\t\t\t\t\t\t\t\t\t<span class=\"star\">*</span>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t<ion-datetime class=\"form-control\" displayFormat=\"DD-MMM-YYYY\" [max]=\"secondMaxDate\"\r\n\t\t\t\t\t\t\t\t\t\tpickerFormat=\"DD MMM YYYY\" [(ngModel)]=\"ExpiryDate\" name=\"ExpiryDate\"\r\n\t\t\t\t\t\t\t\t\t\t(ngModelChange)=\"OnDateChnage($event)\"></ion-datetime>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<label>Remark\r\n\t\t\t\t\t\t\t\t\t<!-- <span class=\"star\">*</span> -->\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t<ion-input type=\"text\" [value]=\"Remark\" (input)=\"Remark=$event.target.value\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"Remark\"></ion-input>\r\n\t\t\t\t\t\t\t\t\t<!-- (ionChange)=\"Readingvalue($event.target.value)\" -->\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"button_container\">\r\n\t\t\t\t\t\t\t<ion-button color=\"dark_green_clr\" type=\"submit\" (click)=\"OnSubmit();\">Save</ion-button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</form>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th>Sr No</th>\r\n\t\t\t\t\t\t\t\t\t<th>Document Name</th>\r\n\t\t\t\t\t\t\t\t\t<th>Image</th>\r\n\t\t\t\t\t\t\t\t\t<th>Expiry Date</th>\r\n\t\t\t\t\t\t\t\t\t<th>Remark</th>\r\n\t\t\t\t\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let itm of StationAttachmentList, let i = index\">\r\n\t\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{itm.DocumentName}}</td>\r\n\t\t\t\t\t\t\t\t\t<td> {{CheckExtn(itm.Path)}} <img style=\"height: 30px !important\"\r\n\t\t\t\t\t\t\t\t\t\t\tsrc={{ListImagePath}} /></td>\r\n\t\t\t\t\t\t\t\t\t<th>{{itm.ExpiryDate}}</th>\r\n\t\t\t\t\t\t\t\t\t<th>{{itm.Remark}}</th>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"dark\"\r\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"UpdateStationAttachment(itm.id, itm)\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"create\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"dark\"\r\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"ViewStationAttachment(itm.Path, itm)\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"eye\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"danger\"\r\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"DeleteStationAttachment(itm.id, itm)\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"trash\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-grid>\r\n\t</div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/station/station-attachment/station-attachment-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/station/station-attachment/station-attachment-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: StationAttachmentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationAttachmentPageRoutingModule", function() { return StationAttachmentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _station_attachment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./station-attachment.page */ "./src/app/station/station-attachment/station-attachment.page.ts");




const routes = [
    {
        path: '',
        component: _station_attachment_page__WEBPACK_IMPORTED_MODULE_3__["StationAttachmentPage"]
    }
];
let StationAttachmentPageRoutingModule = class StationAttachmentPageRoutingModule {
};
StationAttachmentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StationAttachmentPageRoutingModule);



/***/ }),

/***/ "./src/app/station/station-attachment/station-attachment.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/station/station-attachment/station-attachment.module.ts ***!
  \*************************************************************************/
/*! exports provided: StationAttachmentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationAttachmentPageModule", function() { return StationAttachmentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _station_attachment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./station-attachment-routing.module */ "./src/app/station/station-attachment/station-attachment-routing.module.ts");
/* harmony import */ var _station_attachment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./station-attachment.page */ "./src/app/station/station-attachment/station-attachment.page.ts");







let StationAttachmentPageModule = class StationAttachmentPageModule {
};
StationAttachmentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _station_attachment_routing_module__WEBPACK_IMPORTED_MODULE_5__["StationAttachmentPageRoutingModule"]
        ],
        declarations: [_station_attachment_page__WEBPACK_IMPORTED_MODULE_6__["StationAttachmentPage"]]
    })
], StationAttachmentPageModule);



/***/ }),

/***/ "./src/app/station/station-attachment/station-attachment.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/station/station-attachment/station-attachment.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpb24vc3RhdGlvbi1hdHRhY2htZW50L3N0YXRpb24tYXR0YWNobWVudC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/station/station-attachment/station-attachment.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/station/station-attachment/station-attachment.page.ts ***!
  \***********************************************************************/
/*! exports provided: StationAttachmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationAttachmentPage", function() { return StationAttachmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _redirected_pages_station_attachment_modal_station_attachment_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redirected_pages/station-attachment-modal/station-attachment-modal.page */ "./src/app/station/redirected_pages/station-attachment-modal/station-attachment-modal.page.ts");










let StationAttachmentPage = class StationAttachmentPage {
    constructor(modalController, router, activatedroute, commonServices, menu, dp, alertController) {
        this.modalController = modalController;
        this.router = router;
        this.activatedroute = activatedroute;
        this.commonServices = commonServices;
        this.menu = menu;
        this.dp = dp;
        this.alertController = alertController;
        this.StationAttachmentId = '0';
        this.StationAttachmentList = [];
        this.DocumentName = "";
        this.StationId = localStorage.getItem('StationId');
        this.Reading = "";
        this.filevisible = true;
        this.DocumentImagePath = '';
        this.ListImagePath = '';
        this.Remark = "";
        this.secondMaxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 100)).toISOString();
        this.flag = 'CREATE';
    }
    ngOnInit() {
        this.GetStationAttachmentList();
        this.ExpiryDate = new Date().toLocaleDateString();
    }
    openFirst() {
        this.menu.enable(true, 'menuStn');
        this.menu.open('menuStn');
    }
    presentModal(attachment) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _redirected_pages_station_attachment_modal_station_attachment_modal_page__WEBPACK_IMPORTED_MODULE_7__["StationAttachmentModalPage"],
                cssClass: 'my-custom-class1',
                componentProps: {
                    previewVar: true,
                    heading: 'View Attachement',
                    viewattachment: attachment
                }
            });
            return yield modal.present();
        });
    }
    fileuploadreset(str) {
        this.uploadedfilereset = str.target.files[0];
    }
    OnDateChnage(val) {
        this.ExpiryDate = new Date(val).toLocaleDateString();
        console.log("ExpiryDate", this.ExpiryDate);
    }
    Readingvalue(value) {
        this.Reading = value;
        if (this.Reading != '') {
            this.filevisible = false;
        }
        else {
            this.filevisible = true;
        }
    }
    DeleteStationAttachment(Id, itm) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Delete',
                message: 'Are you sure to delete this record..?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'OK',
                        handler: () => {
                            var Json = {
                                Id: Id
                            };
                            this.commonServices.post("DeleteStationAttachmentById", Json).subscribe((resp) => {
                                const data = JSON.parse(resp);
                                this.commonServices.presentToast(data.Table[0].Status);
                                this.GetStationAttachmentList();
                                this.Clear();
                                this.commonServices.loadingDismiss();
                            }, (error) => {
                                this.commonServices.presentToast("Something went wrong.");
                                this.commonServices.loadingDismiss();
                            });
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    ViewStationAttachment(Path, itm) {
        if (Path.split('.').pop() == "pdf") {
            window.open(this.commonServices.apiImageAttachment + "/Attachments/" + Path, '_blank');
        }
        else {
            console.log(this.commonServices.apiImageAttachment + "/Attachments/" + Path);
            this.DocumentImagePath = this.commonServices.apiImageAttachment + "/Attachments/" + Path;
            this.presentModal(this.DocumentImagePath);
        }
    }
    CheckExtn(Path, itm) {
        //console.log(Path.split('.').pop());
        if (Path.split('.').pop() == "pdf") {
            this.ListImagePath = this.commonServices.apiImageAttachment + "/Attachments/pdfIcon.png";
        }
        else {
            this.ListImagePath = this.commonServices.apiImageAttachment + "/Attachments/" + Path;
        }
    }
    GetStationAttachmentList() {
        const obj = {
            StationId: this.StationId
        };
        console.log(obj);
        this.commonServices.loadingPresent();
        this.commonServices.post("GetStationAttachmentList", obj).subscribe((resp) => {
            this.StationAttachmentList = JSON.parse(resp).Table;
            console.log(this.StationAttachmentList);
            this.commonServices.loadingDismiss();
        }, (error) => {
            this.commonServices.presentToast("Something went wrong.");
            this.commonServices.loadingDismiss();
        });
    }
    UpdateStationAttachment(Id, itm) {
        this.StationAttachmentId = Id;
        this.DocumentName = itm.DocumentName;
        this.Remark = itm.Remark;
        this.ExpiryDate = itm.ExpiryDate;
        this.flag = 'UPDATE';
        this.filevisible = false;
    }
    OnSubmit() {
        var MyJsonreset = {
            StationId: this.StationId,
            flag: this.flag,
            Id: (this.StationAttachmentId == "" || Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.StationAttachmentId)) ? 0 : this.StationAttachmentId,
            DocumentName: this.DocumentName,
            Remark: this.Remark,
            FilePath: localStorage.getItem('LoginId') + "/StationAttachment/",
            ExpiryDate: this.ExpiryDate
        };
        this.AttachmentFile = $('#StationAttachmentInput');
        var frmData = new FormData();
        var fileInputreset = this.AttachmentFile[0];
        frmData.append("jsonDetail", JSON.stringify(MyJsonreset));
        if (this.uploadedfilereset != undefined) {
            console.log(this.uploadedfilereset);
            frmData.append('StationAttachmentFile', this.uploadedfilereset, this.uploadedfilereset.name);
        }
        var ErrorMsg = this.changeresetValidation(MyJsonreset);
        if (ErrorMsg == '' || ErrorMsg == undefined) {
            this.commonServices.StationAttachment(frmData).subscribe((resp) => {
                const data = (resp);
                if (data.Status == "Inserted") {
                    this.commonServices.presentToast('Record Saved Successfully.');
                    this.Clear();
                    this.GetStationAttachmentList();
                }
                else if (data.Status == "Updated") {
                    this.commonServices.presentToast('Record Updated Successfully.');
                    this.Clear();
                    this.GetStationAttachmentList();
                }
                else {
                    this.commonServices.presentToast(data.Status);
                }
            }, (error) => {
                this.commonServices.presentToast('Something went wrong.');
                this.commonServices.loadingDismiss();
            });
        }
        else {
            this.commonServices.presentToast(ErrorMsg);
        }
    }
    changeresetValidation(StationAttachment) {
        var regexNumeric = /^[+-]?[0-9]{1,1000}(?:\.[0-9]{1,1000})?$/;
        var regexDecimalThree = /^[+-]?[0-9]{1,10}(?:\.[0-9]{1,3})?$/;
        var regexDecimalThreeNegative = /^[+]?[0-9]{1,10}(?:\.[0-9]{1,3})?$/;
        var imgShow = 'assets/images/attachment.gif';
        var errorMsg = '';
        if ((StationAttachment.DocumentName === undefined) || StationAttachment.DocumentName == '') {
            errorMsg = 'Please enter the Document Name.';
            return errorMsg;
        }
        else if (this.uploadedfilereset == undefined || this.uploadedfilereset == null) {
            errorMsg = 'Please select image/Pdf';
            return errorMsg;
        }
        return errorMsg;
    }
    Clear() {
        this.StationAttachmentId = '0';
        this.Reading = '';
        this.ExpiryDate = new Date().toLocaleDateString();
        this.DocumentName = '';
        this.Remark = '';
        this.InputFileVar.value = "";
        this.flag = 'CREATE';
    }
};
StationAttachmentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputFile', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], StationAttachmentPage.prototype, "InputFileVar", void 0);
StationAttachmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-station-attachment',
        template: __webpack_require__(/*! raw-loader!./station-attachment.page.html */ "./node_modules/raw-loader/index.js!./src/app/station/station-attachment/station-attachment.page.html"),
        styles: [__webpack_require__(/*! ./station-attachment.page.scss */ "./src/app/station/station-attachment/station-attachment.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], StationAttachmentPage);



/***/ })

}]);
//# sourceMappingURL=station-station-attachment-station-attachment-module-es2015.js.map