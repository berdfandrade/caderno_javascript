# Verificador de palíndromo

### Solução 1

Criamos uma função que recebe uma string como parâmetro.

```javascript
function verificaPalindromo(string){

if(!string) return "string não existe"

// Caso o valor seja diferente de uma string, ou seja; 
// Empty, null ou undefined, retornamos, "string não existe."
```

O `return` sai da sua função.

```javascript
return string.split("").reverse().join()("") === string
```

O `split()` vai separar todas as letras da string e transformá-la em um array. O `reverse()` vai fazer todas essas letras ficarem na ordem inversa. O `Join()` vai juntar todas as letras invertidas em uma string. Agora, o mais interessante é o `===` , que vai conferir se essa string invertida, é estritamente igual a string colocada para ser analisada pela função.

- Coloquei um `}else{` no `if statement`, para entedermos o que está acontecendo. 
- Caso a string seja diferente de um `true` retornamos `"string não existe"`. Caso contrário, retornamos a verficação do palíndromo. 

```javascript
function verificaPalindromo(string){
    if(!string){
        return "string não existe"
    }else{
        return string.split("").reverse().join("") === string
    }
```

### Solução 2
