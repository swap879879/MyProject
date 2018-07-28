import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core/src/metadata/ng_module";

import { TestingClass } from "./Masters/Component/TestingPage"
import { AppComponent } from "./app.component"

export const AppRoutes: Routes = [
    { path: '*', component: TestingClass },
    { path: 'Test', component: TestingClass },
    { path: '**', component: TestingClass },
]
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);