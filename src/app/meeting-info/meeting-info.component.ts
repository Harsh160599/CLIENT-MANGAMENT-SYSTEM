import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Meetinginfo } from '../meetinginfo';
import { HttpClient } from '@angular/common/http';
import { Clientinfo } from '../clientinfo';


@Component({
  selector: 'app-meeting-info',
  templateUrl: './meeting-info.component.html',
  styleUrl: './meeting-info.component.css'
})
export class MeetingInfoComponent {
 meetings:Meetinginfo[]=[];
 clients:Clientinfo[]=[];
//   meeting: Meetinginfo = {
//     id: '',
//     topic: '',
//     numberofPerson: '',
//     ntartDateandTime: ''
// };
// openForm() {
//   this['isFormOpen'] = true;
// }
// clients = ['Client1', 'Client2', 'Client3'];
  meetingForm = this['fb'].group({
    id: ['', Validators.required],
    topic: ['', Validators.required],
    numberOfPerson: ['', [Validators.required, Validators.min(1)]],
    startDateandTime: ['', Validators.required],
    clientId: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,private http: HttpClient) { 
    this.http.get<Meetinginfo[]>('http://localhost:3000/Meeting').subscribe((data) => {
      this.meetings = data;
      console.log('before pushing :', this.meetings);
    });
    this.http.get<Clientinfo[]>('http://localhost:3000/clients').subscribe((data) => {
    this.clients = data;
    console.log('before pushing : ', this.clients);
  });
    
  }
  
  onSubmit() {
    // Add the meeting to a list or service
    if(this.meetingForm.valid){
    this.http.post<Meetinginfo>('http://localhost:3000/Meeting', this.meetingForm.value).subscribe(data => {
      this.meetings.push(data);
      console.log('afterpushing:', this.meetings);
    });
    this.meetingForm.reset();
  }
  else{
    console.log('Form is not valid');
  }
  console.log(this.meetingForm.value);

    // this.meeting = {
    //   ID: '',
    // Topic: '',
    // NumberofPerson: '',
    // StartDateandTime: ''
    // };
}
getMeetingData() {
  this.http.get<Meetinginfo[]>('http://localhost:3000/Meeting').subscribe((data) => {
    this.meetings = data;
    console.log('before pushing : ', this.meetings);
  });
}
DeleteMeeting(index:number,meeting:Meetinginfo)
{
  this.meetings.splice(index,1);
  this.http.delete<Meetinginfo>(`http://localhost:3000/Meeting/${meeting.id}`).subscribe((data) => {
    console.log('before pushing : ', data);
  });
}
}
