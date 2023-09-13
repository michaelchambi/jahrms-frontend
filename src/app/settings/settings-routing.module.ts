import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstitutionUserLayoutComponent } from './institution/institution-users/layout/institution-user-layout/institution-user-layout.component';
import { AddInstitutionUserLayoutComponent } from './institution/institution-users/layout/add-institution-user-layout/add-institution-user-layout.component';
import { EditInstitutionUserLayoutComponent } from './institution/institution-users/layout/edit-institution-user-layout/edit-institution-user-layout.component';
import { InstitutionUserDetailsLayoutComponent } from './institution/institution-users/layout/institution-user-details-layout/institution-user-details-layout.component';
import { InstitutionRoleLayoutComponent } from './institution/institution-roles/layout/institution-role-layout/institution-role-layout.component';
import { AddInstitutionRoleLayoutComponent } from './institution/institution-roles/layout/add-institution-role-layout/add-institution-role-layout.component';
import { EditInstitutionRoleLayoutComponent } from './institution/institution-roles/layout/edit-institution-role-layout/edit-institution-role-layout.component';
import { JotRolesLayoutComponent } from './jot-setting/jot-roles/layout/jot-roles-layout/jot-roles-layout.component';
import { AddJotRolesLayoutComponent } from './jot-setting/jot-roles/layout/add-jot-roles-layout/add-jot-roles-layout.component';
import { EditJotRolesLayoutComponent } from './jot-setting/jot-roles/layout/edit-jot-roles-layout/edit-jot-roles-layout.component';
import { JotModuleLayoutComponent } from './jot-setting/jot-modules/layout/jot-module-layout/jot-module-layout.component';
import { AddJotModuleLayoutComponent } from './jot-setting/jot-modules/layout/add-jot-module-layout/add-jot-module-layout.component';
import { EditJotModuleLayoutComponent } from './jot-setting/jot-modules/layout/edit-jot-module-layout/edit-jot-module-layout.component';
// import { JotInfoLayoutsComponent } from './jot-setting/jot-info/layout/jot-info-layout/jot-info-layout.component';
import { JotInfoLayoutsComponent } from '../settings/jot-setting/jot-info/layout/jot-info-layouts/jot-info-layouts.component';

import { AddJotInfoLayoutComponent } from './jot-setting/jot-info/layout/add-jot-info-layout/add-jot-info-layout.component';
import { EditJotInfoLayoutComponent } from './jot-setting/jot-info/layout/edit-jot-info-layout/edit-jot-info-layout.component';
import { PageNotFoundComponent } from './jot-setting/page-not-found/page-not-found/page-not-found.component';
import { JotSubmodulesLayoutComponent } from './jot-setting/jot-submodules/layout/jot-submodules-layout/jot-submodules-layout.component';
import { AddJotSubmodulesLayoutComponent } from './jot-setting/jot-submodules/layout/add-jot-submodules-layout/add-jot-submodules-layout.component';
import { EditJotSubmodulesLayoutComponent } from './jot-setting/jot-submodules/layout/edit-jot-submodules-layout/edit-jot-submodules-layout.component';
import { JotSubmoduleActionsLayoutComponent } from './jot-setting/jot-submodule-actions/layout/jot-submodule-actions-layout/jot-submodule-actions-layout.component';
import { EditJotSubmoduleActionsLayoutComponent } from './jot-setting/jot-submodule-actions/layout/edit-jot-submodule-actions-layout/edit-jot-submodule-actions-layout.component';
import { AddJotSubmoduleActionsLayoutComponent } from './jot-setting/jot-submodule-actions/layout/add-jot-submodule-actions-layout/add-jot-submodule-actions-layout.component';
import { RolePermissionLayoutComponent } from './jot-setting/jot-roles/layout/role-permission-layout/role-permission-layout.component';
import { InstitutionRolePermissionLayoutComponent } from './institution/institution-roles/layout/institution-role-permission-layout/institution-role-permission-layout.component';

import { AddSubmoduleItemLayoutComponent } from './jot-setting/jot-submodule-item/layout/add-submodule-item-layout/add-submodule-item-layout.component';
import { EditSubmoduleItemLayoutComponent } from './jot-setting/jot-submodule-item/layout/edit-submodule-item-layout/edit-submodule-item-layout.component';
import { SubmoduleItemLayoutComponent } from './jot-setting/jot-submodule-item/layout/submodule-item-layout/submodule-item-layout.component';


