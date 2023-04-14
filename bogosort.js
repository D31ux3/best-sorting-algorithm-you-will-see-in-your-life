
const myArray = [3, 2, 1,4,5,6,7,8,9,10,11]; //array you want to sort
let attempts = 0;
console.time();
console.log(bogosort(myArray));
console.log(`Attempts: ${attempts}`);
console.timeEnd();


function bogosort(array) {
  while (!isSorted(array)) {
    attempts++;
    shuffle(array);
  }
  return array;
}

function isSorted(array) {
  for (var i = 1; i < array.length; i++) {
    if (array[i - 1] > array[i]) {
      return false;
    }
  }
  return true;
}

function shuffle(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

