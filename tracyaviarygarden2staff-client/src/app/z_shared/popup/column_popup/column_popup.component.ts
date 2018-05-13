import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { Column } from '../../../employee/search/employee_search.schema';

import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

///////////////////////
// Input

export class ColumnPopupComponentInput {
    columnList:     Array<Column>;
}

///////////////////////
// Output

export class ColumnPopupComponentOutput {
    columnList:     Array<Column>;
}


@Component({ 
    selector: 'column_list',
    templateUrl: './column_popup.component.html'
})
export class ColumnPopupComponent extends DialogComponent<ColumnPopupComponentInput, ColumnPopupComponentOutput> {
  
    // input
    columnList: Array<Column>;
 
    constructor( dialogService: DialogService) {
        super( dialogService );
    }
    
    onCheckedChange($event, index) {
        this.columnList[index].selected = $event.currentTarget.checked;
    }
    
    confirm() {
        let output = new ColumnPopupComponentOutput();
        output.columnList = this.columnList;

        this.result = output;
        this.close();
    }
    
    
}