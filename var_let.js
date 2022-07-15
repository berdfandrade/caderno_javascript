


var a = 1;
var b = 2;

if(a === 1){
    var a = 11;
    let b = 22;

    console.log(a) // O escopo é global
    console.log(b) // O escopo é dentro do do bloco if
}

// Perceba que o let "morreu depois que saiu do bloco if"  

console.log(a); // 11
console.log(b); // 2

 