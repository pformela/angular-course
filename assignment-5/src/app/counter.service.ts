import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  numberOfOperations = 0;

  constructor() {}

  increment() {
    this.numberOfOperations++;
  }
}
