/**
 * Created by Eyal on 24/04/2017.
 */
import {Component, VERSION} from "@angular/core";

@Component({
  selector: 'my-app',
  styles : [`
    .box{
        
    }
  `],
  template: `
    <div (click)="log($event)">       
        <h1 [highlight]="color" >Hello world ${VERSION.full}</h1>
        <button (click)="color='green'">green</button>
        {{name}}
        <div (click)="name = name + '!'" [innerHtml]="'<h1>EEEE</h1>'+name"></div>
       
        
        <tabs>
            <h4>tabs...</h4>
            <tab title="users">
                <users [num]="10"></users>
            </tab>
            <tab title="counter">
                <counter [init]="100" [step]="3" (onValueChange)="name = name + $event"></counter>
            </tab>
            <tab title="todo list">
                <todo-list></todo-list>
            </tab>
            <tab title="mdd forms">
                <mdd></mdd>
            </tab>
        </tabs>
        
    </div>
`})
export class AppComponent {
    name:string = 'eyal vardi';

    _color:string = 'blue';
    /*@Input()*/
    set color(value){ this._color = value; }
    get color(){
        return this._color;
    }



    log($event){
        console.log(`event: ${JSON.stringify(event)}`);
    }
}