
import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../services/general/general.service';
import { PermissionsService } from '../../../../services/permissions/permissions.service';

@Component({
  selector: 'app-edit-desigantion-change-layout',
  templateUrl: './edit-desigantion-change-layout.component.html',
  styleUrls: ['./edit-desigantion-change-layout.component.css']
})
export class EditDesigantionChangeLayoutComponent {
  userList: any;

  constructor(
    public permission: PermissionsService,
    public general: GeneralService,
   
  ) { }

  ngOnInit(): void {
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
  }
  
 
}
