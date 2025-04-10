(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["station-dsa-entry-dsa-entry-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/station/dsa-entry/dsa-entry.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/station/dsa-entry/dsa-entry.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"pageFlag !='dsaStationSummary'\">\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/home\" *ngIf=\"DepartmentCode!= 'SOP'\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/so-dashboard\" *ngIf=\"DepartmentCode == 'SOP'\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<div class=\"main_heading1\">\r\n\t\t<div>\r\n\t\t\t<ion-back-button defaultHref=\"home\"></ion-back-button>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<h1>Summary Detail</h1>\r\n\t\t</div>\r\n\t\t<div></div>\r\n\t</div>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"pageFlag !='dsaStationSummary'\">\r\n\t<div class=\"content_area\">\r\n\t\t<div class=\"mycard\">\r\n\t\t\t<form>\r\n\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t<label>Region</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t<ion-select placeholder=\"Select One\" [(ngModel)]='selectedRegion' name=\"Region\"\r\n\t\t\t\t\t\t\t(ionChange)=\"onRegionSelect()\" [disabled]=\"IsDropdownDisable\"\r\n\t\t\t\t\t\t\tstyle=\"padding-top: 8px;padding-bottom: 8px;background-color: white;padding-right: 10px;\">\r\n\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let itm of RegionList\" [value]=\"itm.RegionId\">{{itm.RegionName}}\r\n\t\t\t\t\t\t\t</ion-select-option>\r\n\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t<label>Station</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t<ion-select placeholder=\"Select One\" [(ngModel)]='selectedStation' name=\"Station\"\r\n\t\t\t\t\t\t\t[disabled]=\"IsDropdownDisable\"\r\n\t\t\t\t\t\t\tstyle=\"padding-top: 8px;padding-bottom: 8px;background-color: white;padding-right: 10px;\">\r\n\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let itm of StationList\" [value]=\"itm.StationId\">\r\n\t\t\t\t\t\t\t\t{{itm.StationName}}</ion-select-option>\r\n\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t<label>SAP Code</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t<ion-select placeholder=\"Select One\" [(ngModel)]='selectedStation' name=\"Station\"\r\n\t\t\t\t\t\t\t[disabled]=\"IsDropdownDisable\"\r\n\t\t\t\t\t\t\tstyle=\"padding-top: 8px;padding-bottom: 8px;background-color: white;padding-right: 10px;\">\r\n\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let itm of StationList\" [value]=\"itm.StationId\">{{itm.SapCode}}\r\n\t\t\t\t\t\t\t</ion-select-option>\r\n\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t\t<label>Summary Date</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t\t<ion-label>Select Date:</ion-label>\r\n\t\t\t\t\t\t\t<ion-datetime #selcteddate class=\"datepick\" [(ngModel)]=\"geteDate.selcteddate\"\r\n\t\t\t\t\t\t\t\tdisplayFormat=\"DD-MMM-YYYY\" pickerFormat=\"DD MMM YYYY\" \r\n\t\t\t\t\t\t\t\t[max]=\"secondMaxDate\" name=\"selcteddate\" (ngModelChange)=\"getSelectedDate(selcteddate.value)\"></ion-datetime>\r\n\t\t\t\t\t\t\t\t<!-- form=\"DispenserDate.selcteddate\" -->\r\n\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div *ngIf=\"isButtonDisplay\">\r\n\t\t\t\t\t\t\t<div class=\"button_container\"\r\n\t\t\t\t\t\t\t*ngIf=\"DepartmentCode !== 'HO' && DepartmentCode !== 'SOP' && DepartmentCode !== 'MO'\">\r\n\t\t\t\t\t\t\t<ion-button color=\"dark_green_clr\" (click)=\"dsaEntryDetailRedirect()\">DSA Entry</ion-button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</form>\r\n\r\n\r\n\t\t\t<!------SOP Summary -->\r\n\r\n\t\t\t<ion-grid *ngIf=\"(DepartmentCode== 'SOP' && pageFlag== 'dsaEntry')\">\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col class=\"inp_groupt\">\r\n\t\t\t\t\t\t<ion-label *ngIf=\"(dispenserList == undefined)\"> No Dispenser found.</ion-label>\r\n\r\n\t\t\t\t\t\t<!-- <ion-label *ngIf=\"(dispenserList != undefined)\">Description</ion-label> -->\r\n\t\t\t\t\t\t<ion-item class=\"inp_control\" *ngIf=\"(dispenserList != undefined)\">\r\n\t\t\t\t\t\t\t<ion-label>Description</ion-label>\r\n\t\t\t\t\t\t\t<ion-select name=\"dispenserlist\">\r\n\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let itmDisp of dispenserList; let i = index\">\r\n\t\t\t\t\t\t\t\t\t{{itmDisp.DispencerName}}</ion-select-option>\r\n\t\t\t\t\t\t\t</ion-select>\r\n\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"armA_detail_cont\">\r\n\t\t\t\t\t\t\t<ion-card>\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<h5 (click)=\"armACollapse()\">Arm A <ion-icon name=\"arrow-down\"\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"ion-float-right\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t</h5>\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"ArmADetailSec\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"header-title\" *ngFor=\"let iSum of Summary;\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-card-header>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-card-subtitle\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(iSum.ShiftDescription.indexOf('SHIFT_BREAK') > -1)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{iSum.ShiftDescription.substr(12, iSum.ShiftDescription.length)}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-card-subtitle>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-card-subtitle\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"( (iSum.ShiftDescription.indexOf('SHIFT') > -1) && (iSum.ShiftDescription.indexOf('SHIFT_BREAK') == -1) )\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{iSum.ShiftTime}}</ion-card-subtitle>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-card-subtitle\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"( (iSum.ShiftDescription.indexOf('SHIFT') == -1) && (iSum.ShiftDescription.indexOf('SHIFT_BREAK') == -1) )\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{iSum.ShiftDescription}}</ion-card-subtitle>\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-card-header>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-row *ngIf=\"(iSum.ShiftDescription.indexOf('SHIFT_BREAK') == -1)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-col class=\"inp_group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-item class=\"inp_control armlist\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let iDRead of dispenserList; let i = index\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{getReadingByDispName(iDRead.DispencerName, iSum, '_ArmA') | number }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<h5 (click)=\"armBCollapse()\">Arm B <ion-icon name=\"arrow-down\"\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"ion-float-right\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t</h5>\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"ArmBDetailSec\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"header-title\" *ngFor=\"let iSum of Summary;\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-card-header>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-card-subtitle\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(iSum.ShiftDescription.indexOf('SHIFT_BREAK') > -1)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{iSum.ShiftDescription.substr(12, iSum.ShiftDescription.length)}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-card-subtitle>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-card-subtitle\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"( (iSum.ShiftDescription.indexOf('SHIFT') > -1) && (iSum.ShiftDescription.indexOf('SHIFT_BREAK') == -1) )\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{iSum.ShiftTime}}</ion-card-subtitle>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-card-subtitle\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"( (iSum.ShiftDescription.indexOf('SHIFT') == -1) && (iSum.ShiftDescription.indexOf('SHIFT_BREAK') == -1) )\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{iSum.ShiftDescription}}</ion-card-subtitle>\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-card-header>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-row *ngIf=\"(iSum.ShiftDescription.indexOf('SHIFT_BREAK') == -1)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-col class=\"inp_group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-item class=\"inp_control armlist\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let iDRead of dispenserList; let i = index\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{getReadingByDispName(iDRead.DispencerName, iSum, '_ArmB') | number}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<ion-card-content>\r\n\t\t\t\t\t\t\t\t\t<ion-row id=\"customers\">\r\n\t\t\t\t\t\t\t\t\t\t<ion-col class=\"inp_group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div *ngFor=\"let itm of lowerDetLeft; let ind = index\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-item class=\"inp_control\" *ngIf=\"itm.F_ShiftDescription !==null\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-label>{{itm.F_ShiftDescription}}</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-item class=\"inp_control\" *ngIf=\"itm.F_Value !==null\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-label>{{itm.F_Value}}</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-item class=\"inp_control\" *ngIf=\"itm.S_ShiftDescription !==null\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-label>{{itm.S_ShiftDescription}}</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-item class=\"inp_control\" *ngIf=\"itm.S_Value !== null\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-label>{{itm.S_Value}}</ion-label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-item>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div *ngFor=\"let itm of lowerDetLeft; let ind = index\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ion-item class=\"inp_control coins\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"itm.T_Count !== null\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"itm.T_ShiftDescription !== null\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{itm.T_ShiftDescription}}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(itm.T_ShiftDescription != 'Other Notes' && itm.T_ShiftDescription !== 'Coins' && itm.T_ShiftDescription !== null)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tx {{itm.T_Count}} = {{itm.T_Value}}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(itm.T_ShiftDescription === 'Other Notes' && itm.T_ShiftDescription !== null)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = {{itm.T_Value}}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"(itm.T_ShiftDescription === 'Coins' && itm.T_ShiftDescription !== null)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = {{itm.T_Value}}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t\t\t</ion-card-content>\r\n\t\t\t\t\t\t\t</ion-card>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t\t\t<table class=\"my_table\" id=\"customers\" #customers>\r\n\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"100%\"><b>Normal Rate:</b> {{ForRate}} &nbsp; <b>Discounted\r\n\t\t\t\t\t\t\t\t\t\t\t\tRate:</b> {{ForDiscountedRate}}</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<th>Particulars</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Total quantity</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Non discount quantity</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Non discount amount</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Discount quantity</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Discount amount</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Total amount</th>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let itm of DisNonDicSmmry; let ind = index\">\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.Particulars}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.TotalQuntity}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.NonDiscount_QTY}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.NonDiscount_Amt | number}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.Discount_QTY}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.Discount_Amt | number}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.TotalAmount | number}}</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</ion-grid>\r\n\t\t</div>\r\n\t</div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/station/dsa-entry/dsa-entry-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/station/dsa-entry/dsa-entry-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DsaEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsaEntryPageRoutingModule", function() { return DsaEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dsa_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dsa-entry.page */ "./src/app/station/dsa-entry/dsa-entry.page.ts");




