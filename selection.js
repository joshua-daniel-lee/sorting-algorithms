//console.log('sanity check selection');


function swap(numbers, i, j){
  var temp = numbers[i];
  numbers[i] = numbers[j];
  numbers[j] = numbers[i];
}

function selectionSort(numbers){
  for (var i = 0; i < numbers.length; i++){
    var min = i;
    //console.log('this is min =', min);
    for (var j = i; j < numbers.length; j++){
      if(numbers[j] < numbers[min]){
        min = j;
      }
    }
    if (i !== min){
      swap(numbers, i, min);
    }
  }
  return numbers;
}
console.log('this is the final answer of selection =', selectionSort(numbers));