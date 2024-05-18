import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InfoBoxComponent } from "../../shared/components/info-box/info-box.component";
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        RouterOutlet,
        RouterLink,
        InfoBoxComponent
    ]
})
export class HomeComponent {
  faUser = faUser;
}
