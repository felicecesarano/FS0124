import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  currentUserArray: any[] = [];
  newEmail: string = '';
  showEmailForm: boolean = false;

  constructor(private authSrv: AuthService) { }

  ngOnInit(): void {
    const currentUser = this.authSrv.getCurrentUser(); 
    if (currentUser) {
      this.currentUserArray = Object.values(currentUser);
      console.log(this.currentUserArray);
    } else {
      console.error("L'utente corrente è nullo.");
    }
  }

}
