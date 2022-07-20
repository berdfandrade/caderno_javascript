# Empty, undefined e null

Todos esses são valores que vão te retornar algo falso, se você for verificar eles como booleanos, vão retornar `false`.

**Mas, eles são diferentes!**!

- Quando você declara um valor como `empty`, quer dizer que você declarou aquela variável, e se ela é um número, quer dizer que você declarou ela como zero `0`. Se essa variável é uma string, quer dizer que você delcarou apenas com aspas, você não colocou nada dentro dentro daquela string `""`. Se ela é um **Array**, você só inicializou esse **Array** com colchetes `[]`. Se é um objeto, você só inicializou com as chaves `{}`.  

- Quando você declara um valor como `null`, quer dizer que você, de propósito, **não quer que aquele valor exista**. Veja na imagem acima; No Null, eu declaro "cookies", mas de propósito, não é nada.

- Já no no `undefined`, o **valor nem sequer existe**. Então por exemplo, se eu procurar por uma variável não declarada, vou ver o valor `undefined`
  
  ```javascript
  typeof acabaxi
  
  $ undefined
  ```
  
  Porém, se eu fizer isso daqui:
  
  ```javascript
  let acabaxi = ""
  
  // e depois eu chamar a variável 
  
  abacaxi
  
  $ "" // ela vai retornar uma string vazia apenas. Não vai mostrar
  // no console: undefined
  ```
  
  Se eu fizer o `typeof abacaxi`, vai ser retornado o tipo "string":
  
  ```javascript
  typeof abacaxi
  
  $ "string"
  ```
  
  Se eu "perguntar" para o console se `abacaxi === true`, ele vai retornar `false`. Maso interessante é, se eu perguntar se ele é falso:
  
  ```javascript
  abacaxi === false
  
  $ false
  ```
  
  Ele vai retornar `false` porque ele não é `false`, ele é `null`. 
  
  Porém posso fazer isso: 
  
  ```javascript
  let fruta = abacaxi
  
  $ undefined 
  
  // se eu chamar pela variável fruta, ela vai retornar null,
  // porque abacaxi foi definido anteriormente como null.
  
  fruta
  
  $ null
  ```
  
  Agora, se eu fizer isso:
  
  ```javascript
  let fruta = abacaxi === false
  
  // agora fruta retorna false.
  
  fruta 
  
  $ false
  ```
  
  Se você fizer isso, vai ter `true`, são chamados **Falsy Values**. 

- Um valor **falsy** é um valor que se traduz em falso quando avaliado em um contexto Boolean.
  
  ```javascript
  !abacaxi
  
  $ true
  ```
  
  Se você quiser verificar se uma variável não é nula; você precisar "perguntar" se essa viável **não é*** nula. Você não pode perguntar se essa variável é falsa. Pois, `false != null`.
  
  Um jeito mais fácil de lidar com a situação, é ver se essa variável é diferente de `true`. 
  
  ```javascript
  let maca
  
  !maca 
  
  $true
  
  undefined === false 
  
  $false
  ```

    Pois todos esses valores `false`, `empty`  e `undefined` são diferentes de `true`. 


