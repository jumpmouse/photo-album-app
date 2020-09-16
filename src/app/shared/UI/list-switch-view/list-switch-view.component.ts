import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GridLayout } from 'src/app/core/core.interfaces';

@Component({
  selector: 'app-list-switch-view',
  templateUrl: './list-switch-view.component.html',
  styleUrls: ['./list-switch-view.component.scss']
})
export class ListSwitchViewComponent implements OnInit {
  @Output() toggleLayout = new EventEmitter<GridLayout>();
  public layout: GridLayout = 'grid';

  constructor() {}

  ngOnInit(): void {}

  public emitLayoutChange(event: GridLayout): void {
    this.layout = event;
    this.toggleLayout.emit(event);
  }
}
