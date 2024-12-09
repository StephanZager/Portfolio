import { Component } from '@angular/core';
import { FooterComponent } from '../sharded/footer/footer.component';
import { Location } from '@angular/common';
import { ViewEncapsulation } from '@angular/core';



@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [FooterComponent],
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
