import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Marvellous } from './marvellous/marvellous';
import { Infosystems } from './infosystems/infosystems';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Marvellous,Infosystems],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Component1');
}