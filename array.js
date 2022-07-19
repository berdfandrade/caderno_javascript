

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

array.unshift(1)

// O array possui iterabilidade, ou seja você pode fazer operações em cada um dos elementos do array. 
// Por exemplo: 

for(let i = 0; i < array.length; i++){
    console.log(array[i]) 
}
// aqui eu consigo dar um console.log para cada elemento do array! 

// O array possui vários métodos! Se você der um `array.` vão aparecer diversos métodos. 

// Existe o `array.includes()` Com ele você pode verificar se no seu array tem algum número que você 
// definiu como parâmetro. Por exemplo

console.log(array.includes(23)) // Aqui ele vai retornar `false`, 
// porque não existe o número 23 dentro desse array.

// Se eu quiser saber se todos os itens dentro do array são iguais a 5, por exemplo: 

array.every(item => item === 3) // Ele vai retornar falso, porque não são 
// todos os itens dentro do array que são iguais a 3.

// Mas eu posso verificar se algum item dentro do array é igual a 3.

array.some(item => item === 3) // aqui ele retorna 3, porque 
// existe um item dentro do Array que é igual a  3.

// Posso também reverter a ordem do array, como o `reverse`

array.reverse()

console.log(array)