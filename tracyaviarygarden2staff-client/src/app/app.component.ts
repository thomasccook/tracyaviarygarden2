import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';


import {LoginService} from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tracy Aviary Garden';

  constructor(private router: Router, private loginService: LoginService, private cdRef:ChangeDetectorRef) {

  }

  ngAfterViewChecked() { 
    // Avoid the error: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked
    this.cdRef.detectChanges();
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/']);
  }

  get isAdminUser() {
    return this.loginService.isAdminUser();
  }

  get isUser() {
    return this.loginService.isUser();
  }
}
