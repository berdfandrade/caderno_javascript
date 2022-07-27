# Arrays

_spread_: uma forma de lidar separadamente com elementos. 

O que era parte de um array se torna um elemento independente.

```javascript
function sum(x, y, z){
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers) // invocando
```

`(...)` é o spread.  Nesse caso específico, o `x` equivale ao `1`,  `y` equivale ao `2` e `z` equivale ao 3.

_rest_: combina os argumentos em um array

O que era um elemento independente se torna parte de um array.

```javascript
function confereTamanho(...args){
    console.log(args.length) // declarando 
}

confereTamanho() // 0
confereTamanho(1, 2) // 2
confereTamanho(3, 4, 5) // 3
```

Essa função vai pegar o `...args` e vai fazer um `console.log` com a length do array. 

Então, se não mandamos nada, o tamanho vai ser `0`, se mandamos dois elementos, o tamanho vai ser `2`, e assim por diante. 

A diferença entre os dois é que o __spread_ você usa quando tá invocando a função e o __rest_, você usa quando está declarando a função. 


