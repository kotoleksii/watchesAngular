import {Component, OnInit} from '@angular/core';
import {LocalizationService} from "./shared/internationalization/localization.service";
import {MatSlideToggleChange} from "@angular/material/slide-toggle";

interface ILocal {
  value: string;
  label: string;
  flag: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //language: string = 'en-US';

  public languages: ILocal[] = [
    {value: 'en-US', label: ' EN', flag: 'flag-icon flag-icon-gb'},
    {value: 'uk-UA', label: ' UA', flag: 'flag-icon flag-icon-ua'},
  ];

  // language = this.languages[1].value;

  language = this.getLocal();

  getLocal(): any {
    if ((localStorage.getItem('language') === this.languages[0].value)) {
      return this.languages[0].value;
    }
    return this.languages[1].value;
  }

  get name(): string {
    return this.localizationService.translate('banner.world');
  }

  constructor(private localizationService: LocalizationService) {
  }

  onSelect(lang: string): void {
    localStorage.setItem('language', lang);
    this.localizationService.initService();
    console.log(lang);
  }

}
