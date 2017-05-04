import {BaseCyberComponent} from "./baseCyber.component";
import {TodoListComponent}  from "../todolist/todo-list.component";
import {HomeComponent}      from "../home.component";
import {AppContext} from "../app.context.service";

export class CyberComponent extends BaseCyberComponent{



    init(){
        this.e1 = TodoListComponent;
        this.e2 = HomeComponent;
    }
}