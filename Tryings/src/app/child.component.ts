/*
import { Component } from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `<h2>Welcome {{name}}!</h2>`,
    styles: [`h2, p {color:red;}`]
})
export class ChildComponent {
    name= "Alex";
}
*/

/*
import { Input, Component} from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `<p>Имя пользователя: {{userName}}</p>
              <p>Возраст пользователя: {{userAge}}</p>`
})
export class ChildComponent{
    @Input() userName: string;
    @Input() userAge: number;
}
*/

/*
import { Input, Component} from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `<p>Имя пользователя: {{userName}}</p>
              <p>Возраст пользователя: {{userAge}}</p>`
})
export class ChildComponent{
    @Input() userName: string;
    _userAge: number;

    @Input()
    set userAge(age:number) {
        if(age<0)
            this._userAge=0;
        else if(age>100)
            this._userAge=100;
        else
            this._userAge = age;
    }
    get userAge() { return this._userAge; }
}
*/

/*
import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `<button (click)="change(true)">+</button>
               <button (click)="change(false)">-</button>`
})
export class ChildComponent{

    @Output() onChanged = new EventEmitter<boolean>();
    change(increased:any) {
        this.onChanged.emit(increased);
    }
}
*/

/*
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `<input [ngModel]="userName" (ngModelChange)="onNameChange($event)" />`
})

export class ChildComponent{

    @Input() userName:string;
    @Output() userNameChange = new EventEmitter<string>();
    onNameChange(model: string){

        this.userName = model;
        this.userNameChange.emit(model);
    }
}
*/

/*
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `<p>Привет {{name}}</p>`
})
export class ChildComponent implements OnInit, OnChanges {
    @Input() name: string;

    constructor(){ this.log(`constructor`); }

    ngOnInit() { this.log(`onInit`); }

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

import { Component,
    Input,
    OnInit,
    DoCheck,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit} from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `<p>Привет {{name}}</p>`
})

export class ChildComponent implements OnInit,
    DoCheck,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit  {
    @Input() name: string;
    count:number=1;

    ngOnInit() {

        this.log(`ngOnInit`);
    }
    ngOnChanges() {

        this.log(`OnChanges`);
    }
    ngDoCheck() {

        this.log(`ngDoCheck`);
    }
    ngAfterViewInit() {

        this.log(`ngAfterViewInit`);
    }
    ngAfterViewChecked() {

        this.log(`ngAfterViewChecked`);
    }
    ngAfterContentInit() {

        this.log(`ngAfterContentInit`);
    }
    ngAfterContentChecked() {

        this.log(`ngAfterContentChecked`);
    }

    private log(msg: string) {
        console.log(this.count + ". " + msg);
        this.count++;
    }
}
