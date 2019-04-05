import { Component, OnInit} from '@angular/core';
import {DataService} from './data.service';
import {Phone} from './phone';

@Component({
    selector: 'data-comp',
    template: `<div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <input class="form-control" [(ngModel)]="name" placeholder = "Модель" />
                <input type="number" class="form-control" [(ngModel)]="price" placeholder="Цена" />
                <button class="btn btn-default" (click)="addItem(name, price)">Добавить</button>
            </div>
        </div>
        <table class="table table-striped">
                    <tr *ngFor="let item of items"></tr>
                        <td>{{item.name}}</td>
        </table>
    </div>`
})
export class DataComponent implements OnInit {

    items: Phone[] = [];
    constructor(private dataService: DataService){}

    addItem(name: string, price: number){

        this.dataService.addData(name, price);
    }
    ngOnInit(){
        this.items = this.dataService.getData();
    }
}
