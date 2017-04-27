import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {UserProxyConfig} from "./UserProxyConfig.model";

/*export interface User{
    name:{ first:string,last:string},
    picture:{}
}*/


@Injectable()
export class UsersProxy{
    constructor(private http:Http,private config:UserProxyConfig){}

    load(num=1): Promise<any[]> | any[] {
        return this.http
            .get(`${this.config.url}?results=${num}`)
            .map( resp => resp.json())
            .map( (json:any) => json.results as any[] )
            .toPromise();
    }
}