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
}
