import { Component } from '@angular/core';
import {TwoButtonRowComponent} from "./two-button-row/two-button-row.component";
import {GrayButtonComponent} from "./gray-button/gray-button.component";
import {BlackButtonComponent} from "./black-button/black-button.component";
import {TransparentButtonComponent} from "./transparent-button/transparent-button.component";

@Component({
  selector: 'app-button-section',
  standalone: true,
  imports: [
    TwoButtonRowComponent,
    GrayButtonComponent,
    BlackButtonComponent,
    TransparentButtonComponent
  ],
  templateUrl: './button-section.component.html',
  styleUrl: './button-section.component.css'
})
export class ButtonSectionComponent {

  grayButton = 'preuzmi sadržaj';
  downloadIcon = 'bi bi-arrow-down';
  blackButton = 'dodaj u košaricu';
  transparentButton = 'Preuzmi pregledni primjerak';
  cartIcon = 'bi bi-cart-fill';

}
