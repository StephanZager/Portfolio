import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavBarComponent, CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isBurgerMenuOpen = false;
  isClosing = false;
  isEnglish = true;

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'de']);
    this.translate.setDefaultLang('en');
  }

  switchLanguage(event: Event) {
    const input = event.target as HTMLInputElement;
    const language = input.checked ? 'de' : 'en';
    this.translate.use(language);
    this.isEnglish = language === 'en';
  }

  toggleBurgerMenu() {
    if (this.isBurgerMenuOpen) {
      this.isClosing = true;
      setTimeout(() => {
        this.isBurgerMenuOpen = false;
        this.isClosing = false;
      }, 500);
    } else {
      this.isBurgerMenuOpen = true;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement | null;
    if (target) {
      const isClickInsideMenu = target.closest('.burger-menu') || target.closest('.burger') || target.closest('.toggle-switch');
      if (!isClickInsideMenu) {
        this.isBurgerMenuOpen = false;
      }
    }
  }
}