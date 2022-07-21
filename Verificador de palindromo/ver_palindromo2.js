

// Solução 2 

function verificaPalindromo(string){
    if(!string) return "string inexistente" // Se o valor for diferente de `true`, retornamos "string não existente". 

    // Daí, se a sgring existir, fazemos um for loop: 
    // Como uma string, é também uma lista de caracteres que estão juntos, podemos percorrer a string com um for loop.

    for (let i = 0; i < string.length / 2; i++){  // Isso vai fazer com que o `for loop` percorra a string. 
        if(string[i] !== string[string.length - 1 - i]){ // Se o caractére que está dentro do índice for diferente do seu correspondente do outro lado da string, retornamos `false`.
            return "Não é um palíndromo";
        }
    }
    return "É um palíndromo";
}

console.log(verificaPalindromo("ovo"))
