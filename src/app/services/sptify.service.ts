import { GetArtistAlbumRequest } from '../types/spotify.models';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SptifyService {

  constructor(private http: HttpClient) { }

  private readonly TOKEN: string = 'BQCTW-oMAcU6tNc9HVbYUUtuoSOYibSJHeiAAbGm3VqEdN5bogKQU9FY9NnR9a29fIRk-4QrDSV16lEM7N-SC_l_8x_J2N6F3qZdBjXFifC1nCTGUcpSHd8iuGMhB7f3u1O3pl-x4x1f3vIlT3R4KnIKgYMKtGJWLIZqJ8R15paEKf0MeYD41QcABWQH0NWxheLbqH3gJ6N62Hbi6ZHe7Ofh80eJoP3y30bleuxxtCZHpkDCaPz9tNqzOEEob_l-xiHS8f6qVpe5nhfmDbBBnMR9mP7m-w';
  private readonly SPOTIFY_URL: string = 'https://api.spotify.com/v1/artists/';
  private get headers(): HttpHeaders {
    let headers = new HttpHeaders()
      .set('Authorization', `Bearer ${this.TOKEN}`)
      .set('Content-Type', 'application/json');
    return headers;
  }
  getTopAlbums(artistID: string = '0du5cEVh5yTK9QJze8zA0C' , limit:number = 50) {
    return this.http.get(`${this.SPOTIFY_URL}${artistID}/albums?limit=${limit}`, {
      headers: this.headers
    }).pipe(
      map((res: GetArtistAlbumRequest) => res.items)
    );
  }
  
}
