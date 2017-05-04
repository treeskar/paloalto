/**
 * Created by Eyal on 04/05/2017.
 */
import {Component} from "@angular/core";
import {AppContext} from "../app.context.service";

@Component({

  styles : [],
  template: `
<div>
  <h1>Base Cyber Demo</h1>
    <ng-container *ngComponentOutlet="e1"></ng-container>
    <hr>
    <ng-container *ngComponentOutlet="e2"></ng-container>
    <hr>
    <pre>
        {{ e1 }}
    </pre>
</div>
`})
export abstract class BaseCyberComponent{
    e1:any;
    e2:any;

    constructor(private context:AppContext){
        debugger;
    }

    abstract init();

    ngOnInit(){
        this.init();
    }

}