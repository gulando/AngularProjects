import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<label>Your Name:</label>
                 <input [(ngModel)]="name" placeholder="name">
                 <h2>Welcome {{name}}!</h2>`
})
export class AppComponent {
    name= '';
}
