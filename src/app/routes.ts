import { FactComponent } from './fact/fact.component';
import { FactListComponent } from './fact-list/fact-list.component';
import { ErrorComponent } from './error/error.component';
import { AddFactComponent } from './add-fact/add-fact.component';

export const ROUTES = [
    { path: 'facts', component: FactListComponent },
    // { path: 'fact/:id', component: FactDetailComponent },
    {
      path: 'facts',
      component: FactListComponent,
      data: { title: 'Fact List' }
    },
    { path: 'add-fact', component: AddFactComponent },
    { path: '',
      redirectTo: '/',
      pathMatch: 'full'
    },
    { path: '**', component: ErrorComponent }
  ];
