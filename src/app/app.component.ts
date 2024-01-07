import { Component } from '@angular/core';
import {ConverterPipe} from "./converter.pipe"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ConverterPipe]
})
export class AppComponent {
  title = 'DigitToTextConverter';
  numb!: number;
  formattedNumber!:string;

  constructor(private convert: ConverterPipe){
  }
  onConvert(){
    this.formattedNumber=this.convert.transform(this.numb);
  }

}
