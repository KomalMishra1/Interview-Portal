import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl , Validators , FormArray} from '@angular/forms';
import {AppService} from '../app.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.css']
})
export class BasicDetailsComponent implements OnInit {

  basicDetailsForm : FormGroup=new FormGroup({
    name: new FormControl(null , Validators.required),
    mobile: new FormControl(null ,  Validators.required),
    email: new FormControl(null , [Validators.email ,  Validators.required]),
    experience: new FormControl(null ,  Validators.required),
    interviewerId: new FormControl(null ,  Validators.required),
    interviewerEmailId :new FormControl(null , [Validators.email ,  Validators.required])

  });

showPopup:boolean = false;
  constructor(private _router : Router ,private _appService : AppService) { }

  ngOnInit() {
  }


  postBasicDetails() {
    if(this.basicDetailsForm.invalid) {
      this.showPopup=false;
      console.log('invalid'); return;
    }

  console.log(JSON.stringify(this.basicDetailsForm.value))

    // var newJSON = this.basicDetailsForm.value;
    // newJSON['skills'] = this.list;

      // for(var i=0;i<this.list.length;i++){
      //   newJSON[this.list[i]] = this.list[i];
      // }

    // console.log('a->',JSON.stringify(newJSON))

    this._appService.postBasicDetails(JSON.stringify(this.basicDetailsForm.value))
    .subscribe(
      // response => {console.log(this.data1);},
      // // data =>{ console.log(data); },
      // error => console.error(error)
        // res => {
        // this.data = JSON.parse(res.body);
        //creating dummy json
        //   this.data = {
        //   "language" : "C",
        //   "data" : [
        //     {
        //       "topic" : "array",
        //       "weight" :  30
        //     },
        //     {
        //       "topic" : "pointer",
        //       "weight" :  40
        //     }
        //   ]
        // }
      data=> {  console.log(data);},
         err=>console.log(err));
         this.showPopup=true;

  }

moveToAll() {
  this._router.navigate(['/all']);
}

moveToOptions(){
    this._router.navigate(['/options']);
}



}
