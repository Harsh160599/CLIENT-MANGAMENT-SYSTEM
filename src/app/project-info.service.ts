import { Injectable } from '@angular/core';
import { Projectinfo } from './projectinfo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectInfoService {
  projectlist: Projectinfo[] = [];

  constructor(private http: HttpClient) {
    this.getProjectData();
  }

  submitProject(project: Projectinfo) {
    this.http.post<Projectinfo>('http://localhost:3000/Project', this.projectlist).subscribe(data => {
      this.projectlist.push(data);
      console.log('afterpushing:', this.projectlist);
    });

  }

  getProjectData() {
    this.http.get<Projectinfo[]>('http://localhost:3000/project').subscribe((data) => {
      this.projectlist = data;
      console.log('before pushing : ', this.projectlist);
    });
  }

  shareClientData() {
    return this.http.get<Projectinfo[]>('http://localhost:3000/project');
  }

}

