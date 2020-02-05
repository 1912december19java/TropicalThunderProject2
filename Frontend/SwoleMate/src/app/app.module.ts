import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { RegistrationPageComponent } from "./registration-page/registration-page.component";
import { AppRoutingModule } from "./app-routing.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { CoachWorkoutComponent } from './coach-workout/coach-workout.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { WorkoutFormComponent } from './workout-form/workout-form.component';
// import { ProgramFormComponent } from './program-form/program-form.component';
import { CoachDashboardComponent } from "./coach-dashboard/coach-dashboard.component";
import { AthleteDashboardComponent } from "./athlete-dashboard/athlete-dashboard.component";
import { MessageBoardComponent } from "./message-board/message-board.component";
import { LoginComponent } from './login/login.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AthleteWorkoutComponent } from './athlete-workout/athlete-workout.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationPageComponent,
    NavbarComponent,
    FooterComponent,
    CoachWorkoutComponent,
    // WorkoutFormComponent,
    // ProgramFormComponent,
    CoachDashboardComponent,
    AthleteDashboardComponent,
    MessageBoardComponent,
    LoginComponent,
    EditProfileComponent,
    AthleteWorkoutComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
