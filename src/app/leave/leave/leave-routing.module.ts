import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditMyLeaveLayoutComponent } from '../components/my-leave/layout/edit-my-leave-layout/edit-my-leave-layout.component';
import { AddMyLeaveLayoutComponent } from '../components/my-leave/layout/add-my-leave-layout/add-my-leave-layout.component';
import { MyLeaveLayoutComponent } from '../components/my-leave/layout/my-leave-layout/my-leave-layout.component';
import { EditEmployeeLeaveLayoutComponent } from '../components/employee-leave/layout/edit-employee-leave-layout/edit-employee-leave-layout.component';
import { ViewEmployeeLeaveLayoutComponent } from '../components/employee-leave/layout/view-employee-leave-layout/view-employee-leave-layout.component';
import { AddEmployeeLeaveLayoutComponent } from '../components/employee-leave/layout/add-employee-leave-layout/add-employee-leave-layout.component';
import { MyLeaveDeteilsLayoutComponent } from '../components/my-leave/layout/my-leave-deteils-layout/my-leave-deteils-layout.component';
import { LeaveManagementComponent } from '../components/my-leave/layout/leave-management/leave-management.component';



const routes: Routes = [
  {
    path: 'leave-management/:id',
    component: LeaveManagementComponent,
    title: 'Leave'
  },
  {
    path: 'my-leave/:id',
    component: MyLeaveLayoutComponent,
    title: 'Leave'
  },
  {
    path: 'add-my-leave/:id',
    component: AddMyLeaveLayoutComponent,
    title: 'Leave'
  },
  {
    path: 'edit-my-leave/:id',
    component: EditMyLeaveLayoutComponent,
    title: 'Leave'
  },
  {
  path: 'employee-leave/:id',
  component: ViewEmployeeLeaveLayoutComponent,
  title: 'Leave'
},
  

{
  path: 'add-employee-leave/:id',
  component: AddEmployeeLeaveLayoutComponent,
  title: 'Leave'
},


{
  path: 'show-leave/:id/:id2',
  component: EditEmployeeLeaveLayoutComponent,
  title: 'Leave'
},

{
  path: 'show-leave-deteils/:id',
  component: MyLeaveDeteilsLayoutComponent,
  title: 'Leave'
},




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveRoutingModule { }
