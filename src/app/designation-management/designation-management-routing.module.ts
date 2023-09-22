import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/auth/auth.guard';
import { ViewPromotionLayoutComponent } from './components/layaout/view-promotion-layout/view-promotion-layout.component';
import { ViewRecategorizationLayoutComponent } from './components/layaout/view-recategorization-layout/view-recategorization-layout.component';
import { ViewAppointmentLayoutComponent } from './components/layaout/view-appointment-layout/view-appointment-layout.component';
import { ViewFirstDesignationLayoutComponent } from './components/layaout/view-first-designation-layout/view-first-designation-layout.component';
import { EditDesigantionChangeLayoutComponent } from './components/layout/edit-desigantion-change-layout/edit-desigantion-change-layout.component';
import { AddDesigantionChangeLayoutComponent } from './components/layout/add-desigantion-change-layout/add-desigantion-change-layout.component';
import { ViewDesigantionChangeLayoutComponent } from './components/layout/view-desigantion-change-layout/view-desigantion-change-layout.component';

const routes: Routes = [
  { path: 'promotion/:id', component: ViewPromotionLayoutComponent,title: 'Mwanzo', canActivate: [AuthGuard]},
  { path: 'recategorization/:id', component: ViewRecategorizationLayoutComponent,title: 'Matangazo', canActivate: [AuthGuard]},
  { path: 'appointment/:id', component: ViewAppointmentLayoutComponent,title: 'Ongeza Matangazo', canActivate: [AuthGuard]},
  { path: 'first-designation/:id', component: ViewFirstDesignationLayoutComponent,title: 'Ongeza Matangazo', canActivate: [AuthGuard]},
  { path: 'edit-designatin-change/:id', component: EditDesigantionChangeLayoutComponent,title: 'Mwanzo', canActivate: [AuthGuard]},
  { path: 'add-designatin-change/:id', component: AddDesigantionChangeLayoutComponent,title: 'Mwanzo', canActivate: [AuthGuard]},
  { path: 'view-designation-change/:id', component: ViewDesigantionChangeLayoutComponent,title: 'Mwanzo', canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignationManagementRoutingModule { }
