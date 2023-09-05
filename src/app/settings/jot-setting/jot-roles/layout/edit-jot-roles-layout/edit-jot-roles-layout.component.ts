import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-jot-roles-layout',
  templateUrl: './edit-jot-roles-layout.component.html',
  styleUrls: ['./edit-jot-roles-layout.component.css']
})
export class EditJotRolesLayoutComponent implements OnInit {

  submoduleId: any;
  constructor(
    public permission: PermissionsService,
    public general: GeneralService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id2');
  }
}
