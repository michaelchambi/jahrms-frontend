import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { NgSelectModule } from '@ng-select/ng-select';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { StructureModule } from '../structure/structure.module';
import { ApplicantsHomeLayoutComponent } from './components/dashboard/applicants/layout/applicants-home-layout/applicants-home-layout.component';
import { ApplicantsHomeViewComponent } from './components/dashboard/applicants/views/applicants-home-view/applicants-home-view.component';
import { AnnouncementLayoutComponent } from './components/announcement/layout/announcement-layout/announcement-layout.component';
import { AddAnnouncementLayoutComponent } from './components/announcement/layout/add-announcement-layout/add-announcement-layout.component';
import { EditAnnouncementLayoutComponent } from './components/announcement/layout/edit-announcement-layout/edit-announcement-layout.component';
import { EditAnnouncementFormComponent } from './components/announcement/forms/edit-announcement-form/edit-announcement-form.component';
import { AddAnnouncementFormComponent } from './components/announcement/forms/add-announcement-form/add-announcement-form.component';
import { ViewAnnouncementComponent } from './components/announcement/views/view-announcement/view-announcement.component';
import { BankLayoutComponent } from './components/bank/layout/bank-layout/bank-layout.component';
import { AddBankLayoutComponent } from './components/bank/layout/add-bank-layout/add-bank-layout.component';
import { EditBankLayoutComponent } from './components/bank/layout/edit-bank-layout/edit-bank-layout.component';
import { EditBankFormsComponent } from './components/bank/forms/edit-bank-forms/edit-bank-forms.component';
import { AddBankFormsComponent } from './components/bank/forms/add-bank-forms/add-bank-forms.component';
import { BankViewComponent } from './components/bank/views/bank-view/bank-view.component';

@NgModule({
  declarations: [
    ApplicantsHomeLayoutComponent,
    ApplicantsHomeViewComponent,
    AnnouncementLayoutComponent,
    AddAnnouncementLayoutComponent,
    EditAnnouncementLayoutComponent,
    EditAnnouncementFormComponent,
    AddAnnouncementFormComponent,
    ViewAnnouncementComponent,
    BankLayoutComponent,
    AddBankLayoutComponent,
    EditBankLayoutComponent,
    EditBankFormsComponent,
    AddBankFormsComponent,
    BankViewComponent,
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    HomeRoutingModule,
    StructureModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    AngularEditorModule,
  ],
  exports: [
    ApplicantsHomeLayoutComponent,
    ApplicantsHomeViewComponent,
    // ApplicantsHomeChartsViewComponent,
  ]
})
export class HomeModule { }
