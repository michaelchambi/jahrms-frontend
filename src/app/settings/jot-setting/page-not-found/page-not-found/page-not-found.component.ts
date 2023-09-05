import { Component } from '@angular/core';
import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {

  constructor(
    public auth: AuthService,
  ) { }

  ngOnInit(): void {

  }


}
