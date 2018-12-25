import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
})
export class FilterPipe implements PipeTransform {
    transform(value: any[], name: string) {
      return value.filter( item =>  item.title.toLowerCase().indexOf(name.toLowerCase()) >= 0 );
    }
}
