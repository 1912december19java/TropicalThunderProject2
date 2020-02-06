import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { RegistrationPageComponent } from "./registration-page/registration-page.component";
import { AppRoutingModule } from "./app-routing.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
import { ExerciseFormComponent } from './exercise-form/exercise-form.component';
import { CoachDashboardComponent } from "./coach-dashboard/coach-dashboard.component";
import { AthleteDashboardComponent } from "./athlete-dashboard/athlete-dashboard.component";
import { MessageBoardComponent } from "./message-board/message-board.component";
import { LoginComponent } from './login/login.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AthleteWorkoutComponent } from './athlete-workout/athlete-workout.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from "@angular/common/http";
=======
import { CoachWorkoutComponent } from "./coach-workout/coach-workout.component";
import { ReactiveFormsModule } from "@angular/forms";
import { WorkoutFormComponent } from "./workout-form/workout-form.component";
import { ProgramFormComponent } from "./program-form/program-form.component";
import { ExerciseFormComponent } from "./exercise-form/exercise-form.component";
import { CoachDashboardComponent } from "./coach-dashboard/coach-dashboard.component";
import { AthleteDashboardComponent } from "./athlete-dashboard/athlete-dashboard.component";
import { MessageBoardComponent } from "./message-board/message-board.component";
import { LoginComponent } from "./login/login.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { AthleteWorkoutComponent } from "./athlete-workout/athlete-workout.component";
import { HomeComponent } from "./home/home.component";
<<<<<<< HEAD
import { CoachWorkoutProgramComponent } from './coach-workout-program/coach-workout-program.component';
import { UpdateWorkoutService } from './update-workout.service'
import { HttpClientModule } from '@angular/common/http';
=======
>>>>>>> Development
>>>>>>> Development

@NgModule({
  declarations: [
    AppComponent,
    RegistrationPageComponent,
    NavbarComponent,
    FooterComponent,
    ExerciseFormComponent,
    CoachDashboardComponent,
    AthleteDashboardComponent,
    MessageBoardComponent,
    LoginComponent,
    EditProfileComponent,
    AthleteWorkoutComponent,
    HomeComponent,
    CoachWorkoutProgramComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule 
  ],
<<<<<<< HEAD
  providers: [UpdateWorkoutService],
=======
<<<<<<< HEAD
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule, NgbModule, HttpClientModule],
=======
>>>>>>> Development
  providers: [],
>>>>>>> Development
  bootstrap: [AppComponent]
})
export class AppModule {}
