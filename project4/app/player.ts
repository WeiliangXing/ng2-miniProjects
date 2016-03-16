import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: "player",
    template: `
        <div [style.background-color]="playerColor" class="player-container">
            <img [hidden]="!value" src="../images/{{value}}.png" [class.right]="playerClass" />
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
                    //next and emit works, difference? not yet documented
                    this.shufflingDone.emit({playerColor: this.playerColor, element:this.value});
                }
            },
            100
        );
    }

};
