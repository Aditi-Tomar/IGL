(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["station-package-package-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/station/package/package.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/station/package/package.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"hidepackage\">\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<div class=\"main_heading1\">\r\n\t\t<div>\r\n\t\t\t<ion-back-button defaultHref=\"dpr-entry\"></ion-back-button>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<h1>Package</h1>\r\n\t\t</div>\r\n\t\t<div></div>\r\n\t</div>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"hidepackage\">\r\n\t<div class=\"content_area \">\r\n\t\t<div class=\"mycard\">\r\n\t\t\t<div class=\"main_form_container\">\r\n\t\t\t\t<form class=\"myform\">\r\n\t\t\t\t\t<ion-grid>\r\n\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"sap_no_div\">\r\n\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\t<strong>SAP Equipment Number : </strong>\r\n\t\t\t\t\t\t\t\t\t\t<span>{{PackageCode}}</span>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t\t<label>Date <span class=\"star\">*</span></label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-label>Select Date:</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <ion-datetime displayFormat=\"DD/MM/YYYY\" value=\"2012-12-15T13:47:20.789\"></ion-datetime> -->\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-datetime #selcteddate class=\"datepick\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"geteDate.selcteddate\" displayFormat=\"DD-MMM-YYYY\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tpickerFormat=\"DD MMM YYYY\" name=\"selcteddate\" [max]=\"secondMaxDate\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(ngModelChange)=\"getSelectedDate(selcteddate.value)\"></ion-datetime>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- form=\"DispenserDate.selcteddate\" -->\r\n\t\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t\t<label>Package Name</label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-select placeholder=\"Select One\"\r\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding-top: 8px;padding-bottom: 8px;background-color: white;padding-right: 10px;\"\r\n\t\t\t\t\t\t\t\t\t\t\t(ionChange)=\"GetPackageDetail($event.detail.value)\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let itm of TablesPkgs\" [value]=\"itm.PackageId\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{itm.PackageName}}</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"form_inp_container mb10\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t\t<label>Suction Flow Meter Reading (kg) <span class=\"star\">*</span></label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"input_container d_flex justify_space_beetween\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-input placeholder=\"Flow Meter Totaliser\" id=\"txtSuctionFlowMeterReadingSFM\"\r\n\t\t\t\t\t\t\t\t\t\t\tname=\"txtSuctionFlowMeterReadingSFM\"\r\n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"PackageDetailJson.length == 0 ? '0.00' : PackageDetailJson[0].SuctionFlowMeterReading\">\r\n\t\t\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"font13 mr5\">Prev\r\n\t\t\t\t\t\t\t\t\t\t\t:{{(PackageDetailJson.length == 0) ? '0.00' : PackageDetailJson[0].SuctionFlowMeterReadingPrv}}</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"form_inp_container ion-text-right\">\r\n\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" (click)=\"showhidechangereset('1')\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"change_reset_btn\">Jump/Change/Reset</ion-button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<!-- New Comment -->\r\n\t\t\t\t\t\t<!-- <ion-row>\r\n\t\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-checkbox (ionChange)=\"showFields_sfs()\"></ion-checkbox>&nbsp;&nbsp;Jump\r\n\t\t\t\t\t\t\t\t\t\t\tSFS\r\n\t\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"12\" *ngIf=\"varSfs\">\r\n\t\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-label>Jump Reading</ion-label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-input id=\"JumpReadingSFM\" name=\"JumpReadingSFM\"\r\n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"PackageDetailJson.length == 0 ? '0.00' : PackageDetailJson[0].JumpReadingSFM\">\r\n\t\t\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-label>Choose File</ion-label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-input type=\"file\" id=\"JumpCertificateSFM\" name=\"JumpCertificateSFM\"\r\n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"PackageDetailJson.length == 0 ? '0.00' : PackageDetailJson[0].JumpCertificateSFM\"\r\n\t\t\t\t\t\t\t\t\t\t\t(change)=\"uploadJumpReadingImgSFM($event)\"\r\n\t\t\t\t\t\t\t\t\t\t\t[disabled]=\"(PackageDetailJson[0].JumpReadingSFM == '' || PackageDetailJson[0].JumpReadingSFM == 0)\">\r\n\t\t\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-label>Jump Reading Count</ion-label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-input name=\"JumpReadingSFMCount\"\r\n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"PackageDetailJson.length == 0 ? '0.00' : PackageDetailJson[0].JumpReadingSFMCount\">\r\n\t\t\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row> -->\r\n\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t\t<label>Discharge Flow Meter Reading (kg) <span class=\"star\">*</span></label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"input_container d_flex justify_space_beetween\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-input name=\"DischargeFlowMeterReading\" id=\"DischargeFlowMeterReading\"\r\n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"PackageDetailJson.length == 0 ? '0.00' : \r\n\t\t\t\t\t\t\t\t\t\t\tPackageDetailJson[0].DischargeFlowMeterReading\">\r\n\t\t\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"font13 mr5\">Prev\r\n\t\t\t\t\t\t\t\t\t\t\t:{{PackageDetailJson.length == 0 ? '0.00' : PackageDetailJson[0].DischargeFlowMeterReadingPrv}}</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"form_inp_container ion-text-right\">\r\n\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" (click)=\"showhidechangereset('2')\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"change_reset_btn\">Jump/Change/Reset\r\n\t\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<!-- <ion-row>\r\n\t\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-checkbox (ionChange)=\"showFields_dfs()\"></ion-checkbox>&nbsp;&nbsp;Jump\r\n\t\t\t\t\t\t\t\t\t\t\tDFS\r\n\t\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"12\" *ngIf=\"varDfs\">\r\n\t\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-label>Jump Reading</ion-label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-input name=\"JumpReadingDFM\" id=\"JumpReadingDFM\"\r\n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"PackageDetailJson.length == 0 ? '0.00' : PackageDetailJson[0].JumpReadingDFM\">\r\n\t\t\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-label>Choose File</ion-label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-input type=\"file\" name=\"JumpCertificateDFM\" id=\"JumpCertificateDFM\"\r\n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"PackageDetailJson.length == 0 ? '0.00' : PackageDetailJson[0].JumpCertificateDFM\"\r\n\t\t\t\t\t\t\t\t\t\t\t(change)=\"uploadJumpReadingImgDFM($event)\"\r\n\t\t\t\t\t\t\t\t\t\t\t[disabled]=\"(PackageDetailJson[0].JumpReadingDFM == '' || PackageDetailJson[0].JumpReadingDFM == 0)\">\r\n\t\t\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-label>Jump Reading Count</ion-label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-input name=\"JumpReadingDFMCount\"\r\n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"PackageDetailJson.length == 0 ? '0.00' : PackageDetailJson[0].JumpReadingDFMCount\">\r\n\t\t\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row> -->\r\n\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"label_container\" *ngIf=\"this.ShowEngineMeter\">\r\n\t\t\t\t\t\t\t\t\t\t<label>Engine Flow Meter Reading (SCMH) <span class=\"star\">*</span></label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"label_container\" *ngIf=\"!this.ShowEngineMeter\">\r\n\t\t\t\t\t\t\t\t\t\t<label>Motor Flow Meter Reading (KWH) <span class=\"star\">*</span></label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<div class=\"input_container d_flex justify_space_beetween\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-input name=\"txtEngineFlowMeterReading\" id=\"EngineFlowMeterReading\"\r\n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"PackageDetailJson.length == 0 ? '0' : PackageDetailJson[0].EngineFlowMeterReading\">\r\n\t\t\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"font13 mr5\">Prev\r\n\t\t\t\t\t\t\t\t\t\t\t:{{PackageDetailJson.length == 0 ? '0.00' : PackageDetailJson[0].EngineFlowMeterReadingPrv}}</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"form_inp_container ion-text-right\">\r\n\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" (click)=\"showhidechangereset('3')\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"change_reset_btn\">Jump/Change/Reset\r\n\t\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<!-- <ion-row>\r\n\t\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-checkbox (ionChange)=\"showFields_efs()\"></ion-checkbox>\r\n\t\t\t\t\t\t\t\t\t\t\t&nbsp;&nbsp;Jump EFS\r\n\t\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"12\" *ngIf=\"varEfs\">\r\n\t\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-label>Jump Reading</ion-label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-input id=\"JumpReadingEFS\" name=\"JumpReadingEFM\"\r\n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"PackageDetailJson.length == 0 ? '0.00' : PackageDetailJson[0].JumpReadingEFM\">\r\n\t\t\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-label>Choose File</ion-label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-input multiple type=\"file\" id=\"JumpCertificateEFM\"\r\n\t\t\t\t\t\t\t\t\t\t\tname=\"JumpCertificateEFM\"\r\n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"PackageDetailJson[0].JumpCertificateEFM\"\r\n\t\t\t\t\t\t\t\t\t\t\t(change)=\"uploadJumpReadingImgEFM($event)\"\r\n\t\t\t\t\t\t\t\t\t\t\t[disabled]=\"(PackageDetailJson[0].JumpReadingEFM == '' || PackageDetailJson[0].JumpReadingEFM == 0)\">\r\n\t\t\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-label>Jump Reading Count</ion-label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-input name=\"JumpReadingEFMCount\"\r\n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"PackageDetailJson.length == 0 ? '0.00' : PackageDetailJson[0].JumpReadingEFMCount\"\r\n\t\t\t\t\t\t\t\t\t\t\tpl></ion-input>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row> -->\r\n\t\t\t\t\t\t<!-- <ion-row>\r\n\t\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-checkbox (ionChange)=\"showFields_ventFlow()\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"IsVentFlow\">\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-checkbox>\r\n\t\t\t\t\t\t\t\t\t\t\t&nbsp;&nbsp;Vent Flow\r\n\t\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col *ngIf=\"IsVentFlow\">\r\n\t\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label>Vent Flow Meter Reading</label>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-input name=\"VentFlowMeterReading\" placeholder=\"0.000\"\r\n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"PackageDetailJson.length == 0 ? '0.00' : PackageDetailJson[0].VentFlowMeterReading\">\r\n\t\t\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row> -->\r\n\t\t\t\t\t\t<ion-row *ngIf=\"IsVentFlow\">\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t\t<label>Vent Flow Meter Reading (SCMH) <span class=\"star\">*</span></label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"input_container d_flex justify_space_beetween\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-input name=\"VentFlowMeterReading\" id=\"VentFlowMeterReading\"\r\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Vent Flow Meter Reading\"\r\n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"PackageDetailJson.length == 0 ? '0.00' : PackageDetailJson[0].VentFlowMeterReading\">\r\n\t\t\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"font13 mr5\">\r\n\t\t\t\t\t\t\t\t\t\t\tPrev:{{PackageDetailJson.length == 0 ? '0.00' : PackageDetailJson[0].VentFlowMeterReadingPrv}}\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row *ngIf=(!this.ShowEngineMeter)>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t\t<label>Motor Frequency<span class=\"star\">*</span></label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"input_container d_flex justify_space_beetween\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-input name=\"MotorFrequency\" id=\"MotorFrequency\"\r\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Motor Frequency\"\r\n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"PackageDetailJson.length == 0 ? '0.00' : PackageDetailJson[0].MotorFrequency\">\r\n\t\t\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t\t\t\t<!-- <span class=\"font13 mr5\">\r\n\t\t\t\t\t\t\t\t\t\t\tPrev:{{PackageDetailJson.length == 0 ? '0.00' : PackageDetailJson[0].MotorFrequency}}\r\n\t\t\t\t\t\t\t\t\t\t</span> -->\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row *ngIf=\"IsVentFlow\">\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"form_inp_container ion-text-right\">\r\n\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" (click)=\"showhidechangereset('4')\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"change_reset_btn\">Jump/Change/Reset\r\n\t\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Running Hours </label>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-label>HH</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-select placeholder=\"Select One\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding-top: 8px;padding-bottom: 8px;background-color: white;padding-right: 10px;\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]='selectedRhHr' [ngModelOptions]=\"{standalone:\r\n\t\t\t\t\t\t\t\t\t\t\t\t\ttrue}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let itm of RunHrs\" [value]=\"itm.hrs\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{itm.hrs}}</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-label>MM</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-select placeholder=\"Select One\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding-top: 8px;padding-bottom: 8px;background-color: white;padding-right: 10px;\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]='selectedRhMin' [ngModelOptions]=\"{standalone:\r\n\t\t\t\t\t\t\t\t\t\t\t\t\ttrue}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let itm of RunMin\" [value]=\"itm.min\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{itm.min}}</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Schedule Shutdown Hours </label>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-label>HH</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-select placeholder=\"Select One\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding-top: 8px;padding-bottom: 8px;background-color: white;padding-right: 10px;\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]='selectedSHr' [ngModelOptions]=\"{standalone:\r\n\t\t\t\t\t\t\t\t\t\t\t\t\ttrue}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let itm of SHrs\" [value]=\"itm.hrs\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{itm.hrs}}</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-label>MM</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-select placeholder=\"Select One\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding-top: 8px;padding-bottom: 8px;background-color: white;padding-right: 10px;\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]='selectedSMin' [ngModelOptions]=\"{standalone:\r\n\t\t\t\t\t\t\t\t\t\t\t\t\ttrue}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let itm of SMin\" [value]=\"itm.min\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{itm.min}}</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Unscheduled Shutdown Hours </label>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-label>HH</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-select placeholder=\"Select One\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding-top: 8px;padding-bottom: 8px;background-color: white;padding-right: 10px;\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]='selectedUsHr' [ngModelOptions]=\"{standalone:\r\n\t\t\t\t\t\t\t\t\t\t\t\t\ttrue}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let itm of UsHrs\" [value]=\"itm.hrs\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{itm.hrs}}</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-label>MM</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-select placeholder=\"Select One\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding-top: 8px;padding-bottom: 8px;background-color: white;padding-right: 10px;\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]='selectedUsMin' [ngModelOptions]=\"{standalone:\r\n\t\t\t\t\t\t\t\t\t\t\t\t\ttrue}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let itm of UsMin\" [value]=\"itm.min\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{itm.min}}</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Breakdown Hours </label>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-label>HH</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-select placeholder=\"Select One\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding-top: 8px;padding-bottom: 8px;background-color: white;padding-right: 10px;\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]='selectedBdHr' [ngModelOptions]=\"{standalone:\r\n\t\t\t\t\t\t\t\t\t\t\t\t\ttrue}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let itm of BdHrs\" [value]=\"itm.hrs\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{itm.hrs}}</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-label>MM</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-select placeholder=\"Select One\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding-top: 8px;padding-bottom: 8px;background-color: white;padding-right: 10px;\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]='selectedBdMin'\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let itm of BdMin\" [value]=\"itm.min\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{itm.min}}</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t\t<label>Suction Pressure <span class=\"star\">*</span></label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-input name=\"SuctionPressure\" id=\"SuctionPressure\"\r\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Suction Pressure\"\r\n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"PackageDetailJson.length == 0 ? '0.00' : PackageDetailJson[0].SuctionPressure\">\r\n\t\t\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t\t<label>Remark</label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-select placeholder=\"Select One\"\r\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"padding-top: 8px;padding-bottom: 8px;background-color: white;padding-right: 10px;\"\r\n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"mdlSelectedRemark\" [ngModelOptions]=\"{standalone:\r\n\t\t\t\t\t\t\t\t\t\ttrue}\" (ionChange)=\"showHideRemark()\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let itm of jsonRemarks\" [value]=\"itm.value\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{itm.value}}</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t\t\t\t<textarea class=\"inp_control\" style=\"border: solid 1px;\"  [hidden]=\"mdlRemarkTextShow == true\" class=\"form-control\" rows=\"4\" name=\"mdlRemark\"  [(ngModel)]=\"mdlRemark\" id=\"Remarks\" placeholder=\"Remarks\"></textarea>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"button_container\" [hidden]=\"IsPackagehide\">\r\n\t\t\t\t\t\t\t\t\t<ion-button color=\"dark_green_clr\" type=\"submit\"\r\n\t\t\t\t\t\t\t\t\t\t[hidden]=\"PKisStationSubmitted > 0  || PKisCRSentToHo > 0\"\r\n\t\t\t\t\t\t\t\t\t\t(click)=\"InsertPackageInfo()\">Save</ion-button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t</ion-grid>\r\n\t\t\t\t\t<div class=\"msg\">\r\n\t\t\t\t\t\t<span class=\"data_submit_msg\" [hidden]=\"PKisStationSubmitted == 0 \">\r\n\t\t\t\t\t\t\t* Data is submitted for the date {{geteDate.selcteddate}} by Station.</span><br>\r\n\t\t\t\t\t\t<span class=\"data_submit_msg\" [hidden]=\"PKisCRSentToHo == 0 \">\r\n\t\t\t\t\t\t\t* Submission is closed for date {{geteDate.selcteddate}} by Control Room.</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"msg\" *ngIf=\"IsPackagehide\" style=\"margin-left: 15px;\">\r\n\t\t\t\t\t\t<span class=\"data_submit_msg\">* Equipment not available for this Station.</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</ion-content>\r\n\r\n<!-------------------------------------------------------- Start Suction Meter-------------------------------------------------------->\r\n\r\n<ion-header *ngIf=\"showhideflag1\">\r\n\t<ion-toolbar color=\"dark_green\">\r\n\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-left\">\r\n\t\t\t\t<!-- <ion-button  class=\"text_white\"> -->\r\n\t\t\t\t<ion-icon name=\"arrow-back\" class=\"font22 iconBackPopup\" (click)=\"packageOpen()\"></ion-icon>\r\n\t\t\t\t<!-- </ion-button> -->\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"8\" class=\"ion-text-center\">\r\n\t\t\t\t<ion-text class=\"text_white\">Jump/Change/Reset Suction Flow Meter</ion-text>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"showhideflag1\">\r\n\t<div class=\"content_area\">\r\n\t\t<form>\r\n\t\t\t<ion-grid>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<ion-label>Action</ion-label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t<ion-label>Action</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-select placeholder=\"Select One\" [(ngModel)]=\"ActionTypeSFM\"\r\n\t\t\t\t\t\t\t\t\t\tname=\"resetTypeJsonSelectedSFM\" [value]=\"ActionTypeSFM\"\r\n\t\t\t\t\t\t\t\t\t\t(ionChange)=\"resetchange($event.target.value, 'SFM')\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-select-option value='J'>Jump</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t<ion-select-option value='C'>Change</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t<ion-select-option value='R'>Reset</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t\t<ion-label>Before</ion-label>\r\n\t\t\t\t\t\t<ion-input class=\"inp_control\" [value]=\"OldMeterReading\"\r\n\t\t\t\t\t\t\t(input)=\"OldMeterReading=$event.target.value\" placeholder=\"Before Meter Reading\"\r\n\t\t\t\t\t\t\tname=\"Before\"></ion-input>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t\t<ion-label>After</ion-label>\r\n\t\t\t\t\t\t<ion-input class=\"inp_control\" [value]=\"NewMeterReading\"\r\n\t\t\t\t\t\t\t(input)=\"mdlResetJumpReadingSFM=$event.target.value\"\r\n\t\t\t\t\t\t\t(input)=\"NewMeterReading=$event.target.value\" placeholder=\"After Meter Reading\"\r\n\t\t\t\t\t\t\tname=\"after\"></ion-input>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t\t<ion-label>Attachment</ion-label>\r\n\t\t\t\t\t\t<ion-input type=\"file\" class=\"inp_control\" id=\"jcMeterResetSFM\" name=\"file\"\r\n\t\t\t\t\t\t\t(change)=\"uploadJumpReadingImgSFMPopUp($event.target.files, $event)\"\r\n\t\t\t\t\t\t\t[disabled]=\"(mdlResetJumpReadingSFM == '' || mdlResetJumpReadingSFM == '0')\"></ion-input>\r\n\t\t\t\t\t\t<!-- <span *ngIf=\"!IsFileSelected\" class=\"temp_file_name\" style=\"right:-6px;\">{{FileName}}</span> -->\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t\t<ion-label>Remark</ion-label>\r\n\t\t\t\t\t\t<ion-textarea class=\"inp_control\" [value]=\"MeterJumpRemark\"\r\n\t\t\t\t\t\t\t(input)=\"MeterJumpRemark=$event.target.value\" placeholder=\"Remark\"></ion-textarea>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<th>Sr No</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Before</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>After</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Jumped</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Action Type</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Remark</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let itm of SFMJumpListHistory, let i = index\">\r\n\t\t\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.BeforeJumpReading}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.AfterJumpReading}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.JumpReading}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.Action}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.Remark}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<!-- <td>{{itm.DispanserJumpRemark}}</td> -->\r\n\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <span (click)=\"UpdateSFMJumpHistory(itm.id, itm)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t Edit</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"closeicon\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"DeleteSFMJumpHistory(itm.id,itm.Action, itm)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon ios=\"ios-close\" md=\"md-close\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t</span> -->\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"dark\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"UpdateSFMJumpHistory(itm.id, itm)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"create\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-button>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"danger\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"DeleteSFMJumpHistory(itm.id,itm.Action, itm)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"trash\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<!-- <ion-row>\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t<ion-label>Old Meter Reading <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t<ion-input type=\"text\" [(ngModel)]=\"mdlReadingOnSwitchSFM\" name=\"mdlReadingOnSwitchSFM\" placeholder=\"Old Meter Reading\"></ion-input>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t<ion-label>Jump Reading(If any)</ion-label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t<ion-input type=\"text\" name=\"mdlResetJumpReadingSFM\" [(ngModel)]=\"mdlResetJumpReadingSFM\" placeholder=\"Jump Reading\"></ion-input>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t\t<ion-label>Choose File</ion-label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-2\" style=\"width: 26px;height: 34px;padding-left: 5px;padding-right: 5px;text-align: center;\">\r\n\t\t\t\t\t\t\t\t\t<div (click)=\"showCertificatesReset('SFM');\"><img ng-src=\"assets/images/attachment.gif\"></div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t\t<ion-input type=\"file\" id=\"jcMeterResetSFM\" name=\"file\" (change)=\"uploadJumpReadingImgSFMPopUp($event)\" [disabled]=\"(mdlResetJumpReadingSFM == '' || mdlResetJumpReadingSFM == '0')\"></ion-input>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row> -->\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"button_container\">\r\n\t\t\t\t\t\t\t<ion-button color=\"dark_green_clr\" [hidden]=\"PackageDetailJson.length == 0 ? \r\n\t\t\t\t\t\t\t\t0 : PackageDetailJson.PKisStationSubmitted > 0\" (click)=\"HoldResetReading('SFM')\">Save</ion-button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</ion-grid>\r\n\t\t</form>\r\n\t</div>\r\n</ion-content>\r\n\r\n\r\n\r\n<!-------------------------------------------------------- End Suction Meter-------------------------------------------------------->\r\n\r\n\r\n<!-------------------------------------------------------- Start  Discharge flow Popup-------------------------------------------------------->\r\n\r\n<ion-header *ngIf=\"showhideflag2\">\r\n\t<ion-toolbar color=\"dark_green\">\r\n\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-left\">\r\n\t\t\t\t<ion-icon name=\"arrow-back\" class=\"font22 iconBackPopup\" (click)=\"packageOpen()\"></ion-icon>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"8\" class=\"ion-text-center\">\r\n\t\t\t\t<ion-text class=\"text_white\">Jump/Change/Reset Discharge FLow Meter</ion-text>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"showhideflag2\">\r\n\t<div class=\"content_area\">\r\n\t\t<form>\r\n\t\t\t<ion-grid>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<ion-label>Action</ion-label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t<ion-label>Action</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-select placeholder=\"Select One\" [(ngModel)]=\"ActionTypeDFM\"\r\n\t\t\t\t\t\t\t\t\t\tname=\"resetTypeJsonSelectedDFM\" [value]=\"ActionTypeDFM\"\r\n\t\t\t\t\t\t\t\t\t\t(ionChange)=\"resetchange($event.target.value, 'DFM')\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-select-option value='J'>Jump</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t<ion-select-option value='C'>Change</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t<ion-select-option value='R'>Reset</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<!-- <ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<ion-label>Old Meter Reading <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-input type=\"text\" [(ngModel)]=\"mdlReadingOnSwitchDFM\" name=\"mdlReadingOnSwitchDFM\" placeholder=\"Old Meter Reading\"></ion-input>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<ion-label>Jump Reading(If any)</ion-label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-input type=\"text\" name=\"mdlResetJumpReadingDFM\" [(ngModel)]=\"mdlResetJumpReadingDFM\"  placeholder=\"Jump Reading\"></ion-input>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<ion-label>Choose File</ion-label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-2\" style=\"width: 26px;height: 34px;padding-left: 5px;padding-right: 5px;text-align: center;\">\r\n\t\t\t\t\t\t\t\t<div (click)=\"showCertificatesReset('SFM');\"><img ng-src=\"assets/images/attachment.gif\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-input type=\"file\" name=\"fileInputreset\" (change)=\"uploadJumpReadingImgDFMPopUp($event)\" [disabled]=\"(mdlResetJumpReadingDFM == '' || mdlResetJumpReadingDFM == '0')\"></ion-input>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row> -->\r\n\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t\t<ion-label>Before</ion-label>\r\n\t\t\t\t\t\t<ion-input class=\"inp_control\" [value]=\"mdlReadingOnSwitchDFM\"\r\n\t\t\t\t\t\t\t(input)=\"mdlReadingOnSwitchDFM=$event.target.value\" placeholder=\"Before Meter Reading\"\r\n\t\t\t\t\t\t\tname=\"Before\"></ion-input>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t\t<ion-label>After</ion-label>\r\n\t\t\t\t\t\t<ion-input class=\"inp_control\" [value]=\"NewMeterReading\"\r\n\t\t\t\t\t\t\t(input)=\"mdlResetJumpReadingDFM=$event.target.value\"\r\n\t\t\t\t\t\t\t(input)=\"NewMeterReading=$event.target.value\" placeholder=\"After Meter Reading\"\r\n\t\t\t\t\t\t\tname=\"after\"></ion-input>\r\n\t\t\t\t\t\t<!-- (input)=\"mdlResetJumpReadingDFM($event.target.value)\" -->\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t\t<ion-label>Attachment</ion-label>\r\n\t\t\t\t\t\t<ion-input type=\"file\" class=\"inp_control\" name=\"fileInputreset\"\r\n\t\t\t\t\t\t\t(change)=\"uploadJumpReadingImgDFMPopUp($event.target.files, $event)\"\r\n\t\t\t\t\t\t\t[disabled]=\"(mdlResetJumpReadingDFM == '' || mdlResetJumpReadingDFM == '0')\"></ion-input>\r\n\t\t\t\t\t\t<!-- <span *ngIf=\"!IsFileSelected\" class=\"temp_file_name\" style=\"right:-6px;\">{{FileName}}</span> -->\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t\t<ion-label>Remark</ion-label>\r\n\t\t\t\t\t\t<ion-textarea class=\"inp_control\" [value]=\"MeterJumpRemark\"\r\n\t\t\t\t\t\t\t(input)=\"MeterJumpRemark=$event.target.value\" placeholder=\"Remark\"></ion-textarea>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<th>Sr No</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Before</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>After</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Jumped</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Action Type</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Remark</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let itm of DFMJumpListHistory, let i = index\">\r\n\t\t\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.BeforeJumpReading}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.AfterJumpReading}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.JumpReading}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.Action}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.Remark}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<!-- <td>{{itm.DispanserJumpRemark}}</td> -->\r\n\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <span (click)=\"UpdateDFMJumpHistory(itm.id, itm)\">Edit</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"closeicon\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"DeleteDFMJumpHistory(itm.id,itm.Action, itm)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon ios=\"ios-close\" md=\"md-close\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t</span> -->\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"dark\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"UpdateDFMJumpHistory(itm.id, itm)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"create\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"danger\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"DeleteDFMJumpHistory(itm.id,itm.Action, itm)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"trash\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"button_container\">\r\n\t\t\t\t\t\t\t<ion-button color=\"dark_green_clr\"\r\n\t\t\t\t\t\t\t\t[hidden]=\"PackageDetailJson.length == 0 ? 0 : PackageDetailJson.isStationSubmitted > 0\"\r\n\t\t\t\t\t\t\t\t(click)=\"HoldResetReading('DFM')\">Save</ion-button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</ion-grid>\r\n\t\t</form>\r\n\t</div>\r\n</ion-content>\r\n\r\n<!-------------------------------------------------------- End  Discharge flow Popup-------------------------------------------------------->\r\n\r\n\r\n<!-------------------------------------------------------- Start  EFM Popup-------------------------------------------------------->\r\n\r\n<ion-header *ngIf=\"showhideflag3\">\r\n\t<ion-toolbar color=\"dark_green\">\r\n\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-left\">\r\n\t\t\t\t<ion-icon name=\"arrow-back\" class=\"font22 iconBackPopup\" (click)=\"packageOpen()\"></ion-icon>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"8\" class=\"ion-text-center\">\r\n\t\t\t\t<ion-text class=\"text_white\">Jump/Change/Reset Engine Flow Meter</ion-text>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"showhideflag3\">\r\n\t<div class=\"content_area\">\r\n\t\t<form>\r\n\t\t\t<ion-grid>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<ion-label>Action</ion-label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t<ion-label>Action</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-select placeholder=\"Select One\" [(ngModel)]=\"ActionTypeEFM\"\r\n\t\t\t\t\t\t\t\t\t\tname=\"resetTypeJsonSelectedEFM\" [value]=\"ActionTypeEFM\"\r\n\t\t\t\t\t\t\t\t\t\t(ionChange)=\"resetchange($event.target.value, 'EFM')\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-select-option value='J'>Jump</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t<ion-select-option value='C'>Change</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t<ion-select-option value='R'>Reset</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<!-- <ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<ion-label>Old Meter Reading <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-input type=\"text\" [(ngModel)]=\"mdlReadingOnSwitchEFM\" name=\"mdlReadingOnSwitchEFM\" placeholder=\"Old Meter Reading\"></ion-input>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<ion-label>Jump Reading(If any)</ion-label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-input type=\"text\" name=\"mdlResetJumpReadingEFM\" [(ngModel)]=\"mdlResetJumpReadingEFM\"  placeholder=\"Jump Reading\"></ion-input>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<ion-label>Choose File</ion-label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div [hidden]=\"mdlShowResetImageEFM==false\"  class=\"col-2\" style=\"width: 26px;height: 34px;padding-left: 5px;padding-right: 5px;text-align: center;\">\r\n\t\t\t\t\t\t\t\t<div (click)=\"showCertificatesReset('EFM');\"><img ng-src=\"assets/images/attachment.gif\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-input type=\"file\" id=\"jcMeterResetEFM\" name=\"jcMeterResetEFM\" (change)=\"uploadJumpReadingImgEFMPopUp($event)\" [disabled]=\"(mdlResetJumpReadingEFM == '' || mdlResetJumpReadingEFM == '0')\"></ion-input>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row> -->\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t\t<ion-label>Before</ion-label>\r\n\t\t\t\t\t\t<ion-input class=\"inp_control\" [value]=\"mdlReadingOnSwitchEFM\"\r\n\t\t\t\t\t\t\t(input)=\"mdlReadingOnSwitchEFM=$event.target.value\" placeholder=\"Before Meter Reading\"\r\n\t\t\t\t\t\t\tname=\"Before\"></ion-input>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t\t<ion-label>After</ion-label>\r\n\t\t\t\t\t\t<ion-input class=\"inp_control\" [value]=\"NewMeterReading\"\r\n\t\t\t\t\t\t\t(input)=\"mdlResetJumpReadingEFM=$event.target.value\"\r\n\t\t\t\t\t\t\t(input)=\"NewMeterReading=$event.target.value\" placeholder=\"After Meter Reading\"\r\n\t\t\t\t\t\t\tname=\"after\"></ion-input>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<!-- (input)=\"mdlResetJumpReadingEFM($event.target.value)\" -->\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t\t<ion-label>Attachment</ion-label>\r\n\t\t\t\t\t\t<ion-input type=\"file\" class=\"inp_control\" id=\"jcMeterResetEFM\" name=\"jcMeterResetEFM\"\r\n\t\t\t\t\t\t\t(change)=\"uploadJumpReadingImgEFMPopUp($event.target.files, $event)\"\r\n\t\t\t\t\t\t\t[disabled]=\"(mdlResetJumpReadingEFM == '' || mdlResetJumpReadingEFM == '0')\"></ion-input>\r\n\t\t\t\t\t\t<!-- <span *ngIf=\"!IsFileSelected\" class=\"temp_file_name\" style=\"right:-6px;\">{{FileName}}</span> -->\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t\t<ion-label>Remark</ion-label>\r\n\t\t\t\t\t\t<ion-textarea class=\"inp_control\" [value]=\"MeterJumpRemark\"\r\n\t\t\t\t\t\t\t(input)=\"MeterJumpRemark=$event.target.value\" placeholder=\"Remark\"></ion-textarea>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<th>Sr No</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Before</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>After</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Jumped</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Action Type</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Remark</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let itm of EFMJumpListHistory, let i = index\">\r\n\t\t\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.BeforeJumpReading}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.AfterJumpReading}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.JumpReading}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.Action}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.Remark}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<!-- <td>{{itm.DispanserJumpRemark}}</td> -->\r\n\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <span (click)=\"UpdateEFMJumpHistory(itm.id, itm)\">Edit</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"closeicon\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"DeleteEFMJumpHistory(itm.id,itm.Action, itm)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon ios=\"ios-close\" md=\"md-close\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t</span> -->\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"dark\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"UpdateEFMJumpHistory(itm.id, itm)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"create\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-button>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"danger\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"DeleteEFMJumpHistory(itm.id,itm.Action, itm)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"trash\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"button_container\">\r\n\t\t\t\t\t\t\t<ion-button color=\"dark_green_clr\"\r\n\t\t\t\t\t\t\t\t[hidden]=\"PackageDetailJson.length == 0 ? 0 : PackageDetailJson.isStationSubmitted > 0\"\r\n\t\t\t\t\t\t\t\t(click)=\"HoldResetReading('EFM')\">Save</ion-button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</ion-grid>\r\n\t\t</form>\r\n\t</div>\r\n</ion-content>\r\n\r\n<!-------------------------------------------------------- End  EFM Popup-------------------------------------------------------->\r\n\r\n<!-------------------------------------------------------- Start Vent Flow Popup-------------------------------------------------------->\r\n\r\n<ion-header *ngIf=\"showhideflag4\">\r\n\t<ion-toolbar color=\"dark_green\">\r\n\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-left\">\r\n\t\t\t\t<ion-icon name=\"arrow-back\" class=\"font22 iconBackPopup\" (click)=\"packageOpen()\"></ion-icon>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"8\" class=\"ion-text-center\">\r\n\t\t\t\t<ion-text class=\"text_white\">Jump/Change/Reset Vent Flow Meter</ion-text>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"showhideflag4\">\r\n\t<div class=\"content_area\">\r\n\t\t<form>\r\n\t\t\t<ion-grid>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<ion-label>Action</ion-label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t<ion-label>Action</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-select placeholder=\"Select One\" [(ngModel)]=\"ActionTypeVFM\"\r\n\t\t\t\t\t\t\t\t\t\tname=\"resetTypeJsonSelectedVFM\" [value]=\"ActionTypeVFM\"\r\n\t\t\t\t\t\t\t\t\t\t(ionChange)=\"resetchange($event.target.value, 'VFM')\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-select-option value='J'>Jump</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t<ion-select-option value='C'>Change</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t<ion-select-option value='R'>Reset</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<!-- <ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<ion-label>Old Meter Reading <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-input type=\"text\" [(ngModel)]=\"mdlReadingOnSwitchEFM\" name=\"mdlReadingOnSwitchEFM\" placeholder=\"Old Meter Reading\"></ion-input>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<ion-label>Jump Reading(If any)</ion-label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-input type=\"text\" name=\"mdlResetJumpReadingEFM\" [(ngModel)]=\"mdlResetJumpReadingEFM\"  placeholder=\"Jump Reading\"></ion-input>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<ion-label>Choose File</ion-label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div [hidden]=\"mdlShowResetImageEFM==false\"  class=\"col-2\" style=\"width: 26px;height: 34px;padding-left: 5px;padding-right: 5px;text-align: center;\">\r\n\t\t\t\t\t\t\t\t<div (click)=\"showCertificatesReset('EFM');\"><img ng-src=\"assets/images/attachment.gif\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-input type=\"file\" id=\"jcMeterResetEFM\" name=\"jcMeterResetEFM\" (change)=\"uploadJumpReadingImgEFMPopUp($event)\" [disabled]=\"(mdlResetJumpReadingEFM == '' || mdlResetJumpReadingEFM == '0')\"></ion-input>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row> -->\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t\t<ion-label>Before</ion-label>\r\n\t\t\t\t\t\t<ion-input class=\"inp_control\" [value]=\"mdlReadingOnSwitchVFM\"\r\n\t\t\t\t\t\t\t(input)=\"mdlReadingOnSwitchVFM=$event.target.value\" placeholder=\"Before Meter Reading\"\r\n\t\t\t\t\t\t\tname=\"Before\"></ion-input>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t\t<ion-label>After</ion-label>\r\n\t\t\t\t\t\t<ion-input class=\"inp_control\" [value]=\"NewMeterReading\"\r\n\t\t\t\t\t\t\t(input)=\"NewMeterReading=$event.target.value\" placeholder=\"After Meter Reading\"\r\n\t\t\t\t\t\t\tname=\"after\"></ion-input>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<!-- (input)=\"mdlResetJumpReadingVFM($event.target.value)\" -->\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t\t<ion-label>Attachment</ion-label>\r\n\t\t\t\t\t\t<ion-input type=\"file\" class=\"inp_control\" id=\"jcMeterResetVFM\" name=\"jcMeterResetVFM\"\r\n\t\t\t\t\t\t\t(change)=\"uploadJumpReadingImgVFMPopUp($event.target.files, $event)\"\r\n\t\t\t\t\t\t\t[disabled]=\"(mdlResetJumpReadingVFM == '' || mdlResetJumpReadingVFM == '0')\"></ion-input>\r\n\t\t\t\t\t\t<!-- <span *ngIf=\"!IsFileSelected\" class=\"temp_file_name\" style=\"right:-6px;\">{{FileName}}</span> -->\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t\t<ion-label>Remark</ion-label>\r\n\t\t\t\t\t\t<ion-textarea class=\"inp_control\" [value]=\"MeterJumpRemark\"\r\n\t\t\t\t\t\t\t(input)=\"MeterJumpRemark=$event.target.value\" placeholder=\"Remark\"></ion-textarea>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<th>Sr No</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Before</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>After</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Jumped</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Action Type</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Remark</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let itm of VFMJumpListHistory, let i = index\">\r\n\t\t\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.BeforeJumpReading}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.AfterJumpReading}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.JumpReading}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.Action}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.Remark}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<!-- <td>{{itm.DispanserJumpRemark}}</td> -->\r\n\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <span (click)=\"UpdateVFMJumpHistory(itm.id, itm)\">Edit</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"closeicon\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"DeleteVFMJumpHistory(itm.id,itm.Action, itm)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon ios=\"ios-close\" md=\"md-close\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t</span> -->\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"dark\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"UpdateVFMJumpHistory(itm.id, itm)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"create\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-button>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"danger\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"DeleteVFMJumpHistory(itm.id,itm.Action, itm)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"trash\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"button_container\">\r\n\t\t\t\t\t\t\t<ion-button color=\"dark_green_clr\" [hidden]=\"PackageDetailJson.length == 0 ? 0 : \r\n\t\t\t\t\t\t\t\tPackageDetailJson.isStationSubmitted > 0\" (click)=\"HoldResetReading('VFM')\">Save</ion-button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</ion-grid>\r\n\t\t</form>\r\n\t</div>\r\n</ion-content>\r\n\r\n<!-------------------------------------------------------- End Vent Flow Popup-------------------------------------------------------->"

/***/ }),

