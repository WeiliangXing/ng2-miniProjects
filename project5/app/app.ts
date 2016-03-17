import {Component} from 'angular2/core';
import {MinesweeperComponent} from './utils/minesweeper.component';
import {createGame} from './utils/game';

@Component({
  selector: 'my-app',
  template: `
    <minesweeper [game]="game" #minesweeper></minesweeper>
    <ul class="actions">
      <li><a (click)="startNewGame()">New game</a></li>
      <li><a (click)="minesweeper.undo()" [hidden]="!minesweeper.canUndo()">Undo</a></li>
    </ul>
    `,
    directives:[MinesweeperComponent]
})
export class App {
    public game;
    constructor(){

    }
    ngOnInit(){
      this.startNewGame();
    }
    startNewGame(){
      this.game = createGame({cols: 16, rows: 16, mines: 48});
    }
}
