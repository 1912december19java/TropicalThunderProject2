import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CoachDashboardComponent } from './coach-dashboard/coach-dashboard.component';
import { AthleteDashboardComponent } from './athlete-dashboard/athlete-dashboard.component';

const routes: Routes = [
  { path: 'coach-dashboard', component: CoachDashboardComponent },
  { path: 'athlete-dashboard', component: AthleteDashboardComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ CoachDashboardComponent, AthleteDashboardComponent ]
