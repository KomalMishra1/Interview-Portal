import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {FileUploadModule} from 'ng2-file-upload';
import {HttpClientModule} from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { VirtualScrollModule } from 'angular2-virtual-scroll';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ROUTING} from './app.routing';
import { FormComponent } from './form/form.component';
import { AddfileComponent } from './addfile/addfile.component';
import {AppService} from './app.service';
import { BasicDetailsComponent } from './basic-details/basic-details.component';
import { EvaluationFormComponent } from './evaluation-form/evaluation-form.component';
import { ListComponent } from './list/list.component';
import { OptionsComponent } from './options/options.component';
import { AllComponent } from './all/all.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormComponent,
    AddfileComponent,
    BasicDetailsComponent,
    EvaluationFormComponent,
    ListComponent,
    OptionsComponent,
    AllComponent,
    RegisterComponent,
    ProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    FormsModule,
    FileUploadModule,
    ReactiveFormsModule,
    HttpClientModule,
    InfiniteScrollModule,
    VirtualScrollModule

  ],
  providers: [AppService , ListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
