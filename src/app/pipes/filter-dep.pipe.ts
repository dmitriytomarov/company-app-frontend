import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Pipe({
  name: 'filterDep'
})
export class FilterDepPipe implements PipeTransform {

  transform(table: Employee[], dep:string): Employee[] {
    return table.filter(e => e.departmentName.toLowerCase().includes(dep));
  }

}
