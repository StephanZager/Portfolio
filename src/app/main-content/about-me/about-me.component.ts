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
      text: 'Flexible in terms of working environments, I can work effectively both on-site in Munich and remotely.'
    },
    {
      imgSrc: './../../../assets/img/icons/lamp.png',
      text: 'I am open-minded and always looking for personal challenges to constantly improve my knowledge and skills.'
    },
    {
      imgSrc: './../../../assets/img/icons/puzzle.png',
      text: 'In my profession, programming isn\'t just about writing code; it\'s a creative form of problem-solving. I take pride in my ability to distill complex technical challenges into simple, user-friendly solutions. This way, I help you achieve your goals and bring your visions to life.'
    }
  ];
}
