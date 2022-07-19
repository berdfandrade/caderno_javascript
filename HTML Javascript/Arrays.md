# Arrays

O Array é uma lista iterável de elementos.

- ele tem a propriedade length, e um index. Esse index sempre começa no zero.

- Para inicializar um Array, é só você abrir e fechar um colchetes:

Aqui estamos criando uma variável que é um Array, mas imagino que possamos criar uma constante que é um Array.

```javascript
let array = []
```

O método `.push()`, coloca elementos dentro de um Array:

```javascript
array.push(3, 4, 6, 12) 

console.log(array)

$ [3, 4, 6, 12] 

array.push(2) // Coloca o número 2 dentro do Array. 
// Vai ser colocado no final do Array

console.log(array) 

$ [3, 4, 6, 12, 2]
```

Se eu quiser tirar um element do Array, eu posso usar o método  `.pop()`

```javascript
let array_2[3, 4, 2]

array.pop(2)
```

Se eu escrevesse `.pop()` sem o 2 como parâmetro, ele iria tirar o elemento que estivesse no final do Array.

```javascript
console.log(array_2) 

$ [3]
```

O método `.shift`, tira o elemento do começo do array, da mesma forma que o `.pop()`  tira do final.

```javascript
array.shift()

console.log(array) 

$ [4, 6, 12, 2]
```
