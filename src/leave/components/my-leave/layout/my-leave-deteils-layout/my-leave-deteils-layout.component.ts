import {  Component,  OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general/general.service';
import { PermissionsService } from 'src/app/services/permissions/permissions.service';
import { ScriptConfigService } from 'src/app/services/script-config/script-config.service';

@Component({
  selector: 'app-my-leave-deteils-layout',
  templateUrl: './my-leave-deteils-layout.component.html',
  styleUrls: ['./my-leave-deteils-layout.component.css']
})
export class MyLeaveDeteilsLayoutComponent {

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
