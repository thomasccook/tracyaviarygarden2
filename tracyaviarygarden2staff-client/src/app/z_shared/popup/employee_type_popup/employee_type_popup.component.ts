import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

import {isNumeric} from 'rxjs/util/isNumeric';

import { DateRange } from '../../schema/shared.schema';


// Inputs
export class EmployeeTypePopupComponentInput {
    title: string;
    list: Array<string>;
}

// Outputs
export class EmployeeTypePopupComponentOutput {
    list: Array<string> = [];
}


@Component({  
    selector: 'confirm',
    templateUrl: './employee_type_popup.component.html' 
})
export class EmployeeTypePopupComponent extends DialogComponent<EmployeeTypePopupComponentInput, EmployeeTypePopupComponentOutput> implements OnInit {
  
    title:string;
    list: Array<string>;  

    checkbox1 = false;
    checkbox2 = false;

    // UI
    textarea: string;

    constructor( dialogService: DialogService  ) {
        super( dialogService );
    }

    ngOnInit() { 
        
        if(this.list) {
            for (let employeeType of this.list) {            
                if(employeeType === "Manager")
                    this.checkbox1 = true;
                if(employeeType === "Employee")
                    this.checkbox2 = true;
            }                       
        }

    }
    
    confirm() {
        
        let output = new EmployeeTypePopupComponentOutput();
        output.list = [];
        
        if(this.checkbox1)
            output.list.push("Manager");
        if(this.checkbox2)
            output.list.push("Employee");
        
        if(output.list.length == 0)
            output.list = null;
        
        this.result = output;
        this.close();
  }
    
    
}