
// function multiplyAll(arr) {
//     let product = 1;

//     for(let i = 0; i < arr.length; i++){
//         for(let j; j < arr[i].length; j++){
//             console.log(arr[i][j]);
//         }
//     }
//     return product;
//   }
  
//   multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

const arr = [[1,2], [3,4], [4,5], [9,7]];

function myArr (arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            return arr[i][j];            
        }


    }
}

myArr(arr);
