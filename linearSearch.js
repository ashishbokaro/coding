const arr = [1,2,3,4,5,6,7,8,9,11,23,24,25,26,27,10];

const valueToSearch = 10;

for(let i =0; i < arr.length;i++){
    if(arr[i]=== valueToSearch){
        console.log(i);
        break;
    }else{
        console.log('Result Not Found')
    }
}