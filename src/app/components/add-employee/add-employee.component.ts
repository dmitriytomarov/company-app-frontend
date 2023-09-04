import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/servises/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent implements OnInit{

  newEmployee: Employee = {
    id:0,
    name: '',
    birthday: new Date(),
    worksFrom: undefined,
    departmentName: "",
    salary: 0
  }

  departments: string[] = [];
  showDeps: boolean = false;

  constructor(private service: EmployeesService, private router: Router) {}

  addEmployee() {
    this.service.addNewEmployee(this.newEmployee)
      .subscribe(
        {
          next: e => {
            this.router.navigate(['employees']);
            console.log (e)
          }
        }
      );
  }

  ngOnInit(){
    this.service.getAllDepartments().subscribe({
      next: d => this.departments = d
    })
  }
}
