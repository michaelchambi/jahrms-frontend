import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { GeneralService } from '../../../../../services/general/general.service';
@Component({
  selector: 'app-add-jot-submodules-layout',
  templateUrl: './add-jot-submodules-layout.component.html',
  styleUrls: ['./add-jot-submodules-layout.component.css']
})
export class AddJotSubmodulesLayoutComponent implements OnInit {

  submoduleId: any;
  constructor(
    private activeRoute: ActivatedRoute,
    public permission: PermissionsService,
    public general: GeneralService,
  ) { }

  ngOnInit(): void {
    this.submoduleId = this.activeRoute.snapshot.paramMap.get('id2');
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
    this.permission.module(this.activeRoute.snapshot.paramMap.get('id'));
  }
}
