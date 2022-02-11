import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comment-container',
  templateUrl: './comment-container.component.html',
  styleUrls: ['./comment-container.component.scss']
})
export class CommentContainerComponent implements OnInit {
  @Input() comment: Comment | any;
  @Input() isUser = false;
  @Output() reply: EventEmitter<boolean>;

  constructor() { 
    this.reply = new EventEmitter<boolean>();
  }

  ngOnInit(): void {
  }

  showReplyForm() {
    this.reply.emit(true);
  }

}

export interface Comment {
  content: string;
  createdAt: string;
  id: number | string;
  replies: Reply[];
  score: number;
  user: {
    image: {
      png: string;
      webp: string;
    }
    username: string;
  },
  showReplyForm: boolean;
}

interface Reply {
  id: number | string;
  content: string;
  score: number;
  replyingTo: string;
  showReplyForm: boolean;
  user: {
    image: {
      png: string;
      webp?: string;
    },
    username: string;
  }
}