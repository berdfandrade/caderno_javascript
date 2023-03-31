

// função recebe um array e um valor de destino para ser procurado
function linearSearch(arr, target) {
    
    // loop for para percorrer o array a partir do índice 0 até o seu comprimento
    for (let i = 0; i < arr.length; i++) { 
      if (arr[i] === target) { // se o valor atual do array for igual ao valor de destino
        return i; // retorna o índice do valor encontrado
      }
    }

    // se o valor não for encontrado, retorna "Não encontrado"
    return "Não encontrado"; 
  }


  /*
      function linearSearch(arr, target): isso define uma função chamada linearSearch que recebe dois parâmetros: um array chamado arr e um valor de destino chamado target.

    for (let i = 0; i < arr.length; i++): isso define um loop for que inicializa uma variável i com o valor zero, e a cada iteração compara se i é menor que o comprimento do array arr. Se essa condição for verdadeira, o loop continua executando, incrementando i a cada iteração.

    if (arr[i] === target): dentro do loop, o código verifica se o valor atual do array na posição i é igual ao valor de destino target.

    return i;: se o valor for encontrado, a função retorna o índice i em que o valor foi encontrado.

    return "Não encontrado";: se o loop terminar sem encontrar o valor de destino, a função retorna -1, indicando que o valor não foi encontrado.

Esse algoritmo percorre cada elemento do array arr até encontrar o valor de destino ou percorrer todo o array sem encontrá-lo. A complexidade de tempo desse algoritmo é linear, pois ele percorre cada elemento no pior caso.

*/