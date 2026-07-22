import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  imports: [],
  templateUrl: './demo.html',
  styleUrl: './demo.css',
})
export class Demo 
{
    public Technology = "Angular";

    public Display():string
    {
        var i : string = "Marvellous Infosystems";
        return i
    }
}
