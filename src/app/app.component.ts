import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ImageViewComponent} from "./image-view/image-view.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {BottombarComponent} from "./bottombar/bottombar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImageViewComponent, SidebarComponent, BottombarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FotoPortal';
}
