import {Component} from 'angular2/core';
import {BookmarkService} from './bookmark.service';
import {Bookmark} from './bookmark';

@Component({
   selector: 'my-app',
   template: `
   <h3>My Bookmarks:</h3>
   <ul>
     <li *ngFor="#bookmark of bookmarks">
       <strong>{{ bookmark.title }}</strong> - (<a href="{{bookmark.url}}">{{bookmark.url}}</a>)
     </li>
   </ul>
   `,
   providers: [BookmarkService]
})
export class AppComponent {
  bookmarks: Bookmark[];
  errorMessage: string;

  constructor(private _bookmarkService: BookmarkService){
  }

  ngOnInit() {
    this.getBookmarks();
  }

  getBookmarks() {
    this._bookmarkService.getBookmarks()
                          .subscribe(
                            bookmarks => this.bookmarks = bookmarks,
                            error => this.errorMessage = <any> error
                          );
  }
}
