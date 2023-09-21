import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../../services/general/general.service';
import { UsersService } from '../../../../../../services/users/users.service';
import { ScriptConfigService } from '../../../../../../services/script-config/script-config.service'
import { ActivatedRoute, Router } from '@angular/router';
import { PermissionsService } from '../../../../../../services/permissions/permissions.service';
import { environment } from '../../../../../../../environments/environment';
import { MaritalStatusService } from '../../../../../../services/marital-status/marital-status.service';
import { EmploymentInfoService } from '../../../../../../services/employee/employment/employment-info.service';

@Component({
  selector: 'app-self-employment-details-view',
  templateUrl: './self-employment-details-view.component.html',
  styleUrls: ['./self-employment-details-view.component.css']
})
export class SelfEmploymentDetailsViewComponent {


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
  employmentDetails: any;

  constructor(
    public general: GeneralService,
    public users: UsersService,
    public script: ScriptConfigService,
    private route: Router,
    private marital_status:MaritalStatusService,
    private activeRoute: ActivatedRoute,
    public permission: PermissionsService,
    private emplyment_details:EmploymentInfoService
  ) { }


  ngOnInit(): void {
    // this.submoduleId = this.activeRoute.snapshot.paramMap.get('id2')
    // this.showSubModuleItem(this.submoduleId)
    this.current_user_id=this.general.decryptionId(sessionStorage.getItem('id') as any)
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));

    this.permission.getRole();
    this.user_id = this.general.decryptionId(sessionStorage.getItem('id') as any);
    // this.userDetails(this.user_id);
    this.getMaritalStatus(this.user_id);
  
  }


  getMaritalStatus(id:any) {
    this.data_required.id=id;
    // this.marital_status_req_data.approver_id=
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.emplyment_details.showEmploymentInfo(this.data_required).subscribe(
      res => {
        this.employmentDetails= res;
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
    this.users.getUser(id).subscribe(
      res => {
        this.details = res.data;
        
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








  closeModal() {
    this.showModal = false;
  }

  openModal() {
    this.showModal = true;
  }


  // showSubModuleItem(id: any) {
  //   this.user_data.id = id;
  //   this.permission.showSubModuleItemList(this.user_data).subscribe(
  //     res => {
  //       this.submoduleItemList = res.data;
  //     },
  //     err => {
  //       this.script.errorAlert(err.error.sw_message);
  //       if (err.error.token == 0) {
  //         this.general.encryptUrl(this.route.url);
  //         this.route.navigate(['/restore-session']);
  //       }
  //     }
  //   );
  // }

}
