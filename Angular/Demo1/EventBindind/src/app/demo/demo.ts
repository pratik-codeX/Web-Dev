import { Component } from '@angular/core';
import { Console } from 'console';
import { ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-demo',
  imports: [],
  templateUrl: './demo.html',
  styleUrl: './demo.css',
})

export class Demo 
{
    display():void
    {
      console.log("Jay Ganesh...");
    }
}
