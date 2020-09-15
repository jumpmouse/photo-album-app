import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { Albums, UserInfo } from '../core/core.interfaces';
import { StoreService } from '../core/store.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
  public albumsData$: Observable<Albums[]>;
  public userInfo$: Observable<UserInfo>;

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.userInfo$ = this.storeService.userInfo;
    this.albumsData$ = this.storeService.albums;
  }
}
