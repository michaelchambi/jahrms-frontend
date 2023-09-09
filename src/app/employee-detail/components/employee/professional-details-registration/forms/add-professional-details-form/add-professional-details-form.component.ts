import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../../services/general/general.service';
import { SettingsService } from '../../../../../../services/settings/settings.service';
import { UsersService } from '../../../../../../services/users/users.service';
import { ScriptConfigService } from '../../../../../../services/script-config/script-config.service'
import { Router, ActivatedRoute } from '@angular/router';
import { PermissionsService } from '../../../../../../services/permissions/permissions.service';


@Component({
  selector: 'app-add-professional-details-form',
  templateUrl: './add-professional-details-form.component.html',
  styleUrls: ['./add-professional-details-form.component.css']
})
export class AddProfessionalDetailsFormComponent {

my_kid:boolean=false;
just_dependant:boolean=false;
  selectedFile: any;
  created_by: any;
  role_list: any;
  submoduleId: any;
  uid: any;

  data = {
    professional_body_id:'',
    starting_date:'',
    completion_date:'',
    specialization:'',
    certificate_attachment:'',
    created_by:''
  }
  CurrentDate: any;
  my_date:any;
  age: any;
  difference: any;
  fileBirthCertificateUpload(e: any) {
    this.selectedFile = e.target.files[0];
  }


  fileStudentIdUpload(e: any) {
    this.selectedFile = e.target.files[0];
  }

  fileAffidavityUpload(e: any) {
    this.selectedFile = e.target.files[0];
  }
 

  constructor(
    public general: GeneralService,
    public settings: SettingsService,
    public users: UsersService,
    public script: ScriptConfigService,
    private route: Router,
    public permission: PermissionsService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.permission.getRole();
   
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

  



  calculateAge()
  {
    // this.my_date=this.data.birth_date
    this.CurrentDate = new Date()
    //  this.difference=Math.abs(this.CurrentDate - this.my_date.formart('dd/MM/YYYY') )
    //  this.age=this.my_date.getDay()
  // this.age=Math.floor(this.difference/(1000*60*60*24*365))
  }

  myChildren(){
    this.my_kid=true;
    this.just_dependant=false;
  }
  myDependant(){
    this.just_dependant=true;
    this.my_kid=false;

  }

}
