import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { SettingsService } from '../../../../../services/settings/settings.service';
import { UsersService } from '../../../../../services/users/users.service';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-institution-user-form',
  templateUrl: './edit-institution-user-form.component.html',
  styleUrls: ['./edit-institution-user-form.component.css']
})
export class EditInstitutionUserFormComponent implements OnInit {


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
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id2');
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
    this.data.uid = this.uid;

    this.general.bfrcreating = false;
    this.general.creating = true;
    this.users.editUser(this.data).subscribe(
      res => {
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
