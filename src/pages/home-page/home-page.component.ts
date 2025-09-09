import { Component } from '@angular/core';
import { SelectorComponent } from "../../components/selector/selector.component";

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [SelectorComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
