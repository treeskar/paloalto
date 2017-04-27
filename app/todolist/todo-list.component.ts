/**
 * Created by Eyal on 26/04/2017.
 */
import {ApplicationRef, Component} from "@angular/core";
import {TodoListService} from "./todo-list.service";
import {TodoTask} from "./todoTask.model";

@Component({
  selector: 'todo-list',
    providers   :[
        TodoListService
    ],
  styles : [`
    .todo{
        border: 1px solid black;
    }
  `],
  template: `
<div class="todo">
 <h3>Todo List Demo <button (click)="service.update($event)">update</button></h3>   
 desc: <input type="text" #i/> <button (click)="add(i.value)">Add Task</button>
 <hr>   
    <!--<pre *ngFor="let task of tasks">
        {{task | json }}
    </pre>-->
     <!--<task 
             *ngFor="let task of tasks | mapValues"
             [source]="task">
         
     </task>-->
    <task
            *ngFor="let task of tasks"
            [source]="task">

    </task>

 <hr>
 <h4>Total tasks: {{tasks.length}}, done: {{service.totalIsDone}}</h4>   
</div>
`})
export class TodoListComponent {

    get tasks(){
        return this.service.tasks;
    }

    constructor(private service:TodoListService){
        //appRef.tick();
    }

    trackByFn(tab){
        return tab.id;
    }


    add(desc:string){
        this.service.add(desc);
    }



}