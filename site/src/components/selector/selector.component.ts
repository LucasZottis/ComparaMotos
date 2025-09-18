import { Component, Input } from '@angular/core';

@Component({
  selector: 'selector',
  standalone: true,
  imports: [],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.scss'
})
export class SelectorComponent {
  @Input() componentId: string = '';
  @Input() label: string = '';
}