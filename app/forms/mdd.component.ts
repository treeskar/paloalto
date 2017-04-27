/**
 * Created by Eyal on 27/04/2017.
 */
import {Component} from "@angular/core";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'mdd',
  styles : [`
    .ng-invalid{
         border-right: 5px solid red;
     }
    .ng-valid{
        border-right: 5px solid green;
    }
  `],
  template: `
<div>
  <h3>MDD</h3>
  <form [formGroup]="myForm">
      name: <input type="text" formControlName="name"/> <br>
      email: <input type="email" formControlName="email"/><br>
      age: <input type="number" formControlName="age"/><br>
      ips:<br>
      <ul>
          <li *ngFor="let ip of myForm.controls.ips.controls;last as l">
              <input type="text" [formControl]="ip">
              <button *ngIf="l"
                      (click)="addIp()">+</button>
          </li>
      </ul>
      <button >Save</button>
  </form>
    <hr>
    <pre>
      {{ fcEmail.errors | json}}
  </pre>
    <hr>
  <pre>
      {{ myForm.controls.name.errors | json}}
  </pre>

    <hr>
    <pre>
      {{ myForm.errors | json}}
  </pre>
</div>
`})
export class MddComponent {
    name:string = 'Eyal';
    fcEmail = new FormControl('e@e.com',[
        Validators.maxLength(5)
    ]);

    myForm: FormGroup = new FormGroup({
        name: new FormControl('eyal',[
            Validators.required,
            (fc:FormControl)=>{
                if(fc.value.length > 5){
                    return {
                        a: 'bla bla a',
                        b: 'bla bla b'
                    };
                }
                return null
            }
        ]),
        email: this.fcEmail,
        age: new FormControl('45',[]),
        ips: new FormArray([
            new FormControl('1.1.1.1')
        ])
    });

    addIp(){
        let ips:FormArray = this.myForm.controls.ips as FormArray;

        ips.controls.push(new FormControl(''));
    }

    isSave:boolean;

    get email(){
        return this.fcEmail.value;
    }

    myGroupValidation(fg:FormGroup){
        let values = fg.value;
        console.log(`myGroupValidation`);
        return {
            c: 'bla bla c'
        };
        //return null;
    }

    age:number = 45;

    constructor(){


        this.myForm.valueChanges
            .map(values => values.age)
            .do(console.log)
            .subscribe(age =>{
                this.isSave = age > 100;
            });


        setInterval(()=>{
         /*   this.name += '!';*/
         this.myForm.patchValue({
             id:123,
             name: 'eyal',
             email: 'w@w.com'
         })
        },2000);


    }
}
