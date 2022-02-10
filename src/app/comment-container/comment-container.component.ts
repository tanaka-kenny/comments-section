import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-container',
  templateUrl: './comment-container.component.html',
  styleUrls: ['./comment-container.component.scss']
})
export class CommentContainerComponent implements OnInit {
  @Input() comment: Comment | any;
  @Input() isUser = false;

  constructor() { 
  }

  ngOnInit(): void {
  }

}

export interface Comment {
  content: string;
  createdAt: string;
  id: number | string;
  replies: any[];
  score: number;
  user: {
    image: {
      png: string;
      webp: string;
    }
    username: string;
  }
}