/***/ "./src/app/station/package/package-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/station/package/package-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PackagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagePageRoutingModule", function() { return PackagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _package_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./package.page */ "./src/app/station/package/package.page.ts");




var routes = [
    {
        path: '',
        component: _package_page__WEBPACK_IMPORTED_MODULE_3__["PackagePage"]
    }
];
var PackagePageRoutingModule = /** @class */ (function () {
    function PackagePageRoutingModule() {
    }
    PackagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PackagePageRoutingModule);
    return PackagePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/station/package/package.module.ts":
/*!***************************************************!*\
  !*** ./src/app/station/package/package.module.ts ***!
  \***************************************************/
/*! exports provided: PackagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagePageModule", function() { return PackagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _package_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./package-routing.module */ "./src/app/station/package/package-routing.module.ts");
/* harmony import */ var _package_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./package.page */ "./src/app/station/package/package.page.ts");







var PackagePageModule = /** @class */ (function () {
    function PackagePageModule() {
    }
    PackagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _package_routing_module__WEBPACK_IMPORTED_MODULE_5__["PackagePageRoutingModule"]
            ],
            declarations: [_package_page__WEBPACK_IMPORTED_MODULE_6__["PackagePage"]]
        })
    ], PackagePageModule);
    return PackagePageModule;
}());



