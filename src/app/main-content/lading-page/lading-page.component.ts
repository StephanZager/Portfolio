import { Component } from '@angular/core';
import { IconBarComponent } from '../../sharded/icon-bar/icon-bar.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-lading-page',
  standalone: true,
  imports: [IconBarComponent,TranslateModule],
  templateUrl: './lading-page.component.html',
  styleUrl: './lading-page.component.scss'
})
export class LadingPageComponent {

}
