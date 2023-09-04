import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient){}

  baseUrl: string = 'https://localhost:5001'

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl + "/api/employees");
  }

  addNewEmployee(newEmployee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl + "/api/employees", newEmployee)
  }

  getAllDepartments(): Observable<string[]>{
    return this.http.get<string[]>(this.baseUrl + "/api/departments");
  }

  getEmployeeById(id: string): Observable<Employee> {
    return this.http.get<Employee>(this.baseUrl + "/api/employees/" + id);
  }

  updateEmployee(id: number, changedEmployee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.baseUrl + "/api/employees/" + id, changedEmployee)
  }

  deleteEmployee (id: string): Observable<Employee>  {
    return this.http.delete<Employee>(this.baseUrl + "/api/employees/" + id)
  }

}
