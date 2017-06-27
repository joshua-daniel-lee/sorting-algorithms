//console.log('sanity check isertion');

function insertionSort(numbers){
  for (var i = 0; i < numbers.length; i++){
    var temp = numbers[i];
    var j = i - 1;
    while (j >= 0 && numbers[j] > temp){
      numbers[j + 1] = numbers[j];
      j --;
    }
    numbers[j + 1] = temp;
  }
  return numbers;
}
console.log('this is the final answer of insertion =', insertionSort(numbers));