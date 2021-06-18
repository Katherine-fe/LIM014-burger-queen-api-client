import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: Array<any>, arg: string): Array<any> {
    const result = [];
    if (value != undefined) {
      for (let item of value) {
        (item.type === arg || item.status === arg) ? result.push(item):null;
      }
    }
   return result; 
  }
}
