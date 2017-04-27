import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'mapValues', pure: false})
export class ValuesPipe implements PipeTransform {
    result = [];

    transform(value) {
       let result = [];
        /*for (let val of value.values()) {
            this.result.push(val);
        }*/

        Array.from(value.values()).forEach(v=>{
            result.push(v);
        });


        console.log(`result length: ${result.length}`);
        return result;
    }
}