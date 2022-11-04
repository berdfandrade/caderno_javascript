

function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
  
    for(let i = 0; i < arr.length; i++){ // percorre o arr
      if(arr[i].indexOf(elem) == -1){ // se o não tiver, o elemento, você coloca ele, no novo arr. Ou seja, se tiver o elemento, você não coloca ele no arr. Mas a diferença aqui foi que o arr[i], já meio que percorre os dois arrays. Eu tava tentando fazer ele percorrer como se fosse uma matriz...
        newArr.push(arr[i])
      }
    }
  
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));