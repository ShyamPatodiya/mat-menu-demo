import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { CustomTableDetailComponent } from './custom-table/custom-table-detail/custom-table-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonMenuComponent } from './button-menu/button-menu.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'features',
    children: [
      { path: 'button-menu', component: ButtonMenuComponent },
      { path: 'custom-table', component: CustomTableComponent },
    ],
  },
  { path: '', redirectTo: 'features', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CustomTableComponent,
    CustomTableDetailComponent,
    ButtonMenuComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
