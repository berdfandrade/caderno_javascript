# Arrow functions

### Sintaxe:

Veja o exemplo da função abaixo. Ela retorna `"hello world"` de forma simples. 

```javascript
const helloWorld = function{
    return "hello World"
}
```

Mas ela poderia ser substituída por uma arrow function `=>`

```javascript
const helloWorld = () => {
 return "hello World"
}
```

Porém, podem ser escritas de uma forma ainda mais simples:

```javascript
const helloWorld = () => "Hello World";
```

Então, quando você tem uma linha só, você não precisa escrever o `return`, você pode somente escrever direto o que quer que a função retorne. No nosso caso vai ser `"Hello World`. 

Veja esse exemplo: 

```javascript
const soma = (a, b) =. a + b;

soma(4, 6);

// 10
```

- Caso exista apenas uma linha, pode dispensar as chaves e o `return``.

- Caso exista apenas um parâmetro, pode dispensar o parênteses `()`.

```javascript
const soma = a => a;

soma(4);

// 4
```

_Lembrando que a arrow function não faz hoisting_.

Esse é o exemplo com hoisting, mas ele não tem a arrow function.

```javascript
soma( 2, 4); // Hoisting (colocando parâmetro antes de declarar a variável)

function soma(a, b) {
    return a + b;
}
```

Esse exemplo abaixo, _não é possível_.

```javascript
soma(2, 4) // Isso é uma tentativa de Hoisting

const soma = (a, b) > a+ b;
```

A arrow function não faz hoisting, porque ela declarada dentro de uma `const`. E lembrando que `const`, não faz hoisting.

### Outras restrições das Arrow Functions.

- Os valores `this` sempre serão um objeto global. Métodos para modificar seu valor, não irão funcionar.

- Não existe objeto "arguments"

- O construtur (ex: `new MeuObjeto()`) também não pode ser utilizado. 


