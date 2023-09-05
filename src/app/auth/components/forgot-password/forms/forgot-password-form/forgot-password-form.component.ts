import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service'
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'
import { AuthService } from '../../../../../services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.css']
})
export class ForgotPasswordFormComponent implements OnInit {

  data = {
    email: ''
  }
  constructor(
    public general: GeneralService,
    public script: ScriptConfigService,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {

  }

  forgotPassword() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.auth.forgotPassword(this.data).subscribe(
      res => {
        this.general.creating = false;
        this.general.bfrcreating = true;
        this.router.navigate(['/login']);
        this.script.successAlert(res.sw_message);
      },
      err => {
        this.general.creating = false;
        this.general.bfrcreating = true;
        this.script.errorAlert(err.error.sw_message);
      }
    );


  }
}
