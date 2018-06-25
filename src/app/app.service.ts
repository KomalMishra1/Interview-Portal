import {Injectable} from '@angular/core';
import {HttpClient , HttpHeaders  , HttpResponse} from '@angular/common/http';
import 'rxjs';
import {Observable} from 'rxjs';


@Injectable()


export class AppService {


  constructor(private _http : HttpClient) {}

downloadFile(file : String) {
  var body = {filename : file};

  return this._http.post('http://localhost:3000/file/download' , body , {
    responseType : 'blob' ,
    headers:new HttpHeaders().append('Content-Type' , 'application/json')
  });

}



postBasicDetails(body : any){
  return this._http.post('http://35.162.205.122:5000/test' , body , {
    responseType : 'text',
    observe : 'response',
    // withCredentials : true,
    // headers:new HttpHeaders().append('Content-Type' , 'application/json'),


  });
}

postProjectExperience(body : any) {
  return this._http.post('http//localhost:3000/employee.save' , body , {
    observe : 'body',
    withCredentials : true,
    headers:new HttpHeaders().append('Content-Type' , 'application/json')
  });
}

postKeyCompetencies(body : any) {
  return this._http.post('http//localhost:3000/employee.save' , body , {
    observe : 'body',
    withCredentials : true,
    headers:new HttpHeaders().append('Content-Type' , 'application/json')
  });
}

postToolsKnowledge(body : any) {
  return this._http.post('http://localhost:3000/employees/ToolKnowledgeSave' , body , {
    observe : 'body',
    withCredentials : true,
    headers:new HttpHeaders().append('Content-Type' , 'application/json')
  });
}

postProjectManagement(body : any) {
  return this._http.post('http://localhost:3000/employees/ProjectManagementSave' , body , {
    observe : 'body',
    withCredentials : true,
    headers:new HttpHeaders().append('Content-Type' , 'application/json')
  });
}

postTechnicalMonitoring(body : any) {
  return this._http.post('http//localhost:3000/employee.save' , body , {
    observe : 'body',
    withCredentials : true,
    headers:new HttpHeaders().append('Content-Type' , 'application/json')
  });
}

postTecnicalSpecialist(body : any) {
  return this._http.post('http://localhost:3000/employees/TechnicalSpecialistSave' , body , {
    observe : 'body',
    withCredentials : true,
    headers:new HttpHeaders().append('Content-Type' , 'application/json')
  });
}

postConclusion(body : any) {
  return this._http.post('http//localhost:3000/employee.save' , body , {
    observe : 'body',
    withCredentials : true,
    headers:new HttpHeaders().append('Content-Type' , 'application/json')
  });
}



}
