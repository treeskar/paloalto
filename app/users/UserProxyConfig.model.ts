import {Injectable} from "@angular/core";
/**
 * Created by Eyal on 27/04/2017.
 */

@Injectable()
export class UserProxyConfig{
    url:string = `https://randomuser.me/api/`;
    apiKey:string = '12334';
}