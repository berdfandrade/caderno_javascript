

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

// se eu quiser declarar um objeto e declarar minhas chaves e valores junto com o objeto, eu posso fazer:

let pessoa = {
    nome : 'Bernardo',
    idade : 26,
    endereco : 'rua 2'
}

console.log(pessoa)

// se eu quiser o nome, eu posso "pedir"

console.log(pessoa.nome) 

// posso atribuir mais uma chave/valor desta forma, se eu quiser:

pessoa["NumeroDeIrmaos"] = 3

console.log(pessoa)

// Aqui eu posso criar uma chave, já com um valor específico. 
let mae = "NomeDaMae"

// Depois, eu consigo colocar o valor "Maria" na chave mae, que por sua vez chama "NomeDaMae"

pessoa[mae] = "Maria"

console.log(pessoa)