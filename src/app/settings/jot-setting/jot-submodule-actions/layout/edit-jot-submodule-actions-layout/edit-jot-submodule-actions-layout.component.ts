import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'

@Component({
  selector: 'app-edit-jot-submodule-actions-layout',
  templateUrl: './edit-jot-submodule-actions-layout.component.html',
  styleUrls: ['./edit-jot-submodule-actions-layout.component.css']
})
export class EditJotSubmoduleActionsLayoutComponent implements OnInit {

  data = {
    uid: ''
  }

  submoduleId: any;
  constructor(
    public general: GeneralService,
    public permission: PermissionsService,
    public script: ScriptConfigService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id2');
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this.permission.action(this.activeRoute.snapshot.paramMap.get('id'));
  }

}
