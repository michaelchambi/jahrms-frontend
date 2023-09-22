import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { NgSelectModule } from '@ng-select/ng-select';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DesignationManagementRoutingModule } from './designation-management-routing.module';
import { StructureModule } from '../structure/structure.module';
import { ViewPromotionLayoutComponent } from './components/layaout/view-promotion-layout/view-promotion-layout.component';
import { ViewRecategorizationLayoutComponent } from './components/layaout/view-recategorization-layout/view-recategorization-layout.component';
import { ViewAppointmentLayoutComponent } from './components/layaout/view-appointment-layout/view-appointment-layout.component';
import { ViewAppointmentViewComponent } from './components/view/view-appointment-view/view-appointment-view.component';
import { ViewRecategorizationViewComponent } from './components/view/view-recategorization-view/view-recategorization-view.component';
import { ViewPromotionViewComponent } from './components/view/view-promotion-view/view-promotion-view.component';
import { ViewFirstDesignationLayoutComponent } from './components/layaout/view-first-designation-layout/view-first-designation-layout.component';
import { ViewFirstDesignationViewComponent } from './components/view/view-first-designation-view/view-first-designation-view.component';
import { AddDesigantionChangeFormComponent } from './components/forms/add-desigantion-change-form/add-desigantion-change-form.component';
import { EditDesigantionChangeFormComponent } from './components/forms/edit-desigantion-change-form/edit-desigantion-change-form.component';
import { EditDesigantionChangeLayoutComponent } from './components/layout/edit-desigantion-change-layout/edit-desigantion-change-layout.component';
import { AddDesigantionChangeLayoutComponent } from './components/layout/add-desigantion-change-layout/add-desigantion-change-layout.component';
import { ViewDesigantionChangeLayoutComponent } from './components/layout/view-desigantion-change-layout/view-desigantion-change-layout.component';
import { ViewDesigantionChangeComponent } from './components/view/view-desigantion-change/view-desigantion-change.component';


@NgModule({
  declarations: [
  
  
    ViewPromotionLayoutComponent,
    ViewRecategorizationLayoutComponent,
    ViewAppointmentLayoutComponent,
    ViewFirstDesignationLayoutComponent,
    ViewAppointmentViewComponent,
    ViewRecategorizationViewComponent,
    ViewPromotionViewComponent,
    ViewFirstDesignationViewComponent,
    AddDesigantionChangeFormComponent,
    EditDesigantionChangeFormComponent,
    EditDesigantionChangeLayoutComponent,
    AddDesigantionChangeLayoutComponent,
    ViewDesigantionChangeLayoutComponent,
    ViewDesigantionChangeComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    DesignationManagementRoutingModule,
    StructureModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    AngularEditorModule,
  ],
  exports: [
    // ApplicantsHomeLayoutComponent,
    // ApplicantsHomeViewComponent,
    // ApplicantsHomeChartsViewComponent,
  ]
})
export class DesignationManagementModule { }
