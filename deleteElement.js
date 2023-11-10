const arr = [1,2,3,4,5,6,7,8,9];
const positionToRemove = 5;

for(let i= positionToRemove; i< arr.length-1; i++){
    arr[i] = arr[i+1];
}
arr.length = arr.length - 1;
console.log(arr)