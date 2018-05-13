import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

import {isNumeric} from 'rxjs/util/isNumeric';

import { NumberRange } from '../../schema/shared.schema';


// Inputs
export class NumberRangePopupComponentInput {
    title: string;
    list: Array<NumberRange>;
}

// Outputs
export class NumberRangePopupComponentOutput {
    list: Array<NumberRange> = [];
}


@Component({  
    selector: 'confirm',
    templateUrl: './number_range_popup.component.html'
})
export class NumberRangePopupComponent extends DialogComponent<NumberRangePopupComponentInput, NumberRangePopupComponentOutput> implements OnInit {
  
    // IdListComponentInput
    title:string;
    list: Array<NumberRange>;  

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
                str += numberRange.start + "-" + numberRange.end;
            }           
            this.textarea = str;
        }
    }
    
    confirm() {
        
        let output = new NumberRangePopupComponentOutput();
        let list  = this.textarea.trim().split("\n");

        for (let value of list) {
            if(value.trim().length == 0)
                continue;
            
            let hyphen = value.indexOf("-");
            if(hyphen > -1) {
                let split  = value.split("-");
                let nr = new NumberRange();
                nr.start = parseInt(split[0]);
                nr.end = parseInt(split[1]);
                output.list.push(nr);
            } else {
                alert("Please write a range like '20-25'");                  
            }
        } 
        
        if(output.list.length == 0)
            output.list = null;
        
        this.result = output;
        this.close();
  }
    
    
}