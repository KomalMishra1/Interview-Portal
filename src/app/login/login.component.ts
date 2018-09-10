import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl , Validators , ReactiveFormsModule,
  NG_VALIDATORS,  FormsModule , ValidatorFn} from '@angular/forms';
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
  password: new FormControl(null , [Validators.minLength(8) ,  Validators.required]),

});

  constructor(private _router : Router) { }

  ngOnInit() {
  }

login() {
  if(!(this.loginForm.valid && this.loginForm.controls.password.value == "admin123")) {
    console.log('invalid'); return;

  }

      console.log(JSON.stringify(this.loginForm.value));
     this._router.navigate(['/options']);

}

moveToRegister() {
  this._router.navigate(['/register']);
}
// moveToPortal() {
//   if(this.loginForm.controls.password == "admin") {
//     this._router.navigate([./]);
//   }
// }
}
