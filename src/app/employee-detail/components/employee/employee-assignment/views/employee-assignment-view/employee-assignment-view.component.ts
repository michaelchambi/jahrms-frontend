import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../../../services/users/users.service';
import { GeneralService } from '../../../../../../services/general/general.service';
import { ScriptConfigService } from '../../../../../../services/script-config/script-config.service'
import { ActivatedRoute, Router } from '@angular/router';
import { PermissionsService } from '../../../../../../services/permissions/permissions.service';
import { environment } from '../../../../../../../environments/environment';
@Component({
  selector: 'app-employee-assignment-view',
  templateUrl: './employee-assignment-view.component.html',
  styleUrls: ['./employee-assignment-view.component.css']
})
export class EmployeeAssignmentViewComponent {
  submoduleItemList: any;
  submoduleId: any;
  user_id: any;
  details: any;

  user_data = { id: '' }
  data = {
    uid: '',
    id: '',
    roles: []
  }
  rolesDetails: any;
  employee_data: any;



  constructor(
    public general: GeneralService,
    public users: UsersService,
    public script: ScriptConfigService,
    private route: Router,
    private activeRoute: ActivatedRoute,
    public permission: PermissionsService,
  ) { }


  ngOnInit(): void {
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id2')
    this.showSubModuleItem(this.submoduleId)
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this.permission.getRole();
    this.user_id = this.activeRoute.snapshot.paramMap.get('id');
    this.userDetails(this.user_id);
  }

  showSubModuleItem(id: any) {
    this.user_data.id = id;
    this.permission.showSubModuleItemList(this.user_data).subscribe(
      res => {
        this.submoduleItemList = res.data;
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


  userDetails(id: any) {
    this.data.uid = id
    this.users.showUser(id).subscribe(
      res => {
        this.details = res.data;
        this.getUserRoles(this.details.data.id)
        // console.log('user details are ',this.details.data.id)
        // this.script.successAlert(res.sw_message)

      },
      err => {
        this.script.errorAlert(err.error.sw_message)
        if (err.error.token == 0) {
          this.general.encryptUrl(this.route.url);
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }


  getUserRoles(id: any) {
    this.user_data.id = id
    // this.employee_data.id=id;
    this.permission.showRolesByEmployeeId(this.user_data).subscribe(
      res => {
        this.rolesDetails = res;
        // this.script.successAlert(res.sw_message)

      },
      err => {
        this.script.errorAlert(err.error.sw_message)
        if (err.error.token == 0) {
          this.general.encryptUrl(this.route.url);
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }


}
