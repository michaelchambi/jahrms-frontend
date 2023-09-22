
import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';


@Component({
  selector: 'app-edit-main-post-layout',
  templateUrl: './edit-main-post-layout.component.html',
  styleUrls: ['./edit-main-post-layout.component.css']
})
export class EditMainPostLayoutComponent {
  userList: any;

  constructor(
    public permission: PermissionsService,
    public general: GeneralService,
   
  ) { }

  ngOnInit(): void {
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
  }
  
 
}
