import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { InstitutionUserLayoutComponent } from './institution/institution-users/layout/institution-user-layout/institution-user-layout.component';
import { AddInstitutionUserLayoutComponent } from './institution/institution-users/layout/add-institution-user-layout/add-institution-user-layout.component';
import { EditInstitutionUserLayoutComponent } from './institution/institution-users/layout/edit-institution-user-layout/edit-institution-user-layout.component';
import { AddInstitutionUserFormComponent } from './institution/institution-users/forms/add-institution-user-form/add-institution-user-form.component';
import { EditInstitutionUserFormComponent } from './institution/institution-users/forms/edit-institution-user-form/edit-institution-user-form.component';
import { InstitutionUserViewComponent } from './institution/institution-users/views/institution-user-view/institution-user-view.component';
import { InstitutionUserDetailsViewComponent } from './institution/institution-users/views/institution-user-details-view/institution-user-details-view.component';
import { StructureModule } from '../structure/structure.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { InstitutionUserDetailsLayoutComponent } from './institution/institution-users/layout/institution-user-details-layout/institution-user-details-layout.component';
import { InstitutionRoleViewComponent } from './institution/institution-roles/views/institution-role-view/institution-role-view.component';
import { AddInstitutionRoleFormComponent } from './institution/institution-roles/forms/add-institution-role-form/add-institution-role-form.component';
import { EditInstitutionRoleFormComponent } from './institution/institution-roles/forms/edit-institution-role-form/edit-institution-role-form.component';
import { InstitutionRoleLayoutComponent } from './institution/institution-roles/layout/institution-role-layout/institution-role-layout.component';
import { AddInstitutionRoleLayoutComponent } from './institution/institution-roles/layout/add-institution-role-layout/add-institution-role-layout.component';
import { EditInstitutionRoleLayoutComponent } from './institution/institution-roles/layout/edit-institution-role-layout/edit-institution-role-layout.component';
import { JotRolesLayoutComponent } from './jot-setting/jot-roles/layout/jot-roles-layout/jot-roles-layout.component';
import { AddJotRolesLayoutComponent } from './jot-setting/jot-roles/layout/add-jot-roles-layout/add-jot-roles-layout.component';
import { EditJotRolesLayoutComponent } from './jot-setting/jot-roles/layout/edit-jot-roles-layout/edit-jot-roles-layout.component';
import { AddJotRolesFormComponent } from './jot-setting/jot-roles/forms/add-jot-roles-form/add-jot-roles-form.component';
import { EditJotRolesFormComponent } from './jot-setting/jot-roles/forms/edit-jot-roles-form/edit-jot-roles-form.component';
import { JotRolesViewComponent } from './jot-setting/jot-roles/views/jot-roles-view/jot-roles-view.component';
import { JotModuleLayoutComponent } from './jot-setting/jot-modules/layout/jot-module-layout/jot-module-layout.component';
import { AddJotModuleLayoutComponent } from './jot-setting/jot-modules/layout/add-jot-module-layout/add-jot-module-layout.component';
import { EditJotModuleLayoutComponent } from './jot-setting/jot-modules/layout/edit-jot-module-layout/edit-jot-module-layout.component';
import { AddJotModuleFormComponent } from './jot-setting/jot-modules/forms/add-jot-module-form/add-jot-module-form.component';
import { EditJotModuleFormComponent } from './jot-setting/jot-modules/forms/edit-jot-module-form/edit-jot-module-form.component';
import { JotModuleViewComponent } from './jot-setting/jot-modules/views/jot-module-view/jot-module-view.component';
import { JotInfoViewComponent } from './jot-setting/jot-info/views/jot-info-view/jot-info-view.component';
import { AddJotInfoFormComponent } from './jot-setting/jot-info/forms/add-jot-info-form/add-jot-info-form.component';
import { EditJotInfoFormComponent } from './jot-setting/jot-info/forms/edit-jot-info-form/edit-jot-info-form.component';
import { AddJotInfoLayoutComponent } from './jot-setting/jot-info/layout/add-jot-info-layout/add-jot-info-layout.component';
import { EditJotInfoLayoutComponent } from './jot-setting/jot-info/layout/edit-jot-info-layout/edit-jot-info-layout.component';

