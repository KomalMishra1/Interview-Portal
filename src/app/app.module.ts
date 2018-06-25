import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {FileUploadModule} from 'ng2-file-upload';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ROUTING} from './app.routing';
import { FormComponent } from './form/form.component';
import { AddfileComponent } from './addfile/addfile.component';
import {AppService} from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormComponent,
    AddfileComponent,

  ],
  imports: [
    BrowserModule,
    ROUTING,
    FormsModule,
    FileUploadModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
