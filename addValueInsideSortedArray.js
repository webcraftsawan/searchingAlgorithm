/**
 * Add input value in sorted array using binary search
 */
let inputArr = [10, 20, 30, 50, 60, 80, 110, 130, 140, 170]

let keyV = 9

function binarySearch(arr, x, low, high) {

    var mid = parseInt((low + high) / 2)

    if (x > arr[mid] && x < arr[high]) {

        return binarySearch(arr, x, mid + 1, high)

    } else if (x < arr[mid] && x > arr[low]) {

        return binarySearch(arr, x, low, mid - 1)

    } else {

        if (x < arr[low]) {

            return low

        } else if (x > arr[high]) {

            return high + 1

        }

        return -1

    }

}

let searchKey = binarySearch(inputArr, keyV, 0, inputArr.length - 1)

inputArr.splice(searchKey, 0, keyV)

console.log(keyV, searchKey, inputArr)