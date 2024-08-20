import { Component } from '@angular/core';
import {TitleWithParagraphComponent} from "../shared/title-with-paragraph/title-with-paragraph.component";
import {TitleWithText} from "../model/titleWithText";
import {ThreePartSectionComponent} from "./three-part-section/three-part-section.component";
import {KeyWordSectionComponent} from "./key-word-section/key-word-section.component";

@Component({
  selector: 'app-bottombar',
  standalone: true,
  templateUrl: './bottombar.component.html',
  imports: [
    TitleWithParagraphComponent,
    ThreePartSectionComponent,
    KeyWordSectionComponent
  ],
  styleUrl: './bottombar.component.css'
})
export class BottombarComponent {

  description: TitleWithText = {
    content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    title: 'Opis'
  }


}
