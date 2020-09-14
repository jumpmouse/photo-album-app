import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoListRoutingModule } from './photo-list-routing.module';
import { PhotoListComponent } from './photo-list.component';


@NgModule({
  declarations: [PhotoListComponent],
  imports: [
    CommonModule,
    PhotoListRoutingModule
  ]
})
export class PhotoListModule { }
