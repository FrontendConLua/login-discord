import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() color: string = '#8156FA';
  @Input() isDisabled = false;
  @Output() buttonClick = new EventEmitter<Event>();

  onClick(event: Event) {
    if (!this.isDisabled) {
      this.buttonClick.emit(event);
    }
  }
}
