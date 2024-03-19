import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(private router:Router)
{

}
onhome()
  {
   this.router.navigate(["/login"]);
  }
}
