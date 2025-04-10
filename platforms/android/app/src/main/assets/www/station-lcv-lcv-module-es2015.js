(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["station-lcv-lcv-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/station/lcv/lcv.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/station/lcv/lcv.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"hidelcv\">\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<div class=\"main_heading1\">\r\n\t\t<div>\r\n\t\t\t<ion-back-button defaultHref=\"dpr-entry\"></ion-back-button>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<h1>LCV</h1>\r\n\t\t</div>\r\n\t\t<div></div>\r\n\t</div>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"hidelcv\">\r\n\t<div class=\"content_area\">\r\n\t\t<!-- <form class=\"myform\"> -->\r\n\t\t<ion-grid>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"sap_no_div\">\r\n\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t<strong>SAP Equipment Number : </strong>\r\n\t\t\t\t\t\t\t<span>{{SAPEquipmentNumber == \"\" ? '0.000' : SAPEquipmentNumber}}</span>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t<label>Select Date\r\n\t\t\t\t\t\t\t\t<span class=\"star\">*</span>\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label>Select Date:</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-datetime #selcteddate class=\"datepick\" [(ngModel)]=\"geteDate.selcteddate\"\r\n\t\t\t\t\t\t\t\t\tdisplayFormat=\"DD-MMM-YYYY\" pickerFormat=\"DD MMM YYYY\" name=\"selcteddate\"\r\n\t\t\t\t\t\t\t\t\t[max]=\"secondMaxDate\" (ngModelChange)=\"getSelectedDate(selcteddate.value)\">\r\n\t\t\t\t\t\t\t\t</ion-datetime>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t<label>LCV Name</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t<ion-select placeholder=\"Select One\" (ionChange)=\"GetStationLcv($event.detail.value)\"\r\n\t\t\t\t\t\t\t\tstyle=\"padding-top: 8px;padding-bottom: 8px;background-color: white;padding-right: 10px;\">\r\n\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let obj of stationLcvData2\" [value]=\"obj.LcvId\">\r\n\t\t\t\t\t\t\t\t\t{{obj.LcvName}}</ion-select-option>\r\n\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"form_inp_container mb10\">\r\n\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t<label>LCV Meter Totaliser <span class=\"star\">*</span></label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"input_container d_flex justify_space_beetween\">\r\n\t\t\t\t\t\t\t<ion-input placeholder=\"Flow Meter Totaliser\" [value]=\"lcvmeterTotaliser\"\r\n\t\t\t\t\t\t\t\t(input)=\"lcvmeterTotaliser=$event.target.value\"></ion-input>\r\n\t\t\t\t\t\t\t<span class=\"font13 mr5\">Prev\r\n\t\t\t\t\t\t\t\t:{{LCVMeterTotaliserPrv == \"\" ? '0.000' : LCVMeterTotaliserPrv}}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"form_inp_container ion-text-right\">\r\n\t\t\t\t\t\t<ion-button size=\"small\" (click)=\"showhidechangereset()\" class=\"change_reset_btn\">\r\n\t\t\t\t\t\t\tJump/Change/Reset</ion-button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\r\n\t\t\t<!-- New Comment -->\r\n\t\t\t<!-- <ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t<ion-checkbox (ionChange)=\"showFields_jump()\"></ion-checkbox>&nbsp;&nbsp;Jump\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"12\" *ngIf=\"varJump\">\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<ion-label>Jump Reading</ion-label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-input [value]=\"LCVjumpreading\" (input)=\"LCVjumpreadingValue($event.target.value)\">\r\n\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<ion-label>Choose File</ion-label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-input type=\"file\" name=\"LCVfileInput\" id=\"LCVfileInput\"\r\n\t\t\t\t\t\t\t\t\t(change)=\"fileupload($event)\" [disabled]=\"LCVfilevisible\"></ion-input>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<ion-label>Jump Reading Count</ion-label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-input [value]=\"jumpreadingcount\" (input)=\"jumpreadingcount=$event.target.value\">\r\n\t\t\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row> -->\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"form_inp_contaienr\">\r\n\t\t\t\t\t\t<div class=\"label_conatiner\">\r\n\t\t\t\t\t\t\t<ion-label>Remark</ion-label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- <div class=\"input_container\" [hidden]=\"IsLCVhide\">\r\n\t\t\t\t\t\t\t<ion-input [value]=\"LCVremark\" (input)=\"LCVremark=$event.target.value\"></ion-input>\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t<ion-input [value]=\"LCVremark\" (input)=\"LCVremark=$event.target.value\"></ion-input>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"button_container\" [hidden]=\"IsLCVhide\">\r\n\t\t\t\t\t\t<ion-button color=\"dark_green_clr\" \r\n\t\t\t\t\t\t[hidden]=\"LCVisStationSubmitted > 0 || LCVisCRSentToHo > 0\"\r\n\t\t\t\t\t\t\t(click)=\"InsertStationLCV()\" type=\"submit\">Save</ion-button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-grid>\r\n\t\t<div class=\"msg\">\r\n\t\t\t<span class=\"data_submit_msg\" [hidden]=\"LCVisStationSubmitted == 0 \">* Data is submitted for the date\r\n\t\t\t\t{{geteDate.selcteddate}} by Station.</span><br>\r\n\t\t\t<span class=\"data_submit_msg\" [hidden]=\"LCVisCRSentToHo == 0 \">* Submission is closed for date\r\n\t\t\t\t{{geteDate.selcteddate}} by Control Room.</span>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div class=\"msg\" *ngIf=\"IsLCVhide\" style=\"margin-left: 15px;\">\r\n\t\t\t<span class=\"data_submit_msg\" >* Equipment not available for this Station.</span>\r\n\t\t</div>\t\r\n\t\t<!-- </form> -->\r\n\t</div>\r\n</ion-content>\r\n\r\n<!-------------------------------------------------------- Start LCV Arm A Popup-------------------------------------------------------->\r\n\r\n<ion-header *ngIf=\"showhideflag\">\r\n\t<ion-toolbar color=\"dark_green\">\r\n\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-left\">\r\n\t\t\t\t<ion-back-button defaultHref=\"package\" class=\"text_white\"></ion-back-button>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"8\" class=\"ion-text-center\">\r\n\t\t\t\t<ion-text class=\"text_white\">Jump/Change/Reset Meter</ion-text>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"showhideflag\">\r\n\t<div class=\"content_area\">\r\n\t\t<form>\r\n\t\t\t<ion-grid>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<ion-label>Action</ion-label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t<ion-label>Action</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-select placeholder=\"Select One\" [value]=\"LCVFlagJumpType\"\r\n\t\t\t\t\t\t\t\t\t\t(ionChange)=\"LCVresetchange($event.detail.value)\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-select-option value='J'>Jump</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t<ion-select-option value=\"R\">Reset</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t<ion-select-option value=\"C\">Change</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t\t<ion-label>Before</ion-label>\r\n\t\t\t\t\t\t<ion-input class=\"inp_control\" placeholder=\"Before Meter Reading\" [value]=\"OldMeterReading\"\r\n\t\t\t\t\t\t\t(input)=\"OldMeterReading=$event.target.value\" name=\"Before\"></ion-input>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t\t<ion-label>After</ion-label>\r\n\t\t\t\t\t\t<ion-input class=\"inp_control\" placeholder=\"After Meter Reading\" [value]=\"NewMeterReading\"\r\n\t\t\t\t\t\t\t(input)=\"LCVJReadingvalue($event.target.value)\"\r\n\t\t\t\t\t\t\t(input)=\"NewMeterReading=$event.target.value\" name=\"after\"></ion-input>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t\t<ion-label>Attachment</ion-label>\r\n\t\t\t\t\t\t<ion-input #inputFile type=\"file\" class=\"inp_control\" id=\"LCVfileInputreset\"\r\n\t\t\t\t\t\t\tname=\"LCVfileInputreset\" (ionChange)=\"fileuploadreset($event.target.files, $event)\"\r\n\t\t\t\t\t\t\t[disabled]=\"popupfilevisible\">\r\n\t\t\t\t\t\t</ion-input>\r\n\t\t\t\t\t\t<!-- <span *ngIf=\"!IsFileSelected\" class=\"temp_file_name\" style=\"right:-6px;\">{{FileName}}</span> -->\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t\t<ion-label>Remark</ion-label>\r\n\t\t\t\t\t\t<ion-textarea class=\"inp_control\" [value]=\"MeterJumpRemark\"\r\n\t\t\t\t\t\t\t(input)=\"MeterJumpRemark=$event.target.value\" placeholder=\"Remark\" placeholder=\"Remark\"\r\n\t\t\t\t\t\t\tplaceholder=\"Remark\"></ion-textarea>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<th>Sr No</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Before</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>After</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Jumped</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Action Type</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Remark</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let itm of LCVJumpListHistory, let i = index\">\r\n\t\t\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.BeforeJumpReading}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.AfterJumpReading}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.JumpReading}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.Action}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.Remark}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<!-- <td>{{itm.DispanserJumpRemark}}</td> -->\r\n\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <span (click)=\"UpdateLCVJumpHistory(itm.id, itm)\">Edit</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"closeicon\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"DeleteLCVJumpHistory(itm.id,itm.Action, itm)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon ios=\"ios-close\" md=\"md-close\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t</span> -->\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"dark\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"UpdateLCVJumpHistory(itm.id, itm)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"create\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-button>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"danger\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"DeleteLCVJumpHistory(itm.id,itm.Action, itm)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"trash\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<!-- <ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<ion-label>Old Meter Reading <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-input type=\"text\" [value]=\"OldMeterReading\" (input)=\"OldMeterReading=$event.target.value\"  placeholder=\"Old Meter Reading\"></ion-input>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<ion-label>Jump Reading(If any)</ion-label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-input type=\"text\" [value]=\"JReading\" (input)=\"JReadingvalue($event.target.value)\"  placeholder=\"Jump Reading\"></ion-input>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<ion-label>Choose File</ion-label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-input type=\"file\" name=\"LCVfileInputreset\" id=\"LCVfileInputreset\" (change)=\"fileuploadreset($event)\" [disabled]=\"popupfilevisible\"></ion-input>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row> -->\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"button_container\">\r\n\t\t\t\t\t\t\t<ion-button color=\"dark_green_clr\" (click)=\"LCVchangeresetpopup()\" type=\"submit\">Save\r\n\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</ion-grid>\r\n\t\t</form>\r\n\t</div>\r\n</ion-content>\r\n\r\n<!--************* end Popup  *************-->"

/***/ }),

