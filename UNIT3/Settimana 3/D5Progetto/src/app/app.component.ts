import { Component, OnInit } from '@angular/core';
import { AuthData } from './models/auth-data.interface';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'D5Progetto';

constructor(private authSrv: AuthService){}

  ngOnInit(): void {
      this.authSrv.restore();
  }
}
