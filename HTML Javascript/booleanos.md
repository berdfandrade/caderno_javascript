# Valores booleanos

Nos valores booleanos, ou a afirmação é verdadeira, ou ela é falsa. Ou ele vai te retornar true, ou ele vai te retonar false. 

```javascript
let validation = 3 === 0  
```

Sempre que eu faço algum tipo de comparação, ele vai me retornar algum dos dois: `true` ou `false`. Como 3 não é igual a zero, ele vai retornar `false`. 

```javascript
console.log(validation)

$ false
```

Já nesse caso, ele retorna `true`.

```javascript
let validadation = 3 === 3

console.log(validadation) 

$ true
```

Funciona para o maior ou igual também! 

```javascript
let validation_2 = 3 > 2 

console.log(validation_2) 

$ true
```

As variáveis booleanas também tem seu tipo de objeto. Nesse caso `validation.toString()`, transforma `validation` em uma string. 

```javascript
console.log(validadation.toString())
```

O interessante é: Quando eu quero retornar o contrário, eu coloco um ponto de exclamação ( `!` ) e o nome da minha variável. Daí, ele vai me retornar o contrário da minha variável:

```javascript
console.log(!validation_2)

$ false
```

Um exemplo mais óbvio disso é:

```javascript
console.log(!true)

$false

console.log(!false) // true

$ true
```
