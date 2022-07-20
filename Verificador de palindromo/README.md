Criamos uma função que recebe uma string como parâmetro.

```javascript
function verificaPalindromo(string){

if(!string) return;

// Caso o valor seja diferente de uma string, ou seja; 
// Empty, null ou undefined, retornamos.

```

O return sai da sua função.

```javascript
string.split("").reverse().join()("") === string
```

O `split()` vai separar todas as letras da string e transformá-la em um array. O `reverse()` vai fazer todas essas letras ficarem na ordem inversa. O `Join()` vai juntar todas as letras invertidas em uma string. Agora, o mais interessante é o `===` , que vai conferir se essa string invertida, é estritamente igual a string colocada para ser analisada pela função.

- A função fica desta forma:

```javascript
function verificaPalindromo(string){

if(!string) return;

// O return saí da sua função.

string.split("").reverse().join()("") === string

}
```
