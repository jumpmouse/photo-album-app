import { Injectable } from '@angular/core';
import { Observable, of as ObservableOf } from 'rxjs';
import { AlbumsResponse, PhotosResponse, UsersResponse } from './core.interfaces';

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  constructor() {}

  public getUsers(): Observable<UsersResponse[]> {
    return ObservableOf(null);
  }
  public getAlbums(): Observable<AlbumsResponse[]> {
    return ObservableOf(null);
  }
  public getPhotos(): Observable<PhotosResponse[]> {
    return ObservableOf(null);
  }
}
