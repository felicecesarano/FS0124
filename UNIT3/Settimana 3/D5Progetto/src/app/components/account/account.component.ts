import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  currentUserArray: any[] = []; // Array per memorizzare l'utente corrente
  newEmail: string = '';
  showEmailForm: boolean = false; // Variabile per gestire lo stato di visualizzazione del form

  constructor(private authSrv: AuthService) { }

  ngOnInit(): void {
    const currentUser = this.authSrv.getCurrentUser(); // Ottieni l'utente corrente
    if (currentUser) {
      this.currentUserArray = Object.values(currentUser); // Converte le proprietà dell'oggetto in un array
      console.log(this.currentUserArray);
    } else {
      console.error("L'utente corrente è nullo.");
    }
  }

}
