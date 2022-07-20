function returnEvenValues(array){
    let evenNums = [];
    for(let i  = 0; i < array.length; i++) {
        if(array[i] % 2 === 0){
            evenNums.push(array[i]);
        }else{
            console.log(`${array[i]}, não é par!`)
        }
   }
   console.log("Os números pares são:", evenNums);
}

array = [1, 2, 4, 8, 9, 10, 12]
returnEvenValues(array)

