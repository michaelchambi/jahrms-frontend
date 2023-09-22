
import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';

@Component({
  selector: 'app-edit-employee-leave-layout',
  templateUrl: './edit-employee-leave-layout.component.html',
  styleUrls: ['./edit-employee-leave-layout.component.css']
})
export class EditEmployeeLeaveLayoutComponent {
  userList: any;

  constructor(
    public permission: PermissionsService,
    public general: GeneralService,
   
  ) { }

  ngOnInit(): void {
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
  }
  
 
}
