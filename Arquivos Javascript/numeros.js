

// Números em javascript.

let num = 100 

let RobertDeNiro = num + 2

let num2 = 101

console.log(RobertDeNiro)

// Também pode fazer isso divisão, multiplicação, exponecial, etc...
// O módulo também é interessante; ele é representado pela porcentagem ( % ) 

let bob = num % 2 

let rick = num2 % 2

console.log(bob)

// No JS, também existe uma biblioteca chamada MATH, assim como em outras linguagens de programação. Essa biblioteca existe até no nosso vovô, C / C ++. >> Você usa ela, simplesmente declarando Math.

// Math é um objeto, então ele possui vários métodos. 

PI = Math.PI // Perceba que o valor de PI, já existe em Javascript. Além dele, existem muitas outros métodos! log, exponecial; seno e cossceno, também por exemplo. 
console.log(PI)

let fiveByThree = 5 / 3 
console.log(fiveByThree) 

let BradPitt = Math.floor(fiveByThree) // Esse método da biblioteca arredonda para baixo o número. Como o resultado da divisão é 1.66666666667, ele vai arredondar para 1. 
console.log(BradPitt) // No console vemos apenas o número 1! 

// Já o método ceil, arredonda o número para cima! 

let BobDylan = Math.ceil(fiveByThree)
console.log(BobDylan) // O número vai ser arredondado para cima. Ou seja, irá ser 2. 

// Mas e a porcentagem ? Bom, primeiro você faz a sua operação de números e depois concatena em uma string. Porque no Javascript, você não pode fazer isso: 

// let percent = 10% >> isso daqui não existe, ele entende que o %, é um sinal de módulo. Então, um jeito de se declarar pode ser assim:

percent = 10

// e depois você concatena com a string 

let JulianIglesias = percent + "%"

console.log(JulianIglesias) // Aqui ele vai adicionar a porcentagem depois que a conta for feita. No caso da porcentagem a conta aritimética, seria dividir o valor por 100 e fazer a conta do jeito tradicional em outra string, depois console.loggar o valor. 

// Para eu converter um número para uma string, é só usar o método toString. 

percent.toString() // Desta forma, o número 10, vai deixar de ser um número e vai virar a string "10" 



