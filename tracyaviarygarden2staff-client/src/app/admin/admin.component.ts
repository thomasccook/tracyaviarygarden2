import {Component, OnInit} from '@angular/core';

import {AdminService} from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users$;

  constructor(private adminService: AdminService) {
  }

  ngOnInit() {
    this.users$ = this.adminService.getUsers();
  }
}
