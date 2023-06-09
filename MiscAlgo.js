// O(nm) - if the arrays were equal size it would be O(n^n)
const cartesianProduct = (arrOne, arrTwo) => {
    let arr = []
    for (let i = 0; i < arrOne.length; i++){
        for (let j = 0; j < arrTwo.length; j++){
            arr.push([arrOne[i], arrTwo[j]])
        }
    }
    return arr
}

// [1,2] [3,4] - [[1,3], [1,4], [2,3], [2,4]]
// console.log(cartesianProduct([1,2], [3,4]))

// O(2^n)
const climbingStaircaseRecursive = (n) => {
    if (n < 2) {
        return 1;
    }

    return climbingStaircase(n - 1) + climbingStaircase(n - 2);
}

// console.log(climbingStaircaseRecursive(5))

// O(n)
const climbingStaircase = (n) => {
    let noOfWays = [1, 2]
    
    for (let i = 2; i < n; i++){
        noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2]
    }

    return noOfWays[n - 1]
}

// console.log(climbingStaircase(5))
// O(2^n)
const towerOfHanoi = (n, fromRod, toRod, usingRod) => {
    if (n === 1) {
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
        return
    }

    towerOfHanoi(n - 1, fromRod, usingRod, toRod);
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
    towerOfHanoi(n - 1, usingRod, toRod, fromRod)
}

towerOfHanoi(3, 'a', 'c', 'b')