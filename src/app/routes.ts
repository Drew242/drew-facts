import { FactComponent } from './fact/fact.component';
import { FactListComponent } from './fact-list/fact-list.component';
import { ErrorComponent } from './error/error.component';
import { AddFactComponent } from './add-fact/add-fact.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const ROUTES = [
    { path: 'facts', component: FactListComponent },
    { path: 'fact/:id', component: FactComponent },
    { path: 'add-fact', component: AddFactComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: '**', component: ErrorComponent }
  ];
