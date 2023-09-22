
import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';


@Component({
  selector: 'app-view-out-post-layout',
  templateUrl: './view-out-post-layout.component.html',
  styleUrls: ['./view-out-post-layout.component.css']
})
export class ViewOutPostLayoutComponent {
  userList: any;

  constructor(
    public permission: PermissionsService,
    public general: GeneralService,
   
  ) { }

  ngOnInit(): void {
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
  }
  
 
}
