import { Component, HostListener } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavBarComponent, CommonModule, MatSlideToggleModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isBurgerMenuOpen = false;
  isClosing = false;

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
    const target = event.target as HTMLElement;
    const isClickInsideMenu = target.closest('.burger-menu') || target.closest('.burger');
    if (!isClickInsideMenu) {
      this.isBurgerMenuOpen = false;
    }
  }
}
