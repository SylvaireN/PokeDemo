import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeShareInfoService {

  constructor() { }

  /* value: string='';

  getValue(): string {
    return this.value;
  }

  setValue(value: string) {
    this.value = value;
  } */

    public stringVar =  new Subject<string>();

    //Create an observable to watch the subject
    getObservable(): Subject<string> {
      return this.stringVar;
    }

    //How to upadate the value of the subject
    //Create a method that allows you to update the value of the subject
    public setValue(newStringVar: string) {
      this.stringVar.next(newStringVar);
    }
}
