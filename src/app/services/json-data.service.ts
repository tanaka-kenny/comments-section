import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../comment-container/comment-container.component';

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {
  private _jsonURL = '../../assets/data.json';

  constructor(private http: HttpClient) { }

  getComments(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  createNew(comment: Comment) {
    return this.http.post(this._jsonURL, comment);
  }
}
