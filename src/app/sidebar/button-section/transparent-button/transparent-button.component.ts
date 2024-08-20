import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-transparent-button',
  standalone: true,
  imports: [],
  templateUrl: './transparent-button.component.html',
  styleUrl: './transparent-button.component.css'
})
export class TransparentButtonComponent {
  @Input() name = ''
  @Input() iconName = ''
}
