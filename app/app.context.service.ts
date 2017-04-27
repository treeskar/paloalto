import {Injectable} from "@angular/core";
import {UserBl} from "./users/users.bl.service";

@Injectable()
export class AppContext{

    get usersCount(){
        if(!this.userBl) return 0;
        return this.userBl.users.length;
    }

    userBl:UserBl;
}