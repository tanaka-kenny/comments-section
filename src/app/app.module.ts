import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommentContainerComponent } from './comment-container/comment-container.component';
import { VoteElementComponent } from './vote-element/vote-element.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CommentContainerComponent,
    VoteElementComponent,
    CommentFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