/***/ "./src/app/station/lcv/lcv-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/station/lcv/lcv-routing.module.ts ***!
  \***************************************************/
/*! exports provided: LcvPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LcvPageRoutingModule", function() { return LcvPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _lcv_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lcv.page */ "./src/app/station/lcv/lcv.page.ts");




const routes = [
    {
        path: '',
        component: _lcv_page__WEBPACK_IMPORTED_MODULE_3__["LcvPage"]
    }
];
let LcvPageRoutingModule = class LcvPageRoutingModule {
};
LcvPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LcvPageRoutingModule);



/***/ }),

/***/ "./src/app/station/lcv/lcv.module.ts":
/*!*******************************************!*\
  !*** ./src/app/station/lcv/lcv.module.ts ***!
  \*******************************************/
/*! exports provided: LcvPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LcvPageModule", function() { return LcvPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _lcv_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lcv-routing.module */ "./src/app/station/lcv/lcv-routing.module.ts");
/* harmony import */ var _lcv_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lcv.page */ "./src/app/station/lcv/lcv.page.ts");







let LcvPageModule = class LcvPageModule {
};
LcvPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _lcv_routing_module__WEBPACK_IMPORTED_MODULE_5__["LcvPageRoutingModule"]
        ],
        declarations: [_lcv_page__WEBPACK_IMPORTED_MODULE_6__["LcvPage"]]
    })
], LcvPageModule);



/***/ }),

