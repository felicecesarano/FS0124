import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isAdmin: boolean = false; // Variabile per memorizzare se l'utente loggato è un amministratore
  currentUser: string | null = null; // Variabile per memorizzare il nome dell'utente loggato

  constructor(private authSrv: AuthService) {
    const user = this.authSrv.getCurrentUser();
    this.currentUser = user?.user?.name ?? null; // Ottieni il nome dell'utente dal servizio di autenticazione
    this.isAdmin = user?.user?.isAdmin ?? false; // Controlla se l'utente è un amministratore
  }

  logout() {
    this.authSrv.logout();
  }
}
