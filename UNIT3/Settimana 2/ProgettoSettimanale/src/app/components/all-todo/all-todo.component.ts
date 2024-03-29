import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo.interface';
import { Users } from 'src/app/models/users.interface';

@Component({
  selector: 'app-all-todo',
  templateUrl: './all-todo.component.html',
  styleUrls: ['./all-todo.component.scss']
})
export class AllTodoComponent {
@Input() todo!: Todo;
@Input() users!: Users;

 toggleCompleted() {
    this.todo.completed = !this.todo.completed;
  }
}
