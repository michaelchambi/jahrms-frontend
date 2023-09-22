import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from 'src/app/settings/settings-routing.module';
import { StructureModule } from 'src/app/structure/structure.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ViewMainPostLayoutComponent } from './components/main-post/layout/view-main-post-layout/view-main-post-layout.component';
import { JobRoutingModule } from './job-routing.module';





import { AddMainPostFormComponent } from './components/main-post/forms/add-main-post-form/add-main-post-form.component';
import { EditMainPostFormComponent } from './components/main-post/forms/edit-main-post-form/edit-main-post-form.component';
import { EditMainPostLayoutComponent } from './components/main-post/layout/edit-main-post-layout/edit-main-post-layout.component';
import { AddMainPostLayoutComponent } from './components/main-post/layout/add-main-post-layout/add-main-post-layout.component';
import { ViewMainPostComponent } from './components/main-post/view/view-main-post/view-main-post.component';
import { AddOutPostFormComponent } from './components/out-post/forms/add-out-post-form/add-out-post-form.component';
import { EditOutPostFormComponent } from './components/out-post/forms/edit-out-post-form/edit-out-post-form.component';
import { EditOutPostLayoutComponent } from './components/out-post/layout/edit-out-post-layout/edit-out-post-layout.component';
import { AddOutPostLayoutComponent } from './components/out-post/layout/add-out-post-layout/add-out-post-layout.component';
import { ViewOutPostLayoutComponent } from './components/out-post/layout/view-out-post-layout/view-out-post-layout.component';
import { ViewOutPostComponent } from './components/out-post/view/view-out-post/view-out-post.component';
import { EditDirectorateFormComponent } from './components/directorate-post/forms/edit-directorate-form/edit-directorate-form.component';
import { EditDirectorateLayoutComponent } from './components/directorate-post/layout/edit-directorate-layout/edit-directorate-layout.component';
import { ViewDirectorateLayoutComponent } from './components/directorate-post/layout/view-directorate-layout/view-directorate-layout.component';
import { ViewDirectorateViewComponent } from './components/directorate-post/view/view-directorate-view/view-directorate-view.component';
import { EditFinalPostFormComponent } from './components/final-post/forms/edit-final-post-form/edit-final-post-form.component';
import { EditFinalPostLayoutComponent } from './components/final-post/layout/edit-final-post-layout/edit-final-post-layout.component';
import { ViewFinalPostLayoutComponent } from './components/final-post/layout/view-final-post-layout/view-final-post-layout.component';
import { ViewFinalPostComponent } from './components/final-post/view/view-final-post/view-final-post.component';

@NgModule({
  declarations: [
    AddMainPostFormComponent,
    EditMainPostFormComponent,
    EditMainPostLayoutComponent,
    AddMainPostLayoutComponent,
    ViewMainPostLayoutComponent,
    ViewMainPostComponent,
    AddOutPostFormComponent,
    EditOutPostFormComponent,
    EditOutPostLayoutComponent,
    AddOutPostLayoutComponent,
    ViewOutPostLayoutComponent,
    ViewOutPostComponent,
    EditDirectorateFormComponent,
    EditDirectorateLayoutComponent,
    ViewDirectorateLayoutComponent,
    ViewDirectorateViewComponent,
    EditFinalPostFormComponent,
    EditFinalPostLayoutComponent,
    ViewFinalPostLayoutComponent,
    ViewFinalPostComponent,
  ],






  imports: [
    CommonModule,
    JobRoutingModule,
    // SettingsRoutingModule,
     StructureModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    AngularEditorModule,
    NgxExtendedPdfViewerModule
  ]

})
export class JobModule { }
