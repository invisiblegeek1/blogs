import { Component, OnInit } from '@angular/core';
//import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  UserSignUpDetails={


    name:"",
    email:"",
    password:""

  }

  writeForm(){
    console.log(this.UserSignUpDetails);
    
    
  }

}
