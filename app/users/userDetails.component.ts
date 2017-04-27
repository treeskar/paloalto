/**
 * Created by Eyal on 27/04/2017.
 */
import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'userDetails',
  styles : [],
  template: `
<div>
  name: {{name}}
</div>
`})
export class UserDetailsComponent {
    name:string;
    sub:Subscription;

    constructor(private route:ActivatedRoute){
       /*this.name = route.snapshot.params.name;*/
       this.sub = route.params
           .do(params=> console.log(JSON.stringify(params)))
           .subscribe(params=>{
           this.name = params.name;
       })
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }
}