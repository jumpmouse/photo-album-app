import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Albums, Photos, UserInfo } from './core.interfaces';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private userInfo$: BehaviorSubject<UserInfo> = new BehaviorSubject(null);
  private albums$: BehaviorSubject<Albums> = new BehaviorSubject(null);
  private photos$: BehaviorSubject<Photos> = new BehaviorSubject(null);

  constructor() {}

  public get userInfo(): Observable<UserInfo> {
    return this.userInfo$.asObservable();
  }

  public setUserInfo(userInfo: UserInfo): boolean {
    this.userInfo$.next(userInfo);
    return true;
  }

  public get albums(): Observable<Albums> {
    return this.albums$.asObservable();
  }

  public setAlbums(albums: Albums): boolean {
    this.albums$.next(albums);
    return true;
  }

  public get photos(): Observable<Photos> {
    return this.photos$.asObservable();
  }

  public setPhotos(photos: Photos): boolean {
    this.photos$.next(photos);
    return true;
  }
}
