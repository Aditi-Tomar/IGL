(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["station-gas-genset-gas-genset-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/station/gas-genset/gas-genset.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/station/gas-genset/gas-genset.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"hidegenset\">\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/home\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<div class=\"main_heading1\">\r\n\t\t<div>\r\n\t\t\t<ion-back-button defaultHref=\"dpr-entry\"></ion-back-button>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<h1>Gas Genset</h1>\r\n\t\t</div>\r\n\t\t<div></div>\r\n\t</div>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"hidegenset\">\r\n\t<div class=\"content_area\">\r\n\t\t<!-- <form class=\"myform\"> -->\r\n\t\t<ion-grid>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"sap_no_div\">\r\n\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t<strong>SAP Equipment Number : </strong>\r\n\t\t\t\t\t\t\t<span>{{GSSAPEquipmentNumber == \"\" ? '0.000' : GSSAPEquipmentNumber}}</span>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t<label>Select Date\r\n\t\t\t\t\t\t\t\t<span class=\"star\">*</span>\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label>Select Date:</ion-label>\r\n\t\t\t\t\t\t\t\t<!-- <ion-datetime displayFormat=\"DD-MMM-YYYY\"  name=\"DPREntryDate\" [max]=\"maxDate\"></ion-datetime> -->\r\n\t\t\t\t\t\t\t\t<ion-datetime #selcteddate class=\"datepick\" [(ngModel)]=\"geteDate.selcteddate\"\r\n\t\t\t\t\t\t\t\t\tdisplayFormat=\"DD-MMM-YYYY\" pickerFormat=\"DD MMM YYYY\" [max]=\"secondMaxDate\"\r\n\t\t\t\t\t\t\t\t\tname=\"selcteddate\" (ionChange)=\"getSelectedDate(selcteddate.value)\"></ion-datetime>\r\n\t\t\t\t\t\t\t\t<!-- form=\"DispenserDate.selcteddate\" -->\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t<label>Gas Genset Name</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t<ion-select [disabled]=\"IsGenSethide\" placeholder=\"Select One\"\r\n\t\t\t\t\t\t\t\t(ionChange)=\"GetStationGenSet($event.detail.value)\"\r\n\t\t\t\t\t\t\t\tstyle=\"padding-top: 8px;padding-bottom: 8px;background-color: white;padding-right: 10px;\">\r\n\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let itm of getGenSetDetails\" [value]=\"itm.GenSetId\">\r\n\t\t\t\t\t\t\t\t\t{{itm.GenSetName}}</ion-select-option>\r\n\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t<label>Running Hours <span class=\"star\">*</span></label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label>HH</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-select [disabled]=\"IsGenSethide\" placeholder=\"Select One\"\r\n\t\t\t\t\t\t\t\t\t(ionChange)=\"selecthrsmnts($event.detail.value,'HH')\"\r\n\t\t\t\t\t\t\t\t\tstyle=\"padding-top: 8px;padding-bottom: 8px;background-color: white;padding-right: 10px;\">\r\n\t\t\t\t\t\t\t\t\t<ion-select-option [value]=\"objhh\" *ngFor=\"let objhh of Hours\"\r\n\t\t\t\t\t\t\t\t\t\t[selected]=\"objhh == GSRunHrs\">{{objhh}}</ion-select-option>\r\n\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t<ion-label>MM</ion-label>\r\n\t\t\t\t\t\t\t\t<ion-select [disabled]=\"IsGenSethide\" placeholder=\"Select One\"\r\n\t\t\t\t\t\t\t\t\t(ionChange)=\"selecthrsmnts($event.detail.value,'MM')\"\r\n\t\t\t\t\t\t\t\t\tstyle=\"padding-top: 8px;padding-bottom: 8px;background-color: white;padding-right: 10px;\">\r\n\t\t\t\t\t\t\t\t\t<ion-select-option [value]=\"objmm\" *ngFor=\"let objmm of Minutes\"\r\n\t\t\t\t\t\t\t\t\t\t[selected]=\"objmm == GSRunMins\">{{objmm}}</ion-select-option>\r\n\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"form_inp_container mb10\">\r\n\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t<label>Meter Reading <span class=\"star\">*</span></label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"input_container d_flex justify_space_beetween\">\r\n\t\t\t\t\t\t\t<ion-input placeholder=\"Flow Meter Totaliser\" [value]=\"GSmeterTotaliser\"\r\n\t\t\t\t\t\t\t\t(input)=\"GSmeterTotaliser = $event.target.value\"></ion-input>\r\n\t\t\t\t\t\t\t<span class=\"font13 mr5\">Prev :{{PreviousReading}}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"form_inp_container ion-text-right\">\r\n\t\t\t\t\t\t<ion-button size=\"small\" class=\"change_reset_btn\" [disabled]=\"IsGenSethide\"\r\n\t\t\t\t\t\t\t(click)=\"showhidechangereset()\">Jump/Change/Reset</ion-button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<!-- New Comment -->\r\n\t\t\t<!-- <ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t<ion-checkbox (ionChange)=\"showFields_jump()\"></ion-checkbox>&nbsp;&nbsp;Jump\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t<ion-col size=\"12\" *ngIf=\"varJump\">\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<ion-label>Jump Reading</ion-label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-input [value]=\"GSjumpReading\" (input)=\"GensetjumpreadingValue($event.target.value)\"></ion-input>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<ion-label>Choose File</ion-label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-input type=\"file\" name=\"GSfileInput\" id=\"GSfileInput\" (change)=\"GensetuploadJumpReadingImg($event)\" [disabled]=\"GSfilevisible\"></ion-input>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<ion-label>Jump Reading Count</ion-label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-input [value]=\"GSjumpReadingCount\" (input)=\"GSjumpReadingCount = $event.target.value\"></ion-input>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row> -->\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"form_inp_contaienr\">\r\n\t\t\t\t\t\t<div class=\"label_conatiner\">\r\n\t\t\t\t\t\t\t<ion-label>Remark</ion-label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t<ion-input [value]=\"GSremark\" (input)=\"GSremark = $event.target.value\"></ion-input>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<div class=\"button_container\" [hidden]=\"IsGenSethide\">\r\n\t\t\t\t\t\t<ion-button color=\"dark_green_clr\" type=\"submit\"\r\n\t\t\t\t\t\t\t[hidden]=\"GSisStationSubmitted > 0  || GSisCRSentToHo > 0\" (click)=\"InsertGenSetDetails()\">\r\n\t\t\t\t\t\t\tSave</ion-button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-grid>\r\n\t\t<div class=\"msg\">\r\n\t\t\t<span class=\"data_submit_msg\" [hidden]=\"GSisStationSubmitted == 0 \">\r\n\t\t\t\t* Data is submitted for the date {{geteDate.selcteddate}} by Station.</span><br>\r\n\t\t\t<span class=\"data_submit_msg\" [hidden]=\"GSisCRSentToHo == 0 \">\r\n\t\t\t\t* Submission is closed for date {{geteDate.selcteddate}} by Control Room.</span>\r\n\t\t</div>\r\n\t\t<div class=\"msg\" *ngIf=\"IsGenSethide\" style=\"margin-left: 15px;\">\r\n\t\t\t<span class=\"data_submit_msg\" >* Equipment not available for this Station.</span>\r\n\t\t</div>\t\r\n\t\t<!-- </form> -->\r\n\t</div>\r\n</ion-content>\r\n\r\n<!-------------------------------------------------------- Start LCV Arm A Popup-------------------------------------------------------->\r\n\r\n<ion-header *ngIf=\"showhideflag\">\r\n\t<ion-toolbar color=\"dark_green\">\r\n\t\t<ion-row class=\"ion-align-items-center\">\r\n\t\t\t<ion-col size=\"2\" class=\"ion-text-left\">\r\n\t\t\t\t<ion-back-button defaultHref=\"package\" class=\"text_white\"></ion-back-button>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col size=\"8\" class=\"ion-text-center\">\r\n\t\t\t\t<ion-text class=\"text_white\">Jump/Change/Reset Gas Genset Meter</ion-text>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"showhideflag\">\r\n\t<div class=\"content_area\">\r\n\t\t<form>\r\n\t\t\t<ion-grid>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<ion-label>Action</ion-label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t\t\t<ion-label>Action</ion-label>\r\n\t\t\t\t\t\t\t\t\t<ion-select placeholder=\"Select One\" [value]=\"GSFlagJumpType\"\r\n\t\t\t\t\t\t\t\t\t\t(ionChange)=\"Gensetresetchange($event.detail.value)\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-select-option value='J'>Jump</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t<ion-select-option value=\"R\">Reset</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t\t<ion-select-option value=\"C\">Change</ion-select-option>\r\n\t\t\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<!-- <ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<ion-label>Old Meter Reading <span class=\"star\">*</span></ion-label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-input type=\"text\" [value]=\"GSOldMeterReading\" (input)=\"GSOldMeterReading=$event.target.value\"  placeholder=\"Old Meter Reading\"></ion-input>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<ion-label>Jump Reading(If any)</ion-label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-input type=\"text\" [value]=\"GSJReading\" (input)=\"GensetJReadingvalue($event.target.value)\"   placeholder=\"Jump Reading\"></ion-input>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t\t\t<ion-label>Choose File</ion-label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t\t\t<ion-input type=\"file\" name=\"GSfileInputreset\" id=\"GSfileInputreset\" (change)=\"Gensetfileuploadreset($event)\" [disabled]=\"GSpopupfilevisible\"></ion-input>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row> -->\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t\t<ion-label>Before</ion-label>\r\n\t\t\t\t\t\t<ion-input class=\"inp_control\" [value]=\"GSOldMeterReading\"\r\n\t\t\t\t\t\t\t(input)=\"GSOldMeterReading=$event.target.value\" placeholder=\"Before Meter Reading\"\r\n\t\t\t\t\t\t\tname=\"Before\"></ion-input>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t\t<ion-label>After</ion-label>\r\n\t\t\t\t\t\t<ion-input class=\"inp_control\" [value]=\"NewMeterReading\"\r\n\t\t\t\t\t\t\t(input)=\"GensetJReadingvalue($event.target.value)\"\r\n\t\t\t\t\t\t\t(input)=\"NewMeterReading=$event.target.value\" placeholder=\"After Meter Reading\"\r\n\t\t\t\t\t\t\tname=\"after\"></ion-input>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t\t<ion-label>Attachment</ion-label>\r\n\t\t\t\t\t\t<ion-input type=\"file\" class=\"inp_control\" id=\"GSfileInputreset\" name=\"GSfileInputreset\"\r\n\t\t\t\t\t\t\t(change)=\"Gensetfileuploadreset($event.target.files, $event)\"\r\n\t\t\t\t\t\t\t[disabled]=\"GSpopupfilevisible\"></ion-input>\r\n\t\t\t\t\t\t<!-- <span *ngIf=\"!IsFileSelected\" class=\"temp_file_name\" style=\"right:-6px;\">{{FileName}}</span> -->\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t\t<ion-label>Remark</ion-label>\r\n\t\t\t\t\t\t<ion-textarea class=\"inp_control\" [value]=\"MeterJumpRemark\"\r\n\t\t\t\t\t\t\t(input)=\"MeterJumpRemark=$event.target.value\" placeholder=\"Remark\"></ion-textarea>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col size=\"12\">\r\n\t\t\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<th>Sr No</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Before</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>After</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Jumped</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Action Type</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Remark</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let itm of GSIJumpListHistory, let i = index\">\r\n\t\t\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.BeforeJumpReading}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.AfterJumpReading}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.JumpReading}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.Action}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.Remark}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<!-- <td>{{itm.DispanserJumpRemark}}</td> -->\r\n\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <span (click) = \"UpdateGSIJumpHistory(itm.id, itm)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tEdit</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"closeicon\" \r\n\t\t\t\t\t\t\t\t\t\t\t(click) =\"DeleteGSIJumpHistory(itm.id,itm.Action, itm)\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-icon ios=\"ios-close\" md=\"md-close\"></ion-icon></span> -->\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"dark\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"UpdateGSIJumpHistory(itm.id, itm)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"create\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-button>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"danger\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"DeleteGSIJumpHistory(itm.id,itm.Action, itm)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"trash\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"button_container\">\r\n\t\t\t\t\t\t\t<ion-button color=\"dark_green_clr\" (click)=\"Gensetchangeresetpopup()\" type=\"submit\">Save\r\n\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</ion-grid>\r\n\t\t</form>\r\n\t</div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/station/gas-genset/gas-genset-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/station/gas-genset/gas-genset-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: GasGensetPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GasGensetPageRoutingModule", function() { return GasGensetPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gas_genset_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gas-genset.page */ "./src/app/station/gas-genset/gas-genset.page.ts");




var routes = [
    {
        path: '',
        component: _gas_genset_page__WEBPACK_IMPORTED_MODULE_3__["GasGensetPage"]
    }
];
var GasGensetPageRoutingModule = /** @class */ (function () {
    function GasGensetPageRoutingModule() {
    }
    GasGensetPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], GasGensetPageRoutingModule);
    return GasGensetPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/station/gas-genset/gas-genset.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/station/gas-genset/gas-genset.module.ts ***!
  \*********************************************************/
/*! exports provided: GasGensetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GasGensetPageModule", function() { return GasGensetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gas_genset_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gas-genset-routing.module */ "./src/app/station/gas-genset/gas-genset-routing.module.ts");
/* harmony import */ var _gas_genset_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gas-genset.page */ "./src/app/station/gas-genset/gas-genset.page.ts");







