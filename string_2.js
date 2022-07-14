let nome = 'Bernardo'

let sobrenome = "Andrade"

let concatenado = nome.concat(sobrenome) // Iteressante isso aqui... Você coloca o nome da variável + o nome da propriedade que você quer atribuir... e no parâmetro, você coloca o nome da string. 

// Mas, eu imagino que você possa atribuir outras coisas nesse parâmetro, pq já vi de relance em alguns códigos Javascript

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

console.log(concatenado)