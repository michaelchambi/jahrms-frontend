import { Injectable } from '@angular/core';
import { GeneralService } from '../general/general.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { ScriptConfigService } from '../../services/script-config/script-config.service'

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  private url_modules = environment.API_URL + 'modules';
  private url_submodules = environment.API_URL + 'sub-modules';
  private url_submodule_items = environment.API_URL + 'sub-modules-item';
  private url_actions = environment.API_URL + 'sub-module-actions';
  private url_permissions = environment.API_URL + 'permissions';
  private url_roles = environment.API_URL + 'roles';

  module_data: any;
  submodule_data: any;
  module_access: any;
  submodule_access: any;
  action_access: any;
  action_data: any;
  permission_data: any;
  role_list: any;
  data = {
    uid: '',
    user_id: '',
    role_id: ''
  }

  constructor(
    private http: HttpClient,
    private route: Router,
    public general: GeneralService,
    public script: ScriptConfigService,
  ) { }


  addModule(data: any) {
    return this.http.post<any>(`${this.url_modules}/add-module`, data, { headers: this.general.userAuthorization() });
  }

  getModules() {
    return this.http.get<any>(`${this.url_modules}/modules`, { headers: this.general.userAuthorization() });
  }

  showModule(data: any) {
    return this.http.post<any>(`${this.url_modules}/module/show`, data, { headers: this.general.userAuthorization() });
  }

  findModule(data: any) {
    return this.http.post<any>(`${this.url_modules}/find-module`, data, { headers: this.general.userAuthorization() });
  }

  editModule(data: any) {
    return this.http.post<any>(`${this.url_modules}/edit-module`, data, { headers: this.general.userAuthorization() });
  }

  activateModule(data: any) {
    return this.http.post<any>(`${this.url_modules}/activate-module`, data, { headers: this.general.userAuthorization() });
  }

  deactivateModule(data: any) {
    return this.http.post<any>(`${this.url_modules}/deactivate-module`, data, { headers: this.general.userAuthorization() });
  }

  //=============================================================
  //        SUB MODULES
  //=============================================================
  addSubModule(data: any) {
    return this.http.post<any>(`${this.url_submodules}/add-submodule`, data, { headers: this.general.userAuthorization() });
  }

  getSubModules() {
    return this.http.get<any>(`${this.url_submodules}/sub-modules`, { headers: this.general.userAuthorization() });
  }

  getEmbededSubModules() {
    return this.http.get<any>(`${this.url_submodules}/sub-modules/embeded`, { headers: this.general.userAuthorization() });
  }


  showSubModule(data: any) {
    return this.http.post<any>(`${this.url_submodules}/sub-module/show`, data, { headers: this.general.userAuthorization() });
  }

  findSubModule(data: any) {
    return this.http.post<any>(`${this.url_submodules}/find-sub-module`, data, { headers: this.general.userAuthorization() });
  }

  editSubModule(data: any) {
    return this.http.post<any>(`${this.url_submodules}/edit-sub-module`, data, { headers: this.general.userAuthorization() });
  }

  activateSubModule(data: any) {
    return this.http.post<any>(`${this.url_submodules}/activate-sub-module`, data, { headers: this.general.userAuthorization() });
  }

  deactivateSubModule(data: any) {
    return this.http.post<any>(`${this.url_submodules}/deactivate-sub-module`, data, { headers: this.general.userAuthorization() });
  }




