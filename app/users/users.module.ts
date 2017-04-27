/**
 * Created by Eyal on 27/04/2017.
 */
import {ModuleWithProviders, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {UsersProxy} from "./users.proxy.service";
import {UsersComponent} from "./users.component";
import {UserComponent} from "./user.component";
import {UserBl} from "./users.bl.service";
import {UserProxyConfig} from "./UserProxyConfig.model";
import {RouterModule} from "@angular/router";
import {AppContext} from "../app.context.service";
import {UserDetailsComponent} from "./userDetails.component";

@NgModule({
    declarations:[
        UsersComponent,
        UserComponent,
        UserDetailsComponent
    ],
    providers   :[
        UsersProxy,
        UserBl,
        UserProxyConfig
        //{provide:UsersProxy, useClass:UsersProxy}
    ],
    bootstrap   :[],
    imports     :[
        CommonModule,
        RouterModule.forChild([
            { path: '' , component: UsersComponent},
            { path: ':name', component:UserDetailsComponent}
        ])
    ],
    exports     :[
        UsersComponent
    ]
})
export class UsersModule{

    constructor(
        private appContext:AppContext,
        private userBl:UserBl
    ){
        appContext.userBl = userBl;
    }


    static forRoot(config?:UserProxyConfig) : ModuleWithProviders {
        config = config || {url:new UserProxyConfig().url,apiKey:''};
        return {
            ngModule: UsersModule,
            providers:[
                UsersProxy,
                UserBl,
                { provide: UserProxyConfig, useValue:config}
            ]
        }
    }
}