import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/auth/auth.guard';

import { EditMainPostLayoutComponent } from './components/main-post/layout/edit-main-post-layout/edit-main-post-layout.component';
import { AddMainPostLayoutComponent } from './components/main-post/layout/add-main-post-layout/add-main-post-layout.component';
import { ViewMainPostLayoutComponent } from './components/main-post/layout/view-main-post-layout/view-main-post-layout.component';
import { EditOutPostLayoutComponent } from './components/out-post/layout/edit-out-post-layout/edit-out-post-layout.component';
import { AddOutPostLayoutComponent } from './components/out-post/layout/add-out-post-layout/add-out-post-layout.component';
import { ViewOutPostLayoutComponent } from './components/out-post/layout/view-out-post-layout/view-out-post-layout.component';

import { EditDirectorateLayoutComponent } from './components/directorate-post/layout/edit-directorate-layout/edit-directorate-layout.component';
import { ViewDirectorateLayoutComponent } from './components/directorate-post/layout/view-directorate-layout/view-directorate-layout.component';
import { EditFinalPostLayoutComponent } from './components/final-post/layout/edit-final-post-layout/edit-final-post-layout.component';
import { ViewFinalPostLayoutComponent } from './components/final-post/layout/view-final-post-layout/view-final-post-layout.component';


const routes: Routes = [

  { path: 'out-post/:id', component: ViewOutPostLayoutComponent,title: 'Out Post Employee', canActivate: [AuthGuard]},
  { path: 'add-out-post/:id', component: AddOutPostLayoutComponent,title: 'Out add Post Employee', canActivate: [AuthGuard]},
  { path: 'edit-out-post/:id', component: EditOutPostLayoutComponent,title: 'Out edit Post Employee', canActivate: [AuthGuard]},
  { path: 'main-post/:id', component: ViewMainPostLayoutComponent,title: 'main Post Employee', canActivate: [AuthGuard]},
  { path: 'add-main-post/:id', component: AddMainPostLayoutComponent,title: 'main add Post Employee', canActivate: [AuthGuard]},
  { path: 'edit-main-post/:id', component: EditMainPostLayoutComponent,title: 'main edit Post Employee', canActivate: [AuthGuard]},


  { path: 'edit-final-post/:id', component: EditFinalPostLayoutComponent,title: 'final Post Employee', canActivate: [AuthGuard]},
  { path: 'directorate-post/:id', component: ViewDirectorateLayoutComponent,title: 'directorate add Post Employee', canActivate: [AuthGuard]},
  { path: 'edit-directorate-post/:id', component: EditDirectorateLayoutComponent,title: 'directorate edit Post Employee', canActivate: [AuthGuard]},
  { path: 'final-post/:id', component: ViewFinalPostLayoutComponent,title: 'final edit Post Employee', canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
