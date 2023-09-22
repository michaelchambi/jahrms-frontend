import { EditMyTrensferLayoutComponent } from './components/my-transfer/layout/edit-my-trensfer-layout/edit-my-trensfer-layout.component';
import { AddMyTrensferLayoutComponent } from './components/my-transfer/layout/add-my-trensfer-layout/add-my-trensfer-layout.component';
import { ViewMyTrensferLayoutComponent } from './components/my-transfer/layout/view-my-trensfer-layout/view-my-trensfer-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEmployeeTrensferLayoutComponent } from './components/employee-transfer/layout/view-employee-trensfer-layout/view-employee-trensfer-layout.component';
import { AddEmployeeTrensferLayoutComponent } from './components/employee-transfer/layout/add-employee-trensfer-layout/add-employee-trensfer-layout.component';
import { EditEmployeeTrensferLayoutComponent } from './components/employee-transfer/layout/edit-employee-trensfer-layout/edit-employee-trensfer-layout.component';
import { ViewMyTrensferDeteilsLayoutComponent } from './components/my-transfer/layout/view-my-trensfer-deteils-layout/view-my-trensfer-deteils-layout.component';
import { ViewEmployeeTrensferDetailsLayoutComponent } from './components/employee-transfer/layout/view-employee-trensfer-details-layout/view-employee-trensfer-details-layout.component';
import { EmployeeRequestLayaoutComponent } from './components/employee-transfer/layout/employee-request-layaout/employee-request-layaout.component';
import { ViewTransferReasonLayoutComponent } from './components/transfer-master-data/layout/view-transfer-reason-layout/view-transfer-reason-layout.component';
import { AddTransferReasonLayoutComponent } from './components/transfer-master-data/layout/add-transfer-reason-layout/add-transfer-reason-layout.component';
import { EditTransferReasonLayoutComponent } from './components/transfer-master-data/layout/edit-transfer-reason-layout/edit-transfer-reason-layout.component';




const routes: Routes = [
  {
    path: 'my-transfer/:id',
    component: ViewMyTrensferLayoutComponent,
    title: 'Transfer'
  },

  {
    path: 'add-my-transfer/:id',
    component: AddMyTrensferLayoutComponent,
    title: 'Transfer'
  },
  {
    path: 'edit-my-transfer/:id',
    component: EditMyTrensferLayoutComponent,
    title: 'Transfer'
  },
  {
  path: 'employee-transfer/:id',
  component: ViewEmployeeTrensferLayoutComponent,
  title: 'Transfer'
},
{
  path: 'transfer-request/:id',
  component: EmployeeRequestLayaoutComponent,
  title: 'Transfer'
},


{
  path: 'add-employee-transfer/:id',
  component: AddEmployeeTrensferLayoutComponent,
  title: 'Transfer'
},


{
  path: 'edit-transfer/:id/:id2',
  component: EditEmployeeTrensferLayoutComponent,
  title: 'Transfer'
},

{
  path: 'show-transfer/:id/:id2',
  component: ViewEmployeeTrensferDetailsLayoutComponent,
  title: 'Transfer'
},

{
  path: 'show-transfer-deteils/:id/:id2',
  component: ViewMyTrensferDeteilsLayoutComponent,
  title: 'Transfer'
},


{
  path: 'transfer-reason/:id',
  component: ViewTransferReasonLayoutComponent,
  title: 'Transfer'
},
{
  path: 'edit-transfer-reason/:id',
  component: EditTransferReasonLayoutComponent,
  title: 'Transfer'
},
{
  path: 'add-transfer-reason/:id',
  component: AddTransferReasonLayoutComponent,
  title: 'Transfer'
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferRoutingModule { }
