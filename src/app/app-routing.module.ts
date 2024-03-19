import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { TasksInfoComponent } from './tasks-info/tasks-info.component';
import { MeetingInfoComponent } from './meeting-info/meeting-info.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { RegComponent } from './reg/reg.component';
const routes: Routes = [{path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"index",component:IndexComponent},
{path:"register",component:RegisterComponent},
{path:"client_info",component:ClientInfoComponent},
{path:"project_info",component:ProjectInfoComponent},
{path:"tasks_info",component:TasksInfoComponent},
{path:"meeting_info",component:MeetingInfoComponent},
{path:"reg",component:RegComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
