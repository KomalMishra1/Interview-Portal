import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl , Validators , ReactiveFormsModule,
  NG_VALIDATORS,  FormsModule , ValidatorFn} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerForm : FormGroup=new FormGroup({
      name: new FormControl(null ,  Validators.required),
    email: new FormControl(null , [Validators.email , Validators.required]),
    password: new FormControl(null , [Validators.minLength(8) ,  Validators.required]),
      confPassword: new FormControl(null ,  Validators.required),
        empId: new FormControl(null ,  Validators.required),

  });

  constructor(private _router : Router) { }

  ngOnInit() {
  }

  register() {
    if(!(this.registerForm.valid && this.registerForm.value.password == this.registerForm.value.confPassword)) {
      console.log('invalid'); return;

    }

        console.log(JSON.stringify(this.registerForm.value));
       this._router.navigate(['/']);

  }

moveToLogin(){
  this._router.navigate(['/']);
}

}
