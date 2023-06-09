// O(n) - Linear
const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}

// console.log(linearSearch([-5, 2, 10, 4, 6], 10)) // 2
// console.log(linearSearch([-5, 2, 10, 4, 6], 6)) // 4
// console.log(linearSearch([-5, 2, 10, 4, 6], 0)) // -1

// O(logn)
const binarySearch = (arr, target) => {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

        if (target === arr[middleIndex]) {
            return middleIndex;
        }
        if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }

   
    return -1;
}


// console.log(binarySearch([-5,2,4,6,10], 4)) // 4
// console.log(binarySearch([-5,2,4,6,10], 6)) // 3
// console.log(binarySearch([-5,2,4,6,10], 20)) // -1

// O(logn) 
const recursiveBinarySearch = (arr, target) => {
  return search(arr, target, 0, arr.length - 1)
}

const search = (arr, target, leftIndex, rightIndex) => {
    if (leftIndex > rightIndex) {
        return -1;
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

    if (target == arr[middleIndex]) {
        return middleIndex
    }

    if (target < arr[middleIndex]) {
        return search(arr, target, leftIndex, middleIndex - 1)
    } else {
       return search(arr, target, middleIndex + 1, rightIndex)
    }

   
}

console.log(recursiveBinarySearch([-5,2,4,6,10], 4)) // 2
console.log(recursiveBinarySearch([-5,2,4,6,10], 6)) // 3
console.log(recursiveBinarySearch([-5,2,4,6,10], 20)) // -1