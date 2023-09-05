import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private route: Router
  ) { }

  canActivate(): any {
    if (this.auth.loggedIn()) {
      return true;
    }
    else {
      sessionStorage.removeItem('token');
      this.route.navigate(['/login']);
      return false;
    }
  }

}
