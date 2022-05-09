// Listing 9.32 Adding Symbol.observable to Pair
import { log as lg } from '../util.js';
import './rx.js';

const Pair = (left, right) => ({
  left,
  right,
  [Symbol.observable]() {
    return new Observable(observer => {
      observer.next(left);
      observer.next(right);
      observer.complete();
    });
  },
});

Observable.from(Pair(20, 30)).subscribe({
  next: value => lg('Pair element:', value),
  complete: () => lg('Pair print completed.'),
});
