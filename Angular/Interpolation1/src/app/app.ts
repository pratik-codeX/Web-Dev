import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Arithematic } from './arithematic/arithematic';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Arithematic],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Interpolation1');
}
