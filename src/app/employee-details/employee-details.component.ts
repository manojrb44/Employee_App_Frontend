import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
   id: number = 0;
   employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute){
  }

  ngOnInit(): void{
    this.id = this.route.snapshot.params['id'];
    this.employee = new Employee();
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    });
  }
}
