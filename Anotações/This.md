# This

A palavra reservada _this_ é uma referência de contexto. No exemplo, `this` refere-se ao objeto pessoa.

```javascript
const pessoa={
  firstName:"André",
  lastName:"Soares",
  id:1,
  fullName:function(){
    return this.firstName + this.lastName;
 },
  getId:function(){
    return this.id;
 }
};

pessoa.fullName();
//"André Soares"
pessoa.getId();
//1
                                   
```

`this`, vai se referir a constante `pessoa`, então, ele vai pegar o `pessoa` `firstname` e concatenar com o `pessoa` `lastname`. 

Quando declaramos o `this` dentro de um objeto, ele vai se referir ao objeto. 

### This: o que é?

Seu valor pode mudar de acordo com o lugar no código onde foi chamado. 

| Contexto              | Referência                             |
|:---------------------:|:--------------------------------------:|
| Em um objeto (método) | Próprio objeto dono do método          |
| Sozinha               | Objeto global (em navegadores, window) |
| Função                | Objeto global                          |
| Evento                | Elemento que recebeu o evento          |

Quando o `this`, é usado sozinho como objeto em um navegador, ele vai fazer referência a janela daquele navegador. 

Quando é usado em uma função, ele possui o comportamento que vimos anteriormente. 

Quando é usado em um evento, ela vai se referir ao elemento que recebeu aquele evento. Veremos o exemplo depois. 

#### Fora de função

Perceba que o `this` retornou um objeto vazio.

```javascript
console.log(this);

----------------------------------------------
bernardo@DESKTOP-KTK90HF MINGW64/c/caderno_javascript (main) 
// No caso esse é um exemplo 
// do terminal rodando
$node playground.js
{}


```

#### Dentro de uma função

Dentro de uma função, ele vai retornar o que está no exemplo do console abaixo: 

```javascript
(function()
    console.log(this);
)();

---------------------------------------------------------
bernardo@DESKTOP-KTK90HF MINGW64/c/caderno_javascript (main) 
$ node playground.js 
<ref *1> Object [global]{
    global: [Circular *1]
(...)
}
```

#### Dentro de um objeto (método)

Dentro de um objeto, o `this` vai se referir ao objeto. No caso aqui é `pessoa`.

```javascript
const pessoa = {
    firstName: 'Diego',
    lastName: 'Vieria',
    getFullName: function(){
        console.log(`${this.firstName)} ${this.lastName}`)
    },
};

pessoa.getFullName();

------------------------------------------------------------
bernardo@DESKTOP-KTK90HF MINGW64/c/caderno_javascript (main) 
$ node playground.js
Diego Vieria

bernardo@DESKTOP-KTK90HF MINGW64/c/caderno_javascript (main) 
$
```

#### Em um evento HTML

Se eu clicar neste botão que eu criei em HTML, o `this`, vai logar o que significa `this`. Neste caso, ele vai se referir ao botão. 

```html
<!DOCTYPE html>
<html lang ="en"
    <head>
        <title>Document</title>
    </head>
    <body>
        <button
            id="my-btn"
            onclick="console.log(this)"
            >click me!</button>

    </body>
</html>
```


