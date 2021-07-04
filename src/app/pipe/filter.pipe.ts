import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: Array<any>, arg: string): Array<any> {
    const result = [];
    if (value != undefined) {
      for (let item of value) {
        if (item.status === arg) {
          const entry = dayjs(item.dateEntry);
          const processed = dayjs(item.dateProcessed);
          const itemObj = {
            client: item.client,
            dateEntry: entry.format('YYYY/MM/DD hh:mm:ss'),
            dateProcessed: processed.format('YYYY/MM/DD hh:mm:ss'),
            products: [...item.products],
            status: item.status,
            userId: item.userId,
            _id: item._id
          }
          result.push(itemObj);
        } else if (item.type === arg) {
          result.push(item);
        }
        /* (item.type === arg || item.status === arg) ? result.push(item):null; */
      }
    }
    return result;
  }
}