/***/ }),

/***/ "./src/app/station/package/package.page.scss":
/*!***************************************************!*\
  !*** ./src/app/station/package/package.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".closeicon {\n  vertical-align: sub;\n}\n\n.iconBackPopup {\n  margin: auto;\n  color: white !important;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvc3RhdGlvbi9wYWNrYWdlL3BhY2thZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9zdGF0aW9uL3BhY2thZ2UvcGFja2FnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBWSxtQkFBQTtBQ0VaOztBREFBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvc3RhdGlvbi9wYWNrYWdlL3BhY2thZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb3NlaWNvbnsgdmVydGljYWwtYWxpZ246IHN1Yjt9XHJcblxyXG4uaWNvbkJhY2tQb3B1cHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGNvbG9yOndoaXRlIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59IiwiLmNsb3NlaWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBzdWI7XG59XG5cbi5pY29uQmFja1BvcHVwIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/station/package/package.page.ts":
/*!*************************************************!*\
  !*** ./src/app/station/package/package.page.ts ***!
  \*************************************************/
/*! exports provided: PackagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagePage", function() { return PackagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var PackagePage = /** @class */ (function () {
    function PackagePage(formBuilder, router, activatedroute, commonServices, menu, dp) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedroute = activatedroute;
        this.commonServices = commonServices;
        this.menu = menu;
        this.dp = dp;
        this.geteDate = { selcteddate: "" };
        this.varSfs = false;
        this.myFlag = 0;
        this.varDfs = false;
        this.flagDfs = 0;
        this.varEfs = false;
        this.flagEfs = 0;
        this.VentFlowMeterReading = "0.00";
        this.flagVentFlow = 0;
        this.IsVentFlow = false;
        this.showhideflag1 = false;
        this.showhideflag2 = false;
        this.showhideflag3 = false;
        this.showhideflag4 = false;
        this.hidepackage = true;
        /////////////////////Package Vars////////////////
        this.IsPackagehide = false;
        this.stationName = "";
        this.PackageDetailJson = [];
        this.globalDetail = JSON.parse(localStorage.getItem('globalDetail'));
        this.summary = {
            prm_id: (this.globalDetail[0].prm_id == null || this.globalDetail[0].prm_id === undefined) ? 0 : this.globalDetail[0].prm_id
        };
        this.ActionTypeSFM = "J";
        this.ActionTypeDFM = "J";
        this.ActionTypeEFM = "J";
        this.ActionTypeVFM = "J";
        this.flag = "";
        this.arrPath = "";
        this.SelectedPkgId = { PkgId: "0" };
        this.mdlResetPopup = false;
        this.LoginId = localStorage.getItem('LoginId');
        this.StationCode = localStorage.getItem('LoginId');
        this.MeterSkidCode = "";
        this.resetTypeJsonSelected = "J";
        this.PKisCRSentToHo = 0;
        this.PKisStationSubmitted = 0;
        this.glovalJson = JSON.parse(sessionStorage.getItem('globalDetail'));
        this.PackageId = "0";
        this.PackageCode = "";
        this.SuctionPressure = "";
        this.PrimeMover = "";
        this.Remark = "";
        this.mdlSelectedRemark = "";
        this.mdlRemarkTextShow = true;
        this.mdlRemark = "";
        this.JumpReadingEFMCount = "";
        this.JumpCertificateEFM = "";
        this.JumpReadingEFM = "";
        this.mdlShowCertificates = false;
        this.mdlResetPopupDFM = false;
        this.JumpReadingDFM = "";
        this.JumpReadingDFMCount = "";
        this.JumpCertificateDFM = "";
        this.DischargeFlowMeterReading = "";
        this.DischargeFlowMeterReadingPrv = "";
        this.EngineFlowMeterReading = "";
        this.EngineFlowMeterReadingPrv = "";
        this.JumpReadingSFMCount = "";
        this.JumpCertificateSFM = "";
        this.JumpReadingSFM = "";
        this.SuctionFlowMeterReading = "";
        this.SuctionFlowMeterReadingPrv = "";
        this.SelectedRegion = '';
        this.resetTypeJsonSelectedSFM = '0';
        this.resetTypeJsonSelectedDFM = '0';
        this.resetTypeJsonSelectedEFM = '0';
        this.resetTypeJsonSFM = [{ Text: 'Jump' }, { Text: 'Reset' }, { Text: 'Change' }];
        this.resetTypeJsonDFM = [{ Text: 'Jump' }, { Text: 'Reset' }, { Text: 'Change' }];
        this.resetTypeJsonEFM = [{ Text: 'Jump' }, { Text: 'Reset' }, { Text: 'Change' }];
        this.jsonRemarks = [
            { text: 'Breakdown due to Leakage', value: 'Breakdown due to Leakage' },
            { text: 'Mechanical breakdown', value: 'Mechanical breakdown' },
            { text: 'Instrumentation breakdown', value: 'Instrumentation breakdown' },
            { text: 'Powercut', value: 'Powercut' },
            { text: 'Voltage problem', value: 'Voltage problem' },
            { text: 'Maintenance Shutdown', value: 'Maintenance Shutdown' },
            { text: 'OK', value: 'OK' },
            { text: 'Other', value: 'Other' }
        ];
        this.RunHrs = [];
        this.RunMin = [];
        //Filling Running Hours
        this.selectedRhHr = '';
        this.selectedRhMin = '';
        //Filling ScheduleShutdown Hours 
        this.selectedSHr = '';
        this.selectedSMin = '';
        //Filling UnScheduleShutdown Hours 
        this.selectedUsHr = '';
        this.selectedUsMin = '';
        //Filling BreadDown Hours 
        this.selectedBdHr = '';
        this.selectedBdMin = '';
        this.ShowEngineMeter = false;
        this.mdlImgShowDFM = false;
        this.mdlImgShowSFM = false;
        this.mdlImgShowEFM = false;
        this.mdlResetPopupSFM = false;
        this.imgPathDFM = "";
        this.imgPathSFM = "";
        this.imgPathEFM = "";
        this.mdlReadingOnSwitchSFM = '0.000';
        this.mdlShowResetImageSFM = false;
        this.mdlShowResetReadingSFM = false;
        this.ResetMeterReadingOfTodaySFM = '';
        this.meterResetIdSFM = "";
        this.imgSFM = '';
        this.imgPathResetSFM = '';
        this.mdlResetJumpReadingSFM = '0.000';
        this.mdlShowResetImageDFM = false;
        this.meterResetIdDFM = '';
        this.ResetMeterReadingOfTodayDFM = '';
        this.mdlResetJumpReadingDFM = '0.000';
        this.imgDFM = '';
        this.imgPathResetDFM = '';
        this.mdlShowResetReadingDFM = false;
        this.mdlReadingOnSwitchDFM = "";
        this.mdlReadingOnSwitchVFM = "";
        this.mdlReadingOnSwitchEFM = "";
        this.meterResetIdEFM = "";
        this.ResetMeterReadingOfTodayEFM = '';
        this.mdlResetJumpReadingEFM = '0.000';
        this.mdlResetJumpReadingVFM = '0.000';
        this.imgEFM = '';
        this.imgPathResetEFM = '';
        this.mdlShowResetImageEFM = false;
        this.mdlShowResetReadingEFM = false;
        this.mdlResetPopupEFM = false;
        this.mdlResetPopupVFM = false;
        this.JumpVisibleSFS = true;
        this.JumpVisibleDFS = true;
        this.JumpVisibleEFS = true;
        this.resetTypeOptionSFM = "";
        this.secondMaxDate = new Date().toISOString();
        this.SHrs = [];
        this.SMin = [];
        this.UsHrs = [];
        this.UsMin = [];
        this.BdHrs = [];
        this.BdMin = [];
        this.glovalList = [];
        this.IscheckboxSFS = false;
        this.IscheckboxDFS = false;
        this.IscheckboxEFS = false;
        this.PackageOldReading = "";
        this.NewMeterReading = "";
        this.MeterJumpRemark = "";
        this.MSJumpListHistory = [];
        this.JumpHistoryId = '';
        this.MSJReading = "";
        this.SFMJumpListHistory = [];
        this.DFMJumpListHistory = [];
        this.EFMJumpListHistory = [];
        this.VFMJumpListHistory = [];
        this.SuctionFlowReadingAverage = '';
        this.DischargeFlowReadingAverage = '';
        this.EngineFlowReadingAverage = '';
        this.GSFlagJumpType = 'J';
        this.MSFlagJumpType = 'J';
        this.VentFlowMeterReadingPrv = "";
        this.errorS = false;
        this.errorE = false;
        this.errorD = false;
        this.monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ];
        this.currentdate = new Date().toISOString().split('T')[0];
        if (this.geteDate.selcteddate == "") {
            this.currDate = this.currentdate;
            console.log(this.currDate);
            var dt = new Date(this.currDate);
            //IOS Comment
            // let latest_date = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
            // this.geteDate.selcteddate = latest_date;
            this.DPREntryDateTime = this.dp.transform(dt, 'yyyy/MM/dd hh:mm:ss');
            this.geteDate.selcteddate = this.DPREntryDateTime;
        }
    }
    //stationName:string="";
    PackagePage.prototype.getTimeStats = function () {
        var minutes = [
            { min: '00' }, { min: '01' }, { min: '02' }, { min: '03' }, { min: '04' }, { min: '05' }, { min: '06' }, { min: '07' }, { min: '08' }, { min: '09' }, { min: '10' }, { min: '11' }, { min: '12' },
            { min: '13' }, { min: '14' }, { min: '15' }, { min: '16' }, { min: '17' }, { min: '18' }, { min: '19' }, { min: '20' }, { min: '21' }, { min: '22' }, { min: '23' }, { min: '24' },
            { min: '25' }, { min: '26' }, { min: '27' }, { min: '28' }, { min: '29' }, { min: '30' }, { min: '31' }, { min: '32' }, { min: '33' }, { min: '34' }, { min: '35' }, { min: '36' },
            { min: '37' }, { min: '38' }, { min: '39' }, { min: '40' }, { min: '41' }, { min: '42' }, { min: '43' }, { min: '44' }, { min: '45' }, { min: '46' }, { min: '47' }, { min: '48' },
            { min: '49' }, { min: '50' }, { min: '51' }, { min: '52' }, { min: '53' }, { min: '54' }, { min: '55' }, { min: '56' }, { min: '57' }, { min: '58' }, { min: '59' }
        ];
        var hours = [
            { hrs: '00' }, { hrs: '01' }, { hrs: '02' }, { hrs: '03' }, { hrs: '04' }, { hrs: '05' }, { hrs: '06' }, { hrs: '07' },
            { hrs: '08' }, { hrs: '09' }, { hrs: '10' }, { hrs: '11' }, { hrs: '12' }, { hrs: '13' }, { hrs: '14' }, { hrs: '15' },
            { hrs: '16' }, { hrs: '17' }, { hrs: '18' }, { hrs: '19' }, { hrs: '20' }, { hrs: '21' }, { hrs: '22' }, { hrs: '23' }, { hrs: '24' }
        ];
        var timeStats = {
            minutes: minutes,
            hours: hours
        };
        return timeStats;
    };
    ;
    ;
    PackagePage.prototype.ngOnInit = function () {
        this.PackageCallOninit();
    };
    PackagePage.prototype.openFirst = function () {
        this.menu.enable(true, 'menuStn');
        this.menu.open('menuStn');
    };
    PackagePage.prototype.showFields_sfs = function () {
        if (this.myFlag == 0) {
            this.varSfs = true;
            this.myFlag = 1;
        }
        else {
            this.varSfs = false;
            this.myFlag = 0;
        }
    };
    PackagePage.prototype.showFields_dfs = function () {
        if (this.flagDfs == 0) {
            this.varDfs = true;
            this.flagDfs = 1;
        }
        else {
            this.varDfs = false;
            this.flagDfs = 0;
        }
    };
    PackagePage.prototype.showFields_efs = function () {
        if (this.flagEfs == 0) {
            this.varEfs = true;
            this.flagEfs = 1;
        }
        else {
            this.varEfs = false;
            this.flagEfs = 0;
        }
    };
    PackagePage.prototype.showFields_ventFlow = function () {
        if (this.flagVentFlow == 0) {
            this.IsVentFlow = true;
            this.flagVentFlow = 1;
        }
        else {
            this.IsVentFlow = false;
            this.flagVentFlow = 0;
        }
        // this.IsVentFlow = !this.IsVentFlow;
    };
    PackagePage.prototype.showhidechangereset = function (flag) {
        if (flag == '1') {
            {
                this.hidepackage = false;
                this.showhideflag1 = true;
                this.getSFMJumpHistory('GET');
            }
        }
        else if (flag == '2') {
            {
                this.hidepackage = false;
                this.showhideflag2 = true;
                this.getDFMJumpHistory('GET');
            }
        }
        else if (flag == '3') {
            this.hidepackage = false;
            this.showhideflag3 = true;
            this.getEFMJumpHistory('GET');
        }
        else if (flag == '4') {
            this.hidepackage = false;
            this.showhideflag4 = true;
            this.getVFMJumpHistory('GET');
        }
        else {
            this.hidepackage = true;
            this.showhideflag1 = false;
            this.showhideflag2 = false;
            this.showhideflag3 = false;
            this.showhideflag4 = false;
        }
    };
    PackagePage.prototype.packageOpen = function () {
        this.showhideflag1 = false;
        this.showhideflag2 = false;
        this.showhideflag3 = false;
        this.showhideflag4 = false;
        this.hidepackage = true;
    };
    PackagePage.prototype.changReset1Redirect = function () {
        this.router.navigate(['change-reset1-package']);
    };
    PackagePage.prototype.changReset2Redirect = function () {
        this.router.navigate(['change-reset2-package']);
    };
    PackagePage.prototype.changReset3Redirect = function () {
        this.router.navigate(['change-reset3-package']);
    };
    PackagePage.prototype.getSelectedDate = function (datePicker) {
        console.log("datePicker", datePicker);
        var dt = new Date(datePicker);
        //IOS Comment
        // let latest_date = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        // this.geteDate.selcteddate = latest_date;
        // this.DPREntryDateTime = this.dp.transform(this.geteDate.selcteddate, 'yyyy-MM-dd hh:mm:ss');
        this.DPREntryDateTime = this.dp.transform(dt, 'yyyy/MM/dd hh:mm:ss');
        this.geteDate.selcteddate = this.DPREntryDateTime;
    };
    /////////////////////////////////////////////////////////////  Package code --Start--////////////////////////////////////////////////
    // GetPackageDetail(PackageId) {
    //   this.PackageId = PackageId;
    //   const obj = {
    //     StationCode: this.StationCode,
    //     LoginId: this.LoginId,
    //     PackageId: (this.PackageId == '') ? '-999' : this.PackageId,
    //     DPREntryDate: this.geteDate.selcteddate
    //   };
    //   this.commonServices.loadingPresent();
    //   this.commonServices.postwithservice("GetStationPackages", obj).subscribe(
    //     (resp: any) => {
    //       const data = JSON.parse(resp);
    //       if (data[0].length > 0) {
    //         this.IsPackagehide = false;
    //         this.TablesPkgs = data[0];
    //         this.PackageDetailJson = data[1];
    //         this.PackageCode = this.PackageDetailJson[0].PackageCode;
    //         this.SelectedPkgId = { PkgId: this.PackageDetailJson[0].PackageId };
    //         this.PackageId = this.PackageDetailJson[0].PackageId;
    //         this.PKisCRSentToHo = isNullOrUndefined(this.PackageDetailJson[0].isCRSentToHo) ? 0 : this.PackageDetailJson[0].isCRSentToHo;
    //         this.PKisStationSubmitted = isNullOrUndefined(this.PackageDetailJson[0].isStationSubmitted) ? 0 : this.PackageDetailJson[0].isStationSubmitted;
    //         if (!isUndefined(this.PackageDetailJson)) {
    //           if (data[0].length > 0)
    //             this.SelectedPkgId = { PkgId: this.PackageDetailJson[0].PackageId };
    //           if (this.PackageDetailJson[0].PrimeMover == 'E')
    //             this.ShowEngineMeter = true;
    //           else
    //             this.ShowEngineMeter = false;
    //           var pathSFM = this.PackageDetailJson[0].JumpCertificateSFM;
    //           if (pathSFM != '' && isUndefined(pathSFM) == false) {
    //             this.mdlImgShowSFM = true;
    //             this.imgPathSFM = this.glovalList.imgBaseUrl + pathSFM; //$rootScope.globalValues.imgBaseUrl + pathSFM;
    //           }
    //           var pathDFM = this.PackageDetailJson[0].JumpCertificateDFM;
    //           if (pathDFM != '' && isUndefined(pathDFM) == false) {
    //             this.mdlImgShowDFM = true;
    //             this.imgPathDFM = this.glovalList.imgBaseUrl + pathDFM; //$rootScope.globalValues.imgBaseUrl + pathDFM;
    //           }
    //           var patheEFM = this.PackageDetailJson[0].JumpCertificateEFM;
    //           if (patheEFM != '' && isUndefined(patheEFM) == false) {
    //             this.mdlImgShowEFM = true;
    //             this.imgPathEFM = this.glovalList.imgBaseUrl + patheEFM; //$rootScope.globalValues.imgBaseUrl + pathDFM;
    //           }
    //           this.SuctionFlowMeterReading = isNullOrUndefined(this.PackageDetailJson[0].SuctionFlowMeterReading) ? "0" : this.PackageDetailJson[0].SuctionFlowMeterReading;
    //           this.SuctionFlowMeterReadingPrv = this.PackageDetailJson[0].SuctionFlowMeterReadingPrv;
    //           console.log(this.SuctionFlowMeterReading, "SuctionFlowMeterReading");
    //           console.log(this.SuctionFlowMeterReadingPrv, "SuctionFlowMeterReadingPrv");
    //           console.log(this.PackageDetailJson[0].SuctionFlowMeterReading, "GAA");
    //           this.DischargeFlowMeterReading = this.PackageDetailJson[0].DischargeFlowMeterReading;
    //           this.DischargeFlowMeterReadingPrv = this.PackageDetailJson[0].DischargeFlowMeterReadingPrv;
    //           this.EngineFlowMeterReading = this.PackageDetailJson[0].EngineFlowMeterReading;
    //           this.EngineFlowMeterReadingPrv = this.PackageDetailJson[0].EngineFlowMeterReadingPrv;
    //           this.JumpReadingSFM = this.PackageDetailJson[0].JumpReadingSFM;
    //           if (parseFloat(this.JumpReadingSFM) > 0.000) {
    //             //this.filevisible = false;
    //             $("#IscheckboxSFS").prop("checked", true);
    //             this.JumpVisibleSFS = false;
    //           }
    //           else {
    //             //this.filevisible= true;
    //             $("#IscheckboxSFS").prop("checked", false);
    //             this.JumpVisibleSFS = true;
    //           }
    //           this.JumpReadingSFMCount = this.PackageDetailJson[0].JumpReadingSFMCount;
    //           this.JumpCertificateSFM = this.PackageDetailJson[0].JumpCertificateSFM;
    //           this.JumpReadingDFM = this.PackageDetailJson[0].JumpReadingDFM;
    //           if (parseFloat(this.JumpReadingDFM) > 0.000) {
    //             //this.filevisible = false;
    //             $("#IscheckboxDFS").prop("checked", true);
    //             this.JumpVisibleDFS = false;
    //           }
    //           else {
    //             //this.filevisible= true;
    //             $("#IscheckboxDFM").prop("checked", false);
    //             this.JumpVisibleDFS = true;
    //           }
    //           this.JumpReadingDFMCount = this.PackageDetailJson[0].JumpReadingDFMCount;
    //           this.JumpCertificateDFM = this.PackageDetailJson[0].JumpCertificateDFM;
    //           this.JumpReadingEFM = this.PackageDetailJson[0].JumpReadingEFM;
    //           if (parseFloat(this.JumpReadingEFM) > 0.000) {
    //             //this.filevisible = false;
    //             $("#IscheckboxEFS").prop("checked", true);
    //             this.JumpVisibleEFS = false;
    //           }
    //           else {
    //             //this.filevisible= true;
    //             $("#IscheckboxEFS").prop("checked", false);
    //             this.JumpVisibleEFS = true;
    //           }
    //           this.JumpReadingEFMCount = this.PackageDetailJson[0].JumpReadingEFMCount;
    //           this.JumpCertificateEFM = this.PackageDetailJson[0].JumpCertificateEFM;
    //           this.PrimeMover = this.PackageDetailJson[0].PrimeMover;
    //           this.SuctionPressure = this.PackageDetailJson[0].SuctionPressure;
    //           this.selectedRhHr = this.PackageDetailJson[0].RunninInHours;
    //           this.selectedRhMin = this.PackageDetailJson[0].RunningInMinutes
    //           var runInHrs = this.PackageDetailJson[0].RunninInHours, runInMins = this.PackageDetailJson[0].RunningInMinutes;
    //           //this.selectedRhHr = //$filter('filter')($scope.RunHrs, { hrs: runInHrs })[0];
    //           //this.selectedRhMin = //$filter('filter')($scope.RunMin, { min: runInMins })[0];
    //           this.selectedRhHr = this.PackageDetailJson[0].RunninInHours; //this.RunHrs.filter(val => {val = runInHrs});
    //           this.selectedRhMin = this.PackageDetailJson[0].RunningInMinutes; //this.RunHrs.filter(val => {val == runInHrs});
    //           this.selectedUsHr = this.PackageDetailJson[0].UnscheduledShutdownInHours;
    //           this.selectedUsMin = this.PackageDetailJson[0].UnscheduledShutdownInMinutes;
    //           this.selectedSHr = this.PackageDetailJson[0].ScheduleShutdownInHours;
    //           this.selectedSMin = this.PackageDetailJson[0].ScheduleShutdownInMinutes;
    //           this.selectedBdHr = this.PackageDetailJson[0].BreakdownInHours
    //           this.selectedBdMin = this.PackageDetailJson[0].BreakdownInMinutes
    //           this.Remark = this.PackageDetailJson[0].Remark;
    //           var pkgRemark = this.PackageDetailJson[0].Remark;
    //           if (this.Remark == "Breakdown due to Leakage" || this.Remark == "Instrumentation breakdown" || this.Remark == "Mechanical breakdown" || this.Remark == "Instrumentation breakdown" || this.Remark == "Powercut" || this.Remark == "Voltage problem") {
    //             this.mdlSelectedRemark = this.Remark;
    //             this.mdlRemarkTextShow = true;
    //           }
    //           else if (this.Remark != "") {
    //             this.mdlSelectedRemark = "Other";
    //             this.mdlRemarkTextShow = false;
    //             this.mdlRemark = this.PackageDetailJson[0].Remark;
    //           }
    //           else {
    //             this.mdlSelectedRemark = "";
    //             this.mdlRemark = "";
    //           }
    //           //  var remarkVal = pkgRemark; //$filter('filter')(this.jsonRemarks, { value: pkgRemark })[0];
    //           //  if(isUndefined(remarkVal) || remarkVal == "") {
    //           //      this.mdlSelectedRemark = this.Remark;//$filter('filter')($scope.jsonRemarks, { value: 'Other' })[0];
    //           //      this.mdlRemarkTextShow = true;
    //           //      this.mdlRemark = pkgRemark;
    //           //  }
    //           //  else {
    //           //      this.mdlSelectedRemark = this.Remark;//$filter('filter')($scope.jsonRemarks, { value: pkgRemark })[0];
    //           //      this.mdlRemarkTextShow = true;
    //           //  }
    //           this.resetMeterJSON = data[2];
    //           var resetMeterJSON = data[2];
    //           this.mdlShowResetImageSFM = false;
    //           this.mdlShowResetImageEFM = false;
    //           this.mdlShowResetImageDFM = false;
    //           this.mdlShowResetReadingSFM = false;
    //           if (!isUndefined(resetMeterJSON) && resetMeterJSON.length > 0) {
    //             var resetSFM = this.resetMeterJSON[0];//$filter('filter')(resetMeterJSON, { MeterType: 'SFM' })[0];
    //             if (resetSFM.MeterType == 'SFM') {
    //               if (!isUndefined(resetSFM))
    //                 if (resetSFM.ReadingOnSwitch == -999)
    //                   this.mdlShowResetReadingSFM = false;
    //                 else {
    //                   this.mdlShowResetReadingSFM = true;
    //                   this.mdlReadingOnSwitchSFM = resetSFM.ReadingOnSwitch;
    //                   this.ResetMeterReadingOfTodaySFM = resetSFM.ResetMeterReadingOfToday;
    //                   this.meterResetIdSFM = resetSFM.MeterResetId;
    //                   this.mdlResetJumpReadingSFM = resetSFM.JumpReading;
    //                   this.ActionTypeSFM = (resetSFM.FlagReadingType == 'R') ? 'Reset' : 'Change';
    //                   if (resetSFM.JumpCertificateReset != '-999' && resetSFM.JumpCertificateReset != '') {
    //                     this.imgSFM = resetSFM.JumpCertificateReset;
    //                     this.imgPathResetSFM = this.glovalList.imgBaseUrl + resetSFM.JumpCertificateReset;//$rootScope.globalValues.imgBaseUrl + resetSFM.JumpCertificateReset;
    //                     this.mdlShowResetImageSFM = true;
    //                   }
    //                 }
    //             }
    //             var resetDFM = this.resetMeterJSON[0];//$filter('filter')(resetMeterJSON, { MeterType: 'DFM' })[0];
    //             if (resetDFM.MeterType == 'DFM') {
    //               if (!isUndefined(resetDFM))
    //                 if (resetDFM.ReadingOnSwitch == -999)
    //                   this.mdlShowResetReadingDFM = false;
    //                 else {
    //                   this.mdlShowResetReadingDFM = true;
    //                   this.mdlReadingOnSwitchDFM = resetDFM.ReadingOnSwitch;
    //                   this.meterResetIdDFM = resetDFM.MeterResetId;
    //                   this.ResetMeterReadingOfTodayDFM = resetDFM.ResetMeterReadingOfToday;
    //                   this.mdlResetJumpReadingDFM = resetDFM.JumpReading;
    //                   this.ActionTypeDFM = (resetSFM.FlagReadingType == 'R') ? 'Reset' : 'Change';
    //                   if (resetDFM.JumpCertificateReset != '-999' && resetDFM.JumpCertificateReset != '') {
    //                     this.imgDFM = resetDFM.JumpCertificateReset;
    //                     this.imgPathResetDFM = this.glovalList.imgBaseUrl + resetDFM.JumpCertificateReset;//$rootScope.globalValues.imgBaseUrl + resetDFM.JumpCertificateReset;
    //                     this.mdlShowResetImageDFM = true;
    //                   }
    //                 }
    //             }
    //             var resetEFM = this.resetMeterJSON[0];//$filter('filter')(resetMeterJSON, { MeterType: 'EFM' })[0];
    //             if (resetEFM.MeterType == 'EFM') {
    //               if (!isUndefined(resetEFM))
    //                 if (resetEFM.ReadingOnSwitch == -999)
    //                   this.mdlShowResetReadingEFM = false;
    //                 else {
    //                   this.mdlShowResetReadingEFM = true;
    //                   this.mdlReadingOnSwitchEFM = resetEFM.ReadingOnSwitch;
    //                   this.meterResetIdEFM = resetEFM.MeterResetId;
    //                   this.ResetMeterReadingOfTodayEFM = resetEFM.ResetMeterReadingOfToday;
    //                   this.mdlResetJumpReadingEFM = resetEFM.JumpReading;
    //                   this.ActionTypeEFM = (resetSFM.FlagReadingType == 'R') ? 'Reset' : 'Change';
    //                   if (resetEFM.JumpCertificateReset != '-999' && resetEFM.JumpCertificateReset != '') {
    //                     this.imgEFM = resetEFM.JumpCertificateReset;
    //                     this.imgPathResetEFM = this.glovalList.imgBaseUrl + resetEFM.JumpCertificateReset;//$rootScope.globalValues.imgBaseUrl + resetEFM.JumpCertificateReset;
    //                     this.mdlShowResetImageEFM = true;
    //                   }
    //                 }
    //             }
    //           }
    //         }
    //         this.commonServices.loadingDismiss()
    //       }
    //       else {
    //         this.commonServices.loadingDismiss()
    //         this.commonServices.presentToast('There is no package available.')
    //         this.IsPackagehide = true;
    //         this.PKisCRSentToHo = 0;
    //         this.PKisStationSubmitted = 0;
    //         console.log(this.PKisCRSentToHo, "Deepak");
    //         console.log(this.PKisStationSubmitted, "Deepak2");
    //         return false;
    //       }
    //       // this.commonServices.loadingDismiss();
    //     },
    //     (error) => {
    //       this.commonServices.presentToast("Something went wrong.");
    //       this.commonServices.loadingDismiss();
    //     }
    //   );
    // }
    PackagePage.prototype.GetPackageDetail = function (PackageId) {
        var _this = this;
        this.PackageId = PackageId;
        var obj = {
            StationCode: this.StationCode,
            LoginId: this.LoginId,
            PackageId: (this.PackageId == '') ? '-999' : this.PackageId,
            DPREntryDate: this.dp.transform(this.geteDate.selcteddate, 'dd/MMM/yyyy')
        };
        this.commonServices.postwithservice("GetStationPackages", obj).subscribe(function (resp) {
            var data = JSON.parse(resp);
            console.log(data);
            if (data.length > 0) {
                _this.IsPackagehide = false;
                _this.TablesPkgs = data[0];
                _this.PackageDetailJson = data[1];
                _this.PackageCode = _this.PackageDetailJson[0].PackageCode;
                _this.SelectedPkgId = { PkgId: _this.PackageDetailJson[0].PackageId };
                _this.PackageId = _this.PackageDetailJson[0].PackageId;
                _this.PKisCRSentToHo = Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(_this.PackageDetailJson[0].isCRSentToHo) ?
                    0 : _this.PackageDetailJson[0].isCRSentToHo;
                _this.PKisStationSubmitted = Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(_this.PackageDetailJson[0].isStationSubmitted) ?
                    0 : _this.PackageDetailJson[0].isStationSubmitted;
                // this.getSFMJumpHistory('GET');
                // this.getDFMJumpHistory('GET');
                // this.getEFMJumpHistory('GET');
                if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isUndefined"])(_this.PackageDetailJson)) {
                    if (data[0].length > 0)
                        _this.SelectedPkgId = { PkgId: _this.PackageDetailJson[0].PackageId };
                    if (_this.PackageDetailJson[0].PrimeMover != 'M')
                        _this.ShowEngineMeter = true;
                    else
                        _this.ShowEngineMeter = false;
                    _this.imgPathSFM = _this.PackageDetailJson[0].JumpCertificateSFM;
                    if (_this.imgPathSFM != '' && !Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(_this.imgPathSFM)) {
                        _this.mdlImgShowSFM = true;
                    }
                    _this.imgPathDFM = _this.PackageDetailJson[0].JumpCertificateDFM;
                    if (_this.imgPathDFM != '' && !Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(_this.imgPathDFM)) {
                        _this.mdlImgShowDFM = true;
                    }
                    _this.imgPathEFM = _this.PackageDetailJson[0].JumpCertificateEFM;
                    if (_this.imgPathEFM != '' && !Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(_this.imgPathEFM)) {
                        _this.mdlImgShowEFM = true;
                    }
                    _this.SuctionFlowMeterReading = Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(_this.PackageDetailJson[0].SuctionFlowMeterReading) ? "0" : _this.PackageDetailJson[0].SuctionFlowMeterReading;
                    _this.SuctionFlowMeterReadingPrv = _this.PackageDetailJson[0].SuctionFlowMeterReadingPrv;
                    console.log(_this.SuctionFlowMeterReading, "SuctionFlowMeterReading");
                    console.log(_this.SuctionFlowMeterReadingPrv, "SuctionFlowMeterReadingPrv");
                    console.log(_this.PackageDetailJson[0].SuctionFlowMeterReading, "GAA");
                    _this.MotorFrequency = _this.PackageDetailJson[0].MotorFrequency;
                    _this.DischargeFlowMeterReading = _this.PackageDetailJson[0].DischargeFlowMeterReading;
                    _this.DischargeFlowMeterReadingPrv = _this.PackageDetailJson[0].DischargeFlowMeterReadingPrv;
                    _this.EngineFlowMeterReading = _this.PackageDetailJson[0].EngineFlowMeterReading;
                    _this.EngineFlowMeterReadingPrv = _this.PackageDetailJson[0].EngineFlowMeterReadingPrv;
                    _this.JumpReadingSFM = _this.PackageDetailJson[0].JumpReadingSFM;
                    if (parseFloat(_this.JumpReadingSFM) > 0.000) {
                        //this.filevisible = false;
                        $("#IscheckboxSFS").prop("checked", true);
                        _this.JumpVisibleSFS = false;
                    }
                    else {
                        //this.filevisible= true;
                        $("#IscheckboxSFS").prop("checked", false);
                        _this.JumpVisibleSFS = true;
                    }
                    _this.JumpReadingSFMCount = _this.PackageDetailJson[0].JumpReadingSFMCount;
                    _this.JumpCertificateSFM = _this.PackageDetailJson[0].JumpCertificateSFM;
                    _this.JumpReadingDFM = _this.PackageDetailJson[0].JumpReadingDFM;
                    if (parseFloat(_this.JumpReadingDFM) > 0.000) {
                        //this.filevisible = false;
                        $("#IscheckboxDFS").prop("checked", true);
                        _this.JumpVisibleDFS = false;
                    }
                    else {
                        //this.filevisible= true;
                        $("#IscheckboxDFM").prop("checked", false);
                        _this.JumpVisibleDFS = true;
                    }
                    _this.JumpReadingDFMCount = _this.PackageDetailJson[0].JumpReadingDFMCount;
                    _this.JumpCertificateDFM = _this.PackageDetailJson[0].JumpCertificateDFM;
                    _this.JumpReadingEFM = _this.PackageDetailJson[0].JumpReadingEFM;
                    if (parseFloat(_this.JumpReadingEFM) > 0.000) {
                        //this.filevisible = false;
                        $("#IscheckboxEFS").prop("checked", true);
                        _this.JumpVisibleEFS = false;
                    }
                    else {
                        //this.filevisible= true;
                        $("#IscheckboxEFS").prop("checked", false);
                        _this.JumpVisibleEFS = true;
                    }
                    _this.JumpReadingEFMCount = _this.PackageDetailJson[0].JumpReadingEFMCount;
                    _this.JumpCertificateEFM = _this.PackageDetailJson[0].JumpCertificateEFM;
                    var VentFlow = _this.PackageDetailJson[0].IsVentFlow;
                    if (parseFloat(VentFlow) > 0.000) {
                        // $("#IscheckboxVFM").prop("checked", true);
                        _this.IsVentFlow = true;
                    }
                    else {
                        // $("#IscheckboxVFM").prop("checked", false);
                        _this.IsVentFlow = false;
                    }
                    _this.VentFlowMeterReading =
                        (_this.PackageDetailJson[0].VentFlowMeterReading == ""
                            || Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(_this.PackageDetailJson[0].VentFlowMeterReading)) ?
                            "0.00" : _this.PackageDetailJson[0].VentFlowMeterReading;
                    //this.PackageDetailJson[0].VentFlowMeterReading;
                    _this.VentFlowMeterReadingPrv = _this.PackageDetailJson[0].VentFlowMeterReadingPrv;
                    _this.PrimeMover = _this.PackageDetailJson[0].PrimeMover;
                    _this.SuctionPressure = _this.PackageDetailJson[0].SuctionPressure;
                    _this.selectedRhHr = _this.PackageDetailJson[0].RunninInHours;
                    _this.selectedRhMin = _this.PackageDetailJson[0].RunningInMinutes;
                    var runInHrs = _this.PackageDetailJson[0].RunninInHours, runInMins = _this.PackageDetailJson[0].RunningInMinutes;
                    //this.selectedRhHr = //$filter('filter')($scope.RunHrs, { hrs: runInHrs })[0];
                    //this.selectedRhMin = //$filter('filter')($scope.RunMin, { min: runInMins })[0];
                    _this.selectedRhHr = _this.PackageDetailJson[0].RunninInHours; //this.RunHrs.filter(val => {val = runInHrs});
                    _this.selectedRhMin = _this.PackageDetailJson[0].RunningInMinutes; //this.RunHrs.filter(val => {val == runInHrs});
                    _this.selectedUsHr = _this.PackageDetailJson[0].UnscheduledShutdownInHours;
                    _this.selectedUsMin = _this.PackageDetailJson[0].UnscheduledShutdownInMinutes;
                    _this.selectedSHr = _this.PackageDetailJson[0].ScheduleShutdownInHours;
                    _this.selectedSMin = _this.PackageDetailJson[0].ScheduleShutdownInMinutes;
                    _this.selectedBdHr = _this.PackageDetailJson[0].BreakdownInHours;
                    _this.selectedBdMin = _this.PackageDetailJson[0].BreakdownInMinutes;
                    _this.Remark = _this.PackageDetailJson[0].Remark;
                    var pkgRemark = _this.PackageDetailJson[0].Remark;
                    if (_this.Remark == "Breakdown due to Leakage"
                        || _this.Remark == "Instrumentation breakdown" ||
                        _this.Remark == "Mechanical breakdown" || _this.Remark == "Instrumentation breakdown"
                        || _this.Remark == "Powercut" || _this.Remark == "Voltage problem") {
                        _this.mdlSelectedRemark = _this.Remark;
                        _this.mdlRemarkTextShow = true;
                    }
                    else if (_this.Remark != "") {
                        _this.mdlSelectedRemark = "Other";
                        _this.mdlRemarkTextShow = false;
                        _this.mdlRemark = _this.PackageDetailJson[0].Remark;
                    }
                    else {
                        _this.mdlSelectedRemark = "";
                        _this.mdlRemark = "";
                    }
                    //  var remarkVal = pkgRemark; //$filter('filter')(this.jsonRemarks, { value: pkgRemark })[0];
                    //  if(isUndefined(remarkVal) || remarkVal == "") {
                    //      this.mdlSelectedRemark = this.Remark;//$filter('filter')($scope.jsonRemarks, { value: 'Other' })[0];
                    //      this.mdlRemarkTextShow = true;
                    //      this.mdlRemark = pkgRemark;
                    //  }
                    //  else {
                    //      this.mdlSelectedRemark = this.Remark;//$filter('filter')($scope.jsonRemarks, { value: pkgRemark })[0];
                    //      this.mdlRemarkTextShow = true;
                    //  }
                    _this.resetMeterJSON = data[2];
                    var resetMeterJSON = data[2];
                    _this.mdlShowResetImageSFM = false;
                    _this.mdlShowResetImageEFM = false;
                    _this.mdlShowResetImageDFM = false;
                    _this.mdlShowResetReadingSFM = false;
                    if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isUndefined"])(resetMeterJSON) && resetMeterJSON.length > 0) {
                        var resetSFM = _this.resetMeterJSON[0]; //$filter('filter')(resetMeterJSON, { MeterType: 'SFM' })[0];
                        if (resetSFM.MeterType == 'SFM') {
                            if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isUndefined"])(resetSFM))
                                if (resetSFM.ReadingOnSwitch == -999) {
                                    _this.mdlShowResetReadingSFM = false;
                                }
                                else {
                                    _this.mdlShowResetReadingSFM = true;
                                    _this.mdlReadingOnSwitchSFM = resetSFM.ReadingOnSwitch;
                                    _this.ResetMeterReadingOfTodaySFM = resetSFM.ResetMeterReadingOfToday;
                                    _this.meterResetIdSFM = resetSFM.MeterResetId;
                                    _this.mdlResetJumpReadingSFM = resetSFM.JumpReading;
                                    _this.ActionTypeSFM = (resetSFM.FlagReadingType == 'R') ? 'Reset' : 'Change';
                                    if (resetSFM.JumpCertificateReset != '-999' && resetSFM.JumpCertificateReset != '') {
                                        _this.imgSFM = resetSFM.JumpCertificateReset;
                                        _this.imgPathResetSFM = _this.glovalList.imgBaseUrl + resetSFM.JumpCertificateReset; //$rootScope.globalValues.imgBaseUrl + resetSFM.JumpCertificateReset;
                                        _this.mdlShowResetImageSFM = true;
                                    }
                                }
                            // this.getSFMJumpHistory('GET');
                            // this.getDFMJumpHistory('GET');
                            // this.getEFMJumpHistory('GET');
                        }
                        var resetDFM = _this.resetMeterJSON[0]; //$filter('filter')(resetMeterJSON, { MeterType: 'DFM' })[0];
                        if (resetDFM.MeterType == 'DFM') {
                            if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isUndefined"])(resetDFM))
                                if (resetDFM.ReadingOnSwitch == -999)
                                    _this.mdlShowResetReadingDFM = false;
                                else {
                                    _this.mdlShowResetReadingDFM = true;
                                    _this.mdlReadingOnSwitchDFM = resetDFM.ReadingOnSwitch;
                                    _this.meterResetIdDFM = resetDFM.MeterResetId;
                                    _this.ResetMeterReadingOfTodayDFM = resetDFM.ResetMeterReadingOfToday;
                                    _this.mdlResetJumpReadingDFM = resetDFM.JumpReading;
                                    _this.ActionTypeDFM = (resetSFM.FlagReadingType == 'R') ? 'Reset' : 'Change';
                                    if (resetDFM.JumpCertificateReset != '-999' && resetDFM.JumpCertificateReset != '') {
                                        _this.imgDFM = resetDFM.JumpCertificateReset;
                                        _this.imgPathResetDFM = _this.glovalList.imgBaseUrl + resetDFM.JumpCertificateReset; //$rootScope.globalValues.imgBaseUrl + resetDFM.JumpCertificateReset;
                                        _this.mdlShowResetImageDFM = true;
                                    }
                                }
                        }
                        var resetEFM = _this.resetMeterJSON[0]; //$filter('filter')(resetMeterJSON, { MeterType: 'EFM' })[0];
                        if (resetEFM.MeterType == 'EFM') {
                            if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isUndefined"])(resetEFM))
                                if (resetEFM.ReadingOnSwitch == -999)
                                    _this.mdlShowResetReadingEFM = false;
                                else {
                                    _this.mdlShowResetReadingEFM = true;
                                    _this.mdlReadingOnSwitchEFM = resetEFM.ReadingOnSwitch;
                                    _this.meterResetIdEFM = resetEFM.MeterResetId;
                                    _this.ResetMeterReadingOfTodayEFM = resetEFM.ResetMeterReadingOfToday;
                                    _this.mdlResetJumpReadingEFM = resetEFM.JumpReading;
                                    _this.ActionTypeEFM = (resetSFM.FlagReadingType == 'R') ? 'Reset' : 'Change';
                                    if (resetEFM.JumpCertificateReset != '-999' && resetEFM.JumpCertificateReset != '') {
                                        _this.imgEFM = resetEFM.JumpCertificateReset;
                                        _this.imgPathResetEFM = _this.glovalList.imgBaseUrl + resetEFM.JumpCertificateReset; //$rootScope.globalValues.imgBaseUrl + resetEFM.JumpCertificateReset;
                                        _this.mdlShowResetImageEFM = true;
                                    }
                                }
                        }
                    }
                }
            }
            else {
                _this.commonServices.loadingDismiss();
                _this.commonServices.presentToast('There is no package available.');
                _this.IsPackagehide = true;
                _this.PKisCRSentToHo = 0;
                _this.PKisStationSubmitted = 0;
                console.log(_this.PKisCRSentToHo, "test");
                console.log(_this.PKisStationSubmitted, "test2");
                return false;
            }
        }, function (error) {
            _this.commonServices.presentToast("Something went wrong.");
            _this.commonServices.loadingDismiss();
        });
    };
    PackagePage.prototype.PackageCallOninit = function () {
        this.stationName = JSON.parse(localStorage.getItem("globalDetail"))[0].UserName;
        this.glovalList = this.commonServices.GlovalValues();
        var timeStats = this.getTimeStats();
        this.RunHrs = timeStats.hours;
        this.RunMin = timeStats.minutes;
        this.selectedRhHr = this.RunHrs[0];
        this.selectedRhMin = this.RunMin[0];
        this.SHrs = timeStats.hours;
        this.SMin = timeStats.minutes;
        this.selectedSHr = this.SHrs[0];
        this.selectedSMin = this.SMin[0];
        this.UsHrs = timeStats.hours;
        this.UsMin = timeStats.minutes;
        this.selectedUsHr = this.UsHrs[0];
        this.selectedUsMin = this.UsMin[0];
        this.BdHrs = timeStats.hours;
        this.BdMin = timeStats.minutes;
        this.selectedBdHr = this.BdHrs[0];
        this.selectedBdMin = this.BdMin[0];
        this.GetPackageDetail('-999');
    };
    PackagePage.prototype.upload = function (str) {
        this.uploadedfile = str.target.files[0];
        console.log(this.uploadedfile);
    };
    PackagePage.prototype.uploadJumpReadingImgSFM = function (str) {
        this.JumpfilesSFM = str.target.files[0];
        console.log(this.JumpfilesSFM);
    };
    PackagePage.prototype.uploadJumpReadingImgDFM = function (str) {
        this.JumpfilesDFM = str.target.files[0];
    };
    PackagePage.prototype.uploadJumpReadingImgEFM = function (str) {
        this.JumpfilesEFM = str.target.files[0];
    };
    // uploadJumpReadingImgSFMPopUp(str: any) {
    //   this.filesSFM = str.target.files[0];
    // }
    PackagePage.prototype.uploadJumpReadingImgSFMPopUp = function (file, event) {
        this.filesSFM = file.item(0);
        // this.filesSFM = event.target.files[0];
    };
    PackagePage.prototype.uploadJumpReadingImgDFMPopUp = function (file, event) {
        this.filesDFM = event.target.files[0];
    };
    PackagePage.prototype.uploadJumpReadingImgEFMPopUp = function (file, event) {
        this.filesEFM = event.target.files[0];
    };
    PackagePage.prototype.uploadJumpReadingImgVFMPopUp = function (file, event) {
        this.filesVFM = file.item(0);
    };
    PackagePage.prototype.InsertPackageInfo = function () {
        var _this = this;
        var hrsJson = {
            RunHrs: this.selectedRhHr,
            RunMins: this.selectedRhMin,
            SHrs: this.selectedSHr,
            SMins: this.selectedSMin,
            UsHrs: this.selectedUsHr,
            UsMins: this.selectedUsMin,
            BdHrs: this.selectedBdHr,
            BdMin: this.selectedBdMin
        };
        var pkgRemark = ((this.mdlSelectedRemark == 'Other') ? this.mdlRemark : this.mdlSelectedRemark);
        var remarkJson = {
            otherSelected: this.mdlSelectedRemark,
            pkgRemark: pkgRemark
        };
        var getAllFData = this.getPackageFD(this.PackageDetailJson, this.globalDetail, this.SelectedPkgId.PkgId, hrsJson, remarkJson);
        console.log(getAllFData, "getAllFData");
        getAllFData.PromptErrorS = '';
        getAllFData.PromptErrorD = '';
        getAllFData.PromptErrorE = '';
        if (getAllFData.Error != '') {
            this.commonServices.presentToast(getAllFData.Error);
            return false;
        }
        if (getAllFData.PromptErrorS != "") {
            this.errorS = true;
            this.commonServices.alertMessage("Confirm", getAllFData.PromptErrorS).then(function (res) {
                console.log(res);
                if (res) {
                    // this.errorS = false;
                    return false;
                }
                else {
                    _this.errorS = false;
                    // getAllFData.PromptErrorS == "";
                    var jumpReading = _this.PackageDetailJson[0].JumpReadingSFM;
                    if (jumpReading == '' && parseFloat(jumpReading) == 0) {
                        _this.commonServices.presentToast('Please enter the jump reading for Suction Flow Meter.');
                        return false;
                    }
                    _this.geterrorCode(getAllFData);
                }
            });
            // if (confirm(getAllFData.PromptErrorS) == false) {
            //   console.log(confirm(getAllFData.PromptErrorS));
            //   return false;
            // }
            // else {
            //   var jumpReading = this.PackageDetailJson[0].JumpReadingSFM;
            //   if (jumpReading == '' && parseFloat(jumpReading) == 0) {
            //     this.commonServices.presentToast('Please enter the jump reading for Suction Flow Meter.');
            //     return false;
            //   }
            // }
        }
        if (getAllFData.PromptErrorD != "") {
            this.errorD = true;
            this.commonServices.alertMessage("Confirm", getAllFData.PromptErrorD).then(function (res) {
                console.log(res);
                if (res) {
                    // this.errorD = false;
                    return false;
                }
                else {
                    _this.errorD = false;
                    var jumpReading = _this.PackageDetailJson[0].JumpReadingDFM;
                    if (jumpReading == '' && parseFloat(jumpReading) == 0) {
                        _this.commonServices.presentToast('Please enter the jump reading for Discharge Flow Meter.');
                        return false;
                    }
                    _this.geterrorCode(getAllFData);
                }
            });
            // if (confirm(getAllFData.PromptErrorD) == false) {
            //   return false;
            // }
            // else {
            //   var jumpReading = this.PackageDetailJson[0].JumpReadingDFM;
            //   if (jumpReading == '' && parseFloat(jumpReading) == 0) {
            //     this.commonServices.presentToast('Please enter the jump reading for Discharge Flow Meter.');
            //     return false;
            //   }
            // }
        }
        if (getAllFData.PromptErrorE != "") {
            this.errorE = true;
            this.commonServices.alertMessage("Confirm", getAllFData.PromptErrorE).then(function (res) {
                console.log(res);
                if (res) {
                    // this.errorE = false;
                    return false;
                }
                else {
                    _this.errorE = false;
                    var jumpReading = _this.PackageDetailJson[0].JumpReadingEFM;
                    if (jumpReading == '' && parseFloat(jumpReading) == 0) {
                        _this.commonServices.presentToast('Please enter the jump reading for Engine Flow Meter.');
                        return false;
                    }
                    _this.geterrorCode(getAllFData);
                }
            });
            // if (confirm(getAllFData.PromptErrorE) == false) {
            //   return false;
            // }
            // else {
            //   var jumpReading = this.PackageDetailJson[0].JumpReadingEFM;
            //   if (jumpReading == '' && parseFloat(jumpReading) == 0) {
            //     this.commonServices.presentToast('Please enter the jump reading for Engine Flow Meter.');
            //     return false;
            //   }
            // }
        }
        // if(getAllFData.PromptErrorS == '' && getAllFData.PromptErrorE =='' && getAllFData.PromptErrorD == '') {
        // setTimeout(function () {
        if (this.errorD == false && this.errorE == false && this.errorS == false) {
            this.commonServices.loadingPresent();
            var BoundJson = this.PackageDetailJson;
            this.commonServices.InsertPackageInfo(getAllFData.frmData).subscribe(function (resp) {
                var data = resp;
                //this.commonServices.loadingDismiss();
                _this.JumpfilesSFM = $('#JumpCertificateSFM');
                _this.JumpfilesDFM = $('#JumpCertificateDFM');
                _this.JumpfilesEFM = $('#JumpCertificateEFM');
                var JumpfileInputSFM = _this.filesSFM;
                var JumpfileInputDFM = _this.filesDFM;
                var JumpfileInputEFM = _this.filesEFM;
                $('#JumpCertificateSFM').val(null);
                $('#JumpCertificateDFM').val(null);
                $('#JumpCertificateEFM').val(null);
                _this.commonServices.presentToast(data.Status); //success, file uploaded
                //   this.commonServices.alertMessage("Confirm",
                //   data.Status).then((res: any) => {
                //   console.log(res);
                //   if (res) {
                //     return false;
                //   } else {
                //    return false;
                //   }
                // });
                if (data.Status.indexOf('successfully') > -1) {
                    var MyJson = {
                        StationCode: _this.StationCode,
                        LoginID: _this.LoginId,
                        PackageId: ((Object(util__WEBPACK_IMPORTED_MODULE_6__["isUndefined"])(_this.SelectedPkgId.PkgId) == true || _this.SelectedPkgId.PkgId == '') ? '-999' : _this.SelectedPkgId.PkgId)
                    };
                    _this.GetPackageDetail(MyJson);
                }
                _this.commonServices.loadingDismiss();
            }, function (error) {
                _this.commonServices.presentToast("Something went wrong.");
                _this.commonServices.loadingDismiss();
            });
        }
        // }, 1000
        // )
    };
    PackagePage.prototype.geterrorCode = function (getAllFData) {
        var _this = this;
        if (this.errorD == false && this.errorE == false && this.errorS == false) {
            this.commonServices.loadingPresent();
            var BoundJson = this.PackageDetailJson;
            this.commonServices.InsertPackageInfo(getAllFData.frmData).subscribe(function (resp) {
                var data = resp;
                //this.commonServices.loadingDismiss();
                _this.JumpfilesSFM = $('#JumpCertificateSFM');
                _this.JumpfilesDFM = $('#JumpCertificateDFM');
                _this.JumpfilesEFM = $('#JumpCertificateEFM');
                var JumpfileInputSFM = _this.filesSFM;
                var JumpfileInputDFM = _this.filesDFM;
                var JumpfileInputEFM = _this.filesEFM;
                $('#JumpCertificateSFM').val(null);
                $('#JumpCertificateDFM').val(null);
                $('#JumpCertificateEFM').val(null);
                _this.commonServices.presentToast(data.Status); //success, file uploaded
                //   this.commonServices.alertMessage("Confirm",
                //   data.Status).then((res: any) => {
                //   console.log(res);
                //   if (res) {
                //     return false;
                //   } else {
                //    return false;
                //   }
                // });
                if (data.Status.indexOf('successfully') > -1) {
                    var MyJson = {
                        StationCode: _this.StationCode,
                        LoginID: _this.LoginId,
                        PackageId: ((Object(util__WEBPACK_IMPORTED_MODULE_6__["isUndefined"])(_this.SelectedPkgId.PkgId) == true || _this.SelectedPkgId.PkgId == '') ? '-999' : _this.SelectedPkgId.PkgId)
                    };
                    _this.GetPackageDetail(MyJson);
                }
                _this.commonServices.loadingDismiss();
            }, function (error) {
                _this.commonServices.presentToast("Something went wrong.");
                _this.commonServices.loadingDismiss();
            });
        }
    };
    PackagePage.prototype.getPackageFD = function (pkgDetJson, GlobalDetail, SelectedPkgId, hrsJson, remarkJson) {
        var _this = this;
        var MyJson = {
            LoginId: this.LoginId,
            MeterSkidCode: this.MeterSkidCode,
            RunningHours: hrsJson.RunHrs + ":" + hrsJson.RunMins,
            ScheduleShutdownHours: hrsJson.SHrs + ":" + hrsJson.SMins,
            UnscheduledShutdownHours: hrsJson.UsHrs + ":" + hrsJson.UsMins,
            BreakdownHours: hrsJson.BdHrs + ":" + hrsJson.BdMin,
            SuctionFlowMeterReading: pkgDetJson[0].SuctionFlowMeterReading,
            JumpReadingSFM: ((pkgDetJson[0].JumpReadingSFM == '') ? '0' : pkgDetJson[0].JumpReadingSFM),
            JumpReadingSFMCount: pkgDetJson[0].JumpReadingSFMCount,
            JumpCertificateSFM: pkgDetJson[0].JumpCertificateSFM,
            DischargeFlowMeterReading: pkgDetJson[0].DischargeFlowMeterReading,
            JumpReadingDFM: ((pkgDetJson[0].JumpReadingDFM == '') ? '0' : pkgDetJson[0].JumpReadingDFM),
            JumpReadingDFMCount: pkgDetJson[0].JumpReadingDFMCount,
            JumpCertificateDFM: pkgDetJson[0].JumpCertificateDFM,
            EngineFlowMeterReading: ((pkgDetJson[0].EngineFlowMeterReading == '') ? '0' : pkgDetJson[0].EngineFlowMeterReading),
            JumpReadingEFM: ((pkgDetJson[0].JumpReadingEFM == '') ? '0' : pkgDetJson[0].JumpReadingEFM),
            JumpReadingEFMCount: pkgDetJson[0].JumpReadingEFMCount,
            JumpCertificateEFM: pkgDetJson[0].JumpCertificateEFM,
            SuctionPressure: pkgDetJson[0].SuctionPressure,
            MotorFrequency: pkgDetJson[0].MotorFrequency,
            Remark: remarkJson.pkgRemark,
            StationCode: this.StationCode,
            FilePath: localStorage.getItem('LoginId') + "/Package/",
            PackageId: SelectedPkgId,
            DPREntryDate: this.geteDate.selcteddate,
            // VentFlowMeterReading: pkgDetJson[0].VentFlowMeterReading
            VentFlowMeterReading: (pkgDetJson[0].VentFlowMeterReading == "" || Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(pkgDetJson[0].VentFlowMeterReading)) ? "0.00" : pkgDetJson[0].VentFlowMeterReading
        };
        //  this.JumpfilesSFM = $('#JumpCertificateSFM');
        //  this.JumpfilesDFM = $('#JumpCertificateDFM');
        //  this.JumpfilesEFM = $('#JumpCertificateEFM');
        var fileInputSFM = this.JumpfilesSFM;
        var fileInputEFM = this.JumpfilesEFM;
        var fileInputDFM = this.JumpfilesDFM;
        if (pkgDetJson[0].JumpReadingSFM == '' || pkgDetJson[0].JumpReadingSFM == 0)
            $('#JumpCertificateSFM').val(null); //angular.element(fileInputSFM).val(null);
        if (pkgDetJson[0].JumpReadingDFM == '' || pkgDetJson[0].JumpReadingDFM == 0)
            $('#JumpCertificateDFM').val(null); //angular.element(fileInputDFM).val(null);
        if (pkgDetJson[0].JumpReadingEFM == '' || pkgDetJson[0].JumpReadingEFM == 0)
            $('#JumpCertificateEFM').val(null); //angular.element(fileInputEFM).val(null);
        //do nothing if there's no files
        //if (fileInput.files.length === 0) return;
        var formData = new FormData();
        if (this.JumpfilesSFM != undefined) {
            formData.append("JumpCertificateSFM", this.JumpfilesSFM[0]);
        }
        // if (this.JumpfilesSFM.size > 0) {
        //     for (var i in this.JumpfilesSFM) {
        //         formData.append("JumpCertificateSFM", this.JumpfilesSFM[i]);
        //     }   
        // }  
        //formData.append("JumpCertificateSFM", fileInputSFM.files[0]);
        if (this.JumpfilesDFM != undefined) {
            formData.append("JumpCertificateDFM", this.JumpfilesDFM[0]);
        }
        // if (fileInputEFM.files.length > 0) {
        //     for (var i in fileInputEFM.files) {
        //         formData.append("JumpCertificateEFM", fileInputEFM.files[i]);
        //     }
        // }
        //formData.append("JumpCertificateEFM", fileInputEFM.files[0]);
        if (this.JumpfilesEFM != undefined) {
            formData.append("JumpCertificateEFM", this.JumpfilesEFM[0]);
        }
        // if (fileInputDFM.files.length > 0) {
        //     for (var i in fileInputDFM.files) {
        //         formData.append("JumpCertificateDFM", fileInputDFM.files[i]);
        //     }
        // }
        //formData.append("JumpCertificateDFM", fileInputDFM.files[0]);
        this.commonServices.postwithservice("PackagesAverage", { LoginId: localStorage.getItem('LoginId'),
            DPREntryDate: this.dp.transform(this.geteDate.selcteddate, 'dd/MMM/yyyy') }).subscribe(function (resp) {
            var data = JSON.parse(resp).Table[0];
            _this.SuctionFlowReadingAverage = data.FinalSuctionFlow;
            _this.DischargeFlowReadingAverage = data.FinalDischargeFlow;
            _this.EngineFlowReadingAverage = data.FinalEngineFlow;
            console.log(_this.SuctionFlowReadingAverage, ",", _this.DischargeFlowReadingAverage, ",", _this.EngineFlowReadingAverage);
        }, function (error) {
            console.log(error);
            _this.commonServices.presentToast("Something went wrong.");
            _this.commonServices.loadingDismiss();
        });
        formData.append("packageDetail", JSON.stringify(MyJson));
        //Validate Form
        var ErrorMsg = '', PromptErrorS = '', PromptErrorE = '', PromptErrorD = '', self = this;
        ErrorMsg = this.getError(pkgDetJson, fileInputEFM == null ? fileInputEFM : fileInputEFM[0], fileInputDFM == null ? fileInputEFM : fileInputDFM[0], fileInputSFM == null ? fileInputSFM : fileInputSFM[0], hrsJson, remarkJson);
        if (parseFloat(pkgDetJson[0].SuctionFlowMeterReading) <= parseFloat(pkgDetJson[0].SuctionFlowMeterReadingPrv))
            PromptErrorS = 'Suspected Suction Flow Meter Reading, Do you want to continue?';
        if (parseFloat(pkgDetJson[0].DischargeFlowMeterReading) <= parseFloat(pkgDetJson[0].DischargeFlowMeterReadingPrv))
            PromptErrorD = 'Suspected Discharge Flow Meter Reading, Do you want to continue?';
        if (pkgDetJson[0].PrimeMover == 'M' && parseFloat(pkgDetJson[0].EngineFlowMeterReading) <= parseFloat(pkgDetJson[0].EngineFlowMeterReadingPrv))
            PromptErrorE = 'Suspected Engine Flow Meter Reading, Do you want to continue?';
        console.log(pkgDetJson[0].SuctionFlowMeterReading, ",", this.SuctionFlowReadingAverage);
        if (pkgDetJson[0].SuctionFlowMeterReading > this.SuctionFlowReadingAverage && Number(this.SuctionFlowReadingAverage) != 0)
            PromptErrorS = 'Wrong Entry for Suction Flow Meter Reading, Do you want to continue?';
        else if (parseFloat(pkgDetJson[0].SuctionFlowMeterReading) >= 2 * parseFloat(pkgDetJson[0].SuctionFlowMeterReadingPrv))
            PromptErrorS = 'Suspected Suction Flow Meter Reading, Do you want to continue?';
        if (pkgDetJson[0].DischargeFlowMeterReading > this.DischargeFlowReadingAverage && Number(this.DischargeFlowReadingAverage) != 0)
            PromptErrorD = 'Wrong Entry for Discharge Flow Meter Reading, Do you want to continue?';
        else if (parseFloat(pkgDetJson[0].DischargeFlowMeterReading) >= 2 * parseFloat(pkgDetJson[0].DischargeFlowMeterReadingPrv))
            PromptErrorD = 'Suspected Discharge Flow Meter Reading, Do you want to continue?';
        if (pkgDetJson[0].PrimeMover == 'M' && pkgDetJson[0].EngineFlowMeterReading > this.EngineFlowReadingAverage && Number(this.EngineFlowReadingAverage) != 0)
            PromptErrorE = 'Wrong Entry for Engine Flow Meter Reading, Do you want to continue?';
        else if (pkgDetJson[0].PrimeMover == 'M' && parseFloat(pkgDetJson[0].EngineFlowMeterReading) >= 2 * parseFloat(pkgDetJson[0].EngineFlowMeterReadingPrv))
            PromptErrorE = 'Suspected Engine Flow Meter Reading, Do you want to continue?';
        if (pkgDetJson[0].PrimeMover != 'M' && pkgDetJson[0].EngineFlowMeterReading > this.EngineFlowReadingAverage && Number(this.EngineFlowReadingAverage) != 0)
            PromptErrorE = 'Wrong Entry for Engine Flow Meter Reading, Do you want to continue?';
        else if (pkgDetJson[0].PrimeMover != 'M' && parseFloat(pkgDetJson[0].EngineFlowMeterReading) >= 2 * parseFloat(pkgDetJson[0].EngineFlowMeterReadingPrv))
            PromptErrorE = 'Suspected Engine Flow Meter Reading, Do you want to continue?';
        if (pkgDetJson[0].PrimeMover == 'M' && pkgDetJson[0].EngineFlowMeterReading > this.EngineFlowReadingAverage && Number(this.EngineFlowReadingAverage) != 0)
            PromptErrorE = 'Wrong Entry for Motor Flow Meter Reading, Do you want to continue?';
        else if (pkgDetJson[0].PrimeMover == 'M' && parseFloat(pkgDetJson[0].EngineFlowMeterReading) >= 2 * parseFloat(pkgDetJson[0].EngineFlowMeterReadingPrv))
            PromptErrorE = 'Suspected Motor Flow Meter Reading, Do you want to continue?';
        // if (parseFloat(pkgDetJson[0].SuctionFlowMeterReading) <= parseFloat(pkgDetJson[0].SuctionFlowMeterReadingPrv))
        //   PromptErrorS = 'Suspected Suction Flow Meter Reading, Do you want to continue?';
        // if (parseFloat(pkgDetJson[0].DischargeFlowMeterReading) <= parseFloat(pkgDetJson[0].DischargeFlowMeterReadingPrv))
        //   PromptErrorD = 'Suspected Discharge Flow Meter Reading, Do you want to continue?';
        // if (pkgDetJson[0].PrimeMover == 'E' && parseFloat(pkgDetJson[0].EngineFlowMeterReading) <= parseFloat(pkgDetJson[0].EngineFlowMeterReadingPrv))
        //   PromptErrorE = 'Suspected Engine Flow Meter Reading, Do you want to continue?';
        //   console.log(pkgDetJson[0].SuctionFlowMeterReading,",", this.SuctionFlowReadingAverage);
        //   if (pkgDetJson[0].SuctionFlowMeterReading > this.SuctionFlowReadingAverage)
        //       PromptErrorS = 'Wrong Entry for Suction Flow Meter Reading, Do you want to continue?';
        // if (parseFloat(pkgDetJson[0].SuctionFlowMeterReading) >= 2 * parseFloat(pkgDetJson[0].SuctionFlowMeterReadingPrv))
        //   PromptErrorS = 'Suspected Suction Flow Meter Reading, Do you want to continue?';
        // if (parseFloat(pkgDetJson[0].DischargeFlowMeterReading) >= 2 * parseFloat(pkgDetJson[0].DischargeFlowMeterReadingPrv))
        //   PromptErrorD = 'Suspected Discharge Flow Meter Reading, Do you want to continue?';
        // if (pkgDetJson[0].PrimeMover == 'E' && parseFloat(pkgDetJson[0].EngineFlowMeterReading) >= 2 * parseFloat(pkgDetJson[0].EngineFlowMeterReadingPrv))
        //   PromptErrorE = 'Suspected Engine Flow Meter Reading, Do you want to continue?';
        return {
            Error: ErrorMsg,
            PromptErrorS: PromptErrorS,
            PromptErrorD: PromptErrorD,
            PromptErrorE: PromptErrorE,
            frmData: formData
        };
    };
    PackagePage.prototype.getError = function (pkgDetJson, fileInputEFM, fileInputDFM, fileInputSFM, hrsJson, remarkJson) {
        var regexNumeric = /^[+-]?[0-9]{1,1000}(?:\.[0-9]{1,1000})?$/;
        var foundError = '';
        var SFMRead = pkgDetJson[0].SuctionFlowMeterReading;
        var DFMRead = pkgDetJson[0].DischargeFlowMeterReading;
        var EFMRead = pkgDetJson[0].EngineFlowMeterReading;
        var MotorFrequency = pkgDetJson[0].MotorFrequency;
        if (SFMRead == "" || Object(util__WEBPACK_IMPORTED_MODULE_6__["isUndefined"])(SFMRead)) {
            foundError = 'Suction Flow Meter Reading is required.';
            return foundError;
        }
        // if ((pkgDetJson[0].JumpReadingSFM == '' || 
        // pkgDetJson[0].JumpReadingSFM == undefined ||
        //  parseFloat(pkgDetJson[0].JumpReadingSFM) == parseFloat("0"))
        //   && parseFloat(SFMRead) == parseFloat("0")) {
        //   foundError = 'Invalid Suction Flow Meter Reading';
        //   return foundError;
        // }
        if (SFMRead != "") {
            if (regexNumeric.test(SFMRead) == false) {
                foundError = 'Only numeric value allowed for reading.';
                return foundError;
            }
            if (parseFloat(SFMRead) < 0) {
                foundError = 'Suction Flow Meter Reading must be Positive.';
                return foundError;
            }
        }
        // New Comment//
        // var JumpSFMCnt = pkgDetJson[0].JumpReadingSFMCount;
        // if (pkgDetJson[0].JumpReadingSFM != '') {
        //   //if (parseFloat(pkgDetJson[0].JumpReadingSFM) > 0 && fileInputSFM.files.length == 0 && pkgDetJson[0].JumpCertificateSFM == '') {
        //   //    foundError = 'Please attach the Jump certificate for SFM Reading.';
        //   //    return foundError;
        //   //}
        //   if (!isUndefined(fileInputSFM)) {
        //     if (fileInputSFM.size > 0) {         //fileInputSFM.files.length
        //       var validExtension = 'jpeg,jpg,png,gif';
        //       //for (var i = 0; i < fileInputSFM.size; i++) {
        //       var fileExtension = fileInputSFM.name.split('.')[1]; //fileInputSFM[i].name.split('.')[1];
        //       if (validExtension.indexOf(fileExtension) < 0 && !isUndefined(fileExtension)) {
        //         foundError = 'Attachment allowed (SFM) only for [' + validExtension + '].';
        //         return foundError;
        //       }
        //       // }
        //     }
        //   }
        //   if (regexNumeric.test(pkgDetJson[0].JumpReadingSFM) == false) {
        //     foundError = 'Only numeric value allowed for reading.';
        //     return foundError;
        //   }
        // }
        // if (JumpSFMCnt != '' && parseFloat(JumpSFMCnt) != 0 && isUndefined(JumpSFMCnt) == false) {
        //   if (regexNumeric.test(JumpSFMCnt) == false) {
        //     foundError = 'Only numeric value allowed for SFM Jump reading count.';
        //     return foundError;
        //   }
        //   if (JumpSFMCnt.indexOf('.') > -1) {
        //     foundError = 'Decimal value not allowed for SFM Jump reading count.';
        //     return foundError;
        //   }
        //   if (parseFloat(JumpSFMCnt) < 0) {
        //     foundError = 'SFM Jump Reading count must be Positive.';
        //     return foundError;
        //   }
        //   if (pkgDetJson[0].JumpReadingSFM == "" || isUndefined(pkgDetJson[0].JumpReadingSFM)) {
        //     foundError = 'Please enter the SFM Jump reading.';
        //     return foundError;
        //   }
        //   if (pkgDetJson[0].JumpReadingSFM == "" || parseFloat(pkgDetJson[0].JumpReadingSFM) == 0) {
        //     foundError = 'Plese enter the Jump Reading';
        //     return foundError;
        //   }
        // }
        // else {
        //   if (pkgDetJson[0].JumpReadingSFM != '' && parseFloat(pkgDetJson[0].JumpReadingSFM) != 0) {
        //     foundError = 'Plese enter the SFM Jump Reading count.';
        //     return foundError;
        //   }
        // }
        if (pkgDetJson[0].PrimeMover != 'M' && EFMRead == "") {
            foundError = 'Engine Flow Meter Reading is required.';
            return foundError;
        }
        if (pkgDetJson[0].PrimeMover == 'M' && EFMRead == "") {
            foundError = 'Motor Flow Meter Reading is required.';
            return foundError;
        }
        if (pkgDetJson[0].PrimeMover != 'M' && (pkgDetJson[0].JumpReadingEFM == '' || pkgDetJson[0].JumpReadingEFM == undefined || parseFloat(pkgDetJson[0].JumpReadingEFM) == parseFloat("0")) && parseFloat(EFMRead) == parseFloat("0")) {
            foundError = 'Invalid Engine Flow Meter Reading';
            return foundError;
        }
        if (pkgDetJson[0].PrimeMover == 'M' && (pkgDetJson[0].JumpReadingEFM == '' || pkgDetJson[0].JumpReadingEFM == undefined || parseFloat(pkgDetJson[0].JumpReadingEFM) == parseFloat("0")) && parseFloat(EFMRead) == parseFloat("0")) {
            foundError = 'Invalid Motor Flow Meter Reading';
            return foundError;
        }
        if ((pkgDetJson[0].PrimeMover != 'M' || pkgDetJson[0].PrimeMover == 'M') && EFMRead != "")
            if (regexNumeric.test(EFMRead) == false) {
                foundError = 'Only numeric value allowed for reading.';
                return foundError;
            }
        //New Commmnet//
        // var JumpEFMCnt = pkgDetJson[0].JumpReadingEFMCount;
        // if (pkgDetJson[0].JumpReadingEFM != '') {
        //   //if (parseFloat(pkgDetJson[0].JumpReadingEFM) > 0 && fileInputEFM.files.length == 0 && pkgDetJson[0].JumpCertificateEFM == '') {
        //   //    foundError = 'Please attach the Jump certificate for EFM Reading.';
        //   //    return foundError;
        //   //}
        //   if (!isUndefined(fileInputEFM)) {
        //     if (fileInputEFM.size > 0) { //fileInputEFM.files.length
        //       var validExtension = 'jpeg,jpg,png,gif';
        //       //for (var i = 0; i < fileInputEFM.files.length; i++) {
        //       var fileExtension = fileInputEFM.name.split('.')[1];//fileInputEFM.files[i].name.split('.')[1];
        //       if (validExtension.indexOf(fileExtension) < 0 && !isUndefined(fileExtension)) {
        //         foundError = 'Attachment (EFM) allowed only for [' + validExtension + '].';
        //         return foundError;
        //       }
        //       ///}
        //     }
        //   }
        //   if (regexNumeric.test(pkgDetJson[0].JumpReadingEFM) == false) {
        //     foundError = 'Only numeric value allowed for reading.';
        //     return foundError;
        //   }
        // }
        // if (JumpEFMCnt != '' && parseFloat(JumpEFMCnt) != 0 && isUndefined(JumpEFMCnt) == false) {
        //   if (regexNumeric.test(JumpEFMCnt) == false) {
        //     foundError = 'Only numeric value allowed for EFM Jump reading count.';
        //     return foundError;
        //   }
        //   if (JumpEFMCnt.indexOf('.') > -1) {
        //     foundError = 'Decimal value not allowed for EFM Jump reading count.';
        //     return foundError;
        //   }
        //   if (parseFloat(JumpEFMCnt) < 0) {
        //     foundError = 'EFM Jump reading count must be Positive.';
        //     return foundError;
        //   }
        //   if (pkgDetJson[0].JumpReadingEFM == '' || isUndefined(pkgDetJson[0].JumpReadingEFM)) {
        //     foundError = 'Please enter the EFM Jump reading.';
        //     return foundError;
        //   }
        //   if (pkgDetJson[0].JumpReadingEFM == '' || parseFloat(pkgDetJson[0].JumpReadingEFM) == 0) {
        //     foundError = 'Plese enter the Jump Reading';
        //     return foundError;
        //   }
        // }
        // else {
        //   if (pkgDetJson[0].JumpReadingEFM != '' && parseFloat(pkgDetJson[0].JumpReadingEFM) != 0) {
        //     foundError = 'Plese enter the EFM Jump Reading count.';
        //     return foundError;
        //   }
        // }
        //New//
        if (this.IsVentFlow == true) {
            if (pkgDetJson[0].VentFlowMeterReading == '' && parseFloat(pkgDetJson[0].VentFlowMeterReading) == 0
                || Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(pkgDetJson[0].VentFlowMeterReading)) {
                foundError = 'Please enter the Vent Flow Meter Reading.';
                return foundError;
            }
        }
        if (DFMRead == "" || Object(util__WEBPACK_IMPORTED_MODULE_6__["isUndefined"])(DFMRead)) {
            foundError = 'Discharge Flow Meter Reading is required.';
            return foundError;
        }
        if ((pkgDetJson[0].JumpReadingDFM == '' || pkgDetJson[0].JumpReadingDFM == undefined
            || parseFloat(pkgDetJson[0].JumpReadingDFM) == parseFloat("0")) && parseFloat(DFMRead) == parseFloat("0")) {
            foundError = 'Invalid Discharge Flow Meter Reading';
            return foundError;
        }
        if (DFMRead != "") {
            if (regexNumeric.test(DFMRead) == false) {
                foundError = 'Only numeric value allowed for DFM reading.';
                return foundError;
            }
            if (parseFloat(DFMRead) < 0) {
                foundError = 'Discharge Flow Meter Reading must be Positive.';
                return foundError;
            }
        }
        if ((this.MotorFrequency == "" || Object(util__WEBPACK_IMPORTED_MODULE_6__["isUndefined"])(MotorFrequency)) && (this.PackageDetailJson[0].PrimeMover == 'M')) {
            foundError = 'Motor Frequencty is required.';
            return foundError;
        }
        if ((MotorFrequency != "") && (this.PackageDetailJson[0].PrimeMover == 'M')) {
            if (regexNumeric.test(MotorFrequency) == false) {
                foundError = 'Only numeric value allowed for Frequency.';
                return foundError;
            }
            if ((parseFloat(MotorFrequency) < 0) && (this.PackageDetailJson[0].PrimeMover == 'M')) {
                foundError = 'Motor Frequencty must be Positive.';
                return foundError;
            }
        }
        //New Commmnet//
        // var JumpDFMCnt = pkgDetJson[0].JumpReadingDFMCount;
        // if (pkgDetJson[0].JumpReadingDFM != '') {
        //   //if (parseFloat(pkgDetJson[0].JumpReadingDFM) > 0 && fileInputDFM.files.length == 0 && pkgDetJson[0].JumpCertificateDFM == '') {
        //   //    foundError = 'Please attach the Jump certificate for DFM Reading.';
        //   //    return foundError;
        //   //}
        //   if (!isUndefined(fileInputDFM)) {
        //     if (fileInputDFM.size > 0) { //fileInputDFM.files.length
        //       var validExtension = 'jpeg,jpg,png,gif';
        //       //for (var i = 0; i < fileInputDFM.files.length; i++) {
        //       var fileExtension = fileInputDFM.name.split('.')[1];//fileInputDFM.files[i].name.split('.')[1];
        //       if (validExtension.indexOf(fileExtension) < 0 && !isUndefined(fileExtension)) {
        //         foundError = 'Attachment (DFM) allowed only for [' + validExtension + '].';
        //         return foundError;
        //       }
        //       //}
        //     }
        //   }
        //   if (regexNumeric.test(pkgDetJson[0].JumpReadingDFM) == false) {
        //     foundError = 'Only numeric value allowed for DFM reading.';
        //     return foundError;
        //   }
        // }
        // if (JumpDFMCnt != '' && parseFloat(JumpDFMCnt) != 0 && isUndefined(JumpDFMCnt) == false) {
        //   if (regexNumeric.test(JumpDFMCnt) == false) {
        //     foundError = 'Only numeric value allowed for DFM Jump reading count.';
        //     return foundError;
        //   }
        //   if (JumpDFMCnt.indexOf('.') > -1) {
        //     foundError = 'Decimal value not allowed for DFM Jump reading count.';
        //     return foundError;
        //   }
        //   if (parseFloat(JumpDFMCnt) < 0) {
        //     foundError = 'DFM Jump reading count must be Positive.';
        //     return foundError;
        //   }
        //   if (pkgDetJson[0].JumpReadingDFM == '' || isUndefined(pkgDetJson[0].JumpReadingDFM)) {
        //     foundError = 'Please enter the DFM Jump reading.';
        //     return foundError;
        //   }
        //   if (pkgDetJson[0].JumpReadingDFM == '' || parseFloat(pkgDetJson[0].JumpReadingDFM) == 0) {
        //     foundError = 'Plese enter the Jump Reading';
        //     return foundError;
        //   }
        // }
        // else {
        //   if (pkgDetJson[0].JumpReadingDFM != '' && parseFloat(pkgDetJson[0].JumpReadingDFM) != 0) {
        //     foundError = 'Plese enter the DFM Jump Reading count.';
        //     return foundError;
        //   }
        // }
        var TotalOtherHrs = parseInt(hrsJson.BdHrs) + parseInt(hrsJson.SHrs) + parseInt(hrsJson.UsHrs);
        var TotalOtherMins = parseInt(hrsJson.BdMin) + parseInt(hrsJson.SMins) + parseInt(hrsJson.UsMins);
        var accurateOtherMinsQuotient = Math.floor(TotalOtherMins / 60); //this will be Hours from total minutes other than Running Hours
        TotalOtherHrs = TotalOtherHrs + accurateOtherMinsQuotient; //this will be minutes other than Running Minutes
        //if (hrsJson.RunHrs.hrs + ":" + hrsJson.BdMin.min == '00:00' && TotalOtherHrs < 24) {
        //    foundError = 'Running hours are required.';
        //    return foundError;
        //}
        var TotalHrs = parseInt(hrsJson.RunHrs) + parseInt(hrsJson.BdHrs) + parseInt(hrsJson.SHrs) + parseInt(hrsJson.UsHrs);
        var TotalMins = parseInt(hrsJson.RunMins) + parseInt(hrsJson.BdMin) + parseInt(hrsJson.SMins) + parseInt(hrsJson.UsMins);
        var accurateMinsQuotient = Math.floor(TotalMins / 60); //this will be Hours from total minutes
        var remaiingMins = Math.floor(TotalMins % 60); //this will be minutes
        TotalHrs = TotalHrs + accurateMinsQuotient;
        if ((TotalHrs == 24 && remaiingMins > 0) || (TotalHrs > 24)) {
            foundError = 'Total Hours must be less/equal than 24.';
            return foundError;
        }
        if (pkgDetJson[0].SuctionPressure == '' || Object(util__WEBPACK_IMPORTED_MODULE_6__["isUndefined"])(pkgDetJson[0].SuctionPressure)) {
            foundError = 'Suction pressure is required.';
            return foundError;
        }
        if (pkgDetJson[0].SuctionPressure != "") {
            if (regexNumeric.test(pkgDetJson[0].SuctionPressure) == false) {
                foundError = 'Only numeric value allowed for SuctionPressure.';
                return foundError;
            }
            if (parseFloat(pkgDetJson[0].SuctionPressure) < 0) {
                foundError = 'Suction Pressure must be Positive.';
                return foundError;
            }
        }
        if (remarkJson.otherSelected == 'Other' && (Object(util__WEBPACK_IMPORTED_MODULE_6__["isUndefined"])(remarkJson.pkgRemark) || remarkJson.pkgRemark == '')) {
            foundError = 'Please enter the other remarks.';
            return foundError;
        }
        return foundError;
    };
    PackagePage.prototype.showHideRemark = function () {
        if (this.mdlSelectedRemark == 'Other')
            this.mdlRemarkTextShow = false;
        else
            this.mdlRemarkTextShow = true;
    };
    PackagePage.prototype.resetchange = function (value, flag) {
        this.resetTypeJsonSelected = value;
        console.log(this.resetTypeJsonSelected);
    };
    //  //Pop-Up file Attach//
    // HoldResetReading(flag) {
    //   var FlagReadingType = '', fileInput, file;
    //   var PrvReading, JumpReading, MeterResetId, ReadingOnSwitch;
    //   if (flag == 'SFM') {
    //     console.log(this.filesSFM);
    //     //fileInput = (this.filesSFM[0];//document.getElementById('jcMeterResetSFM');
    //     file = (isUndefined(this.filesSFM)) ? null : this.filesSFM[0];//fileInput.files[0];
    //     this.resetTypeOptionSFM;
    //     var jsonValidation = {
    //       ActionType: this.ActionTypeSFM,
    //       oldMeterReading: this.mdlReadingOnSwitchSFM,
    //       oldJumpReading: this.mdlResetJumpReadingSFM,
    //       fileObject: file
    //     };
    //     var retJson = this.validationMeterReset(jsonValidation);
    //     if (retJson.errorMsg != '') {
    //       this.commonServices.presentToast(retJson.errorMsg);
    //       return false;
    //     };
    //     FlagReadingType = (this.ActionTypeSFM == "Reset") ? 'R' : 'C';//this.resetTypeJsonSelectedSFM[0].Value;
    //     PrvReading = this.PackageDetailJson[0].SuctionFlowMeterReadingPrv;
    //     JumpReading = this.mdlResetJumpReadingSFM;
    //     MeterResetId = this.meterResetIdSFM;
    //     ReadingOnSwitch = this.mdlReadingOnSwitchSFM;
    //   }
    //   else if (flag == 'DFM') {
    //     //fileInput = this.filesDFM;//document.getElementById('jcMeterResetDFM');
    //     file = (isUndefined(this.filesDFM)) ? null : this.filesDFM[0];//fileInput.files[0];
    //     var jsonValidation = {
    //       ActionType: this.ActionTypeDFM,
    //       oldMeterReading: this.mdlReadingOnSwitchDFM,
    //       oldJumpReading: this.mdlResetJumpReadingDFM,
    //       fileObject: fileInput
    //     };
    //     var retJson = this.validationMeterReset(jsonValidation);
    //     if (retJson.errorMsg != '') {
    //       this.commonServices.presentToast(retJson.errorMsg);
    //       return false;
    //     };
    //     FlagReadingType = (this.ActionTypeDFM == "Reset") ? 'R' : 'C';//this.resetTypeJsonSelectedDFM.Value;
    //     PrvReading = this.PackageDetailJson[0].DischargeFlowMeterReadingPrv;
    //     JumpReading = this.mdlResetJumpReadingDFM;
    //     MeterResetId = this.meterResetIdDFM;
    //     ReadingOnSwitch = this.mdlReadingOnSwitchDFM;
    //   }
    //   else if (flag == 'EFM') {
    //     //fileInput = this.filesEFM[0];//document.getElementById('jcMeterResetEFM');
    //     file = (isUndefined(this.filesEFM)) ? null : this.filesDFM;//fileInput.files[0];
    //     var jsonValidation = {
    //       ActionType: this.ActionTypeEFM,
    //       oldMeterReading: this.mdlReadingOnSwitchEFM,
    //       oldJumpReading: this.mdlResetJumpReadingEFM,
    //       fileObject: file
    //     };
    //     var retJson = this.validationMeterReset(jsonValidation);
    //     if (retJson.errorMsg != '') {
    //       this.commonServices.presentToast(retJson.errorMsg);
    //       return false;
    //     };
    //     FlagReadingType = (this.ActionTypeEFM == "Reset") ? 'R' : 'C';//this.resetTypeJsonSelectedEFM.Value;
    //     PrvReading = this.PackageDetailJson[0].EngineFlowMeterReadingPrv;
    //     JumpReading = this.mdlResetJumpReadingEFM;
    //     MeterResetId = this.meterResetIdEFM;
    //     ReadingOnSwitch = this.mdlReadingOnSwitchEFM;
    //   }
    //   var globalDetail = JSON.parse(sessionStorage.getItem('globalDetail'));
    //   var sendJosn = {
    //     StationCode: this.StationCode,
    //     MeterOf: 'PKG',
    //     MeterOfId: this.PackageDetailJson[0].PackageId,
    //     MeterType: flag,
    //     FlagRead: 0,
    //     FlagReadingType: FlagReadingType,
    //     Id: MeterResetId,
    //     LoginId: this.LoginId,
    //     PrvReading: PrvReading,
    //     JumpReading: ((JumpReading == '') ? '0' : JumpReading),
    //     ReadingOnSwitch: ReadingOnSwitch,
    //     FilePath: localStorage.getItem('LoginId') + "/Package/"
    //   };
    //   var formData = new FormData();
    //   if (file != undefined || file != null) {
    //     formData.append("file", file);
    //   }
    //   // for (var i in fileInput.files)
    //   //     formData.append("file", fileInput.files[i]);
    //   formData.append("jsonDetail", JSON.stringify(sendJosn));
    //   // this.commonServices.loadingPresent();
    //   this.commonServices.FormpostwithService(formData).subscribe(
    //     (resp: any) => {
    //       // this.commonServices.loadingDismiss();
    //       const data = resp;
    //       if (flag == 'SFM') {
    //         this.mdlResetPopupSFM = false;
    //         this.mdlShowResetReadingSFM = true;
    //       }
    //       else if (flag == 'EFM') {
    //         this.mdlResetPopupEFM = false;
    //         this.mdlShowResetReadingEFM = true;
    //       }
    //       else if (flag == 'DFM') {
    //         this.mdlResetPopupDFM = false;
    //         this.mdlShowResetReadingDFM = true;
    //       }
    //       var MyJson = {
    //         StationCode: this.StationCode,
    //         LoginID: this.LoginId,
    //         PackageId: ((isUndefined(this.SelectedPkgId.PkgId) == true || this.SelectedPkgId.PkgId == '') ? '-999' : this.SelectedPkgId.PkgId)
    //       };
    //       this.commonServices.presentToast("Record saved Successfully.");
    //       this.GetPackageDetail(MyJson);
    //     },
    //     (error) => {
    //       this.commonServices.presentToast("Something went wrong.");
    //       // this.commonServices.loadingDismiss();
    //       //bummer
    //     }
    //   )
    // }
    // HoldResetReading(flag) {
    //   var FlagReadingType = '', fileInput, file;
    //   var PrvReading, JumpReading, MeterResetId, ReadingOnSwitch;
    //   if (flag == 'SFM') {
    //     console.log(this.filesSFM);
    //     //fileInput = (this.filesSFM[0];//document.getElementById('jcMeterResetSFM');
    //     file = (isUndefined(this.filesSFM)) ? null : this.filesSFM[0];//fileInput.files[0];
    //     this.resetTypeOptionSFM;
    //     var jsonValidation = {
    //       ActionType: this.ActionTypeSFM,
    //       oldMeterReading: this.mdlReadingOnSwitchSFM,
    //       oldJumpReading: this.mdlResetJumpReadingSFM,
    //       fileObject: file
    //     };
    //     var retJson = this.validationMeterReset(jsonValidation);
    //     if (retJson.errorMsg != '') {
    //       this.commonServices.presentToast(retJson.errorMsg);
    //       return false;
    //     };
    //     FlagReadingType = (this.ActionTypeSFM == "Reset") ? 'R' : (this.ActionTypeSFM == "Change") ? 'C' : 'J';//this.resetTypeJsonSelectedSFM[0].Value;
    //     PrvReading = this.PackageDetailJson[0].SuctionFlowMeterReadingPrv;
    //     JumpReading = this.mdlResetJumpReadingSFM;
    //     MeterResetId = this.meterResetIdSFM;
    //     ReadingOnSwitch = this.mdlReadingOnSwitchSFM;
    //     this.PackageOldReading = this.OldMeterReading;
    //   }
    //   else if (flag == 'DFM') {
    //     //fileInput = this.filesDFM;//document.getElementById('jcMeterResetDFM');
    //     file = (isUndefined(this.filesDFM)) ? null : this.filesDFM[0];//fileInput.files[0];
    //     var jsonValidation = {
    //       ActionType: this.ActionTypeDFM,
    //       oldMeterReading: this.mdlReadingOnSwitchDFM,
    //       oldJumpReading: this.mdlResetJumpReadingDFM,
    //       fileObject: fileInput
    //     };
    //     var retJson = this.validationMeterReset(jsonValidation);
    //     if (retJson.errorMsg != '') {
    //       this.commonServices.presentToast(retJson.errorMsg);
    //       return false;
    //     };
    //     FlagReadingType = (this.ActionTypeDFM == "Reset") ? 'R' : (this.ActionTypeDFM == "Change") ? 'C' : 'J';//this.resetTypeJsonSelectedDFM.Value;
    //     PrvReading = this.PackageDetailJson[0].DischargeFlowMeterReadingPrv;
    //     JumpReading = this.mdlResetJumpReadingDFM;
    //     MeterResetId = this.meterResetIdDFM;
    //     ReadingOnSwitch = this.mdlReadingOnSwitchDFM;
    //     this.PackageOldReading = this.mdlReadingOnSwitchDFM;
    //   }
    //   else if (flag == 'EFM') {
    //     //fileInput = this.filesEFM[0];//document.getElementById('jcMeterResetEFM');
    //     file = (isUndefined(this.filesEFM)) ? null : this.filesEFM[0];//fileInput.files[0];
    //     var jsonValidation = {
    //       ActionType: this.ActionTypeEFM,
    //       oldMeterReading: this.mdlReadingOnSwitchEFM,
    //       oldJumpReading: this.mdlResetJumpReadingEFM,
    //       fileObject: file
    //     };
    //     var retJson = this.validationMeterReset(jsonValidation);
    //     if (retJson.errorMsg != '') {
    //       this.commonServices.presentToast(retJson.errorMsg);
    //       return false;
    //     };
    //     FlagReadingType = (this.ActionTypeEFM == "Reset") ? 'R' : (this.ActionTypeEFM == "Change") ? 'C' : 'J';//this.resetTypeJsonSelectedSFM[0].Value;
    //     PrvReading = this.PackageDetailJson[0].EngineFlowMeterReadingPrv;
    //     JumpReading = this.mdlResetJumpReadingEFM;
    //     MeterResetId = this.meterResetIdEFM;
    //     ReadingOnSwitch = this.mdlReadingOnSwitchEFM;
    //     this.PackageOldReading = this.mdlReadingOnSwitchEFM;
    //   }
    //   var globalDetail = JSON.parse(sessionStorage.getItem('globalDetail'));
    //   var sendJosn = {
    //     StationCode: this.StationCode,
    //     MeterOf: 'PKG',
    //     MeterOfId: this.PackageDetailJson[0].PackageId,
    //     MeterType: flag,
    //     FlagRead: 0,
    //     FlagReadingType: FlagReadingType,
    //     Id: MeterResetId,
    //     LoginId: this.LoginId,
    //     PrvReading: this.PackageOldReading,
    //     JumpReading: ((JumpReading == '') ? '0' : JumpReading),
    //     ReadingOnSwitch: ReadingOnSwitch,
    //     FilePath: localStorage.getItem('LoginId') + "/Package/",
    //     MeterJumpRemark: this.MeterJumpRemark,
    //     JumpHistoryId: this.JumpHistoryId,
    //     MeterAfterJump: this.NewMeterReading,
    //     MeterBeforeJump: this.PackageOldReading
    //   };
    //   var formData = new FormData();
    //   if (file != undefined || file != null) {
    //     formData.append("file", file);
    //   }
    //   // for (var i in fileInput.files)
    //   //     formData.append("file", fileInput.files[i]);
    //   formData.append("jsonDetail", JSON.stringify(sendJosn));
    //   this.commonServices.loadingDismiss();
    //   this.commonServices.PackageHoldResetReading(formData).subscribe(
    //     (resp: any) => {
    //       this.commonServices.loadingDismiss();
    //       const data = resp;
    //       if (flag == 'SFM') {
    //         this.mdlResetPopupSFM = false;
    //         this.mdlShowResetReadingSFM = true;
    //       }
    //       else if (flag == 'EFM') {
    //         this.mdlResetPopupEFM = false;
    //         this.mdlShowResetReadingEFM = true;
    //       }
    //       else if (flag == 'DFM') {
    //         this.mdlResetPopupDFM = false;
    //         this.mdlShowResetReadingDFM = true;
    //       }
    //       var MyJson = {
    //         StationCode: this.StationCode,
    //         LoginID: this.LoginId,
    //         PackageId: ((isUndefined(this.SelectedPkgId.PkgId) == true || this.SelectedPkgId.PkgId == '') ? '-999' : this.SelectedPkgId.PkgId)
    //       };
    //       this.commonServices.presentToast("Record saved Successfully.");
    //       this.GetPackageDetail(MyJson);
    //     },
    //     (error) => {
    //       this.commonServices.presentToast("Something went wrong.");
    //       this.commonServices.loadingDismiss();
    //       //bummer
    //     }
    //   )
    //   this.getSFMJumpHistory('GET');
    //   this.getDFMJumpHistory('GET');
    //   this.getEFMJumpHistory('GET');
    // }
    // validationMeterReset(jsonValidation) {
    //   var regexNumeric = /^[+-]?[0-9]{1,1000}(?:\.[0-9]{1,1000})?$/;
    //   var jsonErrorMsg = { errorMsg: '' };
    //   if (isUndefined(jsonValidation.ActionType) || jsonValidation.ActionType == "--Select--" || jsonValidation.ActionType == "") {
    //     jsonErrorMsg = { errorMsg: 'Please select Action Type.' };
    //     return jsonErrorMsg;
    //   }
    //   if (isUndefined(jsonValidation.oldMeterReading) || jsonValidation.oldMeterReading == '') {
    //     jsonErrorMsg = { errorMsg: 'Please enter the Old Meter Reading.' };
    //     return jsonErrorMsg;
    //   }
    //   if (regexNumeric.test(jsonValidation.oldMeterReading) == false) {
    //     jsonErrorMsg = { errorMsg: 'Only numeric value allowed for reading.' };
    //     return jsonErrorMsg;
    //   }
    //   if (parseFloat(jsonValidation.oldMeterReading) < 0) {
    //     jsonErrorMsg = { errorMsg: 'Old Meter Reading must be Positive.' };
    //     return jsonErrorMsg;
    //   }
    //   if ((parseInt(jsonValidation.oldJumpReading) == 0 || jsonValidation.oldJumpReading == '') && !isUndefined(jsonValidation.fileObject) && (jsonValidation.fileObject != null) && (jsonValidation.fileObject.files.length > 0 || jsonValidation.formarJRImage == true)) {
    //     jsonErrorMsg = { errorMsg: 'Please enter the Jump Reading.' };
    //     return jsonErrorMsg;
    //   }
    //   if (regexNumeric.test(jsonValidation.oldJumpReading) == false) {
    //     jsonErrorMsg = { errorMsg: 'Only numeric value allowed for Jump reading.' };
    //     return jsonErrorMsg;
    //   }
    //   //if (!angular.isUndefined(jsonValidation.fileObject) && (jsonValidation.fileObject != null) && jsonValidation.fileObject.files.length > 0 && ((regexNumeric.test(jsonValidation.oldJumpReading) == false) || (parseFloat(jsonValidation.oldJumpReading) < 0))) {
    //   //    jsonErrorMsg = { errorMsg: 'Jump Reading must be Positive.' };
    //   //    return jsonErrorMsg;
    //   //}
    //   return jsonErrorMsg;
    // }
    PackagePage.prototype.clearPkgEFM = function () {
        this.ActionTypeEFM = "J";
        this.mdlReadingOnSwitchEFM = "";
        this.NewMeterReading = "";
        this.MeterJumpRemark = "";
    };
    PackagePage.prototype.clearPkgSFM = function () {
        this.ActionTypeSFM = "J";
        this.OldMeterReading = "";
        this.NewMeterReading = "";
        this.MeterJumpRemark = "";
    };
    PackagePage.prototype.clearPkgDFM = function () {
        this.ActionTypeDFM = "J";
        this.mdlReadingOnSwitchDFM = "";
        this.NewMeterReading = "";
        this.MeterJumpRemark = "";
    };
    PackagePage.prototype.clearPkgVFM = function () {
        this.ActionTypeVFM = "J";
        this.mdlReadingOnSwitchVFM = "";
        this.NewMeterReading = "";
        this.MeterJumpRemark = "";
    };
    PackagePage.prototype.HoldResetReading = function (flag) {
        var _this = this;
        var FlagReadingType = '', fileInput, file;
        var PrvReading, JumpReading, MeterResetId, ReadingOnSwitch;
        if (flag == 'SFM') {
            console.log(this.filesSFM);
            //fileInput = (this.filesSFM[0];//document.getElementById('jcMeterResetSFM');
            file = (this.filesSFM == undefined) ? null : this.filesSFM;
            // file = (isUndefined(this.filesSFM)) ? null : this.filesSFM[0];//fileInput.files[0];
            this.resetTypeOptionSFM;
            var jsonValidation = {
                ActionType: this.ActionTypeSFM,
                oldMeterReading: this.OldMeterReading,
                oldJumpReading: this.mdlResetJumpReadingSFM,
                fileObject: file
            };
            var retJson = this.validationMeterReset(jsonValidation);
            if (retJson.errorMsg != '') {
                this.commonServices.presentToast(retJson.errorMsg);
                return false;
            }
            ;
            FlagReadingType = this.resetTypeJsonSelected; //(this.ActionTypeSFM == "Reset") ? 'R' : (this.ActionTypeSFM == "Change") ? 'C' : 'J';//this.resetTypeJsonSelectedSFM[0].Value;
            PrvReading = this.PackageDetailJson[0].SuctionFlowMeterReadingPrv;
            JumpReading = this.mdlResetJumpReadingSFM;
            MeterResetId = this.meterResetIdSFM;
            ReadingOnSwitch = this.mdlReadingOnSwitchSFM;
            this.PackageOldReading = this.OldMeterReading;
        }
        else if (flag == 'DFM') {
            //fileInput = this.filesDFM;//document.getElementById('jcMeterResetDFM');
            // file = (isUndefined(this.filesDFM)) ? null : this.filesDFM[0];//fileInput.files[0];
            file = (this.filesDFM == undefined) ? null : this.filesDFM;
            this.jsonValidation = {
                ActionType: this.ActionTypeDFM,
                oldMeterReading: this.mdlReadingOnSwitchDFM,
                oldJumpReading: this.mdlResetJumpReadingDFM,
                fileObject: file
            };
            var retJson = this.validationMeterReset(this.jsonValidation);
            if (retJson.errorMsg != '') {
                alert(retJson.errorMsg);
                return false;
            }
            ;
            FlagReadingType = this.resetTypeJsonSelected; //(this.ActionTypeDFM == "Reset") ? 'R' : (this.ActionTypeDFM == "Change") ? 'C' : 'J';//this.resetTypeJsonSelectedDFM.Value;
            PrvReading = this.PackageDetailJson[0].DischargeFlowMeterReadingPrv;
            JumpReading = this.mdlResetJumpReadingDFM;
            MeterResetId = this.meterResetIdDFM;
            ReadingOnSwitch = this.mdlReadingOnSwitchDFM;
            this.PackageOldReading = this.mdlReadingOnSwitchDFM;
        }
        else if (flag == 'EFM') {
            //fileInput = this.filesEFM[0];//document.getElementById('jcMeterResetEFM');
            // file = (isUndefined(this.filesEFM)) ? null : this.filesEFM[0];//fileInput.files[0];
            file = (this.filesEFM == undefined) ? null : this.filesEFM;
            this.jsonValidation = {
                ActionType: this.ActionTypeEFM,
                oldMeterReading: this.mdlReadingOnSwitchEFM,
                oldJumpReading: this.mdlResetJumpReadingEFM,
                fileObject: file
            };
            var retJson = this.validationMeterReset(this.jsonValidation);
            if (retJson.errorMsg != '') {
                this.commonServices.presentToast(retJson.errorMsg);
                return false;
            }
            ;
            FlagReadingType = this.resetTypeJsonSelected; //(this.ActionTypeEFM == "Reset") ? 'R' : (this.ActionTypeEFM == "Change") ? 'C' : 'J';//this.resetTypeJsonSelectedSFM[0].Value;
            PrvReading = this.PackageDetailJson[0].EngineFlowMeterReadingPrv;
            JumpReading = this.mdlResetJumpReadingEFM;
            MeterResetId = this.meterResetIdEFM;
            ReadingOnSwitch = this.mdlReadingOnSwitchEFM;
            this.PackageOldReading = this.mdlReadingOnSwitchEFM;
        }
        else if (flag == 'VFM') {
            //fileInput = this.filesEFM[0];//document.getElementById('jcMeterResetEFM');
            // file = (isUndefined(this.filesVFM)) ? null : this.filesVFM[0];//fileInput.files[0];
            file = (this.filesVFM == undefined) ? null : this.filesVFM;
            this.jsonValidation = {
                ActionType: this.ActionTypeVFM,
                oldMeterReading: this.mdlReadingOnSwitchVFM,
                oldJumpReading: this.mdlReadingOnSwitchVFM,
                fileObject: file
            };
            var retJson = this.validationMeterReset(this.jsonValidation);
            if (retJson.errorMsg != '') {
                this.commonServices.presentToast(retJson.errorMsg);
                return false;
            }
            ;
            FlagReadingType = this.resetTypeJsonSelected; //(this.ActionTypeEFM == "Reset") ? 'R' : (this.ActionTypeEFM == "Change") ? 'C' : 'J';//this.resetTypeJsonSelectedSFM[0].Value;
            PrvReading = this.PackageDetailJson[0].VentFlowMeterReading;
            JumpReading = this.mdlReadingOnSwitchVFM;
            MeterResetId = this.meterResetIdEFM;
            ReadingOnSwitch = this.mdlReadingOnSwitchVFM;
            this.PackageOldReading = this.mdlReadingOnSwitchVFM;
        }
        var globalDetail = JSON.parse(sessionStorage.getItem('globalDetail'));
        var sendJosn = {
            StationCode: this.StationCode,
            MeterOf: 'PKG',
            MeterOfId: this.PackageDetailJson[0].PackageId,
            MeterType: flag,
            FlagRead: 0,
            FlagReadingType: FlagReadingType,
            Id: MeterResetId,
            LoginId: this.LoginId,
            PrvReading: this.PackageOldReading,
            JumpReading: ((JumpReading == '') ? '0' : JumpReading),
            ReadingOnSwitch: ReadingOnSwitch,
            FilePath: localStorage.getItem('LoginId') + "/Package/",
            MeterJumpRemark: this.MeterJumpRemark,
            JumpHistoryId: this.JumpHistoryId,
            MeterAfterJump: this.NewMeterReading,
            MeterBeforeJump: this.PackageOldReading,
            EntryDate: this.geteDate.selcteddate
        };
        this.JumpHistoryId = "";
        var formData = new FormData();
        if (file != undefined || file != null) {
            formData.append("file", file);
        }
        // for (var i in fileInput.files)
        //     formData.append("file", fileInput.files[i]);
        formData.append("jsonDetail", JSON.stringify(sendJosn));
        this.commonServices.loadingPresent();
        this.commonServices.PackageHoldResetReading(formData).subscribe(function (resp) {
            _this.commonServices.loadingDismiss();
            var data = resp;
            if (flag == 'SFM') {
                _this.getSFMJumpHistory('GET');
                _this.clearPkgSFM();
                _this.mdlResetPopupSFM = false;
                _this.mdlShowResetReadingSFM = true;
            }
            else if (flag == 'EFM') {
                _this.getEFMJumpHistory('GET');
                _this.clearPkgEFM();
                _this.mdlResetPopupEFM = false;
                _this.mdlShowResetReadingEFM = true;
            }
            else if (flag == 'DFM') {
                _this.getDFMJumpHistory('GET');
                _this.clearPkgDFM();
                _this.mdlResetPopupDFM = false;
                _this.mdlShowResetReadingDFM = true;
            }
            else if (flag == 'VFM') {
                _this.getVFMJumpHistory('GET');
                _this.clearPkgVFM();
                _this.mdlResetPopupVFM = false;
                // this.mdlShowResetReadingVFM = true;
            }
            var MyJson = {
                StationCode: _this.StationCode,
                LoginID: _this.LoginId,
                PackageId: ((Object(util__WEBPACK_IMPORTED_MODULE_6__["isUndefined"])(_this.SelectedPkgId.PkgId) == true || _this.SelectedPkgId.PkgId == '') ? '-999' : _this.SelectedPkgId.PkgId)
            };
            _this.commonServices.presentToast("Record saved Successfully.");
            _this.GetPackageDetail(MyJson);
        }, function (error) {
            _this.commonServices.presentToast("Something went wrong.");
            _this.commonServices.loadingDismiss();
            //bummer
        });
    };
    PackagePage.prototype.validationMeterReset = function (jsonValidation) {
        var regexNumeric = /^[+-]?[0-9]{1,1000}(?:\.[0-9]{1,1000})?$/;
        var jsonErrorMsg = { errorMsg: '' };
        if (Object(util__WEBPACK_IMPORTED_MODULE_6__["isUndefined"])(jsonValidation.ActionType) || jsonValidation.ActionType == "--Select--"
            || jsonValidation.ActionType == "") {
            jsonErrorMsg = { errorMsg: 'Please select Action Type.' };
            return jsonErrorMsg;
        }
        if (Object(util__WEBPACK_IMPORTED_MODULE_6__["isUndefined"])(jsonValidation.oldMeterReading) || jsonValidation.oldMeterReading == '') {
            jsonErrorMsg = { errorMsg: 'Please enter the Old Meter Reading.' };
            return jsonErrorMsg;
        }
        if (regexNumeric.test(jsonValidation.oldMeterReading) == false) {
            jsonErrorMsg = { errorMsg: 'Only numeric value allowed for reading.' };
            return jsonErrorMsg;
        }
        if (parseFloat(jsonValidation.oldMeterReading) < 0) {
            jsonErrorMsg = { errorMsg: 'Old Meter Reading must be Positive.' };
            return jsonErrorMsg;
        }
        if ((parseInt(jsonValidation.oldJumpReading) == 0 || jsonValidation.oldJumpReading == '') &&
            !Object(util__WEBPACK_IMPORTED_MODULE_6__["isUndefined"])(jsonValidation.fileObject) && (jsonValidation.fileObject != null) &&
            (jsonValidation.fileObject.files.length > 0 || jsonValidation.formarJRImage == true)) {
            jsonErrorMsg = { errorMsg: 'Please enter the Jump Reading.' };
            return jsonErrorMsg;
        }
        if (regexNumeric.test(jsonValidation.oldJumpReading) == false) {
            jsonErrorMsg = { errorMsg: 'Only numeric value allowed for Jump reading.' };
            return jsonErrorMsg;
        }
        //if (!angular.isUndefined(jsonValidation.fileObject) && (jsonValidation.fileObject != null) && jsonValidation.fileObject.files.length > 0 && ((regexNumeric.test(jsonValidation.oldJumpReading) == false) || (parseFloat(jsonValidation.oldJumpReading) < 0))) {
        //    jsonErrorMsg = { errorMsg: 'Jump Reading must be Positive.' };
        //    return jsonErrorMsg;
        //}
        return jsonErrorMsg;
    };
    PackagePage.prototype.getSFMJumpHistory = function (FlagType) {
        var _this = this;
        this.clearPkgSFM();
        var obj = {
            FlagEntryFor: FlagType,
            MeterOf: 'PKG',
            Id: '',
            StationCode: '',
            MeterOfId: this.PackageDetailJson[0].PackageId,
            MeterType: 'SFM',
            EntryDate: this.geteDate.selcteddate,
            FlagReadingType: ""
        };
        console.log(obj);
        this.commonServices.loadingPresent();
        this.commonServices.postwithservice("GetJumpReadingList", obj).subscribe(function (resp) {
            _this.SFMJumpListHistory = JSON.parse(resp).Table;
            console.log(_this.SFMJumpListHistory);
            _this.commonServices.loadingDismiss();
        }, function (error) {
            _this.commonServices.presentToast("Something went wrong.");
            _this.commonServices.loadingDismiss();
        });
    };
    PackagePage.prototype.DeleteSFMJumpHistory = function (Id, FlagReading, itm) {
        var _this = this;
        // if (confirm("Are you sure to delete this record..?")) {
        //   var Json = {
        //     Id: Id,
        //     FlagEntryFor: 'DELETE',
        //     FlagReadingType: FlagReading,
        //     MeterOf: 'PKG',
        //     MeterOfId: this.PackageDetailJson[0].PackageId,
        //     EntryDate: this.geteDate.selcteddate,
        //     MeterType: 'SFM'
        //   }
        //   this.commonServices.postwithservice("GetJumpReadingList", Json).subscribe(
        //     (resp: any) => {
        //       const data = JSON.parse(resp);
        //       this.commonServices.presentToast("Record deleted successfully");
        //       //this.openPopup(this.popupFor);
        //       setTimeout(() => {
        //         this.getSFMJumpHistory('GET');
        //       });
        //       this.commonServices.loadingDismiss();
        //     },
        //     (error) => {
        //       this.commonServices.presentToast("Something went wrong.");
        //       this.commonServices.loadingDismiss();
        //     }
        //   )
        // }
        this.commonServices.alertMessage("Delete", "Are you sure to delete this record..?").then(function (res) {
            console.log(res);
            if (!res) {
                var Json = {
                    Id: Id,
                    FlagEntryFor: 'DELETE',
                    FlagReadingType: FlagReading,
                    MeterOf: 'PKG',
                    MeterOfId: _this.PackageDetailJson[0].PackageId,
                    EntryDate: _this.geteDate.selcteddate,
                    MeterType: 'SFM'
                };
                _this.commonServices.postwithservice("GetJumpReadingList", Json).subscribe(function (resp) {
                    var data = JSON.parse(resp);
                    _this.commonServices.presentToast("Record deleted successfully");
                    //this.openPopup(this.popupFor);
                    setTimeout(function () {
                        _this.getSFMJumpHistory('GET');
                    });
                    _this.commonServices.loadingDismiss();
                }, function (error) {
                    _this.commonServices.presentToast("Something went wrong.");
                    _this.commonServices.loadingDismiss();
                });
            }
        });
        this.getSFMJumpHistory('GET');
    };
    PackagePage.prototype.UpdateSFMJumpHistory = function (Id, itm) {
        this.JumpHistoryId = Id;
        this.OldMeterReading = itm.BeforeJumpReading;
        this.NewMeterReading = itm.AfterJumpReading;
        this.MeterJumpRemark = itm.Remark;
        if (itm.Action == "Jump") {
            this.ActionTypeSFM = "J";
        }
        else if (itm.Action == "Change") {
            this.ActionTypeSFM = "C";
        }
        else {
            this.ActionTypeSFM = "R";
        }
    };
    PackagePage.prototype.MSJReadingvalue = function (value) {
        this.MSJReading = value;
        if (this.MSJReading != '') {
            this.MSpopupfilevisible = false;
        }
        else {
            this.MSpopupfilevisible = true;
        }
    };
    PackagePage.prototype.getDFMJumpHistory = function (FlagType) {
        var _this = this;
        this.clearPkgDFM();
        var obj = {
            FlagEntryFor: FlagType,
            MeterOf: 'PKG',
            Id: '',
            StationCode: '',
            MeterOfId: this.PackageDetailJson[0].PackageId,
            MeterType: 'DFM',
            EntryDate: this.geteDate.selcteddate,
            FlagReadingType: ""
        };
        console.log(obj);
        this.commonServices.loadingPresent();
        this.commonServices.postwithservice("GetJumpReadingList", obj).subscribe(function (resp) {
            _this.DFMJumpListHistory = JSON.parse(resp).Table;
            console.log(_this.DFMJumpListHistory);
            _this.commonServices.loadingDismiss();
        }, function (error) {
            _this.commonServices.presentToast("Something went wrong.");
            _this.commonServices.loadingDismiss();
        });
    };
    PackagePage.prototype.DeleteDFMJumpHistory = function (Id, FlagReading, itm) {
        var _this = this;
        // if (confirm("Are you sure to delete this record..?")) {
        //   var Json = {
        //     Id: Id,
        //     FlagEntryFor: 'DELETE',
        //     FlagReadingType: FlagReading,
        //     MeterOf: 'PKG',
        //     MeterOfId: this.PackageDetailJson[0].PackageId,
        //     EntryDate: this.geteDate.selcteddate,
        //     MeterType: 'DFM'
        //   }
        //   this.commonServices.postwithservice("GetJumpReadingList", Json).subscribe(
        //     (resp: any) => {
        //       const data = JSON.parse(resp);
        //       this.commonServices.presentToast("Record deleted successfully");
        //       //this.openPopup(this.popupFor);
        //       setTimeout(() => {
        //         this.getDFMJumpHistory('GET');
        //       });
        //       this.commonServices.loadingDismiss();
        //     },
        //     (error) => {
        //       this.commonServices.presentToast("Something went wrong.");
        //       this.commonServices.loadingDismiss();
        //     }
        //   )
        // }
        this.commonServices.alertMessage("Delete", "Are you sure to delete this record..?").then(function (res) {
            console.log(res);
            if (!res) {
                var Json = {
                    Id: Id,
                    FlagEntryFor: 'DELETE',
                    FlagReadingType: FlagReading,
                    MeterOf: 'PKG',
                    MeterOfId: _this.PackageDetailJson[0].PackageId,
                    EntryDate: _this.geteDate.selcteddate,
                    MeterType: 'DFM'
                };
                _this.commonServices.postwithservice("GetJumpReadingList", Json).subscribe(function (resp) {
                    var data = JSON.parse(resp);
                    _this.commonServices.presentToast("Record deleted successfully");
                    //this.openPopup(this.popupFor);
                    setTimeout(function () {
                        _this.getDFMJumpHistory('GET');
                    });
                    _this.commonServices.loadingDismiss();
                }, function (error) {
                    _this.commonServices.presentToast("Something went wrong.");
                    _this.commonServices.loadingDismiss();
                });
            }
        });
        this.getDFMJumpHistory('GET');
    };
    PackagePage.prototype.UpdateDFMJumpHistory = function (Id, itm) {
        this.JumpHistoryId = Id;
        this.mdlReadingOnSwitchDFM = itm.BeforeJumpReading;
        this.NewMeterReading = itm.AfterJumpReading;
        this.MeterJumpRemark = itm.Remark;
        if (itm.Action == "Jump") {
            this.ActionTypeDFM = "J";
        }
        else if (itm.Action == "Change") {
            this.ActionTypeDFM = "C";
        }
        else {
            this.ActionTypeDFM = "R";
        }
    };
    PackagePage.prototype.getEFMJumpHistory = function (FlagType) {
        var _this = this;
        this.clearPkgEFM();
        var obj = {
            FlagEntryFor: FlagType,
            MeterOf: 'PKG',
            Id: '',
            StationCode: '',
            MeterOfId: this.PackageDetailJson[0].PackageId,
            MeterType: 'EFM',
            EntryDate: this.geteDate.selcteddate,
            FlagReadingType: ""
        };
        console.log(obj);
        this.commonServices.loadingPresent();
        this.commonServices.postwithservice("GetJumpReadingList", obj).subscribe(function (resp) {
            _this.EFMJumpListHistory = JSON.parse(resp).Table;
            console.log(_this.EFMJumpListHistory);
            _this.commonServices.loadingDismiss();
        }, function (error) {
            _this.commonServices.presentToast("Something went wrong.");
            _this.commonServices.loadingDismiss();
        });
    };
    PackagePage.prototype.DeleteEFMJumpHistory = function (Id, FlagReading, itm) {
        var _this = this;
        this.commonServices.alertMessage("Delete", "Are you sure to delete this record..?").then(function (res) {
            console.log(res);
            if (!res) {
                var Json = {
                    Id: Id,
                    FlagEntryFor: 'DELETE',
                    FlagReadingType: FlagReading,
                    MeterOf: 'PKG',
                    MeterOfId: _this.PackageDetailJson[0].PackageId,
                    EntryDate: _this.geteDate.selcteddate,
                    MeterType: 'EFM'
                };
                _this.commonServices.postwithservice("GetJumpReadingList", Json).subscribe(function (resp) {
                    var data = JSON.parse(resp);
                    _this.commonServices.presentToast("Record deleted successfully");
                    setTimeout(function () {
                        _this.getEFMJumpHistory('GET');
                    });
                    _this.commonServices.loadingDismiss();
                }, function (error) {
                    _this.commonServices.presentToast("Something went wrong.");
                    _this.commonServices.loadingDismiss();
                });
            }
        });
        this.getEFMJumpHistory('GET');
    };
    PackagePage.prototype.UpdateEFMJumpHistory = function (Id, itm) {
        this.JumpHistoryId = Id;
        this.mdlReadingOnSwitchEFM = itm.BeforeJumpReading;
        this.NewMeterReading = itm.AfterJumpReading;
        this.MeterJumpRemark = itm.Remark;
        if (itm.Action == "Jump") {
            this.ActionTypeEFM = "J";
        }
        else if (itm.Action == "Change") {
            this.ActionTypeEFM = "C";
        }
        else {
            this.ActionTypeEFM = "R";
        }
    };
    PackagePage.prototype.getVFMJumpHistory = function (FlagType) {
        var _this = this;
        this.clearPkgVFM();
        var obj = {
            FlagEntryFor: FlagType,
            MeterOf: 'PKG',
            Id: '',
            StationCode: '',
            MeterOfId: this.PackageDetailJson[0].PackageId,
            MeterType: 'VFM',
            EntryDate: this.geteDate.selcteddate,
            FlagReadingType: ""
        };
        console.log(obj);
        this.commonServices.loadingPresent();
        this.commonServices.postwithservice("GetJumpReadingList", obj).subscribe(function (resp) {
            _this.VFMJumpListHistory = JSON.parse(resp).Table;
            console.log(_this.EFMJumpListHistory);
            _this.commonServices.loadingDismiss();
        }, function (error) {
            _this.commonServices.presentToast("Something went wrong.");
            _this.commonServices.loadingDismiss();
        });
    };
    PackagePage.prototype.DeleteVFMJumpHistory = function (Id, FlagReading, itm) {
        var _this = this;
        this.commonServices.alertMessage("Delete", "Are you sure to delete this record..?").then(function (res) {
            console.log(res);
            if (!res) {
                var Json = {
                    Id: Id,
                    FlagEntryFor: 'DELETE',
                    FlagReadingType: FlagReading,
                    MeterOf: 'PKG',
                    MeterOfId: _this.PackageDetailJson[0].PackageId,
                    EntryDate: _this.geteDate.selcteddate,
                    MeterType: 'VFM'
                };
                _this.commonServices.postwithservice("GetJumpReadingList", Json).subscribe(function (resp) {
                    var data = JSON.parse(resp);
                    _this.commonServices.presentToast("Record deleted successfully");
                    setTimeout(function () {
                        _this.getVFMJumpHistory('GET');
                    });
                    _this.commonServices.loadingDismiss();
                }, function (error) {
                    _this.commonServices.presentToast("Something went wrong.");
                    _this.commonServices.loadingDismiss();
                });
            }
        });
        this.getVFMJumpHistory('GET');
    };
    PackagePage.prototype.UpdateVFMJumpHistory = function (Id, itm) {
        this.JumpHistoryId = Id;
        this.mdlReadingOnSwitchVFM = itm.BeforeJumpReading;
        this.NewMeterReading = itm.AfterJumpReading;
        this.MeterJumpRemark = itm.Remark;
        if (itm.Action == "Jump") {
            this.ActionTypeVFM = "J";
        }
        else if (itm.Action == "Change") {
            this.ActionTypeVFM = "C";
        }
        else {
            this.ActionTypeVFM = "R";
        }
    };
    PackagePage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] }
    ]; };
    PackagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-package',
            template: __webpack_require__(/*! raw-loader!./package.page.html */ "./node_modules/raw-loader/index.js!./src/app/station/package/package.page.html"),
            styles: [__webpack_require__(/*! ./package.page.scss */ "./src/app/station/package/package.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]])
    ], PackagePage);
    return PackagePage;
}());



/***/ })

}]);
//# sourceMappingURL=station-package-package-module-es5.js.map