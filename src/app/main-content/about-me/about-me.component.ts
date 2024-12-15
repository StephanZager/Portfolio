import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [NgClass, CommonModule, TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

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
