import { NgModule } from '@angular/core';

import { PhotoListRoutingModule } from './photo-list-routing.module';
import { PhotoListComponent } from './photo-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PhotoListComponent],
  imports: [PhotoListRoutingModule, SharedModule]
})
export class PhotoListModule {}
