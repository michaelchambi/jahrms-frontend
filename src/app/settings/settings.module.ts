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
import { JotUsersLayoutComponent } from './jot-setting/jot-users/layout/jot-users-layout/jot-users-layout.component';
import { AddJotUsersLayoutComponent } from './jot-setting/jot-users/layout/add-jot-users-layout/add-jot-users-layout.component';
import { EditJotUsersLayoutComponent } from './jot-setting/jot-users/layout/edit-jot-users-layout/edit-jot-users-layout.component';
import { AddJotUsersFormComponent } from './jot-setting/jot-users/forms/add-jot-users-form/add-jot-users-form.component';
import { EditJotUsersFormComponent } from './jot-setting/jot-users/forms/edit-jot-users-form/edit-jot-users-form.component';
import { JotUsersViewComponent } from './jot-setting/jot-users/views/jot-users-view/jot-users-view.component';
import { JotUsersDetailsViewComponent } from './jot-setting/jot-users/views/jot-users-details-view/jot-users-details-view.component';
import { JotUsersDetailsLayoutComponent } from './jot-setting/jot-users/layout/jot-users-details-layout/jot-users-details-layout.component';
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
import { JotInfoLayoutsComponent } from '../settings/jot-setting/jot-info/layout/jot-info-layouts/jot-info-layouts.component';

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
import { AddEmploymentDetailsFormComponent } from './jot-setting/jot-users/forms/add-employment-details-form/add-employment-details-form.component';
import { EditEmploymentDetailsFormComponent } from './jot-setting/jot-users/forms/edit-employment-details-form/edit-employment-details-form.component';
import { AddOfficeDetailsFormComponent } from './jot-setting/jot-users/forms/add-office-details-form/add-office-details-form.component';
import { EditOfficeDetailsFormComponent } from './jot-setting/jot-users/forms/edit-office-details-form/edit-office-details-form.component';
import { EditBankDetailsFormComponent } from './jot-setting/jot-users/forms/edit-bank-details-form/edit-bank-details-form.component';
import { AddBankDetailsFormComponent } from './jot-setting/jot-users/forms/add-bank-details-form/add-bank-details-form.component';
import { AddNextKinsDetailsFormComponent } from './jot-setting/jot-users/forms/add-next-kins-details-form/add-next-kins-details-form.component';
import { EditNextKinsDetailsFormComponent } from './jot-setting/jot-users/forms/edit-next-kins-details-form/edit-next-kins-details-form.component';
import { EditDependantDetailsFormComponent } from './jot-setting/jot-users/forms/edit-dependant-details-form/edit-dependant-details-form.component';
import { AddDependantDetailsFormComponent } from './jot-setting/jot-users/forms/add-dependant-details-form/add-dependant-details-form.component';
import { AddEducationDetailsFormComponent } from './jot-setting/jot-users/forms/add-education-details-form/add-education-details-form.component';
import { EditEducationDetailsFormComponent } from './jot-setting/jot-users/forms/edit-education-details-form/edit-education-details-form.component';
import { EditProfessionalDetailsFormComponent } from './jot-setting/jot-users/forms/edit-professional-details-form/edit-professional-details-form.component';
import { AddProfessionalDetailsFormComponent } from './jot-setting/jot-users/forms/add-professional-details-form/add-professional-details-form.component';
import { AddSkillsDetailsFormComponent } from './jot-setting/jot-users/forms/add-skills-details-form/add-skills-details-form.component';
import { EditSkillsDetailsFormComponent } from './jot-setting/jot-users/forms/edit-skills-details-form/edit-skills-details-form.component';


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
    JotUsersLayoutComponent,
    AddJotUsersLayoutComponent,
    EditJotUsersLayoutComponent,
    AddJotUsersFormComponent,
    EditJotUsersFormComponent,
    JotUsersViewComponent,
    JotUsersDetailsViewComponent,
    JotUsersDetailsLayoutComponent,
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
    JotInfoLayoutsComponent,
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
    AddEmploymentDetailsFormComponent,
    EditEmploymentDetailsFormComponent,
    AddOfficeDetailsFormComponent,
    EditOfficeDetailsFormComponent,
    EditBankDetailsFormComponent,
    AddBankDetailsFormComponent,
    AddNextKinsDetailsFormComponent,
    EditNextKinsDetailsFormComponent,
    EditDependantDetailsFormComponent,
    AddDependantDetailsFormComponent,
    AddEducationDetailsFormComponent,
    EditEducationDetailsFormComponent,
    EditProfessionalDetailsFormComponent,
    AddProfessionalDetailsFormComponent,
    AddSkillsDetailsFormComponent,
    EditSkillsDetailsFormComponent,
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
    JotUsersLayoutComponent,
    AddJotUsersLayoutComponent,
    EditJotUsersLayoutComponent,
    AddJotUsersFormComponent,
    EditJotUsersFormComponent,
    JotUsersViewComponent,
    JotUsersDetailsViewComponent,
    JotUsersDetailsLayoutComponent,
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
    JotInfoLayoutsComponent,
    PageNotFoundComponent,
  ]
})
export class SettingsModule { }
