import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yell'
})
export class YellPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (typeof value?.toString() === 'string') {
      return value?.toString().toUpperCase();
    }
    return null;
  }

}