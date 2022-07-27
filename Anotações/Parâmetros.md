# Parâmetros

Valores padrões dos parâmetros em Javascript. 

Quando temos uma função em Javascript, e não mandamos um parâmetro, esse parâmetro tem um valor padrão. 

- Pré ES2015:
  
  ```
  function exponencial(array, num){
      if (num === undefined){
      num = 1;
  }
  
  const result = []
  
  for(let i = 0; i , array.length; i++){
      result.push(array[i) ** num);
  }
      return result;
  }
  
  exponencial([1, 2, 3, 4])
  // [1, 2, 3, 4]
  
  exponencial([1, 2, 3, 4], 4)
  // [1, 8, 27, 64] 
  ```

- Pós-ES2015: 

```javascript
function exponecial(array, num = 1){ // Depois do ES2015, você não
// precisa mais definir o valor do num em um if statement como
// exemplo de cima. Pode apenas declar o num = 1 dentro do parâmetro. 
const result = [];

for(let i =0; i < array.length; i++){

}
 return result;
}

exponencial([1, 2, 3, 4])    
// [1, 2, 3, 4]

exponencial([1, 2, 3, 4], 4)
// [1, 8, 27, 64]

```

Colocamos o `num = 1`, porque assim ele se torna o valor default para aquele parâmetro. 

## Objeto "arguments"

Um array com todos os parâmetros passados quando a função foi invocada. 

```javascript
function findMax(){
    let max = -Infinity;
    
    for(let i = 0; < arguments.length; i++){
    if (arguments[i) > max{
    
    }

   }
    return max;
}
```

Na função `findMax()`, queremos encontrar o maior número enviado como argumento dentro dessa função. Porém, não temos nenhum argumento, e isso pode significar, o que não temos nada, ou que temos um número indefinido de argumentos. A gente não sabe quantos argumentos vão vir.

Então temos esse objeto `arguments`, e com ele, podemos acessar a lista de todos os parâmetros que foram enviados. 




