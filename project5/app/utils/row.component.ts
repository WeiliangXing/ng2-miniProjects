import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {TileComponent} from './tile.component';

@Component({
  selector: 'row',
  template: `
  <div class="row">
      <tile *ngFor="#tile of row" [tile]="tile" (click)="handleTileClick(tile)"></tile>
    </div>
  `,
  directives: [TileComponent]
})
export class RowComponent {
  @Input() row: any;
  @Output() tileClick: EventEmitter<any> = new EventEmitter();

  handleTileClick(tile){
    console.log(Object.getOwnPropertyNames(tile));
    console.log(typeof tile);

    this.tileClick.next(tile);
  }
}
