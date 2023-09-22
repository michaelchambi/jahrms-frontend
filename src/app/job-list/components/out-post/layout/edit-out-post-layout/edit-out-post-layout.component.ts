import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';


@Component({
  selector: 'app-edit-out-post-layout',
  templateUrl: './edit-out-post-layout.component.html',
  styleUrls: ['./edit-out-post-layout.component.css']
})
export class EditOutPostLayoutComponent {
  userList: any;

  constructor(
    public permission: PermissionsService,
    public general: GeneralService,
   
  ) { }

  ngOnInit(): void {
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
  }
  
 
}
