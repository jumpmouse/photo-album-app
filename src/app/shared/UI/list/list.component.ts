import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() deleteEvent = new EventEmitter<[number, number]>();

  public layoutOptions = {
    grid: {
      fxLayout: 'row wrap',
      fxLayoutGap: '28px grid',
      fxFlex: '33%',
      'fxFlex.xs': '100%',
      'fxFlex.sm': '50%'
    },
    list: {
      fxLayout: 'row wrap',
      fxLayoutGap: '28px grid',
      fxFlex: '100%',
      'fxFlex.xs': '100%',
      'fxFlex.sm': '100%'
    }
  };

  public deleteItem(params: [number, number]): void {
    this.deleteEvent.emit(params);
  }
}
