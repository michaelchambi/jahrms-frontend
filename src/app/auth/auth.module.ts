import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginLayoutComponent } from './components/login/layout/login-layout/login-layout.component';
import { LoginFormComponent } from './components/login/forms/login-form/login-form.component';
import { ForgotPasswordLayoutComponent } from './components/forgot-password/layout/forgot-password-layout/forgot-password-layout.component';
import { ForgotPasswordFormComponent } from './components/forgot-password/forms/forgot-password-form/forgot-password-form.component';
import { InfoModule } from '../info/info.module';
import { ChangePasswordFormComponent } from './components/change-password/forms/change-password-form/change-password-form.component';
import { ChangePasswordLayoutComponent } from './components/change-password/layout/change-password-layout/change-password-layout.component';
import { RegistrationFormComponent } from './components/registration/forms/registration-form/registration-form.component';
import { RegistrationLayoutComponent } from './components/registration/layout/registration-layout/registration-layout.component';
import { StructureModule } from '../structure/structure.module';
import { ResetSessionLayoutComponent } from './components/reset-session/layout/reset-session-layout/reset-session-layout.component';
import { ResetSessionFormComponent } from './components/reset-session/forms/reset-session-form/reset-session-form.component';


@NgModule({
  declarations: [
    LoginLayoutComponent,
    LoginFormComponent,
    ForgotPasswordLayoutComponent,
    ForgotPasswordFormComponent,
    ChangePasswordFormComponent,
    ChangePasswordLayoutComponent,
    RegistrationFormComponent,
    RegistrationLayoutComponent,
    ResetSessionLayoutComponent,
    ResetSessionFormComponent,
   
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    InfoModule,
    StructureModule,
  ],
  exports: [
    LoginLayoutComponent,
    LoginFormComponent,
    ForgotPasswordLayoutComponent,
    ForgotPasswordFormComponent,
    ChangePasswordFormComponent,
    ChangePasswordLayoutComponent,
    RegistrationFormComponent,
    RegistrationLayoutComponent,
    ResetSessionLayoutComponent,
    ResetSessionFormComponent,
    // ProfileLayoutComponent,
    // ProfileViewComponent,
    // EditProfileLayoutComponent,
    // EditProfileViewComponent,
  ]
})
export class AuthModule { }
