import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { CadreService } from '../../../../../services/cadre/cadre.service';
import { PermissionsService} from '../../../../../services/permissions/permissions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'



@Component({
  selector: 'app-cadre-view',
  templateUrl: './cadre-view.component.html',
  styleUrls: ['./cadre-view.component.css']
})
export class CadreViewComponent {
 
  cadreList: any;
  cadre_data: any;
  submoduleId: any;
  
  data = {
    uid: '',user_id:''
  }
  anouncement_deta={id:''}
  constructor(
    public general: GeneralService,
    public cadre:CadreService  ,
    public permission: PermissionsService ,
    public script: ScriptConfigService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id');
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this.data.user_id=this.general.decryptionId(sessionStorage.getItem('id') as any)
    this.getCadre() ;
  }

  // getCadre() {
  //   this.general.bfrcreating = false;
  //   this.general.creating = true;
  //   this.cadre.getCadres().subscribe(
  //     res => {
  //       this.cadreList = res;
  //       this.script.datatable();
  //       this.general.creating = false;
  //       this.general.bfrcreating = true;
  //     },
  //     err => {
        
  //       this.general.creating = false;
  //       this.general.bfrcreating = true;
  //       this.script.errorAlert(err.error.sw_message);
  //       if (err.error.token == 0) {
  //         this.general.encryptUrl(this.route.url);
  //         this.route.navigate(['/restore-session']);
  //       }
  //     }
  //   );
  // }

  getCadre() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.cadre.getCadres().subscribe(
      res => {
        this.cadreList = res;
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


  showCadre(id: any) {
    this.anouncement_deta.id = id
    this.cadre.showCadre(id).subscribe(
      res => {
        this.cadre_data = res;
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
    this.cadre.activateCadre(this.data).subscribe(
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
    this.cadre.deactivateCadre(this.data).subscribe(
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
