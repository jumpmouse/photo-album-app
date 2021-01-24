import { Component, Input, TemplateRef } from '@angular/core';
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
  public chosenTemplate: TemplateRef<any>;
}
