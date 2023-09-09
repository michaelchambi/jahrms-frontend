import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../../services/general/general.service';
import { SettingsService } from '../../../../../../services/settings/settings.service';
import { UsersService } from '../../../../../../services/users/users.service';
import { ScriptConfigService } from '../../../../../../services/script-config/script-config.service'
import { Router, ActivatedRoute } from '@angular/router';
import { RegionService } from '../../../../../../services/region/region.service';
import { DistrictsService } from '../../../../../../services/districts/districts.service';
import { PermissionsService } from '../../../../../../services/permissions/permissions.service';
@Component({
  selector: 'app-add-jot-users-form',
  templateUrl: './add-jot-users-form.component.html',
  styleUrls: ['./add-jot-users-form.component.css']
})
export class AddJotUsersFormComponent implements OnInit {
 
  selectedBirthCertificateFile:any;
  selectedMarriageCertificateFile:any;
  selectedPassport_imageFile :any;
  created_by: any;
  role_list: any;
  submoduleId: any;
  uid: any;
  data = {
    gender:'',
    birth_date:'',
    middle_name:'',
    region_id:'',
    district_id:'',
    last_name:'',
    first_name:'',
    national_id: '',
    email: '',
    phone_number: '',
    created_by: '',
    birth_certificate:'',
    employee_passport:''
  }
  regionDetails: any;
  districtDetails: any;

 

  constructor(
    public general: GeneralService,
    public settings: SettingsService,
    public users: UsersService,
    public script: ScriptConfigService,
    private route: Router,
    private districts:DistrictsService,
    private region:RegionService,
    public permission: PermissionsService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.permission.getRole();
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id');
  
    this. getRegions();
  }


  fileBirthCertificateUpload(e: any) {
    this.selectedBirthCertificateFile = e.target.files[0];
  }

  filePassportImageUpload(e: any) {
    this.selectedPassport_imageFile = e.target.files[0];
  }
  userRegistration() {
    this.created_by = sessionStorage.getItem('id')
    this.data.created_by = this.general.decryptionId(this.created_by);
    this.general.bfrcreating = false;
    this.general.creating = true;
    let formData = new FormData();
    formData.append('description', this.data.birth_date);
    formData.append('birth_certificate', this.selectedBirthCertificateFile);
    formData.append('employee_passport', this.selectedPassport_imageFile);
    formData.append('created_by', this.data.created_by);
    formData.append('gender', this.data.gender);
    formData.append('district_id', this.data.district_id);
    formData.append('region_id', this.data.region_id);
    formData.append('email', this.data.email);
    formData.append('national_id', this.data.national_id);
    formData.append('first_name', this.data.first_name);
    formData.append('last_name', this.data.last_name);
    formData.append('middle_name', this.data.middle_name);
    formData.append('phone_number', this.data.phone_number);
    formData.append('birth_date', this.data.birth_date);
    this.users.addUser(formData).subscribe(
      res => {
        this.uid = res.data;
        this.general.creating = false;
        this.general.bfrcreating = true;
        this.route.navigate(['/employee-details/' + this.submoduleId ]);
        // this.script.successAlert(res.sw_message);
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

  getDistricts(id:any) {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.districts.showDistrict(id).subscribe(
      res => {
        this.districtDetails = res;
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

  getRegions() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.region.getRegions().subscribe(
      res => {
        this.regionDetails = res;
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
