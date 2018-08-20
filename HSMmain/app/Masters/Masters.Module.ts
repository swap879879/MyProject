import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { CommonModule } from "@angular/common"
import { MasterComponent } from "./Masters.Component"
import { MasterRouting } from "./Masters.Routing"
import { TestComponent} from "./Test/Test.Component"

@NgModule({
    imports: [FormsModule, CommonModule],
    declarations: [MasterComponent, TestComponent],
    bootstrap: [MasterComponent],
})

export class MasterModule { }