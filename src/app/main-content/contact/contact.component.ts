import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { PrivacyPolicyComponent } from '../../privacy-policy/privacy-policy.component';
import { on } from 'events';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormComponent, FormsModule, TranslateModule, PrivacyPolicyComponent, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

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

