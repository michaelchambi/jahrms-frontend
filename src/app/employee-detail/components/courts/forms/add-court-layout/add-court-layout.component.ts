import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'
import { RegionService } from '../../../../../services/region/region.service';
import { CourtsService } from '../../../../../services/courts/courts.service';
import { CourtLevelService } from '../../../../../services/court-level/court-level.service';
import { DistrictsService } from '../../../../../services/districts/districts.service';

@Component({
  selector: 'app-add-court-layout',
  templateUrl: './add-court-layout.component.html',
  styleUrls: ['./add-court-layout.component.css']
})
export class AddCourtLayoutComponent {

  request_data={court_level_id:'',district_id:''}
      selectedFile: any;
      sub_moduleId:any;
      messageError: any;
      id: any;
      successMessage: any;
      errorMessage: any;
      appError: boolean = false;
      appSuccess: boolean = false;
      addUserError: boolean = false;
      addUserSuccess: boolean = false;
      bfrcreating: boolean = true;
      creating: boolean = false;
      data_found:boolean=false
      court_levelList: any;
     station_data={
      display_name:'',
      station_name:'',
      user_id:'',
      district_id:'',
      abbreviation:'',
      phone_number:'',
      road_name:'',
      email_address:'',
      post_code:'',
      address_number:'',
      court_level:'',
      zone_id:''
    }
      submoduleId: any;
      my_id: any;
      districtDetails: any;
      regionDetails: any;
    
      constructor(
        public general: GeneralService,
        public permission: PermissionsService,
        public script: ScriptConfigService,
        private activeRoute: ActivatedRoute,
        private districts:DistrictsService,
        private region:RegionService,
        private router: Router,
        private court_level:CourtLevelService,
        private court:CourtsService,
      ) { }
    
      ngOnInit(): void {
        this.submoduleId = this.activeRoute.snapshot.paramMap.get('id')
        this.id= sessionStorage.getItem("id");
        this.getRegions();
        this.getcourt_level();
      }
    
      fileUpload(e: any) {
        this.selectedFile = e.target.files[0];
      }
    
      addStation() {
        this.bfrcreating = false;
        this.creating = true;
        let formData = new FormData();
        this.my_id=this.general.decryptionId(this.id);
        this.station_data.user_id=this.my_id;

        formData.append('phone_number', this.station_data.phone_number);
        formData.append('zone_id', this.station_data.zone_id);
        formData.append('court_level_id', this.station_data.court_level);
        formData.append('road_name', this.station_data.road_name);
        formData.append('post_code', this.station_data.post_code);
        formData.append('email_address', this.station_data.email_address);
        formData.append('address_number', this.station_data.address_number);
        formData.append('display_name', this.station_data.display_name);
        formData.append('district_id', this.station_data.district_id);
        formData.append('court_name', this.station_data.station_name);
        formData.append('abbreviation', this.station_data.abbreviation);
       
        this.court.addCourt(formData).subscribe(
          res => {
            this.appSuccess = true;
            this.successMessage = res.message;
            this.router.navigate(['/judicial-work-station/' + this.submoduleId]);
            this.general.successMessage(res.sw_message, (e: any) => {
              if (e) {
                window.location.reload();
              }
    
            });
    
          },
    
          err => {
            this.appError = true;
            this.bfrcreating = true;
            this.creating = false;
            this.messageError = err.error.message;
            if (err.error.token == 0) {
              localStorage.setItem('token', err.error.token);
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
              this.general.encryptUrl(this.router.url);
              this.router.navigate(['/restore-session']);
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
              this.general.encryptUrl(this.router.url);
              this.router.navigate(['/restore-session']);
            }
          }
        );
      }
    
    
  getcourt_level() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.court_level.getActiveCourt_level().subscribe(
      res => {
        this.court_levelList = res;
        this.script.datatable();
        this.general.creating = false;
        this.general.bfrcreating = true;
        this.data_found=true
      },
      err => {
        
        this.general.creating = false;
        this.general.bfrcreating = true;
        this.script.errorAlert(err.error.sw_message);
        if (err.error.token == 0) {
          this.general.encryptUrl(this.router.url);
          this.router.navigate(['/restore-session']);
        }
      }
    );
  }
  
    
    }
    
    
    
    