const routes: Routes = [
  {
    path: 'institution-users/:id',
    component: InstitutionUserLayoutComponent,
    title: 'Watumiaji'
  },
  {
    path: 'add-institution-user/:id',
    component: AddInstitutionUserLayoutComponent,
    title: 'Submit mtumiaji'
  },
  {
    path: 'edit-institution-user/:id/:id2',
    component: EditInstitutionUserLayoutComponent,
    title: 'Badili taarifa za mtumiaji'
  },
  {
    path: 'institution-user-details/:id/:id2',
    component: InstitutionUserDetailsLayoutComponent,
    title: 'Employee Details'
  },

  {
    path: 'institution-roles/:id',
    component: InstitutionRoleLayoutComponent,
    title: 'System Roles'
  },
  {
    path: 'add-institution-role/:id',
    component: AddInstitutionRoleLayoutComponent,
    title: 'Add majukumu'
  },
  {
    path: 'edit-institution-role/:id',
    component: EditInstitutionRoleLayoutComponent,
    title: 'Badili taarifa za majukumu'
  },
  {
    path: 'institution-role-permission/:id',
    component: InstitutionRolePermissionLayoutComponent,
    title: 'System Roles na vitendo'
  },


  //===================================================
  //          ROLES
  //===================================================
  {
    path: 'roles/:id',
    component: JotRolesLayoutComponent,
    title: 'System Roles'
  },

  {
    path: 'add-jot-setting-roles/:id',
    component: AddJotRolesLayoutComponent,
    title: 'Add majukumu'
  },
  {
    path: 'edit-jot-setting-roles/:id/:id2',
    component: EditJotRolesLayoutComponent,
    title: 'Badili taarifa za majukumu'
  },

  {
    path: 'modules/:id',
    component: JotModuleLayoutComponent,
    title: 'Module'
  },

  {
    path: 'add-jot-setting-module/:id',
    component: AddJotModuleLayoutComponent,
    title: 'Add Module'
  },
  {
    path: 'edit-jot-setting-module/:id/:id2',
    component: EditJotModuleLayoutComponent,
    title: 'Badili taarifa za Module'
  },

  {
    path: 'jot-setting-submodules/:id/:id2',
    component: JotSubmodulesLayoutComponent,
    title: 'Sub Module'
  },

  {
    path: 'add-jot-setting-submodule/:id/:id2',
    component: AddJotSubmodulesLayoutComponent,
    title: 'Add Sub Module'
  },
  {
    path: 'edit-jot-setting-submodule/:id/:id2',
    component: EditJotSubmodulesLayoutComponent,
    title: 'Badili taarifa za Sub Module'
  },


  {
    path: 'jot-setting-sub-modules-action/:id/:id2',
    component: JotSubmoduleActionsLayoutComponent,
    title: 'Vitendo vya module ndogo'
  },

  {
    path: 'add-jot-setting-sub-modules-action/:id/:id2',
    component: AddJotSubmoduleActionsLayoutComponent,
    title: 'Add vitendo vya module ndogo'
  },

  {
    path: 'edit-jot-setting-sub-modules-action/:id/:id2',
    component: EditJotSubmoduleActionsLayoutComponent,
    title: 'Badili vitendo vya module ndogo'
  },
  {
    path: 'role-permission/:id/:id2',
    component: RolePermissionLayoutComponent,
    title: 'majukumu na vitendos'
  },


  //===================================================
  // ATTACHMENT TYPES
  //===================================================










  {
    path: 'jot-setting-info/:id',
    component: JotInfoLayoutsComponent,
    title: 'Maelezo Muhimu'
  },

  {
    path: 'add-jot-setting-info/:id',
    component: AddJotInfoLayoutComponent,
    title: 'Weka Maelezo Muhimu'
  },
  {
    path: 'edit-jot-setting-info/:id',
    component: EditJotInfoLayoutComponent,
    title: 'Badili taarifa za Maelezo Muhimu'
  },
  

  {
    path: 'submodule-item/:id',
    component: SubmoduleItemLayoutComponent,
    title: 'Maelezo Muhimu'
  },

  {
    path: 'add-submodule-item/:id',
    component: AddSubmoduleItemLayoutComponent ,
    title: 'Ongeza vipengele vya moduli ndogo'
  },
  {
    path: 'edit-submodule-item/:id',
    component: EditSubmoduleItemLayoutComponent ,
    title: 'Badili taarifa za Maelezo Muhimu'
  },


  {
    path: '**',
    component: PageNotFoundComponent,
    title: 'Ukurasa haupo'
  },



  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
