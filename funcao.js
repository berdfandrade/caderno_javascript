



var firstName = 'João'
let lastName = 'Souza'

if(firstName === 'João'){ // Por via de comparação, é bom usar o === 
    var firstName = 'Pedro';
    let lastName = 'Silva'; // o lastName não está sendo utilizado... Porque com o let, não estamos usando o nome como valor global. 
    lastName = 'Benassi'// Eu não posso redeclarar, mas posso reatribuir... Ou seja, quando eu escrevo só lastName = 'Benassi', sem o let, assim acontece a reatribuição...

    console.log(lastName);
}

console.log(firstName, lastName);




