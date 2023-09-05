
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../../services/users/users.service';
import { GeneralService } from '../../../../../services/general/general.service';
@Component({

    selector: 'app-edit-employee-leave-form',
    templateUrl: './edit-employee-leave-form.component.html',
    styleUrls: ['./edit-employee-leave-form.component.css']
  })
export class EditEmployeeLeaveFormComponent implements OnInit {

  constructor(
    public general: GeneralService,
    public users: UsersService
  ) { }

  ngOnInit(): void {
    this.users.userProfile(this.general.decryptionId(sessionStorage.getItem('id') as any))
  }
}
