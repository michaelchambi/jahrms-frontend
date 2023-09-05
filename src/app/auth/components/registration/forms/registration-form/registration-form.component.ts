import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { AuthService } from '../../../../../services/auth/auth.service';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  data = {
    first_name: '',
    middle_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    check_number: '',
    institution: '',
    dob: '',
    date_employment: '',
    employee_number: '',
    national_id: ''
  }


  constructor(
    public general: GeneralService,
    public script: ScriptConfigService,
    private auth: AuthService,
    private route: Router,
  ) { }


  ngOnInit(): void {

  }




  userRegistration() {
    this.general.bfrcreating = false;
    this.general.creating = true;

    this.auth.registrationExternalUser(this.data).subscribe({
      next: (res: any) => {
        this.general.bfrcreating = true;
        this.general.creating = false;
        this.route.navigate(['/login']);
        this.script.successAlert(res.sw_message);

      },
      error: (err: any) => {
        this.general.creating = false;
        this.general.bfrcreating = true;
        this.script.errorAlert(err.error.en_message);
      }
    });

  }
}
