import { Injectable } from '@angular/core';

import { Todo } from './todo';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  constructor() { 
    this.todos.push({ name: "Wash clothes", done: false, id: 3 });
    this.todos.push({ name: "Do stuff", done: false, id: 2 });
    this.todos.push({ name: "Go play", done: false, id: 1 });
  }


  public create(todo: Todo): Todo {
    this.todos.push(todo);
    return todo;
  }

  public get(todoId: number): Todo {
    return this.todos.find(d => d.id === todoId);
  }

  public getAll(): Todo[] {
    return this.todos;
  }

  public update(todo: Todo): void {
    this.todos = [...this.todos.filter(d => d.id !== todo.id), todo];
  }

  public delete(todoId: number): void {
    this.todos = this.todos.filter(d => d.id !== todoId);
  }

}