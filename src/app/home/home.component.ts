import {Component, Input, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {LocalizationService} from "../shared/internationalization/localization.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() name: string | any;

  // get names(): string {
  //   return this.localizationService.translate('banner.world');
  // }

  constructor(private localizationService: LocalizationService) {
  }

  ngOnInit(): void {
  }

}
