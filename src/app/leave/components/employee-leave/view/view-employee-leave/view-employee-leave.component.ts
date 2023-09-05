
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { SettingsService } from '../../../../../services/settings/settings.service';
import { UsersService } from '../../../../../services/users/users.service';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'
import { Router, ActivatedRoute } from '@angular/router';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { LeaveService } from '../../../../../services/leave/leave.service';

@Component({
  selector: 'app-view-employee-leave',
  templateUrl: './view-employee-leave.component.html',
  styleUrls: ['./view-employee-leave.component.css']
})
export class ViewEmployeeLeaveComponent implements OnInit {

  tableId: any;
  userList: any;
  showModal: boolean = false;
  submoduleId: any;
  user_deta={id:''}
  user_data:any;
  data = {
    organization_code: '',
    remove_reason: ''
  }
  my_data={uid:''}

  response: boolean = false;
  user_id: any;
  constructor(
    public general: GeneralService,
    public settings: SettingsService,
    public users: UsersService,
    public script: ScriptConfigService,
    private route: Router,
    public permission: PermissionsService,
    public myleave: LeaveService,
    private activeRoute: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.settings.organizationList();
    this.getLeaves()
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id');
    this.user_id=this.general.decryptionId(sessionStorage.getItem('id') as any)
  }

  deactivateUser() {

  }

  checkFind(id: any) {
    this.data.organization_code = id;
    this.tableId = id;
    this.script.destroryDatatable();
    this.users.userList(this.data).subscribe(

      res => {
        this.general.sw_message = "Hakuna watumiaji waliopatikana";
        this.general.en_message = "No user found"
        if (res.data.length === 0) {
          this.general.errorMessage(this.general.sw_message);
          this.response = true;
          this.userList = res.data;
          this.script.datatable();
        }
        else {
          this.userList = res.data;
          this.response = true;
          this.script.datatable();

        }


      },
      err => {
        this.general.errorMessage(err.error.sw_message, (e: any) => {
          if (e) {
            window.location.reload();
          }

        });
        this.script.errorAlert(err.error.sw_message)
        if (err.error.token == 0) {
          this.general.encryptUrl(this.route.url);
          this.route.navigate(['/restore-session']);
        }
      }
    );


  }

  getLeaves() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.myleave.getLeaves().subscribe(
      res => {
        this.userList = res.data;
        console.log('data za watu wangu wa likizo ni hizi tu', this.userList);
        
        this.general.creating = false;
        this.general.bfrcreating = true;
      },
      err => {
        
        this.general.creating = false;
        this.general.bfrcreating = true;
        if (err.error.token == 0) {
          this.general.encryptUrl(this.route.url);
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }

  showUser(id: any) {
    this.user_deta.id = id
    this.users.showUser(id).subscribe(
      res => {
        this.user_data = res;
      },
      err => {
        if (err.error.token == 0) {
          sessionStorage.setItem('current_url', this.route.url)
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }



  activate(id: any) {
    this.my_data.uid = id;
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.users.activateUser(this.my_data).subscribe(
      res => {
        this.general.bfrcreating = true;
        this.general.creating = false;
        this.general.successMessage(res.sw_message, (e: any) => {
          if (e) {
            window.location.reload();
          }

        });
      },
      err => {
        this.general.bfrcreating = true;
        this.general.creating = false;
        this.general.errorMessage(err.error.sw_message, (e: any) => {
          if (e) {
            window.location.reload();
          }

        });
        if (err.error.token == 0) {
          sessionStorage.setItem('current_url', this.route.url)
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }



  deactivate(id: any) {
    this.my_data.uid = id;
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.users.deactivateUser(this.my_data).subscribe(
      res => {
        this.general.bfrcreating = true;
        this.general.creating = false;
        this.general.successMessage(res.sw_message, (e: any) => {
          if (e) {
            window.location.reload();
          }

        });
      },
      err => {
        this.general.bfrcreating = true;
        this.general.creating = false;
        this.general.errorMessage(err.error.sw_message, (e: any) => {
          if (e) {
            window.location.reload();
          }

        });
        if (err.error.token == 0) {
          sessionStorage.setItem('current_url', this.route.url)
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }


  closeModal() {
    this.showModal = false;

  }

  openModal() {
    this.showModal = true;
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}
