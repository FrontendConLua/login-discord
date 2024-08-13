import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import {} from '@angular/forms';

@Component({
  selector: 'app-input-field2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-field2.component.html',
  styleUrl: './input-field2.component.scss',
})
export class InputField2Component {
  statusClass = 'default';
  @Input() placeholder = 'HOLA';
}
