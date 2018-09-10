import {RouterModule , Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core/src/metadata/ng_module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {FormComponent} from './form/form.component';
import {AddfileComponent} from './addfile/addfile.component';
import {BasicDetailsComponent} from './basic-details/basic-details.component';
import {EvaluationFormComponent} from './evaluation-form/evaluation-form.component';
import {ListComponent} from './list/list.component';
import {OptionsComponent} from './options/options.component';
import {AllComponent} from './all/all.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';

export const AppRoutes : Routes =[
  {path : '' , component : LoginComponent},
    {path : 'form' , component : FormComponent},
      {path : 'add' , component :  AddfileComponent},
      {path : 'basic' , component :  BasicDetailsComponent},
        {path : 'evaluate' , component :  EvaluationFormComponent},
          {path : 'list' , component :  ListComponent},
            {path : 'options' , component :  OptionsComponent},
              {path : 'all' , component :  AllComponent},
                {path : 'register' , component :  RegisterComponent},
                {path : 'profile' , component :  ProfileComponent},
                {path : '**' , component :  NotFoundComponent}


];

export const ROUTING : ModuleWithProviders = RouterModule.forRoot(AppRoutes);
