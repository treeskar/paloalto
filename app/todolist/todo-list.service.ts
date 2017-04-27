import {Injectable} from "@angular/core";
import {TodoTask} from "./todoTask.model";


@Injectable()
export class TodoListService{
    tasks: TodoTask[] = [];
    tasks2:Map<number,TodoTask> = new Map();

    add(desc:string){
        let task = new TodoTask(desc);
       /* this.tasks.push(task);*/
        this.tasks2.set(task.id,task);
        this.updateArray();
    }

    updateArray(){
        this.tasks = Array.from(this.tasks2.values());
    }

    remove(id:number){
       /* let index = this.tasks.findIndex(t=>t.id===id);
        this.tasks.splice(index,1);*/

        this.tasks2.delete(id);
        this.updateArray();
    }

    get totalIsDone(){
        return this.tasks.filter( t => t.isDone ).length;
    }

    update($event:MouseEvent){

        $event.stopPropagation();

        //$event.preventDefault();

        let result:TodoTask[] = [];

        this.tasks.forEach(t =>{
            result.push({
                id: t.id,
                isDone: t.isDone,
                desc: t.desc+'!'
            });
        });
        this.tasks = result;
    }
}