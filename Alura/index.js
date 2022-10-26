
// O que tem um aluno? "Qual é o molde"? 
class cliente {
    nome;
    CPF; 
} 

// Propriedade, atributo, seria nome, matricula, cpf, etc... Mas isso depende da linguagem, no JS, são sinônimos. Como eu faço para criar um novo aluno? Uso o new.

const cliente_1 = new cliente();

cliente_1.matricula = 525759;
cliente_1.cpf = 09909237628;
cliente_1.curso = "cinema";
cliente_1.periodo = 5; 

// Quando eu chamo o new aluno, eu tô criando uma nova instância do aluno. >>>> INSTANCIA NOVO <INSTANCIA NOVO> 

class contaCorrente{

    agencia = 5589512; 
    _saldo = 0;


    // o This, é quando você quer usar a função recursivamente. Como se fosse; sacar(valor) = contaCorrente.saldo -= valor; É quando você referência a própria classe... 

    // Aqui eu consigo encapsular dentro de uma função... 


    sacar(valor){ 
        
        // Definição do escopo...

        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;  
            
            // No javascript, se eu não tenho um 'return', por padrão, o Javascript sempre vai devolver undefined. Diferente de C, que você declara na função int ou void para dizer se a função vai ou não retornar um inteiro. 
        }
    }

    depositar(valor){
        if(valor <= 0){
            return;// Se o if só tiver uma linha, eu posso colocar o return ao lado do if. Chamamos isso de early return. 
        }  
        // Aqui existe um else implícito; como em C. 
            this._saldo += valor; 
    } 

} 

// Em orientação a objetos, as funções se chamam métodos. 

const contaCorrente2 = new contaCorrente();

contaCorrente2.saldo += 200; // contaCorrente2.saldo = contaCorrente2.saldo + 200; 
contaCorrente2.agencia = 1001; 


contaCorrente2.depositar(500);
contaCorrente2.sacar(50); 


console.log(contaCorrente2);

