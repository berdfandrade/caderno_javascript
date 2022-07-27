# Objetos

Um objeto é uma coleção de dados e/ou funcionalidades relacionadas (que geralmente consistem em diversas variáveis e funções — que são chamadas de propriedades e métodos quando estão dentro de objetos).

- Objetos são declarados com essa chave `{}`.

```javascript
let obj = {} 

console.log(typeof obj)

$ object 
```

Se eu criar uma chave chamada __"Bernardo"__, o código vai armazenar na memória do objeto a chave `Bernardo`.

```javascript
obj.name = "Bernardo"

console.log(obj)

$ object
{ name: 'Bernardo' }
```

Agora se eu quiser colocar mais uma chave, eu coloco ela no objeto.

```javascript
obj.age = "26"

console.log(obj)

$ { name: 'Bernardo', age: '26' }
```

Se eu quiser conferir os valores do objeto, eu posso fazer isso:

```javascript
console.log(Object.values(obj))

$ [ 'Bernardo', '26' ]
```

Mas se eu quiser saber quais são as chaves, eu dou um `Object.keys()`

```javascript
console.log(Object.keys(obj))

$ [ 'name', 'age' ]
```

Se eu quiser declarar um objeto e declarar minhas chaves e valores junto com o objeto, eu posso fazer:

```javascript
let pessoa = {

nome : 'Bernardo',
idade : 26,
endereco : 'rua 2'
}

console.log(pessoa) // Vai ter todas as chaves e valores atribuídas
// a esse objeto

$ { nome: 'Bernardo', idade: 20, endereco: 'rua 2' }
```

Se eu quiser o nome, eu posso "pedir": 

```javascript
console.log(pessoa.nome)


$ Bernardo 

// também pode ser feito dessa forma: 

console.log(pessoa["nome"])


$ Bernardo 
```

Posso atribuir mais uma chave/valor desta forma, se eu quiser:

```javascript
pessoa["NumeroDeIrmaos"] = 3

// E quando eu chamar o objeto...

console.log(pessoa)

$ { nome: 'Bernardo', idade: 26, endereco: 'rua 2', NumeroDeIrmaos: 3 }
```

Aqui eu posso criar uma chave, já com um valor específico:

```javascript
let mae = "NomeDaMae"

pessoa[mae] = "Rosa"
```

 Depois, eu consigo colocar o valor "Maria" na chave `mae`, que por sua vez chama `"NomeDaMae"`. Se eu der um `console.log`  no objeto pessoa, eu vou ver: 

```javascript
console.log(pessoa)

$ {
 nome: 'Bernardo',
 idade: 26,
 endereco: 'rua 2',
 NumeroDeIrmaos: 3,
 NomeDaMae: 'Rosa'
}
```
