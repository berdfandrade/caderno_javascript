// esse é o Hoisting. Atribuir o valor a uma variável antes de declarar ela. 

numberOne = 1; // Hoisting

console.log(numberOne + 2);

var numberOne;

// o resultado vai ser 3  
// Porém, se a gente tentasse rodar o script com let no lugar de var, ele ia dar crash. Por que? Porque o Hoisting só pode ser feito com var, e não com let ou const. 

// Mas se eu coloco o let na parte de cima do código; não vou ter o mesmo problema. Mas também, não vou ser capaz de fazer o hoisting. 

