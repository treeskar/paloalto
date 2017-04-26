/**
 * Created by Eyal on 24/04/2017.
 */
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {CounterComponent} from "./counter.component";
import {TodoListModule} from "./todolist/todolist.module";

@NgModule({
    declarations:[
        AppComponent,
        CounterComponent
    ],
    providers   :[],
    bootstrap   :[
        AppComponent
    ],
    imports     :[
        BrowserModule,
        TodoListModule
    ],
    exports     :[]
})
export class AppModule{}