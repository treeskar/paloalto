import {HomeComponent} from "./home.component";
import {SecurityContext} from "./securityContext.service";
import {Route} from "@angular/router";
import {CyberComponent} from "./cyber/cyber.component";

export const appRoutes : Route[] = [
    { path: 'cyber' , component: CyberComponent},
    { path: 'home'  , component: HomeComponent},
    { path:  'users',
        canLoad:[SecurityContext],
        canDeactivate:[SecurityContext],
        canActivate:[SecurityContext],
        resolve:{users:SecurityContext},
        data:{preload:true},
        loadChildren: async ()=> {
            let usersModuleJS = await SystemJS.import('./dist/users/users.module');
            return usersModuleJS.UsersModule;
        } },
    { path: '**' , redirectTo: 'home'}
];