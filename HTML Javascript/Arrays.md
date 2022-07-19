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

 O array possui iterabilidade, ou seja você pode fazer operações em cada um dos elementos do array. Por exemplo:

```javascript
for(let i = 0; i < array.length; i++){
    console.log(array[i]) // Aqui eu consigo dar um console.log para 
// cada elemento do Array
}

$ 1
$ 4
$ 6
$ 12
```

- O array possui vários métodos! Se você der um `array.` vão aparecer diversos métodos.

Existe o `array.includes()` Com ele você pode verificar se no seu array tem algum número que você definiu como parâmetro. Por exemplo:

```javascript
console.log(array.includes(23)) // Aqui ele vai retornar `false`,
// porque não existe o número 23 dentro desse array.

$ false 
```

Se eu quiser saber se todos os itens dentro do array são iguais a 5, por exemplo:

```javascript
array.every(item => item === 3) // Ele vai retornar falso, porque não são
// todos os itens dentro do array que são iguais a 3.


$ false
```

Mas eu posso verificar se algum item dentro do array é igual a 3.

```javascript
array.some(item => item === 3) // aqui ele retorna true, porque 
// existe um item dentro do Array que é igual a  3.

$ true
```

Posso também reverter a ordem do array, com o `reverse`.

```javascript
array.reverse()

$ [12, 6, 4, 1]
```

Além desse, existem muitos outros métodos para o Array. O Array é uma das estruturas de dados mais interessantes do `javascript`. 
