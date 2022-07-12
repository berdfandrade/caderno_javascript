let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber'); // Eu tinha escrito essa constante como variável anteriormente, mas tinha escrito como se fosse uma constante. O tutorial falava que era uma variável :( Então meu raciocínio estava correto. 

// O código estava bugando porque; no get emlement by ID, o elemento tem que ser escrito com áspas. 

function increment() {
    count++;
    CURRENT_NUMBER.innerHTML = count;
    // O motivo pelo qual o innerHTML não encontrava o CURRENT_NUMBER, é porque precisava da porcaria das áspas, que não foram mostradas no fuckin tutorial. 
}

// Count++ é melhor e mais eficiente que "currentNumber + 1 ou no caso da decrement, currentNumber - 1. 


function decrement() {
    count--;
    CURRENT_NUMBER.innerHTML = count;
}

