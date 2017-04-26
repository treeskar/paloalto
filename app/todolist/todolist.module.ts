/**
 * Created by Eyal on 26/04/2017.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TodoListService} from "./todo-list.service";
import {TodoListComponent} from "./todo-list.component";
import {TaskComponent} from "./todo-task.component";
import {ValuesPipe} from "../custom.pipe";

@NgModule({
    declarations:[
        TodoListComponent,
        TaskComponent,
        ValuesPipe
    ],
    /*providers   :[
        TodoListService
    ],*/
    bootstrap   :[],
    imports     :[
        CommonModule
    ],
    exports     :[
        TodoListComponent
    ]
})
export class TodoListModule{}