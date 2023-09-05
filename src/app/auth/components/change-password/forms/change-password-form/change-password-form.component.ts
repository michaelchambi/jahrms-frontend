import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../../services/auth/auth.service';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service';
import { isEqual } from 'lodash';


@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent implements OnInit {

  uid: any;
  data = {
    uid: '',
    password: '',
    confirmPassword: ''
  }

  constructor(
    public general: GeneralService,
    public script: ScriptConfigService,
    private auth: AuthService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.uid = this.activeRoute.snapshot.paramMap.get('id');
  }

  changePassword() {
    this.general.bfrcreating = false;
    this.general.creating = true;

    if (isEqual(this.data.password, this.data.confirmPassword)) {
      this.data.uid = this.uid;
      this.auth.changePassword(this.data).subscribe(
        res => {
          this.general.bfrcreating = true;
          this.general.creating = false;
          this.script.successAlert(res.sw_message);
          this.route.navigate(['/login']);

        },
        err => {
          this.general.bfrcreating = true;
          this.general.creating = false;
          this.general.sw_message = 'Muda wa kubadili neno la siri umekwisha, Tafadhali umesahau neno siri';
          this.general.en_message = 'Link expired, Kindly forgot password';
          this.script.errorAlert(this.general.sw_message);
        }
      );
    }

    else {
      this.general.bfrcreating = true;
      this.general.creating = false;
      this.general.sw_message = "Neno la siri halifanani";
      this.general.en_message = 'Password does not match';
      this.script.errorAlert(this.general.sw_message);
    }

  }
}

