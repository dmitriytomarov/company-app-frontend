import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Pipe({
  name: 'filterBirthday'
})
export class FilterBirthdayPipe implements PipeTransform {

  transform(table: Employee[], birthday: Date | null): Employee[] {

    if (!birthday) return table;
    return table.filter(e => e.birthday == birthday);
  }

}
