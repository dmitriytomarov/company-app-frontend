import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/servises/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {

  employees: Employee[] = [];
  status: string = '';
  isConnected: boolean = false;

  fullName: string ='';
  filterDep: string ='';
  filterSalary: string ='';
  filterBirthday: Date | null = null;
  // filter: string ='';

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {

    this.status = 'Загрузка...';
    this.employeesService.getAllEmployees().subscribe({
      next: (e) => {
        this.isConnected = true;
        this.employees = e;
        if (this.employees.length === 0) { this.status = "Список сотрудников пуст..."; }
      },
      error: () => {
        this.isConnected = false;
        this.status = 'Нет соединения с API...';
      }
    }
    );
  }

}
