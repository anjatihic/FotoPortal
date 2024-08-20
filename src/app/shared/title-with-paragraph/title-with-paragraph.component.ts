import {Component, Input} from '@angular/core';
import {UpperCasePipe} from "@angular/common";
import {TitleWithText} from "../../model/titleWithText";

@Component({
  selector: 'app-title-with-paragraph',
  standalone: true,
  imports: [
    UpperCasePipe
  ],
  templateUrl: './title-with-paragraph.component.html',
  styleUrl: './title-with-paragraph.component.css'
})
export class TitleWithParagraphComponent {

  @Input() displayText: TitleWithText = {
    title: '',
    content: ''
  }
}
