
import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { ZoneService } from '../../../../../services/zone/zone.service';
import { PermissionsService} from '../../../../../services/permissions/permissions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'

@Component({
  selector: 'app-zone-view',
  templateUrl: './zone-view.component.html',
  styleUrls: ['./zone-view.component.css']
})
export class ZoneViewComponent {

  zoneList: any;
  zone_data: any;
  subzoneId: any;
  
  data = {
    uid: '',user_id:''
  }
  anouncement_deta={id:''}
  constructor(
    public general: GeneralService,
    public zone: ZoneService ,
    public permission: PermissionsService ,
    public script: ScriptConfigService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subzoneId = this.activeRoute.snapshot.paramMap.get('id');
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this.data.user_id=this.general.decryptionId(sessionStorage.getItem('id') as any)
    this.getAnnouncement() ;
  }

  getAnnouncement() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.zone.getZones().subscribe(
      res => {
        this.zoneList = res;
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




  showAnnouncement(id: any) {
    this.anouncement_deta.id = id
    this.zone.showZone(id).subscribe(
      res => {
        this.zone_data = res;
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
    this.zone.activateZone(this.data).subscribe(
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
    this.zone.deactivateZone(this.data).subscribe(
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
}
