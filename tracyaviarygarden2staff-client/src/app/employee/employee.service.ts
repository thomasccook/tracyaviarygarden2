import { Injectable, OnDestroy } from '@angular/core';

import {AuthHttp} from 'angular2-jwt';

import { EmployeeSearchRequest, EmployeeSearchResponse } from './search/employee_search.schema';
import { Employee  } from './employee.schema';

import { Observable } from 'rxjs/Observable';
import { of }         from 'rxjs/observable/of';
import { delay }      from 'rxjs/operators';

const FETCH_LATENCY = 500;

/** Simulate a data service that retrieves employees from a server */
@Injectable()
export class EmployeeService implements OnDestroy {
    
    constructor( private authHttp: AuthHttp ) {
    }

    ngOnDestroy() { 
    }

    //////////////////////////
    // Search

    search( employeeSearchRequest: EmployeeSearchRequest ) {

        //let json = JSON.stringify( employeeSearchRequest );

        // Pass it after the body in a POST request
        return this.authHttp.post( '/springjwt/employee/search', employeeSearchRequest )
            .map( res => res.json() );

    }

    //////////////////////////
    // View and Edit

    retrieve( id: string ) {

        // Pass it after the body in a POST request
        return this.authHttp.post( '/springjwt/employee/retrieve', id )
            .map( res => res.json() );

    }

    save( employee: Employee ) {
        
        // Pass it after the body in a POST request
        return this.authHttp.post( '/springjwt/employee/save', employee )
            .map( res => res.json() );

    }

}
