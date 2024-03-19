import { Component } from '@angular/core';
import { Taskinfo } from '../taskinfo';
import { HttpClient } from '@angular/common/http';
import { Projectinfo } from '../projectinfo';

@Component({
  selector: 'app-tasks-info',
  templateUrl: './tasks-info.component.html',
  styleUrl: './tasks-info.component.css'
})
export class TasksInfoComponent {
  isFormOpen = false;
  task: Taskinfo[] = [];
  project:Projectinfo[]=[];
  //projects = ['Project 1', 'Project 2', 'Project 3'];
   tasks: Taskinfo = {
     id: '',
     taskname: '',
     Description: '',
     projectname:''
   };
constructor(private http: HttpClient)
{
  this.http.get<Taskinfo[]>('http://localhost:3000/task').subscribe((data) => {
    this.task = data;
    console.log('before pushing : ', this.task);
  });
  this.getProjectData();
}
  openForm() {
    this.isFormOpen = true;
  }

  addTask() {
    // Add the task to a list or service
    this.http.post<Taskinfo>('http://localhost:3000/task', this.tasks).subscribe((data) => {
      this.task.push(data);
      console.log('afterpushing:', this.task);
    });
     this.tasks = {
      id: '',
      taskname: '',
      Description: '',
      projectname: '',
     };
    this.isFormOpen = false;
  }
  DeleteTask(index:number,tasks:Taskinfo)
  {
    this.task.splice(index,1);
    this.http.delete<Taskinfo>(`http://localhost:3000/task/${tasks.id}`).subscribe((data) => {
      console.log('before pushing : ', data);
    });
  }
  getProjectData() {
    this.http.get<Projectinfo[]>('http://localhost:3000/project').subscribe((data) => {
      this.project = data;
      console.log('before pushing : ', this.project);
    });
  }
  }

