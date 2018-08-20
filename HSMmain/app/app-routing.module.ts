import {NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core/src/metadata/ng_module";

import { AppComponent } from "./app.component";

const AppRoutes: Routes = [
    { path: 'demo', component: AppComponent },
    { path: 'masters', loadChildren: "./Masters/Masters.Module#MastersModule" }

];

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes, { useHash: true })],
    exports: [RouterModule]
})

export class appRouting {}

//export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes, { useHash: true });