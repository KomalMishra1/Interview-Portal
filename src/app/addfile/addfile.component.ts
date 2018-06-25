import { Component, OnInit } from '@angular/core';
import {FileSelectDirective , FileUploader} from 'ng2-file-upload';
import {AppService} from '../app.service';


const uri="";

@Component({
  selector: 'app-addfile',
  templateUrl: './addfile.component.html',
  styleUrls: ['./addfile.component.css'],
  providers:[AppService]
})

export class AddfileComponent implements OnInit {
uploader : FileUploader = new FileUploader({url : uri});

attachmentList : any = [];

  constructor(private _fileservice : AppService) {

    this.uploader.onCompleteItem = (item : any , response : any , status : any , headers : any) => {
      this.attachmentList.push(JSON.parse(response));
    }

   }

  ngOnInit() {
  }
download(index) {
var filename = this.attachmentList[index].uploadname;

this._fileservice.downloadFile(filename)
.subscribe(
  data =>console.log(data),
  error =>console.error(error)
);
}

}
