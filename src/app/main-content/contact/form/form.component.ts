import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  borderError = '1px solid red';
  borderSuccess = '1px solid green';
  bgError = "url('./../../../../assets/img/icons/false-form.png')";
  bgSuccess = "url('./../../../../assets/img/icons/success-form.png')";

  contactData = {
    name: '',
    email: '',
    message: '',
    check: false
  }
  showError = false;
  showNameError = false;
  showEmailError = false;
  showMessageError = false;

  onSubmit(ngForm: NgForm) {
   
    if (ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
    }
  }

}
