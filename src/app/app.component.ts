import { Component, OnDestroy } from '@angular/core';
import { SptifyService } from './services/sptify.service';
import { Subscription } from 'rxjs';
import { Album } from './types/spotify.models';

@Component({
  selector: 'vdo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  private _subscriptions: Subscription = new Subscription();
  selected: Album;
  albums: Array<Album> = [];
  isErrorOccured: boolean = false;
  error: { error: { status: string, message: string } };
  private readonly SELECTED_STORAGE_KEY: string = 'album_id';

  getThumbnail = (album: Album) => album.images[2].url;
  trackAlbumBy = (index: number, album: Album) => album.id;

  constructor(private sptService: SptifyService) {
    let sub =
      this.sptService.getTopAlbums()
        .subscribe(this.setAlbums, this.errorHandler)
    this._subscriptions.add(sub);
  }

  private get setAlbums() {
    return albums => {
      this.albums = albums;
      let selectedAlbumId = this.getSelectedAlbumId();
      this.selected = selectedAlbumId ? this.albums.find(a => a.id === selectedAlbumId) : null;
    };
  }

  private get errorHandler() {
    return ({ error }) => {
      this.isErrorOccured = true;
      this.error = error;
    };
  }

  setToLocaleStorage(album: Album): void {
    if (album) localStorage.setItem(this.SELECTED_STORAGE_KEY, album.id);
    else localStorage.removeItem(this.SELECTED_STORAGE_KEY);
  }

  getSelectedAlbumId(): string {
    return localStorage.getItem(this.SELECTED_STORAGE_KEY);
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }
}
