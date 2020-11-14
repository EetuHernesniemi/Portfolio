import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  web_page_title = 'portfolio';
  web_page_owners_genetive = '\'s';
  web_page_owner_first_name = 'eetu';
  web_page_owner_last_name = 'hernesniemi';
  web_page_owner_full_name = this.web_page_owner_first_name + " " + this.web_page_owner_last_name;
  public constructor(private titleService: Title) {
    const title: string = this.web_page_title.charAt(0).toUpperCase() + this.web_page_title.slice(1) + " | "
      + this.web_page_owner_first_name.charAt(0).toUpperCase() + this.web_page_owner_first_name.slice(1)
      + " " + this.web_page_owner_last_name.charAt(0).toUpperCase() + this.web_page_owner_last_name.slice(1);
    this.setTitle(title);
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
