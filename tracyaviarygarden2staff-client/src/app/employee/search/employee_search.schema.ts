///////////////////////////////////
// Request

import { NumberRange, DateRange } from '../../a_shared/schema/shared.schema';

import { Employee } from '../employee.schema';

export class EmployeeSearchRequest {
    
    public pageNumber: number;
    public rowsPerPage: number;
    
    public sort: string;
    public direction: string;

    public columnList: Array<Column>;

    public idList: Array<string>;
    public namePatternList: Array<string>;
    public ageRangeList: Array<NumberRange>;
    public salaryRangeList: Array<NumberRange>;
    public hireDateRangeList: Array<DateRange>;
    public employeeTypeList: Array<string>;

}

export class Column {
    name:       string; 
    displayName:      string;
    selected:    boolean;

    constructor(name, displayName, selected) {
        this.name = name;
        this.displayName = displayName;
        this.selected = selected;
    }
}





///////////////////////////////////
// Response

export class EmployeeSearchResponse {

    public totalRowCount: number;
    public totalPageCount: number;
    public pageNumber: number;
    public rowsPerPage: number;
    
    public employeeList: Employee[];
    public columnList: Array<Column>;
}


