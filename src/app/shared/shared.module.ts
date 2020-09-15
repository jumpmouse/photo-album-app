import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './UI/list/list.component';
import { ListItemComponent } from './UI/list-item/list-item.component';
import { ImageModalComponent } from './UI/image-modal/image-modal.component';
import { DeleteDialogComponent } from './UI/delete-dialog/delete-dialog.component';
import { ListSearchComponent } from './UI/list-search/list-search.component';
import { ListSwitchViewComponent } from './UI/list-switch-view/list-switch-view.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListComponent,
    ListItemComponent,
    ImageModalComponent,
    DeleteDialogComponent,
    ListSearchComponent,
    ListSwitchViewComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatInputModule],
  exports: [
    ListComponent,
    ListItemComponent,
    ImageModalComponent,
    DeleteDialogComponent,
    ListSearchComponent,
    ListSwitchViewComponent,
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class SharedModule {}
