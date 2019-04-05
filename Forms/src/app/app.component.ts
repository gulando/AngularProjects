/*import { Component}     from '@angular/core';
import { NgModel}       from '@angular/forms';

export class Phone{
    constructor(public title: string,
                public price: number,
                public company: string)
    { }
}

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    phone: Phone = new Phone("", 0, "Samsung");
    companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];

    addPhone(title: NgModel, price: NgModel, comp: NgModel) {
        console.log(title);
        console.log(price);
        console.log(comp);
    }
}
*/

/*
import { Component} from '@angular/core';

export class User{
    name: string;
    email: string;
    phone: string;
}

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    user: User = new User();
    addUser(){
        console.log(this.user);
    }
}
*/

import { Component}     from '@angular/core';
import { NgForm}        from '@angular/forms';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    submit(form: NgForm) {
        console.log(form);
    }
}


