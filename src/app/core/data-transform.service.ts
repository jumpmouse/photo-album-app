import { Injectable } from '@angular/core';
import { LoginInputData, UserInfo } from './core.interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataTransformService {
  constructor() {}

  public transformUserData(inputData: LoginInputData): UserInfo {
    const lastName = inputData.fullName.split(' ').pop();
    return { ...inputData, lastName };
  }
}
