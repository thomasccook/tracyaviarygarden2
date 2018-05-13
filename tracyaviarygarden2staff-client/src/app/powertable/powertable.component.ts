import {Component, OnInit} from '@angular/core';

import {AppDataService} from '../services/app-data.service';

@Component({
  selector: 'app-powertable',
  templateUrl: './powertable.component.html',
  styleUrls: ['./powertable.component.css']
})
export class PowertableComponent implements OnInit {
  city$;

  constructor(private appDataService: AppDataService) {
  }

  ngOnInit() {
    this.city$ = this.appDataService.getCities();
  }
}
