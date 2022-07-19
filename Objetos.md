## Objetos

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
```
