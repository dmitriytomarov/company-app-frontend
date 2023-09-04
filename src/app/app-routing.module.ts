import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { AppComponent } from './app.component';
import { AboutCompanyComponent } from './components/about-company/about-company.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeesComponent } from './components/edit-employees/edit-employees.component';
import { DeleteEmployeeComponent } from './components/delete-employee/delete-employee.component';

const routes: Routes = [
  { path: '', component: AboutCompanyComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employees/add', component: AddEmployeeComponent },
  { path: 'employees/edit/:id', component: EditEmployeesComponent },
  { path: 'employees/delete/:id', component: DeleteEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
