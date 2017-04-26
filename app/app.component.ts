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
    <div>       
        <h1>Hello world ${VERSION.full}</h1>
        {{name}}
        <div (click)="name = name + '!'" [innerHtml]="'<h1>EEEE</h1>'+name"></div>
       
        
        <tabs>
            <h4>tabs...</h4>
            <tab title="counter">
                <counter [init]="100" [step]="3" (onValueChange)="name = name + $event"></counter>
            </tab>
            <tab title="todo list">
                <todo-list></todo-list>
            </tab>
        </tabs>
        
    </div>
`})
export class AppComponent {
    name:string = 'eyal vardi';
}