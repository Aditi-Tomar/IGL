(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["HO-jump-reading-system-jump-reading-system-module"],{

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/HO/jump-reading-system/jump-reading-system.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/HO/jump-reading-system/jump-reading-system.page.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t<header>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/home\" *ngIf=\"DepartmentCode == 'SO'\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/mo-dashboard\"  *ngIf=\"DepartmentCode == 'MO'\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/co-dashboard\"  *ngIf=\"DepartmentCode == 'CO'\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/so-dashboard\" *ngIf=\"DepartmentCode == 'SOP'\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<div class=\"logo_div\" routerLink=\"/admin-home\" *ngIf=\"DepartmentCode == 'HO'\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\" />\r\n\t\t\t</div>\r\n\t\t\t<h1 class=\"text_white text_center title\">Jump Reading System</h1>\r\n\t\t\t<span class=\"logout_div\">\r\n\t\t\t\t<div class=\"toggle_div\">\r\n\t\t\t\t\t<button (click)=\"openFirst()\">\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</header>\r\n\t<ion-row class=\"align_center search_parent\" *ngIf=\"showmaincontent==true\">\r\n\t\t<ion-col size=\"2\">\r\n\t\t\t<ion-back-button defaultHref=\"attachment\"></ion-back-button>\r\n\t\t</ion-col>\r\n\t\t<ion-col size=\"8\">\r\n\t\t\t<h4 class=\"ion-text-center\">Jump Reading System</h4>\r\n\t\t</ion-col>\r\n\t\t<!-- <ion-col size=\"2\" offset=\"4\">\r\n\t\t\t<ion-button size=\"small\" color=\"light\" (click)=\"searchCollapse()\">\r\n\t\t\t\t<ion-icon name=\"search\" class=\"font22\"></ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-col> -->\r\n\t\t<!-- <ion-col size=\"5\"></ion-col>\r\n\t\t<ion-col size=\"5\"> -->\r\n\t\t\t<!-- <ion-button size=\"small\" color=\"light\" class=\"date_btn\">\r\n\t\t\t\t<ion-datetime #selcteddate class=\"datepick\" displayFormat=\" DD-MM-YYYY\" pickerFormat=\"DD MMMM YYYY\"\r\n\t\t\t\t\t[(ngModel)]=\"CDate\" name=\"CDate\" (ngModelChange)=\"OnDateChnage(selcteddate.value)\"></ion-datetime>\r\n\t\t\t</ion-button> -->\r\n\t\t<!-- </ion-col> -->\r\n\t\t<ion-col size=\"12\" *ngIf=\"searchShow\" class=\"searchbar_container\">\r\n\t\t\t<ion-searchbar type=\"text\" debounce=\"500\" (ionInput)=\"getItems($event)\" showCancelButton=\"always\"\r\n\t\t\t\t(ionCancel)=\"hideSearchBar()\"></ion-searchbar>\r\n\t\t</ion-col>\r\n\t</ion-row>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<div class=\"content_area\">\r\n\t\t<div class=\"mycard\">\r\n\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t<label>Date From</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t<ion-label>Select Date:</ion-label>\r\n\t\t\t\t\t\t<ion-datetime #selcteddateFrom class=\"inp_control date\" displayFormat=\"DD-MMM-YYYY\"\r\n\t\t\t\t\t\t\tpickerFormat=\"DD MMM YYYY\" [ngModel]=\"DateFrom\" name=\"selcteddateForm\"\r\n\t\t\t\t\t\t\t(ngModelChange)=\"OnDateChnageFrom(selcteddateFrom.value)\" [max]=\"secondMaxDate\">\r\n\t\t\t\t\t\t</ion-datetime>\r\n\t\t\t\t\t</ion-item>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form_inp_container\">\r\n\t\t\t\t<div class=\"label_container\">\r\n\t\t\t\t\t<label>Date To</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"input_container\">\r\n\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t<ion-label>Select Date:</ion-label>\r\n\t\t\t\t\t\t<ion-datetime #selcteddateTo class=\"inp_control date\" displayFormat=\"DD-MMM-YYYY\"\r\n\t\t\t\t\t\t\tpickerFormat=\"DD MMM YYYY\" [ngModel]=\"DateTo\" name=\"selcteddateTo\"\r\n\t\t\t\t\t\t\t(ngModelChange)=\"OnDateChnageTo(selcteddateTo.value)\" [min]=\"DateFromMy\"\r\n\t\t\t\t\t\t\t[max]=\"secondMaxDate\"></ion-datetime>\r\n\t\t\t\t\t</ion-item>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<ion-grid *ngIf=\"showmaincontent==true\">\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<div class=\"my_table_container\">\r\n\t\t\t\t\t\t\t<table class=\"my_table\">\r\n\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Date</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Station</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Equipment</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Arms</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Redading Before Jump</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Redading After Jump</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Total Jump</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Approved By Station</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Approved By ONM</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Approved By AMO</th>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let itm of JumpReadingData let i = index\" (click)=\"GetRowdata(itm)\">\r\n\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"itm.UserRole == 'SO'\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"success\" *ngIf=\"itm.ApprovedByStation == 1\" class=\"btn_CRS_default\">\r\n\t\t\t\t\t\t\t\t\t\t\t  Accepted\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"danger\" *ngIf=\"itm.ApprovedByStation == 2\" data-toggle=\"modal\" >\r\n\t\t\t\t\t\t\t\t\t\t\t  Rejected\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"success\" *ngIf=\"itm.ApprovedByStation == 0\" (click)=\"UpdateJumpReadingStatusByRole('A', itm)\">\r\n\t\t\t\t\t\t\t\t\t\t\t  Accept\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"danger\" *ngIf=\"itm.ApprovedByStation == 0\" (click)=\"UpdateJumpReadingStatusByRole('R', itm)\">\r\n\t\t\t\t\t\t\t\t\t\t\t  Reject\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t\t\t  </td>\r\n\r\n\t\t\t\t\t\t\t\t\t\t  <td *ngIf=\"itm.UserRole == 'CO'\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"success\" *ngIf=\"itm.IsApprovedByONM == 1\" class=\"btn_CRS_default\">\r\n\t\t\t\t\t\t\t\t\t\t\t  Accepted\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"danger\" *ngIf=\"itm.IsApprovedByONM == 2\" data-toggle=\"modal\" data-target=\"#myModal\">\r\n\t\t\t\t\t\t\t\t\t\t\t  Rejected\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"success\" *ngIf=\"itm.IsApprovedByONM == 0\" (click)=\"UpdateJumpReadingStatusByRole('A', itm)\">\r\n\t\t\t\t\t\t\t\t\t\t\t  Accept\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"danger\" *ngIf=\"itm.IsApprovedByONM == 0\" (click)=\"UpdateJumpReadingStatusByRole('R', itm)\">\r\n\t\t\t\t\t\t\t\t\t\t\t  Reject\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-button>\r\n\t\t\t\t\t\t\t\t\t\t  </td>\r\n\t\t\t\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"itm.UserRole == 'HO'\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"success\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"itm.IsApprovedByInstrumental== 1\">Accept</ion-button>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"danger\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"itm.IsApprovedByInstrumental== 2\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"goToJumpReamrk(true,itm)\">Reject</ion-button>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"success\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"itm.IsApprovedByInstrumental==0\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"UpdateJumpReadingStatusByRole('A',itm)\">Accept</ion-button>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <ion-button size=\"small\" color=\"primary\" *ngIf=\"itm.IsApprovedByONM == 2\">Approved</ion-button> -->\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"danger\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"itm.IsApprovedByInstrumental==0\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"UpdateJumpReadingStatusByRole('R', itm)\">Reject</ion-button>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"itm.UserRole == 'MO'\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"success\" *ngIf=\"itm.IsApprovedByMO== 1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tAccept</ion-button>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"danger\" *ngIf=\"itm.IsApprovedByMO== 2\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tReject</ion-button>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"success\" *ngIf=\"itm.IsApprovedByMO==0\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"UpdateJumpReadingStatusByRole('A',itm)\">Accept</ion-button>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <ion-button size=\"small\" color=\"primary\" *ngIf=\"itm.IsApprovedByONM == 2\">Approved</ion-button> -->\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-button size=\"small\" color=\"danger\" *ngIf=\"itm.IsApprovedByMO==0\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"UpdateJumpReadingStatusByRole('R',itm)\">Reject</ion-button>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.ApprovedDate}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.StationName}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.DispenserName}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.Arms}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.ReadingBeforeJump}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.ReadingAfterJump}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{itm.TotalJump}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"text_center\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"checkmark\" class=\"mycheck\" *ngIf=\"itm.ApprovedByStation == 1\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"close\" class=\"myclose\" *ngIf=\"itm.ApprovedByStation == 2\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"remove\" *ngIf=\"itm.ApprovedByStation == 0\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"checkmark\" class=\"mycheck\" *ngIf=\"itm.IsApprovedByONM == 1\">\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"close\" class=\"myclose\" *ngIf=\"itm.IsApprovedByONM==2\">\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"remove\" *ngIf=\"itm.IsApprovedByONM == 0\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"checkmark\" class=\"mycheck\" *ngIf=\"itm.IsApprovedByMO == 1\">\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"close\" class=\"myclose\" *ngIf=\"itm.IsApprovedByMO==2\">\r\n\t\t\t\t\t\t\t\t\t\t\t</ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"remove\" *ngIf=\"itm.IsApprovedByMO == 0\"></ion-icon>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</ion-grid>\r\n\r\n\t\t\t<!--Instrumental Remark  -->\r\n\t\t\t<div *ngIf=\"DepartmentCode == 'HO'\">\r\n\t\t\t\t<form *ngIf=\"showRemark == true\">\r\n\t\t\t\t\t<ion-grid>\r\n\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t\t\t\t<ion-input class=\"inp_control\" placeholder=\"Total Jump\" [(ngModel)]=\"TotalJump\"\r\n\t\t\t\t\t\t\t\t\tname=\"TotalJump\"></ion-input>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t\t<ion-col size=\"12\" class=\"inp_group\">\r\n\t\t\t\t\t\t\t\t<ion-textarea type=\"text\" class=\"inp_control\" placeholder=\"Remark\" rows=\"5\"\r\n\t\t\t\t\t\t\t\t\t[value]=\"Remark\" (input)=\"Remark=$event.target.value\"></ion-textarea>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t\t<div class=\"button_container\">\r\n\t\t\t\t\t\t\t\t\t<ion-button color=\"dark_green_clr\" type=\"submit\"\r\n\t\t\t\t\t\t\t\t\t\t(click)=\"InsertRemarkByInstrumental();\">Save</ion-button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t\t</ion-row>\r\n\t\t\t\t\t</ion-grid>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/HO/jump-reading-system/jump-reading-system-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/HO/jump-reading-system/jump-reading-system-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: JumpReadingSystemPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JumpReadingSystemPageRoutingModule", function() { return JumpReadingSystemPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _jump_reading_system_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jump-reading-system.page */ "./src/app/HO/jump-reading-system/jump-reading-system.page.ts");




const routes = [
    {
        path: '',
        component: _jump_reading_system_page__WEBPACK_IMPORTED_MODULE_3__["JumpReadingSystemPage"]
    }
];
let JumpReadingSystemPageRoutingModule = class JumpReadingSystemPageRoutingModule {
};
JumpReadingSystemPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], JumpReadingSystemPageRoutingModule);



