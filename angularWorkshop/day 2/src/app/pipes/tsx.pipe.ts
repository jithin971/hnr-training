import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tsx'
})
export class TsxPipe implements PipeTransform {

  transform(value: any, ...args: number[]): any {

    if(value>args[0])
    return "Eligible";
    else
    return "Not Eligible"
  }

}
