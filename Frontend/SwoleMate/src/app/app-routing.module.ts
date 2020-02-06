import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { CoachDashboardComponent } from "./coach-dashboard/coach-dashboard.component";
import { AthleteDashboardComponent } from "./athlete-dashboard/athlete-dashboard.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "coach",
    component: CoachDashboardComponent
  },
  {
    path: "athlete",
    component: AthleteDashboardComponent
  },
  {
    path: "coach/edit-profile",
    component: EditProfileComponent
  },
  {
    path: "athlete/edit-profile",
    component: EditProfileComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  CoachDashboardComponent,
  AthleteDashboardComponent,
  EditProfileComponent
];
