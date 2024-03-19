import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clientinfo } from './clientinfo';
@Injectable({
  providedIn: 'root'
})
export class ClientInfoService {
  clientList: Clientinfo[] = [];

  constructor(private http: HttpClient) {
    this.getClientData();
  }

  submitClient(client: Clientinfo) {
    this.http.post<Clientinfo>('http://localhost:3000/clients', this.clientList).subscribe(data => {
      this.clientList.push(data);
      console.log('afterpushing:', this.clientList);
    });

  }

  getClientData() {
    this.http.get<Clientinfo[]>('http://localhost:3000/clients').subscribe((data) => {
      this.clientList = data;
      console.log('before pushing : ', this.clientList);
    });
  }

  shareClientData() {
    return this.http.get<Clientinfo[]>('http://localhost:3000/clients');
  }

}
