import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core/src/metadata/ng_module";
import { MasterComponent } from "./Masters.Component";
import { SocietyMasterComponent } from "./SocietyMaster/SocietyMaster.component"

const MasterRoutes: Routes = [
    { path: 'SocietyMaster', component: SocietyMasterComponent }   

];

@NgModule({
    imports: [RouterModule.forChild(MasterRoutes)],
    exports: [RouterModule]
})
    

export class MasterRouting { }