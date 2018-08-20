import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core/src/metadata/ng_module";
import { MasterComponent  } from "./Masters.Component"
import { TestComponent } from "./Test/Test.Component"

const MasterRoutes: Routes = [
    { path: 'test', component: TestComponent }   

];

@NgModule({
    imports: [RouterModule.forChild(MasterRoutes)],
    exports: [RouterModule]
})
    

export class MasterRouting { }