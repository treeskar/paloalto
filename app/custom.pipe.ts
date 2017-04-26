import {Pipe, PipeTransform} from "@angular/core";

@Pipe({ name: 'mapValues',  pure: true })
export class ValuesPipe implements PipeTransform {

    transform(value) {
        let result = [];

        if(value.entries) {
            for (var [key, value] of value.entries()) {
                result.push({ key, value });
            }
        } else {
            for(let key in value) {
                result.push({ key, value: value[key] });
            }
        }

        return result;
    }
}