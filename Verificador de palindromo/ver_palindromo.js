

// Verificador de palíndromo. 

// Criamos uma função que recebe uma string como parâmetro. 

function verificaPalindromo(string){
    if(!string){
        return "string não existe"
    }else{
        return string.split("").reverse().join("") === string
    }

    
    // Caso o valor seja diferente de uma string, ou seja; Empty, null ou undefined, retornamos. 
    // O return saí da sua função.
     
    // O split() vai separar todas as letras da string e 
    // transformá-la em um array.

    // O reverse() vai fazer todas essas letras ficarem na
    // ordem inversa. 

    // O Join() vai juntar todas as letras invertidas em uma string. 

    // Agora, o mais interessante é o ===, que vai conferir
    // se essa string invertida, é estritamente igual a 
    // string colocada para ser analisada pela função. 

}

// Como ele não tem o console.log, eu preciso fazer um console.log e usar uma palavra de parâmetro, para verificar se é um palíndromo.

console.log(verificaPalindromo("bernardo"));