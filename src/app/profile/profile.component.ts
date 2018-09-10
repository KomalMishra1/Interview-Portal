import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

   candidateObj : any;

  constructor(private _appService : AppService) {
    console.log('check1 : ' , this._appService.check1 );
    this.candidateObj = this._appService.check1;
   }

  ngOnInit() {
  }

}
