/**
 * Created by Eyal on 27/04/2017.
 */


import {Injectable} from "@angular/core";
import {
    ActivatedRouteSnapshot, CanActivate, CanDeactivate, CanLoad, Resolve, Route,
    RouterStateSnapshot
} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {UsersProxy} from "./users/users.proxy.service";

@Injectable()
export class SecurityContext implements CanLoad, CanDeactivate<any>,CanActivate,Resolve<any>{

   /* constructor(private userProxy:UsersProxy){}*/

    canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot) {
        console.log(`canDeactivate`);
        if(!component.routerCanDeactivate) return true;
        return component.routerCanDeactivate();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log(`canActivate`);
        return true;
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log(`resolve`);
        return {
            users:[]
        };
    }

    canLoad(route: Route){
        console.log(`route: ${route.path}`);
          return new Promise(resolve=>{
              setTimeout(resolve,2000,true);
          })
    }
}