import { Component } from '@angular/core';
import {TagComponent} from "./tag/tag.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-key-word-section',
  standalone: true,
  imports: [
    TagComponent,
    NgForOf
  ],
  templateUrl: './key-word-section.component.html',
  styleUrl: './key-word-section.component.css'
})
export class KeyWordSectionComponent {

  title = 'ključne riječi';

  keywords: string[] = [
    'Nogomet',
    'Italija',
    'Serie A',
    'Genua',
    'Italien',
    'Fussball',
    'Soccer'
  ]

}
