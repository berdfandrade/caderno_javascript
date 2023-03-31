# Ordenação Por Seleção

- `function selectionSort(arr)`: isso define uma função chamada `selectionSort` que recebe um parâmetro: um array chamado `arr`.

- `for (let i = 0; i < arr.length; i++)`: isso define um loop `for` que inicializa uma variável `i` com o valor zero, e a cada iteração compara se `i` é menor que o comprimento do array `arr`. Se essa condição for verdadeira, o loop continua executando, incrementando `i` a cada iteração.

- `let minIndex = i;`: dentro do loop externo, define uma variável `minIndex` como o índice atual `i`.

- `for (let j = i + 1; j < arr.length; j++)`: dentro do loop externo, define outro loop `for` que inicializa uma variável `j` como o valor de `i + 1`, ou seja, começa a comparar os elementos restantes do array a partir da posição seguinte ao índice atual `i`.

- `if (arr[j] < arr[minIndex])`: dentro do loop interno, verifica se o elemento atual `arr[j]` é menor que o elemento mínimo atual `arr[minIndex]`.

- `minIndex = j;`: se o elemento atual for menor que o mínimo atual, define o novo índice mínimo como o índice atual `j`.

- `[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];`: fora do loop interno, se o índice mínimo mudou, troca os valores de posição usando destructuring assignment, colocando o valor mínimo na posição atual `i` e o valor anterior na posição anteriormente ocupada pelo valor mínimo.

- `return arr;`: retorna o array ordenado.

Esse algoritmo funciona selecionando o elemento mínimo do array restante a cada iteração do loop externo e trocando-o de posição com o elemento atual do loop externo, até que todo o array esteja ordenado. A complexidade de tempo desse algoritmo é quadrática, pois ele compara todos os pares de elementos no pior caso.
