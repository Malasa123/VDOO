import { GetArtistAlbumRequest } from '../types/spotify.models';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SptifyService {

  constructor(private http: HttpClient) { }

  private readonly TOKEN: string = 'BQBesXXTlx9PsfTFNzwsbJlNtXrMFRgxoyKaz6xmd2Wyw0bi-eKji4GFRJaM0_DGMssn85kWad_9a3-Q_YmNS-11g0349VNGAvUIzIoOJ3klKrGj--AZyhinxJ-rZdfvuL2coQUJPfyz4jiNV5olcIBqGN0YvstMkBem-7zWgbthPh1sMF4Q17rIN8V1h2IyLoxUnv8CysQitz5HHjUMrodeQyq2djlHlgpVBuhbg4hgnE9TPtQbp28k_hBJk4WaHb_QBwnSwNahMHS-oKG4';
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
