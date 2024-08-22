import { Component } from '@angular/core';
import {TitleWithParagraphComponent} from "../../shared/title-with-paragraph/title-with-paragraph.component";
import {TitleWithText} from "../../model/titleWithText";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-special-notes',
  standalone: true,
  imports: [
    TitleWithParagraphComponent,
    NgForOf
  ],
  templateUrl: './special-notes.component.html',
  styleUrl: './special-notes.component.css'
})
export class SpecialNotesComponent {
  textTitle = 'posebne napomene';

  paragraph1 = 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer.'
  paragraph2 = 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  paragraph3 = 'It has survived not only five centuries, but also the leap into electronic typesetting.'

  notes: TitleWithText[] = [
    {
      title: this.textTitle,
      content: this.paragraph1
    },
    {
      title: this.textTitle,
      content: this.paragraph2
    },
    {
      title: this.textTitle,
      content: this.paragraph3
    }
  ]

}
