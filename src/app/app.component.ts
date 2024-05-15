import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAmbulance } from '@fortawesome/free-solid-svg-icons'

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      RouterOutlet,
      RouterLink,
      FontAwesomeModule
    ]
})
export class AppComponent {
  title = 'inventory-control';
  faAmbulance = faAmbulance;
}
