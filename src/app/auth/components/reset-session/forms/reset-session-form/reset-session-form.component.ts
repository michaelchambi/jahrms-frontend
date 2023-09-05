import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { AuthService } from '../../../../../services/auth/auth.service';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import * as sjcl from 'sjcl';
import { isEqual } from 'lodash';


@Component({
  selector: 'app-reset-session-form',
  templateUrl: './reset-session-form.component.html',
  styleUrls: ['./reset-session-form.component.css']
})
export class ResetSessionFormComponent implements OnInit {
  labelName: any;
  labelEmail: any;
  labelUrl: any;
  decryptedUrl: any;
  current_url = '/restore-session';
  message: any;
  data = {
    email: '',
    password: ''
  }

  constructor(
    public general: GeneralService,
    public script: ScriptConfigService,
    private auth: AuthService,
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.labelName = sessionStorage.getItem('name');
    this.labelEmail = sessionStorage.getItem('email');
    this.labelUrl = sessionStorage.getItem('current_url');
  }



  sessionRestore() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.data.email = this.labelEmail;

    this.decryptedUrl = this.general.decryption(this.labelUrl)

    this.auth.login(this.data).subscribe(
      res => {

        this.general.encryptToken(res.data.accessToken);
        this.general.encryptId(res.data.id);

        if (isEqual(this.decryptedUrl, this.current_url)) {
          this.general.creating = false;
          this.general.bfrcreating = true;
          this.route.navigate(['/home']);
          this.message = "Sessions successfully restored.";
          this.script.successAlert(this.message);
        }
        else {
          this.general.creating = false;
          this.general.bfrcreating = true;
          this.route.navigate([this.decryptedUrl]);
          this.message = "Sessions successfully restored.";
          this.script.successAlert(this.message);
        }


      },
      err => {
        this.general.creating = false;
        this.general.bfrcreating = true;
        this.script.errorAlert(err.error.message);
      }
    );
  }

}

