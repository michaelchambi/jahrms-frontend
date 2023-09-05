import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { SettingsService } from '../../../../../services/settings/settings.service';
import { UsersService } from '../../../../../services/users/users.service';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'
import { Router, ActivatedRoute } from '@angular/router';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';

@Component({
  selector: 'app-add-jot-users-form',
  templateUrl: './add-jot-users-form.component.html',
  styleUrls: ['./add-jot-users-form.component.css']
})
export class AddJotUsersFormComponent implements OnInit {

  created_by: any;
  role_list: any;
  submoduleId: any;
  uid: any;
  data = {
    gender:'',
    birth_date:'',
    hired_date:'',
    middle_name:'',
    last_name:'',
    first_name:'',
    national_id: '',
    email: '',
    phone_number: '',
    roles: [],
    created_by: '',
    check_number :'',
    pf_number :'',
    designation_id:'',
  }

 

  constructor(
    public general: GeneralService,
    public settings: SettingsService,
    public users: UsersService,
    public script: ScriptConfigService,
    private route: Router,
    public permission: PermissionsService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.permission.getRole();
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id');
  }

  userRegistration() {
    this.created_by = sessionStorage.getItem('id')
    this.data.created_by = this.general.decryptionId(this.created_by);

    // return console.log(this.data);


    this.general.bfrcreating = false;
    this.general.creating = true;
    this.users.addUser(this.data).subscribe(
      res => {
        this.uid = res.data;
        this.general.creating = false;
        this.general.bfrcreating = true;
        this.route.navigate(['/employee-details/' + this.uid ]);
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

}
