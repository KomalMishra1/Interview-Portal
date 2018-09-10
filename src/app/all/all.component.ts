import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';
import { ChangeEvent } from 'angular2-virtual-scroll';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

list : any = [];
showCompleted : boolean =false;
showPending : boolean=false;
public employeeObj : any;


throttle = 300;
scrollDistance = 1;
scrollUpDistance = 2;
direction = '';
modalOpen = false;
listToBeShown : any =[];
sum : number=10 ;
  datas: any=[];
array = [];
sum1 : number =1;


    items: any=[];
   protected buffer: any = [];
   protected loading: boolean;


  constructor(private _router : Router , private _appService : AppService) {
      // this._appService.getAllCandidates()
      // .subscribe(
      //   data => {
      //     this.list = data;
      //     console.log("in list " , this.list);},
      //   error => console.error(error)
      // )

      this._appService.getAllCandidates(int )
      .subscribe(
        data => {
          this.datas = data;
            this.addItem(this.sum1, this.sum);
         console.log(this.datas);},
         error => console.error(error)
      )
     }




  ngOnInit() {


  }




   addItem(startIndex, endIndex) {
     console.log("startIndex" , startIndex);
      console.log("lastIndex" , endIndex);
    for (var i = startIndex; i < endIndex; ++i) {
      this.array.push(this.datas[i]);
    }
  }

  onScrollDown() {
      console.log('scrolled!!');
      // add another 6 items
      const start = this.sum;
      this.sum += 1;
      console.log(this.sum)
       if(this.sum<this.datas.length){
          this.addItem(start, this.sum);
       }
    }


getStatus() {
  for(let status of this.list ) {
    if(status.status == '0') {
      this.showCompleted = true;
      this.showPending=false;
    }
    else {
      this.showPending=true;
      this.showCompleted=false;
    }
  }
}



	onScrollUp () {
    	console.log('scrolled up!!')
    }



        protected fetchMore(event: ChangeEvent) {
            if (event.end !== this.buffer.length) return;
            this.loading = true;
            this.fetchNextChunk(this.buffer.length, 10).then(chunk => {
                this.buffer = this.buffer.concat(chunk);
                this.loading = false;
            }, () => this.loading = false);
        }

        protected fetchNextChunk(skip: number, limit: number): Promise<any> {
       return new Promise((resolve, reject) => {

       });
   }

    // appendItems(){
    //   // for( var i=startIndex; i<endIndex ; i++){
    //   //   console.log("in list " , this.list[i]);
    //   //       this.listToBeShown.push(this.list[i]);
    //   //       console.log(this.listToBeShown);
    //   for(var i=0;i<this.sum ; i++) {
    //     console.log(this.list[i]);
    //   }
    //       }

    moveToFullDetail(name) {
      this.employeeObj=name;
      // console.log('hit -> ',this.employeeObj);
      this._appService.getCandidateOfAdminData(this.employeeObj);
      // getParticularCandidate(data.name);

      // let navigationExtras: NavigationExtras = {
      //        queryParams: {
      //            "firstname": "Nic",
      //            "lastname": "Raboy"
      //        }
      //    };

      this._router.navigate(['/profile']);



    }
    }
