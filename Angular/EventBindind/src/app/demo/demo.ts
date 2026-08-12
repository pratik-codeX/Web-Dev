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
  fun():number
  {
    var No1 = 10;
    var No2 = 20;

    return No1+No2;
  }

  public name : string = " "

  public MarvellousEvent()
  {
    console.log("Marvellous Button Clicked");
  }

   public InfosystemsEvent()
    {
      this.name = "Infosystems button gets clicked";
    }

    public AngularEvent(Value:any)
    {
      console.log(Value);
    }
}
