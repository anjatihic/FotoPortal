import { Component } from '@angular/core';
import {SizeDetails} from "../../model/sizeDetails";
import {NgForOf, UpperCasePipe} from "@angular/common";
import {TableSizeEntryComponent} from "./table-size-entry/table-size-entry.component";

@Component({
  selector: 'app-size-table',
  standalone: true,
  imports: [
    NgForOf,
    TableSizeEntryComponent,
    UpperCasePipe
  ],
  templateUrl: './size-table.component.html',
  styleUrl: './size-table.component.css'
})
export class SizeTableComponent {

  imageName = 'image 001';

  sizes: SizeDetails[] = [
    {
      name: 'large',
      resolution: 'Print (2667x4000)',
      price: 170
    },
    {
      name: 'small',
      resolution: 'Web (1072x1600)',
      price: 130
    }
  ]

}
