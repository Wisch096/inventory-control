import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-info-box',
  standalone: true,
  imports: [
    FontAwesomeModule,
  ],
  templateUrl: './info-box.component.html',
  styleUrl: './info-box.component.css'
})
export class InfoBoxComponent {
  @Input() icon!: IconProp;
  @Input() title!: string;
  @Input() quantity!: number;
}
