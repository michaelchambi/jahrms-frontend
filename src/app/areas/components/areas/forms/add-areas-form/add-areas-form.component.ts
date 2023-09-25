import { Component} from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { UsersService } from '../../../../../services/users/users.service';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'
import { Router, ActivatedRoute } from '@angular/router';
import { BankService } from '../../../../../services/bank/bank.service';
import { AreasService } from '../../../../../services/areas/areas.service';

@Component({
  selector: 'app-add-areas-form',
  templateUrl: './add-areas-form.component.html',
  styleUrls: ['./add-areas-form.component.css']
})
export class AddAreasFormComponent {


  selectedCardCopyFile:any;
  created_by: any;
  role_list: any;
  submoduleId: any;
  uid: any;
  data = {
    expected_amount:'',
    areas_attachment:'',
    employee_id:'',
    personal_folder:'',
    description:''
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
    private areas: AreasService
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
    this.data.areas_attachment=this.selectedCardCopyFile;

    let formData = new FormData();
    formData.append('personal_folder', this.data.personal_folder);
    formData.append('expected_amount', this.data.expected_amount);
    formData.append('employee_id', this.data.employee_id);
    formData.append('description', this.data.description);
    formData.append('areas_attachment', this.data.areas_attachment);
    this.areas.addAreas(formData).subscribe(
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
