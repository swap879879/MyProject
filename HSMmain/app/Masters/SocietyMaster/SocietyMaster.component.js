"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SocietyMaster_Service_1 = require("./SocietyMaster.Service");
var SocietyMasterComponent = /** @class */ (function () {
    function SocietyMasterComponent(SocietyMasterService) {
        this.SocietyMasterService = SocietyMasterService;
        this.Variable = "This";
    }
    SocietyMasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.SocietyMasterService.GetTestData().subscribe(function (result) {
            console.log(result);
            if (result != undefined) {
                _this.Variable = result;
                alert(_this.Variable);
            }
        });
        console.log(this.Variable);
    };
    SocietyMasterComponent = __decorate([
        core_1.Component({
            providers: [SocietyMaster_Service_1.SocietyMasterService],
            selector: 'Society-Master',
            templateUrl: "app/Masters/SocietyMaster/SocietyMaster.html"
        }),
        __metadata("design:paramtypes", [SocietyMaster_Service_1.SocietyMasterService])
    ], SocietyMasterComponent);
    return SocietyMasterComponent;
}());
exports.SocietyMasterComponent = SocietyMasterComponent;
//# sourceMappingURL=SocietyMaster.component.js.map