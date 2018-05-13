import { Component, OnInit }      from '@angular/core';

import { Employee } from '../employee.schema';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee_view.component.html',
  styleUrls: [ './employee_view.component.css' ]
})
export class EmployeeViewComponent implements OnInit {
  employee:  Employee;

  msg = 'Loading ...';
  userName = 'Some Guy';

  constructor(private route: ActivatedRoute, 
                  private router: Router,
                  private employeeService: EmployeeService ) {
      this.employee = new Employee(0,"", 0, 0, "", "");
  }

  ngOnInit() {
      let id = this.route.snapshot.paramMap.get('id');
        
      this.employeeService.retrieve(id).subscribe( response => {
          this.employee = response;
      } );
      
  }

}
