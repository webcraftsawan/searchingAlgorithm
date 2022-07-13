/**
 * Add input value in sorted array using binary search
 */
let inputArr1 = [10, 20, 30, 50, 60, 80, 110, 130, 140, 170]

let keyV1 = 60

function binarySearch(arr, x, low, high) {

    var mid = parseInt((low + high) / 2)

    if (x == arr[mid])
        return mid

    if (x > arr[mid]) {

        return binarySearch(arr, x, mid + 1, high)

    } else if (x < arr[mid]) {

        return binarySearch(arr, x, low, mid - 1)

    } else {

        return -1

    }

}

let searchKey1 = binarySearch(inputArr1, keyV1, 0, inputArr1.length - 1)

inputArr1.splice(searchKey1, 1);

console.log("Deleted : ", keyV1, searchKey1, inputArr1)
