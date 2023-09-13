import { Component} from '@angular/core';
import { GeneralService } from '../../../../../../services/general/general.service';
import { SettingsService } from '../../../../../../services/settings/settings.service';
import { UsersService } from '../../../../../../services/users/users.service';
import { ScriptConfigService } from '../../../../../../services/script-config/script-config.service'
import { Router, ActivatedRoute } from '@angular/router';
import { BankService } from '../../../../../../services/bank/bank.service';

@Component({
  selector: 'app-add-bank-details-form',
  templateUrl: './add-bank-details-form.component.html',
  styleUrls: ['./add-bank-details-form.component.css']
})
export class AddBankDetailsFormComponent {



  created_by: any;
  role_list: any;
  submoduleId: any;
  uid: any;
  data = {
    bank_id:'',
    account_number:'',
    account_name:'',
    created_by: '',
  }
  bankDetails: any;

 

  constructor(
    public general: GeneralService,
    public settings: SettingsService,
    public users: UsersService,
    public script: ScriptConfigService,
    private route: Router,
    public bank: BankService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getBank();
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
        this.route.navigate(['/view-users/' + this.uid ]);
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



  getBank() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.bank.getBanks().subscribe(
      res => {
        this.bankDetails = res;
        this.script.datatable();
        this.general.creating = false;
        this.general.bfrcreating = true;
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
