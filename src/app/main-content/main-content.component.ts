import { Component } from '@angular/core';
import { LadingPageComponent } from './lading-page/lading-page.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LadingPageComponent],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss', './../../styles.scss']
})
export class MainContentComponent {

}
