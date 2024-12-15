import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { link } from 'fs';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {


  projects =[
    {
      img: './../../../assets/img/portfolio/join.png',
      name : 'Join',
      programmingLanguage: ['JavaScript','HTML','CSS','Firebase'],
      description: 'portfolio.PROJECT.JOIN_DESCRIPTION',
      linkGithub: 'https://github.com/StephanZager/join.git',
      linkLive: 'https://www.join.stephan-zager.de//',
    },
    {
      img: './../../../assets/img/portfolio/pollo-loco.png',
      name : 'El Pollo Loco',
      programmingLanguage: ['JavaScript','HTML','CSS'],
      description: 'portfolio.PROJECT.ELPOLLO_DESCRIPTION',
      linkGithub: 'https://github.com/StephanZager/El-Pollo-Loco.git',
      linkLive: 'https://www.el-pollo-loco.stephan-zager.de/index.html',
    }
  ]

  
}
