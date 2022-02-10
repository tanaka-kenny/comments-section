import { Component } from '@angular/core';
import { JsonDataService } from './services/json-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'comments-section';

  constructor(private json: JsonDataService) {
    json.getComments()
      .subscribe(x => console.log(x))
  }
}
