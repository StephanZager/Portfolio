import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  skills = [
    {
      skillImg: './../../../assets/img/icons/html.png',
      skillName: 'HTML'
    },
    {
      skillImg: './../../../assets/img/icons/css.png',
      skillName: 'CSS'
    },
    {
      skillImg: './../../../assets/img/icons/javascript.png',
      skillName: 'JavaScript'
    },
    {
      skillImg: './../../../assets/img/icons/typescript.png',
      skillName: 'TypeScript'
    },
    {
      skillImg: './../../../assets/img/icons/angular.png',
      skillName: 'Angular'
    },
    {
      skillImg: './../../../assets/img/icons/firebase.png',
      skillName: 'Firebase'
    },
    {
      skillImg: './../../../assets/img/icons/git.png',
      skillName: 'GIT'
    },
    {
      skillImg: './../../../assets/img/icons/api.png',
      skillName: 'Rest-Api'
    },
    {
      skillImg: './../../../assets/img/icons/scrum.png',
      skillName: 'Scrum'
    },
    {
      skillImg: './../../../assets/img/icons/material-design.png',
      skillName: 'Matreial Design'
    },
    {
      skillImg: './../../../assets/img/icons/continually-learning.png',
      skillName: 'Continually learning'
    },
  ]
}