/***/ "./src/app/station/lcv/lcv.page.scss":
/*!*******************************************!*\
  !*** ./src/app/station/lcv/lcv.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".closeicon {\n  vertical-align: sub;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvc3RhdGlvbi9sY3YvbGN2LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc3RhdGlvbi9sY3YvbGN2LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFXLG1CQUFBO0FDRVgiLCJmaWxlIjoic3JjL2FwcC9zdGF0aW9uL2xjdi9sY3YucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb3NlaWNvbnt2ZXJ0aWNhbC1hbGlnbjogc3ViO30iLCIuY2xvc2VpY29uIHtcbiAgdmVydGljYWwtYWxpZ246IHN1Yjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/station/lcv/lcv.page.ts":
/*!*****************************************!*\
  !*** ./src/app/station/lcv/lcv.page.ts ***!
  \*****************************************/
/*! exports provided: LcvPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LcvPage", function() { return LcvPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








let LcvPage = class LcvPage {
    constructor(formBuilder, router, activatedroute, commonServices, menu, dp) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedroute = activatedroute;
        this.commonServices = commonServices;
        this.menu = menu;
        this.dp = dp;
        this.varJump = false;
        this.flagJump = 0;
        this.showhideflag = false;
        this.hidelcv = true;
        this.geteDate = { selcteddate: "" };
        this.ionLcvData = [];
        this.stationLcvData = [];
        this.stationLcvData1 = [];
        this.stationLcvData2 = [];
        this.IsLCVhide = false;
        this.LCVMeterTotaliserPrv = "";
        this.SAPEquipmentNumber = "";
        this.lcvid = 0;
        this.lcvmeterTotaliser = "";
        this.LCVjumpreading = "";
        this.jumpreadingcount = "";
        this.LCVremark = "";
        this.LCVOldMeterReading = "";
        this.LCVJReading = "";
        this.LCVresetTypeJsonSelected = "";
        this.LCVisCRSentToHo = 0;
        this.LCVisStationSubmitted = 0;
        this.LCVfilevisible = true;
        this.LCVpopupfilevisible = true;
        this.LCVJumpVisible = true;
        this.NewMeterReading = "";
        this.MeterJumpRemark = "";
        this.MSJumpListHistory = [];
        this.JumpHistoryId = '';
        this.MSJReading = "";
        this.MSpopupfilevisible = true;
        this.JumpCertificateLCV = "";
        this.LCVShowJumpImage = false;
        this.LcvReadingAverage = '';
        this.LCVFlagJumpType = 'J';
        this.MSFlagJumpType = 'J';
        this.secondMaxDate = new Date().toISOString();
        this.monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ];
        this.currentdate = new Date().toISOString().split('T')[0];
        this.currentTimeR = new Date().toISOString().split('T')[1].split('.')[0];
        if (this.geteDate.selcteddate == "") {
            this.currDate = this.currentdate;
            console.log(this.currDate);
            const dt = new Date(this.currDate);
            //IOS Comment
            // let latest_date = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
            // this.geteDate.selcteddate = latest_date;
            // this.DPREntryDateTime = this.dp.transform(this.geteDate.selcteddate, 'yyyy-MM-dd hh:mm:ss');
            // this.geteDate.selcteddate = this.DPREntryDateTime;
            this.DPREntryDateTime = this.dp.transform(dt, 'yyyy/MM/dd hh:mm:ss');
            this.geteDate.selcteddate = this.DPREntryDateTime;
            // this.DPREntryDateTime = this.currentdate + ' ' + this.currentTimeR;
            // this.geteDate.selcteddate = this.DPREntryDateTime;
            //  // this.DPREntryDateTime = this.dp.transform(this.geteDate.selcteddate, 'yyyy-MM-dd hh:mm:ss');
            // // this.geteDate.selcteddate = this.DPREntryDateTimeF;
            // this.DPREntryDateTime = this.currentdate + ' ' + this.currentTimeR;
            // this.geteDate.selcteddate = this.DPREntryDateTime;
        }
    }
    ngOnInit() {
        this.GetStationLcv('-999');
    }
    openFirst() {
        this.menu.enable(true, 'menuStn');
        this.menu.open('menuStn');
    }
    changResetRedirect() {
        this.router.navigate(['change-reset-lcv']);
    }
    showFields_jump() {
        if (this.flagJump == 0) {
            this.varJump = true;
            this.flagJump = 1;
        }
        else {
            this.varJump = false;
            this.flagJump = 0;
        }
    }
    getSelectedDate(datePicker) {
        console.log("datePicker", datePicker);
        const dt = new Date(datePicker);
        // let latest_date = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        // this.geteDate.selcteddate = latest_date;
        this.DPREntryDateTime = this.dp.transform(dt, 'yyyy/MM/dd hh:mm:ss');
        this.geteDate.selcteddate = this.DPREntryDateTime;
        //IoS Comment
        // this.DPREntryDateTime = this.dp.transform(this.geteDate.selcteddate, 'yyyy-MM-dd hh:mm:ss');
        // this.geteDate.selcteddate = this.DPREntryDateTime;
    }
    showhidechangereset() {
        this.hidelcv = false;
        this.showhideflag = true;
    }
    // GetStationLcv(id) {
    //   this.LCVuploadedfile = null;
    //   this.lcvid = id;
    //   this.LCVMeterTotaliserPrv = "";
    //   this.SAPEquipmentNumber = "";
    //   var LoginId = localStorage.getItem('LoginId');
    //   this.commonServices.loadingPresent();
    //   this.commonServices.postwithservice("GetStationLcv", { LoginId: LoginId, StationCode: LoginId, LcvId: id, DPREntryDate: this.geteDate.selcteddate }).subscribe(
    //     (resp: any) => {
    //       console.log(JSON.parse(resp));
    //       const data = JSON.parse(resp);
    //       console.log(data);
    //       if (data[0].length != 0 && data[1].length != 0) {
    //         this.IsLCVhide = false;
    //         this.stationLcvData = JSON.parse(resp);
    //         this.stationLcvData1 = JSON.parse(resp)[1];
    //         this.stationLcvData2 = JSON.parse(resp)[0];
    //         this.lcvmeterTotaliser = this.stationLcvData1[0].LCVMeterTotaliser;
    //         this.LCVjumpreading = this.stationLcvData1[0].JumpReadingLCV;
    //         this.jumpreadingcount = this.stationLcvData1[0].JumpReadingLCVCount;
    //         this.LCVremark = this.stationLcvData1[0].Remark;
    //         this.LCVisCRSentToHo = isNullOrUndefined(this.stationLcvData1[0].isCRSentToHo) ? 0 : this.stationLcvData1[0].isCRSentToHo;
    //         this.LCVisStationSubmitted = isNullOrUndefined(this.stationLcvData1[0].isStationSubmitted) ? 0 : this.stationLcvData1[0].isStationSubmitted;
    //         console.log(this.LCVisCRSentToHo, "LCVisCRSentToHo");
    //         console.log(this.LCVisStationSubmitted, "LCVisStationSubmitted");
    //         this.getLCVJumpHistory('GET');
    //         if (parseFloat(this.LCVjumpreading) > 0.000) {
    //           this.LCVfilevisible = false;
    //           $("#Ischeckbox").prop("checked", true);
    //           this.LCVJumpVisible = false;
    //         } else {
    //           this.LCVfilevisible = true;
    //           $("#Ischeckbox").prop("checked", false);
    //           this.LCVJumpVisible = true;
    //         }
    //         console.log(this.stationLcvData);
    //         if (id == '-999') {
    //           this.lcvid = this.stationLcvData2[0].LcvId;
    //         }
    //         this.stationLcvData1.forEach(element => {
    //           this.LCVMeterTotaliserPrv = element.LCVMeterTotaliserPrv;
    //           this.SAPEquipmentNumber = element.LcvCode;
    //         });
    //         // this.commonServices.loadingDismiss();
    //       }
    //       else {
    //         this.commonServices.presentToast('No LCV data available. Please try another station.')
    //         // this.commonServices.loadingDismiss();
    //         this.IsLCVhide = true;
    //         this.LCVisCRSentToHo = 0;
    //         this.LCVisStationSubmitted = 0;
    //         console.log(this.LCVisCRSentToHo, "LCVisCRSentToHo");
    //         console.log(this.LCVisStationSubmitted, "LCVisStationSubmitted");
    //       }
    //       this.commonServices.loadingDismiss();
    //     },
    //     (error) => {
    //       this.commonServices.presentToast('Something went wrong.');
    //       this.commonServices.loadingDismiss();
    //     }
    //   )
    // }
    GetStationLcv(id) {
        this.LCVuploadedfile = null;
        this.lcvid = id;
        this.LCVMeterTotaliserPrv = "";
        this.SAPEquipmentNumber = "";
        var LoginId = localStorage.getItem('LoginId');
        this.commonServices.loadingPresent();
        this.commonServices.postwithservice("GetStationLcv", {
            LoginId: LoginId, StationCode: LoginId,
            LcvId: id, DPREntryDate: this.dp.transform(this.geteDate.selcteddate, 'dd/MMM/yyyy')
        }).subscribe((resp) => {
            console.log(JSON.parse(resp));
            const data = JSON.parse(resp);
            console.log(data);
            if (data[0].length != 0 && data[1].length != 0) {
                this.IsLCVhide = false;
                this.stationLcvData = JSON.parse(resp);
                this.stationLcvData1 = JSON.parse(resp)[1];
                this.stationLcvData2 = JSON.parse(resp)[0];
                this.lcvmeterTotaliser = this.stationLcvData1[0].LCVMeterTotaliser;
                this.LCVjumpreading = this.stationLcvData1[0].JumpReadingLCV;
                this.jumpreadingcount = this.stationLcvData1[0].JumpReadingLCVCount;
                this.JumpCertificateLCV = this.stationLcvData1[0].JumpCeritificateLCV;
                if (this.JumpCertificateLCV != '')
                    this.LCVShowJumpImage = true;
                else
                    this.LCVShowJumpImage = false;
                this.LCVremark = this.stationLcvData1[0].Remark;
                this.LCVisCRSentToHo = Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(this.stationLcvData1[0].isCRSentToHo) ? 0 : this.stationLcvData1[0].isCRSentToHo;
                this.LCVisStationSubmitted = Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(this.stationLcvData1[0].isStationSubmitted) ? 0 : this.stationLcvData1[0].isStationSubmitted;
                console.log(this.LCVisCRSentToHo, "LCVisCRSentToHo");
                console.log(this.LCVisStationSubmitted, "LCVisStationSubmitted");
                if (parseFloat(this.LCVjumpreading) > 0.000) {
                    this.LCVfilevisible = false;
                    $("#Ischeckbox").prop("checked", true);
                    this.LCVJumpVisible = false;
                }
                else {
                    this.LCVfilevisible = true;
                    $("#Ischeckbox").prop("checked", false);
                    this.LCVJumpVisible = true;
                }
                console.log(this.stationLcvData);
                if (id == '-999') {
                    this.lcvid = this.stationLcvData2[0].LcvId;
                    this.getLCVJumpHistory('GET');
                }
                this.stationLcvData1.forEach(element => {
                    this.LCVMeterTotaliserPrv = element.LCVMeterTotaliserPrv;
                    this.SAPEquipmentNumber = element.LcvCode;
                });
                this.commonServices.loadingDismiss();
            }
            else {
                this.commonServices.presentToast('No LCV data available. Please try another station.');
                this.commonServices.loadingDismiss();
                this.IsLCVhide = true;
                this.LCVisCRSentToHo = 0;
                this.LCVisStationSubmitted = 0;
                console.log(this.LCVisCRSentToHo, "LCVisCRSentToHo");
                console.log(this.LCVisStationSubmitted, "LCVisStationSubmitted");
            }
        }, (error) => {
            this.commonServices.presentToast('Something went wrong.');
            this.commonServices.loadingDismiss();
        });
    }
    fileupload(str) {
        this.LCVuploadedfile = str.target.files[0];
    }
    LCVfileuploadreset(str) {
        this.LCVuploadedfilereset = str.target.files[0];
    }
    fileuploadreset(str) {
        this.uploadedfilereset = str.target.files[0];
        ;
    }
    LCVjumpreadingValue(value) {
        this.LCVjumpreading = value;
        if (this.LCVjumpreading != '') {
            this.LCVfilevisible = false;
        }
        else {
            this.LCVfilevisible = true;
        }
    }
    InsertStationLCV() {
        var MyJson = {
            LoginId: localStorage.getItem('Loginidd'),
            LcvId: this.lcvid,
            LCVMeterTotaliser: this.lcvmeterTotaliser,
            JumpReadingLCV: 0,
            JumpReadingLCVCount: 0,
            JumpCeritificateLCV: ((this.LCVuploadedfile == undefined) ? '' : this.LCVuploadedfile.name),
            Remark: this.LCVremark,
            StationCode: localStorage.getItem('LoginId'),
            FilePath: localStorage.getItem('LoginId') + "/lcv/",
            DPREntryDate: this.geteDate.selcteddate
        };
        //IOS Comment
        // this.commonServices.postwithservice("LCVAverage", { LoginId: localStorage.getItem('LoginId'), 
        // DPREntryDate: this.dp.transform(this.geteDate.selcteddate, 'dd-MMM-yyyy') }).subscribe(
        this.commonServices.postwithservice("LCVAverage", {
            LoginId: localStorage.getItem('LoginId'),
            DPREntryDate: this.dp.transform(this.geteDate.selcteddate, 'dd/MMM/yyyy')
        }).subscribe((resp) => {
            const data = JSON.parse(resp).Table[0];
            this.LcvReadingAverage = data.FinalAmount;
            console.log(this.LcvReadingAverage);
            console.log(this.lcvmeterTotaliser);
        }, (error) => {
            console.log(error);
            this.commonServices.presentToast("Something went wrong.");
            this.commonServices.loadingDismiss();
        });
        // Ios Comment
        // this.LCVfiles = $('#LCVfileInput');
        var frmData = new FormData();
        // var fileInput = this.LCVfiles[0];
        frmData.append("lcvDetail", JSON.stringify(MyJson));
        // if (this.LCVuploadedfile != undefined) {
        //   frmData.append('JumpReadingFile', this.LCVuploadedfile, this.LCVuploadedfile.name);
        // }
        // var ErrorMsg = this.checkStationValidations(MyJson, fileInput);
        var ErrorMsg = this.checkStationValidations(MyJson);
        if (ErrorMsg == '' || ErrorMsg == undefined) {
            if (Number(this.lcvmeterTotaliser) <= Number(this.LCVMeterTotaliserPrv)) {
                this.commonServices.alertMessage("Confirm", "Suspected Meter Totaliser Reading, Do you want to continue?").then((res) => {
                    console.log(res);
                    if (!res) {
                        // if (confirm("Suspected Meter Totaliser Reading, Do you want to continue?")) {
                        this.commonServices.loadingPresent();
                        this.commonServices.InsertStationLCV(frmData).subscribe((resp) => {
                            const data = resp;
                            console.log(data);
                            this.commonServices.presentToast(data);
                            if (data != '') {
                                this.GetStationLcv(this.lcvid);
                            }
                            this.commonServices.loadingDismiss();
                        }, (error) => {
                            this.commonServices.presentToast('Something went wrong.');
                            this.commonServices.loadingDismiss();
                        });
                    }
                });
            }
            else if (this.lcvmeterTotaliser > this.LcvReadingAverage) {
                // if(confirm("Wrong Entry for Meter Skid Reading, Do you want to continue?")) {
                this.commonServices.alertMessage("Confirm", "Wrong Entry for Meter Totaliser Reading, Do you want to continue?").then((res) => {
                    console.log(res);
                    if (!res) {
                        this.commonServices.InsertStationLCV(frmData).subscribe((resp) => {
                            const data = resp;
                            console.log(data);
                            this.commonServices.presentToast(data);
                            if (data != '') {
                                this.GetStationLcv(this.lcvid);
                            }
                        }, (error) => {
                            this.commonServices.presentToast('Something went wrong.');
                            this.commonServices.loadingDismiss();
                        });
                    }
                });
            }
            else if (Number(this.lcvmeterTotaliser) >= 2 * Number(this.LCVMeterTotaliserPrv)) {
                this.commonServices.alertMessage("Confirm", "Suspected Meter Totaliser Reading, Do you want to continue?").then((res) => {
                    console.log(res);
                    if (!res) {
                        // if (confirm("Suspected Meter Totaliser Reading, Do you want to continue?")) {
                        this.commonServices.loadingPresent();
                        this.commonServices.InsertStationLCV(frmData).subscribe((resp) => {
                            const data = resp;
                            console.log(data);
                            this.commonServices.presentToast(data);
                            if (data != '') {
                                this.GetStationLcv(this.lcvid);
                            }
                            this.commonServices.loadingDismiss();
                        }, (error) => {
                            this.commonServices.presentToast('Something went wrong.');
                            this.commonServices.loadingDismiss();
                        });
                    }
                });
            }
            else {
                this.commonServices.loadingPresent();
                this.commonServices.InsertStationLCV(frmData).subscribe((resp) => {
                    const data = resp;
                    console.log(data);
                    this.commonServices.presentToast(data);
                    if (data != '') {
                        this.GetStationLcv(this.lcvid);
                    }
                    this.commonServices.loadingDismiss();
                }, (error) => {
                    this.commonServices.presentToast('Something went wrong.');
                    this.commonServices.loadingDismiss();
                });
            }
        }
        else {
            this.commonServices.presentToast(ErrorMsg);
        }
    }
    // checkStationValidations(LcvDetailJson, fileInput) {
    checkStationValidations(LcvDetailJson) {
        var regexNumeric = /^[+-]?[0-9]{1,1000}(?:\.[0-9]{1,1000})?$/;
        var regexDecimalThree = /^[+-]?[0-9]{1,10}(?:\.[0-9]{1,3})?$/;
        var regexDecimalThreeNegative = /^[+]?[0-9]{1,10}(?:\.[0-9]{1,3})?$/;
        var imgShow = 'assets/images/attachment.gif';
        var foundError = '';
        var foundError = '';
        if (LcvDetailJson.LCVMeterTotaliser == '') {
            foundError = 'LCV Meter Totaliser is required.';
            return foundError;
        }
        if ((LcvDetailJson.JumpReadingLCV == '' || LcvDetailJson.JumpReadingLCV == undefined || parseFloat(LcvDetailJson.JumpReadingLCV) == parseFloat("0")) && parseFloat(LcvDetailJson.LCVMeterTotaliser) == parseFloat("0")) {
            foundError = 'Invalid Meter Totaliser Reading';
            return foundError;
        }
        if (LcvDetailJson.LCVMeterTotaliser != "") {
            if (regexNumeric.test(LcvDetailJson.LCVMeterTotaliser) == false) {
                foundError = 'Only numeric value allowed for reading.';
                return foundError;
            }
            if (regexDecimalThree.test(LcvDetailJson.LCVMeterTotaliser) == false) {
                foundError = 'Three decimal with Max 10 Precision values allowed';
                return foundError;
            }
            if (parseFloat(LcvDetailJson.LCVMeterTotaliser) < 0) {
                foundError = 'LCV Meter Totaliser must be Positive.';
                return foundError;
            }
        }
        //New Comment//
        // if (LcvDetailJson.JumpReadingLCV != '' && parseFloat(LcvDetailJson.JumpReadingLCV) > 0) {
        //   //need to check fileinput issue
        //   //    if (parseFloat(LcvDetailJson.JumpReadingLCV) > 0 && fileInput.files.length == 0 && LcvDetailJson.JumpCeritificateLCV == '')    
        //   //     { 
        //   //        foundError = 'Please attach the Jump certificate.'; 
        //   //        return foundError; 
        //   //     }
        //   // if (fileInput.files.length > 0) {
        //   //     var validExtension = 'jpeg,jpg,png,gif';
        //   //     for (var i = 0; i < fileInput.files.length; i++) {
        //   //         var fileExtension = fileInput.files[i].name.split('.')[1];
        //   //         if (validExtension.indexOf(fileExtension) < 0) {
        //   //             foundError = 'Attachment allowed only for [' + validExtension + '].'; return foundError;
        //   //         }
        //   //     }
        //   // }
        //   if (regexNumeric.test(LcvDetailJson.JumpReadingLCV) == false) {
        //     foundError = 'Only numeric value allowed for LCV Jump reading.'; return foundError;
        //   }
        //   if (regexDecimalThree.test(LcvDetailJson.JumpReadingLCV) == false) {
        //     foundError = 'Three decimal with Max 10 Precision values allowed'; return foundError;
        //   }
        // }
        // var JumpLcvCnt = LcvDetailJson.JumpReadingLCVCount;
        // if (JumpLcvCnt != '' && parseFloat(JumpLcvCnt) != 0 && (JumpLcvCnt === undefined) == false) {
        //   if (regexNumeric.test(JumpLcvCnt) == false) {
        //     foundError = 'Only numeric value allowed for Lcv Jump reading count.';
        //     return foundError;
        //   }
        //   if (JumpLcvCnt.indexOf('.') > -1) {
        //     foundError = 'Decimal value not allowed for Lcv Jump reading count.';
        //     return foundError;
        //   }
        //   if (parseFloat(JumpLcvCnt) < 0) {
        //     foundError = 'Lcv Jump reading count must be Positive.';
        //     return foundError;
        //   }
        //   // if (JumpLcvCnt == '' || (JumpLcvCnt === undefined)) {
        //   //     foundError = 'Please enter the LCV Jump reading.';
        //   //     return foundError;
        //   // }
        // }
        // // else {
        // //     if (LcvDetailJson.jumpreadingcount != '' && parseFloat(LcvDetailJson.jumpreadingcount) != 0) {
        // //         foundError = 'Jump reading Count is mandatory with Jump reading.'; return foundError;
        // //     }
        // // }
        return foundError;
    }
    LCVresetchange(value) {
        this.resetTypeJsonSelected = value;
    }
    JReadingvalue(value) {
        this.JReading = value;
    }
    getLCVJumpHistory(FlagType) {
        this.clearLCV();
        const obj = {
            FlagEntryFor: FlagType,
            MeterOf: 'LCV',
            Id: '',
            StationCode: '',
            MeterOfId: this.lcvid,
            MeterType: 'LMT',
            EntryDate: this.geteDate.selcteddate,
            FlagReadingType: ""
        };
        console.log(obj);
        this.commonServices.loadingPresent();
        this.commonServices.postwithservice("GetJumpReadingList", obj).subscribe((resp) => {
            this.LCVJumpListHistory = JSON.parse(resp).Table;
            console.log(this.LCVJumpListHistory);
            this.commonServices.loadingDismiss();
        }, (error) => {
            this.commonServices.presentToast("Something went wrong.");
            this.commonServices.loadingDismiss();
        });
    }
    DeleteLCVJumpHistory(Id, FlagReading, itm) {
        this.commonServices.alertMessage("Delete", "Are you sure to delete this record..?").then((res) => {
            console.log(res);
            if (!res) {
                var Json = {
                    Id: Id,
                    FlagEntryFor: 'DELETE',
                    FlagReadingType: FlagReading,
                    MeterOf: 'LCV',
                    MeterOfId: this.lcvid,
                    EntryDate: this.geteDate.selcteddate
                };
                this.commonServices.postwithservice("GetJumpReadingList", Json).subscribe((resp) => {
                    const data = JSON.parse(resp);
                    this.commonServices.presentToast("Record deleted succeefully");
                    setTimeout(() => {
                        this.getLCVJumpHistory('GET');
                    });
                    this.commonServices.loadingDismiss();
                }, (error) => {
                    this.commonServices.presentToast("Something went wrong.");
                    this.commonServices.loadingDismiss();
                });
            }
        });
        // if (confirm("Are you sure to delete this record..?")) {
        //   var Json = {
        //     Id: Id,
        //     FlagEntryFor: 'DELETE',
        //     FlagReadingType: FlagReading,
        //     MeterOf: 'LCV',
        //     MeterOfId: this.lcvid,
        //     EntryDate: this.geteDate.selcteddate
        //   }
        //   this.commonServices.postwithservice("GetJumpReadingList", Json).subscribe(
        //     (resp: any) => {
        //       const data = JSON.parse(resp);
        //       this.commonServices.presentToast("Record deleted succeefully");
        //       //this.openPopup(this.popupFor);
        //       setTimeout(() => {
        //         this.getLCVJumpHistory('GET');
        //       });
        //       this.commonServices.loadingDismiss();
        //     },
        //     (error) => {
        //       this.commonServices.presentToast("Something went wrong.");
        //       this.commonServices.loadingDismiss();
        //     })
        // }
        this.getLCVJumpHistory('GET');
    }
    UpdateLCVJumpHistory(Id, itm) {
        this.JumpHistoryId = Id;
        this.OldMeterReading = itm.BeforeJumpReading;
        this.NewMeterReading = itm.AfterJumpReading;
        this.MeterJumpRemark = itm.Remark;
        if (itm.Action == "Jump") {
            this.MSFlagJumpType = "J";
        }
        else if (itm.Action == "Change") {
            this.MSFlagJumpType = "C";
        }
        else {
            this.MSFlagJumpType = "R";
        }
    }
    LCVJReadingvalue(value) {
        this.JReading = value;
    }
    clearLCV() {
        this.LCVFlagJumpType = "J";
        this.OldMeterReading = "";
        this.NewMeterReading = "";
        this.MeterJumpRemark = "";
        // this.InputFileVar.value = "";
    }
    // LCVchangeresetpopup() {
    //   var MyJsonreset = {
    //     StationCode: localStorage.getItem('Loginidd'),
    //     MeterOf: 'LCV',
    //     MeterOfId: this.lcvid,
    //     MeterType: 'LMT',
    //     FlagRead: 0,
    //     FlagReadingType: this.resetTypeJsonSelected,
    //     Id: this.stationLcvData1[0].MeterResetId,
    //     LoginId: localStorage.getItem('Loginidd'),
    //     PrvReading: this.OldMeterReading,
    //     JumpReading: ((this.JReading == '') ? '0' : this.JReading),
    //     ReadingOnSwitch: ((this.stationLcvData1[0].ReadingOnSwitch == '') ? '0' : this.stationLcvData1[0].ReadingOnSwitch),
    //     FilePath: localStorage.getItem('Loginidd') + "/lcv/",
    //     MeterAfterJump: this.NewMeterReading,
    //     MeterJumpRemark: this.MeterJumpRemark,
    //     JumpHistoryId: this.JumpHistoryId,
    //     MeterBeforeJump: this.OldMeterReading,
    //     DetailId : this.stationLcvData1[0].MeterSkidId,
    //     EntryDate:this.geteDate.selcteddate 
    //   };
    //   this.LCVfilesreset = $('#LCVfileInputreset');
    //   console.log(this.LCVfilesreset);
    //   var frmData = new FormData();
    //   var fileInputreset = this.LCVfilesreset[0];
    //   frmData.append("jsonDetail", JSON.stringify(MyJsonreset));
    //   if (this.LCVuploadedfilereset != undefined) {
    //     console.log(this.LCVuploadedfilereset);
    //     frmData.append('JumpReadingFile', this.LCVuploadedfilereset, this.LCVuploadedfilereset.name);
    //   }
    //   var ErrorMsg = this.changeresetValidations(MyJsonreset);
    //   if (ErrorMsg == '' || ErrorMsg == undefined) {
    //     this.commonServices.HoldResetReading(frmData).subscribe(
    //       (resp: any) => {
    //         const data = (resp);
    //         if (data.Status == "Inserted") {
    //           this.commonServices.presentToast('Record Saved Successfully.');
    //           this.getLCVJumpHistory('GET');
    //           this.clearLCV();
    //         }
    //         else if (data.Status == "Updated") {
    //           this.commonServices.presentToast('Record Updated Successfully.');
    //           this.getLCVJumpHistory('GET');
    //           this.clearLCV();
    //         }
    //         else {
    //           this.commonServices.presentToast(data.Status);
    //         }
    //       },
    //       (error) => {
    //         this.commonServices.presentToast('Something went wrong.');
    //       }
    //     )
    //   }
    //   else {
    //     this.commonServices.presentToast(ErrorMsg);
    //   }
    //   this.getLCVJumpHistory('GET');
    // }
    LCVchangeresetpopup() {
        var MyJsonreset = {
            StationCode: localStorage.getItem('LoginId'),
            MeterOf: 'LCV',
            MeterOfId: this.lcvid,
            MeterType: 'LMT',
            FlagRead: 0,
            FlagReadingType: this.resetTypeJsonSelected,
            Id: this.stationLcvData1[0].MeterResetId,
            LoginId: localStorage.getItem('LoginId'),
            PrvReading: this.OldMeterReading,
            JumpReading: ((this.JReading == '') ? '0' : this.JReading),
            ReadingOnSwitch: ((this.stationLcvData1[0].ReadingOnSwitch == '') ? '0' : this.stationLcvData1[0].ReadingOnSwitch),
            FilePath: localStorage.getItem('LoginId') + "/lcv/",
            MeterAfterJump: this.NewMeterReading,
            MeterJumpRemark: this.MeterJumpRemark,
            JumpHistoryId: this.JumpHistoryId,
            MeterBeforeJump: this.OldMeterReading,
            EntryDate: this.geteDate.selcteddate
        };
        this.JumpHistoryId = "";
        this.LCVfilesreset = $('#LCVfileInputreset');
        console.log(this.LCVfilesreset);
        var frmData = new FormData();
        var fileInputreset = this.LCVfilesreset[0];
        frmData.append("jsonDetail", JSON.stringify(MyJsonreset));
        if (this.LCVuploadedfilereset != undefined) {
            console.log(this.LCVuploadedfilereset);
            frmData.append('JumpReadingFile', this.LCVuploadedfilereset, this.LCVuploadedfilereset.name);
        }
        var ErrorMsg = this.changeresetValidations(MyJsonreset, fileInputreset);
        if (ErrorMsg == '' || ErrorMsg == undefined) {
            this.commonServices.HoldResetReading(frmData).subscribe((resp) => {
                const data = (resp);
                if (data.Status == "Inserted") {
                    this.getLCVJumpHistory('GET');
                    this.clearLCV();
                    this.commonServices.presentToast('Record Saved Successfully.');
                }
                else if (data.Status == "Updated") {
                    this.getLCVJumpHistory('GET');
                    this.clearLCV();
                    this.commonServices.presentToast('Record Updated Successfully.');
                }
                else {
                    this.commonServices.presentToast(data.Status);
                }
            }, (error) => {
                alert('Something went wrong.');
                this.commonServices.loadingDismiss();
            });
        }
        else {
            this.commonServices.presentToast(ErrorMsg);
        }
        this.getLCVJumpHistory('GET');
    }
    LCVchangeresetValidation(LcvDetailJsonreset, fileInput) {
        var regexNumeric = /^[+-]?[0-9]{1,1000}(?:\.[0-9]{1,1000})?$/;
        var regexDecimalThree = /^[+-]?[0-9]{1,10}(?:\.[0-9]{1,3})?$/;
        var regexDecimalThreeNegative = /^[+]?[0-9]{1,10}(?:\.[0-9]{1,3})?$/;
        var imgShow = 'assets/images/attachment.gif';
        var errorMsg = '';
        if ((LcvDetailJsonreset.PrvReading === undefined) || LcvDetailJsonreset.PrvReading == '') {
            errorMsg = 'Please enter the Old Meter Reading.';
            return errorMsg;
        }
        if (regexNumeric.test(LcvDetailJsonreset.PrvReading) == false) {
            errorMsg = 'Only numeric value allowed for reading.';
            return errorMsg;
        }
        if (parseFloat(LcvDetailJsonreset.PrvReading) < 0) {
            errorMsg = 'Old Meter Reading must be Positive.';
            return errorMsg;
        }
        // if ((parseInt(LcvDetailJsonreset.JumpReading) == '0' || LcvDetailJsonreset.oldJumpReading == '') && !angular.isUndefined(LcvDetailJsonreset.fileObject) && (jsonValidation.fileObject != null) && (jsonValidation.fileObject.files.length > 0 || jsonValidation.formarJRImage == true)) {
        //     jsonErrorMsg = { errorMsg: 'Please enter the Jump Reading.' };
        //     return jsonErrorMsg;
        // }
        if (regexNumeric.test(LcvDetailJsonreset.JumpReading) == false) {
            errorMsg = 'Only numeric value allowed for Jump reading.';
            return errorMsg;
        }
        return errorMsg;
    }
    changeresetValidations(LcvDetailJsonreset, fileInput) {
        var regexNumeric = /^[+-]?[0-9]{1,1000}(?:\.[0-9]{1,1000})?$/;
        var regexDecimalThree = /^[+-]?[0-9]{1,10}(?:\.[0-9]{1,3})?$/;
        var regexDecimalThreeNegative = /^[+]?[0-9]{1,10}(?:\.[0-9]{1,3})?$/;
        var imgShow = 'assets/images/attachment.gif';
        var errorMsg = '';
        if ((LcvDetailJsonreset.PrvReading === undefined) || LcvDetailJsonreset.PrvReading == '') {
            errorMsg = 'Please enter the Old Meter Reading.';
            return errorMsg;
        }
        if (regexNumeric.test(LcvDetailJsonreset.PrvReading) == false) {
            errorMsg = 'Only numeric value allowed for reading.';
            return errorMsg;
        }
        if (parseFloat(LcvDetailJsonreset.PrvReading) < 0) {
            errorMsg = 'Old Meter Reading must be Positive.';
            return errorMsg;
        }
        // if ((parseInt(LcvDetailJsonreset.JumpReading) == '0' || LcvDetailJsonreset.oldJumpReading == '') && !angular.isUndefined(LcvDetailJsonreset.fileObject) && (jsonValidation.fileObject != null) && (jsonValidation.fileObject.files.length > 0 || jsonValidation.formarJRImage == true)) {
        //     jsonErrorMsg = { errorMsg: 'Please enter the Jump Reading.' };
        //     return jsonErrorMsg;
        // }
        if (regexNumeric.test(LcvDetailJsonreset.JumpReading) == false) {
            errorMsg = 'Only numeric value allowed for Jump reading.';
            return errorMsg;
        }
        if (fileInput.firstChild.files.length > 0) {
            var validExtension = 'jpeg,jpg,png,gif';
            for (var i = 0; i < fileInput.firstChild.files.length; i++) {
                var fileExtension = fileInput.firstChild.files[i].name.split('.').pop().toLowerCase()[1];
                if (validExtension.indexOf(fileExtension) < 0) {
                    errorMsg = 'Attachment allowed only for [' + validExtension + '].';
                    return errorMsg;
                }
            }
        }
        return errorMsg;
    }
};
LcvPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputFile', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LcvPage.prototype, "InputFileVar", void 0);
LcvPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lcv',
        template: __webpack_require__(/*! raw-loader!./lcv.page.html */ "./node_modules/raw-loader/index.js!./src/app/station/lcv/lcv.page.html"),
        styles: [__webpack_require__(/*! ./lcv.page.scss */ "./src/app/station/lcv/lcv.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]])
], LcvPage);



/***/ })

}]);
//# sourceMappingURL=station-lcv-lcv-module-es2015.js.map