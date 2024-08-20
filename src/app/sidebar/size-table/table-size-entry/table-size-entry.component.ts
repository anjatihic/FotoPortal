import {Component, Input} from '@angular/core';
import {SizeDetails} from "../../../model/sizeDetails";
import {CurrencyPipe, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-table-size-entry',
  standalone: true,
  imports: [
    UpperCasePipe,
    CurrencyPipe
  ],
  templateUrl: './table-size-entry.component.html',
  styleUrl: './table-size-entry.component.css'
})
export class TableSizeEntryComponent {

  @Input() size: SizeDetails = {
    name: '',
    resolution: '',
    price: 0
  }

}
