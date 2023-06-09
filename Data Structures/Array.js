const arr = [1, 2, 3, 'Joseph'];

// console.log(arr[0]); // 1

arr[0] // O(n)
// Searching is O(n) since it could be the last element

// Adds to the end O(1)
arr.push('Huntley')

// Iterate through array
for (const item of arr) {
    // console.log(item)
}

// Adds value to beginning of array O(n)
arr.unshift(0);

// Remove item from end O(1)
let result = arr.pop(); 

// Remove item from beginning O(n)
result = arr.shift();

// Map, filter, reduce, concat, slice, splice