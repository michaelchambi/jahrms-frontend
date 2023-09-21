import { Component} from '@angular/core';
import { GeneralService } from '../../../../../../services/general/general.service';
import { UsersService } from '../../../../../../services/users/users.service';
import { ScriptConfigService } from '../../../../../../services/script-config/script-config.service'
import { Router, ActivatedRoute } from '@angular/router';
import { BankService } from '../../../../../../services/bank/bank.service';
import { BankInfoService } from '../../../../../../services/employee/bank/bank-info.service';

@Component({
  selector: 'app-add-self-bank-details-form',
  templateUrl: './add-self-bank-details-form.component.html',
  styleUrls: ['./add-self-bank-details-form.component.css']
})
export class AddSelfBankDetailsFormComponent {

  selectedCardCopyFile:any;
  created_by: any;
  role_list: any;
  submoduleId: any;
  uid: any;
  data = {
    bank_id:'',
    account_number:'',
    account_name:'',
    created_by: '',
    card_coppy:'',
    employee_id:'',
    personal_folder:''
  }
  bankDetails: any;
  userInfoDetails: any;
  current_user_id: any;

 

  constructor(
    public general: GeneralService,
    public users: UsersService,
    public script: ScriptConfigService,
    private route: Router,
    public bank: BankService,
    private bank_info: BankInfoService
  ) { }

  ngOnInit(): void {
    this.getBank();
    this.current_user_id=this.general.decryptionId(sessionStorage.getItem('id') as any)
    this.userDetails(this.current_user_id);
  }

  fileCardCopyUpload(e: any) {
    this.selectedCardCopyFile = e.target.files[0];
  }



  userDetails(id: any) {
    this.users.showUserById(id).subscribe(
      res => {
        this.userInfoDetails = res.data;

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


  addBankDetails()  {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.data.employee_id=this.userInfoDetails.data.id;
    this.data.personal_folder=this.userInfoDetails.data.personal_folder;
    this.data.card_coppy=this.selectedCardCopyFile;

    let formData = new FormData();
    formData.append('personal_folder', this.data.personal_folder);
    formData.append('account_number', this.data.account_number);
    formData.append('employee_id', this.data.employee_id);
    formData.append('bank_id', this.data.bank_id);
    formData.append('account_name', this.data.account_name);
    formData.append('card_copy', this.selectedCardCopyFile);
    this.bank_info.addBankInfo(formData).subscribe(
      res => {
        this.uid = res.data;
        this.general.creating = false;
        this.general.bfrcreating = true;
        this.route.navigate(['/my-profile']);
  
        this.general.successMessage(res.sw_message, (e: any) => {
          if (e) {
            window.location.reload();
          }

        });

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
