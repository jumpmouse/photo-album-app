import { Injectable } from '@angular/core';
import {
  AlbumsResponse,
  LoginInputData,
  PhotosResponse,
  UserInfo,
  UsersResponse,
  TransformedPrivateData,
  Photos,
  Albums,
  StringList
} from './core.interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataTransformService {
  constructor() {}

  public transformUserData(inputData: LoginInputData): UserInfo {
    const lastName = inputData.fullName.split(' ').pop();
    return { ...inputData, lastName };
  }

  public transformPrivateData(
    usersResponse: UsersResponse[],
    albumsResponse: AlbumsResponse[],
    photosResponse: PhotosResponse[]
  ): TransformedPrivateData {
    const usersNameList: StringList = this.mapUsers(usersResponse);
    return this.mapAlbumsAndPhotos(
      albumsResponse,
      photosResponse,
      usersNameList
    );
  }

  private mapUsers(usersResponse: UsersResponse[]): StringList {
    // tslint:disable-next-line: prefer-const
    let users = {};
    for (const user of usersResponse) {
      users[user.id] = user.name;
    }
    return users;
  }

  private mapAlbumsAndPhotos(
    albumsResponse: AlbumsResponse[],
    photosResponse: PhotosResponse[],
    usersNameList: StringList
  ): TransformedPrivateData {
    const transformedData = {
      albums: [],
      photos: {}
    };
    const allPhotos = [...photosResponse];

    for (const album of albumsResponse) {
      // tslint:disable-next-line: prefer-const
      let singleAlbum: Albums = { ...album };
      singleAlbum.userName = usersNameList[singleAlbum.userId];

      // tslint:disable-next-line: prefer-const
      const albumPhotos: Photos[] = allPhotos.filter(
        (photoObject: PhotosResponse, i: number) => {
          if (photoObject.albumId !== singleAlbum.id) {
            allPhotos.splice(i, 1);
            return false;
          }
          return true;
        }
      );
      transformedData.photos[singleAlbum.id] = albumPhotos;
      singleAlbum.thumbnailUrl = albumPhotos[0].thumbnailUrl;
      transformedData.albums.push(singleAlbum);
    }
    return transformedData;
  }
}
