import { Component } from '@angular/core';
import { Projectinfo } from '../projectinfo';
import { HttpClient } from '@angular/common/http';
import { Clientinfo } from '../clientinfo';
interface Project {
  id: string;
  name: string;
  duration: string;
}
@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrl: './project-info.component.css'
})
export class ProjectInfoComponent {
  title = 'project-app';
  isFormOpen = false;
  projects: Projectinfo[] = [];
  client: Clientinfo[]=[];
  project: Projectinfo = {
 id: '',
  name: '',
     duration: '', 
     clientid:'',
   };

  constructor(private http: HttpClient) {
    this.http.get<Projectinfo[]>('http://localhost:3000/project').subscribe((data) => {
      this.projects = data;
      console.log('before pushing : ', this.projects);
    });
    this.getClientData();
  }
  
  openForm() {
    this.isFormOpen = true;
  }

  addProject() {
  //  // this.projects.push(this.project);
  //   console.log(this.project);
     
  this.http.post<Projectinfo>('http://localhost:3000/project', this.project).subscribe((data) => {
      this.projects.push(data);
      console.log('afterpushing:', this.projects);
    });
    this.project = {
      id: '',
      name: '',
      duration: '',
      clientid:''
    };
    this.isFormOpen = false;
  }
  DeleteProject(index:number,project:Projectinfo)
  {
    this.projects.splice(index,1);
    this.http.delete<Projectinfo>(`http://localhost:3000/project/${project.id}`).subscribe((data) => {
      console.log('before pushing : ', data);
    });
  }
     getClientData() {
      this.http.get<Clientinfo[]>('http://localhost:3000/clients').subscribe((data) => {
        this.client = data;
        console.log('before pushing : ', this.client);
      });
      
  }
}

