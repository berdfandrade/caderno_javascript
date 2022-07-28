# Call

Com o método `call`, você coloca o objeto ao qual você quer que o `this` se refira. 

```javascript
const pessoa = {
    nome:'Miguel'
};
const animal = {
    nome: 'Murphy'
};

function getSomething () {
console.log(this.nome); // O this vai se referir a pessoa
}

getSomething.call(pessoa);


------------------------------------------------
bernardo@DESKTOP-KTK9OHF MINGW64 /c/caderno_javascript (main)
S node playground.js
Miguel
```

O `this` nesse caso, vai se referir a pessoa. Por isso, ele vai fazer `console.log`, o nome `Miguel`.

```javascript
const pessoa = {
    nome:'Miguel'
};
const animal = {
    nome: 'Murphy'
};

function getSomething () {
console.log(this.nome); // O this vai se referir a pessoa
}

getSomething.call(animal);

------------------------------------------------
bernardo@DESKTOP-KTK9OHF MINGW64 /c/caderno_javascript (main)
S node playground.js
Murphy
```

Da mesma forma, se fizermos se usarmos o `call`, para `animal`, vai aparecer no `console.log`, `Murphy`.

Podemos, também usar o `call`, quando a função tem argumentos. 

```javascript
const my0bj = {
    num1: 2,
    num2: 4,
};
function soma(a, b){
    console. log( this.num1 + this.num2 + a + b);
}

soma.call(myObj, 1, 5); // Aqui eu coloco o objeto que vai 
// servir de referência.

-------------------------------------------------------
bernardo@DESKTOP-KTK9OHF MINGW64 /c/caderno_javascript (main)
S node playground.js
12 
```

- É possível passar parâmetros para essa função separando-os por vírgulas.

### Apply

O método `apply`, é muito parecido com o `call`, mas a diferença é que na hora de você passa argumentos, os argumentos do `apply`, vão ser passados dentro de um array `[]`.

```javascript
const my0bj = {
    num1: 2,
    num2: 4,
};
function soma(a, b){
    console. log( this.num1 + this.num2 + a + b);
}

soma.apply(myObj, [1, 5]); 

-------------------------------------------------------
bernardo@DESKTOP-KTK9OHF MINGW64 /c/caderno_javascript (main)
S node playground.js
12 
```

### Bind

Um outro método que podemos usar para modificar o valor de `this`, é o `bind`. O `bind`, clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro. 

```javascript
const retornaNomes = function () {
    return this.nome;
};

let bruno = retornaNomes.bind({nome: 'Bruno'});

bruno();
-------------------------------------------------------
bernardo@DESKTOP-KTK9OHF MINGW64 /c/caderno_javascript (main)
S node playground.js

Bruno
```

A função `retornaNomes`, vai retornar `this.nome`, e o `bind`, vai clonar a estrutura do `retornaNomes`, e a transformar em uma variável `let`, pois declaramos dessa forma. 

E dessa forma, precisamos chama `bruno()`, como se fosse uma função. Só que ao invés de `this.nome`, ela vai chamar junto com o objeto que você passou dentro do `bind``. 


