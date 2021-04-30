import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitLength'
})
export class LimitLengthPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    if (value.length <= 3) {
      return value
    }
    return value.substring(0, 3) + '...';
  }

}
