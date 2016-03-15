declare var Pusher: any;

import {Component} from 'angular2/core';
import SubscriptionComponent from './subscription';

@Component({
   selector: 'my-app',
   templateUrl: './app/app.html',
   directives: [SubscriptionComponent]
})
export class AppComponent {
  private newSearchTerm: string;
  private pusher;
  private channels: any[];

  constructor() {
    this.pusher = new Pusher('3aea0cf22294fd1a9f08');
    this.channels = [];
  }

  public newSubscription() {
    this.channels.push({term: this.newSearchTerm, active: true});
    this.newSearchTerm = '';
  }

  public clearSearch(channel) {
    this.channels = this.channels.filter((ch) => {
      if (ch.term === channel.term) {
        this.toggleSearch(channel);
      }
      return ch.term !== channel.term;// filter will return terms not equal the removed term
    });
  }
  public toggleSearch(channel) {
    for (let ch of this.channels) {
      if (ch.term === channel.term) {
        ch.active = !ch.active;
        break;
      }
    }
  }
}
