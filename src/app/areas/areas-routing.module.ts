import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/auth/auth.guard';
import { AreasLayoutComponent } from './components/areas/layout/areas-layout/areas-layout.component';

const routes: Routes = [
  //======================================================================================
  //  AREAS DETAILS ROUTES
//======================================================================================
{path: 'my-areas/:id', component: AreasLayoutComponent,title: 'Malimbikizi',canActivate: [AuthGuard]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreasRoutingModule { }
