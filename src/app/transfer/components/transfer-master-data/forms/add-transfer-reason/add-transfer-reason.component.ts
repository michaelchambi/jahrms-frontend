
import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'
import { TransferService } from '../../../../../services/transfer/transfer.service';

@Component({
  selector: 'app-add-transfer-reason',
  templateUrl: './add-transfer-reason.component.html',
  styleUrls: ['./add-transfer-reason.component.css']
})
export class AddTransferReasonComponent {

  data = {
    description:'',
    user_id: ''
  }
  submoduleId: any;
  user_id: any;

  constructor(
    public general: GeneralService,
    public permission: PermissionsService,
    public script: ScriptConfigService,
    private route: Router,
    private transfers: TransferService,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id')
    this.user_id =this.general.decryption(sessionStorage.getItem('id') as any)
  }
  addModule() {
    this.general.bfrcreating = false;
    this.general.creating = true;
    // console.log("transfer reasonssss", this.data);
    this.data.user_id = this.user_id
    this.transfers.addTransferReason(this.data).subscribe(
      res => {
        this.general.creating = false;
        this.general.bfrcreating = true;
        this.route.navigate(['/transfer-reason/' + this.submoduleId]);
        this.script.successAlert(res.sw_message);
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
