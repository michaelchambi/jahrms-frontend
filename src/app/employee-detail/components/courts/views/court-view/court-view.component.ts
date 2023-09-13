import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { CourtLevelService } from '../../../../../services/court-level/court-level.service';
import { ZoneService } from '../../../../../services/zone/zone.service';
import { CourtsService } from '../../../../../services/courts/courts.service';
import { PermissionsService} from '../../../../../services/permissions/permissions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'

@Component({
  selector: 'app-court-view',
  templateUrl: './court-view.component.html',
  styleUrls: ['./court-view.component.css']
})
export class CourtViewComponent {
court_level_id={id:''}
  courtList: any;
  court_data: any;
  
  mouleId: any;
  data_found:boolean=false
  zone_selected:boolean=false;

  request_data={court_level_id:'',zone_id:''}
  
  data = {
    uid: '',user_id:''
  }
  court_detas={id:''}
  court_levelList: any;
  zoneList: any;
  
  constructor(
    public general: GeneralService,
    public court: CourtsService ,
    public court_level: CourtLevelService ,
    public permission: PermissionsService ,
    public script: ScriptConfigService,
    public zone: ZoneService,
    private route: Router,
    private activeRoute: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.mouleId = this.activeRoute.snapshot.paramMap.get('id');
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this.data.user_id=this.general.decryptionId(sessionStorage.getItem('id') as any)
    // this.getcourt_level() ;
    this.getZone();
    this.myOption();
  }


  getcourt_level() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.court_level.getActiveCourt_level().subscribe(
      res => {
        this.court_levelList = res;
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
          this.general.encryptUrl(this.route.url);
          this.route.navigate(['/restore-session']);
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
        // this.script.datatable();
        this.general.creating = false;
        this.general.bfrcreating = true;
        this.zone_selected=true;
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

  getCourt(id:any) {
    this.request_data.court_level_id=id;
   
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.court.getCourtsByCourtId(this.request_data).subscribe(
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
          this.general.encryptUrl(this.route.url);
          this.route.navigate(['/restore-session']);
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
          sessionStorage.setItem('current_url', this.route.url)
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }


  activate(id: any) {
    this.data.uid = id;
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.court.activateCourt(this.data).subscribe(
      res => {
        this.general.bfrcreating = true;
        this.general.creating = false;
        this.general.successMessage(res.sw_message, (e: any) => {
          if (e) {
            window.location.reload();
          }

        });
      },
      err => {
        this.general.bfrcreating = true;
        this.general.creating = false;
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
    this.data.uid = id;
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.court.deactivateCourt(this.data).subscribe(
      res => {
        this.general.bfrcreating = true;
        this.general.creating = false;
        this.general.successMessage(res.sw_message, (e: any) => {
          if (e) {
            window.location.reload();
          }

        });
      },
      err => {
        this.general.bfrcreating = true;
        this.general.creating = false;
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
  myOption(){
    this.data_found=false;
    this.zone_selected=false
    }
    
}

