import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-manage-profiles',
  templateUrl: './manage-profiles.component.html',
  styleUrls: ['./manage-profiles.component.scss']
})
export class ManageProfilesComponent implements OnInit {
  currentUserArray: any[] = [];
  newUserName: string = '';

  constructor(private authSrv: AuthService) { }

  ngOnInit(): void {
    const currentUser = this.authSrv.getCurrentUser();
    if (currentUser) {
      this.currentUserArray = Object.values(currentUser);
    }
  }

}
