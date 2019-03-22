/*
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent { }
*/

/*
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<p>Name: {{name}}</p>
                <p>Age: {{age}}</p>`
})
export class AppComponent {
    name = "Tom";
    age = 25;
}
*/

/*
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<input type="text" [value]="name" />`
})
export class AppComponent {
    name = "Tom";
}
*/

/*
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<p>Number {{count}}</p>
                <button (click)="increase()">Click</button>`
})
export class AppComponent {
    count: number=0;
    increase() : void {
        this.count++;
    }
}
*/

/*
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<p>Hi {{name}}</p>
                <input type="text" [(ngModel)]="name" /> <br><br>
                <input type="text" [(ngModel)]="name" />`
})

export class AppComponent {
    name:string="Tom";
}
*/

/*
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<child-comp></child-comp>
                <p>Hi {{name}}</p>`,
    styles: [`h2, p {color:#333;}`]
})

export class AppComponent {
    name = 'Peter';
}
*/

/*
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<child-comp [userName]="name" [userAge]="age"></child-comp>
                <input type="text" [(ngModel)]="name" />`
})
export class AppComponent {
    name:string="Tom";
    age:number = 24;
}
*/

/*
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<child-comp [userName]="name" [userAge]="age"></child-comp>
                <input type="number" [(ngModel)]="age" />`
})
export class AppComponent {
    name:string="Tom";
    age:number = 24;
}
*/

/*
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h2>Количество кликов: {{clicks}}</h2>
              <child-comp (onChanged)="onChanged($event)"></child-comp>`
})
export class AppComponent {

    clicks:number = 0;
    onChanged(increased:any){
        increased==true?this.clicks++:this.clicks--;
    }
}
*/

/*
import { Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<child-comp [(userName)]="name"></child-comp>
                <div>Выбранное имя: {{name}}</div>`
})
export class AppComponent {

    name: string = "Tom";
}
*/

/*
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<p>Hello Angular 2</p>`
})
export class AppComponent implements OnInit, OnDestroy {
    name:string="Tom";

    constructor(){ this.log(`constructor`); }
    ngOnInit() { this.log(`onInit`); }
    ngOnDestroy() { this.log(`onDestroy`); }

    private log(msg: string) {
        console.log(msg);
    }
}
*/

/*
import { Component, OnChanges, SimpleChanges} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<child-comp [name]="name"></child-comp>
                <input type="text" [(ngModel)]="name" />
                <input type="number" [(ngModel)]="age" />`
})
export class AppComponent implements OnChanges {
    name:string="Tom";
    age:number = 25;
    ngOnChanges(changes: SimpleChanges) {
        for (let propName in changes) {
            let chng = changes[propName];
            let cur  = JSON.stringify(chng.currentValue);
            let prev = JSON.stringify(chng.previousValue);
            this.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        }
    }

    private log(msg: string) {
        console.log(msg);
    }
}
*/

/*
import { Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<child-comp [name]="name"></child-comp>
                <input type="text" [(ngModel)]="name" />`
})
export class AppComponent{
    name:string="Tom";
}
*/

/*
import { Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div [style.fontSize]="'13px'" [style.fontFamily]="'Verdana'">
        <h1>Hello Angular 5</h1>
        <p [style.fontSize]="'14px'" [style.fontFamily]="'Segoe Print'">
            Angular 5 представляет модульную архитектуру приложения
        </p>
    </div>`,
    styles: [
        `.verdanaFont{font-size:13px; font-family:Verdana;}
        .segoePrintFont{font-size:14px; font-family:"Segoe Print";}`
    ]
})
export class AppComponent { }
*/

/*
import { Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div>
                  <p bold>Hello Angular 2</p>
                  <p>Angular 2 представляет модульную архитектуру приложения</p>
               </div>`
})
export class AppComponent {}
*/

/*
import { Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div>
                  <p bold [selectedSize]="'28px'" [defaultSize]="'14px'">Hello Angular 2</p>
                  <p>Angular 2 представляет модульную архитектуру приложения</p>
               </div>`
})
export class AppComponent {}
*/

/*
import { Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<p *ngIf="condition">
                  Привет мир
                </p>
                <p *ngIf="!condition">
                  Пока мир
                </p>
                <button (click)="toggle()">Toggle</button>`
})
export class AppComponent {

    condition: boolean=true;

    toggle(){
        this.condition=!this.condition;
    }
}
*/

/*
import { Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<ul>
                  <li *ngFor="let item of items">{{item}}</li>
                </ul>`
})
export class AppComponent {

    items =["Apple iPhone 7", "Huawei Mate 9", "Samsung Galaxy S7", "Motorola Moto Z"];
}
*/

/*
import { Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div [ngSwitch]="count">
                  <ng-template *ngSwitchCase="1">{{count * 10}}</ng-template>
                  <ng-template *ngSwitchCase="2">{{count * 100}}</ng-template>
                  <ng-template ngSwitchDefault>{{count * 1000}}</ng-template>
                </div>`
})
export class AppComponent {

    count: number = 5;
}
*/

import { Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template:`<p *while="condition">
      Первый параграф
    </p>
    <p *while="!condition">
      Второй параграф
    </p>
    <button (click)="toggle()">Toggle</button>`
})
export class AppComponent {

    condition: boolean=true;
    toggle(){
        this.condition=!this.condition;
    }
}






























