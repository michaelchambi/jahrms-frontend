
import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../../services/general/general.service';
import { UsersService } from '../../../../../../services/users/users.service';
import { ScriptConfigService } from '../../../../../../services/script-config/script-config.service'
import { ActivatedRoute, Router } from '@angular/router';
import { PermissionsService } from '../../../../../../services/permissions/permissions.service';
import { environment } from '../../../../../../../environments/environment';
import { MaritalStatusService } from '../../../../../../services/marital-status/marital-status.service';

@Component({
  selector: 'app-self-marital-status-view',
  templateUrl: './self-marital-status-view.component.html',
  styleUrls: ['./self-marital-status-view.component.css']
})
export class SelfMaritalStatusViewComponent {

  submoduleItemList: any;

  user_data = { id: '' }

  public concatenator = 'hrm-storage-files/employee/'
  public API_URL = environment.API_URL;

  details: any;
  submoduleId: any;
  showModal: boolean = false;
  values = {
    uid: ''
  }
  data = {
    uid: '',
    roles: []
  }
  marital_status_req_data={id:'',approver_id:''}
  data_required={id:''}
  user_id: any;
  current_user_id: any;
  maritalStatusDetails: any;

  constructor(
    public general: GeneralService,
    public users: UsersService,
    public script: ScriptConfigService,
    private route: Router,
    private marital_status:MaritalStatusService,
    private activeRoute: ActivatedRoute,
    public permission: PermissionsService,
  ) { }


  ngOnInit(): void {
   
 
    this.current_user_id=this.general.decryptionId(sessionStorage.getItem('id') as any)
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));

    this.permission.getRole();
    this. getMaritalStatus(this.current_user_id) 
    // this.userDetails( this.current_user_id);
  
  }


  getMaritalStatus(id:any) {
    this.data_required.id=id;
    // this.marital_status_req_data.approver_id=
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.marital_status.getMaritalStatus(this.data_required).subscribe(
      res => {
        this.maritalStatusDetails = res;
        this.general.creating = false;
        this.general.bfrcreating = true;
      },
      err => {
        
        this.general.creating = false;
        this.general.bfrcreating = true;
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
        this.getMaritalStatus(this.details.data.id);
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



  activate(id: any) {
    this.values.uid = id;
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.users.activateUser(this.data).subscribe(
      res => {
        this.general.bfrcreating = true;
        this.general.creating = false;
        this.closeModal()
        this.general.successMessage(res.sw_message, (e: any) => {
          if (e) {
            window.location.reload();
          }

        });
      },
      err => {
        this.general.bfrcreating = true;
        this.general.creating = false;
        this.closeModal()
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
    this.values.uid = id;
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.users.deactivateUser(this.data).subscribe(
      res => {
        this.general.bfrcreating = true;
        this.general.creating = false;
        this.closeModal()
        this.general.successMessage(res.sw_message, (e: any) => {
          if (e) {
            window.location.reload();
          }

        });
      },
      err => {
        this.general.bfrcreating = true;
        this.general.creating = false;
        this.closeModal()
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

}
