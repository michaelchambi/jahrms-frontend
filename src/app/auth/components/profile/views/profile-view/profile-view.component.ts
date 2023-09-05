import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../../services/users/users.service';
import { GeneralService } from '../../../../../services/general/general.service';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
 
  constructor(
    public general: GeneralService,
    public users: UsersService,
    private route: Router,
    public script: ScriptConfigService,
  ) { }

  employeeDetails:any;
  user_id:any;

  ngOnInit(): void {
this.user_id=this.general.decryptionId(sessionStorage.getItem('id') as any)
 this.userDetails(this.user_id) 
  }
  userDetails(id: any) {
    this.users.showUser(id).subscribe(
      res => {
        this.employeeDetails = res;
        this.script.successAlert(res.sw_message)

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

}
