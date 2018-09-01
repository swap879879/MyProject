import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Form, FormsModule } from '@angular/forms';
import { MasterComponent } from "./Masters/Masters.Component"
//import {
//    MatAutocompleteModule, 
//    MatButtonModule,
//    MatButtonToggleModule,
//    MatCardModule,
//    MatCheckboxModule,
//    MatChipsModule,
//    MatDatepickerModule,
//    MatDialogModule,
//    MatDividerModule,
//    MatExpansionModule,
//    MatGridListModule,
//    MatIconModule,
//    MatInputModule,
//    MatListModule,
//    MatMenuModule,
//    MatNativeDateModule,
//    MatPaginatorModule,
//    MatProgressBarModule,
//    MatProgressSpinnerModule,
//    MatRadioModule,
//    MatRippleModule,
//    MatSelectModule,
//    MatSidenavModule,
//    MatSliderModule,
//    MatSlideToggleModule,
//    MatSnackBarModule,
//    MatSortModule,
//    MatStepperModule,
//    MatTableModule,
//    MatTabsModule,
//    MatToolbarModule,
//    MatTooltipModule } from '@angular/material';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'
import { appRouting } from './app-routing.module'
import { MasterModule } from './Masters/Masters.Module'
import '../node_modules/hammerjs/hammer.js'


@NgModule({
    imports: [MasterModule, appRouting, BrowserModule, BrowserAnimationsModule, NoopAnimationsModule, FormsModule, 
    //imports: [MasterModule,appRouting,BrowserModule, BrowserAnimationsModule, NoopAnimationsModule, MatAutocompleteModule, FormsModule, 
    //    MatButtonModule,
    //    MatButtonToggleModule,
    //    MatCardModule,
    //    MatCheckboxModule,
    //    MatChipsModule,
    //    MatDatepickerModule,
    //    MatDialogModule,
    //    MatDividerModule,
    //    MatExpansionModule,
    //    MatGridListModule,
    //    MatIconModule,
    //    MatInputModule,
    //    MatListModule,
    //    MatMenuModule,
    //    MatNativeDateModule,
    //    MatPaginatorModule,
    //    MatProgressBarModule,
    //    MatProgressSpinnerModule,
    //    MatRadioModule,
    //    MatRippleModule,
    //    MatSelectModule,
    //    MatSidenavModule,
    //    MatSliderModule,
    //    MatSlideToggleModule,
    //    MatSnackBarModule,
    //    MatSortModule,
    //    MatStepperModule,
    //    MatTableModule,
    //    MatTabsModule,
    //    MatToolbarModule,
    //    MatTooltipModule
    ],
    declarations: [AppComponent, MasterComponent],
    exports: [MasterComponent],
    bootstrap: [AppComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppModule { }
