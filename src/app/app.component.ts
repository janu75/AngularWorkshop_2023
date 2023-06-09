import { Component, ElementRef, Injector } from '@angular/core';

import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo';
  public value = 'Hallo';
  public color = 'hotpink';
  public number = 3.14159;
  public todoObject = { name: 'Wash clothes', done: false, id: 3 };

  public show: boolean = true;
  public todos: Todo[];

  constructor(
    private readonly elementRef: ElementRef,
    private readonly todoService: TodoService
  ) {
    console.log('elementRef from constructor', elementRef);

    console.log(todoService.getAll());
    this.todos = todoService.getAll();
  }

  public onClick(event: MouseEvent): void {
    alert(`Hello! ${event.clientX} ${event.clientY}`);
  }

  public onMouseMove(event: MouseEvent): void {
    console.log('mouse', event.clientX, event.clientY);
  }

  catchDoneEvent(todo: any) {
    console.log(todo);
  }

  public toggle() {
    this.show = !this.show;
  }
}
