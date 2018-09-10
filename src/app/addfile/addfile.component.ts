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
showMessage : boolean =false;
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

upload(event: any) {
       let files = event.target.files;
       //check file is valid
       if (!this.validateFile(files[0].name)) {
           console.log('Selected file format is not supported');
           alert("s");
           return false;
       }
       else {
         this.showMessage=false;
       }
     }

     validateFile(name: String) {
    var ext = name.substring(name.lastIndexOf('.') + 1);
    if (ext.toLowerCase() == 'xlsx') {
        return true;
    }
    else {
        return false;
    }
}

}
