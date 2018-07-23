import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
    template: `<h1>Hello {{name}}</h1> 

<mat-checkbox>Test</mat-checkbox>`,
})
export class AppComponent  { name = 'Angular'; }
 