import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { CoachDashboardComponent } from "./coach-dashboard/coach-dashboard.component";
import { AthleteDashboardComponent } from "./athlete-dashboard/athlete-dashboard.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { EditCoachProfileComponent } from "./edit-coach-profile/edit-coach-profile.component";
import { AthleteWorkoutComponent } from "./athlete-workout/athlete-workout.component";
import { ExerciseFormComponent} from "./exercise-form/exercise-form.component"
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
    component: EditCoachProfileComponent
  },
  {
    path: "athlete/edit-profile",
    component: EditProfileComponent
  },
  {
    path: "athlete/workout-page",
    component: AthleteWorkoutComponent
  },
  {
    path: "coach/program",
    component: ExerciseFormComponent,
    outlet: "popup"
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
  EditProfileComponent,
  EditCoachProfileComponent,
  AthleteWorkoutComponent,
  ExerciseFormComponent
];
