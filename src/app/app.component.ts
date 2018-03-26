import { Component } from '@angular/core';
import { CARD_ROUTES } from './route-card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Drew Facts';
  cardRoutes = CARD_ROUTES;
}