const routes = [
    {
        path: '',
        component: _dsa_entry_page__WEBPACK_IMPORTED_MODULE_3__["DsaEntryPage"]
    }
];
let DsaEntryPageRoutingModule = class DsaEntryPageRoutingModule {
};
DsaEntryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DsaEntryPageRoutingModule);



/***/ }),

/***/ "./src/app/station/dsa-entry/dsa-entry.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/station/dsa-entry/dsa-entry.module.ts ***!
  \*******************************************************/
/*! exports provided: DsaEntryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsaEntryPageModule", function() { return DsaEntryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dsa_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dsa-entry-routing.module */ "./src/app/station/dsa-entry/dsa-entry-routing.module.ts");
/* harmony import */ var _dsa_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dsa-entry.page */ "./src/app/station/dsa-entry/dsa-entry.page.ts");







let DsaEntryPageModule = class DsaEntryPageModule {
};
DsaEntryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dsa_entry_routing_module__WEBPACK_IMPORTED_MODULE_5__["DsaEntryPageRoutingModule"]
        ],
        declarations: [_dsa_entry_page__WEBPACK_IMPORTED_MODULE_6__["DsaEntryPage"]]
    })
], DsaEntryPageModule);



/***/ }),

/***/ "./src/app/station/dsa-entry/dsa-entry.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/station/dsa-entry/dsa-entry.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mycard {\n  padding: 0px 7px;\n}\n\n.inp_control.armlist {\n  display: inline-block;\n  text-align: center !important;\n}\n\n.header-title ion-row {\n  padding-left: 2%;\n}\n\n.my_table thead tr td {\n  background: aliceblue;\n  padding: 1%;\n}\n\nh5 {\n  padding: 12px 10px 10px 10px;\n  background-color: var(--green_clr);\n  color: white;\n  margin-bottom: 2%;\n}\n\n.inp_control.coins div {\n  display: inherit;\n}\n\nion-col, ion-grid {\n  padding-left: 0;\n  padding-right: 0;\n}\n\nion-card {\n  margin-left: 0;\n  margin-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvc3RhdGlvbi9kc2EtZW50cnkvZHNhLWVudHJ5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc3RhdGlvbi9kc2EtZW50cnkvZHNhLWVudHJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdCQUFBO0FDQUo7O0FER0E7RUFFQSxxQkFBQTtFQUNBLDZCQUFBO0FDREE7O0FESUE7RUFBc0IsZ0JBQUE7QUNBdEI7O0FEQ0E7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUNFSjs7QURBQTtFQUNJLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNHSjs7QUREQTtFQUNJLGdCQUFBO0FDSUo7O0FERkE7RUFDSSxlQUFBO0VBQWlCLGdCQUFBO0FDTXJCOztBREpBO0VBQ0ksY0FBQTtFQUFnQixlQUFBO0FDUXBCIiwiZmlsZSI6InNyYy9hcHAvc3RhdGlvbi9kc2EtZW50cnkvZHNhLWVudHJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teWNhcmQgXHJcbntcclxuICAgIHBhZGRpbmc6IDBweCA3cHg7XHJcbn1cclxuXHJcbi5pbnBfY29udHJvbC5hcm1saXN0IHtcclxuICBcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG50ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVhZGVyLXRpdGxlIGlvbi1yb3d7cGFkZGluZy1sZWZ0OiAyJTt9XHJcbi5teV90YWJsZSB0aGVhZCB0ciB0ZHtcclxuICAgIGJhY2tncm91bmQ6IGFsaWNlYmx1ZTtcclxuICAgIHBhZGRpbmc6IDElO1xyXG59XHJcbmg1e1xyXG4gICAgcGFkZGluZzogMTJweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuX2Nscik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG4uaW5wX2NvbnRyb2wuY29pbnMgZGl2e1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxufVxyXG5pb24tY29sLCBpb24tZ3JpZHtcclxuICAgIHBhZGRpbmctbGVmdDogMDsgcGFkZGluZy1yaWdodDogMDs7XHJcbn1cclxuaW9uLWNhcmR7XHJcbiAgICBtYXJnaW4tbGVmdDogMDsgbWFyZ2luLXJpZ2h0OiAwO1xyXG59IiwiLm15Y2FyZCB7XG4gIHBhZGRpbmc6IDBweCA3cHg7XG59XG5cbi5pbnBfY29udHJvbC5hcm1saXN0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci10aXRsZSBpb24tcm93IHtcbiAgcGFkZGluZy1sZWZ0OiAyJTtcbn1cblxuLm15X3RhYmxlIHRoZWFkIHRyIHRkIHtcbiAgYmFja2dyb3VuZDogYWxpY2VibHVlO1xuICBwYWRkaW5nOiAxJTtcbn1cblxuaDUge1xuICBwYWRkaW5nOiAxMnB4IDEwcHggMTBweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbl9jbHIpO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xufVxuXG4uaW5wX2NvbnRyb2wuY29pbnMgZGl2IHtcbiAgZGlzcGxheTogaW5oZXJpdDtcbn1cblxuaW9uLWNvbCwgaW9uLWdyaWQge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/station/dsa-entry/dsa-entry.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/station/dsa-entry/dsa-entry.page.ts ***!
  \*****************************************************/
