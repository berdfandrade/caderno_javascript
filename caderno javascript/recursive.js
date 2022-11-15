function countdown (i){

    // Função
    console.log(i)

    // Base case >> Serve para garantir que a função não entre em loop infinito. Então estabelecemos uma condição para a função acabar.  
    if(i <= 1){
        return;

    // Recursive case >> É quando a função se chama... E se ela se chama temos que colocar o parâmetro nela novamente. O que a função countdown faz? Ela faz o console.log de i. Então ela vai fazer o console log de i até que a condição seja satisfeita. A condição é o base case. 
    }else{
        countdown(i - 1);
    }
}

countdown(6); 