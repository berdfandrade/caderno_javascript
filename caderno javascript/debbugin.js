
function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    let row = [];

    for(let i = 0; i < m; i++){
            newArray.push(row)
    }
    
    let faz_array = newArray;

        for(let j = 0; j < n; j++){
            row.push(0); 
    }

    return faz_array;
}

let matrix = zeroArray(3, 2);
console.log(matrix);