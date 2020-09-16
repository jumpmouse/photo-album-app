import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

import { ListComponent } from './UI/list/list.component';
import { ListItemComponent } from './UI/list-item/list-item.component';
import { ImageModalComponent } from './UI/image-modal/image-modal.component';
import { DeleteDialogComponent } from './UI/delete-dialog/delete-dialog.component';
import { ListSearchComponent } from './UI/list-search/list-search.component';
import { ListSwitchViewComponent } from './UI/list-switch-view/list-switch-view.component';
import { SpinnerComponent } from './UI/spinner/spinner.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    ListItemComponent,
    ListComponent,
    ImageModalComponent,
    DeleteDialogComponent,
    ListSearchComponent,
    ListSwitchViewComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    RouterModule
  ],
  exports: [
    ListItemComponent,
    ListComponent,
    ImageModalComponent,
    DeleteDialogComponent,
    ListSearchComponent,
    ListSwitchViewComponent,
    SpinnerComponent,
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatIconModule
  ]
})
export class SharedModule {}
