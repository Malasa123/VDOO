import { GetArtistAlbumRequest } from '../types/spotify.models';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SptifyService {

  constructor(private http: HttpClient) { }

  private readonly TOKEN: string = 'BQD7QjHx5nhAuSyLKBS61ZnIpcm8isR1rzmVV-Pxph91YwD4hZDHlx9XBkamigKpLpbkBxSx1xpUC1TgDq7fi7ocj3YEwHwxXIt4SjjPXOEMZH4sqcpW3_Vzh1Z44yvbOl0KPwQ0RqdD1PoUPI1s8b6qpEHWChtjZUzicdvoEhE8HSbrV-U9PVL1mSS57OhesjUBy0Zv1nBzjSLR_kba5Va6ZR1dfZWxU8rvCQfdYlvLAuUlIJ2hfa_UIv3cEW_IsZ0KTpTpXRz2Yed362Ay';
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
