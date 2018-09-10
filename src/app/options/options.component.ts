import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit() {
  }

moveToForm() {
  this._router.navigate(['/basic']);
}

moveToUpload() {
    this._router.navigate(['/add']);
}

seeAllCandidates() {
  this._router.navigate(['/all']);
}
}
