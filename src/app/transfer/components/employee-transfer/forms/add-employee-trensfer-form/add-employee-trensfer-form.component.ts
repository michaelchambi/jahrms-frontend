import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { SettingsService } from '../../../../../services/settings/settings.service';
import { UsersService } from '../../../../../services/users/users.service';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'
import { Router, ActivatedRoute } from '@angular/router';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { TransferService } from '../../../../../services/transfer/transfer.service';
import { CourtLevelService } from '../../../../../services/court-level/court-level.service';
import { CourtsService } from '../../../../../services/courts/courts.service';

@Component({
  selector: 'app-add-employee-trensfer-form',
  templateUrl: './add-employee-trensfer-form.component.html',
  styleUrls: ['./add-employee-trensfer-form.component.css']
})
export class AddEmployeeTrensferFormComponent {


  selectedFile: any;
  created_by: any;
  role_list: any;
  submoduleId: any;
  uid: any;
  user_id: any;
  my_leave_List: any;
  court_level_list: any;
  court_list: any;
  employee_transfer_data = {
    transfer_reason_id:'',
    created_by:'',
    id:'',
    court_id:'',
    court_level_id:'',
  }
  userDetails: any;
  employee_id: any;
  transfer_reason_List: any;

  dataUserId = {
    uid: ''
  }

  constructor(
    public general: GeneralService,
   
    public users: UsersService,
    public script: ScriptConfigService,
    private route: Router,
    public permission: PermissionsService,
    public transfer:TransferService,
    public court: CourtsService,
    public court_level: CourtLevelService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.permission.getRole();
    this.uid= sessionStorage.getItem('id')
    this.user_id =this.general.decryption(sessionStorage.getItem('id') as any)
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id');
    this.showUser(this.submoduleId);
    this.showMyTransfer();
    this.getCourtLevel();
    this.getTransferReason();
  }

  fileUpload(e: any) {
    this.selectedFile = e.target.files[0];
  }

  showUser(id:any) {
    this.users.showUser(id).subscribe(
      res => {
        this.userDetails = res.data;
        console.log("hii hapa nyingine",this.userDetails.age);
        
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


  showMyTransfer() {
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
  adminEmployeeTransfer(id:any){
    this.employee_transfer_data.id=id
    console.log('tena hii hapa',this.employee_transfer_data);
    this.employee_transfer_data.created_by =  this.user_id
    this.general.bfrcreating = false;
    this.general.creating = true;

    this.transfer.adminEmployeeTransfer(this.employee_transfer_data).subscribe(
      res =>{
         this.general.creating = false;
         this.general.bfrcreating = true;
         this.route.navigate(['/employee-transfer/' + this.uid ]);
         this.script.successAlert(res.sw_message);
      },
      err =>{
        this.general.creating = false;
        this.general.bfrcreating = true;
        this.script.errorAlert(err.error.sw_message);
        if (err.error.token == 0) {
          this.general.encryptUrl(this.route.url);
          this.route.navigate(['/restore-session']);
        }
      }
    )
  }


  getCourts(id:any) {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.employee_transfer_data.court_level_id=id
    this.court.getCourtsByCourtIdNoZone(this.employee_transfer_data).subscribe(
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
