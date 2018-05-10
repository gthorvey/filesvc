webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "#header {\r\n  text-align: center;\r\n  font: normal 21px/1 Arial, Helvetica, sans-serif;\r\n}\r\n\r\n#flex-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  width: 100%;\r\n  border: 0px blue solid;\r\n  margin: 5px auto;\r\n}\r\n\r\n.file-explorer {\r\n  width: 20%;\r\n  height: 400px;\r\n  border: 0px red solid;\r\n}\r\n\r\n.main-content-container {\r\n  width: 80%;\r\n  height: 400px;\r\n}\r\n\r\n.sub-header {\r\n  height: 75px;\r\n  width: 80%;\r\n  border: 0px red solid;\r\n}\r\n\r\n.main-content {\r\n  height: 325px;\r\n  width: 80%;\r\n  border: 0px green solid;\r\n  background-color: whitesmoke;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<html>\r\n\r\n<head>\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\r\n</head>\r\n\r\n<body>\r\n  <div class=\"container-fluid\" style=\"background-color: white; font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif\">\r\n\r\n    <div id=\"header\" class=\"jumbotron\">\r\n      Welcome to Backoffice UI\r\n    </div>\r\n    <div class=\"col-sm-4 col-sm-offset-4\" style=\"text-align: center\">\r\n      <user-directory (itemDirSelected)='clickDirTree($event)'></user-directory>\r\n    </div>\r\n    <div id=\"flex-container\">\r\n      <div class=\"col-sm-4\">\r\n        <app-file-explorer [directorySelected]='chosenDirLoc' (itemSelected)='clickFileTree($event)' class='file-explorer'>Loading..</app-file-explorer>\r\n      </div>\r\n      <div class=\"main-content-container\" class=\"col-sm-8\">\r\n        <div class=\"sub-header\">\r\n          <app-sub-header [fileLoc2]='chosenFileLoc'>Loading..</app-sub-header>\r\n        </div>\r\n        <div class=\"main-content\" class=\"col-sm-8\">\r\n          <app-main-content [fileLoc]='chosenFileLoc'>Loading..</app-main-content>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</body>\r\n\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.clickFileTree = function (fileLoc) {
        this.chosenFileLoc = fileLoc;
    };
    AppComponent.prototype.clickDirTree = function (dirLoc) {
        this.chosenDirLoc = dirLoc;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_devextreme_angular__ = __webpack_require__("./node_modules/devextreme-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_devextreme_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_devextreme_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__file_explorer_file_explorer_component__ = __webpack_require__("./src/app/file-explorer/file-explorer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main_content_main_content_component__ = __webpack_require__("./src/app/main-content/main-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sub_header_sub_header_component__ = __webpack_require__("./src/app/sub-header/sub-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_directory_user_directory_component__ = __webpack_require__("./src/app/user-directory/user-directory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__bmadata_service_bma_data_service__ = __webpack_require__("./src/app/bmadata-service/bma-data-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__file_explorer_file_explorer_service__ = __webpack_require__("./src/app/file-explorer/file-explorer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__file_explorer_file_explorer_component__["a" /* FileExplorerComponent */],
                __WEBPACK_IMPORTED_MODULE_8__main_content_main_content_component__["a" /* MainContentComponent */],
                __WEBPACK_IMPORTED_MODULE_9__sub_header_sub_header_component__["a" /* SubHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__user_directory_user_directory_component__["a" /* UserDirectoryComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_5_devextreme_angular__["DxTreeViewModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__bmadata_service_bma_data_service__["a" /* BmaDataService */], __WEBPACK_IMPORTED_MODULE_12__file_explorer_file_explorer_service__["a" /* FileExplorerService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

Object(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(AppModule);


/***/ }),

/***/ "./src/app/bmadata-service/bma-data-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BmaDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BmaDataService = /** @class */ (function () {
    function BmaDataService(_http) {
        this._http = _http;
        this.restFileUrl = 'http://localhost:8080/filesvc/getFileContent?fileName=';
    }
    BmaDataService.prototype.getData = function (fileLoc) {
        var parameters = [];
        // alert('check');
        return this._http.get(this.restFileUrl + fileLoc)
            .map(function (response) {
            var jsonContent = response.json();
            for (var _i = 0, _a = jsonContent.parameters; _i < _a.length; _i++) {
                var param = _a[_i];
                var bmaParam = {
                    name: param.name,
                    type: param.type,
                    value: param.value
                };
                try {
                    parameters.push(bmaParam);
                }
                catch (e) {
                    console.log('Inside Error ' + e.name + '-' + e.message);
                }
            }
            return parameters;
        })
            .catch(this.handleError);
    };
    BmaDataService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        }
        console.error(errorMessage);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(errorMessage);
    };
    BmaDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], BmaDataService);
    return BmaDataService;
}());



