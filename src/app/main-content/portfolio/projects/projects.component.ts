import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { link } from 'fs';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {


  projects =[
    {
      img: './../../../assets/img/portfolio/join.png',
      name : 'Join',
      programmingLanguage: ['JavaScript','HTML','CSS','Firebase'],
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      linkGithub: 'https://github.com/',
      linkLive: 'https://github.com/',
    },
    {
      img: './../../../assets/img/portfolio/pollo-loco.png',
      name : 'El Pollo Loco',
      programmingLanguage: ['JavaScript','HTML','CSS'],
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pedro find coins and poison bottles to fight against the killer Chicken.',
      linkGithub: 'https://github.com/StephanZager/El-Pollo-Loco',
      linkLive: '',
    }
  ]
}
