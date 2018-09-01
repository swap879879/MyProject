"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var Masters_Component_1 = require("./Masters/Masters.Component");
//import {
//    MatAutocompleteModule, 
//    MatButtonModule,
//    MatButtonToggleModule,
//    MatCardModule,
//    MatCheckboxModule,
//    MatChipsModule,
//    MatDatepickerModule,
//    MatDialogModule,
//    MatDividerModule,
//    MatExpansionModule,
//    MatGridListModule,
//    MatIconModule,
//    MatInputModule,
//    MatListModule,
//    MatMenuModule,
//    MatNativeDateModule,
//    MatPaginatorModule,
//    MatProgressBarModule,
//    MatProgressSpinnerModule,
//    MatRadioModule,
//    MatRippleModule,
//    MatSelectModule,
//    MatSidenavModule,
//    MatSliderModule,
//    MatSlideToggleModule,
//    MatSnackBarModule,
//    MatSortModule,
//    MatStepperModule,
//    MatTableModule,
//    MatTabsModule,
//    MatToolbarModule,
//    MatTooltipModule } from '@angular/material';
var common_1 = require("@angular/common");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var Masters_Module_1 = require("./Masters/Masters.Module");
require("../node_modules/hammerjs/hammer.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [Masters_Module_1.MasterModule, app_routing_module_1.appRouting, platform_browser_1.BrowserModule, animations_1.BrowserAnimationsModule, animations_1.NoopAnimationsModule, forms_1.FormsModule, http_1.HttpModule,
            ],
            declarations: [app_component_1.AppComponent, Masters_Component_1.MasterComponent],
            exports: [Masters_Component_1.MasterComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map