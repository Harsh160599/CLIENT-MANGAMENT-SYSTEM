import { Injectable } from '@angular/core';
import { Taskinfo } from './taskinfo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskInfoService {

  tasklist: Taskinfo[] = [];

  constructor(private http: HttpClient) {
    this.getTaskData();
  }

  SubmitTask(task: Taskinfo) {
    this.http.post<Taskinfo>('http://localhost:3000/task', this.tasklist).subscribe(data => {
      this.tasklist.push(data);
      console.log('afterpushing:', this.tasklist);
    });

  }

  getTaskData() {
    this.http.get<Taskinfo[]>('http://localhost:3000/task').subscribe((data) => {
      this.tasklist = data;
      console.log('before pushing : ', this.tasklist);
    });
  }

  shareTaskData() {
    return this.http.get<Taskinfo[]>('http://localhost:3000/task');
  }
}
