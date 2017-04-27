/**
 * Created by Eyal on 27/04/2017.
 */
import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'mdd',
  styles : [],
  template: `
<div>
  <h3>MDD</h3>
  name: <input type="text" 
               (input)="name = $event.target.value"
               [value]="name"/>  {{name}} <br>
  email: <input type="email" [formControl]="fcEmail"/>  {{fcEmail.value}}<br>

  age: <input type="number"  [(ngModel)]="age" #fcAge="ngModel"/>  {{age}}<br>  
  <hr>
  <pre>
      {{ fcEmail.errors | json}}
  </pre>  
</div>
`})
export class MddComponent {
    name:string = 'Eyal';
    fcEmail = new FormControl('e@e.com',[
        Validators.maxLength(5)
    ]);

    myForm: FormGroup = new FormGroup({
        name: new FormControl('eyal',[Validators.required]),
        email: this.fcEmail,
        age: new FormControl('45',[])
    });



    get email(){
        return this.fcEmail.value;
    }

    age:number = 45;

    constructor(){
        setInterval(()=>{
            this.name += '!';
        },2000);
    }
}
