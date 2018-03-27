import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './routes';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatRadioModule,
         MatTooltipModule, MatToolbarModule, MatSliderModule, MatFormFieldModule,
         MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { FactComponent } from './fact/fact.component';
import { FactListComponent } from './fact-list/fact-list.component';
import { ErrorComponent } from './error/error.component';
import { AddFactComponent } from './add-fact/add-fact.component';
import { FactService } from './fact.service';

@NgModule({
  declarations: [
    AppComponent,
    FactComponent,
    FactListComponent,
    ErrorComponent,
    AddFactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      ROUTES,
      { enableTracing: false } // <-- debugging purposes only
    ),
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    MatTooltipModule,
    MatToolbarModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpModule
  ],
  providers: [FactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
