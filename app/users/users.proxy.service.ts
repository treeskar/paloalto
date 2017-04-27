import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

/*export interface User{
    name:{ first:string,last:string},
    picture:{}
}*/


@Injectable()
export class UsersProxy{
    constructor(private http:Http){}

    load(num=1){
        return this.http
            .get(`https://randomuser.me/api/?results=${num}`)
            .map( resp => resp.json())
            .map( (json:any) => json.results as any[] )
    }
}