import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from '../comment-container/comment-container.component';
import { JsonDataService } from '../services/json-data.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
  @Input() currentUser: CurrentUser;
  @Input() btnText: string = '';
  @Input() isReplyForm  = false;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private jsonService: JsonDataService) {
    this.currentUser = {
      image: {
        png: ''
      },
      username: ''
    };

    this.form = formBuilder.group({
      commentText: formBuilder.control('', Validators.required)
    })
   }

  ngOnInit(): void {
  }

  postComment() {
    const comment: Comment = {
      content: this.form.get('commentText')?.value,
      createdAt: 'Today',
      replies: [],
      score: 0,
      user: {
        image: {
          png: this.currentUser.image.png,
          webp: ''
        },
        username: this.currentUser.username
      }
    };

    console.log(comment);
  }

}

export interface CurrentUser {
  image: {
    png: string;
    webp?: string;
  },
  username: string;
}
