import {Component, OnInit} from '@angular/core';
import {GeneralService} from '../../../../../services/general/general.service';
import {PermissionsService} from '../../../../../services/permissions/permissions.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ScriptConfigService} from '../../../../../services/script-config/script-config.service'
import * as _ from 'lodash';
@Component({selector: 'app-role-permission-form', templateUrl: './role-permission-form.component.html', styleUrls: ['./role-permission-form.component.css']})
export class RolePermissionFormComponent implements OnInit {
    Yes : any;
    No : any;
    modules : any;
    module_data : any;
    role_module : any = [];
    role_submodule : any = [];
    role_action : any = [];
    roleId : any;
    submoduleId : any;
    role_permission : any;

    data : {
        roleId: any;
        moduleId: number[];
        sub_moduleId: number[];
        actionId: number[];
    } = {
        roleId: '',
        moduleId: [],
        sub_moduleId: [],
        actionId: [],
    };

    our_data = {
        role_id: ''
    }
    constructor(public general : GeneralService, public permission : PermissionsService, public script : ScriptConfigService, private route : Router, private activeRoute : ActivatedRoute) {}

    ngOnInit(): void {
        this.roleId = this.activeRoute.snapshot.paramMap.get('id');
        this.submoduleId = this.activeRoute.snapshot.paramMap.get('id2');
        this.getRolePermission(this.activeRoute.snapshot.paramMap.get('id'));
        // this.permission.role_permissions(this.activeRoute.snapshot.paramMap.get('id'));
        this.activeRolePermission(this.activeRoute.snapshot.paramMap.get('id'));
        this.Yes = "Yes";
        this.No = "No";
    }

    activeRolePermission(id : any) {
        this.data.roleId = id;
        this.permission.activeRolePermission(this.data).subscribe(res => {
            this.role_module = res.data.module;
            this.role_submodule = res.data.submodule;
            this.role_action = res.data.action;
        }, err => {
            this.script.errorAlert(err.error.sw_message)
            if (err.error.token == 0) {
                this.general.encryptUrl(this.route.url);
                this.route.navigate(['/restore-session']);
            }
        });
    }

    moduleChangeCheck($event : any, val : any) {
        const checked = $event.target.checked;

        if (checked) {
            this.role_module.push(val);
        } else {
            var permissions = _.remove(this.role_module, function (permitted_permissions : any) {
                return permitted_permissions.module_id != val.module_id;
            });
            this.role_module = permissions;
        }
    }

    subModuleChangeCheck($event : any, val : any) {
        const checked = $event.target.checked;

        if (checked) {
            this.role_submodule.push(val);
        } else {
            var permissions = _.remove(this.role_submodule, function (permitted_permissions : any) {
                return permitted_permissions.sub_module_id != val.sub_module_id;
            });
            this.role_submodule = permissions;
        }
    }

    actionChangeCheck($event : any, val : any) {
        const checked = $event.target.checked;

        if (checked) {
            this.role_action.push(val);
        } else {
            var permissions = _.remove(this.role_action, function (permitted_permissions : any) {
                return permitted_permissions.action_id != val.action_id;
            });
            this.role_action = permissions
        }
    }

    getRolePermission(id : any) {
        this.our_data.role_id = id;
        this.permission.getrolePermission(this.our_data).subscribe(result => {
            this.role_permission = result.data
        }, (err) => {
            if (err.error.token == 0) {
                sessionStorage.setItem('current_url', this.route.url)
                this.route.navigate(['/restore-session']);
            }
        })

    }

    updatePermission() {
        this.general.bfrcreating = false;
        this.general.creating = true;
        this.data.roleId = this.activeRoute.snapshot.paramMap.get('id');
        let module_id: any = [];
        let submodule_id: any = [];
        let action_id: any = [];

        // Capture selected modules on permission
        this.role_module.forEach((modulePermission : any) => {
            module_id.push(modulePermission.module_id);
        });
        this.data.moduleId = module_id;

        // capture selected Sub modules on permission
        this.role_submodule.forEach((submodulePermission : any) => {
            submodule_id.push(submodulePermission.sub_module_id);
        });
        this.data.sub_moduleId = submodule_id;

        // capture selected action on this.permission
        this.role_action.forEach((actionPermissions : any) => {
            action_id.push(actionPermissions.action_id);
        });
        this.data.actionId = action_id;

        // kkkkkkk
      
   





        // return console.log(this.data);

        this.permission.updatePermission(this.data).subscribe(res => {
            this.general.bfrcreating = true;
            this.general.creating = false;
            this.script.successAlert(res.sw_message);
            this.route.navigate(['/roles/' + this.submoduleId]);
        }, err => {
            this.script.errorAlert(err.error.sw_message)
            this.general.bfrcreating = true;
            this.general.creating = false;
            if (err.error.token == 0) {
                this.general.encryptUrl(this.route.url);
                this.route.navigate(['/restore-session']);
            }
        });


    }


}
