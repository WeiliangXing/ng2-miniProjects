import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: "player",
    template: `
        <div [style.background-color]="playerColor" class="player-container">
            <img [hidden]="!value" src="http://demos.angular-craft.com/{{value}}.png" [class.right]="playerClass" />
        </div>
    `
})
export class PlayerComponent{
    public value = "";
    @Input() playerColor:string;
    @Input() playerClass:string;
    @Output() shufflingDone: EventEmitter<any> = new EventEmitter();


    startShuffling() {
        var elements = ["rock", "paper", "scissors"];
        var shufflingCounter = 0;
        var SHUFFLING_MAX = 30;
        var interval = setInterval(
            () => {
                if (shufflingCounter < SHUFFLING_MAX) {
                    var randomIndex = Math.floor(Math.random() * 3);
                    this.value = elements[randomIndex];
                    shufflingCounter++;
                }
                else {
                    clearInterval(interval);//stop time
                    this.shufflingDone.next({playerColor: this.playerColor, element:this.value});
                }
            },
            100
        );
    }

};

@Component({
  selector: 'my-app',
  template: `
    <h1>Angular 2 Game <br>rock-paper-scissors</h1>
    <player [playerColor]="'BLUE'" (shufflingDone)="onElementSelected($event)" #playerone></player>
    <player [playerClass]="'right'" [playerColor]="'RED'" (shufflingDone)="onElementSelected($event)" #playertwo></player>
    <div style="clear:both"></div>
    <br>
    <button (click)="doStartGame(playerone, playertwo)">Start game</button>
    <p>{{gameResult}}</p>
  `,
  directives: [PlayerComponent]
})
export class App {
    public gameResult = "";
    private shufflingResults = new Array();

    doStartGame(playerOne, playerTwo) {
        this.shufflingResults = new Array();
        this.gameResult = "";
        playerOne.startShuffling();
        playerTwo.startShuffling();
    }

    onElementSelected(playerResult) {
        this.shufflingResults.push(playerResult);
        if (this.shufflingResults.length == 2) {
            this.gameResult = this.establishTheWinner();
        }
    }

    establishTheWinner() {
        if (this.shufflingResults[0].element == this.shufflingResults[1].element) {
            return "it's a draw !";
        }
        if(((this.shufflingResults[0].element == "rock") && (this.shufflingResults[1].element == "scissors"))
            || ((this.shufflingResults[0].element == "scissors") && (this.shufflingResults[1].element == "paper"))
            || ((this.shufflingResults[0].element == "paper") && (this.shufflingResults[1].element == "rock"))) {
            return this.shufflingResults[0].playerColor + " wins !!!";
        }
        return this.shufflingResults[1].playerColor + " wins !!!";
    }
}
