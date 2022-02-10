import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
  @Input() currentUser: CurrentUser;

  constructor() {
    this.currentUser = {
      image: {
        png: ''
      },
      username: ''
    }
   }

  ngOnInit(): void {
  }

}

export interface CurrentUser {
  image: {
    png: string;
    webp?: string;
  },
  username: string;
}
