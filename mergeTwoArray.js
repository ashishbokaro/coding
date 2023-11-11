const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];
const mergedArr = [];
for(let i =0;i<arr1.length; i++){
 mergedArr.push(arr1[i])
}
for(let i =0;i<arr2.length; i++){
    mergedArr.push(arr2[i])
   }

   console.log(mergedArr)

   function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;

    // Compare elements of both arrays and merge them
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // Append remaining elements from both arrays
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

// Example usage:
const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];
const result = mergeSortedArrays(array1, array2);
console.log(result);

   /// Second process

