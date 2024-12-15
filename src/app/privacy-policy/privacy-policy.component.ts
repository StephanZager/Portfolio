import { Component } from '@angular/core';
import { FooterComponent } from '../sharded/footer/footer.component';
import { Location } from '@angular/common';
import { ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from "../sharded/header/header.component";
import { TranslateModule } from '@ngx-translate/core';



@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, HeaderComponent,TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PrivacyPolicyComponent {

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
