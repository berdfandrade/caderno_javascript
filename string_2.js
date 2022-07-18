

// Propriedades fundamentais de strings pt. 2



let nome = 'Bernardo'

let sobrenome = "Andrade"

let concatenado = nome.concat(sobrenome) // Iteressante isso aqui... Você coloca o nome da variável + o nome da propriedade que você quer atribuir... e no parâmetro, você coloca o nome da string. 

// Mas, eu imagino que você possa atribuir outras coisas nesse parâmetro, pq já vi de relance em alguns códigos Javascript.

let exemplo = "blablabla" // Quando eu declaro assim, é uma string. Ou seja, tipo primitivo.

// Tipos primitivos:
// Strings, números e variáveis booleanas. 

// Porém... Quando eu declaro dessa forma:
let exemplo_2 = new String("blablabla") // Se eu verificar no console usando typeof, eu vou ver que é um objeto. (Mas é um pouco raro declarar um string dessa forma...)

// Mesmo quando você está trabalhando com valores primitivos, quando você dá um ponto ( . ) e você utiliza uma função do objeto, o Javascript vai entender, vai transformar esse valor em um objeto e vai retornar a função para você (Ex: string.length )

// E... olha que interessante! Os valores definidos pelas variáveis são iteráveis(iteration), ou seja, você pode iterar neles como se fossem arrays. Ex:

nome[0] // Isso daqui vai retornar o valor "B", porque é a primeira letra de "Bernardo"

// Mas se chamarmos a variável concatenado, ainda vamos obter o resultado 'BernardoAndrade', o nome junto. então o que podemos fazer é:

concatenado = nome + " " + sobrenome 
concatenado = nome + "\n" + sobrenome // vai criar uma nova linha entre o nome e o sobrenome, você, pode colocar mais de um /n para aumentar a quantiade de linhas...


//Mas, depois da atualização do Javascript de 2015, você pode escrever desta foma: - Que o resultado vai ser o mesmo

concatenado = `${nome} ${sobrenome}`

console.log(concatenado)


concatenado = `${nome}   

${sobrenome}` // Desta forma, você pode pular linhas



// E se eu quiser, por exemplo printar uma aspa? Desta forma:

var IagoAspas = "\"" // com essa barra, você consegue escapar, daí aparece só a aspa lá no console
// console.log(IagoAspas)

// Outra coisa que você pode fazer! 

let frase = "Olá, tudo bem?"

frase.split("") // o split, vai separar os argumentos da sua string. Nesse caso ele vai separar tudo. 

console.log(frase.split("")) // Tô só dando o console.log aqui para ver o resultado... 

// Mas, para fazer esse split de uma forma que faz mais sentido, podemos fazer o split, com o parâmetro de espaços: 

// frase.split(" ") >>> perceba o espaço!

console.log(frase.split(" "))

// Se eu quiser saber se a minha frase tem a palavra "tudo" eu uso o método includes.

console.log(frase.includes("tudo"))  // Aqui ela vai retornar a booleana; true, porque frase contém a palavra "tudo" 

// Posso perguntar também, se a frase começa com "o"

console.log(frase.startsWith("o")) // Aqui ela vai retornar a booleana true também.

// Mas nesse caso aqui, ela vai retornar false, porque a frase não começa com "r"

console.log(frase.startsWith("r")) // Isso é como se fosse uma pergunta. 

// Existe também o "endsWith", que faz a mesma coisa.

console.log(frase.endsWith("?")) // também vai retornar true. 

// Existem diversos outros métodos para strings em Javascript! Esse é interessante; Ele muda alguma parte da string com o replace.

console.log(frase.replace(",", "!")) // É simples! É só colocar o que você quer substituir, > depois uma vírgula > depois a parte nova da string. O output disso é "Olá! tudo bem ?"

let stringModificada =  (frase.replace(",", "!")) // Isso aqui vai ser uma nova string, no caso, modificada com essas características. 

console.log(stringModificada)  // Eu dou console log nela, caso queria chamar a string.


// Métodos importantes das strings:

// Concaternação; Juntar duas strings em uma, às vezes criando outra string... 
// Propriedade lenght; Conseguir verificar a quantidade de caractéres em uma string. 
// Iterabilidade; Poder iterar pela string... 
// Formatação, você pode mudar tudo para minúsculo, tudo para maiúsculo, etc..

