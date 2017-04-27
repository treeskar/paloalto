/**
 * Created by Eyal on 27/04/2017.
 */

import {Injectable} from "@angular/core";
import {UsersProxy} from "./users.proxy.service";
@Injectable()
export class UserBl{
    users:any[] = [];

    constructor(private proxy:UsersProxy){}

    load(num){
        this.proxy.load(num).subscribe(
            users=>{
                this.users = users;
            }
        )
    }
}