import { PageNotFoundComponent } from './jot-setting/page-not-found/page-not-found/page-not-found.component';
import { JotSubmodulesLayoutComponent } from './jot-setting/jot-submodules/layout/jot-submodules-layout/jot-submodules-layout.component';
import { JotSubmodulesViewComponent } from './jot-setting/jot-submodules/views/jot-submodules-view/jot-submodules-view.component';
import { AddJotSubmodulesLayoutComponent } from './jot-setting/jot-submodules/layout/add-jot-submodules-layout/add-jot-submodules-layout.component';
import { EditJotSubmodulesLayoutComponent } from './jot-setting/jot-submodules/layout/edit-jot-submodules-layout/edit-jot-submodules-layout.component';
import { AddJotSubmodulesFormComponent } from './jot-setting/jot-submodules/forms/add-jot-submodules-form/add-jot-submodules-form.component';
import { EditJotSubmodulesFormComponent } from './jot-setting/jot-submodules/forms/edit-jot-submodules-form/edit-jot-submodules-form.component';
import { JotSubmoduleActionsLayoutComponent } from './jot-setting/jot-submodule-actions/layout/jot-submodule-actions-layout/jot-submodule-actions-layout.component';
import { JotSubmoduleActionsViewComponent } from './jot-setting/jot-submodule-actions/views/jot-submodule-actions-view/jot-submodule-actions-view.component';
import { AddJotSubmoduleActionsLayoutComponent } from './jot-setting/jot-submodule-actions/layout/add-jot-submodule-actions-layout/add-jot-submodule-actions-layout.component';
import { EditJotSubmoduleActionsLayoutComponent } from './jot-setting/jot-submodule-actions/layout/edit-jot-submodule-actions-layout/edit-jot-submodule-actions-layout.component';
import { AddJotSubmoduleActionsFormComponent } from './jot-setting/jot-submodule-actions/forms/add-jot-submodule-actions-form/add-jot-submodule-actions-form.component';
import { EditJotSubmoduleActionsFormComponent } from './jot-setting/jot-submodule-actions/forms/edit-jot-submodule-actions-form/edit-jot-submodule-actions-form.component';
import { RolePermissionFormComponent } from './jot-setting/jot-roles/forms/role-permission-form/role-permission-form.component';
import { RolePermissionLayoutComponent } from './jot-setting/jot-roles/layout/role-permission-layout/role-permission-layout.component';
import { InstitutionRolePermissionLayoutComponent } from './institution/institution-roles/layout/institution-role-permission-layout/institution-role-permission-layout.component';
import { InstitutionRolePermissionFormComponent } from './institution/institution-roles/forms/institution-role-permission-form/institution-role-permission-form.component';
import { AddSubmoduleItemLayoutComponent } from './jot-setting/jot-submodule-item/layout/add-submodule-item-layout/add-submodule-item-layout.component';
import { EditSubmoduleItemLayoutComponent } from './jot-setting/jot-submodule-item/layout/edit-submodule-item-layout/edit-submodule-item-layout.component';
import { SubmoduleItemLayoutComponent } from './jot-setting/jot-submodule-item/layout/submodule-item-layout/submodule-item-layout.component';
import { AddSubmoduleItemFormComponent } from './jot-setting/jot-submodule-item/forms/add-submodule-item-form/add-submodule-item-form.component';
import { EditSubmoduleItemFormComponent } from './jot-setting/jot-submodule-item/forms/edit-submodule-item-form/edit-submodule-item-form.component';
import { SubmoduleItemViewComponent } from './jot-setting/jot-submodule-item/views/submodule-item-view/submodule-item-view.component';



