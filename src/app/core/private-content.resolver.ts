import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { DataProviderService } from './data-provider.service';

@Injectable({
  providedIn: 'root'
})
export class PrivateContentResolver implements Resolve<boolean> {
  constructor(private dataProviderService: DataProviderService) {}

  resolve(): Observable<boolean> {
    return this.dataProviderService.fetchAndStorePrivateContent();
  }
}
