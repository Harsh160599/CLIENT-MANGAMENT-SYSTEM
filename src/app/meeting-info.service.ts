import { Injectable } from '@angular/core';
import { Meetinginfo } from './meetinginfo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeetingInfoService {
  meetingList: Meetinginfo[] = [];

  constructor(private http: HttpClient) {
    this.getMeetingData();
  }

  submitMeeting(meeting: Meetinginfo) {
    this.http.post<Meetinginfo>('http://localhost:3000/Meeting', this.meetingList).subscribe(data => {
      this.meetingList.push(data);
      console.log('afterpushing:', this.meetingList);
    });

  }

  getMeetingData() {
    this.http.get<Meetinginfo[]>('http://localhost:3000/Meeting').subscribe((data) => {
      this.meetingList = data;
      console.log('before pushing : ', this.meetingList);
    });
  }

  shareClientData() {
    return this.http.get<Meetinginfo[]>('http://localhost:3000/Meeting');
  }

}
