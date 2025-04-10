(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["station-attachment-dsa-attachment-dsa-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/station/attachment-dsa/attachment-dsa.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/station/attachment-dsa/attachment-dsa.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/home\" *ngIf=\"DepartmentCode == 'SO'\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/mo-dashboard\"  *ngIf=\"DepartmentCode == 'MO'\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<ion-row class=\"align_center search_parent\">\r\n\t\t<ion-col size=\"2\">\r\n\t\t\t<ion-back-button ></ion-back-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"8\">\r\n\t\t\t<h4 class=\"ion-text-center\">Dispenser Jump Attachment</h4>\r\n\t\t</ion-col>\r\n\t</ion-row>\r\n</ion-header>\r\n<ion-content>\r\n\t<div class=\"content_area\">\r\n\t\t<div class=\"mycard\">\r\n\t\t\t<!--<div class=\"card_box\" *ngFor=\"let item of listDispAttachments; let i= index\">\r\n\t\t\t\t<div class=\"card_heading\">\r\n\t\t\t\t\t<h5>\r\n\t\t\t\t\t\t<span class=\"span1\">\r\n\t\t\t\t\t\t\t<span>{{i+1}} </span>{{item.DispenserName}}\r\n\t\t\t\t\t\t</span> \r\n\t\t\t\t\t</h5>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card_content\">\r\n\t\t\t\t\t<ion-grid>\r\n\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t\t\t\t<ion-label>Dispenser Shif</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-text>{{item.ShiftDetails}}</ion-text>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t\t\t\t<ion-label>Dispenser Sub Shif</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-text>{{item.SubShiftDetails}}</ion-text>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row class=\"bottom_row\">\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t\t\t\t<ion-label>Entry Date</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-text>{{item.EntryDate}}</ion-text>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t\t\t\t<ion-label>Dispenser Side</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-text>{{item.DispanserSide}}</ion-text>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t<ion-col *ngIf=\"item.IsImageUpload == 0\">\r\n\t\t\t\t\t\t\t<div class=\"item ion-text-center\">\r\n\t\t\t\t\t\t\t\t<ion-button color=\"light\"   (click)=\"selectImage(item)\" class=\"xyz\">\r\n\t\t\t\t\t\t\t\t\tUpload&nbsp;<ion-icon name=\"cloud-upload\"></ion-icon>  \r\n\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t<ion-col *ngIf=\"item.IsImageUpload > 0\">\r\n\t\t\t\t\t\t\t<div class=\"item ion-text-center\">\r\n\t\t\t\t\t\t\t\t<ion-button color=\"light\" (click)=\"presentModal1(item.DispanserJumpCeritificate)\" class=\"xyz\">\r\n\t\t\t\t\t\t\t\t\tView&nbsp;<ion-icon name=\"eye\"></ion-icon> \r\n\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t</ion-grid>\r\n\t\t\t\t</div>\r\n\t\t\t</div>-->\r\n\t\t\t<!-- <ion-row>\r\n\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t<ion-label>Date <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t<ion-item class=\"inp_control\">\r\n\t\t\t\t\t\t<ion-label>MM DD YY</ion-label>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t<ion-datetime #selcteddate displayFormat=\"DD-MMM-YYYY\" pickerFormat=\"DD MMM YYYY\"\r\n\t\t\t\t\t\t\t[ngModel]=\"geteDate.selcteddate\" name=\"selcteddate\"\r\n\t\t\t\t\t\t\t(ngModelChange)=\"getSelectedDate(selcteddate.value)\" [max]=\"secondMaxDate\">\r\n\t\t\t\t\t\t</ion-datetime>\r\n\t\t\t\t\t</ion-item>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row> -->\r\n\t\t\t<!-- <ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t<label>Date <span class=\"star\">*</span></label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t<ion-datetime #selcteddate displayFormat=\"DD-MMM-YYYY\" pickerFormat=\"DD MMM YYYY\"\r\n\t\t\t\t\t\t\t[ngModel]=\"geteDate.selcteddate\" name=\"selcteddate\"\r\n\t\t\t\t\t\t\t(ngModelChange)=\"getSelectedDate(selcteddate.value)\" [max]=\"secondMaxDate\">\r\n\t\t\t\t\t\t</ion-datetime>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row> -->\r\n\r\n\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t<label>Date From</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t<ion-label>Select Date:</ion-label>\r\n\t\t\t\t\t\t<ion-datetime #selcteddateFrom class=\"inp_control date\" displayFormat=\"DD-MMM-YYYY\"\r\n\t\t\t\t\t\t\tpickerFormat=\"DD MMM YYYY\" [ngModel]=\"DateFrom\" name=\"selcteddateForm\"\r\n\t\t\t\t\t\t\t(ngModelChange)=\"OnDateChnageFrom(selcteddateFrom.value)\" [max]=\"secondMaxDate\">\r\n\t\t\t\t\t\t</ion-datetime>\r\n\t\t\t\t\t</ion-item>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t<label>Date To</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t<ion-label>Select Date:</ion-label>\r\n\t\t\t\t\t\t<ion-datetime #selcteddateTo class=\"inp_control date\" displayFormat=\"DD-MMM-YYYY\"\r\n\t\t\t\t\t\t\tpickerFormat=\"DD MMM YYYY\" [ngModel]=\"DateTo\" name=\"selcteddateTo\"\r\n\t\t\t\t\t\t\t(ngModelChange)=\"OnDateChnageTo(selcteddateTo.value)\" [min]=\"DateFromMy\"\r\n\t\t\t\t\t\t\t[max]=\"secondMaxDate\"></ion-datetime>\r\n\t\t\t\t\t</ion-item>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"card_box\" *ngFor=\"let item of listDispAttachments; let i= index\">\r\n\t\t\t\t<div class=\"card_heading\">\r\n\t\t\t\t\t<h5>\r\n\t\t\t\t\t\t<span class=\"span1\">\r\n\t\t\t\t\t\t\t<span>{{i+1}} </span>{{item.DispenserName}}\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card_content\">\r\n\t\t\t\t\t<ion-grid>\r\n\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t\t\t\t\t<ion-label>Dispenser Shift</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-text>{{item.ShiftDetails}}</ion-text>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t\t\t\t\t<ion-label>Dispenser Sub Shift</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-text>{{item.SubShiftDetails}}</ion-text>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row class=\"bottom_row\">\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t\t\t\t\t<ion-label>Entry Date</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-text>{{item.EntryDate}}</ion-text>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t\t\t\t\t<ion-label>Dispenser Side</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-text>{{item.DispanserSide}}</ion-text>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row class=\"bottom_row ion-align-items-center\">\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"item ion-text-left\">\r\n\t\t\t\t\t\t\t\t\t<ion-label>Jump Certificate</ion-label>\r\n\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col class=\"ion-text-right\" *ngIf=\"item.IsApprovedByInstrumental == 1\"\r\n\t\t\t\t\t\t\t\t(click)=\"GenerateJumpCertificate(item);\">\r\n\t\t\t\t\t\t\t\t<ion-text>\r\n\t\t\t\t\t\t\t\t\t<ion-button color=\"light\" size=\"small\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"cloud-download\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row class=\"bottom_row ion-align-items-center\">\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"item ion-text-left\">\r\n\t\t\t\t\t\t\t\t\t<ion-label>Approved By Instrumental </ion-label>\r\n\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col class=\"ion-text-right\">\r\n\t\t\t\t\t\t\t\t<ion-text>\r\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-check mycheck\" *ngIf=\"item.IsApprovedByInstrumental == 1\"></i>\r\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-times myclose\" *ngIf=\"item.IsApprovedByInstrumental==2\"></i>\r\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-minus myminus\" *ngIf=\"item.IsApprovedByInstrumental == 0\"></i>\r\n\t\t\t\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row class=\"bottom_row ion-align-items-center\">\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"item ion-text-left\">\r\n\t\t\t\t\t\t\t\t\t<ion-label>Approved By ONM </ion-label>\r\n\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col class=\"ion-text-right\">\r\n\t\t\t\t\t\t\t\t<ion-text>\r\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-check mycheck\" *ngIf=\"item.IsApprovedByONM == 1\"></i>\r\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-times myclose\" *ngIf=\"item.IsApprovedByONM==2\"></i>\r\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-minus myminus\" *ngIf=\"item.IsApprovedByONM == 0\"></i>\r\n\t\t\t\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row class=\"bottom_row ion-align-items-center\">\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"item ion-text-left\">\r\n\t\t\t\t\t\t\t\t\t<ion-label>Approved By DSO</ion-label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col class=\"ion-text-right\">\r\n\t\t\t\t\t\t\t\t<ion-text>\r\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-check mycheck\" *ngIf=\"item.IsApprovedByMO == 1\"></i>\r\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-times myclose\" *ngIf=\"item.IsApprovedByMO==2\"></i>\r\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-minus myminus\" *ngIf=\"item.IsApprovedByMO == 0\"></i>\r\n\t\t\t\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\r\n\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t<ion-col *ngIf=\"item.IsImageUpload == 0\">\r\n\t\t\t\t\t\t\t\t<div class=\"item ion-text-center\">\r\n\t\t\t\t\t\t\t\t\t<ion-button color=\"light\" (click)=\"selectImage(item)\" class=\"xyz\">\r\n\t\t\t\t\t\t\t\t\t\tUpload&nbsp;<ion-icon name=\"cloud-upload\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col *ngIf=\"item.IsImageUpload > 0\">\r\n\t\t\t\t\t\t\t\t<div class=\"item ion-text-center\">\r\n\t\t\t\t\t\t\t\t\t<ion-button color=\"light\" (click)=\"presentModal1(item.DispanserJumpCeritificate)\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"xyz\">\r\n\t\t\t\t\t\t\t\t\t\tView&nbsp;<ion-icon name=\"eye\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t</ion-grid>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- <Latest Design -->\r\n\r\n\r\n\t\t\t<!-- <ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t<label>Date <span class=\"star\">*</span></label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"input_container\">\r\n\r\n\t\t\t\t\t\t\t<ion-datetime displayFormat=\"MM DD YY\" placeholder=\"Select Date\"></ion-datetime>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row> -->\r\n\t\t\t<!-- <div class=\"card_box\">\r\n\t\t\t\t<div class=\"card_heading\">\r\n\t\t\t\t\t<h5>\r\n\t\t\t\t\t\t<span class=\"span1\">\r\n\t\t\t\t\t\t\t<span>{{i+1}} </span> DISP11002474\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card_content\">\r\n\t\t\t\t\t<ion-grid>\r\n\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t\t\t\t\t<ion-label>Dispenser Name</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-text>data..</ion-text>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t\t\t\t\t<ion-label>Dispenser Shif</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-text>data..</ion-text>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t\t\t<div class=\"item\">\r\n\t\t\t\t\t\t\t\t\t<ion-label>Dispenser Sub Shif</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-text>data..</ion-text>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row class=\"bottom_row\">\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"item ion-text-left\">\r\n\t\t\t\t\t\t\t\t\t<ion-label>Entry Date</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-text>data..</ion-text>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"item ion-text-left\">\r\n\t\t\t\t\t\t\t\t\t<ion-label>Dispenser Side</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-text>data..</ion-text>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row class=\"bottom_row ion-align-items-center\">\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"item ion-text-left\">\r\n\t\t\t\t\t\t\t\t\t<ion-label>Jump Certificate</ion-label>\r\n\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col class=\"ion-text-right\">\r\n\t\t\t\t\t\t\t\t<ion-text>\r\n\t\t\t\t\t\t\t\t\t<ion-button color=\"light\" size=\"small\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"cloud-download\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row class=\"bottom_row ion-align-items-center\">\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"item ion-text-left\">\r\n\t\t\t\t\t\t\t\t\t<ion-label>Approved By ONM </ion-label>\r\n\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col class=\"ion-text-right\">\r\n\t\t\t\t\t\t\t\t<ion-text>\r\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-check mycheck\"></i>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row class=\"bottom_row ion-align-items-center\">\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"item ion-text-left\">\r\n\t\t\t\t\t\t\t\t\t<ion-label>Approved By Instrumental </ion-label>\r\n\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col class=\"ion-text-right\">\r\n\t\t\t\t\t\t\t\t<ion-text>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-minus myminus\"></i>\r\n\t\t\t\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row class=\"bottom_row ion-align-items-center\">\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"item ion-text-left\">\r\n\t\t\t\t\t\t\t\t\t<ion-label>Approved By MO</ion-label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col class=\"ion-text-right\">\r\n\t\t\t\t\t\t\t\t<ion-text>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<i class=\"fas fa-times myclose\"></i>\r\n\t\t\t\t\t\t\t\t</ion-text>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\r\n\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"item ion-text-center\">\r\n\t\t\t\t\t\t\t\t\t<ion-button color=\"light\" class=\"xyz\">\r\n\t\t\t\t\t\t\t\t\t\tUpload&nbsp;<ion-icon name=\"cloud-upload\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"item ion-text-center\">\r\n\t\t\t\t\t\t\t\t\t<ion-button color=\"light\" class=\"xyz\">\r\n\t\t\t\t\t\t\t\t\t\tView&nbsp;<ion-icon name=\"eye\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t</ion-grid>\r\n\t\t\t\t</div>\r\n\t\t\t</div> -->\r\n\t\t</div>\r\n\t</div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/station/attachment-dsa/attachment-dsa-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/station/attachment-dsa/attachment-dsa-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: AttachmentDsaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentDsaPageRoutingModule", function() { return AttachmentDsaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _attachment_dsa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attachment-dsa.page */ "./src/app/station/attachment-dsa/attachment-dsa.page.ts");




const routes = [
    {
        path: '',
        component: _attachment_dsa_page__WEBPACK_IMPORTED_MODULE_3__["AttachmentDsaPage"]
    }
];
let AttachmentDsaPageRoutingModule = class AttachmentDsaPageRoutingModule {
};
AttachmentDsaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AttachmentDsaPageRoutingModule);



/***/ }),

