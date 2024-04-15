import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users.interface';
import { UsersService } from 'src/app/service/users.service';
import { Todo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  todo: { userId: number, todo: Todo[] }[] = [];
  users: Users[] = [];

  constructor(private todoSrv: TodoService, private usersSrv: UsersService) { }

  async ngOnInit(): Promise<void> {
    await this.getTodoUsers();
  }

  async getTodoUsers() {
    const todos = await this.todoSrv.getTodo();
    this.users = await this.usersSrv.getUsers();

    todos.forEach(todo => {
      const userIndex = this.todo.findIndex(entry => entry.userId === todo.userId);
      if (userIndex === -1) {
        this.todo.push({ userId: todo.userId, todo: [todo] });
      } else {
        this.todo[userIndex].todo.push(todo);
      }
    });
  } 

  getUser(userId: number): Users {
    return this.users.find(user => user.id === userId)!;
  }

  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed; 
  }
  
}
