import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormComponent,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
