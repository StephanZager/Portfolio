import { Component, OnInit, Renderer2 } from '@angular/core';
import { LadingPageComponent } from './lading-page/lading-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from '../sharded/footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from "../sharded/header/header.component";
import { NavBarComponent } from '../sharded/header/nav-bar/nav-bar.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LadingPageComponent, AboutMeComponent, MySkillsComponent, PortfolioComponent, FooterComponent, ContactComponent, HeaderComponent, NavBarComponent],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss', './../../styles.scss']
})
export class MainContentComponent implements OnInit {

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.setScrollMarginTopForChrome();
  }

  setScrollMarginTopForChrome(): void {
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if (isChrome) {
      this.renderer.setStyle(document.documentElement, '--scroll-margin-top', '140px');
    } else {
      this.renderer.setStyle(document.documentElement, '--scroll-margin-top', '0px');
    }
  }
}