/***/ }),

/***/ "./src/app/HO/jump-reading-system/jump-reading-system.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/HO/jump-reading-system/jump-reading-system.module.ts ***!
  \**********************************************************************/
/*! exports provided: JumpReadingSystemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JumpReadingSystemPageModule", function() { return JumpReadingSystemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _jump_reading_system_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jump-reading-system-routing.module */ "./src/app/HO/jump-reading-system/jump-reading-system-routing.module.ts");
/* harmony import */ var _jump_reading_system_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jump-reading-system.page */ "./src/app/HO/jump-reading-system/jump-reading-system.page.ts");







let JumpReadingSystemPageModule = class JumpReadingSystemPageModule {
};
JumpReadingSystemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _jump_reading_system_routing_module__WEBPACK_IMPORTED_MODULE_5__["JumpReadingSystemPageRoutingModule"]
        ],
        declarations: [_jump_reading_system_page__WEBPACK_IMPORTED_MODULE_6__["JumpReadingSystemPage"]]
    })
], JumpReadingSystemPageModule);



/***/ }),

/***/ "./src/app/HO/jump-reading-system/jump-reading-system.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/HO/jump-reading-system/jump-reading-system.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.text_center {\n  text-align: center;\n}\n.mycheck {\n  color: #22d629;\n  font-size: 16px;\n}\n.myclose {\n  color: red;\n  font-size: 16px;\n}\n.date_btn {\n  position: relative;\n  width: 100%;\n}\n.date_btn ion-datetime {\n  padding: 0px;\n  padding-left: 18px;\n  padding-top: 3px;\n}\n.date_btn::before {\n  font-family: \"Font Awesome 5 Free\";\n  content: \"\";\n  position: absolute;\n  left: 5px;\n  top: 4px;\n  width: 20px;\n  z-index: 2;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: 0px;\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.7);\n}\n.inp_control {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSE8vanVtcC1yZWFkaW5nLXN5c3RlbS9qdW1wLXJlYWRpbmctc3lzdGVtLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9hZGl0aXRvbWFyL0Rlc2t0b3AvZ2l0L3NyYy9hcHAvSE8vanVtcC1yZWFkaW5nLXN5c3RlbS9qdW1wLXJlYWRpbmctc3lzdGVtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFFSSxrQkFBQTtBRENKO0FDQ0E7RUFFSSxjQUFBO0VBQ0EsZUFBQTtBRENKO0FDQ0E7RUFFSSxVQUFBO0VBQ0EsZUFBQTtBRENKO0FDQ0E7RUFFSSxrQkFBQTtFQUNBLFdBQUE7QURDSjtBQ0FJO0VBRUksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QURDUjtBQ0VBO0VBRUksa0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FEQUo7QUNHQTtFQUFhLFlBQUE7QURDYiIsImZpbGUiOiJzcmMvYXBwL0hPL2p1bXAtcmVhZGluZy1zeXN0ZW0vanVtcC1yZWFkaW5nLXN5c3RlbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4udGV4dF9jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5teWNoZWNrIHtcbiAgY29sb3I6ICMyMmQ2Mjk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLm15Y2xvc2Uge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5kYXRlX2J0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZGF0ZV9idG4gaW9uLWRhdGV0aW1lIHtcbiAgcGFkZGluZzogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE4cHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG59XG5cbi5kYXRlX2J0bjo6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xuICBjb250ZW50OiBcIu+Bs1wiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDVweDtcbiAgdG9wOiA0cHg7XG4gIHdpZHRoOiAyMHB4O1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG5cbi5pbnBfY29udHJvbCB7XG4gIGJvcmRlcjogbm9uZTtcbn0iLCIudGV4dF9jZW50ZXJcclxue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5teWNoZWNrXHJcbntcclxuICAgIGNvbG9yOiAjMjJkNjI5O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5teWNsb3NlXHJcbntcclxuICAgIGNvbG9yOnJlZDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uZGF0ZV9idG5cclxue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGlvbi1kYXRldGltZVxyXG4gICAge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgIH1cclxufVxyXG4uZGF0ZV9idG46OmJlZm9yZVxyXG57XHJcbiAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XHJcbiAgICBjb250ZW50OiBcIlxcZjA3M1wiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNXB4O1xyXG4gICAgdG9wOiA0cHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxufVxyXG5cclxuLmlucF9jb250cm9se2JvcmRlcjpub25lO31cclxuIl19 */"

