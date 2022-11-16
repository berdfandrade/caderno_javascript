// Se antes usaríamos uma funçãoo anônima dessa forma:

const myFunc = function() {
    const myVar = "value";
    return myVar;
}

// Com a arrow function, podemos escrever dessa forma:

const myFunction = () => "Value "; 

// Arrow function com parâmetros...

const doubler = (item) => item * 2;
console.log(doubler(4)); 

