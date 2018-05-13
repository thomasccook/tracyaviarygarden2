import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import {Http, Headers, RequestOptions} from '@angular/http';
import {AuthConfig, AuthHttp} from 'angular2-jwt';

import { EmployeeSearchComponent }   from './search/employee_search.component';
import { EmployeeViewComponent }   from './view/employee_view.component';
import { EmployeeEditComponent }   from './edit/employee_edit.component';


import { HighlightDirective } from '../z_shared/highlight.directive';
import { EmployeeService }     from './employee.service';

import { EmployeeRouting }   from './employee.routing';


import { BootstrapModalModule } from 'ng2-bootstrap-modal';

import { IdPopupComponent } from '../z_shared/popup/id_popup/id_popup.component';
import { StringPatternPopupComponent } from '../z_shared/popup/string_pattern_popup/string_pattern_popup.component';
import { NumberRangePopupComponent } from '../z_shared/popup/number_range_popup/number_range_popup.component';
import { DateRangePopupComponent } from '../z_shared/popup/date_range_popup/date_range_popup.component';
import { EmployeeTypePopupComponent } from '../z_shared/popup/employee_type_popup/employee_type_popup.component';

import { ColumnPopupComponent } from '../z_shared/popup/column_popup/column_popup.component';

import {AuthenticationService} from '../services/authentication.service';

import {authHttpServiceFactory} from '../app.module';

import { ReactiveFormsModule} from "@angular/forms";

import { EmployeeSearchPersistent } from './search/employee-search.persistent'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EmployeeRouting,
    BootstrapModalModule,
    ReactiveFormsModule
  ],
  declarations: [
    EmployeeSearchComponent,
    EmployeeEditComponent,
    EmployeeViewComponent,
    HighlightDirective,
    
    IdPopupComponent,
    StringPatternPopupComponent,
    NumberRangePopupComponent,
    DateRangePopupComponent,
    EmployeeTypePopupComponent,
    
    ColumnPopupComponent
  ],
  entryComponents: [
                    IdPopupComponent,
                    StringPatternPopupComponent,
                    NumberRangePopupComponent,
                    DateRangePopupComponent,
                    EmployeeTypePopupComponent,
                    ColumnPopupComponent
                  ],
  providers: [ 
              {provide: AuthHttp, useFactory: authHttpServiceFactory, deps: [Http]},
              EmployeeService,
              EmployeeSearchPersistent,

       ]
})
export class EmployeeModule { }
