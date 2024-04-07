import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: any[] = [];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getAllUsers().subscribe(
      (users: any[]) => {
        this.users = users;
        console.log(users)
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
}
