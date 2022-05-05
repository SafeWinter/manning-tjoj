// Listing 9.12 Subclass of Array that fires events when a new elements is pushed

import { log, splitline } from '../util.js';
import EventEmitter from 'events';

class PushArray extends Array {
  static EVENT_NAME = 'new_value';

  #eventEmitter = new EventEmitter();

  constructor(...values) {
    super(...values);
  }

  push(value) {
    this.#eventEmitter.emit(PushArray.EVENT_NAME, value);
    return super.push(value);
  }

  subscribe({ next }) {
    this.#eventEmitter.on(PushArray.EVENT_NAME, value => {
      next(value);
    });
  }

  unsubscribe() {
    this.#eventEmitter.removeAllListeners(PushArray.EVENT_NAME);
  }
}

const pushArray = new PushArray(1, 2, 3);

pushArray.subscribe({
  next(value) {
    log('New value:', value);
  },
});

pushArray.push(4);
pushArray.push(5);

splitline();

pushArray.unsubscribe();
pushArray.push(6);
log(pushArray);
