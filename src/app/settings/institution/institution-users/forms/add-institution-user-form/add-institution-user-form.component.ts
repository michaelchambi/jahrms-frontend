import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';

import { UsersService } from '../../../../../services/users/users.service';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'
import { ActivatedRoute, Router } from '@angular/router';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';

@Component({
  selector: 'app-add-institution-user-form',
  templateUrl: './add-institution-user-form.component.html',
  styleUrls: ['./add-institution-user-form.component.css']
})
export class AddInstitutionUserFormComponent implements OnInit {

  created_by: any;
  submoduleId: any;
  role_list: any;
  uid: any;
  data = {
    national_id: '',
    email: '',
    phone_number: '',
    roles: [],
    created_by: '',
  }

  constructor(
    public general: GeneralService,
    
    public users: UsersService,
    public script: ScriptConfigService,
    private route: Router,
    public permission: PermissionsService,
    private activeRoute: ActivatedRoute,
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
        this.route.navigate(['/institution-user-details/' + this.uid + '/' + this.submoduleId]);
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
