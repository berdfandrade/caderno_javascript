## Funções em Javascript

Uma função é definida por `function`, depois seguida pelo nome da função e talvez por um parâmetro.

```javascript
function nome (parametro){
    //intruções
}
```

Uma variável criada dentro de uma função só pode ser usada dentro dessa função... Ou seja, é uma variável que funciona com o escopo de bloco. 

O `return` para de **executar a função**. E o `return` vai retornar o valor que vem depois dele. 

```javascript
function nome(parametros){
    // instruções
    return; //valor de retorno 
}
```

### Função anônima

Funções anônimas, são funções que representam expressões. Uma variável pode representar uma função.

```javascript
const soma = function (a, b){
    return a + b;
}


soma(1, 2) // 3
soma(5, 4) // 9
```

Perceba que a `const soma` é uma função que recebe os parâmetros `(a, b)`, ela não tem nome, por isso chamamos ele de função anônima. Pois na prática, mesmo ela sendo uma função, ela é tratada como uma constante. 

### Função autoinvocável

__IIFE (Immediately Invoked Function Expression)__

Uma função anônima entre parêntesis, seguida por outro par de parêntesis, que representa sua chamada. 

```javascript
(
    function(){
    let name = "Bernardo"
    return name;
}(); // Aqui você chama essa função. 


// Bernardo
```

Estamos declarando que o nome é `Bernardo`, depois disso não precisamos invocá-la. Ela já retorna o resultado imediatamente. 

Também podemos colocar parâmetros nessa função. Então dessa forma ela pode receber parâmetros diferentes. 

```javascript
(
    function(a, b){
    return a + b
}
)(1, 2); 

// 3 
```

Da mesa forma também podemos armazenar essa função autoinvocável, o resultado dela em uma constante. 

```javascript
const soma3 = (
    function(){
    return a + b;
}
)(1, 2); 


console.log(soma3) // 3
```

## Callbacks

Uma função passada como argumento para outra. Utilizando callbacks, você tem maior controle da ordem de chamadas. 

```javascript
const calc = function(operacao, num1, num2){ // operacao aqui, 
// vai ser uma função. Então ela vai excutar a operacao com esses dois 
// parâmetros, que ela também recebeu. 
    return operacao(num1, num2)
}

const soma = function(num1, num2){
    return num1 + num2;
}
const sub = function(num1, num2){
    return num1 - num2
}
const resultSoma = calc(soma, 1, 2);
const resultSub = calc(sub, 1, 2);

console.log(resultSub); // -1
console.log(resultSoma); // 3
```




