import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-element',
  templateUrl: './vote-element.component.html',
  styleUrls: ['./vote-element.component.scss']
})
export class VoteElementComponent implements OnInit {
  @Input() voteCount: number;

  constructor() { 
    this.voteCount = 0;
  }

  ngOnInit(): void {
   
  }

}
