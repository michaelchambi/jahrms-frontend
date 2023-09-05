import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ScriptConfigService } from '../../../../../services/script-config/script-config.service'

@Component({
  selector: 'app-unit-layout',
  templateUrl: './unit-layout.component.html',
  styleUrls: ['./unit-layout.component.css']
})
export class UnitLayoutComponent {

  
  submoduleId: any;
  constructor(
    public general: GeneralService,
    public permission: PermissionsService,
    public script: ScriptConfigService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id');
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
  }

}
