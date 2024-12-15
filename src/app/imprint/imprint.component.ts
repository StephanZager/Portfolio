import { Component } from '@angular/core';
import { FooterComponent } from "../sharded/footer/footer.component";
import { Location } from '@angular/common';
import { HeaderComponent } from "../sharded/header/header.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [FooterComponent, FooterComponent, HeaderComponent, HeaderComponent, TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }

}
