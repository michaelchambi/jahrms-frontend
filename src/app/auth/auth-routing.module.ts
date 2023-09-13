import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from './components/login/layout/login-layout/login-layout.component';
import { ForgotPasswordLayoutComponent } from './components/forgot-password/layout/forgot-password-layout/forgot-password-layout.component';
import { ChangePasswordLayoutComponent } from './components/change-password/layout/change-password-layout/change-password-layout.component';
import { RegistrationLayoutComponent } from './components/registration/layout/registration-layout/registration-layout.component';
import { AuthGuard } from '../services/auth/auth.guard';
import { ResetSessionLayoutComponent } from './components/reset-session/layout/reset-session-layout/reset-session-layout.component';
import { ProfileLayoutComponent } from './components/profile/layout/profile-layout/profile-layout.component';
import { EditProfileLayoutComponent } from './components/profile/layout/edit-profile-layout/edit-profile-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  {
    path: 'login',
    component: LoginLayoutComponent,
    title: 'Ingia'
  },

  {
    path: 'forgot-password',
    component: ForgotPasswordLayoutComponent,
    title: 'Sahau neno la siri'
  },

  {
    path: 'change-password/:id',
    component: ChangePasswordLayoutComponent,
    title: 'Badili neno la siri',
    canActivate: [AuthGuard]
  },

  {
    path: 'user-registration',
    component: RegistrationLayoutComponent,
    title: 'Usajili'
  },

  {
    path: 'user-registration',
    component: RegistrationLayoutComponent,
    title: 'Usajili'
  },

  {
    path: 'restore-session',
    component: ResetSessionLayoutComponent,
    title: 'Rudisha Session'
  },
  {
    path: 'my-profile',
    component: ProfileLayoutComponent,
    title: 'Ukurasa wangu'
  },
  {
    path: 'edit-my-profile',
    component: EditProfileLayoutComponent,
    title: 'Change Details'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
