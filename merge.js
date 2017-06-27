// //console.log('sanity check merge');

function mergeSortTopDown(numbers) {
  if(numbers.length < 2) {
    return numbers;
  }

  var middle = Math.floor(numbers.length / 2);
  //console.log('this is middle', middle);

  var left = numbers.slice(0, middle);
  //console.log('this is left', left);

  var right = numbers.slice(middle);
  //console.log('this is right', right);

  //console.log('this is left and right', mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right)));
  return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right));
}


function mergeTopDown(left, right) {
  var numbers = [];

  while(left.length && right.length) {
    if(left[0] < right[0]) {
      numbers.push(left.shift());
    } else {
      numbers.push(right.shift());
    }
  }
  return numbers.concat(left.slice()).concat(right.slice());
}

console.log('this is the final answer of merge', mergeSortTopDown(numbers.slice()));
