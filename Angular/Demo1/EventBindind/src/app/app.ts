import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Demo } from './demo/demo';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Demo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public Name : string= "App Component";
  protected readonly title = signal('EventBindind');
}
