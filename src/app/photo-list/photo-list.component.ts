import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Albums, GridLayout, ItemTemplateType, Photos } from '../core/core.interfaces';
import { StoreService } from '../core/store.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  public photosData$: Observable<Photos[]>;
  public listItemTemplate: ItemTemplateType = 'photos';
  public layout: GridLayout = 'grid';
  public albumTitle: string;

  constructor(private storeService: StoreService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const albumId = parseInt(params.albumId, 10);
      const selectedAlbum = this.storeService.getAlbum(albumId);
      this.setData(selectedAlbum);
    });
  }

  public toggleLayout(layout: GridLayout): void {
    this.layout = layout;
  }

  public deletePhoto([albumId, photoId]: [number, number]): void {
    this.storeService.removePhoto(albumId, photoId);
  }

  private setData(selectedAlbum: Albums): void {
    this.albumTitle = selectedAlbum.title;
    this.photosData$ = this.storeService.getPhotos(selectedAlbum.id);
  }
}
