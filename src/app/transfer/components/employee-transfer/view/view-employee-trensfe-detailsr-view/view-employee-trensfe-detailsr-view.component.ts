import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../../services/users/users.service';
import { GeneralService } from '../../../../../services/general/general.service';
import { TransferService } from '../../../../../services/transfer/transfer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-view-employee-trensfe-detailsr-view',
  templateUrl: './view-employee-trensfe-detailsr-view.component.html',
  styleUrls: ['./view-employee-trensfe-detailsr-view.component.css']
})
export class ViewEmployeeTrensfeDetailsrViewComponent {
  my_id: any;
  leave_id: any;
  transfer_details: any;
  change: boolean = false;
  AmOk: boolean = false;
  my_leave_id = { uid: '' }
  employee_leave_id = { id: '' }


  comments_immidiet_supporvisor = {
    transfer_immediet_suppervisor_comment: '',
    id: '',
  }

  comments_reject = {
    id: '',
    transfer_approver_comment: '',
  }
  approve = {
  id: '',
  transfer_approver_comment: '',
  }
  constructor(
    public general: GeneralService,
    public users: UsersService,
    public transfers: TransferService,
    public permission: PermissionsService,
    public activeRoute: ActivatedRoute,
    public route: Router
  ) { }



  public concatenator='hrm-storage-files/announcement/'
  public API_URL = environment.API_URL;

  ngOnInit(): void {
    this.okWithDate();
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this.my_id = this.general.decryptionId(sessionStorage.getItem('id') as any);
    this.leave_id = this.activeRoute.snapshot.paramMap.get('id2');
    console.log('hiii ndio id ya transfer yangu wangu mimi', this.leave_id);
    this.showTransfersGeneralDetails();
  }

  showTransfersGeneralDetails() {
    this.my_leave_id.uid = this.leave_id
    this.transfers.showTransfersGeneralDetails(this.my_leave_id).subscribe(
      res => {
        this.transfer_details = res.transfer;
      },
      err => {

      }
    )
  }


  rejectTransfer() {
    // console.log('hichi ndicho kilimtoa nyoka pangoni', this.comments_reject);
    
    this.comments_reject.id = this.leave_id;
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.transfers.rejectTransfer(this.comments_reject).subscribe(
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
  approveTransfer() {
    this.approve.id = this.leave_id;
      console.log('hichi ndicho kilimtoa nyoka pangoni', this.approve);
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.transfers.approveTransfer(this.approve).subscribe(
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




  updateCommentForTransfer() {
    this.comments_immidiet_supporvisor.id = this.leave_id;
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.transfers.commentTransferImmedietSuppervisor(this.comments_immidiet_supporvisor).subscribe(
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
ChangeDate(){
  this.change = true;
}
okWithDate(){
  this.change = false;
}

}
