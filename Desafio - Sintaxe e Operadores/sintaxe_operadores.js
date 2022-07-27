// Primeiras variáveis... 

var num1 = "1";
var num2 = "2";

// Transformando as variáveis em integers

var num1 = parseInt(num1);
var num2 = parseInt(num2);

// Criando uma função que verifica se os números são maior/menor que 10 ou maior/menor que 20
function maior_menor(num1, num2){
    if(num1 + num2 < 10){
        return("menor que 10 e menor que 20.")
    }else if(num1 + num2 > 10 && num1 + num2 < 20){
        return("maior que 10 e menor que 20.")
    }else{
        return("maior que 10 e maior que 20.")
    }

}

// Criando uma variável que soma os dois valores

var soma = num1 + num2;

// E por último, verificamos se os números são iguais, se forem, dizemos que são iguais e prosseguimos com sua soma e com a verificação se são > 10 || < 10 && < 20 || > 20.

// Depois printamos a string com o "console.log"


if (num1 != num2){
    console.log("Os números", num1, "e", num2, "são diferentes. Sua soma é", soma, ". que é", maior_menor(num1, num2))
}else if(num1 == num2){
    console.log("Os números", num1, "e", num2, "são iguais. Sua soma é", soma, ". que é", maior_menor(num1, num2))
}







