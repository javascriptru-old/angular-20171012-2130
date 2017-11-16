


const oldsetTimeout = setTimeout;

setTimeout = (callback, time) => {
  oldsetTimeout(() => {
    console.log('START');
    callback();
    console.log('FINISH');
  }, time);
};

//console.log('START');
//console.log('FINISH');


let user = { name: 'John' };
user.name = 'Bob';

let user2 = user.clone();
user2.name = 'Bob';

user !== user2


///---------------

setTimeout(() => {
  console.log('Do something');
}, 1000); 

setTimeout(() => {
  console.log('Do something');
}, 2000); 

setTimeout(() => {
  console.log('Do something');
}, 3000); 