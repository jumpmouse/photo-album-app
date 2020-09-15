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
  providedIn: 'root'
})
export class DataTransformService {
  constructor() {}

  public transformLoginData(inputData: LoginInputData): UserInfo {
    const lastName = inputData.fullName.split(' ').pop();
    return { ...inputData, lastName };
  }

  public transformPrivateData(
    usersResponse: UsersResponse[],
    albumsResponse: AlbumsResponse[],
    photosResponse: PhotosResponse[]
  ): TransformedPrivateData {
    const usersNameList: StringList = this.mapUsers(usersResponse);
    return this.mapAlbumsAndPhotos(albumsResponse, photosResponse, usersNameList);
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
    for (const photo of [...photosResponse]) {
      const albumId = photo.albumId;
      // if album already added, just push the photo
      if (transformedData.photos[albumId]) {
        transformedData.photos[albumId].push(photo);
        continue;
      }
      // add album
      const newAlbum: Albums = {
        ...albumsResponse.find((album) => album.id === albumId)
      };
      newAlbum.userName = usersNameList[newAlbum.userId];
      newAlbum.thumbnailUrl = photo.thumbnailUrl;
      transformedData.albums.push(newAlbum);
      // add photo
      transformedData.photos[albumId] = [photo];
    }
    return transformedData;
  }
}
