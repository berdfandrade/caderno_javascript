

// Objetos são estruturas do tipo; Chave, valor. 

let obj = {} // Objetos são declarados com essa chave `{}`

console.log(typeof obj)

// Vamos criar uma chave chamada Bernardo
obj.name = "Bernardo"

console.log(obj)

// Agora se eu quiser colocar mais uma chave, eu coloco ela no objeto.

obj.age = "26"

console.log(obj)

// Se eu quiser conferir os valores do objeto, eu posso fazer isso:

console.log(Object.values(obj))

// Mas se eu quiser saber quais são as chaves, eu dou um `Object.keys()`

console.log(Object.keys(obj))
