// Primeiras variáveis... 

var num1 = "1"
var num2 = "2"

// transformando as variáveis em integers

parseInt(num1)
parseInt(num2)

// Criando uma variável para a soma das outras duas variáveis. 
var soma = num1 + num2

// Função que verifica se os dois números colocados são iguais, ou maior/menor que 10 ou 20 

function log(){
    if (num1 == num2){
        console.log('Os números não podem ser iguais')
}

// consertar esse if statement aqui, mas lembrar de usar o pipe para verificar se um número é maior ou igual a 10/20 etc... 
if(soma >= 10 || soma <= 20){
    soma = "maior que 10"
}else if(soma >= 20){
    soma = "maior ou igual a 20"
}
