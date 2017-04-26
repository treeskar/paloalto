/**
 * Created by Eyal on 26/04/2017.
 */

import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from "@angular/core";
@Directive({
    selector: '[highlight]'
})
export class HighlightDirective{

    bColor:string = 'yellow';



    constructor(
        private elm:ElementRef,
        private renderer:Renderer2){

        renderer.setStyle(
            elm.nativeElement,
            'border',
            '1px solid red'
        );

        //elm.nativeElement.addEventListener('click',()=>{alert('hi')});
    }

    @Input() set highlight(val){
            this.bColor = val;
    }

    @HostBinding('style.backgroundColor')
    color:string;

    @HostListener('mouseenter')
    onMouseEnter(){
        this.color = this.bColor;
    }

    @HostListener('mouseleave')
    onMouseLeave(){
        this.color = null;
    }
}