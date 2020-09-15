import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Albums, Photos, UserInfo, NestedIndexList, PhotosObject } from './core.interfaces';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private userInfo$: BehaviorSubject<UserInfo> = new BehaviorSubject(null);
  private albums$: BehaviorSubject<Albums[]> = new BehaviorSubject(null);
  private photos$: BehaviorSubject<PhotosObject> = new BehaviorSubject(null);
  private photosIndexList: NestedIndexList;

  constructor() {}

  public get userInfo(): Observable<UserInfo> {
    return this.userInfo$.asObservable();
  }

  public setUserInfo(userInfo: UserInfo): boolean {
    this.userInfo$.next(userInfo);
    return true;
  }

  public get albums(): Observable<Albums[]> {
    return this.albums$.asObservable();
  }

  public setAlbums(albums: Albums[]): boolean {
    this.albums$.next(albums);
    return true;
  }

  public getPhotos(albumId): Observable<Photos[]> {
    return this.photos$
      .asObservable()
      .pipe(map((photosObject: PhotosObject) => photosObject[albumId]));
  }

  public setPhotos(photos: PhotosObject): boolean {
    this.photos$.next(photos);
    return true;
  }

  public removePhoto(albumId: number, photoId: number): boolean {
    const newPhotosObject = this.photos$.value;
    const itemIndex: number = newPhotosObject[albumId].findIndex(photo => photo.id === photoId);
    newPhotosObject[albumId].splice(itemIndex, 1);
    this.setPhotos(newPhotosObject);
    return true;
  }
}
