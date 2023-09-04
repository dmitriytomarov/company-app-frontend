import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { EmployeesService } from 'src/app/servises/employees.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-edit-employees',
  templateUrl: './edit-employees.component.html',
  styleUrls: ['./edit-employees.component.css']
})
export class EditEmployeesComponent implements OnInit {

  employee: Employee = {
    id:0,
    name: '',
    birthday: new Date(),
    worksFrom: undefined,
    departmentName: "",
    salary: 0
  }

  //id: string = '';
  departments: string[] = [];
  showDeps: boolean = false;

  constructor(private route: ActivatedRoute, private service: EmployeesService,
     private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: paramMap => {
        const id = paramMap.get('id');

        if (id) {
          //this.id = id;
          this.service.getEmployeeById(id)
          .subscribe({
            next: (e) => {
              this.employee = e;
            }
          })
        }
      }
    })

    this.service.getAllDepartments().subscribe({
      next: d => this.departments = d
    })

  }

  updateEmployee(){
    this.service.updateEmployee(this.employee.id, this.employee)
    .subscribe({
      next: (e) => {
        this.router.navigate(['/employees']);
      }
    })
  }

}
