import { Component, OnInit }      from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';

import {AuthHttp} from 'angular2-jwt';

import { NumberRange, DateRange } from '../../a_shared/schema/shared.schema';

// Request
import { EmployeeSearchRequest } from './employee_search.schema';
// Response
import { EmployeeSearchResponse } from './employee_search.schema';
import { Employee } from '../employee.schema';
// Request and Response
import { Column } from './employee_search.schema';

//Service
import { EmployeeService } from '../employee.service';

// Pop-ups
import { DialogService } from "ng2-bootstrap-modal";
import { IdPopupComponent, IdPopupComponentInput, IdPopupComponentOutput } from '../../a_shared/popup/id_popup/id_popup.component';
import { StringPatternPopupComponent, StringPatternPopupComponentInput, StringPatternPopupComponentOutput } from '../../a_shared/popup/string_pattern_popup/string_pattern_popup.component';
import { NumberRangePopupComponent, NumberRangePopupComponentInput, NumberRangePopupComponentOutput } from '../../a_shared/popup/number_range_popup/number_range_popup.component';
import { DateRangePopupComponent, DateRangePopupComponentInput, DateRangePopupComponentOutput } from '../../a_shared/popup/date_range_popup/date_range_popup.component';
import { EmployeeTypePopupComponent, EmployeeTypePopupComponentInput, EmployeeTypePopupComponentOutput } from '../../a_shared/popup/employee_type_popup/employee_type_popup.component';



import { ColumnPopupComponent, ColumnPopupComponentInput, ColumnPopupComponentOutput} from '../../a_shared/popup/column_popup/column_popup.component';

import {UserService} from '../../user/user.service';

import { Observable } from 'rxjs/Observable';

import { EmployeeSearchPersistent } from './employee-search.persistent'

@Component({
  selector: 'app-employee',
  templateUrl: './employee_search.component.html',
  styleUrls: [ './employee_search.component.css' ]
})
export class EmployeeSearchComponent implements OnInit {
    
    // Search Parameters
    idCount: string;
    namePatternCount: string;
    ageRangeCount: string;
    salaryRangeCount: string;
    dateRangeCount: string;
    employeeTypeCount: string;
    
    // Request
    //request: EmployeeSearchRequest;

    response: EmployeeSearchResponse;

    columnHashMap: any;

    constructor( private persistent: EmployeeSearchPersistent,
                    private employeeService: EmployeeService, 
                    private http: HttpClient,
                    private dialogService: DialogService,
                    private authHttp: AuthHttp) {
        
        if(!this.persistent.request) {
            this.persistent.request = new EmployeeSearchRequest();            
            this.persistent.request.pageNumber = 0;
            this.persistent.request.rowsPerPage = 10;
            this.persistent.request.sort = 'id';
            this.persistent.request.direction = 'asc';
        }

        let columnList = [];
        columnList.push(new Column('id','Id',true));
        columnList.push(new Column('name','Name',true));
        columnList.push(new Column('age', 'Age',true));
        columnList.push(new Column('salary','Salary',true));
        columnList.push(new Column('hireDate','Hire Date',true));
        columnList.push(new Column('employeeType','Employee Type',true));
        this.persistent.request.columnList = columnList;
        
        this.response = new EmployeeSearchResponse();
        this.response.columnList = columnList;
        this.columnListToColumnHashMap();

        this.onSubmit();
        
    }

    ngOnInit() {
    }

    sort(column: string) {
        
        if (this.persistent.request.sort != column) {
            this.persistent.request.direction = "asc";
        } else {
            if(this.persistent.request.direction == "asc")
                this.persistent.request.direction = "desc";
            else
                this.persistent.request.direction = "asc";
        }
            
        this.persistent.request.sort = column;
        this.onSubmit();
    }
    
    page(flipDirection: string) {
        
        var maxPage = this.response.totalPageCount - 1;
        
        if (flipDirection == 'first') {
            this.persistent.request.pageNumber = 0;
        } else if (flipDirection == 'previous') {
            this.persistent.request.pageNumber--;
            if(this.persistent.request.pageNumber < 0)
                this.persistent.request.pageNumber = 0;
        } else if (flipDirection == 'next') {
            this.persistent.request.pageNumber++;
            if(this.persistent.request.pageNumber > maxPage)
                this.persistent.request.pageNumber = maxPage;            
        } else if (flipDirection == 'last') {
            this.persistent.request.pageNumber = maxPage;
        }

        this.onSubmit();
    }
    
