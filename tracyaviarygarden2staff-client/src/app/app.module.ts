import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Http, HttpModule} from '@angular/http';
import { HttpClientModule} from '@angular/common/http';

import {AuthConfig, AuthHttp} from 'angular2-jwt';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {AdminComponent} from './admin/admin.component';

import {HomeComponent} from './home/home.component';

import {LoginComponent} from './login/login.component';
import {LoginService} from './login/login.service';

import {UserComponent} from './user/user.component';
import {UserService} from './user/user.service';

// Shared
import {AuthenticationService} from './a_shared/security/authentication.service';
import {AuthGuard} from './a_shared/security/auth-guard.service';
import {AdminAuthGuard} from './a_shared/security/admin-auth-guard.service';
import {TOKEN_NAME} from './a_shared/security/auth.constant';


export function authHttpServiceFactory(http: Http) {
  return new AuthHttp(new AuthConfig({
    headerPrefix: 'Bearer',
    tokenName: TOKEN_NAME,
    globalHeaders: [{'Content-Type': 'application/json'}],
    noJwtError: false,
    noTokenScheme: true,
    tokenGetter: (() => localStorage.getItem(TOKEN_NAME))
  }), http);
}

@NgModule({
  declarations: [
    AppComponent,
    
    AdminComponent,
    HomeComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,

    AppRoutingModule
  ],
  providers: [
    {provide: AuthHttp, useFactory: authHttpServiceFactory, deps: [Http]},
    AuthenticationService,
    AuthGuard,
    AdminAuthGuard,
    LoginService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
