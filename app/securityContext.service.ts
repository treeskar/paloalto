/**
 * Created by Eyal on 27/04/2017.
 */


import {Injectable} from "@angular/core";
import {CanLoad, Route} from "@angular/router";
import {Observable} from "rxjs/Observable";
@Injectable()
export class SecurityContext implements CanLoad{

    canLoad(route: Route){
        console.log(`route: ${route.path}`);
          return new Promise(resolve=>{
              setTimeout(resolve,2000,true);
          })
    }
}