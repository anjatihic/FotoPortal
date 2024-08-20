import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-gray-button',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './gray-button.component.html',
  styleUrl: './gray-button.component.css'
})
export class GrayButtonComponent {

  @Input() name= '';
  @Input() iconName = '';

}
