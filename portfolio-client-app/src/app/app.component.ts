import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  web_page_title = 'portfolio';
  web_page_owners_genetive = 'eetu\'s';
  web_page_owner_full_name = 'eetu hernesniemi';
  public constructor(private titleService: Title) {
    this.setTitle(this.web_page_title + " | " + this.web_page_owner_full_name)
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