/***/ }),

/***/ "./src/app/file-explorer/file-explorer.component.css":
/***/ (function(module, exports) {

module.exports = " #simple-treeview, #product-details {\r\n    display: inline-block;\r\n}\r\n #product-details {\r\n    vertical-align: top;\r\n    width: 400px;\r\n    height: 420px;\r\n    margin-left: 20px;\r\n}\r\n #product-details > img {\r\n    border: none;\r\n    height: 300px;\r\n    width: 400px;\r\n}\r\n #product-details > .name {\r\n    text-align: center;\r\n    font-size: 20px;\r\n}\r\n #product-details > .price {\r\n    text-align: center;\r\n    font-size: 24px;\r\n}\r\n .dark #product-details > div {\r\n    color: #f0f0f0;\r\n}\r\n .hidden {\r\n    visibility: hidden;\r\n}\r\n"

/***/ }),

/***/ "./src/app/file-explorer/file-explorer.component.html":
/***/ (function(module, exports) {

module.exports = "<dx-tree-view id=\"simple-treeview\" [items]=\"products\" dataStructure=\"plain\" parentIdExpr=\"catagoryId\" keyExpr=\"id\" displayExpr=\"name\"\n    [width]=\"300\" (onItemClick)=\"selectItem($event)\">\n</dx-tree-view>\n"

/***/ }),

/***/ "./src/app/file-explorer/file-explorer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileExplorerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__file_explorer_service__ = __webpack_require__("./src/app/file-explorer/file-explorer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


if (!/localhost/.test(document.location.host)) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
var FileExplorerComponent = /** @class */ (function () {
    function FileExplorerComponent(_service) {
        this._service = _service;
        this.itemSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.products = [{
                "id": "100",
                "name": "Choose a directory in the above text box",
                "expand": false,
                "fullPath": "",
                "catagoryId": null
            }];
    }
    FileExplorerComponent.prototype.ngOnInit = function () { };
    FileExplorerComponent.prototype.ngOnChanges = function () {
        var data = [];
        if (this.directorySelected !== undefined) {
            this._service.getProductsObservable(this.directorySelected)
                .subscribe(function (prds) {
                for (var _i = 0, prds_1 = prds; _i < prds_1.length; _i++) {
                    var prd = prds_1[_i];
                    var treeItem = {
                        id: prd.id,
                        name: prd.name,
                        expand: prd.expand,
                        fullPath: prd.fullPath,
                        catagoryId: prd.catagoryId
                    };
                    try {
                        data.push(treeItem);
                    }
                    catch (e) {
                        console.log('Inside Error ' + e.name + '-' + e.message);
                    }
                }
            });
            this.products = data;
            this.currentItem = this.products[0];
        }
    };
    FileExplorerComponent.prototype.selectItem = function (e) {
        var data = e.itemData;
        this.currentItem = {
            id: data.id,
            name: data.name,
            expand: data.expand,
            fullPath: data.fullPath,
            catagoryId: data.catagoryId
        };
        this.itemSelected.emit(this.currentItem.fullPath);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FileExplorerComponent.prototype, "directorySelected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], FileExplorerComponent.prototype, "itemSelected", void 0);
    FileExplorerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-file-explorer',
            template: __webpack_require__("./src/app/file-explorer/file-explorer.component.html"),
            styles: [__webpack_require__("./src/app/file-explorer/file-explorer.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__file_explorer_service__["a" /* FileExplorerService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__file_explorer_service__["a" /* FileExplorerService */]])
    ], FileExplorerComponent);
    return FileExplorerComponent;
}());



/***/ }),

