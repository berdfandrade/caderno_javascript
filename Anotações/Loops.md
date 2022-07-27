# Loops

### If/else

A condicional **if**  é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de **else**.

```javascript
function numeroPositivo(num){
    let resultado;
    
    if(num < 0){ // condição
        resultado = false: // declaração 1 (dentro de if); Ocorre caso a
// condioção seja verdadeira. 
    }else{
        resultado = true; // declaração 2 (dentro de else): Ocorre caso a
// condição seja falsa
}
    return resultado;
}

numeroPositivo(2)
// true

numeroPositivo(-9)
//false
```

Se a declaração 1 for verdadeira, eu executo a condição 1, caso o contrário, eu executo a condição 2 `true/false`.

Também temos outros exemplos:

```javascript
function numeroPositivo(num){
  let resultado;
  const ehNegativo = num < 0;
  if(ehNegativo){
    resultado = false;
}
  }else{
 }
    resultado = true;
  return resultado;
```

Aqui, criamos uma constante que é `num < 0` que vai fazer o "trabalho" do que o `if statement` estava fazendo. Daí, logo em seguida, o `if` só verifica o parâmetro que foi colocado. Se for menor que `0`, ele retorna `false`. 

E aqui, temos um exemplo ainda mais simples:

```javascript
function numeroPositivo(num){
  const ehNegativo = num < 0;
}
  if(ehNegativo){
    return false;
  }
  return true;
```

Fazemos o mesmo que anteriormente, porém, dessa vez não colocamos um `else`, porque caso o numero seja menor que `0`, não há a necessidade de colocarmos "caso contrário" > "faça isso", porque o próprio `return`, já sai da função. E, quando saímos da função, podemos retornar `true`, pois sabemos que o número já é maior que `0`. 

Uma coisa interessante que podemos fazer, é alinhar `if's` dentro um do outro. Vemos aqui quando colocamos essas duas condicionais. `ehNegativo` e `maiorQueDez`. Elas vão fazer o que os nomes sugerem; _verificar se o número é negativo_ e _maior do que 10_.

- Javascript *não tem elseif*, as palavras sempre estão espaçadas. 

```javascript
function numeroPositivo(num){
  const ehNegativo = num < 0;
  const maiorQueDez = num > 10;
} 
  if(ehNegativo){
    return"Esse número é negativo!";
  }else if(!ehNegativo && maiorQueDez){
    return"Esse número é positivo e maior que 10!"
 }
  return"Esse número é positivo!";
```

Se for negativo `num < 0`, damos `console.log` na string: `Esse número é negativo!`. 

em `!ehNegativo`, temos o operador lógico, _se ele é o contrário de_ `num < 0`, ou seja  positivo `&&` e `num > 10`, damos `console.log` na string: `Esse número é positivo e maior que 10`. 

# 
