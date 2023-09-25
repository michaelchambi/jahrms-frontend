
import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../services/general/general.service';
import { PermissionsService} from '../../../../services/permissions/permissions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DesignationChangesService } from '../../../../services/designation-changes/designation-changes.service';
import { ScriptConfigService } from '../../../../services/script-config/script-config.service'

@Component({
  selector: 'app-view-desigantion-change',
  templateUrl: './view-desigantion-change.component.html',
  styleUrls: ['./view-desigantion-change.component.css']
})
export class ViewDesigantionChangeComponent {


  designationList: any;
  designation_data: any;
  subdesignationId: any;
  user_id: any;
  designation_change_data = {
    change_designation_reason_name: '',
    change_designation_reason_abbreviation: '',
    created_by: ''
  }
  data = {
    uid: '',user_id:''
  }
  designation_datas={id:''}
  constructor(
    public general: GeneralService,
    public designations: DesignationChangesService ,
    public permission: PermissionsService ,
    public script: ScriptConfigService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subdesignationId = this.activeRoute.snapshot.paramMap.get('id');
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this.data.user_id=this.general.decryptionId(sessionStorage.getItem('id') as any)
    this.getdesignation() ;
  }

  getdesignation() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.designations.getAllDesignationChange().subscribe(
      res => {
        this.designationList = res;
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

  addDesignationChange(){
    this.general.bfrcreating = false;
    this.general.creating = true;
    console.log('HIZI HAPA NI DESIGNATION CAHNGE', this.designation_change_data);
    this.designation_change_data.created_by = this.data.user_id;
    this.designations.addDesignationChange(this.designation_change_data).subscribe(
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


  showdesignation(id: any) {
    this.designation_datas.id = id
    this.designations.showDesignationChange(id).subscribe(
      res => {
        this.designation_data = res;
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
    this.designation_datas.id = id;
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.designations.activateDesignationChange(this.designation_datas).subscribe(
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
    this.designation_datas.id = id;
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.designations.deactivateDesignationChange(this.designation_datas).subscribe(
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
