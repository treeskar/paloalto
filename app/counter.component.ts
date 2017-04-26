/**
 * Created by Eyal on 26/04/2017.
 */
import {Component} from "@angular/core";

@Component({
  selector: 'counter', 
  styles : [],
  template: `
<div>
  <button (click)="up()">+</button>
  <span>{{value}}</span>
  <button (click)="down()">-</button>  
</div>
`})
export class CounterComponent {
    value:number = 10;

    up(){
        this.value++;
    }
    down(){
        this.value--;
    }
}