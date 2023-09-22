
import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'
import { TransferService } from '../../../../../services/transfer/transfer.service';

@Component({
  selector: 'app-view-my-trensfer-view',
  templateUrl: './view-my-trensfer-view.component.html',
  styleUrls: ['./view-my-trensfer-view.component.css']
})
export class ViewMyTrensferViewComponent {
  moduleList: any;
  my_transfer_List: any;
  submoduleId: any;
  module_id: any;
  submoduleList: any;
  submodule_data: any;
  module_data: any;
  user_id: any;
  data = {
    uid: '',
    id:''
  }

  constructor(
    public general: GeneralService,
    public permission: PermissionsService,
    public script: ScriptConfigService,
    private route: Router,
    private transfers:TransferService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.user_id =this.general.decryption(sessionStorage.getItem('id') as any)
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id');
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this.getModule();
    this.showMyTransfer(this.user_id);
  }

  getModule() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.permission.getModules().subscribe(
      res => {
        this.moduleList = res.data;
        console.log("mafanikoa yangu", res);
        
        
        this.script.datatable();
        this.general.creating = false;
        this.general.bfrcreating = true;
      },
      err => {
        console.log("mafanikoa yangu", err);
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





  showMyTransfer(id: any) {
    this.data.id=id
    // console.log('hiiiii ndio tunayo tafuta sanaaaaaaaaaaaaa',this.data.id);
    this.transfers.showTransfer(this.data).subscribe(
      res => {
        this.my_transfer_List = res;
      },
      err => {
        if (err.error.token == 0) {
          sessionStorage.setItem('current_url', this.route.url)
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }
  
  showTransfersGeneralDetails(id: any) {
    this.data.uid = id
    this.transfers.showTransfersGeneralDetails(this.data).subscribe(
      res => {
        this.submodule_data = res.data;
      },
      err => {
        if (err.error.token == 0) {
          sessionStorage.setItem('current_url', this.route.url)
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }
  showSubModule(id: any) {
    this.data.uid = id
    this.permission.showSubModule(this.data).subscribe(
      res => {
        this.submodule_data = res.data;
      },
      err => {
        if (err.error.token == 0) {
          sessionStorage.setItem('current_url', this.route.url)
          this.route.navigate(['/restore-session']);
        }
      }
    );
  }
  
  
}
