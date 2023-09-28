import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';
import { PermissionsService } from '../../../../../services/permissions/permissions.service';
import { ActivatedRoute } from '@angular/router';
import { SpecializationService } from '../../../../../services/specialization/specialization.service';

@Component({
  selector: 'app-academic-specialization-layout',
  templateUrl: './academic-specialization-layout.component.html',
  styleUrls: ['./academic-specialization-layout.component.css']
})
export class AcademicSpecializationLayoutComponent {


  submoduleId: any;
  constructor(
    private activeRoute: ActivatedRoute,
    public permission: PermissionsService,
    public general: GeneralService,
  ) { }

  ngOnInit(): void {
    this.permission.action_permissions(this.general.decryptionId(sessionStorage.getItem('id') as any));
  }
}
