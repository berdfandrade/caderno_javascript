
// função recebe um array como parâmetro
function selectionSort(arr) { 
     // loop for externo para percorrer o array
    for (let i = 0; i < arr.length; i++) {
      
    // define o índice mínimo como o índice atual do loop externo
      let minIndex = i; 
    
      // loop for interno para comparar os elementos restantes do array
      for (let j = i + 1; j < arr.length; j++) {

        // se o elemento atual for menor que o elemento mínimo atual
        if (arr[j] < arr[minIndex]) { 

            // define o novo índice mínimo como o índice atual
          minIndex = j; 
        }
      }

       // se o índice mínimo mudou, troca os valores de posição
      if (minIndex !== i) {

        // troca os valores usando destructuring assignment
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; 
      }
    }
    return arr; // retorna o array ordenado
  }