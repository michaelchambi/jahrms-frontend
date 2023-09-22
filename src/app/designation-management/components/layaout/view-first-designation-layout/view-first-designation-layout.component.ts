
import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../services/general/general.service';
import { PermissionsService } from '../../../../services/permissions/permissions.service';

@Component({
  selector: 'app-view-first-designation-layout',
  templateUrl: './view-first-designation-layout.component.html',
  styleUrls: ['./view-first-designation-layout.component.css']
})
export class ViewFirstDesignationLayoutComponent {
  userList: any;

  constructor(
    public permission: PermissionsService,
    public general: GeneralService,
   
  ) { }

  ngOnInit(): void {
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
  }
  
 
}
