import { Component } from '@angular/core';
import {GrayButtonComponent} from "../gray-button/gray-button.component";

@Component({
  selector: 'app-two-button-row',
  standalone: true,
  imports: [
    GrayButtonComponent
  ],
  templateUrl: './two-button-row.component.html',
  styleUrl: './two-button-row.component.css'
})
export class TwoButtonRowComponent {
  leftButton = 'Pošalji u sustav';
  rightButton = 'Pošalji u CMS'

}
