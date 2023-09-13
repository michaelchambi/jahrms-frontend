import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../../services/permissions/permissions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StationService } from '../../../../../../services/station/station.service';
import { ScriptConfigService } from '../../../../../../services/script-config/script-config.service'
import { RegionService } from '../../../../../../services/region/region.service';
import { DistrictsService } from '../../../../../../services/districts/districts.service';
import { CourtLevelService } from '../../../../../../services/court-level/court-level.service';
import { ZoneService } from '../../../../../../services/zone/zone.service';
import { CourtsService } from '../../../../../../services/courts/courts.service';
@Component({
  selector: 'app-add-office-details-form',
  templateUrl: './add-office-details-form.component.html',
  styleUrls: ['./add-office-details-form.component.css']
})
export class AddOfficeDetailsFormComponent {

    
      messageError: any;
      id: any;
      my_district_id:any;
      successMessage: any;
      errorMessage: any;
      appError: boolean = false;
      appSuccess: boolean = false;
      bfrcreating: boolean = true;
      creating: boolean = false;
      data_found:boolean=false
      zone_selected:boolean=false;
      court_levelList: any;
      zoneList: any;
      courtList: any;
      court_data: any;
      data = {
        uid: '',user_id:''
      }
    SelectedCourtDetails: any;
  trueCourt: boolean=false;
  nonTrueCourt: boolean=false;
  workstationList: any;
      getShowDistrictId(id:any){
        this.my_district_id=id;
      }
      court_detas={id:''}
  
      request_data={court_level_id:'',district_id:''}
      station_data={
        station_assignment_date:'',
      station_id:'',
      court_id:'',
      workstation_id:'',
      user_id:'',
      employee_id:''
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
        private station:StationService,
        public court: CourtsService ,
        public court_level: CourtLevelService ,
        public zone: ZoneService,
      ) { }
    
      ngOnInit(): void {
        this.submoduleId = this.activeRoute.snapshot.paramMap.get('id')
        this.id= sessionStorage.getItem("id");
        this.getRegions();
        this.getcourt_level();
        this.getStation();
      }
    
    
    
      officeDetailsRegistration() {
        this.bfrcreating = false;
        this.creating = true;
        let formData = new FormData();
        this.my_id=this.general.decryptionId(this.id);
        this.station_data.user_id=this.my_id;
        formData.append('station_id', this.station_data.court_id);
        formData.append('phone_number', this.station_data.station_assignment_date);
        formData.append('station_category', 'JUDICIAL');
        formData.append('user_id', this.station_data.user_id);
        formData.append('employee_id', this.station_data.employee_id);
        this.court.editCourtAsWorkStation(formData).subscribe(
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
    



       nonCourtofficeDetailsRegistration() {
        this.bfrcreating = false;
        this.creating = true;
        let formData = new FormData();
        this.my_id=this.general.decryptionId(this.id);
        this.station_data.user_id=this.my_id;
        formData.append('station_id', this.station_data.workstation_id);
        formData.append('phone_number', this.station_data.station_assignment_date);
        formData.append('station_category', 'NON-JUDICIAL');
        formData.append('user_id', this.station_data.user_id);
        formData.append('employee_id', this.station_data.employee_id);
        this.court.editCourtAsWorkStation(formData).subscribe(
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

      getStation() {
        this.general.bfrcreating = false;
        this.general.creating = true;
        this.station.getStations().subscribe(
          res => {
            this.workstationList = res;
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
    
  
  
      getZone() {
        this.zone_selected=false;
        this.general.bfrcreating = false;
        this.general.creating = true;
        this.zone.getZones().subscribe(
          res => {
            this.zoneList = res;
            this.script.datatable();
            this.general.creating = false;
            this.general.bfrcreating = true;
            this.zone_selected=true;
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
    
      getCourt(id:any,district_id:any) {
        this.request_data.court_level_id=id;
       this.request_data.district_id=district_id;
        this.general.bfrcreating = false;
        this.general.creating = true;
        this.court. getCourtsByCourtLevelIdAndDistrictId(this.request_data).subscribe(
          res => {
            this.courtList = res;
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
    
    
    
    
      showCourt(id: any) {
        this.court_detas.id = id
        this.court.showCourt(id).subscribe(
          res => {
            this.court_data = res;
          },
          err => {
            if (err.error.token == 0) {
              sessionStorage.setItem('current_url', this.router.url)
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
    
    getCourtDetails(id:any){
      this.court_detas.id = id
    this.general.bfrcreating = false;
      this.general.creating = true;
      this.court.showSelectedCourt(this.court_detas).subscribe(
        res => {
          this.SelectedCourtDetails = res;
         
          // this.script.datatable();
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
    
  
    getTrueCourt(){
      this.trueCourt=true
      this.nonTrueCourt=false
    }
    getUnTrueCourt(){
      this.trueCourt=false
      this.nonTrueCourt=true
    }
      myOption(){
        this.data_found=false;
        this.zone_selected=false
        }
    
    }
    
    
    
    