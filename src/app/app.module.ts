import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { YellPipe } from './yell.pipe';

import { ClickDirective } from './click.directive';
import { ColorDirective } from './color.directive';

import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
    YellPipe,
    TodoComponent,
    ClickDirective,
    ColorDirective,
  ],
  imports: [BrowserModule],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
