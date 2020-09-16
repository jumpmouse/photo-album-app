import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Albums, GridLayout, ItemTemplateType, UserInfo } from '../core/core.interfaces';
import { StoreService } from '../core/store.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
  public albumsData$: Observable<Albums[]>;
  public userInfo$: Observable<UserInfo>;
  public listItemTemplate: ItemTemplateType = 'albums';
  public layout: GridLayout = 'grid';

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.setData();
  }

  setData(): void {
    this.userInfo$ = this.storeService.userInfo;
    this.albumsData$ = this.storeService.albums;
  }
}
