import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { SettingsService } from '../../../../../services/settings/settings.service';
import { UsersService } from '../../../../../services/users/users.service';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'
import { Router, ActivatedRoute } from '@angular/router';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { TransferService } from '../../../../../services/transfer/transfer.service';
import { CourtsService } from '../../../../../services/courts/courts.service';
import { CourtLevelService } from '../../../../..//services/court-level/court-level.service';

@Component({
  selector: 'app-add-my-trensfer-form',
  templateUrl: './add-my-trensfer-form.component.html',
  styleUrls: ['./add-my-trensfer-form.component.css']
})
export class AddMyTrensferFormComponent {


  sub_moduleId:any;
  messageError: any;
  id: any;
  successMessage: any;
  errorMessage: any;
  appError: boolean = false;
  appSuccess: boolean = false;
  addUserError: boolean = false;
  addUserSuccess: boolean = false;
  bfrcreating: boolean = true;
  creating: boolean = false;

  announcement_details={description:'',fileUrl:'',user_id:''}
  my_id: any;



my_kid:boolean=false;
just_dependant:boolean=false;

zone: boolean = false;
outZone: boolean = false;
ChangeDate(){
  this.zone = true;
  this.outZone = false;
}
okWithDate(){
  this.outZone = true;
  this.zone = false;
}
dataUserId ={
  id: ''
}
  selectedFile: any;
  created_by: any;
  role_list: any;
  submoduleId: any;
  uid: any;
  user_id: any;
  data = {
    transfer_type:'',
      region_id:'',
      transfer_reason_id:'',
      created_by:'',
      id:'',
      fileUrl:'',
      court_id: '',
      court_level_id: '',
  }
  userDetails: any;
  employee_id: any;
  my_leave_List: any;
  court_level_list: any;
  court_list: any;
  transfer_reason_List: any;

  constructor(
    public general: GeneralService,
   
    public users: UsersService,
    public script: ScriptConfigService,
    private route: Router,
    public permission: PermissionsService,
    public transfer:TransferService,
    public court_level: CourtLevelService,
    private court: CourtsService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.permission.getRole();
    this.uid= sessionStorage.getItem('id')
    this.user_id =this.general.decryption(sessionStorage.getItem('id') as any)
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id');
    this.showUser();
    this.getCourtLevel();
    this.getTransferReason();
  }

  fileUpload(e: any) {
    this.selectedFile = e.target.files[0];
  }

  addTransfer() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    let formData = new FormData();
    this.data.id=this.user_id
    this.created_by = sessionStorage.getItem('id')
    this.data.created_by = this.general.decryptionId(this.created_by);

    formData.append('court_level_id', this.data.court_level_id);
    formData.append('court_id', this.data.court_id);
    formData.append('transfer_reason_id', this.data.transfer_reason_id);
    formData.append('transfer_type', this.data.transfer_type);
    formData.append('fileUrl', this.selectedFile);
    formData.append('id', this.data.id);
    this.transfer.addTransfer(formData).subscribe(
      res => {
        this.appSuccess = true;
        this.successMessage = res.message;
        this.route.navigate(['/my-transfering/' + this.submoduleId]);

      },

      err => {
        this.appError = true;
        this.general.bfrcreating = true;
        this.general.creating = false;
        this.messageError = err.error.message;
        if (err.error.token == 0) {
          localStorage.setItem('token', err.error.token);
        }
      }
    );


   }

  showUser() {
    this.dataUserId.id = this.user_id;
    this.users.showUserById(this.dataUserId).subscribe(
      res => {
        this.userDetails = res.data;
        this.script.successAlert(res.sw_message)
      },
      err => {
        this.script.errorAlert(err.error.sw_message)
        if (err.error.token == 0) {
          this.general.encryptUrl(this.route.url);
          // this.route.navigate([‘/restore-session’]);
        }
      }
    );
  }


  showMyLeave() {
    // this.dataUserId.id=id
    // console.log('hiiiii ndio tunayo tafuta sanaaaaaaaaaaaaa',this.data.id);
    this.transfer.showTransfer(this.dataUserId).subscribe(
      res => {
        this.my_leave_List = res;
        console.log('hiiiii ndio tunayo tafuta sanaaaaaaaaaaaaa',this.my_leave_List);
      },
      err => {
        if (err.error.token == 0) {
          sessionStorage.setItem('current_url', this.route.url)
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }


  getCourts(id:any) {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.data.court_level_id=id
    this.court.getCourtsByCourtIdNoZone(this.data).subscribe(
      res => {
        this.court_list = res;
        this.general.creating = false;
        this.general.bfrcreating = true;
      },
      err => {
        this.general.creating = false;
        this.general.bfrcreating = true;
        this.script.errorAlert(err.error.sw_message);
        if (err.error.token == 0) {
          sessionStorage.setItem('current_url', this.route.url)
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }

    getCourtLevel() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.court_level.getCourt_level().subscribe(
      res => {
        this.court_level_list = res;
        this.script.datatable();
        this.general.creating = false;
        this.general.bfrcreating = true;
      },
      err => {
        this.general.creating = false;
        this.general.bfrcreating = true;
        this.script.errorAlert(err.error.sw_message);
        if (err.error.token == 0) {
          sessionStorage.setItem('current_url', this.route.url)
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }
getTransferReason(){
  this.general.bfrcreating = false;
    this.general.creating = true;
  this.transfer.getTransfersReason().subscribe(
    res =>{
      this.transfer_reason_List = res;
      console.log("transfer reasons",res);
      
        this.script.datatable();
        this.general.creating = false;
        this.general.bfrcreating = true;
    },
    err =>{
      this.general.creating = false;
      this.general.bfrcreating = true;
      this.script.errorAlert(err.error.sw_message);
      if (err.error.token == 0) {
        sessionStorage.setItem('current_url', this.route.url)
        this.route.navigate(['/restore-session']);
      }
    }
  )
}


}
