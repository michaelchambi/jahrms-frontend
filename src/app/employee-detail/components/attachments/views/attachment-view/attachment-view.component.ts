import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { AttachmentService} from '../../../../../services/attachment/attachment.service';
import { PermissionsService} from '../../../../../services/permissions/permissions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'

@Component({
  selector: 'app-attachment-view',
  templateUrl: './attachment-view.component.html',
  styleUrls: ['./attachment-view.component.css']
})
export class AttachmentViewComponent {



  
    attachmentList: any;
    attachment_data: any;
    subattachmentId: any;
    
    data = {
      uid: '',user_id:''
    }
    attachment_datas={id:''}
    constructor(
      public general: GeneralService,
      public attachment: AttachmentService ,
      public permission: PermissionsService ,
      public script: ScriptConfigService,
      private route: Router,
      private activeRoute: ActivatedRoute
    ) { }
  
    ngOnInit(): void {
      this.subattachmentId = this.activeRoute.snapshot.paramMap.get('id');
      this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
      this.data.user_id=this.general.decryptionId(sessionStorage.getItem('id') as any)
      this.getattachment() ;
    }
  
    getattachment() {
      this.general.bfrcreating = false;
      this.general.creating = true;
      this.attachment.getAttachments().subscribe(
        res => {
          this.attachmentList = res;
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
  
  
  
  
    showCourt_level(id: any) {
      this.attachment_datas.id = id
      this.attachment.showAttachment(id).subscribe(
        res => {
          this.attachment_data = res;
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
      this.attachment_datas.id = id;
      this.general.bfrcreating = false;
      this.general.creating = true;
      this.attachment.activateAttachment(this.attachment_datas).subscribe(
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
      this.attachment_datas.id = id;
      this.general.bfrcreating = false;
      this.general.creating = true;
      this.attachment.deactivateAttachment(this.attachment_datas).subscribe(
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
  