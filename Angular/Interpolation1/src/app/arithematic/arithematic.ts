import { Component } from '@angular/core';

@Component({
  selector: 'app-arithematic',
  imports: [],
  templateUrl: './arithematic.html',
  styleUrl: './arithematic.css',
})
export class Arithematic 
{
  name : String = "Pratik";

  no1 : number = 10;
  no2 : number = 20;

  public addition(no1 : number,no2 : number):number
  {
    return no1+no2;
  }

}
