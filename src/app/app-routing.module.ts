import { SummaryComponent } from './formulario/summary/summary.component';
import { AddOnsComponent } from './formulario/add-ons/add-ons.component';
import { PlanComponent } from './formulario/plan/plan.component';
import { PersonalInfoComponent } from './formulario/personal-info/personal-info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'personal-info',
    pathMatch: 'full'},
  {
    path: 'personal-info',
    component: PersonalInfoComponent},
  {
    path: 'plan',
    component: PlanComponent},
  {
    path: 'add-ons',
    component: AddOnsComponent},
  {
    path: 'summary',
    component: SummaryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
