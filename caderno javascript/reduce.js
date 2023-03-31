

// Método reduce()...

const foguetes = [

    { pais: "Brasil", lancamentos: 25 },
    { pais: "Dinamarca", lancamentos: 50 },
    { pais: "França", lancamentos: 8 },
    { pais: "Japão", lancamentos: 15 },
    { pais: "EUA", lancamentos: 65 },
    { pais: "Bélgica", lancamentos: 12 },
    { pais: "Canadá", lancamentos: 0 },
    { pais: "Irã", lancamentos: 523 },
]

const lancamentosTotal = foguetes.reduce(( preVal, elem )=> preVal + elem.lancamentos, 0);

console.log(lancamentosTotal); 