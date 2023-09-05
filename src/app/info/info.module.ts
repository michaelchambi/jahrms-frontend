import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginSystemNameComponent } from './components/login-system-name/login-system-name/login-system-name.component';
import { SideBarNameComponent } from './components/side-bar-name/side-bar-name/side-bar-name.component';



@NgModule({
  declarations: [
    LoginSystemNameComponent,
    SideBarNameComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginSystemNameComponent,
    SideBarNameComponent
  ]
})
export class InfoModule { }
