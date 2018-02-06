import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {ITodos} from '../models/todos';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class TodoService {

  public todos$: BehaviorSubject<ITodos[]>;
  private todosFromStorage: ITodos[] = [];

  constructor() {
    this.initIfNoStorage();
    this.initTodo();
  }

  private initIfNoStorage () {
    if (!localStorage.getItem('todos')) {
     localStorage.setItem('todos', '[]');
    } else {
      console.log('storage is defined');
    }
  }
  private initTodo() {
    this.todosFromStorage = JSON.parse(localStorage.getItem('todos'));
    this.todos$ = new BehaviorSubject<ITodos[]>(this.todosFromStorage);
    this.todos$.next(this.todosFromStorage);
  }

  public getTodos(): Observable<ITodos[]> {
    return this.todos$.asObservable();
  }
  public addTodo(event) {
    this.todosFromStorage.push(event);
    localStorage.setItem('todos', JSON.stringify(this.todosFromStorage));
    this.todos$.next(this.todosFromStorage);
  }
  public deleteTodo(event) {
    this.todosFromStorage.forEach((el, index) => {
      if(event.text == el.text) {
        this.todosFromStorage.splice(index, 1);
      }
    });
    localStorage.setItem('todos', JSON.stringify(this.todosFromStorage));
    this.todos$.next(this.todosFromStorage);

  }
}