/***/ }),

/***/ "./src/app/HO/jump-reading-system/jump-reading-system.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/HO/jump-reading-system/jump-reading-system.page.ts ***!
  \********************************************************************/
/*! exports provided: JumpReadingSystemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JumpReadingSystemPage", function() { return JumpReadingSystemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ "./node_modules/@ionic-native/document-viewer/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








// import { File } from '@ionic-native/file/ngx';
// import { FileTransfer } from '@ionic-native/file-transfer/ngx';



let JumpReadingSystemPage = class JumpReadingSystemPage {
    constructor(menu, router, activatedroute, commonServices, platform, fileOpener, datepipe, document, file, transfer, alertController) {
        this.menu = menu;
        this.router = router;
        this.activatedroute = activatedroute;
        this.commonServices = commonServices;
        this.platform = platform;
        this.fileOpener = fileOpener;
        this.datepipe = datepipe;
        this.document = document;
        this.file = file;
        this.transfer = transfer;
        this.alertController = alertController;
        this.searchShow = false;
        this.searchFlag = 0;
        this.JumpReadingData = [];
        this.Dashdate = '';
        this.selectedStation = '';
        this.reverse = true;
        this.DepartmentCode = localStorage.getItem('DepartmentCode');
        this.LoginStationId = localStorage.getItem('stationId');
        this.UserId = localStorage.getItem('UID');
        this.Action = '';
        this.Remark = '';
        this.TotalJump = 0.00;
        this.StationId = '';
        this.flag = '';
        this.monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ];
        this.secondMaxDate = new Date().toISOString();
        this.CurrentDate = '';
        this.DateFromMy = new Date().toISOString().split('T')[0];
        this.showRemark = false;
        this.showmaincontent = true;
        this.ApprovedByIntrument = 0;
        this.ApprovedByONM = 0;
    }
    ngOnInit() {
        const dt = new Date();
        this.CurrentDate = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        this.DateFrom = new Date().toLocaleDateString();
        this.DateTo = new Date().toLocaleDateString();
        // this.Dashdate = '07-Aug-2020'; //new Date().toLocaleDateString();
        // this.CDate = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        // this.CDate= '07-Aug-2020';
        //IoS Comment
        // this.DateFrom = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        // this.DateTo = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        //IOS Add
        this.DateFrom = this.datepipe.transform(dt, 'yyyy/MM/dd');
        this.DateTo = this.datepipe.transform(dt, 'yyyy/MM/dd');
        setTimeout(() => {
            this.getJumpReadingData();
        });
    }
    OnDateChnageFrom(val) {
        var self = this;
        const dt = new Date(val);
        this.DateFromMy = val.split('T')[0];
        //IoS Comment
        // self.DateFrom = dt.getDate() + "/" + self.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        //IOS Add
        self.DateFrom = this.datepipe.transform(dt, 'yyyy/MM/dd');
        if ((new Date(self.DateTo)) < (new Date(self.DateFrom))) {
            console.log("Time");
            this.DateTo = this.DateFrom.split('T')[0];
            // this.DateFromMy = this.DateFrom.split('T')[0];
        }
        this.getJumpReadingData();
    }
    OnDateChnageTo(val) {
        var self = this;
        const dt = new Date(val);
        //IOS Comment
        //self.DateTo = dt.getDate() + "/" + self.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        //IOS Add
        self.DateTo = this.datepipe.transform(dt, 'yyyy/MM/dd');
        this.getJumpReadingData();
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
    // get Date
    //  getSelectedDate(datePicker) {
    //   console.log("datePicker", datePicker);
    //   const dt = new Date(datePicker);
    //   let latest_date = dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
    //   this.CDate = latest_date;
    //   //datePicker.open();
    // }
    getJumpReadingData() {
        this.commonServices.loadingPresent();
        this.commonServices.post("CommonGetData", {
            Flag: 'JumpReadingSystemDataByRole', ReportFlag: this.DepartmentCode,
            // ActivityLog_date: this.DateFrom,
            // CDashdate: this.DateTo,
            ActivityLog_date: this.datepipe.transform(this.DateFrom, 'dd/MMM/yyyy'),
            CDashdate: this.datepipe.transform(this.DateTo, 'dd/MMM/yyyy'),
            Id: this.UserId
        }).subscribe((res) => {
            this.commonServices.loadingDismiss();
            if (JSON.parse(res).Table.length > 0) {
                this.JumpReadingData = JSON.parse(res).Table;
                console.log(this.JumpReadingData, "JumpReadingSystemDataByRole");
            }
            else {
                this.JumpReadingData = [];
                this.commonServices.presentToast("No Data Found.");
            }
        }, (error) => {
            this.commonServices.presentToast("Something went wrong.");
            this.commonServices.loadingDismiss();
        });
    }
    OnDateChnage(val) {
        // const dt = new Date(val);
        // this.CDate= dt.getDate() + "/" + this.monthNames[dt.getMonth()] + "/" + dt.getFullYear();
        this.getJumpReadingData();
    }
    GetRowdata(itm) {
        this.Id = itm.ID,
            this.StationId = itm.StationId,
            this.Remark = this.Remark,
            this.TotalJump = this.TotalJump,
            // this.JumpDate = itm.JumpDate
            this.ApprovedDate = itm.ApprovedDate;
    }
    InsertRemarkByInstrumental() {
        var Json = {
            Id: this.Id,
            SelectedDate: this.ApprovedDate,
            StationId: this.StationId,
            DepartmentCode: this.DepartmentCode,
            Remark: this.Remark,
            Jump: this.TotalJump,
            LoginId: this.UserId
        };
        this.commonServices.loadingPresent();
        this.commonServices.post("InsertRemarkByInstrumental", Json).subscribe((res) => {
            const data = JSON.parse(res);
            console.log(data.Table[0].Mesage, "Success");
            this.commonServices.presentToast(data.Table[0].Mesage);
            this.commonServices.loadingDismiss();
            // $('.modal').modal('hide');
            this.getJumpReadingData();
        }, (error) => {
            this.commonServices.presentToast("Something went wrong.");
            this.commonServices.loadingDismiss();
        });
    }
    UpdateJumpReadingStatusByRole(status, itm) {
        this.Action = status;
        this.ApprovedByIntrument = itm.IsApprovedByInstrumental;
        this.ApprovedByONM = itm.IsApprovedByONM;
        var Json = {
            Id: itm.ID,
            SelectedDate: itm.ApprovedDate,
            StationId: itm.StationId,
            DepartmentCode: this.DepartmentCode,
            status: (status == 'A') ? 1 : 2,
            Remark: this.Remark,
            Jump: this.TotalJump,
            LoginId: this.UserId,
            ApprovedByIntrument: itm.IsApprovedByInstrumental,
            ApprovedByONM: itm.IsApprovedByONM
        };
        this.errorFound = true;
        if (this.ValidateJRS()) {
            this.commonServices.loadingPresent();
            this.commonServices.post("UpdateJumpReadingStatusByRole", Json).subscribe((res) => {
                const data = JSON.parse(res);
                console.log(data.Table[0].Mesage, "Success");
                this.commonServices.loadingDismiss();
                if (this.DepartmentCode == 'SO' && status == 'A') {
                    this.confirmCertificate(itm.ApprovedDate);
                }
                if (this.DepartmentCode == 'HO' && status == 'A') {
                    this.confirmCertificate(itm.ApprovedDate);
                }
                this.commonServices.presentToast(data.Table[0].Mesage);
                this.getJumpReadingData();
            }, (error) => {
                this.commonServices.presentToast("Something went wrong.");
                this.commonServices.loadingDismiss();
            });
        }
    }
    confirmCertificate(ApprovedDate) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm',
                message: 'Do You want download Jump Certificate.?"',
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
                            this.GenerateJumpCertificate(ApprovedDate);
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    GenerateJumpCertificate(ApprovedDate) {
        this.commonServices.loadingPresent();
        this.commonServices.post("JumpReadingCertificate", { Flag: 'getJumPReadingById', CDashdate: ApprovedDate, Id: this.Id, Status: this.StationId }).subscribe((res) => {
            const data = JSON.parse(res);
            if (data) {
                let PdfUrl = "";
                PdfUrl = this.commonServices.baseUrl.substring(0, this.commonServices.baseUrl.length - 4) + JSON.parse(res);
                console.log(PdfUrl);
                // let FileSaver = require('file-saver');
                // FileSaver.saveAs(PdfUrl);
                // const pdfUrl = 'https://example.com/sample.pdf';  // URL of the PDF
                Object(file_saver__WEBPACK_IMPORTED_MODULE_7__["saveAs"])(PdfUrl, 'downloaded_file.pdf');
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
            this.commonServices.loadingDismiss();
        }, (error) => {
            this.commonServices.presentToast("Something went wrong.");
            this.commonServices.loadingDismiss();
        });
    }
    goToJumpReamrk(value, itm) {
        this.GetRowdata(itm);
        // this.router.navigate(['/jump-reading-system-remark']);
        if (value == true) {
            this.showRemark = true;
            this.showmaincontent = false;
        }
        else {
            this.showmaincontent;
            this.showRemark;
        }
    }
    ValidateJRS() {
        if (this.DepartmentCode == 'CO') {
            if (this.ApprovedByIntrument == 0 && (this.Action == 'A' || this.Action == 'R')) {
                this.commonServices.presentToast('ONM cant approve/reject jump record before Instrumental.');
                this.errorFound = false;
            }
            if (this.ApprovedByIntrument == 2 && this.Action == 'A') {
                this.commonServices.presentToast('Record cant approved, As jump record rejected by Instrumental.');
                this.errorFound = false;
            }
        }
        else if (this.DepartmentCode == 'MO') {
            if (this.ApprovedByONM == 0 && (this.Action == 'A' || this.Action == 'R')) {
                this.commonServices.presentToast('Marketing officer cant approve/reject jump record before ONM.');
                this.errorFound = false;
            }
            if (this.ApprovedByIntrument == 2 && status == 'A') {
                this.commonServices.presentToast('Record cant approve, As jump record rejected by ONM.');
                this.errorFound = false;
            }
        }
        return this.errorFound;
    }
};
JumpReadingSystemPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__["FileOpener"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"] },
    { type: _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_8__["DocumentViewer"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
JumpReadingSystemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jump-reading-system',
        template: __webpack_require__(/*! raw-loader!./jump-reading-system.page.html */ "./node_modules/raw-loader/index.js!./src/app/HO/jump-reading-system/jump-reading-system.page.html"),
        styles: [__webpack_require__(/*! ./jump-reading-system.page.scss */ "./src/app/HO/jump-reading-system/jump-reading-system.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__["FileOpener"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"],
        _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_8__["DocumentViewer"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"],
        _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], JumpReadingSystemPage);



/***/ })

}]);
//# sourceMappingURL=HO-jump-reading-system-jump-reading-system-module-es2015.js.map