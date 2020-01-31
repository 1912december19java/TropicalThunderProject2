import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { RegistrationPageComponent } from "./registration-page/registration-page.component";
import { AppRoutingModule } from "./app-routing.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { CoachDashboardComponent } from "./coach-dashboard/coach-dashboard.component";
import { AthleteDashboardComponent } from "./athlete-dashboard/athlete-dashboard.component";
import { MessageBoardComponent } from "./message-board/message-board.component";
import { AthleteMessageboxComponent } from "./athlete-messagebox/athlete-messagebox.component";
import { CoachMessageboxComponent } from "./coach-messagebox/coach-messagebox.component";

@NgModule({
  declarations: [
    AppComponent,
    RegistrationPageComponent,
    NavbarComponent,
    FooterComponent,
    CoachDashboardComponent,
    AthleteDashboardComponent,
    MessageBoardComponent,
    AthleteMessageboxComponent,
    CoachMessageboxComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