/***/ "./src/app/station/attachment-dsa/attachment-dsa.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/station/attachment-dsa/attachment-dsa.module.ts ***!
  \*****************************************************************/
/*! exports provided: AttachmentDsaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentDsaPageModule", function() { return AttachmentDsaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _attachment_dsa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attachment-dsa-routing.module */ "./src/app/station/attachment-dsa/attachment-dsa-routing.module.ts");
/* harmony import */ var _attachment_dsa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attachment-dsa.page */ "./src/app/station/attachment-dsa/attachment-dsa.page.ts");







let AttachmentDsaPageModule = class AttachmentDsaPageModule {
};
AttachmentDsaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _attachment_dsa_routing_module__WEBPACK_IMPORTED_MODULE_5__["AttachmentDsaPageRoutingModule"]
        ],
        declarations: [_attachment_dsa_page__WEBPACK_IMPORTED_MODULE_6__["AttachmentDsaPage"]]
    })
], AttachmentDsaPageModule);



/***/ }),

/***/ "./src/app/station/attachment-dsa/attachment-dsa.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/station/attachment-dsa/attachment-dsa.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".xyz {\n  --border-radius:20px;\n  --background:var(--green_clr);\n}\n\n.main_heading1 > div:nth-of-type(3) {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  align-content: center;\n}\n\n.main_heading1 > div:nth-of-type(3) ion-icon {\n  font-size: 21px;\n}\n\n.searchbar {\n  position: absolute;\n  top: -6px;\n  display: none;\n}\n\n.card_box {\n  border: none;\n  margin-bottom: 15px;\n  border: 1px solid var(--gray_clr);\n  border-top: none;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);\n  width: 98%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.card_heading {\n  background-color: var(--yellow_clr);\n  border-bottom: 2px solid var(--dark_green_clr);\n}\n\n.card_heading h5 {\n  font-size: 17px;\n  padding: 11px 8px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.item {\n  height: 100%;\n}\n\n.bottom_row .item {\n  text-align: center;\n}\n\n.item ion-label {\n  font-weight: bold;\n}\n\n.bottom_row {\n  background-color: #f6f6f6;\n  border-top: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n.mycheck {\n  color: #22d629;\n  font-size: 16px;\n  margin-right: 14px;\n}\n\n.myclose {\n  color: red;\n  font-size: 16px;\n  margin-right: 14px;\n}\n\n.myminus {\n  color: gray;\n  font-size: 16px;\n  margin-right: 14px;\n}\n\n.mypopup .popup_container {\n  overflow: hidden;\n}\n\n.mypopup .popup_container .trigger_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.attc_head {\n  font-size: 18px;\n  text-align: center;\n}\n\n.attachment_cont {\n  text-align: center;\n  margin-top: 15px;\n  width: 130px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  position: relative;\n}\n\n.attachment_cont input[type=file] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  opacity: 0;\n  z-index: 5;\n}\n\n.attachment_cont ion-icon {\n  color: #e6e6e6;\n  font-size: 75px;\n}\n\n.card_box {\n  border-radius: 0px;\n}\n\n.inp_control {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvc3RhdGlvbi9hdHRhY2htZW50LWRzYS9hdHRhY2htZW50LWRzYS5wYWdlLnNjc3MiLCJzcmMvYXBwL3N0YXRpb24vYXR0YWNobWVudC1kc2EvYXR0YWNobWVudC1kc2EucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksb0JBQUE7RUFDQSw2QkFBQTtBQ0FKOztBRElBO0VBRUksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHFCQUFBO0FDRko7O0FESUE7RUFFSSxlQUFBO0FDRko7O0FESUE7RUFFSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FDRko7O0FES0E7RUFFSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsNENBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0hKOztBREtBO0VBRUksbUNBQUE7RUFDQSw4Q0FBQTtBQ0hKOztBREtBO0VBRUksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNISjs7QURLQTtFQUVJLFlBQUE7QUNISjs7QURLQTtFQUVJLGtCQUFBO0FDSEo7O0FES0E7RUFFSSxpQkFBQTtBQ0hKOztBREtBO0VBRUkseUJBQUE7RUFDQSx3Q0FBQTtBQ0hKOztBRE1BO0VBRUksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0pKOztBRE1BO0VBRUksVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0pKOztBRE1BO0VBRUksV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0pKOztBRFFBO0VBRUksZ0JBQUE7QUNOSjs7QURRQTtFQUVJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNOSjs7QURRQTtFQUVJLGVBQUE7RUFDQSxrQkFBQTtBQ05KOztBRFFBO0VBRUksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNOSjs7QURRQTtFQUVJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQ05KOztBRFFBO0VBRUksY0FBQTtFQUNBLGVBQUE7QUNOSjs7QURRQTtFQUVJLGtCQUFBO0FDTko7O0FEU0E7RUFBYSxZQUFBO0FDTGIiLCJmaWxlIjoic3JjL2FwcC9zdGF0aW9uL2F0dGFjaG1lbnQtZHNhL2F0dGFjaG1lbnQtZHNhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi54eXpcclxue1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOjIwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6dmFyKC0tZ3JlZW5fY2xyKTtcclxufVxyXG5cclxuLy8gSGVhZGluZ1xyXG4ubWFpbl9oZWFkaW5nMT5kaXY6bnRoLW9mLXR5cGUoMykgXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ubWFpbl9oZWFkaW5nMT5kaXY6bnRoLW9mLXR5cGUoMykgaW9uLWljb25cclxue1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG59XHJcbi5zZWFyY2hiYXJcclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtNnB4O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmNhcmRfYm94XHJcbntcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5X2Nscik7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLmNhcmRfaGVhZGluZ1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXllbGxvd19jbHIpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWRhcmtfZ3JlZW5fY2xyKTtcclxufVxyXG4uY2FyZF9oZWFkaW5nIGg1XHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHBhZGRpbmc6IDExcHggOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLml0ZW1cclxue1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5ib3R0b21fcm93IC5pdGVtXHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaXRlbSBpb24tbGFiZWxcclxue1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmJvdHRvbV9yb3dcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjZmNmY2O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjIpO1xyXG59XHJcblxyXG4ubXljaGVja1xyXG57XHJcbiAgICBjb2xvcjogIzIyZDYyOTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1yaWdodDoxNHB4O1xyXG59XHJcbi5teWNsb3NlXHJcbntcclxuICAgIGNvbG9yOnJlZDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1yaWdodDoxNHB4O1xyXG59XHJcbi5teW1pbnVzXHJcbntcclxuICAgIGNvbG9yOmdyYXk7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MTRweDtcclxufVxyXG5cclxuXHJcbi5teXBvcHVwIC5wb3B1cF9jb250YWluZXIgXHJcbntcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLm15cG9wdXAgLnBvcHVwX2NvbnRhaW5lciAudHJpZ2dlcl9kaXYgXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmF0dGNfaGVhZFxyXG57XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmF0dGFjaG1lbnRfY29udFxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uYXR0YWNobWVudF9jb250IGlucHV0W3R5cGU9XCJmaWxlXCJdXHJcbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB6LWluZGV4OiA1O1xyXG59XHJcbi5hdHRhY2htZW50X2NvbnQgaW9uLWljb25cclxue1xyXG4gICAgY29sb3I6ICNlNmU2ZTY7XHJcbiAgICBmb250LXNpemU6IDc1cHg7XHJcbn1cclxuLmNhcmRfYm94XHJcbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG5cclxuLmlucF9jb250cm9se2JvcmRlcjpub25lO30iLCIueHl6IHtcbiAgLS1ib3JkZXItcmFkaXVzOjIwcHg7XG4gIC0tYmFja2dyb3VuZDp2YXIoLS1ncmVlbl9jbHIpO1xufVxuXG4ubWFpbl9oZWFkaW5nMSA+IGRpdjpudGgtb2YtdHlwZSgzKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYWluX2hlYWRpbmcxID4gZGl2Om50aC1vZi10eXBlKDMpIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMXB4O1xufVxuXG4uc2VhcmNoYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC02cHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jYXJkX2JveCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JheV9jbHIpO1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgd2lkdGg6IDk4JTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmNhcmRfaGVhZGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvd19jbHIpO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZGFya19ncmVlbl9jbHIpO1xufVxuXG4uY2FyZF9oZWFkaW5nIGg1IHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBwYWRkaW5nOiAxMXB4IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaXRlbSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmJvdHRvbV9yb3cgLml0ZW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYm90dG9tX3JvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5teWNoZWNrIHtcbiAgY29sb3I6ICMyMmQ2Mjk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xufVxuXG4ubXljbG9zZSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xufVxuXG4ubXltaW51cyB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogMTRweDtcbn1cblxuLm15cG9wdXAgLnBvcHVwX2NvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5teXBvcHVwIC5wb3B1cF9jb250YWluZXIgLnRyaWdnZXJfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYXR0Y19oZWFkIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hdHRhY2htZW50X2NvbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHdpZHRoOiAxMzBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYXR0YWNobWVudF9jb250IGlucHV0W3R5cGU9ZmlsZV0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiA1O1xufVxuXG4uYXR0YWNobWVudF9jb250IGlvbi1pY29uIHtcbiAgY29sb3I6ICNlNmU2ZTY7XG4gIGZvbnQtc2l6ZTogNzVweDtcbn1cblxuLmNhcmRfYm94IHtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG4uaW5wX2NvbnRyb2wge1xuICBib3JkZXI6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/station/attachment-dsa/attachment-dsa.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/station/attachment-dsa/attachment-dsa.page.ts ***!
  \***************************************************************/
/*! exports provided: AttachmentDsaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentDsaPage", function() { return AttachmentDsaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _redirected_pages_attach_dsa_modal_attach_dsa_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redirected_pages/attach-dsa-modal/attach-dsa-modal.page */ "./src/app/station/redirected_pages/attach-dsa-modal/attach-dsa-modal.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ "./node_modules/@ionic-native/document-viewer/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");














// import { File } from '@ionic-native/file/ngx';
// import { FileTransfer } from '@ionic-native/file-transfer/ngx';


let AttachmentDsaPage = class AttachmentDsaPage {
    constructor(alertController, formBuilder, router, activatedroute, commonServices, menu, dp, modalController, camera, platform, fileOpener, document, actionSheetController, file, transfer) {
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedroute = activatedroute;
        this.commonServices = commonServices;
        this.menu = menu;
        this.dp = dp;
        this.modalController = modalController;
        this.camera = camera;
        this.platform = platform;
        this.fileOpener = fileOpener;
        this.document = document;
        this.actionSheetController = actionSheetController;
        this.file = file;
        this.transfer = transfer;
        this.searchShow = false;
        this.searchFlag = 0;
        //Collection
        this.listDispAttachments = [];
        //Others
        this.UserId = '';
        this.StationId = '';
        this.DepartmentCode = '';
        this.fileToUpload = null;
        this.isDataFound = false;
        this.popupFlag = false;
        this.key = 'Name';
        this.reverse = true;
        this.imgURL = '';
        this.JumpReadingId = '';
        this.searchText = '';
        this.errorFlag = false;
        this.attachedImageUrl = '';
        this.imgDisplay = true;
        this.sortingColumn = "";
        this.path = window.location;
        this.DispanserJumpCeritificate = '';
        this.stationName = "";
        this.IsImageUpload = false;
        this.attachData = { Imagename: '', Imagepath: '' };
        this.StationCode = localStorage.getItem('LoginId');
        this.geteDate = { selcteddate: "" };
        this.secondMaxDate = new Date().toISOString();
        this.CurrentDate = '';
        this.DateFrom = new Date().toISOString();
        // DateTo: string;
        this.DateTo = new Date().toISOString();
        this.DateFromMy = new Date().toISOString().split('T')[0];
        this.outerCheck = 0;
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
        //   this.getData();
        // }
    }
    ngOnInit() {
        this.stationName = JSON.parse(localStorage.getItem("globalDetail"))[0].UserName;
        this.UserId = localStorage.getItem('UID');
        this.StationId = localStorage.getItem('StationId');
        this.DepartmentCode = localStorage.getItem('DepartmentCode');
        const dt = new Date();
        this.CurrentDate = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        //IoS Comment
        // this.DateFrom = new Date().toLocaleDateString();
        // this.DateTo = new Date().toLocaleDateString();
        // this.DateFrom = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        // this.DateTo = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        //IOS Add
        this.DateFrom = this.dp.transform(dt, 'yyyy/MM/dd');
        this.DateTo = this.dp.transform(dt, 'yyyy/MM/dd');
        setTimeout(() => {
            this.getData();
        });
    }
    presentModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _redirected_pages_attach_dsa_modal_attach_dsa_modal_page__WEBPACK_IMPORTED_MODULE_3__["AttachDsaModalPage"],
                cssClass: 'modal_container',
                componentProps: {
                    uploadVar: true,
                    heading: 'Upload Attachement'
                }
            });
            return yield modal.present();
        });
    }
    presentModal1(attachment) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _redirected_pages_attach_dsa_modal_attach_dsa_modal_page__WEBPACK_IMPORTED_MODULE_3__["AttachDsaModalPage"],
                cssClass: 'modal_container',
                componentProps: {
                    previewVar: true,
                    heading: 'View Attachement',
                    viewattachment: attachment
                }
            });
            return yield modal.present();
        });
    }
    openFirst() {
        if (this.DepartmentCode == 'SO') {
            this.menu.enable(true, 'menuStn');
            this.menu.open('menuStn');
        }
        else {
            this.menu.enable(true, 'menuCO');
            this.menu.open('menuCO');
        }
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
    OnDateChnageFrom(val) {
        var self = this;
        const dt = new Date(val);
        this.DateFromMy = val.split('T')[0];
        //IoS Comment
        // self.DateFrom = dt.getDate() + "/" + self.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        //IOS Add
        self.DateFrom = this.dp.transform(dt, 'yyyy/MM/dd');
        if ((new Date(self.DateTo)) < (new Date(self.DateFrom))) {
            console.log("Time");
            this.DateTo = this.DateFrom.split('T')[0];
            // this.DateFromMy = this.DateFrom.split('T')[0];
        }
        this.getData();
    }
    OnDateChnageTo(val) {
        var self = this;
        const dt = new Date(val);
        //IOS Comment
        //self.DateTo = dt.getDate() + "/" + self.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        //IOS Add
        self.DateTo = this.dp.transform(dt, 'yyyy/MM/dd');
        this.getData();
    }
    getSelectedDate(datePicker) {
        console.log("datePicker", datePicker);
        const dt = new Date(datePicker);
        let latest_date = dt.getDate() + "-" + this.monthNames[dt.getMonth()] + "-" + dt.getFullYear();
        // this.geteDate.selcteddate = latest_date;
        // this.DPREntryDateTime = this.dp.transform(this.geteDate.selcteddate, 'yyyy-MM-dd hh:mm:ss');
        this.getData();
    }
    getData() {
        this.commonServices.loadingPresent();
        var self = this;
        self.commonServices.post("CommonGetData", {
            Flag: (this.DepartmentCode == 'SO') ? 'JumpDispenserDataByStation' : 'JumpDispenserDataByMO',
            Id: (this.DepartmentCode == 'SO') ? this.StationId : this.UserId,
            ActivityLog_date: this.dp.transform(this.DateFrom, 'dd/MMM/yyyy'),
            CDashdate: this.dp.transform(this.DateTo, 'dd/MMM/yyyy'),
        }).subscribe((res) => {
            if (JSON.parse(res).Table.length > 0) {
                self.listDispAttachments = JSON.parse(res).Table;
                console.log(self.listDispAttachments, "listDispAttachments");
            }
            else {
                self.listDispAttachments = [];
                self.commonServices.presentToast("No Data Found.");
            }
            self.commonServices.loadingDismiss();
        }, (error) => {
            self.commonServices.presentToast("Something went wrong.");
            self.commonServices.loadingDismiss();
        });
    }
    getItems(ev) {
        const val = ev.target.value;
        if (val && val.trim() != '') {
            this.isItemAvailable = true;
            this.items = this.listDispAttachments.filter((item) => {
                return (item.DispenserName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            console.log(this.items);
        }
    }
    selectImage(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var self = this;
            this.JumpReadingId = item.DispanserJumpId;
            const actionSheet = yield self.actionSheetController.create({
                header: "Select Image source",
                buttons: [{
                        text: 'From Gallery',
                        handler: () => {
                            self.pickImage(self.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                    },
                    {
                        text: 'From Camera',
                        handler: () => {
                            self.pickImage(self.camera.PictureSourceType.CAMERA);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    pickImage(sourceType) {
        var self = this;
        const options = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        self.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            // let base64Image = 'data:image/jpeg;base64,' + imageData;
            // self.commonServices.presentToast("Rishabh Image 1"+self.imageURI);
            //Rishabh Comment Original
            // self.imageURI = imageData;
            // self.saveAttachment(self.imageURI)
            //Rishabh Work 
            // this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
            // .then(entry => {
            //     ( < FileEntry > entry).file(file => this.readFile(file))
            // })
            // .catch(err => {
            //     this.presentToast('Error while reading file.');
            // });
            this.file.resolveLocalFilesystemUrl(imageData.filePath).then((entry) => {
                entry.file(file => {
                    console.log(file);
                    self.commonServices.presentToast("Ri");
                    this.readFile(file);
                });
            });
        }, (err) => {
            // Handle error
            self.commonServices.presentToast(err);
            self.commonServices.loadingDismiss();
        });
    }
    readFile(file) {
        var self = this;
        const reader = new FileReader();
        reader.onloadend = () => {
            const imgBlob = new Blob([reader.result], {
                type: file.type
            });
            const formData = new FormData();
            formData.append('JumpReadingId', this.JumpReadingId);
            formData.append('Image', imgBlob, file.name);
            self.commonServices.uploadAttachment(formData).subscribe(dataRes => {
                self.commonServices.presentToast("Rishabh Image 4" + "Success");
                console.log(dataRes);
                self.getData();
            }, (error) => {
                self.commonServices.presentToast("Rishabh Image 5" + "Something went wrong.");
                self.commonServices.loadingDismiss();
            });
        };
        reader.readAsArrayBuffer(file);
    }
    saveAttachment(imageURI) {
        var self = this;
        let fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
        // self.commonServices.presentToast("Rishabh Image 2.1"+fileName);
        self.commonServices.loadingPresent();
        // let fileextension=  fileName.lastIndexOf('.') + 1;
        let fileextension = fileName.split('.').pop();
        if (fileextension == "jpg") {
            self.attachData.Imagename = fileName;
            // self.commonServices.presentToast("Rishabh Image 2"+self.attachData.Imagename);
            self.commonServices.loadingDismiss();
        }
        else {
            self.attachData.Imagename = fileName + '.jpg';
            // self.commonServices.presentToast("Rishabh Image 3"+self.attachData.Imagename);
            self.commonServices.loadingDismiss();
        }
        const frmData = new FormData();
        // frmData.append('Image', '', self.attachData.Imagename);
        if (self.attachData.Imagename != undefined) {
            console.log(self.attachData.Imagename);
            frmData.append('Image', self.attachData.Imagename);
        }
        frmData.append('JumpReadingId', self.JumpReadingId);
        self.commonServices.presentToast("Rishabh frmData" + frmData);
        self.commonServices.loadingPresent();
        self.commonServices.uploadAttachment(frmData).subscribe((resp) => {
            self.commonServices.presentToast("Rishabh Image 4" + resp);
            self.getData();
            self.commonServices.loadingDismiss();
        }, (error) => {
            self.commonServices.presentToast("Rishabh Image 5" + "Something went wrong.");
            self.commonServices.loadingDismiss();
        });
    }
    GenerateJumpCertificate(item) {
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
        }).subscribe((res) => {
            const data = JSON.parse(res);
            console.log(data, "JumpReadingCerficatateById");
            if (data) {
                var PdfUrl = "";
                PdfUrl = this.commonServices.baseUrl.substring(0, this.commonServices.baseUrl.length - 4) + JSON.parse(res);
                console.log(PdfUrl);
                // const FileSaver = require('file-saver');
                // FileSaver.saveAs(PdfUrl);
                let path = null;
                if (this.platform.is('ios')) {
                    path = this.file.documentsDirectory;
                }
                else {
                    path = this.file.dataDirectory;
                }
                const transfer = this.transfer.create();
                transfer.download(PdfUrl, path + data).then(entry => {
                    let url = entry.toURL();
                    if (this.platform.is('ios')) {
                        this.document.viewDocument(url, 'application/pdf', {});
                    }
                    else {
                        this.fileOpener.open(url, 'application/pdf');
                    }
                });
            }
            self.commonServices.loadingDismiss();
        }, (error) => {
            self.commonServices.presentToast("Something went wrong.");
            self.commonServices.loadingDismiss();
        });
    }
};
AttachmentDsaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_12__["FileOpener"] },
    { type: _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_11__["DocumentViewer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"] }
];
AttachmentDsaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-attachment-dsa',
        template: __webpack_require__(/*! raw-loader!./attachment-dsa.page.html */ "./node_modules/raw-loader/index.js!./src/app/station/attachment-dsa/attachment-dsa.page.html"),
        styles: [__webpack_require__(/*! ./attachment-dsa.page.scss */ "./src/app/station/attachment-dsa/attachment-dsa.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_12__["FileOpener"],
        _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_11__["DocumentViewer"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"]])
], AttachmentDsaPage);



/***/ })

}]);
//# sourceMappingURL=station-attachment-dsa-attachment-dsa-module-es2015.js.map