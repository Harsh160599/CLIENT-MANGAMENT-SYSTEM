import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { TasksInfoComponent } from './tasks-info/tasks-info.component';
import { MeetingInfoComponent } from './meeting-info/meeting-info.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RegComponent } from './reg/reg.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    IndexComponent,
    RegisterComponent,
    ClientInfoComponent,
    ProjectInfoComponent,
    TasksInfoComponent,
    MeetingInfoComponent,
    RegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
