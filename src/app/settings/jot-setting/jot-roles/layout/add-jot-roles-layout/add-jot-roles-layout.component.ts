import { Component, OnInit } from '@angular/core';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { GeneralService } from '../../../../../services/general/general.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-jot-roles-layout',
  templateUrl: './add-jot-roles-layout.component.html',
  styleUrls: ['./add-jot-roles-layout.component.css']
})
export class AddJotRolesLayoutComponent implements OnInit {

  submoduleId: any;
  constructor(
    public permission: PermissionsService,
    private activeRoute: ActivatedRoute,
    public general: GeneralService,
  ) { }

  ngOnInit(): void {
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id');
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
  }

}
