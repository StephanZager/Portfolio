import { Component } from '@angular/core';
import { LadingPageComponent } from './lading-page/lading-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LadingPageComponent, AboutMeComponent, MySkillsComponent],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss', './../../styles.scss']
})
export class MainContentComponent {

}
