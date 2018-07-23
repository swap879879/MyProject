import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Form } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material';

import { AppComponent }  from './app.component';

@NgModule({
    imports: [BrowserModule, BrowserAnimationsModule, NoopAnimationsModule, MatCheckboxModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
