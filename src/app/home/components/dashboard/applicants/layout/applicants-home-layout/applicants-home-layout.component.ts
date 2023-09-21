import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../../../../services/general/general.service';

@Component({
  selector: 'app-applicants-home-layout',
  templateUrl: './applicants-home-layout.component.html',
  styleUrls: ['./applicants-home-layout.component.css']
})
export class ApplicantsHomeLayoutComponent implements OnInit {

  roleLabel: any;
  constructor(
    public general: GeneralService,
  ) { }

  ngOnInit(): void {
    this.roleLabel = sessionStorage.getItem("myrole")
    // this.staff_role=sessionStorage.getItem('staff_role')
  }


}
