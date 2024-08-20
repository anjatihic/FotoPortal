import { Component } from '@angular/core';
import {SizeTableComponent} from "./size-table/size-table.component";
import {CheckboxComponent} from "./checkbox/checkbox.component";
import {ButtonSectionComponent} from "./button-section/button-section.component";
import {SpecialNotesComponent} from "./special-notes/special-notes.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SizeTableComponent,
    CheckboxComponent,
    ButtonSectionComponent,
    SpecialNotesComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  infoText = 'Kako mogu koristiti ovaj sadržaj?'

}
