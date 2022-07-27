## While

Executa instruções até que a condição se torne falsa. 

```javascript
function exemploWhile(){
  let num = 0
}
 while(num <= 5){
    console.log(num);
     num ++;
 }

exemploWhile()

// 0 
// 1
// 2
// 3
// 4
// 5 
```

Então, no caso acima, o que vai acontecer é que vamos incrementando um número, até que o número seja menor ou igual a 5 `num <= 5`.

## do... while

No caso do `do... while`, ele executa a condição até que ela se torne falsa, como no caso do `while`, porém _a primeira execução sempre ocorre_. O que isso quer dizer? 

veja:

```javascript
function exemploDoWhile(){
  let num=0;
 do{
    num ++;
 } while(num <= 5)
    console.log(num);
}

exemploDoWhile()

//0
//1
//2
//3
//4
//5
```

Exemplo normal, como no caso do `while`, mas a diferença, podemos ver no exemplo a seguir:

```javascript
function exemploDoWhile(){
  let num = 6;

 do{
}
    console.log(num);
    num ++;
  } while(num <= 5)
}

exemploDoWhile()
//6
```

Primeiro ele faz o `do`, ou seja, se a primeira condição foi satisfeita, ela não rodaria a segunda, porque 6 é maior que 5. Então a parte, `while` do loop fica sem ser executada.


