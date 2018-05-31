import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

import {isNumeric} from 'rxjs/util/isNumeric';

import { DateRange } from '../../schema/shared.schema';


// Inputs
export class DateRangePopupComponentInput {
    title: string;
    list: Array<DateRange>;
}

// Outputs
export class DateRangePopupComponentOutput {
    list: Array<DateRange> = [];
}


@Component({  
    selector: 'confirm',
    templateUrl: './date_range_popup.component.html'
})
export class DateRangePopupComponent extends DialogComponent<DateRangePopupComponentInput, DateRangePopupComponentOutput> implements OnInit {
  
    // IdListComponentInput
    title:string;
    list: Array<DateRange>;  

    // UI
    textarea: string;

    constructor( dialogService: DialogService  ) {
        super( dialogService );
    }

    ngOnInit() { 
        if(this.list) {
            
            var str = "";
            for (let numberRange of this.list) {
                if(str.length > 0)
                    str += "\n";
                str += numberRange.start + ":" + numberRange.end;
            }           
            this.textarea = str;
        }
    }
    
    isDate (x) 
    { 
      try {
          let ret = Date.parse(x);
          if(isNaN(ret))
              return false;
          return true;
      } catch (e) {
          return false;
      }
    }
    
    confirm() {
        
        let output = new DateRangePopupComponentOutput();
        let list  = this.textarea.trim().split("\n");

        for (let value of list) {
            if(value.trim().length == 0)
                continue;
            
            let hyphen = value.indexOf(":");
            if(hyphen > -1) {
                let split  = value.split(":");
                let dr = new DateRange();
                dr.start = split[0];
                if(this.isDate(dr.start) === false) {
                    alert("A Please write a date range like '2001-01-31:2001-2-28'"); 
                    return;
                }
                dr.end = split[1];
                if(this.isDate(dr.end) === false) {
                    alert("B Please write a date range like '2001-01-31:2001-2-28'"); 
                    return;
                }
                
                output.list.push(dr);
            } else {
                alert("C Please write a date range like '2001-01-31:2001-2-28'");                  
            }
        } 
        
        if(output.list.length == 0)
            output.list = null;
        
        this.result = output;
        this.close();
  }
    
    
}