# Verificador de palíndromo

### Solução 1

Criamos uma função que recebe uma string como parâmetro.

```javascript
function verificaPalindromo(string){

if(!string) return "string não existe"

// Caso o valor seja diferente de true, ou seja; 
// Empty, null ou undefined, retornamos, "string não existe."
```

O `return` sai da sua função.

```javascript
return string.split("").reverse().join()("") === string
```

O `split()` vai separar todas as letras da string e a transformar em um array. O `reverse()` vai fazer todas essas letras ficarem na ordem inversa. O `Join()` vai juntar todas as letras invertidas em uma string. Agora, o mais interessante é o `===` , que vai conferir se essa string invertida, é estritamente igual a string colocada para ser analisada pela função.

- Coloquei um `}else{` no `if statement`, para entendermos o que está acontecendo. 
- Caso a string seja diferente de um `true` retornamos `"string não existe"`. Caso contrário, retornamos a verificação do palíndromo. 

```javascript
function verificaPalindromo(string){
    if(!string){
        return "string não existe"
    }else{
        return string.split("").reverse().join("") === string
    }
```

### Solução 2

Já na solução 2, vamos fazer de outra forma. Começamos da mesma maneira:

- Se o valor for diferente de `true`, retornamos `"string não existente"`.  

```javascript
function verificaPalindromo(string){

if(!string) return "string não existe"    
```

Em seguida, eu vou fazer o `for loop` "percorrer" a string para fazer a primeira parte da verificação. Ele vai começar no índice zero, e enquanto o `[i]`  for menor que o cumprimento da string, o `for loop` continua passando pela string com o `i++`.  

Mas o interessante, é que precisamos comparar duas letras ao mesmo tempo. Porque em um palíndromo, a primeira letra é _obrigatoriamente_ igual a última. Ou seja, precisamos comparar se o primeiro carácter, é igual o último. Isso quer dizer: Se o primeiro índice é igual ao último. Então, vamos fazendo duas checagens a cada `loop`.  Como estamos fazendo duas checagens a cada loop, precisamos fazer a checagem em apenas metade da string. Por isso colocamos o `string.length /2` 

```javascript
 for (let i = 0; i < string.length / 2; i++){  
 
 // Isso vai fazer com que o `for loop` percorra a string. 
 
 } 
```

Agora, criamos um `if statement` que verifica se os dois lados que estão sendo percorridos são iguais. 

```javascript
 for (let i = 0; i < string.length / 2; i++){  
        if(string[i] !== string.length - 1 - i){
     return "não é um palíndromo"; 
 }
```

Se o caráter que está dentro do índice for diferente do seu correspondente do outro lado da string, retornamos `false`. Como vamos ver se ele é diferente do seu correspondente do outro lado da string? 

- Precisamos ver se o índice que estamos na string, é diferente do índice do outro lado. Em termos mais amplos, isso quer dizer que estamos verificando se as letras que estão sendo analisadas são diferentes. Por isso usamos o `!==`, que quer dizer __"diferente de"__ 

- O índice começa no `[0]`, mas a `length` começa no `[1]`. Isso quer dizer que quando formos passar pelo cumprimento da string, precisamos tirar um número. Então, escrevemos `string.length - 1`.  Por exemplo:
  
  - Se analisarmos a palavra "_amor_", o "a" está no índice `0` , o "m" no índice `1`, etc... Mas a `length` da string, ou seja o cumprimento, é `4`. 

- E porque colocamos o `- i`? Porque não estamos comparando ele com o `string.length - 1`, estamos comparando o `string[i]` com o cumprimento da string - 1, e subtraindo o índice que estamos agora. Porque desta forma não estamos verificando somente se a primeira letra é igual/diferente da última, e se conseguimos encontrar letras iguais. 
  
  - a palavra `otávio`, tem a mesma letra no começo e no final, porém não é um palíndromo. Por isso é importante subtrair o índice. Para verificar as letras que estão no meio das palavras.
  
  ```javascript
      for (let i = 0; i < string.length / 2; i++){  
          if(string[i] !== string[string.length - 1 - i]){
              return "Não é um palíndromo";
          }
      }
      return "É um palíndromo";
  }
  ```
  
  Agora colocamos o `string.length -1 -i` dentro de um `[]` para que ele se torne um número analisado pelo `string`. 
  
  Daí caso seja diferente, retorna `Não é um palíndromo`, caso seja igual, saímos do `for loop` e retornamos `É um palíndromo`. 
