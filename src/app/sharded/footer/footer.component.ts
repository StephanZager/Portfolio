import { Component } from '@angular/core';
import { IconBarComponent } from '../icon-bar/icon-bar.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [IconBarComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
