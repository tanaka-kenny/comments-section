import { Component } from '@angular/core';
import { JsonDataService } from './services/json-data.service';
import { Comment } from './comment-container/comment-container.component'
import { CurrentUser } from './comment-form/comment-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'comments-section';
  comments: Comment[] = [];
  currentUser: CurrentUser = {
    image: {
      png: ''
    },
    username: ''
  };

  constructor(private json: JsonDataService) {
    json.getComments()
      .subscribe(jsonData => {
        this.comments = jsonData.comments;
        this.comments.forEach(comment => comment.showReplyForm = false);
        this.currentUser = jsonData.currentUser;
        
      })
  }

  showReplyForm(comment: Comment) {
    comment.showReplyForm = true;
  }
}
