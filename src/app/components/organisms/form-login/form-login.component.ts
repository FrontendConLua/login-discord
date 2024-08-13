import { Component } from '@angular/core';
import { ButtonComponent } from '../../atoms/button/button.component';
import { InputField2Component } from '../../molecules/input-field2/input-field2.component';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [ButtonComponent, InputField2Component],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.scss',
})
export class FormLoginComponent {}