    onSubmit() {

        this.employeeService.search(this.persistent.request).subscribe( response => {
            this.response = response;
            this.columnListToColumnHashMap();
        } );
    }
    
    columnListToColumnHashMap() {
        
        this.columnHashMap = this.response.columnList.reduce(function(map, obj) {
            map[obj.name] = obj.selected;
            return map;
        }, {});
    }    
      
    popupIdFilter() {

        let input = new IdPopupComponentInput();
        input.title = "Id's";
        input.list = this.persistent.request.idList;

        this.dialogService.addDialog( IdPopupComponent, input )
            .subscribe(( output ) => {
                if ( output ) {
                    if ( output.list ) {
                        this.persistent.request.idList = output.list;
                        this.idCount = this.persistent.request.idList.length + " selected";
                    } else {
                        this.persistent.request.idList = null;
                        this.idCount = "";
                    }
                }
            } );
    }


    popupNamePatternFilter() {

        let input = new StringPatternPopupComponentInput();
        input.title = "Name's";
        input.list = this.persistent.request.namePatternList;

        this.dialogService.addDialog( StringPatternPopupComponent, input )
            .subscribe(( output ) => {
                if ( output ) {
                    if ( output.list ) {
                        this.persistent.request.namePatternList = output.list;
                        this.namePatternCount = this.persistent.request.namePatternList.length + " selected";
                    } else {
                        this.persistent.request.namePatternList = null;
                        this.namePatternCount = "";
                    }
                }
            } );
    }    
    
    
    popupAgeRangeFilter() {

        let input = new NumberRangePopupComponentInput();
        input.title = "Age Ranges";
        input.list = this.persistent.request.ageRangeList;

        this.dialogService.addDialog( NumberRangePopupComponent, input )
            .subscribe(( output ) => {
                if ( output ) {
                    if ( output.list ) {
                        this.persistent.request.ageRangeList = output.list;
                        this.ageRangeCount = this.persistent.request.ageRangeList.length + " selected";
                    } else {
                        this.persistent.request.ageRangeList = null;
                        this.ageRangeCount = "";
                    }
                }
            } );
    }     
    
    popupSalaryRangeFilter() {

        let input = new NumberRangePopupComponentInput();
        input.title = "Salary Ranges";
        input.list = this.persistent.request.salaryRangeList;

        this.dialogService.addDialog( NumberRangePopupComponent, input )
            .subscribe(( output ) => {
                if ( output ) {
                    if ( output.list ) {
                        this.persistent.request.salaryRangeList = output.list;
                        this.salaryRangeCount = this.persistent.request.salaryRangeList.length + " selected";
                    } else {
                        this.persistent.request.salaryRangeList = null;
                        this.salaryRangeCount = "";
                    }
                }
            } );
    }     
        
    popupDateRangeFilter() {

        let input = new DateRangePopupComponentInput();
        input.title = "Date Hired Ranges";
        input.list = this.persistent.request.hireDateRangeList;

        this.dialogService.addDialog( DateRangePopupComponent, input )
            .subscribe(( output ) => {
                if ( output ) {
                    if ( output.list ) {
                        this.persistent.request.hireDateRangeList = output.list;
                        this.dateRangeCount = this.persistent.request.hireDateRangeList.length + " selected";
                    } else {
                        this.persistent.request.hireDateRangeList = null;
                        this.dateRangeCount = "";
                    }
                }
            } );
    }   
    
    popupEmployeeTypeFilter() {

        let input = new EmployeeTypePopupComponentInput();
        input.title = "Employee Type";
        input.list = this.persistent.request.employeeTypeList;

        this.dialogService.addDialog( EmployeeTypePopupComponent, input )
            .subscribe(( output ) => {
                if ( output ) {
                    if ( output.list ) {
                        this.persistent.request.employeeTypeList = output.list;
                        this.employeeTypeCount = this.persistent.request.employeeTypeList.length + " selected";
                    } else {
                        this.persistent.request.employeeTypeList = null;
                        this.employeeTypeCount = "";
                    }
                }
            } );
    }     
    
    
    popupColumnList() {
         
        let input = new ColumnPopupComponentInput();
        input.columnList = this.persistent.request.columnList;
        
        this.dialogService.addDialog( ColumnPopupComponent, input)
            .subscribe(( output ) => {
                if(output) {
                    this.persistent.request.columnList = output.columnList;
                    this.onSubmit();
                }
            } );
        
    }


}


