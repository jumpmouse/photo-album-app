import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumsResponse, PhotosResponse, UsersResponse } from './core.interfaces';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  private urlObject = {
    users: 'https://jsonplaceholder.typicode.com/users',
    albums: 'https://jsonplaceholder.typicode.com/albums',
    photos: 'https://jsonplaceholder.typicode.com/photos'
  };

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<UsersResponse[]> {
    return this.http.get<UsersResponse[]>(this.urlObject.users);
  }

  public getAlbums(): Observable<AlbumsResponse[]> {
    return this.http.get<AlbumsResponse[]>(this.urlObject.albums);
  }

  public getPhotos(): Observable<PhotosResponse[]> {
    return this.http.get<PhotosResponse[]>(this.urlObject.photos);
  }
}
