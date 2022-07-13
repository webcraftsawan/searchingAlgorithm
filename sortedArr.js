let n = 6
let arr = [10, 2, 50, 12, 48, 13]
let k1 = 2
let k2 = 6
function sortArray(array, length) {
    for(var i=0; i <= length; i++ ) {
        for(var j=i+1; j<= length; j++) {
             if(array[j]) {
                 if(array[i] > array[j]) {
                     var temp = array[i]
                     array[i] = array[j]
                     array[j] = temp
                 }
            }   
        }
    }
    return array
}

function sumOfTwoElement(sortArr, length) {
    let sum = 0
    for(k=0; k <= length; k++) {
        if(k1-1 < k && k2-1 > k) {
            sum = sum + sortArr[k]
        }
    }
    return sum
}

let sortedArray = sortArray(arr, n)

let sumOfTwoEl = sumOfTwoElement(sortedArray, n)

console.log(`Sum of elements between k1'th and k2'th smallest elements is ${sumOfTwoEl}`)
// Output : Sum of elements between k1'th and k2'th smallest elements is 73