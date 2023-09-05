import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../services/general/general.service';

@Component({
  selector: 'app-institution-role-view',
  templateUrl: './institution-role-view.component.html',
  styleUrls: ['./institution-role-view.component.css']
})
export class InstitutionRoleViewComponent implements OnInit {



  data = {
    deactivate_reason: ''
  }
  constructor(
    public general: GeneralService,
  ) { }

  ngOnInit(): void {

  }

  deactivateRole() {

  }

}
