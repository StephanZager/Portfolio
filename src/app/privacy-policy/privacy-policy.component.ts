import { Component } from '@angular/core';
import { FooterComponent } from '../sharded/footer/footer.component';
import { Location } from '@angular/common';



@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
