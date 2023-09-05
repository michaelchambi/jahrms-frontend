import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveRoutingModule } from './leave-routing.module';
import { AddMyLeaveFormComponent } from '../components/my-leave/forms/add-my-leave-form/add-my-leave-form.component';
import { EditMyLeaveFormComponent } from '../components/my-leave/forms/edit-my-leave-form/edit-my-leave-form.component';
import { EditMyLeaveLayoutComponent } from '../components/my-leave/layout/edit-my-leave-layout/edit-my-leave-layout.component';
import { AddMyLeaveLayoutComponent } from '../components/my-leave/layout/add-my-leave-layout/add-my-leave-layout.component';
import { ViewMyLeaveComponent } from '../components/my-leave/view/view-my-leave/view-my-leave.component';
import { MyLeaveLayoutComponent } from '../components/my-leave/layout/my-leave-layout/my-leave-layout.component';
import { SettingsRoutingModule } from 'src/app/settings/settings-routing.module';
import { StructureModule } from 'src/app/structure/structure.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { AddEmployeeLeaveFormComponent } from '../components/employee-leave/forms/add-employee-leave-form/add-employee-leave-form.component';
import { EditEmployeeLeaveFormComponent } from '../components/employee-leave/forms/edit-employee-leave-form/edit-employee-leave-form.component';
import { EditEmployeeLeaveLayoutComponent } from '../components/employee-leave/layout/edit-employee-leave-layout/edit-employee-leave-layout.component';
import { ViewEmployeeLeaveLayoutComponent } from '../components/employee-leave/layout/view-employee-leave-layout/view-employee-leave-layout.component';
import { AddEmployeeLeaveLayoutComponent } from '../components/employee-leave/layout/add-employee-leave-layout/add-employee-leave-layout.component';
import { ViewEmployeeLeaveComponent } from '../components/employee-leave/view/view-employee-leave/view-employee-leave.component';


@NgModule({
  declarations: [
    AddMyLeaveFormComponent,
    EditMyLeaveFormComponent,
    EditMyLeaveLayoutComponent,
    AddMyLeaveLayoutComponent,
    MyLeaveLayoutComponent,
    ViewMyLeaveComponent,
    AddEmployeeLeaveFormComponent,
    EditEmployeeLeaveFormComponent,
    EditEmployeeLeaveLayoutComponent,
    AddEmployeeLeaveLayoutComponent,
    ViewEmployeeLeaveLayoutComponent,
    ViewEmployeeLeaveComponent,
  ],
  imports: [
    CommonModule,
    LeaveRoutingModule,
    CommonModule,
    SettingsRoutingModule,
    StructureModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    AngularEditorModule,
    NgxExtendedPdfViewerModule
  ]
})
export class LeaveModule { }
