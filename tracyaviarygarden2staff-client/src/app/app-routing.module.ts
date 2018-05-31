import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {AuthGuard} from './a_shared/security/auth-guard.service';
import {AdminAuthGuard} from './a_shared/security/admin-auth-guard.service';

import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';

import { EmployeeModule } from './employee/employee.module';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
      path: 'user',
      component: UserComponent,
      canActivate: [AuthGuard]
  },
  { 
      path: 'employee', 
      redirectTo: 'employee', 
      pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [
    EmployeeModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
