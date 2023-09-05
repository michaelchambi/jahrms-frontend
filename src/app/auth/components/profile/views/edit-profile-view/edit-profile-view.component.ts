import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../../services/users/users.service';
import { GeneralService } from '../../../../../services/general/general.service';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile-view',
  templateUrl: './edit-profile-view.component.html',
  styleUrls: ['./edit-profile-view.component.css']
})
export class EditProfileViewComponent implements OnInit {

  employeeDetails:any;
  user_id:any;

  data = {
    id: '',
    uid: '',
    email: '',
    phone_number: ''
  }
  constructor(
    public general: GeneralService,
    public users: UsersService,
    public script: ScriptConfigService,
    private route: Router,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    //this.getDetails(this.general.decryptionId(sessionStorage.getItem('id') as any))
    this.user_id=this.general.decryptionId(sessionStorage.getItem('id') as any)
 this.userDetails(this.user_id) 
  }

  userDetails(id: any) {
    this.users.showUser(id).subscribe(
      res => {
        this.employeeDetails = res.data;
        this.data.id=this.employeeDetails.id;
        this.data.uid=this.employeeDetails.uid;
        this.data.email=this.employeeDetails.email;
        this.data.phone_number=this.employeeDetails.phone_number;
        this.script.successAlert(this.employeeDetails.sw_message)

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
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.users.editUser(this.data).subscribe(
      res => {
        this.general.creating = false;
        this.general.bfrcreating = true;
        this.route.navigate(['/my-profile']);
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
