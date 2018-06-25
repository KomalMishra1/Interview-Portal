import {RouterModule , Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core/src/metadata/ng_module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {FormComponent} from './form/form.component';
import {AddfileComponent} from './addfile/addfile.component';


export const AppRoutes : Routes =[
  {path : '' , component : LoginComponent},
    {path : 'form' , component : FormComponent},
      {path : 'add' , component :  AddfileComponent}

];

export const ROUTING : ModuleWithProviders = RouterModule.forRoot(AppRoutes);
