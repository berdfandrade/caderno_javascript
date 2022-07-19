

// O Array é uma lista iterável de elementos.
// ele tem a propriedade length, e um index. Esse index sempre começa no zero. 

// Para inicializar um Array, é só você abrir e fechar um colchetes:

let array = [] // Aqui estamos criando uma variável que é um Array, mas imagino que possamos criar uma constante que é um Array. 

array.push(3, 4, 6, 12) // O método .push(), coloca elementos dentro de um Array... 

console.log(array)

array.push(2)

console.log(array) // Aqui vai ter também o número 2 dentro do Array. 

// Se eu quiser tirar um element do Array, eu posso usar o método .pop()

array.pop(2) // Se eu escrevesse .pop() sem o 2 como parâmetro, ele iria tirar o elemento que estivesse no final do Array. 
 
console.log(array) // Neste caso, vai aparecer apenas o elemento 3 dentro do Array. 

array.shift() // O método .shift, tira o elemento do começo do array, da mesma forma que o .pop() tira do final. 

// Da mesma forma o array.unshift, adiciona no começo da lista.

console.log(array)