# Switch/case

O switch/case equivale a uma comparação de tipo e valor (===). Sempre precisa de um valor "default". E é Ideal para quando se precisa compara muitos valores.

```javascript
function getAnimal(id){
  switch(id){
    case1:
      return"cão";
    case2:
      return"gato";
    case3:
      return"pássaro";
    default:
      return"peixe";
 }
}
getAnimal(1)// cão
getAnimal(4)// peixe
getAnimal("1")// peixe
```

Bom, aí podemos ver que funciona da seguinte forma; Caso o `id` seja `1`, retornamos `"cão"`, caso seja `2`, retornamos `"gato"`. É como se fosse um `if/else` misturado com objetos.   E temos também o `default`, que funciona como um valor default. Ou seja, quando não se colocar nenhum valor que foi definido anteriormente pelo case, ele vai retornar o valor `default`,  que no caso do exemplo acima é `"peixe"`. 


