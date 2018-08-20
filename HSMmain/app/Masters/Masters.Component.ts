import { Component } from '@angular/core';

@Component({
    selector: 'test-app',
    template: `
  <div>
      <ul>
         <li><a [routerLink]="['/test']">Test</a></li>
     </ul>
    <router-outlet></router-outlet>
  </div>`
})

export class MasterComponent{ }