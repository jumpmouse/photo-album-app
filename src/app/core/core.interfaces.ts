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
  userName: string;
  title: string;
  thumbnailUrl: string;
}

export interface Photos {
  id: number;
  userId: number;
  albumId: number;
  title: string;
  thumbnailUrl: string;
  url: string;
}
