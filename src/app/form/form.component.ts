import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup , FormControl , Validators , FormArray} from '@angular/forms';
import {AppService} from '../app.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
showSkills : boolean;
showExperience :boolean;
showKnowledge : boolean;
showCompetencies : boolean;
showProject : boolean;
showMonitoring : boolean;
showSpecialist : boolean;
showConclusion : boolean;

data;
keys:any=[];
list :any =[];
topics :any=[];
weightage : any = [];

basicDetailsForm : FormGroup=new FormGroup({
  name: new FormControl(null , Validators.required),
  mobile: new FormControl(null ,  Validators.required),
  email: new FormControl(null , [Validators.email ,  Validators.required]),
  totalExperience: new FormControl(null ,  Validators.required),
  relevantExperience: new FormControl(null ,  Validators.required),
  currentrole: new FormControl(null ,  Validators.required),
  interviewerId: new FormControl(null ,  Validators.required),
  modeOfInterview: new FormControl(null ,  Validators.required),

});


projectExperienceForm : FormGroup=new FormGroup({
  devicesWithExperience: new FormControl(null , Validators.required),
  protocolKnowledge: new FormControl(null ,  Validators.required),
  architectureKnowledge: new FormControl(null ,  Validators.required),
  rolePlayed: new FormControl(null ,  Validators.required),
  contributionTo: new FormControl(null ,  Validators.required),
  projectDescription: new FormControl(null ,  Validators.required)
});

keyCompetencyForm : FormGroup=new FormGroup({
learningAbility: new FormControl(null , Validators.required),
problemSolving: new FormControl(null ,  Validators.required),
teamPLayer: new FormControl(null ,  Validators.required),
communicationSkills: new FormControl(null ,  Validators.required),
  atittude: new FormControl(null ,  Validators.required),
  ownershipCommitment: new FormControl(null ,  Validators.required),
  selfInitiative: new FormControl(null ,  Validators.required),
  customerInteraction: new FormControl(null ,  Validators.required)
});

toolsKnowledgeForm : FormGroup=new FormGroup({
  toolType: new FormControl(null , Validators.required),
  toolsKnowledge: new FormControl(null ,  Validators.required)
});

projectManagementForm : FormGroup=new FormGroup({
projectMethodology: new FormControl(null , Validators.required),
projectApproach: new FormControl(null ,  Validators.required),
performanceManagement: new FormControl(null ,  Validators.required),
customerInterface: new FormControl(null ,  Validators.required),
interfaceWithStakeholders: new FormControl(null ,  Validators.required),
  costCuttingIdeas: new FormControl(null ,  Validators.required),
projectFinancials: new FormControl(null ,  Validators.required)
});

technicalMonitoringForm : FormGroup=new FormGroup({
  technicalGuidance: new FormControl(null , Validators.required)
});

technicalSpecialistForm : FormGroup=new FormGroup({
contributionToInterview: new FormControl(null , Validators.required),
productDeploymentKnowledge: new FormControl(null ,  Validators.required),
technicalContribution: new FormControl(null ,  Validators.required),
technicalAuditContribution: new FormControl(null ,  Validators.required),
contributionToNewTechnology: new FormControl(null ,  Validators.required),
technicalPresentation: new FormControl(null ,  Validators.required),
performanceOptimization: new FormControl(null ,  Validators.required)
});

ConclusionForm : FormGroup=new FormGroup({
legend: new FormControl(null , Validators.required),
expectationsAndCommittment: new FormControl(null ,  Validators.required),
preference: new FormControl(null ,  Validators.required),
summary: new FormControl(null ,  Validators.required),
recommendations: new FormControl(null ,  Validators.required),
fitmantDesignation: new FormControl(null ,  Validators.required),
fitmentGrade: new FormControl(null ,  Validators.required)
});


  constructor(private _router : Router , private _appService : AppService) {
// this.showSkills=false;
// this.showExperience=false;
// this.showKnowledge=false;
// this.showCompetencies=false;
// this.showProject=false;
// this.showMonitoring=false;
// this.showSpecialist=false;
// this.showConclusion=false;
  }

  ngOnInit() {
  }

// addSkills() {
//   if(this.showSkills == false) {
//     this.showSkills=true;
//   }
//
//   else {
//     this.showSkills=false;
//   }
// }
//
// addExperience() {
//   if(this.showExperience == false) {
//     this.showExperience=true;
//   }
//
//   else {
//     this.showExperience=false;
//   }
//
// }
// addKnowledge(){
//   if(this.showKnowledge == false) {
//     this.showKnowledge=true;
//   }
//
//   else {
//     this.showKnowledge=false;
//   }
// }
// addCompetencies(){
//   if(this.showCompetencies == false) {
//     this.showCompetencies=true;
//   }
//
//   else {
//     this.showCompetencies=false;
//   }
//
// }
// addProject(){
//   if(this.showProject == false) {
//     this.showProject=true;
//   }
//
//   else {
//     this.showProject=false;
//   }
//
// }
// addMonitoring(){
//   if(this.showMonitoring == false) {
//     this.showMonitoring=true;
//   }
//
//   else {
//     this.showMonitoring=false;
//   }
// }
// addSpecialist(){
//   if(this.showSpecialist == false) {
//     this.showSpecialist=true;
//   }
//
//   else {
//     this.showSpecialist=false;
//   }
// }
// addConclusion(){
//
//   if(this.showConclusion == false) {
//     this.showConclusion=true;
//   }
//
//   else {
//     this.showConclusion=false;
//   }
// }
moveToAdd(){
this._router.navigate(['/add']);
}

