import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class UpdatePersonService {
  subject = new Subject<any>();
  constructor() { }

  updateDetails(data) {
    return this.subject.next(data);
  }
}