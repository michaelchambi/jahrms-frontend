import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantsHomeLayoutComponent } from './components/dashboard/applicants/layout/applicants-home-layout/applicants-home-layout.component';
import { AuthGuard } from '../services/auth/auth.guard';
import { AnnouncementLayoutComponent } from './components/announcement/layout/announcement-layout/announcement-layout.component';
import { AddAnnouncementLayoutComponent } from './components/announcement/layout/add-announcement-layout/add-announcement-layout.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: ApplicantsHomeLayoutComponent,title: 'Mwanzo', canActivate: [AuthGuard]},
  { path: 'announcement/:id', component: AnnouncementLayoutComponent,title: 'Matangazo', canActivate: [AuthGuard]},
  { path: 'add-announcement/:id', component: AddAnnouncementLayoutComponent,title: 'Ongeza Matangazo', canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
