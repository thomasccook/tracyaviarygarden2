import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

import {AuthHttp} from 'angular2-jwt';

//import {TOKEN_AUTH_CLIENTSECRET, TOKEN_AUTH_CLIENTID} from '../services/auth.constant';

import {AuthenticationService} from '../a_shared/security/authentication.service';

//import {TOKEN_NAME} from '../z_shared/security/auth.constant';

@Injectable()
export class UserService {
  constructor(private authHttp: AuthHttp, 
                  private http: Http, 
                  private authenticationService: AuthenticationService) {
  }
  
  getUsers() {
    return this.authHttp.get('/springjwt/users').map(res => res.json());
  }
}
