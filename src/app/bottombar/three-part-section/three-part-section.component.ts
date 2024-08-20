import { Component } from '@angular/core';
import {TitleWithText} from "../../model/titleWithText";
import {TitleWithParagraphComponent} from "../../shared/title-with-paragraph/title-with-paragraph.component";

@Component({
  selector: 'app-three-part-section',
  standalone: true,
  imports: [
    TitleWithParagraphComponent
  ],
  templateUrl: './three-part-section.component.html',
  styleUrl: './three-part-section.component.css'
})
export class ThreePartSectionComponent {

  gallery: TitleWithText = {
    title: 'galerija',
    content: 'Stock'
  }

  author: TitleWithText = {
    title: 'autor',
    content: 'Ivan Horvat'
  }

  agency: TitleWithText = {
    title: 'agencija',
    content: 'Smart Code'
  }

}
