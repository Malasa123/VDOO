import { GetArtistAlbumRequest } from '../types/spotify.models';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SptifyService {

  constructor(private http: HttpClient) { }

  private readonly TOKEN: string = 'BQAkAN1wut-q4ZMuACt7Ceufy8x6h7q1PRsErrpRzSK0M55vwOutCTaWXiYSo_9ZK-1Ui1yYqQITiBncfSOsuHsN19QLrRWZnMnJJo6GJQJM0MieSCJqrjwpms92cpBuvhB-h3wV2MrU0dOYUeIbTnUr2YjuXnJx2JSDAgEOIJThMgg68UEbUCFgOsZGBsM9xFA_1UsPccPCiI8dhDnF01hF8Chp8IM0d01CQ-VMpZqiwKT-m5tFSqCWqwoyj2t58bo-myqSs3oL4wb3SxkH';
  private readonly country: string = 'ES';
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
