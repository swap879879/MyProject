import {NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core/src/metadata/ng_module";
import { AppComponent } from "./app.component";
import { MasterComponent } from './Masters/Masters.Component'


const AppRoutes: Routes = [    
    { path: 'Masters', component: MasterComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes, { useHash : true })],
    exports: [RouterModule]
})

export class appRouting {}

//export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes, { useHash: true });