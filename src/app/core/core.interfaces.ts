export interface LoginInputData {
  fullName: string;
  email: string;
}

export interface UserInfo {
  fullName: string;
  lastName: string;
  email: string;
}

export interface UsersResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface AlbumsResponse {
  id: number;
  userId: number;
  title: string;
}

export interface PhotosResponse {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface Albums {
  id: number;
  userId: number;
  userName?: string;
  title: string;
  thumbnailUrl?: string;
}

export interface Photos {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface PhotosObject {
  [key: string]: Photos[];

}
export interface IndexList {
  [key: string]: number;
}

export interface StringList {
  [key: string]: string;
}

export interface NestedIndexList {
  [key: string]: IndexList;
}

export interface TransformedPrivateData {
  albums: Albums[];
  photos: { [key: string]: Photos[] };
}
