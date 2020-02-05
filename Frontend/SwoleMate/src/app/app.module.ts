import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { RegistrationPageComponent } from "./registration-page/registration-page.component";
import { AppRoutingModule } from "./app-routing.module";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { CoachWorkoutComponent } from './coach-workout/coach-workout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkoutFormComponent } from './workout-form/workout-form.component';
import { ProgramFormComponent } from './program-form/program-form.component';
import { ExerciseFormComponent } from './exercise-form/exercise-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationPageComponent,
    NavbarComponent,
    FooterComponent,
    CoachWorkoutComponent,
    WorkoutFormComponent,
    ProgramFormComponent,
    ExerciseFormComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
