import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../../services/permissions/permissions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-jot-users-layout',
  templateUrl: './edit-jot-users-layout.component.html',
  styleUrls: ['./edit-jot-users-layout.component.css']
})
export class EditJotUsersLayoutComponent implements OnInit {

  uid: any;
  submoduleId: any;
  constructor(
    private activeRoute: ActivatedRoute,
    public permission: PermissionsService,
    public general: GeneralService,
  ) { }

  ngOnInit(): void {
    this.uid = this.activeRoute.snapshot.paramMap.get('id')
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id2')
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
  }

}