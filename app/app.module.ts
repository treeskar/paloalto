/**
 * Created by Eyal on 24/04/2017.
 */
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {BrowserModule} from "@angular/platform-browser";
import {CounterComponent} from "./counter.component";
import {TodoListModule} from "./todolist/todolist.module";
import {TabsModule} from "./tabs/tabs.module";
import {HighlightDirective} from "./highlight.directive";
import {MyFormsModule} from "./forms/myForms.module";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {AppContext} from "./app.context.service";
import {SecurityContext} from "./securityContext.service";
import {appRoutes} from "./app.routes";
import {CyberComponent} from "./cyber/cyber.component";
import {TodoListComponent} from "./todolist/todo-list.component";

@NgModule({
    declarations:[
        AppComponent,
        HomeComponent,
        CounterComponent,
        HighlightDirective,
        CyberComponent

    ],
    providers   :[
        AppContext,
        SecurityContext
    ],
    bootstrap   :[
        AppComponent
    ],
    imports     :[
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(appRoutes,{
           useHash : true
        }),

        // my modules
        TodoListModule,
        TabsModule,
        MyFormsModule,
    ],
    exports     :[]
})
export class AppModule{}