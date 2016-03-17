import {Component} from 'angular2/core';
import {tryMe} from './utils/game';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello world</h1>
    <ul class="actions">
      <li><a (click)="startNewGame()">New game</a></li>

    </ul>
    `
})
export class App {
    public game;
    constructor(){

    }
    onInit(){
      this.startNewGame();
    }
    startNewGame(){
      // this.game = createGame({cols: 16, rows: 16, mines: 48});
      tryMe();
    }
}
