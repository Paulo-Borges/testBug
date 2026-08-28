import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from './_services/todos-service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('testBug');
}
