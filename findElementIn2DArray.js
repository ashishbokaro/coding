var searchMatrix = function(matrix, target) {
    let i =0;
    let j = matrix[0].length -1;

    while(i< matrix.length && j>=0){
        if(matrix[i][j]=== target){
            return true;
        }else if(target < matrix[i][j]){
            j--;
        }
        else{
            i++
        }
    }
    return false

};
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

searchMatrix(matrix,target)