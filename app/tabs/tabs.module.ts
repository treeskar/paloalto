/**
 * Created by Eyal on 26/04/2017.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TabsComponent} from "./tabs.component";
import {TabComponent} from "./tab.component";

@NgModule({
    declarations:[
        TabsComponent,
        TabComponent
    ],
    providers   :[],
    bootstrap   :[],
    imports     :[
        CommonModule
    ],
    exports     :[
        TabsComponent,
        TabComponent
    ]
})
export class TabsModule{}