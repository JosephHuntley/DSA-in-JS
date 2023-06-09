// O(n^2) - quadratic 
const bubbleSort = (arr) => {
    let swapped;
    do {
        swapped = false;
        for (let i = 1; i < arr.length - 1; i++){
            if (arr[i - 1] > arr[i]) {
                swapped = true
                let temp = arr[i - 1]
                arr[i - 1] = arr[i]
                arr[i] = temp
            }
            
        }
    } while (swapped)
    
    return arr;
}
// console.log(bubbleSort([-1, -3, 10, 2, 6])) //-3, -1, 2, 6, 10


// O(n^2) - Quadratic
const insertionSort = (arr) => {
    // Looping through the array
    for (let i = 1; i < arr.length; i++){
        // Setting the number to insert value in a temporary variable
        let nti = arr[i];

        // Needs  to be initialized outside of for loop since index values change.
        let j;

        // Compare the NTI to each value and replace if greater than
        for (j = i - 1; j >= 0 && arr[j] > nti; j--) {
            // as long as arr[j] is bigger than current
            // move arr[j] to the right at arr[j + 1]
            arr[j + 1] = arr[j];
        }
        // If the NTI is no longer greater than then position next to it, place NTI in that position 
        arr[j + 1] = nti;
    }
    return arr;
}

// console.log(insertionSort([-1, -3, 10, 2, 6])) //-3, -1, 2, 6, 10)

// Worst case O(n^2)
// Average is O(n log n)
const quickSort = (arr) => {
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length-1];
    let left = []
    let right = []

    for (let i = 0; i < arr.length - 1; i++){
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]

}


// console.log(quickSort([-1, -3, 10, 2, 6])) //-3, -1, 2, 6, 10)
// console.log(quickSort([-8, 2, -10, 5, 16])) // -10, -8, 2, 5, 16

// O(nlogn)
const mergeSort = (arr) => {

    if (arr.length < 2) {
        return arr
    }

    let middleIndex = Math.floor(arr.length / 2);
    let leftArray = arr.slice(0, middleIndex);
    let rightArray = arr.slice(middleIndex)



    return merge(mergeSort(leftArray), mergeSort(rightArray))
}

const merge = (leftArray, rightArray) => {
    let sortedArr = []
    while (leftArray.length > 0 && rightArray.length > 0) {
        if (leftArray[0] <= rightArray[0]) {
           sortedArr.push(leftArray.shift())
        } else {
            sortedArr.push(rightArray.shift())
       }
    }

    return [...sortedArr, ...leftArray, ...rightArray]
        
}

console.log(mergeSort([-1, -3, 10, 2, 6])) //-3, -1, 2, 6, 10)
console.log(mergeSort([-8, 2, -10, 5, 16])) // -10, -8, 2, 5, 16
