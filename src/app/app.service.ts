import {Injectable} from '@angular/core';
import {HttpClient , HttpHeaders  , HttpResponse} from '@angular/common/http';
import 'rxjs';
import {Subject} from 'rxjs';
import {Observable} from 'rxjs';


@Injectable()


export class AppService {

  public newSubject = new Subject<any>();
  public check : any;
  public check1 : any;
  constructor(private _http : HttpClient) {}

  getCandidateData(data) {
  //  this.newSubject.next(data);
    this.check= data;
  }

  getCandidateOfAdminData(data){
    this.check1= data;
  }

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
  return this._http.post('http://localhost:3000/employee.save' , body , {
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
  return this._http.post('http://localhost:3000/employee.save' , body , {
    observe : 'body',
    withCredentials : true,
    headers:new HttpHeaders().append('Content-Type' , 'application/json')
  });
}


getCandidateList(id): Observable<any> {
      return this._http.get('https://jsonplaceholder.typicode.com/posts/ + id', {responseType: 'json' ,
       headers:new HttpHeaders().append('Content-Type' , 'application/json')});
}




getCFile():  Observable<any> {
  return this._http.get('https://jsonplaceholder.typicode.com/posts/', {
   responseType : 'json',
     headers:new HttpHeaders().append('Content-Type' , 'application/json')
  });
}

getAllUploads():  Observable<any> {
  return this._http.get('https://jsonplaceholder.typicode.com/users', {
   responseType : 'json',
     headers:new HttpHeaders().append('Content-Type' , 'application/json')
  });
}


postData(body : any) {
  return this._http.post('http//localhost:3000/employee.save' , body , {
    observe : 'body',
    withCredentials : true,
    headers:new HttpHeaders().append('Content-Type' , 'application/json')
  });
}

getAllCandidates(body : any): Observable<any> {
      return this._http.get('https://jsonplaceholder.typicode.com/posts/', {responseType: 'json' ,
       headers:new HttpHeaders().append('Content-Type' , 'application/json')});
}

}
