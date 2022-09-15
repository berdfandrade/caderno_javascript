
function findOutlier(arr){
      
    // Verifica se o array é par
    for(let i = 0; i < arr.length; i++){
        if(arr % 2 === 0 || arr[i] % 2 > 0){
            console.log(arr, arr.pop(i));
    }else{
        for(let j = 0; j > arr.length; j++){        
            console.log(arr, arr.pop(j));
        }
    }
} 
}

console.log(findOutlier[2, 4, 6, 7, 18, 22]);