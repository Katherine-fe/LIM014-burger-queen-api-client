import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeStatus'
})
export class ChangeStatusPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
