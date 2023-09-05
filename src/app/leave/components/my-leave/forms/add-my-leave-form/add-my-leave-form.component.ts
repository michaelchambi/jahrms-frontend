import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { SettingsService } from '../../../../../services/settings/settings.service';
import { UsersService } from '../../../../../services/users/users.service';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'
import { Router, ActivatedRoute } from '@angular/router';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { LeaveService } from '../../../../../services/leave/leave.service';

@Component({
  selector: 'app-add-my-leave-form',
  templateUrl: './add-my-leave-form.component.html',
  styleUrls: ['./add-my-leave-form.component.css']
})
export class AddMyLeaveFormComponent {
my_kid:boolean=false;
just_dependant:boolean=false;
  selectedFile: any;
  created_by: any;
  role_list: any;
  submoduleId: any;
  uid: any;
  user_id: any;
  data = {
    leave_type:'',
      region_id:'',
      start_date:'',
      end_date:'',
      created_by:'',
      id:''
  }
  userDetails: any;
  employee_id: any;

 

  constructor(
    public general: GeneralService,
    public settings: SettingsService,
    public users: UsersService,
    public script: ScriptConfigService,
    private route: Router,
    public permission: PermissionsService,
    public leave:LeaveService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.permission.getRole();
    this.uid= sessionStorage.getItem('id')
    this.user_id =this.general.decryption(sessionStorage.getItem('id') as any)
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id');
    this.showUser(this.user_id)
  }

  addLeave() {
   
    console.log('Data zangu ni hizi',this.data);
    
    this.created_by = sessionStorage.getItem('id')
    this.data.created_by = this.general.decryptionId(this.created_by);
    // return console.log(this.data);
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.data.id=this.user_id
    this.leave.addleave(this.data).subscribe(
      res => {
        // this.uid = res.data;
        this.general.creating = false;
        this.general.bfrcreating = true;
        this.route.navigate(['/my-leave/' + this.uid ]);
        this.script.successAlert(res.sw_message);
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

  showUser(id: any) {
    this.users.showUser(this.user_id).subscribe(
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

}
