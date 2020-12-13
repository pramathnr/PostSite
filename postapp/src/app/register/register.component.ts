import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fullname:string;
  email:string;
  password:string;
  successMessage:string;
  isRegister:boolean=false;

  constructor(private _userService: UsersService) { }

  ngOnInit() {
  }
  onCreateUser(){
    this._userService.saveUser({name:this.fullname, email:this.email, password:this.password}).subscribe(responseData=>{
      if(responseData.user[0]._id){
        this.successMessage= responseData.message;
        this.isRegister= true;
      }
    })
  }

}