var GasGensetPageModule = /** @class */ (function () {
    function GasGensetPageModule() {
    }
    GasGensetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _gas_genset_routing_module__WEBPACK_IMPORTED_MODULE_5__["GasGensetPageRoutingModule"]
            ],
            declarations: [_gas_genset_page__WEBPACK_IMPORTED_MODULE_6__["GasGensetPage"]]
        })
    ], GasGensetPageModule);
    return GasGensetPageModule;
}());



/***/ }),

/***/ "./src/app/station/gas-genset/gas-genset.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/station/gas-genset/gas-genset.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".closeicon {\n  vertical-align: sub;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvc3RhdGlvbi9nYXMtZ2Vuc2V0L2dhcy1nZW5zZXQucGFnZS5zY3NzIiwic3JjL2FwcC9zdGF0aW9uL2dhcy1nZW5zZXQvZ2FzLWdlbnNldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBVyxtQkFBQTtBQ0VYIiwiZmlsZSI6InNyYy9hcHAvc3RhdGlvbi9nYXMtZ2Vuc2V0L2dhcy1nZW5zZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb3NlaWNvbnt2ZXJ0aWNhbC1hbGlnbjogc3ViO30iLCIuY2xvc2VpY29uIHtcbiAgdmVydGljYWwtYWxpZ246IHN1Yjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/station/gas-genset/gas-genset.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/station/gas-genset/gas-genset.page.ts ***!
  \*******************************************************/
/*! exports provided: GasGensetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GasGensetPage", function() { return GasGensetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var GasGensetPage = /** @class */ (function () {
    function GasGensetPage(formBuilder, router, activatedroute, commonServices, menu, dp) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedroute = activatedroute;
        this.commonServices = commonServices;
        this.menu = menu;
        this.dp = dp;
        this.varJump = false;
        this.flagJump = 0;
        this.showhideflag = false;
        this.hidegenset = true;
        this.geteDate = { selcteddate: "" };
        this.getGenSetData = [];
        this.getGenSetDetails = [];
        this.getGenSetFormData = [];
        this.GenSetId = "";
        this.PreviousReading = "";
        this.GSmeterTotaliser = "";
        this.GSjumpReading = "";
        this.GSjumpReadingCount = "";
        this.GSRunHrs = '00';
        this.GSRunMins = '00';
        this.GSSAPEquipmentNumber = "";
        this.GSresetTypeJsonSelected = "";
        this.GSOldMeterReading = "";
        this.GSJReading = "";
        this.GSremark = "";
        this.GSisCRSentToHo = 0;
        this.GSisStationSubmitted = 0;
        this.Hours = [];
        this.Minutes = [];
        this.GSfilevisible = false;
        this.GSpopupfilevisible = true;
        this.GSJumpVisible = true;
        this.IsGenSethide = false;
        this.remark = "";
        this.NewMeterReading = "";
        this.MeterJumpRemark = "";
        this.MSJumpListHistory = [];
        this.JumpHistoryId = '';
        this.JumpCertificateGenset = "";
        this.GensetShowJumpImage = false;
        this.GasGensetReadingAverage = '';
        this.MSFlagJumpType = 'J';
        this.GSFlagJumpType = 'J';
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
            var dt = new Date(this.currDate);
            //IOS Comment
            // let latest_date = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
            // this.geteDate.selcteddate = latest_date;
            // this.DPREntryDateTime = this.dp.transform(this.geteDate.selcteddate, 'yyyy-MM-dd hh:mm:ss');
            // this.geteDate.selcteddate = this.DPREntryDateTime;
            // this.DPREntryDateTime = this.currentdate + ' ' + this.currentTimeR;
            // this.geteDate.selcteddate = this.DPREntryDateTime;
            this.DPREntryDateTime = this.dp.transform(dt, 'yyyy/MM/dd hh:mm:ss');
            this.geteDate.selcteddate = this.DPREntryDateTime;
        }
    }
    GasGensetPage.prototype.getSelectedDate = function (datePicker) {
        console.log("datePicker", datePicker);
        var dt = new Date(datePicker);
        //IoS Comment
        // let latest_date = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        // this.geteDate.selcteddate = latest_date;
        // this.DPREntryDateTime = this.dp.transform(this.geteDate.selcteddate, 'yyyy-MM-dd hh:mm:ss');
        // this.geteDate.selcteddate = this.DPREntryDateTime;
        this.DPREntryDateTime = this.dp.transform(dt, 'yyyy/MM/dd hh:mm:ss');
        this.geteDate.selcteddate = this.DPREntryDateTime;
    };
    GasGensetPage.prototype.showhidechangereset = function () {
        this.hidegenset = false;
        this.showhideflag = true;
    };
    GasGensetPage.prototype.ngOnInit = function () {
        this.GetStationGenSet('-999');
    };
    GasGensetPage.prototype.openFirst = function () {
        this.menu.enable(true, 'menuStn');
        this.menu.open('menuStn');
    };
    GasGensetPage.prototype.changResetRedirect = function () {
        this.router.navigate(['change-reset-ges-genset']);
    };
    GasGensetPage.prototype.showFields_jump = function () {
        if (this.flagJump == 0) {
            this.varJump = true;
            this.flagJump = 1;
        }
        else {
            this.varJump = false;
            this.flagJump = 0;
        }
    };
    // GetStationGenSet(GenSetId) {
    //   try {
    //     this.GenSetId = GenSetId;
    //     this.commonServices.loadingPresent();
    //     this.commonServices.postwithservice("GetStationGenSet", { StationCode: localStorage.getItem('stationCode'), LoginId: localStorage.getItem('stationCode'), GenSetId: GenSetId, DPREntryDate: this.geteDate.selcteddate }).subscribe(
    //       (response: any) => {
    //         const data = JSON.parse(response);
    //         this.getGenSetData = data;
    //         console.log(this.getGenSetData);
    //         if (this.getGenSetData[0].length != 0 && this.getGenSetData[1].length != 0) {
    //           this.IsGenSethide = false;
    //           this.getGenSetDetails = data[0];
    //           console.log(this.getGenSetDetails, "Genset getGenSetDetails");
    //           this.getGenSetFormData = data[1];
    //           this.PreviousReading = this.getGenSetFormData[0].FlowMeterReadingPrv;
    //           this.GSSAPEquipmentNumber = this.getGenSetFormData[0].GasGenSetCode;
    //           this.GSmeterTotaliser = this.getGenSetFormData[0].FlowMeterReading;
    //           this.GSjumpReading = this.getGenSetFormData[0].JumpReadingFMR;
    //           this.GSjumpReadingCount = this.getGenSetFormData[0].JumpReadingFMRCount;
    //           this.GSremark = this.getGenSetFormData[0].Remark;
    //           this.GSRunHrs = this.getGenSetFormData[0].RunninInHours;
    //           this.GSRunMins = this.getGenSetFormData[0].RunningInMinutes;
    //           this.GSisCRSentToHo = this.getGenSetFormData[0].isCRSentToHo;
    //           this.GSisStationSubmitted = this.getGenSetFormData[0].isStationSubmitted;
    //           console.log(this.GSisCRSentToHo, "Genset GSisCRSentToHo");
    //           console.log(this.GSisStationSubmitted, "Genset GSisStationSubmitted");
    //         this.getGSIJumpHistory('GET');
    //           if (parseFloat(this.GSjumpReading) > 0.000) {
    //             this.GSfilevisible = false;
    //             //  $("#GSIscheckbox").prop("checked", true);
    //             this.GSJumpVisible = false;
    //           }
    //           else {
    //             this.GSfilevisible = true;
    //             //  $("#GSIscheckbox").prop("checked", false);
    //             this.GSJumpVisible = true;
    //           }
    //           this.Hours = [];
    //           this.Minutes = [];
    //           for (var i = 0; i <= 24; i++) {
    //             if (i <= 9) {
    //               var a = '0';
    //               this.Hours.push(a + i);
    //             } else if (i >= 10) {
    //               var a = '';
    //               this.Hours.push('' + i);
    //             }
    //           }
    //           for (var i = 0; i <= 59; i++) {
    //             if (i <= 9) {
    //               var a = '0';
    //               this.Minutes.push(a + i);
    //             } else if (i >= 10) {
    //               var a = '';
    //               this.Minutes.push('' + i);
    //             }
    //           }
    //           if (data[0].length > 0) {
    //             if (GenSetId == '-999') {
    //               this.GenSetId = this.getGenSetDetails[0].GenSetId;
    //             }
    //             this.commonServices.loadingDismiss();
    //           }
    //           else {
    //             console.log('No data available.');
    //             this.commonServices.loadingDismiss();
    //           }
    //         }
    //         else {
    //           this.commonServices.presentToast('No Gas Genset data available. Please try another station.')
    //           this.commonServices.loadingDismiss();
    //           this.IsGenSethide = true;
    //         }
    //       },
    //       (error) => {
    //         console.log('Something went wrong.');
    //         this.commonServices.loadingDismiss();
    //       }
    //     );
    //   }
    //   catch (err) {
    //     console.log(err);
    //     this.commonServices.loadingDismiss();
    //   }
    // }
    GasGensetPage.prototype.GetStationGenSet = function (GenSetId) {
        var _this = this;
        try {
            this.GenSetId = GenSetId;
            this.commonServices.loadingPresent();
            this.commonServices.postwithservice("GetStationGenSet", {
                StationCode: localStorage.getItem('stationCode'),
                LoginId: localStorage.getItem('stationCode'), GenSetId: GenSetId,
                DPREntryDate: this.dp.transform(this.geteDate.selcteddate, 'dd/MMM/yyyy')
                // DPREntryDate:this.geteDate.selcteddate
            }).subscribe(function (response) {
                var data = JSON.parse(response);
                _this.getGenSetData = data;
                console.log(_this.getGenSetData);
                if (_this.getGenSetData[0].length != 0 && _this.getGenSetData[1].length != 0) {
                    _this.IsGenSethide = false;
                    _this.getGenSetDetails = data[0];
                    console.log(_this.getGenSetDetails, "Genset getGenSetDetails");
                    _this.getGenSetFormData = data[1];
                    _this.PreviousReading = _this.getGenSetFormData[0].FlowMeterReadingPrv;
                    _this.GSSAPEquipmentNumber = _this.getGenSetFormData[0].GasGenSetCode;
                    _this.GSmeterTotaliser = _this.getGenSetFormData[0].FlowMeterReading;
                    _this.GSjumpReading = _this.getGenSetFormData[0].JumpReadingFMR;
                    _this.GSjumpReadingCount = _this.getGenSetFormData[0].JumpReadingFMRCount;
                    _this.JumpCertificateGenset = _this.getGenSetFormData[0].JumpCeritificateFMR;
                    if (_this.JumpCertificateGenset != '')
                        _this.GensetShowJumpImage = true;
                    else
                        _this.GensetShowJumpImage = false;
                    _this.GSremark = _this.getGenSetFormData[0].Remark;
                    _this.GSRunHrs = _this.getGenSetFormData[0].RunninInHours;
                    _this.GSRunMins = _this.getGenSetFormData[0].RunningInMinutes;
                    _this.GSisCRSentToHo = _this.getGenSetFormData[0].isCRSentToHo;
                    _this.GSisStationSubmitted = _this.getGenSetFormData[0].isStationSubmitted;
                    console.log(_this.GSisCRSentToHo, "Genset GSisCRSentToHo");
                    console.log(_this.GSisStationSubmitted, "Genset GSisStationSubmitted");
                    if (parseFloat(_this.GSjumpReading) > 0.000) {
                        _this.GSfilevisible = false;
                        $("#GSIscheckbox").prop("checked", true);
                        _this.GSJumpVisible = false;
                    }
                    else {
                        _this.GSfilevisible = true;
                        $("#GSIscheckbox").prop("checked", false);
                        _this.GSJumpVisible = true;
                    }
                    _this.Hours = [];
                    _this.Minutes = [];
                    for (var i = 0; i <= 24; i++) {
                        if (i <= 9) {
                            var a = '0';
                            _this.Hours.push(a + i);
                        }
                        else if (i >= 10) {
                            var a = '';
                            _this.Hours.push('' + i);
                        }
                    }
                    for (var i = 0; i <= 59; i++) {
                        if (i <= 9) {
                            var a = '0';
                            _this.Minutes.push(a + i);
                        }
                        else if (i >= 10) {
                            var a = '';
                            _this.Minutes.push('' + i);
                        }
                    }
                    if (data[0].length > 0) {
                        if (GenSetId == '-999') {
                            _this.GenSetId = _this.getGenSetDetails[0].GenSetId;
                            _this.getGSIJumpHistory('GET');
                        }
                        _this.commonServices.loadingDismiss();
                    }
                    else {
                        console.log('No data available.');
                        _this.commonServices.loadingDismiss();
                    }
                }
                else {
                    _this.commonServices.presentToast('No Gas Genset data available. Please try another station.');
                    _this.commonServices.loadingDismiss();
                    _this.IsGenSethide = true;
                }
            }, function (error) {
                _this.commonServices.presentToast('Something went wrong.');
                _this.commonServices.loadingDismiss();
            });
        }
        catch (err) {
            this.commonServices.presentToast(err);
            this.commonServices.loadingDismiss();
        }
    };
    GasGensetPage.prototype.GensetuploadJumpReadingImg = function (str) {
        this.GSuploadedfile = str.target.files[0];
    };
    GasGensetPage.prototype.Gensetfileuploadreset = function (str) {
        this.GSuploadedfilereset = str.target.files[0];
    };
    GasGensetPage.prototype.selecthrsmnts = function (value, flag) {
        if (flag == 'HH') {
            this.GSRunHrs = value;
        }
        else {
            this.GSRunMins = value;
        }
        console.log('Selected : ' + this.GSRunHrs + ':' + this.GSRunMins);
    };
    GasGensetPage.prototype.GensetjumpreadingValue = function (value) {
        this.GSjumpReading = value;
        if (this.GSjumpReading != '') {
            this.GSfilevisible = false;
        }
        else {
            this.GSfilevisible = true;
        }
    };
    GasGensetPage.prototype.InsertGenSetDetails = function () {
        var _this = this;
        var MyJson = {
            LoginId: localStorage.getItem('LoginId'),
            GenSetId: this.GenSetId,
            RunningHours: this.GSRunHrs + ":" + this.GSRunMins,
            FlowMeterReading: this.GSmeterTotaliser,
            JumpReadingFMR: 0,
            JumpReadingFMRCount: 0,
            JumpCeritificateFMR: ((this.GSuploadedfile == undefined) ? '' : this.GSuploadedfile.name),
            Remark: this.remark,
            StationCode: localStorage.getItem('LoginId'),
            FilePath: localStorage.getItem('LoginId') + "/genset/",
            DPREntryDate: this.DPREntryDateTime
        };
        this.commonServices.postwithservice("GasGensetAverage", {
            LoginId: localStorage.getItem('LoginId'),
            DPREntryDate: this.dp.transform(this.DPREntryDateTime, 'dd/MMM/yyyy')
            // DPREntryDate:this.dp.transform(this.DPREntryDateTime,'dd-MMM-yyyy')
        }).subscribe(function (resp) {
            var data = JSON.parse(resp).Table[0];
            _this.GasGensetReadingAverage = data.FinalAmount;
            console.log(_this.GasGensetReadingAverage);
            console.log(_this.GSmeterTotaliser);
        }, function (error) {
            console.log(error);
            _this.commonServices.presentToast("Something went wrong.");
            _this.commonServices.loadingDismiss();
        });
        //IOS Comment
        // this.GSfiles = $('#GSfileInput');
        // console.log(this.GSfiles);
        var frmData = new FormData();
        //IOS Comment
        // var fileInput = this.GSfiles[0];
        frmData.append("genSetDetail", JSON.stringify(MyJson));
        //IOS Comment
        // if (this.GSuploadedfile != undefined) {
        //   frmData.append('JumpCeritificateFMR', this.GSuploadedfile, this.GSuploadedfile.name);
        // }
        //IOS Comment
        // var ErrorMsg = this.checkGensetvalidations(MyJson, fileInput);
        var ErrorMsg = this.checkGensetvalidations(MyJson);
        console.log(ErrorMsg);
        if (ErrorMsg == '' || ErrorMsg == undefined) {
            if (Number(this.GSmeterTotaliser) <= Number(this.PreviousReading)) {
                this.commonServices.alertMessage("Confirm", "Suspected Flow Meter Reading, Do you want to continue?").then(function (res) {
                    console.log(res);
                    // if (confirm("Suspected Flow Meter Reading, Do you want to continue?")) {
                    if (!res) {
                        _this.commonServices.loadingPresent();
                        _this.commonServices.InsertGenSetDetails(frmData).subscribe(function (resp) {
                            _this.commonServices.loadingDismiss();
                            var data = resp;
                            console.log(data);
                            _this.commonServices.presentToast(data.Status);
                            if (data != '') {
                                _this.GetStationGenSet(_this.GenSetId);
                            }
                        }, function (error) {
                            _this.commonServices.presentToast('Something went wrong.');
                            _this.commonServices.loadingDismiss();
                        });
                    }
                });
            }
            else if (this.GSmeterTotaliser > this.GasGensetReadingAverage) {
                // if(confirm("Wrong Entry for Meter Skid Reading, Do you want to continue?")) {
                this.commonServices.alertMessage("Confirm", "Wrong Entry for Flow Meter Reading, Do you want to continue?").then(function (res) {
                    console.log(res);
                    if (!res) {
                        _this.commonServices.loadingPresent();
                        _this.commonServices.InsertGenSetDetails(frmData).subscribe(function (resp) {
                            _this.commonServices.loadingDismiss();
                            var data = resp;
                            console.log(data);
                            _this.commonServices.presentToast(data.Status);
                            if (data != '') {
                                _this.GetStationGenSet(_this.GenSetId);
                            }
                        }, function (error) {
                            _this.commonServices.presentToast('Something went wrong.');
                            _this.commonServices.loadingDismiss();
                        });
                    }
                });
            }
            else if (Number(this.GSmeterTotaliser) >= 2 * Number(this.PreviousReading)) {
                this.commonServices.alertMessage("Confirm", "Suspected Flow Meter Reading, Do you want to continue?").then(function (res) {
                    console.log(res);
                    // if (confirm("Suspected Flow Meter Reading, Do you want to continue?")) {
                    if (!res) {
                        _this.commonServices.loadingPresent();
                        _this.commonServices.InsertGenSetDetails(frmData).subscribe(function (resp) {
                            _this.commonServices.loadingDismiss();
                            var data = resp;
                            console.log(data);
                            _this.commonServices.presentToast(data.Status);
                            if (data != '') {
                                _this.GetStationGenSet(_this.GenSetId);
                            }
                        }, function (error) {
                            _this.commonServices.presentToast('Something went wrong.');
                            _this.commonServices.loadingDismiss();
                        });
                    }
                });
            }
            else {
                this.commonServices.loadingPresent();
                this.commonServices.InsertGenSetDetails(frmData).subscribe(function (resp) {
                    _this.commonServices.loadingDismiss();
                    var data = resp;
                    console.log(data);
                    _this.commonServices.presentToast(data.Status);
                    if (data != '') {
                        _this.GetStationGenSet(_this.GenSetId);
                    }
                }, function (error) {
                    _this.commonServices.presentToast('Something went wrong.');
                    _this.commonServices.loadingDismiss();
                });
            }
        }
        else {
            this.commonServices.presentToast(ErrorMsg);
        }
    };
    //IOS Comment
    //checkGensetvalidations(genSetDetailJson, fileInput) {
    GasGensetPage.prototype.checkGensetvalidations = function (genSetDetailJson) {
        var regexNumeric = /^[+-]?[0-9]{1,1000}(?:\.[0-9]{1,1000})?$/;
        var regexDecimalThree = /^[+-]?[0-9]{1,10}(?:\.[0-9]{1,3})?$/;
        var regexDecimalThreeNegative = /^[+]?[0-9]{1,10}(?:\.[0-9]{1,3})?$/;
        var imgShow = 'assets/images/attachment.gif';
        var foundError = '';
        var TotalHrs = parseInt(this.GSRunHrs);
        var TotalMins = parseInt(this.GSRunMins);
        console.log(TotalHrs, TotalMins);
        console.log(genSetDetailJson.FlowMeterReading);
        console.log(this.PreviousReading);
        console.log(genSetDetailJson.FlowMeterReading == undefined);
        if (parseFloat(genSetDetailJson.FlowMeterReading) > parseFloat(this.PreviousReading) && (genSetDetailJson.FlowMeterReading != undefined)) {
            if (this.GSRunHrs + ":" + this.GSRunMins == '00:00') {
                foundError = 'Running hours are required.';
                return foundError;
            }
        }
        if ((TotalHrs == 24 && TotalMins > 0)) {
            foundError = 'Total Hours must be less/equal than 24.';
            return foundError;
        }
        if (genSetDetailJson.FlowMeterReading == '') {
            foundError = 'Flow Meter Reading is required.';
            return foundError;
        }
        if ((genSetDetailJson.JumpReadingFMR == '' || genSetDetailJson.JumpReadingFMR == undefined || parseFloat(genSetDetailJson.JumpReadingFMR) == parseFloat("0")) && parseFloat(genSetDetailJson.FlowMeterReading) == parseFloat("0")) {
            foundError = 'Invalid Flow Meter Reading';
            return foundError;
        }
        if (genSetDetailJson.FlowMeterReading != "") {
            if (regexNumeric.test(genSetDetailJson.FlowMeterReading) == false) {
                foundError = 'Only numeric value allowed for reading.';
                return foundError;
            }
            if (regexDecimalThree.test(genSetDetailJson.FlowMeterReading) == false) {
                foundError = 'Three decimal with Max 10 Precision values allowed';
                return foundError;
            }
            if (parseFloat(genSetDetailJson.FlowMeterReading) < 0) {
                foundError = 'Flow Meter Reading must be Positive.';
                return foundError;
            }
        }
        //New Comment//
        // if (genSetDetailJson.JumpReadingFMR != '' && parseFloat(genSetDetailJson.JumpReadingFMR) > 0) {
        //   //  if (parseFloat(MeterSkidDetailJson.JumpReadingFMT) > 0 && fileInput.files.length == 0 && MeterSkidDetailJson.JumpCeritificateLCV == '')    
        //   //    { 
        //   //      foundError = 'Please attach the Jump certificate.'; 
        //   //      return foundError; 
        //   //    }
        //   // if (fileInput.files.length > 0) {
        //   //     var validExtension = 'jpeg,jpg,png,gif';
        //   //     for (var i = 0; i < fileInput.files.length; i++) {
        //   //         var fileExtension = fileInput.files[i].name.split('.')[1];
        //   //         if (validExtension.indexOf(fileExtension) < 0) {
        //   //             foundError = 'Attachment allowed only for [' + validExtension + '].'; return foundError;
        //   //         }
        //   //     }
        //   // }
        //   if (regexNumeric.test(genSetDetailJson.JumpReadingFMR) == false) {
        //     foundError = 'Only numeric value allowed for reading.'; return foundError;
        //   }
        //   if (regexDecimalThree.test(genSetDetailJson.JumpReadingFMR) == false) {
        //     foundError = 'Three decimal with Max 10 Precision values allowed'; return foundError;
        //   }
        // }
        // var JumpReadingFMTCnt = genSetDetailJson.JumpFMRCnt;
        // if (JumpReadingFMTCnt != '' && parseFloat(JumpReadingFMTCnt) != 0 && (JumpReadingFMTCnt === undefined) == false) {
        //   if (regexNumeric.test(JumpReadingFMTCnt) == false) {
        //     foundError = 'Only numeric value allowed for Jump reading count.';
        //     return foundError;
        //   }
        //   if (JumpReadingFMTCnt.indexOf('.') > -1) {
        //     foundError = 'Decimal value not allowed for Jump reading count.';
        //     return foundError;
        //   }
        //   if (parseFloat(JumpReadingFMTCnt) < 0) {
        //     foundError = 'Gas GenSet Reading count must be Positive.';
        //     return foundError;
        //   }
        //   if (genSetDetailJson.JumpReadingFMR == '' || (genSetDetailJson.JumpReadingFMR == undefined)) {
        //     foundError = 'Please enter the Jump reading.';
        //     return foundError;
        //   }
        // }
        // // else {
        // //   if (genSetDetailJson.JumpReadingFMR != '' && parseFloat(genSetDetailJson.JumpReadingFMR) != 0) {
        // //       foundError = 'Plese enter the Jump Reading count.';
        // //       return foundError;
        // //   }
        // // }   
        return foundError;
    };
    GasGensetPage.prototype.Gensetresetchange = function (value) {
        this.GSresetTypeJsonSelected = value;
        console.log(this.GSresetTypeJsonSelected);
    };
    GasGensetPage.prototype.getGSIJumpHistory = function (FlagType) {
        var _this = this;
        this.clearGenset();
        var obj = {
            FlagEntryFor: FlagType,
            MeterOf: 'GSET',
            Id: '',
            StationCode: '',
            MeterOfId: this.GenSetId,
            MeterType: 'MR',
            EntryDate: this.geteDate.selcteddate,
            FlagReadingType: ""
        };
        console.log(obj);
        this.commonServices.loadingPresent();
        this.commonServices.postwithservice("GetJumpReadingList", obj).subscribe(function (resp) {
            _this.GSIJumpListHistory = JSON.parse(resp).Table;
            console.log(_this.GSIJumpListHistory);
            _this.commonServices.loadingDismiss();
        }, function (error) {
            _this.commonServices.presentToast("Something went wrong.");
            _this.commonServices.loadingDismiss();
        });
    };
    GasGensetPage.prototype.DeleteGSIJumpHistory = function (Id, FlagReading, itm) {
        var _this = this;
        // if (confirm("Are you sure to delete this record..?")) {
        //   var Json = {
        //     Id: Id,
        //     FlagEntryFor: 'DELETE',
        //     FlagReadingType: FlagReading,
        //     MeterOf: 'GSET',
        //     MeterOfId: this.GenSetId,
        //     EntryDate: this.geteDate.selcteddate
        //   }
        //   this.commonServices.postwithservice("GetJumpReadingList", Json).subscribe(
        //     (resp: any) => {
        //       const data = JSON.parse(resp);
        //       this.commonServices.presentToast("Record deleted successfully");
        //       setTimeout(() => {
        //         this.getGSIJumpHistory('GET');
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
                    MeterOf: 'GSET',
                    MeterOfId: _this.GenSetId,
                    EntryDate: _this.geteDate.selcteddate
                };
                _this.commonServices.postwithservice("GetJumpReadingList", Json).subscribe(function (resp) {
                    var data = JSON.parse(resp);
                    _this.commonServices.presentToast("Record deleted successfully");
                    setTimeout(function () {
                        _this.getGSIJumpHistory('GET');
                    });
                    _this.commonServices.loadingDismiss();
                }, function (error) {
                    _this.commonServices.presentToast("Something went wrong.");
                    _this.commonServices.loadingDismiss();
                });
            }
        });
        this.getGSIJumpHistory('GET');
    };
    GasGensetPage.prototype.UpdateGSIJumpHistory = function (Id, itm) {
        this.JumpHistoryId = Id;
        this.GSOldMeterReading = itm.BeforeJumpReading;
        this.NewMeterReading = itm.AfterJumpReading;
        this.MeterJumpRemark = itm.Remark;
        if (itm.Action == "Jump") {
            this.GSFlagJumpType = "J";
        }
        else if (itm.Action == "Change") {
            this.GSFlagJumpType = "C";
        }
        else {
            this.GSFlagJumpType = "R";
        }
    };
    GasGensetPage.prototype.GensetJReadingvalue = function (value) {
        this.GSJReading = value;
        if (this.GSJReading != '') {
            this.GSpopupfilevisible = false;
        }
        else {
            this.GSpopupfilevisible = true;
        }
    };
    // Gensetchangeresetpopup() {
    //     console.log(this.getGenSetFormData);
    //     var MyJsonreset = {
    //         StationCode: localStorage.getItem('LoginId'),
    //         MeterOf: 'GSET',
    //         MeterOfId: this.GenSetId,
    //         MeterType: 'MR',
    //         FlagRead: 0,
    //         FlagReadingType: this.GSresetTypeJsonSelected,
    //         Id: this.getGenSetFormData[0].MeterResetId,
    //         LoginId: localStorage.getItem('LoginId'),
    //         PrvReading: this.GSOldMeterReading,
    //         JumpReading: ((this.GSJReading == '') ? '0' : this.GSJReading),
    //         ReadingOnSwitch: ((this.getGenSetFormData[0].ReadingOnSwitch == '') ? '0' : this.getGenSetFormData[0].ReadingOnSwitch),
    //         FilePath: localStorage.getItem('LoginId') + "/Genset/",
    //         MeterAfterJump : this.NewMeterReading,
    //         MeterJumpRemark : this.MeterJumpRemark,
    //         JumpHistoryId : this.JumpHistoryId,
    //         MeterBeforeJump: this.GSOldMeterReading
    //       };
    //       this.GSfilesreset = $('#GSfileInputreset');
    //       var frmData = new FormData();
    //       var fileInputreset = this.GSfilesreset[0];
    //       frmData.append("jsonDetail", JSON.stringify(MyJsonreset));
    //       if(this.GSuploadedfilereset != undefined) {
    //           console.log(this.uploadedfilereset);
    //           frmData.append('JumpReadingFile', this.GSuploadedfilereset, this.GSuploadedfilereset.name);
    //         }
    //       var ErrorMsg = this.changeresetValidations(MyJsonreset);
    //       if(ErrorMsg == '' || ErrorMsg == undefined) {
    //           this.commonServices.HoldResetReading(frmData).subscribe(
    //               (resp: any) => {
    //               const data= (resp);
    //               if(data.Status=="Inserted") {
    //                 this.commonServices.presentToast('Record Saved Successfully.');
    //                 this.getGSIJumpHistory('GET');
    //               }
    //               else if(data.Status=="Updated") {
    //                 this.commonServices.presentToast('Record Updated Successfully.');
    //                 this.getGSIJumpHistory('GET');
    //               }
    //               else {
    //                 this.commonServices.presentToast(data.Status);
    //               }
    //               },
    //               (error) =>{
    //                 this.commonServices.presentToast('Something went wrong.');
    //                  this.commonServices.loadingDismiss();
    //              }
    //           )
    //       }else {
    //           this.commonServices.presentToast(ErrorMsg);
    //       }
    // }
    GasGensetPage.prototype.clearGenset = function () {
        this.GSFlagJumpType = "J";
        this.GSOldMeterReading = "";
        this.NewMeterReading = "";
        this.MeterJumpRemark = "";
    };
    GasGensetPage.prototype.Gensetchangeresetpopup = function () {
        var _this = this;
        console.log(this.getGenSetFormData);
        var MyJsonreset = {
            StationCode: localStorage.getItem('LoginId'),
            MeterOf: 'GSET',
            MeterOfId: this.GenSetId,
            MeterType: 'MR',
            FlagRead: 0,
            FlagReadingType: this.GSresetTypeJsonSelected,
            Id: this.getGenSetFormData[0].MeterResetId,
            LoginId: localStorage.getItem('LoginId'),
            PrvReading: this.GSOldMeterReading,
            JumpReading: ((this.GSJReading == '') ? '0' : this.GSJReading),
            ReadingOnSwitch: ((this.getGenSetFormData[0].ReadingOnSwitch == '') ? '0' : this.getGenSetFormData[0].ReadingOnSwitch),
            FilePath: localStorage.getItem('LoginId') + "/Genset/",
            MeterAfterJump: this.NewMeterReading,
            MeterJumpRemark: this.MeterJumpRemark,
            JumpHistoryId: this.JumpHistoryId,
            MeterBeforeJump: this.GSOldMeterReading,
            EntryDate: this.geteDate.selcteddate
        };
        this.JumpHistoryId = "";
        this.GSfilesreset = $('#GSfileInputreset');
        var frmData = new FormData();
        var fileInputreset = this.GSfilesreset[0];
        frmData.append("jsonDetail", JSON.stringify(MyJsonreset));
        if (this.GSuploadedfilereset != undefined) {
            console.log(this.uploadedfilereset);
            frmData.append('JumpReadingFile', this.GSuploadedfilereset, this.GSuploadedfilereset.name);
        }
        var ErrorMsg = this.changeresetValidations(MyJsonreset, fileInputreset);
        if (ErrorMsg == '' || ErrorMsg == undefined) {
            this.commonServices.HoldResetReading(frmData).subscribe(function (resp) {
                var data = (resp);
                if (data.Status == "Inserted") {
                    _this.getGSIJumpHistory('GET');
                    _this.clearGenset();
                    _this.commonServices.presentToast('Record Saved Successfully.');
                }
                else if (data.Status == "Updated") {
                    _this.getGSIJumpHistory('GET');
                    _this.clearGenset();
                    _this.commonServices.presentToast('Record Updated Successfully.');
                }
                else {
                    _this.commonServices.presentToast(data.Status);
                }
            }, function (error) {
                _this.commonServices.presentToast('Something went wrong.');
                _this.commonServices.loadingDismiss();
            });
        }
        else {
            this.commonServices.presentToast(ErrorMsg);
        }
        this.getGSIJumpHistory('GET');
    };
    GasGensetPage.prototype.changeresetValidations = function (LcvDetailJsonreset, fileInput) {
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
    };
    GasGensetPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] }
    ]; };
    GasGensetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gas-genset',
            template: __webpack_require__(/*! raw-loader!./gas-genset.page.html */ "./node_modules/raw-loader/index.js!./src/app/station/gas-genset/gas-genset.page.html"),
            styles: [__webpack_require__(/*! ./gas-genset.page.scss */ "./src/app/station/gas-genset/gas-genset.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]])
    ], GasGensetPage);
    return GasGensetPage;
}());



/***/ })

}]);
//# sourceMappingURL=station-gas-genset-gas-genset-module-es5.js.map