
import { Component } from '@angular/core';
import { GeneralService } from '../../../../../../services/general/general.service';
import { NextOfKinInfoService } from '../../../../../../services/employee/next-of-kin/next-of-kin-info.service';
import { UsersService } from '../../../../../../services/users/users.service';
import { DependantTypeService } from '../../../../../../services/dependant-type/dependant-type.service';
import { ScriptConfigService } from '../../../../../../services/script-config/script-config.service'
import { Router, ActivatedRoute } from '@angular/router';
import { PermissionsService } from '../../../../../../services/permissions/permissions.service';

@Component({
  selector: 'app-add-self-skills-details-form',
  templateUrl: './add-self-skills-details-form.component.html',
  styleUrls: ['./add-self-skills-details-form.component.css']
})
export class AddSelfSkillsDetailsFormComponent {



my_kid:boolean=false;
just_dependant:boolean=false;
  selectedFile: any;
  created_by: any;
  role_list: any;
  submoduleId: any;
  uid: any;
  data = {
    full_name:'',
    relation_id:'',
    phone_number :'',
    gender:'',
    employee_id:'',
    physical_address:'',
  }

  




  CurrentDate: any;
  my_date:any;
  age: any;
  difference: any;
  relationDetails: any;
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
    public dependant: NextOfKinInfoService,
    public users: UsersService,
    public script: ScriptConfigService,
    private route: Router,
    private relation:DependantTypeService,
    public permission: PermissionsService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.permission.getRole();
   this.getDependantType();
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id');
  }

  dependantRegistration() {
    this.created_by = sessionStorage.getItem('id')
    this.data.employee_id = this.general.decryptionId(this.created_by);

    // return console.log(this.data);


    this.general.bfrcreating = false;
    this.general.creating = true;
    this.dependant.addNextOfKin(this.data).subscribe(
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

  



  getDependantType() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.relation.getDependantTypes().subscribe(
      res => {
        this.relationDetails = res;
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


  myChildren(){
    this.my_kid=true;
    this.just_dependant=false;
  }
  myDependant(){
    this.just_dependant=true;
    this.my_kid=false;

  }

}
