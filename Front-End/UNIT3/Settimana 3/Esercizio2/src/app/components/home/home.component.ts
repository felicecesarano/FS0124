import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/service/todo.service';
import { Users } from 'src/app/models/users.interface';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  todo: Todo[] = [];
  users: Users[] = [];
  search: string = '';

  constructor(private todoSrv: TodoService, private usersSrv: UsersService) { }

  async ngOnInit(): Promise<void> {
    await this.getTodoUsers();
  }

  async getTodoUsers() {
    this.todo = await this.todoSrv.getTodo();
    this.users = await this.usersSrv.getUsers();
  } 

  getId(userId: number): Users {
    return this.users.find(user => user.id === userId)!;
  }

  onSearchChange(search: string) {
    this.search = search.toLowerCase();
  }

  filteredTodo(): Todo[] {
    return this.todo.filter(todo => 
      todo.todo.toLowerCase().includes(this.search) ||
      this.users.find(user => user.id === todo.userId)?.firstName.toLowerCase().includes(this.search)
    );
  }
}
