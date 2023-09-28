import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from 'src/app/servises/employees.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent {

  constructor(private route: ActivatedRoute, private service: EmployeesService,
    private router: Router) {  }

  employeeName: string = '';
  id: string = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: paramMap => {
        const id = paramMap.get('id');

        if (id) {
          this.id = id;
          this.service.getEmployeeById(id)
            .subscribe({
              next: (e) => {
                this.employeeName = e.name;
              }
            })
        }
      }
    })
  }

  deleteEmployee() {
    this.service.deleteEmployee(this.id)
    .subscribe({
      next: () => {
        this.router.navigate(['/employees']);
      }
    })
  }
}
