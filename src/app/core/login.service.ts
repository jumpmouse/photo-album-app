import { Injectable } from '@angular/core';
import { Observable, of as ObservableOf } from 'rxjs';
import { LoginInputData } from './core.interfaces';
import { DataTransformService } from './data-transform.service';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginStatus = false;

  constructor(private storeService: StoreService, private dataTransformService: DataTransformService) {}

  public isUserLoggedIn(): boolean {
    return this.loginStatus;
  }

  public loginUser(userInputData: LoginInputData): Observable<boolean> {
    // TODO: authenticate on server side and return result as Observable
    this.updateLoginStatus(userInputData);
    return ObservableOf(true);
  }

  private updateLoginStatus(userInputData?: LoginInputData): void {
    // TODO: implement resetUserInfo and set login status to false
    if (!userInputData) {
      return;
    }
    const userInfo = this.dataTransformService.transformLoginData(userInputData);
    this.storeService.setUserInfo(userInfo);
    this.loginStatus = true;
  }
}
