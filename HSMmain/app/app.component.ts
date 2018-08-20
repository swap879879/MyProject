import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
    template: `
  <div>
      <ul>
         <li><a [routerLink]="['/demo']">contact</a></li>
         <li><a [routerLink]="['/masters']">masters</a></li>
     </ul>
    <router-outlet></router-outlet>
  </div>`
})
export class AppComponent  { name = 'Angular'; }
  