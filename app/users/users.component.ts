/**
 * Created by Eyal on 27/04/2017.
 */
import {Component, Input, OnInit} from "@angular/core";
import {UsersProxy} from "./users.proxy.service";
import {UserBl} from "./users.bl.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'users',
  providers:[],
  styles : [],
  template: `
<div>
  <h3>Users {{users?.length}}</h3>  
  <user   [source]="user"
          *ngFor="let user of users">      
  </user>
</div>
`})
export class UsersComponent{

    get users(){
        return this.userBl.users;
    }

    @Input()set num(val){
        this.userBl.load(val);
    };

    constructor(private userBl:UserBl, private route:ActivatedRoute){

        //this.load(this.num);
       // this.users = userBl.users;
    }
    ngOnInit(){
        this.userBl.load(10);
    }


    /*load(num=5){
        this.proxy.load(num).subscribe(
            users=>{
                this.users = users;
            }
        )
    }*/
}