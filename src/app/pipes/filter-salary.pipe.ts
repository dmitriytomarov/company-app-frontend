import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Pipe({
  name: 'filterSalary'
})
export class FilterSalaryPipe implements PipeTransform {

  transform(table: Employee[], salary: string): Employee[] {
    return table.filter(e => e.salary.toString().includes(salary));
  }

}