/***/ "./src/app/file-explorer/file-explorer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileExplorerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FileExplorerService = /** @class */ (function () {
    function FileExplorerService(_http) {
        this._http = _http;
        this._getDirUrl = 'http://localhost:8080/filesvc/getDirStructure?dir=';
    }
    FileExplorerService.prototype.getProductsObservable = function (dirPath) {
        return this._http.get(this._getDirUrl + dirPath)
            .map(function (response) { return response.json(); })
            .catch(this._serverError);
    };
    FileExplorerService.prototype._serverError = function (err) {
        console.log('Sever error:', err);
        if (err instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(err.json().error || 'backend server error');
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(err || 'backend server error');
    };
    FileExplorerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], FileExplorerService);
    return FileExplorerService;
}());



/***/ }),

/***/ "./src/app/main-content/main-content.component.css":
/***/ (function(module, exports) {

module.exports = "table{\r\n\tmargin-top: 10px;\r\n\tmargin-left: 10px;\r\n}\r\n.btn{\r\n\tmargin-top: 10px;\r\n\tmargin-left: 10px;\r\n}\r\ntable{\r\n\twidth:80%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main-content/main-content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <form #backOfficeDataForm=\"ngForm\" (ngSubmit)=\"onFormSubmit(backOfficeDataForm.value)\">\n    <table class=\"table table-striped\">\n      <tr>\n        <th>Parameter</th>\n        <th>Thumbnail</th>\n        <th>Default Value</th>\n        <th>Possible Values</th>\n      </tr>\n      <tr *ngFor=\"let dmaParameter of bmaParameters; let i=index;\">\n        <td name=\"parameter\" id=\"paramName_{{i}}\">{{dmaParameter.name}}\n          <input type=\"hidden\" name=\"dmaparameter_{{i}}\" id=\"dmaparameter_{{i}}\" [ngModel]=\"dmaParameter.name\">\n        </td>\n\n        <td></td>\n        <td>\n          <input type=\"text\" name=\"paramValue_{{i}}\" id=\"paramValue_{{i}}\" [ngModel]=\"dmaParameter.value\" disabled>\n          <input type=\"hidden\" name=\"defaultValue\" id=\"defaultValue\" value=\"{{dmaParameter.value}}\">\n\n        </td>\n        <td>\n          <select name=\"possibleValues\" id=\"possibleValues\" #selectedValue (change)=\"dmaParameter.value=selectedValue.value\">\n            <option selected disabled>values</option>\n            <option *ngFor=\"let possibleValue of possibleValues\" [value]=\"possibleValue.selectableValue\"> {{possibleValue.selectableValue}}</option>\n          </select>\n        </td>\n      </tr>\n    </table>\n      <button class=\"btn btn-primary\" type=\"submit\"> Export</button>\n  </form>\n\n</div>\n\n<!-- <div>\n  {{backOfficeDataForm.value | json}}\n</div> -->\n"

/***/ }),

