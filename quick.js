//console.log('sanity check quick');

function quickSort(numbers){
  if (numbers.length < 2){
    return numbers;
  }

  var pivot = numbers[0];
  var left = [];
  var right = [];

  for (var i = 1; i < numbers.length; i++){
    if (numbers[i] < pivot){
      left.push(numbers[i]);
    } else {
      right.push(numbers[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}
console.log('this is the final answer of quick =', quickSort(numbers));