postBasicDetails() {
  if(this.basicDetailsForm.invalid) {
    console.log('invalid'); return;
  }
console.log(JSON.stringify(this.basicDetailsForm.value))

  var newJSON = this.basicDetailsForm.value;
  newJSON['skills'] = this.list;

    // for(var i=0;i<this.list.length;i++){
    //   newJSON[this.list[i]] = this.list[i];
    // }

  console.log('a->',JSON.stringify(newJSON))

  this._appService.postBasicDetails(JSON.stringify(this.basicDetailsForm.value))
  .subscribe(
    // response => {console.log(this.data1);},
    // // data =>{ console.log(data); },
    // error => console.error(error)
      res => {
      this.data = JSON.parse(res.body);
      //creating dummy json
        this.data = {
        "language" : "C",
        "data" : [
          {
            "topic" : "array",
            "weight" :  30
          },
          {
            "topic" : "pointer",
            "weight" :  40
          }
        ]
      }


      console.log(this.data);

     },
       err=>console.log(err));

}

postProjectExperience() {
  if(this.projectExperienceForm.invalid) {
    console.log('invalid'); return;
  }
console.log(JSON.stringify(this.projectExperienceForm.value))
this._appService.postProjectExperience(JSON.stringify((this.projectExperienceForm.value),this.list))
.subscribe(
  data =>{ console.log(data); },
  error => console.error(error)
)
}

postKeyCompetencies() {
  if(this.keyCompetencyForm.invalid) {
    console.log('invalid'); return;
  }
console.log(JSON.stringify(this.keyCompetencyForm.value))
  this._appService.postKeyCompetencies(JSON.stringify(this.keyCompetencyForm.value))
  .subscribe(
    data =>{ console.log(data); },
    error => console.error(error)
  )
}

postToolsKnowledge() {
  if(this.toolsKnowledgeForm.invalid) {
    console.log('invalid'); return;
  }
console.log(JSON.stringify(this.toolsKnowledgeForm.value))
this._appService.postToolsKnowledge(JSON.stringify(this.toolsKnowledgeForm.value))
.subscribe(
  data =>{ console.log(data); },
  error => console.error(error)
)
}

postProjectManagement() {
  if(this.projectManagementForm.invalid) {
    console.log('invalid'); return;
  }
console.log(JSON.stringify(this.projectManagementForm.value))
  this._appService.postProjectExperience(JSON.stringify(this.projectManagementForm.value))
  .subscribe(
    data =>{ console.log(data); },
    error => console.error(error)
  )
}

postTechnicalMonitoring() {
  if(this.technicalMonitoringForm.invalid) {
    console.log('invalid'); return;
  }
console.log(JSON.stringify(this.technicalMonitoringForm.value))
  this._appService.postTechnicalMonitoring(JSON.stringify(this.technicalMonitoringForm.value))
  .subscribe(
    data =>{ console.log(data); },
    error => console.error(error)
  )
}

postTecnicalSpecialist() {
  if(this.technicalSpecialistForm.invalid) {
    console.log('invalid'); return;
  }
console.log(JSON.stringify(this.technicalSpecialistForm.value))
  this._appService.postTecnicalSpecialist(JSON.stringify(this.technicalSpecialistForm.value))
  .subscribe(
    data =>{ console.log(data); },
    error => console.error(error)
  )
}

postConclusion() {
  if(this.ConclusionForm.invalid) {
    console.log('invalid'); return;
  }
console.log(JSON.stringify(this.ConclusionForm.value))
  this._appService.postConclusion(JSON.stringify(this.ConclusionForm.value))
  .subscribe(
    data =>{ console.log(data); },
    error => console.error(error)
  )
}

go(a , event) {
  console.log(a);
  if(event.target.checked) {
    // this.list.push(a);

  this.list.push(a);
      console.log(this.list);
  }

  else {
    let i= this.list.indexOf(a);
    this.list.splice(i,1);
  }
}

generateForm() {




      if(this.data.language == 'C' ){
        console.log(this.data.data);
        for (var c of this.data.data) {
          this.topics.push(c.topics);
          this.weightage.push(c.weight);

        }

// for(var k in this.topic) {
//   console.log(this.topic)
// }

        // var keys = Object.keys(this.data.data);
        // var values = Object.values(this.data.data);



      }

//   if(this.data.language === 'j') {
//   this.language = this.data.data;
//   JSON.stringify(this.language);
//   console.log(this.language);
//   console.log(typeof this.language);
//   console.log(this.language[0].value);
//    let map = new Map(this.language);
// console.log(typeof(this.language));
// for(var list of this.language) {
//   console.log(this.language[list]);
// }
// //    for (let key of map.keys()) {
// //     console.log(key);
// // }
// }
}

}
