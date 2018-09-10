import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

data:any=[];
public employeeObj : any;
id:any;



list = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
];

  constructor(private _router : Router , private _appService : AppService) { }
  getCandidateList() {
    console.log('inside');
  this._appService.getCandidateList(this.id).subscribe(
      data => {
	      this.data = data;
        console.log(this.data);
	  },
    error => console.error(error)
      );
}
  ngOnInit() {
  }

moveToFullDetail(name) {
  this.employeeObj=name;
  // console.log('hit -> ',this.employeeObj);
  this._appService.getCandidateData(this.employeeObj);
  // getParticularCandidate(data.name);

  // let navigationExtras: NavigationExtras = {
  //        queryParams: {
  //            "firstname": "Nic",
  //            "lastname": "Raboy"
  //        }
  //    };

  this._router.navigate(['/evaluate']);

}

getValue() {
  console.log(this.employeeObj);
  return this.employeeObj;
}

}
