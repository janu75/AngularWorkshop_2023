import { Input, Output, Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: any;

  @Output() done = new EventEmitter<any>();

  public markTodoAsDone(event: any): void {
    this.done.emit(this.todo);
  }

  colorToBind = "blue";
constructor() { }

  ngOnInit() {
  }

}