import { Injectable } from '@angular/core';
import { Observable, of as ObservableOf } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataProviderService {
  constructor() {}

  public getPrivateContent(): Observable<boolean> {
    return ObservableOf(true);
  }
}
