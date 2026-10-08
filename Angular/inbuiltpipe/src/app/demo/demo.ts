import { Component} from '@angular/core';
import { CommonModule,UpperCasePipe } from '@angular/common';
import { spec } from 'node:test/reporters';

@Component({
  selector: 'app-demo',
  imports: [CommonModule],
  templateUrl: './demo.html',
  styleUrl: './demo.css',
})
export class Demo {

  name : string = "Marvellous Infosystems Pune";

}