
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../../services/users/users.service';
import { GeneralService } from '../../../../../services/general/general.service';
import { LeaveService } from '../../../../../services/leave/leave.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
@Component({
  selector: 'app-view-my-leave-deteils',
  templateUrl: './view-my-leave-deteils.component.html',
  styleUrls: ['./view-my-leave-deteils.component.css']
})
export class ViewMyLeaveDeteilsComponent implements OnInit {
  my_id: any;
  leave_id: any;
  leave_details: any;
  my_leave_id = { uid: '' }
  employee_leave_id = { id: '' }


  comments_immidiet_supporvisor = {
    immediet_suppervisor_comment: '',
    id: '',
  }

  comments_reject = {
    id: '',
    approver_comment: '',
  }

  constructor(
    public general: GeneralService,
    public users: UsersService,
    public Leave: LeaveService,
    public permission: PermissionsService,
    public activeRoute: ActivatedRoute,
    public route: Router
  ) { }

  ngOnInit(): void {
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this.my_id = this.general.decryptionId(sessionStorage.getItem('id') as any);
    this.leave_id = this.activeRoute.snapshot.paramMap.get('id');
    console.log('hiii ndio id ya leave yangu wangu mimi', this.leave_id);
    this.showLeavesGeneralDetails();
  }

  showLeavesGeneralDetails() {
    this.my_leave_id.uid = this.leave_id
    this.Leave.showLeavesGeneralDetails(this.my_leave_id).subscribe(
      res => {
        this.leave_details = res.leave;
      },
      err => {

      }
    )
  }


  rejectLeave() {
    // console.log('hichi ndicho kilimtoa nyoka pangoni', this.comments_reject);
    
    this.comments_reject.id = this.leave_id;
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.Leave.rejectLeave(this.comments_reject).subscribe(
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
  approveLeave(id: any) {
    this.comments_reject.id = id;
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.Leave.approveLeave(id).subscribe(
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




  updateCommentForLeave() {
    this.comments_immidiet_supporvisor.id = this.leave_id;
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.Leave.commentLeaveImmedietSuppervisor(this.comments_immidiet_supporvisor).subscribe(
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
