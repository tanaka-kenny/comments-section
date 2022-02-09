import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommentContainerComponent } from './comment-container/comment-container.component';
import { VoteElementComponent } from './vote-element/vote-element.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentContainerComponent,
    VoteElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
