import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { EmployeeSearchComponent }    from './search/employee_search.component';
import { EmployeeViewComponent }    from './view/employee_view.component';
import { EmployeeEditComponent }    from './edit/employee_edit.component';

import {AuthGuard} from '../a_shared/security/auth-guard.service';

const routes = [
  { path: 'employee_search', component: EmployeeSearchComponent, canActivate: [AuthGuard]},
  { path: 'employee_view/:id', component: EmployeeViewComponent, canActivate: [AuthGuard]},
  { path: 'employee_edit/:id', component: EmployeeEditComponent, canActivate: [AuthGuard]}  
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class EmployeeRouting {}

