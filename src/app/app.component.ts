import { Component } from '@angular/core';
import { JsonDataService } from './services/json-data.service';
import { Comment } from './comment-container/comment-container.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'comments-section';
  comments: Comment[] = [];

  constructor(private json: JsonDataService) {
    json.getComments()
      .subscribe(jsonData => {
        this.comments = jsonData.comments;
        console.log(this.comments)
      })
  }
}