//=============================================================
  //        SUB MODULES ITEMS
  //=============================================================
  addSubModuleItem(data: any) {
    return this.http.post<any>(`${this.url_submodule_items}/add-submodule-item`, data, { headers: this.general.userAuthorization() });
  }

  getSubModuleItems() {
    return this.http.get<any>(`${this.url_submodule_items}/sub-modules-item`, { headers: this.general.userAuthorization() });
  }


  showSubModuleItem(data: any) {
    return this.http.post<any>(`${this.url_submodule_items}/sub-module-item/show`, data, { headers: this.general.userAuthorization() });
  }

  showSubModuleItemList(data: any) {
    return this.http.post<any>(`${this.url_submodule_items}/sub-module-item/showSubmoduleItems`, data, { headers: this.general.userAuthorization() });
  }

  showSubModuleItemListBySelectionOption(data: any) {
    return this.http.post<any>(`${this.url_submodule_items}/sub-module-item/showSubmoduleItemsBySelect`, data, { headers: this.general.userAuthorization() });
  }


  findSubModuleItem(data: any) {
    return this.http.post<any>(`${this.url_submodule_items}/find-sub-module-item`, data, { headers: this.general.userAuthorization() });
  }

  editSubModuleItem(data: any) {
    return this.http.post<any>(`${this.url_submodule_items}/edit-sub-module-item`, data, { headers: this.general.userAuthorization() });
  }

  activateSubModuleItem(data: any) {
    return this.http.post<any>(`${this.url_submodule_items}/activate-sub-module-item`, data, { headers: this.general.userAuthorization() });
  }

  deactivateSubModuleItem(data: any) {
    return this.http.post<any>(`${this.url_submodule_items}/deactivate-sub-module-item`, data, { headers: this.general.userAuthorization() });
  }

  

  //=============================================================
  //        SUB MODULES ACTIONS
  //=============================================================
  addAction(data: any) {
    return this.http.post<any>(`${this.url_actions}/add-action`, data, { headers: this.general.userAuthorization() });
  }

  getAction() {
    return this.http.get<any>(`${this.url_actions}/sub-module-actions`, { headers: this.general.userAuthorization() });
  }

  showAction(data: any) {
    return this.http.post<any>(`${this.url_actions}/sub-module-action/show`, data, { headers: this.general.userAuthorization() });
  }

  findAction(data: any) {
    return this.http.post<any>(`${this.url_actions}/find-sub-module-action`, data, { headers: this.general.userAuthorization() });
  }

  editAction(data: any) {
    return this.http.post<any>(`${this.url_actions}/edit-sub-module-action`, data, { headers: this.general.userAuthorization() });
  }

  activateAction(data: any) {
    return this.http.post<any>(`${this.url_actions}/activate-sub-module-action`, data, { headers: this.general.userAuthorization() });
  }

  deactivateAction(data: any) {
    return this.http.post<any>(`${this.url_actions}/deactivate-sub-module-action`, data, { headers: this.general.userAuthorization() });
  }


  //=============================================================
  //        ROLES
  //=============================================================

  addRoles(data: any) {
    return this.http.post<any>(`${this.url_roles}/add-role`, data, { headers: this.general.userAuthorization() });
  }

  editRoles(data: any) {
    return this.http.post<any>(`${this.url_roles}/edit-role`, data, { headers: this.general.userAuthorization() });
  }

  showRoles(data: any) {
    return this.http.post<any>(`${this.url_roles}/role/show`, data, { headers: this.general.userAuthorization() });
  }

  showRolesByEmployeeId(data: any) {
    return this.http.post<any>(`${this.url_roles}/role/show/byEmployeeId`, data, { headers: this.general.userAuthorization() });
  }

  getRoles() {
    return this.http.get<any>(`${this.url_roles}/roles`, { headers: this.general.userAuthorization() });
  }

  changeRoles(data: any) {
    return this.http.post<any>(`${this.url_roles}/change-roles`, data, { headers: this.general.userAuthorization() });
  }

  activateRoles(data: any) {
    return this.http.post<any>(`${this.url_roles}/activate-role`, data, { headers: this.general.userAuthorization() });
  }

  deactivateRoles(data: any) {
    return this.http.post<any>(`${this.url_roles}/deactivate-role`, data, { headers: this.general.userAuthorization() });
  }

  rolePermission(data: any) {
    return this.http.post<any>(`${this.url_permissions}/role-permission`, data, { headers: this.general.userAuthorization() });
  }

  updatePermission(data: any) {
    return this.http.post<any>(`${this.url_permissions}/updatePermission`, data, { headers: this.general.userAuthorization() });
  }

  activeRolePermission(data: any) {
    return this.http.post<any>(`${this.url_permissions}/active-role-permission`, data, { headers: this.general.userAuthorization() });
  }

  modulePermission(data: any) {
    return this.http.post<any>(`${this.url_permissions}/show-module-permission`, data, { headers: this.general.userAuthorization() });
  }


  getrolePermission(data: any) {
    return this.http.post<any>(`${this.url_permissions}/role-permission`, data, { headers: this.general.userAuthorization() });
  }

  submodulePermission(data: any) {
    return this.http.post<any>(`${this.url_permissions}/show-submodule-permission`, data, { headers: this.general.userAuthorization() });
  }

  actionPermission(data: any) {
    return this.http.post<any>(`${this.url_permissions}/show-action-permission`, data, { headers: this.general.userAuthorization() });
  }


  role_permissions(id: any) {
    this.data.role_id = id;
    this.rolePermission(this.data).subscribe(
      res => {
        this.permission_data = res.data;
      },
      err => {
        if (err.error.token == 0) {
          this.general.encryptUrl(this.route.url);
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }

  module_permissions(id: any) {
    this.data.user_id = id;
    this.modulePermission(this.data).subscribe(
      res => {
        this.module_access = res.data;
      },
      err => {
        this.script.errorAlert(err.error.sw_message);
        if (err.error.token == 0) {
          this.general.encryptUrl(this.route.url);
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }



  submodule_permissions(id: any) {
    this.data.user_id = id;
    this.submodulePermission(this.data).subscribe(
      res => {
        this.submodule_access = res.data;
      },
      err => {
        if (err.error.token == 0) {
          this.general.encryptUrl(this.route.url);
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }


  action_permissions(id: any) {
    this.data.user_id = id;
    this.actionPermission(this.data).subscribe(
      res => {
        this.action_access = res.data;
      },
      err => {
        if (err.error.token == 0) {
          this.general.encryptUrl(this.route.url);
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }



  submodule(uid: any) {
    this.data.uid = uid;
    this.findSubModule(this.data).subscribe(
      res => {
        this.submodule_data = res.data;
      },
      err => {
        if (err.error.token == 0) {
          this.general.encryptUrl(this.route.url);
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }

  module(uid: any) {
    this.data.uid = uid;
    this.findModule(this.data).subscribe(
      res => {
        this.module_data = res.data;
      },
      err => {
        if (err.error.token == 0) {
          this.general.encryptUrl(this.route.url);
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }

  action(uid: any) {
    this.data.uid = uid;
    this.findAction(this.data).subscribe(
      res => {
        this.action_data = res.data;
      },
      err => {
        if (err.error.token == 0) {
          this.general.encryptUrl(this.route.url);
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }



  getRole() {
    this.getRoles().subscribe(
      res => {
        this.role_list = res.data;
      },
      err => {
        this.script.errorAlert(err.error.sw_message);
        if (err.error.token == 0) {
          this.general.encryptUrl(this.route.url);
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }


}
