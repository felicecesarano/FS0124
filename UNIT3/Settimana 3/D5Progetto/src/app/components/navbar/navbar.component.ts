import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isAdmin: boolean = false; 
  currentUser: string | null = null;

  constructor(private authSrv: AuthService) {
    const user = this.authSrv.getCurrentUser();
    this.currentUser = user?.user?.name ?? null; 
    this.isAdmin = user?.user?.isAdmin ?? false; 
  }

  logout() {
    this.authSrv.logout();
  }
}
