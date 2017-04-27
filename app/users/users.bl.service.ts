/**
 * Created by Eyal on 27/04/2017.
 */

import {Injectable} from "@angular/core";
import {UsersProxy} from "./users.proxy.service";

@Injectable()
export class UserBl{
    users:any[] = [];

    constructor(private proxy:UsersProxy){}

    async load(num){
        try{
            this.users = await this.proxy.load(num);

        }catch(ex){
            console.log(`ex: ${ex}`);
        }



        /*.subscribe(
            users=>{
                this.users = users;
            }
        )*/
    }
}