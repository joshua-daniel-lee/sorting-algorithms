# sorting-algorithms
Implementing Sorting Algorithms
---

Quick sort
---
1. *Quicksort is a divide and conquer algorithm. Quicksort first divides a large array into two smaller sub-arrays: the low elements and the high elements. Quicksort can then recursively sort the sub-arrays.* From Wikipedia

2. **Complexity**

* Best - O(n log(n))

* Average - O(n log(n))

* Worst - O(n^2)

3. `this is code`

Bubble sort
---
1. *Bubble sort is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.* From Wikipedia

2. **Complexity**

* Best - O(n)

* Average - O(n^2)

* Worst - O(n^2)

3. `this is code`

Merge sort
---
1. *Merge sort is a divide and conquer algorithm. Conceptually, a Merge sort works as follows: 1) Divide the unsorted list into n sublists, each containing 1 element (a list of 1 element is considered sorted), 2) Repeatedly merge sublists to produce new sorted sublists until there is only 1 sublist remaining. This will be the sorted list.* From Wikipedia

2. **Complexity**

* Best - O(n log(n))

* Average - O(n log(n))

* Worst - O(n log(n))

3. `this is code`

Insertion sort
---
1. *Insertion sort algorithm iterates, consuming one input element each repetition, and growing a sorted output list. Each iteration removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain.* From Wikipedia

2. **Complexity**

* Best - O(n)

* Average - O(n^2)

* Worst - O(n^2)

3. Psedo Code:
```for i = 1 to n - 1
      element = array[i]
      j = i
      while (j > 0 and array[j -1]] > element)
        array[j] = array[j - 1]
        j = j - 1
      array[j] = element
```


Selection sort
---
1. *The Selection sort algorithm divides the input list into two parts: the sublist of items already sorted and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest element in the unsorted sublist, exchanging it with the leftmost unsorted element, and moving the sublist boundaries one element to the right.* From Wikipedia

2. **Complexity**

* Best - O(n^2)

* Average - O(n^2)

* Worst - O(n^2)

3. `this is code`