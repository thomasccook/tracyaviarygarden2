import { Component, OnInit }      from '@angular/core';

import { Employee } from '../employee.schema';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee_edit.component.html',
  styleUrls: [ './employee_edit.component.css' ]
})
export class EmployeeEditComponent implements OnInit {
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

  save() {
      // POST-DEMO TODO: do something like save it

      this.employeeService.save(this.employee).subscribe( response => {
          
          this.router.navigate(['employee_search'])
          
      } );      
      
      this.displayMessage( 'Saved ' + this.employee.name );
  }

  /** Display a message briefly, then remove it. */
  displayMessage(msg: string) {
    this.msg = msg;
    setTimeout(() => this.msg = '', 1500);
  }
}
