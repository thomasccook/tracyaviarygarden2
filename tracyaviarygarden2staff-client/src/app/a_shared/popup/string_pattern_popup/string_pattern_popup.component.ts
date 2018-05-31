import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

// Inputs
export class StringPatternPopupComponentInput {
    title: string;
    list: Array<string>;
}

// Outputs
export class StringPatternPopupComponentOutput {
    list: Array<string>;
}


@Component({  
    selector: 'confirm',
    templateUrl: './string_pattern_popup.component.html'
})
export class StringPatternPopupComponent extends DialogComponent<StringPatternPopupComponentInput, StringPatternPopupComponentOutput> implements OnInit {
  
    // input
    title: string;
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
        
        let output = new StringPatternPopupComponentOutput();
        output.list = this.textarea.trim().split("\n");
        if(!output.list[0])
            output.list = null;
        
        // Validation
        if(output.list) {
            for (let value of output.list) {
                if(!value) {
                    alert("Blank values are not valid.");  
                    return;
                }
            }            
        }

                
        this.result = output;
        this.close();
  }
    
    
}