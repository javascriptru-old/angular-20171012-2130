import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/fromPromise';
import { Observer } from 'rxjs/Observer';



const myInput = document.getElementById('myInput');


/*
function createEventPromise() {
  let listener: (event:KeyboardEvent) => void;
  let p = new Promise((resolve) => {
      listener = (event) => {
          resolve(event);
      }
      myInput.addEventListener('input', listener);
  });
  return p.then((event: KeyboardEvent) =>  {
      console.log((event.target as HTMLInputElement).value);
      fetch(`api.github.com/search/repositories?q=${(event.target as HTMLInputElement).value}`).then(response => response.json()).then((repos) => {
        console.log(repos);
      });

      myInput.removeEventListener('input', listener);
      createEventPromise();
  });
}
createEventPromise();
*/

const o = Observable.fromEvent(myInput, 'input');
const o2 = o.switchMap(value => {
  return Observable.fromPromise(fetch(`api.github.com/search/repositories?q=${(event.target as HTMLInputElement).value}`));
}).catch(error => {
  return '';
}) ;

o2.subscribe(repos => console.log(repos));
o2.subscribe(repos => console.log(repos));
o2.subscribe(repos => console.log(repos));
o2.subscribe(repos => console.log(repos));
o2.subscribe(repos => console.log(repos));
o2.subscribe(repos => console.log(repos));


Observable.create(function(observer: Observer<string>) {
  observer.next('hello!');
  observer.next('hello!');
  observer.next('hello!');
  observer.next('hello!');
  setInterval(_ => {
    observer.next('hello!');
  }, 1000);

  setTimeout(_ => {
    observer.complete();
  }, 15000);
});

Observable.of('Hello!');  // Promise.resolve('Hello!')

Observable.from([1, 2, 3, 4, 5, 6]);
