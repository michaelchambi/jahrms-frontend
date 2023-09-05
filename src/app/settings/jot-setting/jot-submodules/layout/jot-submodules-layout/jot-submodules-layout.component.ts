import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'

@Component({
  selector: 'app-jot-submodules-layout',
  templateUrl: './jot-submodules-layout.component.html',
  styleUrls: ['./jot-submodules-layout.component.css']
})
export class JotSubmodulesLayoutComponent implements OnInit {

  data = {
    uid: ''
  }
  submoduleId: any;
  module: any;
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
    this.permission.module(this.activeRoute.snapshot.paramMap.get('id'));
  }


}
