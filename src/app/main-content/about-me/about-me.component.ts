import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [NgClass, CommonModule, TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  mindsets = [
    {
      imgSrc: './../../../assets/img/icons/location.png',
      text: 'LOCATION'
    },
    {
      imgSrc: './../../../assets/img/icons/lamp.png',
      text: 'CHALLENGE'
    },
    {
      imgSrc: './../../../assets/img/icons/puzzle.png',
      text: 'MISSION'
    }
  ];
}
