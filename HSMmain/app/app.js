"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var TestingPage_1 = require("./Masters/Component/TestingPage");
exports.AppRoutes = [
    { path: '*', component: TestingPage_1.TestingClass },
    { path: 'Test', component: TestingPage_1.TestingClass },
    { path: '**', component: TestingPage_1.TestingClass },
];
exports.ROUTING = router_1.RouterModule.forRoot(exports.AppRoutes);
//# sourceMappingURL=app.js.map