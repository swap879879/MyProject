"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var common_1 = require("@angular/common");
var Masters_Routing_1 = require("./Masters.Routing");
var material_1 = require("@angular/material");
var SocietyMaster_component_1 = require("./SocietyMaster/SocietyMaster.component");
var SocietyMaster_Service_1 = require("./SocietyMaster/SocietyMaster.Service");
var MasterModule = /** @class */ (function () {
    function MasterModule() {
    }
    MasterModule = __decorate([
        core_1.NgModule({
            imports: [animations_1.BrowserAnimationsModule, animations_1.NoopAnimationsModule, forms_1.FormsModule, common_1.CommonModule, Masters_Routing_1.MasterRouting, material_1.MatAutocompleteModule, forms_1.FormsModule,
                material_1.MatButtonModule,
                material_1.MatButtonToggleModule,
                material_1.MatCardModule,
                material_1.MatCheckboxModule,
                material_1.MatChipsModule,
                material_1.MatDatepickerModule,
                material_1.MatDialogModule,
                material_1.MatDividerModule,
                material_1.MatExpansionModule,
                material_1.MatGridListModule,
                material_1.MatIconModule,
                material_1.MatInputModule,
                material_1.MatListModule,
                material_1.MatMenuModule,
                material_1.MatNativeDateModule,
                material_1.MatPaginatorModule,
                material_1.MatProgressBarModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatRadioModule,
                material_1.MatRippleModule,
                material_1.MatSelectModule,
                material_1.MatSidenavModule,
                material_1.MatSliderModule,
                material_1.MatSlideToggleModule,
                material_1.MatSnackBarModule,
                material_1.MatSortModule,
                material_1.MatStepperModule,
                material_1.MatTableModule,
                material_1.MatTabsModule,
                material_1.MatToolbarModule,
                material_1.MatTooltipModule],
            declarations: [SocietyMaster_component_1.SocietyMasterComponent],
            providers: [SocietyMaster_Service_1.SocietyMasterService]
        })
    ], MasterModule);
    return MasterModule;
}());
exports.MasterModule = MasterModule;
//# sourceMappingURL=Masters.Module.js.map