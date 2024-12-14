import { Component, NgModule, OnInit } from '@angular/core';
import { IconBarComponent } from '../../sharded/icon-bar/icon-bar.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';
import { LanguageService } from './../../language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lading-page',
  standalone: true,
  imports: [IconBarComponent,TranslateModule, CommonModule],
  templateUrl: './lading-page.component.html',
  styleUrl: './lading-page.component.scss'
})
export class LadingPageComponent implements OnInit {
  currentLanguage: string | undefined;

  constructor(private translate: TranslateService, private languageService: LanguageService) {
  }

  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(language => {
      this.currentLanguage = language;
    });
  }
}