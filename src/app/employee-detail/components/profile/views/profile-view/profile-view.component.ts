import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../../services/users/users.service';
import { GeneralService } from '../../../../../services/general/general.service';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'
import { ActivatedRoute, Router } from '@angular/router';


import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { environment } from '../../../../../../environments/environment';
@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
submoduleItemList: any;
personal_info:boolean=false;
employment_details:boolean=false;
education_details:boolean=false;
next_kin_details:boolean=false;
dependant_details:boolean=false;
office_details:boolean=false;
system_assignment:boolean=false;
professional_details:boolean=false;
bank_details:boolean=false;
personal_skills:boolean=false;
marital_status:boolean=false;
user_data={id:''}

  public concatenator='hrm-storage-files/employee/'
  public API_URL = environment.API_URL;

  details: any;
  submoduleId: any;
  organization: any;
  showModal: boolean = false;
  values = {
    uid: ''
  }
  new_data={id:''}
  data = {
    uid:'',
    id: '',
    roles: []
  }
  user_id: any;
  constructor(
    public general: GeneralService,
    
    public users: UsersService,
    public script: ScriptConfigService,
    private route: Router,
    private activeRoute: ActivatedRoute,
    public permission: PermissionsService,
  ) { }


  ngOnInit(): void {
      this.defaultView()
       this.submoduleId ='multi_2'
       this.showSubModuleItem(this.submoduleId)
       this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
     
    this.permission.getRole();
this.user_id=this.general.decryptionId(sessionStorage.getItem('id') as any);
this.userDetails(this.user_id);

  }

  editRoles() {
    this.data.uid = this.activeRoute.snapshot.paramMap.get('id') as any;

    this.general.bfrcreating = false;
    this.general.creating = true;
    this.permission.changeRoles(this.data).subscribe(
      res => {
        this.general.bfrcreating = true;
        this.general.creating = false;
        this.closeModal()
        this.general.successMessage(res.sw_message, (e: any) => {
          if (e) {
            window.location.reload();
          }

        });
      },
      err => {
        this.general.bfrcreating = true;
        this.general.creating = false;
        this.closeModal()
        this.general.errorMessage(err.error.sw_message, (e: any) => {
          if (e) {
            window.location.reload();
          }

        });
        if (err.error.token == 0) {
          sessionStorage.setItem('current_url', this.route.url)
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }

  userDetails(id: any) {
    this.new_data.id = id
    // console.log('data received are ', this.data.id)
    this.users.getUser(this.new_data).subscribe(
      res => {
        this.details = res;
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



  activate(id: any) {
    this.values.uid = id;
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.users.activateUser(this.data).subscribe(
      res => {
        this.general.bfrcreating = true;
        this.general.creating = false;
        this.closeModal()
        this.general.successMessage(res.sw_message, (e: any) => {
          if (e) {
            window.location.reload();
          }

        });
      },
      err => {
        this.general.bfrcreating = true;
        this.general.creating = false;
        this.closeModal()
        this.general.errorMessage(err.error.sw_message, (e: any) => {
          if (e) {
            window.location.reload();
          }

        });
        if (err.error.token == 0) {
          sessionStorage.setItem('current_url', this.route.url)
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }

  deactivate(id: any) {
    this.values.uid = id;
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.users.deactivateUser(this.data).subscribe(
      res => {
        this.general.bfrcreating = true;
        this.general.creating = false;
        this.closeModal()
        this.general.successMessage(res.sw_message, (e: any) => {
          if (e) {
            window.location.reload();
          }

        });
      },
      err => {
        this.general.bfrcreating = true;
        this.general.creating = false;
        this.closeModal()
        this.general.errorMessage(err.error.sw_message, (e: any) => {
          if (e) {
            window.location.reload();
          }

        });
        if (err.error.token == 0) {
          sessionStorage.setItem('current_url', this.route.url)
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }









  closeModal() {
    this.showModal = false;
  }

  openModal() {
    this.showModal = true;
  }



  viewOption(item:any){
    if(item=='personal-info'){
      this.personal_info=true
      this.employment_details=false
      this.education_details=false;
      this.next_kin_details=false;
      this.dependant_details=false;
      this.office_details=false;
      this.professional_details=false;
      this.bank_details=false;
      this.personal_skills=false;
      this.system_assignment=false;
      this.marital_status=false;
    }
    else if(item=='employment-details'){
      this.employment_details=true
      this.personal_info=false
      this.education_details=false;
      this.next_kin_details=false;
      this.dependant_details=false;
      this.office_details=false;
      this.professional_details=false;
      this.bank_details=false;
      this.personal_skills=false;
      this.system_assignment=false;
      this.marital_status=false;
    }

    else if(item=='education-details'){
      this.education_details=true;
      this.employment_details=false
      this.personal_info=false
      this.next_kin_details=false;
      this.dependant_details=false;
      this.office_details=false;
      this.professional_details=false;
      this.bank_details=false;
      this.personal_skills=false;
      this.system_assignment=false;
      this.marital_status=false;
    }
    else if(item=='next-of-kin'){
      this.next_kin_details=true;
      this.education_details=false;
      this.employment_details=false
      this.personal_info=false
      this.dependant_details=false;
      this.office_details=false;
      this.professional_details=false;
      this.bank_details=false;
      this.personal_skills=false;
      this.system_assignment=false;
      this.marital_status=false;
    }

    else if(item=='office-details'){
      this.office_details=true;
      this.next_kin_details=false;
      this.education_details=false;
      this.employment_details=false
      this.personal_info=false
      this.dependant_details=false;
      this.professional_details=false;
      this.bank_details=false;
      this.personal_skills=false;
      this.system_assignment=false;
      this.marital_status=false;
    }

    else if(item=='dependant-details'){
      this.dependant_details=true;
      this.next_kin_details=false;
      this.education_details=false;
      this.employment_details=false
      this.personal_info=false
      this.office_details=false;
      this.professional_details=false;
      this.bank_details=false;
      this.personal_skills=false;
      this.system_assignment=false;
      this.marital_status=false;
    }

     else if(item=='professional-skills'){
      this.professional_details=true;
      this.dependant_details=false;
      this.next_kin_details=false;
      this.education_details=false;
      this.employment_details=false
      this.personal_info=false
      this.office_details=false;
      this.bank_details=false;
      this.personal_skills=false;
      this.system_assignment=false;
      this.marital_status=false;
    }
  

    else if(item=='bank-details'){
      this.bank_details=true;
      this.dependant_details=false;
      this.next_kin_details=false;
      this.education_details=false;
      this.employment_details=false
      this.personal_info=false
      this.dependant_details=false;
      this.office_details=false;
      this.professional_details=false;
      this.personal_skills=false;
      this.system_assignment=false;
      this.marital_status=false;
    }
    else if(item=='personal-skills'){
      this.personal_skills=true;
      this.bank_details=false;
      this.dependant_details=false;
      this.next_kin_details=false;
      this.education_details=false;
      this.employment_details=false
      this.personal_info=false
      this.dependant_details=false;
      this.office_details=false;
      this.professional_details=false;
      this.system_assignment=false;
      this.marital_status=false;
    }
    else if(item=='system-assignment'){
      this.system_assignment=true;
      this.personal_skills=false;
      this.bank_details=false;
      this.dependant_details=false;
      this.next_kin_details=false;
      this.education_details=false;
      this.employment_details=false
      this.personal_info=false
      this.dependant_details=false;
      this.office_details=false;
      this.professional_details=false;
      this.marital_status=false;
     
    }
    else if(item=='marital-status'){
      this.marital_status=true;
      this.system_assignment=false;
      this.personal_skills=false;
      this.bank_details=false;
      this.dependant_details=false;
      this.next_kin_details=false;
      this.education_details=false;
      this.employment_details=false
      this.personal_info=false
      this.dependant_details=false;
      this.office_details=false;
      this.professional_details=false;
      
     
    }
  }



  defaultView(){
    this.personal_info=true
     this.personal_skills=false;
      this.employment_details=false;
      this.education_details=false;
      this.next_kin_details=false;
      this.dependant_details=false;
      this.office_details=false;
      this.professional_details=false;
      this.bank_details=false;
  }

  showSubModuleItem(id:any) {
    this.user_data.id=id;
    this.permission.showSubModuleItemListBySelectionOption(this.user_data).subscribe(
      res => {
        this.submoduleItemList = res.data;
      },
      err => {
        this.script.errorAlert(err.error.sw_message);
        if (err.error.token == 0) {
          this.general.encryptUrl(this.route.url);
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }

}
