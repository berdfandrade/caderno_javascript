# For (loop)

Loop dentro de elementos iteráveis __(arrays, strings)__.

```javascript
function multiplica Por Dois(arr){
  let multiplicados=[];

  for(let i = 0; i < arr.length; i++){
    multiplicados.push(arr[i] * 2);
 }

  return multiplicados;
}
const meus Numeros = [2, 33, 456, 356, 40];

multiplicaPor Dois(meus Numeros);
//[4,66,912,712,80]
```

Como o `for` funciona? Você coloca o `for` e entre parênteses `()`. E no nosso caso acima o que estamos descrevendo é. O índice inicializa com `0` e enquanto ele for menor que o cumprimento do array, adicionamos um número. 

Inicializamos ele como `0`, porque em um array o índice sempre começa no zero. No caso do `multiplicados.push(arr[i] * 2);` o que vai acontecer é que vamos multiplicar o índice que aparece no array, por 2 `* 2`.

## For... in

É um loop entre propriedades enumeráveis de um objeto. 

```javascript
function for
  for(prop in obj){
    console.log(prop);
 }
}
const meuObjeto={
  nome:"João",
  idade:"20",
  cidade:"Salvador"
}
for InExemplo(meuObjeto);
// nome
// idade
// cidade
```

Esse `for`, vai fazer com que ele itere pelos valores do objeto. Mas o mais importante de manter na sintaxe, é o `for` algo `in` algo. Por exemplo, o parâmetro `prop` foi improvisado. 

```javascript
InExemplo(obj){function for
for(prop in obj){
console.log(obj[prop]); 
 }
}

const meuObjeto = {
nome:"João",
idade:"20",
cidade:"Salvador"
}

for InExemplo(meuObjeto);
// João
// 20
// Salvador
```

Nesse exemplo acima, a única diferença é que caso você queira acessar as propriedades dos objetos, o que você vai fazer é, colocar `(obj[prop])`,  então ele vai retornar as propriedades; `joão`, `20`, `Salvador`. Ao invés de retornar `nome`, `idade`, `cidade`. 

Nesse caso abaixo, o que o `for loop` vai fazer, vai ser iterar pela string. Se eu colocar `abaxaxi`, ele vai iterar pela string abacaxi, e fazer `console.log` de cada letra. 

```javascript
function logLetras(palavra){
  for(letra of palavra){
    console.log(letra);
}
 }
const palavra="abacaxi";
logLetras(palavra)

//a
//b
//a
//C
//a
//i
```

Outro exemplo: 

```javascript
function logNumeros(nums){
  for(num of nums){
    console.log(num);
}
 }
const nums=[30,20,233,2];
logLetras(nums)

// 30
// 20
// 233
// 2
```