/***/ "./src/app/main-content/main-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bmadata_service_bma_data_service__ = __webpack_require__("./src/app/bmadata-service/bma-data-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_csv_Angular2_csv__ = __webpack_require__("./node_modules/angular2-csv/Angular2-csv.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_csv_Angular2_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_csv_Angular2_csv__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainContentComponent = /** @class */ (function () {
    function MainContentComponent(_bmaDataService) {
        this._bmaDataService = _bmaDataService;
        this.fileLoc = '';
        this.bmaParameters = [];
        this.possibleValues = [
            { id: 1, selectableValue: 100 },
            { id: 2, selectableValue: 200 },
            { id: 3, selectableValue: 300 },
            { id: 4, selectableValue: 400 },
            { id: 5, selectableValue: 500 }
        ];
        this.data = [];
    }
    MainContentComponent.prototype.ngOnInit = function () { };
    MainContentComponent.prototype.ngOnChanges = function () {
        var _this = this;
        console.log(this.fileLoc);
        if (this.fileLoc !== undefined && this.fileLoc.indexOf('.') >= 0) {
            this._bmaDataService.getData(this.fileLoc)
                .subscribe(function (bmaParams) {
                _this.bmaParameters = bmaParams;
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    MainContentComponent.prototype.onFormSubmit = function (exportableValues) {
        this.exportableValues = exportableValues;
        var keys = [];
        var values = [];
        for (var key in exportableValues) {
            var tempVal = '' + exportableValues[key];
            if (key.startsWith('dmaparameter')) {
                keys.push(tempVal);
            }
            else if (key.startsWith('paramValue')) {
                values.push(tempVal);
            }
        }
        for (var i = 0; i < keys.length; i++) {
            var tempKey = keys[i];
            var tempVal = values[i];
            this.data.push({ parameter: JSON.stringify((_a = {}, _a[tempKey] = tempVal, _a)) });
        }
        new __WEBPACK_IMPORTED_MODULE_2_angular2_csv_Angular2_csv__["Angular2Csv"](this.data, 'My Report');
        var _a;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MainContentComponent.prototype, "fileLoc", void 0);
    MainContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-content',
            template: __webpack_require__("./src/app/main-content/main-content.component.html"),
            styles: [__webpack_require__("./src/app/main-content/main-content.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__bmadata_service_bma_data_service__["a" /* BmaDataService */]])
    ], MainContentComponent);
    return MainContentComponent;
}());



/***/ }),

/***/ "./src/app/sub-header/sub-header.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/sub-header/sub-header.component.html":
/***/ (function(module, exports) {

module.exports = "BMA file chosen<input type = \"text\" class=\"form-control\" value=\"{{fileLoc2}}\" disabled/>\n"

/***/ }),

/***/ "./src/app/sub-header/sub-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubHeaderComponent = /** @class */ (function () {
    function SubHeaderComponent() {
        this.fileLoc2 = 'No File Chosen';
    }
    SubHeaderComponent.prototype.ngOnInit = function () { };
    SubHeaderComponent.prototype.ngOnChanges = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SubHeaderComponent.prototype, "fileLoc2", void 0);
    SubHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sub-header',
            template: __webpack_require__("./src/app/sub-header/sub-header.component.html"),
            styles: [__webpack_require__("./src/app/sub-header/sub-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SubHeaderComponent);
    return SubHeaderComponent;
}());



/***/ }),

/***/ "./src/app/user-directory.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDirectory; });
var UserDirectory = /** @class */ (function () {
    function UserDirectory(path) {
        this.path = path;
    }
    return UserDirectory;
}());



/***/ }),

/***/ "./src/app/user-directory/user-directory.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-directory/user-directory.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form  #directoryForm=\"ngForm\" (ngSubmit)=\"currentDirectory(directoryForm)\">\n    <div class=\"form-group  col-sm-4\">\n        Enter a directory (e.g. C:/data/new)<br/>\n      <!-- <input type=\"file\" class=\"form-control\" id=\"directory\"\n      required [(ngModel)]=\"model.path\" name=\"path\" multiple directory webkitdirectory mozdirectory> -->\n      <input type=\"text\" class=\"form-control\" id=\"directory\"\n      required [(ngModel)]=\"model.path\" name=\"path\" value='C:/data/new'>\n      <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/user-directory/user-directory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDirectoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_directory_model__ = __webpack_require__("./src/app/user-directory.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserDirectoryComponent = /** @class */ (function () {
    function UserDirectoryComponent() {
        this.itemDirSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.model = new __WEBPACK_IMPORTED_MODULE_1__user_directory_model__["a" /* UserDirectory */]('');
    }
    UserDirectoryComponent.prototype.ngOnInit = function () {
    };
    UserDirectoryComponent.prototype.currentDirectory = function (directoryForm) {
        this.dir = directoryForm.value.path.replace(/\\/g, '/');
        this.itemDirSelected.emit(this.dir);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], UserDirectoryComponent.prototype, "itemDirSelected", void 0);
    UserDirectoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-directory',
            template: __webpack_require__("./src/app/user-directory/user-directory.component.html"),
            styles: [__webpack_require__("./src/app/user-directory/user-directory.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], UserDirectoryComponent);
    return UserDirectoryComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map