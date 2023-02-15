import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PersonalInfoComponent } from './formulario/personal-info/personal-info.component';
import { PlanComponent } from './formulario/plan/plan.component';
import { AddOnsComponent } from './formulario/add-ons/add-ons.component';
import { SummaryComponent } from './formulario/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    PersonalInfoComponent,
    PlanComponent,
    AddOnsComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