/*! exports provided: DsaEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsaEntryPage", function() { return DsaEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");







let DsaEntryPage = class DsaEntryPage {
    constructor(formBuilder, router, activatedroute, commonServices, menu, dp) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedroute = activatedroute;
        this.commonServices = commonServices;
        this.menu = menu;
        this.dp = dp;
        this.geteDate = { selcteddate: "" };
        this.ArmADetailSec = false;
        this.flagAramA = 0;
        this.ArmBDetailSec = false;
        this.flagAramB = 0;
        this.IsStatusGet = false;
        this.selectedRegion = 0;
        this.selectedStation = 0;
        this.SummeryDate = '';
        this.Cdate = '';
        this.CdateTime = new Date();
        this.MoUserId = '';
        this.LockUnlockCaption = '';
        this.DepartmentCode = localStorage.getItem('DepartmentCode');
        this.sideBarIsOpened = false;
        this.MySummaryDate = '';
        this.ForRate = '';
        this.ForDiscountedRate = '';
        this.stationName = "";
        this.CompanyName = '';
        this.submittedFlag = false;
        this.enterOtpfields = false;
        this.enteredotp = "";
        this.validotp = "";
        this.popupDate = "";
        this.successMessage = false;
        this.RegionName = "";
        this.currentStationName = "";
        this.SapCode = "";
        this.IsDropdownDisable = true;
        this.hoursLeft = 1;
        this.minutesLeft = 59;
        this.secondsLeft = 60;
        this.IsTimerStart = false;
        this.IsShiftComplete = false;
        this.secondMaxDate = new Date().toISOString();
        this.CompanyId = '';
        this.isButtonDisplay = false;
        this.monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ];
        this.MoUserId = localStorage.getItem('UID');
        localStorage.setItem("UserId", this.MoUserId);
        console.log(typeof (this.secondMaxDate));
        this.currentdate = new Date().toISOString().split('T')[0];
        if (this.geteDate.selcteddate == "") {
            this.currDate = this.currentdate;
            console.log(this.currDate);
            const dt = new Date(this.currDate);
            //New Comment Date Issue 
            // let latest_date = dt.getDate() + "-" + this.monthNames[dt.getMonth()] + "-" + dt.getFullYear();
            // this.geteDate.selcteddate = latest_date;
            // this.DPREntryDateTime = this.dp.transform(this.geteDate.selcteddate, 'yyyy-MM-dd hh:mm:ss');
            //this.geteDate.selcteddate=this.DPREntryDateTime;
            this.DPREntryDateTime = this.dp.transform(dt, 'yyyy/MM/dd hh:mm:ss');
            // this.geteDate.selcteddate = this.DPREntryDateTime;
            // localStorage.setItem("SummeryDate", this.geteDate.selcteddate);
            localStorage.setItem("SummeryDate", this.dp.transform(this.DPREntryDateTime, 'dd-MMM-yyyy'));
        }
        this.GetBasicSummerData();
        // this.getSummaryHO();
        // this.riDateFetchStationEntry();
        this.pageFlag = this.activatedroute.snapshot.paramMap.get('flag');
        if (this.pageFlag == 'dsaStationSummary') {
            this.router.navigate(['dsa-summary', { flag: 'dsaStationSummary' }]);
        }
    }
    ngOnInit() {
        if (this.DepartmentCode == 'HO' || this.DepartmentCode == 'CO' || this.DepartmentCode == 'MO')
            this.IsDropdownDisable = false;
        else
            this.IsDropdownDisable = true;
        if (JSON.parse(localStorage.getItem("globalDetail"))[0] == undefined) {
            this.stationName = JSON.parse(localStorage.getItem("globalDetail")).Name;
        }
        else {
            this.stationName = JSON.parse(localStorage.getItem("globalDetail"))[0].UserName;
        }
    }
    GetStationCompany() {
        this.commonServices.post('CommonGetData', { Flag: 'CompanyByStation', Id: this.selectedStation, Status: 1 }).subscribe((resp) => {
            this.CompanyName = JSON.parse(resp).Table[0].CompanyName;
            this.CompanyId = JSON.parse(resp).Table[0].CompanyId;
            console.log(this.CompanyName, 'Company');
            this.CheckCompany();
        }, (error) => {
            alert("Something went wrong.");
        });
    }
    CheckCompany() {
        if (this.CompanyId == '1' ||
            this.CompanyId == '5' || this.CompanyId == '6' || this.CompanyId == '8' || this.CompanyId == '9' ||
            this.CompanyId == '10' || this.CompanyId == '11') {
            this.isButtonDisplay = false;
        }
        else {
            this.isButtonDisplay = true;
        }
    }
    openFirst() {
        if (this.DepartmentCode == 'SOP') {
            this.menu.enable(true, 'menuCO');
            this.menu.open('menuCO');
        }
        else {
            this.menu.enable(true, 'menuStn');
            this.menu.open('menuStn');
        }
    }
    armACollapse() {
        if (this.flagAramA == 0) {
            this.ArmADetailSec = true;
            this.flagAramA = 1;
        }
        else {
            this.ArmADetailSec = false;
            this.flagAramA = 0;
        }
    }
    armBCollapse() {
        if (this.flagAramB == 0) {
            this.ArmBDetailSec = true;
            this.flagAramB = 1;
        }
        else {
            this.ArmBDetailSec = false;
            this.flagAramB = 0;
        }
    }
    riDateFetchStationEntry() {
        // this.commonServices.loadingPresent();
        this.commonServices.post("CommonGetData", {
            Id: this.selectedStation, Flag: 'validatePopup',
            Status: this.SummeryDate
        }).subscribe((resp) => {
            // this.commonServices.loadingDismiss();
            const data = JSON.parse(resp);
            console.log(data);
            if (data.Table[0].Msg == 'Allow') {
                this.geteDate.selcteddate = this.DPREntryDateTime;
                if (this.dispenserList.length != 0) {
                    //   this.sideBarIsOpened = ! this.sideBarIsOpened;
                    //   if(this.sideBarIsOpened){
                    //   this.objDbServ.StationDetails.emit({
                    //     StationId:this.selectedStation,
                    //     SummeryDate:this.MySummaryDate,
                    //     UserId:this.MoUserId
                    //   });
                    //   this.objDbServ.ShiftDetails.emit({
                    //     ShiftId:'-1',
                    //     SubShiftId:'-1',
                    //     ActiveTab:"Dispenser"
                    //   });
                    // }
                    // this.router.navigate(['dsa-entry-detail']);
                    this.commonServices.presentToast('Dispenser Available');
                }
                else {
                    this.commonServices.presentToast('No Dispenser Available');
                }
                this.getSummaryHO();
            }
            else {
                this.commonServices.presentToast(data.Table[0].Msg);
                var riDateStation = data.Table[0].Msg.split("for ");
                console.log("riDateStation" + riDateStation);
                var mriDate = new Date(riDateStation[1]);
                //this.secondMaxDate = mriDate.toISOString();
                this.getSelectedDate(riDateStation[1]);
            }
        }, (error) => {
            this.commonServices.presentToast('Something went wrong.');
            //  this.commonServices.loadingDismiss();
        });
        // {StationId:this.selectedStation,
        //   SummeryDate:this.geteDate.selcteddate,
        // UserId:this.MoUserId}
        // this.router.navigate(['dsa-entry-detail']);
    }
    dsaEntryDetailRedirect() {
        const obj = {
            Id: this.selectedStation, Flag: 'validatePopup',
            Status: this.SummeryDate
        };
        // this.commonServices.presentToast(obj.Status + obj.Id);
        this.commonServices.loadingPresent();
        this.commonServices.post("CommonGetData", {
            Id: this.selectedStation, Flag: 'validatePopup',
            Status: this.SummeryDate
        }).subscribe((resp) => {
            this.commonServices.loadingDismiss();
            const data = JSON.parse(resp);
            // this.commonServices.presentToast(JSON.stringify(data.Table[0]));
            if (data.Table[0].Msg == "Allow") {
                this.geteDate.selcteddate = this.DPREntryDateTime;
                if (this.dispenserList.length != 0) {
                    //   this.sideBarIsOpened = ! this.sideBarIsOpened;
                    //   if(this.sideBarIsOpened){
                    //   this.objDbServ.StationDetails.emit({
                    //     StationId:this.selectedStation,
                    //     SummeryDate:this.MySummaryDate,
                    //     UserId:this.MoUserId
                    //   });
                    //   this.objDbServ.ShiftDetails.emit({
                    //     ShiftId:'-1',
                    //     SubShiftId:'-1',
                    //     ActiveTab:"Dispenser"
                    //   });
                    // }
                    this.router.navigate(['dsa-entry-detail']);
                }
                else {
                    this.commonServices.presentToast('No Dispenser Available');
                }
            }
            else {
                // this.commonServices.presentToast(data.Table[0].Msg);
            }
        }, (error) => {
            this.commonServices.presentToast('Something went wrong.');
            this.commonServices.loadingDismiss();
        });
    }
    getSelectedDate(datePicker) {
        console.log("datePicker", datePicker);
        const dt = new Date(datePicker);
        // let latest_date = dt.getDate() + "-" + this.monthNames[dt.getMonth()] + "-" + dt.getFullYear();
        // this.geteDate.selcteddate = latest_date;
        //New Comment Date Issue 
        // this.DPREntryDateTime = this.dp.transform(this.geteDate.selcteddate, 'yyyy-MM-dd hh:mm:ss');
        //this.geteDate.selcteddate=this.DPREntryDateTime;
        this.DPREntryDateTime = this.dp.transform(dt, 'yyyy/MM/dd hh:mm:ss');
        this.geteDate.selcteddate = this.DPREntryDateTime;
        this.SummeryDate = this.dp.transform(dt, 'yyyy/MM/dd hh:mm:ss');
        //New Comment  Date Issue  
        // this.SummeryDate = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        // this.SummeryDate = new Date(datePicker).toLocaleDateString();
        // this.GetBasicSummerData();
        // localStorage.setItem("SummeryDate", this.geteDate.selcteddate);
        localStorage.setItem("SummeryDate", this.dp.transform(this.geteDate.selcteddate, 'dd-MMM-yyyy'));
        this.getSummaryHO();
    }
    onStationSelect() {
        setTimeout(() => {
            this.getSummaryHO();
        });
    }
    FetchDSASubmittedData() {
        var StationCode = JSON.parse(localStorage.getItem("globalDetail"))[0].StationCode;
        this.commonServices.FetchDSASubmittedData({ StationId: this.selectedStation,
            CDate: this.SummeryDate, StationCode: StationCode }).subscribe((resp) => {
            var arr = [];
            const data1 = JSON.parse(resp);
            console.log(data1);
            if (data1 != '') {
                arr = data1.Table;
                console.log(arr);
                this.popupDate = this.dp.transform(this.SummeryDate, 'dd-MMM-yyyy');
            }
        }, (error) => {
            this.commonServices.presentToast('Something went wrong.');
        });
    }
    GetBasicSummerData() {
        this.commonServices.loadingPresent();
        this.commonServices.post("CommonGetData", { Id: this.MoUserId, Flag: 'SummeryFlag' })
            .subscribe((resp) => {
            this.Cdate = JSON.parse(resp).Table2[0].Cdate;
            console.log(this.Cdate, 'Cdate');
            this.DepartmentCode = JSON.parse(resp).Table2[0].DepartmentCode;
            this.SummeryDate = this.Cdate;
            this.RegionList = JSON.parse(resp).Table;
            this.RegionName = this.RegionList[0].RegionName;
            console.log(this.DepartmentCode, "DepartmentCode");
            this.selectedRegion = JSON.parse(resp).Table[0].RegionId;
            this.StationList = JSON.parse(resp).Table1;
            console.log(this.StationList, 'Sapcode');
            this.currentStationName = this.StationList[0].StationName;
            this.SapCode = this.StationList[0].SapCode;
            console.log(this.currentStationName);
            this.selectedStation = JSON.parse(resp).Table1[0].StationId;
            localStorage.setItem("StationId", JSON.stringify(this.selectedStation));
            //this.FetchDSASubmittedData();
            this.riDateFetchStationEntry();
            setTimeout(() => {
                this.getSummaryHO();
                this.GetStationCompany();
            });
            this.commonServices.loadingDismiss();
        }, (error) => {
            this.commonServices.presentToast('Something went wrong.');
            this.commonServices.loadingDismiss();
        });
    }
    onRegionSelect() {
        //this.commonServices.loadingPresent();
        this.commonServices.post("CommonGetData", {
            Id: this.selectedRegion, Flag: 'StationByRegionId',
            Status: this.MoUserId, ReportFlag: this.DepartmentCode
        }).subscribe((resp) => {
            this.StationList = JSON.parse(resp).Table;
            if (JSON.parse(resp).Table != undefined) {
                this.selectedStation = JSON.parse(resp).Table[0].StationId;
            }
            //   setTimeout(() => {
            this.getSummaryHO();
            //   });
            // this.commonServices.loadingDismiss();
        }, (error) => {
            this.commonServices.presentToast('Something went wrong.');
            // this.commonServices.loadingDismiss();
        });
    }
    getSummaryHO() {
        this.sideBarIsOpened = false;
        // this.commonServices.loadingPresent();
        this.commonServices.post("getSummaryHO", { StationId: this.selectedStation,
            EntryDate: this.SummeryDate }).subscribe((resp) => {
            this.commonServices.loadingDismiss();
            this.dispenserList = JSON.parse(resp).Table;
            this.Summary = JSON.parse(resp).Table1;
            //this.LockUnlock = ((JSON.parse(resp).Table2[0].LockFlag == 0)?true:false);
            this.FetchDSASubmittedData();
            // this.riDateFetchStationEntry();
            this.MySummaryDate = JSON.parse(resp).Table2[0].SummaryDate;
            //Lower detail for Left side
            this.lowerDetLeft = JSON.parse(resp).Table3;
            //Lower detail for center side
            //this.RateDetails = JSON.parse(resp).Table2[0];
            this.ForRate = JSON.parse(resp).Table2[0].Rate;
            this.ForDiscountedRate = JSON.parse(resp).Table2[0].DisountedRate;
            this.DisNonDicSmmry = JSON.parse(resp).Table4;
            //  this.commonServices.loadingDismiss();
        }, (error) => {
            this.commonServices.presentToast('Something went wrong.');
            // this.commonServices.loadingDismiss();
        });
    }
    getReadingByDispName(DispName, SumRow, DispSide) {
        for (let i = 0; i < Object.keys(SumRow).length; i++) {
            if (DispName == Object.keys(SumRow)[i].split('_##_')[0]) {
                if (DispSide == '_ArmA')
                    return Object.values(SumRow)[i];
                else if (DispSide == '_ArmB')
                    return Object.values(SumRow)[i + 1];
            }
        }
    }
};
DsaEntryPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] }
];
DsaEntryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dsa-entry',
        template: __webpack_require__(/*! raw-loader!./dsa-entry.page.html */ "./node_modules/raw-loader/index.js!./src/app/station/dsa-entry/dsa-entry.page.html"),
        styles: [__webpack_require__(/*! ./dsa-entry.page.scss */ "./src/app/station/dsa-entry/dsa-entry.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]])
], DsaEntryPage);



/***/ })

}]);
//# sourceMappingURL=station-dsa-entry-dsa-entry-module-es2015.js.map