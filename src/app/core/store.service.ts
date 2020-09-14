import { Injectable } from '@angular/core';
import { LoginInputData, UserInfo } from './core.interfaces';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private userInfo: UserInfo;

  constructor() {}

  public getUserInfo(): UserInfo {
    return this.userInfo;
  }

  public setUserInfo(inputData: LoginInputData): boolean {
    const lastName = inputData.fullName.split(' ').pop();
    this.userInfo = { ...inputData, lastName};
    return true;
  }
}
