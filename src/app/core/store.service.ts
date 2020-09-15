import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginInputData, UserInfo } from './core.interfaces';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private userInfo$: BehaviorSubject<UserInfo> = new BehaviorSubject(null);

  constructor() {}

  public get userInfo(): Observable<UserInfo> {
    return this.userInfo$.asObservable();
  }

  public setUserInfo(inputData: LoginInputData): boolean {
    const lastName = inputData.fullName.split(' ').pop();
    const newUserInfo = { ...inputData, lastName};
    this.userInfo$.next(newUserInfo);
    return true;
  }
}
