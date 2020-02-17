import { Component, OnInit, Input, SimpleChanges, ViewChild, ContentChild } from '@angular/core';
import { Album } from 'src/app/types/spotify.models';
import { SelectComponent } from '../select/select.component';

@Component({
  selector: 'vdo-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent {
  @Input() album: Album;
  @ViewChild(SelectComponent , {static:false}) select: SelectComponent

  ngOnChanges(changes: SimpleChanges): void {
    const { album } = changes;
    if (album && this.select) this.select.resetSelection();
  }

}
