import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ControlContainer, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';
import { Clientinfo } from '../clientinfo';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrl: './client-info.component.css'
})
export class ClientInfoComponent {

  clients:Clientinfo[]=[];
  
  clientForm = this.fb.group({
    id: ['', Validators.required],
    clientName: ['', Validators.required],
    address: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  constructor(private fb: FormBuilder,private http: HttpClient) {
    this.http.get<Clientinfo[]>('http://localhost:3000/clients').subscribe((data) => {
      this.clients = data;
      console.log('before pushing : ', this.clients);
    });
  }

  onSubmit() {
    if (this.clientForm.valid) {
      //this.clients.push(this.clientForm.value);
      this.http.post<Clientinfo>('http://localhost:3000/clients', this.clientForm.value).subscribe(data => {
      this.clients.push(data);
      console.log('afterpushing:', this.clients);
    });
      this.clientForm.reset();
    } else {
      console.log('Form is not valid');
    }
  }
  DeleteClient(index:number,client:Clientinfo)
  {
    this.clients.splice(index,1);
    
    this.http.delete<Clientinfo>(`http://localhost:3000/clients/${client.id}`).subscribe((data) => {
      console.log('before pushing : ', data);
    });
  }
  getClients()
  {
    this.http.get<Clientinfo[]>('http://localhost:3000/clients').subscribe((data) => {
      this.clients = data;
      console.log('before pushing : ', this.clients);
    });
  }
}
 