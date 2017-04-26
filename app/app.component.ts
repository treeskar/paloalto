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
        <counter></counter>
    </div>
`})
export class AppComponent {
    name:string = 'eyal vardi';
}