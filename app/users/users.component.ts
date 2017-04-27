/**
 * Created by Eyal on 27/04/2017.
 */
import {Component, Input, OnInit} from "@angular/core";
import {UsersProxy} from "./users.proxy.service";
import {UserBl} from "./users.bl.service";

@Component({
  selector: 'users',
  styles : [],
  template: `
<div>
  <h3>Users {{users?.length}}</h3>  
  <user   [source]="user"
          *ngFor="let user of users"></user>
</div>
`})
export class UsersComponent{

    get users(){
        return this.userBl.users;
    }

    @Input()set num(val){
        this.userBl.load(val);
    };

    constructor(private userBl:UserBl){
        //this.load(this.num);
       // this.users = userBl.users;
    }
    /*ngOnInit(){
        this.load(this.num);
    }*/


    /*load(num=5){
        this.proxy.load(num).subscribe(
            users=>{
                this.users = users;
            }
        )
    }*/
}