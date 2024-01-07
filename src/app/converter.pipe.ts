import { Pipe, PipeTransform } from '@angular/core';
import { ToWords } from 'to-words';
@Pipe({
  name: 'converter'
})
export class ConverterPipe implements PipeTransform {

  transform(value:number): string {

    if(value>1000000){
      return "Out Of Order";
    }
    const toWords = new ToWords();
    let words = toWords.convert(value);
    return words;
  }

}
