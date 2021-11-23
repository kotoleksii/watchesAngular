import {Component, Input, OnInit} from '@angular/core';
import {LocalizationService} from "../shared/internationalization/localization.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() name: string | any;
  gridColumns = 2;

  randText = "Rolex    Tudor    Patek Philippe    Omega    IWC    Longines" +
    "    Edox    Baume&Mercier    Tissot    Tag Heuer    Oris Corum    Audemars Piguer    Daniel    Roth" +
    "Panerai    Franck Muller    Parmigiani    Bell & Ross    Girard Perregaux    Blancpain    Glashutte" +
    "    Piaget    Boucheron    Graham    Roger Dubuis    Bovet    Harry Winston    Breguet" +
    "   HUBLOT    Breitling    Hysek    Ulysse Nardin    Cartier    Vacheron Constantin     Chanel    " +
    "   Jaeger LeCoultre    ZENITH    Chopard    Jaquet Droz    Chronoswiss";

  // get names(): string {
  //   return this.localizationService.translate('banner.world');
  // }

  constructor(private localizationService: LocalizationService) {
  }

  ngOnInit(): void {
  }

}
