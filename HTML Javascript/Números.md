## Números em javascript 

- Os números são bem básicos, existem os números `inteiros`e os números `decimais`. Os inteiros são: `1,2,3,4,5(...)`, enquanto os números `decimais` são `3.14, 5.356, 1.2 (...)` 

- O número é declarado sem áspas e você pode fazer operações aritiméticas com ele!
```
let num = 1
```

## Exemplos
```
let num = 100 

let RobertDeNiro = num + 2

let num2 = 101

console.log(RobertDeNiro)
```
Também pode fazer isso `divisão`, `multiplicação`, `exponecial`, etc...
// O módulo também é interessante; ele é representado pela porcentagem `%`.

```
let bob = num % 2 

let rick = num2 % 2

console.log(bob)
```
No Javascript, também existe uma biblioteca chamada `Math`, assim como em outras linguagens de programação. Essa biblioteca existe até no nosso vovô, C / C ++. Você usa ela, simplesmente declarando `Math`.

`Math` é um objeto, então ele possui vários métodos.
 
```
PI = Math.PI 
```
Perceba que o valor de PI, já existe em Javascript. Além dele, existem muitas outros métodos! log, exponecial, seno, cossceno e vários outros!

```
console.log(PI)

$ 3.141592653589793

```
Podemos também fazer divisões!

```
let fiveByThree = 5 / 3 

console.log(fiveByThree) 

$ 1.66666666667
```
 
O método `Math.floor` arredonda para baixo o número. Como o resultado da divisão é 1.66666666667, ele vai arredondar para 1. 

```
let BradPitt = Math.floor(fiveByThree)

console.log(BradPitt) 

$ 1

```

No console vemos apenas o número 1! 

Já o método `Math.ceil`, arredonda o número para cima! 

```
let BobDylan = Math.ceil(fiveByThree)

console.log(BobDylan)

$ 2
```
O número vai ser arredondado para cima. Ou seja, irá ser 2. 

Mas e a porcentagem? Bom, primeiro você faz a sua operação de números e depois concatena em uma string. Porque no Javascript, você não pode fazer isso:

```
let percent = 10% 
// Isso daqui não existe. 
O Javascript entende que o %, é um sinal de módulo.
```
Então, um jeito de se declarar pode ser assim:

```
percent = 10
```
Depois você concatena com a string:

```
let EnriqueIglesias = percent + "%"

console.log(EnriqueIglesias) 

$ 10%
```

Aqui ele vai adicionar a porcentagem depois que a conta for feita. No caso da porcentagem a conta aritimética, seria dividir o valor por 100 e fazer a conta do jeito tradicional em outra string, depois "console.loggar" o valor. 

Para converter um número para uma string, é só usar o método `toString()`. 

```
percent.toString() 

```
Desta forma, o número 10, vai deixar de ser um número e vai virar a string "10". 
