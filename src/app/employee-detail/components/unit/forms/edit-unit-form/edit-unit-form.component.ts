
import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-unit-form',
  templateUrl: './edit-unit-form.component.html',
  styleUrls: ['./edit-unit-form.component.css']
})
export class EditUnitFormComponent {

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
