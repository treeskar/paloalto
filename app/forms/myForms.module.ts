import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MddComponent} from "./mdd.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations:[
        MddComponent
    ],
    providers   :[],
    bootstrap   :[],
    imports     :[
        CommonModule,
        ReactiveFormsModule
    ],
    exports     :[
        MddComponent
    ]
})
export class MyFormsModule{}