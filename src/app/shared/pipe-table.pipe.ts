import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeTable'
})
export class PipeTablePipe implements PipeTransform {

  transform(items: any, filter: any): any {
    if (!filter) {
      return items;
    }
    if (!Array.isArray(items)) {
      return items;
    }
    if (filter && Array.isArray(items)) {
      const filterKeys = Object.keys(filter);
      if (!filterKeys.length) {
        return items;
      }
      return items.filter((item) => {
        return filterKeys.some((keyName) => {
          return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] === '';
        });
      });

    }
  }

}
