

import { AddMyTrensferFormComponent } from './components/my-transfer/forms/add-my-trensfer-form/add-my-trensfer-form.component';
import { EditMyTrensferFormComponent } from './components/my-transfer/forms/edit-my-trensfer-form/edit-my-trensfer-form.component';
import { EditMyTrensferLayoutComponent } from './components/my-transfer/layout/edit-my-trensfer-layout/edit-my-trensfer-layout.component';
import { AddMyTrensferLayoutComponent } from './components/my-transfer/layout/add-my-trensfer-layout/add-my-trensfer-layout.component';
import { ViewMyTrensferLayoutComponent } from './components/my-transfer/layout/view-my-trensfer-layout/view-my-trensfer-layout.component';
import { ViewMyTrensferDeteilsLayoutComponent } from './components/my-transfer/layout/view-my-trensfer-deteils-layout/view-my-trensfer-deteils-layout.component';
import { ViewMyTrensferViewComponent } from './components/my-transfer/view/view-my-trensfer-view/view-my-trensfer-view.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferRoutingModule } from './transfer-routing.module';
import { SettingsRoutingModule } from 'src/app/settings/settings-routing.module';
import { StructureModule } from 'src/app/structure/structure.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { EditEmployeeTrensferFormComponent } from './components/employee-transfer/forms/edit-employee-trensfer-form/edit-employee-trensfer-form.component';
import { EditEmployeeTrensferLayoutComponent } from './components/employee-transfer/layout/edit-employee-trensfer-layout/edit-employee-trensfer-layout.component';
import { AddEmployeeTrensferLayoutComponent } from './components/employee-transfer/layout/add-employee-trensfer-layout/add-employee-trensfer-layout.component';
import { ViewEmployeeTrensferLayoutComponent } from './components/employee-transfer/layout/view-employee-trensfer-layout/view-employee-trensfer-layout.component';
import { ViewEmployeeTrensferViewComponent } from './components/employee-transfer/view/view-employee-trensfer-view/view-employee-trensfer-view.component';
import { AddEmployeeTrensferFormComponent } from './components/employee-transfer/forms/add-employee-trensfer-form/add-employee-trensfer-form.component';
import { ViewEmployeeTrensferDetailsLayoutComponent } from './components/employee-transfer/layout/view-employee-trensfer-details-layout/view-employee-trensfer-details-layout.component';
import { ViewEmployeeTrensfeDetailsrViewComponent } from './components/employee-transfer/view/view-employee-trensfe-detailsr-view/view-employee-trensfe-detailsr-view.component';
import { ViewEmployeeRequestViewComponent } from './components/employee-transfer/view/view-employee-request-view/view-employee-request-view.component';
import { EmployeeRequestLayaoutComponent } from './components/employee-transfer/layout/employee-request-layaout/employee-request-layaout.component';
import { AddTransferReasonComponent } from './components/transfer-master-data/forms/add-transfer-reason/add-transfer-reason.component';
import { EditTransferReasonComponent } from './components/transfer-master-data/forms/edit-transfer-reason/edit-transfer-reason.component';
import { EditTransferReasonLayoutComponent } from './components/transfer-master-data/layout/edit-transfer-reason-layout/edit-transfer-reason-layout.component';
import { AddTransferReasonLayoutComponent } from './components/transfer-master-data/layout/add-transfer-reason-layout/add-transfer-reason-layout.component';
import { ViewTransferReasonLayoutComponent } from './components/transfer-master-data/layout/view-transfer-reason-layout/view-transfer-reason-layout.component';
import { ViewTransferReasonComponent } from './components/transfer-master-data/view/view-transfer-reason/view-transfer-reason.component';


@NgModule({
  declarations: [
    AddMyTrensferFormComponent,
    EditMyTrensferFormComponent,
    EditMyTrensferLayoutComponent,
    AddMyTrensferLayoutComponent,
    ViewMyTrensferLayoutComponent,
    ViewMyTrensferDeteilsLayoutComponent,
    ViewMyTrensferViewComponent,
    EditEmployeeTrensferFormComponent,
    EditEmployeeTrensferLayoutComponent,
    AddEmployeeTrensferLayoutComponent,
    ViewEmployeeTrensferLayoutComponent,
    ViewEmployeeTrensferViewComponent,
    AddEmployeeTrensferFormComponent,
    ViewEmployeeTrensferDetailsLayoutComponent,
    ViewEmployeeTrensfeDetailsrViewComponent,
    ViewEmployeeRequestViewComponent,
    EmployeeRequestLayaoutComponent,
    AddTransferReasonComponent,
    EditTransferReasonComponent,
    EditTransferReasonLayoutComponent,
    AddTransferReasonLayoutComponent,
    ViewTransferReasonLayoutComponent,
    ViewTransferReasonComponent,
  ],






  imports: [
    CommonModule,
    TransferRoutingModule,
    // SettingsRoutingModule,
    StructureModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    AngularEditorModule,
    NgxExtendedPdfViewerModule
  ]

})
export class TransferModule { }
