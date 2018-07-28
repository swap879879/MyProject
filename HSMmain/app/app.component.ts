import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
    template: `<h1>Hello {{name}}</h1> 

<mat-checkbox>Test</mat-checkbox>

<h2>
    Welcome to Home Page
</h2>
 
//<nav>
//      <a routerLink="/demo" routerLinkActive="active">Go to Calc</a>
//</nav>

<mat-form-field>
                <input matInput placeholder="Test" />
            </mat-form-field>
           
        <mat-checkbox>Check me!</mat-checkbox>

`,
})
export class AppComponent  { name = 'Angular'; }
  