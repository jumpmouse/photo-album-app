import { NgModule } from '@angular/core';

import { AlbumListRoutingModule } from './album-list-routing.module';
import { AlbumListComponent } from './album-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AlbumListComponent],
  imports: [AlbumListRoutingModule, SharedModule]
})
export class AlbumListModule {}
