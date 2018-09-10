import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {FormGroup , FormControl , Validators , FormArray} from '@angular/forms';


@Component({
  selector: 'app-evaluation-form',
  templateUrl: './evaluation-form.component.html',
  styleUrls: ['./evaluation-form.component.css'],

})
export class EvaluationFormComponent implements OnInit {
      nameC:any ;
      nameJava:any;

      private subscription : any;

     showC : boolean = false ;
     showJava : boolean = false ;
     data:any=[];

     candidateObj : any;

     select :string[]= [
            'NA'  ,
            'Weak' ,
           'Average',
            'Good',
            'Excellent'
       ];

listOfCards : any= [] ;

 arr :any= [];

 object  = {
  fileTopic : String,
  fileContents : [
  {
    topic : String,
    weightage : String,
    interviwerRating : String

  }]
};


 uploads : any = [];

fileContents:any = [];

    //  candidateObj={
    //   "userId": 1,
    //   "id": 2,
    //   "title": "qui est esse",
    //   "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    // };

      public constructor(private _appService : AppService) {

        console.log('check : ' , this._appService.check );
        this.candidateObj = this._appService.check;
        this._appService.getAllUploads().
        subscribe(
          data => {
            this.uploads = data;
            console.log(data);},
          error => console.error(error)
        )
       //  this.subscription = this._appService.newSubject.subscribe(
       //    data=> {
       //       console.log('data : ',data);
       //       this.candidateObj = data;
       //   }
       // )
      }

      ngOnInit() {
      }

      // gotoC(data){
      //   this.showC=true;
      //   this.nameC=data;
      //
      //
      // }

      getForm(list) {
        // this._appService.getCFile().subscribe(
        //
        //     data => {
        //       console.log(data);
        //     this.data=data;},
        //       error => console.error(error)
        //
        // )
        // console.log(list);
        // console.log(list.address);
          this.fileContents = list.fileContents;




      }

      pushData(value , topicObject , index , name) {
        this.object.fileTopic = name;
        this.object.fileContents[index].topic=topicObject.fileContents[index].topic;
        this.object.fileContents[index].weightage =topicObject.fileContents[index].weightage;
        this.object.fileContents[index].interviwerRating = value;
      }

        saveChanges(){
            this.arr.push(this.object);
        }


      postData(){

        this._appService.postData(this.arr)
        .subscribe(  data =>{ console.log(data); },
          error => console.error(error)
        )
      }


      goto(index) {
        console.log(index);
       this.listOfCards.push(this.uploads[index]);
        // for(let f of this.fake) {
        //   console.log(f);
        // }
      //  console.log(this.fake);
      }
  }