@NgModule({
  declarations: [
    InstitutionUserLayoutComponent,
    AddInstitutionUserLayoutComponent,
    EditInstitutionUserLayoutComponent,
    InstitutionUserDetailsLayoutComponent,
    AddInstitutionUserFormComponent,
    EditInstitutionUserFormComponent,
    InstitutionUserViewComponent,
    InstitutionUserDetailsViewComponent,
    InstitutionRoleViewComponent,
    AddInstitutionRoleFormComponent,
    EditInstitutionRoleFormComponent,
    InstitutionRoleLayoutComponent,
    AddInstitutionRoleLayoutComponent,
    EditInstitutionRoleLayoutComponent,
   
    JotRolesLayoutComponent,
    AddJotRolesLayoutComponent,
    EditJotRolesLayoutComponent,
    AddJotRolesFormComponent,
    EditJotRolesFormComponent,
    JotRolesViewComponent,
    JotModuleLayoutComponent,
    AddJotModuleLayoutComponent,
    EditJotModuleLayoutComponent,
    AddJotModuleFormComponent,
    EditJotModuleFormComponent,
    JotModuleViewComponent,
    JotInfoViewComponent,
    AddJotInfoFormComponent,
    EditJotInfoFormComponent,
    AddJotInfoLayoutComponent,
    EditJotInfoLayoutComponent,
    PageNotFoundComponent,
    JotSubmodulesLayoutComponent,
    JotSubmodulesViewComponent,
    AddJotSubmodulesLayoutComponent,
    EditJotSubmodulesLayoutComponent,
    AddJotSubmodulesFormComponent,
    EditJotSubmodulesFormComponent,
    JotSubmoduleActionsLayoutComponent,
    JotSubmoduleActionsViewComponent,
    AddJotSubmoduleActionsLayoutComponent,
    EditJotSubmoduleActionsLayoutComponent,
    AddJotSubmoduleActionsFormComponent,
    EditJotSubmoduleActionsFormComponent,
    RolePermissionFormComponent,
    RolePermissionLayoutComponent,
    InstitutionRolePermissionLayoutComponent,
    InstitutionRolePermissionFormComponent,
    AddSubmoduleItemLayoutComponent,
    EditSubmoduleItemLayoutComponent,
    SubmoduleItemLayoutComponent,
    AddSubmoduleItemFormComponent,
    EditSubmoduleItemFormComponent,
    SubmoduleItemViewComponent,
  
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    StructureModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    AngularEditorModule,
    NgxExtendedPdfViewerModule
  ],
  exports: [
    InstitutionUserLayoutComponent,
    AddInstitutionUserLayoutComponent,
    EditInstitutionUserLayoutComponent,
    InstitutionUserDetailsLayoutComponent,
    AddInstitutionUserFormComponent,
    EditInstitutionUserFormComponent,
    InstitutionUserViewComponent,
    InstitutionUserDetailsViewComponent,
    InstitutionRoleViewComponent,
    AddInstitutionRoleFormComponent,
    EditInstitutionRoleFormComponent,
    InstitutionRoleLayoutComponent,
    AddInstitutionRoleLayoutComponent,
    EditInstitutionRoleLayoutComponent,
  
    JotRolesLayoutComponent,
    AddJotRolesLayoutComponent,
    EditJotRolesLayoutComponent,
    AddJotRolesFormComponent,
    EditJotRolesFormComponent,
    JotRolesViewComponent,
    JotModuleLayoutComponent,
    AddJotModuleLayoutComponent,
    EditJotModuleLayoutComponent,
    AddJotModuleFormComponent,
    EditJotModuleFormComponent,
    JotModuleViewComponent,
    JotSubmodulesLayoutComponent,
    JotSubmodulesViewComponent,
    AddJotSubmodulesLayoutComponent,
    EditJotSubmodulesLayoutComponent,
    AddJotSubmodulesFormComponent,
    EditJotSubmodulesFormComponent,
    JotSubmoduleActionsLayoutComponent,
    JotSubmoduleActionsViewComponent,
    AddJotSubmoduleActionsLayoutComponent,
    EditJotSubmoduleActionsLayoutComponent,
    AddJotSubmoduleActionsFormComponent,
    EditJotSubmoduleActionsFormComponent,
    RolePermissionFormComponent,
    RolePermissionLayoutComponent,
    InstitutionRolePermissionLayoutComponent,
    InstitutionRolePermissionFormComponent,








    JotInfoViewComponent,
    AddJotInfoFormComponent,
    EditJotInfoFormComponent,
    AddJotInfoLayoutComponent,
    EditJotInfoLayoutComponent,
    PageNotFoundComponent,
  ]
})
export class SettingsModule { }
