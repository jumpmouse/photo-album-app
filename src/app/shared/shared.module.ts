import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './UI/list/list.component';
import { ListItemComponent } from './UI/list-item/list-item.component';
import { ImageModalComponent } from './UI/image-modal/image-modal.component';
import { DeleteDialogComponent } from './UI/delete-dialog/delete-dialog.component';
import { ListSearchComponent } from './UI/list-search/list-search.component';
import { ListSwitchViewComponent } from './UI/list-switch-view/list-switch-view.component';

@NgModule({
  declarations: [
    ListComponent,
    ListItemComponent,
    ImageModalComponent,
    DeleteDialogComponent,
    ListSearchComponent,
    ListSwitchViewComponent
  ],
  imports: [CommonModule],
  exports: [
    ListComponent,
    ListItemComponent,
    ImageModalComponent,
    DeleteDialogComponent,
    ListSearchComponent,
    ListSwitchViewComponent,
    CommonModule,
  ],
})
export class SharedModule {}
