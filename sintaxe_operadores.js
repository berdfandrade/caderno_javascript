var num1 = "1"
var num2 = "2"

parseInt(num1)
parseInt(num2)

var soma = num1 + num2

function log(){
    if (num1 == num2){
        console.log('Os números não podem ser iguais')
    }else{
        console.log(soma)
    }

}


if(soma >= 10){
    soma = "maior que 10"
}else if(soma >= 20){
    soma = "maior ou igual a 20"
}
