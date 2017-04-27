/**
 * Created by Eyal on 27/04/2017.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {UsersProxy} from "./users.proxy.service";
import {UsersComponent} from "./users.component";
import {UserComponent} from "./user.component";
import {UserBl} from "./users.bl.service";

@NgModule({
    declarations:[
        UsersComponent,
        UserComponent
    ],
    providers   :[
        UsersProxy,
        UserBl
        //{provide:UsersProxy, useClass:UsersProxy}
    ],
    bootstrap   :[],
    imports     :[
        CommonModule
    ],
    exports     :[
        UsersComponent
    ]
})
export class UsersModule{}