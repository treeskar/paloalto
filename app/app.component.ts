/**
 * Created by Eyal on 27/04/2017.
 */
import {Component} from "@angular/core";

@Component({
  selector: 'my-app',
  styles : [],
  template: `
<div>
  <nav>
      <a routerLink="/home">Home</a> |
      <a [routerLink]="['/users',{id:1,b:3}]">Users</a> |
      <a routerLink="/todos">Todo List</a> |
  </nav>
  <div>
      <router-outlet></router-outlet>
  </div>  
</div>
`})
export class AppComponent {
    routerCanDeactivate(){
        return new Promise<boolean>(
            (resolve, reject) => resolve(window.confirm('Continue?')));
    }

}