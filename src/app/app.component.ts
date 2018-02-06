import {Component, OnInit, OnDestroy, ViewEncapsulation,} from '@angular/core';
import {TodoService} from './services/todo.service';
import {ITodos} from './models/todos';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy{
  public taskValue: string | number;
  public todos: ITodos[];
  public dateValue: any;
  public min = new Date();
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.getTodos();
  }

  ngOnDestroy() {}

  public getTodos() {
    this.todoService.getTodos()
      .subscribe(res => {
        this.todos = res;
      },
        error => {
        console.log('Something went wrong', error);
        })
  }
  public addTodo(task, date) {
    const formatedDate = moment(date).format('DD.MM.YYYY  HH:mm:ss');
    const preSend: ITodos = {
      task: task,
      date_time: formatedDate,
      done: false
    };
    this.todoService.addTodo(preSend);
    this.taskValue = '';
    this.dateValue = '';
  }

  public deleteTodo(todo: ITodos) {
    this.todoService.deleteTodo(todo)
  }
  public checkAsDone(todo: ITodos, event) {
    const preSend: ITodos = {
      task: todo.task,
      date_time: todo.date_time,
      done: event.checked
    };
    this.todoService.updateTodo(preSend);
  }

}

