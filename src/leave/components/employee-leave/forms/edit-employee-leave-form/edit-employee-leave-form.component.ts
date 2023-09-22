

import {  Component,  OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general/general.service';
import { LeaveService } from 'src/app/services/leave/leave.service';
import { PermissionsService } from 'src/app/services/permissions/permissions.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({

  selector: 'app-edit-employee-leave-form',
  templateUrl: './edit-employee-leave-form.component.html',
  styleUrls: ['./edit-employee-leave-form.component.css']
})
export class EditEmployeeLeaveFormComponent implements OnInit {
  total_no_of_days: any;
  first_date: any;
  end_date: any;
  date_diff: any;
  result: any;


  my_id: any;
  leave_id: any;
  leave_details: any;
  change: boolean = false;
  AmOk: boolean = false;
  my_leave_id = { id: '' }
  employee_leave_id = { id: '' }

  get_leave_data = {
    uid: ''
  }
  comments_immidiet_supporvisor = {
    immediet_suppervisor_comment: '',
    uid: '',
  }

  comments_reject = {
    uid: '',
    approver_comment: '',
  }
  approve = {
    uid: '',
    start_date: '',
    end_date: '',
    approver_comment: '',
    display_option: ''
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
    this.okWithDate();
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this.my_id = this.general.decryptionId(sessionStorage.getItem('id') as any);
    this.leave_id = this.activeRoute.snapshot.paramMap.get('id2');
    console.log('hiii ndio id ya leave yangu wangu mimi', this.leave_id);
    this.showLeavesGeneralDetails();
   // this.numberOfDays();
  }


  showLeavesGeneralDetails() {
    this.get_leave_data.uid = this.leave_id
    this.Leave.showLeavesGeneralDetails(this.get_leave_data).subscribe(
      res => {
        this.leave_details = res.leave;
     
      },
      err => {

      }
    )
  }

  rejectLeave() {
    // console.log('hichi ndicho kilimtoa nyoka pangoni', this.comments_reject);

    this.comments_reject.uid = this.leave_id;
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
  approveLeave() {
    this.approve.uid = this.leave_id;
    console.log('hichi ndicho kilimtoa nyoka pangoni', this.approve);
    this.general.bfrcreating = false;
    this.general.creating = true;
    this.Leave.approveLeave(this.approve).subscribe(
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
    this.comments_immidiet_supporvisor.uid = this.leave_id;
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
  ChangeDate() {
    this.change = true;
  }
  okWithDate() {
    this.change = false;
  }



  numberOfDays(start_date:any,end_dates:any) {

    this.first_date =Math.abs(start_date.getTime()) 
    this.end_date = end_dates;
    this.date_diff = Math.abs(this.first_date.getTime() - this.end_date.getTime());
    this.total_no_of_days = Math.ceil(this.date_diff / ((1000 * 3600 * 24)))
   
    //  this.result=this.total_no_of_days
  }

}
