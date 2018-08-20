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
var common_1 = require("@angular/common");
var Masters_Component_1 = require("./Masters.Component");
var Test_Component_1 = require("./Test/Test.Component");
var MasterModule = /** @class */ (function () {
    function MasterModule() {
    }
    MasterModule = __decorate([
        core_1.NgModule({
            imports: [forms_1.FormsModule, common_1.CommonModule],
            declarations: [Masters_Component_1.MasterComponent, Test_Component_1.TestComponent],
            bootstrap: [Masters_Component_1.MasterComponent],
        })
    ], MasterModule);
    return MasterModule;
}());
exports.MasterModule = MasterModule;
//# sourceMappingURL=Masters.Module.js.map