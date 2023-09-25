import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureModule } from '../structure/structure.module';
import { AreasRoutingModule } from './areas-routing.module';
import { NgChartsModule } from 'ng2-charts';
import { NgSelectModule } from '@ng-select/ng-select';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer'; 

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AreasLayoutComponent } from './components/areas/layout/areas-layout/areas-layout.component';
import { AreasViewComponent } from './components/areas/views/areas-view/areas-view.component';
import { AddAreasFormComponent } from './components/areas/forms/add-areas-form/add-areas-form.component';
import { EditAreasFormComponent } from './components/areas/forms/edit-areas-form/edit-areas-form.component';
import { EditedAreasItemViewComponent } from './components/areas/views/edited-areas-item-view/edited-areas-item-view.component';


@NgModule({
  declarations: [
    AreasLayoutComponent,
    AreasViewComponent,
    AddAreasFormComponent,
    EditAreasFormComponent,
    EditedAreasItemViewComponent
  ],
  imports: [
    CommonModule,
    AreasRoutingModule,
    CommonModule,
    NgChartsModule,
    StructureModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    AngularEditorModule,
    NgxExtendedPdfViewerModule,
    PdfViewerModule, 
    StructureModule,
  ]
})
export class AreasModule { }
