import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {LoginService} from '../../login/login.service';

@Injectable()
export class AdminAuthGuard implements CanActivate {
  constructor(private router: Router, private loginService: LoginService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAdmin = this.loginService.isAdminUser();
    if (isAdmin) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
