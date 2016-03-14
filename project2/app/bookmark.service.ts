import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Bookmark}       from './bookmark';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class BookmarkService {
  constructor(private http:Http) {

  }

  private _bookmarksUrl = 'http://localhost:3000/api/bookmarks';

  getBookmarks() {
    return this.http.get(this._bookmarksUrl)
                    .map(res => <Bookmark[]> res.json())
                    .catch(this.handleError);
  }

  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
