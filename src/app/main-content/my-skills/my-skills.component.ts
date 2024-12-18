import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ContinuallyLearningPopupComponent } from './continually-learning-popup/continually-learning-popup.component';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule, ContinuallyLearningPopupComponent],
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {

  skills = [
    { skillImg: './../../../assets/img/icons/html.png', skillName: 'HTML' },
    { skillImg: './../../../assets/img/icons/css.png', skillName: 'CSS' },
    { skillImg: './../../../assets/img/icons/javascript.png', skillName: 'JavaScript' },
    { skillImg: './../../../assets/img/icons/typescript.png', skillName: 'TypeScript' },
    { skillImg: './../../../assets/img/icons/angular.png', skillName: 'Angular' },
    { skillImg: './../../../assets/img/icons/firebase.png', skillName: 'Firebase' },
    { skillImg: './../../../assets/img/icons/git.png', skillName: 'GIT' },
    { skillImg: './../../../assets/img/icons/api.png', skillName: 'Rest-Api' },
    { skillImg: './../../../assets/img/icons/scrum.png', skillName: 'Scrum' },
    { skillImg: './../../../assets/img/icons/material-design.png', skillName: 'Material Design' },
    { skillImg: './../../../assets/img/icons/continually-learning.png', skillName: 'my_skills.CONTINUALLY_LEARNING' },
  ];

  showPopup = false;
  selectedSkill: any = null;

  togglePopup(skill: any) {
    if (this.selectedSkill === skill) {
      this.showPopup = !this.showPopup;
    } else {
      this.selectedSkill = skill;
      this.showPopup = true;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.icons-container') && !target.closest('app-continually-learning-popup')) {
      this.showPopup = false;
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  
    ngOnInit(): void {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('animate-from-left')) {
              this.renderer.addClass(entry.target, 'in-view');
            } else if (entry.target.classList.contains('animate-from-bottom')) {
              this.renderer.addClass(entry.target, 'in-view');
            }
            observer.unobserve(entry.target);
          }
        });
      });
  
      const elements = this.el.nativeElement.querySelectorAll('.animate-from-left, .animate-from-bottom');
      elements.forEach((element: Element) => observer.observe(element));
    }
  }


