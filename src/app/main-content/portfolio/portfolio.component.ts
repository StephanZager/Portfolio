import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectsComponent, TranslateModule, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {

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