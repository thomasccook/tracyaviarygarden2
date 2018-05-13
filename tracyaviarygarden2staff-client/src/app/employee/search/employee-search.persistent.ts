// globals.ts
import { Injectable } from '@angular/core';

import { EmployeeSearchRequest } from './employee_search.schema';

@Injectable()
export class EmployeeSearchPersistent {
    request: EmployeeSearchRequest;
}