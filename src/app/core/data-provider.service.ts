import { Injectable } from '@angular/core';
import { combineLatest, Observable, of as ObservableOf } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { DataTransformService } from './data-transform.service';
import { QueryService } from './query.service';
import { StoreService } from './store.service';
import { UsersResponse, AlbumsResponse, PhotosResponse } from './core.interfaces';

type PrivateContent = [UsersResponse[], AlbumsResponse[], PhotosResponse[]];

@Injectable({
  providedIn: 'root',
})
export class DataProviderService {

  private isDataProcessed = false;

  constructor(
    private storeService: StoreService,
    private queryService: QueryService,
    private dataTransformService: DataTransformService
  ) {}

  public getPrivateContent(): Observable<boolean> {
    if (this.isDataProcessed) {
      return ObservableOf(true);
    }
    return combineLatest([
      this.queryService.getUsers(),
      this.queryService.getAlbums(),
      this.queryService.getPhotos(),
    ]).pipe(
      map(
        (privateContent: PrivateContent) => {
          const {
            albums,
            photos,
          } = this.dataTransformService.transformPrivateData(...privateContent);
          this.storeService.setAlbums(albums);
          this.storeService.setPhotos(photos);
        }
      ),
      switchMap(() => ObservableOf(true))
    );
  }
}
