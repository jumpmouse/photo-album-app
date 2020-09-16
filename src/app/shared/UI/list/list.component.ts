import { Component, Input } from '@angular/core';
import { GridLayout, ItemTemplateType } from 'src/app/core/core.interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() data: any[];
  @Input() layout: GridLayout;
  @Input() template: ItemTemplateType;
}
