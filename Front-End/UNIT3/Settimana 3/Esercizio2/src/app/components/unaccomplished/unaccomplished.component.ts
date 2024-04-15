import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/service/todo.service';
import { Users } from 'src/app/models/users.interface';
import { UsersService } from 'src/app/service/users.service';


@Component({
  selector: 'app-unaccomplished',
  templateUrl: './unaccomplished.component.html',
  styleUrls: ['./unaccomplished.component.scss']
})
export class UnaccomplishedComponent implements OnInit{
  todo: Todo[] = [];
  users: Users[] = [];

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

  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
  }
    
  }
