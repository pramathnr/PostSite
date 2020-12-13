import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean= false;
  userName:string;
  constructor(private _router:Router) { }

  ngOnInit() {
    this.userName=localStorage.getItem('userName');
    this.isLoggedIn= true;
  }
  onLogOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    this.isLoggedIn= false;
    this._router.navigate(['/']);
  }

}
