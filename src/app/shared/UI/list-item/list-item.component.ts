import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { GridLayout, ItemTemplateType } from 'src/app/core/core.interfaces';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() item: any;
  @Input() layout: GridLayout = 'list';
  @Input() template: ItemTemplateType = 'albums';
  @Output() deleteEvent = new EventEmitter<[number, number]>();

  public chosenTemplate: TemplateRef<any>;

  public emitDelete(item): void {
    this.deleteEvent.emit([item.albumId, item.id]);
  }
}
