export interface GetArtistAlbumRequest {
  href: string;
  items: Album[];
  limit: number;
  next: string;
  offset: number;
  previous?: any;
  total: number;
}

export interface Album {
  album_group: string;
  album_type: string;
  artists: Artist[];
  external_urls: Externalurls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
  available_markets:Array<string>;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

export interface Artist {
  external_urls: Externalurls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface Externalurls {
  spotify: string;
}