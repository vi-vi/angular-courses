import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: number) {
    return (value > 59) ? `${value / 60 | 0}h ${value % 60}min` : `${value}min`;
  }
}
