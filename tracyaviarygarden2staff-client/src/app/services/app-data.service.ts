import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

import {AuthHttp} from 'angular2-jwt';

import {TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME} from '../services/auth.constant';

import {AuthenticationService} from '../services/authentication.service';

import {TOKEN_NAME} from './auth.constant';

@Injectable()
export class AppDataService {
  constructor(private authHttp: AuthHttp, 
                  private http: Http, 
                  private authenticationService: AuthenticationService) {
  }

  getCities() {
    return this.authHttp.get('/springjwt/cities').map(res => res.json());
  }
  
  getUsers() {
    return this.authHttp.get('/springjwt/users').map(res => res.json());
  }
}
