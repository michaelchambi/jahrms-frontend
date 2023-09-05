import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';


@Component({
  selector: 'app-institution-role-permission-form',
  templateUrl: './institution-role-permission-form.component.html',
  styleUrls: ['./institution-role-permission-form.component.css']
})
export class InstitutionRolePermissionFormComponent implements OnInit {
  data = {
    deactivate_reason: ''
  }
  constructor(
    public general: GeneralService,
  ) { }

  ngOnInit(): void {

  }
}
