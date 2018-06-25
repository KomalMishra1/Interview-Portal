import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl , Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

show : boolean = false;

loginForm : FormGroup=new FormGroup({
  email: new FormControl(null , [Validators.email , Validators.required]),
  password: new FormControl(null ,  Validators.required),

});

  constructor(private _router : Router) { }

  ngOnInit() {
  }

login() {
  if(!this.loginForm.valid && this.loginForm.controls.password.value.equals("admin")) {
    console.log('invalid'); return;

  }

      console.log(JSON.stringify(this.loginForm.value));
     this._router.navigate(['/form']);

};
// moveToPortal() {
//   if(this.loginForm.controls.password == "admin") {
//     this._router.navigate([./]);
//   }
// }
}
