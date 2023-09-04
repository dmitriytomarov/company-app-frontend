import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(table: Employee[], fullName: string): Employee[] {
    return table.filter(e => e.name.toLowerCase().includes(fullName.toLowerCase()));
  }

}
