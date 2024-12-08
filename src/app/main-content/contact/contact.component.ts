import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { PrivacyPolicyComponent } from '../../privacy-policy/privacy-policy.component';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormComponent, FormsModule, TranslateModule, PrivacyPolicyComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
