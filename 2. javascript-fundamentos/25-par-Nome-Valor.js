//par nome/valor
const saudacao = 'Opa'; //contexto lexico 1

function exec(){
    const saudacao = 'Fala corno'; //contexto lexico 2
    return saudacao;
    /**
     * vai procurar o contexto mais restrito e retornar 
     * se não achar dentro da function vai pegar no contexto maior
     */
}

//objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Rua muito legal",
        numero: 123
    },
}

console.log(saudacao);
console.log(exec());
console.log(cliente);