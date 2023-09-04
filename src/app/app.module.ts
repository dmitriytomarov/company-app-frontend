import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { AboutCompanyComponent } from './components/about-company/about-company.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { EditEmployeesComponent } from './components/edit-employees/edit-employees.component';
import { DeleteEmployeeComponent } from './components/delete-employee/delete-employee.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterDepPipe } from './pipes/filter-dep.pipe';
import { FilterSalaryPipe } from './pipes/filter-salary.pipe';
import { FilterBirthdayPipe } from './pipes/filter-birthday.pipe';



@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    AboutCompanyComponent,
    AddEmployeeComponent,
    EditEmployeesComponent,
    DeleteEmployeeComponent,
    FilterPipe,
    FilterDepPipe,
    FilterSalaryPipe,
    FilterBirthdayPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
