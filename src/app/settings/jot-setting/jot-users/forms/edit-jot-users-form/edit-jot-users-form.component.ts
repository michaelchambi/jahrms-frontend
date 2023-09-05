import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { SettingsService } from '../../../../../services/settings/settings.service';
import { UsersService } from '../../../../../services/users/users.service';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-edit-jot-users-form',
  templateUrl: './edit-jot-users-form.component.html',
  styleUrls: ['./edit-jot-users-form.component.css']
})
export class EditJotUsersFormComponent implements OnInit {

  id: any;
  uid: any;
  submoduleId: any;
  data = {
    uid: '',
    email: '',
    phone_number: '',
  }

  constructor(
    public general: GeneralService,
    public settings: SettingsService,
    public users: UsersService,
    public script: ScriptConfigService,
    private route: Router,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.userDetails(this.activeRoute.snapshot.paramMap.get('id'));
  }


  userDetails(id: any) {
    this.data.uid = id
    this.users.showUser(this.data).subscribe(
      res => {
        this.data = res.data;
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


  editDetails() {
    this.uid = this.activeRoute.snapshot.paramMap.get('id')
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id2')
    this.data.uid = this.uid;

    this.general.bfrcreating = false;
    this.general.creating = true;
    this.users.editUser(this.data).subscribe(
      res => {
        this.general.creating = false;
        this.general.bfrcreating = true;
        this.route.navigate(['/jot-setting-user-details/' + this.uid + '/' + this.submoduleId]);
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
