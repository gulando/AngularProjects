/*
import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[bold]'
})
export class BoldDirective{

    constructor(private elementRef: ElementRef){

        this.elementRef.nativeElement.style.fontWeight = "bold";
    }
}
*/

/*
import {Directive, ElementRef, Renderer2, HostListener} from '@angular/core';

@Directive({
    selector: '[bold]'
})
export class BoldDirective{

    constructor(private element: ElementRef, private renderer: Renderer2){

        this.renderer.setStyle(this.element.nativeElement, "cursor", "pointer");
    }

    @HostListener("mouseenter") onMouseEnter() {
        this.setFontWeight("bold");
    }

    @HostListener("mouseleave") onMouseLeave() {
        this.setFontWeight("normal");
    }

    private setFontWeight(val: string) {
        this.renderer.setStyle(this.element.nativeElement, "font-weight", val);
    }
}
*/

/*
import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
    selector: '[bold]'
})
export class BoldDirective{

    private fontWeight = "normal";

    @HostBinding("style.fontWeight") get getFontWeight(){

        return this.fontWeight;
    }

    @HostBinding("style.cursor") get getCursor(){
        return "pointer";
    }

    @HostListener("mouseenter") onMouseEnter() {
        this.fontWeight ="bold";
    }

    @HostListener("mouseleave") onMouseLeave() {
        this.fontWeight = "normal";
    }
}
*/

/*
import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
    selector: '[bold]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class BoldDirective{

    constructor(private element: ElementRef, private renderer: Renderer2){

        this.renderer.setStyle(this.element.nativeElement, "cursor", "pointer");
    }

    onMouseEnter(){
        this.setFontWeight("bold");
    }
    onMouseLeave(){
        this.setFontWeight("normal");
    }
    private setFontWeight(val: string) {
        this.renderer.setStyle(this.element.nativeElement, "font-weight", val);
    }
}
*/

import {Directive, HostListener, Input, HostBinding, OnInit} from '@angular/core';

@Directive({
    selector: '[bold]'
})
export class BoldDirective implements OnInit{

    @Input() selectedSize = "18px";
    @Input() defaultSize = "16px";

    private fontSize : string;
    private fontWeight = "normal";
    ngOnInit(){
        this.fontSize = this.defaultSize;
    }
    constructor(){}

    @HostBinding("style.fontSize") get getFontSize(){

        return this.fontSize;
    }

    @HostBinding("style.fontWeight") get getFontWeight(){

        return this.fontWeight;
    }

    @HostBinding("style.cursor") get getCursor(){
        return "pointer";
    }

    @HostListener("mouseenter") onMouseEnter() {
        this.fontWeight ="bold";
        this.fontSize = this.selectedSize;
    }

    @HostListener("mouseleave") onMouseLeave() {
        this.fontWeight = "normal";
        this.fontSize = this.defaultSize;
    }
}
