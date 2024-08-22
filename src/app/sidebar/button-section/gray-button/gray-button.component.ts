import {Component, Input} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-gray-button',
  standalone: true,
  imports: [
    NgClass,
    NgIf
  ],
  templateUrl: './gray-button.component.html',
  styleUrl: './gray-button.component.css'
})
export class GrayButtonComponent {

  @Input() name= '';
  @Input() iconName = '';

}
