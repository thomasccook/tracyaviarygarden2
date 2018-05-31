import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

import {isNumeric} from 'rxjs/util/isNumeric';


// Inputs
export class IdPopupComponentInput {
    title: string;
    list: Array<string>;
}

// Outputs
export class IdPopupComponentOutput {
    list: Array<string>;
}


@Component({  
    selector: 'confirm',
    templateUrl: './id_popup.component.html'
})
export class IdPopupComponent extends DialogComponent<IdPopupComponentInput, IdPopupComponentOutput> implements OnInit {
  
    // IdListComponentInput
    title:string;
    list: Array<string>;  

    // UI
    textarea: string;

    constructor( dialogService: DialogService  ) {
        super( dialogService );
    }

    ngOnInit() { 
        if(this.list)
            this.textarea = this.list.join("\n");
    }
    
    confirm() {
        
        let output = new IdPopupComponentOutput();
        output.list = this.textarea.trim().split("\n");
        if(!output.list[0])
            output.list = null;
        
        // Validation
        if(output.list) {
            for (let id of output.list) {
                if(isNumeric(id) === false) {
                    alert(id + " is not a valid id.");  
                    return;
                }
            }            
        }
                
        this.result = output;
        this.close();
  }
    
    
}