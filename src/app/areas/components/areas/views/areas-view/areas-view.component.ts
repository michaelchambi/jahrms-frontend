import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { UsersService } from '../../../../../services/users/users.service';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'
import { ActivatedRoute, Router } from '@angular/router';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { environment } from '../../../../../../environments/environment';
import { AreasService } from '../../../../../services/areas/areas.service';
@Component({
  selector: 'app-areas-view',
  templateUrl: './areas-view.component.html',
  styleUrls: ['./areas-view.component.css']
})
export class AreasViewComponent {


  submoduleItemList: any;

  user_data = { id: '' }

  public concatenator = 'hrm-storage-files/employee/'
  public API_URL = environment.API_URL;

  userInfoDetails: any;
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
  BankInfoDetails: any;

  constructor(
    public general: GeneralService,
    public users: UsersService,
    public script: ScriptConfigService,
    private route: Router,
    private bank_info: AreasService,
    public permission: PermissionsService,
  

  ) { }


  ngOnInit(): void {
    // this.submoduleId = this.activeRoute.snapshot.paramMap.get('id2')
    // this.showSubModuleItem(this.submoduleId)
    this.current_user_id=this.general.decryptionId(sessionStorage.getItem('id') as any)
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));

    this.permission.getRole();
    // this.user_id = this.activeRoute.snapshot.paramMap.get('id');
    this.userDetails(this.current_user_id);
    this.getBankInoDetails(this.current_user_id)
  
  }


  getBankInoDetails(id:any) {
    this.data_required.id=id;
    // this.marital_status_req_data.approver_id=
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.bank_info.getAreas(this.data_required).subscribe(
      res => {
        this.BankInfoDetails= res;
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
    this.users.showUserById(id).subscribe(
      res => {
        this.userInfoDetails = res.data;

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
